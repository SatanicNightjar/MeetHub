(this.webpackJsonpmeethub=this.webpackJsonpmeethub||[]).push([[0],{265:function(e,t,n){},266:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(68),s=n.n(i),a=(n(265),n(266),n(1)),o=n.n(a),j=n(4),b=n(7),u=n(246),d=n.n(u),l=n(247),O=n(87),h=n(35);d.a.config(),Object(l.a)({apiKey:"AIzaSyBmbF3uSOiFv7Rss6NEshRVyzXos6gLA_w",authDomain:"meethub-f1ebc.firebaseapp.com",projectId:"meethub-f1ebc",storageBucket:"meethub-f1ebc.appspot.com",messagingSenderId:"289476154225",appId:"1:289476154225:web:bb131c78c2bbdf05c29cd0",measurementId:"G-CD3VD83MCQ"});var x=Object(O.b)(),f=Object(h.f)(),m=new O.a,g=function(){return Object(O.d)(x,m).catch((function(e){console.log(e.message)}))},p=n(11),v=Object(c.createContext)(null),S=function(e){var t=e.children,n=Object(c.useState)(null),r=Object(b.a)(n,2),i=r[0],s=r[1];return Object(c.useEffect)((function(){Object(O.c)(x,function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(p.jsx)(v.Provider,{value:i,children:t})},C=n(252),y=n(32),I=n(19),w=n(169),L=n(305),k=n(306),z=n(175),D=n(181),E=n(182),R=n(239),P=n(240),M=n(183),F=n(229),N=n(185),W=n(186),A=n(188),G=n(256),U=function(){return Object(h.e)(Object(h.b)(f,"events"))},J=function(e){return Object(h.g)(Object(h.b)(f,"events"),(function(t){return e(t)}))},T=function(){var e=r.a.useState([]),t=Object(b.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){J((function(e){return i(e.docs.map((function(e){var t;return Object(w.a)(Object(w.a)({},e.data()),{},{id:e.id,creatorId:null===(t=e.ref.parent.parent)||void 0===t?void 0:t.id})})))}))}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)(z.a,{fontWeight:"medium",mt:"5",size:"lg",children:"All Events"}),Object(p.jsx)(D.a,{borderWidth:"1px",borderRadius:"lg",padding:"0",marginTop:"2",children:Object(p.jsx)(G.a,{useWindowScroll:!0,totalCount:n.length,itemContent:function(e){return Object(p.jsxs)(p.Fragment,{children:[0!==e&&Object(p.jsx)(E.a,{}),Object(p.jsx)(V,{event:n[e]})]})}})})]})},V=function(e){var t=Object(c.useContext)(v),n=t&&e.event.interested&&Object.keys(e.event.interested).includes(t.uid),r=Object(c.useState)(!1),i=Object(b.a)(r,2),s=i[0],a=i[1],o=Object(R.a)({base:1,sm:2,md:5,lg:10,xl:15}),j=e.event.interested?Object(I.a)(Object.values(e.event.interested)).sort((function(e,t){return e.userId.localeCompare(t.userId)})):[];return Object(p.jsxs)(D.a,{p:5,pt:3,overflow:"initial",children:[Object(p.jsxs)(P.b,{direction:"row",justify:"space-between",children:[Object(p.jsx)(M.a,{pt:2,fontFamily:"heading",fontWeight:700,fontSize:"md",color:"gray.500",children:new Date(1e3*e.event.date.seconds).toLocaleDateString()}),Object(p.jsxs)(P.a,{pt:0,children:[j.length>o?Object(p.jsxs)(F.a,{trigger:"hover",placement:"top",isLazy:!0,children:[Object(p.jsx)(F.h,{children:Object(p.jsxs)(P.a,{children:[j.slice(0,o).map((function(e){return Object(p.jsx)(N.a,{src:e.photoURL,rounded:"full",boxSize:"6"},e.userId)})),Object(p.jsxs)(M.a,{fontSize:"14",p:"1",children:[" +",j.length-o," "]})]})}),Object(p.jsxs)(F.e,{children:[Object(p.jsx)(F.g,{pt:4,fontWeight:"bold",border:"0",children:"Interested Users"}),Object(p.jsx)(F.b,{}),Object(p.jsx)(F.c,{children:Object(p.jsx)(W.a,{children:j.map((function(e,t){return Object(p.jsx)(W.b,{children:Object(p.jsx)(N.a,{src:e.photoURL,rounded:"full",boxSize:"6"})},e.userId+t)}))})})]})]}):j.length>0&&j.slice(0,o).map((function(e){return Object(p.jsx)(N.a,{src:e.photoURL,rounded:"full",boxSize:"6"},e.userId)})),t&&Object(p.jsx)(A.a,{"aria-label":"interested",icon:n?Object(p.jsx)(L.a,{}):Object(p.jsx)(k.a,{}),isRound:!0,size:"sm",variant:"ghost",isLoading:s,onClick:function(){n?function(e,t,n){Object(h.k)(Object(h.d)(f,"users",e,"events",t),"interested."+n.uid,Object(h.c)())}(e.event.creatorId,e.event.id,t):function(e,t,n){Object(h.k)(Object(h.d)(f,"users",e,"events",t),"interested."+n.uid,{userId:n.uid,displayName:n.displayName,photoURL:n.photoURL,isAnonymous:n.isAnonymous})}(e.event.creatorId,e.event.id,t),a(!0),setTimeout((function(){return a(!1)}),500)}})]})]}),Object(p.jsx)(z.a,{mb:3,fontSize:{base:"xl",md:"2xl"},children:e.event.title}),Object(p.jsx)(M.a,{fontSize:"md",color:"gray.400",children:e.event.description}),Object(p.jsx)(M.a,{children:JSON.stringify(o)})]})},_=n(62),B=n(230),q=n(65),H=n(193),K=n(201),Q=n(211),X=n(243),Y=n(125),Z=n(202),$=n(248),ee=function(){return Object(p.jsx)(Y.a,{alignSelf:"center",leftIcon:Object(p.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png",alt:""}),onClick:g,children:"Continue with Google"})},te=function(){var e=r.a.useState(""),t=Object(b.a)(e,2),n=t[0],i=t[1],s=r.a.useState(""),a=Object(b.a)(s,2),o=a[0],j=a[1],u=r.a.useState(new Date),d=Object(b.a)(u,2),l=d[0],O=d[1],x=r.a.useState(""),m=Object(b.a)(x,2),g=m[0],S=m[1],C=r.a.useState(2),y=Object(b.a)(C,2),I=y[0],w=y[1],L=r.a.useState(10),k=Object(b.a)(L,2),z=k[0],E=k[1],R=Object(c.useContext)(v);return Object(c.useEffect)((function(){J((function(e){console.log("Listening on events...",e.docs.map((function(e){return e.data()})))}))}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Create Page"}),Object(p.jsx)(D.a,{borderWidth:"1px",borderRadius:"lg",padding:"2",children:R?Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log({title:n,description:o,date:l,creator:g,numberOfPeopleMin:I,numberOfPeopleMax:z}),R&&function(e,t){Object(h.j)(Object(h.d)(Object(h.a)(f,"users",e.uid,"events")),t)}(R,{title:n,description:o,date:l,creator:g,numberOfPeopleMin:I,numberOfPeopleMax:z})},children:Object(p.jsxs)(q.a,{isRequired:!0,id:"createEvent",children:[Object(p.jsx)(H.a,{children:"Title"}),Object(p.jsx)(K.a,{type:"text",onChange:function(e){return i(e.target.value)}}),Object(p.jsx)(H.a,{children:"Description"}),Object(p.jsx)(Q.a,{onChange:function(e){return j(e.target.value)}}),Object(p.jsx)(H.a,{children:"Date"}),Object(p.jsx)($.DatePicker,{initialValue:new Date,onDateChange:function(e){return e&&O(e)}}),Object(p.jsx)(H.a,{children:"Creator"}),Object(p.jsx)(K.a,{type:"text",onChange:function(e){return S(e.target.value)}}),Object(p.jsx)(H.a,{children:"Number of people"}),Object(p.jsxs)(P.b,{isInline:!0,children:[Object(p.jsxs)(X.c,{defaultValue:2,min:2,max:100,children:[Object(p.jsx)(X.d,{onChange:function(e){return w(+e.target.value)}}),Object(p.jsxs)(X.e,{children:[Object(p.jsx)(X.b,{}),Object(p.jsx)(X.a,{})]})]}),Object(p.jsxs)(X.c,{defaultValue:10,min:2,max:100,children:[Object(p.jsx)(X.d,{onChange:function(e){return E(+e.target.value)}}),Object(p.jsxs)(X.e,{children:[Object(p.jsx)(X.b,{}),Object(p.jsx)(X.a,{})]})]})]}),Object(p.jsx)(Y.a,{mt:4,colorScheme:"teal",type:"submit",children:"Create Event"})]})}):Object(p.jsx)("div",{children:Object(p.jsx)(Z.b,{children:Object(p.jsx)(D.a,{padding:"5em",children:Object(p.jsxs)(P.b,{children:[Object(p.jsx)("h1",{children:"Please login to create an event"}),Object(p.jsx)(ee,{})]})})})})}),Object(p.jsx)(Y.a,{mt:4,colorScheme:"teal",type:"submit",onClick:function(){(function(e){return Object(h.e)(Object(h.i)(Object(h.a)(f,"users",e.uid,"events"),Object(h.h)("date")))})(R).then((function(e){return console.log(e.docs.map((function(e){return e.data()})))}))},children:"Create Event"}),Object(p.jsx)(Y.a,{mt:4,colorScheme:"teal",type:"submit",onClick:function(){U().then((function(e){return console.log(e.docs.map((function(e){return e.data()})))}))},children:"Create Event"})]})},ne=function(){var e=Object(c.useContext)(v),t=Object(c.useState)([]),n=Object(b.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){U().then((function(e){i(e.docs.map((function(e){return e.data()})))}))}),[]),Object(p.jsxs)(D.a,{borderWidth:"1px",borderRadius:"lg",padding:"2",margin:"5em",children:[Object(p.jsx)("h1",{children:"Log in"})," ",Object(p.jsx)("br",{}),Object(p.jsx)(ee,{}),Object(p.jsx)(E.a,{margin:"2em 0 2em 0"}),Object(p.jsx)("h1",{children:"Logged in user:"})," ",Object(p.jsx)("br",{}),JSON.stringify(e),Object(p.jsx)(E.a,{margin:"2em 0 2em 0"}),Object(p.jsx)("h1",{children:"All Events:"})," ",Object(p.jsx)("br",{}),JSON.stringify(r),Object(p.jsx)(E.a,{margin:"2em 0 2em 0"}),Object(p.jsx)("h1",{children:"Logout:"})," ",Object(p.jsx)("br",{}),Object(p.jsx)(Y.a,{onClick:function(){Object(O.e)(x).then((function(){})).catch((function(e){console.log(e.message)}))},children:"Logout"})]})},ce=Object(_.a)({config:{initialColorMode:"dark",useSystemColorMode:!0}});var re=function(){return Object(p.jsx)(B.a,{theme:ce,children:Object(p.jsxs)(S,{children:[Object(p.jsxs)(D.a,{w:"100%",padding:"5em 20% 5em 20%",children:[Object(p.jsx)(z.a,{size:"2xl",orientation:"horizontal",children:"MeetHub"}),Object(p.jsx)(C.a,{children:Object(p.jsxs)(y.c,{children:[Object(p.jsx)(y.a,{path:"/create",component:te}),Object(p.jsx)(y.a,{path:"/",component:T})]})})]}),Object(p.jsx)(ne,{})]})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,310)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(re,{})}),document.getElementById("root")),ie()}},[[290,1,2]]]);
//# sourceMappingURL=main.c6e7a444.chunk.js.map