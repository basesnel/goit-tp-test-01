"use strict";(self.webpackChunkgoit_tp_test_01=self.webpackChunkgoit_tp_test_01||[]).push([[477],{477:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(683),s=n(433),o=n(439),a=n(791),i=n(689);var c=n(87),l=n(184),u=function(e){var t=e.to,n=e.children;return(0,l.jsx)(c.rU,{to:t,className:"BackLink",children:n})};var d=n.p+"static/media/goit-logo.e917114d7945c04c85a8946a331d28b6.svg";function f(e){var t=e.user,n=e.tweets,r=e.followers,s=e.isfollowing,o=e.avatar,a=e.onHandleClick;function i(e){return e<1e3?e:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return(0,l.jsxs)("div",{className:"Card",children:[(0,l.jsx)("img",{src:d,alt:"GoIt Logo",className:"Card__logo"}),(0,l.jsx)("div",{className:"Card__imgwrapper",children:(0,l.jsx)("img",{src:o,alt:t,className:"Card__img"})}),(0,l.jsx)("div",{className:"Card__delimiter"}),(0,l.jsxs)("div",{className:"Card__data",children:[(0,l.jsxs)("p",{className:"Card__txt",children:[i(n)," tweets"]}),(0,l.jsxs)("p",{className:"Card__txt",children:[i(r)," followers"]}),s?(0,l.jsx)("button",{className:"Card__button Card__button--following",onClick:a,children:"following"}):(0,l.jsx)("button",{className:"Card__button",onClick:a,children:"follow"})]})]})}function m(e){var t=e.tweets,n=e.updateTweet;return(0,l.jsx)("section",{className:"Cards",children:(0,l.jsx)("ul",{className:"Cards__list",children:t.map((function(e){var t=e.id,r=e.user,s=e.tweets,o=e.followers,a=e.isfollowing,i=e.avatar;return(0,l.jsx)("li",{children:(0,l.jsx)(f,{user:r,tweets:s,followers:o,isfollowing:a,avatar:i,onHandleClick:function(){return n(t)}})},t)}))})})}var h=n(402);function g(e){var t=e.waitingNote;return(0,l.jsxs)("div",{className:"Loader",children:[(0,l.jsx)(h.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),(0,l.jsx)("p",{children:t})]})}function j(e){var t=e.onClick;return(0,l.jsx)("button",{onClick:t,className:"LoadMoreButton",children:"Load more"})}function w(e){var t=e.message;return(0,l.jsx)("section",{className:"Warning",children:(0,l.jsx)("p",{children:t})})}var p=function(){var e,t,n=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",c=(0,a.useState)([]),d=(0,o.Z)(c,2),f=d[0],h=d[1],p=(0,a.useState)(1),x=(0,o.Z)(p,2),_=x[0],v=x[1],C=(0,a.useState)(!0),k=(0,o.Z)(C,2),N=k[0],b=k[1],y=(0,a.useState)(!1),S=(0,o.Z)(y,2),Z=S[0],T=S[1],L=(0,a.useState)(null),q=(0,o.Z)(L,2),B=q[0],E=q[1],H=(0,a.useRef)(!1);(0,a.useEffect)((function(){return b(!0),T(!1),H.current,setTimeout((function(){var e,t;(e=_,t=3,fetch("https://6457a8a30c15cb14820dc3cc.mockapi.io/users?p=".concat(e,"&l=").concat(t),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry, bad request from the query."))}))).then((function(e){h((function(t){return[].concat((0,s.Z)(t),(0,s.Z)(e))}))})).catch((function(e){E(e),T(!0),console.log(e.message)})).finally(b(!1))}),250),function(){H.current=!0}}),[_]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,{to:n,children:"Back"}),(0,l.jsx)("h1",{className:"App__title",children:"Tweets"}),(0,l.jsx)(m,{tweets:f,updateTweet:function(e){var t=f.find((function(t){return t.id===e})),n=t.followers,s=t.isfollowing,o=s?n-1:n+1,a=!s;(function(e,t,n){return fetch("https://6457a8a30c15cb14820dc3cc.mockapi.io/users/".concat(e),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({followers:t,isfollowing:n})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry, bad request from the query."))}))})(e,o,a).then((function(t){h((function(t){return t.map((function(t){return t.id===e?(0,r.Z)((0,r.Z)({},t),{},{followers:o,isfollowing:a}):t}))}))})).catch((function(e){console.log(e.message)}))}}),N?(0,l.jsx)(g,{waitingNote:"Loading  more tweets..."}):Z?(0,l.jsx)(w,{message:B.message}):(0,l.jsx)(j,{onClick:function(){v(_+1)}})]})}}}]);
//# sourceMappingURL=477.d7cb4492.chunk.js.map