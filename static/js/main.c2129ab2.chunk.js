(this.webpackJsonpmeethub=this.webpackJsonpmeethub||[]).push([[0],{260:function(e,t,n){},261:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(68),a=n.n(i),s=(n(260),n(261),n(1)),o=n.n(s),j=n(4),b=n(7),u=n(241),d=n.n(u),l=n(242),O=n(86),h=n(35);d.a.config(),Object(l.a)({apiKey:"AIzaSyBmbF3uSOiFv7Rss6NEshRVyzXos6gLA_w",authDomain:"meethub-f1ebc.firebaseapp.com",projectId:"meethub-f1ebc",storageBucket:"meethub-f1ebc.appspot.com",messagingSenderId:"289476154225",appId:"1:289476154225:web:bb131c78c2bbdf05c29cd0",measurementId:"G-CD3VD83MCQ"});var x=Object(O.b)(),f=Object(h.f)(),m=new O.a,g=function(){return Object(O.d)(x,m).catch((function(e){console.log(e.message)}))},p=n(11),v=Object(c.createContext)(null),C=function(e){var t=e.children,n=Object(c.useState)(null),r=Object(b.a)(n,2),i=r[0],a=r[1];return Object(c.useEffect)((function(){Object(O.c)(x,function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(p.jsx)(v.Provider,{value:i,children:t})},S=n(247),y=n(30),k=n(162),w=n(168),I=n(174),E=n(175),L=n(176),D=n(177),R=n(123),P=n(179),z=n(251),M=function(){return Object(h.e)(Object(h.b)(f,"events"))},F=function(e){return Object(h.g)(Object(h.b)(f,"events"),(function(t){return e(t)}))},N=function(e,t,n){return Object(h.k)(Object(h.d)(f,"users",e,"events",t),"interested."+n.uid,{userId:n.uid,displayName:n.displayName,photoURL:n.photoURL,isAnonymous:n.isAnonymous})},W=function(e,t,n){return Object(h.k)(Object(h.d)(f,"users",e,"events",t),"interested."+n.uid,Object(h.c)())},A=function(){var e=r.a.useState([]),t=Object(b.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){F((function(e){return i(e.docs.map((function(e){var t;return Object(k.a)(Object(k.a)({},e.data()),{},{id:e.id,creatorId:null===(t=e.ref.parent.parent)||void 0===t?void 0:t.id})})))}))}),[]),Object(c.useEffect)((function(){console.log("Events Updated:",n)}),[n]),Object(p.jsxs)("div",{children:[Object(p.jsx)(w.a,{fontWeight:"medium",mt:"5",size:"lg",children:"All Events"}),Object(p.jsx)(I.a,{borderWidth:"1px",borderRadius:"lg",padding:"0",marginTop:"2",children:Object(p.jsx)(z.a,{useWindowScroll:!0,totalCount:n.length,itemContent:function(e){return Object(p.jsxs)(p.Fragment,{children:[0!==e&&Object(p.jsx)(E.a,{}),Object(p.jsx)(G,{event:n[e]})]})}})})]})},G=function(e){var t=Object(c.useContext)(v),n=t&&e.event.interested&&Object.keys(e.event.interested).includes(t.uid);return Object(p.jsxs)(I.a,{p:5,children:[Object(p.jsx)(L.a,{fontFamily:"heading",fontWeight:700,mb:3,fontSize:"md",color:"gray.500",children:new Date(1e3*e.event.date.seconds).toLocaleDateString()}),Object(p.jsx)(w.a,{mb:3,fontSize:{base:"xl",md:"2xl"},children:e.event.title}),Object(p.jsx)(L.a,{fontSize:"md",color:"gray.400",children:e.event.description}),Object(p.jsxs)(I.a,{borderWidth:"1px",borderRadius:"lg",padding:"2",children:[Object(p.jsx)(D.b,{paddingBottom:"1",children:t&&Object(p.jsx)(R.a,{onClick:function(){return(n?W:N)(e.event.creatorId,e.event.id,t)},children:n?"I'm not interested":"I'm interested"})}),Object(p.jsxs)(D.b,{children:[Object(p.jsx)(I.a,{marginRight:"1",children:"Interested users:"}),e.event.interested?Object.values(e.event.interested).map((function(e){return Object(p.jsx)(P.a,{src:e.photoURL,rounded:"full",boxSize:"6"},e.uid)})):"None"]})]})]})},B=n(62),V=n(224),_=n(65),J=n(184),T=n(195),U=n(204),q=n(236),H=n(238),K=n(243),Q=function(){return Object(p.jsx)(R.a,{alignSelf:"center",leftIcon:Object(p.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png",alt:""}),onClick:g,children:"Continue with Google"})},X=function(){var e=r.a.useState(""),t=Object(b.a)(e,2),n=t[0],i=t[1],a=r.a.useState(""),s=Object(b.a)(a,2),o=s[0],j=s[1],u=r.a.useState(new Date),d=Object(b.a)(u,2),l=d[0],O=d[1],x=r.a.useState(""),m=Object(b.a)(x,2),g=m[0],C=m[1],S=r.a.useState(2),y=Object(b.a)(S,2),k=y[0],w=y[1],E=r.a.useState(10),L=Object(b.a)(E,2),P=L[0],z=L[1],N=Object(c.useContext)(v);return Object(c.useEffect)((function(){F((function(e){console.log("Listening on events...",e.docs.map((function(e){return e.data()})))}))}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Create Page"}),Object(p.jsx)(I.a,{borderWidth:"1px",borderRadius:"lg",padding:"2",children:N?Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log({title:n,description:o,date:l,creator:g,numberOfPeopleMin:k,numberOfPeopleMax:P}),N&&function(e,t){Object(h.j)(Object(h.d)(Object(h.a)(f,"users",e.uid,"events")),t)}(N,{title:n,description:o,date:l,creator:g,numberOfPeopleMin:k,numberOfPeopleMax:P})},children:Object(p.jsxs)(_.a,{isRequired:!0,id:"createEvent",children:[Object(p.jsx)(J.a,{children:"Title"}),Object(p.jsx)(T.a,{type:"text",onChange:function(e){return i(e.target.value)}}),Object(p.jsx)(J.a,{children:"Description"}),Object(p.jsx)(U.a,{onChange:function(e){return j(e.target.value)}}),Object(p.jsx)(J.a,{children:"Date"}),Object(p.jsx)(K.DatePicker,{initialValue:new Date,onDateChange:function(e){return e&&O(e)}}),Object(p.jsx)(J.a,{children:"Creator"}),Object(p.jsx)(T.a,{type:"text",onChange:function(e){return C(e.target.value)}}),Object(p.jsx)(J.a,{children:"Number of people"}),Object(p.jsxs)(q.b,{isInline:!0,children:[Object(p.jsxs)(H.c,{defaultValue:2,min:2,max:100,children:[Object(p.jsx)(H.d,{onChange:function(e){return w(+e.target.value)}}),Object(p.jsxs)(H.e,{children:[Object(p.jsx)(H.b,{}),Object(p.jsx)(H.a,{})]})]}),Object(p.jsxs)(H.c,{defaultValue:10,min:2,max:100,children:[Object(p.jsx)(H.d,{onChange:function(e){return z(+e.target.value)}}),Object(p.jsxs)(H.e,{children:[Object(p.jsx)(H.b,{}),Object(p.jsx)(H.a,{})]})]})]}),Object(p.jsx)(R.a,{mt:4,colorScheme:"teal",type:"submit",children:"Create Event"})]})}):Object(p.jsx)("div",{children:Object(p.jsx)(D.b,{children:Object(p.jsx)(I.a,{padding:"5em",children:Object(p.jsxs)(q.b,{children:[Object(p.jsx)("h1",{children:"Please login to create an event"}),Object(p.jsx)(Q,{})]})})})})}),Object(p.jsx)(R.a,{mt:4,colorScheme:"teal",type:"submit",onClick:function(){(function(e){return Object(h.e)(Object(h.i)(Object(h.a)(f,"users",e.uid,"events"),Object(h.h)("date")))})(N).then((function(e){return console.log(e.docs.map((function(e){return e.data()})))}))},children:"Create Event"}),Object(p.jsx)(R.a,{mt:4,colorScheme:"teal",type:"submit",onClick:function(){M().then((function(e){return console.log(e.docs.map((function(e){return e.data()})))}))},children:"Create Event"})]})},Y=function(){var e=Object(c.useContext)(v),t=Object(c.useState)([]),n=Object(b.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){M().then((function(e){i(e.docs.map((function(e){return e.data()})))}))}),[]),Object(p.jsxs)(I.a,{borderWidth:"1px",borderRadius:"lg",padding:"2",margin:"5em",children:[Object(p.jsx)("h1",{children:"Log in"})," ",Object(p.jsx)("br",{}),Object(p.jsx)(Q,{}),Object(p.jsx)(E.a,{margin:"2em 0 2em 0"}),Object(p.jsx)("h1",{children:"Logged in user:"})," ",Object(p.jsx)("br",{}),JSON.stringify(e),Object(p.jsx)(E.a,{margin:"2em 0 2em 0"}),Object(p.jsx)("h1",{children:"All Events:"})," ",Object(p.jsx)("br",{}),JSON.stringify(r),Object(p.jsx)(E.a,{margin:"2em 0 2em 0"}),Object(p.jsx)("h1",{children:"Logout:"})," ",Object(p.jsx)("br",{}),Object(p.jsx)(R.a,{onClick:function(){Object(O.e)(x).then((function(){})).catch((function(e){console.log(e.message)}))},children:"Logout"})]})},Z=Object(B.a)({config:{initialColorMode:"dark",useSystemColorMode:!0}});var $=function(){return Object(p.jsx)(V.a,{theme:Z,children:Object(p.jsxs)(C,{children:[Object(p.jsxs)(I.a,{w:"100%",padding:"5em 20% 5em 20%",children:[Object(p.jsx)(w.a,{size:"2xl",orientation:"horizontal",children:"MeetHub"}),Object(p.jsx)(S.a,{children:Object(p.jsxs)(y.c,{children:[Object(p.jsx)(y.a,{path:"/create",component:X}),Object(p.jsx)(y.a,{path:"/",component:A})]})})]}),Object(p.jsx)(Y,{})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,302)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)($,{})}),document.getElementById("root")),ee()}},[[285,1,2]]]);
//# sourceMappingURL=main.c2129ab2.chunk.js.map