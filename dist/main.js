(()=>{"use strict";var e={138:(e,n,t)=>{e.exports=t.p+"images/new-icon-sprite.svg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{t(138);var e,n,o,a,r={closeModalButton:document.getElementById("modal-close"),backdrop:document.querySelector(".js-backdrop"),container:document.querySelector(".js-container"),list:document.getElementById("filterElem"),modal:document.getElementById("modal"),input:document.getElementById("search-input"),MAX_PILLS:70,idNumbers:[],COLORS:["white","green","orange","red"]},i=r.closeModalButton,c=r.backdrop,d=r.container,s=r.list,l=r.modal,u=r.input,m=r.idNumbers,p=r.COLORS;!function(e){for(var n=1;n<=e;++n)m.push.apply(m,[n])}(r.MAX_PILLS),e=m,m.length,n=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],o=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],(a=new Date).setDate(a.getDate()),setInterval((function(){var e=(new Date).getHours();document.getElementById("hours").innerHTML=(e<10?"0":"")+e;var t=(new Date).getMinutes();document.getElementById("minutes").innerHTML=(t<10?"0":"")+t;var r=(new Date).getSeconds();document.getElementById("seconds").innerHTML=(r<10?"0":"")+r,document.getElementById("month").innerHTML=n[a.getMonth()],document.getElementById("date").innerHTML=a.getDate(),document.getElementById("day").innerHTML=o[a.getDay()],document.getElementById("year").innerHTML=a.getFullYear()}),1e3),u.addEventListener("keyup",(function(){var e=u.value.toLowerCase();document.querySelectorAll("#filterElem li").forEach((function(n){n.innerHTML.toLowerCase().indexOf(e)>-1?n.style.display="":n.style.display="none"}))})),e.forEach((function(e,n){return s.insertAdjacentHTML("beforeend",'<li class="elements-list__item">\n                <div class="circle">\n                    <div class="noise animated"></div>\n                </div>\n\n                <button \n                 id="btn-'.concat(n+1,'"\n                 class="elements-button" \n                 data-action="open-modal" \n                 data-identifier="').concat(n+1,'"\n                 data-color="white"\n                 type="button">\n                    ').concat(e,"\n                </button>\n            </li>"))}));var g=function(e){var n=e.target;if("BUTTON"===n.nodeName){var t=n.dataset.color;console.log(t);var o=n.textContent;console.log(o);var a=document.querySelector("#".concat(n.id));console.log(a);var r=a.dataset.color;console.log(r);var i=a.dataset.color="green";a.style.backgroundColor=i,function(e,n){p.forEach((function(t){var o;"white"===e&&g?(f(),l.insertAdjacentHTML("beforeend",'\n                    <div>\n                        <h2 class="modal-title">Таблетка №'.concat(n,"</h2>\n                        <span>").concat(e,'</span>\n                        <p> - Cвободна</p>\n                    </div>\n                    <div>\n                        <h3>Выдача:</h3>\n                        <p id="datejs">').concat((o={weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},(new Date).toLocaleString("Uk-uk",o)),'</p>\n                        <div>\n                            <form class="modal-form">\n                                <select>\n                                    <optgroup label="Необычные цветы">\n                                        <option>Ангулоя одноцветковая</option>\n                                        <option>Обезьяний дракула</option>\n                                        <option>Пассифлора инкарнатная</option>\n                                    </optgroup>\n                                </select>\n                            \n                                <label>\n                                    <input type="selection">\n                                </label>\n\n                                <button class="modal-form_submit" type="submit" method="GET">\n                                    <svg class="" width="40" height="40">\n                                        <use href="./images/new-icon-sprite.svg#i-wheelchair-alt"></use>\n                                    </svg>\n                                    Выдать\n                                </button>\n                            </form>\n                        </div>\n                    </div>  \n                '))):"green"===e&&g?(f(),l.insertAdjacentHTML("beforeend",'   \n                    <div>\n                        <h2 class="modal-title">Таблетка №'.concat(n,"</h2>\n                        <p><span>").concat(e,"</span> - Занята</p>\n                    </div>\n                    <div></div>\n                "))):"orange"===e&&g?(f(),l.insertAdjacentHTML("beforeend",'   \n                    <div>\n                        <h2 class="modal-title">Таблетка №'.concat(n,"</h2>\n                        <p><span>").concat(e,"</span> - Осталось 10 мин.</p>\n                    </div>\n                    <div></div>\n                "))):"red"===e&&g&&(f(),l.insertAdjacentHTML("beforeend",'\n                    <div>\n                        <h2 class="modal-title">Таблетка №'.concat(n,"</h2>\n                        <p><span>").concat(e,"</span> - Время выйшло</p>\n                    </div>\n                    <div></div>\n                ")))}))}(t,o),window.addEventListener("keydown",v),d.classList.add("is-open")}else console.log(n.nodeName)},v=function(e){"Escape"===e.key&&h()},h=function(){window.removeEventListener("keydown",v),d.classList.remove("is-open")};function f(){return l.innerHTML=""}s.addEventListener("click",g),i.addEventListener("click",h),c.addEventListener("click",h);var y=document.querySelector('meta[name="color-scheme"]'),L=function(e){document.body.className=e,y.content=e,localStorage.setItem("theme",e)},b=document.querySelector(".theme-toggle"),w=localStorage.getItem("theme")||"dark";L(w),b.addEventListener("click",(function(e){console.log(e.target);var n="light"===w?"dark":"light";L(n),w=n}))})()})();