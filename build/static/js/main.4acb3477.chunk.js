(this.webpackJsonpParallax=this.webpackJsonpParallax||[]).push([[1],{105:function(e,t,c){},106:function(e,t,c){},128:function(e,t,c){},149:function(e,t){},150:function(e,t){},162:function(e,t,c){},167:function(e,t,c){},168:function(e,t,c){},169:function(e,t,c){},170:function(e,t,c){},171:function(e,t,c){},172:function(e,t,c){},173:function(e,t,c){"use strict";c.r(t);var s,a=c(1),n=c(23),i=c.n(n),r=(c(105),c(69),c(106),c(52),c(35)),l=(c(108),c(0)),j=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"main-banner ",children:Object(l.jsx)("div",{className:"container-fluid p-0",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:" col-12 p-0 m-auto",children:Object(l.jsxs)("main",{children:[Object(l.jsx)("section",{class:"section-background parallax",children:Object(l.jsx)("h2",{children:"Desert"})}),Object(l.jsxs)("section",{class:"text-bloc",children:[Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus."}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus."})]}),Object(l.jsx)("section",{class:"section-background parallax1",children:Object(l.jsx)("h2",{children:"Mountain"})}),Object(l.jsx)("section",{class:"text-bloc"}),Object(l.jsx)("section",{class:"section-background parallax2",children:Object(l.jsx)("h2",{children:"Sea"})}),Object(l.jsx)("section",{class:"section-background parallax3",children:Object(l.jsx)("h2",{children:"Galaxy"})})]})})})})})})},o=c(3),d=c(37),b=(c(25),c(128),c(18)),u=(c(51),c(50)),h=c(56),m=c(85),O=Object(m.a)({name:"toasts",initialState:{data:[]},reducers:{push:function(e,t){var c=t.payload,s=e.data.findIndex((function(e){return e.id===t.payload.id}));s>=0&&e.data.splice(s,1),e.data.unshift(c)},remove:function(e,t){var c=e.data.findIndex((function(e){return e.id===t.payload}));c>=0&&e.data.splice(c,1)},clear:function(e){e.data=[]}}}),p=O.actions,x=p.clear,g=p.remove,f=p.push,v=(O.reducer,"string"),N="string",w="string",E="string",A=c(19),k=c(86),q=c(87),S=c(88),_=c(89),C=c.n(_),M=["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161","https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161","https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],I=function(){var e=C()(0,M.length-1);return M[e]},y=c(90),F=(c(180),"injected"),L="walletconnect",T="bsc",R=I(),D=parseInt("5",10),B=new k.a({supportedChainIds:[D]}),U=new q.a({rpc:Object(A.a)({},D,R),bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:12e3}),H=new S.a({supportedChainIds:[D]}),P=new y.a({rpc:Object(A.a)({},D,R),url:"https://mainnet.infura.io/v3/6e516a50f8404231bcb030ce93cf466f",appName:"web3-react-demo"}),G=(s={},Object(A.a)(s,F,B),Object(A.a)(s,L,U),Object(A.a)(s,T,H),Object(A.a)(s,"coinbaseWallet",P),s),W=function(){var e=Object(d.a)(Object(o.a)().mark((function e(){var t,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.ethereum)){e.next=15;break}return c=parseInt("5",10),e.prev=3,e.next=6,t.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x".concat(c.toString(16))}]});case 6:return e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(3),console.error(e.t0),e.abrupt("return",!1);case 13:e.next=17;break;case 15:return console.error("Can't setup the BSC network on metamask because window.ethereum is undefined"),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(r.c)(),t=e.activate,c=e.deactivate,s=function(){var e=Object(h.b)();return Object(a.useMemo)((function(){var t=function(t){return e(f(t))};return{toastError:function(e,c){return t({id:Object(u.kebabCase)(e),type:N,title:e,description:c})},toastInfo:function(e,c){return t({id:Object(u.kebabCase)(e),type:E,title:e,description:c})},toastSuccess:function(e,c){return t({id:Object(u.kebabCase)(e),type:v,title:e,description:c})},toastWarning:function(e,c){return t({id:Object(u.kebabCase)(e),type:w,title:e,description:c})},push:t,remove:function(t){return e(g(t))},clear:function(){return e(x())}}}),[e])}().toastError,n=Object(a.useCallback)((function(e){var c=G[e];c?t(c,function(){var e=Object(d.a)(Object(o.a)().mark((function e(a){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a instanceof r.a)){e.next=7;break}return e.next=3,W();case 3:e.sent&&t(c),e.next=10;break;case 7:c.walletConnectProvider=void 0,c.walletConnectProvider=void 0,s(a.name,a.message);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):s("Can't find connector","The connector config is wrong")}),[]);return{login:n,logout:c}},z=c(12),V=(c(162),c(62)),Q=c.n(V),K=(c(163),c(164),c(165),c(166),function(){return Object(a.useEffect)((function(){Q.a.init()}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"main-bannersec ",children:Object(l.jsxs)("div",{class:"external",children:[Object(l.jsx)("a",{href:"https://quecko.com/about-us/",target:"_blank",rel:"",children:Object(l.jsx)("h1",{className:"Queckofaily",children:"QUECKO faimily "})}),Object(l.jsxs)("div",{class:"horizontal-scroll-wrapper",children:[Object(l.jsx)("div",{class:"img-wrapper slower",children:Object(l.jsxs)("a",{href:"https://quecko.com/about-us/",target:"_blank",rel:"",children:[Object(l.jsx)("img",{src:"http://quecko.com/wp-content/uploads/2023/02/Alee.png",alt:""}),Object(l.jsx)("h5",{children:"ALEE ABBASI"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:" CEO"})]})}),Object(l.jsx)("div",{class:"img-wrapper faster",children:Object(l.jsxs)("a",{href:"https://quecko.com/about-us/",target:"_blank",rel:"noopener",children:[Object(l.jsx)("img",{src:"http://quecko.com/wp-content/uploads/2023/02/Shoaib.png",alt:""}),Object(l.jsx)("h5",{children:"SHOAIB JABBAR"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:" MANAGING DIRECTOR"})]})}),Object(l.jsx)("div",{class:"img-wrapper slower vertical",children:Object(l.jsxs)("a",{href:"https://quecko.com/about-us/",target:"_blank",rel:"noopener",children:[Object(l.jsx)("img",{src:"http://quecko.com/wp-content/uploads/2023/02/Sharjeel.png",alt:""}),Object(l.jsx)("h5",{children:"SHARJEEL AWAN"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"CHIEF PRODUCT OFFICER"})]})}),Object(l.jsx)("div",{class:"img-wrapper slower slower-down",children:Object(l.jsxs)("a",{href:"https://quecko.com/about-us/",target:"_blank",rel:"noopener",children:[Object(l.jsx)("img",{src:"http://quecko.com/wp-content/uploads/2023/02/Waleed.png",alt:""}),Object(l.jsx)("h5",{children:"WALEED QURESHI"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"DEVELOPMENT TEAM LEAD"})]})}),Object(l.jsx)("div",{class:"img-wrapper",children:Object(l.jsxs)("a",{href:"https://quecko.com/about-us/",target:"_blank",rel:"noopener",children:[Object(l.jsx)("img",{src:"http://quecko.com/wp-content/uploads/2023/02/Faiza.png",alt:""}),Object(l.jsx)("h5",{children:"FAIZA MINHAS"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"PEOPLE MANAGER"})]})}),Object(l.jsx)("div",{class:"img-wrapper slower",children:Object(l.jsxs)("a",{href:"https://quecko.com/about-us/",target:"_blank",rel:"noopener",children:[Object(l.jsx)("img",{src:"http://quecko.com/wp-content/uploads/2023/02/Usman.png",alt:""}),Object(l.jsx)("h5",{children:"USMAN MALIK"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"TEAM LEAD FRONT-END"})]})}),Object(l.jsx)("div",{class:"img-wrapper faster1",children:Object(l.jsxs)("a",{href:"https://quecko.com/about-us/",target:"_blank",rel:"noopener",children:[Object(l.jsx)("img",{src:"http://quecko.com/wp-content/uploads/2023/02/Zia.png",alt:""}),Object(l.jsx)("h5",{children:"M. ZIA UL REHMAN"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"TEAM LEAD REACT-NATIVE"})]})}),Object(l.jsx)("div",{class:"img-wrapper slower slower2",children:Object(l.jsxs)("a",{href:"https://quecko.com/about-us/",target:"_blank",rel:"noopener",children:[Object(l.jsx)("img",{src:"http://quecko.com/wp-content/uploads/2023/02/Usama.png",alt:""}),Object(l.jsx)("h5",{children:"OSAMA CHATTHA"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"TEAM LEAD QA"})]})}),Object(l.jsx)("div",{class:"img-wrapper",children:Object(l.jsxs)("a",{href:"https://quecko.com/about-us/",target:"_blank",rel:"noopener",children:[Object(l.jsx)("img",{src:"http://quecko.com/wp-content/uploads/2023/02/Fahad.png",alt:""}),Object(l.jsx)("h5",{children:"FAHAD SULEMAN"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"CHIEF MARKETING OFFICER"})]})}),Object(l.jsx)("div",{class:"img-wrapper slower",children:Object(l.jsxs)("a",{href:"https://quecko.com/about-us/",target:"_blank",rel:"noopener",children:[Object(l.jsx)("img",{src:"http://quecko.com/wp-content/uploads/2023/02/Salman.png",alt:""}),Object(l.jsx)("h5",{children:"RANA SALMAN"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"PROJECT MANAGER"})]})}),Object(l.jsx)("div",{class:"img-wrapper slower last",children:Object(l.jsxs)("a",{href:"https://quecko.com/about-us/",target:"_blank",rel:"noopener",children:[Object(l.jsx)("img",{src:"http://quecko.com/wp-content/uploads/2023/02/Jamal.png",alt:""}),Object(l.jsx)("h5",{children:"JAMAL WASEEM"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"TEAM LEAD UI/UX"})]})})]}),Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Css-only parallax horizontal gallery"})})]})})})});c(167),c(168);var X=function(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(K,{})]})},Z=(c(169),function(){return Object(l.jsx)(l.Fragment,{})}),Y=c(98),$=(c(170),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"main-profile ",children:[Object(l.jsx)("div",{className:"profile_background"}),Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:" col-xl-10 col-lg-10 col-md-12 col-sm-12 m-auto",children:Object(l.jsxs)("div",{className:"main_profilecard",children:[Object(l.jsxs)("div",{className:"iner_profile",children:[Object(l.jsx)("a",{class:"",children:Object(l.jsx)("img",{src:"\\avatarpro.svg",alt:"",className:"logoimggpro"})}),Object(l.jsxs)("div",{className:"profilemainn",children:[Object(l.jsx)("h4",{className:"name_heading",children:"Daniel Guzman"}),Object(l.jsxs)("p",{className:"copy_data",children:["0x2E2463B0D768FF8E14D0...56F43 ",Object(l.jsx)("img",{src:"\\copy.svg",alt:"",className:"logoimggpccro"})]}),Object(l.jsxs)("p",{className:"profile_para",children:["Sed ut perspiciatis unde omnis iste natus error sit voluptatem ",Object(l.jsx)("br",{}),"accusantium doloremque laudantium, totam rem aperiam,",Object(l.jsx)("br",{})," eaque ipsa quae ab illo inventore veritatis et quasi."]})]})]}),Object(l.jsx)("div",{className:"right_icons",children:Object(l.jsxs)("ul",{className:"list-inline",children:[Object(l.jsx)("li",{className:"list-inline-item ",children:Object(l.jsxs)("a",{href:"",children:["  ",Object(l.jsx)("img",{src:"\\telegrm.svg",alt:"",className:""})]})}),Object(l.jsx)("li",{className:"list-inline-item ",children:Object(l.jsx)("a",{class:"",children:Object(l.jsx)("img",{src:"\\twitrr.svg",alt:"",className:""})})}),Object(l.jsx)("li",{className:"list-inline-item ",children:Object(l.jsx)("a",{class:"",children:Object(l.jsx)("img",{src:"\\instgrm.svg",alt:"",className:""})})})]})})]})})})})]})})}),ee=(c(171),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"main-address",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-xl-12 p-0",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-xl-6  m-auto p-0",children:[Object(l.jsxs)("div",{className:"walletcard",children:[Object(l.jsx)("h4",{children:"Wallet Address"}),Object(l.jsx)("p",{children:"0x4DC09253B3c5F238fb2256cB5e08085B7A09F52B"})]}),Object(l.jsxs)("div",{className:"parentaddress",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("h4",{children:"Supply"}),Object(l.jsx)("p",{children:"2/10"})]}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("h4",{children:"Sale Status"}),Object(l.jsx)("p",{children:"Coming Soon"})]})]}),Object(l.jsx)("div",{className:"imagewallet",children:Object(l.jsx)("img",{src:"\\assestwallet\\inner-card.svg",className:"img-fluid"})}),Object(l.jsx)(b.b,{to:"/walletmint",children:Object(l.jsx)("div",{className:"mintbtn",children:Object(l.jsx)("button",{children:"Mint"})})})]})})})})})})})}),te=(c(172),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("section",{className:"main-mint",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-xl-12 p-0",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-xl-6  m-auto p-0",children:[Object(l.jsxs)("div",{className:"walletcard",children:[Object(l.jsx)("h4",{children:"Wallet Address"}),Object(l.jsx)("p",{children:"0x4DC09253B3c5F238fb2256cB5e08085B7A09F52B"})]}),Object(l.jsxs)("div",{className:"parentaddress",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("h4",{children:"Price"}),Object(l.jsx)("p",{children:"0.45 ETH"})]}),Object(l.jsxs)("div",{className:"center",children:[Object(l.jsx)("h4",{children:"Supply"}),Object(l.jsx)("p",{children:"2/10"})]}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("h4",{children:"Sale Status"}),Object(l.jsx)("p",{children:"Coming Soon"})]})]}),Object(l.jsx)("div",{className:"imagewallet",children:Object(l.jsx)("img",{src:"\\assestwallet\\inner-card.svg",className:"img-fluid"})}),Object(l.jsx)("div",{className:"pricecard",children:Object(l.jsx)("h4",{children:"Total price: 0.02 ETH"})}),Object(l.jsx)("div",{className:"counter",children:Object(l.jsxs)("div",{className:"btn__container",children:[Object(l.jsx)("button",{className:"control__btn",children:"-"}),Object(l.jsx)("button",{className:"reset",children:"1"}),Object(l.jsx)("button",{className:"control__btn",children:"+"})]})}),Object(l.jsx)("div",{className:"mintbtn",children:Object(l.jsx)("button",{className:"","data-toggle":"modal","data-target":"#exampleModal",children:"Mint"})})]})})})})})}),Object(l.jsx)("div",{className:"mint-modal",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-sm-12",children:Object(l.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(l.jsx)("div",{class:"modal-dialog",role:"document",children:Object(l.jsx)("div",{class:"modal-content",children:Object(l.jsxs)("div",{class:"modal-body",children:[Object(l.jsxs)("div",{className:"head",children:[Object(l.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Minting"}),Object(l.jsx)("a",{type:"a",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(l.jsx)("img",{src:"\\assestwallet\\entypo_cross.svg",className:"img-fluid"})})]}),Object(l.jsx)("div",{className:"ticksquare",children:Object(l.jsx)("img",{src:"\\assestwallet\\tick-square.svg",className:"img-fluid"})}),Object(l.jsx)("div",{className:"para",children:Object(l.jsx)("p",{children:"Minted Successfully"})}),Object(l.jsx)("div",{className:"donebtn",children:Object(l.jsx)("button",{children:"Done"})})]})})})})})})})]})}),ce="bsc",se=function(){var e=J().login;Object(a.useEffect)((function(){var t=window.localStorage.getItem("connectorId");t&&t!==ce&&e("injected")}),[e])};var ae=function(){return se(),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Y.a,{style:{fontSize:20}}),Object(l.jsxs)(b.a,{children:[Object(l.jsxs)(z.c,{children:[Object(l.jsx)(z.a,{exact:!0,path:"/",component:X}),Object(l.jsx)(z.a,{exact:!0,path:"/mainprofile",component:$}),Object(l.jsx)(z.a,{exact:!0,path:"/walletaddress",component:ee}),Object(l.jsx)(z.a,{exact:!0,path:"/walletmint",component:te})]}),Object(l.jsx)(Z,{})]})]})},ne=c(21),ie=c(49),re=c(5),le={GetUserAll:[]},je=Object(ne.b)({UserReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case"GETUSER":return Object(re.a)(Object(re.a)({},e),{},{GetUserAll:s});case"USER_REWARD":return Object(re.a)(Object(re.a)({},e),{},{reward:s});default:return e}}}),oe=je,de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.c,be=Object(ne.d)(oe,de(Object(ne.a)(ie.a)));i.a.render(Object(l.jsx)(h.a,{store:be,children:Object(l.jsx)(r.b,{getLibrary:function(e){return e},children:Object(l.jsx)(ae,{})})}),document.getElementById("root"))},69:function(e,t,c){}},[[173,2,4]]]);
//# sourceMappingURL=main.4acb3477.chunk.js.map