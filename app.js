/* PS4 UNLOCK FIX — firmware guide and safe hand-off to the maintained exploit host.
   The exploit chain and GoldHEN payload are served by WebKitty, not bundled here. */
const HOST_URL = "https://webkitty.arabpixel.net/";
const routes = {
  "13.02": {
    chain: "Slopkit (WebKit) + Relapse (kernel)",
    goldhen: "GoldHEN (default selection in WebKitty; firmware-specific build)",
    note: "Primeira rota de teste do projeto. O host externo detecta o firmware real do PS4."
  },
  "14.00": {
    chain: "Slopkit (WebKit) + Afterglow (kernel)",
    goldhen: "GoldHEN (default selection in WebKitty; build com suporte a 14.00)",
    note: "Rota separada para a segunda etapa. Ainda precisa de teste real em um PS4 14.00."
  }
};
const $ = id => document.getElementById(id);
function log(message, type = "INFO") {
  const p = document.createElement("p");
  const t = document.createElement("time");
  t.textContent = type;
  p.append(t, document.createTextNode(message));
  $("log").prepend(p);
}
$("checkBtn").addEventListener("click", () => {
  const fw = $("firmware").value;
  const box = $("compat");
  if (!fw) {
    box.className = "notice warn";
    box.textContent = "Selecione uma versão antes de verificar.";
    return;
  }
  const route = routes[fw];
  if (route) {
    box.className = "notice good";
    box.textContent = `Firmware ${fw} — ${route.chain}. GoldHEN: ${route.goldhen}. ${route.note} A compatibilidade final deve ser confirmada no próprio console.`;
    log(`Firmware ${fw}: rota preparada — ${route.chain}; GoldHEN automático após o exploit no host compatível.`, "ROTA");
  } else {
    box.className = "notice warn";
    box.textContent = "Nesta etapa, o projeto só prepara as rotas 13.02 e 14.00. Não escolha outra versão.";
    log(`Firmware ${fw}: rota ainda não preparada.`, "ATENÇÃO");
  }
});
$("diagBtn").addEventListener("click", () => {
  const checks = [
    ["JavaScript", typeof window !== "undefined"],
    ["DOM", !!$("firmware")],
    ["HTTPS", location.protocol === "https:"],
    ["Firmware selecionado", !!$("firmware").value],
    ["Conexão", navigator.onLine]
  ];
  checks.forEach(([name, ok]) => log(`${name}: ${ok ? "OK" : "ATENÇÃO"}`, ok ? "PASS" : "WARN"));
  log("Diagnóstico limitado à página. Não testa kernel, exploit, GoldHEN nem hardware.", "FIX");
});
$("exploitBtn").addEventListener("click", () => {
  const fw = $("firmware").value;
  if (!routes[fw]) {
    alert("Selecione 13.02 para o primeiro teste ou 14.00 para a rota preparada separadamente.");
    return;
  }
  log(`Abrindo WebKitty para firmware ${fw}. O GoldHEN é escolhido automaticamente como HEN padrão; não é necessário clicar em um botão separado para carregá-lo após o exploit.`, "INÍCIO");
  window.location.assign(HOST_URL);
});
$("clearBtn").addEventListener("click", () => {
  $("log").replaceChildren();
  log("Relatório limpo.");
});
log("PS4 UNLOCK FIX iniciado. Launcher com encaminhamento para host comunitário mantido.");
