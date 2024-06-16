import{S as u,i as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="44373607-23d837ad960924b19f5bc44a0",p="https://pixabay.com/api/";function m(s){const o=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${p}?${o}`;return fetch(t).then(n=>{if(!n.ok)throw new Error("Network response was not ok");return n.json()}).then(n=>{if(n.hits.length===0)throw new Error("No images found");return n})}let a;function y(s){const o=document.querySelector(".gallery");o.innerHTML=s.map(t=>`
      <div class="photo-card">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="info-title">Likes</p>
            <p class="info-value">${t.likes}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Views</p>
            <p class="info-value">${t.views}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Comments</p>
            <p class="info-value">${t.comments}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Downloads</p>
            <p class="info-value">${t.downloads}</p>
          </div>
        </div>
      </div>
    `).join(""),a?a.refresh():a=new u(".gallery a",{captionsData:"alt",captionDelay:250})}function l(s){f.error({title:"Error",message:s})}const h=document.querySelector(".search-form"),g=document.querySelector('input[name="query"]'),v=document.querySelector(".gallery"),c=document.getElementById("loader");h.addEventListener("submit",s=>{s.preventDefault();const o=g.value.trim();if(o===""){l("Please enter a search query.");return}c.style.display="block",m(o).then(t=>{if(v.innerHTML="",t.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}y(t.hits)}).catch(()=>{l("Something went wrong. Please try again later.")}).finally(()=>{c.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
