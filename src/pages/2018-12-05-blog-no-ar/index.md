---
templateKey: blog-post
title: 'Blog no ar!'
date: 2018-12-05T05:39:53.875Z
description: >-
  Depois de brincar um pouco com o Gatsby, decidi colocar esse blog no ar.
  Bônus - alguns bug fixes
tags:
  - gatsby
  - ''
---

Agora que o blog está com um tema que considero agradável, resolvi publicá-lo.
Ele foi todo feito com [Gatsby](https://www.gatsbyjs.org/). No início, estava
usando o [NetlifyCMS](https://www.netlifycms.org/), porém acho que ele ainda não
está tão fluído quanto gostaria. A facilidade de criar um post com uma interface
é interessante, mas os bugs que sofri pra ajustar ainda não pagam essa
facilidade.

## Bônus!

Já existem [alguns bugs](https://github.com/bsides/blog/issues) que preciso
arrumar. É possível que você não veja nenhum caso esteja vendo esse post muito
à frente do tempo, mas o objetivo também é colocar aqui um caminho de toda essa
resolução.

## O dilema da língua, parte 2

Meu devaneio no [primeiro post](/2018-12-03-primeiro-post) ~~(ainda não sei linkar pro post dentro do
markdown!)~~ me fez pensar que eu deveria então escrever tudo em português,
incluindo [os commits](https://github.com/bsides/blog/commits/master). Ainda
não estou certo que esse é o melhor caminho, mas estou tentando!

## Consertando os bugs

Como disse previamente, já existem
[alguns bugs](https://github.com/bsides/blog/issues)! então bora mostrar como
resolvê-los nesse post também.

Pra resolver o [problema com a data](https://github.com/bsides/blog/issues/1),
é bem simples. Ao invés de usar `getDay()` preciso usar `getDate()`. O primeiro
retorna o dia da semana e o segundo o dia do mês, que é o que precisava mesmo.
Um erro comum, imagino... já que o objeto `Date` ter um método `getDay()` que
não retorna um dia, mas sim o dia da semana parece um desaforo! 😅

Feito isso é só colocar essa função no índice do blog também. Já que estou
usando a mesma função mais de 1 vez, é interessante criar essa função em um
arquivo separado e chamar ele onde preciso que seja usado. Criei um arquivo
`helper.js` e chamei o método direto onde precisei formatar a data. O conteúdo
desse arquivo segue abaixo:

```javascript
function monthNames() {
  return Array.from({ length: 12 }, (x, index) =>
    new Date(0, index).toLocaleDateString('pt-BR', { month: 'short' })
  )
}

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1)
}

function formatDateToLocale(theDate) {
  return `${theDate.getDate()} / ${
    monthNames()[theDate.getMonth()]
  } / ${theDate.getFullYear()}`
}

export { monthNames, capitalizeFirstLetter, formatDateToLocale }
```

Espero que isso ajude alguém que precise arrumar as datas para a língua local
usando o Gatsby!

## Arrumando o layout para mobile

Esse ainda estou fazendo e espero que esteja pronto em breve. É assunto pro
próximo post. Por enquanto o site funciona bem, só precisa dar um "zoom out"
ao carregar uma página. O ajuste deve ser simples também. Quer me ajudar? Me
envie um tweet ou um [Pull Request](https://github.com/bsides/blog/pulls)! 😉
