"use strict";(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[175],{25175:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(70885),o=n(72791),a=(n(5462),n(70004)),u=n(26313),s=n(59434),i=n(9085),l=n(16871),c=n(39951),p=n(80184),f=function(){var e=(0,l.s0)(),t=(0,s.v9)(u.np),n=(t.isFetching,t.isSuccess,t.isError,t.errorMessage,t.email);(0,s.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.loginUser}));(0,o.useEffect)((function(){return function(){f((0,u.Jo)())}}),[]);var f=(0,s.I0)(),d=(0,o.useState)(""),h=(0,r.Z)(d,2),v=h[0],y=h[1],m=(0,o.useState)(n),b=(0,r.Z)(m,2),g=b[0],I=(b[1],(0,o.useState)("")),O=(0,r.Z)(I,2),j=O[0],S=O[1],x=(0,o.useState)(!1),N=(0,r.Z)(x,2),C=N[0],w=N[1];return(0,o.useEffect)((function(){6==v.length&&S("")}),[v]),(0,p.jsx)("section",{className:"otp-bg",children:(0,p.jsx)("div",{className:"container",children:(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-xl-6 col-lg-8 col-md-12",children:(0,p.jsx)("div",{className:"card otp-card",children:(0,p.jsxs)("div",{className:"card-body otp-card-body ",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"otp-heading mb-3 ",children:"Enter Verification Code"}),(0,p.jsxs)("p",{className:"",children:["We have just sent a verification code to",(0,p.jsx)("br",{}),(0,p.jsx)("span",{className:"email-verify-name",children:g})]}),(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),w(!0),console.log("otp, email",v,g),v.length<6&&(S("Please fill the mandatory filed"),w(!1)),f((0,u.wj)({otp:v,emailId:g})).then((function(n){var r,o,a;200==(null===n||void 0===n||null===(r=n.payload)||void 0===r?void 0:r.statusCode)?(e("/home"),i.Am.success(null===n||void 0===n||null===(o=n.payload)||void 0===o?void 0:o.message),w(!1)):(i.Am.error(null===n||void 0===n||null===(a=n.payload)||void 0===a?void 0:a.message),w(!1),t.target.reset())})),t.target.reset()},children:[(0,p.jsx)("div",{className:"my-4 form-group otp-div",children:(0,p.jsx)(a.Z,{value:v,onChange:y,numInputs:6,separator:(0,p.jsx)("span",{children:"\xa0"})})}),(0,p.jsxs)("div",{className:"err text-danger",children:[console.log("---------",v.length),j?(0,p.jsx)(p.Fragment,{children:j}):""]}),(0,p.jsx)("button",{className:"btn theme-btn btn-lg btn-block my-3 spiner-btn",type:"submit",children:C?(0,p.jsx)(c.Z,{type:"spinner-cub",title:"Verify & Proceed",size:20}):"Verify & Proceed"})]})]}),(0,p.jsxs)("div",{className:"col-12 align-items-center mt-3",children:[(0,p.jsxs)("p",{className:"optionText font-weight-bold mb-2 ",children:["Don't receive the OTP?",(0,p.jsx)("button",{type:"submit",className:"resend-button",onClick:function(){f((0,u.OA)(g)).then((function(e){var t,n,r;(console.log(e),200==(null===e||void 0===e||null===(t=e.payload)||void 0===t?void 0:t.statusCode))?(i.Am.success(null===e||void 0===e||null===(n=e.payload)||void 0===n?void 0:n.message),y("")):i.Am.error(null===e||void 0===e||null===(r=e.payload)||void 0===r?void 0:r.message)}))},disabled:!!C,children:C?(0,p.jsx)(c.Z,{type:"spinner-cub",title:"RESEND OTP",size:20}):"RESEND OTP"})]}),(0,p.jsx)("p",{className:"font-weight-bold",children:"OTP Will be expire in 1 mintue"})]})]})})})})})})}},70004:function(e,t,n){t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==b(e)&&"function"!==typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var s=o?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(r,u,s):r[u]=e[u]}r.default=e,n&&n.set(e,r);return r}(n(72791)),o=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}var g=function(e){return"object"===b(e)},I=function(e){p(n,e);var t=d(n);function n(e){var o;return i(this,n),m(v(o=t.call(this,e)),"getClasses",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!g(e)&&!1!==e})).join(" ")})),m(v(o),"getType",(function(){var e=o.props,t=e.isInputSecure,n=e.isInputNum;return t?"password":n?"tel":"text"})),o.input=r.default.createRef(),o}return c(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,n=e.shouldAutoFocus,r=this.input.current;r&&t&&n&&r.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,n=this.input.current;e.focus!==t&&n&&t&&(n.focus(),n.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.separator,a=e.isLastChild,i=e.inputStyle,l=e.focus,c=e.isDisabled,p=e.hasErrored,f=e.errorStyle,d=e.focusStyle,h=e.disabledStyle,v=(e.shouldAutoFocus,e.isInputNum),y=e.index,m=e.value,b=e.className,I=(e.isInputSecure,s(e,o));return r.default.createElement("div",{className:b,style:{display:"flex",alignItems:"center"}},r.default.createElement("input",u({"aria-label":"".concat(0===y?"Please enter verification code. ":"").concat(v?"Digit":"Character"," ").concat(y+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},g(i)&&i,l&&g(d)&&d,c&&g(h)&&h,p&&g(f)&&f),placeholder:t,className:this.getClasses(i,l&&d,c&&h,p&&f),type:this.getType(),maxLength:"1",ref:this.input,disabled:c,value:m||""},I)),!a&&n)}}]),n}(r.PureComponent),O=function(e){p(n,e);var t=d(n);function n(){var e;i(this,n);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return m(v(e=t.call.apply(t,[this].concat(a))),"state",{activeInput:0}),m(v(e),"getOtpValue",(function(){return e.props.value?e.props.value.toString().split(""):[]})),m(v(e),"getPlaceholderValue",(function(){var t=e.props,n=t.placeholder,r=t.numInputs;if("string"===typeof n){if(n.length===r)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),m(v(e),"handleOtpChange",(function(t){(0,e.props.onChange)(t.join(""))})),m(v(e),"isInputValueValid",(function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"===typeof t)&&1===t.trim().length})),m(v(e),"focusInput",(function(t){var n=e.props.numInputs,r=Math.max(Math.min(n-1,t),0);e.setState({activeInput:r})})),m(v(e),"focusNextInput",(function(){var t=e.state.activeInput;e.focusInput(t+1)})),m(v(e),"focusPrevInput",(function(){var t=e.state.activeInput;e.focusInput(t-1)})),m(v(e),"changeCodeAtFocus",(function(t){var n=e.state.activeInput,r=e.getOtpValue();r[n]=t[0],e.handleOtpChange(r)})),m(v(e),"handleOnPaste",(function(t){t.preventDefault();var n=e.state.activeInput,r=e.props,o=r.numInputs;if(!r.isDisabled){for(var a=e.getOtpValue(),u=n,s=t.clipboardData.getData("text/plain").slice(0,o-n).split(""),i=0;i<o;++i)i>=n&&s.length>0&&(a[i]=s.shift(),u++);e.setState({activeInput:u},(function(){e.focusInput(u),e.handleOtpChange(a)}))}})),m(v(e),"handleOnChange",(function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)})),m(v(e),"handleOnKeyDown",(function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32!==t.keyCode&&" "!==t.key&&"Spacebar"!==t.key&&"Space"!==t.key||t.preventDefault()})),m(v(e),"handleOnInput",(function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var n=t.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}})),m(v(e),"renderInputs",(function(){for(var t=e.state.activeInput,n=e.props,o=n.numInputs,a=n.inputStyle,u=n.focusStyle,s=n.separator,i=n.isDisabled,l=n.disabledStyle,c=n.hasErrored,p=n.errorStyle,f=n.shouldAutoFocus,d=n.isInputNum,h=n.isInputSecure,v=n.className,y=[],m=e.getOtpValue(),b=e.getPlaceholderValue(),g=e.props["data-cy"],O=e.props["data-testid"],j=function(n){y.push(r.default.createElement(I,{placeholder:b&&b[n],key:n,index:n,focus:t===n,value:m&&m[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:s,inputStyle:a,focusStyle:u,isLastChild:n===o-1,isDisabled:i,disabledStyle:l,hasErrored:c,errorStyle:p,shouldAutoFocus:f,isInputNum:d,isInputSecure:h,className:v,"data-cy":g&&"".concat(g,"-").concat(n),"data-testid":O&&"".concat(O,"-").concat(n)}))},S=0;S<o;S++)j(S);return y})),e}return c(n,[{key:"render",value:function(){var e=this.props.containerStyle;return r.default.createElement("div",{style:Object.assign({display:"flex"},g(e)&&e),className:g(e)?"":e},this.renderInputs())}}]),n}(r.Component);m(O,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var j=O;t.Z=j}}]);
//# sourceMappingURL=175.91df3238.chunk.js.map