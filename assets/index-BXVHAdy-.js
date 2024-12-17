(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=(n,o,s,r)=>{const e={titre:n,auteur:o,resume:s,estLu:r,id:crypto.randomUUID(),createdAt:new Date().toDateString()};JSON.stringify(e);const t=localStorage.getItem("livres"),i=t?JSON.parse(t):[];i.push(e),localStorage.setItem("livres",JSON.stringify(i))},m=()=>{const n=localStorage.getItem("livres");return n?JSON.parse(n):[]},g=n=>{const o=localStorage.getItem("livres"),r=(o?JSON.parse(o):[]).filter(e=>e.id!==n);localStorage.setItem("livres",JSON.stringify(r))},l=()=>{const n=document.querySelector("#booksList"),o=m();n.innerHTML=o.map(s=>{const r=new Date(s.createdAt).toLocaleDateString("fr-FR");return`<div class="col-md-6 col-lg-4" id="book-${s.id}">
     <div class="card h-100">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title mb-0">${s.titre}</h5>
                <span class="badge ${s.estLu?"bg-success":"bg-secondary"} toggle-read-btn" 
                        style="cursor: pointer;" data-id="${s.id}">
                    ${s.estLu?'<i class="bi bi-check-circle me-1"></i>Lu':'<i class="bi bi-circle me-1"></i>Non lu'}
                </span>
                </div>
                <h6 class="card-subtitle mb-2">
                <i class="bi bi-person me-1"></i>${s.auteur}
                </h6>
                <p class="card-text small">${s.resume}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <small class="text-muted">
                    <i class="bi bi-calendar3 me-1"></i>${r}
                </small>
                <button class="btn btn-outline-danger btn-sm delete-btn" data-id="${s.id}">
                    <i class="bi bi-trash me-1"></i>Supprimer
                </button>
            </div>
        </div>
    </div>
</div>`}).join("")},f=()=>{const n=document.querySelector("#toggleFormBtn"),o=document.querySelector("#formSection"),s=new bootstrap.Collapse(o,{toggle:!1}),r=document.querySelector("#bookForm");n.addEventListener("click",()=>{s.toggle()}),o.addEventListener("hidden.bs.collapse",()=>{r.reset()}),r.addEventListener("submit",t=>{t.preventDefault();const i=r.title.value,c=r.author.value,a=r.summary.value,d=r.isRead.checked;console.log(i,c,a,d),u(i,c,a,d),s.hide(),l()}),document.querySelector("#booksList").addEventListener("click",t=>{const i=t.target.closest(".delete-btn, .toggle-read-btn");if(i===null)return;const c=i.dataset.id;i.classList.contains("delete-btn")?(g(c),l()):i.classList.contains("toggle-read-btn")&&console.log("Toggle cliqué")})};f();l();
