"use strict";(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[311],{311:function(s,e,a){a.r(e),a.d(e,{default:function(){return w}});var n=a(4942),r=a(1413),o=a(885),c=a(2791),t=a(3901),i=a(6313),d=a(6871),l=a(3504),m=a(184),w=function(){var s=(0,d.s0)(),e=(0,t.v9)(i.np),a=(e.isFetching,e.isSuccess,e.statusCode,e.isError,e.errorMessage,e.email),w=(0,t.I0)(),x=(0,c.useState)({otp:"",newPassword:"",confirmNewPassword:"",email:a}),h=(0,o.Z)(x,2),f=h[0],p=h[1],u=(0,c.useState)({otp:"",newPassword:"",confirmNewPassword:""}),N=(0,o.Z)(u,2),j=N[0],g=N[1],P=(0,c.useState)(!0),v=(0,o.Z)(P,2),b=v[0],y=v[1],k=(0,c.useState)(!1),Z=(0,o.Z)(k,2),C=(Z[0],Z[1]),S=(0,c.useState)("password"),E=(0,o.Z)(S,2),T=E[0],_=E[1],I=(0,c.useState)(!0),L=(0,o.Z)(I,2),M=L[0],O=L[1],q=(0,c.useState)(!1),K=(0,o.Z)(q,2),U=(K[0],K[1]),A=(0,c.useState)("password"),B=(0,o.Z)(A,2),D=B[0],F=B[1],R=(0,c.useState)(""),W=(0,o.Z)(R,2),z=W[0],G=W[1],H=function(s){p((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,n.Z)({},s.target.name,s.target.value))})),J(s)},J=function(s){var e=s.target,a=e.name,o=e.value;g((function(s){var e=(0,r.Z)((0,r.Z)({},s),{},(0,n.Z)({},a,""));switch(a){case"otp":o||(e[a]="please enter correct otp");break;case"newPassword":o?f.confirmNewPassword&&o!==f.confirmNewPassword?e.confirmNewPassword="Password and Confirm Password does not match.":e.confirmNewPassword=f.confirmNewPassword?"":j.confirmNewPassword:e[a]="Please new Password.";break;case"confirmNewPassword":o?f.newPassword&&o!==f.newPassword&&(e[a]="Password and Confirm Password does not match."):e[a]="Please enter Confirm Password."}return e}))};return(0,m.jsx)("div",{className:"main-div",children:(0,m.jsx)("section",{children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"card login-card",children:(0,m.jsx)("div",{className:"card-body login-card-body",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-6 col-sm-12 login-div",children:(0,m.jsxs)("div",{className:"d-flex  flex-wrap align-items-center",children:[(0,m.jsx)("div",{className:"rounded-circle roundIcon my-3",children:"\xa0"}),(0,m.jsx)("h2",{className:"text-white form-heading",children:"Target More & Influence More Users With KOL"}),(0,m.jsx)("div",{className:"bordered-text col-lg-8 col-md-12",children:(0,m.jsx)("p",{className:"text-white mb-0",children:"To get the maximum attention on your product and services, invest in KOL."})})]})}),(0,m.jsx)("div",{className:"col-lg-6  col-sm-12 login-form",children:(0,m.jsxs)("div",{className:"row align-items-center ",children:[(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""==f.email||""==f.otp||""==f.newPassword||""==f.confirmNewPassword?G("All fields required "):w((0,i.tq)(f)).then((function(e){console.log(e),e.payload.status&&s("/passwordSuccess")}))},children:[(0,m.jsx)("h2",{className:"login-heading mb-3",children:"Change Password"}),(0,m.jsxs)("div",{className:"form-group mb-3",children:[(0,m.jsx)("label",{children:"Create Password"}),(0,m.jsx)("span",{className:"astric-span",children:"*"}),(0,m.jsxs)("div",{className:"position-relative",children:[(0,m.jsx)("input",{type:T,id:"form3Example3",className:"form-control ".concat(""===z||f.newPassword?"":"border-danger"),name:"newPassword",onChange:H}),(0,m.jsx)("i",{onClick:function(){"password"==T?(_("text"),y(!1),C(!0)):(_("password"),y(!0),C(!1))},className:"eye-icon fa ".concat(b?"fa-eye-slash":"fa-eye")}),z&&""==f.newPassword&&(0,m.jsx)("span",{className:"text-danger",children:z})]})]}),j.newPassword&&(0,m.jsx)("span",{className:"err text-danger",children:j.newPassword}),(0,m.jsxs)("div",{className:"form-group mb-3",children:[(0,m.jsx)("label",{children:"Confirm Password"}),(0,m.jsx)("span",{className:"astric-span",children:"*"}),(0,m.jsxs)("div",{className:"position-relative",children:[(0,m.jsx)("input",{type:D,id:"form3Example4",className:"form-control ".concat(""===z||f.confirmNewPassword?"":"border-danger"),name:"confirmNewPassword",onChange:H}),(0,m.jsx)("i",{onClick:function(){"password"==D?(F("text"),O(!1),U(!0)):(F("password"),O(!0),U(!1))},className:"eye-icon fa ".concat(M?"fa-eye-slash":"fa-eye")}),z&&""==f.confirmNewPassword&&(0,m.jsx)("span",{className:"text-danger",children:z})]})]}),j.confirmNewPassword&&(0,m.jsx)("span",{className:"err text-danger",children:j.confirmNewPassword}),(0,m.jsxs)("div",{className:"form-group mb-3",children:[(0,m.jsx)("label",{children:"OTP"}),(0,m.jsx)("span",{className:"astric-span",children:"*"}),(0,m.jsx)("input",{type:"text",id:"form3Example1",className:"form-control ".concat(""===z||f.otp?"":"border-danger"),name:"otp",onChange:H}),z&&""==f.otp&&(0,m.jsx)("span",{className:"text-danger",children:z})]}),j.otp&&(0,m.jsx)("span",{className:"err",children:j.otp}),(0,m.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:(0,m.jsx)("button",{type:"submit",className:"btn theme-btn btn-lg btn-block mt-6",children:"Send Reset link"})})]}),(0,m.jsx)("div",{className:"",children:(0,m.jsxs)("span",{className:"optionText1 text-right",children:["Back to ",(0,m.jsx)(l.rU,{to:"/login",children:"Login"})]})})]})})]})})})})})})}}}]);
//# sourceMappingURL=311.7ccafaee.chunk.js.map