import{V as o,$ as a,F as c}from"./index-a4571b31.js";function g(e,n="",t="",d="",r="",s="",i=""){return fetch(`${o}/api/get-roles?owner=${e}&p=${n}&pageSize=${t}&field=${d}&value=${r}&sortField=${s}&sortOrder=${i}`,{method:"GET",credentials:"include",headers:{"Accept-Language":a()}}).then(l=>l.json())}function p(e,n){return fetch(`${o}/api/get-role?id=${e}/${encodeURIComponent(n)}`,{method:"GET",credentials:"include",headers:{"Accept-Language":a()}}).then(t=>t.json())}function h(e,n,t){const d=c(t);return fetch(`${o}/api/update-role?id=${e}/${encodeURIComponent(n)}`,{method:"POST",credentials:"include",body:JSON.stringify(d),headers:{"Accept-Language":a()}}).then(r=>r.json())}function $(e){const n=c(e);return fetch(`${o}/api/add-role`,{method:"POST",credentials:"include",body:JSON.stringify(n),headers:{"Accept-Language":a()}}).then(t=>t.json())}function f(e){const n=c(e);return fetch(`${o}/api/delete-role`,{method:"POST",credentials:"include",body:JSON.stringify(n),headers:{"Accept-Language":a()}}).then(t=>t.json())}export{$ as a,p as b,f as d,g,h as u};