(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1488:(e,t,r)=>{"use strict";r.d(t,{i:()=>a});var n=r(12115),o=r(41524);function a({prop:e,defaultProp:t,onChange:r=()=>{}}){let[a,i]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[a]=r,i=n.useRef(a),l=(0,o.c)(t);return n.useEffect(()=>{i.current!==a&&(l(a),i.current=a)},[a,i,l]),r}({defaultProp:t,onChange:r}),l=void 0!==e,s=l?e:a,u=(0,o.c)(r);return[s,n.useCallback(t=>{if(l){let r="function"==typeof t?t(e):t;r!==e&&u(r)}else i(t)},[l,e,i,u])]}},4256:(e,t,r)=>{"use strict";r.d(t,{jH:()=>a});var n=r(12115);r(95155);var o=n.createContext(void 0);function a(e){let t=n.useContext(o);return e||t||"ltr"}},17028:(e,t,r)=>{"use strict";r.d(t,{C:()=>i});var n=r(12115),o=r(88068),a=r(46611),i=e=>{let{present:t,children:r}=e,i=function(e){var t,r;let[o,i]=n.useState(),s=n.useRef({}),u=n.useRef(e),d=n.useRef("none"),[c,f]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return n.useEffect(()=>{let e=l(s.current);d.current="mounted"===c?e:"none"},[c]),(0,a.N)(()=>{let t=s.current,r=u.current;if(r!==e){let n=d.current,o=l(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):r&&n!==o?f("ANIMATION_OUT"):f("UNMOUNT"),u.current=e}},[e,f]),(0,a.N)(()=>{if(o){var e;let t;let r=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,n=e=>{let n=l(s.current).includes(e.animationName);if(e.target===o&&n&&(f("ANIMATION_END"),!u.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},a=e=>{e.target===o&&(d.current=l(s.current))};return o.addEventListener("animationstart",a),o.addEventListener("animationcancel",n),o.addEventListener("animationend",n),()=>{r.clearTimeout(t),o.removeEventListener("animationstart",a),o.removeEventListener("animationcancel",n),o.removeEventListener("animationend",n)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:n.useCallback(e=>{e&&(s.current=getComputedStyle(e)),i(e)},[])}}(t),s="function"==typeof r?r({present:i.isPresent}):n.Children.only(r),u=(0,o.s)(i.ref,function(e){var t,r;let n=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(o=(n=null===(r=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning)?e.props.ref:e.props.ref||e.ref}(s));return"function"==typeof r||i.isPresent?n.cloneElement(s,{ref:u}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},18166:(e,t,r)=>{"use strict";r.d(t,{A:()=>i,q:()=>a});var n=r(12115),o=r(95155);function a(e,t){let r=n.createContext(t),a=e=>{let{children:t,...a}=e,i=n.useMemo(()=>a,Object.values(a));return(0,o.jsx)(r.Provider,{value:i,children:t})};return a.displayName=e+"Provider",[a,function(o){let a=n.useContext(r);if(a)return a;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let r=[],a=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return a.scopeName=e,[function(t,a){let i=n.createContext(a),l=r.length;r=[...r,a];let s=t=>{let{scope:r,children:a,...s}=t,u=r?.[e]?.[l]||i,d=n.useMemo(()=>s,Object.values(s));return(0,o.jsx)(u.Provider,{value:d,children:a})};return s.displayName=t+"Provider",[s,function(r,o){let s=o?.[e]?.[l]||i,u=n.useContext(s);if(u)return u;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(a,...t)]}},21567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var n=r(43463),o=r(69795);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.QP)((0,n.$)(t))}},23360:(e,t,r)=>{"use strict";r.d(t,{hO:()=>s,sG:()=>l});var n=r(12115),o=r(47650),a=r(12317),i=r(95155),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...o}=e,l=n?a.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(l,{...o,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function s(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},35055:(e,t,r)=>{"use strict";r.d(t,{Avatar:()=>i,AvatarFallback:()=>s,AvatarImage:()=>l});var n=r(95155);r(12115);var o=r(74920),a=r(21567);function i(e){let{className:t,...r}=e;return(0,n.jsx)(o.bL,{"data-slot":"avatar",className:(0,a.cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full",t),...r})}function l(e){let{className:t,...r}=e;return(0,n.jsx)(o._V,{"data-slot":"avatar-image",className:(0,a.cn)("aspect-square size-full",t),...r})}function s(e){let{className:t,...r}=e;return(0,n.jsx)(o.H4,{"data-slot":"avatar-fallback",className:(0,a.cn)("bg-muted flex size-full items-center justify-center rounded-full",t),...r})}},41524:(e,t,r)=>{"use strict";r.d(t,{c:()=>o});var n=r(12115);function o(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},46611:(e,t,r)=>{"use strict";r.d(t,{N:()=>o});var n=r(12115),o=globalThis?.document?n.useLayoutEffect:()=>{}},49741:(e,t,r)=>{"use strict";r.d(t,{N:()=>s});var n=r(12115),o=r(18166),a=r(88068),i=r(12317),l=r(95155);function s(e){let t=e+"CollectionProvider",[r,s]=(0,o.A)(t),[u,d]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:r}=e,o=n.useRef(null),a=n.useRef(new Map).current;return(0,l.jsx)(u,{scope:t,itemMap:a,collectionRef:o,children:r})};c.displayName=t;let f=e+"CollectionSlot",m=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=d(f,r),s=(0,a.s)(t,o.collectionRef);return(0,l.jsx)(i.DX,{ref:s,children:n})});m.displayName=f;let p=e+"CollectionItemSlot",v="data-radix-collection-item",x=n.forwardRef((e,t)=>{let{scope:r,children:o,...s}=e,u=n.useRef(null),c=(0,a.s)(t,u),f=d(p,r);return n.useEffect(()=>(f.itemMap.set(u,{ref:u,...s}),()=>void f.itemMap.delete(u))),(0,l.jsx)(i.DX,{[v]:"",ref:c,children:o})});return x.displayName=p,[{Provider:c,Slot:m,ItemSlot:x},function(t){let r=d(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},s]}},51719:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(67401).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},67668:(e,t,r)=>{"use strict";r.d(t,{B:()=>s});var n,o=r(12115),a=r(46611),i=(n||(n=r.t(o,2)))["useId".toString()]||(()=>void 0),l=0;function s(e){let[t,r]=o.useState(i());return(0,a.N)(()=>{e||r(e=>e??String(l++))},[e]),e||(t?`radix-${t}`:"")}},74920:(e,t,r)=>{"use strict";r.d(t,{H4:()=>w,_V:()=>h,bL:()=>b});var n=r(12115),o=r(18166),a=r(41524),i=r(46611),l=r(23360),s=r(95155),u="Avatar",[d,c]=(0,o.A)(u),[f,m]=d(u),p=n.forwardRef((e,t)=>{let{__scopeAvatar:r,...o}=e,[a,i]=n.useState("idle");return(0,s.jsx)(f,{scope:r,imageLoadingStatus:a,onImageLoadingStatusChange:i,children:(0,s.jsx)(l.sG.span,{...o,ref:t})})});p.displayName=u;var v="AvatarImage",x=n.forwardRef((e,t)=>{let{__scopeAvatar:r,src:o,onLoadingStatusChange:u=()=>{},...d}=e,c=m(v,r),f=function(e,t){let[r,o]=n.useState("idle");return(0,i.N)(()=>{if(!e){o("error");return}let r=!0,n=new window.Image,a=e=>()=>{r&&o(e)};return o("loading"),n.onload=a("loaded"),n.onerror=a("error"),n.src=e,t&&(n.referrerPolicy=t),()=>{r=!1}},[e,t]),r}(o,d.referrerPolicy),p=(0,a.c)(e=>{u(e),c.onImageLoadingStatusChange(e)});return(0,i.N)(()=>{"idle"!==f&&p(f)},[f,p]),"loaded"===f?(0,s.jsx)(l.sG.img,{...d,ref:t,src:o}):null});x.displayName=v;var g="AvatarFallback",N=n.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:o,...a}=e,i=m(g,r),[u,d]=n.useState(void 0===o);return n.useEffect(()=>{if(void 0!==o){let e=window.setTimeout(()=>d(!0),o);return()=>window.clearTimeout(e)}},[o]),u&&"loaded"!==i.imageLoadingStatus?(0,s.jsx)(l.sG.span,{...a,ref:t}):null});N.displayName=g;var b=p,h=x,w=N},76471:(e,t,r)=>{"use strict";r.d(t,{Accordion:()=>eo,AccordionContent:()=>el,AccordionItem:()=>ea,AccordionTrigger:()=>ei});var n=r(95155),o=r(12115),a=r(18166),i=r(49741),l=r(88068),s=r(93610),u=r(1488),d=r(23360),c=r(46611),f=r(17028),m=r(67668),p="Collapsible",[v,x]=(0,a.A)(p),[g,N]=v(p),b=o.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:a,defaultOpen:i,disabled:l,onOpenChange:s,...c}=e,[f=!1,p]=(0,u.i)({prop:a,defaultProp:i,onChange:s});return(0,n.jsx)(g,{scope:r,disabled:l,contentId:(0,m.B)(),open:f,onOpenToggle:o.useCallback(()=>p(e=>!e),[p]),children:(0,n.jsx)(d.sG.div,{"data-state":C(f),"data-disabled":l?"":void 0,...c,ref:t})})});b.displayName=p;var h="CollapsibleTrigger",w=o.forwardRef((e,t)=>{let{__scopeCollapsible:r,...o}=e,a=N(h,r);return(0,n.jsx)(d.sG.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":C(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...o,ref:t,onClick:(0,s.m)(e.onClick,a.onOpenToggle)})});w.displayName=h;var y="CollapsibleContent",j=o.forwardRef((e,t)=>{let{forceMount:r,...o}=e,a=N(y,e.__scopeCollapsible);return(0,n.jsx)(f.C,{present:r||a.open,children:e=>{let{present:r}=e;return(0,n.jsx)(A,{...o,ref:t,present:r})}})});j.displayName=y;var A=o.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:a,children:i,...s}=e,u=N(y,r),[f,m]=o.useState(a),p=o.useRef(null),v=(0,l.s)(t,p),x=o.useRef(0),g=x.current,b=o.useRef(0),h=b.current,w=u.open||f,j=o.useRef(w),A=o.useRef(void 0);return o.useEffect(()=>{let e=requestAnimationFrame(()=>j.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,c.N)(()=>{let e=p.current;if(e){A.current=A.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();x.current=t.height,b.current=t.width,j.current||(e.style.transitionDuration=A.current.transitionDuration,e.style.animationName=A.current.animationName),m(a)}},[u.open,a]),(0,n.jsx)(d.sG.div,{"data-state":C(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!w,...s,ref:v,style:{"--radix-collapsible-content-height":g?"".concat(g,"px"):void 0,"--radix-collapsible-content-width":h?"".concat(h,"px"):void 0,...e.style},children:w&&i})});function C(e){return e?"open":"closed"}var R=r(4256),I="Accordion",_=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[O,M,k]=(0,i.N)(I),[S,E]=(0,a.A)(I,[k,x]),P=x(),T=o.forwardRef((e,t)=>{let{type:r,...o}=e;return(0,n.jsx)(O.Provider,{scope:e.__scopeAccordion,children:"multiple"===r?(0,n.jsx)(F,{...o,ref:t}):(0,n.jsx)(G,{...o,ref:t})})});T.displayName=I;var[D,L]=S(I),[U,$]=S(I,{collapsible:!1}),G=o.forwardRef((e,t)=>{let{value:r,defaultValue:a,onValueChange:i=()=>{},collapsible:l=!1,...s}=e,[d,c]=(0,u.i)({prop:r,defaultProp:a,onChange:i});return(0,n.jsx)(D,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:c,onItemClose:o.useCallback(()=>l&&c(""),[l,c]),children:(0,n.jsx)(U,{scope:e.__scopeAccordion,collapsible:l,children:(0,n.jsx)(q,{...s,ref:t})})})}),F=o.forwardRef((e,t)=>{let{value:r,defaultValue:a,onValueChange:i=()=>{},...l}=e,[s=[],d]=(0,u.i)({prop:r,defaultProp:a,onChange:i}),c=o.useCallback(e=>d(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[d]),f=o.useCallback(e=>d(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[d]);return(0,n.jsx)(D,{scope:e.__scopeAccordion,value:s,onItemOpen:c,onItemClose:f,children:(0,n.jsx)(U,{scope:e.__scopeAccordion,collapsible:!0,children:(0,n.jsx)(q,{...l,ref:t})})})}),[H,z]=S(I),q=o.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:a,dir:i,orientation:u="vertical",...c}=e,f=o.useRef(null),m=(0,l.s)(f,t),p=M(r),v="ltr"===(0,R.jH)(i),x=(0,s.m)(e.onKeyDown,e=>{var t;if(!_.includes(e.key))return;let r=e.target,n=p().filter(e=>{var t;return!(null===(t=e.ref.current)||void 0===t?void 0:t.disabled)}),o=n.findIndex(e=>e.ref.current===r),a=n.length;if(-1===o)return;e.preventDefault();let i=o,l=a-1,s=()=>{(i=o+1)>l&&(i=0)},d=()=>{(i=o-1)<0&&(i=l)};switch(e.key){case"Home":i=0;break;case"End":i=l;break;case"ArrowRight":"horizontal"===u&&(v?s():d());break;case"ArrowDown":"vertical"===u&&s();break;case"ArrowLeft":"horizontal"===u&&(v?d():s());break;case"ArrowUp":"vertical"===u&&d()}null===(t=n[i%a].ref.current)||void 0===t||t.focus()});return(0,n.jsx)(H,{scope:r,disabled:a,direction:i,orientation:u,children:(0,n.jsx)(O.Slot,{scope:r,children:(0,n.jsx)(d.sG.div,{...c,"data-orientation":u,ref:m,onKeyDown:a?void 0:x})})})}),B="AccordionItem",[W,V]=S(B),X=o.forwardRef((e,t)=>{let{__scopeAccordion:r,value:o,...a}=e,i=z(B,r),l=L(B,r),s=P(r),u=(0,m.B)(),d=o&&l.value.includes(o)||!1,c=i.disabled||e.disabled;return(0,n.jsx)(W,{scope:r,open:d,disabled:c,triggerId:u,children:(0,n.jsx)(b,{"data-orientation":i.orientation,"data-state":et(d),...s,...a,ref:t,disabled:c,open:d,onOpenChange:e=>{e?l.onItemOpen(o):l.onItemClose(o)}})})});X.displayName=B;var K="AccordionHeader",Q=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...o}=e,a=z(I,r),i=V(K,r);return(0,n.jsx)(d.sG.h3,{"data-orientation":a.orientation,"data-state":et(i.open),"data-disabled":i.disabled?"":void 0,...o,ref:t})});Q.displayName=K;var J="AccordionTrigger",Y=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...o}=e,a=z(I,r),i=V(J,r),l=$(J,r),s=P(r);return(0,n.jsx)(O.ItemSlot,{scope:r,children:(0,n.jsx)(w,{"aria-disabled":i.open&&!l.collapsible||void 0,"data-orientation":a.orientation,id:i.triggerId,...s,...o,ref:t})})});Y.displayName=J;var Z="AccordionContent",ee=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...o}=e,a=z(I,r),i=V(Z,r),l=P(r);return(0,n.jsx)(j,{role:"region","aria-labelledby":i.triggerId,"data-orientation":a.orientation,...l,...o,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function et(e){return e?"open":"closed"}ee.displayName=Z;var er=r(51719),en=r(21567);function eo(e){let{...t}=e;return(0,n.jsx)(T,{"data-slot":"accordion",...t})}function ea(e){let{className:t,...r}=e;return(0,n.jsx)(X,{"data-slot":"accordion-item",className:(0,en.cn)("border-b last:border-b-0",t),...r})}function ei(e){let{className:t,children:r,...o}=e;return(0,n.jsx)(Q,{className:"flex",children:(0,n.jsxs)(Y,{"data-slot":"accordion-trigger",className:(0,en.cn)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",t),...o,children:[r,(0,n.jsx)(er.A,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function el(e){let{className:t,children:r,...o}=e;return(0,n.jsx)(ee,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...o,children:(0,n.jsx)("div",{className:(0,en.cn)("pt-0 pb-4",t),children:r})})}},85409:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,48173,23)),Promise.resolve().then(r.bind(r,76471)),Promise.resolve().then(r.bind(r,35055))},93610:(e,t,r)=>{"use strict";function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}r.d(t,{m:()=>n})}},e=>{var t=t=>e(e.s=t);e.O(0,[265,441,587,358],()=>t(85409)),_N_E=e.O()}]);