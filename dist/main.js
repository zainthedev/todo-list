!function(t){var e={};function o(n){if(e[n])return e[n].exports;var c=e[n]={i:n,l:!1,exports:{}};return t[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(n,c,function(e){return t[e]}.bind(null,c));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);(()=>{const t=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","headingContainer");const o=document.createElement("h1");o.textContent="Todo List",e.append(o),t.append(e);const n=document.createElement("div");n.setAttribute("id","projectAndTodoContainer"),t.append(n);const c=document.createElement("div");c.setAttribute("id","projects"),n.append(c);const r=document.createElement("div");r.setAttribute("id","projectsListContainer"),c.append(r)})();const n=[];0==localStorage.length&&n.push("Default");const c=(()=>{function t(){n.forEach(t=>{""!=t&&localStorage.setItem("projectList",n)})}function e(){if(0==localStorage.length)t();else{localStorage.projectList.split(",").forEach(t=>{n.includes(t)&&0!=n.length||n.push(t)})}}return{projectList:n,setProjectList:t,getProjectList:e,addProjectToList:o=>{e(),n.push(o),t()},removeProjectFromList:o=>{e(),n.length>1?(n.splice(n.indexOf(o.title),1),console.log(n),t()):1==n.length&&(n.pop(),localStorage.removeItem("projectList"))}}})(),r={setTodoList:function(t){const e=[];t.projectTodoList.forEach(o=>{localStorage.setItem(t.title+" "+o.title+" todo info",o.todoInfo),e.push(o.title)}),localStorage.setItem(t.title+" project todo list",e)},getTodoList:function(){s.forEach(t=>{null!=localStorage.getItem(t.title+" project todo list")&&localStorage.getItem(t.title+" project todo list").split(",").forEach(e=>{t.projectTodoListTitles.includes(e)||t.projectTodoListTitles.push(e)})})}},i=t=>{const e=[];return{title:t,changeTitle:function(t){return this.title=t},projectTodoList:e,projectTodoListTitles:[],addToProjectTodoList:function(t){e.push(t)},removeFromProjectList:function(t){e.splice(e.indexOf(t),1)}}};let s=[];function l(){c.getProjectList();const t=[];s.forEach(e=>{t.push(e.title)}),c.projectList.forEach(e=>{if(!t.includes(e)){const t=i(e);return s.push(t)}})}l();const d=(t,e,o,n,c="Incomplete")=>({title:t,dueDate:e,priority:o,note:n,doneStatus:c,todoInfo:[t,e,o,n,c],changeDueDate:function(t){return this.dueDate=t},changePriority:function(t){return this.priority=t},changeNote:function(t){return this.note=t},changeDoneStatus:function(t){return this.doneStatus=t}});function a(){s.forEach(t=>{t.projectTodoListTitles.length>0&&t.projectTodoListTitles.forEach(e=>{const o=localStorage.getItem(t.title+" "+e+" todo info");if(""!=o&&null!=o){const o=localStorage[t.title+" "+e+" todo info"].split(",");let n=d(o[0],o[1],o[2],o[3],o[4]);const c=[];t.projectTodoList.forEach(t=>{c.push(t.title)}),c.includes(e)||(console.log(t.projectTodoListTitles),t.addToProjectTodoList(n))}})})}const u=t=>{let e=document.createElement("div");e.setAttribute("id","todoContainer"),t.projectTodoList.length>0&&(console.log(t),t.projectTodoList.forEach(o=>{const n=document.createElement("div");"Incomplete"==o.doneStatus?n.setAttribute("class","todo"):n.setAttribute("class","todoCompleted");const c=document.createElement("div");c.setAttribute("class","todoInfo");const i=document.createElement("p");i.setAttribute("class","todoTitle"),i.append(o.title);const s=document.createElement("div");s.setAttribute("class","dueDateContainer");const l=document.createElement("p");l.setAttribute("class","todoDueDateHeading"),null!=o.dueDate&&""!=o.dueDate&&(l.textContent="Due Date: "+o.dueDate);const p=document.createElement("div");p.setAttribute("class","todoPriorityContainer");const m=document.createElement("p");m.setAttribute("class","priorityHeading"),m.textContent="Priority: "+o.priority;const v=document.createElement("p");v.setAttribute("class","todoNote"),null!=o.note&&""!=n.note&&(v.textContent="Note: \n"+o.note),s.append(l),p.append(m),c.append(i,s,p,v),n.append(c);const b=document.createElement("button");b.setAttribute("class","todoRemoveBtn"),b.textContent="Remove Todo",b.addEventListener("click",e=>{t.projectTodoList.splice(t.projectTodoList.indexOf(o),1),r.setTodoList(t),localStorage.removeItem(t.title+" "+o.title+" todo info",n.todoInfo),0==localStorage[t.title+" project todo list"].length&&localStorage.removeItem(t.title+" project todo list"),n.remove()}),n.append(b);const E=document.createElement("button");E.setAttribute("class","todoEditBtn"),E.textContent="Edit",E.addEventListener("click",c=>{const i=document.createElement("div");i.setAttribute("id","editTodoPopup"),i.setAttribute("class","editTodoPopup"),n.append(i);const s=document.createElement("input");s.setAttribute("id","todoTitleInput"),s.value=o.title,i.append(s);const l=document.createElement("input");l.setAttribute("class","tododueDate"),l.setAttribute("type","date"),l.value=o.dueDate,i.append(l);const p=document.createElement("label");p.setAttribute("for","todoPriority"),p.textContent="Priority:";const m=document.createElement("select");m.setAttribute("name","todoPriority"),m.setAttribute("id","todoPriority");const v=document.createElement("option");v.setAttribute("value","low"),v.textContent="Low";const b=document.createElement("option");b.setAttribute("value","med"),b.textContent="Medium";const E=document.createElement("option");E.setAttribute("value","high"),E.textContent="High",m.append(E,b,v),i.append(p,m);const f=document.createElement("label");f.setAttribute("class","todoNoteInputLabel"),f.setAttribute("for","todoNoteInput"),f.textContent="Note:";const j=document.createElement("input");j.setAttribute("class","todoNoteInput"),i.append(f,j);const T=document.createElement("button");T.textContent="Save",T.addEventListener("click",n=>{if(""==s.value)i.setAttribute("class","popupError");else{const n=document.querySelector("#todoTitleInput"),c=d(n.value,l.value,m.value,j.value);t.projectTodoList.splice(t.projectTodoList.indexOf(o),1,c),t.projectTodoListTitles.splice(t.projectTodoListTitles.indexOf(o),1,c.title),localStorage.removeItem(t.title+" "+o.title+" todo info"),content.contains(e)&&e.remove(),r.setTodoList(t),a(),u(t)}}),i.append(T)}),n.append(E);const f=document.createElement("button");f.setAttribute("class","todoCompleteBtn"),f.textContent="Complete",f.addEventListener("click",(function(c){switch(o.doneStatus){case"Incomplete":console.log(o);const e=d(o.title,o.dueDate,o.priority,o.note,"Complete");n.setAttribute("class","todoCompleted"),t.projectTodoList.splice(t.projectTodoList.indexOf(o),1,e),t.projectTodoListTitles.splice(t.projectTodoListTitles.indexOf(o),1,e.title);break;case"Complete":console.log(o);const c=d(o.title,o.dueDate,o.priority,o.note,"Incomplete");n.setAttribute("class","todo"),t.projectTodoList.splice(t.projectTodoList.indexOf(o),1,c),t.projectTodoListTitles.splice(t.projectTodoListTitles.indexOf(o),1,c.title)}content.contains(e)&&e.remove(),localStorage.removeItem(t.title+" "+o.title+" todo info"),r.setTodoList(t),a(),u(t)})),n.append(f),e.append(n)}));const o=document.createElement("button");o.setAttribute("class","todoCreateBtn"),o.textContent="New Todo",o.addEventListener("click",e=>{const o=document.querySelector("#todoContainer"),n=document.createElement("div");n.setAttribute("id","createTodoPopup"),o.append(n);const c=document.createElement("input");c.setAttribute("id","todoTitleInput"),n.append(c);const i=document.createElement("input");i.setAttribute("class","tododueDate"),i.setAttribute("type","date"),n.append(i);const s=document.createElement("label");s.setAttribute("for","todoPriority"),s.textContent="Priority:";const l=document.createElement("select");l.setAttribute("name","todoPriority"),l.setAttribute("id","todoPriority");const p=document.createElement("option");p.setAttribute("value","low"),p.textContent="Low";const m=document.createElement("option");m.setAttribute("value","med"),m.textContent="Medium";const v=document.createElement("option");v.setAttribute("value","high"),v.textContent="High",l.append(v,m,p),n.append(s,l);const b=document.createElement("label");b.setAttribute("class","todoNoteInputLabel"),b.setAttribute("for","todoNoteInput"),b.textContent="Note:";const E=document.createElement("input");E.setAttribute("class","todoNoteInput"),n.append(b,E);const f=document.createElement("button");f.textContent="Save",f.addEventListener("click",e=>{if(""==c.value)editTodoPopup.setAttribute("class","popupError");else{const e=document.querySelector("#todoTitleInput"),n=d(e.value,i.value,l.value,E.value);t.projectTodoList.push(n),content.contains(o)&&o.remove(),r.setTodoList(t),a(),t.projectTodoListTitles.push(e.value),u(t)}}),n.append(f)}),e.append(o),projectAndTodoContainer.append(e)},p=t=>{const e=document.createElement("div");e.setAttribute("class","project");const o=document.createElement("p");o.setAttribute("class","projectTitle"),o.append(t.title),e.append(o),projectsListContainer.append(e);const n=document.createElement("button");n.setAttribute("class","projectRemoveBtn"),n.textContent="X",n.addEventListener("click",o=>{console.log(o);const n=document.createElement("div");n.setAttribute("id","pageOverlay"),n.addEventListener("click",t=>{n.remove()});const r=document.createElement("div");r.setAttribute("id","removeProjectCheckContainer");const i=document.createElement("p");i.textContent="Are you sure you want to remove this project? \n All todo items will be lost.";const l=document.createElement("button");l.setAttribute("class","removeCheckBtn"),l.textContent="Remove",l.addEventListener("click",o=>{t.projectTodoList.forEach(e=>{localStorage.removeItem(t.title+" "+e.title+" todo info")}),localStorage.removeItem(t.title+" project todo list"),function(t){s.length>1?s.splice(s.indexOf(t),1):1==s.length&&(s=[],console.log(s))}(t),c.removeProjectFromList(t),n.remove(),e.remove(),todoContainer.remove()});const d=document.createElement("button");d.setAttribute("class","removeCheckBtn"),d.textContent="Cancel",d.addEventListener("click",t=>{n.remove()}),r.append(i,l,d),n.append(r),content.insertAdjacentElement("afterbegin",n)}),e.append(n),e.addEventListener("click",e=>{const o=document.querySelector("#todoContainer");content.contains(o)&&o.remove(),r.getTodoList(),a(),u(t)})},m=()=>{s.forEach(t=>{p(t)})};(()=>{const t=document.createElement("div");t.setAttribute("id","projectCreateBtnContainer");const e=document.createElement("button");e.setAttribute("id","projectCreateBtn"),e.textContent="Create Project",e.addEventListener("click",t=>{e.remove();const o=document.createElement("div");o.setAttribute("id","createProjectPopup"),projects.insertAdjacentElement("afterbegin",o);const r=document.createElement("p");r.textContent="Title:",o.append(r);const i=document.createElement("input");i.setAttribute("id","projectTitleInput"),i.setAttribute("placeholder","New Project"),o.append(i);const s=document.createElement("p");s.setAttribute("class","projectExistsError"),s.textContent="Project already exists!";const d=document.createElement("p");d.setAttribute("class","noNameError"),d.textContent="Enter a name!";const a=document.createElement("button");a.textContent="Save",a.addEventListener("click",t=>{if(n.includes(i.value)){if(!o.contains(s))return void o.append(s)}else{if(""==i.value)return void o.append(d);""!=i.value&&(c.addProjectToList(i.value),l(),o.remove(),i.remove(),a.remove(),projects.append(e),projectsListContainer.innerHTML="",m())}}),o.append(a)}),t.append(e),projects.append(t)})(),c.getProjectList(),c.setProjectList(),m()}]);