history.scrollRestoration="manual",document.addEventListener("DOMContentLoaded",(function(){var e=c(".header.sticky");e&&(document.onscroll=()=>{window.scrollY>=50?e.classList.add("active"):e.classList.remove("active")});let t=l(".question"),n=c(".full-btn"),i=c(".full-list");if(n&&(n.onclick=e=>{e.preventDefault(),i.classList.add("active")},document.onclick=e=>{e.target.closest(".full-list__wrap")||e.target===n||i.classList.remove("active")}),t&&t.forEach(e=>{e.onclick=t=>{let n=e.nextElementSibling;e.classList.contains("active")?(e.classList.remove("active"),n.style.height="0px"):(e.classList.add("active"),window.innerWidth>767?n.style.height=n.scrollHeight+30+"px":n.style.height=n.scrollHeight+20+"px")}}),c(".glide")&&window.innerWidth<767&&new Glide(".glide").mount(),c(".timer")){!function e(t){var n=60,i=t;!function t(){var o=c(".timer .mins"),l=c(".timer .seconds"),s=i-1;n--,o.innerHTML=(s<10?"0":"")+s,l.innerHTML=(n<10?"0":"")+String(n),n>0?setTimeout(t,1e3):i>1&&e(i-1)}()}(15),l(".header.sticky .btn").forEach(e=>{e.onclick=e=>{e.preventDefault(),function(e){const t=window.scrollY||window.pageYOffset,n=Date.now(),i=Math.abs(t-e)/2;!function c(){var l,s=Math.min(1,(Date.now()-n)/i),r=t+(e-t)*((l=s)<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2);window.scrollTo(0,r),s<1&&o(c)}()}(function(e){var t=e.getBoundingClientRect(),n=window.pageYOffset||document.documentElement.scrollTop;return t.top+n}(c(".product")))}})}const o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;function c(e,t){return t?t.querySelector(e):document.querySelector(e)}function l(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}}));