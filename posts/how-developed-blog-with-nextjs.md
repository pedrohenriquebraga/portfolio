---
title: "Como desenvolvi um blog usando NextJs"
date: "01/08/2022"
author: "Pedro Henrique"
description: "Olá, eu sou o Pedro Henrique, desenvolvedor Fullstack. Hoje venho apresentar a vocês meu blog e também mostrar como ele foi desenvolvido!"
banner: "/posts/looking-post.png"
---

Seja muito bem-vindo ao meu blog! Este é blog sobre **tecnologia, programação e outros assuntos relacionados a essa área**.

Neste post gostaria de contar por que resolvi criar esse blog e como ele foi desenvolvido.

## Por que resolvi criar um blog?

Criar um blog foi um dos primeiros projetos que tive interesse em criar quando comecei no mundo da programação. Porém, por muito tempo não tive habilidade suficiente para criá-lo.

Pensei muito em usar plataformas como o _Medium_, _Blogguer_ e outros criadores de blogs, mas nunca me encontrei nessas plataformas, pois sentia que elas escondiam o meu conteúdo e também não ofereciam o nível de personalização que eu gostaria de ter.

Até que agora no ano de 2022, após construir meu [portfólio](/) em **NextJS**, vi que tinha um bom website em minhas mãos que poderia ser usado para criar um blog. Pois além de ajudar as pessoas a me conhecerem, também pode ser usado para publicar conteúdos que em geral não daria em outras plataformas.

## Como foi desenvolvido

### O que foi usado?

#### NextJs

![NextJs Logo](/posts/nextjs-logo.png)

O principal framework utilizado foi o [NextJS](https://nextjs.org/). Ele basicamente é usado para gerar páginas estáticas (como este post, por exemplo), que diferente do ReactJs, gera páginas dinâmicas através do Javascript, prejudicando assim o SEO das páginas.

NextJs também é um grande aliado na performance do site, pois gera todo o código HTML nos servidores da Vercel (o chamado SSR) fazendo assim com que a página seja entregue ao navegador já pronta para ser renderizada. Ele também ajuda na visualização de imagens, otimizando elas da melhor forma para cada dispositivo e ajustando melhor o tamanho e qualidade de cada imagem.

Além disso, aplica o chamado _lazy loading_, ou carregamento lento, para que as imagens não sejam carregadas até que o usuário as veja em tela.

#### Markdown

![Markdown Logo](/posts/markdown-logo.png)

Você deve estar se perguntando _"Porquê diabos **Markdown** está nessa lista?!"_ Bom, Markdown é uma boa alternativa para quem precisa escrever textos formatos de forma fácil, rápida e simples, sem a necessidade de usar HTML, que possui uma sintaxe mais complexa e "suja".

Isso torna ela uma ótima aliada de quem quer escrever posts (inclusive este post foi todo escrito em Markdown 😁). Porém os navegadores não interpretam Markdown, então é preciso convertê-lo para HTML. Para isso uso a biblioteca [React Markdown](https://github.com/remarkjs/react-markdown) para converter do Markdown em HTML e exibir o post formatado no navegador.

#### Typescript

![Typescript Logo](/posts/typescript-logo.png)

Chegamos ao queridinho **Typescript**, um linguagem/superset para o Javascript que adiciona tipagem estática ao código, coisa que o Javascript não possui. Isso facilita MUITO o desenvolvedor de código, pois ele pode escrever código mais seguro e mais fácil de ler, além da própria ajuda que a IDE fornece ao digitar seus códigos.

## Chegamos ao fim

Chegamos ao fim do primeiro post desse blog, se você ficou interessado em saber mais sobre como funciona esse blog, quer contribuir com o desenvolvimento ou simplesmente quer explorar o código, basta [entrar no meu Github](https://github.com/pedrohenriquebraga). Então, até a próxima!
