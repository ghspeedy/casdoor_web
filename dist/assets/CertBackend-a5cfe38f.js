import{V as r,$ as a,F as o}from"./index-a4571b31.js";function p(e,t="",n="",c="",d="",s="",i=""){return fetch(`${r}/api/get-certs?owner=${e}&p=${t}&pageSize=${n}&field=${c}&value=${d}&sortField=${s}&sortOrder=${i}`,{method:"GET",credentials:"include",headers:{"Accept-Language":a()}}).then(u=>u.json())}function h(e,t){return fetch(`${r}/api/get-cert?id=${e}/${encodeURIComponent(t)}`,{method:"GET",credentials:"include",headers:{"Accept-Language":a()}}).then(n=>n.json())}function $(e,t,n){const c=o(n);return fetch(`${r}/api/update-cert?id=${e}/${encodeURIComponent(t)}`,{method:"POST",credentials:"include",body:JSON.stringify(c),headers:{"Accept-Language":a()}}).then(d=>d.json())}function l(e){const t=o(e);return fetch(`${r}/api/add-cert`,{method:"POST",credentials:"include",body:JSON.stringify(t),headers:{"Accept-Language":a()}}).then(n=>n.json())}function f(e){const t=o(e);return fetch(`${r}/api/delete-cert`,{method:"POST",credentials:"include",body:JSON.stringify(t),headers:{"Accept-Language":a()}}).then(n=>n.json())}export{l as a,h as b,f as d,p as g,$ as u};
