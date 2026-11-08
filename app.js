/* PS4 UNLOCK FIX — firmware guide and hand-off to the maintained exploit host.
   Exploit chains and GoldHEN payloads are served by WebKitty, not bundled here. */
const HOST_URL = "https://webkitty.arabpixel.net/";
const routes = {
  "13.02": { chain: "SlopKit + Relapse", goldhen: "GoldHEN como HEN padrão do WebKitty", note: "Rota da família 12.50–13.52; compatibilidade final depende do host e do console." },
  "13.04": { chain: "SlopKit + Relapse", goldhen: "GoldHEN como HEN padrão do WebKitty", note: "Rota da família 12.50–13.52; compatibilidade final depende do host e do console." },
  "13.50": { chain: "SlopKit + Relapse", goldhen: "GoldHEN como HEN padrão do WebKitty", note: "Rota da família 12.50–13.52; compatibilidade final depende do host e do console." },
  "13.52": { chain: "SlopKit + Relapse", goldhen: "GoldHEN como HEN padrão do WebKitty", note: "Rota da família 12.50–13.52; compatibilidade final depende do host e do console." },
  "14.00": { chain: "SlopKit + Afterglow", goldhen: "GoldHEN como HEN padrão do WebKitty", note: "Rota separada para firmware 14.00; requer teste real neste firmware." }
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
    box.textContent = `Firmware ${fw} — ${route.chain}. ${route.goldhen}. ${route.note} A seleção não substitui a detecção feita pelo host no PS4.`;
    log(`Firmware ${fw}: rota indicada — ${route.chain}.`, "ROTA");
  } else {
    box.className = "notice warn";
    box.textContent = "Firmware não incluído nesta versão do projeto.";
    log(`Firmware ${fw}: rota não preparada.`, "ATENÇÃO");
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
    const box = $("compat");
    box.className = "notice warn";
    box.textContent = "Antes de iniciar, selecione o firmware do PS4: 13.02, 13.04, 13.50, 13.52 ou 14.00.";
    log("Ativação não iniciada: firmware não selecionado ou não reconhecido.", "ATENÇÃO");
    $("firmware").focus();
    return;
  }
  log(`Abrindo WebKitty para firmware selecionado ${fw}. O host detecta o firmware real do console e escolhe a cadeia compatível.`, "INÍCIO");
  window.location.assign(HOST_URL);
});
$("clearBtn").addEventListener("click", () => {
  $("log").replaceChildren();
  log("Relatório limpo.");
});
log("PS4 UNLOCK FIX iniciado. Cinco versões disponíveis no seletor.");
