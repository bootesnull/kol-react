"use strict";(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[742],{36742:function(e,a,n){n.r(a);var l=n(4942),s=n(1413),t=n(42982),r=n(70885),c=n(72791),i=n(59434),o=n(35071),d=n(31389),m=n(26313),u=n(9085),h=n(16871),x=n(43504),g=(n(5462),n(8690)),p=n(39951),f=n(80184);a.default=function(){var e,a,n=(0,h.s0)(),j=(0,i.v9)(m.np).username,v=(0,c.useState)({}),b=(0,r.Z)(v,2),N=b[0],Z=b[1],_=(0,c.useState)(""),y=(0,r.Z)(_,2),k=y[0],S=y[1],w=(0,c.useState)(""),C=(0,r.Z)(w,2),E=C[0],F=C[1],D=(0,c.useState)(""),z=(0,r.Z)(D,2),I=z[0],B=z[1],K=(0,c.useState)(!1),P=(0,r.Z)(K,2),A=P[0],O=P[1],U=(0,c.useState)({}),M=(0,r.Z)(U,2),T=M[0],V=M[1],L=(0,c.useState)([]),W=(0,r.Z)(L,2),H=W[0],J=W[1],Q=(0,c.useState)([]),R=(0,r.Z)(Q,2),$=R[0],q=R[1],G=(0,c.useState)([]),X=(0,r.Z)(G,2),Y=X[0],ee=X[1],ae=(0,c.useState)(),ne=(0,r.Z)(ae,2),le=ne[0],se=ne[1],te=(0,c.useState)(),re=(0,r.Z)(te,2),ce=re[0],ie=re[1],oe=(0,c.useState)(""),de=(0,r.Z)(oe,2),me=de[0],ue=de[1],he=(0,c.useState)(!1),xe=(0,r.Z)(he,2),ge=(xe[0],xe[1]),pe=(0,c.useState)(0),fe=(0,r.Z)(pe,2),je=(fe[0],fe[1],(0,c.useState)(0)),ve=(0,r.Z)(je,2),be=(ve[0],ve[1],(0,c.useState)([])),Ne=(0,r.Z)(be,2),Ze=(Ne[0],Ne[1],(0,c.useState)([])),_e=(0,r.Z)(Ze,2),ye=_e[0],ke=_e[1],Se=(0,c.useState)([""]),we=(0,r.Z)(Se,2),Ce=we[0],Ee=we[1],Fe=localStorage.getItem("token"),De=(0,i.I0)(),ze=function(e,a){Ee([].concat((0,t.Z)(Ce),[""]))},Ie=(0,c.useState)([{name:"",social_user_id:"",followers:""}]),Be=(0,r.Z)(Ie,2),Ke=Be[0],Pe=Be[1],Ae=function(e,a){var n=e.target,l=n.name,s=n.value,r=(0,t.Z)(Ke);r[a][l]=s,Pe(r)},Oe=function(e){"Enter"===e.key&&(e.preventDefault(),e.stopPropagation())},Ue=(0,c.useState)({userName:j,personal_email:"",kol_type:"",city:"",state:"",zip_code:"",languages:[],social_active:"",bio:"",tags:[],userImage:"",userBanner:"",social_media:[],video_links:[]}),Me=(0,r.Z)(Ue,2),Te=Me[0],Ve=Me[1];(0,c.useEffect)((function(){(0,g.KQ)((function(e){Z((0,s.Z)({},e))}),Fe)}),[]);var Le=(0,c.useState)(!1),We=(0,r.Z)(Le,2),He=We[0],Je=We[1];console.log($),(0,c.useEffect)((function(){Ke.map((function(e,a){""==e.name||""==e.social_user_id||""==e.followers?Je(!0):(Je(!1),Ve((function(){return(0,s.Z)((0,s.Z)({},Te),{},{social_media:(0,t.Z)(Ke)})})))}))}),[Ke,$]),(0,c.useEffect)((function(){var e=ye.map((function(e,a){return e.value}));Ve((function(){return(0,s.Z)((0,s.Z)({},Te),{},{languages:(0,t.Z)(e)})}))}),[ye]);var Qe=(0,c.useState)(!1),Re=(0,r.Z)(Qe,2),$e=Re[0],qe=Re[1];(0,c.useEffect)((function(){Ce.map((function(e,a){""==e?qe(!0):(qe(!1),Ve((function(){return(0,s.Z)((0,s.Z)({},Te),{},{video_links:(0,t.Z)(Ce)})})))}))}),[Ce]),(0,c.useEffect)((function(){Ve((function(){return(0,s.Z)((0,s.Z)({},Te),{},{tags:(0,t.Z)(Y)})}))}),[Y]);var Ge=function(e){if(Ve((0,s.Z)((0,s.Z)({},Te),{},(0,l.Z)({},e.target.name,e.target.value))),"userImage"==e.target.name){if(e.target.files[0].size>1e6)return;se(e.target.files[0])}if("userBanner"==e.target.name){if(e.target.files[0].size>1e6)return;ie(e.target.files[0])}var a;"tags"==e.target.name&&ee(e.target.value),"kol_type"==e.target.name&&S(Object.keys(N).find((function(a){return N[a]==e.target.value}))),"personal_email"==e.target.name&&(e.target.value?(a=e.target.value,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a)?B(""):B("Please enter correct email")):B("Please fill the mandatory filed"))};(0,c.useEffect)((function(){(0,g.Ae)((function(e){q((0,s.Z)({},e))}),Fe)}),[]),(0,c.useEffect)((function(){(0,g.Rh)((function(e){V((0,s.Z)({},e))}),Fe)}),[]),(0,c.useEffect)((function(){(0,g.iZ)((function(e){J((0,s.Z)({},e))}),Fe)}),[]);var Xe=Object.entries(H).map((function(e){var a=(0,r.Z)(e,2);return{label:a[0],value:a[1]}}));return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"card",children:[(0,f.jsx)("div",{className:"card-header",children:(0,f.jsxs)("div",{className:"card-title h5 justify-content-between m-0 d-flex align-items-center",children:[(0,f.jsx)("span",{children:"Kol Profile Add"})," ",(0,f.jsx)(x.rU,{className:"btn theme-btn btn-sm",to:"../profile-view",children:"View"})]})}),(0,f.jsx)("div",{className:"card-body px-4",children:(0,f.jsxs)("form",{className:"",onSubmit:function(e){var a,l;e.preventDefault();var s=new FormData;if(s.append("personal_email",Te.personal_email),s.append("kol_type",k),s.append("city",Te.city),s.append("state",Te.state),s.append("zip_code",Te.zip_code),s.append("languages[]",Te.languages),s.append("social_active",Te.social_active),s.append("bio",Te.bio),s.append("tags[]",Te.tags),s.append("avatar",le),s.append("banner",ce),s.append("social_media[]",JSON.stringify(Te.social_media)),s.append("video_links[]",Te.video_links),""==Te.personal_email||""==Te.kol_type||""==Te.city||""==Te.state||""==Te.zip_code||""==Te.languages||""==Te.social_active||""==Te.bio||""==Te.tags.length||""==Te.userImage||""==Te.userBanner||""==(null===Te||void 0===Te||null===(a=Te.social_media)||void 0===a?void 0:a.length)||""==(null===Te||void 0===Te||null===(l=Te.video_links)||void 0===l?void 0:l.length)||He||$e)return F("Please fill the mandatory filed"),void O(!1);I.length>0?O(!1):De((0,d.AW)(s)).then((function(e){var a,l,s;200===(null===e||void 0===e||null===(a=e.payload)||void 0===a?void 0:a.statusCode)?(u.Am.success(null===e||void 0===e||null===(l=e.payload)||void 0===l?void 0:l.message),n("../profile-view"),O(!1)):(u.Am.error(null===e||void 0===e||null===(s=e.payload)||void 0===s?void 0:s.message),O(!1))}))},children:[(0,f.jsxs)("div",{className:"row",children:[(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,f.jsx)("label",{className:"form-label",children:(0,f.jsx)("b",{children:"Name"})}),(0,f.jsx)("input",{type:"text",className:"form-control",name:"userName",value:Te.userName,placeholder:"Enter Name",disabled:!0})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,f.jsx)("label",{className:"form-label",children:(0,f.jsx)("b",{children:"Email address"})}),(0,f.jsx)("input",{type:"email",name:"personal_email",className:"form-control ".concat(""===E||Te.personal_email?"":"border-danger"),defaultValue:Te.personal_email,onChange:Ge,placeholder:"Enter Email"}),(0,f.jsx)("div",{id:"emailHelp",className:"form-text",children:"This is Secondary email. We'll never share your email with anyone else."}),(0,f.jsx)("span",{className:"err text-danger",children:I||E&&""==Te.personal_email&&(0,f.jsx)(f.Fragment,{children:I||E})})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,f.jsx)("label",{className:"form-label",children:(0,f.jsxs)("b",{children:["Kol Type ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]})}),console.log(E,Te.kol_type),(0,f.jsxs)("select",{className:"form-select ".concat(""===E||Te.kol_type?"":"border-danger"),name:"kol_type",onChange:Ge,children:[(0,f.jsx)("option",{value:"",children:"Select Type"}),N&&Object.entries(N).map((function(e){var a=(0,r.Z)(e,2),n=a[0],l=a[1];return(0,f.jsx)("option",{value:l,children:l},n)}))]}),(0,f.jsx)("span",{className:"err text-danger",children:E&&""==Te.kol_type&&(0,f.jsx)(f.Fragment,{children:E})})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,f.jsx)("label",{className:"form-label",children:(0,f.jsxs)("b",{children:["City ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,f.jsx)("input",{type:"text",name:"city",onChange:Ge,className:"form-control ".concat(""===E||Te.city?"":"border-danger"),placeholder:"Enter City"}),(0,f.jsx)("span",{className:"err text-danger",children:E&&""==Te.city&&(0,f.jsx)(f.Fragment,{children:E})})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,f.jsx)("label",{className:"form-label",children:(0,f.jsxs)("b",{children:["State ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,f.jsxs)("select",{className:"form-select ".concat(""===E||Te.state?"":"border-danger"),onChange:Ge,name:"state",children:[(0,f.jsx)("option",{value:"",children:"Select State"}),T&&Object.entries(T).map((function(e){var a=(0,r.Z)(e,2),n=a[0],l=a[1];return(0,f.jsx)("option",{value:n,children:l})}))]}),(0,f.jsx)("span",{className:"err text-danger",children:E&&""==Te.state&&(0,f.jsx)(f.Fragment,{children:E})})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,f.jsx)("label",{className:" form-label",children:(0,f.jsxs)("b",{children:["Zip code ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,f.jsx)("input",{type:"text",name:"zip_code",className:"form-control ".concat(""===E||Te.zip_code?"":"border-danger"),onChange:Ge,placeholder:"Enter Zip code"}),(0,f.jsx)("span",{className:"err text-danger",children:E&&""==Te.zip_code&&(0,f.jsx)(f.Fragment,{children:E})})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,f.jsx)("label",{htmlFor:"exampleInputPassword1",className:" form-label",children:(0,f.jsxs)("b",{children:["Language ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,f.jsx)(o.ZP,{className:"text-capitalize ".concat(""===E||null!==Te&&void 0!==Te&&null!==(e=Te.languages)&&void 0!==e&&e.length?"":"border-danger"),name:"languages",options:Xe,onChange:function(e){ke((0,t.Z)(e))},isMulti:!0}),(0,f.jsx)("span",{className:"err text-danger",children:E&&""==Te.languages&&(0,f.jsx)(f.Fragment,{children:E})})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,f.jsx)("label",{className:" form-label",children:(0,f.jsxs)("b",{children:["Most Social Active Platform"," ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,f.jsxs)("select",{className:"form-select ".concat(""===E||Te.social_active?"":"border-danger"),name:"social_active",onChange:function(e){Ve((function(a){return(0,s.Z)((0,s.Z)({},a),{},(0,l.Z)({},e.target.name,[e.target.value]))}))},children:[(0,f.jsx)("option",{value:"",children:"Select Social Platform"}),Object.keys($).map((function(e,a){return(0,f.jsx)("option",{value:e,children:e},a)}))]}),(0,f.jsx)("span",{className:"err text-danger",children:E&&""==Te.social_active&&(0,f.jsx)(f.Fragment,{children:E})})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,f.jsx)("label",{className:"form-label",children:(0,f.jsxs)("b",{children:["Bio ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,f.jsx)("textarea",{className:"form-control ".concat(""===E||Te.bio?"":"border-danger"),name:"bio",onChange:Ge,rows:"6",placeholder:"Enter Bio"}),(0,f.jsx)("span",{className:"err text-danger",children:E&&""==Te.bio&&(0,f.jsx)(f.Fragment,{children:E})})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,f.jsx)("label",{className:"form-label",children:(0,f.jsxs)("b",{children:["Enter Tags ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,f.jsx)("input",{className:"form-control ".concat(""===E||null!==Te&&void 0!==Te&&null!==(a=Te.tags)&&void 0!==a&&a.length?"":"border-danger"),name:"tags",type:"text",value:me,placeholder:"Enter tags",onKeyDown:function(e){var a=e.key,n=me.trim();if("Enter"===a&&n.length&&!Y.includes(n)&&(e.preventDefault(),ee((function(e){return[].concat((0,t.Z)(e),[n])})),ue("")),"Backspace"===a&&!me.length&&Y.length){e.preventDefault();var l=(0,t.Z)(Y),s=l.pop();ee(l),ue(s)}ge(!1)},onKeyUp:function(){ge(!0)},onChange:function(e){var a=e.target.value;ue(a)}}),(0,f.jsx)("span",{className:"err text-danger",children:E&&""==Te.tags&&(0,f.jsx)(f.Fragment,{children:E})}),(0,f.jsx)("div",{className:"tagDiv",children:Y.length>0&&(0,f.jsx)(f.Fragment,{children:Y.map((function(e,a){return(0,f.jsxs)("div",{className:"tag btn-default",children:[e,(0,f.jsx)("button",{onClick:function(){return function(e){ee((function(a){return a.filter((function(a,n){return n!==e}))}))}(a)},children:"x"})]},a)}))})})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3 ",children:[(0,f.jsx)("label",{className:"form-label",children:(0,f.jsxs)("b",{children:["Upload Avatar ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,f.jsx)("input",{type:"file",className:"form-control ".concat(""===E||Te.userImage?"":"border-danger"),name:"userImage",onChange:Ge}),(0,f.jsx)("span",{className:"err text-danger",children:E&&""==Te.userImage&&(0,f.jsx)(f.Fragment,{children:E})})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3 ",children:[(0,f.jsx)("label",{className:"form-label",children:(0,f.jsxs)("b",{children:["Upload Banner ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,f.jsx)("input",{type:"file",className:"form-control ".concat(""===E||Te.userBanner?"":"border-danger"),name:"userBanner",onChange:Ge}),(0,f.jsx)("span",{className:"err text-danger",children:E&&""==Te.userBanner&&(0,f.jsx)(f.Fragment,{children:E})})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,f.jsx)("label",{className:"form-label",children:(0,f.jsxs)("b",{children:["Social Media Info ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]})}),Ke.map((function(e,a,n){return(0,f.jsxs)("div",{className:"col d-flex mb-2",children:[(0,f.jsxs)("select",{className:"form-select me-3",name:"name",onChange:function(e){return Ae(e,a)},onKeyDown:Oe,children:[(0,f.jsx)("option",{value:"",children:"Social Media"}),Object.keys($).map((function(e,a){var n,l,s,t,r;return(0,f.jsx)("option",{value:e,disabled:e==(null===(n=Ke[0])||void 0===n?void 0:n.name)||e==(null===(l=Ke[1])||void 0===l?void 0:l.name)||e==(null===(s=Ke[2])||void 0===s?void 0:s.name)||e==(null===(t=Ke[3])||void 0===t?void 0:t.name)||e==(null===(r=Ke[4])||void 0===r?void 0:r.name),children:e},a)}))]}),(0,f.jsx)("input",{className:"form-control me-3 w-50",name:"social_user_id",placeholder:"Enter User Id",value:e.social_user_id,onChange:function(e){return Ae(e,a)},onKeyDown:Oe}),(0,f.jsx)("input",{className:"form-control me-3 w-50",type:"number",name:"followers",placeholder:"30",value:e.followers,onChange:function(e){return Ae(e,a)},onKeyDown:Oe}),(0,f.jsxs)("div",{className:"btn-box",children:[1!==Ke.length&&(0,f.jsx)("button",{className:"btn sub-btn",onClick:function(e){return function(e,a){var n=(0,t.Z)(Ke);n.splice(a,1),Pe(n)}(0,a)},children:"-"}),Ke.length-1===a&&Ke.length<5&&(0,f.jsx)("button",{className:"btn custom-btn",onClick:function(e){Pe([].concat((0,t.Z)(Ke),[{name:"",social_user_id:"",followers:""}]))},children:"  + "})]})]})})),(0,f.jsx)("span",{className:"err text-danger",children:E&&He&&(0,f.jsx)(f.Fragment,{children:E})})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-sm-12 mt-3",children:[(0,f.jsx)("label",{className:"form-label",children:(0,f.jsxs)("b",{children:["Video Links ",(0,f.jsx)("span",{className:"text-danger",children:"*"})]})}),Ce.map((function(e,a){var n;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"col d-flex mb-2",children:[(0,f.jsx)("input",{name:"video_links",placeholder:"Enter Video Link",className:"form-control me-3 ".concat(""===E||null!==Te&&void 0!==Te&&null!==(n=Te.video_links)&&void 0!==n&&n.length?"":"border-danger"),value:e,onChange:function(e){return function(e,a){var n=e.target.value,l=(0,t.Z)(Ce);l[a]=n,Ee(l)}(e,a)},onKeyDown:Oe}),(0,f.jsxs)("div",{className:"btn-box",children:[1!==Ce.length&&(0,f.jsxs)("button",{className:"btn sub-btn",onClick:function(e){return function(e,a){e.preventDefault();var n=(0,t.Z)(Ce);n.splice(a,1),Ee(n)}(e,a)},children:[" ","-"," "]}),Ce.length-1===a&&(0,f.jsx)("button",{className:"btn custom-btn",onClick:ze,children:"+"})]})]})})})),console.log(Ce),(0,f.jsx)("span",{className:"err text-danger",children:E&&$e?(0,f.jsx)(f.Fragment,{children:E}):""})]})]}),(0,f.jsx)("div",{className:"mt-4 mx-auto d-block",children:(0,f.jsx)("button",{type:"submit",className:"btn theme-btn form-text spiner-btn",children:A?(0,f.jsx)(p.Z,{type:"spinner-cub",title:"Submit",size:16}):"Submit"})})]})})]})})}}}]);
//# sourceMappingURL=742.55e34b1e.chunk.js.map