"use strict";(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[925],{6178:function(e,s,n){n.d(s,{I8:function(){return o},qV:function(){return l}});var a=n(2426),t=n(3300),c=(0,a.ZF)({apiKey:"AIzaSyAATHyxmQgxxSsoDQmW-D1lccpbJAxXEHg",authDomain:"kol-project-b8e21.firebaseapp.com",projectId:"kol-project-b8e21",storageBucket:"kol-project-b8e21.appspot.com",messagingSenderId:"1083015288012",appId:"1:1083015288012:web:3bb80b054f5c102e49de69",measurementId:"G-98HT13QRRN"}),o=(0,t.v0)(c),l=new t.hJ},8925:function(e,s,n){n.r(s),n.d(s,{default:function(){return p}});var a=n(4942),t=n(1413),c=n(885),o=n(2791),l=n(808),i=n(3300),r=n(6178),d=n(6871),m=n(3504),u=n(6313),h=n(3901),f=n(9085),x=(n(5462),n(184)),p=function(){var e=(0,h.I0)(),s=(0,d.s0)(),n=(0,h.v9)(u.np),p=(n.isFetching,n.isSuccess,n.statusCode),g=(n.isError,n.errorMessage),j=(0,o.useState)(!0),b=(0,c.Z)(j,2),v=b[0],N=b[1],y=(0,o.useState)(!1),k=(0,c.Z)(y,2),w=(k[0],k[1]),E=(0,o.useState)({email:"",password:""}),S=(0,c.Z)(E,2),Z=S[0],C=S[1],I=(0,o.useState)({name:"",email:"",token:""}),A=(0,c.Z)(I,2),T=A[0],D=A[1],L=localStorage.getItem("token");console.log(L),(0,o.useEffect)((function(){return function(){e((0,u.Jo)())}}),[]),(0,o.useEffect)((function(){L&&s("/home")}),[L]),(0,o.useEffect)((function(){401==p&&(s("/emailVerify"),f.Am.success(g))}),[p]),(0,o.useEffect)((function(){"Please choose roles!"==g&&s("/role")}),[]);var _=(0,o.useState)("password"),F=(0,c.Z)(_,2),H=F[0],J=F[1],K=function(e){C((0,t.Z)((0,t.Z)({},Z),{},(0,a.Z)({},e.target.name,e.target.value)))};return(0,o.useEffect)((function(){T.token&&e((0,u.Cb)(T)).then((function(e){console.log(e),201==e.payload.statusCode&&f.Am.success(e.payload.message)}))}),[T.token]),(0,x.jsx)("div",{className:"main-div",children:(0,x.jsx)("section",{children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"card login-card",children:(0,x.jsx)("div",{className:"card-body login-card-body",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-lg-6 col-sm-12 login-div",children:(0,x.jsxs)("div",{className:"d-flex  flex-wrap align-items-center",children:[(0,x.jsx)("div",{className:"rounded-circle roundIcon my-3",children:"\xa0"}),(0,x.jsx)("h2",{className:"text-white form-heading",children:"Target More & Influence More Users With KOL"}),(0,x.jsx)("div",{className:"bordered-text col-lg-8 col-md-12",children:(0,x.jsx)("p",{className:"text-white mb-0",children:"To get the maximum attention on your product and services, invest in KOL."})})]})}),(0,x.jsx)("div",{className:"col-lg-6  col-sm-12 login-form",children:(0,x.jsxs)("div",{className:"row align-items-center ",children:[(0,x.jsxs)("form",{onSubmit:function(s){s.preventDefault(),e((0,u.vx)(Z)).then((function(e){200==e.payload.statusCode?f.Am.success(e.payload.message):f.Am.error(e.payload.message)})),s.target.reset()},children:[(0,x.jsx)("h2",{className:"login-heading mb-3",children:"Login"}),(0,x.jsxs)("div",{className:"form-group mb-3",children:[(0,x.jsx)("label",{children:"Email"}),(0,x.jsx)("span",{className:"astric-span",children:"*"}),(0,x.jsx)("input",{type:"email",id:"form2Example17",className:"form-control",placeholder:"Enter email",name:"email",onChange:K})]}),(0,x.jsxs)("div",{className:"form-group mb-3",children:[(0,x.jsx)("label",{children:"Password"}),(0,x.jsx)("span",{className:"astric-span",children:"*"}),(0,x.jsxs)("div",{className:"position-relative",children:[(0,x.jsx)("input",{type:H,id:"form2Example27",className:"form-control",placeholder:"Enter password",name:"password",onChange:K}),(0,x.jsx)("i",{onClick:function(){"password"==H?(J("text"),N(!1),w(!0)):(J("password"),N(!0),w(!1))},className:"eye-icon fa ".concat(v?"fa-eye-slash":"fa-eye")})]})]}),(0,x.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,x.jsx)("button",{type:"submit",className:"btn theme-btn btn-lg btn-block",children:"Login"}),(0,x.jsx)("span",{className:"optionText1 text-right",children:(0,x.jsx)(m.rU,{to:"/emailCheck",children:"Forgot password ?"})})]})]}),(0,x.jsxs)("div",{className:"col-12 justify-content-center align-items-center position-relative my-4",children:[(0,x.jsx)("hr",{className:"col-12"})," ",(0,x.jsx)("span",{className:"orText",children:"or "})]}),(0,x.jsx)("div",{className:"col-12 d-flex justify-content-center align-items-center mb-3",children:(0,x.jsx)(l.ZP,{label:"Sign in with Google",style:{background:"#342951"},onClick:function(){(0,i.rh)(r.I8,r.qV).then((function(e){D((function(s){return(0,t.Z)((0,t.Z)({},s),{},{name:e.user.displayName,email:e.user.email,token:e.user.accessToken})}))})).catch((function(e){console.log(e.message)}))}})}),(0,x.jsx)("div",{className:"col-12 d-flex justify-content-center align-items-center mt-3",children:(0,x.jsxs)("span",{className:"optionText text-center",children:["Don't have an account?"," ",(0,x.jsx)(m.rU,{to:"/role",children:"Register here"})]})})]})})]})})})})})})}}}]);
//# sourceMappingURL=925.d14d8428.chunk.js.map