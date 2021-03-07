(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{151:function(e,a,c){},152:function(e,a,c){},459:function(e,a,c){},460:function(e,a,c){},469:function(e,a,c){},470:function(e,a,c){},471:function(e,a,c){},472:function(e,a,c){},473:function(e,a,c){"use strict";c.r(a);var t=c(2),s=c.n(t),n=c(144),r=c.n(n),i=c(18),l=(c(151),c(152),c(64)),j=(c(153),c(459),c(3)),o=function(){return fetch("//rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,species:e.species,origin:e.origin.name,status:e.status,episode:e.episode.length}}))}))},d=(c(460),c(1)),u=function(e){return Object(d.jsx)(i.b,{to:"/character/".concat(e.character.id),children:Object(d.jsxs)("li",{className:"Card",children:[Object(d.jsx)("img",{className:"Card__image",src:e.character.image,alt:"Imagen de ".concat(e.character.name),title:"Imagen de ".concat(e.character.name)}),Object(d.jsx)("p",{className:"Card__name",children:e.character.name}),Object(d.jsxs)("p",{className:"Card__species",children:[e.character.species,Object(d.jsx)("i",{className:"fas fa-plus-circle"})]})]})})},b=(c(469),c.p+"static/media/Unluck_Search.2b79cf30.png"),m=function(e){var a=e.characters.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})).map((function(e){return Object(d.jsx)(u,{character:e},e.id)})),c=0!==e.characters.length?Object(d.jsx)("ul",{className:"List__ul",children:a}):Object(d.jsxs)("div",{className:"Unluck",children:[Object(d.jsx)("img",{className:"Unluck__image",src:b}),Object(d.jsx)("p",{className:"Unluck__text",children:"Todos sabemos que las bodas son funerales con pastel... deja de buscar gente inexistente a la que invitar!"})]});return Object(d.jsx)("section",{className:"List",children:c})},h=(c(470),c.p+"static/media/Not_Found.e9621ba3.png"),O=function(e){return void 0===e.character?Object(d.jsxs)("div",{className:"NotFound",children:[Object(d.jsx)("img",{className:"NotFound__image",src:h}),Object(d.jsx)("p",{className:"NotFound__text",children:"Put... salvapedos ! No me pongas a prueba y deja de trastear la URL o lo que sea que est\xe1s haciendo !"}),Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("div",{className:"backward",children:Object(d.jsx)("i",{className:"fas fa-backward"})})})]}):Object(d.jsxs)("div",{className:"Detail",children:[Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("span",{})}),Object(d.jsxs)("section",{className:"Detail__section",children:[Object(d.jsx)("h2",{className:"Detail__section--h2",children:e.character.name}),Object(d.jsxs)("ul",{className:"Detail__section--list",children:[Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:e.character.image,className:"Detail__section--image",alt:"Imagen de ".concat(e.character.name),title:"Imagen de ".concat(e.character.name)})}),Object(d.jsxs)("li",{children:["Estatus : ","Alive"===e.character.status?Object(d.jsx)("i",{className:"fas fa-heartbeat"}):"Dead"===e.character.status?Object(d.jsx)("i",{className:"fas fa-dizzy"}):"unknown"===e.character.status?Object(d.jsx)("i",{className:"far fa-question-circle"}):void 0]}),Object(d.jsxs)("li",{children:["Especie : ",e.character.species]}),Object(d.jsxs)("li",{children:["Origen : ",e.character.origin]}),Object(d.jsxs)("li",{children:["Episodios : ",e.character.episode]})]})]}),Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("div",{className:"backward",children:Object(d.jsx)("i",{className:"fas fa-backward"})})})]})},x=(c(92),function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"name",children:"Nombre : "}),Object(d.jsx)("input",{type:"text",name:"name",id:"name",className:"InputName",value:e.name,onChange:function(a){e.handleFilter({value:a.target.value,key:"name"}),console.log(a.target.value)}})]})})}),p=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"species",children:"Especie : "}),Object(d.jsxs)("select",{className:"SelectSpecies",name:"species",id:"species",onChange:function(a){e.handleFilter({value:a.target.value,key:"species"}),console.log("species",a.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"Todas las especies"}),Object(d.jsx)("option",{value:"Alien",children:"Alien"}),Object(d.jsx)("option",{value:"Human",children:"Humano"})]})]})})},f=function(e){e.preventDefault()},g=function(e){return Object(d.jsx)("section",{className:"Filters",children:Object(d.jsxs)("form",{onSubmit:f,children:[Object(d.jsx)(x,{handleFilter:e.handleFilter,name:e.name}),Object(d.jsx)(p,{handleFilter:e.handleFilter})]})})},N=c(58),v=c(59),_=c(61),k=c(60),y=c.p+"static/media/RickandMortyLogo.46711fda.png",F=(c(471),function(e){Object(_.a)(c,e);var a=Object(k.a)(c);function c(){return Object(N.a)(this,c),a.apply(this,arguments)}return Object(v.a)(c,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Header",children:Object(d.jsx)(i.b,{to:"../",children:Object(d.jsx)("img",{className:"Header__logo",src:y,alt:"logo de Rick and Morty",title:"logo de Rick and Morty"})})})}}]),c}(s.a.Component)),C=(c(472),function(e){Object(_.a)(c,e);var a=Object(k.a)(c);function c(){return Object(N.a)(this,c),a.apply(this,arguments)}return Object(v.a)(c,[{key:"render",value:function(){return Object(d.jsx)("footer",{className:"Footer",children:Object(d.jsxs)("small",{className:"Footer_small",children:["Rick and Morty by"," ",Object(d.jsxs)("a",{href:"https://github.com/bertapsan",target:"_blank",className:"Footer__small--link",children:["bertapsan ",Object(d.jsx)("i",{className:"fas fa-feather-alt"})]})]})})}}]),c}(s.a.Component)),w=function(){var e=Object(t.useState)([]),a=Object(l.a)(e,2),c=a[0],s=a[1],n=Object(t.useState)(""),r=Object(l.a)(n,2),i=r[0],u=r[1],b=Object(t.useState)("all"),h=Object(l.a)(b,2),x=h[0],p=h[1];Object(t.useEffect)((function(){o().then((function(e){s(e)}))}),[]);var f=c.filter((function(e){return e.name.toUpperCase().includes(i.toUpperCase())})).filter((function(e){return"all"===x||e.species===x}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(F,{}),Object(d.jsxs)(j.c,{children:[Object(d.jsxs)(j.a,{exact:!0,path:"/",children:[Object(d.jsx)(g,{handleFilter:function(e){"name"===e.key?u(e.value):"species"===e.key&&p(e.value)},name:i}),Object(d.jsx)(m,{characters:f})]}),Object(d.jsx)(j.a,{path:"/character/:id",render:function(e){var a=e.match.params.id,t=c.find((function(e){return e.id===parseInt(a)}));return Object(d.jsx)(O,{character:t})}})]}),Object(d.jsx)(C,{})]})};r.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))},92:function(e,a,c){}},[[473,1,2]]]);
//# sourceMappingURL=main.592d21ac.chunk.js.map