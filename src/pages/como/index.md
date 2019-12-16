---
templateKey: page
title: 'Como?'
tags:
  - como
  - onde
  - hospedagem
  - gatsby
  - netlify
---

Como foi feito o blog, quais tecnologias, onde hospedo e devaneios sobre como
cheguei nessas conclusões.

## Básico

O blog é feito com o [Gatsby](https://gatsbyjs.org), que é um framework em
[React](https://reactjs.org), [GraphgQL](https://graphql.org) e
[Node.js](https://nodejs.org), buscando os dados de onde for
([Markdown](https://daringfireball.net/projects/markdown/), wordpress, api) e
compilando em HTML e CSS de forma simples pro navegador. É hospedado no
[Netlify](https://www.netlify.com/), onde acontece a publicação (build)
automática sempre que a branch master do
[repositório](https://github.com/bsides/blog) no [Github](https://github.com)
é atualizada. Eu tento seguir os padrões para pull requests sempre que possível,
apesar de não ter ninguém pra revisar, pra eu mesmo ter um histórico do que
aconteceu e quando.

## Futuro

Pretendo continuar com o Gatsby, porém pretendo acrescentar
[Typescript](https://www.typescriptlang.org/) porque estou me forçando a
conhecer mais e mais sobre ele. Também quero adicionar
[MDX](https://mdxjs.com/), que é um Markdown componentizado, ou seja, escrever
Markdown com [JSX](https://reactjs.org/docs/introducing-jsx.html) pra eu poder
fazer layouts mais complexos sem precisar reinventar a roda (ou layout) toda
vez que quiser fazer isso.

## Onde tudo começou

No passado eu tentei fazer um jogo em
[RPGMaker MV](https://www.rpgmakerweb.com/products/programs/rpg-maker-mv)
chamado [Lumi RPG](https://lumirpg.github.io). O processo todo da criação do
jogo foi um grande aprendizado e eu resolvi documentar criando um blog. Esse
primeiro blog foi feito em [Jekyll](https://jekyllrb.com), um sistema de blog
feito em [Ruby](https://www.ruby-lang.org) super interessante e estático.
Naquela época eu já fazia muita automação com o [Gulp](https://gulpjs.com),
então não era nada problemático compactar tudo e publicar onde fosse. Foi nessa
época que conheci o Netlify, que permitiam hospedar o site de graça caso fosse
pra algo open source (que era o caso) e me davam protocolo HTTPS de graça,
coisa que o
[Github ainda não fazia](https://github.com/isaacs/github/issues/156).

Isso estava funcionando muito bem, porém algumas coisas me deixava insatisfeito.
O processo de publicação (build) era um tanto demorado. Depois do Jekyll fazer
o grosso do negócio, eu entrava com o Gulp pra automatizar algumas coisas, como
compactar o html, as imagens, arrumar alguns links, embutir o CSS na página
e por aí vai. Fiz tudo isso por um grande desafio de deixar o blog o mais
rápido possível enquanto ainda funcional e responsivo - e consegui, mas ao
custo de uma publicação extremamente devagar pros meus padrões.

## Os finalmentes

Eu já acompanhava o Gatsby há algum tempo e resolvi testar refazer o blog nele -
e fiquei impressionado. Consegui refazer o blog todo em pouquíssimo tempo e
ele já passava com notas incríveis no
[Lighthouse](https://developers.google.com/web/tools/lighthouse). Nessa mesma
época o Github começou a abrir o protocolo HTTPS para seus sites estáticos e
foi então que decidir migrar pro Gatsby e pro Github. Sei que já mencionei
acima e não trabalho mais naquele projeto, mas você pode conferir o
[antigo repositório do Jekyll](https://github.com/lumirpg) (tem 2?) e
[o site (blog)](https://lumirpg.github.io) ainda.

## Agora

Gatsby já está na versão 2 e muita coisa mudou pra melhor. Eu ainda estou
aprendendo a me virar por aqui, mas o principal dessa jornada é o quanto me
ensinou. Eu entrei nessa pra me divertir e produzir algo enquanto aprendia e
pelo jeito deu certo!
