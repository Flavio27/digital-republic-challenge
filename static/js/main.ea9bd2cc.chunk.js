(this["webpackJsonpdigital-republic-challenge"]=this["webpackJsonpdigital-republic-challenge"]||[]).push([[0],{64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),c=t.n(r),i=t(10),s=t.n(i),o=(t(64),t(65),t(14)),d=Object(r.createContext)();function l(e){var a=e.children,t=Object(r.useState)(0),c=Object(o.a)(t,2),i=c[0],s=c[1],l=Object(r.useState)([]),j=Object(o.a)(l,2),b=j[0],u=j[1];return Object(n.jsx)(d.Provider,{value:{paredes:b,setParedes:u,totalParede:i,setTotalParede:s},children:a})}function j(){var e=Object(r.useContext)(d);if(!e)throw new Error("useParedeData must be used within a Paredes provider");return{paredes:e.paredes,setParedes:e.setParedes,totalParede:e.totalParede,setTotalParede:e.setTotalParede}}var b=t(4);var u=function(){var e=j(),a=e.paredes,t=e.setParedes;return function(){if(a.length<4)return t((function(e){return[].concat(Object(b.a)(e),[{id:e.length,tamanho:0,tamanhoError:!1,tamanhoDisponivel:0,tamanhoDisError:!1,comprimento:0,altura:0,alturaError:!1,janelas:0,janelasError:!1,portas:0,portasError:!1,tinta:0,ok:!1}])}))}()},m=(t(66),t(112)),h=t(111),O=t(109),p=t(103);t(67);var x=function(e){var a=e.n,t=j(),r=t.paredes,i=t.setParedes;function s(e,t){i(Object(b.a)(r),r[a].janelas=0),i(Object(b.a)(r),r[a].janelasError=!1),i(Object(b.a)(r),r[a].portasError=!1),"comprimento"===e?i(Object(b.a)(r),r[a].comprimento=parseFloat(t)):t>=2.2?(i(Object(b.a)(r),r[a].altura=parseFloat(t)),i(Object(b.a)(r),r[a].alturaError=!1)):i(Object(b.a)(r),r[a].alturaError=!0),r[a].comprimento*r[a].altura<=15&&r[a].comprimento*r[a].altura>=1?(i(Object(b.a)(r),r[a].tamanho=r[a].comprimento*r[a].altura),i(Object(b.a)(r),r[a].tamanhoDisponivel=r[a].comprimento*r[a].altura/2),i(Object(b.a)(r),r[a].tamanhoError=!1)):i(Object(b.a)(r),r[a].tamanhoError=!0)}return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("h4",{children:"Medidas"}),Object(n.jsx)(p.a,{in:r[a].tamanhoError,children:Object(n.jsxs)(O.a,{severity:"error",children:["Tamanho m\xe1ximo ",Object(n.jsx)("strong",{children:"15m\xb2"}),Object(n.jsx)("br",{}),"Tamanho minimo ",Object(n.jsx)("strong",{children:"1m\xb2"})]})}),Object(n.jsxs)("div",{className:"input-div",children:[Object(n.jsx)(h.a,{id:"standard-adornment-weight",onChange:function(e){return s("altura",e.target.value)},type:"number",placeholder:"Altura",endAdornment:Object(n.jsx)(m.a,{position:"end",children:"M"}),"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"}}),Object(n.jsx)(p.a,{className:"colapse",in:r[a].alturaError,children:Object(n.jsx)("span",{className:"alert text-danger",children:"* Altura minima 2.20"})}),Object(n.jsx)(h.a,{id:"standard-adornment-weight",onChange:function(e){return s("comprimento",e.target.value)},type:"number",placeholder:"Comprimento",endAdornment:Object(n.jsx)(m.a,{position:"end",children:"M"}),"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"}}),Object(n.jsx)("br",{})]})]})},A=t(110),f=t(41),g=t.n(f),v=t(42),E=t.n(v),P=t(40),C=t.n(P);t(72);var N=function(e){var a=e.n,t=Object(r.useState)(!1),c=Object(o.a)(t,2),i=c[0],s=c[1],d=j(),l=d.paredes,u=d.setParedes;function m(e){"add"===e?l[a].tamanhoDisponivel>=2.4&&l[a].comprimento>=2?(u(Object(b.a)(l),l[a].janelas++),u(Object(b.a)(l),l[a].tamanhoDisponivel-=2.4),u(Object(b.a)(l),l[a].janelasError=!1),s(!1)):(u(Object(b.a)(l),l[a].janelasError=!0),s(!0)):0!==l[a].janelas&&(u(Object(b.a)(l),l[a].janelas--),u(Object(b.a)(l),l[a].tamanhoDisponivel+=2.4),u(Object(b.a)(l),l[a].janelasError=!1),s(!1))}return Object(n.jsxs)("div",{className:"add-item",children:[Object(n.jsx)(p.a,{in:i,children:Object(n.jsx)(O.a,{severity:"warning",action:Object(n.jsx)(A.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){s(!1)},children:Object(n.jsx)(C.a,{fontSize:"inherit"})}),children:"Espa\xe7o insuficiente!"})}),Object(n.jsx)(A.a,{size:"medium",children:Object(n.jsx)(g.a,{fontSize:"inherit",className:"sub",onClick:function(){return m("sub")}})}),Object(n.jsxs)("span",{className:"item",children:[l[a].janelas>0?"Janelas ":"Janela ","[",l[a].janelas,"]"]}),Object(n.jsx)(A.a,{size:"medium",children:Object(n.jsx)(E.a,{fontSize:"inherit",className:"add",onClick:function(){return m("add")}})}),Object(n.jsx)("br",{}),Object(n.jsx)("h6",{className:"tamanho-janela",children:"2.40m\xb2"})]})};t(74);var w=function(e){var a=e.n,t=Object(r.useState)(!1),c=Object(o.a)(t,2),i=c[0],s=c[1],d=j(),l=d.paredes,u=d.setParedes;function m(e){"add"===e?l[a].tamanhoDisponivel>=1.52&&l[a].altura>=2.2?(u(Object(b.a)(l),l[a].portas++),u(Object(b.a)(l),l[a].tamanhoDisponivel-=1.52),s(!1)):(u(Object(b.a)(l),l[a].portasError=!0),s(!0)):0!==l[a].portas&&(u(Object(b.a)(l),l[a].portas--),u(Object(b.a)(l),l[a].tamanhoDisponivel+=1.52),u(Object(b.a)(l),l[a].portasError=!1),s(!1))}return Object(n.jsxs)("div",{className:"add-item",children:[Object(n.jsx)(p.a,{in:i,children:Object(n.jsx)(O.a,{severity:"warning",action:Object(n.jsx)(A.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){s(!1)},children:Object(n.jsx)(C.a,{fontSize:"inherit"})}),children:"Espa\xe7o insuficiente!"})}),Object(n.jsx)(A.a,{size:"medium",children:Object(n.jsx)(g.a,{fontSize:"inherit",className:"sub",onClick:function(){return m("sub")}})}),Object(n.jsxs)("span",{className:"item",children:[l[a].portas>0?"Portas ":"Porta ","[",l[a].portas,"]"]}),Object(n.jsx)(A.a,{size:"medium",children:Object(n.jsx)(E.a,{fontSize:"inherit",className:"add",onClick:function(){return m("add")}})}),Object(n.jsx)("br",{}),Object(n.jsx)("h6",{className:"tamanho-porta",children:"1.52m\xb2"})]})};var D=function(e){var a=e.n,t=j(),i=t.paredes,s=t.setParedes;return Object(r.useEffect)((function(){s(Object(b.a)(i),i[a].tinta=i[a].tamanho-(2.4*i[a].janelas+1.52*i[a].portas))}),[i[a].tamanho,i[a].tamanhoDisponivel,i[a].janelas,i[a].portas]),Object(n.jsx)("div",{className:"card ".concat(i[a].tamanhoError&&"border border-danger"),children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsxs)("h2",{className:"card-title",children:["Parede ",a+1]}),Object(n.jsxs)("h3",{children:["Tamanho: ",i[a].tamanho.toFixed(2),"m\xb2"]}),Object(n.jsx)("br",{}),Object(n.jsx)(x,{n:a}),Object(n.jsx)("br",{}),i[a].tamanho>=2.2&&i[a].tamanho<=15&&!1===i[a].tamanhoError?Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("h4",{children:"Adicionar"}),Object(n.jsx)(N,{n:a}),Object(n.jsx)(w,{n:a}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{children:["Espa\xe7o dispon\xedvel: ",Object(n.jsxs)("strong",{children:[i[a].tamanhoDisponivel.toFixed(2),"m\xb2"]})]})]}):""]})})},F=[{lata:1,quantidade:.5},{lata:2,quantidade:2.5},{lata:3,quantidade:3.6},{lata:4,quantidade:18}],Q=t(106),z=t(108),S=t(107),k=t(78),B=(t(75),0),J=Object(Q.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"1px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function q(){var e=j(),a=e.paredes,t=e.setParedes,r=e.totalParede,i=e.setTotalParede,s=J(),d=c.a.useState(!1),l=Object(o.a)(d,2),u=l[0],m=l[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{type:"button",onClick:function(){var e=!0;for(var n in a)(a[n].tamanho<2.2||a[n].tamanhoError||a[n].alturaError)&&(t(Object(b.a)(a),a[n].tamanhoError=!0),e=!1);e&&m(!0),function(){for(var e in B=0,a)B+=a[e].tinta,a[e].tamanho<2.2&&t(Object(b.a)(a),a[e].tamanhoError=!0);i(B/5)}()},className:"btn btn-dark btn-lg btn-block",children:"Calcular"}),Object(n.jsx)(z.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:u,onClose:function(){m(!1)},closeAfterTransition:!0,BackdropComponent:S.a,BackdropProps:{timeout:500},children:Object(n.jsx)(k.a,{in:u,children:Object(n.jsxs)("div",{className:s.paper,children:[Object(n.jsx)("h2",{id:"transition-modal-title",className:"alert btn-light info",role:"alert",children:"Total de tinta"}),Object(n.jsxs)("p",{id:"transition-modal-description",children:["Voc\xea ir\xe1 precisar de ",Object(n.jsxs)("strong",{children:[r.toFixed(2)," litros"]})," de tinta para pintar a sala."]}),Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsx)("li",{className:"list-group-item list-group-item-secondary",children:Object(n.jsx)("h5",{className:"info",children:"Op\xe7\xf5es de latas"})}),F.map((function(e){return Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsxs)("h5",{children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",className:"img-tinta",alt:"lata-de-tinta"}),r/e.quantidade>Math.round(r/e.quantidade)?" ".concat(Math.round(r/e.quantidade)+1," "):" ".concat(Math.round(r/e.quantidade)," "),Math.round(r/e.quantidade)>1?"Latas ":"Lata ","de ",e.quantidade," Litros."]})},e.lata)}))]})]})})})]})}t(76);var X=function(){var e=j().paredes;return u(),Object(n.jsxs)("div",{className:"body",children:[e.map((function(e){return Object(n.jsx)(D,{n:e.id},e.id)})),Object(n.jsx)("div",{className:"div-modal",children:Object(n.jsx)(q,{})})]})};var W=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(l,{children:Object(n.jsx)(X,{})})})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,113)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),n(e),r(e),c(e),i(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(W,{})}),document.getElementById("root")),K()}},[[77,1,2]]]);
//# sourceMappingURL=main.ea9bd2cc.chunk.js.map