(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(13),c=n.n(a),u=(n(20),n(2)),i=n(14),l=n(3),s=n.n(l),f="http://localhost:3001/persons",m=function(){return s.a.get(f).then(function(e){return e.data})},d=function(e){return s.a.post(f,e).then(function(e){return e.data})},p=function(e){return s.a.delete(f+"/"+e.id)},b=function(e){return s.a.put(f+"/"+e.id).then(function(e){return e.data})};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var w=function(e){var t=e.notif;if(console.log(t),null===t)return null;var n={color:"green",fontSize:20,borderRadius:5,padding:10,marginBottom:10,borderStyle:"solid"};return"error"===t.type&&(n.color="red"),o.a.createElement("div",{style:n,className:"notification"},t.msg)},v=function(e){var t=e.persons,n=e.filter,r=e.setPersons;return t.filter(function(e){return""===n||e.name&&e.name.toLowerCase().includes(n.toLowerCase())}).map(function(e){return o.a.createElement("p",{key:e.id},e.name," ",e.number,o.a.createElement("button",{onClick:(n=e,function(){window.confirm("delete person ".concat(n.name,"?"))&&p(n).then(function(){return r(t.filter(function(e){return e.id!==n.id}))}).catch(function(e){return console.log(e)})})},"delete"));var n})},g=function(e){var t=e.nameFilter,n=e.setNameFilter;return o.a.createElement("div",null,"Filter ",o.a.createElement("input",{value:t,onChange:function(e){n(e.target.value)}}))},O=function(e){var t=e.persons,n=e.setPersons,r=e.newName,a=e.setNewName,c=e.newNumber,u=e.setNewNumber,l=e.setNotifMessage;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var o=t.find(function(e){return e.name===r});if(o){if(o.number===c)window.alert("".concat(r," is already in the phonebook"));else if(window.confirm("".concat(r," is already in the phonebook, update the old number with the new"))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},o,{number:c});b(s).then(function(e){n(t.map(function(e){return e.id!==s.id?e:s}))}).catch(function(){l({type:"error",msg:"".concat(o.name," has already been removed from the server")}),setTimeout(function(){return l(null)},2e3)})}}else d({name:r,number:c}).then(function(e){n(t.concat(e)),a(""),u(""),l({type:"notif",msg:"".concat(r," added to phonebook")}),setTimeout(function(){return l(null)},2e3)}).catch(function(e){console.log("cannot add new person",e),window.alert(e)})}},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:r,onChange:function(e){a(e.target.value)}})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:c,onChange:function(e){u(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},E=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),l=i[0],s=i[1],f=Object(r.useState)(""),d=Object(u.a)(f,2),p=d[0],b=d[1],h=Object(r.useState)(""),E=Object(u.a)(h,2),y=E[0],j=E[1],N=Object(r.useState)(null),P=Object(u.a)(N,2),S=P[0],k=P[1];return Object(r.useEffect)(function(){console.log("effect"),m().then(function(e){console.log("promise fulfilled"),a(e)})},[]),o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(w,{notif:S}),o.a.createElement(g,{nameFilter:y,setNameFilter:j}),o.a.createElement("h3",null,"Add a new"),o.a.createElement(O,{persons:n,setPersons:a,newName:l,setNewName:s,newNumber:p,setNewNumber:b,setNotifMessage:k}),o.a.createElement("h3",null,"Numbers"),o.a.createElement(v,{persons:n,filter:y,setPersons:a}))};c.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e3494f41.chunk.js.map