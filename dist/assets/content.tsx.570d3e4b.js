import{r as p,j as i,R as u,a as l}from"./jsx-runtime.228fe7bd.js";const h=()=>(p.exports.useEffect(()=>{document.addEventListener("mouseup",function(q){var d;if(!window)return;const r=(d=window.getSelection())==null?void 0:d.toString();if(r){if(!document.getElementById("qiita-search-button")){const n=document.createElement("button");n.id="qiita-search-button",n.onclick=async()=>{document.getElementById("qiita-search-box")&&document.getElementById("qiita-search-box").remove();const a=document.createElement("div");a.id="qiita-search-box";const s=new URL("https://qiita.com/api/v2/items"),e=new URLSearchParams;e.append("page","1"),e.append("per_page","10"),e.append("query",`title:${r}`),s.search=e.toString(),(await(await fetch(s.toString())).json()).map(m=>{const o=document.createElement("a");o.href=m.url,o.innerText=m.title,a.appendChild(o)}),document.body.appendChild(a)},document.body.appendChild(n)}}else{const t=document.getElementById("qiita-search-button");t&&t.remove()}})},[]),i("div",{})),c=document.createElement("div");c.id="qiita-search";document.body.append(c);u.render(i(l.StrictMode,{children:i(h,{})}),c);