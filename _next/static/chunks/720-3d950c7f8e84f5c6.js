"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[720],{50858:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(12115);function l(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},51719:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(67401).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},58883:(e,t,r)=>{r.d(t,{UC:()=>eI,In:()=>eP,q7:()=>eM,VF:()=>eA,p4:()=>eL,ZL:()=>eE,bL:()=>eT,wn:()=>e_,PP:()=>eH,l9:()=>eN,WT:()=>eR,LM:()=>eD});var n=r(12115),l=r(47650);function o(e,[t,r]){return Math.min(r,Math.max(t,e))}var a=r(93610),i=r(49741),s=r(88068),d=r(18166),u=r(4256),c=r(59674),p=r(62292),v=r(20196),f=r(67668),h=r(19895),m=r(17323),w=r(23360),g=r(12317),x=r(41524),y=r(1488),b=r(46611),S=r(50858),C=r(95155),j=n.forwardRef((e,t)=>(0,C.jsx)(w.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));j.displayName="VisuallyHidden";var k=r(15587),T=r(64065),N=[" ","Enter","ArrowUp","ArrowDown"],R=[" ","Enter"],P="Select",[E,I,D]=(0,i.N)(P),[M,L]=(0,d.A)(P,[D,h.Bk]),A=(0,h.Bk)(),[H,_]=M(P),[B,V]=M(P),G=e=>{let{__scopeSelect:t,children:r,open:l,defaultOpen:o,onOpenChange:a,value:i,defaultValue:s,onValueChange:d,dir:c,name:p,autoComplete:v,disabled:m,required:w,form:g}=e,x=A(t),[b,S]=n.useState(null),[j,k]=n.useState(null),[T,N]=n.useState(!1),R=(0,u.jH)(c),[P=!1,I]=(0,y.i)({prop:l,defaultProp:o,onChange:a}),[D,M]=(0,y.i)({prop:i,defaultProp:s,onChange:d}),L=n.useRef(null),_=!b||g||!!b.closest("form"),[V,G]=n.useState(new Set),F=Array.from(V).map(e=>e.props.value).join(";");return(0,C.jsx)(h.bL,{...x,children:(0,C.jsxs)(H,{required:w,scope:t,trigger:b,onTriggerChange:S,valueNode:j,onValueNodeChange:k,valueNodeHasChildren:T,onValueNodeHasChildrenChange:N,contentId:(0,f.B)(),value:D,onValueChange:M,open:P,onOpenChange:I,dir:R,triggerPointerDownPosRef:L,disabled:m,children:[(0,C.jsx)(E.Provider,{scope:t,children:(0,C.jsx)(B,{scope:e.__scopeSelect,onNativeOptionAdd:n.useCallback(e=>{G(t=>new Set(t).add(e))},[]),onNativeOptionRemove:n.useCallback(e=>{G(t=>{let r=new Set(t);return r.delete(e),r})},[]),children:r})}),_?(0,C.jsxs)(eC,{"aria-hidden":!0,required:w,tabIndex:-1,name:p,autoComplete:v,value:D,onChange:e=>M(e.target.value),disabled:m,form:g,children:[void 0===D?(0,C.jsx)("option",{value:""}):null,Array.from(V)]},F):null]})})};G.displayName=P;var F="SelectTrigger",K=n.forwardRef((e,t)=>{let{__scopeSelect:r,disabled:l=!1,...o}=e,i=A(r),d=_(F,r),u=d.disabled||l,c=(0,s.s)(t,d.onTriggerChange),p=I(r),v=n.useRef("touch"),[f,m,g]=ej(e=>{let t=p().filter(e=>!e.disabled),r=t.find(e=>e.value===d.value),n=ek(t,e,r);void 0!==n&&d.onValueChange(n.value)}),x=e=>{u||(d.onOpenChange(!0),g()),e&&(d.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,C.jsx)(h.Mz,{asChild:!0,...i,children:(0,C.jsx)(w.sG.button,{type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:u,"data-disabled":u?"":void 0,"data-placeholder":eS(d.value)?"":void 0,...o,ref:c,onClick:(0,a.m)(o.onClick,e=>{e.currentTarget.focus(),"mouse"!==v.current&&x(e)}),onPointerDown:(0,a.m)(o.onPointerDown,e=>{v.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(x(e),e.preventDefault())}),onKeyDown:(0,a.m)(o.onKeyDown,e=>{let t=""!==f.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&N.includes(e.key)&&(x(),e.preventDefault())})})})});K.displayName=F;var O="SelectValue",W=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:n,style:l,children:o,placeholder:a="",...i}=e,d=_(O,r),{onValueNodeHasChildrenChange:u}=d,c=void 0!==o,p=(0,s.s)(t,d.onValueNodeChange);return(0,b.N)(()=>{u(c)},[u,c]),(0,C.jsx)(w.sG.span,{...i,ref:p,style:{pointerEvents:"none"},children:eS(d.value)?(0,C.jsx)(C.Fragment,{children:a}):o})});W.displayName=O;var U=n.forwardRef((e,t)=>{let{__scopeSelect:r,children:n,...l}=e;return(0,C.jsx)(w.sG.span,{"aria-hidden":!0,...l,ref:t,children:n||"▼"})});U.displayName="SelectIcon";var z=e=>(0,C.jsx)(m.Z,{asChild:!0,...e});z.displayName="SelectPortal";var q="SelectContent",Z=n.forwardRef((e,t)=>{let r=_(q,e.__scopeSelect),[o,a]=n.useState();return((0,b.N)(()=>{a(new DocumentFragment)},[]),r.open)?(0,C.jsx)(J,{...e,ref:t}):o?l.createPortal((0,C.jsx)(X,{scope:e.__scopeSelect,children:(0,C.jsx)(E.Slot,{scope:e.__scopeSelect,children:(0,C.jsx)("div",{children:e.children})})}),o):null});Z.displayName=q;var[X,Y]=M(q),J=n.forwardRef((e,t)=>{let{__scopeSelect:r,position:l="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:i,onPointerDownOutside:d,side:u,sideOffset:f,align:h,alignOffset:m,arrowPadding:w,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:S,avoidCollisions:j,...N}=e,R=_(q,r),[P,E]=n.useState(null),[D,M]=n.useState(null),L=(0,s.s)(t,e=>E(e)),[A,H]=n.useState(null),[B,V]=n.useState(null),G=I(r),[F,K]=n.useState(!1),O=n.useRef(!1);n.useEffect(()=>{if(P)return(0,k.Eq)(P)},[P]),(0,p.Oh)();let W=n.useCallback(e=>{let[t,...r]=G().map(e=>e.ref.current),[n]=r.slice(-1),l=document.activeElement;for(let r of e)if(r===l||(null==r||r.scrollIntoView({block:"nearest"}),r===t&&D&&(D.scrollTop=0),r===n&&D&&(D.scrollTop=D.scrollHeight),null==r||r.focus(),document.activeElement!==l))return},[G,D]),U=n.useCallback(()=>W([A,P]),[W,A,P]);n.useEffect(()=>{F&&U()},[F,U]);let{onOpenChange:z,triggerPointerDownPosRef:Z}=R;n.useEffect(()=>{if(P){let e={x:0,y:0},t=t=>{var r,n,l,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(l=null===(r=Z.current)||void 0===r?void 0:r.x)&&void 0!==l?l:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(n=Z.current)||void 0===n?void 0:n.y)&&void 0!==o?o:0))}},r=r=>{e.x<=10&&e.y<=10?r.preventDefault():P.contains(r.target)||z(!1),document.removeEventListener("pointermove",t),Z.current=null};return null!==Z.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",r,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r,{capture:!0})}}},[P,z,Z]),n.useEffect(()=>{let e=()=>z(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[z]);let[Y,J]=ej(e=>{let t=G().filter(e=>!e.disabled),r=t.find(e=>e.ref.current===document.activeElement),n=ek(t,e,r);n&&setTimeout(()=>n.ref.current.focus())}),ee=n.useCallback((e,t,r)=>{let n=!O.current&&!r;(void 0!==R.value&&R.value===t||n)&&(H(e),n&&(O.current=!0))},[R.value]),et=n.useCallback(()=>null==P?void 0:P.focus(),[P]),er=n.useCallback((e,t,r)=>{let n=!O.current&&!r;(void 0!==R.value&&R.value===t||n)&&V(e)},[R.value]),en="popper"===l?$:Q,el=en===$?{side:u,sideOffset:f,align:h,alignOffset:m,arrowPadding:w,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:S,avoidCollisions:j}:{};return(0,C.jsx)(X,{scope:r,content:P,viewport:D,onViewportChange:M,itemRefCallback:ee,selectedItem:A,onItemLeave:et,itemTextRefCallback:er,focusSelectedItem:U,selectedItemText:B,position:l,isPositioned:F,searchRef:Y,children:(0,C.jsx)(T.A,{as:g.DX,allowPinchZoom:!0,children:(0,C.jsx)(v.n,{asChild:!0,trapped:R.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,a.m)(o,e=>{var t;null===(t=R.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()}),children:(0,C.jsx)(c.qW,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:d,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>R.onOpenChange(!1),children:(0,C.jsx)(en,{role:"listbox",id:R.contentId,"data-state":R.open?"open":"closed",dir:R.dir,onContextMenu:e=>e.preventDefault(),...N,...el,onPlaced:()=>K(!0),ref:L,style:{display:"flex",flexDirection:"column",outline:"none",...N.style},onKeyDown:(0,a.m)(N.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||J(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=G().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let r=e.target,n=t.indexOf(r);t=t.slice(n+1)}setTimeout(()=>W(t)),e.preventDefault()}})})})})})})});J.displayName="SelectContentImpl";var Q=n.forwardRef((e,t)=>{let{__scopeSelect:r,onPlaced:l,...a}=e,i=_(q,r),d=Y(q,r),[u,c]=n.useState(null),[p,v]=n.useState(null),f=(0,s.s)(t,e=>v(e)),h=I(r),m=n.useRef(!1),g=n.useRef(!0),{viewport:x,selectedItem:y,selectedItemText:S,focusSelectedItem:j}=d,k=n.useCallback(()=>{if(i.trigger&&i.valueNode&&u&&p&&x&&y&&S){let e=i.trigger.getBoundingClientRect(),t=p.getBoundingClientRect(),r=i.valueNode.getBoundingClientRect(),n=S.getBoundingClientRect();if("rtl"!==i.dir){let l=n.left-t.left,a=r.left-l,i=e.left-a,s=e.width+i,d=Math.max(s,t.width),c=o(a,[10,Math.max(10,window.innerWidth-10-d)]);u.style.minWidth=s+"px",u.style.left=c+"px"}else{let l=t.right-n.right,a=window.innerWidth-r.right-l,i=window.innerWidth-e.right-a,s=e.width+i,d=Math.max(s,t.width),c=o(a,[10,Math.max(10,window.innerWidth-10-d)]);u.style.minWidth=s+"px",u.style.right=c+"px"}let a=h(),s=window.innerHeight-20,d=x.scrollHeight,c=window.getComputedStyle(p),v=parseInt(c.borderTopWidth,10),f=parseInt(c.paddingTop,10),w=parseInt(c.borderBottomWidth,10),g=v+f+d+parseInt(c.paddingBottom,10)+w,b=Math.min(5*y.offsetHeight,g),C=window.getComputedStyle(x),j=parseInt(C.paddingTop,10),k=parseInt(C.paddingBottom,10),T=e.top+e.height/2-10,N=y.offsetHeight/2,R=v+f+(y.offsetTop+N);if(R<=T){let e=a.length>0&&y===a[a.length-1].ref.current;u.style.bottom="0px";let t=Math.max(s-T,N+(e?k:0)+(p.clientHeight-x.offsetTop-x.offsetHeight)+w);u.style.height=R+t+"px"}else{let e=a.length>0&&y===a[0].ref.current;u.style.top="0px";let t=Math.max(T,v+x.offsetTop+(e?j:0)+N);u.style.height=t+(g-R)+"px",x.scrollTop=R-T+x.offsetTop}u.style.margin="".concat(10,"px 0"),u.style.minHeight=b+"px",u.style.maxHeight=s+"px",null==l||l(),requestAnimationFrame(()=>m.current=!0)}},[h,i.trigger,i.valueNode,u,p,x,y,S,i.dir,l]);(0,b.N)(()=>k(),[k]);let[T,N]=n.useState();(0,b.N)(()=>{p&&N(window.getComputedStyle(p).zIndex)},[p]);let R=n.useCallback(e=>{e&&!0===g.current&&(k(),null==j||j(),g.current=!1)},[k,j]);return(0,C.jsx)(ee,{scope:r,contentWrapper:u,shouldExpandOnScrollRef:m,onScrollButtonChange:R,children:(0,C.jsx)("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:T},children:(0,C.jsx)(w.sG.div,{...a,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});Q.displayName="SelectItemAlignedPosition";var $=n.forwardRef((e,t)=>{let{__scopeSelect:r,align:n="start",collisionPadding:l=10,...o}=e,a=A(r);return(0,C.jsx)(h.UC,{...a,...o,ref:t,align:n,collisionPadding:l,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});$.displayName="SelectPopperPosition";var[ee,et]=M(q,{}),er="SelectViewport",en=n.forwardRef((e,t)=>{let{__scopeSelect:r,nonce:l,...o}=e,i=Y(er,r),d=et(er,r),u=(0,s.s)(t,i.onViewportChange),c=n.useRef(0);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),(0,C.jsx)(E.Slot,{scope:r,children:(0,C.jsx)(w.sG.div,{"data-radix-select-viewport":"",role:"presentation",...o,ref:u,style:{position:"relative",flex:1,overflow:"hidden auto",...o.style},onScroll:(0,a.m)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:r,shouldExpandOnScrollRef:n}=d;if((null==n?void 0:n.current)&&r){let e=Math.abs(c.current-t.scrollTop);if(e>0){let n=window.innerHeight-20,l=Math.max(parseFloat(r.style.minHeight),parseFloat(r.style.height));if(l<n){let o=l+e,a=Math.min(n,o),i=o-a;r.style.height=a+"px","0px"===r.style.bottom&&(t.scrollTop=i>0?i:0,r.style.justifyContent="flex-end")}}}c.current=t.scrollTop})})})]})});en.displayName=er;var el="SelectGroup",[eo,ea]=M(el);n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=(0,f.B)();return(0,C.jsx)(eo,{scope:r,id:l,children:(0,C.jsx)(w.sG.div,{role:"group","aria-labelledby":l,...n,ref:t})})}).displayName=el;var ei="SelectLabel";n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=ea(ei,r);return(0,C.jsx)(w.sG.div,{id:l.id,...n,ref:t})}).displayName=ei;var es="SelectItem",[ed,eu]=M(es),ec=n.forwardRef((e,t)=>{let{__scopeSelect:r,value:l,disabled:o=!1,textValue:i,...d}=e,u=_(es,r),c=Y(es,r),p=u.value===l,[v,h]=n.useState(null!=i?i:""),[m,g]=n.useState(!1),x=(0,s.s)(t,e=>{var t;return null===(t=c.itemRefCallback)||void 0===t?void 0:t.call(c,e,l,o)}),y=(0,f.B)(),b=n.useRef("touch"),S=()=>{o||(u.onValueChange(l),u.onOpenChange(!1))};if(""===l)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,C.jsx)(ed,{scope:r,value:l,disabled:o,textId:y,isSelected:p,onItemTextChange:n.useCallback(e=>{h(t=>{var r;return t||(null!==(r=null==e?void 0:e.textContent)&&void 0!==r?r:"").trim()})},[]),children:(0,C.jsx)(E.ItemSlot,{scope:r,value:l,disabled:o,textValue:v,children:(0,C.jsx)(w.sG.div,{role:"option","aria-labelledby":y,"data-highlighted":m?"":void 0,"aria-selected":p&&m,"data-state":p?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...d,ref:x,onFocus:(0,a.m)(d.onFocus,()=>g(!0)),onBlur:(0,a.m)(d.onBlur,()=>g(!1)),onClick:(0,a.m)(d.onClick,()=>{"mouse"!==b.current&&S()}),onPointerUp:(0,a.m)(d.onPointerUp,()=>{"mouse"===b.current&&S()}),onPointerDown:(0,a.m)(d.onPointerDown,e=>{b.current=e.pointerType}),onPointerMove:(0,a.m)(d.onPointerMove,e=>{if(b.current=e.pointerType,o){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}else"mouse"===b.current&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,a.m)(d.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}}),onKeyDown:(0,a.m)(d.onKeyDown,e=>{var t;((null===(t=c.searchRef)||void 0===t?void 0:t.current)===""||" "!==e.key)&&(R.includes(e.key)&&S()," "===e.key&&e.preventDefault())})})})})});ec.displayName=es;var ep="SelectItemText",ev=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:o,style:a,...i}=e,d=_(ep,r),u=Y(ep,r),c=eu(ep,r),p=V(ep,r),[v,f]=n.useState(null),h=(0,s.s)(t,e=>f(e),c.onItemTextChange,e=>{var t;return null===(t=u.itemTextRefCallback)||void 0===t?void 0:t.call(u,e,c.value,c.disabled)}),m=null==v?void 0:v.textContent,g=n.useMemo(()=>(0,C.jsx)("option",{value:c.value,disabled:c.disabled,children:m},c.value),[c.disabled,c.value,m]),{onNativeOptionAdd:x,onNativeOptionRemove:y}=p;return(0,b.N)(()=>(x(g),()=>y(g)),[x,y,g]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w.sG.span,{id:c.textId,...i,ref:h}),c.isSelected&&d.valueNode&&!d.valueNodeHasChildren?l.createPortal(i.children,d.valueNode):null]})});ev.displayName=ep;var ef="SelectItemIndicator",eh=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return eu(ef,r).isSelected?(0,C.jsx)(w.sG.span,{"aria-hidden":!0,...n,ref:t}):null});eh.displayName=ef;var em="SelectScrollUpButton",ew=n.forwardRef((e,t)=>{let r=Y(em,e.__scopeSelect),l=et(em,e.__scopeSelect),[o,a]=n.useState(!1),i=(0,s.s)(t,l.onScrollButtonChange);return(0,b.N)(()=>{if(r.viewport&&r.isPositioned){let e=function(){a(t.scrollTop>0)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,C.jsx)(ey,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null});ew.displayName=em;var eg="SelectScrollDownButton",ex=n.forwardRef((e,t)=>{let r=Y(eg,e.__scopeSelect),l=et(eg,e.__scopeSelect),[o,a]=n.useState(!1),i=(0,s.s)(t,l.onScrollButtonChange);return(0,b.N)(()=>{if(r.viewport&&r.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight;a(Math.ceil(t.scrollTop)<e)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,C.jsx)(ey,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null});ex.displayName=eg;var ey=n.forwardRef((e,t)=>{let{__scopeSelect:r,onAutoScroll:l,...o}=e,i=Y("SelectScrollButton",r),s=n.useRef(null),d=I(r),u=n.useCallback(()=>{null!==s.current&&(window.clearInterval(s.current),s.current=null)},[]);return n.useEffect(()=>()=>u(),[u]),(0,b.N)(()=>{var e;let t=d().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[d]),(0,C.jsx)(w.sG.div,{"aria-hidden":!0,...o,ref:t,style:{flexShrink:0,...o.style},onPointerDown:(0,a.m)(o.onPointerDown,()=>{null===s.current&&(s.current=window.setInterval(l,50))}),onPointerMove:(0,a.m)(o.onPointerMove,()=>{var e;null===(e=i.onItemLeave)||void 0===e||e.call(i),null===s.current&&(s.current=window.setInterval(l,50))}),onPointerLeave:(0,a.m)(o.onPointerLeave,()=>{u()})})});n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return(0,C.jsx)(w.sG.div,{"aria-hidden":!0,...n,ref:t})}).displayName="SelectSeparator";var eb="SelectArrow";function eS(e){return""===e||void 0===e}n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=A(r),o=_(eb,r),a=Y(eb,r);return o.open&&"popper"===a.position?(0,C.jsx)(h.i3,{...l,...n,ref:t}):null}).displayName=eb;var eC=n.forwardRef((e,t)=>{let{value:r,...l}=e,o=n.useRef(null),a=(0,s.s)(t,o),i=(0,S.Z)(r);return n.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(i!==r&&t){let n=new Event("change",{bubbles:!0});t.call(e,r),e.dispatchEvent(n)}},[i,r]),(0,C.jsx)(j,{asChild:!0,children:(0,C.jsx)("select",{...l,ref:a,defaultValue:r})})});function ej(e){let t=(0,x.c)(e),r=n.useRef(""),l=n.useRef(0),o=n.useCallback(e=>{let n=r.current+e;t(n),function e(t){r.current=t,window.clearTimeout(l.current),""!==t&&(l.current=window.setTimeout(()=>e(""),1e3))}(n)},[t]),a=n.useCallback(()=>{r.current="",window.clearTimeout(l.current)},[]);return n.useEffect(()=>()=>window.clearTimeout(l.current),[]),[r,o,a]}function ek(e,t,r){var n,l;let o=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,a=r?e.indexOf(r):-1,i=(n=e,l=Math.max(a,0),n.map((e,t)=>n[(l+t)%n.length]));1===o.length&&(i=i.filter(e=>e!==r));let s=i.find(e=>e.textValue.toLowerCase().startsWith(o.toLowerCase()));return s!==r?s:void 0}eC.displayName="BubbleSelect";var eT=G,eN=K,eR=W,eP=U,eE=z,eI=Z,eD=en,eM=ec,eL=ev,eA=eh,eH=ew,e_=ex},91902:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(67401).A)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},98867:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(67401).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])}}]);