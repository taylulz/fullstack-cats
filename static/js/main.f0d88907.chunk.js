(this.webpackJsonpcatstone=this.webpackJsonpcatstone||[]).push([[0],{62:function(t,c,e){},64:function(t,c,e){"use strict";e.r(c);var a=e(0),i=e(41),r=e.n(i),s=(e(50),e(51),e(10)),o={errorFact:null,fact:null,breeds:[],photos:[]},n=function(t,c){var e=Object(a.useState)(o),i=Object(s.a)(e,2),r=i[0],n=i[1];return Object(a.useEffect)((function(){fetch(t).then((function(t){return t.json()})).then((function(t){n({fact:t.fact,breeds:t.data,photos:t})}))}),[t,c]),r},_=e(26),E=e(4),A=function(){var t=Object(a.useState)(0),c=Object(s.a)(t,2),e=c[0],i=c[1],r=n("https://catfact.ninja/fact",e).fact,o=Object(_.b)({opacity:1,from:{opacity:0}}),A=Object(a.useState)(!0),l=Object(s.a)(A,2),j=l[0],P=l[1],b=Object(_.b)({from:{x:0},x:j?1:0,config:{duration:1e3}}).x;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"card m-3",children:[Object(E.jsx)("div",{className:"card-header p-3",children:Object(E.jsx)("h5",{children:"Cat Facts"})}),Object(E.jsx)(_.a.div,{style:o,children:Object(E.jsx)("h3",{className:"p-3",children:r||"loading..."})})]}),Object(E.jsx)("div",{id:"jiggleButton",onClick:function(){return P(!j)},children:Object(E.jsx)(_.a.div,{style:{opacity:b.interpolate({range:[0,1],output:[.3,1]}),transform:b.interpolate({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]}).interpolate((function(t){return"scale(".concat(t,")")}))},children:Object(E.jsx)("button",{onClick:function(){return i((function(t){return t+1}))},children:"Another Fact pls"})})})]})},l=function(){var t=n("https://catfact.ninja/breeds").breeds;return console.log(t),t?Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"d-flex flex-row flex-wrap my-flex-container",children:t.map((function(t,c){return Object(E.jsxs)("div",{className:"card m-3",style:{width:"18rem"},children:[Object(E.jsx)("h2",{className:"card-header",children:t.breed}),Object(E.jsx)("div",{className:"card-body",children:Object(E.jsxs)("ul",{children:[Object(E.jsxs)("li",{children:["Country: ",t.country]}),Object(E.jsxs)("li",{children:["Origin: ",t.origin]}),Object(E.jsxs)("li",{children:["Coat: ",t.coat]}),Object(E.jsxs)("li",{children:["Pattern: ",t.pattern]})]})})]},c)}))})}):Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("p",{children:"Loading..."})})},j=e(21);var P=function(){return Object(E.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(E.jsxs)("div",{className:"container-fluid",children:[Object(E.jsx)(j.b,{to:"/catstone",className:"navbar-brand",children:"Full Stack Cats"}),Object(E.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(E.jsx)("span",{className:"navbar-toggler-icon"})}),Object(E.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(E.jsxs)("ul",{className:"navbar-nav",children:[Object(E.jsx)("li",{className:"nav-item",children:Object(E.jsx)(j.b,{className:"nav-link active","aria-current":"page",to:"/breeds",children:"Breeds"})}),Object(E.jsx)("li",{className:"nav-item",children:Object(E.jsx)(j.b,{className:"nav-link active","aria-current":"page",to:"/fact",children:"Fact"})}),Object(E.jsx)("li",{className:"nav-item",children:Object(E.jsx)(j.b,{className:"nav-link active","aria-current":"page",to:"/catpics",children:"Cat Pics"})}),Object(E.jsx)("li",{className:"nav-item",children:Object(E.jsx)(j.b,{className:"nav-link active","aria-current":"page",to:"/kittycube",children:"Kitty Cube"})})]})})]})})},b=e.p+"static/media/creamy.7690a4c8.jpg",O=e.p+"static/media/mara.8ffb2c9f.jpg",h=e.p+"static/media/bulma.ca4c5b5a.jpg";var d=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h1",{children:"home"}),Object(E.jsx)("img",{src:b,width:"400px",alt:"creamy, the cat!"}),Object(E.jsx)("img",{src:O,width:"400px",alt:"mara, the cat!"}),Object(E.jsx)("img",{src:h,width:"400px",alt:"bulma, the cat!"})]})},S=e(15),R=e(68),u=e(8),T=e(28),f=function(){var t=Object(a.useRef)(null),c=Object(a.useRef)(null),e=Object(a.useRef)(null);Object(S.e)((function(){return t.current.rotation.x=t.current.rotation.y+=.01})),Object(S.e)((function(){return c.current.rotation.x=c.current.rotation.y+=.01})),Object(S.e)((function(){return e.current.rotation.x=e.current.rotation.y+=.01}));var i=Object(S.f)(u.TextureLoader,h),r=Object(S.f)(u.TextureLoader,O),o=Object(S.f)(u.TextureLoader,b),n=Object(a.useState)(!1),_=Object(s.a)(n,2),A=_[0],l=_[1],j=Object(T.b)({scale:A?[1.4,1.4,1.4]:[1,1,1]});return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(T.a.mesh,{onClick:function(){return l(!A)},scale:j.scale,castShadow:!0,position:[0,0,0],ref:t,children:[Object(E.jsx)("boxBufferGeometry",{attach:"geometry",args:[3,3,3]}),Object(E.jsx)("meshBasicMaterial",{attach:"material",map:i,speed:6,factor:.6})]}),Object(E.jsxs)(T.a.mesh,{onClick:function(){return l(!A)},scale:j.scale,castShadow:!0,position:[6,0,0],ref:c,children:[Object(E.jsx)("boxBufferGeometry",{attach:"geometry",args:[3,3,3]}),Object(E.jsx)("meshBasicMaterial",{attach:"material",map:r,speed:6,factor:.6})]}),Object(E.jsxs)(T.a.mesh,{onClick:function(){return l(!A)},scale:j.scale,castShadow:!0,position:[-6,0,0],ref:e,children:[Object(E.jsx)("boxBufferGeometry",{attach:"geometry",args:[3,3,3]}),Object(E.jsx)("meshBasicMaterial",{attach:"material",map:o,speed:6,factor:.6})]})]})};var p=function(){return Object(E.jsxs)(S.a,{shadowMap:!0,camera:{position:[0,0,-10],fov:80},style:{height:1e3},children:[Object(E.jsx)("ambientLight",{intensity:.3}),Object(E.jsx)("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),Object(E.jsx)("pointLight",{position:[-10,0,-12],intensity:.5}),Object(E.jsx)("pointLight",{position:[0,-10,0],intensity:1.5}),Object(E.jsx)("group",{children:Object(E.jsxs)("mesh",{receiveShadow:!0,rotation:[-Math.PI/2,0,0],position:[0,-5,0],children:[Object(E.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(E.jsx)("shadowMaterial",{attach:"material",opacity:.4})]})}),Object(E.jsx)(a.Suspense,{fallback:null,children:Object(E.jsx)(f,{})}),Object(E.jsx)(R.a,{})]})},m=function(){var t=Object(a.useState)("https://api.thecatapi.com/v1/images/search?limit=100&".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/fullstack-cats",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDrD-iQ56W7ESAaNoqEhi8jCf8PwyEkPMk",REACT_APP_FIREBASE_AUTH_DOMAIN:"chat-tutorial-69c44.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"chat-tutorial-69c44",REACT_APP_FIREBASE_STORAGE_BUCKET:"chat-tutorial-69c44.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"471462513622",REACT_APP_FIREBASE_APP_ID:"1:471462513622:web:cfa6c9ff677b99ffde3277"}).REACT_APP_API_KEY)),c=Object(s.a)(t,2),e=c[0],i=c[1],r="https://api.thecatapi.com/v1/images/search?limit=100&".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/fullstack-cats",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDrD-iQ56W7ESAaNoqEhi8jCf8PwyEkPMk",REACT_APP_FIREBASE_AUTH_DOMAIN:"chat-tutorial-69c44.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"chat-tutorial-69c44",REACT_APP_FIREBASE_STORAGE_BUCKET:"chat-tutorial-69c44.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"471462513622",REACT_APP_FIREBASE_APP_ID:"1:471462513622:web:cfa6c9ff677b99ffde3277"}).REACT_APP_API_KEY),o="https://api.thecatapi.com/v1/images/search?category_ids=4&limit=100&".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/fullstack-cats",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDrD-iQ56W7ESAaNoqEhi8jCf8PwyEkPMk",REACT_APP_FIREBASE_AUTH_DOMAIN:"chat-tutorial-69c44.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"chat-tutorial-69c44",REACT_APP_FIREBASE_STORAGE_BUCKET:"chat-tutorial-69c44.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"471462513622",REACT_APP_FIREBASE_APP_ID:"1:471462513622:web:cfa6c9ff677b99ffde3277"}).REACT_APP_API_KEY),_="https://api.thecatapi.com/v1/images/search?category_ids=1&limit=100&".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/fullstack-cats",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDrD-iQ56W7ESAaNoqEhi8jCf8PwyEkPMk",REACT_APP_FIREBASE_AUTH_DOMAIN:"chat-tutorial-69c44.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"chat-tutorial-69c44",REACT_APP_FIREBASE_STORAGE_BUCKET:"chat-tutorial-69c44.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"471462513622",REACT_APP_FIREBASE_APP_ID:"1:471462513622:web:cfa6c9ff677b99ffde3277"}).REACT_APP_API_KEY),A="https://api.thecatapi.com/v1/images/search?category_ids=2&limit=100&".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/fullstack-cats",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDrD-iQ56W7ESAaNoqEhi8jCf8PwyEkPMk",REACT_APP_FIREBASE_AUTH_DOMAIN:"chat-tutorial-69c44.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"chat-tutorial-69c44",REACT_APP_FIREBASE_STORAGE_BUCKET:"chat-tutorial-69c44.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"471462513622",REACT_APP_FIREBASE_APP_ID:"1:471462513622:web:cfa6c9ff677b99ffde3277"}).REACT_APP_API_KEY),l="https://api.thecatapi.com/v1/images/search?category_ids=5&limit=100&".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/fullstack-cats",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDrD-iQ56W7ESAaNoqEhi8jCf8PwyEkPMk",REACT_APP_FIREBASE_AUTH_DOMAIN:"chat-tutorial-69c44.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"chat-tutorial-69c44",REACT_APP_FIREBASE_STORAGE_BUCKET:"chat-tutorial-69c44.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"471462513622",REACT_APP_FIREBASE_APP_ID:"1:471462513622:web:cfa6c9ff677b99ffde3277"}).REACT_APP_API_KEY),j="https://api.thecatapi.com/v1/images/search?category_ids=7&limit=100&".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/fullstack-cats",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDrD-iQ56W7ESAaNoqEhi8jCf8PwyEkPMk",REACT_APP_FIREBASE_AUTH_DOMAIN:"chat-tutorial-69c44.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"chat-tutorial-69c44",REACT_APP_FIREBASE_STORAGE_BUCKET:"chat-tutorial-69c44.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"471462513622",REACT_APP_FIREBASE_APP_ID:"1:471462513622:web:cfa6c9ff677b99ffde3277"}).REACT_APP_API_KEY),P="https://api.thecatapi.com/v1/images/search?category_ids=14&limit=100&".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/fullstack-cats",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDrD-iQ56W7ESAaNoqEhi8jCf8PwyEkPMk",REACT_APP_FIREBASE_AUTH_DOMAIN:"chat-tutorial-69c44.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"chat-tutorial-69c44",REACT_APP_FIREBASE_STORAGE_BUCKET:"chat-tutorial-69c44.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"471462513622",REACT_APP_FIREBASE_APP_ID:"1:471462513622:web:cfa6c9ff677b99ffde3277"}).REACT_APP_API_KEY),b="https://api.thecatapi.com/v1/images/search?category_ids=15&limit=100&".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/fullstack-cats",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDrD-iQ56W7ESAaNoqEhi8jCf8PwyEkPMk",REACT_APP_FIREBASE_AUTH_DOMAIN:"chat-tutorial-69c44.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"chat-tutorial-69c44",REACT_APP_FIREBASE_STORAGE_BUCKET:"chat-tutorial-69c44.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"471462513622",REACT_APP_FIREBASE_APP_ID:"1:471462513622:web:cfa6c9ff677b99ffde3277"}).REACT_APP_API_KEY),O=n(e).photos;function h(t){i(t)}return O?Object(E.jsxs)(E.Fragment,{children:[e===r?Object(E.jsxs)("div",{children:[Object(E.jsx)("button",{onClick:function(){return h(o)},children:"click for sunglass mode?"})," ",Object(E.jsx)("button",{onClick:function(){return h(_)},children:"click for hat mode?"})," ",Object(E.jsx)("button",{onClick:function(){return h(A)},children:"space mode?"}),Object(E.jsx)("button",{onClick:function(){return h(l)},children:"click for box mode?"}),Object(E.jsx)("button",{onClick:function(){return h(j)},children:"click for tie mode?"}),Object(E.jsx)("button",{onClick:function(){return h(P)},children:"click for sinks mode?"}),Object(E.jsx)("button",{onClick:function(){return h(b)},children:"click for clothes mode?"})]}):Object(E.jsx)("button",{onClick:function(){return h(r)},children:"click for regular mode?"}),O.map((function(t,c){return Object(E.jsx)("div",{children:Object(E.jsx)("img",{src:t.url,alt:"A cat"})},c)}))]}):Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("p",{children:"Loading..."})})},C=e(14);e(62);var I=function(){return Object(E.jsxs)(j.a,{children:[Object(E.jsx)(P,{}),Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)(C.c,{children:[Object(E.jsx)(C.a,{exact:!0,path:"/catstone",children:Object(E.jsx)(d,{})}),Object(E.jsx)(C.a,{path:"/fact",children:Object(E.jsx)(A,{})}),Object(E.jsx)(C.a,{path:"/breeds",children:Object(E.jsx)(l,{})}),Object(E.jsx)(C.a,{path:"/catpics",children:Object(E.jsx)(m,{})}),Object(E.jsx)(C.a,{path:"/kittycube",children:Object(E.jsx)(p,{})})]})})]})};r.a.render(Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(I,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.f0d88907.chunk.js.map