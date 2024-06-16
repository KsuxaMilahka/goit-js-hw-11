import{S as d,i as p}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="44373607-23d837ad960924b19f5bc44a0",y="https://pixabay.com/api/";function h(n){const o=new URLSearchParams({key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${y}?${o}`;return fetch(t).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{if(s.hits.length===0)throw new Error("No images found");return s})}let a;function g(n){const o=document.querySelector(".gallery");o.innerHTML=n.map(t=>`
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
    `).join(""),a?a.refresh():a=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function l(n){p.error({title:"Error",message:n})}const f=document.querySelector(".search-form"),v=document.querySelector('input[name="query"]'),c=document.querySelector(".gallery"),u=document.getElementById("loader");f.addEventListener("submit",n=>{n.preventDefault();const o=v.value.trim();if(o===""){l("Please enter a search query.");return}c.innerHTML="",u.style.display="block",h(o).then(t=>{if(u.style.display="none",t.hits.length===0){c.innerHTML="",l("Sorry, there are no images matching your search query. Please try again!");return}g(t.hits)}).catch(()=>{u.style.display="none",c.innerHTML="",l("Something went wrong. Please try again later.")}),f.reset()});
//# sourceMappingURL=commonHelpers.js.map
