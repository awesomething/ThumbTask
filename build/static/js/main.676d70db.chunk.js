(this.webpackJsonpthumbtask=this.webpackJsonpthumbtask||[]).push([[0],{14:function(e,t){e.exports={API_KEY:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,API_ENDPOINT:"https://gentle-peak-01954.herokuapp.com"}},41:function(e,t,s){},42:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(0),n=s.n(a),r=s(11),o=s.n(r),i=(s(41),s(19)),l=s(20),j=s(25),d=s(24),b=s(12),h=s(3),m=s(65);s(42);var u=function(){var e=Object(h.f)();return Object(c.jsxs)("div",{className:"flex sm:justify-around justify-between mt-1 mb-2",children:[Object(c.jsxs)(b.b,{to:"/",children:[Object(c.jsx)("center",{children:Object(c.jsx)("h2",{className:" ml-3 text-2xl link",children:"ThumbTask"})}),Object(c.jsx)("img",{className:"header__icon",src:"https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_bb487be551c0717712203a6d6cd29e01/thumbtack.png",alt:""})]}),Object(c.jsxs)("div",{className:"header_info pr-2",children:[Object(c.jsx)("h5",{className:"mb-1",children:"We make writing goals look cool"}),Object(c.jsx)(m.a,{onClick:function(){return e.push("/searchPage")},variant:"outlined",children:"Organize Your Tasks"})]})]})};s(48);var x=function(e){var t=e.src,s=e.title;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:t,alt:""}),Object(c.jsx)("div",{className:"card__info",children:Object(c.jsx)("h2",{children:s})})]})},O=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"home-page-wrapper px-2",children:[Object(c.jsxs)("center",{children:[Object(c.jsx)("section",{className:"section section--one fade-in-bottom mt-8 sm:mt-6",children:Object(c.jsxs)("div",{className:"section--one__text-box u-center-text",children:[Object(c.jsxs)("h3",{className:"heading-primary u-margin-bottom-medium",children:[Object(c.jsxs)("span",{className:"heading-primary--main u-margin-bottom-small",children:["An entirely better way to save your tasks."," "]}),Object(c.jsx)("span",{className:"heading-primary--sub",children:"ThumbTask helps you save all tasks in one place, while you\u2019re meeting and achieving your goals. Transform your goals into a world of infinite possibility."})]}),Object(c.jsx)(b.b,{to:"/searchPage",className:"btn btn--blue",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"Explore ThumbTask"})]})}),Object(c.jsxs)("section",{className:"section section--two u-margin-bottom-xxxl mt-2",children:[Object(c.jsxs)("div",{className:"heading-text-box u-center-text u-margin-bottom-big",children:[Object(c.jsx)("h3",{className:"heading-text-box--tertiary",children:"Experience simplicity at best!"}),Object(c.jsx)("h4",{className:"heading-text-box--secondary",children:"Take control of your weekly goals. Understand what milestones you need to meet ahead of time!"})]}),Object(c.jsx)("div",{className:"section--two__cards u-margin-bottom-medium",children:Object(c.jsxs)("div",{className:"home_section mt-3 ",children:[Object(c.jsx)(x,{src:"images/medium.jpg",title:"Write down and save your tasks"}),Object(c.jsx)(x,{src:"images/tall.png",title:"Get organized and track progress"}),Object(c.jsx)(x,{src:"images/small.jpg",title:"Meet your goals and reward yourself"})]})})]}),Object(c.jsx)("section",{className:"section section--three u-margin-bottom-xxxl",children:Object(c.jsx)("hr",{})})]}),Object(c.jsx)("footer",{className:"footer u-margin-bottom-big",children:Object(c.jsx)("center",{children:Object(c.jsxs)("div",{className:"footer__brand-container",children:[Object(c.jsxs)("p",{className:"footer__author-text",children:["Created by"," ",Object(c.jsx)("a",{href:"http://www.henryebomah-awesomething.vercel.app/",target:"_blank",rel:"noreferrer",children:"Henry Ebomah"})]}),Object(c.jsxs)("div",{className:"footer__social-media u-margin-bottom-small ",children:[Object(c.jsx)("a",{href:"https://github.com/awesomething",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{className:"fab fa-github"})}),"|",Object(c.jsx)("a",{href:"https://www.linkedin.com/in/henryebomah/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{className:"fab fa-linkedin"})})]}),Object(c.jsx)("div",{className:"copyright-text",children:Object(c.jsxs)("p",{children:["Copyright \xa9 2021",Object(c.jsx)("br",{}),"All Rights Reserved"]})})]})})})]})}}]),s}(n.a.Component),f=s(18),p=(s(49),s(34)),g=s(14),N=s.n(g),v=function(e){var t=e.setInputText,s=e.todos,a=e.setTodos,n=e.inputText;e.setStatus;return Object(c.jsxs)("form",{onSubmit:function(e){var c,r;e.preventDefault(),c=n,fetch("".concat(N.a.API_ENDPOINT,"/todos"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({title:c,categories:r})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})),a([].concat(Object(p.a)(s),[{text:n,completed:!1,id:1e3*Math.random()}])),t("")},children:[Object(c.jsx)("input",{value:n,onChange:function(e){t(e.target.value)},required:!0,type:"text",className:"todo-input"}),Object(c.jsx)("button",{className:"todo-button",type:"submit",children:Object(c.jsx)("i",{className:"fas fa-plus-square"})})]})},y=s(29),_=function(e){var t=e.text,s=e.todo,a=e.todos,n=e.setTodos;return Object(c.jsxs)("div",{className:"todo",children:[Object(c.jsx)("li",{className:"todo-item ".concat(s&&s.completed?"completed":" "),children:t}),Object(c.jsx)("button",{onClick:function(){n(a.map((function(e){return e.id===s.id?Object(y.a)(Object(y.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn",children:Object(c.jsx)("i",{className:"fas fa-check"})}),Object(c.jsx)("button",{onClick:function(){fetch("".concat(N.a.API_ENDPOINT,"/todos"),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){console.log(e)})),n(a.filter((function(e){return e.id!==s.id})))},className:"trash-btn",children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})},k=function(e){var t=e.todos,s=e.setTodos,a=e.filteredTodos;return Object(c.jsx)("div",{className:"todo-container",children:Object(c.jsx)("ul",{className:"todo-list",children:a&&a.map((function(e){return Object(c.jsx)(_,{setTodos:s,todos:t,todo:e,text:e.text},e.id)}))})})};var T=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),s=t[0],n=t[1],r=Object(a.useState)([]),o=Object(f.a)(r,2),i=o[0],l=o[1],j=Object(a.useState)("all"),d=Object(f.a)(j,2),b=d[0],h=d[1],m=Object(a.useState)([]),u=Object(f.a)(m,2),x=u[0],O=u[1];Object(a.useEffect)((function(){N()}),[]),Object(a.useEffect)((function(){p(),g()}),[i,b]);var p=function(){switch(b){case"true":O(i.filter((function(e){return!0===e.categories})));break;case"false":O(i.filter((function(e){return!1===e.categories})));break;default:O(i)}},g=function(){localStorage.setItem("todos",JSON.stringify(i))},N=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));l(e)}};return Object(c.jsxs)("div",{className:"SearchPage",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Weekly Tasks"})}),Object(c.jsx)(v,{todos:i,setTodos:l,setInputText:n,inputText:s,setStatus:h}),Object(c.jsx)(k,{filteredTodos:x,setTodos:l,todos:i}),Object(c.jsx)("section",{className:"section section--three u-margin-bottom-xxxl"}),Object(c.jsx)("footer",{className:"footer u-margin-bottom-big",children:Object(c.jsx)("center",{children:Object(c.jsxs)("div",{className:"footer__brand-container",children:[Object(c.jsxs)("p",{className:"footer__author-text",children:["Created by ",Object(c.jsx)("a",{href:"http://www.henryebomah-awesomething.vercel.app/",target:"_blank",rel:"noreferrer",children:"Henry Ebomah"})]}),Object(c.jsxs)("div",{className:"footer__social-media u-margin-bottom-small ",children:[Object(c.jsx)("a",{href:"https://github.com/awesomething",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{className:"fab fa-github"})}),"|",Object(c.jsx)("a",{href:"https://www.linkedin.com/in/henryebomah/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{className:"fab fa-linkedin"})})]}),Object(c.jsx)("div",{className:"copyright-text",children:Object(c.jsxs)("p",{children:["Copyright \xa9 2021",Object(c.jsx)("br",{}),"All Rights Reserved"]})})]})})})]})},w=(s(50),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(u,{}),Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{path:"/searchPage",children:Object(c.jsx)(T,{})}),Object(c.jsx)(h.a,{path:"/",children:Object(c.jsx)(O,{})})]})]})})}}]),s}(a.Component));o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.676d70db.chunk.js.map