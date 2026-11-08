/* PS4 UNLOCK FIX — interface, diagnostics and firmware route reference only.
   No exploit chain, kernel patch or payload is bundled or executed. */
const routes = {
  "13.02": { chain: "Slopkit (WebKit) + Relapse (kernel)", note: "Rota pública documentada para esta versão. O projeto PS4 UNLOCK FIX ainda não integra nem testa essa cadeia." },
  "13.04": { chain: "Slopkit (WebKit) + Relapse (kernel)", note: "Mesma família de kernel indicada nas referências públicas; não testada por este projeto." },
  "13.50": { chain: "Slopkit (WebKit) + Relapse (kernel)", note: "Há relatos públicos de teste em hardware; resultado depende da implementação e dos arquivos exatos." },
  "13.52": { chain: "Slopkit (WebKit) + Relapse (kernel)", note: "Há referências públicas a GoldHEN em builds específicas; isso não valida automaticamente este host." }
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
    box.textContent = `Firmware ${fw} — referência de rota: ${route.chain}. ${route.note} Não significa que o desbloqueio foi executado.`;
    log(`Firmware ${fw}: rota pública consultada — ${route.chain}. Integração no PS4 UNLOCK FIX pendente.`, "ROTA");
  } else {
    box.className = "notice warn";
    box.textContent = "Não há uma rota confirmada cadastrada nesta versão do projeto. Não tente executar módulos de outro firmware.";
    log(`Firmware ${fw}: sem rota cadastrada.`, "ATENÇÃO");
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
  log("Módulo de exploit ainda não integrado. Nenhum payload foi carregado.", "SAFE");
  alert("O módulo de exploit ainda não está integrado. Esta ação não desbloqueia o console.");
});
$("clearBtn").addEventListener("click", () => {
  $("log").replaceChildren();
  log("Relatório limpo.");
});
log("PS4 UNLOCK FIX iniciado. Versão de referência: sem execução de exploit.");
