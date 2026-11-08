# PS4 UNLOCK FIX — versão de referência

Interface estática em português para PS4, com seletor de firmware, referências públicas de rota e diagnóstico básico do navegador.

## Firmware atualmente listado
- **13.02 e 13.04:** referências públicas apontam para Slopkit (WebKit) + Relapse (kernel).
- **13.50 e 13.52:** referências públicas também apontam para Slopkit + Relapse; detalhes de payload e testes variam conforme a implementação.

As referências não significam que o PS4 UNLOCK FIX já execute a cadeia. Nenhum exploit, kernel patch ou payload está incluído nesta versão. O botão de módulo apenas informa que a integração está pendente.

## Diagnóstico
Verifica apenas JavaScript, DOM, HTTPS, firmware selecionado e conectividade do navegador. Não testa kernel, exploit, GoldHEN ou hardware.

## Referências públicas consultadas
- ConsoleMods — PS4 Exploit Chart: https://consolemods.org/wiki/PS4:Exploit_Chart
- HenJB — tabela de firmware: https://henjb.com/
- PS4 AIO — coleções WebKit: https://github.com/eddieygaming/ps4aio
- WebKitty — cadeia Slopkit/Relapse: https://github.com/ArabPixel/WebKitty

A cena muda rapidamente. Antes de qualquer integração, é necessário conferir o código-fonte original, licença, arquivos específicos de firmware e testes reais no hardware. Exploits podem falhar, travar o navegador ou reiniciar o console.

Projeto independente, sem afiliação com a Sony.
