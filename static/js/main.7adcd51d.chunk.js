(this["webpackJsonppractice-tasks"]=this["webpackJsonppractice-tasks"]||[]).push([[0],[,function(e,t,a){e.exports={lists:"Lists_lists__1BgLI",list:"Lists_list__3zEyE",title:"Lists_title__2yQ7D",row:"Lists_row__AM4Qc",buttons:"Lists_buttons__1Y3Yf",pointer:"Lists_pointer__70egW"}},function(e,t,a){e.exports={activeBox:"InputName_activeBox__3zez8",title:"InputName_title__z-0Np",listOfNames:"InputName_listOfNames__1TEBG",input:"InputName_input__2QgiS",error:"InputName_error__3oiGP"}},,,,,,,,,function(e,t,a){e.exports={app_page:"App_app_page__IfUYN"}},,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),l=a.n(r),c=(a(19),a(11)),s=a.n(c),o=(a(20),function(e){return i.a.createElement("div",null,i.a.createElement("section",{className:"header"},i.a.createElement("div",{className:"timeOne"},e.hours,":",e.minutes),i.a.createElement("h1",{className:"name"},"Hi! I'm ",e.state.name," ",e.state.surname)),i.a.createElement("section",{className:"bubble"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:e.state.img})),i.a.createElement("div",{className:"box1 sb5"},i.a.createElement("div",{className:"name"},e.state.name),i.a.createElement("div",{className:"message"},e.state.message),i.a.createElement("div",{className:"time"},e.state.mesHour,":",e.state.mesMin))))});function m(){var e=new Date,t=e.getHours(),a=e.getMinutes();return i.a.createElement(o,{state:{img:"https://cdn.pixabay.com/photo/2016/06/15/16/00/woman-1459220_1280.png",name:"Ekaterina",surname:" Uchaykina",message:"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0435\u043e\u0440\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u043e\u0434\u043d\u0430\u0436\u0434\u044b \u043a\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u0434\u043e\u043f\u043e\u0434\u043b\u0438\u043d\u043d\u043e \u0432\u044b\u044f\u0441\u043d\u0438\u0442, \u0447\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0438 \u0434\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u043d\u0430 \u0412\u0441\u0435\u043b\u0435\u043d\u043d\u0430\u044f, \u043e\u043d\u0430 \u0442\u043e\u0442\u0447\u0430\u0441 \u0436\u0435 \u0438\u0441\u0447\u0435\u0437\u043d\u0435\u0442, \u0438 \u0432\u043c\u0435\u0441\u0442\u043e \u043d\u0435\u0435 \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043d\u0435\u0447\u0442\u043e \u0435\u0449\u0435 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u0438\u0447\u0443\u0434\u043b\u0438\u0432\u043e\u0435 \u0438 \u043d\u0435\u043e\u0431\u044a\u044f\u0441\u043d\u0438\u043c\u043e\u0435. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438 \u0434\u0440\u0443\u0433\u0430\u044f \u0442\u0435\u043e\u0440\u0438\u044f, \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u044d\u0442\u043e \u0443\u0436\u0435 \u0441\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c.",mesHour:15,mesMin:16},hours:t,minutes:a})}var u=a(3),d=function(e){var t=Object.assign({},e);return i.a.createElement("button",t,t.buttonName)},E=a(6),p=function(e){e.type,e.title,e.checked,e.callBack,Object(E.a)(e,["type","title","checked","callBack"]);return i.a.createElement("label",null,i.a.createElement("input",Object.assign({type:"checkbox",onChange:e.callBack},e)),i.a.createElement("span",null,e.title))},f=a(1),v=a.n(f);var N=function(e){return i.a.createElement("div",{className:v.a.lists},i.a.createElement("div",{className:v.a.title},e.title),i.a.createElement("ul",{className:v.a.row},e.lists.map((function(t){return i.a.createElement("li",{key:t.id},i.a.createElement("div",{className:v.a.list},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(p,{callBack:function(){return e.changeStatus(t.id)},status:t.isDone,title:t.title}))),i.a.createElement(d,{onClick:function(){e.removeList(t.id)},buttonName:"\u2718"})))}))),i.a.createElement("div",null,i.a.createElement("div",{className:v.a.pointer},"\ud83d\udc47"),i.a.createElement("div",{className:v.a.buttons},i.a.createElement(d,{className:v.a.button,onClick:function(){e.setPriorityFilter("all")},buttonName:"All"}),i.a.createElement(d,{className:v.a.button,onClick:function(){e.setPriorityFilter("middle")},buttonName:"Middle"}),i.a.createElement(d,{className:v.a.button,onClick:function(){e.setPriorityFilter("high")},buttonName:"High"}),i.a.createElement(d,{className:v.a.button,onClick:function(){e.setPriorityFilter("low")},buttonName:"Low"}))))};function g(){var e=Object(n.useState)([{id:1,title:"ReactJS",priority:"middle",isDone:!1},{id:2,title:"TypeScript",priority:"middle",isDone:!1},{id:3,title:"NativeJS",priority:"high",isDone:!1},{id:4,title:"Foreign Language",priority:"low",isDone:!1},{id:5,title:"Tatoo",priority:"high",isDone:!1}]),t=Object(u.a)(e,2),a=t[0],r=t[1];var l=Object(n.useState)("all"),c=Object(u.a)(l,2),s=c[0],o=c[1],m=a;return"high"===s&&(m=a.filter((function(e){return"high"===e.priority}))),"middle"===s&&(m=a.filter((function(e){return"middle"===e.priority}))),"low"===s&&(m=a.filter((function(e){return"low"===e.priority}))),i.a.createElement(i.a.Fragment,null,i.a.createElement(N,{title:"My goals",lists:m,removeList:function(e){var t=a.filter((function(t){return t.id!=e}));console.log(t),r(t)},setPriorityFilter:function(e){o(e)},changeStatus:function(e){var t=a,n=t.find((function(t){return t.id===e}));n&&(n.isDone=!n.isDone,console.log(t),r(t))}}))}var b=a(13),h=a(2),_=a.n(h),y=function(e){var t=e.error,a=e.addItem,n=e.setError,r=e.onChangeItem,l=Object(E.a)(e,["error","addItem","setError","onChangeItem"]);return i.a.createElement("input",Object.assign({className:t?"".concat(_.a.input," ").concat(_.a.error):"input",type:"text",onBlur:function(){n&&n(null)},onChange:function(e){n&&e.currentTarget.value.trim()&&n(null),r&&r(e.currentTarget.value)},onKeyPress:function(e){13===e.charCode&&a&&a()}},l))},k=a(12);function O(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),c=Object(u.a)(l,2),s=c[0],o=c[1],m=Object(n.useState)(null),E=Object(u.a)(m,2),p=E[0],f=E[1];var v=function(){""!==s.trim()?(!function(e){var t={id:Object(k.v1)(),userName:e.trim()};r([t].concat(Object(b.a)(a))),alert("Hi".concat(t.userName,"!")),o("")}(s),o("")):f("Enter your name \ud83e\udd7a")},N=a.map((function(e){return e.userName})).join("/ ");return i.a.createElement("div",{className:_.a.activeBox},i.a.createElement("h1",{className:_.a.title},"What's your name?"),i.a.createElement("div",{className:_.a.listOfNames},i.a.createElement(y,{value:s,error:p,setError:f,addItem:v,onChangeItem:o}),i.a.createElement(d,{onClick:v,buttonName:"Send"}),i.a.createElement("div",null,i.a.createElement("span",null,"Total users - ",a.length)),i.a.createElement("span",{className:_.a.listOfNames}," ",N," "),i.a.createElement("div",null)))}function j(){return i.a.createElement("div",null,i.a.createElement(O,null))}function w(){return i.a.createElement("div",{className:s.a.app_page},i.a.createElement(m,null),i.a.createElement(g,null),i.a.createElement(j,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.7adcd51d.chunk.js.map