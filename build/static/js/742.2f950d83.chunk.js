"use strict";(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[742],{36742:function(e,a,n){n.r(a);var l=n(4942),s=n(1413),t=n(42982),c=n(70885),i=n(72791),o=n(59434),r=n(35071),m=n(31389),u=n(26313),d=n(9085),f=n(16871),h=n(43504),p=(n(5462),n(8690)),x=n(80184);a.default=function(){var e=(0,f.s0)(),a=(0,o.v9)(u.np).username,n=(0,i.useState)({}),j=(0,c.Z)(n,2),b=j[0],v=j[1],g=(0,i.useState)(""),N=(0,c.Z)(g,2),Z=N[0],_=N[1],y=(0,o.I0)(),k=(0,i.useState)([{name:"",social_user_id:"",followers:"",social_icon:""}]),S=(0,c.Z)(k,2),C=S[0],w=S[1],E=function(e,a){var n=e.target,l=n.name,s=n.value,c=(0,t.Z)(C);c[a][l]=s,w(c)},A=function(){w([].concat((0,t.Z)(C),[{name:"",social_user_id:"",followers:"",social_icon:""}]))},I=(0,i.useState)({userName:a,personal_email:"",kol_type:"",city:"",zip_code:"",state:"",userImage:"",bio:"",social_media:[],social_active:"",video_links:[],languages:[],tags:[],avatar:""}),V=(0,c.Z)(I,2),O=V[0],z=V[1],B=(0,i.useState)([]),D=(0,c.Z)(B,2),K=D[0],U=D[1],F=(0,i.useState)([]),M=(0,c.Z)(F,2),P=M[0],T=M[1],L=(0,i.useState)({}),W=(0,c.Z)(L,2),H=W[0],J=W[1],Q=(0,i.useState)(),R=(0,c.Z)(Q,2),q=R[0],G=R[1],X=(0,i.useState)(),Y=(0,c.Z)(X,2),$=Y[0],ee=Y[1],ae=(0,i.useState)([]),ne=(0,c.Z)(ae,2),le=ne[0],se=ne[1],te=(0,i.useState)(""),ce=(0,c.Z)(te,2),ie=ce[0],oe=ce[1],re=(0,i.useState)(!1),me=(0,c.Z)(re,2),ue=(me[0],me[1]),de=(0,i.useState)(0),fe=(0,c.Z)(de,2),he=(fe[0],fe[1],(0,i.useState)(0)),pe=(0,c.Z)(he,2),xe=pe[0],je=pe[1],be=(0,i.useState)([]),ve=(0,c.Z)(be,2),ge=ve[0],Ne=ve[1],Ze=(0,i.useState)([]),_e=(0,c.Z)(Ze,2),ye=_e[0],ke=_e[1],Se=localStorage.getItem("token");(0,i.useEffect)((function(){(0,p.KQ)((function(e){v((0,s.Z)({},e))}),Se)}),[]),(0,i.useEffect)((function(){z((function(){return(0,s.Z)((0,s.Z)({},O),{},{social_media:(0,t.Z)(C)})}))}),[C]),(0,i.useEffect)((function(){var e=ye.map((function(e,a){return e.value}));z((function(){return(0,s.Z)((0,s.Z)({},O),{},{languages:(0,t.Z)(e)})}))}),[ye]),(0,i.useEffect)((function(){z((function(){return(0,s.Z)((0,s.Z)({},O),{},{video_links:(0,t.Z)(ge)})}))}),[ge]),(0,i.useEffect)((function(){z((function(){return(0,s.Z)((0,s.Z)({},O),{},{tags:(0,t.Z)(le)})}))}),[le]);var Ce=function(e){if(z((0,s.Z)((0,s.Z)({},O),{},(0,l.Z)({},e.target.name,e.target.value))),"userImage"==e.target.name){if(e.target.files[0].size>1e6)return;G(e.target.files[0])}if("userBanner"==e.target.name){if(e.target.files[0].size>1e6)return;ee(e.target.files[0])}"tags"==e.target.name&&se(e.target.value),"kol_type"==e.target.name&&_(Object.keys(b).find((function(a){return b[a]==e.target.value})))},we=function(e){Ne((function(a){return[].concat((0,t.Z)(a),[e.target.value])}))};(0,i.useEffect)((function(){(0,p.Ae)((function(e){U((0,s.Z)({},e))}),Se)}),[]),(0,i.useEffect)((function(){(0,p.Rh)((function(e){J((0,s.Z)({},e))}),Se)}),[]),(0,i.useEffect)((function(){(0,p.iZ)((function(e){T((0,s.Z)({},e))}),Se)}),[]);var Ee=Object.entries(P).map((function(e){var a=(0,c.Z)(e,2);return{label:a[0],value:a[1]}}));return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsxs)("div",{className:"card-title h5 justify-content-between m-0 d-flex align-items-center",children:[(0,x.jsx)("span",{children:"Kol Profile Add"})," ",(0,x.jsx)(h.rU,{className:"btn theme-btn btn-sm",to:"../profile-view",children:"View"})]})}),(0,x.jsx)("div",{className:"card-body px-4",children:(0,x.jsxs)("form",{className:"",onSubmit:function(a){a.preventDefault();var n=new FormData;n.append("avatar",q),n.append("banner",$),n.append("personal_email",O.personal_email),n.append("kol_type",Z),n.append("city",O.city),n.append("zip_code",O.zip_code),n.append("bio",O.bio),n.append("social_media[]",JSON.stringify(O.social_media)),n.append("social_active",O.social_active),n.append("video_links[]",O.video_links),n.append("languages[]",O.languages),n.append("tags[]",O.tags),n.append("state",O.state),y((0,m.AW)(n)).then((function(a){var n,l,s;null!==a&&void 0!==a&&null!==(n=a.payload)&&void 0!==n&&n.status?(d.Am.success(null===a||void 0===a||null===(l=a.payload)||void 0===l?void 0:l.message),e("../profile-view")):d.Am.error(null===a||void 0===a||null===(s=a.payload)||void 0===s?void 0:s.message)}))},children:[(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,x.jsx)("label",{className:"form-label",children:(0,x.jsx)("b",{children:"Name"})}),(0,x.jsx)("input",{type:"text",className:"form-control",name:"userName",defaultValue:O.userName})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,x.jsx)("label",{className:"form-label",children:(0,x.jsx)("b",{children:"Email address"})}),(0,x.jsx)("input",{type:"email",name:"personal_email",className:"form-control",defaultValue:O.personal_email,onChange:Ce}),(0,x.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,x.jsx)("label",{className:"form-label",children:(0,x.jsx)("b",{children:"Kol Type"})}),(0,x.jsxs)("select",{className:"form-select",name:"kol_type",onChange:Ce,children:[(0,x.jsx)("option",{defaultValue:!0,children:"Select Type"}),b&&Object.entries(b).map((function(e){var a=(0,c.Z)(e,2),n=a[0],l=a[1];return(0,x.jsx)("option",{value:l,children:l},n)}))]})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,x.jsx)("label",{className:"form-label",children:(0,x.jsx)("b",{children:"City"})}),(0,x.jsx)("input",{type:"text",name:"city",onChange:Ce,className:"form-control"})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,x.jsx)("label",{className:"form-label",children:(0,x.jsx)("b",{children:"State"})}),(0,x.jsxs)("select",{className:"form-select",onChange:Ce,name:"state",children:[(0,x.jsx)("option",{defaultValue:!0,children:"Select State"}),H&&Object.entries(H).map((function(e){var a=(0,c.Z)(e,2),n=a[0],l=a[1];return(0,x.jsx)("option",{value:n,children:l})}))]})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,x.jsx)("label",{className:" form-label",children:(0,x.jsx)("b",{children:"Zip code"})}),(0,x.jsx)("input",{type:"text",name:"zip_code",className:"form-control",onChange:Ce})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,x.jsx)("label",{htmlFor:"exampleInputPassword1",className:" form-label",children:(0,x.jsx)("b",{children:"Language"})}),(0,x.jsx)(r.ZP,{options:Ee,onChange:function(e){ke((0,t.Z)(e))},isMulti:!0})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,x.jsx)("label",{className:" form-label",children:(0,x.jsx)("b",{children:"Most Active Platform"})}),(0,x.jsxs)("select",{className:"form-select",name:"social_active",onChange:function(e){z((function(a){return(0,s.Z)((0,s.Z)({},a),{},(0,l.Z)({},e.target.name,[e.target.value]))}))},children:[(0,x.jsx)("option",{defaultValue:!0,children:"Select Event Type"}),Object.keys(K).map((function(e,a){return(0,x.jsx)("option",{value:e,children:e},a)}))]})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,x.jsx)("label",{className:"form-label",children:(0,x.jsx)("b",{children:"Bio"})}),(0,x.jsx)("textarea",{className:"form-control",name:"bio",onChange:Ce,rows:"6"})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,x.jsx)("label",{className:"form-label",children:(0,x.jsx)("b",{children:"Enter Tags"})}),(0,x.jsx)("input",{value:ie,placeholder:"Enter tags",onKeyDown:function(e){var a=e.key,n=ie.trim();if("Enter"===a&&n.length&&!le.includes(n)&&(e.preventDefault(),se((function(e){return[].concat((0,t.Z)(e),[n])})),oe("")),"Backspace"===a&&!ie.length&&le.length){e.preventDefault();var l=(0,t.Z)(le),s=l.pop();se(l),oe(s)}ue(!1)},onKeyUp:function(){ue(!0)},name:"tags",className:"form-control",onChange:function(e){var a=e.target.value;oe(a)}}),(0,x.jsx)("div",{className:"tagDiv",children:le.length>0&&(0,x.jsx)(x.Fragment,{children:le.map((function(e,a){return(0,x.jsxs)("div",{className:"tag btn-default",children:[e,(0,x.jsx)("button",{onClick:function(){return function(e){se((function(a){return a.filter((function(a,n){return n!==e}))}))}(a)},children:"x"})]},a)}))})})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3 ",children:[(0,x.jsx)("label",{className:"form-label",children:(0,x.jsx)("b",{children:"Upload Avatar"})}),(0,x.jsx)("input",{type:"file",className:"form-control",name:"userImage",onChange:Ce})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3 ",children:[(0,x.jsx)("label",{className:"form-label",children:(0,x.jsx)("b",{children:"Upload Banner"})}),(0,x.jsx)("input",{type:"file",className:"form-control",name:"userBanner",onChange:Ce})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,x.jsx)("label",{className:"form-label",children:(0,x.jsx)("b",{children:"Social Media Info"})}),C.map((function(e,a){return(0,x.jsxs)("div",{className:"col d-flex mb-2",children:[(0,x.jsxs)("select",{className:"form-select me-3",name:"name",onChange:function(e){return E(e,a)},children:[(0,x.jsx)("option",{defaultValue:!0,children:"Social Media"}),Object.keys(K).map((function(e,a){return(0,x.jsx)("option",{value:e,children:e},a)}))]}),(0,x.jsx)("input",{className:"form-control me-3",name:"social_user_id",placeholder:"Enter User Id",value:e.social_user_id,onChange:function(e){return E(e,a)}}),(0,x.jsx)("input",{className:"form-control me-3",name:"followers",placeholder:"30k",value:e.followers,onChange:function(e){return E(e,a)}}),(0,x.jsxs)("div",{className:"btn-box",children:[1!==C.length&&(0,x.jsxs)("button",{className:"btn sub-btn",onClick:function(){return function(e){var a=(0,t.Z)(C);a.splice(e,1),w(a)}(a)},children:[" ","-"," "]}),C.length-1===a&&(0,x.jsxs)("button",{className:"btn custom-btn ",onClick:A,children:[" ","+"," "]})]})]})}))]}),(0,x.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,x.jsx)("label",{className:"form-label",children:(0,x.jsx)("b",{children:"Video Links"})}),(0,x.jsxs)("div",{className:"col d-flex mb-2",children:[(0,x.jsx)("input",{type:"text",className:"form-control me-3",placeholder:"enter video link",onChange:function(e){we(e)}}),(0,x.jsx)("div",{className:"btn-box",children:(0,x.jsxs)("button",{type:"button",name:"video_links",className:"btn custom-btn",onClick:function(){return je(xe+1)},children:[" ","+"," "]})})]}),(0,t.Z)(Array(xe)).map((function(e,a){return(0,x.jsxs)("div",{className:"col d-flex mb-2",children:[(0,x.jsx)("input",{type:"text",className:"form-control me-3",onBlur:function(e){we(e)},placeholder:"enter video link"}),(0,x.jsx)("div",{className:"btn-box",children:(0,x.jsxs)("button",{type:"button",name:"video_links",className:"btn sub-btn",onClick:function(){je(xe-1),O.video_links.pop()},children:[" ","-"," "]})})]},a)}))]})]}),(0,x.jsx)("div",{className:"mt-4 mx-auto d-block",children:(0,x.jsx)("button",{type:"submit",className:"btn theme-btn form-text",children:"Submit"})})]})})]})})}}}]);
//# sourceMappingURL=742.2f950d83.chunk.js.map