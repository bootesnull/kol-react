"use strict";(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[253],{5253:function(e,a,t){t.r(a);var s=t(4942),l=t(1413),n=t(70885),r=t(72791),c=(t(44986),t(59513)),i=t.n(c),o=(t(68639),t(83383)),d=t(59434),m=t(31389),u=t(16871),p=t(43504),h=t(8690),f=t(9085),x=t(60438),g=t.n(x),j=t(39951),b=t(80184);a.default=function(){var e=(0,d.I0)(),a=(0,r.useState)({title:"",description:"",start_date:"",end_date:"",social_platform:"",imageUrl:""}),t=(0,n.Z)(a,2),c=t[0],x=t[1],v=(0,u.UO)().id,N=localStorage.getItem("token"),_=(0,u.s0)(),y=(0,r.useState)(null),S=(0,n.Z)(y,2),D=S[0],Z=S[1],w=(0,r.useState)(),C=(0,n.Z)(w,2),k=C[0],F=C[1],M=(0,r.useState)(),T=(0,n.Z)(M,2),Y=T[0],I=T[1],E=(0,r.useState)([]),U=(0,n.Z)(E,2),A=U[0],L=U[1],z=(0,r.useState)(!1),B=(0,n.Z)(z,2),O=B[0],P=B[1],V=(0,r.useState)(""),q=(0,n.Z)(V,2),G=q[0],H=q[1];(0,r.useEffect)((function(){(0,h.k5)((function(e){e.length&&x((function(){return(0,l.Z)((0,l.Z)({},c),{},{title:e[0].title,description:e[0].description,start_date:e[0].start_date,end_date:e[0].end_date,social_platform:e[0].social_platform,imageUrl:e[0].image})}))}),N,v)}),[v]),(0,r.useEffect)((function(){if(k){var e=new Date(k),a=e.toLocaleTimeString(),t=("0"+(e.getMonth()+1)).slice(-2),s=("0"+e.getDate()).slice(-2),n=[e.getFullYear(),t,s].join("-");x((function(){return(0,l.Z)((0,l.Z)({},c),{},{start_date:g()("".concat(n," ").concat(a)).format("YYYY-MM-DD hh:mm:ss")})}))}}),[k]),(0,r.useEffect)((function(){if(Y){var e=new Date(Y),a=e.toLocaleTimeString(),t=("0"+(e.getMonth()+1)).slice(-2),s=("0"+e.getDate()).slice(-2),n=[e.getFullYear(),t,s].join("-");x((function(){return(0,l.Z)((0,l.Z)({},c),{},{end_date:g()("".concat(n," ").concat(a)).format("YYYY-MM-DD hh:mm:ss")})}))}}),[Y]),(0,r.useEffect)((function(){(0,h.Ae)((function(e){L((0,l.Z)({},e))}),N)}),[]);var J=function(e){if(x((0,l.Z)((0,l.Z)({},c),{},(0,s.Z)({},e.target.name,e.target.value))),"userImage"==e.target.name){if(e.target.files[0].size>1e6)return;Z(e.target.files[0])}return!1};return console.log(G),(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:"card mb-5",children:[(0,b.jsx)("div",{className:"card-header",children:(0,b.jsxs)("div",{className:"card-title h5 justify-content-between m-0 d-flex align-items-center",children:[(0,b.jsx)("span",{children:"Announcements "})," ",v&&(0,b.jsx)(p.rU,{className:"btn theme-btn btn-sm",to:"/dashboard/announcement/view/".concat(v),children:"View"})]})}),(0,b.jsx)("div",{className:"card-body px-4",children:(0,b.jsx)("form",{className:"",onSubmit:function(a){a.preventDefault(),P(!0);var t=new FormData;if(D&&t.append("image",D),v&&t.append("id",v),t.append("title",c.title),t.append("social_platform",c.social_platform),t.append("start_date",c.start_date),t.append("end_date",c.end_date),t.append("description",c.description),""==c.title||""==c.social_platform||""==c.start_date||""==c.end_date_time||""==c.description)return H("Please fill the mandatory filed"),void P(!1);e((0,m.L6)(t)).then((function(e){var a;if(201===e.payload.statusCode||202===e.payload.statusCode)f.Am.success(null===e||void 0===e||null===(a=e.payload)||void 0===a?void 0:a.message),_("../../dashboard/announcement/list"),P(!1);else if(500===e.payload.statusCode){var t;f.Am.warning(null===e||void 0===e||null===(t=e.payload)||void 0===t?void 0:t.message),_("../../dashboard/profile-add"),P(!1)}else{var s;f.Am.error(null===e||void 0===e||null===(s=e.payload)||void 0===s?void 0:s.message),P(!1)}}))},children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,b.jsx)("label",{className:"form-label",children:(0,b.jsxs)("b",{children:["Title ",(0,b.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,b.jsx)("input",{type:"text",className:"form-control ".concat(""===G||c.title?"":"border-danger"),value:c.title,onChange:J,name:"title",placeholder:"Enter Announcement Title"}),(0,b.jsx)("span",{className:"err text-danger",children:G&&""==c.title&&(0,b.jsx)(b.Fragment,{children:G})})]}),(0,b.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,b.jsx)("label",{className:"form-label",children:(0,b.jsxs)("b",{children:["Social Media Platform ",(0,b.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,b.jsxs)("select",{className:"form-select ".concat(""===G||c.social_platform?"":"border-danger"),name:"social_platform",onChange:J,value:c.social_platform?c.social_platform:"Select Social platform",children:[(0,b.jsx)("option",{value:"",children:"Select Social platform"}),Object.keys(A).map((function(e,a){return(0,b.jsx)("option",{value:e,children:e},a)}))]}),(0,b.jsx)("span",{className:"err text-danger",children:G&&""==c.social_platform&&(0,b.jsx)(b.Fragment,{children:G})})]}),(0,b.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,b.jsx)("label",{className:"form-label",children:(0,b.jsxs)("b",{children:["Start Date ",(0,b.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,b.jsx)(i(),{selected:k,name:"start_date",onChange:function(e){return F(e)},timeInputLabel:"Time:",dateFormat:"yyyy-MM-dd hh:mm:ss ",showTimeInput:!0,value:c.start_date,minDate:g()().toDate(),className:"form-control ".concat(""===G||c.start_date?"":"border-danger"),autoComplete:"off",placeholderText:"Select Date"}),(0,b.jsx)("span",{className:"err text-danger",children:G&&""==c.start_date&&(0,b.jsx)(b.Fragment,{children:G})})]}),(0,b.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,b.jsx)("label",{className:"form-label",children:(0,b.jsxs)("b",{children:["End Date ",(0,b.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,b.jsx)(i(),{selected:Y,onChange:function(e){return I(e)},timeInputLabel:"Time:",dateFormat:"yyyy-MM-dd hh:mm:ss ",showTimeInput:!0,name:"end_date_time",minDate:g()().toDate(),value:c.end_date,className:"form-control ".concat(""===G||c.end_date?"":"border-danger"),autoComplete:"off",placeholderText:"Select Date"}),(0,b.jsx)("span",{className:"err text-danger",children:G&&""==c.end_date&&(0,b.jsx)(b.Fragment,{children:G})})]}),(0,b.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,b.jsx)("label",{className:"form-label",children:(0,b.jsxs)("b",{children:["Description ",(0,b.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,b.jsx)("textarea",{className:"form-control ".concat(""===G||c.description?"":"border-danger"),name:"description",onChange:J,rows:"6",value:c.description,placeholder:"Enter Description"}),(0,b.jsx)("span",{className:"err text-danger",children:G&&""==c.description&&(0,b.jsx)(b.Fragment,{children:G})})]}),(0,b.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3 d-flex",children:[(0,b.jsx)("div",{className:"profile-img-thumb mt-1",style:{width:"24%"},children:c.imageUrl&&(0,b.jsx)("img",{className:"img-fluid",src:"".concat(o.s).concat(c.imageUrl),alt:"Banner"})}),(0,b.jsxs)("div",{className:"profile-img-group",children:[(0,b.jsx)("label",{className:"form-label",children:(0,b.jsx)("b",{children:"Upload Banner Thumb"})}),(0,b.jsx)("input",{type:"file",className:"form-control",name:"userImage",onChange:J})]})]}),(0,b.jsx)("div",{className:"col-12 mt-3",children:(0,b.jsx)("button",{type:"submit",className:"btn theme-btn form-text spiner-btn",children:O?(0,b.jsx)(j.Z,{type:"spinner-cub",title:"Submit",size:16}):"Submit"})})]})})})]})})}}}]);
//# sourceMappingURL=253.b5dbf9ab.chunk.js.map