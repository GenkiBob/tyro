import{o as h,c as _,k as n,I as m}from"./chunks/framework.JKD6zmP_.js";const p={class:"checkMain"},k=n("div",{class:"loader"},[n("div",{class:"loading-2"},[n("i"),n("i"),n("i"),n("i"),n("i")])],-1),v=n("h3",null,"正在检测有效地址",-1),w=n("br",null,null,-1),j=n("br",null,null,-1),D=n("span",null," 若5秒内未跳转，请点击 ",-1),x={__name:"checkDomain",setup(d){var o=window.location.href,r=new URL(o),i="",c;r.searchParams.forEach(function(e,t){t==="path"&&(i=e)});function u(e,t){e=e.replace(/\/+$/,""),t=t.replace(/^\/+/,"");var a=e+"/"+t;return a}fetch("./data.json?t="+Date.now()).then(e=>e.json()).then(e=>{s(e),c&&clearInterval(c),c=setInterval(()=>{s(e)},3e3),setTimeout(()=>{clearInterval(c),c=null,alert("无法跳转可用站点，请点击下列‘立即前往’。")},1e4)});function s(e){for(var t=0;t<e.length;t++){const a=e[t];fetch(a).then(l=>{l.ok&&l.status===200&&(window.location.href=u(a,i)+location.search)})}}function f(e){fetch("ip.json").then(function(t){return t.json()}).then(function(t){window.location.href=t[0]})}return(e,t)=>(h(),_("div",p,[k,v,n("div",{style:{"margin-top":"30px"}},[w,j,D,n("button",{onClick:f},"立即前往")])]))}},P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"check/checkDomain.md","filePath":"check/checkDomain.md"}'),b={name:"check/checkDomain.md"},I=Object.assign(b,{setup(d){return(o,r)=>(h(),_("div",null,[m(x)]))}});export{P as __pageData,I as default};
