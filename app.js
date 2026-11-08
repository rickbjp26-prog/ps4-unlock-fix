/* PS4 UNLOCK FIX: diagnóstico e matriz documental. Nenhum exploit é executado aqui. */
const compatibility={
  "13.02":{chain:"Slopkit (WebKit) + Relapse (kernel)",hen:"GoldHEN 2.4b18.12",status:"Cadeia listada em projeto comunitário público; ainda não integrada nem testada por este site."},
  "13.04":{chain:"Slopkit (WebKit) + Relapse (kernel)",hen:"GoldHEN 2.4b18.12",status:"Cadeia listada em projeto comunitário público; ainda não integrada nem testada por este site."},
  "13.50":{chain:"Slopkit (WebKit) + Relapse (kernel)",hen:"GoldHEN 2.4b18.12",status:"Cadeia listada em projeto comunitário público; confirme a variante exata antes de qualquer uso."},
  "13.52":{chain:"Slopkit (WebKit) + Relapse (kernel)",hen:"GoldHEN 2.4b18.11",status:"Cadeia listada em projeto comunitário público; requer payload específico para esta versão."},
  "14.00":{chain:"Não definida nesta versão do projeto",hen:"Não definido",status:"Compatibilidade não confirmada por esta matriz. Nenhum módulo será oferecido."}
};
const $=id=>document.getElementById(id);
function log(message,type="INFO"){const p=document.createElement("p"),t=document.createElement("time");t.textContent=type;p.append(t,document.createTextNode(message));$("log").prepend(p)}
$("checkBtn").addEventListener("click",()=>{
  const fw=$("firmware").value,box=$("compat");
  if(!fw){box.className="notice warn";box.textContent="Selecione uma versão antes de verificar.";return}
  const item=compatibility[fw];
  if(!item){box.className="notice bad";box.textContent="Firmware sem registro nesta matriz.";return}
  box.className=fw==="14.00"?"notice warn":"notice good";
  box.textContent=`Firmware ${fw} — caminho documentado: ${item.chain}. HEN listado: ${item.hen}. ${item.status} Isto é referência documental, não confirmação de funcionamento no seu console.`;
  log(`Matriz consultada para firmware ${fw}: ${item.chain}; ${item.hen}. Nenhum exploit executado.`,"MATRIX");
});
$("diagBtn").addEventListener("click",()=>{
  const checks=[["JavaScript",typeof window!=="undefined"],["DOM",!!$("firmware")],["HTTPS",location.protocol==="https:"],["Firmware selecionado",!!$("firmware").value],["Conexão",navigator.onLine]];
  checks.forEach(([n,ok])=>log(`${n}: ${ok?"OK":"ATENÇÃO"}`,ok?"PASS":"WARN"));
  log("Diagnóstico limitado à página; não testa kernel, exploit, GoldHEN ou hardware.","FIX");
});
$("exploitBtn").addEventListener("click",()=>{
  log("Módulo de exploit ainda não integrado. Nenhum payload foi carregado.","SAFE");
  alert("O módulo de exploit ainda não está integrado. Esta ação não desbloqueia o console.");
});
$("clearBtn").addEventListener("click",()=>{$("log").replaceChildren();log("Relatório limpo.")});
log("PS4 UNLOCK FIX inicializado. Matriz documental carregada; modo seguro.");
