(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();(function(o){typeof o.matches!="function"&&(o.matches=o.msMatchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||function(r){for(var t=this,c=(t.document||t.ownerDocument).querySelectorAll(r),e=0;c[e]&&c[e]!==t;)++e;return Boolean(c[e])}),typeof o.closest!="function"&&(o.closest=function(r){for(var t=this;t&&t.nodeType===1;){if(t.matches(r))return t;t=t.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll(".js-open-modal"),r=document.querySelector(".js-overlay-modal"),t=document.querySelectorAll(".js-modal-close");o.forEach(function(c){c.addEventListener("click",function(e){e.preventDefault();var n=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+n+'"]');s.classList.add("active"),r.classList.add("active")})}),t.forEach(function(c){c.addEventListener("click",function(e){var n=this.closest(".modal");n.classList.remove("active"),r.classList.remove("active")})}),document.body.addEventListener("keyup",function(c){var e=c.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),r.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});(()=>{const o=document.querySelector("[data-menu-button]"),r=document.querySelector("[data-menu]");o.addEventListener("click",()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.classList.toggle("is-open"),o.setAttribute("aria-expanded",!t),r.classList.toggle("is-open")})})();