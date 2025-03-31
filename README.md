[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/-0GsTofh)
# Projeto: Remake de site/app web

<img src="gifs/desktop.gif" alt="desktop gif" width="768"/>

<img src="gifs/mobile.gif" alt="mobile gif" width="384"/>

Acesso: https://elc1090.github.io/project1-2025a-GabrielUFSM/


#### Desenvolvedor(a)
Gabriel Bisognin Moro  
Ciência da computação

#### Cliente
Breno



#### Site/app original

##### Link
https://www.nike.com.br

##### Descrição
Substitua este texto por uma descrição do site/app escolhido. Inclua observações sobre seu conteúdo, aparência e código.

#### Demanda do(a) cliente
Remake de: Navbar, conteúdo principal e footer. Sidebar para telas mobile

#### Desenvolvimento

Substitua este texto por uma descrição do processo de desenvolvimento, explicando suas escolhas para o remake e etapas do trabalho (por exemplo, como foi coletado o conteúdo, como você lidou com as demandas, etc.)    

**1.** Fiz o esqueleto da página, para isso, me baseei na própria separação do site da nike e deixei placeholders em toda a seções. Em seguida, implementei uma navbar básica no html e fiz o .css com as cores e uma formatação parecida com a do site e implementei a sidebar mobile, também no html. Nesta etapa, a sidebar ainda não funcionava. Esse foi o primeiro commit.  
**2.** Depois, implementei o javascript para a sidebar de telas mobile. Aproveitei que aprendi javascript e implementei algo fora da demanda do cliente, um toggle para ativar ou desativar um modo noturno no site, para o conjunto de cores escuras, perguntei para o chatgpt quais usar.  
**3.** Com a navbar e a sidebar prontos, implementei o conteúdo princípal do site, as imagens foram obtidas a partir de links no html do site original. O site utiliza formatos diferentes de banners, separei entre "banner-section", que são os banners principais, grandes, "icons-section", uma seção de "ícones nike", que são banners menores, lado a lado e, por fim, "also-known-section", a seção de "conheça também", que são 3 banners verticais lado a lado, no estilo de carousel, que leva a outras seções no site original. Primeiro implemente o primeiro banner no html e foquei em acertar o estilo no .css para ficar bem parecido, após isso continuei a implementação no html para os outros banners iguais e, para os banners distintos, adaptei o .css dos banners principais.  
**4.** Com a navbar, conteúdo principal e sider de mobile implementados, a única demanda restante era o footer do site, o formato é identico à navbar, então comecei copiando o código que já tinha e adaptei a partir dali, foi simples de fazer, mas cada seção tinha muitos links e palavras, o que tornou o processo mais demorado.  
**5.** Depois de tudo pronto, arrumei alguns posicionamentos, tamanhos e fiz a navbar ficar fixa no topo da página, quando o usuário faz scroll para baixo.

#### Tecnologias

Html, CSS, javascript

#### Ambiente de desenvolvimento

[Vscode](https://code.visualstudio.com/)   
[VScode Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)   

#### Referências e créditos

- Para a formatação do README segui o exemplo da página [github](https://github.com/elc1090/project1-2024a-pizzutta) que está na página de entrega do projeto.
- Fonte usada para alguns ícones: https://fontawesome.com
- Para as cores do modo escuro, enviei a paleta de cores e pedi que o chatgpt criasse uma paleta melhor de modo escuro.

```
me dê um conjunto melhor de cores para o darkmode de um site:
html.dark-mode {
    --bg-color: #121212;
    --text-color: #f5f5f5;
    --nav-bg: #1a1a1a;
    --sidebar-bg: #1a1a1a;
    --search-bg: #2c2c2c;
    --border-color: #333333;
    --top-bar-bg: #0a0a0a;
    --btn-hover: #2c2c2c;
}

Segue uma sugestão de paleta revisada para dark mode que aprimora o contraste e a hierarquia visual dos elementos:
html.dark-mode {
    --bg-color:    #0D1117;  /* Fundo profundo, similar ao dark mode do GitHub */
    --text-color:  #C9D1D9;  /* Texto claro para boa legibilidade */
    --nav-bg:      #161B22;  /* Fundo levemente mais claro para a barra de navegação */
    --sidebar-bg:  #161B22;  /* Mesma base do nav para consistência */
    --search-bg:   #21262D;  /* Destaque sutil na área de busca */
    --border-color:#30363D;  /* Bordas suaves para delimitar seções sem poluir */
    --top-bar-bg:  #0D1117;  /* Integrado ao fundo geral, mantendo a uniformidade */
    --btn-hover:   #21262D;  /* Efeito hover que realça a interação sem destoar */
}
```

---
Projeto entregue para a disciplina de [Desenvolvimento de Software para a Web](http://github.com/andreainfufsm/elc1090-2025a) em 2025a
