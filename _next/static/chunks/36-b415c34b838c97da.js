"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36],{36:(t,e,n)=>{n.d(e,{Q:()=>s});var r=n(36561),a=n(90518),i=n(12800),o=n(66963),l=n(94430),s=(0,r.gu)({chartName:"AreaChart",GraphicalChild:a.G,axisComponents:[{axisType:"xAxis",AxisComp:i.W},{axisType:"yAxis",AxisComp:o.h}],formatAxisMap:l.pr})},90518:(t,e,n)=>{n.d(e,{G:()=>W});var r=n(12115),a=n(43463),i=n(29479),o=n(33196),l=n.n(o),s=n(77066),c=n.n(s),u=n(87727),p=n.n(u),y=n(58845),f=n.n(y),h=n(41436),d=n.n(h),m=n(12027),v=n(89085),b=n(26941),A=n(40654),x=n(27878),g=n(82954),O=n(95286),P=n(12401),E=["layout","type","stroke","connectNulls","isRange","ref"],j=["key"];function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function S(){return(S=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach(function(e){B(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,R(r.key),r)}}function L(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(L=function(){return!!t})()}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t,e){return(C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function B(t,e,n){return(e=R(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R(t){var e=function(t,e){if("object"!=k(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=k(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==k(e)?e:e+""}var W=function(t){var e,n;function o(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,o);for(var t,e,n,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=o,n=[].concat(a),e=I(e),B(t=function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,L()?Reflect.construct(e,n||[],I(this).constructor):e.apply(this,n)),"state",{isAnimationFinished:!0}),B(t,"id",(0,g.NF)("recharts-area-")),B(t,"handleAnimationEnd",function(){var e=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),l()(e)&&e()}),B(t,"handleAnimationStart",function(){var e=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),l()(e)&&e()}),t}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(o,t),e=[{key:"renderDots",value:function(t,e,n){var a=this.props.isAnimationActive,i=this.state.isAnimationFinished;if(a&&!i)return null;var l=this.props,s=l.dot,c=l.points,u=l.dataKey,p=(0,P.J9)(this.props,!1),y=(0,P.J9)(s,!0),f=c.map(function(t,e){var n=N(N(N({key:"dot-".concat(e),r:3},p),y),{},{index:e,cx:t.x,cy:t.y,dataKey:u,value:t.value,payload:t.payload,points:c});return o.renderDotItem(s,n)}),h={clipPath:t?"url(#clipPath-".concat(e?"":"dots-").concat(n,")"):null};return r.createElement(b.W,S({className:"recharts-area-dots"},h),f)}},{key:"renderHorizontalRect",value:function(t){var e=this.props,n=e.baseLine,a=e.points,i=e.strokeWidth,o=a[0].x,l=a[a.length-1].x,s=t*Math.abs(o-l),u=c()(a.map(function(t){return t.y||0}));return((0,g.Et)(n)&&"number"==typeof n?u=Math.max(n,u):n&&Array.isArray(n)&&n.length&&(u=Math.max(c()(n.map(function(t){return t.y||0})),u)),(0,g.Et)(u))?r.createElement("rect",{x:o<l?o:o-s,y:0,width:s,height:Math.floor(u+(i?parseInt("".concat(i),10):1))}):null}},{key:"renderVerticalRect",value:function(t){var e=this.props,n=e.baseLine,a=e.points,i=e.strokeWidth,o=a[0].y,l=a[a.length-1].y,s=t*Math.abs(o-l),u=c()(a.map(function(t){return t.x||0}));return((0,g.Et)(n)&&"number"==typeof n?u=Math.max(n,u):n&&Array.isArray(n)&&n.length&&(u=Math.max(c()(n.map(function(t){return t.x||0})),u)),(0,g.Et)(u))?r.createElement("rect",{x:0,y:o<l?o:o-s,width:u+(i?parseInt("".concat(i),10):1),height:Math.floor(s)}):null}},{key:"renderClipRect",value:function(t){return"vertical"===this.props.layout?this.renderVerticalRect(t):this.renderHorizontalRect(t)}},{key:"renderAreaStatically",value:function(t,e,n,a){var i=this.props,o=i.layout,l=i.type,s=i.stroke,c=i.connectNulls,u=i.isRange,p=(i.ref,w(i,E));return r.createElement(b.W,{clipPath:n?"url(#clipPath-".concat(a,")"):null},r.createElement(m.I,S({},(0,P.J9)(p,!0),{points:t,connectNulls:c,type:l,baseLine:e,layout:o,stroke:"none",className:"recharts-area-area"})),"none"!==s&&r.createElement(m.I,S({},(0,P.J9)(this.props,!1),{className:"recharts-area-curve",layout:o,type:l,connectNulls:c,fill:"none",points:t})),"none"!==s&&u&&r.createElement(m.I,S({},(0,P.J9)(this.props,!1),{className:"recharts-area-curve",layout:o,type:l,connectNulls:c,fill:"none",points:e})))}},{key:"renderAreaWithAnimation",value:function(t,e){var n=this,a=this.props,o=a.points,l=a.baseLine,s=a.isAnimationActive,c=a.animationBegin,u=a.animationDuration,y=a.animationEasing,h=a.animationId,d=this.state,m=d.prevPoints,v=d.prevBaseLine;return r.createElement(i.Ay,{begin:c,duration:u,isActive:s,easing:y,from:{t:0},to:{t:1},key:"area-".concat(h),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(a){var i=a.t;if(m){var s,c=m.length/o.length,u=o.map(function(t,e){var n=Math.floor(e*c);if(m[n]){var r=m[n],a=(0,g.Dj)(r.x,t.x),o=(0,g.Dj)(r.y,t.y);return N(N({},t),{},{x:a(i),y:o(i)})}return t});return s=(0,g.Et)(l)&&"number"==typeof l?(0,g.Dj)(v,l)(i):p()(l)||f()(l)?(0,g.Dj)(v,0)(i):l.map(function(t,e){var n=Math.floor(e*c);if(v[n]){var r=v[n],a=(0,g.Dj)(r.x,t.x),o=(0,g.Dj)(r.y,t.y);return N(N({},t),{},{x:a(i),y:o(i)})}return t}),n.renderAreaStatically(u,s,t,e)}return r.createElement(b.W,null,r.createElement("defs",null,r.createElement("clipPath",{id:"animationClipPath-".concat(e)},n.renderClipRect(i))),r.createElement(b.W,{clipPath:"url(#animationClipPath-".concat(e,")")},n.renderAreaStatically(o,l,t,e)))})}},{key:"renderArea",value:function(t,e){var n=this.props,r=n.points,a=n.baseLine,i=n.isAnimationActive,o=this.state,l=o.prevPoints,s=o.prevBaseLine,c=o.totalLength;return i&&r&&r.length&&(!l&&c>0||!d()(l,r)||!d()(s,a))?this.renderAreaWithAnimation(t,e):this.renderAreaStatically(r,a,t,e)}},{key:"render",value:function(){var t,e=this.props,n=e.hide,i=e.dot,o=e.points,l=e.className,s=e.top,c=e.left,u=e.xAxis,y=e.yAxis,f=e.width,h=e.height,d=e.isAnimationActive,m=e.id;if(n||!o||!o.length)return null;var v=this.state.isAnimationFinished,x=1===o.length,g=(0,a.A)("recharts-area",l),O=u&&u.allowDataOverflow,E=y&&y.allowDataOverflow,j=O||E,k=p()(m)?this.id:m,w=null!==(t=(0,P.J9)(i,!1))&&void 0!==t?t:{r:3,strokeWidth:2},S=w.r,D=w.strokeWidth,N=((0,P.sT)(i)?i:{}).clipDot,M=void 0===N||N,L=2*(void 0===S?3:S)+(void 0===D?2:D);return r.createElement(b.W,{className:g},O||E?r.createElement("defs",null,r.createElement("clipPath",{id:"clipPath-".concat(k)},r.createElement("rect",{x:O?c:c-f/2,y:E?s:s-h/2,width:O?f:2*f,height:E?h:2*h})),!M&&r.createElement("clipPath",{id:"clipPath-dots-".concat(k)},r.createElement("rect",{x:c-L/2,y:s-L/2,width:f+L,height:h+L}))):null,x?null:this.renderArea(j,k),(i||x)&&this.renderDots(j,M,k),(!d||v)&&A.Z.renderCallByParent(this.props,o))}}],n=[{key:"getDerivedStateFromProps",value:function(t,e){return t.animationId!==e.prevAnimationId?{prevAnimationId:t.animationId,curPoints:t.points,curBaseLine:t.baseLine,prevPoints:e.curPoints,prevBaseLine:e.curBaseLine}:t.points!==e.curPoints||t.baseLine!==e.curBaseLine?{curPoints:t.points,curBaseLine:t.baseLine}:null}}],e&&M(o.prototype,e),n&&M(o,n),Object.defineProperty(o,"prototype",{writable:!1}),o}(r.PureComponent);B(W,"displayName","Area"),B(W,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!x.m.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"}),B(W,"getBaseValue",function(t,e,n,r){var a=t.layout,i=t.baseValue,o=e.props.baseValue,l=null!=o?o:i;if((0,g.Et)(l)&&"number"==typeof l)return l;var s="horizontal"===a?r:n,c=s.scale.domain();if("number"===s.type){var u=Math.max(c[0],c[1]),p=Math.min(c[0],c[1]);return"dataMin"===l?p:"dataMax"===l?u:u<0?u:Math.max(Math.min(c[0],c[1]),0)}return"dataMin"===l?c[0]:"dataMax"===l?c[1]:c[0]}),B(W,"getComposedData",function(t){var e,n=t.props,r=t.item,a=t.xAxis,i=t.yAxis,o=t.xAxisTicks,l=t.yAxisTicks,s=t.bandSize,c=t.dataKey,u=t.stackedData,p=t.dataStartIndex,y=t.displayedData,f=t.offset,h=n.layout,d=u&&u.length,m=W.getBaseValue(n,r,a,i),v="horizontal"===h,b=!1,A=y.map(function(t,e){d?n=u[p+e]:Array.isArray(n=(0,O.kr)(t,c))?b=!0:n=[m,n];var n,r=null==n[1]||d&&null==(0,O.kr)(t,c);return v?{x:(0,O.nb)({axis:a,ticks:o,bandSize:s,entry:t,index:e}),y:r?null:i.scale(n[1]),value:n,payload:t}:{x:r?null:a.scale(n[1]),y:(0,O.nb)({axis:i,ticks:l,bandSize:s,entry:t,index:e}),value:n,payload:t}});return e=d||b?A.map(function(t){var e=Array.isArray(t.value)?t.value[0]:null;return v?{x:t.x,y:null!=e&&null!=t.y?i.scale(e):null}:{x:null!=e?a.scale(e):null,y:t.y}}):v?i.scale(m):a.scale(m),N({points:A,baseLine:e,layout:h,isRange:b},f)}),B(W,"renderDotItem",function(t,e){var n;if(r.isValidElement(t))n=r.cloneElement(t,e);else if(l()(t))n=t(e);else{var i=(0,a.A)("recharts-area-dot","boolean"!=typeof t?t.className:""),o=e.key,s=w(e,j);n=r.createElement(v.c,S({},s,{key:o,className:i}))}return n})}}]);