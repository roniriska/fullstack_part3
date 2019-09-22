(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(13),u=n.n(a),c=(n(20),n(2)),i=n(14),l=n(3),s=n.n(l),f=function(){return s.a.get("/api/persons").then(function(e){return e.data})},m=function(e){return s.a.post("/api/persons",e).then(function(e){return e.data})},p=function(e){return s.a.delete("/api/persons/"+e.id)},d=function(e){return s.a.put("/api/persons/"+e.id,e).then(function(e){return e.data})};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var h=function(e){var t=e.notif;if(console.log(t),null===t)return null;var n={color:"green",fontSize:20,borderRadius:5,padding:10,marginBottom:10,borderStyle:"solid"};return"error"===t.type&&(n.color="red"),o.a.createElement("div",{style:n,className:"notification"},t.msg)},w=function(e){var t=e.persons,n=e.filter,r=e.setPersons;return t.filter(function(e){return""===n||e.name&&e.name.toLowerCase().includes(n.toLowerCase())}).map(function(e){return o.a.createElement("p",{key:e.id},e.name," ",e.number,o.a.createElement("button",{onClick:(n=e,function(){window.confirm("delete person ".concat(n.name,"?"))&&p(n).then(function(){return r(t.filter(function(e){return e.id!==n.id}))}).catch(function(e){return console.log(e)})})},"delete"));var n})},g=function(e){var t=e.nameFilter,n=e.setNameFilter;return o.a.createElement("div",null,"Filter ",o.a.createElement("input",{value:t,onChange:function(e){n(e.target.value)}}))},v=function(e){var t=e.persons,n=e.setPersons,r=e.newName,a=e.setNewName,u=e.newNumber,c=e.setNewNumber,l=e.setNotifMessage;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var o=t.find(function(e){return e.name===r});if(o){if(o.number===u)window.alert("".concat(r," is already in the phonebook"));else if(window.confirm("".concat(r," is already in the phonebook, update the old number with the new"))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},o,{number:u});d(s).then(function(e){n(t.map(function(e){return e.id!==s.id?e:s}))}).catch(function(){l({type:"error",msg:"".concat(o.name," has already been removed from the server")}),setTimeout(function(){return l(null)},2e3)})}}else m({name:r,number:u}).then(function(e){n(t.concat(e)),a(""),c(""),l({type:"notif",msg:"".concat(r," added to phonebook")}),setTimeout(function(){return l(null)},2e3)}).catch(function(e){console.log("cannot add new person",e),console.log(e.response.data),l({type:"error",msg:"".concat(e.response.data.error)}),setTimeout(function(){return l(null)},4e3),window.alert(e)})}},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:r,onChange:function(e){a(e.target.value)}})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:u,onChange:function(e){c(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},O=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],a=t[1],u=Object(r.useState)(""),i=Object(c.a)(u,2),l=i[0],s=i[1],m=Object(r.useState)(""),p=Object(c.a)(m,2),d=p[0],b=p[1],O=Object(r.useState)(""),E=Object(c.a)(O,2),y=E[0],j=E[1],N=Object(r.useState)(null),P=Object(c.a)(N,2),S=P[0],k=P[1];return Object(r.useEffect)(function(){console.log("effect"),f().then(function(e){console.log("promise fulfilled"),a(e)})},[]),o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(h,{notif:S}),o.a.createElement(g,{nameFilter:y,setNameFilter:j}),o.a.createElement("h3",null,"Add a new"),o.a.createElement(v,{persons:n,setPersons:a,newName:l,setNewName:s,newNumber:d,setNewNumber:b,setNotifMessage:k}),o.a.createElement("h3",null,"Numbers"),o.a.createElement(w,{persons:n,filter:y,setPersons:a}))};u.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8f680247.chunk.js.map