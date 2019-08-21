---
templateKey: blog-post
title: 'Por que (não) escolher Angular'
date: 2019-08-21T10:36:53.875Z
description: >-
  Em uma conversa com uma recrutadora muito bacana eu acabei recusando uma vaga
  devido ao projeto trabalhar com AngularJS e quererem migrar para Angular 8+
  em breve.
tags:
  - angular
  - frameworks
  - react
  - framework
---

Hoje em dia é difícil seguir errado tanto com [React](https://reactjs.org/),
[Angular](https://angular.io/) ou [Vue](https://vuejs.org/) - porém tenho
algumas ressalvas em relação ao Angular que vou tentar discorrer brevemente
aqui.

## Muita opinião

Angular tem um jeitão muito definido (ou fechado, opinativo) de como trabalhar
com ele, o que acaba formando profissionais que saibam mais dele que de
JavaScript em si. Eu não vejo isso como uma coisa boa, visto que frameworks
de frontend nascem e morrem todos os dias. Diferente dele, React ou talvez até
mesmo Vue, lidam com JavaScript (ou TypeScript) mais de perto, dando uma
abertura a um desenvolvimento mais diverso. Veja, isso nada tem a ver com
padrões, pois seguir ou não padões pode ser feito em qualquer um, mas sim
opiniões e regras de como deve ser feito. Em Angular uma página tem que ter um
*controller* pra regular suas variáveis e escopo, tem que ter um *serviço* caso
precise acessar uma API, tem que ter um *pipe* caso precise transformar um dado,
*rotas* caso precise delas, *módulos* e *injeção* para conectar tudo isso...
e isso não é uma recomendação, é o que o Angular impõe. Em outros frameworks
você tem JavaScript (ou TypeScript) pra te dizer o que você pode ou não fazer.
No mesmo exemplo, se quiser fazer uma requisição à uma API você poderia criar
uma linha de código ou um serviço ou como quiser lidar com
[Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). Ou ainda
pegar um módulo público no [GitHub](https://github.com) como o
[Axios](https://github.com/axios/axios), que já foi *battle tested*, evitando
assim reinventar a roda. O mesmo pra rotas, transformar dados, manipular
estado...

Além disso tudo, em
[pesquisas recentes](https://www.rafaelp.com.br/2018-12-07-estado-do-javascript/)
, dentre os 3, Angular é o framework menos utilizado no mundo. React lidera esse
ranking e Vue tem passado todos em popularidade e satisfação. A
[Google](https://www.google.com.br/?gws_rd=ssl), criadora do Angular, tem várias
páginas criadas em React. O [Facebook](https://www.facebook.com/), criador do
React, não tem páginas feitas em Angular. Não é, no mínimo, curioso? O Brasil,
México e alguns países do leste europeu são os únicos com essa estranha escolha
a favor de Angular (e mesmo assim, menos que React ou Vue).
[Nessas pesquisas](https://2018.stateofjs.com/front-end-frameworks/conclusion/quadrants)
, é visível que apesar do grande uso, a satisfação com o fremework é super
baixa.

## E tem mais?

Outro dado importante é que procurar documentação ou exemplo de código em
Angular é complicado porque ele não tem nada a ver com AngularJS, não são
compatíveis e mesmo assim tem o mesmo nome. Procurar por algo no Google
relacionado com um deles é muito mais difícil que qualquer outro framework,
tornando o aprendizado de um Junior algo frustrante. A ironia de tudo estar no
Google também é grande.

> Ah, mas o sistema já é feito em AngularJS, é natural migrar pra Angular

Não. Eles são completamente diferentes e não são compatíveis. Até o Google se
arrepende de ter usado o mesmo nome. Essa é a hora de analisar se valeu mesmo a
pena ter seguido pela linha deles.

## Conclusão

Em grande resumo, eu não acredito que só exista uma maneira de desenvolver pra
web (app, site ou o que for) no futuro próximo. A história e o AngularJS me
convenceram que esse não é o melhor caminho.

Existe bastante material a respeito sobre esse tema, mas separei alguns que
dizem bastante do que eu penso também:

* [ November 5th, 2018
Comments
React vs. Angular: The Complete Comparison](https://programmingwithmosh.com/react/react-vs-angular/) (React vs. Angular: Uma Comparação Completa), por [Mosh Hamedani](https://programmingwithmosh.com/) em 5-Nov-2018
* [Why Angular Made Me Quit Web Dev](https://hackernoon.com/why-angular-made-me-quit-web-dev-f63b83a157af) (Por que Angular Me Fez Desistir Do
Desenvolvimento Web), por [Tobias Merkle]() em 4-Nov-2018
* [Angular - Stop Already!](https://medium.com/@chillypenguin/stopping-angular-40ea642c484d) (Angular - Apenas Pare!), por [Mark Brown](https://medium.com/@chillypenguin) em 5-Mai-2018

## Nota final

Apesar de óbvio, esse artigo expressa apenas minha opinião, não tendo pretensão
alguma de ser a única fonte de verdade ou algo absurdo do gênero. No fim do dia
a melhor ferramenta é aquela que você usa e/ou define como boa, ok? ✌
