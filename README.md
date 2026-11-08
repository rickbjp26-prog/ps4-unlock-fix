# PS4 UNLOCK FIX

Launcher em português para encaminhar o navegador do PS4 ao host comunitário compatível. O projeto **não copia nem incorpora** os binários do exploit ou do GoldHEN: esses componentes são fornecidos pelo WebKitty, que mantém a implementação e os arquivos por firmware.

## Fluxo pretendido
1. Selecionar o firmware instalado.
2. Clicar em **Iniciar ativação**.
3. No WebKitty, iniciar o exploit uma vez.
4. Após a cadeia concluir com sucesso, o WebKitty injeta o GoldHEN selecionado como HEN padrão. Não é necessário um segundo clique para carregar o GoldHEN.

## Rotas preparadas
- **13.02 (primeira etapa):** Slopkit + Relapse. O WebKitty lista esta cadeia para 13.02–13.52 e inclui seleção de GoldHEN.
- **14.00 (segunda etapa):** Slopkit + Afterglow no estado atual do repositório WebKitty. Deve ser validada em hardware 14.00 antes de ser considerada pronta para uso.

O WebKitty detecta o firmware real do console; a seleção feita neste launcher é apenas orientação. Se a detecção no host não corresponder ao firmware instalado, não prossiga.

## Limitações e segurança
- O botão **Iniciar ativação** abre https://webkitty.arabpixel.net/; ele não executa o exploit dentro deste repositório.
- O início da cadeia ainda exige a ação de iniciar o exploit no host externo. O GoldHEN, por sua vez, é carregado automaticamente depois que a cadeia tem sucesso.
- Não afirmamos que a rota 14.00 foi testada pelo dono deste projeto.
- Exploits podem causar travamentos ou reinicializações. Faça backup dos dados importantes e não desligue o console durante a execução.
- O host externo é um projeto de terceiros e pode mudar; confira as informações e avisos exibidos nele.

## Referências
- WebKitty (código, compatibilidade e licença AGPL-3.0-or-later): https://github.com/ArabPixel/WebKitty
- WebKitty host: https://webkitty.arabpixel.net/
- ConsoleMods Exploit Chart: https://consolemods.org/wiki/PS4:Exploit_Chart
- GoldHEN releases: https://github.com/GoldHEN/GoldHEN/releases

Projeto independente, sem afiliação com a Sony.
