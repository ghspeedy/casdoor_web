import{V as n,$ as d,F as s}from"./index-a4571b31.js";function g(e,r="",t="",o="",i="",a="",c=""){return fetch(`${n}/api/get-providers?owner=${e}&p=${r}&pageSize=${t}&field=${o}&value=${i}&sortField=${a}&sortOrder=${c}`,{method:"GET",credentials:"include",headers:{"Accept-Language":d()}}).then(p=>p.json())}function l(e="",r="",t="",o="",i="",a=""){return fetch(`${n}/api/get-global-providers?p=${e}&pageSize=${r}&field=${t}&value=${o}&sortField=${i}&sortOrder=${a}`,{method:"GET",credentials:"include",headers:{"Accept-Language":d()}}).then(c=>c.json())}function h(e,r){return fetch(`${n}/api/get-provider?id=${e}/${encodeURIComponent(r)}`,{method:"GET",credentials:"include",headers:{"Accept-Language":d()}}).then(t=>t.json())}function $(e,r,t){const o=s(t);return fetch(`${n}/api/update-provider?id=${e}/${encodeURIComponent(r)}`,{method:"POST",credentials:"include",body:JSON.stringify(o),headers:{"Accept-Language":d()}}).then(i=>i.json())}function f(e){const r=s(e);return fetch(`${n}/api/add-provider`,{method:"POST",credentials:"include",body:JSON.stringify(r),headers:{"Accept-Language":d()}}).then(t=>t.json())}function v(e){const r=s(e);return fetch(`${n}/api/delete-provider`,{method:"POST",credentials:"include",body:JSON.stringify(r),headers:{"Accept-Language":d()}}).then(t=>t.json())}export{f as a,g as b,h as c,v as d,l as g,$ as u};
