"use strict";(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[742],{36742:function(e,a,n){n.r(a);var s=n(4942),l=n(1413),t=n(42982),r=n(70885),c=n(72791),i=n(59434),o=n(35071),d=n(31389),m=n(26313),u=n(9085),x=n(16871),h=n(43504),p=(n(5462),n(8690)),f=n(39951),g=n(80184);a.default=function(){var e=(0,x.s0)(),a=(0,i.v9)(m.np).username,n=(0,c.useState)({}),j=(0,r.Z)(n,2),b=j[0],v=j[1],N=(0,c.useState)(""),Z=(0,r.Z)(N,2),_=Z[0],y=Z[1],k=(0,c.useState)(""),S=(0,r.Z)(k,2),C=S[0],w=S[1],E=(0,c.useState)(""),F=(0,r.Z)(E,2),z=F[0],B=F[1],I=(0,c.useState)(!1),V=(0,r.Z)(I,2),A=V[0],P=V[1],O=(0,c.useState)({}),D=(0,r.Z)(O,2),K=D[0],U=D[1],L=(0,c.useState)([]),M=(0,r.Z)(L,2),T=M[0],W=M[1],H=(0,c.useState)([]),J=(0,r.Z)(H,2),Q=J[0],R=J[1],$=(0,c.useState)([]),q=(0,r.Z)($,2),G=q[0],X=q[1],Y=(0,c.useState)(),ee=(0,r.Z)(Y,2),ae=ee[0],ne=ee[1],se=(0,c.useState)(),le=(0,r.Z)(se,2),te=le[0],re=le[1],ce=(0,c.useState)(""),ie=(0,r.Z)(ce,2),oe=ie[0],de=ie[1],me=(0,c.useState)(!1),ue=(0,r.Z)(me,2),xe=(ue[0],ue[1]),he=(0,c.useState)(0),pe=(0,r.Z)(he,2),fe=(pe[0],pe[1],(0,c.useState)(0)),ge=(0,r.Z)(fe,2),je=ge[0],be=ge[1],ve=(0,c.useState)([]),Ne=(0,r.Z)(ve,2),Ze=Ne[0],_e=Ne[1],ye=(0,c.useState)([]),ke=(0,r.Z)(ye,2),Se=ke[0],Ce=ke[1],we=localStorage.getItem("token"),Ee=(0,i.I0)(),Fe=(0,c.useState)([{name:"",social_user_id:"",followers:"",social_icon:""}]),ze=(0,r.Z)(Fe,2),Be=ze[0],Ie=ze[1],Ve=function(e,a){var n=e.target,s=n.name,l=n.value,r=(0,t.Z)(Be);r[a][s]=l,Ie(r)},Ae=function(){Ie([].concat((0,t.Z)(Be),[{name:"",social_user_id:"",followers:"",social_icon:""}]))},Pe=(0,c.useState)({userName:a,personal_email:"",kol_type:"",city:"",state:"",zip_code:"",languages:[],social_active:"",bio:"",tags:[],userImage:"",userBanner:"",social_media:[],video_links:[]}),Oe=(0,r.Z)(Pe,2),De=Oe[0],Ke=Oe[1];(0,c.useEffect)((function(){(0,p.KQ)((function(e){v((0,l.Z)({},e))}),we)}),[]),(0,c.useEffect)((function(){Ke((function(){return(0,l.Z)((0,l.Z)({},De),{},{social_media:(0,t.Z)(Be)})}))}),[Be]),(0,c.useEffect)((function(){var e=Se.map((function(e,a){return e.value}));Ke((function(){return(0,l.Z)((0,l.Z)({},De),{},{languages:(0,t.Z)(e)})}))}),[Se]),(0,c.useEffect)((function(){Ke((function(){return(0,l.Z)((0,l.Z)({},De),{},{video_links:(0,t.Z)(Ze)})}))}),[Ze]),(0,c.useEffect)((function(){Ke((function(){return(0,l.Z)((0,l.Z)({},De),{},{tags:(0,t.Z)(G)})}))}),[G]);var Ue=function(e){if(Ke((0,l.Z)((0,l.Z)({},De),{},(0,s.Z)({},e.target.name,e.target.value))),"userImage"==e.target.name){if(e.target.files[0].size>1e6)return;ne(e.target.files[0])}if("userBanner"==e.target.name){if(e.target.files[0].size>1e6)return;re(e.target.files[0])}var a;"tags"==e.target.name&&X(e.target.value),"kol_type"==e.target.name&&y(Object.keys(b).find((function(a){return b[a]==e.target.value}))),"personal_email"==e.target.name&&(e.target.value?(a=e.target.value,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a)?B(""):B("Please enter correct email")):B("Please fill the mandatory filed"))},Le=function(e){_e((function(a){return[].concat((0,t.Z)(a),[e.target.value])}))};(0,c.useEffect)((function(){(0,p.Ae)((function(e){R((0,l.Z)({},e))}),we)}),[]),(0,c.useEffect)((function(){(0,p.Rh)((function(e){U((0,l.Z)({},e))}),we)}),[]),(0,c.useEffect)((function(){(0,p.iZ)((function(e){W((0,l.Z)({},e))}),we)}),[]);var Me=Object.entries(T).map((function(e){var a=(0,r.Z)(e,2);return{label:a[0],value:a[1]}}));return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"card",children:[(0,g.jsx)("div",{className:"card-header",children:(0,g.jsxs)("div",{className:"card-title h5 justify-content-between m-0 d-flex align-items-center",children:[(0,g.jsx)("span",{children:"Kol Profile Add"})," ",(0,g.jsx)(h.rU,{className:"btn theme-btn btn-sm",to:"../profile-view",children:"View"})]})}),(0,g.jsx)("div",{className:"card-body px-4",children:(0,g.jsxs)("form",{className:"",onSubmit:function(a){a.preventDefault();var n=new FormData;n.append("personal_email",De.personal_email),n.append("kol_type",_),n.append("city",De.city),n.append("state",De.state),n.append("zip_code",De.zip_code),n.append("languages[]",De.languages),n.append("social_active",De.social_active),n.append("bio",De.bio),n.append("tags[]",De.tags),n.append("avatar",ae),n.append("banner",te),n.append("social_media[]",JSON.stringify(De.social_media)),n.append("video_links[]",De.video_links),""==De.personal_email||""==De.kol_type||""==De.city||""==De.state||""==De.zip_code||""==De.languages||""==De.social_active||""==De.bio||""==De.tags||""==De.userImage||""==De.userBanner?(w("Please fill the mandatory filed"),P(!1)):Ee((0,d.AW)(n)).then((function(a){var n,s,l;null!==a&&void 0!==a&&null!==(n=a.payload)&&void 0!==n&&n.status?(u.Am.success(null===a||void 0===a||null===(s=a.payload)||void 0===s?void 0:s.message),e("../profile-view"),P(!1)):(u.Am.error(null===a||void 0===a||null===(l=a.payload)||void 0===l?void 0:l.message),P(!1))}))},children:[(0,g.jsxs)("div",{className:"row",children:[(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,g.jsx)("label",{className:"form-label",children:(0,g.jsx)("b",{children:"Name"})}),(0,g.jsx)("input",{type:"text",className:"form-control",name:"userName",value:De.userName,placeholder:"Enter Name",disabled:!0})]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,g.jsx)("label",{className:"form-label",children:(0,g.jsx)("b",{children:"Email address"})}),(0,g.jsx)("input",{type:"email",name:"personal_email",className:"form-control ".concat(""===C||De.personal_email?"":"border-danger"),defaultValue:De.personal_email,onChange:Ue,placeholder:"Enter Email"}),(0,g.jsx)("div",{id:"emailHelp",className:"form-text",children:"This is Secondary email. We'll never share your email with anyone else."}),(0,g.jsx)("span",{className:"err text-danger",children:z||C&&""==De.personal_email&&(0,g.jsx)(g.Fragment,{children:z||C})})]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,g.jsx)("label",{className:"form-label",children:(0,g.jsxs)("b",{children:["Kol Type ",(0,g.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,g.jsxs)("select",{className:"form-select ".concat(""===C||De.kol_type?"":"border-danger"),name:"kol_type",onChange:Ue,children:[(0,g.jsx)("option",{defaultValue:!0,children:"Select Type"}),b&&Object.entries(b).map((function(e){var a=(0,r.Z)(e,2),n=a[0],s=a[1];return(0,g.jsx)("option",{value:s,children:s},n)}))]}),(0,g.jsx)("span",{className:"err text-danger",children:C&&""==De.kol_type&&(0,g.jsx)(g.Fragment,{children:C})})]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,g.jsx)("label",{className:"form-label",children:(0,g.jsxs)("b",{children:["City ",(0,g.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,g.jsx)("input",{type:"text",name:"city",onChange:Ue,className:"form-control ".concat(""===C||De.city?"":"border-danger"),placeholder:"Enter City"}),(0,g.jsx)("span",{className:"err text-danger",children:C&&""==De.city&&(0,g.jsx)(g.Fragment,{children:C})})]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,g.jsx)("label",{className:"form-label",children:(0,g.jsxs)("b",{children:["State ",(0,g.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,g.jsxs)("select",{className:"form-select ".concat(""===C||De.state?"":"border-danger"),onChange:Ue,name:"state",children:[(0,g.jsx)("option",{defaultValue:!0,children:"Select State"}),K&&Object.entries(K).map((function(e){var a=(0,r.Z)(e,2),n=a[0],s=a[1];return(0,g.jsx)("option",{value:n,children:s})}))]}),(0,g.jsx)("span",{className:"err text-danger",children:C&&""==De.state&&(0,g.jsx)(g.Fragment,{children:C})})]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,g.jsx)("label",{className:" form-label",children:(0,g.jsxs)("b",{children:["Zip code ",(0,g.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,g.jsx)("input",{type:"text",name:"zip_code",className:"form-control ".concat(""===C||De.zip_code?"":"border-danger"),onChange:Ue,placeholder:"Enter Zip code"}),(0,g.jsx)("span",{className:"err text-danger",children:C&&""==De.zip_code&&(0,g.jsx)(g.Fragment,{children:C})})]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,g.jsx)("label",{htmlFor:"exampleInputPassword1",className:" form-label",children:(0,g.jsxs)("b",{children:["Language ",(0,g.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,g.jsx)(o.ZP,{className:"text-capitalize ".concat(""===C||De.languages?"":"border-danger"),name:"languages",options:Me,onChange:function(e){Ce((0,t.Z)(e))},isMulti:!0}),(0,g.jsx)("span",{className:"err text-danger",children:C&&""==De.languages&&(0,g.jsx)(g.Fragment,{children:C})})]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,g.jsx)("label",{className:" form-label",children:(0,g.jsxs)("b",{children:["Most Social Active Platform ",(0,g.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,g.jsxs)("select",{className:"form-select ".concat(""===C||De.social_active?"":"border-danger"),name:"social_active",onChange:function(e){Ke((function(a){return(0,l.Z)((0,l.Z)({},a),{},(0,s.Z)({},e.target.name,[e.target.value]))}))},children:[(0,g.jsx)("option",{defaultValue:!0,children:"Select Social Platform"}),Object.keys(Q).map((function(e,a){return(0,g.jsx)("option",{value:e,children:e},a)}))]}),(0,g.jsx)("span",{className:"err text-danger",children:C&&""==De.social_active&&(0,g.jsx)(g.Fragment,{children:C})})]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,g.jsx)("label",{className:"form-label",children:(0,g.jsxs)("b",{children:["Bio ",(0,g.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,g.jsx)("textarea",{className:"form-control ".concat(""===C||De.bio?"":"border-danger"),name:"bio",onChange:Ue,rows:"6",placeholder:"Enter Bio"}),(0,g.jsx)("span",{className:"err text-danger",children:C&&""==De.bio&&(0,g.jsx)(g.Fragment,{children:C})})]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,g.jsx)("label",{className:"form-label",children:(0,g.jsxs)("b",{children:["Enter Tags ",(0,g.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,g.jsx)("input",{className:"form-control ".concat(""===C||De.tags?"":"border-danger"),name:"tags",type:"text",value:oe,placeholder:"Enter tags",onKeyDown:function(e){var a=e.key,n=oe.trim();if("Enter"===a&&n.length&&!G.includes(n)&&(e.preventDefault(),X((function(e){return[].concat((0,t.Z)(e),[n])})),de("")),"Backspace"===a&&!oe.length&&G.length){e.preventDefault();var s=(0,t.Z)(G),l=s.pop();X(s),de(l)}xe(!1)},onKeyUp:function(){xe(!0)},onChange:function(e){var a=e.target.value;de(a)}}),(0,g.jsx)("span",{className:"err text-danger",children:C&&""==De.tags&&(0,g.jsx)(g.Fragment,{children:C})}),(0,g.jsx)("div",{className:"tagDiv",children:G.length>0&&(0,g.jsx)(g.Fragment,{children:G.map((function(e,a){return(0,g.jsxs)("div",{className:"tag btn-default",children:[e,(0,g.jsx)("button",{onClick:function(){return function(e){X((function(a){return a.filter((function(a,n){return n!==e}))}))}(a)},children:"x"})]},a)}))})})]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3 ",children:[(0,g.jsx)("label",{className:"form-label",children:(0,g.jsxs)("b",{children:["Upload Avatar ",(0,g.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,g.jsx)("input",{type:"file",className:"form-control ".concat(""===C||De.userImage?"":"border-danger"),name:"userImage",onChange:Ue}),(0,g.jsx)("span",{className:"err text-danger",children:C&&""==De.userImage&&(0,g.jsx)(g.Fragment,{children:C})})]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3 ",children:[(0,g.jsx)("label",{className:"form-label",children:(0,g.jsxs)("b",{children:["Upload Banner ",(0,g.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,g.jsx)("input",{type:"file",className:"form-control ".concat(""===C||De.userBanner?"":"border-danger"),name:"userBanner",onChange:Ue}),(0,g.jsx)("span",{className:"err text-danger",children:C&&""==De.userBanner&&(0,g.jsx)(g.Fragment,{children:C})})]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,g.jsx)("label",{className:"form-label",children:(0,g.jsxs)("b",{children:["Social Media Info ",(0,g.jsx)("span",{className:"text-danger",children:"*"})]})}),Be.map((function(e,a){return(0,g.jsxs)("div",{className:"col d-flex mb-2",children:[(0,g.jsxs)("select",{className:"form-select me-3",name:"name",onChange:function(e){return Ve(e,a)},children:[(0,g.jsx)("option",{defaultValue:!0,children:"Social Media"}),Object.keys(Q).map((function(e,a){return(0,g.jsx)("option",{value:e,children:e},a)}))]}),(0,g.jsx)("input",{className:"form-control me-3",name:"social_user_id",placeholder:"Enter User Id",value:e.social_user_id,onChange:function(e){return Ve(e,a)}}),(0,g.jsx)("input",{className:"form-control me-3",name:"followers",placeholder:"30",value:e.followers,onChange:function(e){return Ve(e,a)}}),(0,g.jsxs)("div",{className:"btn-box",children:[1!==Be.length&&(0,g.jsx)("button",{className:"btn sub-btn",onClick:function(){return function(e){var a=(0,t.Z)(Be);a.splice(e,1),Ie(a)}(a)},children:"-"}),Be.length-1===a&&(0,g.jsx)("button",{className:"btn custom-btn",onClick:Ae,children:" +"})]})]})}))]}),(0,g.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,g.jsx)("label",{className:"form-label",children:(0,g.jsxs)("b",{children:["Video Links ",(0,g.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,g.jsxs)("div",{className:"col d-flex mb-2",children:[(0,g.jsx)("input",{type:"text",className:"form-control me-3",placeholder:"Enter Video Link",onChange:function(e){Le(e)}}),(0,g.jsx)("div",{className:"btn-box",children:(0,g.jsx)("button",{type:"button",name:"video_links",className:"btn custom-btn",onClick:function(){return be(je+1)},children:" + "})})]}),(0,t.Z)(Array(je)).map((function(e,a){return(0,g.jsxs)("div",{className:"col d-flex mb-2",children:[(0,g.jsx)("input",{type:"text",className:"form-control me-3",onBlur:function(e){Le(e)},placeholder:"Enter Video Link"}),(0,g.jsx)("div",{className:"btn-box",children:(0,g.jsxs)("button",{type:"button",name:"video_links",className:"btn sub-btn",onClick:function(){be(je-1),De.video_links.pop()},children:[" ","-"," "]})})]},a)}))]})]}),(0,g.jsx)("div",{className:"mt-4 mx-auto d-block",children:(0,g.jsx)("button",{type:"submit",className:"btn theme-btn form-text spiner-btn",children:A?(0,g.jsx)(f.Z,{type:"spinner-cub",title:"Submit",size:16}):"Submit"})})]})})]})})}}}]);
//# sourceMappingURL=742.14c7dff7.chunk.js.map