(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[93],{1179:function(e,a,t){"use strict";t.r(a);var s=t(194),o=t(195),r=t(197),n=t(196),l=t(198),c=t(6),i=t.n(c),u=t(235),m=t(244),d=t(283),p=t(538),b=t(539),f=t(407),g=t(201),h=t(284),v=t(199),E=t(200),N=t(0),j=t(552),y=t(71),w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(r.a)(this,Object(n.a)(a).call(this,e))).onForgotPassword=function(e){t.props.loading||""!==e.email&&t.props.forgotPassword(e,t.props.history)},t.validateEmail=function(e){var a;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(a="Invalid email address"):a="Please enter your email address",a},t.state={email:"demo@gogo.com"},t}return Object(l.a)(a,e),Object(o.a)(a,[{key:"componentDidUpdate",value:function(){this.props.error?j.a.warning(this.props.error,"Forgot Password Error",3e3,null,null,""):this.props.loading||"success"!==this.props.forgotUserMail||j.a.success("Please check your email.","Forgot Password Success",3e3,null,null,"")}},{key:"render",value:function(){var e=this,a={email:this.state.email};return i.a.createElement(u.a,{className:"h-100"},i.a.createElement(v.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},i.a.createElement(m.a,{className:"auth-card"},i.a.createElement("div",{className:"position-relative image-side "},i.a.createElement("p",{className:"text-white h2"},"MAGIC IS IN THE DETAILS"),i.a.createElement("p",{className:"white mb-0"},"Please use your e-mail to reset your password. ",i.a.createElement("br",null),"If you are not a member, please"," ",i.a.createElement(g.c,{to:"/register",className:"white"},"register"),".")),i.a.createElement("div",{className:"form-side"},i.a.createElement(g.c,{to:"/",className:"white"},i.a.createElement("span",{className:"logo-single"})),i.a.createElement(d.a,{className:"mb-4"},i.a.createElement(E.a,{id:"user.forgot-password"})),i.a.createElement(h.c,{initialValues:a,onSubmit:this.onForgotPassword},(function(a){var t=a.errors,s=a.touched;return i.a.createElement(h.b,{className:"av-tooltip tooltip-label-bottom"},i.a.createElement(p.a,{className:"form-group has-float-label"},i.a.createElement(b.a,null,i.a.createElement(E.a,{id:"user.email"})),i.a.createElement(h.a,{className:"form-control",name:"email",validate:e.validateEmail}),t.email&&s.email&&i.a.createElement("div",{className:"invalid-feedback d-block"},t.email)),i.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},i.a.createElement(g.c,{to:"/user/forgot-password"},i.a.createElement(E.a,{id:"user.forgot-password-question"})),i.a.createElement(f.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(e.props.loading?"show-spinner":""),size:"lg"},i.a.createElement("span",{className:"spinner d-inline-block"},i.a.createElement("span",{className:"bounce1"}),i.a.createElement("span",{className:"bounce2"}),i.a.createElement("span",{className:"bounce3"})),i.a.createElement("span",{className:"label"},i.a.createElement(E.a,{id:"user.reset-password-button"})))))}))))))}}]),a}(c.Component);a.default=Object(y.b)((function(e){var a=e.authUser;return{forgotUserMail:a.forgotUserMail,loading:a.loading,error:a.error}}),{forgotPassword:N.nb})(w)},199:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return l}));var s=t(6),o=t.n(s),r=t(234),n=function(e){return o.a.createElement(r.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},l=function(e){return o.a.createElement("div",{className:"separator ".concat(e.className)})}},200:function(e,a,t){"use strict";var s=t(6),o=t.n(s),r=t(217);a.a=Object(r.d)((function(e){return o.a.createElement(r.a,e)}),{withRef:!1})},234:function(e,a,t){"use strict";var s=t(20),o=t(24),r=t(6),n=t.n(r),l=t(92),c=t.n(l),i=t(190),u=t.n(i),m=t(191),d=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:d,offset:d})]),b={tag:m.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,l=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,s){var o=e[a];if(delete c[a],o||""===o){var r=!s;if(Object(m.isObject)(o)){var n,l=r?"-":"-"+a+"-",d=g(r,a,o.size);i.push(Object(m.mapToCssModules)(u()(((n={})[d]=o.size||""===o.size,n["order"+l+o.order]=o.order||0===o.order,n["offset"+l+o.offset]=o.offset||0===o.offset,n)),t))}else{var p=g(r,a,o);i.push(p)}}})),i.length||i.push("col");var d=Object(m.mapToCssModules)(u()(a,i),t);return n.a.createElement(l,Object(s.a)({},c,{className:d}))};h.propTypes=b,h.defaultProps=f,a.a=h},235:function(e,a,t){"use strict";var s=t(20),o=t(24),r=t(6),n=t.n(r),l=t(92),c=t.n(l),i=t(190),u=t.n(i),m=t(191),d=c.a.oneOfType([c.a.number,c.a.string]),p={tag:m.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,l=e.tag,c=e.form,i=e.widths,d=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];i.forEach((function(a,t){var s=e[a];if(delete d[a],s){var o=!t;p.push(o?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var b=Object(m.mapToCssModules)(u()(a,r?"no-gutters":null,c?"form-row":"row",p),t);return n.a.createElement(l,Object(s.a)({},d,{className:b}))};f.propTypes=p,f.defaultProps=b,a.a=f},244:function(e,a,t){"use strict";var s=t(20),o=t(24),r=t(6),n=t.n(r),l=t(92),c=t.n(l),i=t(190),u=t.n(i),m=t(191),d={tag:m.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.color,l=e.body,c=e.inverse,i=e.outline,d=e.tag,p=e.innerRef,b=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(m.mapToCssModules)(u()(a,"card",!!c&&"text-white",!!l&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return n.a.createElement(d,Object(s.a)({},b,{className:f,ref:p}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},283:function(e,a,t){"use strict";var s=t(20),o=t(24),r=t(6),n=t.n(r),l=t(92),c=t.n(l),i=t(190),u=t.n(i),m=t(191),d={tag:m.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(o.a)(e,["className","cssModule","tag"]),c=Object(m.mapToCssModules)(u()(a,"card-title"),t);return n.a.createElement(r,Object(s.a)({},l,{className:c}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},407:function(e,a,t){"use strict";var s=t(20),o=t(24),r=t(208),n=t(202),l=t(6),c=t.n(l),i=t(92),u=t.n(i),m=t(190),d=t.n(m),p=t(191),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,n=e.className,l=e.close,i=e.cssModule,u=e.color,m=e.outline,b=e.size,f=e.tag,g=e.innerRef,h=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof h.children&&(h.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(m?"-outline":"")+"-"+u,E=Object(p.mapToCssModules)(d()(n,{close:l},l||"btn",l||v,!!b&&"btn-"+b,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===f&&(f="a");var N=l?"Close":null;return c.a.createElement(f,Object(s.a)({type:"button"===f&&h.onClick?"button":void 0},h,{className:E,ref:g,onClick:this.onClick,"aria-label":t||N}))},a}(c.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},a.a=f},552:function(e,a,t){"use strict";var s=t(537),o=(t(521),t(522));t.d(a,"a",(function(){return o.a}));s.a}}]);
//# sourceMappingURL=user-forgot-password.144fab01.chunk.js.map