(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[21],{1157:function(e,t,a){"use strict";a.r(t);var n=a(281),l=a(194),c=a(195),o=a(197),r=a(196),s=a(198),i=a(6),m=a.n(i),d=a(235),u=a(407),p=a(392),h=a(540),E=a(550),g=a(542),b=a(543),f=a(454),N=a(541),v=a(217),k=a(71),O=a(200),y=a(199),C=a(204),x=a(0),I=a(244),w=a(260),j=a(382),D=a(201),S=m.a.memo((function(e){var t=e.item,a=e.handleCheckChange,n=e.isSelected;return m.a.createElement(y.a,{xxs:"12"},m.a.createElement(I.a,{className:"card d-flex mb-3"},m.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},m.a.createElement(w.a,{className:"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"},m.a.createElement(D.c,{to:"#",id:"toggler".concat(t.id),className:"list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1"},m.a.createElement("i",{className:"".concat("COMPLETED"===t.status?"simple-icon-check heading-icon":"simple-icon-refresh heading-icon")}),m.a.createElement("span",{className:"align-middle d-inline-block"},t.title)),m.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-xs-100"},t.category),m.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-xs-100"},t.createDate),m.a.createElement("div",{className:"w-15 w-xs-100"},m.a.createElement(j.a,{color:t.labelColor,pill:!0},t.label))),m.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center mr-4"},m.a.createElement(h.a,{className:"itemCheck mb-0",type:"checkbox",id:"check_".concat(t.id),checked:n,onChange:function(e){return a(e,t.id)},label:""}))),m.a.createElement("div",{className:"card-body pt-1"},m.a.createElement("p",{className:"mb-0"},t.detail))))})),T=a(417),P=a(412),A=a(413),L=a(539),M=a(524),F=a(414),G=a(288),z=a(421),K=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).addNetItem=function(){var e={title:a.state.title,detail:a.state.detail,label:a.state.label.value,labelColor:a.state.label.color,category:a.state.category.value,status:a.state.status};a.props.addTodoItem(e),a.props.toggleModal(),a.setState({title:"",detail:"",label:{},category:{},status:"PENDING"})},a.state={title:"",detail:"",label:{},labelColor:"",category:{},status:"PENDING"},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todoApp,a=t.labels,n=t.categories,l=this.props,c=l.modalOpen,o=l.toggleModal;return m.a.createElement(T.a,{isOpen:c,toggle:o,wrapClassName:"modal-right",backdrop:"static"},m.a.createElement(P.a,{toggle:o},m.a.createElement(O.a,{id:"todo.add-new-title"})),m.a.createElement(A.a,null,m.a.createElement(L.a,{className:"mt-4"},m.a.createElement(O.a,{id:"todo.title"})),m.a.createElement(M.a,{type:"text",defaultValue:this.state.title,onChange:function(t){e.setState({title:t.target.value})}}),m.a.createElement(L.a,{className:"mt-4"},m.a.createElement(O.a,{id:"todo.detail"})),m.a.createElement(M.a,{type:"textarea",defaultValue:this.state.detail,onChange:function(t){e.setState({detail:t.target.value})}}),m.a.createElement(L.a,{className:"mt-4"},m.a.createElement(O.a,{id:"todo.category"})),m.a.createElement(G.b,{components:{Input:z.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:n.map((function(e,t){return{label:e,value:e,key:t}})),value:this.state.category,onChange:function(t){e.setState({category:t})}}),m.a.createElement(L.a,{className:"mt-4"},m.a.createElement(O.a,{id:"todo.label"})),m.a.createElement(G.b,{components:{Input:z.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:a.map((function(e,t){return{label:e.label,value:e.label,key:t,color:e.color}})),value:this.state.label,onChange:function(t){e.setState({label:t})}}),m.a.createElement(L.a,{className:"mt-4"},m.a.createElement(O.a,{id:"todo.status"})),m.a.createElement(h.a,{type:"radio",id:"exCustomRadio",name:"customRadio",label:"COMPLETED",checked:"COMPLETED"===this.state.status,onChange:function(t){e.setState({status:"on"===t.target.value?"COMPLETED":"PENDING"})}}),m.a.createElement(h.a,{type:"radio",id:"exCustomRadio2",name:"customRadio2",label:"PENDING",defaultChecked:"PENDING"===this.state.status,onChange:function(t){e.setState({status:"on"!==t.target.value?"COMPLETED":"PENDING"})}})),m.a.createElement(F.a,null,m.a.createElement(u.a,{color:"secondary",outline:!0,onClick:o},m.a.createElement(O.a,{id:"todo.cancel"})),m.a.createElement(u.a,{color:"primary",onClick:function(){return e.addNetItem()}},m.a.createElement(O.a,{id:"todo.submit"}))," "))}}]),t}(i.Component),W=Object(k.b)((function(e){return{todoApp:e.todoApp}}),{addTodoItem:x.fb})(K),R=a(545),V=a(476),_=a.n(V),B=a(190),J=a.n(B),U=a(626),X=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this))).addFilter=function(e,t){a.props.getTodoListWithFilter(e,t)},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todoApp,a=t.todoItems,n=t.filter,l=t.allTodoItems,c=t.loading,o=t.labels,r=t.categories;return m.a.createElement(U.a,null,m.a.createElement(_.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},m.a.createElement("div",{className:"p-4"},m.a.createElement("p",{className:"text-muted text-small"},m.a.createElement(O.a,{id:"todo.status"})),m.a.createElement("ul",{className:"list-unstyled mb-5"},m.a.createElement(R.a,{className:J()({active:!n})},m.a.createElement(D.c,{to:"#",onClick:function(t){return e.addFilter("","")}},m.a.createElement("i",{className:"simple-icon-reload"}),m.a.createElement(O.a,{id:"todo.all-tasks"}),m.a.createElement("span",{className:"float-right"},c&&l.length))),m.a.createElement(R.a,{className:J()({active:n&&"status"===n.column&&"PENDING"===n.value})},m.a.createElement(D.c,{to:"#",onClick:function(t){return e.addFilter("status","PENDING")}},m.a.createElement("i",{className:"simple-icon-refresh"}),m.a.createElement(O.a,{id:"todo.pending-tasks"}),m.a.createElement("span",{className:"float-right"},c&&a.filter((function(e){return"PENDING"===e.status})).length))),m.a.createElement(R.a,{className:J()({active:n&&"status"===n.column&&"COMPLETED"===n.value})},m.a.createElement(D.c,{to:"#",onClick:function(t){return e.addFilter("status","COMPLETED")}},m.a.createElement("i",{className:"simple-icon-check"}),m.a.createElement(O.a,{id:"todo.completed-tasks"}),m.a.createElement("span",{className:"float-right"},c&&a.filter((function(e){return"COMPLETED"===e.status})).length)))),m.a.createElement("p",{className:"text-muted text-small"},m.a.createElement(O.a,{id:"todo.categories"})),m.a.createElement("ul",{className:"list-unstyled mb-5"},r.map((function(t,a){return m.a.createElement(R.a,{key:a},m.a.createElement("div",{onClick:function(a){return e.addFilter("category",t)}},m.a.createElement("div",{className:"custom-control custom-radio"},m.a.createElement("input",{type:"radio",className:"custom-control-input",defaultChecked:n&&"category"===n.column&&n.value===t}),m.a.createElement("label",{className:"custom-control-label"},t))))}))),m.a.createElement("p",{className:"text-muted text-small"},m.a.createElement(O.a,{id:"todo.labels"})),m.a.createElement("div",null,o.map((function(t,a){return m.a.createElement("p",{className:"d-sm-inline-block mb-1",key:a},m.a.createElement(D.c,{to:"#",onClick:function(a){return e.addFilter("label",t.label)}},m.a.createElement(j.a,{className:"mb-1",color:"".concat(n&&"label"===n.column&&n.value===t.label?t.color:"outline-"+t.color),pill:!0},t.label)))}))))))}}]),t}(i.Component),q=Object(k.b)((function(e){return{todoApp:e.todoApp}}),{getTodoListWithFilter:x.xb})(X),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).toggleDisplayOptions=function(){a.setState({displayOptionsIsOpen:!a.state.displayOptionsIsOpen})},a.toggleModal=function(){a.setState({modalOpen:!a.state.modalOpen})},a.toggleSplit=function(){a.setState((function(e){return{dropdownSplitOpen:!e.dropdownSplitOpen}}))},a.changeOrderBy=function(e){a.props.getTodoListWithOrder(e)},a.handleKeyPress=function(e){"Enter"===e.key&&a.props.getTodoListSearch(e.target.value)},a.handleCheckChange=function(e,t){null==a.state.lastChecked&&a.setState({lastChecked:t});var l=Object.assign([],a.props.todoApp.selectedItems);if(l.includes(t)?l=l.filter((function(e){return e!==t})):l.push(t),a.props.selectedTodoItemsChange(l),e.shiftKey){var c,o=a.props.todoApp.todoItems,r=a.getIndex(t,o,"id"),s=a.getIndex(a.state.lastChecked,o,"id");o=o.slice(Math.min(r,s),Math.max(r,s)+1),(c=l).push.apply(c,Object(n.a)(o.map((function(e){return e.id})))),l=Array.from(new Set(l)),a.props.selectedTodoItemsChange(l)}},a.handleChangeSelectAll=function(){a.props.todoApp.loading&&(a.props.todoApp.selectedItems.length>=a.props.todoApp.todoItems.length?a.props.selectedTodoItemsChange([]):a.props.selectedTodoItemsChange(a.props.todoApp.todoItems.map((function(e){return e.id}))))},a.state={dropdownSplitOpen:!1,modalOpen:!1,lastChecked:null,displayOptionsIsOpen:!1},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getTodoList()}},{key:"getIndex",value:function(e,t,a){for(var n=0;n<t.length;n++)if(t[n][a]===e)return n;return-1}},{key:"render",value:function(){var e=this,t=this.props.todoApp,a=t.todoItems,n=t.searchKeyword,l=t.loading,c=t.orderColumn,o=t.orderColumns,r=t.selectedItems,s=this.props.intl.messages,v=this.state.modalOpen;return m.a.createElement(i.Fragment,null,m.a.createElement(d.a,{className:"app-row survey-app"},m.a.createElement(y.a,{xxs:"12"},m.a.createElement("div",{className:"mb-2"},m.a.createElement("h1",null,m.a.createElement(O.a,{id:"menu.todo"})),l&&m.a.createElement("div",{className:"text-zero top-right-button-container"},m.a.createElement(u.a,{color:"primary",size:"lg",className:"top-right-button",onClick:this.toggleModal},m.a.createElement(O.a,{id:"todo.add-new"}))," ",m.a.createElement(p.a,{isOpen:this.state.dropdownSplitOpen,toggle:this.toggleSplit},m.a.createElement("div",{className:"btn btn-primary btn-lg pl-4 pr-0 check-button check-all"},m.a.createElement(h.a,{className:"custom-checkbox mb-0 d-inline-block",type:"checkbox",id:"checkAll",checked:r.length>=a.length,onClick:function(){return e.handleChangeSelectAll()},onChange:function(){return e.handleChangeSelectAll()},label:m.a.createElement("span",{className:"custom-control-label ".concat(r.length>0&&r.length<a.length?"indeterminate":"")})})),m.a.createElement(E.a,{caret:!0,color:"primary",className:"dropdown-toggle-split btn-lg"}),m.a.createElement(g.a,{right:!0},m.a.createElement(b.a,null,m.a.createElement(O.a,{id:"todo.action"})),m.a.createElement(b.a,null,m.a.createElement(O.a,{id:"todo.another-action"}))))),m.a.createElement(C.a,{match:this.props.match})),m.a.createElement("div",{className:"mb-2"},m.a.createElement(u.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:this.toggleDisplayOptions},m.a.createElement(O.a,{id:"todo.display-options"})," ",m.a.createElement("i",{className:"simple-icon-arrow-down align-middle"})),m.a.createElement(f.a,{id:"displayOptions",className:"d-md-block",isOpen:this.state.displayOptionsIsOpen},m.a.createElement("div",{className:"d-block mb-2 d-md-inline-block"},m.a.createElement(N.a,{className:"mr-1 float-md-left btn-group mb-1"},m.a.createElement(E.a,{caret:!0,color:"outline-dark",size:"xs"},m.a.createElement(O.a,{id:"todo.orderby"}),c?c.label:""),m.a.createElement(g.a,null,o.map((function(t,a){return m.a.createElement(b.a,{key:a,onClick:function(){return e.changeOrderBy(t.column)}},t.label)})))),m.a.createElement("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top"},m.a.createElement("input",{type:"text",name:"keyword",id:"search",placeholder:s["menu.search"],defaultValue:n,onKeyPress:function(t){return e.handleKeyPress(t)}}))))),m.a.createElement(y.b,{className:"mb-5"}),m.a.createElement(d.a,null,l?a.map((function(t,a){return m.a.createElement(S,{key:"todo_item_".concat(a),item:t,handleCheckChange:e.handleCheckChange,isSelected:!!l&&r.includes(t.id)})})):m.a.createElement("div",{className:"loading"})))),l&&m.a.createElement(q,null),m.a.createElement(W,{toggleModal:this.toggleModal,modalOpen:v}))}}]),t}(i.Component);t.default=Object(v.d)(Object(k.b)((function(e){return{todoApp:e.todoApp}}),{getTodoList:x.vb,getTodoListWithOrder:x.yb,getTodoListSearch:x.wb,selectedTodoItemsChange:x.Gb})(H))},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));var n=a(6),l=a.n(n),c=a(234),o=function(e){return l.a.createElement(c.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},r=function(e){return l.a.createElement("div",{className:"separator ".concat(e.className)})}},204:function(e,t,a){"use strict";var n=a(6),l=a.n(n),c=a(236),o=a(237),r=a(201),s=a(200),i=function(e){return l.a.createElement(s.a,{id:"menu.".concat(e)})},m=function(e,t,a){return 0===a?"":e.split(t)[0]+t},d=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),l.a.createElement(n.Fragment,null,l.a.createElement(c.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(e,n){return l.a.createElement(o.a,{key:n,active:a.length===n+1},a.length!==n+1?l.a.createElement(r.c,{to:"/"+m(t,e,n)},i(e)):i(e))}))))};t.a=function(e){var t=e.heading,a=e.match;return l.a.createElement(n.Fragment,null,t&&l.a.createElement("h1",null,l.a.createElement(s.a,{id:t})),l.a.createElement(d,{match:a}))}},421:function(e,t,a){"use strict";var n=a(6),l=a.n(n),c=a(288);t.a=function(e){var t=Object.assign({},e);return delete t.autoCorrect,delete t.autoCapitalize,l.a.createElement(c.a.Input,t)}},626:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(194),l=a(195),c=a(197),o=a(196),r=a(219),s=a(198),i=a(6),m=a.n(i),d=a(39),u=a.n(d),p=a(422),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).handleDocumentClick=a.handleDocumentClick.bind(Object(r.a)(a)),a.toggle=a.toggle.bind(Object(r.a)(a)),a.state={isOpen:!1},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"handleDocumentClick",value:function(e){var t=u.a.findDOMNode(this);t.contains(e.target)||t===e.target||this.toggle(e)}},{key:"toggle",value:function(e){e.preventDefault();var t=this.state.isOpen;t?this.removeEvents():this.addEvents(),this.setState({isOpen:!t})}},{key:"componentWillUnmount",value:function(){this.removeEvents()}},{key:"addEvents",value:function(){var e=this;["click","touchstart"].forEach((function(t){return document.addEventListener(t,e.handleDocumentClick,!0)}))}},{key:"removeEvents",value:function(){var e=this;["click","touchstart"].forEach((function(t){return document.removeEventListener(t,e.handleDocumentClick,!0)}))}},{key:"render",value:function(){return m.a.createElement("div",{className:"app-menu ".concat(this.state.isOpen?"shown":"")},this.props.children,m.a.createElement(p.a,{className:"app-menu-button d-inline-block d-xl-none",onClick:this.toggle},m.a.createElement("i",{className:"simple-icon-options"})))}}]),t}(m.a.Component)}}]);
//# sourceMappingURL=application-todo.4887e1d8.chunk.js.map