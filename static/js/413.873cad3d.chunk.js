"use strict";(self.webpackChunkgoit_tp_test_01=self.webpackChunkgoit_tp_test_01||[]).push([[413],{413:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var o=n(152),r=n(433),s=n(439),a=n(791),i=n(689);var l=n(87),c=n(184),u=function(e){var t=e.to,n=e.children;return(0,c.jsx)(l.rU,{to:t,className:"BackLink",children:n})};var f=n.p+"static/media/goit-logo.e917114d7945c04c85a8946a331d28b6.svg";function d(e){var t=e.user,n=e.tweets,o=e.followers,r=e.isfollowing,s=e.avatar,a=e.onHandleClick;function i(e){return e<1e3?e:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return(0,c.jsxs)("div",{className:"Card",children:[(0,c.jsx)("img",{src:f,alt:"GoIt Logo",className:"Card__logo"}),(0,c.jsx)("div",{className:"Card__imgwrapper",children:(0,c.jsx)("img",{src:s,alt:t,width:"62",className:"Card__img"})}),(0,c.jsxs)("div",{className:"Card__data",children:[(0,c.jsxs)("p",{className:"Card__txt",children:[i(n)," tweets"]}),(0,c.jsxs)("p",{className:"Card__txt",children:[i(o)," followers"]}),r?(0,c.jsx)("button",{className:"Card__button Card__button--following",onClick:a,children:"following"}):(0,c.jsx)("button",{className:"Card__button",onClick:a,children:"follow"})]})]})}function h(e){var t=e.tweets,n=e.updateTweet;return(0,c.jsx)("section",{className:"Cards",children:(0,c.jsx)("ul",{className:"Cards__list",children:t.map((function(e){var t=e.id,o=e.user,r=e.tweets,s=e.followers,a=e.isfollowing,i=e.avatar;return(0,c.jsx)("li",{children:(0,c.jsx)(d,{user:o,tweets:r,followers:s,isfollowing:a,avatar:i,onHandleClick:function(){return n(t)}})},t)}))})})}function m(e){var t=e.message;return(0,c.jsx)("section",{className:"Info",children:(0,c.jsx)("p",{children:t})})}var w=n(402);function g(e){var t=e.waitingNote;return(0,c.jsxs)("div",{className:"Loader",children:[(0,c.jsx)(w.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),(0,c.jsx)("p",{children:t})]})}function j(e){var t=e.onClick;return(0,c.jsx)("button",{onClick:t,className:"LoadMoreButton",children:"Load more"})}function x(e){var t=e.message;return(0,c.jsx)("section",{className:"Warning",children:(0,c.jsx)("p",{children:t})})}var v=n(93);function p(e){var t=e.options,n=e.selectOption;return(0,c.jsx)(v.ZP,{options:t,className:"Filter",onChange:function(e){return n(e.value)}})}function _(e){var t=e.children;return(0,c.jsx)("section",{className:"AuxPanel",children:t})}var C=n(364),N=function(){var e,t,n=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",l=(0,a.useState)([]),f=(0,s.Z)(l,2),d=f[0],w=f[1],v=(0,a.useState)(1),N=(0,s.Z)(v,2),k=N[0],b=N[1],Z=(0,a.useState)(!0),y=(0,s.Z)(Z,2),S=y[0],T=y[1],L=(0,a.useState)(!1),E=(0,s.Z)(L,2),P=E[0],q=E[1],B=(0,a.useState)(null),H=(0,s.Z)(B,2),O=H[0],F=H[1],G=(0,a.useState)(""),I=(0,s.Z)(G,2),U=I[0],W=I[1],A=(0,a.useRef)(!1);(0,a.useEffect)((function(){return T(!0),q(!1),A.current,setTimeout((function(){var e,t;(e=k,t=3,fetch("https://6457a8a30c15cb14820dc3cc.mockapi.io/users?p=".concat(e,"&l=").concat(t),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry, bad request from the query."))}))).then((function(e){w((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(e))}))})).catch((function(e){F(e),q(!0),console.log(e.message)})).finally(T(!1))}),370),function(){A.current=!0}}),[k]);var D=function(e,t){switch(e){case"all":default:return t;case"follow":return t.filter((function(e){return!e.isfollowing}));case"following":return t.filter((function(e){return e.isfollowing}))}}(U,d);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(_,{children:[(0,c.jsx)(u,{to:n,children:"Back"}),(0,c.jsx)(p,{options:[{label:"all",value:"all"},{label:"follow",value:"follow"},{label:"following",value:"following"}],selectOption:function(e){W(e)}})]}),(0,c.jsx)(C.Z,{text:"Tweets"}),(0,c.jsx)(h,{tweets:D,updateTweet:function(e){var t=d.find((function(t){return t.id===e})),n=t.followers,r=t.isfollowing,s=r?n-1:n+1,a=!r;(function(e,t,n){return fetch("https://6457a8a30c15cb14820dc3cc.mockapi.io/users/".concat(e),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({followers:t,isfollowing:n})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry, bad request from the query."))}))})(e,s,a).then((function(t){w((function(t){return t.map((function(t){return t.id===e?(0,o.Z)((0,o.Z)({},t),{},{followers:s,isfollowing:a}):t}))}))})).catch((function(e){console.log(e.message)}))}}),S?(0,c.jsx)(g,{waitingNote:"Loading  more tweets..."}):P?(0,c.jsx)(x,{message:O.message}):k>3?(0,c.jsx)(m,{message:"End of tweet list"}):(0,c.jsx)(j,{onClick:function(){b(k+1)}})]})}}}]);
//# sourceMappingURL=413.873cad3d.chunk.js.map