"use strict";(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[878],{6178:function(e,s,a){a.d(s,{I8:function(){return c},qV:function(){return t}});var n=a(2426),r=a(3300),l=(0,n.ZF)({apiKey:"AIzaSyAATHyxmQgxxSsoDQmW-D1lccpbJAxXEHg",authDomain:"kol-project-b8e21.firebaseapp.com",projectId:"kol-project-b8e21",storageBucket:"kol-project-b8e21.appspot.com",messagingSenderId:"1083015288012",appId:"1:1083015288012:web:3bb80b054f5c102e49de69",measurementId:"G-98HT13QRRN"}),c=(0,r.v0)(l),t=new r.hJ},878:function(e,s,a){a.r(s),a.d(s,{default:function(){return x}});var n=a(4942),r=a(1413),l=a(885),c=a(2791),t=a(808),o=a(3901),i=a(3300),d=a(6178),m=a(6313),u=a(6871),h=a(3504),g=a(9085),p=(a(5462),a(184)),x=function(){var e=(0,o.v9)(m.np),s=(e.isFetching,e.isSuccess),a=e.statusCode,x=e.isError,f=e.errorMessage,j=(0,o.v9)((function(e){var s,a;return null===e||void 0===e||null===(s=e.user)||void 0===s||null===(a=s.role)||void 0===a?void 0:a.payload}));console.log(s,a);var b=(0,c.useState)({name:"",email:"",token:"",role:j}),v=(0,l.Z)(b,2),N=v[0],k=v[1];console.log(j);var y=(0,c.useState)({name:"",email:"",token:"",role:j,password:""}),w=(0,l.Z)(y,2),E=w[0],I=w[1],S=(0,c.useState)(""),Z=(0,l.Z)(S,2),A=Z[0],C=Z[1],T=(0,c.useState)(!1),J=(0,l.Z)(T,2),L=J[0],D=J[1],R=localStorage.getItem("token");console.log(R);var _=(0,u.s0)(),q=(0,o.I0)(),F=function(e){I((0,r.Z)((0,r.Z)({},E),{},(0,n.Z)({},e.target.name,e.target.value)))};return(0,c.useEffect)((function(){N.token&&(console.log(N),q((0,m.EL)(N)))}),[N.token]),(0,c.useEffect)((function(){return function(){q((0,m.Jo)())}}),[]),(0,c.useEffect)((function(){s&&(q((0,m.Jo)()),_("/EmailVerify")),301===a&&(_("/register"),g.Am.error(f),q((0,m.Jo)())),x&&(g.Am.error(f),q((0,m.Jo)()))}),[s,x]),(0,c.useEffect)((function(){R&&_("/home")}),[R]),console.log(L),(0,p.jsx)("div",{className:"main-div",children:(0,p.jsx)("section",{children:(0,p.jsx)("div",{className:"container",children:(0,p.jsx)("div",{className:"card register-card",children:(0,p.jsx)("div",{className:"card-body register-card-body",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-lg-6 col-sm-12 register-div",children:(0,p.jsxs)("div",{className:"d-flex  flex-wrap align-items-center",children:[(0,p.jsx)("div",{className:"rounded-circle roundIcon my-3",children:"\xa0"}),(0,p.jsx)("h2",{className:"text-white form-heading",children:"Target More & Influence More Users With KOL"}),(0,p.jsx)("div",{className:"bordered-text col-lg-8 col-md-12",children:(0,p.jsx)("p",{className:"text-white mb-0",children:"To get the maximum attention on your product and services, invest in KOL."})})]})}),(0,p.jsx)("div",{className:"col-lg-6  col-sm-12 register-form",children:(0,p.jsxs)("div",{className:"row align-items-center ",children:[(0,p.jsxs)("form",{className:"col-12",onSubmit:function(e){e.preventDefault(),""==E.name||""==E.email||""==R||""==E.password||""==j?(C("All fields required please select all field"),D(!0)):(console.log(E),q((0,m.EL)(E)).then((function(e){console.log(e),e.payload.status&&g.Am.success(e.payload.message)})),e.target.reset())},children:[(0,p.jsx)("h2",{className:"register-heading mb-3",children:"Register"}),(0,p.jsxs)("div",{className:"form-group mb-3",children:[(0,p.jsx)("label",{children:"Name"}),(0,p.jsx)("span",{className:"astric-span",children:"*"}),(0,p.jsx)("input",{type:"text",name:"name",className:"form-control ".concat(""===A||E.name?"":"border-danger"),placeholder:"First name",onChange:F}),A&&""==E.name&&(0,p.jsx)("span",{className:"text-danger",children:A})]}),(0,p.jsxs)("div",{className:"form-group  mb-3",children:[(0,p.jsx)("label",{children:"Email"}),(0,p.jsx)("span",{className:"astric-span",children:"*"}),(0,p.jsx)("input",{type:"email",name:"email",className:"form-control  ".concat(""===A||E.email?"":"border-danger"),placeholder:"Enter email",onChange:F}),A&&""==E.email&&(0,p.jsx)("span",{className:"text-danger",children:A})]}),(0,p.jsxs)("div",{className:"form-group  mb-3",children:[(0,p.jsx)("label",{children:"Password"}),(0,p.jsx)("span",{className:"astric-span",children:"*"}),(0,p.jsx)("input",{type:"password",name:"password",className:"form-control  ".concat(""===A||E.password?"":"border-danger"),placeholder:"Enter password",onChange:F}),A&&""==E.password&&(0,p.jsx)("span",{className:"text-danger",children:A})]}),(0,p.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,p.jsx)("button",{type:"submit",className:"btn theme-btn btn-lg btn-block",children:"Register"}),(0,p.jsxs)("span",{className:"optionText text-right",children:["Already registered ",(0,p.jsx)(h.rU,{to:"/login",children:"Login"})]})]})]}),(0,p.jsxs)("div",{className:"col-12 justify-content-center align-items-center position-relative my-4",children:[(0,p.jsx)("hr",{className:"col-12"})," ",(0,p.jsx)("span",{className:"orText",children:"or "})]}),(0,p.jsx)("div",{className:"col-12 d-flex justify-content-center align-items-center mb-3",children:(0,p.jsx)(t.ZP,{label:"Sign in with Google",style:{background:"#342951"},onClick:function(){(0,i.rh)(d.I8,d.qV).then((function(e){k((function(s){return(0,r.Z)((0,r.Z)({},s),{},{name:e.user.displayName,email:e.user.email,token:e.user.accessToken})}))})).catch((function(e){console.log(e.message)}))}})})]})})]})})})})})})}}}]);
//# sourceMappingURL=878.65df1b5a.chunk.js.map