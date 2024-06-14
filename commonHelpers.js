import{S as u,i as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="44373607-23d837ad960924b19f5bc44a0",p="https://pixabay.com/api/";function m(n){const o=new URLSearchParams({key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${p}?${o}`;return fetch(e).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{if(s.hits.length===0)throw new Error("No images found");return s})}let a;function h(n){const o=document.querySelector(".gallery");o.innerHTML=n.map(e=>`
      <div class="photo-card">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="info-title">Likes</p>
            <p class="info-value">${e.likes}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Views</p>
            <p class="info-value">${e.views}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Comments</p>
            <p class="info-value">${e.comments}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Downloads</p>
            <p class="info-value">${e.downloads}</p>
          </div>
        </div>
      </div>
    `).join(""),a?a.refresh():a=new u(".gallery a",{captionsData:"alt",captionDelay:250})}function l(n){f.error({title:"Error",message:n})}const y=document.querySelector(".search-form"),g=document.querySelector('input[name="query"]');document.querySelector(".gallery");function v(){document.getElementById("loader").style.display="block"}function c(){document.getElementById("loader").style.display="none"}y.addEventListener("submit",n=>{n.preventDefault();const o=g.value.trim();if(o===""){l("Please enter a search query.");return}v(),m(o).then(e=>{if(c(),e.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}h(e.hits)}).catch(e=>{c(),l("Something went wrong. Please try again later."),console.error(e)})});
//# sourceMappingURL=commonHelpers.js.map
