!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"EVgbq":"index.dd4f5c3d.js","9INgN":"parking-page.dbcbc498.jpg","7nwxg":"library.53621349.js"}'));var r,o=a("1h2Gi"),c=a("8MBJY"),l=a("a2hTj"),u=a("4Nugj"),s=function(){"use strict";function e(){t(c)(this,e),this.totalPages=1,this.page=1}return t(l)(e,[{key:"createMarkup",value:function(){var t=this.totalPages,e=this.page,n='<li class="pagination__item first-page">1</li>',i='<li class="pagination__item last-page">'.concat(t,"</li>"),a='<li class="pagination__item prev-dots">...</li>',r='<li class="pagination__item next-dots">...</li>',o='<li class="prev-btn pagination__item"></li>',c="",l=e-2,u=e+2;if(1===t)return'<li class="pagination__item first-page current">1</li>';if(e>1&&(c+=o),t<=5)for(var s=1;s<=t;s++)c+='<li class="pagination__item'.concat(s===e?" current":"",'">').concat(s,"</li>");if(t>6){for(var f=1;f<=5;f++)c+='<li class="pagination__item'.concat(f===e?" current":"",'">').concat(f,"</li>");c=c+r+i}if(t>6&&e>t-4&&e>3){c=o+n+a;for(var d=t-4;d<=t;d++)c+='<li class="pagination__item'.concat(d===e?" current":"",'">').concat(d,"</li>")}if(t>6&&e<=t-4&&e>3){c=o+n+a;for(var p=l;p<=u;p++)c+='<li class="pagination__item'.concat(p===e?" current":"",'">').concat(p,"</li>");c=c+r+i}return e<t&&(c+='<li class="next-btn pagination__item"></li>'),c}},{key:"renderMarkup",value:function(){u.default.pagination.innerHTML=this.createMarkup()}},{key:"removeMarkup",value:function(){u.default.pagination.innerHTML=""}}]),e}(),f=(u=a("4Nugj"),a("8JPao"));function d(e){return e.map((function(e){var n=e.id,i=e.genre_ids,a=e.poster_path,o=e.original_title,c=e.release_date,l=a?"https://image.tmdb.org/t/p/w500".concat(a):t(r);return'\n    <li class="card-set__item">\n     <a class="card" href="" id="'.concat(n,'">\n      <div class="card__thumb">\n       <img class="card__image" src="').concat(l,'" alt="').concat(o,'" loading="lazy" />\n      </div>\n      <div class="card__info">\n       <h2 class="card__title">').concat(o,'</h2>\n       <div class="card__wrap">\n        <p class="card__item">').concat((0,f.getGeneresName)(i),' |</p>\n        <p class="card__item">').concat(c.slice(0,4),"</p>\n       </div>\n      </div>\n     </a>\n    </li>")})).join("")}r=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("9INgN");var p,g=a("l5bVx"),v=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,y=/^0o[0-7]+$/i,b=parseInt,h="object"==typeof e&&e&&e.Object===Object&&e,L="object"==typeof self&&self&&self.Object===Object&&self,N=h||L||Function("return this")(),x=Object.prototype.toString,j=Math.max,E=Math.min,T=function(){return N.Date.now()};function M(e){var n=void 0===e?"undefined":t(g)(e);return!!e&&("object"==n||"function"==n)}function k(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(g)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==x.call(e)}(e))return NaN;if(M(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=M(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(v,"");var i=m.test(e);return i||y.test(e)?b(e.slice(2),i?2:8):_.test(e)?NaN:+e}p=function(t,e,n){var i,a,r,o,c,l,u=0,s=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=i,r=a;return i=a=void 0,u=e,o=t.apply(r,n)}function g(t){return u=t,c=setTimeout(_,e),s?p(t):o}function v(t){var n=t-l;return void 0===l||n>=e||n<0||f&&t-u>=r}function _(){var t=T();if(v(t))return m(t);c=setTimeout(_,function(t){var n=e-(t-l);return f?E(n,r-(t-u)):n}(t))}function m(t){return c=void 0,d&&i?p(t):(i=a=void 0,o)}function y(){var t=T(),n=v(t);if(i=arguments,a=this,l=t,n){if(void 0===c)return g(l);if(f)return c=setTimeout(_,e),p(l)}return void 0===c&&(c=setTimeout(_,e)),o}return e=k(e)||0,M(n)&&(s=!!n.leading,r=(f="maxWait"in n)?j(k(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==c&&clearTimeout(c),u=0,i=l=a=c=void 0},y.flush=function(){return void 0===c?o:m(T())},y};var w=1;function H(t,e){"LI"===t.target.nodeName&&(t.target.classList.contains("next-btn")?e(w+=1):t.target.classList.contains("prev-btn")?e(w-=1):t.target.classList.contains("next-dots")?e(w+=3):t.target.classList.contains("prev-dots")?e(w-=3):e(w=Number(t.target.textContent)))}function O(){document.body.scrollTop=0,document.documentElement.scrollTop=0}var S=a("kvC6y"),F=new(0,o.default),R=new s;function q(t){u.default.pagination.removeEventListener("click",P),R.page=t,F.page=t,(0,S.onLoader)(),F.getFilmsByKeyword().then((function(t){if((0,S.offLoader)(),!t.data.total_results)return F.searchQuery="",u.default.gallery.innerHTML="",setTimeout((function(){u.default.inputNotice.classList.add("form__notice--hidden")}),3e3),u.default.inputNotice.classList.remove("form__notice--hidden"),void(u.default.inputNotice.textContent="Search result not successful. Enter the correct movie name");u.default.gallery.innerHTML=d(t.data.results),R.totalPages=t.data.total_pages,R.renderMarkup(),O(),u.default.pagination.addEventListener("click",B)})).catch((function(t){return console.log(t)}))}function C(t){u.default.pagination.removeEventListener("click",B),R.page=t,F.page=t,(0,S.onLoader)(),F.getFilmsByReiting().then((function(t){u.default.gallery.innerHTML=d(t.data.results),R.totalPages=t.data.total_pages,R.renderMarkup(),O(),u.default.pagination.addEventListener("click",P),(0,S.offLoader)()})).catch((function(t){return console.log(t)}))}function P(t){H(t,C)}function B(t){H(t,q)}C(1),u.default.input.addEventListener("input",t(p)((function(){if(!u.default.input.value)return F.searchQuery="",C(1),console.log("Sorry, please try again.");F.query=u.default.input.value.trim(),q(1)}),300)),a("3yYjD")}();
//# sourceMappingURL=index.dd4f5c3d.js.map
