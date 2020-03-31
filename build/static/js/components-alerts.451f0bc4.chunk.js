(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[26],{1163:function(e,a,t){"use strict";t.r(a);var r=t(194),n=t(195),l=t(197),s=t(196),c=t(198),o=t(6),i=t.n(o),m=t(235),u=t(244),d=t(260),f=t(283),g=t(411),b=t(484),p=t(200),E=t(199),N=t(204),h=t(399),O=t(407),y=t(552),v=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).createNotification=function(e,a){var t=a||"";return function(){switch(e){case"primary":y.a.primary("This is a notification!","Primary Notification",3e3,null,null,t);break;case"secondary":y.a.secondary("This is a notification!","Secondary Notification",3e3,null,null,t);break;case"info":y.a.info("Info message","",3e3,null,null,t);break;case"success":y.a.success("Success message","Title here",3e3,null,null,t);break;case"warning":y.a.warning("Warning message","Close after 3000ms",3e3,null,null,t);break;case"error":y.a.error("Error message","Click me!",5e3,(function(){alert("callback")}),null,t);break;default:y.a.info("Info message")}}},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement(p.a,{id:"alert.react-notifications"})),i.a.createElement(h.a,null,i.a.createElement(p.a,{id:"alert.outline"})),i.a.createElement(O.a,{outline:!0,className:"mb-3",color:"primary",onClick:this.createNotification("primary")},i.a.createElement(p.a,{id:"alert.primary"}))," ",i.a.createElement(O.a,{outline:!0,className:"mb-3",color:"secondary",onClick:this.createNotification("secondary")},i.a.createElement(p.a,{id:"alert.secondary"}))," ",i.a.createElement(O.a,{outline:!0,className:"mb-3",color:"info",onClick:this.createNotification("info")},i.a.createElement(p.a,{id:"alert.info"}))," ",i.a.createElement(O.a,{outline:!0,className:"mb-3",color:"success",onClick:this.createNotification("success")},i.a.createElement(p.a,{id:"alert.success"}))," ",i.a.createElement(O.a,{outline:!0,className:"mb-3",color:"warning",onClick:this.createNotification("warning")},i.a.createElement(p.a,{id:"alert.warning"}))," ",i.a.createElement(O.a,{outline:!0,className:"mb-3",color:"danger",onClick:this.createNotification("error")},i.a.createElement(p.a,{id:"alert.error"})),i.a.createElement(h.a,null,i.a.createElement(p.a,{id:"alert.filled"})),i.a.createElement(O.a,{className:"mb-3",color:"primary",onClick:this.createNotification("primary","filled")},i.a.createElement(p.a,{id:"alert.primary"}))," ",i.a.createElement(O.a,{className:"mb-3",color:"secondary",onClick:this.createNotification("secondary","filled")},i.a.createElement(p.a,{id:"alert.secondary"}))," ",i.a.createElement(O.a,{className:"mb-3",color:"info",onClick:this.createNotification("info","filled")},i.a.createElement(p.a,{id:"alert.info"}))," ",i.a.createElement(O.a,{className:"mb-3",color:"success",onClick:this.createNotification("success","filled")},i.a.createElement(p.a,{id:"alert.success"}))," ",i.a.createElement(O.a,{className:"mb-3",color:"warning",onClick:this.createNotification("warning","filled")},i.a.createElement(p.a,{id:"alert.warning"}))," ",i.a.createElement(O.a,{className:"mb-3",color:"danger",onClick:this.createNotification("error","filled")},i.a.createElement(p.a,{id:"alert.error"}))))}}]),a}(o.Component);t.d(a,"default",(function(){return j}));var j=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(l.a)(this,Object(s.a)(a).call(this,e))).onDismiss=function(){t.setState({visible:!1})},t.state={visible:!0},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(o.Fragment,null,i.a.createElement(m.a,null,i.a.createElement(E.a,{xxs:"12"},i.a.createElement(N.a,{heading:"menu.alerts",match:this.props.match}),i.a.createElement(E.b,{className:"mb-5"}))),i.a.createElement(m.a,null,i.a.createElement(E.a,{xxs:"12",className:"mb-4"},i.a.createElement(v,null)),i.a.createElement(E.a,{xxs:"12",className:"mb-4"},i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement(p.a,{id:"alert.rounded"})),i.a.createElement(g.a,{color:"primary",className:"rounded"},i.a.createElement(p.a,{id:"alert.primary-text"})),i.a.createElement(g.a,{color:"secondary",className:"rounded"},i.a.createElement(p.a,{id:"alert.secondary-text"})),i.a.createElement(g.a,{color:"success",className:"rounded"},i.a.createElement(p.a,{id:"alert.success-text"})),i.a.createElement(g.a,{color:"danger",className:"rounded"},i.a.createElement(p.a,{id:"alert.danger-text"})),i.a.createElement(g.a,{color:"warning",className:"rounded"},i.a.createElement(p.a,{id:"alert.warning-text"})),i.a.createElement(g.a,{color:"info",className:"rounded"},i.a.createElement(p.a,{id:"alert.info-text"})),i.a.createElement(g.a,{color:"light",className:"rounded"},i.a.createElement(p.a,{id:"alert.light-text"})),i.a.createElement(g.a,{color:"dark",className:"rounded"},i.a.createElement(p.a,{id:"alert.dark-text"}))))),i.a.createElement(E.a,{xxs:"12",className:"mb-4"},i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement(p.a,{id:"alert.default"})),i.a.createElement(g.a,{color:"primary"},i.a.createElement(p.a,{id:"alert.primary-text"})),i.a.createElement(g.a,{color:"secondary"},i.a.createElement(p.a,{id:"alert.secondary-text"})),i.a.createElement(g.a,{color:"success"},i.a.createElement(p.a,{id:"alert.success-text"})),i.a.createElement(g.a,{color:"danger"},i.a.createElement(p.a,{id:"alert.danger-text"})),i.a.createElement(g.a,{color:"warning"},i.a.createElement(p.a,{id:"alert.warning-text"})),i.a.createElement(g.a,{color:"info"},i.a.createElement(p.a,{id:"alert.info-text"})),i.a.createElement(g.a,{color:"light"},i.a.createElement(p.a,{id:"alert.light-text"})),i.a.createElement(g.a,{color:"dark"},i.a.createElement(p.a,{id:"alert.dark-text"}))))),i.a.createElement(E.a,{xxs:"12",className:"mb-4"},i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement(p.a,{id:"alert.dismissing"})),i.a.createElement(g.a,{color:"warning",className:"rounded",isOpen:this.state.visible,toggle:this.onDismiss},i.a.createElement(p.a,{id:"alert.dismissing-text"})),i.a.createElement(b.a,{color:"warning",fade:!1},i.a.createElement(p.a,{id:"alert.dismissing-without-animate-text"})))))))}}]),a}(o.Component)},199:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return c}));var r=t(6),n=t.n(r),l=t(234),s=function(e){return n.a.createElement(l.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},c=function(e){return n.a.createElement("div",{className:"separator ".concat(e.className)})}},204:function(e,a,t){"use strict";var r=t(6),n=t.n(r),l=t(236),s=t(237),c=t(201),o=t(200),i=function(e){return n.a.createElement(o.a,{id:"menu.".concat(e)})},m=function(e,a,t){return 0===t?"":e.split(a)[0]+a},u=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),n.a.createElement(r.Fragment,null,n.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,r){return n.a.createElement(s.a,{key:r,active:t.length===r+1},t.length!==r+1?n.a.createElement(c.c,{to:"/"+m(a,e,r)},i(e)):i(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return n.a.createElement(r.Fragment,null,a&&n.a.createElement("h1",null,n.a.createElement(o.a,{id:a})),n.a.createElement(u,{match:t}))}},234:function(e,a,t){"use strict";var r=t(20),n=t(24),l=t(6),s=t.n(l),c=t(92),o=t.n(c),i=t(190),m=t.n(i),u=t(191),d=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:d,offset:d})]),g={tag:u.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:o.a.string,cssModule:o.a.object,widths:o.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,l=e.widths,c=e.tag,o=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];l.forEach((function(a,r){var n=e[a];if(delete o[a],n||""===n){var l=!r;if(Object(u.isObject)(n)){var s,c=l?"-":"-"+a+"-",d=p(l,a,n.size);i.push(Object(u.mapToCssModules)(m()(((s={})[d]=n.size||""===n.size,s["order"+c+n.order]=n.order||0===n.order,s["offset"+c+n.offset]=n.offset||0===n.offset,s)),t))}else{var f=p(l,a,n);i.push(f)}}})),i.length||i.push("col");var d=Object(u.mapToCssModules)(m()(a,i),t);return s.a.createElement(c,Object(r.a)({},o,{className:d}))};E.propTypes=g,E.defaultProps=b,a.a=E},235:function(e,a,t){"use strict";var r=t(20),n=t(24),l=t(6),s=t.n(l),c=t(92),o=t.n(c),i=t(190),m=t.n(i),u=t(191),d=o.a.oneOfType([o.a.number,o.a.string]),f={tag:u.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,c=e.tag,o=e.form,i=e.widths,d=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(a,t){var r=e[a];if(delete d[a],r){var n=!t;f.push(n?"row-cols-"+r:"row-cols-"+a+"-"+r)}}));var g=Object(u.mapToCssModules)(m()(a,l?"no-gutters":null,o?"form-row":"row",f),t);return s.a.createElement(c,Object(r.a)({},d,{className:g}))};b.propTypes=f,b.defaultProps=g,a.a=b},236:function(e,a,t){"use strict";var r=t(20),n=t(24),l=t(6),s=t.n(l),c=t(92),o=t.n(c),i=t(190),m=t.n(i),u=t(191),d={tag:u.tagPropType,listTag:u.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},f=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,c=e.children,o=e.tag,i=e.listTag,d=e["aria-label"],f=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(u.mapToCssModules)(m()(a),l),b=Object(u.mapToCssModules)(m()("breadcrumb",t),l);return s.a.createElement(o,Object(r.a)({},f,{className:g,"aria-label":d}),s.a.createElement(i,{className:b},c))};f.propTypes=d,f.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=f},237:function(e,a,t){"use strict";var r=t(20),n=t(24),l=t(6),s=t.n(l),c=t(92),o=t.n(c),i=t(190),m=t.n(i),u=t(191),d={tag:u.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.active,c=e.tag,o=Object(n.a)(e,["className","cssModule","active","tag"]),i=Object(u.mapToCssModules)(m()(a,!!l&&"active","breadcrumb-item"),t);return s.a.createElement(c,Object(r.a)({},o,{className:i,"aria-current":l?"page":void 0}))};f.propTypes=d,f.defaultProps={tag:"li"},a.a=f},244:function(e,a,t){"use strict";var r=t(20),n=t(24),l=t(6),s=t.n(l),c=t(92),o=t.n(c),i=t(190),m=t.n(i),u=t(191),d={tag:u.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,l=e.color,c=e.body,o=e.inverse,i=e.outline,d=e.tag,f=e.innerRef,g=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.mapToCssModules)(m()(a,"card",!!o&&"text-white",!!c&&"card-body",!!l&&(i?"border":"bg")+"-"+l),t);return s.a.createElement(d,Object(r.a)({},g,{className:b,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},260:function(e,a,t){"use strict";var r=t(20),n=t(24),l=t(6),s=t.n(l),c=t(92),o=t.n(c),i=t(190),m=t.n(i),u=t(191),d={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,c=e.tag,o=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.mapToCssModules)(m()(a,"card-body"),t);return s.a.createElement(c,Object(r.a)({},o,{className:i,ref:l}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},283:function(e,a,t){"use strict";var r=t(20),n=t(24),l=t(6),s=t.n(l),c=t(92),o=t.n(c),i=t(190),m=t.n(i),u=t(191),d={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),o=Object(u.mapToCssModules)(m()(a,"card-title"),t);return s.a.createElement(l,Object(r.a)({},c,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},399:function(e,a,t){"use strict";var r=t(20),n=t(24),l=t(6),s=t.n(l),c=t(92),o=t.n(c),i=t(190),m=t.n(i),u=t(191),d={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),o=Object(u.mapToCssModules)(m()(a,"card-subtitle"),t);return s.a.createElement(l,Object(r.a)({},c,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},411:function(e,a,t){"use strict";var r=t(20),n=t(24),l=t(246),s=t(6),c=t.n(s),o=t(92),i=t.n(o),m=t(190),u=t.n(m),d=t(191),f=t(282),g={children:i.a.node,className:i.a.string,closeClassName:i.a.string,closeAriaLabel:i.a.string,cssModule:i.a.object,color:i.a.string,fade:i.a.bool,isOpen:i.a.bool,toggle:i.a.func,tag:d.tagPropType,transition:i.a.shape(f.a.propTypes),innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(l.a)({},f.a.defaultProps,{unmountOnExit:!0})};function p(e){var a=e.className,t=e.closeClassName,s=e.closeAriaLabel,o=e.cssModule,i=e.tag,m=e.color,g=e.isOpen,b=e.toggle,p=e.children,E=e.transition,N=e.fade,h=e.innerRef,O=Object(n.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(d.mapToCssModules)(u()(a,"alert","alert-"+m,{"alert-dismissible":b}),o),v=Object(d.mapToCssModules)(u()("close",t),o),j=Object(l.a)({},f.a.defaultProps,{},E,{baseClass:N?E.baseClass:"",timeout:N?E.timeout:0});return c.a.createElement(f.a,Object(r.a)({},O,j,{tag:i,className:y,in:g,role:"alert",innerRef:h}),b?c.a.createElement("button",{type:"button",className:v,"aria-label":s,onClick:b},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,p)}p.propTypes=g,p.defaultProps=b,a.a=p},484:function(e,a,t){"use strict";var r=t(20),n=t(208),l=t(202),s=t(6),c=t.n(s),o=t(411),i=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:!0},t.toggle=t.toggle.bind(Object(n.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return c.a.createElement(o.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},this.props))},a}(s.Component);a.a=i},552:function(e,a,t){"use strict";var r=t(537),n=(t(521),t(522));t.d(a,"a",(function(){return n.a}));r.a}}]);
//# sourceMappingURL=components-alerts.451f0bc4.chunk.js.map