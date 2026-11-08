# PS4 UNLOCK FIX — versão inicial

Interface estática em português para PS4, com seletor de firmware, matriz documental de compatibilidade e diagnóstico básico do navegador.

## Estado atual
- Firmware 13.02: projeto comunitário público documenta a cadeia Slopkit (WebKit) + Relapse (kernel) e lista GoldHEN 2.4b18.12.
- Firmware 13.04 e 13.50: a mesma coleção lista a cadeia Relapse; GoldHEN 2.4b18.12 é indicado para 13.02–13.50.
- Firmware 13.52: a coleção lista Slopkit Relapse e GoldHEN 2.4b18.11.
- Firmware 14.00: não habilitado nesta matriz.

Referência técnica consultada: https://github.com/eddieygaming/ps4aio (README, seção “Supported firmware flows” e “Homebrew Enablers versions”). Outra referência de status: https://github.com/caziques/PS4.

**Importante:** essas referências são documentação de projetos comunitários, não testes realizados pelo PS4 UNLOCK FIX. A página ainda não contém a cadeia de exploit, kernel patches nem payload GoldHEN. A verificação de firmware não executa jailbreak.

## Diagnóstico
Verifica somente JavaScript, elementos da página, HTTPS, firmware selecionado e conectividade. Não testa kernel, exploit, GoldHEN ou hardware.

## Publicação
GitHub Pages: https://rickbjp26-prog.github.io/ps4-unlock-fix/

## Segurança e limites
Exploit pode travar o navegador ou reiniciar o console. Não há garantia de sucesso em todo console. Antes de integrar qualquer código externo, revisar origem, licença, integridade, offsets e compatibilidade exata; nunca combinar payloads de firmwares diferentes.
