"use strict";(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[311],{40311:function(e,s,a){a.r(s),a.d(s,{default:function(){return x}});var n=a(4942),r=a(1413),o=a(70885),t=a(72791),c=a(59434),i=a(26313),l=a(16871),d=a(43504),m=a(9085),w=a(39951),h=a(80184),x=function(){var e=(0,l.s0)(),s=(0,c.v9)(i.np),a=(s.isFetching,s.isSuccess,s.statusCode,s.isError,s.errorMessage,s.email),x=(0,c.I0)(),p=(0,t.useState)({otp:"",newPassword:"",confirmNewPassword:"",email:a}),u=(0,o.Z)(p,2),f=u[0],g=u[1],j=(0,t.useState)({otp:"",newPassword:"",confirmNewPassword:""}),N=(0,o.Z)(j,2),P=N[0],b=N[1],v=(0,t.useState)(!0),y=(0,o.Z)(v,2),Z=y[0],k=y[1],S=(0,t.useState)(!1),C=(0,o.Z)(S,2),F=(C[0],C[1]),E=(0,t.useState)("password"),T=(0,o.Z)(E,2),_=T[0],I=T[1],L=(0,t.useState)(!0),M=(0,o.Z)(L,2),O=M[0],K=M[1],U=(0,t.useState)(!1),q=(0,o.Z)(U,2),z=(q[0],q[1]),A=(0,t.useState)("password"),B=(0,o.Z)(A,2),D=B[0],W=B[1],G=(0,t.useState)(""),H=(0,o.Z)(G,2),J=H[0],Q=H[1],R=(0,t.useState)(!1),V=(0,o.Z)(R,2),X=V[0],Y=V[1],$=function(e){g((function(s){return(0,r.Z)((0,r.Z)({},s),{},(0,n.Z)({},e.target.name,e.target.value))})),ee(e)},ee=function(e){var s=e.target,a=s.name,o=s.value;b((function(e){var s=(0,r.Z)((0,r.Z)({},e),{},(0,n.Z)({},a,""));switch(a){case"otp":o||(s[a]="Please enter otp");break;case"newPassword":console.log("asjdflksjfk",o.length),o?o.length<8?s[a]="Password must be atleast 8 characters":s.confirmNewPassword=f.confirmNewPassword?"":P.confirmNewPassword:s[a]="Please enter new Password.";break;case"confirmNewPassword":o?f.newPassword&&o!==f.newPassword&&(s[a]="Password and Confirm Password does not match."):s[a]="Please enter Confirm Password."}return s}))};return(0,h.jsx)("div",{className:"main-div",children:(0,h.jsx)("section",{children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"card login-card",children:(0,h.jsx)("div",{className:"card-body login-card-body",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-6 col-sm-12 login-div",children:(0,h.jsxs)("div",{className:"d-flex  flex-wrap align-items-center",children:[(0,h.jsx)("div",{className:"rounded-circle roundIcon my-3",children:"\xa0"}),(0,h.jsx)("h2",{className:"text-white form-heading",children:"Target More & Influence More Users With KOL"}),(0,h.jsx)("div",{className:"bordered-text col-lg-8 col-md-12",children:(0,h.jsx)("p",{className:"text-white mb-0",children:"To get the maximum attention on your product and services, invest in KOL."})})]})}),(0,h.jsx)("div",{className:"col-lg-6  col-sm-12 login-form",children:(0,h.jsxs)("div",{className:"row align-items-center ",children:[(0,h.jsxs)("form",{onSubmit:function(s){s.preventDefault(),Y(!0),P.newPassword.length>0||P.confirmNewPassword.length>0||P.otp.length>0?Y(!1):""==f.email||""==f.otp||""==f.newPassword||""==f.confirmNewPassword?(Q("Please Fill this Field"),Y(!1)):x((0,i.tq)(f)).then((function(s){console.log(s),201===s.payload.statusCode?(e("/passwordSuccess"),Y(!1)):(m.Am.error(s.payload.message),Y(!1))}))},children:[(0,h.jsx)("h2",{className:"login-heading mb-3",children:"Change Password"}),(0,h.jsxs)("div",{className:"form-group mb-3",children:[(0,h.jsx)("label",{children:"Create Password"}),(0,h.jsx)("span",{className:"astric-span",children:"*"}),(0,h.jsxs)("div",{className:"position-relative",children:[(0,h.jsx)("input",{type:_,id:"form3Example3",className:"form-control ".concat(""===J||f.newPassword?"":"border-danger"),name:"newPassword",onChange:$}),(0,h.jsx)("i",{onClick:function(){"password"==_?(I("text"),k(!1),F(!0)):(I("password"),k(!0),F(!1))},className:"eye-icon fa ".concat(Z?"fa-eye-slash":"fa-eye")})]}),(0,h.jsx)("span",{className:"err text-danger",children:P.newPassword||J&&""==f.newPassword&&(0,h.jsx)(h.Fragment,{children:P.newPassword||J})})]}),(0,h.jsxs)("div",{className:"form-group mb-3",children:[(0,h.jsx)("label",{children:"Confirm Password"}),(0,h.jsx)("span",{className:"astric-span",children:"*"}),(0,h.jsxs)("div",{className:"position-relative",children:[(0,h.jsx)("input",{type:D,id:"form3Example4",className:"form-control ".concat(""===J||f.confirmNewPassword?"":"border-danger"),name:"confirmNewPassword",onChange:$}),(0,h.jsx)("i",{onClick:function(){"password"==D?(W("text"),K(!1),z(!0)):(W("password"),K(!0),z(!1))},className:"eye-icon fa ".concat(O?"fa-eye-slash":"fa-eye")})]}),(0,h.jsx)("span",{className:"err text-danger",children:P.confirmNewPassword||J&&""==f.confirmNewPassword&&(0,h.jsx)(h.Fragment,{children:P.confirmNewPassword||J})})]}),(0,h.jsxs)("div",{className:"form-group mb-3",children:[(0,h.jsx)("label",{children:"OTP"}),(0,h.jsx)("span",{className:"astric-span",children:"*"}),(0,h.jsx)("input",{type:"text",id:"form3Example1",className:"form-control ".concat(""===J||f.otp?"":"border-danger"),name:"otp",onChange:$}),(0,h.jsx)("span",{className:"err text-danger",children:P.otp||J&&""==f.otp&&(0,h.jsx)(h.Fragment,{children:P.otp||J})})]}),(0,h.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:(0,h.jsx)("button",{type:"submit",className:"btn theme-btn btn-lg btn-block mt-6 spiner-btn",children:X?(0,h.jsx)(w.Z,{type:"spinner-cub",title:"Submit",size:20}):"Submit"})})]}),(0,h.jsx)("div",{className:"",children:(0,h.jsxs)("span",{className:"optionText1 text-right",children:["Back to ",(0,h.jsx)(d.rU,{to:"/login",children:"Login"})]})})]})})]})})})})})})}}}]);
//# sourceMappingURL=311.b118a05c.chunk.js.map