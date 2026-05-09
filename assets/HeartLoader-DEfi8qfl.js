import{u as N,a as S,b as A,r as s,j as a,H as T}from"./index-Cnw2pXf4.js";const b=["Finding matches…","Connecting you…","Someone liked you…"],k=["Procurando matches…","Conectando você…","Alguém curtiu você…"],M=["Buscando matches…","Conectándote…","¡Alguien te dio like…"],m=10,E=700,j=400,_=()=>{const o=N(),p=S(),{locale:f}=A(),g=s.useRef(f),[h,l]=s.useState(!1),[v,x]=s.useState(""),c=s.useRef(null),u=s.useRef(null);s.useEffect(()=>{g.current=f},[f]);const y=()=>{const r=g.current,e=r==="pt-BR"?k:r==="es-MX"?M:b;return e[Math.floor(Math.random()*e.length)]};return s.useEffect(()=>{const r=e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;const i=e.target;if(!i)return;const n=i.closest("a");if(!n||n.target&&n.target!=="_self"||n.hasAttribute("download"))return;const t=n.getAttribute("href");!t||t.startsWith("http")||t.startsWith("mailto:")||t.startsWith("tel:")||t.startsWith("#")||t!==o.pathname+o.search&&(e.preventDefault(),!u.current&&(u.current=t,x(y()),l(!0),window.setTimeout(()=>{const d=u.current;u.current=null,d&&p(d)},E)))};return document.addEventListener("click",r,!0),()=>document.removeEventListener("click",r,!0)},[p,o.pathname,o.search]),s.useEffect(()=>{if(h)return c.current&&window.clearTimeout(c.current),c.current=window.setTimeout(()=>{l(!1)},j),()=>{c.current&&window.clearTimeout(c.current)}},[o.pathname]),s.useEffect(()=>{x(y()),l(!0);const r=window.setTimeout(()=>l(!1),E);return()=>window.clearTimeout(r)},[]),a.jsxs("div",{"aria-hidden":!h,className:`pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${h?"opacity-100":"opacity-0"}`,style:{background:"hsl(240 10% 8% / 0.45)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)"},children:[a.jsxs("div",{className:"flex flex-col items-center gap-6",children:[a.jsx("div",{className:"relative h-32 w-32",children:Array.from({length:m}).map((r,e)=>{const i=e/m*2*Math.PI,n=56,t=Math.cos(i)*n,d=Math.sin(i)*n,w=e/m*1.2;return a.jsx("div",{className:"absolute left-1/2 top-1/2",style:{transform:`translate(calc(-50% + ${t}px), calc(-50% + ${d}px))`},children:a.jsx(T,{className:"heart-loader-pulse",size:20,style:{color:"hsl(330 80% 60%)",fill:"hsl(330 80% 60%)",animationDelay:`${w}s`}})},e)})}),a.jsx("p",{className:"text-sm font-medium tracking-wide",style:{color:"hsl(0 0% 98%)"},children:v})]}),a.jsx("style",{children:`
        @keyframes heartLoaderPulse {
          0%, 100% {
            transform: scale(0.85);
            opacity: 0.4;
            filter: drop-shadow(0 0 0 hsl(330 80% 60% / 0));
          }
          50% {
            transform: scale(1.35);
            opacity: 1;
            filter: drop-shadow(0 0 6px hsl(330 80% 65% / 0.85));
          }
        }
        .heart-loader-pulse {
          animation: heartLoaderPulse 1.2s ease-in-out infinite;
        }
      `})]})};export{_ as default};
