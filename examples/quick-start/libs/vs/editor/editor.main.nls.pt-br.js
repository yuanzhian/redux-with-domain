/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.10.0(9b725bd7807ee959240b4af7906fae119b0fbf9e)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.pt-br",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (ocorreu novamente)"],"vs/base/browser/ui/findinput/findInput":["entrada"],"vs/base/browser/ui/findinput/findInputCheckboxes":["Diferenciar Maiúsculas de Minúsculas","Coincidir Palavra Inteira","Usar Expressão Regular"],"vs/base/browser/ui/inputbox/inputBox":["Erro: {0}","Aviso: {0}","Informações: {0}"],"vs/base/common/keybindingLabels":["Ctrl","Shift","Alt","Windows","Control","Shift","Alt","Comando","Control","Shift","Alt","Windows"],"vs/base/common/severity":["Erro","Aviso","Informações"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, seletor","seletor"],"vs/base/parts/quickopen/browser/quickOpenWidget":["Seletor rápido. Digite para filtrar resultados.","Seletor rápido"],"vs/base/parts/tree/browser/treeDefaults":["Recolher"],"vs/editor/browser/widget/diffEditorWidget":["Não é possível comparar os arquivos pois um deles é muito grande."],"vs/editor/browser/widget/diffReview":["Fechar","Diferença {0} de {1}: original {2}, {3} linhas, modificado {4}, {5} linhas","branco","original {0}, modificados {1}: {2}","+ modificado {0}: {1}","-original {0}: {1}","Ir para a próxima diferença","Ir para a diferença anterior"],"vs/editor/common/config/commonEditorConfig":["Editor","Controla a família de fontes.","Controla o peso da fonte.","Controla o tamanho da fonte em pixels.","Controla a altura da linha. Use 0 para computar a altura da linha a partir do tamanho da fonte.","Controla o espaçamento da letra em pixels.","Controla a exibição de números de linha. Valores possíveis são 'on', 'off' e 'relative'. 'relative' mostra a contagem de linhas a partir da posição atual do cursor.","Colunas nas quais mostrar réguas verticais","Caracteres que serão usados como separadores de palavras ao fazer navegação relacionada a palavras ou operações","O número de espaços equivalentes a uma tabulação. Esta configuração é sobreposta no conteúdo do arquivo quando `editor.detectIndentation` está ligado.","Esperado 'número'. Note que o valor \"auto\" foi alterado pela configuração 'editor.detectIndentation'.","Insere espaços quanto pressionado Tab. Esta configuração é sobrescrita com base no conteúdo do arquivo quando 'editor.detectIndentation' está habilitado.","Esperado 'booleano'. Note que o valor \"auto\" foi alterado pela configuração 'editor.detectIndentation'.","Quando um arquivo está sendo aberto, 'editor.tabSize' e 'editor.insertSpace' será detectado com base no conteúdo do arquivo.","Controla se as seleções têm cantos arredondados","Controla se o editor rolará além da última linha","Controla se o mini mapa é exibido","Controla se o controle deslizante minimap é oculto automaticamente.","Renderizar os caracteres em uma linha (em oposição a blocos de caracteres)","Limitar o tamanho de um mini-mapa para renderizar no máximo um número determinado de colunas","Controla se nós inicializamos a string de pesquisa na Ferramenta de Pesquisa a partir da seleção do editor","Controla se a configuração Find in Selection deve estar ativada quando vários caracteres ou linhas de texto estão selecionados no editor","As linhas nunca serão quebradas.","As linhas serão quebradas na largura de visualização","As linhas serão quebradas em `editor.wordWrapColumn`.","As linhas serão quebradas no mínimo entre a largura de visualização e `editor.wordWrapColumn`.","Controla como as linhas devem ser quebradas automaticamente. Pode ser:\n- 'off' (quebra automática de linha desabilitada)\n- 'on' (quebra automática de linha na largura da janela)\n- 'wordWrapColumn' (quebra automática no numero de colunas definido em  `editor.wordWrapColumn`) ou\n- 'bounded' (quebra automática em uma dimensão minima da janela e na largura configurada)","Controla a coluna de quebra de linha do editor quando editor.wordWrap` é 'wordWrapColumn' ou 'bounded'.",'Controla o recuo de linhas quebradas. Pode ser "none", "same" ou "indent".','Um multiplicador a ser usado em "deltaX" e "deltaY" dos eventos de rolagem do botão de rolagem do mouse',"Mapeia para 'Control' no Windows e Linux e 'Command' no OSX.","Mapeia para 'Alt' em Windows e Linux e 'Option' em OSX.","O modificador a ser usado para adicionar vários cursores com o mouse. `ctrlCmd` mapeia 'Control' no Windows e Linux e 'Command' no OSX. Os gestos do mouse Ir para definição e Abrir Link irão adaptar-se tal maneira que eles não entrem em conflito com o modificador multicursor.","Habilitar sugestões rápidas dentro de strings.","Habilitar sugestões rápidas dentro de comentários.","Habilitar sugestões rápidas fora de strings e comentários.","Controlar se sugestões devem aparecer automaticamente ao digitar","Controla o atraso em ms após o qual sugestões rápidas serão exibidas","Habilita pop-up que mostra documentação de parâmetros e o tipo de informação conforme você digita","Controla se o editor deve fechar colchetes automaticamente depois de abri-los","Controla se o editor deve formatar automaticamente a linha após a digitação","Controla se o editor deve formatar automaticamente o conteúdo colado. Um formatador deve estar disponível e o formatador deve ser capaz de formatar apenas uma parte do documento.","Controles se o editor deve ajustar automaticamente o recuo, quando os usuários digitam, colam ou movem linhas. Regras de recuo da língua devem estar disponíveis. ","Controla se as sugestões devem aparecer automaticamente ao digitar caracteres de gatilho","Controla se as sugestões devem ser aceitas com 'Enter' - em adição a 'Tab'. Ajuda a evitar a ambiguidade entre a inserção de novas linhas ou aceitar sugestões. O valor 'smart' significa apenas aceitar uma sugestão com Enter quando ela fizer uma mudança textual","Controla se as sugestões devem ser aceitas em caracteres de confirmação. Por exemplo, em JavaScript, o ponto-e-vírgula (';') pode ser um caractere de confirmação que aceita uma sugestão e digita esse caractere.","Mostre sugestões de trecho acima de outras sugestões.","Mostre sugestões de trecho abaixo de outras sugestões.","Mostre sugestões de trechos com outras sugestões.","Não mostre sugestões de trecho.","Controla se os snippets são exibidos juntamente com as outras sugestões e como eles são ordenados.","Controla se a cópia sem nenhuma seleção copia a linha atual.","Controla se o auto-completar deve ser calculado baseado nas palavras no documento.","Tamanho da fonte para a ferramenta de sugestão","Altura de linha para a ferramenta de sugestão","Controla se o editor deve realçar correspondências semelhantes à seleção","Controla se o editor deve realçar ocorrências de símbolos semânticos.","Controla o número de decorações que podem ser exibidas na mesma posição na régua de visão geral","Controla se deve desenhar uma borda ao redor da régua de visão geral.","Controla o estilo de animação do cursor, os valores possíveis são 'blink', 'smooth', 'phase', 'expand' e 'solid'","Alterar o zoom da fonte editor quando utilizada a roda do mouse e pressionando Ctrl","Controla o estilo do cursor, os valores aceitos são 'block', 'block-outline', 'line', 'line-thin', 'underline' e 'underline-thin'","Habilita ligaduras de fontes","Controla se o cursor deve ficar oculto na régua de visão geral.","Controla como o editor deve rendenizar caracteres de espaços em branco, possibilidades são 'none', 'boundary' e 'all'. A opção 'boundary' não rendeniza espaços simples entre palavras.","Controla se o editor deve renderizar caracteres de controle","Controla se o editor deve renderizar guias de identação","Controla como o editor deve renderizar a linha atual, as possibilidades são 'none', 'gutter', 'line' e 'all'.","Controla se o editor exibirá a lente de códigos.","Controla se o editor tem codigo colapsível hablitado","Controla se os controles de desdobramento na divisão são ocultas automaticamente.","Realça colchetes correspondente quando um deles estiver selecionado.","Controla se o editor deve renderizar a margem vertical de ícones. A margem vertical de ícones é usada primordialmente na depuração","Inserção e deleção de espaço em branco seguem a tabulação","Remove espaços em branco inseridos automaticamente no fim da linha","Mantém os editores de visualização abertos mesmo quando clicando seu conteúdo ou teclando Escape.","Controla se o editor deve permitir mover seleções via arrastar e soltar.","O editor irá utilizar a plataforma da API para detectar quando um leitor de tela está conectado.","O editor será permanentemente otimizado para o uso de um leitor de tela.","O editor nunca será otimizado para o uso de um leitor de tela.","Controla quando o editor deve executar em modo otimizado para leitores de tela.","Controla se o editor deve detectar links e torná-los clicáveis","Controla se o editor de diff mostra as diff lado a lado ou inline.","Controla se o editor de diff mostra alterações nos espaços iniciais ou finais como diferenças","Controla se o editor de diff mostra indicadores +/- para alterações adicionadas/removidas","Controla se a área primária de transferência Linux deve ser suportada."],"vs/editor/common/config/editorOptions":["O editor não está acessível neste momento. Por favor pressione Alt+F1 para opções.","Conteúdo do editor"],"vs/editor/common/controller/cursor":["Exceção inesperada ao executar o comando."],"vs/editor/common/model/textModelWithTokens":["O modo falhou ao gerar token da entrada."],"vs/editor/common/modes/modesRegistry":["Texto sem formatação"],"vs/editor/common/services/bulkEdit":["Estes arquivos foram alterados nesse meio tempo: {0}","Não foram feitas edições","Feitas {0} edições de texto em {1} arquivos","Feitas {0} edições de texto em um arquivo"],"vs/editor/common/services/modelServiceImpl":["[{0}] {1}","[{0}] {1}"],"vs/editor/common/view/editorColorRegistry":["Cor de fundo para a posição do cursor  na seleção de linhas.","Cor de fundo para a borda em volta da linha na posição do cursor","Cor de fundo dos ranges selecionados, assim como abertura instantânea e descoberta de recursos ","Cor do cursor no editor.","A cor de fundo do cursor do editor. Permite customizar a cor de um caractere sobreposto pelo bloco do cursor.","Cor dos caracteres em branco no editor","Cor das guias de indentação do editor.","Cor dos números de linha do editor.","Cor das réguas do editor.","Cor do primeiro plano das lentes de código do editor","Cor de fundo atrás do colchetes correspondentes","Cor para as caixas de colchetes correspondentes","Cor da borda da régua de visão geral.","Cor de fundo da separação do editor.O separador contém os glifos das margens e os números de linha.","Cor do primeiro plano das linhas onduladas de erro no editor.","Cor da borda das linhas onduladas de erro no editor.","Cor do primeiro plano de linhas onduladas de aviso no editor.","Cor da borda das linhas onduladas de aviso no editor."],"vs/editor/contrib/bracketMatching/common/bracketMatching":["Ir para colchete"],"vs/editor/contrib/caretOperations/common/caretOperations":["Mover cursor para a esquerda","Mover cursor para a direita"],"vs/editor/contrib/caretOperations/common/transpose":["Transport letras"],"vs/editor/contrib/clipboard/browser/clipboard":["Recortar","Copiar","Colar","Copiar com realce de sintaxe"],"vs/editor/contrib/comment/common/comment":["Alternar Comentário de Linha","Adicionar Comentário de Linha","Remover Comentário de Linha","Alternar Comentário de Bloco"],"vs/editor/contrib/contextmenu/browser/contextmenu":["Mostrar o menu de contexto do editor"],"vs/editor/contrib/find/browser/findWidget":["Localizar","Localizar","Correspondência anterior","Próxima correspondência","Localizar na seleção","Fechar","Substituir","Substituir","Substituir","Substituir Tudo","Ativar/desativar modo Substituir","Somente os primeiros 999 resultados são realçados, mas todas as operações de pesquisa funcionam em todo o texto.","{0} de {1}","Nenhum resultado"],"vs/editor/contrib/find/common/findController":["Localizar","Localizar Próximo","Localizar anterior","Localizar Próxima Seleção","Localizar Seleção Anterior","Substituir","Adicionar Seleção ao Próximo Localizar Correspondência","Adicionar Seleção à Correspondência de Localização Anterior","Mover Última Seleção para Próximo Localizar Correspondência","Mover Última Seleção para Correspondência de Localização Anterior","Selecionar Todas as Ocorrências de Localizar Correspondência","Alterar todas as ocorrências","Mostrar Próximo Termo de Busca","Mostrar Termo de Busca Anterior"],"vs/editor/contrib/folding/browser/folding":["Abrir","Abrir recursivamente","Colapsar","Colapsar recursivamente","Colapsar tudo","Abrir tudo","Nível de colapsamento {0}"],"vs/editor/contrib/format/browser/formatActions":["1 edição de formatação feita na linha {0}","{0} edições de formatação feitas na linha {1}","Feita 1 edição de formatação entre as linhas {0} e {1}","Feitas {0} edições de formatação entre as linhas {1} e {2}","Formatar Documento","Formatar Seleção"],"vs/editor/contrib/goToDeclaration/browser/goToDeclarationCommands":["Não foi encontrada definição para '{0}'","Nenhuma definição encontrada","- {0} definições","Ir para Definição","Abrir definição ao lado","Inspecionar definição","Nenhuma implementação encontrada para '{0}'","Nenhuma implementação encontrada","– {0} implementações","Ir para a implementação","Inspecionar implementação","Nenhuma definição encontrada para '{0}'","Nenhuma definição de tipo encontrada","– {0} definições de tipos","Ir para a definição de tipo","Inspecionar definição de tipo"],"vs/editor/contrib/goToDeclaration/browser/goToDeclarationMouse":["Clique para mostrar {0} definições."],"vs/editor/contrib/gotoError/browser/gotoError":["({0}/{1})","Ir para o Próximo Erro ou Aviso","Ir para o Erro ou Aviso Anterior","Ferramenta de marcação de edição apresentando error na cor ","Ferramenta de marcação de edição apresentando adventência na cor","Cor de fundo da ferramenta de marcação de navegação do editor."],"vs/editor/contrib/hover/browser/hover":["Mostrar Item Flutuante"],"vs/editor/contrib/hover/browser/modesContentHover":["Carregando..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["Substituir pelo valor anterior","Substituir pelo próximo valor"],"vs/editor/contrib/linesOperations/common/linesOperations":["Copiar linha acima","Copiar linha abaixo","Mover linha para cima","Mover linha para baixo","Classificar Linhas Ascendentemente","Classificar Linhas Descendentemente","Cortar Espaço em Branco à Direita","Excluir linha","Recuar linha","Recuar linha para a esquerda","Inserir linha acima","Inserir linha abaixo","Excluir tudo à Esquerda","Excluir Tudo à Direita","Unir Linhas","Transpor caracteres ao redor do cursor","Transformar para maiúsculas","Transformar para minúsculas"],"vs/editor/contrib/links/browser/links":["Cmd + clique para seguir o link","Ctrl + clique para seguir o link","Cmd + clique para executar o comando","CTRL + clique para executar o comando","Alt + clique para seguir o link","Alt + clique para executar o comando","Desculpe, falha ao abrir este link porque ele não está bem formatado: {0}","Desculpe, falha ao abrir este link porque seu destino está faltando.","Abrir link"],"vs/editor/contrib/multicursor/common/multicursor":["Inserir cursor acima","Inserir cursor abaixo","Adicionar Cursores ao Final das Linhas"],"vs/editor/contrib/parameterHints/browser/parameterHints":["Dicas de parâmetro de gatilho"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}, dica"],"vs/editor/contrib/quickFix/browser/quickFixCommands":["Mostrar correções ({0})","Mostrar correções","Correção Rápida"],"vs/editor/contrib/referenceSearch/browser/referenceSearch":["- {0} referências","Localizar Todas as Referências"],"vs/editor/contrib/referenceSearch/browser/referencesController":["Carregando..."],"vs/editor/contrib/referenceSearch/browser/referencesModel":["símbolo em {0} na linha {1} e coluna {2}","1 símbolo em {0}, caminho completo {1}","{0} símbolos em {1}, caminho completo {2}","Nenhum resultado encontrado","Encontrado 1 símbolo em {0}","Encontrados {0} símbolos em {1}","Encontrados {0} símbolos em {1} arquivos"],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["Falha ao resolver arquivo.","{0} referências","{0} referência","nenhuma visualização disponível","Referências","Nenhum resultado","Referências","Cor de fundo da área de visualização do título.","Cor de visualização do título.","Cor da visualização de informações do título.","Cor das bordas e seta da área de visualização","Cor de fundo da área de visualização da lista de resultados.","Cor de primeiro plano para nós de linha na lista de resultados visualizados.","Cor de primeiro plano para nós de arquivos na lista de resultados visualizados.","Cor de fundo da entrada selecionada na visualização da lista de resultados.","Cor da entrada selecionada na visualização da lista de resultados.","Cor de fundo da visualização do editor.","Cor de fundo da separação na visualização rápida do editor.","Corresponder cor de realce com visualização da lista de resultados.","Corresponder cor de realce com visualização do editor."],"vs/editor/contrib/rename/browser/rename":["Nenhum resultado.","Renomeado '{0}' para '{1}'com sucesso. Resumo: {2}","Desculpe, falha na execução de renomear.","Renomear Símbolo"],"vs/editor/contrib/rename/browser/renameInputField":["Renomear entrada. Digite o novo nome e tecle Enter para gravar."],"vs/editor/contrib/smartSelect/common/smartSelect":["Expandir seleção","Reduzir seleção"],"vs/editor/contrib/suggest/browser/suggestController":["Ao aceitar '{0}' foi inserido o seguinte texto: {1}","Sugestão de gatilho"],"vs/editor/contrib/suggest/browser/suggestWidget":["Cor de fundo para a ferramenta de sugestão.","Cor da borda para a ferramenta de sugestão.","Cor de primeiro plano para a ferramenta de sugestão.","Cor de fundo da entrada selecionada da ferramenta de sugestões.","Cor de realce da correspondência na ferramenta de sugestão.","Ler Mais...{0}","{0}, sugestão, tem detalhes","{0}, sugestão","Ler menos... {0}","Carregando...","Nenhuma sugestão.","{0}, aceito","{0}, sugestão, tem detalhes","{0}, sugestão"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["Alterne o uso da tecla Tab para mover o foco"],"vs/editor/contrib/wordHighlighter/common/wordHighlighter":["Cor de fundo de um símbolo durante acesso de leitura, como ao ler uma variável.","Cor de fundo de um símbolo durante acesso de escrita, como ao escrever uma variável."],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["Fechar"],"vs/editor/standalone/browser/inspectTokens/inspectTokens":["Developer: Inspect Tokens"],"vs/editor/standalone/browser/quickOpen/gotoLine":["Go to line {0} and character {1}","Go to line {0}","Type a line number between 1 and {0} to navigate to","Type a character between 1 and {0} to navigate to","Go to line {0}","Type a line number, followed by an optional colon and a character number to navigate to","Go to Line..."],"vs/editor/standalone/browser/quickOpen/quickCommand":["{0}, commands","Type the name of an action you want to execute","Command Palette"],"vs/editor/standalone/browser/quickOpen/quickOutline":["{0}, symbols","Type the name of an identifier you wish to navigate to","Go to Symbol...","symbols ({0})","modules ({0})","classes ({0})","interfaces ({0})","methods ({0})","functions ({0})","properties ({0})","variables ({0})","variables ({0})","constructors ({0})","calls ({0})"],"vs/editor/standalone/browser/standaloneCodeEditor":["Editor content","Press Ctrl+F1 for Accessibility Options.","Press Alt+F1 for Accessibility Options."],"vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast":["Toggle High Contrast Theme"],"vs/platform/configuration/common/configurationRegistry":["Sobreposições da Configuração Padrão","Definir que configurações do editor sejam substituídas para idioma {0}.","Definir que configurações do editor sejam substituídas para um idioma.","Não é possível registrar '{0}'. Isto corresponde a propriedade padrão '\\\\[.*\\\\]$' para descrever configurações do editor específico de linguagem. Use a contribuição 'configurationDefaults'.","Não é possível registrar '{0}'. Esta propriedade já está registrada."],"vs/platform/keybinding/common/abstractKeybindingService":["({0}) foi pressionado. Aguardando segunda tecla de pressionamento simultâneo...","A combinação de chave ({0}, {1}) não é um comando."],"vs/platform/message/common/message":["Fechar","Mais tarde","Cancelar"],"vs/platform/theme/common/colorRegistry":["Formato inválido de cor. Use #RGB, #RGBA, #RRGGBB ou #RRGGBBAA","Cores usadas no workbench.","Cor de primeiro plano geral. Essa cor é só usada se não for substituída por um componente.","Cor de primeiro plano geral para mensagens de erro. Essa cor é só usada se não for substituída por um componente.","Cor de primeiro plano para a descrição do texto provendo informação adicional, por exemplo para uma etiqueta.","Cor geral da borda para elementos focalizados. Essa cor é usada somente se não for substituída por um componente.","Uma borda extra em torno de elementos para separá-los dos outros de maior contraste.","Uma borda extra em torno de elementos ativos para separá-los dos outros de maior contraste.","A cor de fundo das seleções de texto na área de trabalho (por exemplo, para campos de entrada ou áreas de texto). Note que isto não se aplica a seleções dentro do editor.","Cor para separadores de texto.","Cor de primeiro plano para links no texto.","Cor de primeiro plano para links ativos no texto.","Cor de primeiro plano para segmentos de texto pré-formatados.","Cor de fundo para blocos de citações no texto.","Cor da borda para blocos de citações no texto.","Cor de fundo para blocos de código no texto.","Cor de sombra ferramentas como localizar/substituir dentro do editor.","Cor de fundo da caixa de entrada.","Cor de primeiro plano da caixa de entrada.","Borda da caixa de entrada.","Cor da borda das opções ativas em campos de entrada.","Cor de primeiro plano da caixa de entrada para o texto de espaço reservado.","Cor de fundo de validação de entrada para a severidade de informações.","Cor da borda de validação de entrada para a severidade de informações.","Cor de fundo de validação de entrada para avisos.","Cor da borda de validação para a severidade de avisos.","Cor de fundo de validação de entrada para a severidade do erro.","Cor da borda de validação de entrada para a severidade do erro.","Cor de fundo do menu suspenso.","Cor de primeiro plano do menu suspenso.","Borda do menu suspenso.","Cor de fundo para o item focalizado de Lista/árvore quando a lista/árvore está ativa. Uma árvore/lista de ativa tem o foco do teclado, uma inativa não.","Cor de fundo da Lista/árvore para o item focalizado quando a lista/árvore está ativa. Uma árvore/lista ativa tem o foco do teclado, uma inativa não.","Cor de fundo para o item selecionado de Lista/árvore quando a lista/árvore está ativa. Uma lista/árvore ativa tem o foco do teclado, uma inativa não.","Cor de primeiro plano para o item selecionado de Lista/árvore quando a lista/árvore está ativa. Uma lista/árvore ativa tem o foco do teclado, uma inativa não.","Cor de fundo para o item selecionado de Lista/árvore quando a lista/árvore está inativa. Uma lista/árvore ativa tem o foco do teclado, uma inativa não.","Cor de primeiro plano para Lista/árvore para o item selecionado quando a lista/árvore está inativa. Uma árvore/lista ativa tem o foco do teclado, um inativo não.","Cor de fundo para o item selecionado de Lista/árvore quando a lista/árvore está inativa. Uma lista/árvore ativa tem o foco do teclado, uma inativa não.","Cor de primeiro plano para Lista/árvore para o item selecionado quando a lista/árvore está inativa. Uma árvore/lista ativa tem o foco do teclado, um inativo não.","Cor de fundo de Lista/árvore quando pairando sobre itens usando o mouse.","Primeiro plano da Lista/Árvoce quando passar sobre itens usando o mouse.","Cor de fundo ao arrastar e soltar de Lista/árvore quando movendo itens usando o mouse.","Cor de primeiro plano de Lista/árvore de destaques de correspondências ao pesquisar na  árvore/lista.","Seletor rápido de cor para rótulos de agrupamento.","Seletor rápido de cor para bordas de agrupamentos.","Cor de primeiro plano do botão.","Cor de fundo do botão.","Cor de fundo de botão quando flutuar sobre ele.","Cor de fundo do distintivo. Distintivos são rótulos de pequenas informações, por exemplo, para a contagem de resultados de pesquisa.","Cor de primeiro plano do distintivo. Distintivos são rótulos de pequenas informações, por exemplo, para a contagem de resultados de pesquisa.","Sombra da barra de rolagem para indicar que a visualização está sendo rolada.","Cor de fundo da barra de rolagem.","Cor de fundo da barra de rolagem quando o cursor do mouse estiver sobre ela.","Cor de fundo da barra de rolagem quando ativa.","Cor de fundo da barra de progresso que pode ser mostrada em operações de execução demorada.","Cor de plano de fundo do editor.","Cor de primeiro plano padrão do editor.","Cor de plano de fundo das ferramentas de edição, como pesquisar/substituir.","Cor da borda das ferramentas do editor. A cor é usada somente se a ferramenta escolhe ter uma borda e a cor não é substituída por uma ferramenta.","Cor de seleção do editor.","Cor do texto selecionado para alto contraste.","Cor de seleção em um editor inativo.","Cor de regiões com o mesmo conteúdo da seleção.","Cor da correspondência de pesquisa atual.","Cor dos outros resultados de pesquisa.","Cor da faixa que limita a pesquisa.","Realçar abaixo da palavra onde é mostrado item flutuante","Cor de fundo para o item flutuante do editor","Cor da borda para o item flutuante do editor.","Cor dos links ativos.","Cor de fundo para texto que foi inserido.","Cor de fundo para texto que foi removido.","Cor de contorno para o texto que foi inserido.","Cor de contorno para o texto que foi removido.","Cor de fundo de cabeçalho atual em conflito de mesclagem em linha.","Cor de fundo de conteúdo atual em conflito de mesclagem em linha.","Cor de fundo de cabeçalho de entrada em conflito de mesclagem em linha.","Cor de fundo de conteúdo de entrada em conflito de mesclagem em linha.","Ancestral comum da cor de fundo do cabeçalho em conflitos de mesclagem inline.","Ancestral comum da cor de fundo do conteúdo em conflitos de mesclagem inline. ","Cor da borda dos cabeçalhos e separadores estão em conflito de mesclagem em linha.","Cor de fundo de régua de visuaização atual em conflito de mesclagem em linha.","Cor de fundo de régua de visuaização de entrada em conflito de mesclagem em linha.","Ancestral comum da cor da régua de visão geral para conflitos de mesclagem inline."]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.pt-br.js.map