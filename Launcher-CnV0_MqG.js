const GAME_ZIP_REPO2_ROOT="https://cdn.jsdelivr.net/gh/teamschoolcomu/2@6773da7b2da83d6f7e5a970bf75a63908558963c/";
const GAME_ZIP_REPO4_ROOT="https://cdn.jsdelivr.net/gh/teamschoolcomu/4@b07b47fd02bb39126a7f1b801b9c1d3702a9908d/";
import{c as createStyled,r as resolveProps,u as useTheme,a as reactExports,e as extendSxProp$1,j as jsxRuntimeExports,b as clsx,h as handleBreakpoints,d as resolveBreakpointValues,f as createUnarySpacing,g as deepmerge,m as mergeBreakpointsInOrder,i as composeClasses,k as generateUtilityClass,l as createTheme,n as getValue,o as defaultTheme$1,T as THEME_ID,p as generateUtilityClasses,q as useDefaultProps,s as internal_createExtendSxProp,t as styled$1,v as capitalize,w as memoTheme,x as createSimplePaletteValueFilter,y as resolveComponentProps,z as mergeSlotProps$1,A as useForkRef,B as appendOwnerState,C as getReactElementRef,D as useEnhancedEffect,E as reactDomExports,F as ownerDocument,G as useRtl,H as ownerWindow,I as useEventCallback,J as debounce$1,K as globalCss,L as formatMuiErrorMessage,M as createSvgIcon,N as useSlot,O as Fade,P as Paper,Q as ButtonBase,R as rootShouldForwardProp,S as extractEventHandlers,U as Grow,V as useId,W as slotShouldForwardProp,X as clamp,Y as isFocusVisible,Z as useTheme$1,_ as useTimeout,$ as Timeout,a0 as Icon,a1 as useTranslation,a2 as Box,a3 as CircularProgress,a4 as throwExpression,a5 as YaGamesContext,a6 as dispatch,a7 as openSnackbar,a8 as Button,a9 as useSelector,aa as map,ab as name,ac as alpha,ad as flow,ae as publicServers,af as ConfigContext,ag as removeServer,ah as addServer}from"./index-Bsf2IdFa.js";const styled=createStyled();function getThemeProps(t){const{theme:r,name:n,props:a}=t;return!r||!r.components||!r.components[n]||!r.components[n].defaultProps?a:resolveProps(r.components[n].defaultProps,a)}function useThemeProps$1({props:t,name:r,defaultTheme:n,themeId:a}){let o=useTheme(n);return a&&(o=o[a]||o),getThemeProps({theme:o,name:r,props:t})}function isMuiElement(t,r){return reactExports.isValidElement(t)&&r.indexOf(t.type.muiName??t.type?._payload?.value?.muiName)!==-1}const defaultTheme=createTheme(),defaultCreateStyledComponent=styled("div",{name:"MuiStack",slot:"Root"});function useThemePropsDefault(t){return useThemeProps$1({props:t,name:"MuiStack",defaultTheme})}function joinChildren(t,r){const n=reactExports.Children.toArray(t).filter(Boolean);return n.reduce((a,o,l)=>(a.push(o),l<n.length-1&&a.push(reactExports.cloneElement(r,{key:`separator-${l}`})),a),[])}const getSideFromDirection=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],style=({ownerState:t,theme:r})=>{let n={display:"flex",flexDirection:"column",...handleBreakpoints({theme:r},resolveBreakpointValues({values:t.direction,breakpoints:r.breakpoints.values}),a=>({flexDirection:a}))};if(t.spacing){const a=createUnarySpacing(r),o=Object.keys(r.breakpoints.values).reduce((u,p)=>((typeof t.spacing=="object"&&t.spacing[p]!=null||typeof t.direction=="object"&&t.direction[p]!=null)&&(u[p]=!0),u),{}),l=resolveBreakpointValues({values:t.direction,base:o}),c=resolveBreakpointValues({values:t.spacing,base:o});typeof l=="object"&&Object.keys(l).forEach((u,p,d)=>{if(!l[u]){const f=p>0?l[d[p-1]]:"column";l[u]=f}}),n=deepmerge(n,handleBreakpoints({theme:r},c,(u,p)=>t.useFlexGap?{gap:getValue(a,u)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${getSideFromDirection(p?l[p]:t.direction)}`]:getValue(a,u)}}))}return n=mergeBreakpointsInOrder(r.breakpoints,n),n};function createStack(t={}){const{createStyledComponent:r=defaultCreateStyledComponent,useThemeProps:n=useThemePropsDefault,componentName:a="MuiStack"}=t,o=()=>composeClasses({root:["root"]},u=>generateUtilityClass(a,u),{}),l=r(style);return reactExports.forwardRef(function(u,p){const d=n(u),m=extendSxProp$1(d),{component:f="div",direction:g="column",spacing:E=0,divider:x,children:v,className:h,useFlexGap:b=!1,...S}=m,y={direction:g,spacing:E,useFlexGap:b},T=o();return jsxRuntimeExports.jsx(l,{as:f,ownerState:y,ref:p,className:clsx(T.root,h),...S,children:x?joinChildren(v,x):v})})}function useThemeProps({props:t,name:r}){return useThemeProps$1({props:t,name:r,defaultTheme:defaultTheme$1,themeId:THEME_ID})}function createChainedFunction(...t){return t.reduce((r,n)=>n==null?r:function(...o){r.apply(this,o),n.apply(this,o)},()=>{})}function setRef(t,r){typeof t=="function"?t(r):t&&(t.current=r)}function useControlled(t){const{controlled:r,default:n,name:a,state:o="value"}=t,{current:l}=reactExports.useRef(r!==void 0),[c,_]=reactExports.useState(n),u=l?r:c,p=reactExports.useCallback(d=>{l||_(d)},[]);return[u,p]}function isEventHandler(t,r){const n=t.charCodeAt(2);return t[0]==="o"&&t[1]==="n"&&n>=65&&n<=90&&typeof r=="function"}function mergeSlotProps(t,r){if(!t)return r;function n(c,_){const u={};return Object.keys(_).forEach(p=>{isEventHandler(p,_[p])&&typeof c[p]=="function"&&(u[p]=(...d)=>{c[p](...d),_[p](...d)})}),u}if(typeof t=="function"||typeof r=="function")return c=>{const _=typeof r=="function"?r(c):r,u=typeof t=="function"?t({...c,..._}):t,p=clsx(c?.className,_?.className,u?.className),d=n(u,_);return{..._,...u,...d,...!!p&&{className:p},..._?.style&&u?.style&&{style:{..._.style,...u.style}},..._?.sx&&u?.sx&&{sx:[...Array.isArray(_.sx)?_.sx:[_.sx],...Array.isArray(u.sx)?u.sx:[u.sx]]}}};const a=r,o=n(t,a),l=clsx(a?.className,t?.className);return{...r,...t,...o,...!!l&&{className:l},...a?.style&&t?.style&&{style:{...a.style,...t.style}},...a?.sx&&t?.sx&&{sx:[...Array.isArray(a.sx)?a.sx:[a.sx],...Array.isArray(t.sx)?t.sx:[t.sx]]}}}function getTypographyUtilityClass(t){return generateUtilityClass("MuiTypography",t)}const typographyClasses=generateUtilityClasses("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]),v6Colors={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},extendSxProp=internal_createExtendSxProp(),useUtilityClasses$E=t=>{const{align:r,gutterBottom:n,noWrap:a,paragraph:o,variant:l,classes:c}=t,_={root:["root",l,t.align!=="inherit"&&`align${capitalize(r)}`,n&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return composeClasses(_,getTypographyUtilityClass,c)},TypographyRoot=styled$1("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.variant&&r[n.variant],n.align!=="inherit"&&r[`align${capitalize(n.align)}`],n.noWrap&&r.noWrap,n.gutterBottom&&r.gutterBottom,n.paragraph&&r.paragraph]}})(memoTheme(({theme:t})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([r,n])=>r!=="inherit"&&n&&typeof n=="object").map(([r,n])=>({props:{variant:r},style:n})),...Object.entries(t.palette).filter(createSimplePaletteValueFilter()).map(([r])=>({props:{color:r},style:{color:(t.vars||t).palette[r].main}})),...Object.entries(t.palette?.text||{}).filter(([,r])=>typeof r=="string").map(([r])=>({props:{color:`text${capitalize(r)}`},style:{color:(t.vars||t).palette.text[r]}})),{props:({ownerState:r})=>r.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:r})=>r.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:r})=>r.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:r})=>r.paragraph,style:{marginBottom:16}}]}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Typography=reactExports.forwardRef(function(r,n){const{color:a,...o}=useDefaultProps({props:r,name:"MuiTypography"}),l=!v6Colors[a],c=extendSxProp({...o,...l&&{color:a}}),{align:_="inherit",className:u,component:p,gutterBottom:d=!1,noWrap:m=!1,paragraph:f=!1,variant:g="body1",variantMapping:E=defaultVariantMapping,...x}=c,v={...c,align:_,color:a,className:u,component:p,gutterBottom:d,noWrap:m,paragraph:f,variant:g,variantMapping:E},h=p||(f?"p":E[g]||defaultVariantMapping[g])||"span",b=useUtilityClasses$E(v);return jsxRuntimeExports.jsx(TypographyRoot,{as:h,ref:n,className:clsx(b.root,u),...x,ownerState:v,style:{..._!=="inherit"&&{"--Typography-textAlign":_},...x.style}})});var top="top",bottom="bottom",right="right",left="left",auto="auto",basePlacements=[top,bottom,right,left],start="start",end="end",clippingParents="clippingParents",viewport="viewport",popper="popper",reference="reference",variationPlacements=basePlacements.reduce(function(t,r){return t.concat([r+"-"+start,r+"-"+end])},[]),placements=[].concat(basePlacements,[auto]).reduce(function(t,r){return t.concat([r,r+"-"+start,r+"-"+end])},[]),beforeRead="beforeRead",read="read",afterRead="afterRead",beforeMain="beforeMain",main="main",afterMain="afterMain",beforeWrite="beforeWrite",write="write",afterWrite="afterWrite",modifierPhases=[beforeRead,read,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];function getNodeName(t){return t?(t.nodeName||"").toLowerCase():null}function getWindow(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var r=t.ownerDocument;return r&&r.defaultView||window}return t}function isElement(t){var r=getWindow(t).Element;return t instanceof r||t instanceof Element}function isHTMLElement$1(t){var r=getWindow(t).HTMLElement;return t instanceof r||t instanceof HTMLElement}function isShadowRoot(t){if(typeof ShadowRoot>"u")return!1;var r=getWindow(t).ShadowRoot;return t instanceof r||t instanceof ShadowRoot}function applyStyles(t){var r=t.state;Object.keys(r.elements).forEach(function(n){var a=r.styles[n]||{},o=r.attributes[n]||{},l=r.elements[n];!isHTMLElement$1(l)||!getNodeName(l)||(Object.assign(l.style,a),Object.keys(o).forEach(function(c){var _=o[c];_===!1?l.removeAttribute(c):l.setAttribute(c,_===!0?"":_)}))})}function effect$2(t){var r=t.state,n={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(r.elements.popper.style,n.popper),r.styles=n,r.elements.arrow&&Object.assign(r.elements.arrow.style,n.arrow),function(){Object.keys(r.elements).forEach(function(a){var o=r.elements[a],l=r.attributes[a]||{},c=Object.keys(r.styles.hasOwnProperty(a)?r.styles[a]:n[a]),_=c.reduce(function(u,p){return u[p]="",u},{});!isHTMLElement$1(o)||!getNodeName(o)||(Object.assign(o.style,_),Object.keys(l).forEach(function(u){o.removeAttribute(u)}))})}}const applyStyles$1={name:"applyStyles",enabled:!0,phase:"write",fn:applyStyles,effect:effect$2,requires:["computeStyles"]};function getBasePlacement(t){return t.split("-")[0]}var max=Math.max,min=Math.min,round$1=Math.round;function getUAString(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(r){return r.brand+"/"+r.version}).join(" "):navigator.userAgent}function isLayoutViewport(){return!/^((?!chrome|android).)*safari/i.test(getUAString())}function getBoundingClientRect(t,r,n){r===void 0&&(r=!1),n===void 0&&(n=!1);var a=t.getBoundingClientRect(),o=1,l=1;r&&isHTMLElement$1(t)&&(o=t.offsetWidth>0&&round$1(a.width)/t.offsetWidth||1,l=t.offsetHeight>0&&round$1(a.height)/t.offsetHeight||1);var c=isElement(t)?getWindow(t):window,_=c.visualViewport,u=!isLayoutViewport()&&n,p=(a.left+(u&&_?_.offsetLeft:0))/o,d=(a.top+(u&&_?_.offsetTop:0))/l,m=a.width/o,f=a.height/l;return{width:m,height:f,top:d,right:p+m,bottom:d+f,left:p,x:p,y:d}}function getLayoutRect(t){var r=getBoundingClientRect(t),n=t.offsetWidth,a=t.offsetHeight;return Math.abs(r.width-n)<=1&&(n=r.width),Math.abs(r.height-a)<=1&&(a=r.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:a}}function contains(t,r){var n=r.getRootNode&&r.getRootNode();if(t.contains(r))return!0;if(n&&isShadowRoot(n)){var a=r;do{if(a&&t.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function getComputedStyle(t){return getWindow(t).getComputedStyle(t)}function isTableElement(t){return["table","td","th"].indexOf(getNodeName(t))>=0}function getDocumentElement(t){return((isElement(t)?t.ownerDocument:t.document)||window.document).documentElement}function getParentNode(t){return getNodeName(t)==="html"?t:t.assignedSlot||t.parentNode||(isShadowRoot(t)?t.host:null)||getDocumentElement(t)}function getTrueOffsetParent(t){return!isHTMLElement$1(t)||getComputedStyle(t).position==="fixed"?null:t.offsetParent}function getContainingBlock(t){var r=/firefox/i.test(getUAString()),n=/Trident/i.test(getUAString());if(n&&isHTMLElement$1(t)){var a=getComputedStyle(t);if(a.position==="fixed")return null}var o=getParentNode(t);for(isShadowRoot(o)&&(o=o.host);isHTMLElement$1(o)&&["html","body"].indexOf(getNodeName(o))<0;){var l=getComputedStyle(o);if(l.transform!=="none"||l.perspective!=="none"||l.contain==="paint"||["transform","perspective"].indexOf(l.willChange)!==-1||r&&l.willChange==="filter"||r&&l.filter&&l.filter!=="none")return o;o=o.parentNode}return null}function getOffsetParent(t){for(var r=getWindow(t),n=getTrueOffsetParent(t);n&&isTableElement(n)&&getComputedStyle(n).position==="static";)n=getTrueOffsetParent(n);return n&&(getNodeName(n)==="html"||getNodeName(n)==="body"&&getComputedStyle(n).position==="static")?r:n||getContainingBlock(t)||r}function getMainAxisFromPlacement(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function within(t,r,n){return max(t,min(r,n))}function withinMaxClamp(t,r,n){var a=within(t,r,n);return a>n?n:a}function getFreshSideObject(){return{top:0,right:0,bottom:0,left:0}}function mergePaddingObject(t){return Object.assign({},getFreshSideObject(),t)}function expandToHashMap(t,r){return r.reduce(function(n,a){return n[a]=t,n},{})}var toPaddingObject=function(r,n){return r=typeof r=="function"?r(Object.assign({},n.rects,{placement:n.placement})):r,mergePaddingObject(typeof r!="number"?r:expandToHashMap(r,basePlacements))};function arrow(t){var r,n=t.state,a=t.name,o=t.options,l=n.elements.arrow,c=n.modifiersData.popperOffsets,_=getBasePlacement(n.placement),u=getMainAxisFromPlacement(_),p=[left,right].indexOf(_)>=0,d=p?"height":"width";if(!(!l||!c)){var m=toPaddingObject(o.padding,n),f=getLayoutRect(l),g=u==="y"?top:left,E=u==="y"?bottom:right,x=n.rects.reference[d]+n.rects.reference[u]-c[u]-n.rects.popper[d],v=c[u]-n.rects.reference[u],h=getOffsetParent(l),b=h?u==="y"?h.clientHeight||0:h.clientWidth||0:0,S=x/2-v/2,y=m[g],T=b-f[d]-m[E],A=b/2-f[d]/2+S,w=within(y,A,T),C=u;n.modifiersData[a]=(r={},r[C]=w,r.centerOffset=w-A,r)}}function effect$1(t){var r=t.state,n=t.options,a=n.element,o=a===void 0?"[data-popper-arrow]":a;o!=null&&(typeof o=="string"&&(o=r.elements.popper.querySelector(o),!o)||contains(r.elements.popper,o)&&(r.elements.arrow=o))}const arrow$1={name:"arrow",enabled:!0,phase:"main",fn:arrow,effect:effect$1,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function getVariation(t){return t.split("-")[1]}var unsetSides={top:"auto",right:"auto",bottom:"auto",left:"auto"};function roundOffsetsByDPR(t,r){var n=t.x,a=t.y,o=r.devicePixelRatio||1;return{x:round$1(n*o)/o||0,y:round$1(a*o)/o||0}}function mapToStyles(t){var r,n=t.popper,a=t.popperRect,o=t.placement,l=t.variation,c=t.offsets,_=t.position,u=t.gpuAcceleration,p=t.adaptive,d=t.roundOffsets,m=t.isFixed,f=c.x,g=f===void 0?0:f,E=c.y,x=E===void 0?0:E,v=typeof d=="function"?d({x:g,y:x}):{x:g,y:x};g=v.x,x=v.y;var h=c.hasOwnProperty("x"),b=c.hasOwnProperty("y"),S=left,y=top,T=window;if(p){var A=getOffsetParent(n),w="clientHeight",C="clientWidth";if(A===getWindow(n)&&(A=getDocumentElement(n),getComputedStyle(A).position!=="static"&&_==="absolute"&&(w="scrollHeight",C="scrollWidth")),A=A,o===top||(o===left||o===right)&&l===end){y=bottom;var L=m&&A===T&&T.visualViewport?T.visualViewport.height:A[w];x-=L-a.height,x*=u?1:-1}if(o===left||(o===top||o===bottom)&&l===end){S=right;var k=m&&A===T&&T.visualViewport?T.visualViewport.width:A[C];g-=k-a.width,g*=u?1:-1}}var P=Object.assign({position:_},p&&unsetSides),I=d===!0?roundOffsetsByDPR({x:g,y:x},getWindow(n)):{x:g,y:x};if(g=I.x,x=I.y,u){var F;return Object.assign({},P,(F={},F[y]=b?"0":"",F[S]=h?"0":"",F.transform=(T.devicePixelRatio||1)<=1?"translate("+g+"px, "+x+"px)":"translate3d("+g+"px, "+x+"px, 0)",F))}return Object.assign({},P,(r={},r[y]=b?x+"px":"",r[S]=h?g+"px":"",r.transform="",r))}function computeStyles(t){var r=t.state,n=t.options,a=n.gpuAcceleration,o=a===void 0?!0:a,l=n.adaptive,c=l===void 0?!0:l,_=n.roundOffsets,u=_===void 0?!0:_,p={placement:getBasePlacement(r.placement),variation:getVariation(r.placement),popper:r.elements.popper,popperRect:r.rects.popper,gpuAcceleration:o,isFixed:r.options.strategy==="fixed"};r.modifiersData.popperOffsets!=null&&(r.styles.popper=Object.assign({},r.styles.popper,mapToStyles(Object.assign({},p,{offsets:r.modifiersData.popperOffsets,position:r.options.strategy,adaptive:c,roundOffsets:u})))),r.modifiersData.arrow!=null&&(r.styles.arrow=Object.assign({},r.styles.arrow,mapToStyles(Object.assign({},p,{offsets:r.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-placement":r.placement})}const computeStyles$1={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:computeStyles,data:{}};var passive={passive:!0};function effect(t){var r=t.state,n=t.instance,a=t.options,o=a.scroll,l=o===void 0?!0:o,c=a.resize,_=c===void 0?!0:c,u=getWindow(r.elements.popper),p=[].concat(r.scrollParents.reference,r.scrollParents.popper);return l&&p.forEach(function(d){d.addEventListener("scroll",n.update,passive)}),_&&u.addEventListener("resize",n.update,passive),function(){l&&p.forEach(function(d){d.removeEventListener("scroll",n.update,passive)}),_&&u.removeEventListener("resize",n.update,passive)}}const eventListeners={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect,data:{}};var hash$2={left:"right",right:"left",bottom:"top",top:"bottom"};function getOppositePlacement(t){return t.replace(/left|right|bottom|top/g,function(r){return hash$2[r]})}var hash$1={start:"end",end:"start"};function getOppositeVariationPlacement(t){return t.replace(/start|end/g,function(r){return hash$1[r]})}function getWindowScroll(t){var r=getWindow(t),n=r.pageXOffset,a=r.pageYOffset;return{scrollLeft:n,scrollTop:a}}function getWindowScrollBarX(t){return getBoundingClientRect(getDocumentElement(t)).left+getWindowScroll(t).scrollLeft}function getViewportRect(t,r){var n=getWindow(t),a=getDocumentElement(t),o=n.visualViewport,l=a.clientWidth,c=a.clientHeight,_=0,u=0;if(o){l=o.width,c=o.height;var p=isLayoutViewport();(p||!p&&r==="fixed")&&(_=o.offsetLeft,u=o.offsetTop)}return{width:l,height:c,x:_+getWindowScrollBarX(t),y:u}}function getDocumentRect(t){var r,n=getDocumentElement(t),a=getWindowScroll(t),o=(r=t.ownerDocument)==null?void 0:r.body,l=max(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=max(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),_=-a.scrollLeft+getWindowScrollBarX(t),u=-a.scrollTop;return getComputedStyle(o||n).direction==="rtl"&&(_+=max(n.clientWidth,o?o.clientWidth:0)-l),{width:l,height:c,x:_,y:u}}function isScrollParent(t){var r=getComputedStyle(t),n=r.overflow,a=r.overflowX,o=r.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+a)}function getScrollParent(t){return["html","body","#document"].indexOf(getNodeName(t))>=0?t.ownerDocument.body:isHTMLElement$1(t)&&isScrollParent(t)?t:getScrollParent(getParentNode(t))}function listScrollParents(t,r){var n;r===void 0&&(r=[]);var a=getScrollParent(t),o=a===((n=t.ownerDocument)==null?void 0:n.body),l=getWindow(a),c=o?[l].concat(l.visualViewport||[],isScrollParent(a)?a:[]):a,_=r.concat(c);return o?_:_.concat(listScrollParents(getParentNode(c)))}function rectToClientRect(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function getInnerBoundingClientRect(t,r){var n=getBoundingClientRect(t,!1,r==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function getClientRectFromMixedType(t,r,n){return r===viewport?rectToClientRect(getViewportRect(t,n)):isElement(r)?getInnerBoundingClientRect(r,n):rectToClientRect(getDocumentRect(getDocumentElement(t)))}function getClippingParents(t){var r=listScrollParents(getParentNode(t)),n=["absolute","fixed"].indexOf(getComputedStyle(t).position)>=0,a=n&&isHTMLElement$1(t)?getOffsetParent(t):t;return isElement(a)?r.filter(function(o){return isElement(o)&&contains(o,a)&&getNodeName(o)!=="body"}):[]}function getClippingRect(t,r,n,a){var o=r==="clippingParents"?getClippingParents(t):[].concat(r),l=[].concat(o,[n]),c=l[0],_=l.reduce(function(u,p){var d=getClientRectFromMixedType(t,p,a);return u.top=max(d.top,u.top),u.right=min(d.right,u.right),u.bottom=min(d.bottom,u.bottom),u.left=max(d.left,u.left),u},getClientRectFromMixedType(t,c,a));return _.width=_.right-_.left,_.height=_.bottom-_.top,_.x=_.left,_.y=_.top,_}function computeOffsets(t){var r=t.reference,n=t.element,a=t.placement,o=a?getBasePlacement(a):null,l=a?getVariation(a):null,c=r.x+r.width/2-n.width/2,_=r.y+r.height/2-n.height/2,u;switch(o){case top:u={x:c,y:r.y-n.height};break;case bottom:u={x:c,y:r.y+r.height};break;case right:u={x:r.x+r.width,y:_};break;case left:u={x:r.x-n.width,y:_};break;default:u={x:r.x,y:r.y}}var p=o?getMainAxisFromPlacement(o):null;if(p!=null){var d=p==="y"?"height":"width";switch(l){case start:u[p]=u[p]-(r[d]/2-n[d]/2);break;case end:u[p]=u[p]+(r[d]/2-n[d]/2);break}}return u}function detectOverflow(t,r){r===void 0&&(r={});var n=r,a=n.placement,o=a===void 0?t.placement:a,l=n.strategy,c=l===void 0?t.strategy:l,_=n.boundary,u=_===void 0?clippingParents:_,p=n.rootBoundary,d=p===void 0?viewport:p,m=n.elementContext,f=m===void 0?popper:m,g=n.altBoundary,E=g===void 0?!1:g,x=n.padding,v=x===void 0?0:x,h=mergePaddingObject(typeof v!="number"?v:expandToHashMap(v,basePlacements)),b=f===popper?reference:popper,S=t.rects.popper,y=t.elements[E?b:f],T=getClippingRect(isElement(y)?y:y.contextElement||getDocumentElement(t.elements.popper),u,d,c),A=getBoundingClientRect(t.elements.reference),w=computeOffsets({reference:A,element:S,placement:o}),C=rectToClientRect(Object.assign({},S,w)),L=f===popper?C:A,k={top:T.top-L.top+h.top,bottom:L.bottom-T.bottom+h.bottom,left:T.left-L.left+h.left,right:L.right-T.right+h.right},P=t.modifiersData.offset;if(f===popper&&P){var I=P[o];Object.keys(k).forEach(function(F){var H=[right,bottom].indexOf(F)>=0?1:-1,O=[top,bottom].indexOf(F)>=0?"y":"x";k[F]+=I[O]*H})}return k}function computeAutoPlacement(t,r){r===void 0&&(r={});var n=r,a=n.placement,o=n.boundary,l=n.rootBoundary,c=n.padding,_=n.flipVariations,u=n.allowedAutoPlacements,p=u===void 0?placements:u,d=getVariation(a),m=d?_?variationPlacements:variationPlacements.filter(function(E){return getVariation(E)===d}):basePlacements,f=m.filter(function(E){return p.indexOf(E)>=0});f.length===0&&(f=m);var g=f.reduce(function(E,x){return E[x]=detectOverflow(t,{placement:x,boundary:o,rootBoundary:l,padding:c})[getBasePlacement(x)],E},{});return Object.keys(g).sort(function(E,x){return g[E]-g[x]})}function getExpandedFallbackPlacements(t){if(getBasePlacement(t)===auto)return[];var r=getOppositePlacement(t);return[getOppositeVariationPlacement(t),r,getOppositeVariationPlacement(r)]}function flip(t){var r=t.state,n=t.options,a=t.name;if(!r.modifiersData[a]._skip){for(var o=n.mainAxis,l=o===void 0?!0:o,c=n.altAxis,_=c===void 0?!0:c,u=n.fallbackPlacements,p=n.padding,d=n.boundary,m=n.rootBoundary,f=n.altBoundary,g=n.flipVariations,E=g===void 0?!0:g,x=n.allowedAutoPlacements,v=r.options.placement,h=getBasePlacement(v),b=h===v,S=u||(b||!E?[getOppositePlacement(v)]:getExpandedFallbackPlacements(v)),y=[v].concat(S).reduce(function(re,X){return re.concat(getBasePlacement(X)===auto?computeAutoPlacement(r,{placement:X,boundary:d,rootBoundary:m,padding:p,flipVariations:E,allowedAutoPlacements:x}):X)},[]),T=r.rects.reference,A=r.rects.popper,w=new Map,C=!0,L=y[0],k=0;k<y.length;k++){var P=y[k],I=getBasePlacement(P),F=getVariation(P)===start,H=[top,bottom].indexOf(I)>=0,O=H?"width":"height",R=detectOverflow(r,{placement:P,boundary:d,rootBoundary:m,altBoundary:f,padding:p}),M=H?F?right:left:F?bottom:top;T[O]>A[O]&&(M=getOppositePlacement(M));var G=getOppositePlacement(M),U=[];if(l&&U.push(R[I]<=0),_&&U.push(R[M]<=0,R[G]<=0),U.every(function(re){return re})){L=P,C=!1;break}w.set(P,U)}if(C)for(var j=E?3:1,V=function(X){var Y=y.find(function(oe){var fe=w.get(oe);if(fe)return fe.slice(0,X).every(function(ve){return ve})});if(Y)return L=Y,"break"},$=j;$>0;$--){var Q=V($);if(Q==="break")break}r.placement!==L&&(r.modifiersData[a]._skip=!0,r.placement=L,r.reset=!0)}}const flip$1={name:"flip",enabled:!0,phase:"main",fn:flip,requiresIfExists:["offset"],data:{_skip:!1}};function getSideOffsets(t,r,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-r.height-n.y,right:t.right-r.width+n.x,bottom:t.bottom-r.height+n.y,left:t.left-r.width-n.x}}function isAnySideFullyClipped(t){return[top,right,bottom,left].some(function(r){return t[r]>=0})}function hide(t){var r=t.state,n=t.name,a=r.rects.reference,o=r.rects.popper,l=r.modifiersData.preventOverflow,c=detectOverflow(r,{elementContext:"reference"}),_=detectOverflow(r,{altBoundary:!0}),u=getSideOffsets(c,a),p=getSideOffsets(_,o,l),d=isAnySideFullyClipped(u),m=isAnySideFullyClipped(p);r.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:p,isReferenceHidden:d,hasPopperEscaped:m},r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":m})}const hide$1={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:hide};function distanceAndSkiddingToXY(t,r,n){var a=getBasePlacement(t),o=[left,top].indexOf(a)>=0?-1:1,l=typeof n=="function"?n(Object.assign({},r,{placement:t})):n,c=l[0],_=l[1];return c=c||0,_=(_||0)*o,[left,right].indexOf(a)>=0?{x:_,y:c}:{x:c,y:_}}function offset(t){var r=t.state,n=t.options,a=t.name,o=n.offset,l=o===void 0?[0,0]:o,c=placements.reduce(function(d,m){return d[m]=distanceAndSkiddingToXY(m,r.rects,l),d},{}),_=c[r.placement],u=_.x,p=_.y;r.modifiersData.popperOffsets!=null&&(r.modifiersData.popperOffsets.x+=u,r.modifiersData.popperOffsets.y+=p),r.modifiersData[a]=c}const offset$1={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:offset};function popperOffsets(t){var r=t.state,n=t.name;r.modifiersData[n]=computeOffsets({reference:r.rects.reference,element:r.rects.popper,placement:r.placement})}const popperOffsets$1={name:"popperOffsets",enabled:!0,phase:"read",fn:popperOffsets,data:{}};function getAltAxis(t){return t==="x"?"y":"x"}function preventOverflow(t){var r=t.state,n=t.options,a=t.name,o=n.mainAxis,l=o===void 0?!0:o,c=n.altAxis,_=c===void 0?!1:c,u=n.boundary,p=n.rootBoundary,d=n.altBoundary,m=n.padding,f=n.tether,g=f===void 0?!0:f,E=n.tetherOffset,x=E===void 0?0:E,v=detectOverflow(r,{boundary:u,rootBoundary:p,padding:m,altBoundary:d}),h=getBasePlacement(r.placement),b=getVariation(r.placement),S=!b,y=getMainAxisFromPlacement(h),T=getAltAxis(y),A=r.modifiersData.popperOffsets,w=r.rects.reference,C=r.rects.popper,L=typeof x=="function"?x(Object.assign({},r.rects,{placement:r.placement})):x,k=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),P=r.modifiersData.offset?r.modifiersData.offset[r.placement]:null,I={x:0,y:0};if(A){if(l){var F,H=y==="y"?top:left,O=y==="y"?bottom:right,R=y==="y"?"height":"width",M=A[y],G=M+v[H],U=M-v[O],j=g?-C[R]/2:0,V=b===start?w[R]:C[R],$=b===start?-C[R]:-w[R],Q=r.elements.arrow,re=g&&Q?getLayoutRect(Q):{width:0,height:0},X=r.modifiersData["arrow#persistent"]?r.modifiersData["arrow#persistent"].padding:getFreshSideObject(),Y=X[H],oe=X[O],fe=within(0,w[R],re[R]),ve=S?w[R]/2-j-fe-Y-k.mainAxis:V-fe-Y-k.mainAxis,ne=S?-w[R]/2+j+fe+oe+k.mainAxis:$+fe+oe+k.mainAxis,_e=r.elements.arrow&&getOffsetParent(r.elements.arrow),Z=_e?y==="y"?_e.clientTop||0:_e.clientLeft||0:0,ge=(F=P?.[y])!=null?F:0,ie=M+ve-ge-Z,le=M+ne-ge,xe=within(g?min(G,ie):G,M,g?max(U,le):U);A[y]=xe,I[y]=xe-M}if(_){var ce,ye=y==="x"?top:left,ke=y==="x"?bottom:right,Ae=A[T],he=T==="y"?"height":"width",Re=Ae+v[ye],Fe=Ae-v[ke],we=[top,left].indexOf(h)!==-1,z=(ce=P?.[T])!=null?ce:0,K=we?Re:Ae-w[he]-C[he]-z+k.altAxis,ee=we?Ae+w[he]+C[he]-z-k.altAxis:Fe,ue=g&&we?withinMaxClamp(K,Ae,ee):within(g?K:Re,Ae,g?ee:Fe);A[T]=ue,I[T]=ue-Ae}r.modifiersData[a]=I}}const preventOverflow$1={name:"preventOverflow",enabled:!0,phase:"main",fn:preventOverflow,requiresIfExists:["offset"]};function getHTMLElementScroll(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function getNodeScroll(t){return t===getWindow(t)||!isHTMLElement$1(t)?getWindowScroll(t):getHTMLElementScroll(t)}function isElementScaled(t){var r=t.getBoundingClientRect(),n=round$1(r.width)/t.offsetWidth||1,a=round$1(r.height)/t.offsetHeight||1;return n!==1||a!==1}function getCompositeRect(t,r,n){n===void 0&&(n=!1);var a=isHTMLElement$1(r),o=isHTMLElement$1(r)&&isElementScaled(r),l=getDocumentElement(r),c=getBoundingClientRect(t,o,n),_={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(a||!a&&!n)&&((getNodeName(r)!=="body"||isScrollParent(l))&&(_=getNodeScroll(r)),isHTMLElement$1(r)?(u=getBoundingClientRect(r,!0),u.x+=r.clientLeft,u.y+=r.clientTop):l&&(u.x=getWindowScrollBarX(l))),{x:c.left+_.scrollLeft-u.x,y:c.top+_.scrollTop-u.y,width:c.width,height:c.height}}function order(t){var r=new Map,n=new Set,a=[];t.forEach(function(l){r.set(l.name,l)});function o(l){n.add(l.name);var c=[].concat(l.requires||[],l.requiresIfExists||[]);c.forEach(function(_){if(!n.has(_)){var u=r.get(_);u&&o(u)}}),a.push(l)}return t.forEach(function(l){n.has(l.name)||o(l)}),a}function orderModifiers(t){var r=order(t);return modifierPhases.reduce(function(n,a){return n.concat(r.filter(function(o){return o.phase===a}))},[])}function debounce(t){var r;return function(){return r||(r=new Promise(function(n){Promise.resolve().then(function(){r=void 0,n(t())})})),r}}function mergeByName(t){var r=t.reduce(function(n,a){var o=n[a.name];return n[a.name]=o?Object.assign({},o,a,{options:Object.assign({},o.options,a.options),data:Object.assign({},o.data,a.data)}):a,n},{});return Object.keys(r).map(function(n){return r[n]})}var DEFAULT_OPTIONS={placement:"bottom",modifiers:[],strategy:"absolute"};function areValidElements(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return!r.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function popperGenerator(t){t===void 0&&(t={});var r=t,n=r.defaultModifiers,a=n===void 0?[]:n,o=r.defaultOptions,l=o===void 0?DEFAULT_OPTIONS:o;return function(_,u,p){p===void 0&&(p=l);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,l),modifiersData:{},elements:{reference:_,popper:u},attributes:{},styles:{}},m=[],f=!1,g={state:d,setOptions:function(h){var b=typeof h=="function"?h(d.options):h;x(),d.options=Object.assign({},l,d.options,b),d.scrollParents={reference:isElement(_)?listScrollParents(_):_.contextElement?listScrollParents(_.contextElement):[],popper:listScrollParents(u)};var S=orderModifiers(mergeByName([].concat(a,d.options.modifiers)));return d.orderedModifiers=S.filter(function(y){return y.enabled}),E(),g.update()},forceUpdate:function(){if(!f){var h=d.elements,b=h.reference,S=h.popper;if(areValidElements(b,S)){d.rects={reference:getCompositeRect(b,getOffsetParent(S),d.options.strategy==="fixed"),popper:getLayoutRect(S)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(k){return d.modifiersData[k.name]=Object.assign({},k.data)});for(var y=0;y<d.orderedModifiers.length;y++){if(d.reset===!0){d.reset=!1,y=-1;continue}var T=d.orderedModifiers[y],A=T.fn,w=T.options,C=w===void 0?{}:w,L=T.name;typeof A=="function"&&(d=A({state:d,options:C,name:L,instance:g})||d)}}}},update:debounce(function(){return new Promise(function(v){g.forceUpdate(),v(d)})}),destroy:function(){x(),f=!0}};if(!areValidElements(_,u))return g;g.setOptions(p).then(function(v){!f&&p.onFirstUpdate&&p.onFirstUpdate(v)});function E(){d.orderedModifiers.forEach(function(v){var h=v.name,b=v.options,S=b===void 0?{}:b,y=v.effect;if(typeof y=="function"){var T=y({state:d,name:h,instance:g,options:S}),A=function(){};m.push(T||A)}})}function x(){m.forEach(function(v){return v()}),m=[]}return g}}var defaultModifiers=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1,offset$1,flip$1,preventOverflow$1,arrow$1,hide$1],createPopper=popperGenerator({defaultModifiers});function useSlotProps(t){const{elementType:r,externalSlotProps:n,ownerState:a,skipResolvingSlotProps:o=!1,...l}=t,c=o?{}:resolveComponentProps(n,a),{props:_,internalRef:u}=mergeSlotProps$1({...l,externalSlotProps:c}),p=useForkRef(u,c?.ref,t.additionalProps?.ref);return appendOwnerState(r,{..._,ref:p},a)}function getContainer$1(t){return typeof t=="function"?t():t}const Portal=reactExports.forwardRef(function(r,n){const{children:a,container:o,disablePortal:l=!1}=r,[c,_]=reactExports.useState(null),u=useForkRef(reactExports.isValidElement(a)?getReactElementRef(a):null,n);if(useEnhancedEffect(()=>{l||_(getContainer$1(o)||document.body)},[o,l]),useEnhancedEffect(()=>{if(c&&!l)return setRef(n,c),()=>{setRef(n,null)}},[n,c,l]),l){if(reactExports.isValidElement(a)){const p={ref:u};return reactExports.cloneElement(a,p)}return a}return c&&reactDomExports.createPortal(a,c)});function getPopperUtilityClass(t){return generateUtilityClass("MuiPopper",t)}generateUtilityClasses("MuiPopper",["root"]);function flipPlacement(t,r){if(r==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function resolveAnchorEl$1(t){return typeof t=="function"?t():t}function isHTMLElement(t){return t.nodeType!==void 0}const useUtilityClasses$D=t=>{const{classes:r}=t;return composeClasses({root:["root"]},getPopperUtilityClass,r)},defaultPopperOptions={},PopperTooltip=reactExports.forwardRef(function(r,n){const{anchorEl:a,children:o,direction:l,disablePortal:c,modifiers:_,open:u,placement:p,popperOptions:d,popperRef:m,slotProps:f={},slots:g={},TransitionProps:E,ownerState:x,...v}=r,h=reactExports.useRef(null),b=useForkRef(h,n),S=reactExports.useRef(null),y=useForkRef(S,m),T=reactExports.useRef(y);useEnhancedEffect(()=>{T.current=y},[y]),reactExports.useImperativeHandle(m,()=>S.current,[]);const A=flipPlacement(p,l),[w,C]=reactExports.useState(A),[L,k]=reactExports.useState(resolveAnchorEl$1(a));reactExports.useEffect(()=>{S.current&&S.current.forceUpdate()}),reactExports.useEffect(()=>{a&&k(resolveAnchorEl$1(a))},[a]),useEnhancedEffect(()=>{if(!L||!u)return;const O=G=>{C(G.placement)};let R=[{name:"preventOverflow",options:{altBoundary:c}},{name:"flip",options:{altBoundary:c}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:G})=>{O(G)}}];_!=null&&(R=R.concat(_)),d&&d.modifiers!=null&&(R=R.concat(d.modifiers));const M=createPopper(L,h.current,{placement:A,...d,modifiers:R});return T.current(M),()=>{M.destroy(),T.current(null)}},[L,c,_,u,d,A]);const P={placement:w};E!==null&&(P.TransitionProps=E);const I=useUtilityClasses$D(r),F=g.root??"div",H=useSlotProps({elementType:F,externalSlotProps:f.root,externalForwardedProps:v,additionalProps:{role:"tooltip",ref:b},ownerState:r,className:I.root});return jsxRuntimeExports.jsx(F,{...H,children:typeof o=="function"?o(P):o})}),Popper$1=reactExports.forwardRef(function(r,n){const{anchorEl:a,children:o,container:l,direction:c="ltr",disablePortal:_=!1,keepMounted:u=!1,modifiers:p,open:d,placement:m="bottom",popperOptions:f=defaultPopperOptions,popperRef:g,style:E,transition:x=!1,slotProps:v={},slots:h={},...b}=r,[S,y]=reactExports.useState(!0),T=()=>{y(!1)},A=()=>{y(!0)};if(!u&&!d&&(!x||S))return null;let w;if(l)w=l;else if(a){const k=resolveAnchorEl$1(a);w=k&&isHTMLElement(k)?ownerDocument(k).body:ownerDocument(null).body}const C=!d&&u&&(!x||S)?"none":void 0,L=x?{in:d,onEnter:T,onExited:A}:void 0;return jsxRuntimeExports.jsx(Portal,{disablePortal:_,container:w,children:jsxRuntimeExports.jsx(PopperTooltip,{anchorEl:a,direction:c,disablePortal:_,modifiers:p,ref:n,open:x?!S:d,placement:m,popperOptions:f,popperRef:g,slotProps:v,slots:h,...b,style:{position:"fixed",top:0,left:0,display:C,...E},TransitionProps:L,children:o})})}),PopperRoot=styled$1(Popper$1,{name:"MuiPopper",slot:"Root"})({}),Popper=reactExports.forwardRef(function(r,n){const a=useRtl(),o=useDefaultProps({props:r,name:"MuiPopper"}),{anchorEl:l,component:c,components:_,componentsProps:u,container:p,disablePortal:d,keepMounted:m,modifiers:f,open:g,placement:E,popperOptions:x,popperRef:v,transition:h,slots:b,slotProps:S,...y}=o,T=b?.root??_?.Root,A={anchorEl:l,container:p,disablePortal:d,keepMounted:m,modifiers:f,open:g,placement:E,popperOptions:x,popperRef:v,transition:h,...y};return jsxRuntimeExports.jsx(PopperRoot,{as:c,direction:a?"rtl":"ltr",slots:{root:T},slotProps:S??u,...A,ref:n})});function getListSubheaderUtilityClass(t){return generateUtilityClass("MuiListSubheader",t)}generateUtilityClasses("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const useUtilityClasses$C=t=>{const{classes:r,color:n,disableGutters:a,inset:o,disableSticky:l}=t,c={root:["root",n!=="default"&&`color${capitalize(n)}`,!a&&"gutters",o&&"inset",!l&&"sticky"]};return composeClasses(c,getListSubheaderUtilityClass,r)},ListSubheaderRoot=styled$1("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.color!=="default"&&r[`color${capitalize(n.color)}`],!n.disableGutters&&r.gutters,n.inset&&r.inset,!n.disableSticky&&r.sticky]}})(memoTheme(({theme:t})=>({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(t.vars||t).palette.text.secondary,fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(14),variants:[{props:{color:"primary"},style:{color:(t.vars||t).palette.primary.main}},{props:{color:"inherit"},style:{color:"inherit"}},{props:({ownerState:r})=>!r.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:r})=>r.inset,style:{paddingLeft:72}},{props:({ownerState:r})=>!r.disableSticky,style:{position:"sticky",top:0,zIndex:1,backgroundColor:(t.vars||t).palette.background.paper}}]}))),ListSubheader=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiListSubheader"}),{className:o,color:l="default",component:c="li",disableGutters:_=!1,disableSticky:u=!1,inset:p=!1,...d}=a,m={...a,color:l,component:c,disableGutters:_,disableSticky:u,inset:p},f=useUtilityClasses$C(m);return jsxRuntimeExports.jsx(ListSubheaderRoot,{as:c,className:clsx(f.root,o),ref:n,ownerState:m,...d})});ListSubheader&&(ListSubheader.muiSkipListHighlight=!0);function getStyleValue(t){return parseInt(t,10)||0}const styles$1={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function isObjectEmpty(t){for(const r in t)return!1;return!0}function isEmpty$1(t){return isObjectEmpty(t)||t.outerHeightStyle===0&&!t.overflowing}const TextareaAutosize=reactExports.forwardRef(function(r,n){const{onChange:a,maxRows:o,minRows:l=1,style:c,value:_,...u}=r,{current:p}=reactExports.useRef(_!=null),d=reactExports.useRef(null),m=useForkRef(n,d),f=reactExports.useRef(null),g=reactExports.useRef(null),E=reactExports.useCallback(()=>{const S=d.current,y=g.current;if(!S||!y)return;const A=ownerWindow(S).getComputedStyle(S);if(A.width==="0px")return{outerHeightStyle:0,overflowing:!1};y.style.width=A.width,y.value=S.value||r.placeholder||"x",y.value.slice(-1)===`
`&&(y.value+=" ");const w=A.boxSizing,C=getStyleValue(A.paddingBottom)+getStyleValue(A.paddingTop),L=getStyleValue(A.borderBottomWidth)+getStyleValue(A.borderTopWidth),k=y.scrollHeight;y.value="x";const P=y.scrollHeight;let I=k;l&&(I=Math.max(Number(l)*P,I)),o&&(I=Math.min(Number(o)*P,I)),I=Math.max(I,P);const F=I+(w==="border-box"?C+L:0),H=Math.abs(I-k)<=1;return{outerHeightStyle:F,overflowing:H}},[o,l,r.placeholder]),x=useEventCallback(()=>{const S=d.current,y=E();if(!S||!y||isEmpty$1(y))return!1;const T=y.outerHeightStyle;return f.current!=null&&f.current!==T}),v=reactExports.useCallback(()=>{const S=d.current,y=E();if(!S||!y||isEmpty$1(y))return;const T=y.outerHeightStyle;f.current!==T&&(f.current=T,S.style.height=`${T}px`),S.style.overflow=y.overflowing?"hidden":""},[E]),h=reactExports.useRef(-1);useEnhancedEffect(()=>{const S=debounce$1(v),y=d?.current;if(!y)return;const T=ownerWindow(y);T.addEventListener("resize",S);let A;return typeof ResizeObserver<"u"&&(A=new ResizeObserver(()=>{x()&&(A.unobserve(y),cancelAnimationFrame(h.current),v(),h.current=requestAnimationFrame(()=>{A.observe(y)}))}),A.observe(y)),()=>{S.clear(),cancelAnimationFrame(h.current),T.removeEventListener("resize",S),A&&A.disconnect()}},[E,v,x]),useEnhancedEffect(()=>{v()});const b=S=>{p||v();const y=S.target,T=y.value.length,A=y.value.endsWith(`
`),w=y.selectionStart===T;A&&w&&y.setSelectionRange(T,T),a&&a(S)};return jsxRuntimeExports.jsxs(reactExports.Fragment,{children:[jsxRuntimeExports.jsx("textarea",{value:_,onChange:b,ref:m,rows:l,style:c,...u}),jsxRuntimeExports.jsx("textarea",{"aria-hidden":!0,className:r.className,readOnly:!0,ref:g,tabIndex:-1,style:{...styles$1.shadow,...c,paddingTop:0,paddingBottom:0}})]})});function isHostComponent(t){return typeof t=="string"}function formControlState({props:t,states:r,muiFormControl:n}){return r.reduce((a,o)=>(a[o]=t[o],n&&typeof t[o]>"u"&&(a[o]=n[o]),a),{})}const FormControlContext=reactExports.createContext(void 0);function useFormControl(){return reactExports.useContext(FormControlContext)}function hasValue(t){return t!=null&&!(Array.isArray(t)&&t.length===0)}function isFilled(t,r=!1){return t&&(hasValue(t.value)&&t.value!==""||r&&hasValue(t.defaultValue)&&t.defaultValue!=="")}function isAdornedStart(t){return t.startAdornment}function getInputBaseUtilityClass(t){return generateUtilityClass("MuiInputBase",t)}const inputBaseClasses=generateUtilityClasses("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);var _InputGlobalStyles;const rootOverridesResolver=(t,r)=>{const{ownerState:n}=t;return[r.root,n.formControl&&r.formControl,n.startAdornment&&r.adornedStart,n.endAdornment&&r.adornedEnd,n.error&&r.error,n.size==="small"&&r.sizeSmall,n.multiline&&r.multiline,n.color&&r[`color${capitalize(n.color)}`],n.fullWidth&&r.fullWidth,n.hiddenLabel&&r.hiddenLabel]},inputOverridesResolver=(t,r)=>{const{ownerState:n}=t;return[r.input,n.size==="small"&&r.inputSizeSmall,n.multiline&&r.inputMultiline,n.type==="search"&&r.inputTypeSearch,n.startAdornment&&r.inputAdornedStart,n.endAdornment&&r.inputAdornedEnd,n.hiddenLabel&&r.inputHiddenLabel]},useUtilityClasses$B=t=>{const{classes:r,color:n,disabled:a,error:o,endAdornment:l,focused:c,formControl:_,fullWidth:u,hiddenLabel:p,multiline:d,readOnly:m,size:f,startAdornment:g,type:E}=t,x={root:["root",`color${capitalize(n)}`,a&&"disabled",o&&"error",u&&"fullWidth",c&&"focused",_&&"formControl",f&&f!=="medium"&&`size${capitalize(f)}`,d&&"multiline",g&&"adornedStart",l&&"adornedEnd",p&&"hiddenLabel",m&&"readOnly"],input:["input",a&&"disabled",E==="search"&&"inputTypeSearch",d&&"inputMultiline",f==="small"&&"inputSizeSmall",p&&"inputHiddenLabel",g&&"inputAdornedStart",l&&"inputAdornedEnd",m&&"readOnly"]};return composeClasses(x,getInputBaseUtilityClass,r)},InputBaseRoot=styled$1("div",{name:"MuiInputBase",slot:"Root",overridesResolver:rootOverridesResolver})(memoTheme(({theme:t})=>({...t.typography.body1,color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${inputBaseClasses.disabled}`]:{color:(t.vars||t).palette.text.disabled,cursor:"default"},variants:[{props:({ownerState:r})=>r.multiline,style:{padding:"4px 0 5px"}},{props:({ownerState:r,size:n})=>r.multiline&&n==="small",style:{paddingTop:1}},{props:({ownerState:r})=>r.fullWidth,style:{width:"100%"}}]}))),InputBaseInput=styled$1("input",{name:"MuiInputBase",slot:"Input",overridesResolver:inputOverridesResolver})(memoTheme(({theme:t})=>{const r=t.palette.mode==="light",n={color:"currentColor",...t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:r?.42:.5},transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})},a={opacity:"0 !important"},o=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:r?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${inputBaseClasses.formControl} &`]:{"&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&::-ms-input-placeholder":a,"&:focus::-webkit-input-placeholder":o,"&:focus::-moz-placeholder":o,"&:focus::-ms-input-placeholder":o},[`&.${inputBaseClasses.disabled}`]:{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled},variants:[{props:({ownerState:l})=>!l.disableInjectingGlobalStyles,style:{animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}}},{props:{size:"small"},style:{paddingTop:1}},{props:({ownerState:l})=>l.multiline,style:{height:"auto",resize:"none",padding:0,paddingTop:0}},{props:{type:"search"},style:{MozAppearance:"textfield"}}]}})),InputGlobalStyles=globalCss({"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}),InputBase=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiInputBase"}),{"aria-describedby":o,autoComplete:l,autoFocus:c,className:_,color:u,components:p={},componentsProps:d={},defaultValue:m,disabled:f,disableInjectingGlobalStyles:g,endAdornment:E,error:x,fullWidth:v=!1,id:h,inputComponent:b="input",inputProps:S={},inputRef:y,margin:T,maxRows:A,minRows:w,multiline:C=!1,name:L,onBlur:k,onChange:P,onClick:I,onFocus:F,onKeyDown:H,onKeyUp:O,placeholder:R,readOnly:M,renderSuffix:G,rows:U,size:j,slotProps:V={},slots:$={},startAdornment:Q,type:re="text",value:X,...Y}=a,oe=S.value!=null?S.value:X,{current:fe}=reactExports.useRef(oe!=null),ve=reactExports.useRef(),ne=reactExports.useCallback(se=>{},[]),_e=useForkRef(ve,y,S.ref,ne),[Z,ge]=reactExports.useState(!1),ie=useFormControl(),le=formControlState({props:a,muiFormControl:ie,states:["color","disabled","error","hiddenLabel","size","required","filled"]});le.focused=ie?ie.focused:Z,reactExports.useEffect(()=>{!ie&&f&&Z&&(ge(!1),k&&k())},[ie,f,Z,k]);const xe=ie&&ie.onFilled,ce=ie&&ie.onEmpty,ye=reactExports.useCallback(se=>{isFilled(se)?xe&&xe():ce&&ce()},[xe,ce]);useEnhancedEffect(()=>{fe&&ye({value:oe})},[oe,ye,fe]);const ke=se=>{F&&F(se),S.onFocus&&S.onFocus(se),ie&&ie.onFocus?ie.onFocus(se):ge(!0)},Ae=se=>{k&&k(se),S.onBlur&&S.onBlur(se),ie&&ie.onBlur?ie.onBlur(se):ge(!1)},he=(se,...Le)=>{if(!fe){const Te=se.target||ve.current;if(Te==null)throw new Error(formatMuiErrorMessage(1));ye({value:Te.value})}S.onChange&&S.onChange(se,...Le),P&&P(se,...Le)};reactExports.useEffect(()=>{ye(ve.current)},[]);const Re=se=>{ve.current&&se.currentTarget===se.target&&ve.current.focus(),I&&I(se)};let Fe=b,we=S;C&&Fe==="input"&&(U?we={type:void 0,minRows:U,maxRows:U,...we}:we={type:void 0,maxRows:A,minRows:w,...we},Fe=TextareaAutosize);const z=se=>{ye(se.animationName==="mui-auto-fill-cancel"?ve.current:{value:"x"})};reactExports.useEffect(()=>{ie&&ie.setAdornedStart(!!Q)},[ie,Q]);const K={...a,color:le.color||"primary",disabled:le.disabled,endAdornment:E,error:le.error,focused:le.focused,formControl:ie,fullWidth:v,hiddenLabel:le.hiddenLabel,multiline:C,size:le.size,startAdornment:Q,type:re},ee=useUtilityClasses$B(K),ue=$.root||p.Root||InputBaseRoot,de=V.root||d.root||{},ae=$.input||p.Input||InputBaseInput;return we={...we,...V.input??d.input},jsxRuntimeExports.jsxs(reactExports.Fragment,{children:[!g&&typeof InputGlobalStyles=="function"&&(_InputGlobalStyles||(_InputGlobalStyles=jsxRuntimeExports.jsx(InputGlobalStyles,{}))),jsxRuntimeExports.jsxs(ue,{...de,ref:n,onClick:Re,...Y,...!isHostComponent(ue)&&{ownerState:{...K,...de.ownerState}},className:clsx(ee.root,de.className,_,M&&"MuiInputBase-readOnly"),children:[Q,jsxRuntimeExports.jsx(FormControlContext.Provider,{value:null,children:jsxRuntimeExports.jsx(ae,{"aria-invalid":le.error,"aria-describedby":o,autoComplete:l,autoFocus:c,defaultValue:m,disabled:le.disabled,id:h,onAnimationStart:z,name:L,placeholder:R,readOnly:M,required:le.required,rows:U,value:oe,onKeyDown:H,onKeyUp:O,type:re,...we,...!isHostComponent(ae)&&{as:Fe,ownerState:{...K,...we.ownerState}},ref:_e,className:clsx(ee.input,we.className,M&&"MuiInputBase-readOnly"),onBlur:Ae,onChange:he,onFocus:ke})}),E,G?G({...le,startAdornment:Q}):null]})]})});function getInputUtilityClass(t){return generateUtilityClass("MuiInput",t)}const inputClasses={...inputBaseClasses,...generateUtilityClasses("MuiInput",["root","underline","input"])};function getOutlinedInputUtilityClass(t){return generateUtilityClass("MuiOutlinedInput",t)}const outlinedInputClasses={...inputBaseClasses,...generateUtilityClasses("MuiOutlinedInput",["root","notchedOutline","input"])};function getFilledInputUtilityClass(t){return generateUtilityClass("MuiFilledInput",t)}const filledInputClasses={...inputBaseClasses,...generateUtilityClasses("MuiFilledInput",["root","underline","input","adornedStart","adornedEnd","sizeSmall","multiline","hiddenLabel"])},ArrowDropDownIcon=createSvgIcon(jsxRuntimeExports.jsx("path",{d:"M7 10l5 5 5-5z"}));function getBackdropUtilityClass(t){return generateUtilityClass("MuiBackdrop",t)}generateUtilityClasses("MuiBackdrop",["root","invisible"]);const useUtilityClasses$A=t=>{const{classes:r,invisible:n}=t;return composeClasses({root:["root",n&&"invisible"]},getBackdropUtilityClass,r)},BackdropRoot=styled$1("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.invisible&&r.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),Backdrop=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiBackdrop"}),{children:o,className:l,component:c="div",invisible:_=!1,open:u,components:p={},componentsProps:d={},slotProps:m={},slots:f={},TransitionComponent:g,transitionDuration:E,...x}=a,v={...a,component:c,invisible:_},h=useUtilityClasses$A(v),b={transition:g,root:p.Root,...f},S={...d,...m},y={component:c,slots:b,slotProps:S},[T,A]=useSlot("root",{elementType:BackdropRoot,externalForwardedProps:y,className:clsx(h.root,l),ownerState:v}),[w,C]=useSlot("transition",{elementType:Fade,externalForwardedProps:y,ownerState:v});return jsxRuntimeExports.jsx(w,{in:u,timeout:E,...x,...C,children:jsxRuntimeExports.jsx(T,{"aria-hidden":!0,...A,classes:h,ref:n,children:o})})});function getCardUtilityClass(t){return generateUtilityClass("MuiCard",t)}generateUtilityClasses("MuiCard",["root"]);const useUtilityClasses$z=t=>{const{classes:r}=t;return composeClasses({root:["root"]},getCardUtilityClass,r)},CardRoot=styled$1(Paper,{name:"MuiCard",slot:"Root"})({overflow:"hidden"}),Card=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiCard"}),{className:o,raised:l=!1,...c}=a,_={...a,raised:l},u=useUtilityClasses$z(_);return jsxRuntimeExports.jsx(CardRoot,{className:clsx(u.root,o),elevation:l?8:void 0,ref:n,ownerState:_,...c})});function getCardContentUtilityClass(t){return generateUtilityClass("MuiCardContent",t)}generateUtilityClasses("MuiCardContent",["root"]);const useUtilityClasses$y=t=>{const{classes:r}=t;return composeClasses({root:["root"]},getCardContentUtilityClass,r)},CardContentRoot=styled$1("div",{name:"MuiCardContent",slot:"Root"})({padding:16,"&:last-child":{paddingBottom:24}}),CardContent=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiCardContent"}),{className:o,component:l="div",...c}=a,_={...a,component:l},u=useUtilityClasses$y(_);return jsxRuntimeExports.jsx(CardContentRoot,{as:l,className:clsx(u.root,o),ownerState:_,ref:n,...c})});function getCardHeaderUtilityClass(t){return generateUtilityClass("MuiCardHeader",t)}const cardHeaderClasses=generateUtilityClasses("MuiCardHeader",["root","avatar","action","content","title","subheader"]),useUtilityClasses$x=t=>{const{classes:r}=t;return composeClasses({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},getCardHeaderUtilityClass,r)},CardHeaderRoot=styled$1("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(t,r)=>[{[`& .${cardHeaderClasses.title}`]:r.title},{[`& .${cardHeaderClasses.subheader}`]:r.subheader},r.root]})({display:"flex",alignItems:"center",padding:16}),CardHeaderAvatar=styled$1("div",{name:"MuiCardHeader",slot:"Avatar"})({display:"flex",flex:"0 0 auto",marginRight:16}),CardHeaderAction=styled$1("div",{name:"MuiCardHeader",slot:"Action"})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),CardHeaderContent=styled$1("div",{name:"MuiCardHeader",slot:"Content"})({flex:"1 1 auto",[`.${typographyClasses.root}:where(& .${cardHeaderClasses.title})`]:{display:"block"},[`.${typographyClasses.root}:where(& .${cardHeaderClasses.subheader})`]:{display:"block"}}),CardHeader=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiCardHeader"}),{action:o,avatar:l,component:c="div",disableTypography:_=!1,subheader:u,subheaderTypographyProps:p,title:d,titleTypographyProps:m,slots:f={},slotProps:g={},...E}=a,x={...a,component:c,disableTypography:_},v=useUtilityClasses$x(x),h={slots:f,slotProps:{title:m,subheader:p,...g}};let b=d;const[S,y]=useSlot("title",{className:v.title,elementType:Typography,externalForwardedProps:h,ownerState:x,additionalProps:{variant:l?"body2":"h5",component:"span"}});b!=null&&b.type!==Typography&&!_&&(b=jsxRuntimeExports.jsx(S,{...y,children:b}));let T=u;const[A,w]=useSlot("subheader",{className:v.subheader,elementType:Typography,externalForwardedProps:h,ownerState:x,additionalProps:{variant:l?"body2":"body1",color:"textSecondary",component:"span"}});T!=null&&T.type!==Typography&&!_&&(T=jsxRuntimeExports.jsx(A,{...w,children:T}));const[C,L]=useSlot("root",{ref:n,className:v.root,elementType:CardHeaderRoot,externalForwardedProps:{...h,...E,component:c},ownerState:x}),[k,P]=useSlot("avatar",{className:v.avatar,elementType:CardHeaderAvatar,externalForwardedProps:h,ownerState:x}),[I,F]=useSlot("content",{className:v.content,elementType:CardHeaderContent,externalForwardedProps:h,ownerState:x}),[H,O]=useSlot("action",{className:v.action,elementType:CardHeaderAction,externalForwardedProps:h,ownerState:x});return jsxRuntimeExports.jsxs(C,{...L,children:[l&&jsxRuntimeExports.jsx(k,{...P,children:l}),jsxRuntimeExports.jsxs(I,{...F,children:[b,T]}),o&&jsxRuntimeExports.jsx(H,{...O,children:o})]})});function getCardMediaUtilityClass(t){return generateUtilityClass("MuiCardMedia",t)}generateUtilityClasses("MuiCardMedia",["root","media","img"]);const useUtilityClasses$w=t=>{const{classes:r,isMediaComponent:n,isImageComponent:a}=t;return composeClasses({root:["root",n&&"media",a&&"img"]},getCardMediaUtilityClass,r)},CardMediaRoot=styled$1("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t,{isMediaComponent:a,isImageComponent:o}=n;return[r.root,a&&r.media,o&&r.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),MEDIA_COMPONENTS=["video","audio","picture","iframe","img"],IMAGE_COMPONENTS=["picture","img"],CardMedia=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiCardMedia"}),{children:o,className:l,component:c="div",image:_,src:u,style:p,...d}=a,m=MEDIA_COMPONENTS.includes(c),f=!m&&_?{backgroundImage:`url("${_}")`,...p}:p,g={...a,component:c,isMediaComponent:m,isImageComponent:IMAGE_COMPONENTS.includes(c)},E=useUtilityClasses$w(g);return jsxRuntimeExports.jsx(CardMediaRoot,{className:clsx(E.root,l),as:c,role:!m&&_?"img":void 0,ref:n,style:f,ownerState:g,src:m?_||u:void 0,...d,children:o})});function getSwitchBaseUtilityClass(t){return generateUtilityClass("PrivateSwitchBase",t)}generateUtilityClasses("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const useUtilityClasses$v=t=>{const{classes:r,checked:n,disabled:a,edge:o}=t,l={root:["root",n&&"checked",a&&"disabled",o&&`edge${capitalize(o)}`],input:["input"]};return composeClasses(l,getSwitchBaseUtilityClass,r)},SwitchBaseRoot=styled$1(ButtonBase,{name:"MuiSwitchBase"})({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:t,ownerState:r})=>t==="start"&&r.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:t,ownerState:r})=>t==="end"&&r.size!=="small",style:{marginRight:-12}}]}),SwitchBaseInput=styled$1("input",{name:"MuiSwitchBase",shouldForwardProp:rootShouldForwardProp})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),SwitchBase=reactExports.forwardRef(function(r,n){const{autoFocus:a,checked:o,checkedIcon:l,defaultChecked:c,disabled:_,disableFocusRipple:u=!1,edge:p=!1,icon:d,id:m,inputProps:f,inputRef:g,name:E,onBlur:x,onChange:v,onFocus:h,readOnly:b,required:S=!1,tabIndex:y,type:T,value:A,slots:w={},slotProps:C={},...L}=r,[k,P]=useControlled({controlled:o,default:!!c,name:"SwitchBase",state:"checked"}),I=useFormControl(),F=X=>{h&&h(X),I&&I.onFocus&&I.onFocus(X)},H=X=>{x&&x(X),I&&I.onBlur&&I.onBlur(X)},O=X=>{if(X.nativeEvent.defaultPrevented)return;const Y=X.target.checked;P(Y),v&&v(X,Y)};let R=_;I&&typeof R>"u"&&(R=I.disabled);const M=T==="checkbox"||T==="radio",G={...r,checked:k,disabled:R,disableFocusRipple:u,edge:p},U=useUtilityClasses$v(G),j={slots:w,slotProps:{input:f,...C}},[V,$]=useSlot("root",{ref:n,elementType:SwitchBaseRoot,className:U.root,shouldForwardComponentProp:!0,externalForwardedProps:{...j,component:"span",...L},getSlotProps:X=>({...X,onFocus:Y=>{X.onFocus?.(Y),F(Y)},onBlur:Y=>{X.onBlur?.(Y),H(Y)}}),ownerState:G,additionalProps:{centerRipple:!0,focusRipple:!u,disabled:R,role:void 0,tabIndex:null}}),[Q,re]=useSlot("input",{ref:g,elementType:SwitchBaseInput,className:U.input,externalForwardedProps:j,getSlotProps:X=>({...X,onChange:Y=>{X.onChange?.(Y),O(Y)}}),ownerState:G,additionalProps:{autoFocus:a,checked:o,defaultChecked:c,disabled:R,id:M?m:void 0,name:E,readOnly:b,required:S,tabIndex:y,type:T,...T==="checkbox"&&A===void 0?{}:{value:A}}});return jsxRuntimeExports.jsxs(V,{...$,children:[jsxRuntimeExports.jsx(Q,{...re}),k?l:d]})});function getScrollbarSize(t=window){const r=t.document.documentElement.clientWidth;return t.innerWidth-r}function isOverflowing(t){const r=ownerDocument(t);return r.body===t?ownerWindow(t).innerWidth>r.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function ariaHidden(t,r){r?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function getPaddingRight(t){return parseInt(ownerWindow(t).getComputedStyle(t).paddingRight,10)||0}function isAriaHiddenForbiddenOnElement(t){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(t.tagName),a=t.tagName==="INPUT"&&t.getAttribute("type")==="hidden";return n||a}function ariaHiddenSiblings(t,r,n,a,o){const l=[r,n,...a];[].forEach.call(t.children,c=>{const _=!l.includes(c),u=!isAriaHiddenForbiddenOnElement(c);_&&u&&ariaHidden(c,o)})}function findIndexOf(t,r){let n=-1;return t.some((a,o)=>r(a)?(n=o,!0):!1),n}function handleContainer(t,r){const n=[],a=t.container;if(!r.disableScrollLock){if(isOverflowing(a)){const c=getScrollbarSize(ownerWindow(a));n.push({value:a.style.paddingRight,property:"padding-right",el:a}),a.style.paddingRight=`${getPaddingRight(a)+c}px`;const _=ownerDocument(a).querySelectorAll(".mui-fixed");[].forEach.call(_,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${getPaddingRight(u)+c}px`})}let l;if(a.parentNode instanceof DocumentFragment)l=ownerDocument(a).body;else{const c=a.parentElement,_=ownerWindow(a);l=c?.nodeName==="HTML"&&_.getComputedStyle(c).overflowY==="scroll"?c:a}n.push({value:l.style.overflow,property:"overflow",el:l},{value:l.style.overflowX,property:"overflow-x",el:l},{value:l.style.overflowY,property:"overflow-y",el:l}),l.style.overflow="hidden"}return()=>{n.forEach(({value:l,el:c,property:_})=>{l?c.style.setProperty(_,l):c.style.removeProperty(_)})}}function getHiddenSiblings(t){const r=[];return[].forEach.call(t.children,n=>{n.getAttribute("aria-hidden")==="true"&&r.push(n)}),r}class ModalManager{constructor(){this.modals=[],this.containers=[]}add(r,n){let a=this.modals.indexOf(r);if(a!==-1)return a;a=this.modals.length,this.modals.push(r),r.modalRef&&ariaHidden(r.modalRef,!1);const o=getHiddenSiblings(n);ariaHiddenSiblings(n,r.mount,r.modalRef,o,!0);const l=findIndexOf(this.containers,c=>c.container===n);return l!==-1?(this.containers[l].modals.push(r),a):(this.containers.push({modals:[r],container:n,restore:null,hiddenSiblings:o}),a)}mount(r,n){const a=findIndexOf(this.containers,l=>l.modals.includes(r)),o=this.containers[a];o.restore||(o.restore=handleContainer(o,n))}remove(r,n=!0){const a=this.modals.indexOf(r);if(a===-1)return a;const o=findIndexOf(this.containers,c=>c.modals.includes(r)),l=this.containers[o];if(l.modals.splice(l.modals.indexOf(r),1),this.modals.splice(a,1),l.modals.length===0)l.restore&&l.restore(),r.modalRef&&ariaHidden(r.modalRef,n),ariaHiddenSiblings(l.container,r.mount,r.modalRef,l.hiddenSiblings,!1),this.containers.splice(o,1);else{const c=l.modals[l.modals.length-1];c.modalRef&&ariaHidden(c.modalRef,!1)}return a}isTopModal(r){return this.modals.length>0&&this.modals[this.modals.length-1]===r}}const candidatesSelector=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function getTabIndex(t){const r=parseInt(t.getAttribute("tabindex")||"",10);return Number.isNaN(r)?t.contentEditable==="true"||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:r}function isNonTabbableRadio(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!1;const r=a=>t.ownerDocument.querySelector(`input[type="radio"]${a}`);let n=r(`[name="${t.name}"]:checked`);return n||(n=r(`[name="${t.name}"]`)),n!==t}function isNodeMatchingSelectorFocusable(t){return!(t.disabled||t.tagName==="INPUT"&&t.type==="hidden"||isNonTabbableRadio(t))}function defaultGetTabbable(t){const r=[],n=[];return Array.from(t.querySelectorAll(candidatesSelector)).forEach((a,o)=>{const l=getTabIndex(a);l===-1||!isNodeMatchingSelectorFocusable(a)||(l===0?r.push(a):n.push({documentOrder:o,tabIndex:l,node:a}))}),n.sort((a,o)=>a.tabIndex===o.tabIndex?a.documentOrder-o.documentOrder:a.tabIndex-o.tabIndex).map(a=>a.node).concat(r)}function defaultIsEnabled(){return!0}function FocusTrap(t){const{children:r,disableAutoFocus:n=!1,disableEnforceFocus:a=!1,disableRestoreFocus:o=!1,getTabbable:l=defaultGetTabbable,isEnabled:c=defaultIsEnabled,open:_}=t,u=reactExports.useRef(!1),p=reactExports.useRef(null),d=reactExports.useRef(null),m=reactExports.useRef(null),f=reactExports.useRef(null),g=reactExports.useRef(!1),E=reactExports.useRef(null),x=useForkRef(getReactElementRef(r),E),v=reactExports.useRef(null);reactExports.useEffect(()=>{!_||!E.current||(g.current=!n)},[n,_]),reactExports.useEffect(()=>{if(!_||!E.current)return;const S=ownerDocument(E.current);return E.current.contains(S.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex","-1"),g.current&&E.current.focus()),()=>{o||(m.current&&m.current.focus&&(u.current=!0,m.current.focus()),m.current=null)}},[_]),reactExports.useEffect(()=>{if(!_||!E.current)return;const S=ownerDocument(E.current),y=w=>{v.current=w,!(a||!c()||w.key!=="Tab")&&S.activeElement===E.current&&w.shiftKey&&(u.current=!0,d.current&&d.current.focus())},T=()=>{const w=E.current;if(w===null)return;if(!S.hasFocus()||!c()||u.current){u.current=!1;return}if(w.contains(S.activeElement)||a&&S.activeElement!==p.current&&S.activeElement!==d.current)return;if(S.activeElement!==f.current)f.current=null;else if(f.current!==null)return;if(!g.current)return;let C=[];if((S.activeElement===p.current||S.activeElement===d.current)&&(C=l(E.current)),C.length>0){const L=!!(v.current?.shiftKey&&v.current?.key==="Tab"),k=C[0],P=C[C.length-1];typeof k!="string"&&typeof P!="string"&&(L?P.focus():k.focus())}else w.focus()};S.addEventListener("focusin",T),S.addEventListener("keydown",y,!0);const A=setInterval(()=>{S.activeElement&&S.activeElement.tagName==="BODY"&&T()},50);return()=>{clearInterval(A),S.removeEventListener("focusin",T),S.removeEventListener("keydown",y,!0)}},[n,a,o,c,_,l]);const h=S=>{m.current===null&&(m.current=S.relatedTarget),g.current=!0,f.current=S.target;const y=r.props.onFocus;y&&y(S)},b=S=>{m.current===null&&(m.current=S.relatedTarget),g.current=!0};return jsxRuntimeExports.jsxs(reactExports.Fragment,{children:[jsxRuntimeExports.jsx("div",{tabIndex:_?0:-1,onFocus:b,ref:p,"data-testid":"sentinelStart"}),reactExports.cloneElement(r,{ref:x,onFocus:h}),jsxRuntimeExports.jsx("div",{tabIndex:_?0:-1,onFocus:b,ref:d,"data-testid":"sentinelEnd"})]})}function getContainer(t){return typeof t=="function"?t():t}function getHasTransition(t){return t?t.props.hasOwnProperty("in"):!1}const noop=()=>{},manager=new ModalManager;function useModal(t){const{container:r,disableEscapeKeyDown:n=!1,disableScrollLock:a=!1,closeAfterTransition:o=!1,onTransitionEnter:l,onTransitionExited:c,children:_,onClose:u,open:p,rootRef:d}=t,m=reactExports.useRef({}),f=reactExports.useRef(null),g=reactExports.useRef(null),E=useForkRef(g,d),[x,v]=reactExports.useState(!p),h=getHasTransition(_);let b=!0;(t["aria-hidden"]==="false"||t["aria-hidden"]===!1)&&(b=!1);const S=()=>ownerDocument(f.current),y=()=>(m.current.modalRef=g.current,m.current.mount=f.current,m.current),T=()=>{manager.mount(y(),{disableScrollLock:a}),g.current&&(g.current.scrollTop=0)},A=useEventCallback(()=>{const O=getContainer(r)||S().body;manager.add(y(),O),g.current&&T()}),w=()=>manager.isTopModal(y()),C=useEventCallback(O=>{f.current=O,O&&(p&&w()?T():g.current&&ariaHidden(g.current,b))}),L=reactExports.useCallback(()=>{manager.remove(y(),b)},[b]);reactExports.useEffect(()=>()=>{L()},[L]),reactExports.useEffect(()=>{p?A():(!h||!o)&&L()},[p,L,h,o,A]);const k=O=>R=>{O.onKeyDown?.(R),!(R.key!=="Escape"||R.which===229||!w())&&(n||(R.stopPropagation(),u&&u(R,"escapeKeyDown")))},P=O=>R=>{O.onClick?.(R),R.target===R.currentTarget&&u&&u(R,"backdropClick")};return{getRootProps:(O={})=>{const R=extractEventHandlers(t);delete R.onTransitionEnter,delete R.onTransitionExited;const M={...R,...O};return{role:"presentation",...M,onKeyDown:k(M),ref:E}},getBackdropProps:(O={})=>{const R=O;return{"aria-hidden":!0,...R,onClick:P(R),open:p}},getTransitionProps:()=>{const O=()=>{v(!1),l&&l()},R=()=>{v(!0),c&&c(),o&&L()};return{onEnter:createChainedFunction(O,_?.props.onEnter??noop),onExited:createChainedFunction(R,_?.props.onExited??noop)}},rootRef:E,portalRef:C,isTopModal:w,exited:x,hasTransition:h}}function getModalUtilityClass(t){return generateUtilityClass("MuiModal",t)}generateUtilityClasses("MuiModal",["root","hidden","backdrop"]);const useUtilityClasses$u=t=>{const{open:r,exited:n,classes:a}=t;return composeClasses({root:["root",!r&&n&&"hidden"],backdrop:["backdrop"]},getModalUtilityClass,a)},ModalRoot=styled$1("div",{name:"MuiModal",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,!n.open&&n.exited&&r.hidden]}})(memoTheme(({theme:t})=>({position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:r})=>!r.open&&r.exited,style:{visibility:"hidden"}}]}))),ModalBackdrop=styled$1(Backdrop,{name:"MuiModal",slot:"Backdrop"})({zIndex:-1}),Modal=reactExports.forwardRef(function(r,n){const a=useDefaultProps({name:"MuiModal",props:r}),{BackdropComponent:o=ModalBackdrop,BackdropProps:l,classes:c,className:_,closeAfterTransition:u=!1,children:p,container:d,component:m,components:f={},componentsProps:g={},disableAutoFocus:E=!1,disableEnforceFocus:x=!1,disableEscapeKeyDown:v=!1,disablePortal:h=!1,disableRestoreFocus:b=!1,disableScrollLock:S=!1,hideBackdrop:y=!1,keepMounted:T=!1,onClose:A,onTransitionEnter:w,onTransitionExited:C,open:L,slotProps:k={},slots:P={},theme:I,...F}=a,H={...a,closeAfterTransition:u,disableAutoFocus:E,disableEnforceFocus:x,disableEscapeKeyDown:v,disablePortal:h,disableRestoreFocus:b,disableScrollLock:S,hideBackdrop:y,keepMounted:T},{getRootProps:O,getBackdropProps:R,getTransitionProps:M,portalRef:G,isTopModal:U,exited:j,hasTransition:V}=useModal({...H,rootRef:n}),$={...H,exited:j},Q=useUtilityClasses$u($),re={};if(p.props.tabIndex===void 0&&(re.tabIndex="-1"),V){const{onEnter:ne,onExited:_e}=M();re.onEnter=ne,re.onExited=_e}const X={slots:{root:f.Root,backdrop:f.Backdrop,...P},slotProps:{...g,...k}},[Y,oe]=useSlot("root",{ref:n,elementType:ModalRoot,externalForwardedProps:{...X,...F,component:m},getSlotProps:O,ownerState:$,className:clsx(_,Q?.root,!$.open&&$.exited&&Q?.hidden)}),[fe,ve]=useSlot("backdrop",{ref:l?.ref,elementType:o,externalForwardedProps:X,shouldForwardComponentProp:!0,additionalProps:l,getSlotProps:ne=>R({...ne,onClick:_e=>{ne?.onClick&&ne.onClick(_e)}}),className:clsx(l?.className,Q?.backdrop),ownerState:$});return!T&&!L&&(!V||j)?null:jsxRuntimeExports.jsx(Portal,{ref:G,container:d,disablePortal:h,children:jsxRuntimeExports.jsxs(Y,{...oe,children:[!y&&o?jsxRuntimeExports.jsx(fe,{...ve}):null,jsxRuntimeExports.jsx(FocusTrap,{disableEnforceFocus:x,disableAutoFocus:E,disableRestoreFocus:b,isEnabled:U,open:L,children:reactExports.cloneElement(p,re)})]})})}),useUtilityClasses$t=t=>{const{classes:r,disableUnderline:n,startAdornment:a,endAdornment:o,size:l,hiddenLabel:c,multiline:_}=t,u={root:["root",!n&&"underline",a&&"adornedStart",o&&"adornedEnd",l==="small"&&`size${capitalize(l)}`,c&&"hiddenLabel",_&&"multiline"],input:["input"]},p=composeClasses(u,getFilledInputUtilityClass,r);return{...r,...p}},FilledInputRoot=styled$1(InputBaseRoot,{shouldForwardProp:t=>rootShouldForwardProp(t)||t==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[...rootOverridesResolver(t,r),!n.disableUnderline&&r.underline]}})(memoTheme(({theme:t})=>{const r=t.palette.mode==="light",n=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",a=r?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",o=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",l=r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return{position:"relative",backgroundColor:t.vars?t.vars.palette.FilledInput.bg:a,borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),"&:hover":{backgroundColor:t.vars?t.vars.palette.FilledInput.hoverBg:o,"@media (hover: none)":{backgroundColor:t.vars?t.vars.palette.FilledInput.bg:a}},[`&.${filledInputClasses.focused}`]:{backgroundColor:t.vars?t.vars.palette.FilledInput.bg:a},[`&.${filledInputClasses.disabled}`]:{backgroundColor:t.vars?t.vars.palette.FilledInput.disabledBg:l},variants:[{props:({ownerState:c})=>!c.disableUnderline,style:{"&::after":{left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${filledInputClasses.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${filledInputClasses.error}`]:{"&::before, &::after":{borderBottomColor:(t.vars||t).palette.error.main}},"&::before":{borderBottom:`1px solid ${t.vars?t.alpha(t.vars.palette.common.onBackground,t.vars.opacity.inputUnderline):n}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${filledInputClasses.disabled}, .${filledInputClasses.error}):before`]:{borderBottom:`1px solid ${(t.vars||t).palette.text.primary}`},[`&.${filledInputClasses.disabled}:before`]:{borderBottomStyle:"dotted"}}},...Object.entries(t.palette).filter(createSimplePaletteValueFilter()).map(([c])=>({props:{disableUnderline:!1,color:c},style:{"&::after":{borderBottom:`2px solid ${(t.vars||t).palette[c]?.main}`}}})),{props:({ownerState:c})=>c.startAdornment,style:{paddingLeft:12}},{props:({ownerState:c})=>c.endAdornment,style:{paddingRight:12}},{props:({ownerState:c})=>c.multiline,style:{padding:"25px 12px 8px"}},{props:({ownerState:c,size:_})=>c.multiline&&_==="small",style:{paddingTop:21,paddingBottom:4}},{props:({ownerState:c})=>c.multiline&&c.hiddenLabel,style:{paddingTop:16,paddingBottom:17}},{props:({ownerState:c})=>c.multiline&&c.hiddenLabel&&c.size==="small",style:{paddingTop:8,paddingBottom:9}}]}})),FilledInputInput=styled$1(InputBaseInput,{name:"MuiFilledInput",slot:"Input",overridesResolver:inputOverridesResolver})(memoTheme(({theme:t})=>({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12,...!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:t.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:t.palette.mode==="light"?null:"#fff",caretColor:t.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},...t.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[t.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},variants:[{props:{size:"small"},style:{paddingTop:21,paddingBottom:4}},{props:({ownerState:r})=>r.hiddenLabel,style:{paddingTop:16,paddingBottom:17}},{props:({ownerState:r})=>r.startAdornment,style:{paddingLeft:0}},{props:({ownerState:r})=>r.endAdornment,style:{paddingRight:0}},{props:({ownerState:r})=>r.hiddenLabel&&r.size==="small",style:{paddingTop:8,paddingBottom:9}},{props:({ownerState:r})=>r.multiline,style:{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}]}))),FilledInput=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiFilledInput"}),{disableUnderline:o=!1,components:l={},componentsProps:c,fullWidth:_=!1,hiddenLabel:u,inputComponent:p="input",multiline:d=!1,slotProps:m,slots:f={},type:g="text",...E}=a,x={...a,disableUnderline:o,fullWidth:_,inputComponent:p,multiline:d,type:g},v=useUtilityClasses$t(a),h={root:{ownerState:x},input:{ownerState:x}},b=m??c?deepmerge(h,m??c):h,S=f.root??l.Root??FilledInputRoot,y=f.input??l.Input??FilledInputInput;return jsxRuntimeExports.jsx(InputBase,{slots:{root:S,input:y},slotProps:b,fullWidth:_,inputComponent:p,multiline:d,ref:n,type:g,...E,classes:v})});FilledInput.muiName="Input";function getFormControlUtilityClasses(t){return generateUtilityClass("MuiFormControl",t)}generateUtilityClasses("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const useUtilityClasses$s=t=>{const{classes:r,margin:n,fullWidth:a}=t,o={root:["root",n!=="none"&&`margin${capitalize(n)}`,a&&"fullWidth"]};return composeClasses(o,getFormControlUtilityClasses,r)},FormControlRoot=styled$1("div",{name:"MuiFormControl",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[`margin${capitalize(n.margin)}`],n.fullWidth&&r.fullWidth]}})({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",variants:[{props:{margin:"normal"},style:{marginTop:16,marginBottom:8}},{props:{margin:"dense"},style:{marginTop:8,marginBottom:4}},{props:{fullWidth:!0},style:{width:"100%"}}]}),FormControl=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiFormControl"}),{children:o,className:l,color:c="primary",component:_="div",disabled:u=!1,error:p=!1,focused:d,fullWidth:m=!1,hiddenLabel:f=!1,margin:g="none",required:E=!1,size:x="medium",variant:v="outlined",...h}=a,b={...a,color:c,component:_,disabled:u,error:p,fullWidth:m,hiddenLabel:f,margin:g,required:E,size:x,variant:v},S=useUtilityClasses$s(b),[y,T]=reactExports.useState(()=>{let O=!1;return o&&reactExports.Children.forEach(o,R=>{if(!isMuiElement(R,["Input","Select"]))return;const M=isMuiElement(R,["Select"])?R.props.input:R;M&&isAdornedStart(M.props)&&(O=!0)}),O}),[A,w]=reactExports.useState(()=>{let O=!1;return o&&reactExports.Children.forEach(o,R=>{isMuiElement(R,["Input","Select"])&&(isFilled(R.props,!0)||isFilled(R.props.inputProps,!0))&&(O=!0)}),O}),[C,L]=reactExports.useState(!1);u&&C&&L(!1);const k=d!==void 0&&!u?d:C;let P;reactExports.useRef(!1);const I=reactExports.useCallback(()=>{w(!0)},[]),F=reactExports.useCallback(()=>{w(!1)},[]),H=reactExports.useMemo(()=>({adornedStart:y,setAdornedStart:T,color:c,disabled:u,error:p,filled:A,focused:k,fullWidth:m,hiddenLabel:f,size:x,onBlur:()=>{L(!1)},onFocus:()=>{L(!0)},onEmpty:F,onFilled:I,registerEffect:P,required:E,variant:v}),[y,c,u,p,A,k,m,f,P,F,I,E,x,v]);return jsxRuntimeExports.jsx(FormControlContext.Provider,{value:H,children:jsxRuntimeExports.jsx(FormControlRoot,{as:_,ownerState:b,className:clsx(S.root,l),ref:n,...h,children:o})})});function getFormHelperTextUtilityClasses(t){return generateUtilityClass("MuiFormHelperText",t)}const formHelperTextClasses=generateUtilityClasses("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var _span$2;const useUtilityClasses$r=t=>{const{classes:r,contained:n,size:a,disabled:o,error:l,filled:c,focused:_,required:u}=t,p={root:["root",o&&"disabled",l&&"error",a&&`size${capitalize(a)}`,n&&"contained",_&&"focused",c&&"filled",u&&"required"]};return composeClasses(p,getFormHelperTextUtilityClasses,r)},FormHelperTextRoot=styled$1("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.size&&r[`size${capitalize(n.size)}`],n.contained&&r.contained,n.filled&&r.filled]}})(memoTheme(({theme:t})=>({color:(t.vars||t).palette.text.secondary,...t.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${formHelperTextClasses.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${formHelperTextClasses.error}`]:{color:(t.vars||t).palette.error.main},variants:[{props:{size:"small"},style:{marginTop:4}},{props:({ownerState:r})=>r.contained,style:{marginLeft:14,marginRight:14}}]}))),FormHelperText=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiFormHelperText"}),{children:o,className:l,component:c="p",disabled:_,error:u,filled:p,focused:d,margin:m,required:f,variant:g,...E}=a,x=useFormControl(),v=formControlState({props:a,muiFormControl:x,states:["variant","size","disabled","error","filled","focused","required"]}),h={...a,component:c,contained:v.variant==="filled"||v.variant==="outlined",variant:v.variant,size:v.size,disabled:v.disabled,error:v.error,filled:v.filled,focused:v.focused,required:v.required};delete h.ownerState;const b=useUtilityClasses$r(h);return jsxRuntimeExports.jsx(FormHelperTextRoot,{as:c,className:clsx(b.root,l),ref:n,...E,ownerState:h,children:o===" "?_span$2||(_span$2=jsxRuntimeExports.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):o})});function getFormLabelUtilityClasses(t){return generateUtilityClass("MuiFormLabel",t)}const formLabelClasses=generateUtilityClasses("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),useUtilityClasses$q=t=>{const{classes:r,color:n,focused:a,disabled:o,error:l,filled:c,required:_}=t,u={root:["root",`color${capitalize(n)}`,o&&"disabled",l&&"error",c&&"filled",a&&"focused",_&&"required"],asterisk:["asterisk",l&&"error"]};return composeClasses(u,getFormLabelUtilityClasses,r)},FormLabelRoot=styled$1("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.color==="secondary"&&r.colorSecondary,n.filled&&r.filled]}})(memoTheme(({theme:t})=>({color:(t.vars||t).palette.text.secondary,...t.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",variants:[...Object.entries(t.palette).filter(createSimplePaletteValueFilter()).map(([r])=>({props:{color:r},style:{[`&.${formLabelClasses.focused}`]:{color:(t.vars||t).palette[r].main}}})),{props:{},style:{[`&.${formLabelClasses.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${formLabelClasses.error}`]:{color:(t.vars||t).palette.error.main}}}]}))),AsteriskComponent=styled$1("span",{name:"MuiFormLabel",slot:"Asterisk"})(memoTheme(({theme:t})=>({[`&.${formLabelClasses.error}`]:{color:(t.vars||t).palette.error.main}}))),FormLabel=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiFormLabel"}),{children:o,className:l,color:c,component:_="label",disabled:u,error:p,filled:d,focused:m,required:f,...g}=a,E=useFormControl(),x=formControlState({props:a,muiFormControl:E,states:["color","required","focused","disabled","error","filled"]}),v={...a,color:x.color||"primary",component:_,disabled:x.disabled,error:x.error,filled:x.filled,focused:x.focused,required:x.required},h=useUtilityClasses$q(v);return jsxRuntimeExports.jsxs(FormLabelRoot,{as:_,ownerState:v,className:clsx(h.root,l),ref:n,...g,children:[o,x.required&&jsxRuntimeExports.jsxs(AsteriskComponent,{ownerState:v,"aria-hidden":!0,className:h.asterisk,children:[" ","*"]})]})}),useUtilityClasses$p=t=>{const{classes:r,disableUnderline:n}=t,o=composeClasses({root:["root",!n&&"underline"],input:["input"]},getInputUtilityClass,r);return{...r,...o}},InputRoot=styled$1(InputBaseRoot,{shouldForwardProp:t=>rootShouldForwardProp(t)||t==="classes",name:"MuiInput",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[...rootOverridesResolver(t,r),!n.disableUnderline&&r.underline]}})(memoTheme(({theme:t})=>{let n=t.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return t.vars&&(n=t.alpha(t.vars.palette.common.onBackground,t.vars.opacity.inputUnderline)),{position:"relative",variants:[{props:({ownerState:a})=>a.formControl,style:{"label + &":{marginTop:16}}},{props:({ownerState:a})=>!a.disableUnderline,style:{"&::after":{left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${inputClasses.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${inputClasses.error}`]:{"&::before, &::after":{borderBottomColor:(t.vars||t).palette.error.main}},"&::before":{borderBottom:`1px solid ${n}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${inputClasses.disabled}, .${inputClasses.error}):before`]:{borderBottom:`2px solid ${(t.vars||t).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${n}`}},[`&.${inputClasses.disabled}:before`]:{borderBottomStyle:"dotted"}}},...Object.entries(t.palette).filter(createSimplePaletteValueFilter()).map(([a])=>({props:{color:a,disableUnderline:!1},style:{"&::after":{borderBottom:`2px solid ${(t.vars||t).palette[a].main}`}}}))]}})),InputInput=styled$1(InputBaseInput,{name:"MuiInput",slot:"Input",overridesResolver:inputOverridesResolver})({}),Input=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiInput"}),{disableUnderline:o=!1,components:l={},componentsProps:c,fullWidth:_=!1,inputComponent:u="input",multiline:p=!1,slotProps:d,slots:m={},type:f="text",...g}=a,E=useUtilityClasses$p(a),v={root:{ownerState:{disableUnderline:o}}},h=d??c?deepmerge(d??c,v):v,b=m.root??l.Root??InputRoot,S=m.input??l.Input??InputInput;return jsxRuntimeExports.jsx(InputBase,{slots:{root:b,input:S},slotProps:h,fullWidth:_,inputComponent:u,multiline:p,ref:n,type:f,...g,classes:E})});Input.muiName="Input";function getInputLabelUtilityClasses(t){return generateUtilityClass("MuiInputLabel",t)}generateUtilityClasses("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const useUtilityClasses$o=t=>{const{classes:r,formControl:n,size:a,shrink:o,disableAnimation:l,variant:c,required:_}=t,u={root:["root",n&&"formControl",!l&&"animated",o&&"shrink",a&&a!=="medium"&&`size${capitalize(a)}`,c],asterisk:[_&&"asterisk"]},p=composeClasses(u,getInputLabelUtilityClasses,r);return{...r,...p}},InputLabelRoot=styled$1(FormLabel,{shouldForwardProp:t=>rootShouldForwardProp(t)||t==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[{[`& .${formLabelClasses.asterisk}`]:r.asterisk},r.root,n.formControl&&r.formControl,n.size==="small"&&r.sizeSmall,n.shrink&&r.shrink,!n.disableAnimation&&r.animated,n.focused&&r.focused,r[n.variant]]}})(memoTheme(({theme:t})=>({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",variants:[{props:({ownerState:r})=>r.formControl,style:{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"}},{props:{size:"small"},style:{transform:"translate(0, 17px) scale(1)"}},{props:({ownerState:r})=>r.shrink,style:{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"}},{props:({ownerState:r})=>!r.disableAnimation,style:{transition:t.transitions.create(["color","transform","max-width"],{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut})}},{props:{variant:"filled"},style:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"}},{props:{variant:"filled",size:"small"},style:{transform:"translate(12px, 13px) scale(1)"}},{props:({variant:r,ownerState:n})=>r==="filled"&&n.shrink,style:{userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"}},{props:({variant:r,ownerState:n,size:a})=>r==="filled"&&n.shrink&&a==="small",style:{transform:"translate(12px, 4px) scale(0.75)"}},{props:{variant:"outlined"},style:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"}},{props:{variant:"outlined",size:"small"},style:{transform:"translate(14px, 9px) scale(1)"}},{props:({variant:r,ownerState:n})=>r==="outlined"&&n.shrink,style:{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}}]}))),InputLabel=reactExports.forwardRef(function(r,n){const a=useDefaultProps({name:"MuiInputLabel",props:r}),{disableAnimation:o=!1,margin:l,shrink:c,variant:_,className:u,...p}=a,d=useFormControl();let m=c;typeof m>"u"&&d&&(m=d.filled||d.focused||d.adornedStart);const f=formControlState({props:a,muiFormControl:d,states:["size","variant","required","focused"]}),g={...a,disableAnimation:o,formControl:d,shrink:m,size:f.size,variant:f.variant,required:f.required,focused:f.focused},E=useUtilityClasses$o(g);return jsxRuntimeExports.jsx(InputLabelRoot,{"data-shrink":m,ref:n,className:clsx(E.root,u),...p,ownerState:g,classes:E})}),ListContext=reactExports.createContext({});function getListUtilityClass(t){return generateUtilityClass("MuiList",t)}generateUtilityClasses("MuiList",["root","padding","dense","subheader"]);const useUtilityClasses$n=t=>{const{classes:r,disablePadding:n,dense:a,subheader:o}=t;return composeClasses({root:["root",!n&&"padding",a&&"dense",o&&"subheader"]},getListUtilityClass,r)},ListRoot=styled$1("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,!n.disablePadding&&r.padding,n.dense&&r.dense,n.subheader&&r.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:t})=>!t.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:t})=>t.subheader,style:{paddingTop:0}}]}),List$1=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiList"}),{children:o,className:l,component:c="ul",dense:_=!1,disablePadding:u=!1,subheader:p,...d}=a,m=reactExports.useMemo(()=>({dense:_}),[_]),f={...a,component:c,dense:_,disablePadding:u},g=useUtilityClasses$n(f);return jsxRuntimeExports.jsx(ListContext.Provider,{value:m,children:jsxRuntimeExports.jsxs(ListRoot,{as:c,className:clsx(g.root,l),ref:n,ownerState:f,...d,children:[p,o]})})});function getListItemButtonUtilityClass(t){return generateUtilityClass("MuiListItemButton",t)}const listItemButtonClasses=generateUtilityClasses("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),overridesResolver=(t,r)=>{const{ownerState:n}=t;return[r.root,n.dense&&r.dense,n.alignItems==="flex-start"&&r.alignItemsFlexStart,n.divider&&r.divider,!n.disableGutters&&r.gutters]},useUtilityClasses$m=t=>{const{alignItems:r,classes:n,dense:a,disabled:o,disableGutters:l,divider:c,selected:_}=t,p=composeClasses({root:["root",a&&"dense",!l&&"gutters",c&&"divider",o&&"disabled",r==="flex-start"&&"alignItemsFlexStart",_&&"selected"]},getListItemButtonUtilityClass,n);return{...n,...p}},ListItemButtonRoot=styled$1(ButtonBase,{shouldForwardProp:t=>rootShouldForwardProp(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver})(memoTheme(({theme:t})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${listItemButtonClasses.selected}`]:{backgroundColor:t.alpha((t.vars||t).palette.primary.main,(t.vars||t).palette.action.selectedOpacity),[`&.${listItemButtonClasses.focusVisible}`]:{backgroundColor:t.alpha((t.vars||t).palette.primary.main,`${(t.vars||t).palette.action.selectedOpacity} + ${(t.vars||t).palette.action.focusOpacity}`)}},[`&.${listItemButtonClasses.selected}:hover`]:{backgroundColor:t.alpha((t.vars||t).palette.primary.main,`${(t.vars||t).palette.action.selectedOpacity} + ${(t.vars||t).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:t.alpha((t.vars||t).palette.primary.main,(t.vars||t).palette.action.selectedOpacity)}},[`&.${listItemButtonClasses.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${listItemButtonClasses.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},variants:[{props:({ownerState:r})=>r.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:r})=>!r.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:r})=>r.dense,style:{paddingTop:4,paddingBottom:4}}]}))),ListItemButton=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiListItemButton"}),{alignItems:o="center",autoFocus:l=!1,component:c="div",children:_,dense:u=!1,disableGutters:p=!1,divider:d=!1,focusVisibleClassName:m,selected:f=!1,className:g,...E}=a,x=reactExports.useContext(ListContext),v=reactExports.useMemo(()=>({dense:u||x.dense||!1,alignItems:o,disableGutters:p}),[o,x.dense,u,p]),h=reactExports.useRef(null);useEnhancedEffect(()=>{l&&h.current&&h.current.focus()},[l]);const b={...a,alignItems:o,dense:v.dense,disableGutters:p,divider:d,selected:f},S=useUtilityClasses$m(b),y=useForkRef(h,n);return jsxRuntimeExports.jsx(ListContext.Provider,{value:v,children:jsxRuntimeExports.jsx(ListItemButtonRoot,{ref:y,href:E.href||E.to,component:(E.href||E.to)&&c==="div"?"button":c,focusVisibleClassName:clsx(S.focusVisible,m),ownerState:b,className:clsx(S.root,g),...E,classes:S,children:_})})});function getListItemTextUtilityClass(t){return generateUtilityClass("MuiListItemText",t)}const listItemTextClasses=generateUtilityClasses("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),useUtilityClasses$l=t=>{const{classes:r,inset:n,primary:a,secondary:o,dense:l}=t;return composeClasses({root:["root",n&&"inset",l&&"dense",a&&o&&"multiline"],primary:["primary"],secondary:["secondary"]},getListItemTextUtilityClass,r)},ListItemTextRoot=styled$1("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[{[`& .${listItemTextClasses.primary}`]:r.primary},{[`& .${listItemTextClasses.secondary}`]:r.secondary},r.root,n.inset&&r.inset,n.primary&&n.secondary&&r.multiline,n.dense&&r.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${typographyClasses.root}:where(& .${listItemTextClasses.primary})`]:{display:"block"},[`.${typographyClasses.root}:where(& .${listItemTextClasses.secondary})`]:{display:"block"},variants:[{props:({ownerState:t})=>t.primary&&t.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:t})=>t.inset,style:{paddingLeft:56}}]}),ListItemText=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiListItemText"}),{children:o,className:l,disableTypography:c=!1,inset:_=!1,primary:u,primaryTypographyProps:p,secondary:d,secondaryTypographyProps:m,slots:f={},slotProps:g={},...E}=a,{dense:x}=reactExports.useContext(ListContext);let v=u??o,h=d;const b={...a,disableTypography:c,inset:_,primary:!!v,secondary:!!h,dense:x},S=useUtilityClasses$l(b),y={slots:f,slotProps:{primary:p,secondary:m,...g}},[T,A]=useSlot("root",{className:clsx(S.root,l),elementType:ListItemTextRoot,externalForwardedProps:{...y,...E},ownerState:b,ref:n}),[w,C]=useSlot("primary",{className:S.primary,elementType:Typography,externalForwardedProps:y,ownerState:b}),[L,k]=useSlot("secondary",{className:S.secondary,elementType:Typography,externalForwardedProps:y,ownerState:b});return v!=null&&v.type!==Typography&&!c&&(v=jsxRuntimeExports.jsx(w,{variant:x?"body2":"body1",component:C?.variant?void 0:"span",...C,children:v})),h!=null&&h.type!==Typography&&!c&&(h=jsxRuntimeExports.jsx(L,{variant:"body2",color:"textSecondary",...k,children:h})),jsxRuntimeExports.jsxs(T,{...A,children:[v,h]})});function nextItem$1(t,r,n){return t===r?t.firstChild:r&&r.nextElementSibling?r.nextElementSibling:n?null:t.firstChild}function previousItem$1(t,r,n){return t===r?n?t.firstChild:t.lastChild:r&&r.previousElementSibling?r.previousElementSibling:n?null:t.lastChild}function textCriteriaMatches(t,r){if(r===void 0)return!0;let n=t.innerText;return n===void 0&&(n=t.textContent),n=n.trim().toLowerCase(),n.length===0?!1:r.repeating?n[0]===r.keys[0]:n.startsWith(r.keys.join(""))}function moveFocus$1(t,r,n,a,o,l){let c=!1,_=o(t,r,r?n:!1);for(;_;){if(_===t.firstChild){if(c)return!1;c=!0}const u=a?!1:_.disabled||_.getAttribute("aria-disabled")==="true";if(!_.hasAttribute("tabindex")||!textCriteriaMatches(_,l)||u)_=o(t,_,n);else return _.focus(),!0}return!1}const MenuList=reactExports.forwardRef(function(r,n){const{actions:a,autoFocus:o=!1,autoFocusItem:l=!1,children:c,className:_,disabledItemsFocusable:u=!1,disableListWrap:p=!1,onKeyDown:d,variant:m="selectedMenu",...f}=r,g=reactExports.useRef(null),E=reactExports.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});useEnhancedEffect(()=>{o&&g.current.focus()},[o]),reactExports.useImperativeHandle(a,()=>({adjustStyleForScrollbar:(S,{direction:y})=>{const T=!g.current.style.width;if(S.clientHeight<g.current.clientHeight&&T){const A=`${getScrollbarSize(ownerWindow(S))}px`;g.current.style[y==="rtl"?"paddingLeft":"paddingRight"]=A,g.current.style.width=`calc(100% + ${A})`}return g.current}}),[]);const x=S=>{const y=g.current,T=S.key;if(S.ctrlKey||S.metaKey||S.altKey){d&&d(S);return}const w=ownerDocument(y).activeElement;if(T==="ArrowDown")S.preventDefault(),moveFocus$1(y,w,p,u,nextItem$1);else if(T==="ArrowUp")S.preventDefault(),moveFocus$1(y,w,p,u,previousItem$1);else if(T==="Home")S.preventDefault(),moveFocus$1(y,null,p,u,nextItem$1);else if(T==="End")S.preventDefault(),moveFocus$1(y,null,p,u,previousItem$1);else if(T.length===1){const C=E.current,L=T.toLowerCase(),k=performance.now();C.keys.length>0&&(k-C.lastTime>500?(C.keys=[],C.repeating=!0,C.previousKeyMatched=!0):C.repeating&&L!==C.keys[0]&&(C.repeating=!1)),C.lastTime=k,C.keys.push(L);const P=w&&!C.repeating&&textCriteriaMatches(w,C);C.previousKeyMatched&&(P||moveFocus$1(y,w,!1,u,nextItem$1,C))?S.preventDefault():C.previousKeyMatched=!1}d&&d(S)},v=useForkRef(g,n);let h=-1;reactExports.Children.forEach(c,(S,y)=>{if(!reactExports.isValidElement(S)){h===y&&(h+=1,h>=c.length&&(h=-1));return}S.props.disabled||(m==="selectedMenu"&&S.props.selected||h===-1)&&(h=y),h===y&&(S.props.disabled||S.props.muiSkipListHighlight||S.type.muiSkipListHighlight)&&(h+=1,h>=c.length&&(h=-1))});const b=reactExports.Children.map(c,(S,y)=>{if(y===h){const T={};return l&&(T.autoFocus=!0),S.props.tabIndex===void 0&&m==="selectedMenu"&&(T.tabIndex=0),reactExports.cloneElement(S,T)}return S});return jsxRuntimeExports.jsx(List$1,{role:"menu",ref:v,className:_,onKeyDown:x,tabIndex:o?0:-1,...f,children:b})});function getPopoverUtilityClass(t){return generateUtilityClass("MuiPopover",t)}generateUtilityClasses("MuiPopover",["root","paper"]);function getOffsetTop(t,r){let n=0;return typeof r=="number"?n=r:r==="center"?n=t.height/2:r==="bottom"&&(n=t.height),n}function getOffsetLeft(t,r){let n=0;return typeof r=="number"?n=r:r==="center"?n=t.width/2:r==="right"&&(n=t.width),n}function getTransformOriginValue(t){return[t.horizontal,t.vertical].map(r=>typeof r=="number"?`${r}px`:r).join(" ")}function resolveAnchorEl(t){return typeof t=="function"?t():t}const useUtilityClasses$k=t=>{const{classes:r}=t;return composeClasses({root:["root"],paper:["paper"]},getPopoverUtilityClass,r)},PopoverRoot=styled$1(Modal,{name:"MuiPopover",slot:"Root"})({}),PopoverPaper=styled$1(Paper,{name:"MuiPopover",slot:"Paper"})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Popover=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiPopover"}),{action:o,anchorEl:l,anchorOrigin:c={vertical:"top",horizontal:"left"},anchorPosition:_,anchorReference:u="anchorEl",children:p,className:d,container:m,elevation:f=8,marginThreshold:g=16,open:E,PaperProps:x={},slots:v={},slotProps:h={},transformOrigin:b={vertical:"top",horizontal:"left"},TransitionComponent:S,transitionDuration:y="auto",TransitionProps:T={},disableScrollLock:A=!1,...w}=a,C=reactExports.useRef(),L={...a,anchorOrigin:c,anchorReference:u,elevation:f,marginThreshold:g,transformOrigin:b,TransitionComponent:S,transitionDuration:y,TransitionProps:T},k=useUtilityClasses$k(L),P=reactExports.useCallback(()=>{if(u==="anchorPosition")return _;const ne=resolveAnchorEl(l),Z=(ne&&ne.nodeType===1?ne:ownerDocument(C.current).body).getBoundingClientRect();return{top:Z.top+getOffsetTop(Z,c.vertical),left:Z.left+getOffsetLeft(Z,c.horizontal)}},[l,c.horizontal,c.vertical,_,u]),I=reactExports.useCallback(ne=>({vertical:getOffsetTop(ne,b.vertical),horizontal:getOffsetLeft(ne,b.horizontal)}),[b.horizontal,b.vertical]),F=reactExports.useCallback(ne=>{const _e={width:ne.offsetWidth,height:ne.offsetHeight},Z=I(_e);if(u==="none")return{top:null,left:null,transformOrigin:getTransformOriginValue(Z)};const ge=P();let ie=ge.top-Z.vertical,le=ge.left-Z.horizontal;const xe=ie+_e.height,ce=le+_e.width,ye=ownerWindow(resolveAnchorEl(l)),ke=ye.innerHeight-g,Ae=ye.innerWidth-g;if(g!==null&&ie<g){const he=ie-g;ie-=he,Z.vertical+=he}else if(g!==null&&xe>ke){const he=xe-ke;ie-=he,Z.vertical+=he}if(g!==null&&le<g){const he=le-g;le-=he,Z.horizontal+=he}else if(ce>Ae){const he=ce-Ae;le-=he,Z.horizontal+=he}return{top:`${Math.round(ie)}px`,left:`${Math.round(le)}px`,transformOrigin:getTransformOriginValue(Z)}},[l,u,P,I,g]),[H,O]=reactExports.useState(E),R=reactExports.useCallback(()=>{const ne=C.current;if(!ne)return;const _e=F(ne);_e.top!==null&&ne.style.setProperty("top",_e.top),_e.left!==null&&(ne.style.left=_e.left),ne.style.transformOrigin=_e.transformOrigin,O(!0)},[F]);reactExports.useEffect(()=>(A&&window.addEventListener("scroll",R),()=>window.removeEventListener("scroll",R)),[l,A,R]);const M=()=>{R()},G=()=>{O(!1)};reactExports.useEffect(()=>{E&&R()}),reactExports.useImperativeHandle(o,()=>E?{updatePosition:()=>{R()}}:null,[E,R]),reactExports.useEffect(()=>{if(!E)return;const ne=debounce$1(()=>{R()}),_e=ownerWindow(resolveAnchorEl(l));return _e.addEventListener("resize",ne),()=>{ne.clear(),_e.removeEventListener("resize",ne)}},[l,E,R]);let U=y;const j={slots:{transition:S,...v},slotProps:{transition:T,paper:x,...h}},[V,$]=useSlot("transition",{elementType:Grow,externalForwardedProps:j,ownerState:L,getSlotProps:ne=>({...ne,onEntering:(_e,Z)=>{ne.onEntering?.(_e,Z),M()},onExited:_e=>{ne.onExited?.(_e),G()}}),additionalProps:{appear:!0,in:E}});y==="auto"&&!V.muiSupportAuto&&(U=void 0);const Q=m||(l?ownerDocument(resolveAnchorEl(l)).body:void 0),[re,{slots:X,slotProps:Y,...oe}]=useSlot("root",{ref:n,elementType:PopoverRoot,externalForwardedProps:{...j,...w},shouldForwardComponentProp:!0,additionalProps:{slots:{backdrop:v.backdrop},slotProps:{backdrop:mergeSlotProps(typeof h.backdrop=="function"?h.backdrop(L):h.backdrop,{invisible:!0})},container:Q,open:E},ownerState:L,className:clsx(k.root,d)}),[fe,ve]=useSlot("paper",{ref:C,className:k.paper,elementType:PopoverPaper,externalForwardedProps:j,shouldForwardComponentProp:!0,additionalProps:{elevation:f,style:H?void 0:{opacity:0}},ownerState:L});return jsxRuntimeExports.jsx(re,{...oe,...!isHostComponent(re)&&{slots:X,slotProps:Y,disableScrollLock:A},children:jsxRuntimeExports.jsx(V,{...$,timeout:U,children:jsxRuntimeExports.jsx(fe,{...ve,children:p})})})});function getMenuUtilityClass(t){return generateUtilityClass("MuiMenu",t)}generateUtilityClasses("MuiMenu",["root","paper","list"]);const RTL_ORIGIN={vertical:"top",horizontal:"right"},LTR_ORIGIN={vertical:"top",horizontal:"left"},useUtilityClasses$j=t=>{const{classes:r}=t;return composeClasses({root:["root"],paper:["paper"],list:["list"]},getMenuUtilityClass,r)},MenuRoot=styled$1(Popover,{shouldForwardProp:t=>rootShouldForwardProp(t)||t==="classes",name:"MuiMenu",slot:"Root"})({}),MenuPaper=styled$1(PopoverPaper,{name:"MuiMenu",slot:"Paper"})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),MenuMenuList=styled$1(MenuList,{name:"MuiMenu",slot:"List"})({outline:0}),Menu=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiMenu"}),{autoFocus:o=!0,children:l,className:c,disableAutoFocusItem:_=!1,MenuListProps:u={},onClose:p,open:d,PaperProps:m={},PopoverClasses:f,transitionDuration:g="auto",TransitionProps:{onEntering:E,...x}={},variant:v="selectedMenu",slots:h={},slotProps:b={},...S}=a,y=useRtl(),T={...a,autoFocus:o,disableAutoFocusItem:_,MenuListProps:u,onEntering:E,PaperProps:m,transitionDuration:g,TransitionProps:x,variant:v},A=useUtilityClasses$j(T),w=o&&!_&&d,C=reactExports.useRef(null),L=(U,j)=>{C.current&&C.current.adjustStyleForScrollbar(U,{direction:y?"rtl":"ltr"}),E&&E(U,j)},k=U=>{U.key==="Tab"&&(U.preventDefault(),p&&p(U,"tabKeyDown"))};let P=-1;reactExports.Children.map(l,(U,j)=>{reactExports.isValidElement(U)&&(U.props.disabled||(v==="selectedMenu"&&U.props.selected||P===-1)&&(P=j))});const I={slots:h,slotProps:{list:u,transition:x,paper:m,...b}},F=useSlotProps({elementType:h.root,externalSlotProps:b.root,ownerState:T,className:[A.root,c]}),[H,O]=useSlot("paper",{className:A.paper,elementType:MenuPaper,externalForwardedProps:I,shouldForwardComponentProp:!0,ownerState:T}),[R,M]=useSlot("list",{className:clsx(A.list,u.className),elementType:MenuMenuList,shouldForwardComponentProp:!0,externalForwardedProps:I,getSlotProps:U=>({...U,onKeyDown:j=>{k(j),U.onKeyDown?.(j)}}),ownerState:T}),G=typeof I.slotProps.transition=="function"?I.slotProps.transition(T):I.slotProps.transition;return jsxRuntimeExports.jsx(MenuRoot,{onClose:p,anchorOrigin:{vertical:"bottom",horizontal:y?"right":"left"},transformOrigin:y?RTL_ORIGIN:LTR_ORIGIN,slots:{root:h.root,paper:H,backdrop:h.backdrop,...h.transition&&{transition:h.transition}},slotProps:{root:F,paper:O,backdrop:typeof b.backdrop=="function"?b.backdrop(T):b.backdrop,transition:{...G,onEntering:(...U)=>{L(...U),G?.onEntering?.(...U)}}},open:d,ref:n,transitionDuration:g,ownerState:T,...S,classes:f,children:jsxRuntimeExports.jsx(R,{actions:C,autoFocus:o&&(P===-1||_),autoFocusItem:w,variant:v,...M,children:l})})});function getNativeSelectUtilityClasses(t){return generateUtilityClass("MuiNativeSelect",t)}const nativeSelectClasses=generateUtilityClasses("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),useUtilityClasses$i=t=>{const{classes:r,variant:n,disabled:a,multiple:o,open:l,error:c}=t,_={select:["select",n,a&&"disabled",o&&"multiple",c&&"error"],icon:["icon",`icon${capitalize(n)}`,l&&"iconOpen",a&&"disabled"]};return composeClasses(_,getNativeSelectUtilityClasses,r)},StyledSelectSelect=styled$1("select",{name:"MuiNativeSelect"})(({theme:t})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{borderRadius:0},[`&.${nativeSelectClasses.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},variants:[{props:({ownerState:r})=>r.variant!=="filled"&&r.variant!=="outlined",style:{"&&&":{paddingRight:24,minWidth:16}}},{props:{variant:"filled"},style:{"&&&":{paddingRight:32}}},{props:{variant:"outlined"},style:{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}}]})),NativeSelectSelect=styled$1(StyledSelectSelect,{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:rootShouldForwardProp,overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.select,r[n.variant],n.error&&r.error,{[`&.${nativeSelectClasses.multiple}`]:r.multiple}]}})({}),StyledSelectIcon=styled$1("svg",{name:"MuiNativeSelect"})(({theme:t})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${nativeSelectClasses.disabled}`]:{color:(t.vars||t).palette.action.disabled},variants:[{props:({ownerState:r})=>r.open,style:{transform:"rotate(180deg)"}},{props:{variant:"filled"},style:{right:7}},{props:{variant:"outlined"},style:{right:7}}]})),NativeSelectIcon=styled$1(StyledSelectIcon,{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.icon,n.variant&&r[`icon${capitalize(n.variant)}`],n.open&&r.iconOpen]}})({}),NativeSelectInput=reactExports.forwardRef(function(r,n){const{className:a,disabled:o,error:l,IconComponent:c,inputRef:_,variant:u="standard",...p}=r,d={...r,disabled:o,variant:u,error:l},m=useUtilityClasses$i(d);return jsxRuntimeExports.jsxs(reactExports.Fragment,{children:[jsxRuntimeExports.jsx(NativeSelectSelect,{ownerState:d,className:clsx(m.select,a),disabled:o,ref:_||n,...p}),r.multiple?null:jsxRuntimeExports.jsx(NativeSelectIcon,{as:c,ownerState:d,className:m.icon})]})});var _span$1;const NotchedOutlineRoot$1=styled$1("fieldset",{name:"MuiNotchedOutlined",shouldForwardProp:rootShouldForwardProp})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),NotchedOutlineLegend=styled$1("legend",{name:"MuiNotchedOutlined",shouldForwardProp:rootShouldForwardProp})(memoTheme(({theme:t})=>({float:"unset",width:"auto",overflow:"hidden",variants:[{props:({ownerState:r})=>!r.withLabel,style:{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})}},{props:({ownerState:r})=>r.withLabel,style:{display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}}},{props:({ownerState:r})=>r.withLabel&&r.notched,style:{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})}}]})));function NotchedOutline(t){const{children:r,classes:n,className:a,label:o,notched:l,...c}=t,_=o!=null&&o!=="",u={...t,notched:l,withLabel:_};return jsxRuntimeExports.jsx(NotchedOutlineRoot$1,{"aria-hidden":!0,className:a,ownerState:u,...c,children:jsxRuntimeExports.jsx(NotchedOutlineLegend,{ownerState:u,children:_?jsxRuntimeExports.jsx("span",{children:o}):_span$1||(_span$1=jsxRuntimeExports.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"}))})})}const useUtilityClasses$h=t=>{const{classes:r}=t,a=composeClasses({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},getOutlinedInputUtilityClass,r);return{...r,...a}},OutlinedInputRoot=styled$1(InputBaseRoot,{shouldForwardProp:t=>rootShouldForwardProp(t)||t==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:rootOverridesResolver})(memoTheme(({theme:t})=>{const r=t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{position:"relative",borderRadius:(t.vars||t).shape.borderRadius,[`&:hover .${outlinedInputClasses.notchedOutline}`]:{borderColor:(t.vars||t).palette.text.primary},"@media (hover: none)":{[`&:hover .${outlinedInputClasses.notchedOutline}`]:{borderColor:t.vars?t.alpha(t.vars.palette.common.onBackground,.23):r}},[`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:{borderWidth:2},variants:[...Object.entries(t.palette).filter(createSimplePaletteValueFilter()).map(([n])=>({props:{color:n},style:{[`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:{borderColor:(t.vars||t).palette[n].main}}})),{props:{},style:{[`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]:{borderColor:(t.vars||t).palette.error.main},[`&.${outlinedInputClasses.disabled} .${outlinedInputClasses.notchedOutline}`]:{borderColor:(t.vars||t).palette.action.disabled}}},{props:({ownerState:n})=>n.startAdornment,style:{paddingLeft:14}},{props:({ownerState:n})=>n.endAdornment,style:{paddingRight:14}},{props:({ownerState:n})=>n.multiline,style:{padding:"16.5px 14px"}},{props:({ownerState:n,size:a})=>n.multiline&&a==="small",style:{padding:"8.5px 14px"}}]}})),NotchedOutlineRoot=styled$1(NotchedOutline,{name:"MuiOutlinedInput",slot:"NotchedOutline"})(memoTheme(({theme:t})=>{const r=t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:t.vars?t.alpha(t.vars.palette.common.onBackground,.23):r}})),OutlinedInputInput=styled$1(InputBaseInput,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:inputOverridesResolver})(memoTheme(({theme:t})=>({padding:"16.5px 14px",...!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:t.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:t.palette.mode==="light"?null:"#fff",caretColor:t.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},...t.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[t.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},variants:[{props:{size:"small"},style:{padding:"8.5px 14px"}},{props:({ownerState:r})=>r.multiline,style:{padding:0}},{props:({ownerState:r})=>r.startAdornment,style:{paddingLeft:0}},{props:({ownerState:r})=>r.endAdornment,style:{paddingRight:0}}]}))),OutlinedInput=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiOutlinedInput"}),{components:o={},fullWidth:l=!1,inputComponent:c="input",label:_,multiline:u=!1,notched:p,slots:d={},slotProps:m={},type:f="text",...g}=a,E=useUtilityClasses$h(a),x=useFormControl(),v=formControlState({props:a,muiFormControl:x,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),h={...a,color:v.color||"primary",disabled:v.disabled,error:v.error,focused:v.focused,formControl:x,fullWidth:l,hiddenLabel:v.hiddenLabel,multiline:u,size:v.size,type:f},b=d.root??o.Root??OutlinedInputRoot,S=d.input??o.Input??OutlinedInputInput,[y,T]=useSlot("notchedOutline",{elementType:NotchedOutlineRoot,className:E.notchedOutline,shouldForwardComponentProp:!0,ownerState:h,externalForwardedProps:{slots:d,slotProps:m},additionalProps:{label:_!=null&&_!==""&&v.required?jsxRuntimeExports.jsxs(reactExports.Fragment,{children:[_," ","*"]}):_}});return jsxRuntimeExports.jsx(InputBase,{slots:{root:b,input:S},slotProps:m,renderSuffix:A=>jsxRuntimeExports.jsx(y,{...T,notched:typeof p<"u"?p:!!(A.startAdornment||A.filled||A.focused)}),fullWidth:l,inputComponent:c,multiline:u,ref:n,type:f,...g,classes:{...E,notchedOutline:null}})});OutlinedInput.muiName="Input";const visuallyHidden={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function getSelectUtilityClasses(t){return generateUtilityClass("MuiSelect",t)}const selectClasses=generateUtilityClasses("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]);var _span;const SelectSelect=styled$1(StyledSelectSelect,{name:"MuiSelect",slot:"Select",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[{[`&.${selectClasses.select}`]:r.select},{[`&.${selectClasses.select}`]:r[n.variant]},{[`&.${selectClasses.error}`]:r.error},{[`&.${selectClasses.multiple}`]:r.multiple}]}})({[`&.${selectClasses.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),SelectIcon=styled$1(StyledSelectIcon,{name:"MuiSelect",slot:"Icon",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.icon,n.variant&&r[`icon${capitalize(n.variant)}`],n.open&&r.iconOpen]}})({}),SelectNativeInput=styled$1("input",{shouldForwardProp:t=>slotShouldForwardProp(t)&&t!=="classes",name:"MuiSelect",slot:"NativeInput"})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function areEqualValues(t,r){return typeof r=="object"&&r!==null?t===r:String(t)===String(r)}function isEmpty(t){return t==null||typeof t=="string"&&!t.trim()}const useUtilityClasses$g=t=>{const{classes:r,variant:n,disabled:a,multiple:o,open:l,error:c}=t,_={select:["select",n,a&&"disabled",o&&"multiple",c&&"error"],icon:["icon",`icon${capitalize(n)}`,l&&"iconOpen",a&&"disabled"],nativeInput:["nativeInput"]};return composeClasses(_,getSelectUtilityClasses,r)},SelectInput=reactExports.forwardRef(function(r,n){const{"aria-describedby":a,"aria-label":o,autoFocus:l,autoWidth:c,children:_,className:u,defaultOpen:p,defaultValue:d,disabled:m,displayEmpty:f,error:g=!1,IconComponent:E,inputRef:x,labelId:v,MenuProps:h={},multiple:b,name:S,onBlur:y,onChange:T,onClose:A,onFocus:w,onOpen:C,open:L,readOnly:k,renderValue:P,required:I,SelectDisplayProps:F={},tabIndex:H,type:O,value:R,variant:M="standard",...G}=r,[U,j]=useControlled({controlled:R,default:d,name:"Select"}),[V,$]=useControlled({controlled:L,default:p,name:"Select"}),Q=reactExports.useRef(null),re=reactExports.useRef(null),[X,Y]=reactExports.useState(null),{current:oe}=reactExports.useRef(L!=null),[fe,ve]=reactExports.useState(),ne=useForkRef(n,x),_e=reactExports.useCallback(D=>{re.current=D,D&&Y(D)},[]),Z=X?.parentNode;reactExports.useImperativeHandle(ne,()=>({focus:()=>{re.current.focus()},node:Q.current,value:U}),[U]),reactExports.useEffect(()=>{p&&V&&X&&!oe&&(ve(c?null:Z.clientWidth),re.current.focus())},[X,c]),reactExports.useEffect(()=>{l&&re.current.focus()},[l]),reactExports.useEffect(()=>{if(!v)return;const D=ownerDocument(re.current).getElementById(v);if(D){const N=()=>{getSelection().isCollapsed&&re.current.focus()};return D.addEventListener("click",N),()=>{D.removeEventListener("click",N)}}},[v]);const ge=(D,N)=>{D?C&&C(N):A&&A(N),oe||(ve(c?null:Z.clientWidth),$(D))},ie=D=>{D.button===0&&(D.preventDefault(),re.current.focus(),ge(!0,D))},le=D=>{ge(!1,D)},xe=reactExports.Children.toArray(_),ce=D=>{const N=xe.find(W=>W.props.value===D.target.value);N!==void 0&&(j(N.props.value),T&&T(D,N))},ye=D=>N=>{let W;if(N.currentTarget.hasAttribute("tabindex")){if(b){W=Array.isArray(U)?U.slice():[];const q=U.indexOf(D.props.value);q===-1?W.push(D.props.value):W.splice(q,1)}else W=D.props.value;if(D.props.onClick&&D.props.onClick(N),U!==W&&(j(W),T)){const q=N.nativeEvent||N,te=new q.constructor(q.type,q);Object.defineProperty(te,"target",{writable:!0,value:{value:W,name:S}}),T(te,D)}b||ge(!1,N)}},ke=D=>{k||[" ","ArrowUp","ArrowDown","Enter"].includes(D.key)&&(D.preventDefault(),ge(!0,D))},Ae=X!==null&&V,he=D=>{!Ae&&y&&(Object.defineProperty(D,"target",{writable:!0,value:{value:U,name:S}}),y(D))};delete G["aria-invalid"];let Re,Fe;const we=[];let z=!1;(isFilled({value:U})||f)&&(P?Re=P(U):z=!0);const K=xe.map(D=>{if(!reactExports.isValidElement(D))return null;let N;if(b){if(!Array.isArray(U))throw new Error(formatMuiErrorMessage(2));N=U.some(W=>areEqualValues(W,D.props.value)),N&&z&&we.push(D.props.children)}else N=areEqualValues(U,D.props.value),N&&z&&(Fe=D.props.children);return reactExports.cloneElement(D,{"aria-selected":N?"true":"false",onClick:ye(D),onKeyUp:W=>{W.key===" "&&W.preventDefault(),D.props.onKeyUp&&D.props.onKeyUp(W)},role:"option",selected:N,value:void 0,"data-value":D.props.value})});z&&(b?we.length===0?Re=null:Re=we.reduce((D,N,W)=>(D.push(N),W<we.length-1&&D.push(", "),D),[]):Re=Fe);let ee=fe;!c&&oe&&X&&(ee=Z.clientWidth);let ue;typeof H<"u"?ue=H:ue=m?null:0;const de=F.id||(S?`mui-component-select-${S}`:void 0),ae={...r,variant:M,value:U,open:Ae,error:g},se=useUtilityClasses$g(ae),Le={...h.PaperProps,...typeof h.slotProps?.paper=="function"?h.slotProps.paper(ae):h.slotProps?.paper},Te={...h.MenuListProps,...typeof h.slotProps?.list=="function"?h.slotProps.list(ae):h.slotProps?.list},B=useId();return jsxRuntimeExports.jsxs(reactExports.Fragment,{children:[jsxRuntimeExports.jsx(SelectSelect,{as:"div",ref:_e,tabIndex:ue,role:"combobox","aria-controls":Ae?B:void 0,"aria-disabled":m?"true":void 0,"aria-expanded":Ae?"true":"false","aria-haspopup":"listbox","aria-label":o,"aria-labelledby":[v,de].filter(Boolean).join(" ")||void 0,"aria-describedby":a,"aria-required":I?"true":void 0,"aria-invalid":g?"true":void 0,onKeyDown:ke,onMouseDown:m||k?null:ie,onBlur:he,onFocus:w,...F,ownerState:ae,className:clsx(F.className,se.select,u),id:de,children:isEmpty(Re)?_span||(_span=jsxRuntimeExports.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):Re}),jsxRuntimeExports.jsx(SelectNativeInput,{"aria-invalid":g,value:Array.isArray(U)?U.join(","):U,name:S,ref:Q,"aria-hidden":!0,onChange:ce,tabIndex:-1,disabled:m,className:se.nativeInput,autoFocus:l,required:I,...G,ownerState:ae}),jsxRuntimeExports.jsx(SelectIcon,{as:E,className:se.icon,ownerState:ae}),jsxRuntimeExports.jsx(Menu,{id:`menu-${S||""}`,anchorEl:Z,open:Ae,onClose:le,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},...h,slotProps:{...h.slotProps,list:{"aria-labelledby":v,role:"listbox","aria-multiselectable":b?"true":void 0,disableListWrap:!0,id:B,...Te},paper:{...Le,style:{minWidth:ee,...Le!=null?Le.style:null}}},children:K})]})}),useUtilityClasses$f=t=>{const{classes:r}=t,a=composeClasses({root:["root"]},getSelectUtilityClasses,r);return{...r,...a}},styledRootConfig={name:"MuiSelect",slot:"Root",shouldForwardProp:t=>rootShouldForwardProp(t)&&t!=="variant"},StyledInput=styled$1(Input,styledRootConfig)(""),StyledOutlinedInput=styled$1(OutlinedInput,styledRootConfig)(""),StyledFilledInput=styled$1(FilledInput,styledRootConfig)(""),Select=reactExports.forwardRef(function(r,n){const a=useDefaultProps({name:"MuiSelect",props:r}),{autoWidth:o=!1,children:l,classes:c={},className:_,defaultOpen:u=!1,displayEmpty:p=!1,IconComponent:d=ArrowDropDownIcon,id:m,input:f,inputProps:g,label:E,labelId:x,MenuProps:v,multiple:h=!1,native:b=!1,onClose:S,onOpen:y,open:T,renderValue:A,SelectDisplayProps:w,variant:C="outlined",...L}=a,k=b?NativeSelectInput:SelectInput,P=useFormControl(),I=formControlState({props:a,muiFormControl:P,states:["variant","error"]}),F=I.variant||C,H={...a,variant:F,classes:c},O=useUtilityClasses$f(H),{root:R,...M}=O,G=f||{standard:jsxRuntimeExports.jsx(StyledInput,{ownerState:H}),outlined:jsxRuntimeExports.jsx(StyledOutlinedInput,{label:E,ownerState:H}),filled:jsxRuntimeExports.jsx(StyledFilledInput,{ownerState:H})}[F],U=useForkRef(n,getReactElementRef(G));return jsxRuntimeExports.jsx(reactExports.Fragment,{children:reactExports.cloneElement(G,{inputComponent:k,inputProps:{children:l,error:I.error,IconComponent:d,variant:F,type:void 0,multiple:h,...b?{id:m}:{autoWidth:o,defaultOpen:u,displayEmpty:p,labelId:x,MenuProps:v,onClose:S,onOpen:y,open:T,renderValue:A,SelectDisplayProps:{id:m,...w}},...g,classes:g?deepmerge(M,g.classes):M,...f?f.props.inputProps:{}},...(h&&b||p)&&F==="outlined"?{notched:!0}:{},ref:U,className:clsx(G.props.className,_,O.root),...!f&&{variant:F},...L})})});Select.muiName="Select";function areArraysEqual(t,r,n=(a,o)=>a===o){return t.length===r.length&&t.every((a,o)=>n(a,r[o]))}const INTENTIONAL_DRAG_COUNT_THRESHOLD=2;function getNewValue(t,r,n,a,o){return n===1?Math.min(t+r,o):Math.max(t-r,a)}function asc(t,r){return t-r}function findClosest(t,r){const{index:n}=t.reduce((a,o,l)=>{const c=Math.abs(r-o);return a===null||c<a.distance||c===a.distance?{distance:c,index:l}:a},null)??{};return n}function trackFinger(t,r){if(r.current!==void 0&&t.changedTouches){const n=t;for(let a=0;a<n.changedTouches.length;a+=1){const o=n.changedTouches[a];if(o.identifier===r.current)return{x:o.clientX,y:o.clientY}}return!1}return{x:t.clientX,y:t.clientY}}function valueToPercent(t,r,n){return(t-r)*100/(n-r)}function percentToValue(t,r,n){return(n-r)*t+r}function getDecimalPrecision(t){if(Math.abs(t)<1){const n=t.toExponential().split("e-"),a=n[0].split(".")[1];return(a?a.length:0)+parseInt(n[1],10)}const r=t.toString().split(".")[1];return r?r.length:0}function roundValueToStep(t,r,n){const a=Math.round((t-n)/r)*r+n;return Number(a.toFixed(getDecimalPrecision(r)))}function setValueIndex({values:t,newValue:r,index:n}){const a=t.slice();return a[n]=r,a.sort(asc)}function focusThumb({sliderRef:t,activeIndex:r,setActive:n}){const a=ownerDocument(t.current);(!t.current?.contains(a.activeElement)||Number(a?.activeElement?.getAttribute("data-index"))!==r)&&t.current?.querySelector(`[type="range"][data-index="${r}"]`).focus(),n&&n(r)}function areValuesEqual(t,r){return typeof t=="number"&&typeof r=="number"?t===r:typeof t=="object"&&typeof r=="object"?areArraysEqual(t,r):!1}const axisProps={horizontal:{offset:t=>({left:`${t}%`}),leap:t=>({width:`${t}%`})},"horizontal-reverse":{offset:t=>({right:`${t}%`}),leap:t=>({width:`${t}%`})},vertical:{offset:t=>({bottom:`${t}%`}),leap:t=>({height:`${t}%`})}},Identity$1=t=>t;let cachedSupportsTouchActionNone;function doesSupportTouchActionNone(){return cachedSupportsTouchActionNone===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?cachedSupportsTouchActionNone=CSS.supports("touch-action","none"):cachedSupportsTouchActionNone=!0),cachedSupportsTouchActionNone}function useSlider(t){const{"aria-labelledby":r,defaultValue:n,disabled:a=!1,disableSwap:o=!1,isRtl:l=!1,marks:c=!1,max:_=100,min:u=0,name:p,onChange:d,onChangeCommitted:m,orientation:f="horizontal",rootRef:g,scale:E=Identity$1,step:x=1,shiftStep:v=10,tabIndex:h,value:b}=t,S=reactExports.useRef(void 0),[y,T]=reactExports.useState(-1),[A,w]=reactExports.useState(-1),[C,L]=reactExports.useState(!1),k=reactExports.useRef(0),P=reactExports.useRef(null),[I,F]=useControlled({controlled:b,default:n??u,name:"Slider"}),H=d&&((z,K,ee)=>{const ue=z.nativeEvent||z,de=new ue.constructor(ue.type,ue);Object.defineProperty(de,"target",{writable:!0,value:{value:K,name:p}}),P.current=K,d(de,K,ee)}),O=Array.isArray(I);let R=O?I.slice().sort(asc):[I];R=R.map(z=>z==null?u:clamp(z,u,_));const M=c===!0&&x!==null?[...Array(Math.floor((_-u)/x)+1)].map((z,K)=>({value:u+x*K})):c||[],G=M.map(z=>z.value),[U,j]=reactExports.useState(-1),V=reactExports.useRef(null),$=useForkRef(g,V),Q=z=>K=>{const ee=Number(K.currentTarget.getAttribute("data-index"));isFocusVisible(K.target)&&j(ee),w(ee),z?.onFocus?.(K)},re=z=>K=>{isFocusVisible(K.target)||j(-1),w(-1),z?.onBlur?.(K)},X=(z,K)=>{const ee=Number(z.currentTarget.getAttribute("data-index")),ue=R[ee],de=G.indexOf(ue);let ae=K;if(M&&x==null){const se=G[G.length-1];ae>=se?ae=se:ae<=G[0]?ae=G[0]:ae=ae<ue?G[de-1]:G[de+1]}if(ae=clamp(ae,u,_),O){o&&(ae=clamp(ae,R[ee-1]||-1/0,R[ee+1]||1/0));const se=ae;ae=setValueIndex({values:R,newValue:ae,index:ee});let Le=ee;o||(Le=ae.indexOf(se)),focusThumb({sliderRef:V,activeIndex:Le})}F(ae),j(ee),H&&!areValuesEqual(ae,I)&&H(z,ae,ee),m&&m(z,P.current??ae)},Y=z=>K=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(K.key)){K.preventDefault();const ee=Number(K.currentTarget.getAttribute("data-index")),ue=R[ee];let de=null;if(x!=null){const ae=K.shiftKey?v:x;switch(K.key){case"ArrowUp":de=getNewValue(ue,ae,1,u,_);break;case"ArrowRight":de=getNewValue(ue,ae,l?-1:1,u,_);break;case"ArrowDown":de=getNewValue(ue,ae,-1,u,_);break;case"ArrowLeft":de=getNewValue(ue,ae,l?1:-1,u,_);break;case"PageUp":de=getNewValue(ue,v,1,u,_);break;case"PageDown":de=getNewValue(ue,v,-1,u,_);break;case"Home":de=u;break;case"End":de=_;break}}else if(M){const ae=G[G.length-1],se=G.indexOf(ue),Le=[l?"ArrowRight":"ArrowLeft","ArrowDown","PageDown","Home"],Te=[l?"ArrowLeft":"ArrowRight","ArrowUp","PageUp","End"];Le.includes(K.key)?se===0?de=G[0]:de=G[se-1]:Te.includes(K.key)&&(se===G.length-1?de=ae:de=G[se+1])}de!=null&&X(K,de)}z?.onKeyDown?.(K)};useEnhancedEffect(()=>{a&&V.current.contains(document.activeElement)&&document.activeElement?.blur()},[a]),a&&y!==-1&&T(-1),a&&U!==-1&&j(-1);const oe=z=>K=>{z.onChange?.(K),X(K,K.target.valueAsNumber)},fe=reactExports.useRef(void 0);let ve=f;l&&f==="horizontal"&&(ve+="-reverse");const ne=({finger:z,move:K=!1})=>{const{current:ee}=V,{width:ue,height:de,bottom:ae,left:se}=ee.getBoundingClientRect();let Le;ve.startsWith("vertical")?Le=(ae-z.y)/de:Le=(z.x-se)/ue,ve.includes("-reverse")&&(Le=1-Le);let Te;if(Te=percentToValue(Le,u,_),x)Te=roundValueToStep(Te,x,u);else{const D=findClosest(G,Te);Te=G[D]}Te=clamp(Te,u,_);let B=0;if(O){K?B=fe.current:B=findClosest(R,Te),o&&(Te=clamp(Te,R[B-1]||-1/0,R[B+1]||1/0));const D=Te;Te=setValueIndex({values:R,newValue:Te,index:B}),o&&K||(B=Te.indexOf(D),fe.current=B)}return{newValue:Te,activeIndex:B}},_e=useEventCallback(z=>{const K=trackFinger(z,S);if(!K)return;if(k.current+=1,z.type==="mousemove"&&z.buttons===0){Z(z);return}const{newValue:ee,activeIndex:ue}=ne({finger:K,move:!0});focusThumb({sliderRef:V,activeIndex:ue,setActive:T}),F(ee),!C&&k.current>INTENTIONAL_DRAG_COUNT_THRESHOLD&&L(!0),H&&!areValuesEqual(ee,I)&&H(z,ee,ue)}),Z=useEventCallback(z=>{const K=trackFinger(z,S);if(L(!1),!K)return;const{newValue:ee}=ne({finger:K,move:!0});T(-1),z.type==="touchend"&&w(-1),m&&m(z,P.current??ee),S.current=void 0,ie()}),ge=useEventCallback(z=>{if(a)return;doesSupportTouchActionNone()||z.preventDefault();const K=z.changedTouches[0];K!=null&&(S.current=K.identifier);const ee=trackFinger(z,S);if(ee!==!1){const{newValue:de,activeIndex:ae}=ne({finger:ee});focusThumb({sliderRef:V,activeIndex:ae,setActive:T}),F(de),H&&!areValuesEqual(de,I)&&H(z,de,ae)}k.current=0;const ue=ownerDocument(V.current);ue.addEventListener("touchmove",_e,{passive:!0}),ue.addEventListener("touchend",Z,{passive:!0})}),ie=reactExports.useCallback(()=>{const z=ownerDocument(V.current);z.removeEventListener("mousemove",_e),z.removeEventListener("mouseup",Z),z.removeEventListener("touchmove",_e),z.removeEventListener("touchend",Z)},[Z,_e]);reactExports.useEffect(()=>{const{current:z}=V;return z.addEventListener("touchstart",ge,{passive:doesSupportTouchActionNone()}),()=>{z.removeEventListener("touchstart",ge),ie()}},[ie,ge]),reactExports.useEffect(()=>{a&&ie()},[a,ie]);const le=z=>K=>{if(z.onMouseDown?.(K),a||K.defaultPrevented||K.button!==0)return;K.preventDefault();const ee=trackFinger(K,S);if(ee!==!1){const{newValue:de,activeIndex:ae}=ne({finger:ee});focusThumb({sliderRef:V,activeIndex:ae,setActive:T}),F(de),H&&!areValuesEqual(de,I)&&H(K,de,ae)}k.current=0;const ue=ownerDocument(V.current);ue.addEventListener("mousemove",_e,{passive:!0}),ue.addEventListener("mouseup",Z)},xe=valueToPercent(O?R[0]:u,u,_),ce=valueToPercent(R[R.length-1],u,_)-xe,ye=(z={})=>{const K=extractEventHandlers(z),ee={onMouseDown:le(K||{})},ue={...K,...ee};return{...z,ref:$,...ue}},ke=z=>K=>{z.onMouseOver?.(K);const ee=Number(K.currentTarget.getAttribute("data-index"));w(ee)},Ae=z=>K=>{z.onMouseLeave?.(K),w(-1)},he=(z={})=>{const K=extractEventHandlers(z),ee={onMouseOver:ke(K||{}),onMouseLeave:Ae(K||{})};return{...z,...K,...ee}},Re=z=>({pointerEvents:y!==-1&&y!==z?"none":void 0});let Fe;return f==="vertical"&&(Fe=l?"vertical-rl":"vertical-lr"),{active:y,axis:ve,axisProps,dragging:C,focusedThumbIndex:U,getHiddenInputProps:(z={})=>{const K=extractEventHandlers(z),ee={onChange:oe(K||{}),onFocus:Q(K||{}),onBlur:re(K||{}),onKeyDown:Y(K||{})},ue={...K,...ee};return{tabIndex:h,"aria-labelledby":r,"aria-orientation":f,"aria-valuemax":E(_),"aria-valuemin":E(u),name:p,type:"range",min:t.min,max:t.max,step:t.step===null&&t.marks?"any":t.step??void 0,disabled:a,...z,...ue,style:{...visuallyHidden,direction:l?"rtl":"ltr",width:"100%",height:"100%",writingMode:Fe}}},getRootProps:ye,getThumbProps:he,marks:M,open:A,range:O,rootRef:$,trackLeap:ce,trackOffset:xe,values:R,getThumbStyle:Re}}const shouldSpreadAdditionalProps=t=>!t||!isHostComponent(t);function getSliderUtilityClass(t){return generateUtilityClass("MuiSlider",t)}const sliderClasses=generateUtilityClasses("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),useValueLabelClasses=t=>{const{open:r}=t;return{offset:clsx(r&&sliderClasses.valueLabelOpen),circle:sliderClasses.valueLabelCircle,label:sliderClasses.valueLabelLabel}};function SliderValueLabel$1(t){const{children:r,className:n,value:a}=t,o=useValueLabelClasses(t);return r?reactExports.cloneElement(r,{className:r.props.className},jsxRuntimeExports.jsxs(reactExports.Fragment,{children:[r.props.children,jsxRuntimeExports.jsx("span",{className:clsx(o.offset,n),"aria-hidden":!0,children:jsxRuntimeExports.jsx("span",{className:o.circle,children:jsxRuntimeExports.jsx("span",{className:o.label,children:a})})})]})):null}function Identity(t){return t}const SliderRoot=styled$1("span",{name:"MuiSlider",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[`color${capitalize(n.color)}`],n.size!=="medium"&&r[`size${capitalize(n.size)}`],n.marked&&r.marked,n.orientation==="vertical"&&r.vertical,n.track==="inverted"&&r.trackInverted,n.track===!1&&r.trackFalse]}})(memoTheme(({theme:t})=>({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${sliderClasses.disabled}`]:{pointerEvents:"none",cursor:"default",color:(t.vars||t).palette.grey[400]},[`&.${sliderClasses.dragging}`]:{[`& .${sliderClasses.thumb}, & .${sliderClasses.track}`]:{transition:"none"}},variants:[...Object.entries(t.palette).filter(createSimplePaletteValueFilter()).map(([r])=>({props:{color:r},style:{color:(t.vars||t).palette[r].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}))),SliderRail=styled$1("span",{name:"MuiSlider",slot:"Rail"})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),SliderTrack=styled$1("span",{name:"MuiSlider",slot:"Track"})(memoTheme(({theme:t})=>({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:t.transitions.create(["left","width","bottom","height"],{duration:t.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.entries(t.palette).filter(createSimplePaletteValueFilter()).map(([r])=>({props:{color:r,track:"inverted"},style:{...t.vars?{backgroundColor:t.vars.palette.Slider[`${r}Track`],borderColor:t.vars.palette.Slider[`${r}Track`]}:{backgroundColor:t.lighten(t.palette[r].main,.62),borderColor:t.lighten(t.palette[r].main,.62),...t.applyStyles("dark",{backgroundColor:t.darken(t.palette[r].main,.5)}),...t.applyStyles("dark",{borderColor:t.darken(t.palette[r].main,.5)})}}}))]}))),SliderThumb=styled$1("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.thumb,r[`thumbColor${capitalize(n.color)}`],n.size!=="medium"&&r[`thumbSize${capitalize(n.size)}`]]}})(memoTheme(({theme:t})=>({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:t.transitions.create(["box-shadow","left","bottom"],{duration:t.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(t.vars||t).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${sliderClasses.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.entries(t.palette).filter(createSimplePaletteValueFilter()).map(([r])=>({props:{color:r},style:{[`&:hover, &.${sliderClasses.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${t.alpha((t.vars||t).palette[r].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${sliderClasses.active}`]:{boxShadow:`0px 0px 0px 14px ${t.alpha((t.vars||t).palette[r].main,.16)}`}}}))]}))),SliderValueLabel=styled$1(SliderValueLabel$1,{name:"MuiSlider",slot:"ValueLabel"})(memoTheme(({theme:t})=>({zIndex:1,whiteSpace:"nowrap",...t.typography.body2,fontWeight:500,transition:t.transitions.create(["transform"],{duration:t.transitions.duration.shortest}),position:"absolute",backgroundColor:(t.vars||t).palette.grey[600],borderRadius:2,color:(t.vars||t).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${sliderClasses.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${sliderClasses.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:t.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]}))),SliderMark=styled$1("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:t=>slotShouldForwardProp(t)&&t!=="markActive",overridesResolver:(t,r)=>{const{markActive:n}=t;return[r.mark,n&&r.markActive]}})(memoTheme(({theme:t})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(t.vars||t).palette.background.paper,opacity:.8}}]}))),SliderMarkLabel=styled$1("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:t=>slotShouldForwardProp(t)&&t!=="markLabelActive"})(memoTheme(({theme:t})=>({...t.typography.body2,color:(t.vars||t).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(t.vars||t).palette.text.primary}}]}))),useUtilityClasses$e=t=>{const{disabled:r,dragging:n,marked:a,orientation:o,track:l,classes:c,color:_,size:u}=t,p={root:["root",r&&"disabled",n&&"dragging",a&&"marked",o==="vertical"&&"vertical",l==="inverted"&&"trackInverted",l===!1&&"trackFalse",_&&`color${capitalize(_)}`,u&&`size${capitalize(u)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",r&&"disabled",u&&`thumbSize${capitalize(u)}`,_&&`thumbColor${capitalize(_)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return composeClasses(p,getSliderUtilityClass,c)},Forward=({children:t})=>t,Slider=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiSlider"}),o=useRtl(),{"aria-label":l,"aria-valuetext":c,"aria-labelledby":_,component:u="span",components:p={},componentsProps:d={},color:m="primary",classes:f,className:g,disableSwap:E=!1,disabled:x=!1,getAriaLabel:v,getAriaValueText:h,marks:b=!1,max:S=100,min:y=0,name:T,onChange:A,onChangeCommitted:w,orientation:C="horizontal",shiftStep:L=10,size:k="medium",step:P=1,scale:I=Identity,slotProps:F,slots:H,tabIndex:O,track:R="normal",value:M,valueLabelDisplay:G="off",valueLabelFormat:U=Identity,...j}=a,V={...a,isRtl:o,max:S,min:y,classes:f,disabled:x,disableSwap:E,orientation:C,marks:b,color:m,size:k,step:P,shiftStep:L,scale:I,track:R,valueLabelDisplay:G,valueLabelFormat:U},{axisProps:$,getRootProps:Q,getHiddenInputProps:re,getThumbProps:X,open:Y,active:oe,axis:fe,focusedThumbIndex:ve,range:ne,dragging:_e,marks:Z,values:ge,trackOffset:ie,trackLeap:le,getThumbStyle:xe}=useSlider({...V,rootRef:n});V.marked=Z.length>0&&Z.some(Se=>Se.label),V.dragging=_e,V.focusedThumbIndex=ve;const ce=useUtilityClasses$e(V),ye=H?.root??p.Root??SliderRoot,ke=H?.rail??p.Rail??SliderRail,Ae=H?.track??p.Track??SliderTrack,he=H?.thumb??p.Thumb??SliderThumb,Re=H?.valueLabel??p.ValueLabel??SliderValueLabel,Fe=H?.mark??p.Mark??SliderMark,we=H?.markLabel??p.MarkLabel??SliderMarkLabel,z=H?.input??p.Input??"input",K=F?.root??d.root,ee=F?.rail??d.rail,ue=F?.track??d.track,de=F?.thumb??d.thumb,ae=F?.valueLabel??d.valueLabel,se=F?.mark??d.mark,Le=F?.markLabel??d.markLabel,Te=F?.input??d.input,B=useSlotProps({elementType:ye,getSlotProps:Q,externalSlotProps:K,externalForwardedProps:j,additionalProps:{...shouldSpreadAdditionalProps(ye)&&{as:u}},ownerState:{...V,...K?.ownerState},className:[ce.root,g]}),D=useSlotProps({elementType:ke,externalSlotProps:ee,ownerState:V,className:ce.rail}),N=useSlotProps({elementType:Ae,externalSlotProps:ue,additionalProps:{style:{...$[fe].offset(ie),...$[fe].leap(le)}},ownerState:{...V,...ue?.ownerState},className:ce.track}),W=useSlotProps({elementType:he,getSlotProps:X,externalSlotProps:de,ownerState:{...V,...de?.ownerState},className:ce.thumb}),q=useSlotProps({elementType:Re,externalSlotProps:ae,ownerState:{...V,...ae?.ownerState},className:ce.valueLabel}),te=useSlotProps({elementType:Fe,externalSlotProps:se,ownerState:V,className:ce.mark}),Ee=useSlotProps({elementType:we,externalSlotProps:Le,ownerState:V,className:ce.markLabel}),De=useSlotProps({elementType:z,getSlotProps:re,externalSlotProps:Te,ownerState:V});return jsxRuntimeExports.jsxs(ye,{...B,children:[jsxRuntimeExports.jsx(ke,{...D}),jsxRuntimeExports.jsx(Ae,{...N}),Z.filter(Se=>Se.value>=y&&Se.value<=S).map((Se,Ie)=>{const Oe=valueToPercent(Se.value,y,S),Be=$[fe].offset(Oe);let Me;return R===!1?Me=ge.includes(Se.value):Me=R==="normal"&&(ne?Se.value>=ge[0]&&Se.value<=ge[ge.length-1]:Se.value<=ge[0])||R==="inverted"&&(ne?Se.value<=ge[0]||Se.value>=ge[ge.length-1]:Se.value>=ge[0]),jsxRuntimeExports.jsxs(reactExports.Fragment,{children:[jsxRuntimeExports.jsx(Fe,{"data-index":Ie,...te,...!isHostComponent(Fe)&&{markActive:Me},style:{...Be,...te.style},className:clsx(te.className,Me&&ce.markActive)}),Se.label!=null?jsxRuntimeExports.jsx(we,{"aria-hidden":!0,"data-index":Ie,...Ee,...!isHostComponent(we)&&{markLabelActive:Me},style:{...Be,...Ee.style},className:clsx(ce.markLabel,Ee.className,Me&&ce.markLabelActive),children:Se.label}):null]},Ie)}),ge.map((Se,Ie)=>{const Oe=valueToPercent(Se,y,S),Be=$[fe].offset(Oe),Me=G==="off"?Forward:Re;return jsxRuntimeExports.jsx(Me,{...!isHostComponent(Me)&&{valueLabelFormat:U,valueLabelDisplay:G,value:typeof U=="function"?U(I(Se),Ie):U,index:Ie,open:Y===Ie||oe===Ie||G==="on",disabled:x},...q,children:jsxRuntimeExports.jsx(he,{"data-index":Ie,...W,className:clsx(ce.thumb,W.className,oe===Ie&&ce.active,ve===Ie&&ce.focusVisible),style:{...Be,...xe(Ie),...W.style},children:jsxRuntimeExports.jsx(z,{"data-index":Ie,"aria-label":v?v(Ie):l,"aria-valuenow":I(Se),"aria-labelledby":_,"aria-valuetext":h?h(I(Se),Ie):c,value:ge[Ie],...De})})},Ie)})]})});function getTooltipUtilityClass(t){return generateUtilityClass("MuiTooltip",t)}const tooltipClasses=generateUtilityClasses("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function round(t){return Math.round(t*1e5)/1e5}const useUtilityClasses$d=t=>{const{classes:r,disableInteractive:n,arrow:a,touch:o,placement:l}=t,c={popper:["popper",!n&&"popperInteractive",a&&"popperArrow"],tooltip:["tooltip",a&&"tooltipArrow",o&&"touch",`tooltipPlacement${capitalize(l.split("-")[0])}`],arrow:["arrow"]};return composeClasses(c,getTooltipUtilityClass,r)},TooltipPopper=styled$1(Popper,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.popper,!n.disableInteractive&&r.popperInteractive,n.arrow&&r.popperArrow,!n.open&&r.popperClose]}})(memoTheme(({theme:t})=>({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:r})=>!r.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:r})=>!r,style:{pointerEvents:"none"}},{props:({ownerState:r})=>r.arrow,style:{[`&[data-popper-placement*="bottom"] .${tooltipClasses.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:r})=>r.arrow&&!r.isRtl,style:{[`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:r})=>r.arrow&&!!r.isRtl,style:{[`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:r})=>r.arrow&&!r.isRtl,style:{[`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:r})=>r.arrow&&!!r.isRtl,style:{[`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),TooltipTooltip=styled$1("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.tooltip,n.touch&&r.touch,n.arrow&&r.tooltipArrow,r[`tooltipPlacement${capitalize(n.placement.split("-")[0])}`]]}})(memoTheme(({theme:t})=>({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:t.alpha(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium,[`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:r})=>r.arrow,style:{position:"relative",margin:0}},{props:({ownerState:r})=>r.touch,style:{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${round(16/14)}em`,fontWeight:t.typography.fontWeightRegular}},{props:({ownerState:r})=>!r.isRtl,style:{[`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:r})=>!r.isRtl&&r.touch,style:{[`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:r})=>!!r.isRtl,style:{[`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:r})=>!!r.isRtl&&r.touch,style:{[`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:r})=>r.touch,style:{[`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:r})=>r.touch,style:{[`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),TooltipArrow=styled$1("span",{name:"MuiTooltip",slot:"Arrow"})(memoTheme(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:t.alpha(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let hystersisOpen=!1;const hystersisTimer=new Timeout;let cursorPosition={x:0,y:0};function composeEventHandler(t,r){return(n,...a)=>{r&&r(n,...a),t(n,...a)}}const Tooltip=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiTooltip"}),{arrow:o=!1,children:l,classes:c,components:_={},componentsProps:u={},describeChild:p=!1,disableFocusListener:d=!1,disableHoverListener:m=!1,disableInteractive:f=!1,disableTouchListener:g=!1,enterDelay:E=100,enterNextDelay:x=0,enterTouchDelay:v=700,followCursor:h=!1,id:b,leaveDelay:S=0,leaveTouchDelay:y=1500,onClose:T,onOpen:A,open:w,placement:C="bottom",PopperComponent:L,PopperProps:k={},slotProps:P={},slots:I={},title:F,TransitionComponent:H,TransitionProps:O,...R}=a,M=reactExports.isValidElement(l)?l:jsxRuntimeExports.jsx("span",{children:l}),G=useTheme$1(),U=useRtl(),[j,V]=reactExports.useState(),[$,Q]=reactExports.useState(null),re=reactExports.useRef(!1),X=f||h,Y=useTimeout(),oe=useTimeout(),fe=useTimeout(),ve=useTimeout(),[ne,_e]=useControlled({controlled:w,default:!1,name:"Tooltip",state:"open"});let Z=ne;const ge=useId(b),ie=reactExports.useRef(),le=useEventCallback(()=>{ie.current!==void 0&&(document.body.style.WebkitUserSelect=ie.current,ie.current=void 0),ve.clear()});reactExports.useEffect(()=>le,[le]);const xe=be=>{hystersisTimer.clear(),hystersisOpen=!0,_e(!0),A&&!Z&&A(be)},ce=useEventCallback(be=>{hystersisTimer.start(800+S,()=>{hystersisOpen=!1}),_e(!1),T&&Z&&T(be),Y.start(G.transitions.duration.shortest,()=>{re.current=!1})}),ye=be=>{re.current&&be.type!=="touchstart"||(j&&j.removeAttribute("title"),oe.clear(),fe.clear(),E||hystersisOpen&&x?oe.start(hystersisOpen?x:E,()=>{xe(be)}):xe(be))},ke=be=>{oe.clear(),fe.start(S,()=>{ce(be)})},[,Ae]=reactExports.useState(!1),he=be=>{isFocusVisible(be.target)||(Ae(!1),ke(be))},Re=be=>{j||V(be.currentTarget),isFocusVisible(be.target)&&(Ae(!0),ye(be))},Fe=be=>{re.current=!0;const Ne=M.props;Ne.onTouchStart&&Ne.onTouchStart(be)},we=be=>{Fe(be),fe.clear(),Y.clear(),le(),ie.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ve.start(v,()=>{document.body.style.WebkitUserSelect=ie.current,ye(be)})},z=be=>{M.props.onTouchEnd&&M.props.onTouchEnd(be),le(),fe.start(y,()=>{ce(be)})};reactExports.useEffect(()=>{if(!Z)return;function be(Ne){Ne.key==="Escape"&&ce(Ne)}return document.addEventListener("keydown",be),()=>{document.removeEventListener("keydown",be)}},[ce,Z]);const K=useForkRef(getReactElementRef(M),V,n);!F&&F!==0&&(Z=!1);const ee=reactExports.useRef(),ue=be=>{const Ne=M.props;Ne.onMouseMove&&Ne.onMouseMove(be),cursorPosition={x:be.clientX,y:be.clientY},ee.current&&ee.current.update()},de={},ae=typeof F=="string";p?(de.title=!Z&&ae&&!m?F:null,de["aria-describedby"]=Z?ge:null):(de["aria-label"]=ae?F:null,de["aria-labelledby"]=Z&&!ae?ge:null);const se={...de,...R,...M.props,className:clsx(R.className,M.props.className),onTouchStart:Fe,ref:K,...h?{onMouseMove:ue}:{}},Le={};g||(se.onTouchStart=we,se.onTouchEnd=z),m||(se.onMouseOver=composeEventHandler(ye,se.onMouseOver),se.onMouseLeave=composeEventHandler(ke,se.onMouseLeave),X||(Le.onMouseOver=ye,Le.onMouseLeave=ke)),d||(se.onFocus=composeEventHandler(Re,se.onFocus),se.onBlur=composeEventHandler(he,se.onBlur),X||(Le.onFocus=Re,Le.onBlur=he));const Te={...a,isRtl:U,arrow:o,disableInteractive:X,placement:C,PopperComponentProp:L,touch:re.current},B=typeof P.popper=="function"?P.popper(Te):P.popper,D=reactExports.useMemo(()=>{let be=[{name:"arrow",enabled:!!$,options:{element:$,padding:4}}];return k.popperOptions?.modifiers&&(be=be.concat(k.popperOptions.modifiers)),B?.popperOptions?.modifiers&&(be=be.concat(B.popperOptions.modifiers)),{...k.popperOptions,...B?.popperOptions,modifiers:be}},[$,k.popperOptions,B?.popperOptions]),N=useUtilityClasses$d(Te),W=typeof P.transition=="function"?P.transition(Te):P.transition,q={slots:{popper:_.Popper,transition:_.Transition??H,tooltip:_.Tooltip,arrow:_.Arrow,...I},slotProps:{arrow:P.arrow??u.arrow,popper:{...k,...B??u.popper},tooltip:P.tooltip??u.tooltip,transition:{...O,...W??u.transition}}},[te,Ee]=useSlot("popper",{elementType:TooltipPopper,externalForwardedProps:q,ownerState:Te,className:clsx(N.popper,k?.className)}),[De,Se]=useSlot("transition",{elementType:Grow,externalForwardedProps:q,ownerState:Te}),[Ie,Oe]=useSlot("tooltip",{elementType:TooltipTooltip,className:N.tooltip,externalForwardedProps:q,ownerState:Te}),[Be,Me]=useSlot("arrow",{elementType:TooltipArrow,className:N.arrow,externalForwardedProps:q,ownerState:Te,ref:Q});return jsxRuntimeExports.jsxs(reactExports.Fragment,{children:[reactExports.cloneElement(M,se),jsxRuntimeExports.jsx(te,{as:L??Popper,placement:C,anchorEl:h?{getBoundingClientRect:()=>({top:cursorPosition.y,left:cursorPosition.x,right:cursorPosition.x,bottom:cursorPosition.y,width:0,height:0})}:j,popperRef:ee,open:j?Z:!1,id:ge,transition:!0,...Le,...Ee,popperOptions:D,children:({TransitionProps:be})=>jsxRuntimeExports.jsx(De,{timeout:G.transitions.duration.shorter,...be,...Se,children:jsxRuntimeExports.jsxs(Ie,{...Oe,children:[F,o?jsxRuntimeExports.jsx(Be,{...Me}):null]})})})]})}),Stack=createStack({createStyledComponent:styled$1("div",{name:"MuiStack",slot:"Root"}),useThemeProps:t=>useDefaultProps({props:t,name:"MuiStack"})});function getSwitchUtilityClass(t){return generateUtilityClass("MuiSwitch",t)}const switchClasses=generateUtilityClasses("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),useUtilityClasses$c=t=>{const{classes:r,edge:n,size:a,color:o,checked:l,disabled:c}=t,_={root:["root",n&&`edge${capitalize(n)}`,`size${capitalize(a)}`],switchBase:["switchBase",`color${capitalize(o)}`,l&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=composeClasses(_,getSwitchUtilityClass,r);return{...r,...u}},SwitchRoot=styled$1("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.edge&&r[`edge${capitalize(n.edge)}`],r[`size${capitalize(n.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${switchClasses.thumb}`]:{width:16,height:16},[`& .${switchClasses.switchBase}`]:{padding:4,[`&.${switchClasses.checked}`]:{transform:"translateX(16px)"}}}}]}),SwitchSwitchBase=styled$1(SwitchBase,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.switchBase,{[`& .${switchClasses.input}`]:r.input},n.color!=="default"&&r[`color${capitalize(n.color)}`]]}})(memoTheme(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${switchClasses.checked}`]:{transform:"translateX(20px)"},[`&.${switchClasses.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${switchClasses.checked} + .${switchClasses.track}`]:{opacity:.5},[`&.${switchClasses.disabled} + .${switchClasses.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${switchClasses.input}`]:{left:"-100%",width:"300%"}})),memoTheme(({theme:t})=>({"&:hover":{backgroundColor:t.alpha((t.vars||t).palette.action.active,(t.vars||t).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(createSimplePaletteValueFilter(["light"])).map(([r])=>({props:{color:r},style:{[`&.${switchClasses.checked}`]:{color:(t.vars||t).palette[r].main,"&:hover":{backgroundColor:t.alpha((t.vars||t).palette[r].main,(t.vars||t).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${switchClasses.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${r}DisabledColor`]:`${t.palette.mode==="light"?t.lighten(t.palette[r].main,.62):t.darken(t.palette[r].main,.55)}`}},[`&.${switchClasses.checked} + .${switchClasses.track}`]:{backgroundColor:(t.vars||t).palette[r].main}}}))]}))),SwitchTrack=styled$1("span",{name:"MuiSwitch",slot:"Track"})(memoTheme(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`}))),SwitchThumb=styled$1("span",{name:"MuiSwitch",slot:"Thumb"})(memoTheme(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),Switch=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiSwitch"}),{className:o,color:l="primary",edge:c=!1,size:_="medium",sx:u,slots:p={},slotProps:d={},...m}=a,f={...a,color:l,edge:c,size:_},g=useUtilityClasses$c(f),E={slots:p,slotProps:d},[x,v]=useSlot("root",{className:clsx(g.root,o),elementType:SwitchRoot,externalForwardedProps:E,ownerState:f,additionalProps:{sx:u}}),[h,b]=useSlot("thumb",{className:g.thumb,elementType:SwitchThumb,externalForwardedProps:E,ownerState:f}),S=jsxRuntimeExports.jsx(h,{...b}),[y,T]=useSlot("track",{className:g.track,elementType:SwitchTrack,externalForwardedProps:E,ownerState:f});return jsxRuntimeExports.jsxs(x,{...v,children:[jsxRuntimeExports.jsx(SwitchSwitchBase,{type:"checkbox",icon:S,checkedIcon:S,ref:n,ownerState:f,...m,classes:{...g,root:g.switchBase},slots:{...p.switchBase&&{root:p.switchBase},...p.input&&{input:p.input}},slotProps:{...d.switchBase&&{root:typeof d.switchBase=="function"?d.switchBase(f):d.switchBase},input:{role:"switch"},...d.input&&{input:typeof d.input=="function"?d.input(f):d.input}}}),jsxRuntimeExports.jsx(y,{...T})]})});function getTabUtilityClass(t){return generateUtilityClass("MuiTab",t)}const tabClasses=generateUtilityClasses("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]),useUtilityClasses$b=t=>{const{classes:r,textColor:n,fullWidth:a,wrapped:o,icon:l,label:c,selected:_,disabled:u}=t,p={root:["root",l&&c&&"labelIcon",`textColor${capitalize(n)}`,a&&"fullWidth",o&&"wrapped",_&&"selected",u&&"disabled"],icon:["iconWrapper","icon"]};return composeClasses(p,getTabUtilityClass,r)},TabRoot=styled$1(ButtonBase,{name:"MuiTab",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.label&&n.icon&&r.labelIcon,r[`textColor${capitalize(n.textColor)}`],n.fullWidth&&r.fullWidth,n.wrapped&&r.wrapped,{[`& .${tabClasses.iconWrapper}`]:r.iconWrapper},{[`& .${tabClasses.icon}`]:r.icon}]}})(memoTheme(({theme:t})=>({...t.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:r})=>r.label&&(r.iconPosition==="top"||r.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:r})=>r.label&&r.iconPosition!=="top"&&r.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:r})=>r.icon&&r.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:r,iconPosition:n})=>r.icon&&r.label&&n==="top",style:{[`& > .${tabClasses.icon}`]:{marginBottom:6}}},{props:({ownerState:r,iconPosition:n})=>r.icon&&r.label&&n==="bottom",style:{[`& > .${tabClasses.icon}`]:{marginTop:6}}},{props:({ownerState:r,iconPosition:n})=>r.icon&&r.label&&n==="start",style:{[`& > .${tabClasses.icon}`]:{marginRight:t.spacing(1)}}},{props:({ownerState:r,iconPosition:n})=>r.icon&&r.label&&n==="end",style:{[`& > .${tabClasses.icon}`]:{marginLeft:t.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${tabClasses.selected}`]:{opacity:1},[`&.${tabClasses.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(t.vars||t).palette.text.secondary,[`&.${tabClasses.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${tabClasses.disabled}`]:{color:(t.vars||t).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(t.vars||t).palette.text.secondary,[`&.${tabClasses.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${tabClasses.disabled}`]:{color:(t.vars||t).palette.text.disabled}}},{props:({ownerState:r})=>r.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:r})=>r.wrapped,style:{fontSize:t.typography.pxToRem(12)}}]}))),Tab=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiTab"}),{className:o,disabled:l=!1,disableFocusRipple:c=!1,fullWidth:_,icon:u,iconPosition:p="top",indicator:d,label:m,onChange:f,onClick:g,onFocus:E,selected:x,selectionFollowsFocus:v,textColor:h="inherit",value:b,wrapped:S=!1,...y}=a,T={...a,disabled:l,disableFocusRipple:c,selected:x,icon:!!u,iconPosition:p,label:!!m,fullWidth:_,textColor:h,wrapped:S},A=useUtilityClasses$b(T),w=u&&m&&reactExports.isValidElement(u)?reactExports.cloneElement(u,{className:clsx(A.icon,u.props.className)}):u,C=k=>{!x&&f&&f(k,b),g&&g(k)},L=k=>{v&&!x&&f&&f(k,b),E&&E(k)};return jsxRuntimeExports.jsxs(TabRoot,{focusRipple:!c,className:clsx(A.root,o),ref:n,role:"tab","aria-selected":x,disabled:l,onClick:C,onFocus:L,ownerState:T,tabIndex:x?0:-1,...y,children:[p==="top"||p==="start"?jsxRuntimeExports.jsxs(reactExports.Fragment,{children:[w,m]}):jsxRuntimeExports.jsxs(reactExports.Fragment,{children:[m,w]}),d]})}),TableContext=reactExports.createContext();function getTableUtilityClass(t){return generateUtilityClass("MuiTable",t)}generateUtilityClasses("MuiTable",["root","stickyHeader"]);const useUtilityClasses$a=t=>{const{classes:r,stickyHeader:n}=t;return composeClasses({root:["root",n&&"stickyHeader"]},getTableUtilityClass,r)},TableRoot=styled$1("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.stickyHeader&&r.stickyHeader]}})(memoTheme(({theme:t})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...t.typography.body2,padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:r})=>r.stickyHeader,style:{borderCollapse:"separate"}}]}))),defaultComponent$3="table",Table=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiTable"}),{className:o,component:l=defaultComponent$3,padding:c="normal",size:_="medium",stickyHeader:u=!1,...p}=a,d={...a,component:l,padding:c,size:_,stickyHeader:u},m=useUtilityClasses$a(d),f=reactExports.useMemo(()=>({padding:c,size:_,stickyHeader:u}),[c,_,u]);return jsxRuntimeExports.jsx(TableContext.Provider,{value:f,children:jsxRuntimeExports.jsx(TableRoot,{as:l,role:l===defaultComponent$3?null:"table",ref:n,className:clsx(m.root,o),ownerState:d,...p})})}),Tablelvl2Context=reactExports.createContext();function getTableBodyUtilityClass(t){return generateUtilityClass("MuiTableBody",t)}generateUtilityClasses("MuiTableBody",["root"]);const useUtilityClasses$9=t=>{const{classes:r}=t;return composeClasses({root:["root"]},getTableBodyUtilityClass,r)},TableBodyRoot=styled$1("tbody",{name:"MuiTableBody",slot:"Root"})({display:"table-row-group"}),tablelvl2$1={variant:"body"},defaultComponent$2="tbody",TableBody=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiTableBody"}),{className:o,component:l=defaultComponent$2,...c}=a,_={...a,component:l},u=useUtilityClasses$9(_);return jsxRuntimeExports.jsx(Tablelvl2Context.Provider,{value:tablelvl2$1,children:jsxRuntimeExports.jsx(TableBodyRoot,{className:clsx(u.root,o),as:l,ref:n,role:l===defaultComponent$2?null:"rowgroup",ownerState:_,...c})})});function getTableCellUtilityClass(t){return generateUtilityClass("MuiTableCell",t)}const tableCellClasses=generateUtilityClasses("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),useUtilityClasses$8=t=>{const{classes:r,variant:n,align:a,padding:o,size:l,stickyHeader:c}=t,_={root:["root",n,c&&"stickyHeader",a!=="inherit"&&`align${capitalize(a)}`,o!=="normal"&&`padding${capitalize(o)}`,`size${capitalize(l)}`]};return composeClasses(_,getTableCellUtilityClass,r)},TableCellRoot=styled$1("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.variant],r[`size${capitalize(n.size)}`],n.padding!=="normal"&&r[`padding${capitalize(n.padding)}`],n.align!=="inherit"&&r[`align${capitalize(n.align)}`],n.stickyHeader&&r.stickyHeader]}})(memoTheme(({theme:t})=>({...t.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?t.lighten(t.alpha(t.palette.divider,1),.88):t.darken(t.alpha(t.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(t.vars||t).palette.text.primary}},{props:{variant:"footer"},style:{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${tableCellClasses.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:r})=>r.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default}}]}))),TableCell=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiTableCell"}),{align:o="inherit",className:l,component:c,padding:_,scope:u,size:p,sortDirection:d,variant:m,...f}=a,g=reactExports.useContext(TableContext),E=reactExports.useContext(Tablelvl2Context),x=E&&E.variant==="head";let v;c?v=c:v=x?"th":"td";let h=u;v==="td"?h=void 0:!h&&x&&(h="col");const b=m||E&&E.variant,S={...a,align:o,component:v,padding:_||(g&&g.padding?g.padding:"normal"),size:p||(g&&g.size?g.size:"medium"),sortDirection:d,stickyHeader:b==="head"&&g&&g.stickyHeader,variant:b},y=useUtilityClasses$8(S);let T=null;return d&&(T=d==="asc"?"ascending":"descending"),jsxRuntimeExports.jsx(TableCellRoot,{as:v,ref:n,className:clsx(y.root,l),"aria-sort":T,scope:h,ownerState:S,...f})});function getTableContainerUtilityClass(t){return generateUtilityClass("MuiTableContainer",t)}generateUtilityClasses("MuiTableContainer",["root"]);const useUtilityClasses$7=t=>{const{classes:r}=t;return composeClasses({root:["root"]},getTableContainerUtilityClass,r)},TableContainerRoot=styled$1("div",{name:"MuiTableContainer",slot:"Root"})({width:"100%",overflowX:"auto"}),TableContainer=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiTableContainer"}),{className:o,component:l="div",...c}=a,_={...a,component:l},u=useUtilityClasses$7(_);return jsxRuntimeExports.jsx(TableContainerRoot,{ref:n,as:l,className:clsx(u.root,o),ownerState:_,...c})});function getTableHeadUtilityClass(t){return generateUtilityClass("MuiTableHead",t)}generateUtilityClasses("MuiTableHead",["root"]);const useUtilityClasses$6=t=>{const{classes:r}=t;return composeClasses({root:["root"]},getTableHeadUtilityClass,r)},TableHeadRoot=styled$1("thead",{name:"MuiTableHead",slot:"Root"})({display:"table-header-group"}),tablelvl2={variant:"head"},defaultComponent$1="thead",TableHead=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiTableHead"}),{className:o,component:l=defaultComponent$1,...c}=a,_={...a,component:l},u=useUtilityClasses$6(_);return jsxRuntimeExports.jsx(Tablelvl2Context.Provider,{value:tablelvl2,children:jsxRuntimeExports.jsx(TableHeadRoot,{as:l,className:clsx(u.root,o),ref:n,role:l===defaultComponent$1?null:"rowgroup",ownerState:_,...c})})}),KeyboardArrowLeft=createSvgIcon(jsxRuntimeExports.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),KeyboardArrowRight=createSvgIcon(jsxRuntimeExports.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}));function getTableRowUtilityClass(t){return generateUtilityClass("MuiTableRow",t)}const tableRowClasses=generateUtilityClasses("MuiTableRow",["root","selected","hover","head","footer"]),useUtilityClasses$5=t=>{const{classes:r,selected:n,hover:a,head:o,footer:l}=t;return composeClasses({root:["root",n&&"selected",a&&"hover",o&&"head",l&&"footer"]},getTableRowUtilityClass,r)},TableRowRoot=styled$1("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.head&&r.head,n.footer&&r.footer]}})(memoTheme(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${tableRowClasses.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${tableRowClasses.selected}`]:{backgroundColor:t.alpha((t.vars||t).palette.primary.main,(t.vars||t).palette.action.selectedOpacity),"&:hover":{backgroundColor:t.alpha((t.vars||t).palette.primary.main,`${(t.vars||t).palette.action.selectedOpacity} + ${(t.vars||t).palette.action.hoverOpacity}`)}}}))),defaultComponent="tr",TableRow=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiTableRow"}),{className:o,component:l=defaultComponent,hover:c=!1,selected:_=!1,...u}=a,p=reactExports.useContext(Tablelvl2Context),d={...a,component:l,hover:c,selected:_,head:p&&p.variant==="head",footer:p&&p.variant==="footer"},m=useUtilityClasses$5(d);return jsxRuntimeExports.jsx(TableRowRoot,{as:l,ref:n,className:clsx(m.root,o),role:l===defaultComponent?null:"row",ownerState:d,...u})});function easeInOutSin(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function animate(t,r,n,a={},o=()=>{}){const{ease:l=easeInOutSin,duration:c=300}=a;let _=null;const u=r[t];let p=!1;const d=()=>{p=!0},m=f=>{if(p){o(new Error("Animation cancelled"));return}_===null&&(_=f);const g=Math.min(1,(f-_)/c);if(r[t]=l(g)*(n-u)+u,g>=1){requestAnimationFrame(()=>{o(null)});return}requestAnimationFrame(m)};return u===n?(o(new Error("Element already at target position")),d):(requestAnimationFrame(m),d)}const styles={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function ScrollbarSize(t){const{onChange:r,...n}=t,a=reactExports.useRef(),o=reactExports.useRef(null),l=()=>{a.current=o.current.offsetHeight-o.current.clientHeight};return useEnhancedEffect(()=>{const c=debounce$1(()=>{const u=a.current;l(),u!==a.current&&r(a.current)}),_=ownerWindow(o.current);return _.addEventListener("resize",c),()=>{c.clear(),_.removeEventListener("resize",c)}},[r]),reactExports.useEffect(()=>{l(),r(a.current)},[r]),jsxRuntimeExports.jsx("div",{style:styles,...n,ref:o})}function getTabScrollButtonUtilityClass(t){return generateUtilityClass("MuiTabScrollButton",t)}const tabScrollButtonClasses=generateUtilityClasses("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),useUtilityClasses$4=t=>{const{classes:r,orientation:n,disabled:a}=t;return composeClasses({root:["root",n,a&&"disabled"]},getTabScrollButtonUtilityClass,r)},TabScrollButtonRoot=styled$1(ButtonBase,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.orientation&&r[n.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${tabScrollButtonClasses.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),TabScrollButton=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiTabScrollButton"}),{className:o,slots:l={},slotProps:c={},direction:_,orientation:u,disabled:p,...d}=a,m=useRtl(),f={isRtl:m,...a},g=useUtilityClasses$4(f),E=l.StartScrollButtonIcon??KeyboardArrowLeft,x=l.EndScrollButtonIcon??KeyboardArrowRight,v=useSlotProps({elementType:E,externalSlotProps:c.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:f}),h=useSlotProps({elementType:x,externalSlotProps:c.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:f});return jsxRuntimeExports.jsx(TabScrollButtonRoot,{component:"div",className:clsx(g.root,o),ref:n,role:null,ownerState:f,tabIndex:null,...d,style:{...d.style,...u==="vertical"&&{"--TabScrollButton-svgRotate":`rotate(${m?-90:90}deg)`}},children:_==="left"?jsxRuntimeExports.jsx(E,{...v}):jsxRuntimeExports.jsx(x,{...h})})});function getTabsUtilityClass(t){return generateUtilityClass("MuiTabs",t)}const tabsClasses=generateUtilityClasses("MuiTabs",["root","vertical","list","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),nextItem=(t,r)=>t===r?t.firstChild:r&&r.nextElementSibling?r.nextElementSibling:t.firstChild,previousItem=(t,r)=>t===r?t.lastChild:r&&r.previousElementSibling?r.previousElementSibling:t.lastChild,moveFocus=(t,r,n)=>{let a=!1,o=n(t,r);for(;o;){if(o===t.firstChild){if(a)return;a=!0}const l=o.disabled||o.getAttribute("aria-disabled")==="true";if(!o.hasAttribute("tabindex")||l)o=n(t,o);else{o.focus();return}}},useUtilityClasses$3=t=>{const{vertical:r,fixed:n,hideScrollbar:a,scrollableX:o,scrollableY:l,centered:c,scrollButtonsHideMobile:_,classes:u}=t;return composeClasses({root:["root",r&&"vertical"],scroller:["scroller",n&&"fixed",a&&"hideScrollbar",o&&"scrollableX",l&&"scrollableY"],list:["list","flexContainer",r&&"flexContainerVertical",r&&"vertical",c&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",_&&"scrollButtonsHideMobile"],scrollableX:[o&&"scrollableX"],hideScrollbar:[a&&"hideScrollbar"]},getTabsUtilityClass,u)},TabsRoot=styled$1("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[{[`& .${tabsClasses.scrollButtons}`]:r.scrollButtons},{[`& .${tabsClasses.scrollButtons}`]:n.scrollButtonsHideMobile&&r.scrollButtonsHideMobile},r.root,n.vertical&&r.vertical]}})(memoTheme(({theme:t})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:r})=>r.vertical,style:{flexDirection:"column"}},{props:({ownerState:r})=>r.scrollButtonsHideMobile,style:{[`& .${tabsClasses.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}}]}))),TabsScroller=styled$1("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.scroller,n.fixed&&r.fixed,n.hideScrollbar&&r.hideScrollbar,n.scrollableX&&r.scrollableX,n.scrollableY&&r.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:t})=>t.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:t})=>t.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:t})=>t.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:t})=>t.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),List=styled$1("div",{name:"MuiTabs",slot:"List",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.list,r.flexContainer,n.vertical&&r.flexContainerVertical,n.centered&&r.centered]}})({display:"flex",variants:[{props:({ownerState:t})=>t.vertical,style:{flexDirection:"column"}},{props:({ownerState:t})=>t.centered,style:{justifyContent:"center"}}]}),TabsIndicator=styled$1("span",{name:"MuiTabs",slot:"Indicator"})(memoTheme(({theme:t})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(t.vars||t).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(t.vars||t).palette.secondary.main}},{props:({ownerState:r})=>r.vertical,style:{height:"100%",width:2,right:0}}]}))),TabsScrollbarSize=styled$1(ScrollbarSize)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),defaultIndicatorStyle={},Tabs=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiTabs"}),o=useTheme$1(),l=useRtl(),{"aria-label":c,"aria-labelledby":_,action:u,centered:p=!1,children:d,className:m,component:f="div",allowScrollButtonsMobile:g=!1,indicatorColor:E="primary",onChange:x,orientation:v="horizontal",ScrollButtonComponent:h,scrollButtons:b="auto",selectionFollowsFocus:S,slots:y={},slotProps:T={},TabIndicatorProps:A={},TabScrollButtonProps:w={},textColor:C="primary",value:L,variant:k="standard",visibleScrollbar:P=!1,...I}=a,F=k==="scrollable",H=v==="vertical",O=H?"scrollTop":"scrollLeft",R=H?"top":"left",M=H?"bottom":"right",G=H?"clientHeight":"clientWidth",U=H?"height":"width",j={...a,component:f,allowScrollButtonsMobile:g,indicatorColor:E,orientation:v,vertical:H,scrollButtons:b,textColor:C,variant:k,visibleScrollbar:P,fixed:!F,hideScrollbar:F&&!P,scrollableX:F&&!H,scrollableY:F&&H,centered:p&&!F,scrollButtonsHideMobile:!g},V=useUtilityClasses$3(j),$=useSlotProps({elementType:y.StartScrollButtonIcon,externalSlotProps:T.startScrollButtonIcon,ownerState:j}),Q=useSlotProps({elementType:y.EndScrollButtonIcon,externalSlotProps:T.endScrollButtonIcon,ownerState:j}),[re,X]=reactExports.useState(!1),[Y,oe]=reactExports.useState(defaultIndicatorStyle),[fe,ve]=reactExports.useState(!1),[ne,_e]=reactExports.useState(!1),[Z,ge]=reactExports.useState(!1),[ie,le]=reactExports.useState({overflow:"hidden",scrollbarWidth:0}),xe=new Map,ce=reactExports.useRef(null),ye=reactExports.useRef(null),ke={slots:y,slotProps:{indicator:A,scrollButton:w,...T}},Ae=()=>{const J=ce.current;let pe;if(J){const Ce=J.getBoundingClientRect();pe={clientWidth:J.clientWidth,scrollLeft:J.scrollLeft,scrollTop:J.scrollTop,scrollWidth:J.scrollWidth,top:Ce.top,bottom:Ce.bottom,left:Ce.left,right:Ce.right}}let Pe;if(J&&L!==!1){const Ce=ye.current.children;if(Ce.length>0){const Ge=Ce[xe.get(L)];Pe=Ge?Ge.getBoundingClientRect():null}}return{tabsMeta:pe,tabMeta:Pe}},he=useEventCallback(()=>{const{tabsMeta:J,tabMeta:pe}=Ae();let Pe=0,Ce;H?(Ce="top",pe&&J&&(Pe=pe.top-J.top+J.scrollTop)):(Ce=l?"right":"left",pe&&J&&(Pe=(l?-1:1)*(pe[Ce]-J[Ce]+J.scrollLeft)));const Ge={[Ce]:Pe,[U]:pe?pe[U]:0};if(typeof Y[Ce]!="number"||typeof Y[U]!="number")oe(Ge);else{const Ue=Math.abs(Y[Ce]-Ge[Ce]),He=Math.abs(Y[U]-Ge[U]);(Ue>=1||He>=1)&&oe(Ge)}}),Re=(J,{animation:pe=!0}={})=>{pe?animate(O,ce.current,J,{duration:o.transitions.duration.standard}):ce.current[O]=J},Fe=J=>{let pe=ce.current[O];H?pe+=J:pe+=J*(l?-1:1),Re(pe)},we=()=>{const J=ce.current[G];let pe=0;const Pe=Array.from(ye.current.children);for(let Ce=0;Ce<Pe.length;Ce+=1){const Ge=Pe[Ce];if(pe+Ge[G]>J){Ce===0&&(pe=J);break}pe+=Ge[G]}return pe},z=()=>{Fe(-1*we())},K=()=>{Fe(we())},[ee,{onChange:ue,...de}]=useSlot("scrollbar",{className:clsx(V.scrollableX,V.hideScrollbar),elementType:TabsScrollbarSize,shouldForwardComponentProp:!0,externalForwardedProps:ke,ownerState:j}),ae=reactExports.useCallback(J=>{ue?.(J),le({overflow:null,scrollbarWidth:J})},[ue]),[se,Le]=useSlot("scrollButtons",{className:clsx(V.scrollButtons,w.className),elementType:TabScrollButton,externalForwardedProps:ke,ownerState:j,additionalProps:{orientation:v,slots:{StartScrollButtonIcon:y.startScrollButtonIcon||y.StartScrollButtonIcon,EndScrollButtonIcon:y.endScrollButtonIcon||y.EndScrollButtonIcon},slotProps:{startScrollButtonIcon:$,endScrollButtonIcon:Q}}}),Te=()=>{const J={};J.scrollbarSizeListener=F?jsxRuntimeExports.jsx(ee,{...de,onChange:ae}):null;const Pe=F&&(b==="auto"&&(fe||ne)||b===!0);return J.scrollButtonStart=Pe?jsxRuntimeExports.jsx(se,{direction:l?"right":"left",onClick:z,disabled:!fe,...Le}):null,J.scrollButtonEnd=Pe?jsxRuntimeExports.jsx(se,{direction:l?"left":"right",onClick:K,disabled:!ne,...Le}):null,J},B=useEventCallback(J=>{const{tabsMeta:pe,tabMeta:Pe}=Ae();if(!(!Pe||!pe)){if(Pe[R]<pe[R]){const Ce=pe[O]+(Pe[R]-pe[R]);Re(Ce,{animation:J})}else if(Pe[M]>pe[M]){const Ce=pe[O]+(Pe[M]-pe[M]);Re(Ce,{animation:J})}}}),D=useEventCallback(()=>{F&&b!==!1&&ge(!Z)});reactExports.useEffect(()=>{const J=debounce$1(()=>{ce.current&&he()});let pe;const Pe=Ue=>{Ue.forEach(He=>{He.removedNodes.forEach(je=>{pe?.unobserve(je)}),He.addedNodes.forEach(je=>{pe?.observe(je)})}),J(),D()},Ce=ownerWindow(ce.current);Ce.addEventListener("resize",J);let Ge;return typeof ResizeObserver<"u"&&(pe=new ResizeObserver(J),Array.from(ye.current.children).forEach(Ue=>{pe.observe(Ue)})),typeof MutationObserver<"u"&&(Ge=new MutationObserver(Pe),Ge.observe(ye.current,{childList:!0})),()=>{J.clear(),Ce.removeEventListener("resize",J),Ge?.disconnect(),pe?.disconnect()}},[he,D]),reactExports.useEffect(()=>{const J=Array.from(ye.current.children),pe=J.length;if(typeof IntersectionObserver<"u"&&pe>0&&F&&b!==!1){const Pe=J[0],Ce=J[pe-1],Ge={root:ce.current,threshold:.99},Ue=We=>{ve(!We[0].isIntersecting)},He=new IntersectionObserver(Ue,Ge);He.observe(Pe);const je=We=>{_e(!We[0].isIntersecting)},Ve=new IntersectionObserver(je,Ge);return Ve.observe(Ce),()=>{He.disconnect(),Ve.disconnect()}}},[F,b,Z,d?.length]),reactExports.useEffect(()=>{X(!0)},[]),reactExports.useEffect(()=>{he()}),reactExports.useEffect(()=>{B(defaultIndicatorStyle!==Y)},[B,Y]),reactExports.useImperativeHandle(u,()=>({updateIndicator:he,updateScrollButtons:D}),[he,D]);const[N,W]=useSlot("indicator",{className:clsx(V.indicator,A.className),elementType:TabsIndicator,externalForwardedProps:ke,ownerState:j,additionalProps:{style:Y}}),q=jsxRuntimeExports.jsx(N,{...W});let te=0;const Ee=reactExports.Children.map(d,J=>{if(!reactExports.isValidElement(J))return null;const pe=J.props.value===void 0?te:J.props.value;xe.set(pe,te);const Pe=pe===L;return te+=1,reactExports.cloneElement(J,{fullWidth:k==="fullWidth",indicator:Pe&&!re&&q,selected:Pe,selectionFollowsFocus:S,onChange:x,textColor:C,value:pe,...te===1&&L===!1&&!J.props.tabIndex?{tabIndex:0}:{}})}),De=J=>{if(J.altKey||J.shiftKey||J.ctrlKey||J.metaKey)return;const pe=ye.current,Pe=ownerDocument(pe).activeElement;if(Pe.getAttribute("role")!=="tab")return;let Ge=v==="horizontal"?"ArrowLeft":"ArrowUp",Ue=v==="horizontal"?"ArrowRight":"ArrowDown";switch(v==="horizontal"&&l&&(Ge="ArrowRight",Ue="ArrowLeft"),J.key){case Ge:J.preventDefault(),moveFocus(pe,Pe,previousItem);break;case Ue:J.preventDefault(),moveFocus(pe,Pe,nextItem);break;case"Home":J.preventDefault(),moveFocus(pe,null,nextItem);break;case"End":J.preventDefault(),moveFocus(pe,null,previousItem);break}},Se=Te(),[Ie,Oe]=useSlot("root",{ref:n,className:clsx(V.root,m),elementType:TabsRoot,externalForwardedProps:{...ke,...I,component:f},ownerState:j}),[Be,Me]=useSlot("scroller",{ref:ce,className:V.scroller,elementType:TabsScroller,externalForwardedProps:ke,ownerState:j,additionalProps:{style:{overflow:ie.overflow,[H?`margin${l?"Left":"Right"}`:"marginBottom"]:P?void 0:-ie.scrollbarWidth}}}),[be,Ne]=useSlot("list",{ref:ye,className:clsx(V.list,V.flexContainer),elementType:List,externalForwardedProps:ke,ownerState:j,getSlotProps:J=>({...J,onKeyDown:pe=>{De(pe),J.onKeyDown?.(pe)}})});return jsxRuntimeExports.jsxs(Ie,{...Oe,children:[Se.scrollButtonStart,Se.scrollbarSizeListener,jsxRuntimeExports.jsxs(Be,{...Me,children:[jsxRuntimeExports.jsx(be,{"aria-label":c,"aria-labelledby":_,"aria-orientation":v==="vertical"?"vertical":null,role:"tablist",...Ne,children:Ee}),re&&q]}),Se.scrollButtonEnd]})});function getTextFieldUtilityClass(t){return generateUtilityClass("MuiTextField",t)}generateUtilityClasses("MuiTextField",["root"]);const variantComponent={standard:Input,filled:FilledInput,outlined:OutlinedInput},useUtilityClasses$2=t=>{const{classes:r}=t;return composeClasses({root:["root"]},getTextFieldUtilityClass,r)},TextFieldRoot=styled$1(FormControl,{name:"MuiTextField",slot:"Root"})({}),TextField=reactExports.forwardRef(function(r,n){const a=useDefaultProps({props:r,name:"MuiTextField"}),{autoComplete:o,autoFocus:l=!1,children:c,className:_,color:u="primary",defaultValue:p,disabled:d=!1,error:m=!1,FormHelperTextProps:f,fullWidth:g=!1,helperText:E,id:x,InputLabelProps:v,inputProps:h,InputProps:b,inputRef:S,label:y,maxRows:T,minRows:A,multiline:w=!1,name:C,onBlur:L,onChange:k,onFocus:P,placeholder:I,required:F=!1,rows:H,select:O=!1,SelectProps:R,slots:M={},slotProps:G={},type:U,value:j,variant:V="outlined",...$}=a,Q={...a,autoFocus:l,color:u,disabled:d,error:m,fullWidth:g,multiline:w,required:F,select:O,variant:V},re=useUtilityClasses$2(Q),X=useId(x),Y=E&&X?`${X}-helper-text`:void 0,oe=y&&X?`${X}-label`:void 0,fe=variantComponent[V],ve={slots:M,slotProps:{input:b,inputLabel:v,htmlInput:h,formHelperText:f,select:R,...G}},ne={},_e=ve.slotProps.inputLabel;V==="outlined"&&(_e&&typeof _e.shrink<"u"&&(ne.notched=_e.shrink),ne.label=y),O&&((!R||!R.native)&&(ne.id=void 0),ne["aria-describedby"]=void 0);const[Z,ge]=useSlot("root",{elementType:TextFieldRoot,shouldForwardComponentProp:!0,externalForwardedProps:{...ve,...$},ownerState:Q,className:clsx(re.root,_),ref:n,additionalProps:{disabled:d,error:m,fullWidth:g,required:F,color:u,variant:V}}),[ie,le]=useSlot("input",{elementType:fe,externalForwardedProps:ve,additionalProps:ne,ownerState:Q}),[xe,ce]=useSlot("inputLabel",{elementType:InputLabel,externalForwardedProps:ve,ownerState:Q}),[ye,ke]=useSlot("htmlInput",{elementType:"input",externalForwardedProps:ve,ownerState:Q}),[Ae,he]=useSlot("formHelperText",{elementType:FormHelperText,externalForwardedProps:ve,ownerState:Q}),[Re,Fe]=useSlot("select",{elementType:Select,externalForwardedProps:ve,ownerState:Q}),we=jsxRuntimeExports.jsx(ie,{"aria-describedby":Y,autoComplete:o,autoFocus:l,defaultValue:p,fullWidth:g,multiline:w,name:C,rows:H,maxRows:T,minRows:A,type:U,value:j,id:X,inputRef:S,onBlur:L,onChange:k,onFocus:P,placeholder:I,inputProps:ke,slots:{input:M.htmlInput?ye:void 0},...le});return jsxRuntimeExports.jsxs(Z,{...ge,children:[y!=null&&y!==""&&jsxRuntimeExports.jsx(xe,{htmlFor:X,id:oe,...ce,children:y}),O?jsxRuntimeExports.jsx(Re,{"aria-describedby":Y,id:X,labelId:oe,value:j,input:we,...Fe,children:c}):we,E&&jsxRuntimeExports.jsx(Ae,{id:Y,...he,children:E})]})});function getToggleButtonUtilityClass(t){return generateUtilityClass("MuiToggleButton",t)}const toggleButtonClasses=generateUtilityClasses("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),ToggleButtonGroupContext=reactExports.createContext({}),ToggleButtonGroupButtonContext=reactExports.createContext(void 0);function isValueSelected(t,r){return r===void 0||t===void 0?!1:Array.isArray(r)?r.includes(t):t===r}const useUtilityClasses$1=t=>{const{classes:r,fullWidth:n,selected:a,disabled:o,size:l,color:c}=t,_={root:["root",a&&"selected",o&&"disabled",n&&"fullWidth",`size${capitalize(l)}`,c]};return composeClasses(_,getToggleButtonUtilityClass,r)},ToggleButtonRoot=styled$1(ButtonBase,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[`size${capitalize(n.size)}`]]}})(memoTheme(({theme:t})=>({...t.typography.button,borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active,[`&.${toggleButtonClasses.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.alpha((t.vars||t).palette.text.primary,(t.vars||t).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${toggleButtonClasses.selected}`]:{color:(t.vars||t).palette.text.primary,backgroundColor:t.alpha((t.vars||t).palette.text.primary,(t.vars||t).palette.action.selectedOpacity),"&:hover":{backgroundColor:t.alpha((t.vars||t).palette.text.primary,`${(t.vars||t).palette.action.selectedOpacity} + ${(t.vars||t).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:t.alpha((t.vars||t).palette.text.primary,(t.vars||t).palette.action.selectedOpacity)}}}}},...Object.entries(t.palette).filter(createSimplePaletteValueFilter()).map(([r])=>({props:{color:r},style:{[`&.${toggleButtonClasses.selected}`]:{color:(t.vars||t).palette[r].main,backgroundColor:t.alpha((t.vars||t).palette[r].main,(t.vars||t).palette.action.selectedOpacity),"&:hover":{backgroundColor:t.alpha((t.vars||t).palette[r].main,`${(t.vars||t).palette.action.selectedOpacity} + ${(t.vars||t).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:t.alpha((t.vars||t).palette[r].main,(t.vars||t).palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:t.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:t.typography.pxToRem(15)}}]}))),ToggleButton=reactExports.forwardRef(function(r,n){const{value:a,...o}=reactExports.useContext(ToggleButtonGroupContext),l=reactExports.useContext(ToggleButtonGroupButtonContext),c=resolveProps({...o,selected:isValueSelected(r.value,a)},r),_=useDefaultProps({props:c,name:"MuiToggleButton"}),{children:u,className:p,color:d="standard",disabled:m=!1,disableFocusRipple:f=!1,fullWidth:g=!1,onChange:E,onClick:x,selected:v,size:h="medium",value:b,...S}=_,y={..._,color:d,disabled:m,disableFocusRipple:f,fullWidth:g,size:h},T=useUtilityClasses$1(y),A=C=>{x&&(x(C,b),C.defaultPrevented)||E&&E(C,b)},w=l||"";return jsxRuntimeExports.jsx(ToggleButtonRoot,{className:clsx(o.className,T.root,p,w),disabled:m,focusRipple:!f,ref:n,onClick:A,onChange:E,value:b,ownerState:y,"aria-pressed":v,...S,children:u})});var CopyOutlined$1={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};function _extends$3(){return _extends$3=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},_extends$3.apply(this,arguments)}const CopyOutlined=(t,r)=>reactExports.createElement(Icon,_extends$3({},t,{ref:r,icon:CopyOutlined$1})),RefIcon$3=reactExports.forwardRef(CopyOutlined);var LinkOutlined$1={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};function _extends$2(){return _extends$2=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},_extends$2.apply(this,arguments)}const LinkOutlined=(t,r)=>reactExports.createElement(Icon,_extends$2({},t,{ref:r,icon:LinkOutlined$1})),RefIcon$2=reactExports.forwardRef(LinkOutlined);var SettingTwoTone$1={icon:function(r,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.3 569.7l.2.1c3.1-18.9 4.6-38.2 4.6-57.3 0-17.1-1.3-34.3-3.7-51.1 2.4 16.7 3.6 33.6 3.6 50.5 0 19.4-1.6 38.8-4.7 57.8zM99 398.1c-.5-.4-.9-.8-1.4-1.3.7.7 1.4 1.4 2.2 2.1l65.5 55.9v-.1L99 398.1zm536.6-216h.1l-15.5-83.8c-.2-1-.4-1.9-.7-2.8.1.5.3 1.1.4 1.6l15.7 85zm54 546.5l31.4-25.8 92.8 32.9c17-22.9 31.3-47.5 42.6-73.6l-74.7-63.9 6.6-40.1c2.5-15.1 3.8-30.6 3.8-46.1s-1.3-31-3.8-46.1l-6.5-39.9 74.7-63.9c-11.4-26-25.6-50.7-42.6-73.6l-92.8 32.9-31.4-25.8c-23.9-19.6-50.6-35-79.3-45.8l-38.1-14.3-17.9-97a377.5 377.5 0 00-85 0l-17.9 97.2-37.9 14.3c-28.5 10.8-55 26.2-78.7 45.7l-31.4 25.9-93.4-33.2c-17 22.9-31.3 47.5-42.6 73.6l75.5 64.5-6.5 40c-2.5 14.9-3.7 30.2-3.7 45.5 0 15.2 1.3 30.6 3.7 45.5l6.5 40-75.5 64.5c11.4 26 25.6 50.7 42.6 73.6l93.4-33.2 31.4 25.9c23.7 19.5 50.2 34.9 78.7 45.7l37.8 14.5 17.9 97.2c28.2 3.2 56.9 3.2 85 0l17.9-97 38.1-14.3c28.8-10.8 55.4-26.2 79.3-45.8zm-177.1-50.3c-30.5 0-59.2-7.8-84.3-21.5C373.3 627 336 568.9 336 502c0-97.2 78.8-176 176-176 66.9 0 125 37.3 154.8 92.2 13.7 25 21.5 53.7 21.5 84.3 0 97.1-78.7 175.8-175.8 175.8zM207.2 812.8c-5.5 1.9-11.2 2.3-16.6 1.2 5.7 1.2 11.7 1 17.5-1l81.4-29c-.1-.1-.3-.2-.4-.3l-81.9 29.1zm717.6-414.7l-65.5 56c0 .2.1.5.1.7l65.4-55.9c7.1-6.1 11.1-14.9 11.2-24-.3 8.8-4.3 17.3-11.2 23.2z",fill:n}},{tag:"path",attrs:{d:"M935.8 646.6c.5 4.7 0 9.5-1.7 14.1l-.9 2.6a446.02 446.02 0 01-79.7 137.9l-1.8 2.1a32 32 0 01-35.1 9.5l-81.3-28.9a350 350 0 01-99.7 57.6l-15.7 85a32.05 32.05 0 01-25.8 25.7l-2.7.5a445.2 445.2 0 01-79.2 7.1h.3c26.7 0 53.4-2.4 79.4-7.1l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c1.6-4.7 2.1-9.7 1.5-14.5z",fill:n}},{tag:"path",attrs:{d:"M688 502c0-30.3-7.7-58.9-21.2-83.8C637 363.3 578.9 326 512 326c-97.2 0-176 78.8-176 176 0 66.9 37.3 125 92.2 154.8 24.9 13.5 53.4 21.2 83.8 21.2 97.2 0 176-78.8 176-176zm-288 0c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502z",fill:r}},{tag:"path",attrs:{d:"M594.1 952.2a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c1.7-4.6 2.2-9.4 1.7-14.1-.9-7.9-4.7-15.4-11-20.9l-65.3-55.9-.2-.1c3.1-19 4.7-38.4 4.7-57.8 0-16.9-1.2-33.9-3.6-50.5-.3-2.2-.7-4.4-1-6.6 0-.2-.1-.5-.1-.7l65.5-56c6.9-5.9 10.9-14.4 11.2-23.2.1-4-.5-8.1-1.9-12l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.4-44-99.6-57.6h-.1l-15.7-85c-.1-.5-.2-1.1-.4-1.6a32.08 32.08 0 00-25.4-24.1l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6a32.09 32.09 0 007.9 33.9c.5.4.9.9 1.4 1.3l66.3 56.6v.1c-3.1 18.8-4.6 37.9-4.6 57 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1c4.9 5.7 11.4 9.4 18.5 10.7 5.4 1 11.1.7 16.6-1.2l81.9-29.1c.1.1.3.2.4.3 29.7 24.3 62.8 43.6 98.6 57.1l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5c26.1 4.7 52.8 7.1 79.5 7.1h.3c26.6 0 53.3-2.4 79.2-7.1l2.7-.5zm-39.8-66.5a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97z",fill:r}}]}},name:"setting",theme:"twotone"};function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},_extends$1.apply(this,arguments)}const SettingTwoTone=(t,r)=>reactExports.createElement(Icon,_extends$1({},t,{ref:r,icon:SettingTwoTone$1})),RefIcon$1=reactExports.forwardRef(SettingTwoTone);var SoundOutlined$1={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z"}}]},name:"sound",theme:"outlined"};function _extends(){return _extends=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},_extends.apply(this,arguments)}const SoundOutlined=(t,r)=>reactExports.createElement(Icon,_extends({},t,{ref:r,icon:SoundOutlined$1})),RefIcon=reactExports.forwardRef(SoundOutlined),BackgroundImage=""+new URL("cs-CCN1Ha4B.jpeg",import.meta.url).href,DownloadIndicator=({downloadProgress:t,unpackProgress:r})=>{const{t:n}=useTranslation();return t?jsxRuntimeExports.jsxs(Box,{sx:{position:"absolute",display:"inline-flex",zIndex:120,top:"calc(100vh / 2 - 100px)",left:"calc(100vw / 2 - 100px)"},children:[jsxRuntimeExports.jsx(CircularProgress,{variant:"indeterminate",value:t,size:200}),jsxRuntimeExports.jsxs(Box,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[jsxRuntimeExports.jsx(Typography,{variant:"caption",fontSize:40,fontWeight:"bold",component:"div",sx:{color:"text.primary"},children:`${Math.round(t)===100?Math.round(r):Math.round(t)}%`}),jsxRuntimeExports.jsx(Typography,{variant:"subtitle1",component:"div",sx:{color:"text.primary"},children:Math.round(t)===100?n("Unpacking"):n("Downloading")})]})]}):""},GamepadIcon=t=>jsxRuntimeExports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 56 56",width:"1em",height:"1em",...t,children:jsxRuntimeExports.jsx("path",{fill:"currentColor",d:"M0 39.319c0 4.539 2.948 7.487 7.39 7.487c2.25 0 4.481-.97 6.11-2.987l3.511-4.248c.505-.601 1.087-.892 1.669-.892h18.64c.582 0 1.164.29 1.65.892l3.51 4.248c1.649 2.017 3.86 2.987 6.13 2.987c4.422 0 7.39-2.948 7.39-7.487c0-1.94-.466-4.17-1.203-6.673c-1.183-3.976-3.258-9.388-5.256-13.578c-1.649-3.492-2.503-5.082-6.615-6.013c-3.666-.834-8.729-1.397-14.936-1.397s-11.27.563-14.916 1.397c-4.113.93-4.966 2.521-6.634 6.013c-1.979 4.19-4.054 9.602-5.237 13.578C.446 35.148 0 37.38 0 39.32m2.968.116c0-1.222.271-2.696.892-4.81c1.3-4.462 3.55-10.242 5.509-14.529c.95-2.075 1.474-3.336 3.996-3.918c3.51-.834 8.496-1.397 14.625-1.397c6.13 0 11.115.563 14.645 1.397c2.502.582 3.026 1.843 3.996 3.918c1.998 4.287 4.151 10.087 5.49 14.529c.64 2.114.911 3.588.911 4.81c0 2.677-1.881 4.365-4.384 4.365c-1.474 0-2.91-.776-4.034-2.153l-3.647-4.404c-.931-1.125-1.726-1.687-3.51-1.687H18.543c-1.804 0-2.58.562-3.511 1.687l-3.647 4.404c-1.125 1.377-2.56 2.153-4.034 2.153c-2.503 0-4.384-1.688-4.384-4.365m9.33-14.102c0 1.009.582 1.63 1.61 1.63h3.472v3.394c0 .99.582 1.61 1.552 1.61c.95 0 1.513-.62 1.513-1.61v-3.394h3.297c1.086 0 1.727-.621 1.727-1.63c0-.97-.64-1.57-1.727-1.57h-3.297v-3.395c0-.99-.563-1.59-1.513-1.59c-.97 0-1.552.6-1.552 1.59v3.394h-3.472c-1.028 0-1.61.601-1.61 1.571m27.757-.252c1.572 0 2.794-1.203 2.794-2.774c0-1.59-1.222-2.812-2.794-2.812c-1.551 0-2.793 1.222-2.793 2.812c0 1.572 1.242 2.774 2.793 2.774m-5.702 5.761c1.57 0 2.773-1.222 2.773-2.793c0-1.59-1.202-2.813-2.773-2.813s-2.794 1.222-2.794 2.813a2.76 2.76 0 0 0 2.794 2.793"})}),useYSDK=()=>reactExports.useContext(YaGamesContext)??throwExpression(new Error("YaGamesSDK context must be use inside provider")),snackbar=t=>{dispatch(openSnackbar(t))},InviteLink=({instance:t})=>{const{t:r}=useTranslation(),{sdk:n}=useYSDK(),[a,o]=reactExports.useState();return reactExports.useEffect(()=>{t&&(async()=>{const l=(await n.getFlags())?.FAKE_YANDEX;o((c=>(c.searchParams.delete("payload"),c.searchParams.append("payload",t?.net?.getHostId()),c))(new URL(l?"https://turch.in/zcs/index.html":"https://yandex.ru/games/app/464500")))})()},[t]),a?jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(Tooltip,{title:r("menu.Link"),slotProps:{popper:{sx:{[`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:{color:"#000",fontSize:"1em"}}}},children:jsxRuntimeExports.jsx(TextField,{variant:"outlined",slotProps:{htmlInput:{readOnly:!0,onMouseDown:l=>l.preventDefault(),sx:{padding:"5px 5px"}},input:{endAdornment:jsxRuntimeExports.jsx(Button,{startIcon:jsxRuntimeExports.jsx(RefIcon$3,{}),children:r("buttons.Copy")}),startAdornment:jsxRuntimeExports.jsx(RefIcon$2,{})}},value:a,onClick:()=>{n.clipboard.writeText(String(a)),snackbar({open:!0,message:r("snackbar.Link Copied"),variant:"alert",close:!1})},fullWidth:!0})})}):""},__vite_glob_0_0=""+new URL("aim_map.bsp-DW20GAZm.jpg",import.meta.url).href,__vite_glob_0_1=""+new URL("aim_towertop.bsp-q455i3-r.jpg",import.meta.url).href,__vite_glob_0_2=""+new URL("awp_india.bsp-CWwU-s6m.jpg",import.meta.url).href,__vite_glob_0_3=""+new URL("de_aztec.bsp-Ct-l4Nhx.jpg",import.meta.url).href,__vite_glob_0_4=""+new URL("de_cbble.bsp-_AGlGGLT.jpg",import.meta.url).href,__vite_glob_0_5=""+new URL("de_dust2.bsp-0dwQo_4l.jpg",import.meta.url).href,__vite_glob_0_6=""+new URL("de_inferno.bsp-ChN7sXq_.jpg",import.meta.url).href,__vite_glob_0_7=""+new URL("de_mirage.bsp-CrUx6nUV.jpg",import.meta.url).href,__vite_glob_0_8=""+new URL("de_nuke.bsp-Oox7yzfS.jpg",import.meta.url).href,__vite_glob_0_9=""+new URL("de_train.bsp-CcyIzQwl.jpg",import.meta.url).href,__vite_glob_0_10=""+new URL("fy_pool_day.bsp-C6FawjZM.jpg",import.meta.url).href,__vite_glob_0_11=""+new URL("fy_snow.bsp-CwufUmzT.jpg",import.meta.url).href,mapImagesPrefix="../assets/images/maps",mapImages=Object.assign({"../assets/images/maps/aim_map.bsp.jpg":__vite_glob_0_0,"../assets/images/maps/aim_towertop.bsp.jpg":__vite_glob_0_1,"../assets/images/maps/awp_india.bsp.jpg":__vite_glob_0_2,"../assets/images/maps/de_aztec.bsp.jpg":__vite_glob_0_3,"../assets/images/maps/de_cbble.bsp.jpg":__vite_glob_0_4,"../assets/images/maps/de_dust2.bsp.jpg":__vite_glob_0_5,"../assets/images/maps/de_inferno.bsp.jpg":__vite_glob_0_6,"../assets/images/maps/de_mirage.bsp.jpg":__vite_glob_0_7,"../assets/images/maps/de_nuke.bsp.jpg":__vite_glob_0_8,"../assets/images/maps/de_train.bsp.jpg":__vite_glob_0_9,"../assets/images/maps/fy_pool_day.bsp.jpg":__vite_glob_0_10,"../assets/images/maps/fy_snow.bsp.jpg":__vite_glob_0_11}),MapConfig=({instance:t})=>{const{t:r}=useTranslation(),{selectedMap:n}=useSelector(a=>a.game);return jsxRuntimeExports.jsxs(Stack,{direction:"row",children:[jsxRuntimeExports.jsx(List$1,{subheader:jsxRuntimeExports.jsx(ListSubheader,{children:r("settings.Select map")}),sx:{minWidth:120,maxHeight:400,overflow:"auto"},children:Object.keys(t?.FS.analyzePath(`${t?.ENV.HOME}/rodir/cstrike/maps`)?.object?.contents??{}).filter(a=>a.endsWith(".bsp")).sort().map(a=>jsxRuntimeExports.jsx(ListItemButton,{dense:!0,selected:n===a,onClick:()=>dispatch(map(a)),children:jsxRuntimeExports.jsx(ListItemText,{secondary:r(`maps.name.${a}`)})},a))}),jsxRuntimeExports.jsxs(Card,{sx:{borderRadius:0,background:"transparent"},children:[jsxRuntimeExports.jsx(CardMedia,{sx:{minHeight:240,minWidth:400},image:mapImages[`${mapImagesPrefix}/${n}.jpg`],title:"green iguana"}),jsxRuntimeExports.jsxs(CardContent,{children:[jsxRuntimeExports.jsx(Typography,{gutterBottom:!0,variant:"h5",component:"div",sx:{textTransform:"uppercase"},children:r(`maps.name.${n}`)}),jsxRuntimeExports.jsx(Typography,{variant:"body2",sx:{color:"text.secondary"}})]})]})]})},PlayerConfig=({instance:t,mainRunning:r})=>{const{t:n}=useTranslation(),{playerName:a}=useSelector(l=>l.game),{sdk:o}=useYSDK();return reactExports.useEffect(()=>{!t||!r||t.getCVar("name").then(l=>l==="Player"?o.getPlayer().then(c=>c.getName()??l):l).then(l=>dispatch(name(l)))},[t,r]),reactExports.useEffect(()=>{t?.executeString(`name "${a}"`),t?.executeString(`hostname "${a}"`)},[a]),r?jsxRuntimeExports.jsx(Stack,{direction:"column",sx:{minWidth:400},children:jsxRuntimeExports.jsx(TextField,{slotProps:{htmlInput:{onKeyPress:l=>l.stopPropagation(),onKeyUp:l=>l.stopPropagation(),onKeyDown:l=>l.stopPropagation()}},value:a,onChange:l=>dispatch(name(l.target.value)),label:n("input.Player name"),variant:"standard"})}):jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{})},ServersList=({instance:t})=>{const{t:r}=useTranslation(),{palette:n}=useTheme$1(),[a,o]=reactExports.useState(),{servers:l,connecting:c}=useSelector(_=>_.game);return reactExports.useEffect(()=>{if(!t)return;const _=({data:u})=>{try{const p=JSON.parse(u);switch(!0){case"sv:list"in p:p["sv:list"].forEach(d=>t.executeString(`ui_queryserver ololoken.${d} current`));break}}catch(p){console.error("bad server response",u,p)}};return t.net.master.addEventListener("message",_),t.net.master.send(JSON.stringify({list:""})),()=>t.net.master.removeEventListener("message",_)},[t]),jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(TableContainer,{sx:{maxHeight:"calc(100vh - 240px)",minHeight:"calc(100vh - 240px)"},children:jsxRuntimeExports.jsxs(Table,{children:[jsxRuntimeExports.jsx(TableHead,{children:jsxRuntimeExports.jsxs(TableRow,{children:[jsxRuntimeExports.jsx(TableCell,{children:r("srv.Name")}),jsxRuntimeExports.jsx(TableCell,{align:"right",children:r("srv.Map")}),jsxRuntimeExports.jsx(TableCell,{align:"right",children:r("srv.Players")}),jsxRuntimeExports.jsx(TableCell,{align:"right",children:r("srv.Ping")})]})}),jsxRuntimeExports.jsx(TableBody,{children:Object.entries(l).sort(([,{numcl:_}],[,{numcl:u}])=>Number(u)-Number(_)).map(([_,u])=>jsxRuntimeExports.jsxs(TableRow,{onClick:()=>o(a===Number(_)?void 0:Number(_)),sx:{"&:last-child td, &:last-child th":{border:0},background:Number(_)===a?n.primary.dark:"",":hover":{background:Number(_)===a?alpha(n.primary.dark,.5):alpha(n.primary.light,.5)}},children:[jsxRuntimeExports.jsx(TableCell,{component:"th",scope:"row",children:u.host}),jsxRuntimeExports.jsx(TableCell,{align:"right",children:u.map}),jsxRuntimeExports.jsxs(TableCell,{align:"right",children:[u.numcl,"/",u.maxcl]}),jsxRuntimeExports.jsx(TableCell,{align:"right",children:u.ping})]},_))})]})}),jsxRuntimeExports.jsx(Button,{size:"large",variant:"contained",startIcon:jsxRuntimeExports.jsx(GamepadIcon,{}),sx:{minWidth:"50%"},loading:c,loadingIndicator:jsxRuntimeExports.jsx(CircularProgress,{}),disabled:!a||c,onClick:()=>{dispatch(flow({connecting:!0})),dispatch(publicServers({})),t?.executeString("host_writeconfig"),t?.preConnectToServer(a).then(()=>(t?.executeString(`connect o.${a}`),t?.waitMessage("Setting up renderer",6e4))).then(()=>{dispatch(flow({showSettings:!1,connected:!0}))}).finally(()=>dispatch(flow({connecting:!1})))},children:r("buttons.Connect {{name}}",{name:l?.[a??0]?.host??"--/--"})})]})},MouseIcon=t=>jsxRuntimeExports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"1em",height:"1em",...t,children:jsxRuntimeExports.jsx("path",{fill:"currentColor",d:"M6 7a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6zm6-4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-3v3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1V3z"})}),VolumeAndSensitivitySliders=({mainRunning:t,instance:r})=>{const{t:n}=useTranslation(),[a,o]=reactExports.useState(0),[l,c]=reactExports.useState(0);if(reactExports.useEffect(()=>{!r||!t||(r.getCVar("volume").then(_=>o(Number(_))),r.getCVar("sensitivity").then(_=>c(Number(_))))},[r,t]),reactExports.useEffect(()=>{!r||!t||r.executeString(`volume ${a}`)},[a]),reactExports.useEffect(()=>{!r||!t||r.executeString(`sensitivity ${l}`)},[l]),!!t)return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs(Stack,{spacing:2,direction:"row",sx:{alignItems:"center",mb:1},children:[jsxRuntimeExports.jsx(RefIcon,{}),jsxRuntimeExports.jsx(Tooltip,{title:n("menu.Volume {{vol}}",{vol:(a*100).toFixed(0)}),slotProps:{popper:{sx:{[`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:{color:"#000",fontSize:"1em"}}}},children:jsxRuntimeExports.jsx(Slider,{value:a,onChange:(_,u)=>o(u),min:0,max:1,step:.05,sx:{minWidth:120}})})]}),jsxRuntimeExports.jsxs(Stack,{spacing:2,direction:"row",sx:{alignItems:"center",mb:1},children:[jsxRuntimeExports.jsx(MouseIcon,{}),jsxRuntimeExports.jsx(Tooltip,{title:n("menu.Sensitivity {{sens}}",{sens:l.toFixed(2)}),slotProps:{popper:{sx:{[`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:{color:"#000",fontSize:"1em"}}}},children:jsxRuntimeExports.jsx(Slider,{value:l,onChange:(_,u)=>c(u),min:.1,max:3,step:.05,sx:{minWidth:120}})})]})]})},BotIcon=t=>jsxRuntimeExports.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"1em",height:"1em",...t,children:[jsxRuntimeExports.jsx("path",{fill:"currentColor",d:"M7.801 14.539c1.586-1.984 4.832-2.37 7.145-2.827c1.941-.384 4.049-.612 5.881-1.394c2.596-1 2.48-4.931 3.268-4.931c.588 0 2.697 3.019 4.549 3.019c1.58 0 2.58-3.697 3.453-3.697c.877 0 1.871 3.697 3.451 3.697c1.854 0 3.963-3.019 4.551-3.019c.785 0 .672 3.931 3.268 4.931c1.832.781 3.939 1.01 5.881 1.394c2.313.457 5.559.843 7.145 2.827c.582.727 1.729-.113 1.207-.887c-.656-.975-1.637-1.658-2.674-2.168c-3.377-1.658-11.639-1.31-12.334-5.653c-.914-5.694-5.855.062-6.771.062C34.76 5.893 34.246 2 32.096 2c-2.152 0-2.664 3.893-3.723 3.893c-.916 0-5.859-5.756-6.771-.062c-.695 4.344-8.959 3.995-12.334 5.653c-1.037.51-2.02 1.193-2.674 2.168c-.522.774.625 1.614 1.207.887"}),jsxRuntimeExports.jsx("path",{fill:"currentColor",d:"M58 15.98a4 4 0 0 0-4 4c0 1.86 1.279 3.412 3 3.858V47.98h-.5v-2.393c0-2.303-1.537-4.107-3.5-4.107V36c0-15.464-5.535-24-21-24c-15.463 0-21 8.536-21 24v5.48c-1.93 0-3.5 1.843-3.5 4.107v2.393H7V23.839a3.99 3.99 0 0 0 3-3.858a4 4 0 0 0-8 0c0 1.86 1.279 3.412 3 3.858V49.98h2.5v2.391c0 2.305 1.537 4.109 3.5 4.109V57a5 5 0 0 0 5 5h32a5 5 0 0 0 5-5v-.52c1.963 0 3.5-1.805 3.5-4.109V49.98H59V23.839a3.99 3.99 0 0 0 3-3.858a4 4 0 0 0-4-4.001m-52 6.5c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5m5 32.5c-1.104 0-2-1.168-2-2.609v-6.784c0-1.439.896-2.607 2-2.607zM50.5 57c0 1.379-1.121 2.5-2.5 2.5H16a2.5 2.5 0 0 1-2.5-2.5V36s-.331-4.09 1.037-9.778C16.521 17.977 22.136 14.5 32 14.5s15.272 3.529 17.463 11.722C50.843 31.382 50.5 36 50.5 36zm4.5-9.02v4.391c0 1.441-.895 2.609-2 2.609v-12c1.105 0 2 1.168 2 2.607zm3-25.5c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5"}),jsxRuntimeExports.jsx("path",{fill:"currentColor",d:"M21.5 37.5a6 6 0 0 0 6-6a6 6 0 1 0-6 6m0-8.285a2.285 2.285 0 1 1 0 4.572a2.285 2.285 0 0 1 0-4.572m21-3.715a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 8.287a2.285 2.285 0 1 1 0-4.57a2.285 2.285 0 0 1 0 4.57m1.732 7.301H19.77c-7.359 0-7.359 13 0 13h24.463c7.357 0 7.357-13-.001-13m-.72 11.5H20.488c-5.984 0-5.984-10 0-10h23.023c5.985 0 5.985 10 .001 10"}),jsxRuntimeExports.jsx("path",{fill:"currentColor",d:"M19.193 44.514v6.148c0 1.234 2 1.234 2 0v-6.148c0-1.235-2-1.235-2 0m4.723 0v6.148c0 1.234 2 1.234 2 0v-6.148c0-1.235-2-1.235-2 0m4.723 0v6.148c0 1.234 2 1.234 2 0v-6.148c0-1.235-2-1.235-2 0m4.722 0v6.148c0 1.234 2 1.234 2 0v-6.148c0-1.235-2-1.235-2 0m4.723 0v6.148c0 1.234 2 1.234 2 0v-6.148c0-1.235-2-1.235-2 0m4.723 0v6.148c0 1.234 2 1.234 2 0v-6.148c0-1.235-2-1.235-2 0M32 39.48c.668 0 1.295-.26 1.768-.732s.732-1.102.732-1.77s-.261-1.295-.732-1.766c-.945-.945-2.59-.945-3.535 0c-.472.471-.732 1.098-.732 1.766s.26 1.297.732 1.77s1.099.732 1.767.732m0-4c.4 0 .777.156 1.061.439a1.485 1.485 0 0 1 .231 1.811l-2.043-2.042c.227-.131.482-.208.751-.208m-1.291.749l2.024 2.024c-.569.315-1.321.261-1.794-.212a1.5 1.5 0 0 1-.439-1.063c0-.269.076-.524.209-.749"})]}),skills=["skill.Newbie","skill.Novice","skill.Average","skill.Professional","skill.God like"],BotComplexity=({mainRunning:t,instance:r})=>{const{t:n}=useTranslation(),[a,o]=reactExports.useState(1);if(reactExports.useEffect(()=>{!r||!t||r.getCVar("yb_difficulty").then(l=>o(Number(l)))},[r,t]),reactExports.useEffect(()=>{!r||!t||r.executeString(`yb_difficulty ${a}`)},[a]),!!t)return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsxs(Stack,{spacing:2,direction:"row",sx:{alignItems:"center",mb:1},children:[jsxRuntimeExports.jsx(BotIcon,{}),jsxRuntimeExports.jsx(Tooltip,{title:n("menu.Bot Skill {{skill}}",{skill:n(skills[a])}),slotProps:{popper:{sx:{[`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:{color:"#000",fontSize:"1em"}}}},children:jsxRuntimeExports.jsx(Slider,{value:a,onChange:(l,c)=>o(c),min:0,max:4,step:1,sx:{minWidth:120}})})]})})},configCfg=`
unbindall
bind TAB "+showscores"
bind ESCAPE "cancelselect"
bind SPACE "+jump"
bind , "buyammo1"
bind . "buyammo2"
bind 0 "slot10"
bind 1 "slot1"
bind 2 "slot2"
bind 3 "slot3"
bind 4 "slot4"
bind 5 "slot5"
bind 6 "slot6"
bind 7 "slot7"
bind 8 "slot8"
bind 9 "slot9"
bind = "yb menu"
bind [ "invprev"
bind ] "invnext"
bind a "+moveleft"
bind b "buy"
bind c "radio3"
bind d "+moveright"
bind e "+use"
bind f "impulse 100"
bind g "drop"
bind h "+commandmenu"
bind k "+voicerecord"
bind m "chooseteam"
bind n "nightvision"
bind o "buyequip"
bind r "+reload"
bind s "+back"
bind t "impulse 201"
bind u "messagemode2"
bind w "+forward"
bind x "radio2"
bind y "messagemode"
bind z "radio1"
bind LEFTARROW "+left"
bind RIGHTARROW "+right"
bind ALT "+strafe"
bind CAPSLOCK "+duck"
bind SHIFT "+speed"
bind F1 "autobuy"
bind F2 "rebuy"
bind F3 "menu_loadgame"
bind F4 "menu_controls"
bind F5 "menu_creategame"
bind F6 "savequick"
bind F7 "loadquick"
bind F8 "stop"
bind F10 "menu_main"
bind F12 "snapshot"
bind DEL "+lookdown"
bind PGDN "+lookup"
bind END "centerview"
bind KP_END "centerview"
bind KP_PGDN "+lookup"
bind KP_DEL "+lookdown"
bind BACK "pause"
bind START "cancelselect"
bind DPAD_DOWN "lastinv"
bind MOUSE1 "+attack"
bind MOUSE2 "+attack2"
bind PAUSE "pause"
bind "-" "toggleconsole"
MP3Volume "1.0"
_ah "0"
_cl_autowepswitch "1"
_extended_menus "1"
_vgui_menus "0"
allow_levelshots "0"
ambient_fade "1000"
ambient_level "0.3"
bottomcolor "0"
brightness "0.0"
buymenu_stayon "0"
checkscoreboard "1"
cl_advertise_engine_in_name "1"
cl_allowdownload "1"
cl_allowupload "1"
cl_backspeed "400"
cl_bmodelinterp "1"
cl_bob "0.01"
cl_charset "utf-8"
cl_clockreset "0.1"
cl_cmdbackup "10"
cl_cmdrate "30"
cl_corpsestay "600"
cl_crosshair_color "50 250 50"
cl_crosshair_size "auto"
cl_crosshair_translucent "1"
cl_dlmax "0"
cl_download_ingame "1"
cl_dynamiccrosshair "1"
cl_envshot_size "256"
cl_fancy_nvg "0"
cl_filterstuffcmd "1"
cl_fixtimerate "7.5"
cl_forwardspeed "400"
cl_gunsmoke "0"
cl_hide_motd "0"
cl_himodels "1"
cl_laddermode "2"
cl_lc "1"
cl_lightstyle_lerping "0"
cl_logocolor "orange"
cl_logoext "bmp"
cl_logofile "lambda"
cl_logomaxdim "96"
cl_lw "1"
cl_min_ct "2"
cl_min_t "1"
cl_minmodels "0"
cl_nopred "0"
cl_nosmooth "0"
cl_quakeguns "0"
cl_radartype "0"
cl_righthand "1"
cl_shadows "1"
cl_showerror "0"
cl_showevents "0"
cl_showfps "0"
cl_showpacketloss "0"
cl_showpos "0"
cl_sidespeed "400"
cl_smoothtime "0.1"
cl_test_bandwidth "1"
cl_ticket_generator "revemu2013"
cl_trace_consistency "0"
cl_trace_events "0"
cl_trace_messages "0"
cl_trace_stufftext "0"
cl_updaterate "20"
cl_upmax "508"
cl_vsmoothing "0.05"
cl_weapon_sparks "1"
cl_weapon_wallpuff "1"
cl_weaponlag "0"
cl_weather "1"
cmd_scripting "1"
con_charset "cp1251"
con_color "240 180 24"
con_fontnum "-1"
con_fontrender "2"
con_fontscale "1.0"
con_fontsize "1"
con_mapfilter "1"
con_notifytime "3"
crosshair "1"
dsp_coeff_table "0"
dsp_off "0"
ex_interp "0.1"
fastsprites "0"
fps_max "72"
fs_mount_addon "0"
fs_mount_hd "0"
fs_mount_l10n "0"
fs_mount_lv "0"
gamma "2.5"
gl_clear "0"
gl_vsync "1"
host_allow_materials "0"
hpk_custom_file "custom.hpk"
hpk_max_size "64"
http_autoremove "1"
http_maxconnections "2"
http_show_headers "0"
http_timeout "45"
http_useragent ""
hud_centerid "0"
hud_color "255 160 0"
hud_colored "0"
hud_deathnotice_time "6"
hud_draw "1"
hud_fastswitch "0"
hud_fontrender "0"
hud_fontscale "1.0"
hud_scale "2"
hud_scale_minimal_width "640"
hud_textmode "0"
hud_utf8 "1"
joy_axis_binding "sfpyrl"
joy_enable "1"
joy_forward "1.0"
joy_forward_deadzone "4096"
joy_forward_key_threshold "24576"
joy_lt_threshold "16384"
joy_pitch "100.0"
joy_pitch_deadzone "4096"
joy_rt_threshold "16384"
joy_side "1.0"
joy_side_deadzone "4096"
joy_side_key_threshold "24576"
joy_yaw "100.0"
joy_yaw_deadzone "4096"
joystick "1"
key_rotate "0"
lastdemo ""
look_filter "0"
lookspring "0"
lookstrafe "0"
m_forward "1"
m_ignore "0"
m_pitch "0.022"
m_rawinput "1"
m_side "0.8"
m_yaw "0.022"
menu_bg_fill "0"
menu_mp_firsttime2 "1"
model ""
mp_decals "300"
name "Player"
net_graph "0"
net_graphheight "64"
net_graphpos "1"
net_graphsolid "1"
net_graphwidth "192"
net_scale "5"
net_speeds "0"
numericalmenu "1"
numericalmenu_clientonly "1"
osk_enable "0"
r_adjust_fov "1"
r_decals "4096"
r_dynamic "1"
r_lighting_modulate "0.6"
r_showtree "0"
r_speeds "0"
r_sprite_lerping "1"
r_sprite_lighting "1"
r_studiocache "1"
rate "25000"
room_hires "2"
room_off "0"
s_combine_sounds "0"
s_lerping "0"
s_samplecount "0"
s_show "0"
s_warn_late_precache "0"
scoreboard_showhealth "1"
scoreboard_showmoney "1"
scr_conspeed "600"
scr_drawversion "1"
sensitivity "3"
sleeptime "1"
snd_mute_losefocus "1"
suitvolume "0.25"
sv_aim "1"
sv_allow_PhysX "1"
sv_allow_autoaim "0"
sv_allow_joystick "1"
sv_allow_mouse "1"
sv_allow_noinputdevices "1"
sv_allow_testpacket "1"
sv_allow_touch "1"
sv_allow_vr "1"
sv_autosave "1"
sv_background_freeze "1"
sv_check_errors "0"
sv_contact ""
sv_enttools_enable "0"
sv_enttools_maxfire "5"
sv_expose_player_list "1"
sv_fullupdate_penalty_time "1"
sv_log_onefile "0"
sv_log_outofband "0"
sv_log_singleplayer "0"
sv_master_response_timeout "4"
sv_maxupdaterate "60.0"
sv_minupdaterate "25.0"
sv_precache_meshes "1"
sv_rollangle "0"
sv_speedhack_kick "10"
sv_userinfo_enable_penalty "1"
sv_userinfo_penalty_attempts "4"
sv_userinfo_penalty_multiplier "2"
sv_userinfo_penalty_time "0.3"
sv_voiceenable "1"
sv_voicequality "3"
teammenu_showscores "0"
topcolor "0"
touch_config_file "touch.cfg"
touch_enable "0"
ui_borderclip "0"
ui_renderworld "0"
ui_show_window_stack "0"
ui_showmodels "0"
vgui_utf8 "0"
vibration_enable "1"
vibration_length "1.0"
viewsize "120"
voice_avggain "0.5"
voice_enable "0"
voice_maxgain "5.0"
voice_modenable "1"
voice_scale "1.0"
voice_transmit_scale "1.0"
volume "0.7"
xhair_additive "0"
xhair_color "0 255 0 255"
xhair_dot "1"
xhair_dynamic_move "1"
xhair_dynamic_scale "0"
xhair_enable "0"
xhair_gap "0"
xhair_gap_useweaponvalue "0"
xhair_pad "0"
xhair_size "4"
xhair_t "0"
xhair_thick "0"`,useConfig=()=>reactExports.useContext(ConfigContext);class CircularBuffer{constructor(r){this.capacity=r,this.arr=new Array(r)}endOffset=0;startOffset=0;arr;needShift=!1;push(r){this.needShift&&this.shift(),this.arr[this.endOffset++]=r,this.endOffset%=this.capacity,this.endOffset===this.startOffset&&(this.needShift=!0)}shift(){if(!this.needShift&&this.startOffset===this.endOffset)return;this.needShift=!1;const r=this.arr[this.startOffset++];return this.startOffset%=this.capacity,r}find(r){for(let n=this.startOffset;n<(this.needShift?this.capacity:0)+this.endOffset;n++){const a=(this.startOffset+n)%this.capacity;if(r(this.arr[a],n))return this.arr[a]}}}const wasm=""+new URL("xash-52jaVkBh.wasm",import.meta.url).href,filesystem_stdio=""+new URL("filesystem_stdio-I8tJ2Sr4.wasm",import.meta.url).href,libref_webgl2=""+new URL("libref_webgl2-D74L1kzX.wasm",import.meta.url).href,client_emscripten_javascript=""+new URL("client_emscripten_wasm32-13y9TjS8.wasm",import.meta.url).href,cs_emscripten_wasm32=""+new URL("cs_emscripten_wasm32-D3pX_bi7.wasm",import.meta.url).href,yapb_emscripten_javascript=""+new URL("yapb_emscripten_wasm32-Grm6pAuJ.wasm",import.meta.url).href;var module={exports:{}},exports=module.exports,Module=(()=>{var _scriptName=globalThis.document?.currentScript?.src;return async function(moduleArg={}){var moduleRtn;(function(){function t(u){u=u.split("-")[0];for(var p=u.split(".").slice(0,3);p.length<3;)p.push("00");return p=p.map((d,m,f)=>d.padStart(2,"0")),p.join("")}var r=u=>[u/1e4|0,(u/100|0)%100,u%100].join("."),n=2147483647,a=typeof process<"u"&&process.versions?.node?t(process.versions.node):n;if(a<n)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");if(a<2147483647)throw new Error(`This emscripten-generated code requires node v${r(2147483647)} (detected v${r(a)})`);var o=typeof navigator<"u"&&navigator.userAgent;if(o){var l=o.includes("Safari/")&&!o.includes("Chrome/")&&o.match(/Version\/(\d+\.?\d*\.?\d*)/)?t(o.match(/Version\/(\d+\.?\d*\.?\d*)/)[1]):n;if(l<15e4)throw new Error(`This emscripten-generated code requires Safari v${r(15e4)} (detected v${l})`);var c=o.match(/Firefox\/(\d+(?:\.\d+)?)/)?parseFloat(o.match(/Firefox\/(\d+(?:\.\d+)?)/)[1]):n;if(c<79)throw new Error(`This emscripten-generated code requires Firefox v79 (detected v${c})`);var _=o.match(/Chrome\/(\d+(?:\.\d+)?)/)?parseFloat(o.match(/Chrome\/(\d+(?:\.\d+)?)/)[1]):n;if(_<85)throw new Error(`This emscripten-generated code requires Chrome v85 (detected v${_})`)}})();var Module=moduleArg,ENVIRONMENT_IS_WEB=!!globalThis.window,ENVIRONMENT_IS_WORKER=!!globalThis.WorkerGlobalScope,ENVIRONMENT_IS_NODE=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer",ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER,arguments_=[],thisProgram="./this.program",quit_=(t,r)=>{throw r},scriptDirectory="";function locateFile(t){return Module.locateFile?Module.locateFile(t,scriptDirectory):scriptDirectory+t}var readAsync,readBinary;if(!ENVIRONMENT_IS_SHELL)if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){try{scriptDirectory=new URL(".",_scriptName).href}catch{}if(!(globalThis.window||globalThis.WorkerGlobalScope))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");readAsync=async t=>{assert(!isFileURI(t),"readAsync does not work with file:// URLs");var r=await fetch(t,{credentials:"same-origin"});if(r.ok)return r.arrayBuffer();throw new Error(r.status+" : "+r.url)}}else throw new Error("environment detection error");var out=console.log.bind(console),err=console.error.bind(console);assert(!ENVIRONMENT_IS_WORKER,"worker environment detected but not enabled at build time.  Add `worker` to `-sENVIRONMENT` to enable."),assert(!ENVIRONMENT_IS_NODE,"node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable."),assert(!ENVIRONMENT_IS_SHELL,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var dynamicLibraries=[],wasmBinary;globalThis.WebAssembly||err("no native wasm support detected");var ABORT=!1,EXITSTATUS;function assert(t,r){t||abort("Assertion failed"+(r?": "+r:""))}var isFileURI=t=>t.startsWith("file://");function writeStackCookie(){var t=_emscripten_stack_get_end();assert((t&3)==0),t==0&&(t+=4),HEAPU32[t>>2]=34821223,HEAPU32[t+4>>2]=2310721022,HEAPU32[0]=1668509029}function checkStackCookie(){if(!ABORT){var t=_emscripten_stack_get_end();t==0&&(t+=4);var r=HEAPU32[t>>2],n=HEAPU32[t+4>>2];(r!=34821223||n!=2310721022)&&abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(t)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(n)} ${ptrToString(r)}`),HEAPU32[0]!=1668509029&&abort("Runtime error: The application has corrupted its heap memory area (address zero)!")}}function dbg(...t){console.warn(...t)}(()=>{var t=new Int16Array(1),r=new Int8Array(t.buffer);t[0]=25459,(r[0]!==115||r[1]!==99)&&abort("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)")})();function consumedModuleProp(t){Object.getOwnPropertyDescriptor(Module,t)||Object.defineProperty(Module,t,{configurable:!0,set(){abort(`Attempt to set \`Module.${t}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function makeInvalidEarlyAccess(t){return()=>assert(!1,`call to '${t}' via reference taken before Wasm module initialization`)}function ignoredModuleProp(t){Object.getOwnPropertyDescriptor(Module,t)&&abort(`\`Module.${t}\` was supplied but \`${t}\` not included in INCOMING_MODULE_JS_API`)}function isExportedByForceFilesystem(t){return t==="FS_createPath"||t==="FS_createDataFile"||t==="FS_createPreloadedFile"||t==="FS_preloadFile"||t==="FS_unlink"||t==="addRunDependency"||t==="FS_createLazyFile"||t==="FS_createDevice"||t==="removeRunDependency"}function unexportedRuntimeSymbol(t){Object.getOwnPropertyDescriptor(Module,t)||Object.defineProperty(Module,t,{configurable:!0,get(){var r=`'${t}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;isExportedByForceFilesystem(t)&&(r+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),abort(r)}})}var readyPromiseResolve,readyPromiseReject,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64,HEAP64,runtimeInitialized=!1;function updateMemoryViews(){var t=wasmMemory.buffer;HEAP8=new Int8Array(t),HEAP16=new Int16Array(t),Module.HEAPU8=HEAPU8=new Uint8Array(t),HEAPU16=new Uint16Array(t),Module.HEAP32=HEAP32=new Int32Array(t),Module.HEAPU32=HEAPU32=new Uint32Array(t),HEAPF32=new Float32Array(t),HEAPF64=new Float64Array(t),HEAP64=new BigInt64Array(t),new BigUint64Array(t)}assert(globalThis.Int32Array&&globalThis.Float64Array&&Int32Array.prototype.subarray&&Int32Array.prototype.set,"JS engine does not provide full typed array support");var __RELOC_FUNCS__=[];function preRun(){if(Module.preRun)for(typeof Module.preRun=="function"&&(Module.preRun=[Module.preRun]);Module.preRun.length;)addOnPreRun(Module.preRun.shift());consumedModuleProp("preRun"),callRuntimeCallbacks(onPreRuns)}function initRuntime(){assert(!runtimeInitialized),runtimeInitialized=!0,checkStackCookie(),callRuntimeCallbacks(__RELOC_FUNCS__),callRuntimeCallbacks(onInits),!Module.noFSInit&&!FS.initialized&&FS.init(),SOCKFS.root=FS.mount(SOCKFS,{},null),PIPEFS.root=FS.mount(PIPEFS,{},null),wasmExports.__wasm_call_ctors(),callRuntimeCallbacks(onPostCtors),FS.ignorePermissions=!1}function preMain(){checkStackCookie(),callRuntimeCallbacks(onMains)}function postRun(){if(checkStackCookie(),Module.postRun)for(typeof Module.postRun=="function"&&(Module.postRun=[Module.postRun]);Module.postRun.length;)addOnPostRun(Module.postRun.shift());consumedModuleProp("postRun"),callRuntimeCallbacks(onPostRuns)}function abort(t){Module.onAbort?.(t),t="Aborted("+t+")",err(t),ABORT=!0;var r=new WebAssembly.RuntimeError(t);throw readyPromiseReject?.(r),r}function createExportWrapper(t,r){return(...n)=>{assert(runtimeInitialized,`native function \`${t}\` called before runtime initialization`);var a=wasmExports[t];return assert(a,`exported native function \`${t}\` not found`),assert(n.length<=r,`native function \`${t}\` called with ${n.length} args but expects ${r}`),a(...n)}}var wasmBinaryFile;function findWasmBinary(){return locateFile("xash.wasm")}function getBinarySync(t){if(t==wasmBinaryFile&&wasmBinary)return new Uint8Array(wasmBinary);throw"both async and sync fetching of the wasm failed"}async function getWasmBinary(t){if(!wasmBinary)try{var r=await readAsync(t);return new Uint8Array(r)}catch{}return getBinarySync(t)}async function instantiateArrayBuffer(t,r){try{var n=await getWasmBinary(t),a=await WebAssembly.instantiate(n,r);return a}catch(o){err(`failed to asynchronously prepare wasm: ${o}`),isFileURI(t)&&err(`warning: Loading from a file URI (${t}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),abort(o)}}async function instantiateAsync(t,r,n){if(!t)try{var a=fetch(r,{credentials:"same-origin"}),o=await WebAssembly.instantiateStreaming(a,n);return o}catch(l){err(`wasm streaming compile failed: ${l}`),err("falling back to ArrayBuffer instantiation")}return instantiateArrayBuffer(r,n)}function getWasmImports(){var t=new Proxy(new Set(["__start___llvm_prf_data","__stop___llvm_prf_data","__start___llvm_prf_names","__stop___llvm_prf_names","__start___llvm_prf_vns","__stop___llvm_prf_vns","__start___llvm_prf_vtab","__stop___llvm_prf_vtab","__start___llvm_prf_cnts","__stop___llvm_prf_cnts","__start___llvm_prf_bits","__stop___llvm_prf_bits","__start___llvm_prf_vnds","__stop___llvm_prf_vnds"]),GOTHandler),r={env:wasmImports,wasi_snapshot_preview1:wasmImports,"GOT.mem":t,"GOT.func":t};return r}async function createWasm(){function t(c,_){wasmExports=c.exports;var u=wasmExports;mergeLibSymbols(wasmExports);var p=getDylinkMetadata(_);return p.neededDynlibs&&(dynamicLibraries=p.neededDynlibs.concat(dynamicLibraries)),assignWasmExports(wasmExports),updateGOT(u),LDSO.init(),loadDylibs(),updateMemoryViews(),wasmExports}var r=Module;function n(c){return assert(Module===r,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),r=null,t(c.instance,c.module)}var a=getWasmImports();if(Module.instantiateWasm)return new Promise((c,_)=>{try{Module.instantiateWasm(a,(u,p)=>{c(t(u,p))})}catch(u){err(`Module.instantiateWasm callback failed with error: ${u}`),_(u)}});wasmBinaryFile??=findWasmBinary();var o=await instantiateAsync(wasmBinary,wasmBinaryFile,a),l=n(o);return l}class ExitStatus{name="ExitStatus";constructor(r){this.message=`Program terminated with exit(${r})`,this.status=r}}var GOT={},GOTHandler={get(t,r){var n=GOT[r];return n||(n=GOT[r]=new WebAssembly.Global({value:"i32",mutable:!0},-1)),t.has(r)||(n.required=!0),n}},callRuntimeCallbacks=t=>{for(;t.length>0;)t.shift()(Module)},onPostRuns=[],addOnPostRun=t=>onPostRuns.push(t),onPreRuns=[],addOnPreRun=t=>onPreRuns.push(t),UTF8Decoder=globalThis.TextDecoder&&new TextDecoder,findStringEnd=(t,r,n,a)=>{for(var o=r+n;t[r]&&!(r>=o);)++r;return r},warnOnce=t=>{warnOnce.shown||={},warnOnce.shown[t]||(warnOnce.shown[t]=1,err(t))},UTF8ArrayToString=(t,r=0,n,a)=>{var o=findStringEnd(t,r,n);if(o-r>16&&t.buffer&&UTF8Decoder)return UTF8Decoder.decode(t.subarray(r,o));for(var l="";r<o;){var c=t[r++];if(!(c&128)){l+=String.fromCharCode(c);continue}var _=t[r++]&63;if((c&224)==192){l+=String.fromCharCode((c&31)<<6|_);continue}var u=t[r++]&63;if((c&240)==224?c=(c&15)<<12|_<<6|u:((c&248)!=240&&warnOnce("Invalid UTF-8 leading byte "+ptrToString(c)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),c=(c&7)<<18|_<<12|u<<6|t[r++]&63),c<65536)l+=String.fromCharCode(c);else{var p=c-65536;l+=String.fromCharCode(55296|p>>10,56320|p&1023)}}return l},getDylinkMetadata=t=>{var r=0,n=0;function a(){return t[r++]}function o(){for(var I=0,F=1;;){var H=t[r++];if(I+=(H&127)*F,F*=128,!(H&128))break}return I}function l(){var I=o();return r+=I,UTF8ArrayToString(t,r-I,I)}function c(){for(var I=o(),F=[];I--;)F.push(l());return F}function _(I,F){if(I)throw new Error(F)}if(t instanceof WebAssembly.Module){var u=WebAssembly.Module.customSections(t,"dylink.0");_(u.length===0,"need dylink section"),t=new Uint8Array(u[0]),n=t.length}else{var p=new Uint32Array(new Uint8Array(t.subarray(0,24)).buffer),d=p[0]==1836278016;_(!d,"need to see wasm magic number"),_(t[8]!==0,"need the dylink section to be first"),r=9;var m=o();n=r+m;var f=l();_(f!=="dylink.0")}for(var g={neededDynlibs:[],tlsExports:new Set,weakImports:new Set,runtimePaths:[]},E=1,x=2,v=3,h=4,b=5,S=256,y=3,T=1;r<n;){var A=a(),w=o();if(A===E)g.memorySize=o(),g.memoryAlign=o(),g.tableSize=o(),g.tableAlign=o();else if(A===x)g.neededDynlibs=c();else if(A===v)for(var C=o();C--;){var L=l(),k=o();k&S&&g.tlsExports.add(L)}else if(A===h)for(var C=o();C--;){l();var L=l(),k=o();(k&y)==T&&g.weakImports.add(L)}else A===b?g.runtimePaths=c():(err("unknown dylink.0 subsection:",A),r+=w)}var P=Math.pow(2,g.tableAlign);return assert(P===1,`invalid tableAlign ${P}`),assert(r==n),g},newDSO=(t,r,n)=>{var a={refcount:1/0,name:t,exports:n,global:!0};return LDSO.loadedLibsByName[t]=a,r!=null&&(LDSO.loadedLibsByHandle[r]=a),a},LDSO={loadedLibsByName:{},loadedLibsByHandle:{},init(){assert(wasmImports),newDSO("__main__",0,wasmImports)}},alignMemory=(t,r)=>(assert(r,"alignment argument is required"),Math.ceil(t/r)*r),getMemory=t=>{if(runtimeInitialized)return _calloc(t,1);var r=___heap_base,n=r+alignMemory(t,16);assert(n<=HEAP8.length,"failure to getMemory - memory growth etc. is not supported there, call malloc/sbrk directly or increase INITIAL_MEMORY"),___heap_base=n;var a=_emscripten_get_sbrk_ptr();return HEAPU32[a>>2]=n,r},isInternalSym=t=>["memory","__memory_base","__table_base","__stack_pointer","__indirect_function_table","__cpp_exception","__c_longjmp","__wasm_apply_data_relocs","__dso_handle","__tls_size","__tls_align","__set_stack_limits","_emscripten_tls_init","__wasm_init_tls","__wasm_call_ctors","__start_em_asm","__stop_em_asm","__start_em_js","__stop_em_js"].includes(t)||t.startsWith("__em_js__"),wasmTableMirror=[],getWasmTableEntry=t=>{var r=wasmTableMirror[t];return r||(wasmTableMirror[t]=r=wasmTable.get(t)),assert(wasmTable.get(t)==r,"JavaScript-side Wasm function table mirror is out of date!"),r},updateTableMap=(t,r)=>{if(functionsInTableMap)for(var n=t;n<t+r;n++){var a=getWasmTableEntry(n);a&&functionsInTableMap.set(a,n)}},functionsInTableMap,getFunctionAddress=t=>(functionsInTableMap||(functionsInTableMap=new WeakMap,updateTableMap(0,wasmTable.length)),functionsInTableMap.get(t)||0),freeTableIndexes=[],getEmptyTableSlot=()=>{if(freeTableIndexes.length)return freeTableIndexes.pop();try{return wasmTable.grow(1)}catch(t){if(!(t instanceof RangeError))throw t;abort("Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.")}},setWasmTableEntry=(t,r)=>{wasmTable.set(t,r),wasmTableMirror[t]=wasmTable.get(t)},uleb128EncodeWithLen=t=>{const r=t.length;return assert(r<16384),[r%128|128,r>>7,...t]},wasmTypeCodes={i:127,p:127,j:126,f:125,d:124,e:111},generateTypePack=t=>uleb128EncodeWithLen(Array.from(t,r=>{var n=wasmTypeCodes[r];return assert(n,`invalid signature char: ${r}`),n})),convertJsFunctionToWasm=(t,r)=>{var n=Uint8Array.of(0,97,115,109,1,0,0,0,1,...uleb128EncodeWithLen([1,96,...generateTypePack(r.slice(1)),...generateTypePack(r[0]==="v"?"":r[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),a=new WebAssembly.Module(n),o=new WebAssembly.Instance(a,{e:{f:t}}),l=o.exports.f;return l},addFunction=(t,r)=>{assert(typeof t<"u");var n=getFunctionAddress(t);if(n)return n;var a=getEmptyTableSlot();try{setWasmTableEntry(a,t)}catch(l){if(!(l instanceof TypeError))throw l;assert(typeof r<"u","Missing signature argument to addFunction: "+t);var o=convertJsFunctionToWasm(t,r);setWasmTableEntry(a,o)}return functionsInTableMap.set(t,a),a},updateGOT=(t,r)=>{for(var n in t)if(!isInternalSym(n)){var a=t[n],o=GOT[n]&&GOT[n].value!=-1;if(!o){var l;if(typeof a=="function")l=addFunction(a);else if(typeof a.value=="number")l=a;else continue;GOT[n]??=new WebAssembly.Global({value:"i32",mutable:!0}),GOT[n].value=l}}},isImmutableGlobal=t=>{if(t instanceof WebAssembly.Global)try{t.value=t.value}catch{return!0}return!1},relocateExports=(t,r=0)=>{function n(l,c){return isImmutableGlobal(c)?new WebAssembly.Global({value:"i32"},c.value+r):c}var a={};for(var o in t)a[o]=n(o,t[o]);return a},isSymbolDefined=t=>{var r=wasmImports[t];return!(!r||r.stub)},createNamedFunction=(t,r)=>Object.defineProperty(r,"name",{value:t}),dynCall=(t,r,n=[],a=!1)=>{assert(r,"null function pointer in dynCall"),assert(!a,"async dynCall is not supported in this mode"),assert(getWasmTableEntry(r),`missing table entry in dynCall: ${r}`);var o=getWasmTableEntry(r),l=o(...n);function c(_){return _}return l},stackSave=()=>_emscripten_stack_get_current(),stackRestore=t=>__emscripten_stack_restore(t),createInvokeFunction=t=>(r,...n)=>{var a=stackSave();try{return dynCall(t,r,n)}catch(o){if(stackRestore(a),o!==o+0)throw o;if(_setThrew(1,0),t[0]=="j")return 0n}},resolveGlobalSymbol=(t,r=!1)=>{var n;return isSymbolDefined(t)?n=wasmImports[t]:t.startsWith("invoke_")&&(n=wasmImports[t]=createNamedFunction(t,createInvokeFunction(t.split("_")[1]))),{sym:n,name:t}},onPostCtors=[],addOnPostCtor=t=>onPostCtors.push(t),UTF8ToString=(t,r,n)=>(assert(typeof t=="number",`UTF8ToString expects a number (got ${typeof t})`),t?UTF8ArrayToString(HEAPU8,t,r):""),loadWebAssemblyModule=(binary,flags,libName,localScope,handle)=>{var metadata=getDylinkMetadata(binary);function loadModule(){var originalTable=wasmTable,memAlign=Math.pow(2,metadata.memoryAlign),memoryBase=metadata.memorySize?alignMemory(getMemory(metadata.memorySize+memAlign),memAlign):0,tableBase=metadata.tableSize?wasmTable.length:0;handle&&(HEAP8[handle+8]=1,HEAPU32[handle+12>>2]=memoryBase,HEAP32[handle+16>>2]=metadata.memorySize,HEAPU32[handle+20>>2]=tableBase,HEAP32[handle+24>>2]=metadata.tableSize),metadata.tableSize&&(assert(wasmTable.length==tableBase,`unexpected table size while loading ${libName}: ${wasmTable.length}`),wasmTable.grow(metadata.tableSize));var moduleExports;function resolveSymbol(t){var r=resolveGlobalSymbol(t).sym;return!r&&localScope&&(r=localScope[t]),r||(r=moduleExports[t]),assert(r,`undefined symbol '${t}'. perhaps a side module was not linked in? if this global was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment`),r}var proxyHandler={get(t,r){switch(r){case"__memory_base":return memoryBase;case"__table_base":return tableBase}if(r in wasmImports&&!wasmImports[r].stub){var n=wasmImports[r];return n}if(!(r in t)){var a;t[r]=(...o)=>(a||=resolveSymbol(r),a(...o))}return t[r]}},proxy=new Proxy({},proxyHandler),GOTProxy=new Proxy(metadata.weakImports,GOTHandler),info={"GOT.mem":GOTProxy,"GOT.func":GOTProxy,env:proxy,wasi_snapshot_preview1:proxy};function postInstantiation(module,instance){assert(wasmTable===originalTable),updateTableMap(tableBase,metadata.tableSize),moduleExports=relocateExports(instance.exports,memoryBase),updateGOT(moduleExports),flags.allowUndefined||reportUndefinedSymbols();function addEmAsm(addr,body){for(var args=[],arity=0;;arity++){var argName="$"+arity;if(!body.includes(argName))break;args.push(argName)}args=args.join(",");var func=`(${args}) => { ${body} };`;ASM_CONSTS[start]=eval(func)}if("__start_em_asm"in moduleExports)for(var start=moduleExports.__start_em_asm.value,stop=moduleExports.__stop_em_asm.value;start<stop;){var jsString=UTF8ToString(start);addEmAsm(start,jsString),start=HEAPU8.indexOf(0,start)+1}function addEmJs(name,cSig,body){var jsArgs=[];if(cSig=cSig.slice(1,-1),cSig!="void"){cSig=cSig.split(",");for(var arg of cSig){var jsArg=arg.split(" ").pop();jsArgs.push(jsArg.replaceAll("*",""))}}var func=`(${jsArgs}) => ${body};`;moduleExports[name]=eval(func)}for(var name in moduleExports)if(name.startsWith("__em_js__")){var start=moduleExports[name].value,jsString=UTF8ToString(start),[sig,body]=jsString.split("<::>");addEmJs(name.replace("__em_js__",""),sig,body),delete moduleExports[name]}var applyRelocs=moduleExports.__wasm_apply_data_relocs;applyRelocs&&(runtimeInitialized?applyRelocs():__RELOC_FUNCS__.push(applyRelocs));var init=moduleExports.__wasm_call_ctors;return init&&(runtimeInitialized?init():addOnPostCtor(init)),moduleExports}if(flags.loadAsync)return(async()=>{var t;return binary instanceof WebAssembly.Module?t=new WebAssembly.Instance(binary,info):{module:binary,instance:t}=await WebAssembly.instantiate(binary,info),postInstantiation(binary,t)})();var module=binary instanceof WebAssembly.Module?binary:new WebAssembly.Module(binary),instance=new WebAssembly.Instance(module,info);return postInstantiation(module,instance)}if(flags={...flags,rpath:{parentLibPath:libName,paths:metadata.runtimePaths}},flags.loadAsync)return metadata.neededDynlibs.reduce((t,r)=>t.then(()=>(r=findLibraryFS(r,flags.rpath)??r,loadDynamicLibrary(r,flags,localScope))),Promise.resolve()).then(loadModule);for(var needed of metadata.neededDynlibs)needed=findLibraryFS(needed,flags.rpath)??needed,loadDynamicLibrary(needed,flags,localScope);return loadModule()},mergeLibSymbols=(t,r)=>{for(var[n,a]of Object.entries(t)){const o=c=>{isSymbolDefined(c)||(wasmImports[c]=a)};o(n);const l="__main_argc_argv";n=="main"&&o(l),n==l&&o("main")}},asyncLoad=async t=>{var r=await readAsync(t);return assert(r,`Loading data file "${t}" failed (no arrayBuffer).`),new Uint8Array(r)},preloadPlugins=[],registerWasmPlugin=()=>{var t={promiseChainEnd:Promise.resolve(),canHandle:r=>!Module.noWasmDecoding&&r.endsWith(".so"),handle:async(r,n)=>t.promiseChainEnd=t.promiseChainEnd.then(async()=>{try{var a=await loadWebAssemblyModule(r,{loadAsync:!0,nodelete:!0},n,{})}catch(o){throw new Error(`failed to instantiate wasm: ${n}: ${o}`)}return preloadedWasm[n]=a,r})};preloadPlugins.push(t)},preloadedWasm={},PATH={isAbs:t=>t.charAt(0)==="/",splitPath:t=>{var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return r.exec(t).slice(1)},normalizeArray:(t,r)=>{for(var n=0,a=t.length-1;a>=0;a--){var o=t[a];o==="."?t.splice(a,1):o===".."?(t.splice(a,1),n++):n&&(t.splice(a,1),n--)}if(r)for(;n;n--)t.unshift("..");return t},normalize:t=>{var r=PATH.isAbs(t),n=t.slice(-1)==="/";return t=PATH.normalizeArray(t.split("/").filter(a=>!!a),!r).join("/"),!t&&!r&&(t="."),t&&n&&(t+="/"),(r?"/":"")+t},dirname:t=>{var r=PATH.splitPath(t),n=r[0],a=r[1];return!n&&!a?".":(a&&(a=a.slice(0,-1)),n+a)},basename:t=>t&&t.match(/([^\/]+|\/)\/*$/)[1],join:(...t)=>PATH.normalize(t.join("/")),join2:(t,r)=>PATH.normalize(t+"/"+r)},replaceORIGIN=(t,r)=>{if(r.startsWith("$ORIGIN")){var n=PATH.dirname(t);return r.replace("$ORIGIN",n)}return r},withStackSave=t=>{var r=stackSave(),n=t();return stackRestore(r),n},stackAlloc=t=>__emscripten_stack_alloc(t),lengthBytesUTF8=t=>{for(var r=0,n=0;n<t.length;++n){var a=t.charCodeAt(n);a<=127?r++:a<=2047?r+=2:a>=55296&&a<=57343?(r+=4,++n):r+=3}return r},stringToUTF8Array=(t,r,n,a)=>{if(assert(typeof t=="string",`stringToUTF8Array expects a string (got ${typeof t})`),!(a>0))return 0;for(var o=n,l=n+a-1,c=0;c<t.length;++c){var _=t.codePointAt(c);if(_<=127){if(n>=l)break;r[n++]=_}else if(_<=2047){if(n+1>=l)break;r[n++]=192|_>>6,r[n++]=128|_&63}else if(_<=65535){if(n+2>=l)break;r[n++]=224|_>>12,r[n++]=128|_>>6&63,r[n++]=128|_&63}else{if(n+3>=l)break;_>1114111&&warnOnce("Invalid Unicode code point "+ptrToString(_)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),r[n++]=240|_>>18,r[n++]=128|_>>12&63,r[n++]=128|_>>6&63,r[n++]=128|_&63,c++}}return r[n]=0,n-o},stringToUTF8=(t,r,n)=>(assert(typeof n=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),stringToUTF8Array(t,HEAPU8,r,n)),stringToUTF8OnStack=t=>{var r=lengthBytesUTF8(t)+1,n=stackAlloc(r);return stringToUTF8(t,n,r),n},initRandomFill=()=>t=>crypto.getRandomValues(t),randomFill=t=>{(randomFill=initRandomFill())(t)},PATH_FS={resolve:(...t)=>{for(var r="",n=!1,a=t.length-1;a>=-1&&!n;a--){var o=a>=0?t[a]:FS.cwd();if(typeof o!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!o)return"";r=o+"/"+r,n=PATH.isAbs(o)}return r=PATH.normalizeArray(r.split("/").filter(l=>!!l),!n).join("/"),(n?"/":"")+r||"."},relative:(t,r)=>{t=PATH_FS.resolve(t).slice(1),r=PATH_FS.resolve(r).slice(1);function n(p){for(var d=0;d<p.length&&p[d]==="";d++);for(var m=p.length-1;m>=0&&p[m]==="";m--);return d>m?[]:p.slice(d,m-d+1)}for(var a=n(t.split("/")),o=n(r.split("/")),l=Math.min(a.length,o.length),c=l,_=0;_<l;_++)if(a[_]!==o[_]){c=_;break}for(var u=[],_=c;_<a.length;_++)u.push("..");return u=u.concat(o.slice(c)),u.join("/")}},FS_stdin_getChar_buffer=[],intArrayFromString=(t,r,n)=>{var a=n>0?n:lengthBytesUTF8(t)+1,o=new Array(a),l=stringToUTF8Array(t,o,0,o.length);return r&&(o.length=l),o},FS_stdin_getChar=()=>{if(!FS_stdin_getChar_buffer.length){var t=null;if(globalThis.window?.prompt&&(t=window.prompt("Input: "),t!==null&&(t+=`
`)),!t)return null;FS_stdin_getChar_buffer=intArrayFromString(t,!0)}return FS_stdin_getChar_buffer.shift()},TTY={ttys:[],init(){},shutdown(){},register(t,r){TTY.ttys[t]={input:[],output:[],ops:r},FS.registerDevice(t,TTY.stream_ops)},stream_ops:{open(t){var r=TTY.ttys[t.node.rdev];if(!r)throw new FS.ErrnoError(43);t.tty=r,t.seekable=!1},close(t){t.tty.ops.fsync(t.tty)},fsync(t){t.tty.ops.fsync(t.tty)},read(t,r,n,a,o){if(!t.tty||!t.tty.ops.get_char)throw new FS.ErrnoError(60);for(var l=0,c=0;c<a;c++){var _;try{_=t.tty.ops.get_char(t.tty)}catch{throw new FS.ErrnoError(29)}if(_===void 0&&l===0)throw new FS.ErrnoError(6);if(_==null)break;l++,r[n+c]=_}return l&&(t.node.atime=Date.now()),l},write(t,r,n,a,o){if(!t.tty||!t.tty.ops.put_char)throw new FS.ErrnoError(60);try{for(var l=0;l<a;l++)t.tty.ops.put_char(t.tty,r[n+l])}catch{throw new FS.ErrnoError(29)}return a&&(t.node.mtime=t.node.ctime=Date.now()),l}},default_tty_ops:{get_char(t){return FS_stdin_getChar()},put_char(t,r){r===null||r===10?(out(UTF8ArrayToString(t.output)),t.output=[]):r!=0&&t.output.push(r)},fsync(t){t.output?.length>0&&(out(UTF8ArrayToString(t.output)),t.output=[])},ioctl_tcgets(t){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(t,r,n){return 0},ioctl_tiocgwinsz(t){return[24,80]}},default_tty1_ops:{put_char(t,r){r===null||r===10?(err(UTF8ArrayToString(t.output)),t.output=[]):r!=0&&t.output.push(r)},fsync(t){t.output?.length>0&&(err(UTF8ArrayToString(t.output)),t.output=[])}}},zeroMemory=(t,r)=>HEAPU8.fill(0,t,t+r),mmapAlloc=t=>{t=alignMemory(t,65536);var r=_emscripten_builtin_memalign(65536,t);return r&&zeroMemory(r,t),r},MEMFS={ops_table:null,mount(t){return MEMFS.createNode(null,"/",16895,0)},createNode(t,r,n,a){if(FS.isBlkdev(n)||FS.isFIFO(n))throw new FS.ErrnoError(63);MEMFS.ops_table||={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}};var o=FS.createNode(t,r,n,a);return FS.isDir(o.mode)?(o.node_ops=MEMFS.ops_table.dir.node,o.stream_ops=MEMFS.ops_table.dir.stream,o.contents={}):FS.isFile(o.mode)?(o.node_ops=MEMFS.ops_table.file.node,o.stream_ops=MEMFS.ops_table.file.stream,o.usedBytes=0,o.contents=null):FS.isLink(o.mode)?(o.node_ops=MEMFS.ops_table.link.node,o.stream_ops=MEMFS.ops_table.link.stream):FS.isChrdev(o.mode)&&(o.node_ops=MEMFS.ops_table.chrdev.node,o.stream_ops=MEMFS.ops_table.chrdev.stream),o.atime=o.mtime=o.ctime=Date.now(),t&&(t.contents[r]=o,t.atime=t.mtime=t.ctime=o.atime),o},getFileDataAsTypedArray(t){return t.contents?t.contents.subarray?t.contents.subarray(0,t.usedBytes):new Uint8Array(t.contents):new Uint8Array(0)},expandFileStorage(t,r){var n=t.contents?t.contents.length:0;if(!(n>=r)){var a=1024*1024;r=Math.max(r,n*(n<a?2:1.125)>>>0),n!=0&&(r=Math.max(r,256));var o=t.contents;t.contents=new Uint8Array(r),t.usedBytes>0&&t.contents.set(o.subarray(0,t.usedBytes),0)}},resizeFileStorage(t,r){if(t.usedBytes!=r)if(r==0)t.contents=null,t.usedBytes=0;else{var n=t.contents;t.contents=new Uint8Array(r),n&&t.contents.set(n.subarray(0,Math.min(r,t.usedBytes))),t.usedBytes=r}},node_ops:{getattr(t){var r={};return r.dev=FS.isChrdev(t.mode)?t.id:1,r.ino=t.id,r.mode=t.mode,r.nlink=1,r.uid=0,r.gid=0,r.rdev=t.rdev,FS.isDir(t.mode)?r.size=4096:FS.isFile(t.mode)?r.size=t.usedBytes:FS.isLink(t.mode)?r.size=t.link.length:r.size=0,r.atime=new Date(t.atime),r.mtime=new Date(t.mtime),r.ctime=new Date(t.ctime),r.blksize=4096,r.blocks=Math.ceil(r.size/r.blksize),r},setattr(t,r){for(const n of["mode","atime","mtime","ctime"])r[n]!=null&&(t[n]=r[n]);r.size!==void 0&&MEMFS.resizeFileStorage(t,r.size)},lookup(t,r){throw new FS.ErrnoError(44)},mknod(t,r,n,a){return MEMFS.createNode(t,r,n,a)},rename(t,r,n){var a;try{a=FS.lookupNode(r,n)}catch{}if(a){if(FS.isDir(t.mode))for(var o in a.contents)throw new FS.ErrnoError(55);FS.hashRemoveNode(a)}delete t.parent.contents[t.name],r.contents[n]=t,t.name=n,r.ctime=r.mtime=t.parent.ctime=t.parent.mtime=Date.now()},unlink(t,r){delete t.contents[r],t.ctime=t.mtime=Date.now()},rmdir(t,r){var n=FS.lookupNode(t,r);for(var a in n.contents)throw new FS.ErrnoError(55);delete t.contents[r],t.ctime=t.mtime=Date.now()},readdir(t){return[".","..",...Object.keys(t.contents)]},symlink(t,r,n){var a=MEMFS.createNode(t,r,41471,0);return a.link=n,a},readlink(t){if(!FS.isLink(t.mode))throw new FS.ErrnoError(28);return t.link}},stream_ops:{read(t,r,n,a,o){var l=t.node.contents;if(o>=t.node.usedBytes)return 0;var c=Math.min(t.node.usedBytes-o,a);if(assert(c>=0),c>8&&l.subarray)r.set(l.subarray(o,o+c),n);else for(var _=0;_<c;_++)r[n+_]=l[o+_];return c},write(t,r,n,a,o,l){if(assert(!(r instanceof ArrayBuffer)),r.buffer===HEAP8.buffer&&(l=!1),!a)return 0;var c=t.node;if(c.mtime=c.ctime=Date.now(),r.subarray&&(!c.contents||c.contents.subarray)){if(l)return assert(o===0,"canOwn must imply no weird position inside the file"),c.contents=r.subarray(n,n+a),c.usedBytes=a,a;if(c.usedBytes===0&&o===0)return c.contents=r.slice(n,n+a),c.usedBytes=a,a;if(o+a<=c.usedBytes)return c.contents.set(r.subarray(n,n+a),o),a}if(MEMFS.expandFileStorage(c,o+a),c.contents.subarray&&r.subarray)c.contents.set(r.subarray(n,n+a),o);else for(var _=0;_<a;_++)c.contents[o+_]=r[n+_];return c.usedBytes=Math.max(c.usedBytes,o+a),a},llseek(t,r,n){var a=r;if(n===1?a+=t.position:n===2&&FS.isFile(t.node.mode)&&(a+=t.node.usedBytes),a<0)throw new FS.ErrnoError(28);return a},mmap(t,r,n,a,o){if(!FS.isFile(t.node.mode))throw new FS.ErrnoError(43);var l,c,_=t.node.contents;if(!(o&2)&&_&&_.buffer===HEAP8.buffer)c=!1,l=_.byteOffset;else{if(c=!0,l=mmapAlloc(r),!l)throw new FS.ErrnoError(48);_&&((n>0||n+r<_.length)&&(_.subarray?_=_.subarray(n,n+r):_=Array.prototype.slice.call(_,n,n+r)),HEAP8.set(_,l))}return{ptr:l,allocated:c}},msync(t,r,n,a,o){return MEMFS.stream_ops.write(t,r,0,a,n,!1),0}}},FS_modeStringToFlags=t=>{var r={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},n=r[t];if(typeof n>"u")throw new Error(`Unknown file open mode: ${t}`);return n},FS_getMode=(t,r)=>{var n=0;return t&&(n|=365),r&&(n|=146),n},IDBFS={dbs:{},indexedDB:()=>(assert(typeof indexedDB<"u","IDBFS used, but indexedDB not supported"),indexedDB),DB_VERSION:21,DB_STORE_NAME:"FILE_DATA",queuePersist:t=>{function r(){t.idbPersistState==="again"?n():t.idbPersistState=0}function n(){t.idbPersistState="idb",IDBFS.syncfs(t,!1,r)}t.idbPersistState?t.idbPersistState==="idb"&&(t.idbPersistState="again"):t.idbPersistState=setTimeout(n,0)},mount:t=>{var r=MEMFS.mount(t);if(t?.opts?.autoPersist){t.idbPersistState=0;var n=r.node_ops;r.node_ops={...r.node_ops},r.node_ops.mknod=(a,o,l,c)=>{var _=n.mknod(a,o,l,c);return _.node_ops=r.node_ops,_.idbfs_mount=r.mount,_.memfs_stream_ops=_.stream_ops,_.stream_ops={..._.stream_ops},_.stream_ops.write=(u,p,d,m,f,g)=>(u.node.isModified=!0,_.memfs_stream_ops.write(u,p,d,m,f,g)),_.stream_ops.close=u=>{var p=u.node;if(p.isModified&&(IDBFS.queuePersist(p.idbfs_mount),p.isModified=!1),p.memfs_stream_ops.close)return p.memfs_stream_ops.close(u)},IDBFS.queuePersist(r.mount),_},r.node_ops.rmdir=(...a)=>(IDBFS.queuePersist(r.mount),n.rmdir(...a)),r.node_ops.symlink=(...a)=>(IDBFS.queuePersist(r.mount),n.symlink(...a)),r.node_ops.unlink=(...a)=>(IDBFS.queuePersist(r.mount),n.unlink(...a)),r.node_ops.rename=(...a)=>(IDBFS.queuePersist(r.mount),n.rename(...a))}return r},syncfs:(t,r,n)=>{IDBFS.getLocalSet(t,(a,o)=>{if(a)return n(a);IDBFS.getRemoteSet(t,(l,c)=>{if(l)return n(l);var _=r?c:o,u=r?o:c;IDBFS.reconcile(_,u,n)})})},quit:()=>{for(var t of Object.values(IDBFS.dbs))t.close();IDBFS.dbs={}},getDB:(t,r)=>{var n=IDBFS.dbs[t];if(n)return r(null,n);var a;try{a=IDBFS.indexedDB().open(t,IDBFS.DB_VERSION)}catch(o){return r(o)}if(!a)return r("Unable to connect to IndexedDB");a.onupgradeneeded=o=>{var l=o.target.result,c=o.target.transaction,_;l.objectStoreNames.contains(IDBFS.DB_STORE_NAME)?_=c.objectStore(IDBFS.DB_STORE_NAME):_=l.createObjectStore(IDBFS.DB_STORE_NAME),_.indexNames.contains("timestamp")||_.createIndex("timestamp","timestamp",{unique:!1})},a.onsuccess=()=>{n=a.result,IDBFS.dbs[t]=n,r(null,n)},a.onerror=o=>{r(o.target.error),o.preventDefault()}},getLocalSet:(t,r)=>{var n={};function a(u){return u!=="."&&u!==".."}function o(u){return p=>PATH.join2(u,p)}for(var l=FS.readdir(t.mountpoint).filter(a).map(o(t.mountpoint));l.length;){var c=l.pop(),_;try{_=FS.stat(c)}catch(u){return r(u)}FS.isDir(_.mode)&&l.push(...FS.readdir(c).filter(a).map(o(c))),n[c]={timestamp:_.mtime}}return r(null,{type:"local",entries:n})},getRemoteSet:(t,r)=>{var n={};IDBFS.getDB(t.mountpoint,(a,o)=>{if(a)return r(a);try{var l=o.transaction([IDBFS.DB_STORE_NAME],"readonly");l.onerror=u=>{r(u.target.error),u.preventDefault()};var c=l.objectStore(IDBFS.DB_STORE_NAME),_=c.index("timestamp");_.openKeyCursor().onsuccess=u=>{var p=u.target.result;if(!p)return r(null,{type:"remote",db:o,entries:n});n[p.primaryKey]={timestamp:p.key},p.continue()}}catch(u){return r(u)}})},loadLocalEntry:(t,r)=>{var n,a;try{var o=FS.lookupPath(t);a=o.node,n=FS.stat(t)}catch(l){return r(l)}return FS.isDir(n.mode)?r(null,{timestamp:n.mtime,mode:n.mode}):FS.isFile(n.mode)?(a.contents=MEMFS.getFileDataAsTypedArray(a),r(null,{timestamp:n.mtime,mode:n.mode,contents:a.contents})):r(new Error("node type not supported"))},storeLocalEntry:(t,r,n)=>{try{if(FS.isDir(r.mode))FS.mkdirTree(t,r.mode);else if(FS.isFile(r.mode))FS.writeFile(t,r.contents,{canOwn:!0});else return n(new Error("node type not supported"));FS.chmod(t,r.mode),FS.utime(t,r.timestamp,r.timestamp)}catch(a){return n(a)}n(null)},removeLocalEntry:(t,r)=>{try{var n=FS.stat(t);FS.isDir(n.mode)?FS.rmdir(t):FS.isFile(n.mode)&&FS.unlink(t)}catch(a){return r(a)}r(null)},loadRemoteEntry:(t,r,n)=>{var a=t.get(r);a.onsuccess=o=>n(null,o.target.result),a.onerror=o=>{n(o.target.error),o.preventDefault()}},storeRemoteEntry:(t,r,n,a)=>{try{var o=t.put(n,r)}catch(l){a(l);return}o.onsuccess=l=>a(),o.onerror=l=>{a(l.target.error),l.preventDefault()}},removeRemoteEntry:(t,r,n)=>{var a=t.delete(r);a.onsuccess=o=>n(),a.onerror=o=>{n(o.target.error),o.preventDefault()}},reconcile:(t,r,n)=>{var a=0,o=[];for(var[l,c]of Object.entries(t.entries)){var _=r.entries[l];(!_||c.timestamp.getTime()!=_.timestamp.getTime())&&(o.push(l),a++)}var u=[];for(var l of Object.keys(r.entries))t.entries[l]||(u.push(l),a++);if(!a)return n(null);var p=!1,d=t.type==="remote"?t.db:r.db,m=d.transaction([IDBFS.DB_STORE_NAME],"readwrite"),f=m.objectStore(IDBFS.DB_STORE_NAME);function g(x){if(x&&!p)return p=!0,n(x)}m.onerror=m.onabort=x=>{g(x.target.error),x.preventDefault()},m.oncomplete=x=>{p||n(null)};for(const x of o.sort())r.type==="local"?IDBFS.loadRemoteEntry(f,x,(v,h)=>{if(v)return g(v);IDBFS.storeLocalEntry(x,h,g)}):IDBFS.loadLocalEntry(x,(v,h)=>{if(v)return g(v);IDBFS.storeRemoteEntry(f,x,h,g)});for(var E of u.sort().reverse())r.type==="local"?IDBFS.removeLocalEntry(E,g):IDBFS.removeRemoteEntry(f,E,g)}},strError=t=>UTF8ToString(_strerror(t)),ERRNO_CODES={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},FS_createDataFile=(...t)=>FS.createDataFile(...t),getUniqueRunDependency=t=>{for(var r=t;;){if(!runDependencyTracking[t])return t;t=r+Math.random()}},runDependencies=0,dependenciesFulfilled=null,runDependencyTracking={},runDependencyWatcher=null,removeRunDependency=t=>{if(runDependencies--,Module.monitorRunDependencies?.(runDependencies),assert(t,"removeRunDependency requires an ID"),assert(runDependencyTracking[t]),delete runDependencyTracking[t],runDependencies==0&&(runDependencyWatcher!==null&&(clearInterval(runDependencyWatcher),runDependencyWatcher=null),dependenciesFulfilled)){var r=dependenciesFulfilled;dependenciesFulfilled=null,r()}},addRunDependency=t=>{runDependencies++,Module.monitorRunDependencies?.(runDependencies),assert(t,"addRunDependency requires an ID"),assert(!runDependencyTracking[t]),runDependencyTracking[t]=1,runDependencyWatcher===null&&globalThis.setInterval&&(runDependencyWatcher=setInterval(()=>{if(ABORT){clearInterval(runDependencyWatcher),runDependencyWatcher=null;return}var r=!1;for(var n in runDependencyTracking)r||(r=!0,err("still waiting on run dependencies:")),err(`dependency: ${n}`);r&&err("(end of list)")},1e4))},FS_handledByPreloadPlugin=async(t,r)=>{typeof Browser<"u"&&Browser.init();for(var n of preloadPlugins)if(n.canHandle(r))return assert(n.handle.constructor.name==="AsyncFunction","Filesystem plugin handlers must be async functions (See #24914)"),n.handle(t,r);return t},FS_preloadFile=async(t,r,n,a,o,l,c,_)=>{var u=r?PATH_FS.resolve(PATH.join2(t,r)):t,p=getUniqueRunDependency(`cp ${u}`);addRunDependency(p);try{var d=n;typeof n=="string"&&(d=await asyncLoad(n)),d=await FS_handledByPreloadPlugin(d,u),_?.(),l||FS_createDataFile(t,r,d,a,o,c)}finally{removeRunDependency(p)}},FS_createPreloadedFile=(t,r,n,a,o,l,c,_,u,p)=>{FS_preloadFile(t,r,n,a,o,_,u,p).then(l).catch(c)},FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(t){super(runtimeInitialized?strError(t):""),this.errno=t;for(var r in ERRNO_CODES)if(ERRNO_CODES[r]===t){this.code=r;break}}},FSStream:class{shared={};get object(){return this.node}set object(t){this.node=t}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(t){this.shared.flags=t}get position(){return this.shared.position}set position(t){this.shared.position=t}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(t,r,n,a){t||(t=this),this.parent=t,this.mount=t.mount,this.id=FS.nextInode++,this.name=r,this.mode=n,this.rdev=a,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(t){t?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(t){t?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return FS.isDir(this.mode)}get isDevice(){return FS.isChrdev(this.mode)}},lookupPath(t,r={}){if(!t)throw new FS.ErrnoError(44);r.follow_mount??=!0,PATH.isAbs(t)||(t=FS.cwd()+"/"+t);e:for(var n=0;n<40;n++){for(var a=t.split("/").filter(p=>!!p),o=FS.root,l="/",c=0;c<a.length;c++){var _=c===a.length-1;if(_&&r.parent)break;if(a[c]!=="."){if(a[c]===".."){if(l=PATH.dirname(l),FS.isRoot(o)){t=l+"/"+a.slice(c+1).join("/"),n--;continue e}else o=o.parent;continue}l=PATH.join2(l,a[c]);try{o=FS.lookupNode(o,a[c])}catch(p){if(p?.errno===44&&_&&r.noent_okay)return{path:l};throw p}if(FS.isMountpoint(o)&&(!_||r.follow_mount)&&(o=o.mounted.root),FS.isLink(o.mode)&&(!_||r.follow)){if(!o.node_ops.readlink)throw new FS.ErrnoError(52);var u=o.node_ops.readlink(o);PATH.isAbs(u)||(u=PATH.dirname(l)+"/"+u),t=u+"/"+a.slice(c+1).join("/");continue e}}}return{path:l,node:o}}throw new FS.ErrnoError(32)},getPath(t){for(var r;;){if(FS.isRoot(t)){var n=t.mount.mountpoint;return r?n[n.length-1]!=="/"?`${n}/${r}`:n+r:n}r=r?`${t.name}/${r}`:t.name,t=t.parent}},hashName(t,r){for(var n=0,a=0;a<r.length;a++)n=(n<<5)-n+r.charCodeAt(a)|0;return(t+n>>>0)%FS.nameTable.length},hashAddNode(t){var r=FS.hashName(t.parent.id,t.name);t.name_next=FS.nameTable[r],FS.nameTable[r]=t},hashRemoveNode(t){var r=FS.hashName(t.parent.id,t.name);if(FS.nameTable[r]===t)FS.nameTable[r]=t.name_next;else for(var n=FS.nameTable[r];n;){if(n.name_next===t){n.name_next=t.name_next;break}n=n.name_next}},lookupNode(t,r){var n=FS.mayLookup(t);if(n)throw new FS.ErrnoError(n);for(var a=FS.hashName(t.id,r),o=FS.nameTable[a];o;o=o.name_next){var l=o.name;if(o.parent.id===t.id&&l===r)return o}return FS.lookup(t,r)},createNode(t,r,n,a){assert(typeof t=="object");var o=new FS.FSNode(t,r,n,a);return FS.hashAddNode(o),o},destroyNode(t){FS.hashRemoveNode(t)},isRoot(t){return t===t.parent},isMountpoint(t){return!!t.mounted},isFile(t){return(t&61440)===32768},isDir(t){return(t&61440)===16384},isLink(t){return(t&61440)===40960},isChrdev(t){return(t&61440)===8192},isBlkdev(t){return(t&61440)===24576},isFIFO(t){return(t&61440)===4096},isSocket(t){return(t&49152)===49152},flagsToPermissionString(t){var r=["r","w","rw"][t&3];return t&512&&(r+="w"),r},nodePermissions(t,r){return FS.ignorePermissions?0:r.includes("r")&&!(t.mode&292)||r.includes("w")&&!(t.mode&146)||r.includes("x")&&!(t.mode&73)?2:0},mayLookup(t){if(!FS.isDir(t.mode))return 54;var r=FS.nodePermissions(t,"x");return r||(t.node_ops.lookup?0:2)},mayCreate(t,r){if(!FS.isDir(t.mode))return 54;try{var n=FS.lookupNode(t,r);return 20}catch{}return FS.nodePermissions(t,"wx")},mayDelete(t,r,n){var a;try{a=FS.lookupNode(t,r)}catch(l){return l.errno}var o=FS.nodePermissions(t,"wx");if(o)return o;if(n){if(!FS.isDir(a.mode))return 54;if(FS.isRoot(a)||FS.getPath(a)===FS.cwd())return 10}else if(FS.isDir(a.mode))return 31;return 0},mayOpen(t,r){return t?FS.isLink(t.mode)?32:FS.isDir(t.mode)&&(FS.flagsToPermissionString(r)!=="r"||r&576)?31:FS.nodePermissions(t,FS.flagsToPermissionString(r)):44},checkOpExists(t,r){if(!t)throw new FS.ErrnoError(r);return t},MAX_OPEN_FDS:4096,nextfd(){for(var t=0;t<=FS.MAX_OPEN_FDS;t++)if(!FS.streams[t])return t;throw new FS.ErrnoError(33)},getStreamChecked(t){var r=FS.getStream(t);if(!r)throw new FS.ErrnoError(8);return r},getStream:t=>FS.streams[t],createStream(t,r=-1){return assert(r>=-1),t=Object.assign(new FS.FSStream,t),r==-1&&(r=FS.nextfd()),t.fd=r,FS.streams[r]=t,t},closeStream(t){FS.streams[t]=null},dupStream(t,r=-1){var n=FS.createStream(t,r);return n.stream_ops?.dup?.(n),n},doSetAttr(t,r,n){var a=t?.stream_ops.setattr,o=a?t:r;a??=r.node_ops.setattr,FS.checkOpExists(a,63),a(o,n)},chrdev_stream_ops:{open(t){var r=FS.getDevice(t.node.rdev);t.stream_ops=r.stream_ops,t.stream_ops.open?.(t)},llseek(){throw new FS.ErrnoError(70)}},major:t=>t>>8,minor:t=>t&255,makedev:(t,r)=>t<<8|r,registerDevice(t,r){FS.devices[t]={stream_ops:r}},getDevice:t=>FS.devices[t],getMounts(t){for(var r=[],n=[t];n.length;){var a=n.pop();r.push(a),n.push(...a.mounts)}return r},syncfs(t,r){typeof t=="function"&&(r=t,t=!1),FS.syncFSRequests++,FS.syncFSRequests>1&&err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var n=FS.getMounts(FS.root.mount),a=0;function o(_){return assert(FS.syncFSRequests>0),FS.syncFSRequests--,r(_)}function l(_){if(_)return l.errored?void 0:(l.errored=!0,o(_));++a>=n.length&&o(null)}for(var c of n)c.type.syncfs?c.type.syncfs(c,t,l):l(null)},mount(t,r,n){if(typeof t=="string")throw t;var a=n==="/",o=!n,l;if(a&&FS.root)throw new FS.ErrnoError(10);if(!a&&!o){var c=FS.lookupPath(n,{follow_mount:!1});if(n=c.path,l=c.node,FS.isMountpoint(l))throw new FS.ErrnoError(10);if(!FS.isDir(l.mode))throw new FS.ErrnoError(54)}var _={type:t,opts:r,mountpoint:n,mounts:[]},u=t.mount(_);return u.mount=_,_.root=u,a?FS.root=u:l&&(l.mounted=_,l.mount&&l.mount.mounts.push(_)),u},unmount(t){var r=FS.lookupPath(t,{follow_mount:!1});if(!FS.isMountpoint(r.node))throw new FS.ErrnoError(28);var n=r.node,a=n.mounted,o=FS.getMounts(a);for(var[l,c]of Object.entries(FS.nameTable))for(;c;){var _=c.name_next;o.includes(c.mount)&&FS.destroyNode(c),c=_}n.mounted=null;var u=n.mount.mounts.indexOf(a);assert(u!==-1),n.mount.mounts.splice(u,1)},lookup(t,r){return t.node_ops.lookup(t,r)},mknod(t,r,n){var a=FS.lookupPath(t,{parent:!0}),o=a.node,l=PATH.basename(t);if(!l)throw new FS.ErrnoError(28);if(l==="."||l==="..")throw new FS.ErrnoError(20);var c=FS.mayCreate(o,l);if(c)throw new FS.ErrnoError(c);if(!o.node_ops.mknod)throw new FS.ErrnoError(63);return o.node_ops.mknod(o,l,r,n)},statfs(t){return FS.statfsNode(FS.lookupPath(t,{follow:!0}).node)},statfsStream(t){return FS.statfsNode(t.node)},statfsNode(t){var r={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:FS.nextInode,ffree:FS.nextInode-1,fsid:42,flags:2,namelen:255};return t.node_ops.statfs&&Object.assign(r,t.node_ops.statfs(t.mount.opts.root)),r},create(t,r=438){return r&=4095,r|=32768,FS.mknod(t,r,0)},mkdir(t,r=511){return r&=1023,r|=16384,FS.mknod(t,r,0)},mkdirTree(t,r){var n=t.split("/"),a="";for(var o of n)if(o){(a||PATH.isAbs(t))&&(a+="/"),a+=o;try{FS.mkdir(a,r)}catch(l){if(l.errno!=20)throw l}}},mkdev(t,r,n){return typeof n>"u"&&(n=r,r=438),r|=8192,FS.mknod(t,r,n)},symlink(t,r){if(!PATH_FS.resolve(t))throw new FS.ErrnoError(44);var n=FS.lookupPath(r,{parent:!0}),a=n.node;if(!a)throw new FS.ErrnoError(44);var o=PATH.basename(r),l=FS.mayCreate(a,o);if(l)throw new FS.ErrnoError(l);if(!a.node_ops.symlink)throw new FS.ErrnoError(63);return a.node_ops.symlink(a,o,t)},rename(t,r){var n=PATH.dirname(t),a=PATH.dirname(r),o=PATH.basename(t),l=PATH.basename(r),c,_,u;if(c=FS.lookupPath(t,{parent:!0}),_=c.node,c=FS.lookupPath(r,{parent:!0}),u=c.node,!_||!u)throw new FS.ErrnoError(44);if(_.mount!==u.mount)throw new FS.ErrnoError(75);var p=FS.lookupNode(_,o),d=PATH_FS.relative(t,a);if(d.charAt(0)!==".")throw new FS.ErrnoError(28);if(d=PATH_FS.relative(r,n),d.charAt(0)!==".")throw new FS.ErrnoError(55);var m;try{m=FS.lookupNode(u,l)}catch{}if(p!==m){var f=FS.isDir(p.mode),g=FS.mayDelete(_,o,f);if(g)throw new FS.ErrnoError(g);if(g=m?FS.mayDelete(u,l,f):FS.mayCreate(u,l),g)throw new FS.ErrnoError(g);if(!_.node_ops.rename)throw new FS.ErrnoError(63);if(FS.isMountpoint(p)||m&&FS.isMountpoint(m))throw new FS.ErrnoError(10);if(u!==_&&(g=FS.nodePermissions(_,"w"),g))throw new FS.ErrnoError(g);FS.hashRemoveNode(p);try{_.node_ops.rename(p,u,l),p.parent=u}catch(E){throw E}finally{FS.hashAddNode(p)}}},rmdir(t){var r=FS.lookupPath(t,{parent:!0}),n=r.node,a=PATH.basename(t),o=FS.lookupNode(n,a),l=FS.mayDelete(n,a,!0);if(l)throw new FS.ErrnoError(l);if(!n.node_ops.rmdir)throw new FS.ErrnoError(63);if(FS.isMountpoint(o))throw new FS.ErrnoError(10);n.node_ops.rmdir(n,a),FS.destroyNode(o)},readdir(t){var r=FS.lookupPath(t,{follow:!0}),n=r.node,a=FS.checkOpExists(n.node_ops.readdir,54);return a(n)},unlink(t){var r=FS.lookupPath(t,{parent:!0}),n=r.node;if(!n)throw new FS.ErrnoError(44);var a=PATH.basename(t),o=FS.lookupNode(n,a),l=FS.mayDelete(n,a,!1);if(l)throw new FS.ErrnoError(l);if(!n.node_ops.unlink)throw new FS.ErrnoError(63);if(FS.isMountpoint(o))throw new FS.ErrnoError(10);n.node_ops.unlink(n,a),FS.destroyNode(o)},readlink(t){var r=FS.lookupPath(t),n=r.node;if(!n)throw new FS.ErrnoError(44);if(!n.node_ops.readlink)throw new FS.ErrnoError(28);return n.node_ops.readlink(n)},stat(t,r){var n=FS.lookupPath(t,{follow:!r}),a=n.node,o=FS.checkOpExists(a.node_ops.getattr,63);return o(a)},fstat(t){var r=FS.getStreamChecked(t),n=r.node,a=r.stream_ops.getattr,o=a?r:n;return a??=n.node_ops.getattr,FS.checkOpExists(a,63),a(o)},lstat(t){return FS.stat(t,!0)},doChmod(t,r,n,a){FS.doSetAttr(t,r,{mode:n&4095|r.mode&-4096,ctime:Date.now(),dontFollow:a})},chmod(t,r,n){var a;if(typeof t=="string"){var o=FS.lookupPath(t,{follow:!n});a=o.node}else a=t;FS.doChmod(null,a,r,n)},lchmod(t,r){FS.chmod(t,r,!0)},fchmod(t,r){var n=FS.getStreamChecked(t);FS.doChmod(n,n.node,r,!1)},doChown(t,r,n){FS.doSetAttr(t,r,{timestamp:Date.now(),dontFollow:n})},chown(t,r,n,a){var o;if(typeof t=="string"){var l=FS.lookupPath(t,{follow:!a});o=l.node}else o=t;FS.doChown(null,o,a)},lchown(t,r,n){FS.chown(t,r,n,!0)},fchown(t,r,n){var a=FS.getStreamChecked(t);FS.doChown(a,a.node,!1)},doTruncate(t,r,n){if(FS.isDir(r.mode))throw new FS.ErrnoError(31);if(!FS.isFile(r.mode))throw new FS.ErrnoError(28);var a=FS.nodePermissions(r,"w");if(a)throw new FS.ErrnoError(a);FS.doSetAttr(t,r,{size:n,timestamp:Date.now()})},truncate(t,r){if(r<0)throw new FS.ErrnoError(28);var n;if(typeof t=="string"){var a=FS.lookupPath(t,{follow:!0});n=a.node}else n=t;FS.doTruncate(null,n,r)},ftruncate(t,r){var n=FS.getStreamChecked(t);if(r<0||(n.flags&2097155)===0)throw new FS.ErrnoError(28);FS.doTruncate(n,n.node,r)},utime(t,r,n){var a=FS.lookupPath(t,{follow:!0}),o=a.node,l=FS.checkOpExists(o.node_ops.setattr,63);l(o,{atime:r,mtime:n})},open(t,r,n=438){if(t==="")throw new FS.ErrnoError(44);r=typeof r=="string"?FS_modeStringToFlags(r):r,r&64?n=n&4095|32768:n=0;var a,o;if(typeof t=="object")a=t;else{o=t.endsWith("/");var l=FS.lookupPath(t,{follow:!(r&131072),noent_okay:!0});a=l.node,t=l.path}var c=!1;if(r&64)if(a){if(r&128)throw new FS.ErrnoError(20)}else{if(o)throw new FS.ErrnoError(31);a=FS.mknod(t,n|511,0),c=!0}if(!a)throw new FS.ErrnoError(44);if(FS.isChrdev(a.mode)&&(r&=-513),r&65536&&!FS.isDir(a.mode))throw new FS.ErrnoError(54);if(!c){var _=FS.mayOpen(a,r);if(_)throw new FS.ErrnoError(_)}r&512&&!c&&FS.truncate(a,0),r&=-131713;var u=FS.createStream({node:a,path:FS.getPath(a),flags:r,seekable:!0,position:0,stream_ops:a.stream_ops,ungotten:[],error:!1});return u.stream_ops.open&&u.stream_ops.open(u),c&&FS.chmod(a,n&511),Module.logReadFiles&&!(r&1)&&(t in FS.readFiles||(FS.readFiles[t]=1)),u},close(t){if(FS.isClosed(t))throw new FS.ErrnoError(8);t.getdents&&(t.getdents=null);try{t.stream_ops.close&&t.stream_ops.close(t)}catch(r){throw r}finally{FS.closeStream(t.fd)}t.fd=null},isClosed(t){return t.fd===null},llseek(t,r,n){if(FS.isClosed(t))throw new FS.ErrnoError(8);if(!t.seekable||!t.stream_ops.llseek)throw new FS.ErrnoError(70);if(n!=0&&n!=1&&n!=2)throw new FS.ErrnoError(28);return t.position=t.stream_ops.llseek(t,r,n),t.ungotten=[],t.position},read(t,r,n,a,o){if(assert(n>=0),a<0||o<0)throw new FS.ErrnoError(28);if(FS.isClosed(t))throw new FS.ErrnoError(8);if((t.flags&2097155)===1)throw new FS.ErrnoError(8);if(FS.isDir(t.node.mode))throw new FS.ErrnoError(31);if(!t.stream_ops.read)throw new FS.ErrnoError(28);var l=typeof o<"u";if(!l)o=t.position;else if(!t.seekable)throw new FS.ErrnoError(70);var c=t.stream_ops.read(t,r,n,a,o);return l||(t.position+=c),c},write(t,r,n,a,o,l){if(assert(n>=0),a<0||o<0)throw new FS.ErrnoError(28);if(FS.isClosed(t))throw new FS.ErrnoError(8);if((t.flags&2097155)===0)throw new FS.ErrnoError(8);if(FS.isDir(t.node.mode))throw new FS.ErrnoError(31);if(!t.stream_ops.write)throw new FS.ErrnoError(28);t.seekable&&t.flags&1024&&FS.llseek(t,0,2);var c=typeof o<"u";if(!c)o=t.position;else if(!t.seekable)throw new FS.ErrnoError(70);var _=t.stream_ops.write(t,r,n,a,o,l);return c||(t.position+=_),_},mmap(t,r,n,a,o){if((a&2)!==0&&(o&2)===0&&(t.flags&2097155)!==2)throw new FS.ErrnoError(2);if((t.flags&2097155)===1)throw new FS.ErrnoError(2);if(!t.stream_ops.mmap)throw new FS.ErrnoError(43);if(!r)throw new FS.ErrnoError(28);return t.stream_ops.mmap(t,r,n,a,o)},msync(t,r,n,a,o){return assert(n>=0),t.stream_ops.msync?t.stream_ops.msync(t,r,n,a,o):0},ioctl(t,r,n){if(!t.stream_ops.ioctl)throw new FS.ErrnoError(59);return t.stream_ops.ioctl(t,r,n)},readFile(t,r={}){r.flags=r.flags||0,r.encoding=r.encoding||"binary",r.encoding!=="utf8"&&r.encoding!=="binary"&&abort(`Invalid encoding type "${r.encoding}"`);var n=FS.open(t,r.flags),a=FS.stat(t),o=a.size,l=new Uint8Array(o);return FS.read(n,l,0,o,0),r.encoding==="utf8"&&(l=UTF8ArrayToString(l)),FS.close(n),l},writeFile(t,r,n={}){n.flags=n.flags||577;var a=FS.open(t,n.flags,n.mode);typeof r=="string"&&(r=new Uint8Array(intArrayFromString(r,!0))),ArrayBuffer.isView(r)?FS.write(a,r,0,r.byteLength,void 0,n.canOwn):abort("Unsupported data type"),FS.close(a)},cwd:()=>FS.currentPath,chdir(t){var r=FS.lookupPath(t,{follow:!0});if(r.node===null)throw new FS.ErrnoError(44);if(!FS.isDir(r.node.mode))throw new FS.ErrnoError(54);var n=FS.nodePermissions(r.node,"x");if(n)throw new FS.ErrnoError(n);FS.currentPath=r.path},createDefaultDirectories(){FS.mkdir("/tmp"),FS.mkdir("/home"),FS.mkdir("/home/web_user")},createDefaultDevices(){FS.mkdir("/dev"),FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(a,o,l,c,_)=>c,llseek:()=>0}),FS.mkdev("/dev/null",FS.makedev(1,3)),TTY.register(FS.makedev(5,0),TTY.default_tty_ops),TTY.register(FS.makedev(6,0),TTY.default_tty1_ops),FS.mkdev("/dev/tty",FS.makedev(5,0)),FS.mkdev("/dev/tty1",FS.makedev(6,0));var t=new Uint8Array(1024),r=0,n=()=>(r===0&&(randomFill(t),r=t.byteLength),t[--r]);FS.createDevice("/dev","random",n),FS.createDevice("/dev","urandom",n),FS.mkdir("/dev/shm"),FS.mkdir("/dev/shm/tmp")},createSpecialDirectories(){FS.mkdir("/proc");var t=FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd"),FS.mount({mount(){var r=FS.createNode(t,"fd",16895,73);return r.stream_ops={llseek:MEMFS.stream_ops.llseek},r.node_ops={lookup(n,a){var o=+a,l=FS.getStreamChecked(o),c={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>l.path},id:o+1};return c.parent=c,c},readdir(){return Array.from(FS.streams.entries()).filter(([n,a])=>a).map(([n,a])=>n.toString())}},r}},{},"/proc/self/fd")},createStandardStreams(t,r,n){t?FS.createDevice("/dev","stdin",t):FS.symlink("/dev/tty","/dev/stdin"),r?FS.createDevice("/dev","stdout",null,r):FS.symlink("/dev/tty","/dev/stdout"),n?FS.createDevice("/dev","stderr",null,n):FS.symlink("/dev/tty1","/dev/stderr");var a=FS.open("/dev/stdin",0),o=FS.open("/dev/stdout",1),l=FS.open("/dev/stderr",1);assert(a.fd===0,`invalid handle for stdin (${a.fd})`),assert(o.fd===1,`invalid handle for stdout (${o.fd})`),assert(l.fd===2,`invalid handle for stderr (${l.fd})`)},staticInit(){FS.nameTable=new Array(4096),FS.mount(MEMFS,{},"/"),FS.createDefaultDirectories(),FS.createDefaultDevices(),FS.createSpecialDirectories(),FS.filesystems={MEMFS,IDBFS}},init(t,r,n){assert(!FS.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),FS.initialized=!0,t??=Module.stdin,r??=Module.stdout,n??=Module.stderr,FS.createStandardStreams(t,r,n)},quit(){FS.initialized=!1,_fflush(0);for(var t of FS.streams)t&&FS.close(t)},findObject(t,r){var n=FS.analyzePath(t,r);return n.exists?n.object:null},analyzePath(t,r){try{var n=FS.lookupPath(t,{follow:!r});t=n.path}catch{}var a={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var n=FS.lookupPath(t,{parent:!0});a.parentExists=!0,a.parentPath=n.path,a.parentObject=n.node,a.name=PATH.basename(t),n=FS.lookupPath(t,{follow:!r}),a.exists=!0,a.path=n.path,a.object=n.node,a.name=n.node.name,a.isRoot=n.path==="/"}catch(o){a.error=o.errno}return a},createPath(t,r,n,a){t=typeof t=="string"?t:FS.getPath(t);for(var o=r.split("/").reverse();o.length;){var l=o.pop();if(l){var c=PATH.join2(t,l);try{FS.mkdir(c)}catch(_){if(_.errno!=20)throw _}t=c}}return c},createFile(t,r,n,a,o){var l=PATH.join2(typeof t=="string"?t:FS.getPath(t),r),c=FS_getMode(a,o);return FS.create(l,c)},createDataFile(t,r,n,a,o,l){var c=r;t&&(t=typeof t=="string"?t:FS.getPath(t),c=r?PATH.join2(t,r):t);var _=FS_getMode(a,o),u=FS.create(c,_);if(n){if(typeof n=="string"){for(var p=new Array(n.length),d=0,m=n.length;d<m;++d)p[d]=n.charCodeAt(d);n=p}FS.chmod(u,_|146);var f=FS.open(u,577);FS.write(f,n,0,n.length,0,l),FS.close(f),FS.chmod(u,_)}},createDevice(t,r,n,a){var o=PATH.join2(typeof t=="string"?t:FS.getPath(t),r),l=FS_getMode(!!n,!!a);FS.createDevice.major??=64;var c=FS.makedev(FS.createDevice.major++,0);return FS.registerDevice(c,{open(_){_.seekable=!1},close(_){a?.buffer?.length&&a(10)},read(_,u,p,d,m){for(var f=0,g=0;g<d;g++){var E;try{E=n()}catch{throw new FS.ErrnoError(29)}if(E===void 0&&f===0)throw new FS.ErrnoError(6);if(E==null)break;f++,u[p+g]=E}return f&&(_.node.atime=Date.now()),f},write(_,u,p,d,m){for(var f=0;f<d;f++)try{a(u[p+f])}catch{throw new FS.ErrnoError(29)}return d&&(_.node.mtime=_.node.ctime=Date.now()),f}}),FS.mkdev(o,l,c)},forceLoadFile(t){if(t.isDevice||t.isFolder||t.link||t.contents)return!0;if(globalThis.XMLHttpRequest)abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");else try{t.contents=readBinary(t.url)}catch{throw new FS.ErrnoError(29)}},createLazyFile(t,r,n,a,o){class l{lengthKnown=!1;chunks=[];get(f){if(!(f>this.length-1||f<0)){var g=f%this.chunkSize,E=f/this.chunkSize|0;return this.getter(E)[g]}}setDataGetter(f){this.getter=f}cacheLength(){var f=new XMLHttpRequest;f.open("HEAD",n,!1),f.send(null),f.status>=200&&f.status<300||f.status===304||abort("Couldn't load "+n+". Status: "+f.status);var g=Number(f.getResponseHeader("Content-length")),E,x=(E=f.getResponseHeader("Accept-Ranges"))&&E==="bytes",v=(E=f.getResponseHeader("Content-Encoding"))&&E==="gzip",h=1024*1024;x||(h=g);var b=(y,T)=>{y>T&&abort("invalid range ("+y+", "+T+") or no bytes requested!"),T>g-1&&abort("only "+g+" bytes available! programmer error!");var A=new XMLHttpRequest;return A.open("GET",n,!1),g!==h&&A.setRequestHeader("Range","bytes="+y+"-"+T),A.responseType="arraybuffer",A.overrideMimeType&&A.overrideMimeType("text/plain; charset=x-user-defined"),A.send(null),A.status>=200&&A.status<300||A.status===304||abort("Couldn't load "+n+". Status: "+A.status),A.response!==void 0?new Uint8Array(A.response||[]):intArrayFromString(A.responseText||"",!0)},S=this;S.setDataGetter(y=>{var T=y*h,A=(y+1)*h-1;return A=Math.min(A,g-1),typeof S.chunks[y]>"u"&&(S.chunks[y]=b(T,A)),typeof S.chunks[y]>"u"&&abort("doXHR failed!"),S.chunks[y]}),(v||!g)&&(h=g=1,g=this.getter(0).length,h=g,out("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=g,this._chunkSize=h,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(globalThis.XMLHttpRequest){ENVIRONMENT_IS_WORKER||abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var c=new l,_={isDevice:!1,contents:c}}else var _={isDevice:!1,url:n};var u=FS.createFile(t,r,_,a,o);_.contents?u.contents=_.contents:_.url&&(u.contents=null,u.url=_.url),Object.defineProperties(u,{usedBytes:{get:function(){return this.contents.length}}});var p={};for(const[m,f]of Object.entries(u.stream_ops))p[m]=(...g)=>(FS.forceLoadFile(u),f(...g));function d(m,f,g,E,x){var v=m.node.contents;if(x>=v.length)return 0;var h=Math.min(v.length-x,E);if(assert(h>=0),v.slice)for(var b=0;b<h;b++)f[g+b]=v[x+b];else for(var b=0;b<h;b++)f[g+b]=v.get(x+b);return h}return p.read=(m,f,g,E,x)=>(FS.forceLoadFile(u),d(m,f,g,E,x)),p.mmap=(m,f,g,E,x)=>{FS.forceLoadFile(u);var v=mmapAlloc(f);if(!v)throw new FS.ErrnoError(48);return d(m,HEAP8,v,f,g),{ptr:v,allocated:!0}},u.stream_ops=p,u},absolutePath(){abort("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){abort("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){abort("FS.createLink has been removed; use FS.symlink instead")},joinPath(){abort("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){abort("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){abort("FS.standardizePath has been removed; use PATH.normalize instead")}},findLibraryFS=(t,r)=>{if(runtimeInitialized){if(PATH.isAbs(t))try{return FS.lookupPath(t),t}catch{return}var n=(r?.paths||[]).map(a=>replaceORIGIN(r?.parentLibPath,a));return withStackSave(()=>{var a=512,o=stackAlloc(a),l=stringToUTF8OnStack(n.join(":")),c=stringToUTF8OnStack(t),_=__emscripten_find_dylib(o,l,c,a);return _?UTF8ToString(_):void 0})}};function loadDynamicLibrary(t,r={global:!0,nodelete:!0},n,a){var o=LDSO.loadedLibsByName[t];if(o)return assert(o.exports!=="loading",`Attempt to load '${t}' twice before the first load completed`),r.global?o.global||(o.global=!0,mergeLibSymbols(o.exports)):n&&Object.assign(n,o.exports),r.nodelete&&o.refcount!==1/0&&(o.refcount=1/0),o.refcount++,a&&(LDSO.loadedLibsByHandle[a]=o),r.loadAsync?Promise.resolve(!0):!0;o=newDSO(t,a,"loading"),o.refcount=r.nodelete?1/0:1,o.global=r.global;function l(){if(a){var u=HEAPU32[a+28>>2],p=HEAPU32[a+32>>2];if(u&&p){var d=HEAP8.slice(u,u+p);return r.loadAsync?Promise.resolve(d):d}}var m=findLibraryFS(t,r.rpath);if(m){var d=FS.readFile(m,{encoding:"binary"});return r.loadAsync?Promise.resolve(d):d}var f=locateFile(t);if(r.loadAsync)return asyncLoad(f);throw new Error(`${f}: file not found, and synchronous loading of external files is not available`)}function c(){var u=preloadedWasm[t];return u?r.loadAsync?Promise.resolve(u):u:r.loadAsync?l().then(p=>loadWebAssemblyModule(p,r,t,n,a)):loadWebAssemblyModule(l(),r,t,n,a)}function _(u){o.global?mergeLibSymbols(u):n&&Object.assign(n,u),o.exports=u}return r.loadAsync?c().then(u=>(_(u),!0)):(_(c()),!0)}var reportUndefinedSymbols=()=>{for(var[t,r]of Object.entries(GOT))if(r.value==-1){var n=resolveGlobalSymbol(t,!0).sym;if(!n&&!r.required){r.value=0;continue}if(assert(n,`undefined symbol '${t}'. perhaps a side module was not linked in? if this global was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment`),typeof n=="function")r.value=addFunction(n,n.sig);else if(typeof n=="number")r.value=n;else if(typeof n.value=="number")r.value=n;else throw new Error(`bad export type for '${t}': ${typeof n} (${n})`)}},loadDylibs=async()=>{if(!dynamicLibraries.length){reportUndefinedSymbols();return}addRunDependency("loadDylibs");for(var t of dynamicLibraries)await loadDynamicLibrary(t,{loadAsync:!0,global:!0,nodelete:!0,allowUndefined:!0});reportUndefinedSymbols(),removeRunDependency("loadDylibs")},noExitRuntime=!0,ptrToString=t=>(assert(typeof t=="number",`ptrToString expects a number, got ${typeof t}`),t>>>=0,"0x"+t.toString(16).padStart(8,"0"));function setValue(t,r,n="i8"){switch(n.endsWith("*")&&(n="*"),n){case"i1":HEAP8[t]=r;break;case"i8":HEAP8[t]=r;break;case"i16":HEAP16[t>>1]=r;break;case"i32":HEAP32[t>>2]=r;break;case"i64":HEAP64[t>>3]=BigInt(r);break;case"float":HEAPF32[t>>2]=r;break;case"double":HEAPF64[t>>3]=r;break;case"*":HEAPU32[t>>2]=r;break;default:abort(`invalid type for setValue: ${n}`)}}var ___assert_fail=(t,r,n,a)=>abort(`Assertion failed: ${UTF8ToString(t)}, at: `+[r?UTF8ToString(r):"unknown filename",n,a?UTF8ToString(a):"unknown function"]);___assert_fail.sig="vppip";var ___call_sighandler=(t,r)=>getWasmTableEntry(t)(r);___call_sighandler.sig="vpi";var SOCKFS={websocketArgs:{},callbacks:{},on(t,r){SOCKFS.callbacks[t]=r},emit(t,r){SOCKFS.callbacks[t]?.(r)},mount(t){return SOCKFS.websocketArgs=Module.websocket||{},(Module.websocket??={}).on=SOCKFS.on,FS.createNode(null,"/",16895,0)},createSocket(t,r,n){if(t!=2)throw new FS.ErrnoError(5);if(r&=-526337,r!=1&&r!=2)throw new FS.ErrnoError(28);var a=r==1;if(a&&n&&n!=6)throw new FS.ErrnoError(66);var o={family:t,type:r,protocol:n,server:null,error:null,peers:{},pending:[],recv_queue:[],sock_ops:SOCKFS.websocket_sock_ops},l=SOCKFS.nextname(),c=FS.createNode(SOCKFS.root,l,49152,0);c.sock=o;var _=FS.createStream({path:l,node:c,flags:2,seekable:!1,stream_ops:SOCKFS.stream_ops});return o.stream=_,o},getSocket(t){var r=FS.getStream(t);return!r||!FS.isSocket(r.node.mode)?null:r.node.sock},stream_ops:{poll(t){var r=t.node.sock;return r.sock_ops.poll(r)},ioctl(t,r,n){var a=t.node.sock;return a.sock_ops.ioctl(a,r,n)},read(t,r,n,a,o){var l=t.node.sock,c=l.sock_ops.recvmsg(l,a);return c?(r.set(c.buffer,n),c.buffer.length):0},write(t,r,n,a,o){var l=t.node.sock;return l.sock_ops.sendmsg(l,r,n,a)},close(t){var r=t.node.sock;r.sock_ops.close(r)}},nextname(){return SOCKFS.nextname.current||(SOCKFS.nextname.current=0),`socket[${SOCKFS.nextname.current++}]`},websocket_sock_ops:{createPeer(t,r,n){var a;if(typeof r=="object"&&(a=r,r=null,n=null),a)if(a._socket)r=a._socket.remoteAddress,n=a._socket.remotePort;else{var o=/ws[s]?:\/\/([^:]+):(\d+)/.exec(a.url);if(!o)throw new Error("WebSocket URL must be in the format ws(s)://address:port");r=o[1],n=parseInt(o[2],10)}else try{var l="ws://".replace("#","//"),c="binary",_=void 0;if(SOCKFS.websocketArgs.url&&(l=SOCKFS.websocketArgs.url),SOCKFS.websocketArgs.subprotocol?c=SOCKFS.websocketArgs.subprotocol:SOCKFS.websocketArgs.subprotocol===null&&(c="null"),l==="ws://"||l==="wss://"){var u=r.split("/");l=l+u[0]+":"+n+"/"+u.slice(1).join("/")}c!=="null"&&(c=c.replace(/^ +| +$/g,"").split(/ *, */),_=c);var p;p=WebSocket,a=new p(l,_),a.binaryType="arraybuffer"}catch{throw new FS.ErrnoError(23)}var d={addr:r,port:n,socket:a,msg_send_queue:[]};return SOCKFS.websocket_sock_ops.addPeer(t,d),SOCKFS.websocket_sock_ops.handlePeerEvents(t,d),t.type===2&&typeof t.sport<"u"&&d.msg_send_queue.push(new Uint8Array([255,255,255,255,112,111,114,116,(t.sport&65280)>>8,t.sport&255])),d},getPeer(t,r,n){return t.peers[r+":"+n]},addPeer(t,r){t.peers[r.addr+":"+r.port]=r},removePeer(t,r){delete t.peers[r.addr+":"+r.port]},handlePeerEvents(t,r){var n=!0,a=function(){t.connecting=!1,SOCKFS.emit("open",t.stream.fd);try{for(var l=r.msg_send_queue.shift();l;)r.socket.send(l),l=r.msg_send_queue.shift()}catch{r.socket.close()}};function o(l){if(typeof l=="string"){var c=new TextEncoder;l=c.encode(l)}else{if(assert(l.byteLength!==void 0),l.byteLength==0)return;l=new Uint8Array(l)}var _=n;if(n=!1,_&&l.length===10&&l[0]===255&&l[1]===255&&l[2]===255&&l[3]===255&&l[4]===112&&l[5]===111&&l[6]===114&&l[7]===116){var u=l[8]<<8|l[9];SOCKFS.websocket_sock_ops.removePeer(t,r),r.port=u,SOCKFS.websocket_sock_ops.addPeer(t,r);return}t.recv_queue.push({addr:r.addr,port:r.port,data:l}),SOCKFS.emit("message",t.stream.fd)}ENVIRONMENT_IS_NODE?(r.socket.on("open",a),r.socket.on("message",function(l,c){c&&o(new Uint8Array(l).buffer)}),r.socket.on("close",function(){SOCKFS.emit("close",t.stream.fd)}),r.socket.on("error",function(l){t.error=14,SOCKFS.emit("error",[t.stream.fd,t.error,"ECONNREFUSED: Connection refused"])})):(r.socket.onopen=a,r.socket.onclose=function(){SOCKFS.emit("close",t.stream.fd)},r.socket.onmessage=function(c){o(c.data)},r.socket.onerror=function(l){t.error=14,SOCKFS.emit("error",[t.stream.fd,t.error,"ECONNREFUSED: Connection refused"])})},poll(t){if(t.type===1&&t.server)return t.pending.length?65:0;var r=0,n=t.type===1?SOCKFS.websocket_sock_ops.getPeer(t,t.daddr,t.dport):null;return(t.recv_queue.length||!n||n&&n.socket.readyState===n.socket.CLOSING||n&&n.socket.readyState===n.socket.CLOSED)&&(r|=65),(!n||n&&n.socket.readyState===n.socket.OPEN)&&(r|=4),(n&&n.socket.readyState===n.socket.CLOSING||n&&n.socket.readyState===n.socket.CLOSED)&&(t.connecting?r|=4:r|=16),r},ioctl(t,r,n){switch(r){case 21531:var a=0;return t.recv_queue.length&&(a=t.recv_queue[0].data.length),HEAP32[n>>2]=a,0;case 21537:var o=HEAP32[n>>2];return o?t.stream.flags|=2048:t.stream.flags&=-2049,0;default:return 28}},close(t){if(t.server){try{t.server.close()}catch{}t.server=null}for(var r of Object.values(t.peers)){try{r.socket.close()}catch{}SOCKFS.websocket_sock_ops.removePeer(t,r)}return 0},bind(t,r,n){if(typeof t.saddr<"u"||typeof t.sport<"u")throw new FS.ErrnoError(28);if(t.saddr=r,t.sport=n,t.type===2){t.server&&(t.server.close(),t.server=null);try{t.sock_ops.listen(t,0)}catch(a){if(a.name!=="ErrnoError"||a.errno!==138)throw a}}},connect(t,r,n){if(t.server)throw new FS.ErrnoError(138);if(typeof t.daddr<"u"&&typeof t.dport<"u"){var a=SOCKFS.websocket_sock_ops.getPeer(t,t.daddr,t.dport);if(a)throw a.socket.readyState===a.socket.CONNECTING?new FS.ErrnoError(7):new FS.ErrnoError(30)}var o=SOCKFS.websocket_sock_ops.createPeer(t,r,n);t.daddr=o.addr,t.dport=o.port,t.connecting=!0},listen(t,r){if(!ENVIRONMENT_IS_NODE)throw new FS.ErrnoError(138)},accept(t){if(!t.server||!t.pending.length)throw new FS.ErrnoError(28);var r=t.pending.shift();return r.stream.flags=t.stream.flags,r},getname(t,r){var n,a;if(r){if(t.daddr===void 0||t.dport===void 0)throw new FS.ErrnoError(53);n=t.daddr,a=t.dport}else n=t.saddr||0,a=t.sport||0;return{addr:n,port:a}},sendmsg(t,r,n,a,o,l){if(t.type===2){if((o===void 0||l===void 0)&&(o=t.daddr,l=t.dport),o===void 0||l===void 0)throw new FS.ErrnoError(17)}else o=t.daddr,l=t.dport;var c=SOCKFS.websocket_sock_ops.getPeer(t,o,l);if(t.type===1&&(!c||c.socket.readyState===c.socket.CLOSING||c.socket.readyState===c.socket.CLOSED))throw new FS.ErrnoError(53);ArrayBuffer.isView(r)&&(n+=r.byteOffset,r=r.buffer);var _=r.slice(n,n+a);if(!c||c.socket.readyState!==c.socket.OPEN)return t.type===2&&(!c||c.socket.readyState===c.socket.CLOSING||c.socket.readyState===c.socket.CLOSED)&&(c=SOCKFS.websocket_sock_ops.createPeer(t,o,l)),c.msg_send_queue.push(_),a;try{return c.socket.send(_),a}catch{throw new FS.ErrnoError(28)}},recvmsg(t,r){if(t.type===1&&t.server)throw new FS.ErrnoError(53);var n=t.recv_queue.shift();if(!n){if(t.type===1){var a=SOCKFS.websocket_sock_ops.getPeer(t,t.daddr,t.dport);if(!a)throw new FS.ErrnoError(53);if(a.socket.readyState===a.socket.CLOSING||a.socket.readyState===a.socket.CLOSED)return null;throw new FS.ErrnoError(6)}throw new FS.ErrnoError(6)}var o=n.data.byteLength||n.data.length,l=n.data.byteOffset||0,c=n.data.buffer||n.data,_=Math.min(r,o),u={buffer:new Uint8Array(c,l,_),addr:n.addr,port:n.port};if(t.type===1&&_<o){var p=o-_;n.data=new Uint8Array(c,l+_,p),t.recv_queue.unshift(n)}return u}}},getSocketFromFD=t=>{var r=SOCKFS.getSocket(t);if(!r)throw new FS.ErrnoError(8);return r},inetPton4=t=>{for(var r=t.split("."),n=0;n<4;n++){var a=Number(r[n]);if(isNaN(a))return null;r[n]=a}return(r[0]|r[1]<<8|r[2]<<16|r[3]<<24)>>>0},inetPton6=t=>{var r,n,a,o,l=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,c=[];if(!l.test(t))return null;if(t==="::")return[0,0,0,0,0,0,0,0];for(t.startsWith("::")?t=t.replace("::","Z:"):t=t.replace("::",":Z:"),t.indexOf(".")>0?(t=t.replace(new RegExp("[.]","g"),":"),r=t.split(":"),r[r.length-4]=Number(r[r.length-4])+Number(r[r.length-3])*256,r[r.length-3]=Number(r[r.length-2])+Number(r[r.length-1])*256,r=r.slice(0,r.length-2)):r=t.split(":"),a=0,o=0,n=0;n<r.length;n++)if(typeof r[n]=="string")if(r[n]==="Z"){for(o=0;o<8-r.length+1;o++)c[n+o]=0;a=o-1}else c[n+a]=_htons(parseInt(r[n],16));else c[n+a]=r[n];return[c[1]<<16|c[0],c[3]<<16|c[2],c[5]<<16|c[4],c[7]<<16|c[6]]},writeSockaddr=(t,r,n,a,o)=>{switch(r){case 2:n=inetPton4(n),zeroMemory(t,16),o&&(HEAP32[o>>2]=16),HEAP16[t>>1]=r,HEAP32[t+4>>2]=n,HEAP16[t+2>>1]=_htons(a);break;case 10:n=inetPton6(n),zeroMemory(t,28),o&&(HEAP32[o>>2]=28),HEAP32[t>>2]=r,HEAP32[t+8>>2]=n[0],HEAP32[t+12>>2]=n[1],HEAP32[t+16>>2]=n[2],HEAP32[t+20>>2]=n[3],HEAP16[t+2>>1]=_htons(a);break;default:return 5}return 0},DNS={address_map:{id:1,addrs:{},names:{}},lookup_name(t){var r=inetPton4(t);if(r!==null||(r=inetPton6(t),r!==null))return t;var n;if(DNS.address_map.addrs[t])n=DNS.address_map.addrs[t];else{var a=DNS.address_map.id++;assert(a<65535,"exceeded max address mappings of 65535"),n="172.29."+(a&255)+"."+(a&65280),DNS.address_map.names[n]=t,DNS.address_map.addrs[t]=n}return n},lookup_addr(t){return DNS.address_map.names[t]?DNS.address_map.names[t]:null}};function ___syscall_accept4(t,r,n,a,o,l){try{var c=getSocketFromFD(t),_=c.sock_ops.accept(c);if(r){var u=writeSockaddr(r,_.family,DNS.lookup_name(_.daddr),_.dport,n);assert(!u)}return _.stream.fd}catch(p){if(typeof FS>"u"||p.name!=="ErrnoError")throw p;return-p.errno}}___syscall_accept4.sig="iippiii";var inetNtop4=t=>(t&255)+"."+(t>>8&255)+"."+(t>>16&255)+"."+(t>>24&255),inetNtop6=t=>{var r="",n=0,a=0,o=0,l=0,c=0,_=0,u=[t[0]&65535,t[0]>>16,t[1]&65535,t[1]>>16,t[2]&65535,t[2]>>16,t[3]&65535,t[3]>>16],p=!0,d="";for(_=0;_<5;_++)if(u[_]!==0){p=!1;break}if(p){if(d=inetNtop4(u[6]|u[7]<<16),u[5]===-1)return r="::ffff:",r+=d,r;if(u[5]===0)return r="::",d==="0.0.0.0"&&(d=""),d==="0.0.0.1"&&(d="1"),r+=d,r}for(n=0;n<8;n++)u[n]===0&&(n-o>1&&(c=0),o=n,c++),c>a&&(a=c,l=n-a+1);for(n=0;n<8;n++){if(a>1&&u[n]===0&&n>=l&&n<l+a){n===l&&(r+=":",l===0&&(r+=":"));continue}r+=Number(_ntohs(u[n]&65535)).toString(16),r+=n<7?":":""}return r},readSockaddr=(t,r)=>{var n=HEAP16[t>>1],a=_ntohs(HEAPU16[t+2>>1]),o;switch(n){case 2:if(r!==16)return{errno:28};o=HEAP32[t+4>>2],o=inetNtop4(o);break;case 10:if(r!==28)return{errno:28};o=[HEAP32[t+8>>2],HEAP32[t+12>>2],HEAP32[t+16>>2],HEAP32[t+20>>2]],o=inetNtop6(o);break;default:return{errno:5}}return{family:n,addr:o,port:a}},getSocketAddress=(t,r)=>{var n=readSockaddr(t,r);if(n.errno)throw new FS.ErrnoError(n.errno);return n.addr=DNS.lookup_addr(n.addr)||n.addr,n};function ___syscall_bind(t,r,n,a,o,l){try{var c=getSocketFromFD(t),_=getSocketAddress(r,n);return c.sock_ops.bind(c,_.addr,_.port),0}catch(u){if(typeof FS>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}___syscall_bind.sig="iippiii";var SYSCALLS={calculateAt(t,r,n){if(PATH.isAbs(r))return r;var a;if(t===-100)a=FS.cwd();else{var o=SYSCALLS.getStreamFromFD(t);a=o.path}if(r.length==0){if(!n)throw new FS.ErrnoError(44);return a}return a+"/"+r},writeStat(t,r){HEAPU32[t>>2]=r.dev,HEAPU32[t+4>>2]=r.mode,HEAPU32[t+8>>2]=r.nlink,HEAPU32[t+12>>2]=r.uid,HEAPU32[t+16>>2]=r.gid,HEAPU32[t+20>>2]=r.rdev,HEAP64[t+24>>3]=BigInt(r.size),HEAP32[t+32>>2]=4096,HEAP32[t+36>>2]=r.blocks;var n=r.atime.getTime(),a=r.mtime.getTime(),o=r.ctime.getTime();return HEAP64[t+40>>3]=BigInt(Math.floor(n/1e3)),HEAPU32[t+48>>2]=n%1e3*1e3*1e3,HEAP64[t+56>>3]=BigInt(Math.floor(a/1e3)),HEAPU32[t+64>>2]=a%1e3*1e3*1e3,HEAP64[t+72>>3]=BigInt(Math.floor(o/1e3)),HEAPU32[t+80>>2]=o%1e3*1e3*1e3,HEAP64[t+88>>3]=BigInt(r.ino),0},writeStatFs(t,r){HEAPU32[t+4>>2]=r.bsize,HEAPU32[t+60>>2]=r.bsize,HEAP64[t+8>>3]=BigInt(r.blocks),HEAP64[t+16>>3]=BigInt(r.bfree),HEAP64[t+24>>3]=BigInt(r.bavail),HEAP64[t+32>>3]=BigInt(r.files),HEAP64[t+40>>3]=BigInt(r.ffree),HEAPU32[t+48>>2]=r.fsid,HEAPU32[t+64>>2]=r.flags,HEAPU32[t+56>>2]=r.namelen},doMsync(t,r,n,a,o){if(!FS.isFile(r.node.mode))throw new FS.ErrnoError(43);if(a&2)return 0;var l=HEAPU8.slice(t,t+n);FS.msync(r,l,o,n,a)},getStreamFromFD(t){var r=FS.getStreamChecked(t);return r},varargs:void 0,getStr(t){var r=UTF8ToString(t);return r}};function ___syscall_chdir(t){try{return t=SYSCALLS.getStr(t),FS.chdir(t),0}catch(r){if(typeof FS>"u"||r.name!=="ErrnoError")throw r;return-r.errno}}___syscall_chdir.sig="ip";function ___syscall_chmod(t,r){try{return t=SYSCALLS.getStr(t),FS.chmod(t,r),0}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return-n.errno}}___syscall_chmod.sig="ipi";function ___syscall_connect(t,r,n,a,o,l){try{var c=getSocketFromFD(t),_=getSocketAddress(r,n);return c.sock_ops.connect(c,_.addr,_.port),0}catch(u){if(typeof FS>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}___syscall_connect.sig="iippiii";function ___syscall_dup(t){try{var r=SYSCALLS.getStreamFromFD(t);return FS.dupStream(r).fd}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return-n.errno}}___syscall_dup.sig="ii";function ___syscall_dup3(t,r,n){try{var a=SYSCALLS.getStreamFromFD(t);if(assert(!n),a.fd===r)return-28;if(r<0||r>=FS.MAX_OPEN_FDS)return-8;var o=FS.getStream(r);return o&&FS.close(o),FS.dupStream(a,r).fd}catch(l){if(typeof FS>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}___syscall_dup3.sig="iiii";function ___syscall_faccessat(t,r,n,a){try{if(r=SYSCALLS.getStr(r),assert(!a||a==512),r=SYSCALLS.calculateAt(t,r),n&-8)return-28;var o=FS.lookupPath(r,{follow:!0}),l=o.node;if(!l)return-44;var c="";return n&4&&(c+="r"),n&2&&(c+="w"),n&1&&(c+="x"),c&&FS.nodePermissions(l,c)?-2:0}catch(_){if(typeof FS>"u"||_.name!=="ErrnoError")throw _;return-_.errno}}___syscall_faccessat.sig="iipii";var ___syscall_fadvise64=(t,r,n,a)=>0;___syscall_fadvise64.sig="iijji";var INT53_MAX=9007199254740992,INT53_MIN=-9007199254740992,bigintToI53Checked=t=>t<INT53_MIN||t>INT53_MAX?NaN:Number(t);function ___syscall_fallocate(t,r,n,a){n=bigintToI53Checked(n),a=bigintToI53Checked(a);try{if(isNaN(n)||isNaN(a))return-61;if(r!=0)return-138;if(n<0||a<0)return-28;var o=FS.fstat(t).size,l=n+a;return l>o&&FS.ftruncate(t,l),0}catch(c){if(typeof FS>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}___syscall_fallocate.sig="iiijj";function ___syscall_fchdir(t){try{var r=SYSCALLS.getStreamFromFD(t);return FS.chdir(r.path),0}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return-n.errno}}___syscall_fchdir.sig="ii";function ___syscall_fchmod(t,r){try{return FS.fchmod(t,r),0}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return-n.errno}}___syscall_fchmod.sig="iii";function ___syscall_fchmodat2(t,r,n,a){try{var o=a&256;return r=SYSCALLS.getStr(r),r=SYSCALLS.calculateAt(t,r),FS.chmod(r,n,o),0}catch(l){if(typeof FS>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}___syscall_fchmodat2.sig="iipii";function ___syscall_fchown32(t,r,n){try{return FS.fchown(t,r,n),0}catch(a){if(typeof FS>"u"||a.name!=="ErrnoError")throw a;return-a.errno}}___syscall_fchown32.sig="iiii";function ___syscall_fchownat(t,r,n,a,o){try{r=SYSCALLS.getStr(r);var l=o&256;return o=o&-257,assert(!o),r=SYSCALLS.calculateAt(t,r),(l?FS.lchown:FS.chown)(r,n,a),0}catch(c){if(typeof FS>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}___syscall_fchownat.sig="iipiii";var syscallGetVarargI=()=>{assert(SYSCALLS.varargs!=null);var t=HEAP32[+SYSCALLS.varargs>>2];return SYSCALLS.varargs+=4,t},syscallGetVarargP=syscallGetVarargI;function ___syscall_fcntl64(t,r,n){SYSCALLS.varargs=n;try{var a=SYSCALLS.getStreamFromFD(t);switch(r){case 0:{var o=syscallGetVarargI();if(o<0)return-28;for(;FS.streams[o];)o++;var l;return l=FS.dupStream(a,o),l.fd}case 1:case 2:return 0;case 3:return a.flags;case 4:{var o=syscallGetVarargI();return a.flags|=o,0}case 12:{var o=syscallGetVarargP(),c=0;return HEAP16[o+c>>1]=2,0}case 13:case 14:return 0}return-28}catch(_){if(typeof FS>"u"||_.name!=="ErrnoError")throw _;return-_.errno}}___syscall_fcntl64.sig="iiip";function ___syscall_fdatasync(t){try{var r=SYSCALLS.getStreamFromFD(t);return 0}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return-n.errno}}___syscall_fdatasync.sig="ii";function ___syscall_fstat64(t,r){try{return SYSCALLS.writeStat(r,FS.fstat(t))}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return-n.errno}}___syscall_fstat64.sig="iip";function ___syscall_fstatfs64(t,r,n){try{assert(r===88);var a=SYSCALLS.getStreamFromFD(t);return SYSCALLS.writeStatFs(n,FS.statfsStream(a)),0}catch(o){if(typeof FS>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}___syscall_fstatfs64.sig="iipp";function ___syscall_ftruncate64(t,r){r=bigintToI53Checked(r);try{return isNaN(r)?-61:(FS.ftruncate(t,r),0)}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return-n.errno}}___syscall_ftruncate64.sig="iij";function ___syscall_getcwd(t,r){try{if(r===0)return-28;var n=FS.cwd(),a=lengthBytesUTF8(n)+1;return r<a?-68:(stringToUTF8(n,t,r),a)}catch(o){if(typeof FS>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}___syscall_getcwd.sig="ipp";function ___syscall_getdents64(t,r,n){try{var a=SYSCALLS.getStreamFromFD(t);a.getdents||=FS.readdir(a.path);for(var o=280,l=0,c=FS.llseek(a,0,1),_=Math.floor(c/o),u=Math.min(a.getdents.length,_+Math.floor(n/o)),p=_;p<u;p++){var d,m,f=a.getdents[p];if(f===".")d=a.node.id,m=4;else if(f===".."){var g=FS.lookupPath(a.path,{parent:!0});d=g.node.id,m=4}else{var E;try{E=FS.lookupNode(a.node,f)}catch(x){if(x?.errno===28)continue;throw x}d=E.id,m=FS.isChrdev(E.mode)?2:FS.isDir(E.mode)?4:FS.isLink(E.mode)?10:8}assert(d),HEAP64[r+l>>3]=BigInt(d),HEAP64[r+l+8>>3]=BigInt((p+1)*o),HEAP16[r+l+16>>1]=280,HEAP8[r+l+18]=m,stringToUTF8(f,r+l+19,256),l+=o}return FS.llseek(a,p*o,0),l}catch(x){if(typeof FS>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}___syscall_getdents64.sig="iipp";function ___syscall_getpeername(t,r,n,a,o,l){try{var c=getSocketFromFD(t);if(!c.daddr)return-53;var _=writeSockaddr(r,c.family,DNS.lookup_name(c.daddr),c.dport,n);return assert(!_),0}catch(u){if(typeof FS>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}___syscall_getpeername.sig="iippiii";function ___syscall_getsockname(t,r,n,a,o,l){try{var c=getSocketFromFD(t),_=writeSockaddr(r,c.family,DNS.lookup_name(c.saddr||"0.0.0.0"),c.sport,n);return assert(!_),0}catch(u){if(typeof FS>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}___syscall_getsockname.sig="iippiii";function ___syscall_getsockopt(t,r,n,a,o,l){try{var c=getSocketFromFD(t);return r===1&&n===4?(HEAP32[a>>2]=c.error,HEAP32[o>>2]=4,c.error=null,0):-50}catch(_){if(typeof FS>"u"||_.name!=="ErrnoError")throw _;return-_.errno}}___syscall_getsockopt.sig="iiiippi";function ___syscall_ioctl(t,r,n){SYSCALLS.varargs=n;try{var a=SYSCALLS.getStreamFromFD(t);switch(r){case 21509:return a.tty?0:-59;case 21505:{if(!a.tty)return-59;if(a.tty.ops.ioctl_tcgets){var o=a.tty.ops.ioctl_tcgets(a),l=syscallGetVarargP();HEAP32[l>>2]=o.c_iflag||0,HEAP32[l+4>>2]=o.c_oflag||0,HEAP32[l+8>>2]=o.c_cflag||0,HEAP32[l+12>>2]=o.c_lflag||0;for(var c=0;c<32;c++)HEAP8[l+c+17]=o.c_cc[c]||0;return 0}return 0}case 21510:case 21511:case 21512:return a.tty?0:-59;case 21506:case 21507:case 21508:{if(!a.tty)return-59;if(a.tty.ops.ioctl_tcsets){for(var l=syscallGetVarargP(),_=HEAP32[l>>2],u=HEAP32[l+4>>2],p=HEAP32[l+8>>2],d=HEAP32[l+12>>2],m=[],c=0;c<32;c++)m.push(HEAP8[l+c+17]);return a.tty.ops.ioctl_tcsets(a.tty,r,{c_iflag:_,c_oflag:u,c_cflag:p,c_lflag:d,c_cc:m})}return 0}case 21519:{if(!a.tty)return-59;var l=syscallGetVarargP();return HEAP32[l>>2]=0,0}case 21520:return a.tty?-28:-59;case 21537:case 21531:{var l=syscallGetVarargP();return FS.ioctl(a,r,l)}case 21523:{if(!a.tty)return-59;if(a.tty.ops.ioctl_tiocgwinsz){var f=a.tty.ops.ioctl_tiocgwinsz(a.tty),l=syscallGetVarargP();HEAP16[l>>1]=f[0],HEAP16[l+2>>1]=f[1]}return 0}case 21524:return a.tty?0:-59;case 21515:return a.tty?0:-59;default:return-28}}catch(g){if(typeof FS>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}___syscall_ioctl.sig="iiip";function ___syscall_listen(t,r){try{var n=getSocketFromFD(t);return n.sock_ops.listen(n,r),0}catch(a){if(typeof FS>"u"||a.name!=="ErrnoError")throw a;return-a.errno}}___syscall_listen.sig="iiiiiii";function ___syscall_lstat64(t,r){try{return t=SYSCALLS.getStr(t),SYSCALLS.writeStat(r,FS.lstat(t))}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return-n.errno}}___syscall_lstat64.sig="ipp";function ___syscall_mkdirat(t,r,n){try{return r=SYSCALLS.getStr(r),r=SYSCALLS.calculateAt(t,r),FS.mkdir(r,n,0),0}catch(a){if(typeof FS>"u"||a.name!=="ErrnoError")throw a;return-a.errno}}___syscall_mkdirat.sig="iipi";function ___syscall_mknodat(t,r,n,a){try{switch(r=SYSCALLS.getStr(r),r=SYSCALLS.calculateAt(t,r),n&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-28}return FS.mknod(r,n,a),0}catch(o){if(typeof FS>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}___syscall_mknodat.sig="iipii";function ___syscall_newfstatat(t,r,n,a){try{r=SYSCALLS.getStr(r);var o=a&256,l=a&4096;return a=a&-6401,assert(!a,`unknown flags in __syscall_newfstatat: ${a}`),r=SYSCALLS.calculateAt(t,r,l),SYSCALLS.writeStat(n,o?FS.lstat(r):FS.stat(r))}catch(c){if(typeof FS>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}___syscall_newfstatat.sig="iippi";function ___syscall_openat(t,r,n,a){SYSCALLS.varargs=a;try{r=SYSCALLS.getStr(r),r=SYSCALLS.calculateAt(t,r);var o=a?syscallGetVarargI():0;return FS.open(r,n,o).fd}catch(l){if(typeof FS>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}___syscall_openat.sig="iipip";var PIPEFS={BUCKET_BUFFER_SIZE:8192,mount(t){return FS.createNode(null,"/",16895,0)},createPipe(){var t={buckets:[],refcnt:2,timestamp:new Date};t.buckets.push({buffer:new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),offset:0,roffset:0});var r=PIPEFS.nextname(),n=PIPEFS.nextname(),a=FS.createNode(PIPEFS.root,r,4096,0),o=FS.createNode(PIPEFS.root,n,4096,0);a.pipe=t,o.pipe=t;var l=FS.createStream({path:r,node:a,flags:0,seekable:!1,stream_ops:PIPEFS.stream_ops});a.stream=l;var c=FS.createStream({path:n,node:o,flags:1,seekable:!1,stream_ops:PIPEFS.stream_ops});return o.stream=c,{readable_fd:l.fd,writable_fd:c.fd}},stream_ops:{getattr(t){var r=t.node,n=r.pipe.timestamp;return{dev:14,ino:r.id,mode:4480,nlink:1,uid:0,gid:0,rdev:0,size:0,atime:n,mtime:n,ctime:n,blksize:4096,blocks:0}},poll(t,r,n){var a=t.node.pipe;if((t.flags&2097155)===1)return 260;for(var o of a.buckets)if(o.offset-o.roffset>0)return 65;return 0},dup(t){t.node.pipe.refcnt++},ioctl(t,r,n){return 28},fsync(t){return 28},read(t,r,n,a,o){var l=t.node.pipe,c=0;for(var _ of l.buckets)c+=_.offset-_.roffset;assert(r instanceof ArrayBuffer||ArrayBuffer.isView(r));var u=r.subarray(n,n+a);if(a<=0)return 0;if(c==0)throw new FS.ErrnoError(6);var p=Math.min(c,a),d=p,m=0;for(var _ of l.buckets){var f=_.offset-_.roffset;if(p<=f){var g=_.buffer.subarray(_.roffset,_.offset);p<f?(g=g.subarray(0,p),_.roffset+=p):m++,u.set(g);break}else{var g=_.buffer.subarray(_.roffset,_.offset);u.set(g),u=u.subarray(g.byteLength),p-=g.byteLength,m++}}return m&&m==l.buckets.length&&(m--,l.buckets[m].offset=0,l.buckets[m].roffset=0),l.buckets.splice(0,m),d},write(t,r,n,a,o){var l=t.node.pipe;assert(r instanceof ArrayBuffer||ArrayBuffer.isView(r));var c=r.subarray(n,n+a),_=c.byteLength;if(_<=0)return 0;var u=null;l.buckets.length==0?(u={buffer:new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),offset:0,roffset:0},l.buckets.push(u)):u=l.buckets[l.buckets.length-1],assert(u.offset<=PIPEFS.BUCKET_BUFFER_SIZE);var p=PIPEFS.BUCKET_BUFFER_SIZE-u.offset;if(p>=_)return u.buffer.set(c,u.offset),u.offset+=_,_;p>0&&(u.buffer.set(c.subarray(0,p),u.offset),u.offset+=p,c=c.subarray(p,c.byteLength));for(var d=c.byteLength/PIPEFS.BUCKET_BUFFER_SIZE|0,m=c.byteLength%PIPEFS.BUCKET_BUFFER_SIZE,f=0;f<d;f++){var g={buffer:new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),offset:PIPEFS.BUCKET_BUFFER_SIZE,roffset:0};l.buckets.push(g),g.buffer.set(c.subarray(0,PIPEFS.BUCKET_BUFFER_SIZE)),c=c.subarray(PIPEFS.BUCKET_BUFFER_SIZE,c.byteLength)}if(m>0){var g={buffer:new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),offset:c.byteLength,roffset:0};l.buckets.push(g),g.buffer.set(c)}return _},close(t){var r=t.node.pipe;r.refcnt--,r.refcnt===0&&(r.buckets=null)}},nextname(){return PIPEFS.nextname.current||(PIPEFS.nextname.current=0),"pipe["+PIPEFS.nextname.current+++"]"}};function ___syscall_pipe(t){try{if(t==0)throw new FS.ErrnoError(21);var r=PIPEFS.createPipe();return HEAP32[t>>2]=r.readable_fd,HEAP32[t+4>>2]=r.writable_fd,0}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return-n.errno}}___syscall_pipe.sig="ip";function ___syscall_poll(t,r,n){try{for(var a=0,o=0;o<r;o++){var l=t+8*o,c=HEAP32[l>>2],_=HEAP16[l+4>>1],u=32,p=FS.getStream(c);p&&(p.stream_ops.poll?u=p.stream_ops.poll(p,-1):u=5),u&=_|8|16,u&&a++,HEAP16[l+6>>1]=u}return!a&&n!=0&&warnOnce("non-zero poll() timeout not supported: "+n),a}catch(d){if(typeof FS>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}___syscall_poll.sig="ipii";function ___syscall_readlinkat(t,r,n,a){try{if(r=SYSCALLS.getStr(r),r=SYSCALLS.calculateAt(t,r),a<=0)return-28;var o=FS.readlink(r),l=Math.min(a,lengthBytesUTF8(o)),c=HEAP8[n+l];return stringToUTF8(o,n,a+1),HEAP8[n+l]=c,l}catch(_){if(typeof FS>"u"||_.name!=="ErrnoError")throw _;return-_.errno}}___syscall_readlinkat.sig="iippp";function ___syscall_recvfrom(t,r,n,a,o,l){try{var c=getSocketFromFD(t),_=c.sock_ops.recvmsg(c,n);if(!_)return 0;if(o){var u=writeSockaddr(o,c.family,DNS.lookup_name(_.addr),_.port,l);assert(!u)}return HEAPU8.set(_.buffer,r),_.buffer.byteLength}catch(p){if(typeof FS>"u"||p.name!=="ErrnoError")throw p;return-p.errno}}___syscall_recvfrom.sig="iippipp";function ___syscall_recvmsg(t,r,n,a,o,l){try{for(var c=getSocketFromFD(t),_=HEAPU32[r+8>>2],u=HEAP32[r+12>>2],p=0,d=0;d<u;d++)p+=HEAP32[_+(8*d+4)>>2];var m=c.sock_ops.recvmsg(c,p);if(!m)return 0;var f=HEAPU32[r>>2];if(f){var g=writeSockaddr(f,c.family,DNS.lookup_name(m.addr),m.port);assert(!g)}for(var E=0,x=m.buffer.byteLength,d=0;x>0&&d<u;d++){var v=HEAPU32[_+(8*d+0)>>2],h=HEAP32[_+(8*d+4)>>2];if(h){var b=Math.min(h,x),S=m.buffer.subarray(E,E+b);HEAPU8.set(S,v+E),E+=b,x-=b}}return E}catch(y){if(typeof FS>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}___syscall_recvmsg.sig="iipiiii";function ___syscall_renameat(t,r,n,a){try{return r=SYSCALLS.getStr(r),a=SYSCALLS.getStr(a),r=SYSCALLS.calculateAt(t,r),a=SYSCALLS.calculateAt(n,a),FS.rename(r,a),0}catch(o){if(typeof FS>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}___syscall_renameat.sig="iipip";function ___syscall_rmdir(t){try{return t=SYSCALLS.getStr(t),FS.rmdir(t),0}catch(r){if(typeof FS>"u"||r.name!=="ErrnoError")throw r;return-r.errno}}___syscall_rmdir.sig="ip";function ___syscall_sendmsg(t,r,n,a,o,l){try{var c=getSocketFromFD(t),_=HEAPU32[r+8>>2],u=HEAP32[r+12>>2],p,d,m=HEAPU32[r>>2],f=HEAP32[r+4>>2];if(m){var g=getSocketAddress(m,f);d=g.port,p=g.addr}for(var E=0,x=0;x<u;x++)E+=HEAP32[_+(8*x+4)>>2];for(var v=new Uint8Array(E),h=0,x=0;x<u;x++)for(var b=HEAPU32[_+(8*x+0)>>2],S=HEAP32[_+(8*x+4)>>2],y=0;y<S;y++)v[h++]=HEAP8[b+y];return c.sock_ops.sendmsg(c,v,0,E,p,d)}catch(T){if(typeof FS>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}___syscall_sendmsg.sig="iipippi";function ___syscall_sendto(t,r,n,a,o,l){try{var c=getSocketFromFD(t);if(!o)return FS.write(c.stream,HEAP8,r,n);var _=getSocketAddress(o,l);return c.sock_ops.sendmsg(c,HEAP8,r,n,_.addr,_.port)}catch(u){if(typeof FS>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}___syscall_sendto.sig="iippipp";function ___syscall_socket(t,r,n){try{var a=SOCKFS.createSocket(t,r,n);return assert(a.stream.fd<64),a.stream.fd}catch(o){if(typeof FS>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}___syscall_socket.sig="iiiiiii";function ___syscall_stat64(t,r){try{return t=SYSCALLS.getStr(t),SYSCALLS.writeStat(r,FS.stat(t))}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return-n.errno}}___syscall_stat64.sig="ipp";function ___syscall_statfs64(t,r,n){try{return assert(r===88),SYSCALLS.writeStatFs(n,FS.statfs(SYSCALLS.getStr(t))),0}catch(a){if(typeof FS>"u"||a.name!=="ErrnoError")throw a;return-a.errno}}___syscall_statfs64.sig="ippp";function ___syscall_symlinkat(t,r,n){try{return t=SYSCALLS.getStr(t),n=SYSCALLS.getStr(n),n=SYSCALLS.calculateAt(r,n),FS.symlink(t,n),0}catch(a){if(typeof FS>"u"||a.name!=="ErrnoError")throw a;return-a.errno}}___syscall_symlinkat.sig="ipip";function ___syscall_truncate64(t,r){r=bigintToI53Checked(r);try{return isNaN(r)?-61:(t=SYSCALLS.getStr(t),FS.truncate(t,r),0)}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return-n.errno}}___syscall_truncate64.sig="ipj";function ___syscall_unlinkat(t,r,n){try{if(r=SYSCALLS.getStr(r),r=SYSCALLS.calculateAt(t,r),!n)FS.unlink(r);else if(n===512)FS.rmdir(r);else return-28;return 0}catch(a){if(typeof FS>"u"||a.name!=="ErrnoError")throw a;return-a.errno}}___syscall_unlinkat.sig="iipi";var readI53FromI64=t=>HEAPU32[t>>2]+HEAP32[t+4>>2]*4294967296;function ___syscall_utimensat(t,r,n,a){try{r=SYSCALLS.getStr(r),assert(!a),r=SYSCALLS.calculateAt(t,r,!0);var o=Date.now(),l,c;if(!n)l=o,c=o;else{var _=readI53FromI64(n),u=HEAP32[n+8>>2];u==1073741823?l=o:u==1073741822?l=null:l=_*1e3+u/(1e3*1e3),n+=16,_=readI53FromI64(n),u=HEAP32[n+8>>2],u==1073741823?c=o:u==1073741822?c=null:c=_*1e3+u/(1e3*1e3)}return(c??l)!==null&&FS.utime(r,l,c),0}catch(p){if(typeof FS>"u"||p.name!=="ErrnoError")throw p;return-p.errno}}___syscall_utimensat.sig="iippi";var __abort_js=()=>abort("native code called abort()");__abort_js.sig="v";var dlSetError=t=>{var r=stackSave(),n=stringToUTF8OnStack(t);___dl_seterr(n,0),stackRestore(r)},dlopenInternal=(t,r)=>{var n=UTF8ToString(t+36),a=HEAP32[t+4>>2];n=PATH.normalize(n);var o=!!(a&256),l=o?null:{},c={global:o,nodelete:!!(a&4096),loadAsync:r.loadAsync};if(r.loadAsync)return loadDynamicLibrary(n,c,l,t);try{return loadDynamicLibrary(n,c,l,t)}catch(_){return err(`error loading dynamic library ${n}: ${_}`),dlSetError(`could not load dynamic lib: ${n}
${_}`),0}},__dlopen_js=t=>dlopenInternal(t,{loadAsync:!1});__dlopen_js.sig="pp";var __dlsym_js=(t,r,n)=>{r=UTF8ToString(r);var a,o,l=LDSO.loadedLibsByHandle[t];if(assert(l,`Tried to dlsym() from an unopened handle: ${t}`),o=Object.keys(l.exports).indexOf(r),o==-1||l.exports[r].stub)return dlSetError(`Tried to lookup unknown symbol "${r}" in dynamic lib: ${l.name}`),0;if(a=l.exports[r],typeof a=="function"){var c=getFunctionAddress(a);c?a=c:(a=addFunction(a,a.sig),HEAPU32[n>>2]=o)}return a};__dlsym_js.sig="pppp";var handleException=t=>{if(t instanceof ExitStatus||t=="unwind")return EXITSTATUS;checkStackCookie(),t instanceof WebAssembly.RuntimeError&&_emscripten_stack_get_current()<=0&&err("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 33554432)"),quit_(1,t)},runtimeKeepaliveCounter=0,keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0,_proc_exit=t=>{EXITSTATUS=t,keepRuntimeAlive()||(Module.onExit?.(t),ABORT=!0),quit_(t,new ExitStatus(t))};_proc_exit.sig="vi";var exitJS=(t,r)=>{if(EXITSTATUS=t,checkUnflushedContent(),keepRuntimeAlive()&&!r){var n=`program exited (with status: ${t}), but keepRuntimeAlive() is set (counter=${runtimeKeepaliveCounter}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;readyPromiseReject?.(n),err(n)}_proc_exit(t)},_exit=exitJS;_exit.sig="vi";var maybeExit=()=>{if(!keepRuntimeAlive())try{_exit(EXITSTATUS)}catch(t){handleException(t)}},callUserCallback=t=>{if(ABORT){err("user callback triggered after runtime exited or application aborted.  Ignoring.");return}try{return t()}catch(r){handleException(r)}finally{maybeExit()}},__emscripten_dlopen_js=(t,r,n,a)=>{function o(_){var u=UTF8ToString(t+36);dlSetError(`'Could not load dynamic lib: ${u}
${_}`),callUserCallback(()=>getWasmTableEntry(n)(t,a))}function l(){callUserCallback(()=>getWasmTableEntry(r)(t,a))}var c=dlopenInternal(t,{loadAsync:!0});c?c.then(l,o):o()};__emscripten_dlopen_js.sig="vpppp";var JSEvents={removeAllEventListeners(){for(;JSEvents.eventHandlers.length;)JSEvents._removeHandler(JSEvents.eventHandlers.length-1);JSEvents.deferredCalls=[]},inEventHandler:0,deferredCalls:[],deferCall(t,r,n){function a(l,c){if(l.length!=c.length)return!1;for(var _ in l)if(l[_]!=c[_])return!1;return!0}for(var o of JSEvents.deferredCalls)if(o.targetFunction==t&&a(o.argsList,n))return;JSEvents.deferredCalls.push({targetFunction:t,precedence:r,argsList:n}),JSEvents.deferredCalls.sort((l,c)=>l.precedence<c.precedence)},removeDeferredCalls(t){JSEvents.deferredCalls=JSEvents.deferredCalls.filter(r=>r.targetFunction!=t)},canPerformEventHandlerRequests(){return navigator.userActivation?navigator.userActivation.isActive:JSEvents.inEventHandler&&JSEvents.currentEventHandler.allowsDeferredCalls},runDeferredCalls(){if(JSEvents.canPerformEventHandlerRequests()){var t=JSEvents.deferredCalls;JSEvents.deferredCalls=[];for(var r of t)r.targetFunction(...r.argsList)}},eventHandlers:[],removeAllHandlersOnTarget:(t,r)=>{for(var n=0;n<JSEvents.eventHandlers.length;++n)JSEvents.eventHandlers[n].target==t&&(!r||r==JSEvents.eventHandlers[n].eventTypeString)&&JSEvents._removeHandler(n--)},_removeHandler(t){var r=JSEvents.eventHandlers[t];r.target.removeEventListener(r.eventTypeString,r.eventListenerFunc,r.useCapture),JSEvents.eventHandlers.splice(t,1)},registerOrRemoveHandler(t){if(!t.target)return err("registerOrRemoveHandler: the target element for event handler registration does not exist, when processing the following event handler registration:"),console.dir(t),-4;if(t.callbackfunc)t.eventListenerFunc=function(n){++JSEvents.inEventHandler,JSEvents.currentEventHandler=t,JSEvents.runDeferredCalls(),t.handlerFunc(n),JSEvents.runDeferredCalls(),--JSEvents.inEventHandler},t.target.addEventListener(t.eventTypeString,t.eventListenerFunc,t.useCapture),JSEvents.eventHandlers.push(t);else for(var r=0;r<JSEvents.eventHandlers.length;++r)JSEvents.eventHandlers[r].target==t.target&&JSEvents.eventHandlers[r].eventTypeString==t.eventTypeString&&JSEvents._removeHandler(r--);return 0},removeSingleHandler(t){let r=!1;for(let n=0;n<JSEvents.eventHandlers.length;++n){const a=JSEvents.eventHandlers[n];a.target===t.target&&a.eventTypeId===t.eventTypeId&&a.callbackfunc===t.callbackfunc&&a.userData===t.userData&&(JSEvents._removeHandler(n--),r=!0)}return r?0:-5},getNodeNameForTarget(t){return t?t==window?"#window":t==screen?"#screen":t?.nodeName||"":""},fullscreenEnabled(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}},__emscripten_get_last_devicemotion_event=()=>JSEvents.deviceMotionEvent;__emscripten_get_last_devicemotion_event.sig="p";var __emscripten_get_last_deviceorientation_event=()=>JSEvents.deviceOrientationEvent;__emscripten_get_last_deviceorientation_event.sig="p";var __emscripten_get_last_mouse_event=()=>JSEvents.mouseEvent;__emscripten_get_last_mouse_event.sig="p";var getExecutableName=()=>thisProgram||"./this.program",__emscripten_get_progname=(t,r)=>stringToUTF8(getExecutableName(),t,r);__emscripten_get_progname.sig="vpi";var jsStackTrace=()=>new Error().stack.toString(),getCallstack=t=>{var r=jsStackTrace();t&8&&warnOnce("emscripten_log with EM_LOG_C_STACK no longer has any effect");var n=r.split(`
`);r="";var a=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),o=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var l of n){var c="",_="",u=0,p=0,d=o.exec(l);if(d?.length==5)c=d[1],_=d[2],u=d[3],p=d[4];else if(d=a.exec(l),d?.length>=4)c=d[1],_=d[2],u=d[3],p=d[4]|0;else{r+=l+`
`;continue}if(c=="_emscripten_log"||c=="_emscripten_get_callstack"){r="";continue}t&24&&(t&64&&(_=_.substring(_.replace(/\\/g,"/").lastIndexOf("/")+1)),r+=`    at ${c} (${_}:${u}:${p})
`)}return r=r.replace(/\s+$/,""),r},__emscripten_log_formatted=(t,r)=>{r=UTF8ToString(r),t&24&&(r=r.replace(/\s+$/,""),r+=(r.length>0?`
`:"")+getCallstack(t)),t&1?t&4?console.error(r):t&2?console.warn(r):t&512?console.info(r):t&256?console.debug(r):console.log(r):t&6?err(r):out(r)};__emscripten_log_formatted.sig="vip";var __emscripten_lookup_name=t=>{var r=UTF8ToString(t);return inetPton4(DNS.lookup_name(r))};__emscripten_lookup_name.sig="ip";var __emscripten_runtime_keepalive_clear=()=>{noExitRuntime=!1,runtimeKeepaliveCounter=0};__emscripten_runtime_keepalive_clear.sig="v";var __emscripten_system=t=>t?-52:0;__emscripten_system.sig="ip";var __emscripten_throw_longjmp=()=>{throw 1/0};__emscripten_throw_longjmp.sig="v";function __gmtime_js(t,r){t=bigintToI53Checked(t);var n=new Date(t*1e3);HEAP32[r>>2]=n.getUTCSeconds(),HEAP32[r+4>>2]=n.getUTCMinutes(),HEAP32[r+8>>2]=n.getUTCHours(),HEAP32[r+12>>2]=n.getUTCDate(),HEAP32[r+16>>2]=n.getUTCMonth(),HEAP32[r+20>>2]=n.getUTCFullYear()-1900,HEAP32[r+24>>2]=n.getUTCDay();var a=Date.UTC(n.getUTCFullYear(),0,1,0,0,0,0),o=(n.getTime()-a)/(1e3*60*60*24)|0;HEAP32[r+28>>2]=o}__gmtime_js.sig="vjp";var isLeapYear=t=>t%4===0&&(t%100!==0||t%400===0),MONTH_DAYS_LEAP_CUMULATIVE=[0,31,60,91,121,152,182,213,244,274,305,335],MONTH_DAYS_REGULAR_CUMULATIVE=[0,31,59,90,120,151,181,212,243,273,304,334],ydayFromDate=t=>{var r=isLeapYear(t.getFullYear()),n=r?MONTH_DAYS_LEAP_CUMULATIVE:MONTH_DAYS_REGULAR_CUMULATIVE,a=n[t.getMonth()]+t.getDate()-1;return a};function __localtime_js(t,r){t=bigintToI53Checked(t);var n=new Date(t*1e3);HEAP32[r>>2]=n.getSeconds(),HEAP32[r+4>>2]=n.getMinutes(),HEAP32[r+8>>2]=n.getHours(),HEAP32[r+12>>2]=n.getDate(),HEAP32[r+16>>2]=n.getMonth(),HEAP32[r+20>>2]=n.getFullYear()-1900,HEAP32[r+24>>2]=n.getDay();var a=ydayFromDate(n)|0;HEAP32[r+28>>2]=a,HEAP32[r+36>>2]=-(n.getTimezoneOffset()*60);var o=new Date(n.getFullYear(),0,1),l=new Date(n.getFullYear(),6,1).getTimezoneOffset(),c=o.getTimezoneOffset(),_=(l!=c&&n.getTimezoneOffset()==Math.min(c,l))|0;HEAP32[r+32>>2]=_}__localtime_js.sig="vjp";var __mktime_js=function(t){var r=(()=>{var n=new Date(HEAP32[t+20>>2]+1900,HEAP32[t+16>>2],HEAP32[t+12>>2],HEAP32[t+8>>2],HEAP32[t+4>>2],HEAP32[t>>2],0),a=HEAP32[t+32>>2],o=n.getTimezoneOffset(),l=new Date(n.getFullYear(),0,1),c=new Date(n.getFullYear(),6,1).getTimezoneOffset(),_=l.getTimezoneOffset(),u=Math.min(_,c);if(a<0)HEAP32[t+32>>2]=+(c!=_&&u==o);else if(a>0!=(u==o)){var p=Math.max(_,c),d=a>0?u:p;n.setTime(n.getTime()+(d-o)*6e4)}HEAP32[t+24>>2]=n.getDay();var m=ydayFromDate(n)|0;HEAP32[t+28>>2]=m,HEAP32[t>>2]=n.getSeconds(),HEAP32[t+4>>2]=n.getMinutes(),HEAP32[t+8>>2]=n.getHours(),HEAP32[t+12>>2]=n.getDate(),HEAP32[t+16>>2]=n.getMonth(),HEAP32[t+20>>2]=n.getYear();var f=n.getTime();return isNaN(f)?-1:f/1e3})();return BigInt(r)};__mktime_js.sig="jp";function __mmap_js(t,r,n,a,o,l,c){o=bigintToI53Checked(o);try{assert(!isNaN(o));var _=SYSCALLS.getStreamFromFD(a),u=FS.mmap(_,t,o,r,n),p=u.ptr;return HEAP32[l>>2]=u.allocated,HEAPU32[c>>2]=p,0}catch(d){if(typeof FS>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}__mmap_js.sig="ipiiijpp";function __msync_js(t,r,n,a,o,l){l=bigintToI53Checked(l);try{return isNaN(l)?-61:(SYSCALLS.doMsync(t,SYSCALLS.getStreamFromFD(o),r,a,l),0)}catch(c){if(typeof FS>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}__msync_js.sig="ippiiij";function __munmap_js(t,r,n,a,o,l){l=bigintToI53Checked(l);try{var c=SYSCALLS.getStreamFromFD(o);n&2&&SYSCALLS.doMsync(t,c,r,a,l)}catch(_){if(typeof FS>"u"||_.name!=="ErrnoError")throw _;return-_.errno}}__munmap_js.sig="ippiiij";var timers={},_emscripten_get_now=()=>performance.now();_emscripten_get_now.sig="d";var __setitimer_js=(t,r)=>{if(timers[t]&&(clearTimeout(timers[t].id),delete timers[t]),!r)return 0;var n=setTimeout(()=>{assert(t in timers),delete timers[t],callUserCallback(()=>__emscripten_timeout(t,_emscripten_get_now()))},r);return timers[t]={id:n,timeout_ms:r},0};__setitimer_js.sig="iid";var __timegm_js=function(t){var r=(()=>{var n=Date.UTC(HEAP32[t+20>>2]+1900,HEAP32[t+16>>2],HEAP32[t+12>>2],HEAP32[t+8>>2],HEAP32[t+4>>2],HEAP32[t>>2],0),a=new Date(n);HEAP32[t+24>>2]=a.getUTCDay();var o=Date.UTC(a.getUTCFullYear(),0,1,0,0,0,0),l=(a.getTime()-o)/(1e3*60*60*24)|0;return HEAP32[t+28>>2]=l,a.getTime()/1e3})();return BigInt(r)};__timegm_js.sig="jp";var __tzset_js=(t,r,n,a)=>{var o=new Date().getFullYear(),l=new Date(o,0,1),c=new Date(o,6,1),_=l.getTimezoneOffset(),u=c.getTimezoneOffset(),p=Math.max(_,u);HEAPU32[t>>2]=p*60,HEAP32[r>>2]=+(_!=u);var d=g=>{var E=g>=0?"-":"+",x=Math.abs(g),v=String(Math.floor(x/60)).padStart(2,"0"),h=String(x%60).padStart(2,"0");return`UTC${E}${v}${h}`},m=d(_),f=d(u);assert(m),assert(f),assert(lengthBytesUTF8(m)<=16,`timezone name truncated to fit in TZNAME_MAX (${m})`),assert(lengthBytesUTF8(f)<=16,`timezone name truncated to fit in TZNAME_MAX (${f})`),u<_?(stringToUTF8(m,n,17),stringToUTF8(f,a,17)):(stringToUTF8(m,a,17),stringToUTF8(f,n,17))};__tzset_js.sig="vpppp";var _emscripten_set_main_loop_timing=(t,r)=>{if(MainLoop.timingMode=t,MainLoop.timingValue=r,!MainLoop.func)return err("emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up."),1;if(MainLoop.running||(MainLoop.running=!0),t==0)MainLoop.scheduler=function(){var c=Math.max(0,MainLoop.tickStartTime+r-_emscripten_get_now())|0;setTimeout(MainLoop.runner,c)},MainLoop.method="timeout";else if(t==1)MainLoop.scheduler=function(){MainLoop.requestAnimationFrame(MainLoop.runner)},MainLoop.method="rAF";else if(t==2){if(!MainLoop.setImmediate)if(globalThis.setImmediate)MainLoop.setImmediate=setImmediate;else{var n=[],a="setimmediate",o=l=>{(l.data===a||l.data.target===a)&&(l.stopPropagation(),n.shift()())};addEventListener("message",o,!0),MainLoop.setImmediate=l=>{n.push(l),ENVIRONMENT_IS_WORKER?(Module.setImmediates??=[],Module.setImmediates.push(l),postMessage({target:a})):postMessage(a,"*")}}MainLoop.scheduler=function(){MainLoop.setImmediate(MainLoop.runner)},MainLoop.method="immediate"}return 0};_emscripten_set_main_loop_timing.sig="iii";var setMainLoop=(t,r,n,a,o)=>{assert(!MainLoop.func,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."),MainLoop.func=t,MainLoop.arg=a;var l=MainLoop.currentlyRunningMainloop;function c(){return l<MainLoop.currentlyRunningMainloop?(maybeExit(),!1):!0}if(MainLoop.running=!1,MainLoop.runner=function(){if(!ABORT){if(MainLoop.queue.length>0){var u=MainLoop.queue.shift();if(u.func(u.arg),MainLoop.remainingBlockers){var p=MainLoop.remainingBlockers,d=p%1==0?p-1:Math.floor(p);u.counted?MainLoop.remainingBlockers=d:(d=d+.5,MainLoop.remainingBlockers=(8*p+d)/9)}if(MainLoop.updateStatus(),!c())return;setTimeout(MainLoop.runner,0);return}if(c()){if(MainLoop.currentFrameNumber=MainLoop.currentFrameNumber+1|0,MainLoop.timingMode==1&&MainLoop.timingValue>1&&MainLoop.currentFrameNumber%MainLoop.timingValue!=0){MainLoop.scheduler();return}else MainLoop.timingMode==0&&(MainLoop.tickStartTime=_emscripten_get_now());MainLoop.method==="timeout"&&Module.ctx&&(warnOnce("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"),MainLoop.method=""),MainLoop.runIter(t),c()&&MainLoop.scheduler()}}},o||(r>0?_emscripten_set_main_loop_timing(0,1e3/r):_emscripten_set_main_loop_timing(1,1),MainLoop.scheduler()),n)throw"unwind"},MainLoop={running:!1,scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],preMainLoop:[],postMainLoop:[],pause(){MainLoop.scheduler=null,MainLoop.currentlyRunningMainloop++},resume(){MainLoop.currentlyRunningMainloop++;var t=MainLoop.timingMode,r=MainLoop.timingValue,n=MainLoop.func;MainLoop.func=null,setMainLoop(n,0,!1,MainLoop.arg,!0),_emscripten_set_main_loop_timing(t,r),MainLoop.scheduler()},updateStatus(){if(Module.setStatus){var t=Module.statusMessage||"Please wait...",r=MainLoop.remainingBlockers??0,n=MainLoop.expectedBlockers??0;r?r<n?Module.setStatus("{message} ({expected - remaining}/{expected})"):Module.setStatus(t):Module.setStatus("")}},init(){Module.preMainLoop&&MainLoop.preMainLoop.push(Module.preMainLoop),Module.postMainLoop&&MainLoop.postMainLoop.push(Module.postMainLoop)},runIter(t){if(!ABORT){for(var r of MainLoop.preMainLoop)if(r()===!1)return;callUserCallback(t);for(var n of MainLoop.postMainLoop)n();checkStackCookie()}},nextRAF:0,fakeRequestAnimationFrame(t){var r=Date.now();if(MainLoop.nextRAF===0)MainLoop.nextRAF=r+1e3/60;else for(;r+2>=MainLoop.nextRAF;)MainLoop.nextRAF+=1e3/60;var n=Math.max(MainLoop.nextRAF-r,0);setTimeout(t,n)},requestAnimationFrame(t){globalThis.requestAnimationFrame?requestAnimationFrame(t):MainLoop.fakeRequestAnimationFrame(t)}},AL={QUEUE_INTERVAL:25,QUEUE_LOOKAHEAD:.1,DEVICE_NAME:"Emscripten OpenAL",CAPTURE_DEVICE_NAME:"Emscripten OpenAL capture",ALC_EXTENSIONS:{ALC_EXT_capture:!0,ALC_SOFT_pause_device:!0,ALC_SOFT_HRTF:!0},AL_EXTENSIONS:{AL_EXT_float32:!0,AL_SOFT_loop_points:!0,AL_SOFT_source_length:!0,AL_EXT_source_distance_model:!0,AL_SOFT_source_spatialize:!0},_alcErr:0,alcErr:0,deviceRefCounts:{},alcStringCache:{},paused:!1,stringCache:{},contexts:{},currentCtx:null,buffers:{0:{id:0,refCount:0,audioBuf:null,frequency:0,bytesPerSample:2,channels:1,length:0}},paramArray:[],_nextId:1,newId:()=>AL.freeIds.length>0?AL.freeIds.pop():AL._nextId++,freeIds:[],scheduleContextAudio:t=>{if(!(MainLoop.timingMode===1&&document.visibilityState!="visible"))for(var r in t.sources)AL.scheduleSourceAudio(t.sources[r])},scheduleSourceAudio:(t,r)=>{if(!(MainLoop.timingMode===1&&document.visibilityState!="visible")&&t.state===4114){for(var n=AL.updateSourceTime(t),a=t.bufStartTime,o=t.bufOffset,l=t.bufsProcessed,c=0;c<t.audioQueue.length;c++){var _=t.audioQueue[c];a=_._startTime+_._duration,o=0,l+=_._skipCount+1}r||(r=AL.QUEUE_LOOKAHEAD);for(var u=n+r,p=0;a<u;){if(l>=t.bufQueue.length)if(t.looping)l%=t.bufQueue.length;else break;var d=t.bufQueue[l%t.bufQueue.length];if(d.length===0){if(p++,p===t.bufQueue.length)break}else{var _=t.context.audioCtx.createBufferSource();_.buffer=d.audioBuf,_.playbackRate.value=t.playbackRate,(d.audioBuf._loopStart||d.audioBuf._loopEnd)&&(_.loopStart=d.audioBuf._loopStart,_.loopEnd=d.audioBuf._loopEnd);var m=0;t.type===4136&&t.looping?(m=Number.POSITIVE_INFINITY,_.loop=!0,d.audioBuf._loopStart&&(_.loopStart=d.audioBuf._loopStart),d.audioBuf._loopEnd&&(_.loopEnd=d.audioBuf._loopEnd)):m=(d.audioBuf.duration-o)/t.playbackRate,_._startOffset=o,_._duration=m,_._skipCount=p,p=0,_.connect(t.gain),typeof _.start<"u"?(a=Math.max(a,t.context.audioCtx.currentTime),_.start(a,o)):typeof _.noteOn<"u"&&(a=Math.max(a,t.context.audioCtx.currentTime),_.noteOn(a)),_._startTime=a,t.audioQueue.push(_),a+=m}o=0,l++}}},updateSourceTime:t=>{var r=t.context.audioCtx.currentTime;if(t.state!==4114)return r;isFinite(t.bufStartTime)||(t.bufStartTime=r-t.bufOffset/t.playbackRate,t.bufOffset=0);for(var n=0;t.audioQueue.length;){var a=t.audioQueue[0];if(t.bufsProcessed+=a._skipCount,n=a._startTime+a._duration,r<n)break;t.audioQueue.shift(),t.bufStartTime=n,t.bufOffset=0,t.bufsProcessed++}if(t.bufsProcessed>=t.bufQueue.length&&!t.looping)AL.setSourceState(t,4116);else if(t.type===4136&&t.looping){var o=t.bufQueue[0];if(o.length===0)t.bufOffset=0;else{var l=(r-t.bufStartTime)*t.playbackRate,c=o.audioBuf._loopStart||0,_=o.audioBuf._loopEnd||o.audioBuf.duration;_<=c&&(_=o.audioBuf.duration),l<_?t.bufOffset=l:t.bufOffset=c+(l-c)%(_-c)}}else if(t.audioQueue[0])t.bufOffset=(r-t.audioQueue[0]._startTime)*t.playbackRate;else{if(t.type!==4136&&t.looping){var u=AL.sourceDuration(t)/t.playbackRate;u>0&&(t.bufStartTime+=Math.floor((r-t.bufStartTime)/u)*u)}for(var p=0;p<t.bufQueue.length;p++){if(t.bufsProcessed>=t.bufQueue.length)if(t.looping)t.bufsProcessed%=t.bufQueue.length;else{AL.setSourceState(t,4116);break}var o=t.bufQueue[t.bufsProcessed];if(o.length>0){if(n=t.bufStartTime+o.audioBuf.duration/t.playbackRate,r<n){t.bufOffset=(r-t.bufStartTime)*t.playbackRate;break}t.bufStartTime=n}t.bufOffset=0,t.bufsProcessed++}}return r},cancelPendingSourceAudio:t=>{AL.updateSourceTime(t);for(var r=1;r<t.audioQueue.length;r++){var n=t.audioQueue[r];n.stop()}t.audioQueue.length>1&&(t.audioQueue.length=1)},stopSourceAudio:t=>{for(var r=0;r<t.audioQueue.length;r++)t.audioQueue[r].stop();t.audioQueue.length=0},setSourceState:(t,r)=>{r===4114?((t.state===4114||t.state==4116)&&(t.bufsProcessed=0,t.bufOffset=0),AL.stopSourceAudio(t),t.state=4114,t.bufStartTime=Number.NEGATIVE_INFINITY,AL.scheduleSourceAudio(t)):r===4115?t.state===4114&&(AL.updateSourceTime(t),AL.stopSourceAudio(t),t.state=4115):r===4116?t.state!==4113&&(t.state=4116,t.bufsProcessed=t.bufQueue.length,t.bufStartTime=Number.NEGATIVE_INFINITY,t.bufOffset=0,AL.stopSourceAudio(t)):r===4113&&t.state!==4113&&(t.state=4113,t.bufsProcessed=0,t.bufStartTime=Number.NEGATIVE_INFINITY,t.bufOffset=0,AL.stopSourceAudio(t))},initSourcePanner:t=>{if(t.type!==4144){for(var r=AL.buffers[0],n=0;n<t.bufQueue.length;n++)if(t.bufQueue[n].id!==0){r=t.bufQueue[n];break}if(t.spatialize===1||t.spatialize===2&&r.channels===1){if(t.panner)return;t.panner=t.context.audioCtx.createPanner(),AL.updateSourceGlobal(t),AL.updateSourceSpace(t),t.panner.connect(t.context.gain),t.gain.disconnect(),t.gain.connect(t.panner)}else{if(!t.panner)return;t.panner.disconnect(),t.gain.disconnect(),t.gain.connect(t.context.gain),t.panner=null}}},updateContextGlobal:t=>{for(var r in t.sources)AL.updateSourceGlobal(t.sources[r])},updateSourceGlobal:t=>{var r=t.panner;if(r){r.refDistance=t.refDistance,r.maxDistance=t.maxDistance,r.rolloffFactor=t.rolloffFactor,r.panningModel=t.context.hrtf?"HRTF":"equalpower";var n=t.context.sourceDistanceModel?t.distanceModel:t.context.distanceModel;switch(n){case 0:r.distanceModel="inverse",r.refDistance=340282e33;break;case 53249:case 53250:r.distanceModel="inverse";break;case 53251:case 53252:r.distanceModel="linear";break;case 53253:case 53254:r.distanceModel="exponential";break}}},updateListenerSpace:t=>{var r=t.audioCtx.listener;r.positionX?(r.positionX.value=t.listener.position[0],r.positionY.value=t.listener.position[1],r.positionZ.value=t.listener.position[2]):r.setPosition(t.listener.position[0],t.listener.position[1],t.listener.position[2]),r.forwardX?(r.forwardX.value=t.listener.direction[0],r.forwardY.value=t.listener.direction[1],r.forwardZ.value=t.listener.direction[2],r.upX.value=t.listener.up[0],r.upY.value=t.listener.up[1],r.upZ.value=t.listener.up[2]):r.setOrientation(t.listener.direction[0],t.listener.direction[1],t.listener.direction[2],t.listener.up[0],t.listener.up[1],t.listener.up[2]);for(var n in t.sources)AL.updateSourceSpace(t.sources[n])},updateSourceSpace:t=>{if(t.panner){var r=t.panner,n=t.position[0],a=t.position[1],o=t.position[2],l=t.direction[0],c=t.direction[1],_=t.direction[2],u=t.context.listener,p=u.position[0],d=u.position[1],m=u.position[2];if(t.relative){var f=-u.direction[0],g=-u.direction[1],E=-u.direction[2],x=u.up[0],v=u.up[1],h=u.up[2],b=(X,Y,oe)=>{var fe=Math.sqrt(X*X+Y*Y+oe*oe);return fe<Number.EPSILON?0:1/fe},S=b(f,g,E);f*=S,g*=S,E*=S,S=b(x,v,h),x*=S,v*=S,h*=S;var y=v*E-h*g,T=h*f-x*E,A=x*g-v*f;S=b(y,T,A),y*=S,T*=S,A*=S,x=g*A-E*T,v=E*y-f*A,h=f*T-g*y;var w=l,C=c,L=_;l=w*y+C*x+L*f,c=w*T+C*v+L*g,_=w*A+C*h+L*E,w=n,C=a,L=o,n=w*y+C*x+L*f,a=w*T+C*v+L*g,o=w*A+C*h+L*E,n+=p,a+=d,o+=m}r.positionX?(n!=r.positionX.value&&(r.positionX.value=n),a!=r.positionY.value&&(r.positionY.value=a),o!=r.positionZ.value&&(r.positionZ.value=o)):r.setPosition(n,a,o),r.orientationX?(l!=r.orientationX.value&&(r.orientationX.value=l),c!=r.orientationY.value&&(r.orientationY.value=c),_!=r.orientationZ.value&&(r.orientationZ.value=_)):r.setOrientation(l,c,_);var k=t.dopplerShift,P=t.velocity[0],I=t.velocity[1],F=t.velocity[2],H=u.velocity[0],O=u.velocity[1],R=u.velocity[2];if(n===p&&a===d&&o===m||P===H&&I===O&&F===R)t.dopplerShift=1;else{var M=t.context.speedOfSound,G=t.context.dopplerFactor,U=p-n,j=d-a,V=m-o,$=Math.sqrt(U*U+j*j+V*V),Q=(U*H+j*O+V*R)/$,re=(U*P+j*I+V*F)/$;Q=Math.min(Q,M/G),re=Math.min(re,M/G),t.dopplerShift=(M-G*Q)/(M-G*re)}t.dopplerShift!==k&&AL.updateSourceRate(t)}},updateSourceRate:t=>{if(t.state===4114){AL.cancelPendingSourceAudio(t);var r=t.audioQueue[0];if(!r)return;var n;t.type===4136&&t.looping?n=Number.POSITIVE_INFINITY:n=(r.buffer.duration-r._startOffset)/t.playbackRate,r._duration=n,r.playbackRate.value=t.playbackRate,AL.scheduleSourceAudio(t)}},sourceDuration:t=>{for(var r=0,n=0;n<t.bufQueue.length;n++){var a=t.bufQueue[n].audioBuf;r+=a?a.duration:0}return r},sourceTell:t=>{AL.updateSourceTime(t);for(var r=0,n=0;n<t.bufsProcessed;n++)t.bufQueue[n].audioBuf&&(r+=t.bufQueue[n].audioBuf.duration);return r+=t.bufOffset,r},sourceSeek:(t,r)=>{var n=t.state==4114;if(n&&AL.setSourceState(t,4113),t.bufQueue[t.bufsProcessed].audioBuf!==null){for(t.bufsProcessed=0;r>t.bufQueue[t.bufsProcessed].audioBuf.duration;)r-=t.bufQueue[t.bufsProcessed].audioBuf.duration,t.bufsProcessed++;t.bufOffset=r}n&&AL.setSourceState(t,4114)},getGlobalParam:(t,r)=>{if(!AL.currentCtx)return null;switch(r){case 49152:return AL.currentCtx.dopplerFactor;case 49155:return AL.currentCtx.speedOfSound;case 53248:return AL.currentCtx.distanceModel;default:return AL.currentCtx.err=40962,null}},setGlobalParam:(t,r,n)=>{if(AL.currentCtx)switch(r){case 49152:if(!Number.isFinite(n)||n<0){AL.currentCtx.err=40963;return}AL.currentCtx.dopplerFactor=n,AL.updateListenerSpace(AL.currentCtx);break;case 49155:if(!Number.isFinite(n)||n<=0){AL.currentCtx.err=40963;return}AL.currentCtx.speedOfSound=n,AL.updateListenerSpace(AL.currentCtx);break;case 53248:switch(n){case 0:case 53249:case 53250:case 53251:case 53252:case 53253:case 53254:AL.currentCtx.distanceModel=n,AL.updateContextGlobal(AL.currentCtx);break;default:AL.currentCtx.err=40963;return}break;default:AL.currentCtx.err=40962;return}},getListenerParam:(t,r)=>{if(!AL.currentCtx)return null;switch(r){case 4100:return AL.currentCtx.listener.position;case 4102:return AL.currentCtx.listener.velocity;case 4111:return AL.currentCtx.listener.direction.concat(AL.currentCtx.listener.up);case 4106:return AL.currentCtx.gain.gain.value;default:return AL.currentCtx.err=40962,null}},setListenerParam:(t,r,n)=>{if(AL.currentCtx){if(n===null){AL.currentCtx.err=40962;return}var a=AL.currentCtx.listener;switch(r){case 4100:if(!Number.isFinite(n[0])||!Number.isFinite(n[1])||!Number.isFinite(n[2])){AL.currentCtx.err=40963;return}a.position[0]=n[0],a.position[1]=n[1],a.position[2]=n[2],AL.updateListenerSpace(AL.currentCtx);break;case 4102:if(!Number.isFinite(n[0])||!Number.isFinite(n[1])||!Number.isFinite(n[2])){AL.currentCtx.err=40963;return}a.velocity[0]=n[0],a.velocity[1]=n[1],a.velocity[2]=n[2],AL.updateListenerSpace(AL.currentCtx);break;case 4106:if(!Number.isFinite(n)||n<0){AL.currentCtx.err=40963;return}AL.currentCtx.gain.gain.value=n;break;case 4111:if(!Number.isFinite(n[0])||!Number.isFinite(n[1])||!Number.isFinite(n[2])||!Number.isFinite(n[3])||!Number.isFinite(n[4])||!Number.isFinite(n[5])){AL.currentCtx.err=40963;return}a.direction[0]=n[0],a.direction[1]=n[1],a.direction[2]=n[2],a.up[0]=n[3],a.up[1]=n[4],a.up[2]=n[5],AL.updateListenerSpace(AL.currentCtx);break;default:AL.currentCtx.err=40962;return}}},getBufferParam:(t,r,n)=>{if(AL.currentCtx){var a=AL.buffers[r];if(!a||r===0){AL.currentCtx.err=40961;return}switch(n){case 8193:return a.frequency;case 8194:return a.bytesPerSample*8;case 8195:return a.channels;case 8196:return a.length*a.bytesPerSample*a.channels;case 8213:return a.length===0?[0,0]:[(a.audioBuf._loopStart||0)*a.frequency,(a.audioBuf._loopEnd||a.length)*a.frequency];default:return AL.currentCtx.err=40962,null}}},setBufferParam:(t,r,n,a)=>{if(AL.currentCtx){var o=AL.buffers[r];if(!o||r===0){AL.currentCtx.err=40961;return}if(a===null){AL.currentCtx.err=40962;return}switch(n){case 8196:if(a!==0){AL.currentCtx.err=40963;return}break;case 8213:if(a[0]<0||a[0]>o.length||a[1]<0||a[1]>o.Length||a[0]>=a[1]){AL.currentCtx.err=40963;return}if(o.refCount>0){AL.currentCtx.err=40964;return}o.audioBuf&&(o.audioBuf._loopStart=a[0]/o.frequency,o.audioBuf._loopEnd=a[1]/o.frequency);break;default:AL.currentCtx.err=40962;return}}},getSourceParam:(t,r,n)=>{if(!AL.currentCtx)return null;var a=AL.currentCtx.sources[r];if(!a)return AL.currentCtx.err=40961,null;switch(n){case 514:return a.relative;case 4097:return a.coneInnerAngle;case 4098:return a.coneOuterAngle;case 4099:return a.pitch;case 4100:return a.position;case 4101:return a.direction;case 4102:return a.velocity;case 4103:return a.looping;case 4105:return a.type===4136?a.bufQueue[0].id:0;case 4106:return a.gain.gain.value;case 4109:return a.minGain;case 4110:return a.maxGain;case 4112:return a.state;case 4117:return a.bufQueue.length===1&&a.bufQueue[0].id===0?0:a.bufQueue.length;case 4118:return a.bufQueue.length===1&&a.bufQueue[0].id===0||a.looping?0:a.bufsProcessed;case 4128:return a.refDistance;case 4129:return a.rolloffFactor;case 4130:return a.coneOuterGain;case 4131:return a.maxDistance;case 4132:return AL.sourceTell(a);case 4133:var o=AL.sourceTell(a);return o>0&&(o*=a.bufQueue[0].frequency),o;case 4134:var o=AL.sourceTell(a);return o>0&&(o*=a.bufQueue[0].frequency*a.bufQueue[0].bytesPerSample),o;case 4135:return a.type;case 4628:return a.spatialize;case 8201:for(var _=0,l=0,c=0;c<a.bufQueue.length;c++)_+=a.bufQueue[c].length,a.bufQueue[c].id!==0&&(l=a.bufQueue[c].bytesPerSample*a.bufQueue[c].channels);return _*l;case 8202:for(var _=0,c=0;c<a.bufQueue.length;c++)_+=a.bufQueue[c].length;return _;case 8203:return AL.sourceDuration(a);case 53248:return a.distanceModel;default:return AL.currentCtx.err=40962,null}},setSourceParam:(t,r,n,a)=>{if(AL.currentCtx){var o=AL.currentCtx.sources[r];if(!o){AL.currentCtx.err=40961;return}if(a===null){AL.currentCtx.err=40962;return}switch(n){case 514:if(a===1)o.relative=!0,AL.updateSourceSpace(o);else if(a===0)o.relative=!1,AL.updateSourceSpace(o);else{AL.currentCtx.err=40963;return}break;case 4097:if(!Number.isFinite(a)){AL.currentCtx.err=40963;return}o.coneInnerAngle=a,o.panner&&(o.panner.coneInnerAngle=a%360);break;case 4098:if(!Number.isFinite(a)){AL.currentCtx.err=40963;return}o.coneOuterAngle=a,o.panner&&(o.panner.coneOuterAngle=a%360);break;case 4099:if(!Number.isFinite(a)||a<=0){AL.currentCtx.err=40963;return}if(o.pitch===a)break;o.pitch=a,AL.updateSourceRate(o);break;case 4100:if(!Number.isFinite(a[0])||!Number.isFinite(a[1])||!Number.isFinite(a[2])){AL.currentCtx.err=40963;return}o.position[0]=a[0],o.position[1]=a[1],o.position[2]=a[2],AL.updateSourceSpace(o);break;case 4101:if(!Number.isFinite(a[0])||!Number.isFinite(a[1])||!Number.isFinite(a[2])){AL.currentCtx.err=40963;return}o.direction[0]=a[0],o.direction[1]=a[1],o.direction[2]=a[2],AL.updateSourceSpace(o);break;case 4102:if(!Number.isFinite(a[0])||!Number.isFinite(a[1])||!Number.isFinite(a[2])){AL.currentCtx.err=40963;return}o.velocity[0]=a[0],o.velocity[1]=a[1],o.velocity[2]=a[2],AL.updateSourceSpace(o);break;case 4103:if(a===1){if(o.looping=!0,AL.updateSourceTime(o),o.type===4136&&o.audioQueue.length>0){var l=o.audioQueue[0];l.loop=!0,l._duration=Number.POSITIVE_INFINITY}}else if(a===0){o.looping=!1;var c=AL.updateSourceTime(o);if(o.type===4136&&o.audioQueue.length>0){var l=o.audioQueue[0];l.loop=!1,l._duration=o.bufQueue[0].audioBuf.duration/o.playbackRate,l._startTime=c-o.bufOffset/o.playbackRate}}else{AL.currentCtx.err=40963;return}break;case 4105:if(o.state===4114||o.state===4115){AL.currentCtx.err=40964;return}if(a===0){for(var _ in o.bufQueue)o.bufQueue[_].refCount--;o.bufQueue.length=1,o.bufQueue[0]=AL.buffers[0],o.bufsProcessed=0,o.type=4144}else{var u=AL.buffers[a];if(!u){AL.currentCtx.err=40963;return}for(var _ in o.bufQueue)o.bufQueue[_].refCount--;o.bufQueue.length=0,u.refCount++,o.bufQueue=[u],o.bufsProcessed=0,o.type=4136}AL.initSourcePanner(o),AL.scheduleSourceAudio(o);break;case 4106:if(!Number.isFinite(a)||a<0){AL.currentCtx.err=40963;return}o.gain.gain.value=a;break;case 4109:if(!Number.isFinite(a)||a<0||a>Math.min(o.maxGain,1)){AL.currentCtx.err=40963;return}o.minGain=a;break;case 4110:if(!Number.isFinite(a)||a<Math.max(0,o.minGain)||a>1){AL.currentCtx.err=40963;return}o.maxGain=a;break;case 4128:if(!Number.isFinite(a)||a<0){AL.currentCtx.err=40963;return}o.refDistance=a,o.panner&&(o.panner.refDistance=a);break;case 4129:if(!Number.isFinite(a)||a<0){AL.currentCtx.err=40963;return}o.rolloffFactor=a,o.panner&&(o.panner.rolloffFactor=a);break;case 4130:if(!Number.isFinite(a)||a<0||a>1){AL.currentCtx.err=40963;return}o.coneOuterGain=a,o.panner&&(o.panner.coneOuterGain=a);break;case 4131:if(!Number.isFinite(a)||a<0){AL.currentCtx.err=40963;return}o.maxDistance=a,o.panner&&(o.panner.maxDistance=a);break;case 4132:if(a<0||a>AL.sourceDuration(o)){AL.currentCtx.err=40963;return}AL.sourceSeek(o,a);break;case 4133:var m=AL.sourceDuration(o);if(m>0){var p;for(var d in o.bufQueue)if(d){p=o.bufQueue[d].frequency;break}a/=p}if(a<0||a>m){AL.currentCtx.err=40963;return}AL.sourceSeek(o,a);break;case 4134:var m=AL.sourceDuration(o);if(m>0){var f;for(var d in o.bufQueue)if(d){var u=o.bufQueue[d];f=u.frequency*u.bytesPerSample*u.channels;break}a/=f}if(a<0||a>m){AL.currentCtx.err=40963;return}AL.sourceSeek(o,a);break;case 4628:if(a!==0&&a!==1&&a!==2){AL.currentCtx.err=40963;return}o.spatialize=a,AL.initSourcePanner(o);break;case 8201:case 8202:case 8203:AL.currentCtx.err=40964;break;case 53248:switch(a){case 0:case 53249:case 53250:case 53251:case 53252:case 53253:case 53254:o.distanceModel=a,AL.currentCtx.sourceDistanceModel&&AL.updateContextGlobal(AL.currentCtx);break;default:AL.currentCtx.err=40963;return}break;default:AL.currentCtx.err=40962;return}}},captures:{},sharedCaptureAudioCtx:null,requireValidCaptureDevice:(t,r)=>{if(t===0)return AL.alcErr=40961,null;var n=AL.captures[t];if(!n)return AL.alcErr=40961,null;var a=n.mediaStreamError;return a?(AL.alcErr=40961,null):n}},_alBuffer3f=(t,r,n,a,o)=>{AL.setBufferParam("alBuffer3f",t,r,null)};_alBuffer3f.sig="viifff";var _alBuffer3i=(t,r,n,a,o)=>{AL.setBufferParam("alBuffer3i",t,r,null)};_alBuffer3i.sig="viiiii";var _alBufferData=(t,r,n,a,o)=>{if(AL.currentCtx){var l=AL.buffers[t];if(!l){AL.currentCtx.err=40963;return}if(o<=0){AL.currentCtx.err=40963;return}var c=null;try{switch(r){case 4352:if(a>0){c=AL.currentCtx.audioCtx.createBuffer(1,a,o);for(var _=c.getChannelData(0),u=0;u<a;++u)_[u]=HEAPU8[n++]*.0078125-1}l.bytesPerSample=1,l.channels=1,l.length=a;break;case 4353:if(a>0){c=AL.currentCtx.audioCtx.createBuffer(1,a>>1,o);var _=c.getChannelData(0);n>>=1;for(var u=0;u<a>>1;++u)_[u]=HEAP16[n++]*30517578125e-15}l.bytesPerSample=2,l.channels=1,l.length=a>>1;break;case 4354:if(a>0){c=AL.currentCtx.audioCtx.createBuffer(2,a>>1,o);for(var _=c.getChannelData(0),p=c.getChannelData(1),u=0;u<a>>1;++u)_[u]=HEAPU8[n++]*.0078125-1,p[u]=HEAPU8[n++]*.0078125-1}l.bytesPerSample=1,l.channels=2,l.length=a>>1;break;case 4355:if(a>0){c=AL.currentCtx.audioCtx.createBuffer(2,a>>2,o);var _=c.getChannelData(0),p=c.getChannelData(1);n>>=1;for(var u=0;u<a>>2;++u)_[u]=HEAP16[n++]*30517578125e-15,p[u]=HEAP16[n++]*30517578125e-15}l.bytesPerSample=2,l.channels=2,l.length=a>>2;break;case 65552:if(a>0){c=AL.currentCtx.audioCtx.createBuffer(1,a>>2,o);var _=c.getChannelData(0);n>>=2;for(var u=0;u<a>>2;++u)_[u]=HEAPF32[n++]}l.bytesPerSample=4,l.channels=1,l.length=a>>2;break;case 65553:if(a>0){c=AL.currentCtx.audioCtx.createBuffer(2,a>>3,o);var _=c.getChannelData(0),p=c.getChannelData(1);n>>=2;for(var u=0;u<a>>3;++u)_[u]=HEAPF32[n++],p[u]=HEAPF32[n++]}l.bytesPerSample=4,l.channels=2,l.length=a>>3;break;default:AL.currentCtx.err=40963;return}l.frequency=o,l.audioBuf=c}catch{AL.currentCtx.err=40963;return}}};_alBufferData.sig="viipii";var _alBufferf=(t,r,n)=>{AL.setBufferParam("alBufferf",t,r,null)};_alBufferf.sig="viif";var _alBufferfv=(t,r,n)=>{if(AL.currentCtx){if(!n){AL.currentCtx.err=40963;return}AL.setBufferParam("alBufferfv",t,r,null)}};_alBufferfv.sig="viip";var _alBufferi=(t,r,n)=>{AL.setBufferParam("alBufferi",t,r,null)};_alBufferi.sig="viii";var _alBufferiv=(t,r,n)=>{if(AL.currentCtx){if(!n){AL.currentCtx.err=40963;return}switch(r){case 8213:AL.paramArray[0]=HEAP32[n>>2],AL.paramArray[1]=HEAP32[n+4>>2],AL.setBufferParam("alBufferiv",t,r,AL.paramArray);break;default:AL.setBufferParam("alBufferiv",t,r,null);break}}};_alBufferiv.sig="viip";var _alDeleteBuffers=(t,r)=>{if(AL.currentCtx){for(var n=0;n<t;++n){var a=HEAP32[r+n*4>>2];if(a!==0){if(!AL.buffers[a]){AL.currentCtx.err=40961;return}if(AL.buffers[a].refCount){AL.currentCtx.err=40964;return}}}for(var n=0;n<t;++n){var a=HEAP32[r+n*4>>2];a!==0&&(AL.deviceRefCounts[AL.buffers[a].deviceId]--,delete AL.buffers[a],AL.freeIds.push(a))}}};_alDeleteBuffers.sig="vip";var _alSourcei=(t,r,n)=>{switch(r){case 514:case 4097:case 4098:case 4103:case 4105:case 4128:case 4129:case 4131:case 4132:case 4133:case 4134:case 4628:case 8201:case 8202:case 53248:AL.setSourceParam("alSourcei",t,r,n);break;default:AL.setSourceParam("alSourcei",t,r,null);break}};_alSourcei.sig="viii";var _alDeleteSources=(t,r)=>{if(AL.currentCtx){for(var n=0;n<t;++n){var a=HEAP32[r+n*4>>2];if(!AL.currentCtx.sources[a]){AL.currentCtx.err=40961;return}}for(var n=0;n<t;++n){var a=HEAP32[r+n*4>>2];AL.setSourceState(AL.currentCtx.sources[a],4116),_alSourcei(a,4105,0),delete AL.currentCtx.sources[a],AL.freeIds.push(a)}}};_alDeleteSources.sig="vip";var _alDisable=t=>{if(AL.currentCtx)switch(t){case 512:AL.currentCtx.sourceDistanceModel=!1,AL.updateContextGlobal(AL.currentCtx);break;default:AL.currentCtx.err=40962;return}};_alDisable.sig="vi";var _alDistanceModel=t=>{AL.setGlobalParam("alDistanceModel",53248,t)};_alDistanceModel.sig="vi";var _alDopplerFactor=t=>{AL.setGlobalParam("alDopplerFactor",49152,t)};_alDopplerFactor.sig="vf";var _alDopplerVelocity=t=>{if(warnOnce("alDopplerVelocity() is deprecated, and only kept for compatibility with OpenAL 1.0. Use alSpeedOfSound() instead."),!!AL.currentCtx&&t<=0){AL.currentCtx.err=40963;return}};_alDopplerVelocity.sig="vf";var _alEnable=t=>{if(AL.currentCtx)switch(t){case 512:AL.currentCtx.sourceDistanceModel=!0,AL.updateContextGlobal(AL.currentCtx);break;default:AL.currentCtx.err=40962;return}};_alEnable.sig="vi";var _alGenBuffers=(t,r)=>{if(AL.currentCtx)for(var n=0;n<t;++n){var a={deviceId:AL.currentCtx.deviceId,id:AL.newId(),refCount:0,audioBuf:null,frequency:0,bytesPerSample:2,channels:1,length:0};AL.deviceRefCounts[a.deviceId]++,AL.buffers[a.id]=a,HEAP32[r+n*4>>2]=a.id}};_alGenBuffers.sig="vip";var _alGenSources=(t,r)=>{if(AL.currentCtx)for(var n=0;n<t;++n){var a=AL.currentCtx.audioCtx.createGain();a.connect(AL.currentCtx.gain);var o={context:AL.currentCtx,id:AL.newId(),type:4144,state:4113,bufQueue:[AL.buffers[0]],audioQueue:[],looping:!1,pitch:1,dopplerShift:1,gain:a,minGain:0,maxGain:1,panner:null,bufsProcessed:0,bufStartTime:Number.NEGATIVE_INFINITY,bufOffset:0,relative:!1,refDistance:1,maxDistance:340282e33,rolloffFactor:1,position:[0,0,0],velocity:[0,0,0],direction:[0,0,0],coneOuterGain:0,coneInnerAngle:360,coneOuterAngle:360,distanceModel:53250,spatialize:2,get playbackRate(){return this.pitch*this.dopplerShift}};AL.currentCtx.sources[o.id]=o,HEAP32[r+n*4>>2]=o.id}};_alGenSources.sig="vip";var _alGetBoolean=t=>{var r=AL.getGlobalParam("alGetBoolean",t);if(r===null)return 0;switch(t){case 49152:case 49155:case 53248:return r!==0?1:0;default:return AL.currentCtx.err=40962,0}};_alGetBoolean.sig="ii";var _alGetBooleanv=(t,r)=>{var n=AL.getGlobalParam("alGetBooleanv",t);if(!(n===null||!r))switch(t){case 49152:case 49155:case 53248:HEAP8[r]=n;break;default:AL.currentCtx.err=40962;return}};_alGetBooleanv.sig="vip";var _alGetBuffer3f=(t,r,n,a,o)=>{var l=AL.getBufferParam("alGetBuffer3f",t,r);if(l!==null){if(!n||!a||!o){AL.currentCtx.err=40963;return}AL.currentCtx.err=40962}};_alGetBuffer3f.sig="viippp";var _alGetBuffer3i=(t,r,n,a,o)=>{var l=AL.getBufferParam("alGetBuffer3i",t,r);if(l!==null){if(!n||!a||!o){AL.currentCtx.err=40963;return}AL.currentCtx.err=40962}};_alGetBuffer3i.sig="viippp";var _alGetBufferf=(t,r,n)=>{var a=AL.getBufferParam("alGetBufferf",t,r);if(a!==null){if(!n){AL.currentCtx.err=40963;return}AL.currentCtx.err=40962}};_alGetBufferf.sig="viip";var _alGetBufferfv=(t,r,n)=>{var a=AL.getBufferParam("alGetBufferfv",t,r);if(a!==null){if(!n){AL.currentCtx.err=40963;return}AL.currentCtx.err=40962}};_alGetBufferfv.sig="viip";var _alGetBufferi=(t,r,n)=>{var a=AL.getBufferParam("alGetBufferi",t,r);if(a!==null){if(!n){AL.currentCtx.err=40963;return}switch(r){case 8193:case 8194:case 8195:case 8196:HEAP32[n>>2]=a;break;default:AL.currentCtx.err=40962;return}}};_alGetBufferi.sig="viip";var _alGetBufferiv=(t,r,n)=>{var a=AL.getBufferParam("alGetBufferiv",t,r);if(a!==null){if(!n){AL.currentCtx.err=40963;return}switch(r){case 8193:case 8194:case 8195:case 8196:HEAP32[n>>2]=a;break;case 8213:HEAP32[n>>2]=a[0],HEAP32[n+4>>2]=a[1];break;default:AL.currentCtx.err=40962;return}}};_alGetBufferiv.sig="viip";var _alGetDouble=t=>{var r=AL.getGlobalParam("alGetDouble",t);if(r===null)return 0;switch(t){case 49152:case 49155:case 53248:return r;default:return AL.currentCtx.err=40962,0}};_alGetDouble.sig="di";var _alGetDoublev=(t,r)=>{var n=AL.getGlobalParam("alGetDoublev",t);if(!(n===null||!r))switch(t){case 49152:case 49155:case 53248:HEAPF64[r>>3]=n;break;default:AL.currentCtx.err=40962;return}};_alGetDoublev.sig="vip";var _alGetEnumValue=t=>{if(!AL.currentCtx)return 0;if(!t)return AL.currentCtx.err=40963,0;var r=UTF8ToString(t);switch(r){case"AL_BITS":return 8194;case"AL_BUFFER":return 4105;case"AL_BUFFERS_PROCESSED":return 4118;case"AL_BUFFERS_QUEUED":return 4117;case"AL_BYTE_OFFSET":return 4134;case"AL_CHANNELS":return 8195;case"AL_CONE_INNER_ANGLE":return 4097;case"AL_CONE_OUTER_ANGLE":return 4098;case"AL_CONE_OUTER_GAIN":return 4130;case"AL_DIRECTION":return 4101;case"AL_DISTANCE_MODEL":return 53248;case"AL_DOPPLER_FACTOR":return 49152;case"AL_DOPPLER_VELOCITY":return 49153;case"AL_EXPONENT_DISTANCE":return 53253;case"AL_EXPONENT_DISTANCE_CLAMPED":return 53254;case"AL_EXTENSIONS":return 45060;case"AL_FORMAT_MONO16":return 4353;case"AL_FORMAT_MONO8":return 4352;case"AL_FORMAT_STEREO16":return 4355;case"AL_FORMAT_STEREO8":return 4354;case"AL_FREQUENCY":return 8193;case"AL_GAIN":return 4106;case"AL_INITIAL":return 4113;case"AL_INVALID":return-1;case"AL_ILLEGAL_ENUM":case"AL_INVALID_ENUM":return 40962;case"AL_INVALID_NAME":return 40961;case"AL_ILLEGAL_COMMAND":case"AL_INVALID_OPERATION":return 40964;case"AL_INVALID_VALUE":return 40963;case"AL_INVERSE_DISTANCE":return 53249;case"AL_INVERSE_DISTANCE_CLAMPED":return 53250;case"AL_LINEAR_DISTANCE":return 53251;case"AL_LINEAR_DISTANCE_CLAMPED":return 53252;case"AL_LOOPING":return 4103;case"AL_MAX_DISTANCE":return 4131;case"AL_MAX_GAIN":return 4110;case"AL_MIN_GAIN":return 4109;case"AL_NONE":return 0;case"AL_NO_ERROR":return 0;case"AL_ORIENTATION":return 4111;case"AL_OUT_OF_MEMORY":return 40965;case"AL_PAUSED":return 4115;case"AL_PENDING":return 8209;case"AL_PITCH":return 4099;case"AL_PLAYING":return 4114;case"AL_POSITION":return 4100;case"AL_PROCESSED":return 8210;case"AL_REFERENCE_DISTANCE":return 4128;case"AL_RENDERER":return 45059;case"AL_ROLLOFF_FACTOR":return 4129;case"AL_SAMPLE_OFFSET":return 4133;case"AL_SEC_OFFSET":return 4132;case"AL_SIZE":return 8196;case"AL_SOURCE_RELATIVE":return 514;case"AL_SOURCE_STATE":return 4112;case"AL_SOURCE_TYPE":return 4135;case"AL_SPEED_OF_SOUND":return 49155;case"AL_STATIC":return 4136;case"AL_STOPPED":return 4116;case"AL_STREAMING":return 4137;case"AL_UNDETERMINED":return 4144;case"AL_UNUSED":return 8208;case"AL_VELOCITY":return 4102;case"AL_VENDOR":return 45057;case"AL_VERSION":return 45058;case"AL_AUTO_SOFT":return 2;case"AL_SOURCE_DISTANCE_MODEL":return 512;case"AL_SOURCE_SPATIALIZE_SOFT":return 4628;case"AL_LOOP_POINTS_SOFT":return 8213;case"AL_BYTE_LENGTH_SOFT":return 8201;case"AL_SAMPLE_LENGTH_SOFT":return 8202;case"AL_SEC_LENGTH_SOFT":return 8203;case"AL_FORMAT_MONO_FLOAT32":return 65552;case"AL_FORMAT_STEREO_FLOAT32":return 65553;default:return AL.currentCtx.err=40963,0}};_alGetEnumValue.sig="ip";var _alGetError=()=>{if(!AL.currentCtx)return 40964;var t=AL.currentCtx.err;return AL.currentCtx.err=0,t};_alGetError.sig="i";var _alGetFloat=t=>{var r=AL.getGlobalParam("alGetFloat",t);if(r===null)return 0;switch(t){case 49152:case 49155:case 53248:return r;default:return 0}};_alGetFloat.sig="fi";var _alGetFloatv=(t,r)=>{var n=AL.getGlobalParam("alGetFloatv",t);if(!(n===null||!r))switch(t){case 49152:case 49155:case 53248:HEAPF32[r>>2]=n;break;default:AL.currentCtx.err=40962;return}};_alGetFloatv.sig="vip";var _alGetInteger=t=>{var r=AL.getGlobalParam("alGetInteger",t);if(r===null)return 0;switch(t){case 49152:case 49155:case 53248:return r;default:return AL.currentCtx.err=40962,0}};_alGetInteger.sig="ii";var _alGetIntegerv=(t,r)=>{var n=AL.getGlobalParam("alGetIntegerv",t);if(!(n===null||!r))switch(t){case 49152:case 49155:case 53248:HEAP32[r>>2]=n;break;default:AL.currentCtx.err=40962;return}};_alGetIntegerv.sig="vip";var _alGetListener3f=(t,r,n,a)=>{var o=AL.getListenerParam("alGetListener3f",t);if(o!==null){if(!r||!n||!a){AL.currentCtx.err=40963;return}switch(t){case 4100:case 4102:HEAPF32[r>>2]=o[0],HEAPF32[n>>2]=o[1],HEAPF32[a>>2]=o[2];break;default:AL.currentCtx.err=40962;return}}};_alGetListener3f.sig="vippp";var _alGetListener3i=(t,r,n,a)=>{var o=AL.getListenerParam("alGetListener3i",t);if(o!==null){if(!r||!n||!a){AL.currentCtx.err=40963;return}switch(t){case 4100:case 4102:HEAP32[r>>2]=o[0],HEAP32[n>>2]=o[1],HEAP32[a>>2]=o[2];break;default:AL.currentCtx.err=40962;return}}};_alGetListener3i.sig="vippp";var _alGetListenerf=(t,r)=>{var n=AL.getListenerParam("alGetListenerf",t);if(n!==null){if(!r){AL.currentCtx.err=40963;return}switch(t){case 4106:HEAPF32[r>>2]=n;break;default:AL.currentCtx.err=40962;return}}};_alGetListenerf.sig="vip";var _alGetListenerfv=(t,r)=>{var n=AL.getListenerParam("alGetListenerfv",t);if(n!==null){if(!r){AL.currentCtx.err=40963;return}switch(t){case 4100:case 4102:HEAPF32[r>>2]=n[0],HEAPF32[r+4>>2]=n[1],HEAPF32[r+8>>2]=n[2];break;case 4111:HEAPF32[r>>2]=n[0],HEAPF32[r+4>>2]=n[1],HEAPF32[r+8>>2]=n[2],HEAPF32[r+12>>2]=n[3],HEAPF32[r+16>>2]=n[4],HEAPF32[r+20>>2]=n[5];break;default:AL.currentCtx.err=40962;return}}};_alGetListenerfv.sig="vip";var _alGetListeneri=(t,r)=>{var n=AL.getListenerParam("alGetListeneri",t);if(n!==null){if(!r){AL.currentCtx.err=40963;return}AL.currentCtx.err=40962}};_alGetListeneri.sig="vip";var _alGetListeneriv=(t,r)=>{var n=AL.getListenerParam("alGetListeneriv",t);if(n!==null){if(!r){AL.currentCtx.err=40963;return}switch(t){case 4100:case 4102:HEAP32[r>>2]=n[0],HEAP32[r+4>>2]=n[1],HEAP32[r+8>>2]=n[2];break;case 4111:HEAP32[r>>2]=n[0],HEAP32[r+4>>2]=n[1],HEAP32[r+8>>2]=n[2],HEAP32[r+12>>2]=n[3],HEAP32[r+16>>2]=n[4],HEAP32[r+20>>2]=n[5];break;default:AL.currentCtx.err=40962;return}}};_alGetListeneriv.sig="vip";var _alGetSource3f=(t,r,n,a,o)=>{var l=AL.getSourceParam("alGetSource3f",t,r);if(l!==null){if(!n||!a||!o){AL.currentCtx.err=40963;return}switch(r){case 4100:case 4101:case 4102:HEAPF32[n>>2]=l[0],HEAPF32[a>>2]=l[1],HEAPF32[o>>2]=l[2];break;default:AL.currentCtx.err=40962;return}}};_alGetSource3f.sig="viippp";var _alGetSource3i=(t,r,n,a,o)=>{var l=AL.getSourceParam("alGetSource3i",t,r);if(l!==null){if(!n||!a||!o){AL.currentCtx.err=40963;return}switch(r){case 4100:case 4101:case 4102:HEAP32[n>>2]=l[0],HEAP32[a>>2]=l[1],HEAP32[o>>2]=l[2];break;default:AL.currentCtx.err=40962;return}}};_alGetSource3i.sig="viippp";var _alGetSourcef=(t,r,n)=>{var a=AL.getSourceParam("alGetSourcef",t,r);if(a!==null){if(!n){AL.currentCtx.err=40963;return}switch(r){case 4097:case 4098:case 4099:case 4106:case 4109:case 4110:case 4128:case 4129:case 4130:case 4131:case 4132:case 4133:case 4134:case 8203:HEAPF32[n>>2]=a;break;default:AL.currentCtx.err=40962;return}}};_alGetSourcef.sig="viip";var _alGetSourcefv=(t,r,n)=>{var a=AL.getSourceParam("alGetSourcefv",t,r);if(a!==null){if(!n){AL.currentCtx.err=40963;return}switch(r){case 4097:case 4098:case 4099:case 4106:case 4109:case 4110:case 4128:case 4129:case 4130:case 4131:case 4132:case 4133:case 4134:case 8203:HEAPF32[n>>2]=a[0];break;case 4100:case 4101:case 4102:HEAPF32[n>>2]=a[0],HEAPF32[n+4>>2]=a[1],HEAPF32[n+8>>2]=a[2];break;default:AL.currentCtx.err=40962;return}}};_alGetSourcefv.sig="viip";var _alGetSourcei=(t,r,n)=>{var a=AL.getSourceParam("alGetSourcei",t,r);if(a!==null){if(!n){AL.currentCtx.err=40963;return}switch(r){case 514:case 4097:case 4098:case 4103:case 4105:case 4112:case 4117:case 4118:case 4128:case 4129:case 4131:case 4132:case 4133:case 4134:case 4135:case 4628:case 8201:case 8202:case 53248:HEAP32[n>>2]=a;break;default:AL.currentCtx.err=40962;return}}};_alGetSourcei.sig="viip";var _alGetSourceiv=(t,r,n)=>{var a=AL.getSourceParam("alGetSourceiv",t,r);if(a!==null){if(!n){AL.currentCtx.err=40963;return}switch(r){case 514:case 4097:case 4098:case 4103:case 4105:case 4112:case 4117:case 4118:case 4128:case 4129:case 4131:case 4132:case 4133:case 4134:case 4135:case 4628:case 8201:case 8202:case 53248:HEAP32[n>>2]=a;break;case 4100:case 4101:case 4102:HEAP32[n>>2]=a[0],HEAP32[n+4>>2]=a[1],HEAP32[n+8>>2]=a[2];break;default:AL.currentCtx.err=40962;return}}};_alGetSourceiv.sig="viip";var stringToNewUTF8=t=>{var r=lengthBytesUTF8(t)+1,n=_malloc(r);return n&&stringToUTF8(t,n,r),n},_alGetString=t=>{if(AL.stringCache[t])return AL.stringCache[t];var r;switch(t){case 0:r="No Error";break;case 40961:r="Invalid Name";break;case 40962:r="Invalid Enum";break;case 40963:r="Invalid Value";break;case 40964:r="Invalid Operation";break;case 40965:r="Out of Memory";break;case 45057:r="Emscripten";break;case 45058:r="1.1";break;case 45059:r="WebAudio";break;case 45060:r=Object.keys(AL.AL_EXTENSIONS).join(" ");break;default:return AL.currentCtx&&(AL.currentCtx.err=40962),0}return r=stringToNewUTF8(r),AL.stringCache[t]=r,r};_alGetString.sig="pi";var _alIsBuffer=t=>!(!AL.currentCtx||t>AL.buffers.length||!AL.buffers[t]);_alIsBuffer.sig="ii";var _alIsEnabled=t=>{if(!AL.currentCtx)return 0;switch(t){case 512:return AL.currentCtx.sourceDistanceModel?0:1;default:return AL.currentCtx.err=40962,0}};_alIsEnabled.sig="ii";var _alIsExtensionPresent=t=>{var r=UTF8ToString(t);return AL.AL_EXTENSIONS[r]?1:0};_alIsExtensionPresent.sig="ip";var _alIsSource=t=>!(!AL.currentCtx||!AL.currentCtx.sources[t]);_alIsSource.sig="ii";var _alListener3f=(t,r,n,a)=>{switch(t){case 4100:case 4102:AL.paramArray[0]=r,AL.paramArray[1]=n,AL.paramArray[2]=a,AL.setListenerParam("alListener3f",t,AL.paramArray);break;default:AL.setListenerParam("alListener3f",t,null);break}};_alListener3f.sig="vifff";var _alListener3i=(t,r,n,a)=>{switch(t){case 4100:case 4102:AL.paramArray[0]=r,AL.paramArray[1]=n,AL.paramArray[2]=a,AL.setListenerParam("alListener3i",t,AL.paramArray);break;default:AL.setListenerParam("alListener3i",t,null);break}};_alListener3i.sig="viiii";var _alListenerf=(t,r)=>{switch(t){case 4106:AL.setListenerParam("alListenerf",t,r);break;default:AL.setListenerParam("alListenerf",t,null);break}};_alListenerf.sig="vif";var _alListenerfv=(t,r)=>{if(AL.currentCtx){if(!r){AL.currentCtx.err=40963;return}switch(t){case 4100:case 4102:AL.paramArray[0]=HEAPF32[r>>2],AL.paramArray[1]=HEAPF32[r+4>>2],AL.paramArray[2]=HEAPF32[r+8>>2],AL.setListenerParam("alListenerfv",t,AL.paramArray);break;case 4111:AL.paramArray[0]=HEAPF32[r>>2],AL.paramArray[1]=HEAPF32[r+4>>2],AL.paramArray[2]=HEAPF32[r+8>>2],AL.paramArray[3]=HEAPF32[r+12>>2],AL.paramArray[4]=HEAPF32[r+16>>2],AL.paramArray[5]=HEAPF32[r+20>>2],AL.setListenerParam("alListenerfv",t,AL.paramArray);break;default:AL.setListenerParam("alListenerfv",t,null);break}}};_alListenerfv.sig="vip";var _alListeneri=(t,r)=>{AL.setListenerParam("alListeneri",t,null)};_alListeneri.sig="vii";var _alListeneriv=(t,r)=>{if(AL.currentCtx){if(!r){AL.currentCtx.err=40963;return}switch(t){case 4100:case 4102:AL.paramArray[0]=HEAP32[r>>2],AL.paramArray[1]=HEAP32[r+4>>2],AL.paramArray[2]=HEAP32[r+8>>2],AL.setListenerParam("alListeneriv",t,AL.paramArray);break;case 4111:AL.paramArray[0]=HEAP32[r>>2],AL.paramArray[1]=HEAP32[r+4>>2],AL.paramArray[2]=HEAP32[r+8>>2],AL.paramArray[3]=HEAP32[r+12>>2],AL.paramArray[4]=HEAP32[r+16>>2],AL.paramArray[5]=HEAP32[r+20>>2],AL.setListenerParam("alListeneriv",t,AL.paramArray);break;default:AL.setListenerParam("alListeneriv",t,null);break}}};_alListeneriv.sig="vip";var _alSource3f=(t,r,n,a,o)=>{switch(r){case 4100:case 4101:case 4102:AL.paramArray[0]=n,AL.paramArray[1]=a,AL.paramArray[2]=o,AL.setSourceParam("alSource3f",t,r,AL.paramArray);break;default:AL.setSourceParam("alSource3f",t,r,null);break}};_alSource3f.sig="viifff";var _alSource3i=(t,r,n,a,o)=>{switch(r){case 4100:case 4101:case 4102:AL.paramArray[0]=n,AL.paramArray[1]=a,AL.paramArray[2]=o,AL.setSourceParam("alSource3i",t,r,AL.paramArray);break;default:AL.setSourceParam("alSource3i",t,r,null);break}};_alSource3i.sig="viiiii";var _alSourcePause=t=>{if(AL.currentCtx){var r=AL.currentCtx.sources[t];if(!r){AL.currentCtx.err=40961;return}AL.setSourceState(r,4115)}};_alSourcePause.sig="vi";var _alSourcePausev=(t,r)=>{if(AL.currentCtx){r||(AL.currentCtx.err=40963);for(var n=0;n<t;++n)if(!AL.currentCtx.sources[HEAP32[r+n*4>>2]]){AL.currentCtx.err=40961;return}for(var n=0;n<t;++n){var a=HEAP32[r+n*4>>2];AL.setSourceState(AL.currentCtx.sources[a],4115)}}};_alSourcePausev.sig="vip";var _alSourcePlay=t=>{if(AL.currentCtx){var r=AL.currentCtx.sources[t];if(!r){AL.currentCtx.err=40961;return}AL.setSourceState(r,4114)}};_alSourcePlay.sig="vi";var _alSourcePlayv=(t,r)=>{if(AL.currentCtx){r||(AL.currentCtx.err=40963);for(var n=0;n<t;++n)if(!AL.currentCtx.sources[HEAP32[r+n*4>>2]]){AL.currentCtx.err=40961;return}for(var n=0;n<t;++n){var a=HEAP32[r+n*4>>2];AL.setSourceState(AL.currentCtx.sources[a],4114)}}};_alSourcePlayv.sig="vip";var _alSourceQueueBuffers=(t,r,n)=>{if(AL.currentCtx){var a=AL.currentCtx.sources[t];if(!a){AL.currentCtx.err=40961;return}if(a.type===4136){AL.currentCtx.err=40964;return}if(r!==0){var o=AL.buffers[0];for(var l of a.bufQueue)if(l.id!==0){o=l;break}for(var c=0;c<r;++c){var _=HEAP32[n+c*4>>2],l=AL.buffers[_];if(!l){AL.currentCtx.err=40961;return}o.id!==0&&(l.frequency!==o.frequency||l.bytesPerSample!==o.bytesPerSample||l.channels!==o.channels)&&(AL.currentCtx.err=40964)}a.bufQueue.length===1&&a.bufQueue[0].id===0&&(a.bufQueue.length=0),a.type=4137;for(var c=0;c<r;++c){var _=HEAP32[n+c*4>>2],l=AL.buffers[_];l.refCount++,a.bufQueue.push(l)}a.looping&&AL.cancelPendingSourceAudio(a),AL.initSourcePanner(a),AL.scheduleSourceAudio(a)}}};_alSourceQueueBuffers.sig="viip";var _alSourceRewind=t=>{if(AL.currentCtx){var r=AL.currentCtx.sources[t];if(!r){AL.currentCtx.err=40961;return}AL.setSourceState(r,4116),AL.setSourceState(r,4113)}};_alSourceRewind.sig="vi";var _alSourceRewindv=(t,r)=>{if(AL.currentCtx){r||(AL.currentCtx.err=40963);for(var n=0;n<t;++n)if(!AL.currentCtx.sources[HEAP32[r+n*4>>2]]){AL.currentCtx.err=40961;return}for(var n=0;n<t;++n){var a=HEAP32[r+n*4>>2];AL.setSourceState(AL.currentCtx.sources[a],4113)}}};_alSourceRewindv.sig="vip";var _alSourceStop=t=>{if(AL.currentCtx){var r=AL.currentCtx.sources[t];if(!r){AL.currentCtx.err=40961;return}AL.setSourceState(r,4116)}};_alSourceStop.sig="vi";var _alSourceStopv=(t,r)=>{if(AL.currentCtx){r||(AL.currentCtx.err=40963);for(var n=0;n<t;++n)if(!AL.currentCtx.sources[HEAP32[r+n*4>>2]]){AL.currentCtx.err=40961;return}for(var n=0;n<t;++n){var a=HEAP32[r+n*4>>2];AL.setSourceState(AL.currentCtx.sources[a],4116)}}};_alSourceStopv.sig="vip";var _alSourceUnqueueBuffers=(t,r,n)=>{if(AL.currentCtx){var a=AL.currentCtx.sources[t];if(!a){AL.currentCtx.err=40961;return}if(r>(a.bufQueue.length===1&&a.bufQueue[0].id===0?0:a.bufsProcessed)){AL.currentCtx.err=40963;return}if(r!==0){for(var o=0;o<r;o++){var l=a.bufQueue.shift();l.refCount--,HEAP32[n+o*4>>2]=l.id,a.bufsProcessed--}a.bufQueue.length===0&&a.bufQueue.push(AL.buffers[0]),AL.initSourcePanner(a),AL.scheduleSourceAudio(a)}}};_alSourceUnqueueBuffers.sig="viip";var _alSourcef=(t,r,n)=>{switch(r){case 4097:case 4098:case 4099:case 4106:case 4109:case 4110:case 4128:case 4129:case 4130:case 4131:case 4132:case 4133:case 4134:case 8203:AL.setSourceParam("alSourcef",t,r,n);break;default:AL.setSourceParam("alSourcef",t,r,null);break}};_alSourcef.sig="viif";var _alSourcefv=(t,r,n)=>{if(AL.currentCtx){if(!n){AL.currentCtx.err=40963;return}switch(r){case 4097:case 4098:case 4099:case 4106:case 4109:case 4110:case 4128:case 4129:case 4130:case 4131:case 4132:case 4133:case 4134:case 8203:var a=HEAPF32[n>>2];AL.setSourceParam("alSourcefv",t,r,a);break;case 4100:case 4101:case 4102:AL.paramArray[0]=HEAPF32[n>>2],AL.paramArray[1]=HEAPF32[n+4>>2],AL.paramArray[2]=HEAPF32[n+8>>2],AL.setSourceParam("alSourcefv",t,r,AL.paramArray);break;default:AL.setSourceParam("alSourcefv",t,r,null);break}}};_alSourcefv.sig="viip";var _alSourceiv=(t,r,n)=>{if(AL.currentCtx){if(!n){AL.currentCtx.err=40963;return}switch(r){case 514:case 4097:case 4098:case 4103:case 4105:case 4128:case 4129:case 4131:case 4132:case 4133:case 4134:case 4628:case 8201:case 8202:case 53248:var a=HEAP32[n>>2];AL.setSourceParam("alSourceiv",t,r,a);break;case 4100:case 4101:case 4102:AL.paramArray[0]=HEAP32[n>>2],AL.paramArray[1]=HEAP32[n+4>>2],AL.paramArray[2]=HEAP32[n+8>>2],AL.setSourceParam("alSourceiv",t,r,AL.paramArray);break;default:AL.setSourceParam("alSourceiv",t,r,null);break}}};_alSourceiv.sig="viip";var _alSpeedOfSound=t=>{AL.setGlobalParam("alSpeedOfSound",49155,t)};_alSpeedOfSound.sig="vf";var _alcCaptureCloseDevice=t=>{var r=AL.requireValidCaptureDevice(t,"alcCaptureCloseDevice");return r?(delete AL.captures[t],AL.freeIds.push(t),r.mediaStreamSourceNode?.disconnect(),r.mergerNode?.disconnect(),r.splitterNode?.disconnect(),r.scriptProcessorNode?.disconnect(),r.mediaStream&&r.mediaStream.getTracks().forEach(n=>n.stop()),delete r.buffers,r.capturedFrameCount=0,r.isCapturing=!1,!0):!1};_alcCaptureCloseDevice.sig="ip";var autoResumeAudioContext=t=>{for(var r of["keydown","mousedown","touchstart"])for(var n of[document,document.getElementById("canvas")])n?.addEventListener(r,()=>{t.state==="suspended"&&t.resume()},{once:!0})},_alcCaptureOpenDevice=(t,r,n,a)=>{var o=AL.CAPTURE_DEVICE_NAME;if(t!==0&&(o=UTF8ToString(t),o!==AL.CAPTURE_DEVICE_NAME))return AL.alcErr=40965,0;if(a<0)return AL.alcErr=40964,0;navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var l=navigator.getUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia;if(!l)return AL.alcErr=40965,0;var c=window.AudioContext||window.webkitAudioContext;if(!AL.sharedCaptureAudioCtx)try{AL.sharedCaptureAudioCtx=new c}catch{return AL.alcErr=40965,0}autoResumeAudioContext(AL.sharedCaptureAudioCtx);var _;switch(n){case 65552:case 4353:case 4352:_=1;break;case 65553:case 4355:case 4354:_=2;break;default:return AL.alcErr=40964,0}function u(S){return new Float32Array(S)}function p(S){return new Int16Array(S)}function d(S){return new Uint8Array(S)}var m,f;switch(n){case 65552:case 65553:m="f32",f=u;break;case 4353:case 4355:m="i16",f=p;break;case 4352:case 4354:m="u8",f=d;break}var g=[];try{for(var E=0;E<_;++E)g[E]=f(a)}catch{return AL.alcErr=40965,0}var x={audioCtx:AL.sharedCaptureAudioCtx,deviceName:o,requestedSampleRate:r,requestedSampleType:m,outputChannelCount:_,inputChannelCount:null,mediaStreamError:null,mediaStreamSourceNode:null,mediaStream:null,mergerNode:null,splitterNode:null,scriptProcessorNode:null,isCapturing:!1,buffers:g,get bufferFrameCapacity(){return g[0].length},capturePlayhead:0,captureReadhead:0,capturedFrameCount:0},v=S=>{x.mediaStreamError=S},h=S=>{x.mediaStreamSourceNode=x.audioCtx.createMediaStreamSource(S),x.mediaStream=S;var y=1;switch(x.mediaStreamSourceNode.channelCountMode){case"max":y=_;break;case"clamped-max":y=Math.min(_,x.mediaStreamSourceNode.channelCount);break;case"explicit":y=x.mediaStreamSourceNode.channelCount;break}x.inputChannelCount=y;var T=512;x.scriptProcessorNode=x.audioCtx.createScriptProcessor(T,y,_),y>_?(x.mergerNode=x.audioCtx.createChannelMerger(y),x.mediaStreamSourceNode.connect(x.mergerNode),x.mergerNode.connect(x.scriptProcessorNode)):y<_?(x.splitterNode=x.audioCtx.createChannelSplitter(_),x.mediaStreamSourceNode.connect(x.splitterNode),x.splitterNode.connect(x.scriptProcessorNode)):x.mediaStreamSourceNode.connect(x.scriptProcessorNode),x.scriptProcessorNode.connect(x.audioCtx.destination),x.scriptProcessorNode.onaudioprocess=A=>{if(x.isCapturing){var w=x,C=A.inputBuffer;switch(n){case 65552:for(var P=C.getChannelData(0),L=0;L<C.length;++L){var k=(w.capturePlayhead+L)%w.bufferFrameCapacity;w.buffers[0][k]=P[L]}break;case 65553:for(var P=C.getChannelData(0),I=C.getChannelData(1),L=0;L<C.length;++L){var k=(w.capturePlayhead+L)%w.bufferFrameCapacity;w.buffers[0][k]=P[L],w.buffers[1][k]=I[L]}break;case 4353:for(var P=C.getChannelData(0),L=0;L<C.length;++L){var k=(w.capturePlayhead+L)%w.bufferFrameCapacity;w.buffers[0][k]=P[L]*32767}break;case 4355:for(var P=C.getChannelData(0),I=C.getChannelData(1),L=0;L<C.length;++L){var k=(w.capturePlayhead+L)%w.bufferFrameCapacity;w.buffers[0][k]=P[L]*32767,w.buffers[1][k]=I[L]*32767}break;case 4352:for(var P=C.getChannelData(0),L=0;L<C.length;++L){var k=(w.capturePlayhead+L)%w.bufferFrameCapacity;w.buffers[0][k]=(P[L]+1)*127}break;case 4354:for(var P=C.getChannelData(0),I=C.getChannelData(1),L=0;L<C.length;++L){var k=(w.capturePlayhead+L)%w.bufferFrameCapacity;w.buffers[0][k]=(P[L]+1)*127,w.buffers[1][k]=(I[L]+1)*127}break}w.capturePlayhead+=C.length,w.capturePlayhead%=w.bufferFrameCapacity,w.capturedFrameCount+=C.length,w.capturedFrameCount=Math.min(w.capturedFrameCount,w.bufferFrameCapacity)}}};navigator.mediaDevices?.getUserMedia?navigator.mediaDevices.getUserMedia({audio:!0}).then(h).catch(v):navigator.getUserMedia({audio:!0},h,v);var b=AL.newId();return AL.captures[b]=x,b};_alcCaptureOpenDevice.sig="ppiii";var _alcCaptureSamples=(t,r,n)=>{var a=AL.requireValidCaptureDevice(t,"alcCaptureSamples");if(!a)return;var o=a.requestedSampleRate,l=a.audioCtx.sampleRate,c=l/o;if(n<0||n>a.capturedFrameCount/c){AL.alcErr=40964;return}function _(S,y){HEAPF32[r+4*S>>2]=y}function u(S,y){HEAP16[r+2*S>>1]=y}function p(S,y){HEAP8[r+S]=y}var d;switch(a.requestedSampleType){case"f32":d=_;break;case"i16":d=u;break;case"u8":d=p;break;default:return}if(Math.floor(c)==c)for(var m=0,f=0;f<n;++f){for(var g=0;g<a.buffers.length;++g,++m)d(m,a.buffers[g][a.captureReadhead]);a.captureReadhead=(c+a.captureReadhead)%a.bufferFrameCapacity}else for(var m=0,f=0;f<n;++f){for(var E=Math.floor(a.captureReadhead),x=Math.ceil(a.captureReadhead),v=a.captureReadhead-E,g=0;g<a.buffers.length;++g,++m){var h=a.buffers[g][E],b=a.buffers[g][x];d(m,(1-v)*h+v*b)}a.captureReadhead=(a.captureReadhead+c)%a.bufferFrameCapacity}a.capturedFrameCount=0};_alcCaptureSamples.sig="vppi";var _alcCaptureStart=t=>{var r=AL.requireValidCaptureDevice(t,"alcCaptureStart");r&&(r.isCapturing||(r.isCapturing=!0,r.capturedFrameCount=0,r.capturePlayhead=0))};_alcCaptureStart.sig="vp";var _alcCaptureStop=t=>{var r=AL.requireValidCaptureDevice(t,"alcCaptureStop");r&&(r.isCapturing=!1)};_alcCaptureStop.sig="vp";var _alcCloseDevice=t=>!(t in AL.deviceRefCounts)||AL.deviceRefCounts[t]>0?0:(delete AL.deviceRefCounts[t],AL.freeIds.push(t),1);_alcCloseDevice.sig="ip";var _alcCreateContext=(t,r)=>{if(!(t in AL.deviceRefCounts))return AL.alcErr=40961,0;var n=null,a=[],o=null;if(r>>=2,r)for(var l=0,c=0;l=HEAP32[r++],a.push(l),l!==0;)switch(c=HEAP32[r++],a.push(c),l){case 4103:n||(n={}),n.sampleRate=c;break;case 4112:case 4113:break;case 6546:switch(c){case 0:o=!1;break;case 1:o=!0;break;case 2:break;default:return AL.alcErr=40964,0}break;case 6550:if(c!==0)return AL.alcErr=40964,0;break;default:return AL.alcErr=40964,0}var _=window.AudioContext||window.webkitAudioContext,u=null;try{n?u=new _(n):u=new _}catch(g){return g.name==="NotSupportedError"?AL.alcErr=40964:AL.alcErr=40961,0}autoResumeAudioContext(u),typeof u.createGain>"u"&&(u.createGain=u.createGainNode);var p=u.createGain();p.connect(u.destination);var d={deviceId:t,id:AL.newId(),attrs:a,audioCtx:u,listener:{position:[0,0,0],velocity:[0,0,0],direction:[0,0,0],up:[0,0,0]},sources:[],interval:setInterval(()=>AL.scheduleContextAudio(d),AL.QUEUE_INTERVAL),gain:p,distanceModel:53250,speedOfSound:343.3,dopplerFactor:1,sourceDistanceModel:!1,hrtf:o||!1,_err:0,get err(){return this._err},set err(g){(this._err===0||g===0)&&(this._err=g)}};if(AL.deviceRefCounts[t]++,AL.contexts[d.id]=d,o!==null)for(var m in AL.contexts){var f=AL.contexts[m];f.deviceId===t&&(f.hrtf=o,AL.updateContextGlobal(f))}return d.id};_alcCreateContext.sig="ppp";var _alcDestroyContext=t=>{var r=AL.contexts[t];if(AL.currentCtx===r){AL.alcErr=40962;return}AL.contexts[t].interval&&clearInterval(AL.contexts[t].interval),AL.deviceRefCounts[r.deviceId]--,delete AL.contexts[t],AL.freeIds.push(t)};_alcDestroyContext.sig="vp";var _alcGetContextsDevice=t=>t in AL.contexts?AL.contexts[t].deviceId:0;_alcGetContextsDevice.sig="pp";var _alcGetCurrentContext=()=>AL.currentCtx!==null?AL.currentCtx.id:0;_alcGetCurrentContext.sig="p";var _alcGetEnumValue=(t,r)=>{if(t!==0&&!(t in AL.deviceRefCounts))return 0;if(!r)return AL.alcErr=40964,0;var n=UTF8ToString(r);switch(n){case"ALC_NO_ERROR":return 0;case"ALC_INVALID_DEVICE":return 40961;case"ALC_INVALID_CONTEXT":return 40962;case"ALC_INVALID_ENUM":return 40963;case"ALC_INVALID_VALUE":return 40964;case"ALC_OUT_OF_MEMORY":return 40965;case"ALC_MAJOR_VERSION":return 4096;case"ALC_MINOR_VERSION":return 4097;case"ALC_ATTRIBUTES_SIZE":return 4098;case"ALC_ALL_ATTRIBUTES":return 4099;case"ALC_DEFAULT_DEVICE_SPECIFIER":return 4100;case"ALC_DEVICE_SPECIFIER":return 4101;case"ALC_EXTENSIONS":return 4102;case"ALC_FREQUENCY":return 4103;case"ALC_REFRESH":return 4104;case"ALC_SYNC":return 4105;case"ALC_MONO_SOURCES":return 4112;case"ALC_STEREO_SOURCES":return 4113;case"ALC_CAPTURE_DEVICE_SPECIFIER":return 784;case"ALC_CAPTURE_DEFAULT_DEVICE_SPECIFIER":return 785;case"ALC_CAPTURE_SAMPLES":return 786;case"ALC_HRTF_SOFT":return 6546;case"ALC_HRTF_ID_SOFT":return 6550;case"ALC_DONT_CARE_SOFT":return 2;case"ALC_HRTF_STATUS_SOFT":return 6547;case"ALC_NUM_HRTF_SPECIFIERS_SOFT":return 6548;case"ALC_HRTF_SPECIFIER_SOFT":return 6549;case"ALC_HRTF_DISABLED_SOFT":return 0;case"ALC_HRTF_ENABLED_SOFT":return 1;case"ALC_HRTF_DENIED_SOFT":return 2;case"ALC_HRTF_REQUIRED_SOFT":return 3;case"ALC_HRTF_HEADPHONES_DETECTED_SOFT":return 4;case"ALC_HRTF_UNSUPPORTED_FORMAT_SOFT":return 5;default:return AL.alcErr=40964,0}};_alcGetEnumValue.sig="ipp";var _alcGetError=t=>{var r=AL.alcErr;return AL.alcErr=0,r};_alcGetError.sig="ip";var _alcGetIntegerv=(t,r,n,a)=>{if(!(n===0||!a))switch(r){case 4096:HEAP32[a>>2]=1;break;case 4097:HEAP32[a>>2]=1;break;case 4098:if(!(t in AL.deviceRefCounts)){AL.alcErr=40961;return}if(!AL.currentCtx){AL.alcErr=40962;return}HEAP32[a>>2]=AL.currentCtx.attrs.length;break;case 4099:if(!(t in AL.deviceRefCounts)){AL.alcErr=40961;return}if(!AL.currentCtx){AL.alcErr=40962;return}for(var o=0;o<AL.currentCtx.attrs.length;o++)HEAP32[a+o*4>>2]=AL.currentCtx.attrs[o];break;case 4103:if(!(t in AL.deviceRefCounts)){AL.alcErr=40961;return}if(!AL.currentCtx){AL.alcErr=40962;return}HEAP32[a>>2]=AL.currentCtx.audioCtx.sampleRate;break;case 4112:case 4113:if(!(t in AL.deviceRefCounts)){AL.alcErr=40961;return}if(!AL.currentCtx){AL.alcErr=40962;return}HEAP32[a>>2]=2147483647;break;case 6546:case 6547:if(!(t in AL.deviceRefCounts)){AL.alcErr=40961;return}var l=0;for(var c in AL.contexts){var _=AL.contexts[c];_.deviceId===t&&(l=_.hrtf?1:0)}HEAP32[a>>2]=l;break;case 6548:if(!(t in AL.deviceRefCounts)){AL.alcErr=40961;return}HEAP32[a>>2]=1;break;case 131075:if(!(t in AL.deviceRefCounts)){AL.alcErr=40961;return}if(!AL.currentCtx){AL.alcErr=40962;return}HEAP32[a>>2]=1;case 786:var u=AL.requireValidCaptureDevice(t,"alcGetIntegerv");if(!u)return;var p=u.capturedFrameCount,d=u.requestedSampleRate,m=u.audioCtx.sampleRate,f=Math.floor(p*(d/m));HEAP32[a>>2]=f;break;default:AL.alcErr=40963;return}};_alcGetIntegerv.sig="vpiip";var _alcGetString=(t,r)=>{if(AL.alcStringCache[r])return AL.alcStringCache[r];var n;switch(r){case 0:n="No Error";break;case 40961:n="Invalid Device";break;case 40962:n="Invalid Context";break;case 40963:n="Invalid Enum";break;case 40964:n="Invalid Value";break;case 40965:n="Out of Memory";break;case 4100:if(globalThis.AudioContext||globalThis.webkitAudioContext)n=AL.DEVICE_NAME;else return 0;break;case 4101:globalThis.AudioContext||globalThis.webkitAudioContext?n=AL.DEVICE_NAME+"\0":n="\0";break;case 785:n=AL.CAPTURE_DEVICE_NAME;break;case 784:if(t===0)n=AL.CAPTURE_DEVICE_NAME+"\0";else{var a=AL.requireValidCaptureDevice(t,"alcGetString");if(!a)return 0;n=a.deviceName}break;case 4102:if(!t)return AL.alcErr=40961,0;n=Object.keys(AL.ALC_EXTENSIONS).join(" ");break;default:return AL.alcErr=40963,0}return n=stringToNewUTF8(n),AL.alcStringCache[r]=n,n};_alcGetString.sig="ppi";var _alcIsExtensionPresent=(t,r)=>{var n=UTF8ToString(r);return AL.ALC_EXTENSIONS[n]?1:0};_alcIsExtensionPresent.sig="ipp";var _alcMakeContextCurrent=t=>(t===0?AL.currentCtx=null:AL.currentCtx=AL.contexts[t],1);_alcMakeContextCurrent.sig="ip";var _alcOpenDevice=t=>{if(t){var r=UTF8ToString(t);if(r!==AL.DEVICE_NAME)return 0}if(globalThis.AudioContext||globalThis.webkitAudioContext){var n=AL.newId();return AL.deviceRefCounts[n]=0,n}return 0};_alcOpenDevice.sig="pp";var _alcProcessContext=t=>{};_alcProcessContext.sig="vp";var _alcSuspendContext=t=>{};_alcSuspendContext.sig="vp";var _emscripten_get_now_res=()=>1e3;_emscripten_get_now_res.sig="d";var nowIsMonotonic=1,checkWasiClock=t=>t>=0&&t<=3,_clock_res_get=(t,r)=>{if(!checkWasiClock(t))return 28;var n;return t===0?n=1e3*1e3:n=_emscripten_get_now_res(),HEAP64[r>>3]=BigInt(n),0};_clock_res_get.sig="iip";var _emscripten_date_now=()=>Date.now();_emscripten_date_now.sig="d";function _clock_time_get(t,r,n){if(!checkWasiClock(t))return 28;var a;t===0?a=_emscripten_date_now():a=_emscripten_get_now();var o=Math.round(a*1e3*1e3);return HEAP64[n>>3]=BigInt(o),0}_clock_time_get.sig="iijp";function getFullscreenElement(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement||document.msFullscreenElement}var safeSetTimeout=(t,r)=>setTimeout(()=>{callUserCallback(t)},r),Browser={useWebGL:!1,isFullscreen:!1,pointerLock:!1,moduleContextCreatedCallbacks:[],workers:[],preloadedImages:{},preloadedAudios:{},getCanvas:()=>Module.canvas,init(){if(Browser.initted)return;Browser.initted=!0;var t={};t.canHandle=function(l){return!Module.noImageDecoding&&/\.(jpg|jpeg|png|bmp|webp)$/i.test(l)},t.handle=async function(l,c){var _=new Blob([l],{type:Browser.getMimetype(c)});_.size!==l.length&&(_=new Blob([new Uint8Array(l).buffer],{type:Browser.getMimetype(c)}));var u=URL.createObjectURL(_);return new Promise((p,d)=>{var m=new Image;m.onload=()=>{assert(m.complete,`Image ${c} could not be decoded`);var f=document.createElement("canvas");f.width=m.width,f.height=m.height;var g=f.getContext("2d");g.drawImage(m,0,0),Browser.preloadedImages[c]=f,URL.revokeObjectURL(u),p(l)},m.onerror=f=>{err(`Image ${u} could not be decoded`),d()},m.src=u})},preloadPlugins.push(t);var r={};r.canHandle=function(l){return!Module.noAudioDecoding&&l.slice(-4)in{".ogg":1,".wav":1,".mp3":1}},r.handle=async function(l,c){return new Promise((_,u)=>{var p=!1;function d(E){p||(p=!0,Browser.preloadedAudios[c]=E,_(l))}var m=new Blob([l],{type:Browser.getMimetype(c)}),f=URL.createObjectURL(m),g=new Audio;g.addEventListener("canplaythrough",()=>d(g),!1),g.onerror=function(x){if(p)return;err(`warning: browser could not fully decode audio ${c}, trying slower base64 approach`);function v(h){for(var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",S="=",y="",T=0,A=0,w=0;w<h.length;w++)for(T=T<<8|h[w],A+=8;A>=6;){var C=T>>A-6&63;A-=6,y+=b[C]}return A==2?(y+=b[(T&3)<<4],y+=S+S):A==4&&(y+=b[(T&15)<<2],y+=S),y}g.src="data:audio/x-"+c.slice(-3)+";base64,"+v(l),d(g)},g.src=f,safeSetTimeout(()=>{d(g)},1e4)})},preloadPlugins.push(r);function n(){var o=Browser.getCanvas();Browser.pointerLock=document.pointerLockElement===o}var a=Browser.getCanvas();a&&(document.addEventListener("pointerlockchange",n,!1),Module.elementPointerLock&&a.addEventListener("click",o=>{!Browser.pointerLock&&Browser.getCanvas().requestPointerLock&&(Browser.getCanvas().requestPointerLock(),o.preventDefault())},!1))},createContext(t,r,n,a){if(r&&Module.ctx&&t==Browser.getCanvas())return Module.ctx;var o,l;if(r){var c={antialias:!1,alpha:!1,majorVersion:2};if(a)for(var _ in a)c[_]=a[_];typeof GL<"u"&&(l=GL.createContext(t,c),l&&(o=GL.getContext(l).GLctx))}else o=t.getContext("2d");return o?(n&&(r||assert(typeof GLctx>"u","cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),Module.ctx=o,r&&GL.makeContextCurrent(l),Browser.useWebGL=r,Browser.moduleContextCreatedCallbacks.forEach(u=>u()),Browser.init()),o):null},fullscreenHandlersInstalled:!1,lockPointer:void 0,resizeCanvas:void 0,requestFullscreen(t,r){Browser.lockPointer=t,Browser.resizeCanvas=r,typeof Browser.lockPointer>"u"&&(Browser.lockPointer=!0),typeof Browser.resizeCanvas>"u"&&(Browser.resizeCanvas=!1);var n=Browser.getCanvas();function a(){Browser.isFullscreen=!1;var l=n.parentNode;getFullscreenElement()===l?(n.exitFullscreen=Browser.exitFullscreen,Browser.lockPointer&&n.requestPointerLock(),Browser.isFullscreen=!0,Browser.resizeCanvas?Browser.setFullscreenCanvasSize():Browser.updateCanvasDimensions(n)):(l.parentNode.insertBefore(n,l),l.parentNode.removeChild(l),Browser.resizeCanvas?Browser.setWindowedCanvasSize():Browser.updateCanvasDimensions(n)),Module.onFullScreen?.(Browser.isFullscreen),Module.onFullscreen?.(Browser.isFullscreen)}Browser.fullscreenHandlersInstalled||(Browser.fullscreenHandlersInstalled=!0,document.addEventListener("fullscreenchange",a,!1),document.addEventListener("mozfullscreenchange",a,!1),document.addEventListener("webkitfullscreenchange",a,!1),document.addEventListener("MSFullscreenChange",a,!1));var o=document.createElement("div");n.parentNode.insertBefore(o,n),o.appendChild(n),o.requestFullscreen=o.requestFullscreen||o.mozRequestFullScreen||o.msRequestFullscreen||(o.webkitRequestFullscreen?()=>o.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):null)||(o.webkitRequestFullScreen?()=>o.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):null),o.requestFullscreen()},requestFullScreen(){abort("Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)")},exitFullscreen(){if(!Browser.isFullscreen)return!1;var t=document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||(()=>{});return t.apply(document,[]),!0},safeSetTimeout(t,r){return safeSetTimeout(t,r)},getMimetype(t){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[t.slice(t.lastIndexOf(".")+1)]},getUserMedia(t){window.getUserMedia||=navigator.getUserMedia||navigator.mozGetUserMedia,window.getUserMedia(t)},getMovementX(t){return t.movementX||t.mozMovementX||t.webkitMovementX||0},getMovementY(t){return t.movementY||t.mozMovementY||t.webkitMovementY||0},getMouseWheelDelta(t){var r=0;switch(t.type){case"DOMMouseScroll":r=t.detail/3;break;case"mousewheel":r=t.wheelDelta/120;break;case"wheel":switch(r=t.deltaY,t.deltaMode){case 0:r/=100;break;case 1:r/=3;break;case 2:r*=80;break;default:abort("unrecognized mouse wheel delta mode: "+t.deltaMode)}break;default:abort("unrecognized mouse wheel event: "+t.type)}return r},mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseCoords(t,r){var n=Browser.getCanvas(),a=n.getBoundingClientRect(),o=typeof window.scrollX<"u"?window.scrollX:window.pageXOffset,l=typeof window.scrollY<"u"?window.scrollY:window.pageYOffset;assert(typeof o<"u"&&typeof l<"u","Unable to retrieve scroll position, mouse positions likely broken.");var c=t-(o+a.left),_=r-(l+a.top);return c=c*(n.width/a.width),_=_*(n.height/a.height),{x:c,y:_}},setMouseCoords(t,r){const{x:n,y:a}=Browser.calculateMouseCoords(t,r);Browser.mouseMovementX=n-Browser.mouseX,Browser.mouseMovementY=a-Browser.mouseY,Browser.mouseX=n,Browser.mouseY=a},calculateMouseEvent(t){if(Browser.pointerLock)t.type!="mousemove"&&"mozMovementX"in t?Browser.mouseMovementX=Browser.mouseMovementY=0:(Browser.mouseMovementX=Browser.getMovementX(t),Browser.mouseMovementY=Browser.getMovementY(t)),Browser.mouseX+=Browser.mouseMovementX,Browser.mouseY+=Browser.mouseMovementY;else{if(t.type==="touchstart"||t.type==="touchend"||t.type==="touchmove"){var r=t.touch;if(r===void 0)return;var n=Browser.calculateMouseCoords(r.pageX,r.pageY);if(t.type==="touchstart")Browser.lastTouches[r.identifier]=n,Browser.touches[r.identifier]=n;else if(t.type==="touchend"||t.type==="touchmove"){var a=Browser.touches[r.identifier];a||=n,Browser.lastTouches[r.identifier]=a,Browser.touches[r.identifier]=n}return}Browser.setMouseCoords(t.pageX,t.pageY)}},resizeListeners:[],updateResizeListeners(){var t=Browser.getCanvas();Browser.resizeListeners.forEach(r=>r(t.width,t.height))},setCanvasSize(t,r,n){var a=Browser.getCanvas();Browser.updateCanvasDimensions(a,t,r),n||Browser.updateResizeListeners()},windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize(){if(typeof SDL<"u"){var t=HEAPU32[SDL.screen>>2];t=t|8388608,HEAP32[SDL.screen>>2]=t}Browser.updateCanvasDimensions(Browser.getCanvas()),Browser.updateResizeListeners()},setWindowedCanvasSize(){if(typeof SDL<"u"){var t=HEAPU32[SDL.screen>>2];t=t&-8388609,HEAP32[SDL.screen>>2]=t}Browser.updateCanvasDimensions(Browser.getCanvas()),Browser.updateResizeListeners()},updateCanvasDimensions(t,r,n){r&&n?(t.widthNative=r,t.heightNative=n):(r=t.widthNative,n=t.heightNative);var a=r,o=n;if(Module.forcedAspectRatio>0&&(a/o<Module.forcedAspectRatio?a=Math.round(o*Module.forcedAspectRatio):o=Math.round(a/Module.forcedAspectRatio)),getFullscreenElement()===t.parentNode&&typeof screen<"u"){var l=Math.min(screen.width/a,screen.height/o);a=Math.round(a*l),o=Math.round(o*l)}Browser.resizeCanvas?(t.width!=a&&(t.width=a),t.height!=o&&(t.height=o),typeof t.style<"u"&&(t.style.removeProperty("width"),t.style.removeProperty("height"))):(t.width!=r&&(t.width=r),t.height!=n&&(t.height=n),typeof t.style<"u"&&(a!=r||o!=n?(t.style.setProperty("width",a+"px","important"),t.style.setProperty("height",o+"px","important")):(t.style.removeProperty("width"),t.style.removeProperty("height"))))}},EGL={errorCode:12288,defaultDisplayInitialized:!1,currentContext:0,currentReadSurface:0,currentDrawSurface:0,contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1},stringCache:{},setErrorCode(t){EGL.errorCode=t},chooseConfig(t,r,n,a,o){if(t!=62e3)return EGL.setErrorCode(12296),0;if(r)for(;;){var l=HEAP32[r>>2];if(l==12321){var c=HEAP32[r+4>>2];EGL.contextAttributes.alpha=c>0}else if(l==12325){var _=HEAP32[r+4>>2];EGL.contextAttributes.depth=_>0}else if(l==12326){var u=HEAP32[r+4>>2];EGL.contextAttributes.stencil=u>0}else if(l==12337){var p=HEAP32[r+4>>2];EGL.contextAttributes.antialias=p>0}else if(l==12338){var p=HEAP32[r+4>>2];EGL.contextAttributes.antialias=p==1}else if(l==12544){var d=HEAP32[r+4>>2];EGL.contextAttributes.lowLatency=d!=12547}else if(l==12344)break;r+=8}return(!n||!a)&&!o?(EGL.setErrorCode(12300),0):(o&&(HEAP32[o>>2]=1),n&&a>0&&(HEAPU32[n>>2]=62002),EGL.setErrorCode(12288),1)}},_eglBindAPI=t=>t==12448?(EGL.setErrorCode(12288),1):(EGL.setErrorCode(12300),0);_eglBindAPI.sig="ii";var _eglChooseConfig=(t,r,n,a,o)=>EGL.chooseConfig(t,r,n,a,o);_eglChooseConfig.sig="ipppip";var GLctx,webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance=t=>!!(t.dibvbi=t.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")),webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance=t=>!!(t.mdibvbi=t.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")),webgl_enable_EXT_polygon_offset_clamp=t=>!!(t.extPolygonOffsetClamp=t.getExtension("EXT_polygon_offset_clamp")),webgl_enable_EXT_clip_control=t=>!!(t.extClipControl=t.getExtension("EXT_clip_control")),webgl_enable_WEBGL_polygon_mode=t=>!!(t.webglPolygonMode=t.getExtension("WEBGL_polygon_mode")),webgl_enable_WEBGL_multi_draw=t=>!!(t.multiDrawWebgl=t.getExtension("WEBGL_multi_draw")),getEmscriptenSupportedExtensions=t=>{var r=["EXT_color_buffer_float","EXT_conservative_depth","EXT_disjoint_timer_query_webgl2","EXT_texture_norm16","NV_shader_noperspective_interpolation","WEBGL_clip_cull_distance","EXT_clip_control","EXT_color_buffer_half_float","EXT_depth_clamp","EXT_float_blend","EXT_polygon_offset_clamp","EXT_texture_compression_bptc","EXT_texture_compression_rgtc","EXT_texture_filter_anisotropic","KHR_parallel_shader_compile","OES_texture_float_linear","WEBGL_blend_func_extended","WEBGL_compressed_texture_astc","WEBGL_compressed_texture_etc","WEBGL_compressed_texture_etc1","WEBGL_compressed_texture_s3tc","WEBGL_compressed_texture_s3tc_srgb","WEBGL_debug_renderer_info","WEBGL_debug_shaders","WEBGL_lose_context","WEBGL_multi_draw","WEBGL_polygon_mode"];return(t.getSupportedExtensions()||[]).filter(n=>r.includes(n))},registerPreMainLoop=t=>{typeof MainLoop<"u"&&MainLoop.preMainLoop.push(t)},GL={counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],shaders:[],vaos:[],contexts:[],offscreenCanvases:{},queries:[],samplers:[],transformFeedbacks:[],syncs:[],byteSizeByTypeRoot:5120,byteSizeByType:[1,1,2,2,4,4,4,2,3,4,8],stringCache:{},stringiCache:{},unpackAlignment:4,unpackRowLength:0,recordError:t=>{GL.lastError||(GL.lastError=t)},getNewId:t=>{for(var r=GL.counter++,n=t.length;n<r;n++)t[n]=null;for(;t[r];)r=GL.counter++;return r},genObject:(t,r,n,a)=>{for(var o=0;o<t;o++){var l=GLctx[n](),c=l&&GL.getNewId(a);l?(l.name=c,a[c]=l):GL.recordError(1282),HEAP32[r+o*4>>2]=c}},MAX_TEMP_BUFFER_SIZE:2097152,numTempVertexBuffersPerSize:64,log2ceilLookup:t=>32-Math.clz32(t===0?0:t-1),generateTempBuffers:(t,r)=>{var n=GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);r.tempVertexBufferCounters1=[],r.tempVertexBufferCounters2=[],r.tempVertexBufferCounters1.length=r.tempVertexBufferCounters2.length=n+1,r.tempVertexBuffers1=[],r.tempVertexBuffers2=[],r.tempVertexBuffers1.length=r.tempVertexBuffers2.length=n+1,r.tempIndexBuffers=[],r.tempIndexBuffers.length=n+1;for(var a=0;a<=n;++a){r.tempIndexBuffers[a]=null,r.tempVertexBufferCounters1[a]=r.tempVertexBufferCounters2[a]=0;var o=GL.numTempVertexBuffersPerSize;r.tempVertexBuffers1[a]=[],r.tempVertexBuffers2[a]=[];var l=r.tempVertexBuffers1[a],c=r.tempVertexBuffers2[a];l.length=c.length=o;for(var _=0;_<o;++_)l[_]=c[_]=null}if(t){r.tempQuadIndexBuffer=GLctx.createBuffer(),r.GLctx.bindBuffer(34963,r.tempQuadIndexBuffer);for(var u=GL.MAX_TEMP_BUFFER_SIZE>>1,p=new Uint16Array(u),a=0,d=0;p[a++]=d,!(a>=u||(p[a++]=d+1,a>=u)||(p[a++]=d+2,a>=u)||(p[a++]=d,a>=u)||(p[a++]=d+2,a>=u)||(p[a++]=d+3,a>=u));)d+=4;r.GLctx.bufferData(34963,p,35044),r.GLctx.bindBuffer(34963,null)}},getTempVertexBuffer:t=>{var r=GL.log2ceilLookup(t),n=GL.currentContext.tempVertexBuffers1[r],a=GL.currentContext.tempVertexBufferCounters1[r];GL.currentContext.tempVertexBufferCounters1[r]=GL.currentContext.tempVertexBufferCounters1[r]+1&GL.numTempVertexBuffersPerSize-1;var o=n[a];if(o)return o;var l=GLctx.getParameter(34964);return n[a]=GLctx.createBuffer(),GLctx.bindBuffer(34962,n[a]),GLctx.bufferData(34962,1<<r,35048),GLctx.bindBuffer(34962,l),n[a]},getTempIndexBuffer:t=>{var r=GL.log2ceilLookup(t),n=GL.currentContext.tempIndexBuffers[r];if(n)return n;var a=GLctx.getParameter(34965);return GL.currentContext.tempIndexBuffers[r]=GLctx.createBuffer(),GLctx.bindBuffer(34963,GL.currentContext.tempIndexBuffers[r]),GLctx.bufferData(34963,1<<r,35048),GLctx.bindBuffer(34963,a),GL.currentContext.tempIndexBuffers[r]},newRenderingFrameStarted:()=>{if(GL.currentContext){var t=GL.currentContext.tempVertexBuffers1;GL.currentContext.tempVertexBuffers1=GL.currentContext.tempVertexBuffers2,GL.currentContext.tempVertexBuffers2=t,t=GL.currentContext.tempVertexBufferCounters1,GL.currentContext.tempVertexBufferCounters1=GL.currentContext.tempVertexBufferCounters2,GL.currentContext.tempVertexBufferCounters2=t;for(var r=GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE),n=0;n<=r;++n)GL.currentContext.tempVertexBufferCounters1[n]=0}},getSource:(t,r,n,a)=>{for(var o="",l=0;l<r;++l){var c=a?HEAPU32[a+l*4>>2]:void 0;o+=UTF8ToString(HEAPU32[n+l*4>>2],c)}return o},calcBufLength:(t,r,n,a)=>{if(n>0)return a*n;var o=GL.byteSizeByType[r-GL.byteSizeByTypeRoot];return t*o*a},usedTempBuffers:[],preDrawHandleClientVertexAttribBindings:t=>{GL.resetBufferBinding=!1;for(var r=0;r<GL.currentContext.maxVertexAttribs;++r){var n=GL.currentContext.clientBuffers[r];if(!(!n.clientside||!n.enabled)){GL.resetBufferBinding=!0;var a=GL.calcBufLength(n.size,n.type,n.stride,t),o=GL.getTempVertexBuffer(a);GLctx.bindBuffer(34962,o),GLctx.bufferSubData(34962,0,HEAPU8.subarray(n.ptr,n.ptr+a)),n.vertexAttribPointerAdaptor.call(GLctx,r,n.size,n.type,n.normalized,n.stride,0)}}},postDrawHandleClientVertexAttribBindings:()=>{GL.resetBufferBinding&&GLctx.bindBuffer(34962,GL.buffers[GLctx.currentArrayBufferBinding])},createContext:(t,r)=>{if(!t.getContextSafariWebGL2Fixed){let o=function(l,c){var _=t.getContextSafariWebGL2Fixed(l,c);return l=="webgl"==_ instanceof WebGLRenderingContext?_:null};t.getContextSafariWebGL2Fixed=t.getContext,t.getContext=o}var n=t.getContext("webgl2",r);if(!n)return 0;var a=GL.registerContext(n,r);return a},registerContext:(t,r)=>{var n=GL.getNewId(GL.contexts),a={handle:n,attributes:r,version:r.majorVersion,GLctx:t};t.canvas&&(t.canvas.GLctxObject=a),GL.contexts[n]=a,(typeof r.enableExtensionsByDefault>"u"||r.enableExtensionsByDefault)&&GL.initExtensions(a),a.maxVertexAttribs=a.GLctx.getParameter(34921),a.clientBuffers=[];for(var o=0;o<a.maxVertexAttribs;o++)a.clientBuffers[o]={enabled:!1,clientside:!1,size:0,type:0,normalized:0,stride:0,ptr:0,vertexAttribPointerAdaptor:null};return GL.generateTempBuffers(!1,a),n},makeContextCurrent:t=>(GL.currentContext=GL.contexts[t],Module.ctx=GLctx=GL.currentContext?.GLctx,!(t&&!GLctx)),getContext:t=>GL.contexts[t],deleteContext:t=>{GL.currentContext===GL.contexts[t]&&(GL.currentContext=null),typeof JSEvents=="object"&&JSEvents.removeAllHandlersOnTarget(GL.contexts[t].GLctx.canvas),GL.contexts[t]?.GLctx.canvas&&(GL.contexts[t].GLctx.canvas.GLctxObject=void 0),GL.contexts[t]=null},initExtensions:t=>{if(t||=GL.currentContext,!t.initExtensionsDone){t.initExtensionsDone=!0;var r=t.GLctx;webgl_enable_WEBGL_multi_draw(r),webgl_enable_EXT_polygon_offset_clamp(r),webgl_enable_EXT_clip_control(r),webgl_enable_WEBGL_polygon_mode(r),webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(r),webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(r),t.version>=2&&(r.disjointTimerQueryExt=r.getExtension("EXT_disjoint_timer_query_webgl2")),(t.version<2||!r.disjointTimerQueryExt)&&(r.disjointTimerQueryExt=r.getExtension("EXT_disjoint_timer_query"));for(var n of getEmscriptenSupportedExtensions(r))!n.includes("lose_context")&&!n.includes("debug")&&r.getExtension(n)}}},_eglCreateContext=(t,r,n,a)=>{if(t!=62e3)return EGL.setErrorCode(12296),0;for(var o=1;;){var l=HEAP32[a>>2];if(l==12440)o=HEAP32[a+4>>2];else{if(l==12344)break;return EGL.setErrorCode(12292),0}a+=8}return o<2||o>3?(EGL.setErrorCode(12293),0):(EGL.contextAttributes.majorVersion=o-1,EGL.contextAttributes.minorVersion=0,EGL.context=GL.createContext(Browser.getCanvas(),EGL.contextAttributes),EGL.context!=0?(EGL.setErrorCode(12288),GL.makeContextCurrent(EGL.context),Browser.useWebGL=!0,Browser.moduleContextCreatedCallbacks.forEach(c=>c()),GL.makeContextCurrent(null),62004):(EGL.setErrorCode(12297),0))};_eglCreateContext.sig="ppppp";var _eglCreateWindowSurface=(t,r,n,a)=>t!=62e3?(EGL.setErrorCode(12296),0):r!=62002?(EGL.setErrorCode(12293),0):(EGL.setErrorCode(12288),62006);_eglCreateWindowSurface.sig="pppip";var _eglDestroyContext=(t,r)=>t!=62e3?(EGL.setErrorCode(12296),0):r!=62004?(EGL.setErrorCode(12294),0):(GL.deleteContext(EGL.context),EGL.setErrorCode(12288),EGL.currentContext==r&&(EGL.currentContext=0),1);_eglDestroyContext.sig="ipp";var _eglDestroySurface=(t,r)=>t!=62e3?(EGL.setErrorCode(12296),0):r!=62006?(EGL.setErrorCode(12301),1):(EGL.currentReadSurface==r&&(EGL.currentReadSurface=0),EGL.currentDrawSurface==r&&(EGL.currentDrawSurface=0),EGL.setErrorCode(12288),1);_eglDestroySurface.sig="ipp";var _eglGetConfigAttrib=(t,r,n,a)=>{if(t!=62e3)return EGL.setErrorCode(12296),0;if(r!=62002)return EGL.setErrorCode(12293),0;if(!a)return EGL.setErrorCode(12300),0;switch(EGL.setErrorCode(12288),n){case 12320:return HEAP32[a>>2]=EGL.contextAttributes.alpha?32:24,1;case 12321:return HEAP32[a>>2]=EGL.contextAttributes.alpha?8:0,1;case 12322:return HEAP32[a>>2]=8,1;case 12323:return HEAP32[a>>2]=8,1;case 12324:return HEAP32[a>>2]=8,1;case 12325:return HEAP32[a>>2]=EGL.contextAttributes.depth?24:0,1;case 12326:return HEAP32[a>>2]=EGL.contextAttributes.stencil?8:0,1;case 12327:return HEAP32[a>>2]=12344,1;case 12328:return HEAP32[a>>2]=62002,1;case 12329:return HEAP32[a>>2]=0,1;case 12330:return HEAP32[a>>2]=4096,1;case 12331:return HEAP32[a>>2]=16777216,1;case 12332:return HEAP32[a>>2]=4096,1;case 12333:return HEAP32[a>>2]=0,1;case 12334:return HEAP32[a>>2]=0,1;case 12335:return HEAP32[a>>2]=12344,1;case 12337:return HEAP32[a>>2]=EGL.contextAttributes.antialias?4:0,1;case 12338:return HEAP32[a>>2]=EGL.contextAttributes.antialias?1:0,1;case 12339:return HEAP32[a>>2]=4,1;case 12340:return HEAP32[a>>2]=12344,1;case 12341:case 12342:case 12343:return HEAP32[a>>2]=-1,1;case 12345:case 12346:return HEAP32[a>>2]=0,1;case 12347:return HEAP32[a>>2]=0,1;case 12348:return HEAP32[a>>2]=1,1;case 12349:case 12350:return HEAP32[a>>2]=0,1;case 12351:return HEAP32[a>>2]=12430,1;case 12352:return HEAP32[a>>2]=4,1;case 12354:return HEAP32[a>>2]=0,1;default:return EGL.setErrorCode(12292),0}};_eglGetConfigAttrib.sig="ippip";var _eglGetDisplay=t=>(EGL.setErrorCode(12288),t!=0&&t!=1?0:62e3);_eglGetDisplay.sig="pp";var _eglGetError=()=>EGL.errorCode;_eglGetError.sig="i";var _eglInitialize=(t,r,n)=>t!=62e3?(EGL.setErrorCode(12296),0):(r&&(HEAP32[r>>2]=1),n&&(HEAP32[n>>2]=4),EGL.defaultDisplayInitialized=!0,EGL.setErrorCode(12288),1);_eglInitialize.sig="ippp";var _eglMakeCurrent=(t,r,n,a)=>t!=62e3?(EGL.setErrorCode(12296),0):a!=0&&a!=62004?(EGL.setErrorCode(12294),0):n!=0&&n!=62006||r!=0&&r!=62006?(EGL.setErrorCode(12301),0):(GL.makeContextCurrent(a?EGL.context:null),EGL.currentContext=a,EGL.currentDrawSurface=r,EGL.currentReadSurface=n,EGL.setErrorCode(12288),1);_eglMakeCurrent.sig="ipppp";var _eglQueryString=(t,r)=>{if(t!=62e3)return EGL.setErrorCode(12296),0;if(EGL.setErrorCode(12288),EGL.stringCache[r])return EGL.stringCache[r];var n;switch(r){case 12371:n=stringToNewUTF8("Emscripten");break;case 12372:n=stringToNewUTF8("1.4 Emscripten EGL");break;case 12373:n=stringToNewUTF8("");break;case 12429:n=stringToNewUTF8("OpenGL_ES");break;default:return EGL.setErrorCode(12300),0}return EGL.stringCache[r]=n,n};_eglQueryString.sig="ppi";var _eglSwapBuffers=(t,r)=>{if(!EGL.defaultDisplayInitialized)EGL.setErrorCode(12289);else if(!GLctx)EGL.setErrorCode(12290);else if(GLctx.isContextLost())EGL.setErrorCode(12302);else return EGL.setErrorCode(12288),1;return 0};_eglSwapBuffers.sig="ipp";var _eglSwapInterval=(t,r)=>t!=62e3?(EGL.setErrorCode(12296),0):(r==0?_emscripten_set_main_loop_timing(0,0):_emscripten_set_main_loop_timing(1,r),EGL.setErrorCode(12288),1);_eglSwapInterval.sig="ipi";var _eglTerminate=t=>t!=62e3?(EGL.setErrorCode(12296),0):(EGL.currentContext=0,EGL.currentReadSurface=0,EGL.currentDrawSurface=0,EGL.defaultDisplayInitialized=!1,EGL.setErrorCode(12288),1);_eglTerminate.sig="ip";var _eglWaitClient=()=>(EGL.setErrorCode(12288),1);_eglWaitClient.sig="i";var _eglWaitGL=_eglWaitClient;_eglWaitGL.sig="i";var _eglWaitNative=t=>(EGL.setErrorCode(12288),1);_eglWaitNative.sig="ii";var _emscripten_alcDevicePauseSOFT=t=>{if(!(t in AL.deviceRefCounts)){AL.alcErr=40961;return}if(!AL.paused){AL.paused=!0;for(var r in AL.contexts){var n=AL.contexts[r];n.deviceId===t&&(n.audioCtx.suspend(),clearInterval(n.interval),n.interval=null)}}};_emscripten_alcDevicePauseSOFT.sig="vi";var _emscripten_alcDeviceResumeSOFT=t=>{if(!(t in AL.deviceRefCounts)){AL.alcErr=40961;return}if(AL.paused){AL.paused=!1;for(var r in AL.contexts){var n=AL.contexts[r];n.deviceId===t&&(n.interval=setInterval(()=>AL.scheduleContextAudio(n),AL.QUEUE_INTERVAL),n.audioCtx.resume())}}};_emscripten_alcDeviceResumeSOFT.sig="vi";var _emscripten_alcGetStringiSOFT=(t,r,n)=>{if(!(t in AL.deviceRefCounts))return AL.alcErr=40961,0;if(AL.alcStringCache[r])return AL.alcStringCache[r];var a;switch(r){case 6549:if(n===0)a="Web Audio HRTF";else return AL.alcErr=40964,0;break;default:return n!==0?(AL.alcErr=40963,0):_alcGetString(t,r)}return a=stringToNewUTF8(a),AL.alcStringCache[r]=a,a};_emscripten_alcGetStringiSOFT.sig="iiii";var _emscripten_alcResetDeviceSOFT=(t,r)=>{if(!(t in AL.deviceRefCounts))return AL.alcErr=40961,0;var n=null;if(r>>=2,r)for(var a=0,o=0;a=HEAP32[r++],a!==0;)switch(o=HEAP32[r++],a){case 6546:o===1?n=!0:o===0&&(n=!1);break}if(n!==null)for(var l in AL.contexts){var c=AL.contexts[l];c.deviceId===t&&(c.hrtf=n,AL.updateContextGlobal(c))}return 1};_emscripten_alcResetDeviceSOFT.sig="iii";var readEmAsmArgsArray=[],readEmAsmArgs=(t,r)=>{assert(Array.isArray(readEmAsmArgsArray)),assert(r%16==0),readEmAsmArgsArray.length=0;for(var n;n=HEAPU8[t++];){var a=String.fromCharCode(n),o=["d","f","i","p"];o.push("j"),assert(o.includes(a),`Invalid character ${n}("${a}") in readEmAsmArgs! Use only [${o}], and do not specify "v" for void return argument.`);var l=n!=105;l&=n!=112,r+=l&&r%8?4:0,readEmAsmArgsArray.push(n==112?HEAPU32[r>>2]:n==106?HEAP64[r>>3]:n==105?HEAP32[r>>2]:HEAPF64[r>>3]),r+=l?8:4}return readEmAsmArgsArray},runEmAsmFunction=(t,r,n)=>{var a=readEmAsmArgs(r,n);return assert(ASM_CONSTS.hasOwnProperty(t),`No EM_ASM constant found at address ${t}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),ASM_CONSTS[t](...a)},_emscripten_asm_const_int=(t,r,n)=>runEmAsmFunction(t,r,n);_emscripten_asm_const_int.sig="ippp";var runMainThreadEmAsm=(t,r,n,a)=>{var o=readEmAsmArgs(r,n);return assert(ASM_CONSTS.hasOwnProperty(t),`No EM_ASM constant found at address ${t}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),ASM_CONSTS[t](...o)},_emscripten_asm_const_int_sync_on_main_thread=(t,r,n)=>runMainThreadEmAsm(t,r,n);_emscripten_asm_const_int_sync_on_main_thread.sig="ippp";var _emscripten_asm_const_ptr=(t,r,n)=>runEmAsmFunction(t,r,n);_emscripten_asm_const_ptr.sig="pppp";var _emscripten_asm_const_ptr_sync_on_main_thread=(t,r,n)=>runMainThreadEmAsm(t,r,n);_emscripten_asm_const_ptr_sync_on_main_thread.sig="pppp";var _emscripten_cancel_main_loop=()=>{MainLoop.pause(),MainLoop.func=null};_emscripten_cancel_main_loop.sig="v";var _emscripten_clear_timeout=clearTimeout;_emscripten_clear_timeout.sig="vi";var _emscripten_console_error=t=>{assert(typeof t=="number"),console.error(UTF8ToString(t))};_emscripten_console_error.sig="vp";var _emscripten_console_log=t=>{assert(typeof t=="number"),console.log(UTF8ToString(t))};_emscripten_console_log.sig="vp";var _emscripten_console_trace=t=>{assert(typeof t=="number"),console.trace(UTF8ToString(t))};_emscripten_console_trace.sig="vp";var _emscripten_console_warn=t=>{assert(typeof t=="number"),console.warn(UTF8ToString(t))};_emscripten_console_warn.sig="vp";var _emscripten_dbg=t=>dbg(UTF8ToString(t));_emscripten_dbg.sig="vp";var _emscripten_dbg_backtrace=t=>{dbg(UTF8ToString(t)+`
`+new Error().stack)};_emscripten_dbg_backtrace.sig="vp";var _emscripten_err=t=>err(UTF8ToString(t));_emscripten_err.sig="vp";var specialHTMLTargets=[0,document,window],maybeCStringToJsString=t=>t>2?UTF8ToString(t):t,findEventTarget=t=>{t=maybeCStringToJsString(t);var r=specialHTMLTargets[t]||document.querySelector(t);return r},findCanvasEventTarget=findEventTarget,_emscripten_get_canvas_element_size=(t,r,n)=>{var a=findCanvasEventTarget(t);if(!a)return-4;HEAP32[r>>2]=a.width,HEAP32[n>>2]=a.height};_emscripten_get_canvas_element_size.sig="ippp";var getCanvasElementSize=t=>{var r=stackSave(),n=stackAlloc(8),a=n+4,o=stringToUTF8OnStack(t.id);_emscripten_get_canvas_element_size(o,n,a);var l=[HEAP32[n>>2],HEAP32[a>>2]];return stackRestore(r),l},_emscripten_set_canvas_element_size=(t,r,n)=>{var a=findCanvasEventTarget(t);return a?(a.width=r,a.height=n,0):-4};_emscripten_set_canvas_element_size.sig="ipii";var setCanvasElementSize=(t,r,n)=>{if(!t.controlTransferredOffscreen)t.width=r,t.height=n;else{var a=stackSave(),o=stringToUTF8OnStack(t.id);_emscripten_set_canvas_element_size(o,r,n),stackRestore(a)}},currentFullscreenStrategy={},registerRestoreOldStyle=t=>{var r=getCanvasElementSize(t),n=r[0],a=r[1],o=t.style.width,l=t.style.height,c=t.style.backgroundColor,_=document.body.style.backgroundColor,u=t.style.paddingLeft,p=t.style.paddingRight,d=t.style.paddingTop,m=t.style.paddingBottom,f=t.style.marginLeft,g=t.style.marginRight,E=t.style.marginTop,x=t.style.marginBottom,v=document.body.style.margin,h=document.documentElement.style.overflow,b=document.body.scroll,S=t.style.imageRendering;function y(){getFullscreenElement()||(document.removeEventListener("fullscreenchange",y),document.removeEventListener("webkitfullscreenchange",y),setCanvasElementSize(t,n,a),t.style.width=o,t.style.height=l,t.style.backgroundColor=c,_||(document.body.style.backgroundColor="white"),document.body.style.backgroundColor=_,t.style.paddingLeft=u,t.style.paddingRight=p,t.style.paddingTop=d,t.style.paddingBottom=m,t.style.marginLeft=f,t.style.marginRight=g,t.style.marginTop=E,t.style.marginBottom=x,document.body.style.margin=v,document.documentElement.style.overflow=h,document.body.scroll=b,t.style.imageRendering=S,t.GLctxObject&&t.GLctxObject.GLctx.viewport(0,0,n,a),currentFullscreenStrategy.canvasResizedCallback&&getWasmTableEntry(currentFullscreenStrategy.canvasResizedCallback)(37,0,currentFullscreenStrategy.canvasResizedCallbackUserData))}return document.addEventListener("fullscreenchange",y),document.addEventListener("webkitfullscreenchange",y),y},setLetterbox=(t,r,n)=>{t.style.paddingLeft=t.style.paddingRight=n+"px",t.style.paddingTop=t.style.paddingBottom=r+"px"},getBoundingClientRect=t=>specialHTMLTargets.indexOf(t)<0?t.getBoundingClientRect():{left:0,top:0},JSEvents_resizeCanvasForFullscreen=(t,r)=>{var n=registerRestoreOldStyle(t),a=r.softFullscreen?innerWidth:screen.width,o=r.softFullscreen?innerHeight:screen.height,l=getBoundingClientRect(t),c=l.width,_=l.height,u=getCanvasElementSize(t),p=u[0],d=u[1];if(r.scaleMode==3)setLetterbox(t,(o-_)/2,(a-c)/2),a=c,o=_;else if(r.scaleMode==2)if(a*d<p*o){var m=d*a/p;setLetterbox(t,(o-m)/2,0),o=m}else{var f=p*o/d;setLetterbox(t,0,(a-f)/2),a=f}t.style.backgroundColor||="black",document.body.style.backgroundColor||="black",t.style.width=a+"px",t.style.height=o+"px",r.filteringMode==1&&(t.style.imageRendering="optimizeSpeed",t.style.imageRendering="-moz-crisp-edges",t.style.imageRendering="-o-crisp-edges",t.style.imageRendering="-webkit-optimize-contrast",t.style.imageRendering="optimize-contrast",t.style.imageRendering="crisp-edges",t.style.imageRendering="pixelated");var g=r.canvasResolutionScaleMode==2?devicePixelRatio:1;if(r.canvasResolutionScaleMode!=0){var E=a*g|0,x=o*g|0;setCanvasElementSize(t,E,x),t.GLctxObject&&t.GLctxObject.GLctx.viewport(0,0,E,x)}return n},JSEvents_requestFullscreen=(t,r)=>{if((r.scaleMode!=0||r.canvasResolutionScaleMode!=0)&&JSEvents_resizeCanvasForFullscreen(t,r),t.requestFullscreen)t.requestFullscreen();else if(t.webkitRequestFullscreen)t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);else return JSEvents.fullscreenEnabled()?-3:-1;return currentFullscreenStrategy=r,r.canvasResizedCallback&&getWasmTableEntry(r.canvasResizedCallback)(37,0,r.canvasResizedCallbackUserData),0},_emscripten_exit_fullscreen=()=>{if(!JSEvents.fullscreenEnabled())return-1;JSEvents.removeDeferredCalls(JSEvents_requestFullscreen);var t=specialHTMLTargets[1];if(t.exitFullscreen)t.fullscreenElement&&t.exitFullscreen();else if(t.webkitExitFullscreen)t.webkitFullscreenElement&&t.webkitExitFullscreen();else return-1;return 0};_emscripten_exit_fullscreen.sig="i";var requestPointerLock=t=>{if(t.requestPointerLock)t.requestPointerLock();else return document.body.requestPointerLock?-3:-1;return 0},_emscripten_exit_pointerlock=()=>(JSEvents.removeDeferredCalls(requestPointerLock),document.exitPointerLock?(document.exitPointerLock(),0):-1);_emscripten_exit_pointerlock.sig="i";var _emscripten_force_exit=t=>{warnOnce("emscripten_force_exit cannot actually shut down the runtime, as the build does not have EXIT_RUNTIME set"),__emscripten_runtime_keepalive_clear(),_exit(t)};_emscripten_force_exit.sig="vi";var fillBatteryEventData=(t,r)=>{HEAPF64[t>>3]=r.chargingTime,HEAPF64[t+8>>3]=r.dischargingTime,HEAPF64[t+16>>3]=r.level,HEAP8[t+24]=r.charging},hasBatteryAPI=()=>globalThis.navigator?.getBattery,batteryManager,_emscripten_get_battery_status=t=>hasBatteryAPI()?batteryManager?(fillBatteryEventData(t,batteryManager),0):(navigator.getBattery().then(r=>{batteryManager=r}),-7):-1;_emscripten_get_battery_status.sig="ip";var _emscripten_get_device_pixel_ratio=()=>devicePixelRatio;_emscripten_get_device_pixel_ratio.sig="d";var _emscripten_get_element_css_size=(t,r,n)=>{if(t=findEventTarget(t),!t)return-4;var a=getBoundingClientRect(t);return HEAPF64[r>>3]=a.width,HEAPF64[n>>3]=a.height,0};_emscripten_get_element_css_size.sig="ippp";var fillGamepadEventData=(t,r)=>{HEAPF64[t>>3]=r.timestamp;for(var n=0;n<r.axes.length;++n)HEAPF64[t+n*8+16>>3]=r.axes[n];for(var n=0;n<r.buttons.length;++n)typeof r.buttons[n]=="object"?HEAPF64[t+n*8+528>>3]=r.buttons[n].value:HEAPF64[t+n*8+528>>3]=r.buttons[n];for(var n=0;n<r.buttons.length;++n)typeof r.buttons[n]=="object"?HEAP8[t+n+1040]=r.buttons[n].pressed:HEAP8[t+n+1040]=r.buttons[n]==1;HEAP8[t+1104]=r.connected,HEAP32[t+1108>>2]=r.index,HEAP32[t+8>>2]=r.axes.length,HEAP32[t+12>>2]=r.buttons.length,stringToUTF8(r.id,t+1112,64),stringToUTF8(r.mapping,t+1176,64)},_emscripten_get_gamepad_status=(t,r)=>(assert(JSEvents.lastGamepadState,"emscripten_get_gamepad_status() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!"),t<0||t>=JSEvents.lastGamepadState.length?-5:JSEvents.lastGamepadState[t]?(fillGamepadEventData(r,JSEvents.lastGamepadState[t]),0):-7);_emscripten_get_gamepad_status.sig="iip";var getHeapMax=()=>2147483648,_emscripten_get_heap_max=()=>getHeapMax();_emscripten_get_heap_max.sig="p";var _emscripten_get_num_gamepads=()=>(assert(JSEvents.lastGamepadState,"emscripten_get_num_gamepads() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!"),JSEvents.lastGamepadState.length);_emscripten_get_num_gamepads.sig="i";var _emscripten_get_screen_size=(t,r)=>{HEAP32[t>>2]=screen.width,HEAP32[r>>2]=screen.height};_emscripten_get_screen_size.sig="vpp";var _emscripten_glActiveTexture=t=>GLctx.activeTexture(t);_emscripten_glActiveTexture.sig="vi";var _emscripten_glAttachShader=(t,r)=>{GLctx.attachShader(GL.programs[t],GL.shaders[r])};_emscripten_glAttachShader.sig="vii";var _emscripten_glBeginQuery=(t,r)=>{GLctx.beginQuery(t,GL.queries[r])};_emscripten_glBeginQuery.sig="vii";var _emscripten_glBeginQueryEXT=(t,r)=>{GLctx.disjointTimerQueryExt.beginQueryEXT(t,GL.queries[r])};_emscripten_glBeginQueryEXT.sig="vii";var _emscripten_glBeginTransformFeedback=t=>GLctx.beginTransformFeedback(t);_emscripten_glBeginTransformFeedback.sig="vi";var _emscripten_glBindAttribLocation=(t,r,n)=>{GLctx.bindAttribLocation(GL.programs[t],r,UTF8ToString(n))};_emscripten_glBindAttribLocation.sig="viip";var _emscripten_glBindBuffer=(t,r)=>{if(r&&!GL.buffers[r]){var n=GLctx.createBuffer();n.name=r,GL.buffers[r]=n}t==34962?GLctx.currentArrayBufferBinding=r:t==34963&&(GLctx.currentElementArrayBufferBinding=r),t==35051?GLctx.currentPixelPackBufferBinding=r:t==35052&&(GLctx.currentPixelUnpackBufferBinding=r),GLctx.bindBuffer(t,GL.buffers[r])};_emscripten_glBindBuffer.sig="vii";var _emscripten_glBindBufferBase=(t,r,n)=>{GLctx.bindBufferBase(t,r,GL.buffers[n])};_emscripten_glBindBufferBase.sig="viii";var _emscripten_glBindBufferRange=(t,r,n,a,o)=>{GLctx.bindBufferRange(t,r,GL.buffers[n],a,o)};_emscripten_glBindBufferRange.sig="viiipp";var _emscripten_glBindFramebuffer=(t,r)=>{GLctx.bindFramebuffer(t,GL.framebuffers[r])};_emscripten_glBindFramebuffer.sig="vii";var _emscripten_glBindRenderbuffer=(t,r)=>{GLctx.bindRenderbuffer(t,GL.renderbuffers[r])};_emscripten_glBindRenderbuffer.sig="vii";var _emscripten_glBindSampler=(t,r)=>{GLctx.bindSampler(t,GL.samplers[r])};_emscripten_glBindSampler.sig="vii";var _emscripten_glBindTexture=(t,r)=>{GLctx.bindTexture(t,GL.textures[r])};_emscripten_glBindTexture.sig="vii";var _emscripten_glBindTransformFeedback=(t,r)=>{GLctx.bindTransformFeedback(t,GL.transformFeedbacks[r])};_emscripten_glBindTransformFeedback.sig="vii";var _emscripten_glBindVertexArray=t=>{GLctx.bindVertexArray(GL.vaos[t]);var r=GLctx.getParameter(34965);GLctx.currentElementArrayBufferBinding=r?r.name|0:0};_emscripten_glBindVertexArray.sig="vi";var _glBindVertexArray=_emscripten_glBindVertexArray;_glBindVertexArray.sig="vi";var _emscripten_glBindVertexArrayOES=_glBindVertexArray;_emscripten_glBindVertexArrayOES.sig="vi";var _emscripten_glBlendColor=(t,r,n,a)=>GLctx.blendColor(t,r,n,a);_emscripten_glBlendColor.sig="vffff";var _emscripten_glBlendEquation=t=>GLctx.blendEquation(t);_emscripten_glBlendEquation.sig="vi";var _emscripten_glBlendEquationSeparate=(t,r)=>GLctx.blendEquationSeparate(t,r);_emscripten_glBlendEquationSeparate.sig="vii";var _emscripten_glBlendFunc=(t,r)=>GLctx.blendFunc(t,r);_emscripten_glBlendFunc.sig="vii";var _emscripten_glBlendFuncSeparate=(t,r,n,a)=>GLctx.blendFuncSeparate(t,r,n,a);_emscripten_glBlendFuncSeparate.sig="viiii";var _emscripten_glBlitFramebuffer=(t,r,n,a,o,l,c,_,u,p)=>GLctx.blitFramebuffer(t,r,n,a,o,l,c,_,u,p);_emscripten_glBlitFramebuffer.sig="viiiiiiiiii";var _emscripten_glBufferData=(t,r,n,a)=>{{n&&r?GLctx.bufferData(t,HEAPU8,a,n,r):GLctx.bufferData(t,r,a);return}};_emscripten_glBufferData.sig="vippi";var _emscripten_glBufferSubData=(t,r,n,a)=>{{n&&GLctx.bufferSubData(t,r,HEAPU8,a,n);return}};_emscripten_glBufferSubData.sig="vippp";var _emscripten_glCheckFramebufferStatus=t=>GLctx.checkFramebufferStatus(t);_emscripten_glCheckFramebufferStatus.sig="ii";var _emscripten_glClear=t=>GLctx.clear(t);_emscripten_glClear.sig="vi";var _emscripten_glClearBufferfi=(t,r,n,a)=>GLctx.clearBufferfi(t,r,n,a);_emscripten_glClearBufferfi.sig="viifi";var _emscripten_glClearBufferfv=(t,r,n)=>{GLctx.clearBufferfv(t,r,HEAPF32,n>>2)};_emscripten_glClearBufferfv.sig="viip";var _emscripten_glClearBufferiv=(t,r,n)=>{GLctx.clearBufferiv(t,r,HEAP32,n>>2)};_emscripten_glClearBufferiv.sig="viip";var _emscripten_glClearBufferuiv=(t,r,n)=>{GLctx.clearBufferuiv(t,r,HEAPU32,n>>2)};_emscripten_glClearBufferuiv.sig="viip";var _emscripten_glClearColor=(t,r,n,a)=>GLctx.clearColor(t,r,n,a);_emscripten_glClearColor.sig="vffff";var _emscripten_glClearDepthf=t=>GLctx.clearDepth(t);_emscripten_glClearDepthf.sig="vf";var _emscripten_glClearStencil=t=>GLctx.clearStencil(t);_emscripten_glClearStencil.sig="vi";var _emscripten_glClientWaitSync=(t,r,n)=>(n=Number(n),GLctx.clientWaitSync(GL.syncs[t],r,n));_emscripten_glClientWaitSync.sig="ipij";var _emscripten_glClipControlEXT=(t,r)=>{GLctx.extClipControl.clipControlEXT(t,r)};_emscripten_glClipControlEXT.sig="vii";var _emscripten_glColorMask=(t,r,n,a)=>{GLctx.colorMask(!!t,!!r,!!n,!!a)};_emscripten_glColorMask.sig="viiii";var _emscripten_glCompileShader=t=>{GLctx.compileShader(GL.shaders[t])};_emscripten_glCompileShader.sig="vi";var _emscripten_glCompressedTexImage2D=(t,r,n,a,o,l,c,_)=>{{if(GLctx.currentPixelUnpackBufferBinding||!c){GLctx.compressedTexImage2D(t,r,n,a,o,l,c,_);return}GLctx.compressedTexImage2D(t,r,n,a,o,l,HEAPU8,_,c);return}};_emscripten_glCompressedTexImage2D.sig="viiiiiiip";var _emscripten_glCompressedTexImage3D=(t,r,n,a,o,l,c,_,u)=>{GLctx.currentPixelUnpackBufferBinding?GLctx.compressedTexImage3D(t,r,n,a,o,l,c,_,u):GLctx.compressedTexImage3D(t,r,n,a,o,l,c,HEAPU8,u,_)};_emscripten_glCompressedTexImage3D.sig="viiiiiiiip";var _emscripten_glCompressedTexSubImage2D=(t,r,n,a,o,l,c,_,u)=>{{if(GLctx.currentPixelUnpackBufferBinding||!_){GLctx.compressedTexSubImage2D(t,r,n,a,o,l,c,_,u);return}GLctx.compressedTexSubImage2D(t,r,n,a,o,l,c,HEAPU8,u,_);return}};_emscripten_glCompressedTexSubImage2D.sig="viiiiiiiip";var _emscripten_glCompressedTexSubImage3D=(t,r,n,a,o,l,c,_,u,p,d)=>{GLctx.currentPixelUnpackBufferBinding?GLctx.compressedTexSubImage3D(t,r,n,a,o,l,c,_,u,p,d):GLctx.compressedTexSubImage3D(t,r,n,a,o,l,c,_,u,HEAPU8,d,p)};_emscripten_glCompressedTexSubImage3D.sig="viiiiiiiiiip";var _emscripten_glCopyBufferSubData=(t,r,n,a,o)=>GLctx.copyBufferSubData(t,r,n,a,o);_emscripten_glCopyBufferSubData.sig="viippp";var _emscripten_glCopyTexImage2D=(t,r,n,a,o,l,c,_)=>GLctx.copyTexImage2D(t,r,n,a,o,l,c,_);_emscripten_glCopyTexImage2D.sig="viiiiiiii";var _emscripten_glCopyTexSubImage2D=(t,r,n,a,o,l,c,_)=>GLctx.copyTexSubImage2D(t,r,n,a,o,l,c,_);_emscripten_glCopyTexSubImage2D.sig="viiiiiiii";var _emscripten_glCopyTexSubImage3D=(t,r,n,a,o,l,c,_,u)=>GLctx.copyTexSubImage3D(t,r,n,a,o,l,c,_,u);_emscripten_glCopyTexSubImage3D.sig="viiiiiiiii";var _emscripten_glCreateProgram=()=>{var t=GL.getNewId(GL.programs),r=GLctx.createProgram();return r.name=t,r.maxUniformLength=r.maxAttributeLength=r.maxUniformBlockNameLength=0,r.uniformIdCounter=1,GL.programs[t]=r,t};_emscripten_glCreateProgram.sig="i";var _emscripten_glCreateShader=t=>{var r=GL.getNewId(GL.shaders);return GL.shaders[r]=GLctx.createShader(t),r};_emscripten_glCreateShader.sig="ii";var _emscripten_glCullFace=t=>GLctx.cullFace(t);_emscripten_glCullFace.sig="vi";var _emscripten_glDeleteBuffers=(t,r)=>{for(var n=0;n<t;n++){var a=HEAP32[r+n*4>>2],o=GL.buffers[a];o&&(GLctx.deleteBuffer(o),o.name=0,GL.buffers[a]=null,a==GLctx.currentArrayBufferBinding&&(GLctx.currentArrayBufferBinding=0),a==GLctx.currentElementArrayBufferBinding&&(GLctx.currentElementArrayBufferBinding=0),a==GLctx.currentPixelPackBufferBinding&&(GLctx.currentPixelPackBufferBinding=0),a==GLctx.currentPixelUnpackBufferBinding&&(GLctx.currentPixelUnpackBufferBinding=0))}};_emscripten_glDeleteBuffers.sig="vip";var _emscripten_glDeleteFramebuffers=(t,r)=>{for(var n=0;n<t;++n){var a=HEAP32[r+n*4>>2],o=GL.framebuffers[a];o&&(GLctx.deleteFramebuffer(o),o.name=0,GL.framebuffers[a]=null)}};_emscripten_glDeleteFramebuffers.sig="vip";var _emscripten_glDeleteProgram=t=>{if(t){var r=GL.programs[t];if(!r){GL.recordError(1281);return}GLctx.deleteProgram(r),r.name=0,GL.programs[t]=null}};_emscripten_glDeleteProgram.sig="vi";var _emscripten_glDeleteQueries=(t,r)=>{for(var n=0;n<t;n++){var a=HEAP32[r+n*4>>2],o=GL.queries[a];o&&(GLctx.deleteQuery(o),GL.queries[a]=null)}};_emscripten_glDeleteQueries.sig="vip";var _emscripten_glDeleteQueriesEXT=(t,r)=>{for(var n=0;n<t;n++){var a=HEAP32[r+n*4>>2],o=GL.queries[a];o&&(GLctx.disjointTimerQueryExt.deleteQueryEXT(o),GL.queries[a]=null)}};_emscripten_glDeleteQueriesEXT.sig="vip";var _emscripten_glDeleteRenderbuffers=(t,r)=>{for(var n=0;n<t;n++){var a=HEAP32[r+n*4>>2],o=GL.renderbuffers[a];o&&(GLctx.deleteRenderbuffer(o),o.name=0,GL.renderbuffers[a]=null)}};_emscripten_glDeleteRenderbuffers.sig="vip";var _emscripten_glDeleteSamplers=(t,r)=>{for(var n=0;n<t;n++){var a=HEAP32[r+n*4>>2],o=GL.samplers[a];o&&(GLctx.deleteSampler(o),o.name=0,GL.samplers[a]=null)}};_emscripten_glDeleteSamplers.sig="vip";var _emscripten_glDeleteShader=t=>{if(t){var r=GL.shaders[t];if(!r){GL.recordError(1281);return}GLctx.deleteShader(r),GL.shaders[t]=null}};_emscripten_glDeleteShader.sig="vi";var _emscripten_glDeleteSync=t=>{if(t){var r=GL.syncs[t];if(!r){GL.recordError(1281);return}GLctx.deleteSync(r),r.name=0,GL.syncs[t]=null}};_emscripten_glDeleteSync.sig="vp";var _emscripten_glDeleteTextures=(t,r)=>{for(var n=0;n<t;n++){var a=HEAP32[r+n*4>>2],o=GL.textures[a];o&&(GLctx.deleteTexture(o),o.name=0,GL.textures[a]=null)}};_emscripten_glDeleteTextures.sig="vip";var _emscripten_glDeleteTransformFeedbacks=(t,r)=>{for(var n=0;n<t;n++){var a=HEAP32[r+n*4>>2],o=GL.transformFeedbacks[a];o&&(GLctx.deleteTransformFeedback(o),o.name=0,GL.transformFeedbacks[a]=null)}};_emscripten_glDeleteTransformFeedbacks.sig="vip";var _emscripten_glDeleteVertexArrays=(t,r)=>{for(var n=0;n<t;n++){var a=HEAP32[r+n*4>>2];GLctx.deleteVertexArray(GL.vaos[a]),GL.vaos[a]=null}};_emscripten_glDeleteVertexArrays.sig="vip";var _glDeleteVertexArrays=_emscripten_glDeleteVertexArrays;_glDeleteVertexArrays.sig="vip";var _emscripten_glDeleteVertexArraysOES=_glDeleteVertexArrays;_emscripten_glDeleteVertexArraysOES.sig="vip";var _emscripten_glDepthFunc=t=>GLctx.depthFunc(t);_emscripten_glDepthFunc.sig="vi";var _emscripten_glDepthMask=t=>{GLctx.depthMask(!!t)};_emscripten_glDepthMask.sig="vi";var _emscripten_glDepthRangef=(t,r)=>GLctx.depthRange(t,r);_emscripten_glDepthRangef.sig="vff";var _emscripten_glDetachShader=(t,r)=>{GLctx.detachShader(GL.programs[t],GL.shaders[r])};_emscripten_glDetachShader.sig="vii";var _emscripten_glDisable=t=>GLctx.disable(t);_emscripten_glDisable.sig="vi";var _emscripten_glDisableVertexAttribArray=t=>{var r=GL.currentContext.clientBuffers[t];r.enabled=!1,GLctx.disableVertexAttribArray(t)};_emscripten_glDisableVertexAttribArray.sig="vi";var _emscripten_glDrawArrays=(t,r,n)=>{GL.preDrawHandleClientVertexAttribBindings(r+n),GLctx.drawArrays(t,r,n),GL.postDrawHandleClientVertexAttribBindings()};_emscripten_glDrawArrays.sig="viii";var _emscripten_glDrawArraysInstanced=(t,r,n,a)=>{GLctx.drawArraysInstanced(t,r,n,a)};_emscripten_glDrawArraysInstanced.sig="viiii";var _glDrawArraysInstanced=_emscripten_glDrawArraysInstanced;_glDrawArraysInstanced.sig="viiii";var _emscripten_glDrawArraysInstancedANGLE=_glDrawArraysInstanced,_emscripten_glDrawArraysInstancedARB=_glDrawArraysInstanced,_emscripten_glDrawArraysInstancedEXT=_glDrawArraysInstanced,_emscripten_glDrawArraysInstancedNV=_glDrawArraysInstanced,tempFixedLengthArray=[],_emscripten_glDrawBuffers=(t,r)=>{for(var n=tempFixedLengthArray[t],a=0;a<t;a++)n[a]=HEAP32[r+a*4>>2];GLctx.drawBuffers(n)};_emscripten_glDrawBuffers.sig="vip";var _glDrawBuffers=_emscripten_glDrawBuffers;_glDrawBuffers.sig="vip";var _emscripten_glDrawBuffersEXT=_glDrawBuffers,_emscripten_glDrawBuffersWEBGL=_glDrawBuffers,_emscripten_glDrawElements=(t,r,n,a)=>{var o,l=0;if(!GLctx.currentElementArrayBufferBinding){var c=GL.calcBufLength(1,n,0,r);if(o=GL.getTempIndexBuffer(c),GLctx.bindBuffer(34963,o),GLctx.bufferSubData(34963,0,HEAPU8.subarray(a,a+c)),r>0)for(var _=0;_<GL.currentContext.maxVertexAttribs;++_){var u=GL.currentContext.clientBuffers[_];if(u.clientside&&u.enabled){let p;switch(n){case 5121:p=Uint8Array;break;case 5123:p=Uint16Array;break;default:GL.recordError(1282);return}l=new p(HEAPU8.buffer,a,r).reduce((d,m)=>Math.max(d,m))+1;break}}a=0}GL.preDrawHandleClientVertexAttribBindings(l),GLctx.drawElements(t,r,n,a),GL.postDrawHandleClientVertexAttribBindings(r),GLctx.currentElementArrayBufferBinding||GLctx.bindBuffer(34963,null)};_emscripten_glDrawElements.sig="viiip";var _emscripten_glDrawElementsInstanced=(t,r,n,a,o)=>{GLctx.drawElementsInstanced(t,r,n,a,o)};_emscripten_glDrawElementsInstanced.sig="viiipi";var _glDrawElementsInstanced=_emscripten_glDrawElementsInstanced;_glDrawElementsInstanced.sig="viiipi";var _emscripten_glDrawElementsInstancedANGLE=_glDrawElementsInstanced,_emscripten_glDrawElementsInstancedARB=_glDrawElementsInstanced,_emscripten_glDrawElementsInstancedEXT=_glDrawElementsInstanced,_emscripten_glDrawElementsInstancedNV=_glDrawElementsInstanced,_glDrawElements=_emscripten_glDrawElements;_glDrawElements.sig="viiip";var _emscripten_glDrawRangeElements=(t,r,n,a,o,l)=>{_glDrawElements(t,a,o,l)};_emscripten_glDrawRangeElements.sig="viiiiip";var _emscripten_glEnable=t=>GLctx.enable(t);_emscripten_glEnable.sig="vi";var _emscripten_glEnableVertexAttribArray=t=>{var r=GL.currentContext.clientBuffers[t];r.enabled=!0,GLctx.enableVertexAttribArray(t)};_emscripten_glEnableVertexAttribArray.sig="vi";var _emscripten_glEndQuery=t=>GLctx.endQuery(t);_emscripten_glEndQuery.sig="vi";var _emscripten_glEndQueryEXT=t=>{GLctx.disjointTimerQueryExt.endQueryEXT(t)};_emscripten_glEndQueryEXT.sig="vi";var _emscripten_glEndTransformFeedback=()=>GLctx.endTransformFeedback();_emscripten_glEndTransformFeedback.sig="v";var _emscripten_glFenceSync=(t,r)=>{var n=GLctx.fenceSync(t,r);if(n){var a=GL.getNewId(GL.syncs);return n.name=a,GL.syncs[a]=n,a}return 0};_emscripten_glFenceSync.sig="pii";var _emscripten_glFinish=()=>GLctx.finish();_emscripten_glFinish.sig="v";var _emscripten_glFlush=()=>GLctx.flush();_emscripten_glFlush.sig="v";var _emscripten_glFramebufferRenderbuffer=(t,r,n,a)=>{GLctx.framebufferRenderbuffer(t,r,n,GL.renderbuffers[a])};_emscripten_glFramebufferRenderbuffer.sig="viiii";var _emscripten_glFramebufferTexture2D=(t,r,n,a,o)=>{GLctx.framebufferTexture2D(t,r,n,GL.textures[a],o)};_emscripten_glFramebufferTexture2D.sig="viiiii";var _emscripten_glFramebufferTextureLayer=(t,r,n,a,o)=>{GLctx.framebufferTextureLayer(t,r,GL.textures[n],a,o)};_emscripten_glFramebufferTextureLayer.sig="viiiii";var _emscripten_glFrontFace=t=>GLctx.frontFace(t);_emscripten_glFrontFace.sig="vi";var _emscripten_glGenBuffers=(t,r)=>{GL.genObject(t,r,"createBuffer",GL.buffers)};_emscripten_glGenBuffers.sig="vip";var _emscripten_glGenFramebuffers=(t,r)=>{GL.genObject(t,r,"createFramebuffer",GL.framebuffers)};_emscripten_glGenFramebuffers.sig="vip";var _emscripten_glGenQueries=(t,r)=>{GL.genObject(t,r,"createQuery",GL.queries)};_emscripten_glGenQueries.sig="vip";var _emscripten_glGenQueriesEXT=(t,r)=>{for(var n=0;n<t;n++){var a=GLctx.disjointTimerQueryExt.createQueryEXT();if(!a){for(GL.recordError(1282);n<t;)HEAP32[r+n++*4>>2]=0;return}var o=GL.getNewId(GL.queries);a.name=o,GL.queries[o]=a,HEAP32[r+n*4>>2]=o}};_emscripten_glGenQueriesEXT.sig="vip";var _emscripten_glGenRenderbuffers=(t,r)=>{GL.genObject(t,r,"createRenderbuffer",GL.renderbuffers)};_emscripten_glGenRenderbuffers.sig="vip";var _emscripten_glGenSamplers=(t,r)=>{GL.genObject(t,r,"createSampler",GL.samplers)};_emscripten_glGenSamplers.sig="vip";var _emscripten_glGenTextures=(t,r)=>{GL.genObject(t,r,"createTexture",GL.textures)};_emscripten_glGenTextures.sig="vip";var _emscripten_glGenTransformFeedbacks=(t,r)=>{GL.genObject(t,r,"createTransformFeedback",GL.transformFeedbacks)};_emscripten_glGenTransformFeedbacks.sig="vip";var _emscripten_glGenVertexArrays=(t,r)=>{GL.genObject(t,r,"createVertexArray",GL.vaos)};_emscripten_glGenVertexArrays.sig="vip";var _glGenVertexArrays=_emscripten_glGenVertexArrays;_glGenVertexArrays.sig="vip";var _emscripten_glGenVertexArraysOES=_glGenVertexArrays;_emscripten_glGenVertexArraysOES.sig="vip";var _emscripten_glGenerateMipmap=t=>GLctx.generateMipmap(t);_emscripten_glGenerateMipmap.sig="vi";var __glGetActiveAttribOrUniform=(t,r,n,a,o,l,c,_)=>{r=GL.programs[r];var u=GLctx[t](r,n);if(u){var p=_&&stringToUTF8(u.name,_,a);o&&(HEAP32[o>>2]=p),l&&(HEAP32[l>>2]=u.size),c&&(HEAP32[c>>2]=u.type)}},_emscripten_glGetActiveAttrib=(t,r,n,a,o,l,c)=>__glGetActiveAttribOrUniform("getActiveAttrib",t,r,n,a,o,l,c);_emscripten_glGetActiveAttrib.sig="viiipppp";var _emscripten_glGetActiveUniform=(t,r,n,a,o,l,c)=>__glGetActiveAttribOrUniform("getActiveUniform",t,r,n,a,o,l,c);_emscripten_glGetActiveUniform.sig="viiipppp";var _emscripten_glGetActiveUniformBlockName=(t,r,n,a,o)=>{t=GL.programs[t];var l=GLctx.getActiveUniformBlockName(t,r);if(l)if(o&&n>0){var c=stringToUTF8(l,o,n);a&&(HEAP32[a>>2]=c)}else a&&(HEAP32[a>>2]=0)};_emscripten_glGetActiveUniformBlockName.sig="viiipp";var _emscripten_glGetActiveUniformBlockiv=(t,r,n,a)=>{if(!a){GL.recordError(1281);return}if(t=GL.programs[t],n==35393){var o=GLctx.getActiveUniformBlockName(t,r);HEAP32[a>>2]=o.length+1;return}var l=GLctx.getActiveUniformBlockParameter(t,r,n);if(l!==null)if(n==35395)for(var c=0;c<l.length;c++)HEAP32[a+c*4>>2]=l[c];else HEAP32[a>>2]=l};_emscripten_glGetActiveUniformBlockiv.sig="viiip";var _emscripten_glGetActiveUniformsiv=(t,r,n,a,o)=>{if(!o){GL.recordError(1281);return}if(r>0&&n==0){GL.recordError(1281);return}t=GL.programs[t];for(var l=[],c=0;c<r;c++)l.push(HEAP32[n+c*4>>2]);var _=GLctx.getActiveUniforms(t,l,a);if(_)for(var u=_.length,c=0;c<u;c++)HEAP32[o+c*4>>2]=_[c]};_emscripten_glGetActiveUniformsiv.sig="viipip";var _emscripten_glGetAttachedShaders=(t,r,n,a)=>{var o=GLctx.getAttachedShaders(GL.programs[t]),l=o.length;l>r&&(l=r),HEAP32[n>>2]=l;for(var c=0;c<l;++c){var _=GL.shaders.indexOf(o[c]);HEAP32[a+c*4>>2]=_}};_emscripten_glGetAttachedShaders.sig="viipp";var _emscripten_glGetAttribLocation=(t,r)=>GLctx.getAttribLocation(GL.programs[t],UTF8ToString(r));_emscripten_glGetAttribLocation.sig="iip";var readI53FromU64=t=>HEAPU32[t>>2]+HEAPU32[t+4>>2]*4294967296,writeI53ToI64=(t,r)=>{HEAPU32[t>>2]=r;var n=HEAPU32[t>>2];HEAPU32[t+4>>2]=(r-n)/4294967296;var a=r>=0?readI53FromU64(t):readI53FromI64(t),o=t>>2;a!=r&&warnOnce(`writeI53ToI64() out of range: serialized JS Number ${r} to Wasm heap as bytes lo=${ptrToString(HEAPU32[o])}, hi=${ptrToString(HEAPU32[o+1])}, which deserializes back to ${a} instead!`)},webglGetExtensions=()=>{var t=getEmscriptenSupportedExtensions(GLctx);return t=t.concat(t.map(r=>"GL_"+r)),t},emscriptenWebGLGet=(t,r,n)=>{if(!r){GL.recordError(1281);return}var a=void 0;switch(t){case 36346:a=1;break;case 36344:n!=0&&n!=1&&GL.recordError(1280);return;case 34814:case 36345:a=0;break;case 34466:var o=GLctx.getParameter(34467);a=o?o.length:0;break;case 33309:if(GL.currentContext.version<2){GL.recordError(1282);return}a=webglGetExtensions().length;break;case 33307:case 33308:if(GL.currentContext.version<2){GL.recordError(1280);return}a=t==33307?3:0;break}if(a===void 0){var l=GLctx.getParameter(t);switch(typeof l){case"number":a=l;break;case"boolean":a=l?1:0;break;case"string":GL.recordError(1280);return;case"object":if(l===null)switch(t){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:{a=0;break}default:{GL.recordError(1280);return}}else if(l instanceof Float32Array||l instanceof Uint32Array||l instanceof Int32Array||l instanceof Array){for(var c=0;c<l.length;++c)switch(n){case 0:HEAP32[r+c*4>>2]=l[c];break;case 2:HEAPF32[r+c*4>>2]=l[c];break;case 4:HEAP8[r+c]=l[c]?1:0;break}return}else try{a=l.name|0}catch(_){GL.recordError(1280),err(`GL_INVALID_ENUM in glGet${n}v: Unknown object returned from WebGL getParameter(${t})! (error: ${_})`);return}break;default:GL.recordError(1280),err(`GL_INVALID_ENUM in glGet${n}v: Native code calling glGet${n}v(${t}) and it returns ${l} of type ${typeof l}!`);return}}switch(n){case 1:writeI53ToI64(r,a);break;case 0:HEAP32[r>>2]=a;break;case 2:HEAPF32[r>>2]=a;break;case 4:HEAP8[r]=a?1:0;break}},_emscripten_glGetBooleanv=(t,r)=>emscriptenWebGLGet(t,r,4);_emscripten_glGetBooleanv.sig="vip";var _emscripten_glGetBufferParameteri64v=(t,r,n)=>{if(!n){GL.recordError(1281);return}writeI53ToI64(n,GLctx.getBufferParameter(t,r))};_emscripten_glGetBufferParameteri64v.sig="viip";var _emscripten_glGetBufferParameteriv=(t,r,n)=>{if(!n){GL.recordError(1281);return}HEAP32[n>>2]=GLctx.getBufferParameter(t,r)};_emscripten_glGetBufferParameteriv.sig="viip";var _emscripten_glGetError=()=>{var t=GLctx.getError()||GL.lastError;return GL.lastError=0,t};_emscripten_glGetError.sig="i";var _emscripten_glGetFloatv=(t,r)=>emscriptenWebGLGet(t,r,2);_emscripten_glGetFloatv.sig="vip";var _emscripten_glGetFragDataLocation=(t,r)=>GLctx.getFragDataLocation(GL.programs[t],UTF8ToString(r));_emscripten_glGetFragDataLocation.sig="iip";var _emscripten_glGetFramebufferAttachmentParameteriv=(t,r,n,a)=>{var o=GLctx.getFramebufferAttachmentParameter(t,r,n);(o instanceof WebGLRenderbuffer||o instanceof WebGLTexture)&&(o=o.name|0),HEAP32[a>>2]=o};_emscripten_glGetFramebufferAttachmentParameteriv.sig="viiip";var emscriptenWebGLGetIndexed=(t,r,n,a)=>{if(!n){GL.recordError(1281);return}var o=GLctx.getIndexedParameter(t,r),l;switch(typeof o){case"boolean":l=o?1:0;break;case"number":l=o;break;case"object":if(o===null)switch(t){case 35983:case 35368:l=0;break;default:{GL.recordError(1280);return}}else if(o instanceof WebGLBuffer)l=o.name|0;else{GL.recordError(1280);return}break;default:GL.recordError(1280);return}switch(a){case 1:writeI53ToI64(n,l);break;case 0:HEAP32[n>>2]=l;break;case 2:HEAPF32[n>>2]=l;break;case 4:HEAP8[n]=l?1:0;break;default:abort("internal emscriptenWebGLGetIndexed() error, bad type: "+a)}},_emscripten_glGetInteger64i_v=(t,r,n)=>emscriptenWebGLGetIndexed(t,r,n,1);_emscripten_glGetInteger64i_v.sig="viip";var _emscripten_glGetInteger64v=(t,r)=>{emscriptenWebGLGet(t,r,1)};_emscripten_glGetInteger64v.sig="vip";var _emscripten_glGetIntegeri_v=(t,r,n)=>emscriptenWebGLGetIndexed(t,r,n,0);_emscripten_glGetIntegeri_v.sig="viip";var _emscripten_glGetIntegerv=(t,r)=>emscriptenWebGLGet(t,r,0);_emscripten_glGetIntegerv.sig="vip";var _emscripten_glGetInternalformativ=(t,r,n,a,o)=>{if(a<0){GL.recordError(1281);return}if(!o){GL.recordError(1281);return}var l=GLctx.getInternalformatParameter(t,r,n);if(l!==null)for(var c=0;c<l.length&&c<a;++c)HEAP32[o+c*4>>2]=l[c]};_emscripten_glGetInternalformativ.sig="viiiip";var _emscripten_glGetProgramBinary=(t,r,n,a,o)=>{GL.recordError(1282)};_emscripten_glGetProgramBinary.sig="viippp";var _emscripten_glGetProgramInfoLog=(t,r,n,a)=>{var o=GLctx.getProgramInfoLog(GL.programs[t]);o===null&&(o="(unknown error)");var l=r>0&&a?stringToUTF8(o,a,r):0;n&&(HEAP32[n>>2]=l)};_emscripten_glGetProgramInfoLog.sig="viipp";var _emscripten_glGetProgramiv=(t,r,n)=>{if(!n){GL.recordError(1281);return}if(t>=GL.counter){GL.recordError(1281);return}if(t=GL.programs[t],r==35716){var a=GLctx.getProgramInfoLog(t);a===null&&(a="(unknown error)"),HEAP32[n>>2]=a.length+1}else if(r==35719){if(!t.maxUniformLength)for(var o=GLctx.getProgramParameter(t,35718),l=0;l<o;++l)t.maxUniformLength=Math.max(t.maxUniformLength,GLctx.getActiveUniform(t,l).name.length+1);HEAP32[n>>2]=t.maxUniformLength}else if(r==35722){if(!t.maxAttributeLength)for(var c=GLctx.getProgramParameter(t,35721),l=0;l<c;++l)t.maxAttributeLength=Math.max(t.maxAttributeLength,GLctx.getActiveAttrib(t,l).name.length+1);HEAP32[n>>2]=t.maxAttributeLength}else if(r==35381){if(!t.maxUniformBlockNameLength)for(var _=GLctx.getProgramParameter(t,35382),l=0;l<_;++l)t.maxUniformBlockNameLength=Math.max(t.maxUniformBlockNameLength,GLctx.getActiveUniformBlockName(t,l).length+1);HEAP32[n>>2]=t.maxUniformBlockNameLength}else HEAP32[n>>2]=GLctx.getProgramParameter(t,r)};_emscripten_glGetProgramiv.sig="viip";var _emscripten_glGetQueryObjecti64vEXT=(t,r,n)=>{if(!n){GL.recordError(1281);return}var a=GL.queries[t],o;GL.currentContext.version<2?o=GLctx.disjointTimerQueryExt.getQueryObjectEXT(a,r):o=GLctx.getQueryParameter(a,r);var l;typeof o=="boolean"?l=o?1:0:l=o,writeI53ToI64(n,l)};_emscripten_glGetQueryObjecti64vEXT.sig="viip";var _emscripten_glGetQueryObjectivEXT=(t,r,n)=>{if(!n){GL.recordError(1281);return}var a=GL.queries[t],o=GLctx.disjointTimerQueryExt.getQueryObjectEXT(a,r),l;typeof o=="boolean"?l=o?1:0:l=o,HEAP32[n>>2]=l};_emscripten_glGetQueryObjectivEXT.sig="viip";var _glGetQueryObjecti64vEXT=_emscripten_glGetQueryObjecti64vEXT,_emscripten_glGetQueryObjectui64vEXT=_glGetQueryObjecti64vEXT,_emscripten_glGetQueryObjectuiv=(t,r,n)=>{if(!n){GL.recordError(1281);return}var a=GL.queries[t],o=GLctx.getQueryParameter(a,r),l;typeof o=="boolean"?l=o?1:0:l=o,HEAP32[n>>2]=l};_emscripten_glGetQueryObjectuiv.sig="viip";var _glGetQueryObjectivEXT=_emscripten_glGetQueryObjectivEXT,_emscripten_glGetQueryObjectuivEXT=_glGetQueryObjectivEXT,_emscripten_glGetQueryiv=(t,r,n)=>{if(!n){GL.recordError(1281);return}HEAP32[n>>2]=GLctx.getQuery(t,r)};_emscripten_glGetQueryiv.sig="viip";var _emscripten_glGetQueryivEXT=(t,r,n)=>{if(!n){GL.recordError(1281);return}HEAP32[n>>2]=GLctx.disjointTimerQueryExt.getQueryEXT(t,r)};_emscripten_glGetQueryivEXT.sig="viip";var _emscripten_glGetRenderbufferParameteriv=(t,r,n)=>{if(!n){GL.recordError(1281);return}HEAP32[n>>2]=GLctx.getRenderbufferParameter(t,r)};_emscripten_glGetRenderbufferParameteriv.sig="viip";var _emscripten_glGetSamplerParameterfv=(t,r,n)=>{if(!n){GL.recordError(1281);return}HEAPF32[n>>2]=GLctx.getSamplerParameter(GL.samplers[t],r)};_emscripten_glGetSamplerParameterfv.sig="viip";var _emscripten_glGetSamplerParameteriv=(t,r,n)=>{if(!n){GL.recordError(1281);return}HEAP32[n>>2]=GLctx.getSamplerParameter(GL.samplers[t],r)};_emscripten_glGetSamplerParameteriv.sig="viip";var _emscripten_glGetShaderInfoLog=(t,r,n,a)=>{var o=GLctx.getShaderInfoLog(GL.shaders[t]);o===null&&(o="(unknown error)");var l=r>0&&a?stringToUTF8(o,a,r):0;n&&(HEAP32[n>>2]=l)};_emscripten_glGetShaderInfoLog.sig="viipp";var _emscripten_glGetShaderPrecisionFormat=(t,r,n,a)=>{var o=GLctx.getShaderPrecisionFormat(t,r);HEAP32[n>>2]=o.rangeMin,HEAP32[n+4>>2]=o.rangeMax,HEAP32[a>>2]=o.precision};_emscripten_glGetShaderPrecisionFormat.sig="viipp";var _emscripten_glGetShaderSource=(t,r,n,a)=>{var o=GLctx.getShaderSource(GL.shaders[t]);if(o){var l=r>0&&a?stringToUTF8(o,a,r):0;n&&(HEAP32[n>>2]=l)}};_emscripten_glGetShaderSource.sig="viipp";var _emscripten_glGetShaderiv=(t,r,n)=>{if(!n){GL.recordError(1281);return}if(r==35716){var a=GLctx.getShaderInfoLog(GL.shaders[t]);a===null&&(a="(unknown error)");var o=a?a.length+1:0;HEAP32[n>>2]=o}else if(r==35720){var l=GLctx.getShaderSource(GL.shaders[t]),c=l?l.length+1:0;HEAP32[n>>2]=c}else HEAP32[n>>2]=GLctx.getShaderParameter(GL.shaders[t],r)};_emscripten_glGetShaderiv.sig="viip";var _emscripten_glGetString=t=>{var r=GL.stringCache[t];if(!r){switch(t){case 7939:r=stringToNewUTF8(webglGetExtensions().join(" "));break;case 7936:case 7937:case 37445:case 37446:var n=GLctx.getParameter(t);n||GL.recordError(1280),r=n?stringToNewUTF8(n):0;break;case 7938:var a=GLctx.getParameter(7938),o=`OpenGL ES 2.0 (${a})`;o=`OpenGL ES 3.0 (${a})`,r=stringToNewUTF8(o);break;case 35724:var l=GLctx.getParameter(35724),c=/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/,_=l.match(c);_!==null&&(_[1].length==3&&(_[1]=_[1]+"0"),l=`OpenGL ES GLSL ES ${_[1]} (${l})`),r=stringToNewUTF8(l);break;default:GL.recordError(1280)}GL.stringCache[t]=r}return r};_emscripten_glGetString.sig="pi";var _emscripten_glGetStringi=(t,r)=>{if(GL.currentContext.version<2)return GL.recordError(1282),0;var n=GL.stringiCache[t];if(n)return r<0||r>=n.length?(GL.recordError(1281),0):n[r];switch(t){case 7939:var a=webglGetExtensions().map(stringToNewUTF8);return n=GL.stringiCache[t]=a,r<0||r>=n.length?(GL.recordError(1281),0):n[r];default:return GL.recordError(1280),0}};_emscripten_glGetStringi.sig="pii";var _emscripten_glGetSynciv=(t,r,n,a,o)=>{if(n<0){GL.recordError(1281);return}if(!o){GL.recordError(1281);return}var l=GLctx.getSyncParameter(GL.syncs[t],r);l!==null&&(HEAP32[o>>2]=l,a&&(HEAP32[a>>2]=1))};_emscripten_glGetSynciv.sig="vpiipp";var _emscripten_glGetTexParameterfv=(t,r,n)=>{if(!n){GL.recordError(1281);return}HEAPF32[n>>2]=GLctx.getTexParameter(t,r)};_emscripten_glGetTexParameterfv.sig="viip";var _emscripten_glGetTexParameteriv=(t,r,n)=>{if(!n){GL.recordError(1281);return}HEAP32[n>>2]=GLctx.getTexParameter(t,r)};_emscripten_glGetTexParameteriv.sig="viip";var _emscripten_glGetTransformFeedbackVarying=(t,r,n,a,o,l,c)=>{t=GL.programs[t];var _=GLctx.getTransformFeedbackVarying(t,r);if(_){if(c&&n>0){var u=stringToUTF8(_.name,c,n);a&&(HEAP32[a>>2]=u)}else a&&(HEAP32[a>>2]=0);o&&(HEAP32[o>>2]=_.size),l&&(HEAP32[l>>2]=_.type)}};_emscripten_glGetTransformFeedbackVarying.sig="viiipppp";var _emscripten_glGetUniformBlockIndex=(t,r)=>GLctx.getUniformBlockIndex(GL.programs[t],UTF8ToString(r));_emscripten_glGetUniformBlockIndex.sig="iip";var _emscripten_glGetUniformIndices=(t,r,n,a)=>{if(!a){GL.recordError(1281);return}if(r>0&&(n==0||a==0)){GL.recordError(1281);return}t=GL.programs[t];for(var o=[],l=0;l<r;l++)o.push(UTF8ToString(HEAPU32[n+l*4>>2]));var c=GLctx.getUniformIndices(t,o);if(c)for(var _=c.length,l=0;l<_;l++)HEAP32[a+l*4>>2]=c[l]};_emscripten_glGetUniformIndices.sig="viipp";var jstoi_q=t=>parseInt(t),webglGetLeftBracePos=t=>t.slice(-1)=="]"&&t.lastIndexOf("["),webglPrepareUniformLocationsBeforeFirstUse=t=>{var r=t.uniformLocsById,n=t.uniformSizeAndIdsByName,a,o;if(!r){t.uniformLocsById=r={},t.uniformArrayNamesById={};var l=GLctx.getProgramParameter(t,35718);for(a=0;a<l;++a){var c=GLctx.getActiveUniform(t,a),_=c.name,u=c.size,p=webglGetLeftBracePos(_),d=p>0?_.slice(0,p):_,m=t.uniformIdCounter;for(t.uniformIdCounter+=u,n[d]=[u,m],o=0;o<u;++o)r[m]=o,t.uniformArrayNamesById[m++]=d}}},_emscripten_glGetUniformLocation=(t,r)=>{if(r=UTF8ToString(r),t=GL.programs[t]){webglPrepareUniformLocationsBeforeFirstUse(t);var n=t.uniformLocsById,a=0,o=r,l=webglGetLeftBracePos(r);l>0&&(a=jstoi_q(r.slice(l+1))>>>0,o=r.slice(0,l));var c=t.uniformSizeAndIdsByName[o];if(c&&a<c[0]&&(a+=c[1],n[a]=n[a]||GLctx.getUniformLocation(t,r)))return a}else GL.recordError(1281);return-1};_emscripten_glGetUniformLocation.sig="iip";var webglGetUniformLocation=t=>{var r=GLctx.currentProgram;if(r){var n=r.uniformLocsById[t];return typeof n=="number"&&(r.uniformLocsById[t]=n=GLctx.getUniformLocation(r,r.uniformArrayNamesById[t]+(n>0?`[${n}]`:""))),n}else GL.recordError(1282)},emscriptenWebGLGetUniform=(t,r,n,a)=>{if(!n){GL.recordError(1281);return}t=GL.programs[t],webglPrepareUniformLocationsBeforeFirstUse(t);var o=GLctx.getUniform(t,webglGetUniformLocation(r));if(typeof o=="number"||typeof o=="boolean")switch(a){case 0:HEAP32[n>>2]=o;break;case 2:HEAPF32[n>>2]=o;break}else for(var l=0;l<o.length;l++)switch(a){case 0:HEAP32[n+l*4>>2]=o[l];break;case 2:HEAPF32[n+l*4>>2]=o[l];break}},_emscripten_glGetUniformfv=(t,r,n)=>{emscriptenWebGLGetUniform(t,r,n,2)};_emscripten_glGetUniformfv.sig="viip";var _emscripten_glGetUniformiv=(t,r,n)=>{emscriptenWebGLGetUniform(t,r,n,0)};_emscripten_glGetUniformiv.sig="viip";var _emscripten_glGetUniformuiv=(t,r,n)=>emscriptenWebGLGetUniform(t,r,n,0);_emscripten_glGetUniformuiv.sig="viip";var emscriptenWebGLGetVertexAttrib=(t,r,n,a)=>{if(!n){GL.recordError(1281);return}GL.currentContext.clientBuffers[t].enabled&&err("glGetVertexAttrib*v on client-side array: not supported, bad data returned");var o=GLctx.getVertexAttrib(t,r);if(r==34975)HEAP32[n>>2]=o&&o.name;else if(typeof o=="number"||typeof o=="boolean")switch(a){case 0:HEAP32[n>>2]=o;break;case 2:HEAPF32[n>>2]=o;break;case 5:HEAP32[n>>2]=Math.fround(o);break}else for(var l=0;l<o.length;l++)switch(a){case 0:HEAP32[n+l*4>>2]=o[l];break;case 2:HEAPF32[n+l*4>>2]=o[l];break;case 5:HEAP32[n+l*4>>2]=Math.fround(o[l]);break}},_emscripten_glGetVertexAttribIiv=(t,r,n)=>{emscriptenWebGLGetVertexAttrib(t,r,n,0)};_emscripten_glGetVertexAttribIiv.sig="viip";var _glGetVertexAttribIiv=_emscripten_glGetVertexAttribIiv;_glGetVertexAttribIiv.sig="viip";var _emscripten_glGetVertexAttribIuiv=_glGetVertexAttribIiv;_emscripten_glGetVertexAttribIuiv.sig="viip";var _emscripten_glGetVertexAttribPointerv=(t,r,n)=>{if(!n){GL.recordError(1281);return}GL.currentContext.clientBuffers[t].enabled&&err("glGetVertexAttribPointer on client-side array: not supported, bad data returned"),HEAP32[n>>2]=GLctx.getVertexAttribOffset(t,r)};_emscripten_glGetVertexAttribPointerv.sig="viip";var _emscripten_glGetVertexAttribfv=(t,r,n)=>{emscriptenWebGLGetVertexAttrib(t,r,n,2)};_emscripten_glGetVertexAttribfv.sig="viip";var _emscripten_glGetVertexAttribiv=(t,r,n)=>{emscriptenWebGLGetVertexAttrib(t,r,n,5)};_emscripten_glGetVertexAttribiv.sig="viip";var _emscripten_glHint=(t,r)=>GLctx.hint(t,r);_emscripten_glHint.sig="vii";var _emscripten_glInvalidateFramebuffer=(t,r,n)=>{for(var a=tempFixedLengthArray[r],o=0;o<r;o++)a[o]=HEAP32[n+o*4>>2];GLctx.invalidateFramebuffer(t,a)};_emscripten_glInvalidateFramebuffer.sig="viip";var _emscripten_glInvalidateSubFramebuffer=(t,r,n,a,o,l,c)=>{for(var _=tempFixedLengthArray[r],u=0;u<r;u++)_[u]=HEAP32[n+u*4>>2];GLctx.invalidateSubFramebuffer(t,_,a,o,l,c)};_emscripten_glInvalidateSubFramebuffer.sig="viipiiii";var _emscripten_glIsBuffer=t=>{var r=GL.buffers[t];return r?GLctx.isBuffer(r):0};_emscripten_glIsBuffer.sig="ii";var _emscripten_glIsEnabled=t=>GLctx.isEnabled(t);_emscripten_glIsEnabled.sig="ii";var _emscripten_glIsFramebuffer=t=>{var r=GL.framebuffers[t];return r?GLctx.isFramebuffer(r):0};_emscripten_glIsFramebuffer.sig="ii";var _emscripten_glIsProgram=t=>(t=GL.programs[t],t?GLctx.isProgram(t):0);_emscripten_glIsProgram.sig="ii";var _emscripten_glIsQuery=t=>{var r=GL.queries[t];return r?GLctx.isQuery(r):0};_emscripten_glIsQuery.sig="ii";var _emscripten_glIsQueryEXT=t=>{var r=GL.queries[t];return r?GLctx.disjointTimerQueryExt.isQueryEXT(r):0};_emscripten_glIsQueryEXT.sig="ii";var _emscripten_glIsRenderbuffer=t=>{var r=GL.renderbuffers[t];return r?GLctx.isRenderbuffer(r):0};_emscripten_glIsRenderbuffer.sig="ii";var _emscripten_glIsSampler=t=>{var r=GL.samplers[t];return r?GLctx.isSampler(r):0};_emscripten_glIsSampler.sig="ii";var _emscripten_glIsShader=t=>{var r=GL.shaders[t];return r?GLctx.isShader(r):0};_emscripten_glIsShader.sig="ii";var _emscripten_glIsSync=t=>GLctx.isSync(GL.syncs[t]);_emscripten_glIsSync.sig="ip";var _emscripten_glIsTexture=t=>{var r=GL.textures[t];return r?GLctx.isTexture(r):0};_emscripten_glIsTexture.sig="ii";var _emscripten_glIsTransformFeedback=t=>GLctx.isTransformFeedback(GL.transformFeedbacks[t]);_emscripten_glIsTransformFeedback.sig="ii";var _emscripten_glIsVertexArray=t=>{var r=GL.vaos[t];return r?GLctx.isVertexArray(r):0};_emscripten_glIsVertexArray.sig="ii";var _glIsVertexArray=_emscripten_glIsVertexArray;_glIsVertexArray.sig="ii";var _emscripten_glIsVertexArrayOES=_glIsVertexArray;_emscripten_glIsVertexArrayOES.sig="ii";var _emscripten_glLineWidth=t=>GLctx.lineWidth(t);_emscripten_glLineWidth.sig="vf";var _emscripten_glLinkProgram=t=>{t=GL.programs[t],GLctx.linkProgram(t),t.uniformLocsById=0,t.uniformSizeAndIdsByName={}};_emscripten_glLinkProgram.sig="vi";var _emscripten_glPauseTransformFeedback=()=>GLctx.pauseTransformFeedback();_emscripten_glPauseTransformFeedback.sig="v";var _emscripten_glPixelStorei=(t,r)=>{t==3317?GL.unpackAlignment=r:t==3314&&(GL.unpackRowLength=r),GLctx.pixelStorei(t,r)};_emscripten_glPixelStorei.sig="vii";var _emscripten_glPolygonModeWEBGL=(t,r)=>{GLctx.webglPolygonMode.polygonModeWEBGL(t,r)};_emscripten_glPolygonModeWEBGL.sig="vii";var _emscripten_glPolygonOffset=(t,r)=>GLctx.polygonOffset(t,r);_emscripten_glPolygonOffset.sig="vff";var _emscripten_glPolygonOffsetClampEXT=(t,r,n)=>{GLctx.extPolygonOffsetClamp.polygonOffsetClampEXT(t,r,n)};_emscripten_glPolygonOffsetClampEXT.sig="vfff";var _emscripten_glProgramBinary=(t,r,n,a)=>{GL.recordError(1280)};_emscripten_glProgramBinary.sig="viipi";var _emscripten_glProgramParameteri=(t,r,n)=>{GL.recordError(1280)};_emscripten_glProgramParameteri.sig="viii";var _emscripten_glQueryCounterEXT=(t,r)=>{GLctx.disjointTimerQueryExt.queryCounterEXT(GL.queries[t],r)};_emscripten_glQueryCounterEXT.sig="vii";var _emscripten_glReadBuffer=t=>GLctx.readBuffer(t);_emscripten_glReadBuffer.sig="vi";var heapObjectForWebGLType=t=>(t-=5120,t==0?HEAP8:t==1?HEAPU8:t==2?HEAP16:t==4?HEAP32:t==6?HEAPF32:t==5||t==28922||t==28520||t==30779||t==30782?HEAPU32:HEAPU16),toTypedArrayIndex=(t,r)=>t>>>31-Math.clz32(r.BYTES_PER_ELEMENT),_emscripten_glReadPixels=(t,r,n,a,o,l,c)=>{{if(GLctx.currentPixelPackBufferBinding){GLctx.readPixels(t,r,n,a,o,l,c);return}var _=heapObjectForWebGLType(l),u=toTypedArrayIndex(c,_);GLctx.readPixels(t,r,n,a,o,l,_,u);return}};_emscripten_glReadPixels.sig="viiiiiip";var _emscripten_glReleaseShaderCompiler=()=>{};_emscripten_glReleaseShaderCompiler.sig="v";var _emscripten_glRenderbufferStorage=(t,r,n,a)=>GLctx.renderbufferStorage(t,r,n,a);_emscripten_glRenderbufferStorage.sig="viiii";var _emscripten_glRenderbufferStorageMultisample=(t,r,n,a,o)=>GLctx.renderbufferStorageMultisample(t,r,n,a,o);_emscripten_glRenderbufferStorageMultisample.sig="viiiii";var _emscripten_glResumeTransformFeedback=()=>GLctx.resumeTransformFeedback();_emscripten_glResumeTransformFeedback.sig="v";var _emscripten_glSampleCoverage=(t,r)=>{GLctx.sampleCoverage(t,!!r)};_emscripten_glSampleCoverage.sig="vfi";var _emscripten_glSamplerParameterf=(t,r,n)=>{GLctx.samplerParameterf(GL.samplers[t],r,n)};_emscripten_glSamplerParameterf.sig="viif";var _emscripten_glSamplerParameterfv=(t,r,n)=>{var a=HEAPF32[n>>2];GLctx.samplerParameterf(GL.samplers[t],r,a)};_emscripten_glSamplerParameterfv.sig="viip";var _emscripten_glSamplerParameteri=(t,r,n)=>{GLctx.samplerParameteri(GL.samplers[t],r,n)};_emscripten_glSamplerParameteri.sig="viii";var _emscripten_glSamplerParameteriv=(t,r,n)=>{var a=HEAP32[n>>2];GLctx.samplerParameteri(GL.samplers[t],r,a)};_emscripten_glSamplerParameteriv.sig="viip";var _emscripten_glScissor=(t,r,n,a)=>GLctx.scissor(t,r,n,a);_emscripten_glScissor.sig="viiii";var _emscripten_glShaderBinary=(t,r,n,a,o)=>{GL.recordError(1280)};_emscripten_glShaderBinary.sig="vipipi";var _emscripten_glShaderSource=(t,r,n,a)=>{var o=GL.getSource(t,r,n,a);GLctx.shaderSource(GL.shaders[t],o)};_emscripten_glShaderSource.sig="viipp";var _emscripten_glStencilFunc=(t,r,n)=>GLctx.stencilFunc(t,r,n);_emscripten_glStencilFunc.sig="viii";var _emscripten_glStencilFuncSeparate=(t,r,n,a)=>GLctx.stencilFuncSeparate(t,r,n,a);_emscripten_glStencilFuncSeparate.sig="viiii";var _emscripten_glStencilMask=t=>GLctx.stencilMask(t);_emscripten_glStencilMask.sig="vi";var _emscripten_glStencilMaskSeparate=(t,r)=>GLctx.stencilMaskSeparate(t,r);_emscripten_glStencilMaskSeparate.sig="vii";var _emscripten_glStencilOp=(t,r,n)=>GLctx.stencilOp(t,r,n);_emscripten_glStencilOp.sig="viii";var _emscripten_glStencilOpSeparate=(t,r,n,a)=>GLctx.stencilOpSeparate(t,r,n,a);_emscripten_glStencilOpSeparate.sig="viiii";var computeUnpackAlignedImageSize=(t,r,n)=>{function a(c,_){return c+_-1&-_}var o=(GL.unpackRowLength||t)*n,l=a(o,GL.unpackAlignment);return r*l},colorChannelsInGlTextureFormat=t=>{var r={5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4};return r[t-6402]||1},emscriptenWebGLGetTexPixelData=(t,r,n,a,o,l)=>{var c=heapObjectForWebGLType(t),_=colorChannelsInGlTextureFormat(r)*c.BYTES_PER_ELEMENT,u=computeUnpackAlignedImageSize(n,a,_);return c.subarray(toTypedArrayIndex(o,c),toTypedArrayIndex(o+u,c))},_emscripten_glTexImage2D=(t,r,n,a,o,l,c,_,u)=>{{if(GLctx.currentPixelUnpackBufferBinding){GLctx.texImage2D(t,r,n,a,o,l,c,_,u);return}if(u){var p=heapObjectForWebGLType(_),d=toTypedArrayIndex(u,p);GLctx.texImage2D(t,r,n,a,o,l,c,_,p,d);return}}var m=u?emscriptenWebGLGetTexPixelData(_,c,a,o,u):null;GLctx.texImage2D(t,r,n,a,o,l,c,_,m)};_emscripten_glTexImage2D.sig="viiiiiiiip";var _emscripten_glTexImage3D=(t,r,n,a,o,l,c,_,u,p)=>{if(GLctx.currentPixelUnpackBufferBinding)GLctx.texImage3D(t,r,n,a,o,l,c,_,u,p);else if(p){var d=heapObjectForWebGLType(u);GLctx.texImage3D(t,r,n,a,o,l,c,_,u,d,toTypedArrayIndex(p,d))}else GLctx.texImage3D(t,r,n,a,o,l,c,_,u,null)};_emscripten_glTexImage3D.sig="viiiiiiiiip";var _emscripten_glTexParameterf=(t,r,n)=>GLctx.texParameterf(t,r,n);_emscripten_glTexParameterf.sig="viif";var _emscripten_glTexParameterfv=(t,r,n)=>{var a=HEAPF32[n>>2];GLctx.texParameterf(t,r,a)};_emscripten_glTexParameterfv.sig="viip";var _emscripten_glTexParameteri=(t,r,n)=>GLctx.texParameteri(t,r,n);_emscripten_glTexParameteri.sig="viii";var _emscripten_glTexParameteriv=(t,r,n)=>{var a=HEAP32[n>>2];GLctx.texParameteri(t,r,a)};_emscripten_glTexParameteriv.sig="viip";var _emscripten_glTexStorage2D=(t,r,n,a,o)=>GLctx.texStorage2D(t,r,n,a,o);_emscripten_glTexStorage2D.sig="viiiii";var _emscripten_glTexStorage3D=(t,r,n,a,o,l)=>GLctx.texStorage3D(t,r,n,a,o,l);_emscripten_glTexStorage3D.sig="viiiiii";var _emscripten_glTexSubImage2D=(t,r,n,a,o,l,c,_,u)=>{{if(GLctx.currentPixelUnpackBufferBinding){GLctx.texSubImage2D(t,r,n,a,o,l,c,_,u);return}if(u){var p=heapObjectForWebGLType(_);GLctx.texSubImage2D(t,r,n,a,o,l,c,_,p,toTypedArrayIndex(u,p));return}}var d=u?emscriptenWebGLGetTexPixelData(_,c,o,l,u):null;GLctx.texSubImage2D(t,r,n,a,o,l,c,_,d)};_emscripten_glTexSubImage2D.sig="viiiiiiiip";var _emscripten_glTexSubImage3D=(t,r,n,a,o,l,c,_,u,p,d)=>{if(GLctx.currentPixelUnpackBufferBinding)GLctx.texSubImage3D(t,r,n,a,o,l,c,_,u,p,d);else if(d){var m=heapObjectForWebGLType(p);GLctx.texSubImage3D(t,r,n,a,o,l,c,_,u,p,m,toTypedArrayIndex(d,m))}else GLctx.texSubImage3D(t,r,n,a,o,l,c,_,u,p,null)};_emscripten_glTexSubImage3D.sig="viiiiiiiiiip";var _emscripten_glTransformFeedbackVaryings=(t,r,n,a)=>{t=GL.programs[t];for(var o=[],l=0;l<r;l++)o.push(UTF8ToString(HEAPU32[n+l*4>>2]));GLctx.transformFeedbackVaryings(t,o,a)};_emscripten_glTransformFeedbackVaryings.sig="viipi";var _emscripten_glUniform1f=(t,r)=>{GLctx.uniform1f(webglGetUniformLocation(t),r)};_emscripten_glUniform1f.sig="vif";var _emscripten_glUniform1fv=(t,r,n)=>{r&&GLctx.uniform1fv(webglGetUniformLocation(t),HEAPF32,n>>2,r)};_emscripten_glUniform1fv.sig="viip";var _emscripten_glUniform1i=(t,r)=>{GLctx.uniform1i(webglGetUniformLocation(t),r)};_emscripten_glUniform1i.sig="vii";var _emscripten_glUniform1iv=(t,r,n)=>{r&&GLctx.uniform1iv(webglGetUniformLocation(t),HEAP32,n>>2,r)};_emscripten_glUniform1iv.sig="viip";var _emscripten_glUniform1ui=(t,r)=>{GLctx.uniform1ui(webglGetUniformLocation(t),r)};_emscripten_glUniform1ui.sig="vii";var _emscripten_glUniform1uiv=(t,r,n)=>{r&&GLctx.uniform1uiv(webglGetUniformLocation(t),HEAPU32,n>>2,r)};_emscripten_glUniform1uiv.sig="viip";var _emscripten_glUniform2f=(t,r,n)=>{GLctx.uniform2f(webglGetUniformLocation(t),r,n)};_emscripten_glUniform2f.sig="viff";var _emscripten_glUniform2fv=(t,r,n)=>{r&&GLctx.uniform2fv(webglGetUniformLocation(t),HEAPF32,n>>2,r*2)};_emscripten_glUniform2fv.sig="viip";var _emscripten_glUniform2i=(t,r,n)=>{GLctx.uniform2i(webglGetUniformLocation(t),r,n)};_emscripten_glUniform2i.sig="viii";var _emscripten_glUniform2iv=(t,r,n)=>{r&&GLctx.uniform2iv(webglGetUniformLocation(t),HEAP32,n>>2,r*2)};_emscripten_glUniform2iv.sig="viip";var _emscripten_glUniform2ui=(t,r,n)=>{GLctx.uniform2ui(webglGetUniformLocation(t),r,n)};_emscripten_glUniform2ui.sig="viii";var _emscripten_glUniform2uiv=(t,r,n)=>{r&&GLctx.uniform2uiv(webglGetUniformLocation(t),HEAPU32,n>>2,r*2)};_emscripten_glUniform2uiv.sig="viip";var _emscripten_glUniform3f=(t,r,n,a)=>{GLctx.uniform3f(webglGetUniformLocation(t),r,n,a)};_emscripten_glUniform3f.sig="vifff";var _emscripten_glUniform3fv=(t,r,n)=>{r&&GLctx.uniform3fv(webglGetUniformLocation(t),HEAPF32,n>>2,r*3)};_emscripten_glUniform3fv.sig="viip";var _emscripten_glUniform3i=(t,r,n,a)=>{GLctx.uniform3i(webglGetUniformLocation(t),r,n,a)};_emscripten_glUniform3i.sig="viiii";var _emscripten_glUniform3iv=(t,r,n)=>{r&&GLctx.uniform3iv(webglGetUniformLocation(t),HEAP32,n>>2,r*3)};_emscripten_glUniform3iv.sig="viip";var _emscripten_glUniform3ui=(t,r,n,a)=>{GLctx.uniform3ui(webglGetUniformLocation(t),r,n,a)};_emscripten_glUniform3ui.sig="viiii";var _emscripten_glUniform3uiv=(t,r,n)=>{r&&GLctx.uniform3uiv(webglGetUniformLocation(t),HEAPU32,n>>2,r*3)};_emscripten_glUniform3uiv.sig="viip";var _emscripten_glUniform4f=(t,r,n,a,o)=>{GLctx.uniform4f(webglGetUniformLocation(t),r,n,a,o)};_emscripten_glUniform4f.sig="viffff";var _emscripten_glUniform4fv=(t,r,n)=>{r&&GLctx.uniform4fv(webglGetUniformLocation(t),HEAPF32,n>>2,r*4)};_emscripten_glUniform4fv.sig="viip";var _emscripten_glUniform4i=(t,r,n,a,o)=>{GLctx.uniform4i(webglGetUniformLocation(t),r,n,a,o)};_emscripten_glUniform4i.sig="viiiii";var _emscripten_glUniform4iv=(t,r,n)=>{r&&GLctx.uniform4iv(webglGetUniformLocation(t),HEAP32,n>>2,r*4)};_emscripten_glUniform4iv.sig="viip";var _emscripten_glUniform4ui=(t,r,n,a,o)=>{GLctx.uniform4ui(webglGetUniformLocation(t),r,n,a,o)};_emscripten_glUniform4ui.sig="viiiii";var _emscripten_glUniform4uiv=(t,r,n)=>{r&&GLctx.uniform4uiv(webglGetUniformLocation(t),HEAPU32,n>>2,r*4)};_emscripten_glUniform4uiv.sig="viip";var _emscripten_glUniformBlockBinding=(t,r,n)=>{t=GL.programs[t],GLctx.uniformBlockBinding(t,r,n)};_emscripten_glUniformBlockBinding.sig="viii";var _emscripten_glUniformMatrix2fv=(t,r,n,a)=>{r&&GLctx.uniformMatrix2fv(webglGetUniformLocation(t),!!n,HEAPF32,a>>2,r*4)};_emscripten_glUniformMatrix2fv.sig="viiip";var _emscripten_glUniformMatrix2x3fv=(t,r,n,a)=>{r&&GLctx.uniformMatrix2x3fv(webglGetUniformLocation(t),!!n,HEAPF32,a>>2,r*6)};_emscripten_glUniformMatrix2x3fv.sig="viiip";var _emscripten_glUniformMatrix2x4fv=(t,r,n,a)=>{r&&GLctx.uniformMatrix2x4fv(webglGetUniformLocation(t),!!n,HEAPF32,a>>2,r*8)};_emscripten_glUniformMatrix2x4fv.sig="viiip";var _emscripten_glUniformMatrix3fv=(t,r,n,a)=>{r&&GLctx.uniformMatrix3fv(webglGetUniformLocation(t),!!n,HEAPF32,a>>2,r*9)};_emscripten_glUniformMatrix3fv.sig="viiip";var _emscripten_glUniformMatrix3x2fv=(t,r,n,a)=>{r&&GLctx.uniformMatrix3x2fv(webglGetUniformLocation(t),!!n,HEAPF32,a>>2,r*6)};_emscripten_glUniformMatrix3x2fv.sig="viiip";var _emscripten_glUniformMatrix3x4fv=(t,r,n,a)=>{r&&GLctx.uniformMatrix3x4fv(webglGetUniformLocation(t),!!n,HEAPF32,a>>2,r*12)};_emscripten_glUniformMatrix3x4fv.sig="viiip";var _emscripten_glUniformMatrix4fv=(t,r,n,a)=>{r&&GLctx.uniformMatrix4fv(webglGetUniformLocation(t),!!n,HEAPF32,a>>2,r*16)};_emscripten_glUniformMatrix4fv.sig="viiip";var _emscripten_glUniformMatrix4x2fv=(t,r,n,a)=>{r&&GLctx.uniformMatrix4x2fv(webglGetUniformLocation(t),!!n,HEAPF32,a>>2,r*8)};_emscripten_glUniformMatrix4x2fv.sig="viiip";var _emscripten_glUniformMatrix4x3fv=(t,r,n,a)=>{r&&GLctx.uniformMatrix4x3fv(webglGetUniformLocation(t),!!n,HEAPF32,a>>2,r*12)};_emscripten_glUniformMatrix4x3fv.sig="viiip";var _emscripten_glUseProgram=t=>{t=GL.programs[t],GLctx.useProgram(t),GLctx.currentProgram=t};_emscripten_glUseProgram.sig="vi";var _emscripten_glValidateProgram=t=>{GLctx.validateProgram(GL.programs[t])};_emscripten_glValidateProgram.sig="vi";var _emscripten_glVertexAttrib1f=(t,r)=>GLctx.vertexAttrib1f(t,r);_emscripten_glVertexAttrib1f.sig="vif";var _emscripten_glVertexAttrib1fv=(t,r)=>{GLctx.vertexAttrib1f(t,HEAPF32[r>>2])};_emscripten_glVertexAttrib1fv.sig="vip";var _emscripten_glVertexAttrib2f=(t,r,n)=>GLctx.vertexAttrib2f(t,r,n);_emscripten_glVertexAttrib2f.sig="viff";var _emscripten_glVertexAttrib2fv=(t,r)=>{GLctx.vertexAttrib2f(t,HEAPF32[r>>2],HEAPF32[r+4>>2])};_emscripten_glVertexAttrib2fv.sig="vip";var _emscripten_glVertexAttrib3f=(t,r,n,a)=>GLctx.vertexAttrib3f(t,r,n,a);_emscripten_glVertexAttrib3f.sig="vifff";var _emscripten_glVertexAttrib3fv=(t,r)=>{GLctx.vertexAttrib3f(t,HEAPF32[r>>2],HEAPF32[r+4>>2],HEAPF32[r+8>>2])};_emscripten_glVertexAttrib3fv.sig="vip";var _emscripten_glVertexAttrib4f=(t,r,n,a,o)=>GLctx.vertexAttrib4f(t,r,n,a,o);_emscripten_glVertexAttrib4f.sig="viffff";var _emscripten_glVertexAttrib4fv=(t,r)=>{GLctx.vertexAttrib4f(t,HEAPF32[r>>2],HEAPF32[r+4>>2],HEAPF32[r+8>>2],HEAPF32[r+12>>2])};_emscripten_glVertexAttrib4fv.sig="vip";var _emscripten_glVertexAttribDivisor=(t,r)=>{GLctx.vertexAttribDivisor(t,r)};_emscripten_glVertexAttribDivisor.sig="vii";var _glVertexAttribDivisor=_emscripten_glVertexAttribDivisor;_glVertexAttribDivisor.sig="vii";var _emscripten_glVertexAttribDivisorANGLE=_glVertexAttribDivisor,_emscripten_glVertexAttribDivisorARB=_glVertexAttribDivisor,_emscripten_glVertexAttribDivisorEXT=_glVertexAttribDivisor,_emscripten_glVertexAttribDivisorNV=_glVertexAttribDivisor,_emscripten_glVertexAttribI4i=(t,r,n,a,o)=>GLctx.vertexAttribI4i(t,r,n,a,o);_emscripten_glVertexAttribI4i.sig="viiiii";var _emscripten_glVertexAttribI4iv=(t,r)=>{GLctx.vertexAttribI4i(t,HEAP32[r>>2],HEAP32[r+4>>2],HEAP32[r+8>>2],HEAP32[r+12>>2])};_emscripten_glVertexAttribI4iv.sig="vip";var _emscripten_glVertexAttribI4ui=(t,r,n,a,o)=>GLctx.vertexAttribI4ui(t,r,n,a,o);_emscripten_glVertexAttribI4ui.sig="viiiii";var _emscripten_glVertexAttribI4uiv=(t,r)=>{GLctx.vertexAttribI4ui(t,HEAPU32[r>>2],HEAPU32[r+4>>2],HEAPU32[r+8>>2],HEAPU32[r+12>>2])};_emscripten_glVertexAttribI4uiv.sig="vip";var _emscripten_glVertexAttribIPointer=(t,r,n,a,o)=>{GLctx.vertexAttribIPointer(t,r,n,a,o)};_emscripten_glVertexAttribIPointer.sig="viiiip";var _emscripten_glVertexAttribPointer=(t,r,n,a,o,l)=>{var c=GL.currentContext.clientBuffers[t];if(!GLctx.currentArrayBufferBinding){c.size=r,c.type=n,c.normalized=a,c.stride=o,c.ptr=l,c.clientside=!0,c.vertexAttribPointerAdaptor=function(_,u,p,d,m,f){this.vertexAttribPointer(_,u,p,d,m,f)};return}c.clientside=!1,GLctx.vertexAttribPointer(t,r,n,!!a,o,l)};_emscripten_glVertexAttribPointer.sig="viiiiip";var _emscripten_glViewport=(t,r,n,a)=>GLctx.viewport(t,r,n,a);_emscripten_glViewport.sig="viiii";var _emscripten_glWaitSync=(t,r,n)=>{n=Number(n),GLctx.waitSync(GL.syncs[t],r,n)};_emscripten_glWaitSync.sig="vpij";var _emscripten_has_asyncify=()=>0;_emscripten_has_asyncify.sig="i";var _emscripten_net_bind=(t,r,n)=>Module.net?.bind?.(t,r,n)??-1,_emscripten_net_closesocket=t=>Module.net?.closesocket?.(t)??-1,_emscripten_net_getaddrinfo=(t,r,n,a)=>Module.net?.getaddrinfo?.(t,r,n,a)??-1,_emscripten_net_gethostname=(t,r)=>Module.net?.gethostname?.(t,r)??-1,_emscripten_net_getsockname=(t,r,n)=>Module.net?.getsockname?.(t,r,n)??-1,_emscripten_net_recvfrom=(t,r,n,a,o,l)=>Module.net?.recvfrom?.(t,r,n,a,o,l)??-1,_emscripten_net_sendto=(t,r,n,a,o,l)=>Module.net?.sendto?.(t,r,n,a,o,l)??-1,_emscripten_net_socket=(t,r,n)=>Module.net?.socket?.(t,r,n)??-1,_emscripten_out=t=>out(UTF8ToString(t));_emscripten_out.sig="vp";class HandleAllocator{allocated=[void 0];freelist=[];get(r){return assert(this.allocated[r]!==void 0,`invalid handle: ${r}`),this.allocated[r]}has(r){return this.allocated[r]!==void 0}allocate(r){var n=this.freelist.pop()||this.allocated.length;return this.allocated[n]=r,n}free(r){assert(this.allocated[r]!==void 0),this.allocated[r]=void 0,this.freelist.push(r)}}var promiseMap=new HandleAllocator,makePromise=()=>{var t={};return t.promise=new Promise((r,n)=>{t.reject=n,t.resolve=r}),t.id=promiseMap.allocate(t),t},_emscripten_promise_create=()=>makePromise().id;_emscripten_promise_create.sig="p";var _emscripten_promise_destroy=t=>{promiseMap.free(t)};_emscripten_promise_destroy.sig="vp";var getPromise=t=>promiseMap.get(t).promise,_emscripten_promise_resolve=(t,r,n)=>{var a=promiseMap.get(t);switch(r){case 0:a.resolve(n);return;case 1:a.resolve(getPromise(n));return;case 2:a.resolve(getPromise(n)),_emscripten_promise_destroy(n);return;case 3:a.reject(n);return}abort("unexpected promise callback result "+r)};_emscripten_promise_resolve.sig="vpip";var doRequestFullscreen=(t,r)=>JSEvents.fullscreenEnabled()?(t=findEventTarget(t),t?!t.requestFullscreen&&!t.webkitRequestFullscreen?-3:JSEvents.canPerformEventHandlerRequests()?JSEvents_requestFullscreen(t,r):r.deferUntilInEventHandler?(JSEvents.deferCall(JSEvents_requestFullscreen,1,[t,r]),1):-2:-4):-1,_emscripten_request_fullscreen_strategy=(t,r,n)=>{var a={scaleMode:HEAP32[n>>2],canvasResolutionScaleMode:HEAP32[n+4>>2],filteringMode:HEAP32[n+8>>2],deferUntilInEventHandler:r,canvasResizedCallback:HEAP32[n+12>>2],canvasResizedCallbackUserData:HEAP32[n+16>>2]};return doRequestFullscreen(t,a)};_emscripten_request_fullscreen_strategy.sig="ipip";var _emscripten_request_pointerlock=(t,r)=>(t=findEventTarget(t),t?t.requestPointerLock?JSEvents.canPerformEventHandlerRequests()?requestPointerLock(t):r?(JSEvents.deferCall(requestPointerLock,2,[t]),1):-2:-1:-4);_emscripten_request_pointerlock.sig="ipi";var growMemory=t=>{var r=wasmMemory.buffer.byteLength,n=(t-r+65535)/65536|0;try{return wasmMemory.grow(n),updateMemoryViews(),1}catch(a){err(`growMemory: Attempted to grow heap from ${r} bytes to ${t} bytes, but got error: ${a}`)}},_emscripten_resize_heap=t=>{var r=HEAPU8.length;t>>>=0,assert(t>r);var n=getHeapMax();if(t>n)return err(`Cannot enlarge memory, requested ${t} bytes, but the limit is ${n} bytes!`),!1;for(var a=1;a<=4;a*=2){var o=r*(1+.2/a);o=Math.min(o,t+100663296);var l=Math.min(n,alignMemory(Math.max(t,o),65536)),c=growMemory(l);if(c)return!0}return err(`Failed to grow the heap from ${r} bytes to ${l} bytes, not enough memory!`),!1};_emscripten_resize_heap.sig="ip";var _emscripten_sample_gamepad_data=()=>{try{if(navigator.getGamepads)return(JSEvents.lastGamepadState=navigator.getGamepads())?0:-1}catch(t){err(`navigator.getGamepads() exists, but failed to execute with exception ${t}. Disabling Gamepad access.`),navigator.getGamepads=null}return-1};_emscripten_sample_gamepad_data.sig="i";var registerBeforeUnloadEventCallback=(t,r,n,a,o,l)=>{var c=u=>{var p=getWasmTableEntry(a)(o,0,r);if(p&&(p=UTF8ToString(p)),p)return u.preventDefault(),u.returnValue=p,p},_={target:findEventTarget(t),eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:c,useCapture:n};return JSEvents.registerOrRemoveHandler(_)},_emscripten_set_beforeunload_callback_on_thread=(t,r,n)=>typeof onbeforeunload>"u"?-1:n!==1?-5:registerBeforeUnloadEventCallback(2,t,!0,r,28,"beforeunload");_emscripten_set_beforeunload_callback_on_thread.sig="ippp";var registerFocusEventCallback=(t,r,n,a,o,l,c)=>{var _=256;JSEvents.focusEvent||=_malloc(_);var u=d=>{var m=JSEvents.getNodeNameForTarget(d.target),f=d.target.id?d.target.id:"",g=JSEvents.focusEvent;stringToUTF8(m,g+0,128),stringToUTF8(f,g+128,128),getWasmTableEntry(a)(o,g,r)&&d.preventDefault()},p={target:findEventTarget(t),eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_blur_callback_on_thread=(t,r,n,a,o)=>registerFocusEventCallback(t,r,n,a,12,"blur");_emscripten_set_blur_callback_on_thread.sig="ippipp";var _emscripten_set_element_css_size=(t,r,n)=>(t=findEventTarget(t),t?(t.style.width=r+"px",t.style.height=n+"px",0):-4);_emscripten_set_element_css_size.sig="ipdd";var _emscripten_set_focus_callback_on_thread=(t,r,n,a,o)=>registerFocusEventCallback(t,r,n,a,13,"focus");_emscripten_set_focus_callback_on_thread.sig="ippipp";var fillFullscreenChangeEventData=t=>{var r=getFullscreenElement(),n=!!r;HEAP8[t]=n,HEAP8[t+1]=JSEvents.fullscreenEnabled();var a=n?r:JSEvents.previousFullscreenElement,o=JSEvents.getNodeNameForTarget(a),l=a?.id||"";stringToUTF8(o,t+2,128),stringToUTF8(l,t+130,128),HEAP32[t+260>>2]=a?a.clientWidth:0,HEAP32[t+264>>2]=a?a.clientHeight:0,HEAP32[t+268>>2]=screen.width,HEAP32[t+272>>2]=screen.height,n&&(JSEvents.previousFullscreenElement=r)},registerFullscreenChangeEventCallback=(t,r,n,a,o,l,c)=>{var _=276;JSEvents.fullscreenChangeEvent||=_malloc(_);var u=d=>{var m=JSEvents.fullscreenChangeEvent;fillFullscreenChangeEventData(m),getWasmTableEntry(a)(o,m,r)&&d.preventDefault()},p={target:t,eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_fullscreenchange_callback_on_thread=(t,r,n,a,o)=>JSEvents.fullscreenEnabled()?(t=findEventTarget(t),t?(registerFullscreenChangeEventCallback(t,r,n,a,19,"webkitfullscreenchange"),registerFullscreenChangeEventCallback(t,r,n,a,19,"fullscreenchange")):-4):-1;_emscripten_set_fullscreenchange_callback_on_thread.sig="ippipp";var registerGamepadEventCallback=(t,r,n,a,o,l,c)=>{var _=1240;JSEvents.gamepadEvent||=_malloc(_);var u=d=>{var m=JSEvents.gamepadEvent;fillGamepadEventData(m,d.gamepad),getWasmTableEntry(a)(o,m,r)&&d.preventDefault()},p={target:findEventTarget(t),allowsDeferredCalls:!0,eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_gamepadconnected_callback_on_thread=(t,r,n,a)=>_emscripten_sample_gamepad_data()?-1:registerGamepadEventCallback(2,t,r,n,26,"gamepadconnected");_emscripten_set_gamepadconnected_callback_on_thread.sig="ipipp";var _emscripten_set_gamepaddisconnected_callback_on_thread=(t,r,n,a)=>_emscripten_sample_gamepad_data()?-1:registerGamepadEventCallback(2,t,r,n,27,"gamepaddisconnected");_emscripten_set_gamepaddisconnected_callback_on_thread.sig="ipipp";var registerKeyEventCallback=(t,r,n,a,o,l,c)=>{var _=160;JSEvents.keyEvent||=_malloc(_);var u=d=>{assert(d);var m=JSEvents.keyEvent;HEAPF64[m>>3]=d.timeStamp;var f=m>>2;HEAP32[f+2]=d.location,HEAP8[m+12]=d.ctrlKey,HEAP8[m+13]=d.shiftKey,HEAP8[m+14]=d.altKey,HEAP8[m+15]=d.metaKey,HEAP8[m+16]=d.repeat,HEAP32[f+5]=d.charCode,HEAP32[f+6]=d.keyCode,HEAP32[f+7]=d.which,stringToUTF8(d.key||"",m+32,32),stringToUTF8(d.code||"",m+64,32),stringToUTF8(d.char||"",m+96,32),stringToUTF8(d.locale||"",m+128,32),getWasmTableEntry(a)(o,m,r)&&d.preventDefault()},p={target:findEventTarget(t),eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_keydown_callback_on_thread=(t,r,n,a,o)=>registerKeyEventCallback(t,r,n,a,2,"keydown");_emscripten_set_keydown_callback_on_thread.sig="ippipp";var _emscripten_set_keypress_callback_on_thread=(t,r,n,a,o)=>registerKeyEventCallback(t,r,n,a,1,"keypress");_emscripten_set_keypress_callback_on_thread.sig="ippipp";var _emscripten_set_keyup_callback_on_thread=(t,r,n,a,o)=>registerKeyEventCallback(t,r,n,a,3,"keyup");_emscripten_set_keyup_callback_on_thread.sig="ippipp";var _emscripten_set_main_loop_arg=(t,r,n,a)=>{var o=()=>getWasmTableEntry(t)(r);setMainLoop(o,n,a,r)};_emscripten_set_main_loop_arg.sig="vppii";var fillMouseEventData=(t,r,n)=>{assert(t%4==0),HEAPF64[t>>3]=r.timeStamp;var a=t>>2;HEAP32[a+2]=r.screenX,HEAP32[a+3]=r.screenY,HEAP32[a+4]=r.clientX,HEAP32[a+5]=r.clientY,HEAP8[t+24]=r.ctrlKey,HEAP8[t+25]=r.shiftKey,HEAP8[t+26]=r.altKey,HEAP8[t+27]=r.metaKey,HEAP16[a*2+14]=r.button,HEAP16[a*2+15]=r.buttons,HEAP32[a+8]=r.movementX,HEAP32[a+9]=r.movementY;var o=getBoundingClientRect(n);HEAP32[a+10]=r.clientX-(o.left|0),HEAP32[a+11]=r.clientY-(o.top|0)},registerMouseEventCallback=(t,r,n,a,o,l,c)=>{var _=64;JSEvents.mouseEvent||=_malloc(_),t=findEventTarget(t);var u=d=>{fillMouseEventData(JSEvents.mouseEvent,d,t),getWasmTableEntry(a)(o,JSEvents.mouseEvent,r)&&d.preventDefault()},p={target:t,allowsDeferredCalls:l!="mousemove"&&l!="mouseenter"&&l!="mouseleave",eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_mousedown_callback_on_thread=(t,r,n,a,o)=>registerMouseEventCallback(t,r,n,a,5,"mousedown");_emscripten_set_mousedown_callback_on_thread.sig="ippipp";var _emscripten_set_mouseenter_callback_on_thread=(t,r,n,a,o)=>registerMouseEventCallback(t,r,n,a,33,"mouseenter");_emscripten_set_mouseenter_callback_on_thread.sig="ippipp";var _emscripten_set_mouseleave_callback_on_thread=(t,r,n,a,o)=>registerMouseEventCallback(t,r,n,a,34,"mouseleave");_emscripten_set_mouseleave_callback_on_thread.sig="ippipp";var _emscripten_set_mousemove_callback_on_thread=(t,r,n,a,o)=>registerMouseEventCallback(t,r,n,a,8,"mousemove");_emscripten_set_mousemove_callback_on_thread.sig="ippipp";var _emscripten_set_mouseup_callback_on_thread=(t,r,n,a,o)=>registerMouseEventCallback(t,r,n,a,6,"mouseup");_emscripten_set_mouseup_callback_on_thread.sig="ippipp";var fillPointerlockChangeEventData=t=>{var r=document.pointerLockElement,n=!!r;HEAP8[t]=n;var a=JSEvents.getNodeNameForTarget(r),o=r?.id||"";stringToUTF8(a,t+1,128),stringToUTF8(o,t+129,128)},registerPointerlockChangeEventCallback=(t,r,n,a,o,l,c)=>{var _=257;JSEvents.pointerlockChangeEvent||=_malloc(_);var u=d=>{var m=JSEvents.pointerlockChangeEvent;fillPointerlockChangeEventData(m),getWasmTableEntry(a)(o,m,r)&&d.preventDefault()},p={target:t,eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_pointerlockchange_callback_on_thread=(t,r,n,a,o)=>document.body?.requestPointerLock?(t=findEventTarget(t),t?registerPointerlockChangeEventCallback(t,r,n,a,20,"pointerlockchange"):-4):-1;_emscripten_set_pointerlockchange_callback_on_thread.sig="ippipp";var registerUiEventCallback=(t,r,n,a,o,l,c)=>{var _=36;JSEvents.uiEvent||=_malloc(_),t=findEventTarget(t);var u=d=>{if(d.target==t){var m=document.body;if(m){var f=JSEvents.uiEvent;HEAP32[f>>2]=0,HEAP32[f+4>>2]=m.clientWidth,HEAP32[f+8>>2]=m.clientHeight,HEAP32[f+12>>2]=innerWidth,HEAP32[f+16>>2]=innerHeight,HEAP32[f+20>>2]=outerWidth,HEAP32[f+24>>2]=outerHeight,HEAP32[f+28>>2]=pageXOffset|0,HEAP32[f+32>>2]=pageYOffset|0,getWasmTableEntry(a)(o,f,r)&&d.preventDefault()}}},p={target:t,eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_resize_callback_on_thread=(t,r,n,a,o)=>registerUiEventCallback(t,r,n,a,10,"resize");_emscripten_set_resize_callback_on_thread.sig="ippipp";var _emscripten_set_timeout=(t,r,n)=>safeSetTimeout(()=>getWasmTableEntry(t)(n),r);_emscripten_set_timeout.sig="ipdp";var registerTouchEventCallback=(t,r,n,a,o,l,c)=>{var _=1552;JSEvents.touchEvent||=_malloc(_),t=findEventTarget(t);var u=d=>{assert(d);var m={},f=d.touches;for(let b of f)b.isChanged=b.onTarget=0,m[b.identifier]=b;for(let b of d.changedTouches)b.isChanged=1,m[b.identifier]=b;for(let b of d.targetTouches)m[b.identifier].onTarget=1;var g=JSEvents.touchEvent;HEAPF64[g>>3]=d.timeStamp,HEAP8[g+12]=d.ctrlKey,HEAP8[g+13]=d.shiftKey,HEAP8[g+14]=d.altKey,HEAP8[g+15]=d.metaKey;var E=g+16,x=getBoundingClientRect(t),v=0;for(let b of Object.values(m)){var h=E>>2;if(HEAP32[h+0]=b.identifier,HEAP32[h+1]=b.screenX,HEAP32[h+2]=b.screenY,HEAP32[h+3]=b.clientX,HEAP32[h+4]=b.clientY,HEAP32[h+5]=b.pageX,HEAP32[h+6]=b.pageY,HEAP8[E+28]=b.isChanged,HEAP8[E+29]=b.onTarget,HEAP32[h+8]=b.clientX-(x.left|0),HEAP32[h+9]=b.clientY-(x.top|0),E+=48,++v>31)break}HEAP32[g+8>>2]=v,getWasmTableEntry(a)(o,g,r)&&d.preventDefault()},p={target:t,allowsDeferredCalls:l=="touchstart"||l=="touchend",eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_touchcancel_callback_on_thread=(t,r,n,a,o)=>registerTouchEventCallback(t,r,n,a,25,"touchcancel");_emscripten_set_touchcancel_callback_on_thread.sig="ippipp";var _emscripten_set_touchend_callback_on_thread=(t,r,n,a,o)=>registerTouchEventCallback(t,r,n,a,23,"touchend");_emscripten_set_touchend_callback_on_thread.sig="ippipp";var _emscripten_set_touchmove_callback_on_thread=(t,r,n,a,o)=>registerTouchEventCallback(t,r,n,a,24,"touchmove");_emscripten_set_touchmove_callback_on_thread.sig="ippipp";var _emscripten_set_touchstart_callback_on_thread=(t,r,n,a,o)=>registerTouchEventCallback(t,r,n,a,22,"touchstart");_emscripten_set_touchstart_callback_on_thread.sig="ippipp";var fillVisibilityChangeEventData=t=>{var r=["hidden","visible","prerender","unloaded"],n=r.indexOf(document.visibilityState);HEAP8[t]=document.hidden,HEAP32[t+4>>2]=n},registerVisibilityChangeEventCallback=(t,r,n,a,o,l,c)=>{var _=8;JSEvents.visibilityChangeEvent||=_malloc(_);var u=d=>{var m=JSEvents.visibilityChangeEvent;fillVisibilityChangeEventData(m),getWasmTableEntry(a)(o,m,r)&&d.preventDefault()},p={target:t,eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_visibilitychange_callback_on_thread=(t,r,n,a)=>registerVisibilityChangeEventCallback(specialHTMLTargets[1],t,r,n,21,"visibilitychange");_emscripten_set_visibilitychange_callback_on_thread.sig="ipipp";var registerWheelEventCallback=(t,r,n,a,o,l,c)=>{var _=96;JSEvents.wheelEvent||=_malloc(_);var u=d=>{var m=JSEvents.wheelEvent;fillMouseEventData(m,d,t),HEAPF64[m+64>>3]=d.deltaX,HEAPF64[m+72>>3]=d.deltaY,HEAPF64[m+80>>3]=d.deltaZ,HEAP32[m+88>>2]=d.deltaMode,getWasmTableEntry(a)(o,m,r)&&d.preventDefault()},p={target:t,allowsDeferredCalls:!0,eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_wheel_callback_on_thread=(t,r,n,a,o)=>(t=findEventTarget(t),t?typeof t.onwheel<"u"?registerWheelEventCallback(t,r,n,a,9,"wheel"):-1:-4);_emscripten_set_wheel_callback_on_thread.sig="ippipp";var _emscripten_set_window_title=t=>document.title=UTF8ToString(t);_emscripten_set_window_title.sig="vp";var _emscripten_sleep=()=>{abort("Please compile your program with async support in order to use asynchronous operations like emscripten_sleep")};_emscripten_sleep.sig="vi";var _emscripten_wget_data=(t,r,n,a)=>{abort("Please compile your program with async support in order to use asynchronous operations like emscripten_wget_data")};_emscripten_wget_data.sig="vpppp";var ENV={},getEnvStrings=()=>{if(!getEnvStrings.strings){var t=(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:t,_:getExecutableName()};for(var n in ENV)ENV[n]===void 0?delete r[n]:r[n]=ENV[n];var a=[];for(var n in r)a.push(`${n}=${r[n]}`);getEnvStrings.strings=a}return getEnvStrings.strings},_environ_get=(t,r)=>{var n=0,a=0;for(var o of getEnvStrings()){var l=r+n;HEAPU32[t+a>>2]=l,n+=stringToUTF8(o,l,1/0)+1,a+=4}return 0};_environ_get.sig="ipp";var _environ_sizes_get=(t,r)=>{var n=getEnvStrings();HEAPU32[t>>2]=n.length;var a=0;for(var o of n)a+=lengthBytesUTF8(o)+1;return HEAPU32[r>>2]=a,0};_environ_sizes_get.sig="ipp";function _fd_close(t){try{var r=SYSCALLS.getStreamFromFD(t);return FS.close(r),0}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return n.errno}}_fd_close.sig="ii";function _fd_fdstat_get(t,r){try{var n=0,a=0,o=0,l=SYSCALLS.getStreamFromFD(t),c=l.tty?2:FS.isDir(l.mode)?3:FS.isLink(l.mode)?7:4;return HEAP8[r]=c,HEAP16[r+2>>1]=o,HEAP64[r+8>>3]=BigInt(n),HEAP64[r+16>>3]=BigInt(a),0}catch(_){if(typeof FS>"u"||_.name!=="ErrnoError")throw _;return _.errno}}_fd_fdstat_get.sig="iip";var doReadv=(t,r,n,a)=>{for(var o=0,l=0;l<n;l++){var c=HEAPU32[r>>2],_=HEAPU32[r+4>>2];r+=8;var u=FS.read(t,HEAP8,c,_,a);if(u<0)return-1;if(o+=u,u<_)break;typeof a<"u"&&(a+=u)}return o};function _fd_pread(t,r,n,a,o){a=bigintToI53Checked(a);try{if(isNaN(a))return 61;var l=SYSCALLS.getStreamFromFD(t),c=doReadv(l,r,n,a);return HEAPU32[o>>2]=c,0}catch(_){if(typeof FS>"u"||_.name!=="ErrnoError")throw _;return _.errno}}_fd_pread.sig="iippjp";var doWritev=(t,r,n,a)=>{for(var o=0,l=0;l<n;l++){var c=HEAPU32[r>>2],_=HEAPU32[r+4>>2];r+=8;var u=FS.write(t,HEAP8,c,_,a);if(u<0)return-1;if(o+=u,u<_)break;typeof a<"u"&&(a+=u)}return o};function _fd_pwrite(t,r,n,a,o){a=bigintToI53Checked(a);try{if(isNaN(a))return 61;var l=SYSCALLS.getStreamFromFD(t),c=doWritev(l,r,n,a);return HEAPU32[o>>2]=c,0}catch(_){if(typeof FS>"u"||_.name!=="ErrnoError")throw _;return _.errno}}_fd_pwrite.sig="iippjp";function _fd_read(t,r,n,a){try{var o=SYSCALLS.getStreamFromFD(t),l=doReadv(o,r,n);return HEAPU32[a>>2]=l,0}catch(c){if(typeof FS>"u"||c.name!=="ErrnoError")throw c;return c.errno}}_fd_read.sig="iippp";function _fd_seek(t,r,n,a){r=bigintToI53Checked(r);try{if(isNaN(r))return 61;var o=SYSCALLS.getStreamFromFD(t);return FS.llseek(o,r,n),HEAP64[a>>3]=BigInt(o.position),o.getdents&&r===0&&n===0&&(o.getdents=null),0}catch(l){if(typeof FS>"u"||l.name!=="ErrnoError")throw l;return l.errno}}_fd_seek.sig="iijip";function _fd_sync(t){try{var r=SYSCALLS.getStreamFromFD(t),n=r.stream_ops?.fsync?.(r);return n}catch(a){if(typeof FS>"u"||a.name!=="ErrnoError")throw a;return a.errno}}_fd_sync.sig="ii";function _fd_write(t,r,n,a){try{var o=SYSCALLS.getStreamFromFD(t),l=doWritev(o,r,n);return HEAPU32[a>>2]=l,0}catch(c){if(typeof FS>"u"||c.name!=="ErrnoError")throw c;return c.errno}}_fd_write.sig="iippp";var _getnameinfo=(t,r,n,a,o,l,c)=>{var _=readSockaddr(t,r);if(_.errno)return-6;var u=_.port,p=_.addr,d=!1;if(n&&a){var m;if(c&1||!(m=DNS.lookup_addr(p))){if(c&8)return-2}else p=m;var f=stringToUTF8(p,n,a);f+1>=a&&(d=!0)}if(o&&l){u=""+u;var f=stringToUTF8(u,o,l);f+1>=l&&(d=!0)}return d?-12:0};_getnameinfo.sig="ipipipii";function _random_get(t,r){try{return randomFill(HEAPU8.subarray(t,t+r)),0}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return n.errno}}_random_get.sig="ipp";var getCFunc=t=>{var r=Module["_"+t];return assert(r,"Cannot call unknown function "+t+", make sure it is exported"),r},writeArrayToMemory=(t,r)=>{assert(t.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),HEAP8.set(t,r)},ccall=(t,r,n,a,o)=>{var l={string:E=>{var x=0;return E!=null&&E!==0&&(x=stringToUTF8OnStack(E)),x},array:E=>{var x=stackAlloc(E.length);return writeArrayToMemory(E,x),x}};function c(E){return r==="string"?UTF8ToString(E):r==="boolean"?!!E:E}var _=getCFunc(t),u=[],p=0;if(assert(r!=="array",'Return type should not be "array".'),a)for(var d=0;d<a.length;d++){var m=l[n[d]];m?(p===0&&(p=stackSave()),u[d]=m(a[d])):u[d]=a[d]}var f=_(...u);function g(E){return p!==0&&stackRestore(p),c(E)}return f=g(f),f},cwrap=(t,r,n,a)=>(...o)=>ccall(t,r,n,o),AsciiToString=t=>{for(var r="";;){var n=HEAPU8[t++];if(!n)return r;r+=String.fromCharCode(n)}},createContext=Browser.createContext,getTempRet0=t=>__emscripten_tempret_get(),setTempRet0=t=>__emscripten_tempret_set(t),_stackAlloc=stackAlloc,_stackSave=stackSave,_stackRestore=stackSave,_setTempRet0=setTempRet0,_getTempRet0=getTempRet0,_emscripten_notify_memory_growth=t=>{assert(t==0),updateMemoryViews()};_emscripten_notify_memory_growth.sig="vp";var _getaddrinfo=(t,r,n,a)=>{var o=0,l=0,c=0,_=0,u=0,p=0,d;function m(f,g,E,x,v,h){var b,S,y,T;return S=f===10?28:16,v=f===10?inetNtop6(v):inetNtop4(v),b=_malloc(S),T=writeSockaddr(b,f,v,h),assert(!T),y=_malloc(32),HEAP32[y+4>>2]=f,HEAP32[y+8>>2]=g,HEAP32[y+12>>2]=E,HEAPU32[y+24>>2]=x,HEAPU32[y+20>>2]=b,f===10?HEAP32[y+16>>2]=28:HEAP32[y+16>>2]=16,HEAP32[y+28>>2]=0,y}if(n&&(c=HEAP32[n>>2],_=HEAP32[n+4>>2],u=HEAP32[n+8>>2],p=HEAP32[n+12>>2]),u&&!p&&(p=u===2?17:6),!u&&p&&(u=p===17?2:1),p===0&&(p=6),u===0&&(u=1),!t&&!r)return-2;if(c&-1088||n!==0&&HEAP32[n>>2]&2&&!t)return-1;if(c&32)return-2;if(u!==0&&u!==1&&u!==2)return-7;if(_!==0&&_!==2&&_!==10)return-6;if(r&&(r=UTF8ToString(r),l=parseInt(r,10),isNaN(l)))return c&1024?-2:-8;if(!t)return _===0&&(_=2),(c&1)===0&&(_===2?o=_htonl(2130706433):o=[0,0,0,_htonl(1)]),d=m(_,u,p,null,o,l),HEAPU32[a>>2]=d,0;if(t=UTF8ToString(t),o=inetPton4(t),o!==null)if(_===0||_===2)_=2;else if(_===10&&c&8)o=[0,0,_htonl(65535),o],_=10;else return-2;else if(o=inetPton6(t),o!==null)if(_===0||_===10)_=10;else return-2;return o!=null?(d=m(_,u,p,t,o,l),HEAPU32[a>>2]=d,0):c&4?-2:(t=DNS.lookup_name(t),o=inetPton4(t),_===0?_=2:_===10&&(o=[0,0,_htonl(65535),o]),d=m(_,u,p,null,o,l),HEAPU32[a>>2]=d,0)};_getaddrinfo.sig="ipppp";var Protocols={list:[],map:{}},stringToAscii=(t,r)=>{for(var n=0;n<t.length;++n)assert(t.charCodeAt(n)===(t.charCodeAt(n)&255)),HEAP8[r++]=t.charCodeAt(n);HEAP8[r]=0},_setprotoent=t=>{function r(l,c,_){var u=_malloc(l.length+1);stringToAscii(l,u);for(var p=0,d=_.length,m=_malloc((d+1)*4),f=0;f<d;f++,p+=4){var g=_[f],E=_malloc(g.length+1);stringToAscii(g,E),HEAPU32[m+p>>2]=E}HEAPU32[m+p>>2]=0;var x=_malloc(12);return HEAPU32[x>>2]=u,HEAPU32[x+4>>2]=m,HEAP32[x+8>>2]=c,x}var n=Protocols.list,a=Protocols.map;if(n.length===0){var o=r("tcp",6,["TCP"]);n.push(o),a.tcp=a[6]=o,o=r("udp",17,["UDP"]),n.push(o),a.udp=a[17]=o}_setprotoent.index=0};_setprotoent.sig="vi";var _endprotoent=()=>{};_endprotoent.sig="v";var _getprotoent=t=>{if(_setprotoent.index===Protocols.list.length)return 0;var r=Protocols.list[_setprotoent.index++];return r};_getprotoent.sig="p";var _getprotobyname=t=>{t=UTF8ToString(t),_setprotoent();var r=Protocols.map[t];return r};_getprotobyname.sig="pp";var _getprotobynumber=t=>{_setprotoent();var r=Protocols.map[t];return r};_getprotobynumber.sig="pi";var _emscripten_run_script=ptr=>{eval(UTF8ToString(ptr))};_emscripten_run_script.sig="vp";var _emscripten_run_script_int=ptr=>eval(UTF8ToString(ptr))|0;_emscripten_run_script_int.sig="ip";var _emscripten_run_script_string=ptr=>{var s=eval(UTF8ToString(ptr));if(s==null)return 0;s+="";var me=_emscripten_run_script_string;return me.bufferSize=lengthBytesUTF8(s)+1,me.buffer=_realloc(me.buffer??0,me.bufferSize),stringToUTF8(s,me.buffer,me.bufferSize),me.buffer};_emscripten_run_script_string.sig="pp";var _emscripten_random=()=>Math.random();_emscripten_random.sig="f";var _emscripten_performance_now=()=>performance.now();_emscripten_performance_now.sig="d";var __emscripten_get_now_is_monotonic=()=>nowIsMonotonic;__emscripten_get_now_is_monotonic.sig="i";var _emscripten_get_compiler_setting=t=>abort("You must build with -sRETAIN_COMPILER_SETTINGS for getCompilerSetting or emscripten_get_compiler_setting to work");_emscripten_get_compiler_setting.sig="pp";var _emscripten_debugger=()=>{debugger};_emscripten_debugger.sig="v";var _emscripten_print_double=(t,r,n)=>{var a=t+"";return r?stringToUTF8(a,r,n):lengthBytesUTF8(a)};_emscripten_print_double.sig="idpi";var _emscripten_asm_const_double=(t,r,n)=>runEmAsmFunction(t,r,n);_emscripten_asm_const_double.sig="dppp";var _emscripten_asm_const_double_sync_on_main_thread=(t,r,n)=>_emscripten_asm_const_int_sync_on_main_thread(t,r,n);_emscripten_asm_const_double_sync_on_main_thread.sig="dppp";var _emscripten_asm_const_async_on_main_thread=(t,r,n)=>runMainThreadEmAsm(t,r,n);_emscripten_asm_const_async_on_main_thread.sig="vppp";var __Unwind_Backtrace=(t,r)=>{for(var n=getCallstack(),a=n.split(`
`),o=0;o<a.length;o++){var l=getWasmTableEntry(t)(0,r);if(l!==0)return}};__Unwind_Backtrace.sig="ipp";var __Unwind_GetIPInfo=(t,r)=>abort("Unwind_GetIPInfo");__Unwind_GetIPInfo.sig="ppp";var __Unwind_FindEnclosingFunction=t=>0;__Unwind_FindEnclosingFunction.sig="pp";class ExceptionInfo{constructor(r){this.excPtr=r,this.ptr=r-24}set_type(r){HEAPU32[this.ptr+4>>2]=r}get_type(){return HEAPU32[this.ptr+4>>2]}set_destructor(r){HEAPU32[this.ptr+8>>2]=r}get_destructor(){return HEAPU32[this.ptr+8>>2]}set_caught(r){r=r?1:0,HEAP8[this.ptr+12]=r}get_caught(){return HEAP8[this.ptr+12]!=0}set_rethrown(r){r=r?1:0,HEAP8[this.ptr+13]=r}get_rethrown(){return HEAP8[this.ptr+13]!=0}init(r,n){this.set_adjusted_ptr(0),this.set_type(r),this.set_destructor(n)}set_adjusted_ptr(r){HEAPU32[this.ptr+16>>2]=r}get_adjusted_ptr(){return HEAPU32[this.ptr+16>>2]}}var exceptionLast=0,uncaughtExceptionCount=0,___cxa_throw=(t,r,n)=>{var a=new ExceptionInfo(t);a.init(r,n),exceptionLast=t,uncaughtExceptionCount++,assert(!1,"Exception thrown, but exception catching is not enabled. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch. (note: in dynamic linking, if a side module wants exceptions, the main module must be built with that support)")};___cxa_throw.sig="vppp";var __Unwind_RaiseException=t=>(err("Warning: _Unwind_RaiseException is not correctly implemented"),___cxa_throw(t,0,0));__Unwind_RaiseException.sig="ip";var __Unwind_DeleteException=t=>err("TODO: Unwind_DeleteException");__Unwind_DeleteException.sig="vp";var ___handle_stack_overflow=t=>{var r=_emscripten_stack_get_base(),n=_emscripten_stack_get_end();abort(`stack overflow (Attempt to set SP to ${ptrToString(t)}, with stack limits [${ptrToString(n)} - ${ptrToString(r)}]). If you require more stack space build with -sSTACK_SIZE=<bytes>`)};___handle_stack_overflow.sig="vp";var _emscripten_exit_with_live_runtime=()=>{throw"unwind"};_emscripten_exit_with_live_runtime.sig="v";var _emscripten_outn=(t,r)=>out(UTF8ToString(t,r));_emscripten_outn.sig="vpp";var _emscripten_errn=(t,r)=>err(UTF8ToString(t,r));_emscripten_errn.sig="vpp";var _emscripten_dbgn=(t,r)=>dbg(UTF8ToString(t,r));_emscripten_dbgn.sig="vpp";var _emscripten_throw_number=t=>{throw t};_emscripten_throw_number.sig="vd";var _emscripten_throw_string=t=>{throw assert(typeof t=="number"),UTF8ToString(t)};_emscripten_throw_string.sig="vp";var runtimeKeepalivePush=()=>{runtimeKeepaliveCounter+=1};runtimeKeepalivePush.sig="v";var runtimeKeepalivePop=()=>{assert(runtimeKeepaliveCounter>0),runtimeKeepaliveCounter-=1};runtimeKeepalivePop.sig="v";var _emscripten_runtime_keepalive_push=runtimeKeepalivePush;_emscripten_runtime_keepalive_push.sig="v";var _emscripten_runtime_keepalive_pop=runtimeKeepalivePop;_emscripten_runtime_keepalive_pop.sig="v";var _emscripten_runtime_keepalive_check=keepRuntimeAlive;_emscripten_runtime_keepalive_check.sig="i";var __emscripten_fs_load_embedded_files=t=>{do{var r=HEAPU32[t>>2];t+=4;var n=HEAPU32[t>>2];t+=4;var a=HEAPU32[t>>2];t+=4;var o=UTF8ToString(r);FS.createPath("/",PATH.dirname(o),!0,!0),FS.createDataFile(o,null,HEAP8.subarray(a,a+n),!0,!0,!0)}while(HEAPU32[t>>2])};__emscripten_fs_load_embedded_files.sig="vp";var onInits=[],onMains=[],POINTER_SIZE=4,_emscripten_math_cbrt=Math.cbrt;_emscripten_math_cbrt.sig="dd";var _emscripten_math_pow=Math.pow;_emscripten_math_pow.sig="ddd";var _emscripten_math_random=Math.random;_emscripten_math_random.sig="d";var _emscripten_math_sign=Math.sign;_emscripten_math_sign.sig="dd";var _emscripten_math_sqrt=Math.sqrt;_emscripten_math_sqrt.sig="dd";var _emscripten_math_exp=Math.exp;_emscripten_math_exp.sig="dd";var _emscripten_math_expm1=Math.expm1;_emscripten_math_expm1.sig="dd";var _emscripten_math_fmod=(t,r)=>t%r;_emscripten_math_fmod.sig="ddd";var _emscripten_math_log=Math.log;_emscripten_math_log.sig="dd";var _emscripten_math_log1p=Math.log1p;_emscripten_math_log1p.sig="dd";var _emscripten_math_log10=Math.log10;_emscripten_math_log10.sig="dd";var _emscripten_math_log2=Math.log2;_emscripten_math_log2.sig="dd";var _emscripten_math_round=Math.round;_emscripten_math_round.sig="dd";var _emscripten_math_acos=Math.acos;_emscripten_math_acos.sig="dd";var _emscripten_math_acosh=Math.acosh;_emscripten_math_acosh.sig="dd";var _emscripten_math_asin=Math.asin;_emscripten_math_asin.sig="dd";var _emscripten_math_asinh=Math.asinh;_emscripten_math_asinh.sig="dd";var _emscripten_math_atan=Math.atan;_emscripten_math_atan.sig="dd";var _emscripten_math_atanh=Math.atanh;_emscripten_math_atanh.sig="dd";var _emscripten_math_atan2=Math.atan2;_emscripten_math_atan2.sig="ddd";var _emscripten_math_cos=Math.cos;_emscripten_math_cos.sig="dd";var _emscripten_math_cosh=Math.cosh;_emscripten_math_cosh.sig="dd";var _emscripten_math_hypot=(t,r)=>{for(var n=[],a=0;a<t;++a)n.push(HEAPF64[r+a*8>>3]);return Math.hypot(...n)};_emscripten_math_hypot.sig="dip";var _emscripten_math_sin=Math.sin;_emscripten_math_sin.sig="dd";var _emscripten_math_sinh=Math.sinh;_emscripten_math_sinh.sig="dd";var _emscripten_math_tan=Math.tan;_emscripten_math_tan.sig="dd";var _emscripten_math_tanh=Math.tanh;_emscripten_math_tanh.sig="dd",globalThis.TextDecoder&&new TextDecoder("utf-16le");var _emscripten_html5_remove_event_listener=(t,r,n,a)=>{var o={target:findEventTarget(t),userData:r,eventTypeId:n,callbackfunc:a};return JSEvents.removeSingleHandler(o)};_emscripten_html5_remove_event_listener.sig="ippip";var _emscripten_set_click_callback_on_thread=(t,r,n,a,o)=>registerMouseEventCallback(t,r,n,a,4,"click");_emscripten_set_click_callback_on_thread.sig="ippipp";var _emscripten_set_dblclick_callback_on_thread=(t,r,n,a,o)=>registerMouseEventCallback(t,r,n,a,7,"dblclick");_emscripten_set_dblclick_callback_on_thread.sig="ippipp";var _emscripten_set_mouseover_callback_on_thread=(t,r,n,a,o)=>registerMouseEventCallback(t,r,n,a,35,"mouseover");_emscripten_set_mouseover_callback_on_thread.sig="ippipp";var _emscripten_set_mouseout_callback_on_thread=(t,r,n,a,o)=>registerMouseEventCallback(t,r,n,a,36,"mouseout");_emscripten_set_mouseout_callback_on_thread.sig="ippipp";var _emscripten_set_scroll_callback_on_thread=(t,r,n,a,o)=>registerUiEventCallback(t,r,n,a,11,"scroll");_emscripten_set_scroll_callback_on_thread.sig="ippipp";var _emscripten_set_focusin_callback_on_thread=(t,r,n,a,o)=>registerFocusEventCallback(t,r,n,a,14,"focusin");_emscripten_set_focusin_callback_on_thread.sig="ippipp";var _emscripten_set_focusout_callback_on_thread=(t,r,n,a,o)=>registerFocusEventCallback(t,r,n,a,15,"focusout");_emscripten_set_focusout_callback_on_thread.sig="ippipp";var fillDeviceOrientationEventData=(t,r,n)=>{HEAPF64[t>>3]=r.alpha,HEAPF64[t+8>>3]=r.beta,HEAPF64[t+16>>3]=r.gamma,HEAP8[t+24]=r.absolute},registerDeviceOrientationEventCallback=(t,r,n,a,o,l,c)=>{var _=32;JSEvents.deviceOrientationEvent||=_malloc(_);var u=d=>{fillDeviceOrientationEventData(JSEvents.deviceOrientationEvent,d),getWasmTableEntry(a)(o,JSEvents.deviceOrientationEvent,r)&&d.preventDefault()},p={target:findEventTarget(t),eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_deviceorientation_callback_on_thread=(t,r,n,a)=>registerDeviceOrientationEventCallback(2,t,r,n,16,"deviceorientation");_emscripten_set_deviceorientation_callback_on_thread.sig="ipipp";var fillDeviceMotionEventData=(t,r,n)=>{var a=0,o=r.acceleration;a|=o&&1;var l=r.accelerationIncludingGravity;a|=l&&2;var c=r.rotationRate;a|=c&&4,o=o||{},l=l||{},c=c||{},HEAP32[t+72>>2]=a,HEAPF64[t>>3]=o.x,HEAPF64[t+8>>3]=o.y,HEAPF64[t+16>>3]=o.z,HEAPF64[t+24>>3]=l.x,HEAPF64[t+32>>3]=l.y,HEAPF64[t+40>>3]=l.z,HEAPF64[t+48>>3]=c.alpha,HEAPF64[t+56>>3]=c.beta,HEAPF64[t+64>>3]=c.gamma},registerDeviceMotionEventCallback=(t,r,n,a,o,l,c)=>{var _=80;JSEvents.deviceMotionEvent||=_malloc(_);var u=d=>{fillDeviceMotionEventData(JSEvents.deviceMotionEvent,d),getWasmTableEntry(a)(o,JSEvents.deviceMotionEvent,r)&&d.preventDefault()},p={target:findEventTarget(t),eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_devicemotion_callback_on_thread=(t,r,n,a)=>registerDeviceMotionEventCallback(2,t,r,n,17,"devicemotion");_emscripten_set_devicemotion_callback_on_thread.sig="ipipp";var screenOrientation=()=>{if(window.screen)return screen.orientation||screen.mozOrientation||screen.webkitOrientation},fillOrientationChangeEventData=t=>{var r=["portrait-primary","portrait-secondary","landscape-primary","landscape-secondary"],n=["portrait","portrait","landscape","landscape"],a=0,o=0,l=screenOrientation();typeof l=="object"?(a=r.indexOf(l.type),a<0&&(a=n.indexOf(l.type)),a>=0&&(a=1<<a),o=l.angle):o=window.orientation,HEAP32[t>>2]=a,HEAP32[t+4>>2]=o},registerOrientationChangeEventCallback=(t,r,n,a,o,l,c)=>{var _=8;JSEvents.orientationChangeEvent||=_malloc(_);var u=d=>{var m=JSEvents.orientationChangeEvent;fillOrientationChangeEventData(m),getWasmTableEntry(a)(o,m,r)&&d.preventDefault()},p={target:t,eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_orientationchange_callback_on_thread=(t,r,n,a)=>!window.screen||!screen.orientation?-1:registerOrientationChangeEventCallback(screen.orientation,t,r,n,18,"change");_emscripten_set_orientationchange_callback_on_thread.sig="ipipp";var _emscripten_get_orientation_status=t=>!screenOrientation()&&typeof orientation>"u"?-1:(fillOrientationChangeEventData(t),0);_emscripten_get_orientation_status.sig="ip";var _emscripten_lock_orientation=t=>{var r=[];t&1&&r.push("portrait-primary"),t&2&&r.push("portrait-secondary"),t&4&&r.push("landscape-primary"),t&8&&r.push("landscape-secondary");var n;if(screen.lockOrientation)n=screen.lockOrientation(r);else if(screen.mozLockOrientation)n=screen.mozLockOrientation(r);else if(screen.webkitLockOrientation)n=screen.webkitLockOrientation(r);else return-1;return n?0:-6};_emscripten_lock_orientation.sig="ii";var _emscripten_unlock_orientation=()=>{if(screen.unlockOrientation)screen.unlockOrientation();else if(screen.mozUnlockOrientation)screen.mozUnlockOrientation();else if(screen.webkitUnlockOrientation)screen.webkitUnlockOrientation();else return-1;return 0};_emscripten_unlock_orientation.sig="i";var _emscripten_get_fullscreen_status=t=>JSEvents.fullscreenEnabled()?(fillFullscreenChangeEventData(t),0):-1;_emscripten_get_fullscreen_status.sig="ip";var hideEverythingExceptGivenElement=t=>{for(var r=t,n=r.parentNode,a=[];r!=document.body;){var o=n.children;for(var l of o)l!=r&&(a.push({node:l,displayState:l.style.display}),l.style.display="none");r=n,n=n.parentNode}return a},restoreHiddenElements=t=>{for(var r of t)r.node.style.display=r.displayState},restoreOldWindowedStyle=null,softFullscreenResizeWebGLRenderTarget=()=>{var t=devicePixelRatio,r=currentFullscreenStrategy.canvasResolutionScaleMode==2,n=currentFullscreenStrategy.scaleMode==2,a=currentFullscreenStrategy.canvasResolutionScaleMode!=0,o=currentFullscreenStrategy.scaleMode==3,l=r?Math.round(innerWidth*t):innerWidth,c=r?Math.round(innerHeight*t):innerHeight,_=l,u=c,p=currentFullscreenStrategy.target,d=getCanvasElementSize(p),m=d[0],f=d[1],g;if(n&&(_*f<m*u?u=_*f/m|0:_*f>m*u&&(_=u*m/f|0),g=(c-u)/2|0),a&&(setCanvasElementSize(p,_,u),p.GLctxObject&&p.GLctxObject.GLctx.viewport(0,0,_,u)),r&&(g/=t,_/=t,u/=t,_=Math.round(_*1e4)/1e4,u=Math.round(u*1e4)/1e4,g=Math.round(g*1e4)/1e4),o){var E=(innerHeight-jstoi_q(p.style.height))/2,x=(innerWidth-jstoi_q(p.style.width))/2;setLetterbox(p,E,x)}else{p.style.width=_+"px",p.style.height=u+"px";var x=(innerWidth-_)/2;setLetterbox(p,g,x)}!o&&currentFullscreenStrategy.canvasResizedCallback&&getWasmTableEntry(currentFullscreenStrategy.canvasResizedCallback)(37,0,currentFullscreenStrategy.canvasResizedCallbackUserData)},_emscripten_request_fullscreen=(t,r)=>{var n={scaleMode:0,canvasResolutionScaleMode:0,filteringMode:0,deferUntilInEventHandler:r,canvasResizedCallbackTargetThread:2};return doRequestFullscreen(t,n)};_emscripten_request_fullscreen.sig="ipi";var _emscripten_enter_soft_fullscreen=(t,r)=>{if(t=findEventTarget(t),!t)return-4;var n={scaleMode:HEAP32[r>>2],canvasResolutionScaleMode:HEAP32[r+4>>2],filteringMode:HEAP32[r+8>>2],canvasResizedCallback:HEAP32[r+12>>2],canvasResizedCallbackUserData:HEAP32[r+16>>2],target:t,softFullscreen:!0},a=JSEvents_resizeCanvasForFullscreen(t,n);document.documentElement.style.overflow="hidden",document.body.scroll="no",document.body.style.margin="0px";var o=hideEverythingExceptGivenElement(t);function l(){a(),restoreHiddenElements(o),removeEventListener("resize",softFullscreenResizeWebGLRenderTarget),n.canvasResizedCallback&&getWasmTableEntry(n.canvasResizedCallback)(37,0,n.canvasResizedCallbackUserData),currentFullscreenStrategy=0}return restoreOldWindowedStyle=l,currentFullscreenStrategy=n,addEventListener("resize",softFullscreenResizeWebGLRenderTarget),n.canvasResizedCallback&&getWasmTableEntry(n.canvasResizedCallback)(37,0,n.canvasResizedCallbackUserData),0};_emscripten_enter_soft_fullscreen.sig="ipp";var _emscripten_exit_soft_fullscreen=()=>(restoreOldWindowedStyle?.(),restoreOldWindowedStyle=null,0);_emscripten_exit_soft_fullscreen.sig="i";var registerPointerlockErrorEventCallback=(t,r,n,a,o,l,c)=>{var _=p=>{getWasmTableEntry(a)(o,0,r)&&p.preventDefault()},u={target:t,eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:_,useCapture:n};return JSEvents.registerOrRemoveHandler(u)},_emscripten_set_pointerlockerror_callback_on_thread=(t,r,n,a,o)=>document.body?.requestPointerLock?(t=findEventTarget(t),t?registerPointerlockErrorEventCallback(t,r,n,a,38,"pointerlockerror"):-4):-1;_emscripten_set_pointerlockerror_callback_on_thread.sig="ippipp";var _emscripten_get_pointerlock_status=t=>(t&&fillPointerlockChangeEventData(t),document.body?.requestPointerLock?0:-1);_emscripten_get_pointerlock_status.sig="ip";var _emscripten_vibrate=t=>navigator.vibrate?(navigator.vibrate(t),0):-1;_emscripten_vibrate.sig="ii";var _emscripten_vibrate_pattern=(t,r)=>{if(!navigator.vibrate)return-1;for(var n=[],a=0;a<r;++a){var o=HEAP32[t+a*4>>2];n.push(o)}return navigator.vibrate(n),0};_emscripten_vibrate_pattern.sig="ipi";var _emscripten_get_visibility_status=t=>typeof document.visibilityState>"u"&&typeof document.hidden>"u"?-1:(fillVisibilityChangeEventData(t),0);_emscripten_get_visibility_status.sig="ip";var registerBatteryEventCallback=(t,r,n,a,o,l,c)=>{var _=32;JSEvents.batteryEvent||=_malloc(_);var u=d=>{var m=JSEvents.batteryEvent;fillBatteryEventData(m,t),getWasmTableEntry(a)(o,m,r)&&d.preventDefault()},p={target:t,eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:u,useCapture:n};return JSEvents.registerOrRemoveHandler(p)},_emscripten_set_batterychargingchange_callback_on_thread=(t,r,n)=>{if(!hasBatteryAPI())return-1;navigator.getBattery().then(a=>{registerBatteryEventCallback(a,t,!0,r,29,"chargingchange")})};_emscripten_set_batterychargingchange_callback_on_thread.sig="ippp";var _emscripten_set_batterylevelchange_callback_on_thread=(t,r,n)=>{if(!hasBatteryAPI())return-1;navigator.getBattery().then(a=>{registerBatteryEventCallback(a,t,!0,r,30,"levelchange")})};_emscripten_set_batterylevelchange_callback_on_thread.sig="ippp";var _emscripten_html5_remove_all_event_listeners=()=>JSEvents.removeAllEventListeners();_emscripten_html5_remove_all_event_listeners.sig="v";var _emscripten_request_animation_frame=(t,r)=>requestAnimationFrame(n=>getWasmTableEntry(t)(n,r));_emscripten_request_animation_frame.sig="ipp";var _emscripten_cancel_animation_frame=t=>cancelAnimationFrame(t);_emscripten_cancel_animation_frame.sig="vi";var _emscripten_request_animation_frame_loop=(t,r)=>{function n(a){getWasmTableEntry(t)(a,r)&&requestAnimationFrame(n)}return requestAnimationFrame(n)};_emscripten_request_animation_frame_loop.sig="vpp";var _emscripten_get_callstack=(t,r,n)=>{var a=getCallstack(t);if(!r||n<=0)return lengthBytesUTF8(a)+1;var o=stringToUTF8(a,r,n);return o+1};_emscripten_get_callstack.sig="iipi";var convertFrameToPC=t=>{var r;if(r=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(t))return+r[1];if(r=/\bwasm-function\[(\d+)\]:(\d+)/.exec(t))warnOnce("legacy backtrace format detected, this version of v8 is no longer supported by the emscripten backtrace mechanism");else if(r=/:(\d+):\d+(?:\)|$)/.exec(t))return 2147483648|+r[1];return 0},_emscripten_return_address=t=>{var r=jsStackTrace().split(`
`);r[0]=="Error"&&r.shift();var n=r[t+3];return convertFrameToPC(n)};_emscripten_return_address.sig="pi";var UNWIND_CACHE={},saveInUnwindCache=t=>{for(var r of t){var n=convertFrameToPC(r);n&&(UNWIND_CACHE[n]=r)}},_emscripten_stack_snapshot=()=>{var t=jsStackTrace().split(`
`);return t[0]=="Error"&&t.shift(),saveInUnwindCache(t),UNWIND_CACHE.last_addr=convertFrameToPC(t[3]),UNWIND_CACHE.last_stack=t,UNWIND_CACHE.last_addr};_emscripten_stack_snapshot.sig="p";var _emscripten_stack_unwind_buffer=(t,r,n)=>{var a;UNWIND_CACHE.last_addr==t?a=UNWIND_CACHE.last_stack:(a=jsStackTrace().split(`
`),a[0]=="Error"&&a.shift(),saveInUnwindCache(a));for(var o=3;a[o]&&convertFrameToPC(a[o])!=t;)++o;for(var l=0;l<n&&a[l+o];++l)HEAP32[r+l*4>>2]=convertFrameToPC(a[l+o]);return l};_emscripten_stack_unwind_buffer.sig="ippi";var _emscripten_pc_get_function=t=>{var r=UNWIND_CACHE[t];if(!r)return 0;var n,a;if(a=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(r))n=a[1];else if(a=/^\s+at (.*) \(.*\)$/.exec(r))n=a[1];else if(a=/^(.+?)@/.exec(r))n=a[1];else return 0;return _free(_emscripten_pc_get_function.ret??0),_emscripten_pc_get_function.ret=stringToNewUTF8(n),_emscripten_pc_get_function.ret};_emscripten_pc_get_function.sig="pp";var convertPCtoSourceLocation=t=>{if(UNWIND_CACHE.last_get_source_pc==t)return UNWIND_CACHE.last_source;var r,n;if(!n){var a=UNWIND_CACHE[t];if(!a)return null;(r=/\((.*):(\d+):(\d+)\)$/.exec(a))?n={file:r[1],line:r[2],column:r[3]}:(r=/@(.*):(\d+):(\d+)/.exec(a))&&(n={file:r[1],line:r[2],column:r[3]})}return UNWIND_CACHE.last_get_source_pc=t,UNWIND_CACHE.last_source=n,n},_emscripten_pc_get_file=t=>{var r=convertPCtoSourceLocation(t);return r?(_free(_emscripten_pc_get_file.ret??0),_emscripten_pc_get_file.ret=stringToNewUTF8(r.file),_emscripten_pc_get_file.ret):0};_emscripten_pc_get_file.sig="pp";var _emscripten_pc_get_line=t=>{var r=convertPCtoSourceLocation(t);return r?r.line:0};_emscripten_pc_get_line.sig="ip";var _emscripten_pc_get_column=t=>{var r=convertPCtoSourceLocation(t);return r&&r.column||0};_emscripten_pc_get_column.sig="ip";var _sched_yield=()=>0;_sched_yield.sig="i";var _emscripten_unwind_to_js_event_loop=()=>{throw"unwind"};_emscripten_unwind_to_js_event_loop.sig="v";var setImmediateWrapped=t=>{setImmediateWrapped.mapping||=[];var r=setImmediateWrapped.mapping.length;return setImmediateWrapped.mapping[r]=setImmediate(()=>{setImmediateWrapped.mapping[r]=void 0,t()}),r},safeRequestAnimationFrame=t=>MainLoop.requestAnimationFrame(()=>{callUserCallback(t)}),clearImmediateWrapped=t=>{assert(t),assert(setImmediateWrapped.mapping[t]),clearImmediate(setImmediateWrapped.mapping[t]),setImmediateWrapped.mapping[t]=void 0},emClearImmediate,emSetImmediate,_emscripten_set_immediate=(t,r)=>emSetImmediate(()=>{callUserCallback(()=>getWasmTableEntry(t)(r))});_emscripten_set_immediate.sig="ipp";var _emscripten_clear_immediate=t=>{emClearImmediate(t)};_emscripten_clear_immediate.sig="vi";var _emscripten_set_immediate_loop=(t,r)=>{function n(){callUserCallback(()=>{getWasmTableEntry(t)(r)&&emSetImmediate(n)})}emSetImmediate(n)};_emscripten_set_immediate_loop.sig="vpp";var _emscripten_set_timeout_loop=(t,r,n)=>{function a(){var o=_emscripten_get_now(),l=o+r;callUserCallback(()=>{if(getWasmTableEntry(t)(o,n)){var c=l-_emscripten_get_now();setTimeout(a,c)}})}return setTimeout(a,0)};_emscripten_set_timeout_loop.sig="vpdp";var _emscripten_set_interval=(t,r,n)=>setInterval(()=>{callUserCallback(()=>getWasmTableEntry(t)(n))},r);_emscripten_set_interval.sig="ipdp";var _emscripten_clear_interval=t=>{clearInterval(t)};_emscripten_clear_interval.sig="vi";var _emscripten_async_call=(t,r,n)=>{var a=()=>getWasmTableEntry(t)(r);n>=0?safeSetTimeout(a,n):safeRequestAnimationFrame(a)};_emscripten_async_call.sig="vppi";var _emscripten_get_main_loop_timing=(t,r)=>{t&&(HEAP32[t>>2]=MainLoop.timingMode),r&&(HEAP32[r>>2]=MainLoop.timingValue)};_emscripten_get_main_loop_timing.sig="vpp";var _emscripten_set_main_loop=(t,r,n)=>{var a=getWasmTableEntry(t);setMainLoop(a,r,n)};_emscripten_set_main_loop.sig="vpii";var _emscripten_pause_main_loop=()=>MainLoop.pause();_emscripten_pause_main_loop.sig="v";var _emscripten_resume_main_loop=()=>MainLoop.resume();_emscripten_resume_main_loop.sig="v";var __emscripten_push_main_loop_blocker=(t,r,n)=>{MainLoop.queue.push({func:()=>{getWasmTableEntry(t)(r)},name:UTF8ToString(n),counted:!0}),MainLoop.updateStatus()};__emscripten_push_main_loop_blocker.sig="vppp";var __emscripten_push_uncounted_main_loop_blocker=(t,r,n)=>{MainLoop.queue.push({func:()=>{getWasmTableEntry(t)(r)},name:UTF8ToString(n),counted:!1}),MainLoop.updateStatus()};__emscripten_push_uncounted_main_loop_blocker.sig="vppp";var _emscripten_set_main_loop_expected_blockers=t=>{MainLoop.expectedBlockers=t,MainLoop.remainingBlockers=t,MainLoop.updateStatus()};_emscripten_set_main_loop_expected_blockers.sig="vi";var idsToPromises=(t,r)=>{for(var n=[],a=0;a<r;a++){var o=HEAP32[t+a*4>>2];n[a]=getPromise(o)}return n},makePromiseCallback=(t,r)=>n=>{var a=stackSave(),o=stackAlloc(POINTER_SIZE);HEAPU32[o>>2]=0;try{var l=getWasmTableEntry(t)(o,r,n),c=HEAPU32[o>>2]}catch(u){throw typeof u!="number"?0:u}finally{stackRestore(a)}switch(l){case 0:return c;case 1:return getPromise(c);case 2:var _=getPromise(c);return _emscripten_promise_destroy(c),_;case 3:throw c}abort("unexpected promise callback result "+l)},_emscripten_promise_then=(t,r,n,a)=>{var o=getPromise(t),l=promiseMap.allocate({promise:o.then(makePromiseCallback(r,a),makePromiseCallback(n,a))});return l};_emscripten_promise_then.sig="ppppp";var _emscripten_promise_all=(t,r,n)=>{var a=idsToPromises(t,n),o=promiseMap.allocate({promise:Promise.all(a).then(l=>{if(r)for(var c=0;c<n;c++){var _=l[c];HEAPU32[r+c*4>>2]=_}return r})});return o};_emscripten_promise_all.sig="pppp";var setPromiseResult=(t,r,n)=>{assert(typeof n>"u"||typeof n=="number",`native promises can only handle numeric results (${n} ${typeof n})`);var a=r?0:3;HEAP32[t>>2]=a,HEAPU32[t+4>>2]=n},_emscripten_promise_all_settled=(t,r,n)=>{var a=idsToPromises(t,n),o=promiseMap.allocate({promise:Promise.allSettled(a).then(l=>{if(r)for(var c=r,_=0;_<n;_++,c+=8)l[_].status==="fulfilled"?setPromiseResult(c,!0,l[_].value):setPromiseResult(c,!1,l[_].reason);return r})});return o};_emscripten_promise_all_settled.sig="pppp";var _emscripten_promise_any=(t,r,n)=>{var a=idsToPromises(t,n);assert(typeof Promise.any<"u","Promise.any does not exist");var o=promiseMap.allocate({promise:Promise.any(a).catch(l=>{if(r)for(var c=0;c<n;c++)HEAPU32[r+c*4>>2]=l.errors[c];throw r})});return o};_emscripten_promise_any.sig="pppp";var _emscripten_promise_race=(t,r)=>{var n=idsToPromises(t,r),a=promiseMap.allocate({promise:Promise.race(n)});return a};_emscripten_promise_race.sig="ppp";var _emscripten_promise_await=(t,r)=>{abort("emscripten_promise_await is only available with ASYNCIFY")};_emscripten_promise_await.sig="vpp";var findMatchingCatch=t=>{var r=exceptionLast;if(!r)return setTempRet0(0),0;var n=new ExceptionInfo(r);n.set_adjusted_ptr(r);var a=n.get_type();if(!a)return setTempRet0(0),r;for(var o of t){if(o===0||o===a)break;var l=n.ptr+16;if(___cxa_can_catch(o,a,l))return setTempRet0(o),r}return setTempRet0(a),r},___cxa_find_matching_catch_2=()=>findMatchingCatch([]);___cxa_find_matching_catch_2.sig="p";var ___cxa_find_matching_catch_3=t=>findMatchingCatch([t]);___cxa_find_matching_catch_3.sig="pp";var ___cxa_find_matching_catch_4=(t,r)=>findMatchingCatch([t,r]);___cxa_find_matching_catch_4.sig="ppp";var exceptionCaught=[],___cxa_rethrow=()=>{var t=exceptionCaught.pop();t||abort("no exception to throw");var r=t.excPtr;t.get_rethrown()||(exceptionCaught.push(t),t.set_rethrown(!0),t.set_caught(!1),uncaughtExceptionCount++),exceptionLast=r,assert(!1,"Exception thrown, but exception catching is not enabled. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch. (note: in dynamic linking, if a side module wants exceptions, the main module must be built with that support)")};___cxa_rethrow.sig="v";var _llvm_eh_typeid_for=t=>t;_llvm_eh_typeid_for.sig="vp";var ___cxa_begin_catch=t=>{var r=new ExceptionInfo(t);return r.get_caught()||(r.set_caught(!0),uncaughtExceptionCount--),r.set_rethrown(!1),exceptionCaught.push(r),___cxa_get_exception_ptr(t)};___cxa_begin_catch.sig="pp";var ___cxa_end_catch=()=>{_setThrew(0,0),assert(exceptionCaught.length>0);var t=exceptionCaught.pop();___cxa_decrement_exception_refcount(t.excPtr),exceptionLast=0};___cxa_end_catch.sig="v";var ___cxa_uncaught_exceptions=()=>uncaughtExceptionCount;___cxa_uncaught_exceptions.sig="i";var ___cxa_call_unexpected=t=>abort("Unexpected exception thrown, this is not properly supported - aborting");___cxa_call_unexpected.sig="vp";var ___cxa_current_primary_exception=()=>{if(!exceptionCaught.length)return 0;var t=exceptionCaught[exceptionCaught.length-1];return ___cxa_increment_exception_refcount(t.excPtr),t.excPtr};___cxa_current_primary_exception.sig="p";function ___cxa_current_exception_type(){if(!exceptionCaught.length)return 0;var t=exceptionCaught[exceptionCaught.length-1];return t.get_type()}___cxa_current_exception_type.sig="p";var ___cxa_rethrow_primary_exception=t=>{if(t){var r=new ExceptionInfo(t);exceptionCaught.push(r),r.set_rethrown(!0),___cxa_rethrow()}};___cxa_rethrow_primary_exception.sig="vp";var ___resumeException=t=>{exceptionLast||(exceptionLast=t),assert(!1,"Exception thrown, but exception catching is not enabled. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch. (note: in dynamic linking, if a side module wants exceptions, the main module must be built with that support)")};___resumeException.sig="vp";var _emscripten_run_preload_plugins=(t,r,n)=>{var a=UTF8ToString(t),o=FS.analyzePath(a);return o.exists?(FS.createPreloadedFile(PATH.dirname(a),PATH.basename(a),new Uint8Array(o.object.contents),!0,!0,()=>{r&&getWasmTableEntry(r)(t)},()=>{n&&getWasmTableEntry(n)(t)},!0),0):-1};_emscripten_run_preload_plugins.sig="ippp";var Browser_asyncPrepareDataCounter=0,_emscripten_run_preload_plugins_data=(t,r,n,a,o,l)=>{var c=UTF8ToString(n),_="prepare_data_"+Browser_asyncPrepareDataCounter+++"."+c,u=stringToNewUTF8(_);FS.createPreloadedFile("/",_,HEAPU8.subarray(t,t+r),!0,!0,()=>{o&&getWasmTableEntry(o)(a,u)},()=>{l&&getWasmTableEntry(l)(a)},!0)};_emscripten_run_preload_plugins_data.sig="vpipppp";var _emscripten_async_run_script=(t,r)=>{safeSetTimeout(()=>_emscripten_run_script(t),r)};_emscripten_async_run_script.sig="vpi";var _emscripten_async_load_script=async(t,r,n)=>{t=UTF8ToString(t),assert(runDependencies===0,"async_load_script must be run when no other dependencies are active");var a=()=>{if(r){var c=()=>callUserCallback(getWasmTableEntry(r));runDependencies>0?dependenciesFulfilled=c:c()}},o=()=>{n&&callUserCallback(getWasmTableEntry(n))},l=document.createElement("script");l.onload=a,l.onerror=o,l.src=t,document.body.appendChild(l)};_emscripten_async_load_script.sig="vppp";var _emscripten_get_window_title=()=>{var t=256;return _emscripten_get_window_title.buffer||(_emscripten_get_window_title.buffer=_malloc(t)),stringToUTF8(document.title,_emscripten_get_window_title.buffer,t),_emscripten_get_window_title.buffer};_emscripten_get_window_title.sig="p";var _emscripten_hide_mouse=()=>{for(var t=document.styleSheets[0],r=t.cssRules,n=0;n<r.length;n++)r[n].cssText.startsWith("canvas")&&(t.deleteRule(n),n--);t.insertRule("canvas.emscripten { border: 1px solid black; cursor: none; }",0)};_emscripten_hide_mouse.sig="v";var _emscripten_set_canvas_size=(t,r)=>Browser.setCanvasSize(t,r);_emscripten_set_canvas_size.sig="vii";var _emscripten_get_canvas_size=(t,r,n)=>{var a=Browser.getCanvas();HEAP32[t>>2]=a.width,HEAP32[r>>2]=a.height,HEAP32[n>>2]=Browser.isFullscreen?1:0};_emscripten_get_canvas_size.sig="vppp";var _emscripten_create_worker=t=>{t=UTF8ToString(t);var r=Browser.workers.length,n={worker:new Worker(t),callbacks:[],awaited:0,buffer:0};return n.worker.onmessage=function(o){if(!ABORT){var l=Browser.workers[r];if(l){var c=o.data.callbackId,_=l.callbacks[c];if(_){o.data.finalResponse&&(l.awaited--,l.callbacks[c]=null);var u=o.data.data;u?(u.byteLength||(u=new Uint8Array(u)),l.buffer=_realloc(l.buffer,u.length),HEAPU8.set(u,l.buffer),_.func(l.buffer,u.length,_.arg)):_.func(0,0,_.arg)}}}},Browser.workers.push(n),r};_emscripten_create_worker.sig="ip";var _emscripten_destroy_worker=t=>{var r=Browser.workers[t];r.worker.terminate(),_free(r.buffer),Browser.workers[t]=null};_emscripten_destroy_worker.sig="vi";var _emscripten_call_worker=(t,r,n,a,o,l)=>{r=UTF8ToString(r);var c=Browser.workers[t],_=-1;o&&(_=c.callbacks.length,c.callbacks.push({func:getWasmTableEntry(o),arg:l}),c.awaited++);var u={funcName:r,callbackId:_,data:n?new Uint8Array(HEAPU8.subarray(n,n+a)):0};n?c.worker.postMessage(u,[u.data.buffer]):c.worker.postMessage(u)};_emscripten_call_worker.sig="vippipp";var _emscripten_get_worker_queue_size=t=>{var r=Browser.workers[t];return r?r.awaited:-1};_emscripten_get_worker_queue_size.sig="ii";var getPreloadedImageData=(t,r,n)=>{t=PATH_FS.resolve(t);var a=Browser.preloadedImages[t];if(!a)return 0;var o=a.getContext("2d"),l=o.getImageData(0,0,a.width,a.height),c=_malloc(a.width*a.height*4);return HEAPU8.set(l.data,c),HEAP32[r>>2]=a.width,HEAP32[n>>2]=a.height,c},_emscripten_get_preloaded_image_data=(t,r,n)=>getPreloadedImageData(UTF8ToString(t),r,n);_emscripten_get_preloaded_image_data.sig="pppp";var _emscripten_get_preloaded_image_data_from_FILE=(t,r,n)=>{var a=_fileno(t),o=FS.getStream(a);return o?getPreloadedImageData(o.path,r,n):0};_emscripten_get_preloaded_image_data_from_FILE.sig="pppp";var wget={wgetRequests:{},nextWgetRequestHandle:0,getNextWgetRequestHandle(){var t=wget.nextWgetRequestHandle;return wget.nextWgetRequestHandle++,t}},FS_mkdirTree=(t,r)=>FS.mkdirTree(t,r),FS_unlink=(...t)=>FS.unlink(...t),_emscripten_async_wget=(t,r,n,a)=>{var o=UTF8ToString(t),l=UTF8ToString(r);l=PATH_FS.resolve(l);function c(u){u&&callUserCallback(()=>withStackSave(()=>getWasmTableEntry(u)(stringToUTF8OnStack(l))))}var _=PATH.dirname(l);FS_preloadFile(_,PATH.basename(l),o,!0,!0,!1,!1,()=>{try{FS_unlink(l)}catch{}FS_mkdirTree(_)}).then(()=>c(n)).catch(()=>c(a))};_emscripten_async_wget.sig="vpppp";var _emscripten_async_wget_data=async(t,r,n,a)=>{try{var o=await asyncLoad(UTF8ToString(t));callUserCallback(()=>{var l=_malloc(o.length);HEAPU8.set(o,l),getWasmTableEntry(n)(r,l,o.length),_free(l)})}catch{a&&callUserCallback(()=>{getWasmTableEntry(a)(r)})}};_emscripten_async_wget_data.sig="vpppp";var _emscripten_async_wget2=(t,r,n,a,o,l,c,_)=>{var u=UTF8ToString(t),p=UTF8ToString(r);p=PATH_FS.resolve(p);var d=UTF8ToString(n),m=UTF8ToString(a),f=p.lastIndexOf("/"),g=new XMLHttpRequest;g.open(d,u,!0),g.responseType="arraybuffer";var E=wget.getNextWgetRequestHandle(),x=PATH.dirname(p);return g.onload=v=>{if(g.status>=200&&g.status<300){try{FS.unlink(p)}catch{}if(FS.mkdirTree(x),FS.createDataFile(p.slice(0,f),p.slice(f+1),new Uint8Array(g.response),!0,!0,!1),l){var h=stackSave();getWasmTableEntry(l)(E,o,stringToUTF8OnStack(p)),stackRestore(h)}}else c&&getWasmTableEntry(c)(E,o,g.status);delete wget.wgetRequests[E]},g.onerror=v=>{c&&getWasmTableEntry(c)(E,o,g.status),delete wget.wgetRequests[E]},g.onprogress=v=>{if(v.lengthComputable||v.lengthComputable===void 0&&v.total!=0){var h=v.loaded/v.total*100;_&&getWasmTableEntry(_)(E,o,h)}},g.onabort=v=>{delete wget.wgetRequests[E]},d=="POST"?(g.setRequestHeader("Content-type","application/x-www-form-urlencoded"),g.send(m)):g.send(null),wget.wgetRequests[E]=g,E};_emscripten_async_wget2.sig="ipppppppp";var _emscripten_async_wget2_data=(t,r,n,a,o,l,c,_)=>{var u=UTF8ToString(t),p=UTF8ToString(r),d=UTF8ToString(n),m=new XMLHttpRequest;m.open(p,u,!0),m.responseType="arraybuffer";var f=wget.getNextWgetRequestHandle();function g(){if(c){var E=stackSave(),x=0;m.statusText&&(x=stringToUTF8OnStack(m.statusText)),getWasmTableEntry(c)(f,a,m.status,x),stackRestore(E)}}return m.onload=E=>{if(m.status>=200&&m.status<300||m.status===0&&u.slice(0,4).toLowerCase()!="http"){var x=new Uint8Array(m.response),v=_malloc(x.length);HEAPU8.set(x,v),l&&getWasmTableEntry(l)(f,a,v,x.length),o&&_free(v)}else g();delete wget.wgetRequests[f]},m.onerror=E=>{g(),delete wget.wgetRequests[f]},m.onprogress=E=>{_&&getWasmTableEntry(_)(f,a,E.loaded,E.lengthComputable||E.lengthComputable===void 0?E.total:0)},m.onabort=E=>{delete wget.wgetRequests[f]},p=="POST"?(m.setRequestHeader("Content-type","application/x-www-form-urlencoded"),m.send(d)):m.send(null),wget.wgetRequests[f]=m,f};_emscripten_async_wget2_data.sig="ippppippp";var _emscripten_async_wget2_abort=t=>{var r=wget.wgetRequests[t];r?.abort()};_emscripten_async_wget2_abort.sig="vi";var ___asctime_r=(t,r)=>{var n={tm_sec:HEAP32[t>>2],tm_min:HEAP32[t+4>>2],tm_hour:HEAP32[t+8>>2],tm_mday:HEAP32[t+12>>2],tm_mon:HEAP32[t+16>>2],tm_year:HEAP32[t+20>>2],tm_wday:HEAP32[t+24>>2]},a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=a[n.tm_wday]+" "+o[n.tm_mon]+(n.tm_mday<10?"  ":" ")+n.tm_mday+(n.tm_hour<10?" 0":" ")+n.tm_hour+(n.tm_min<10?":0":":")+n.tm_min+(n.tm_sec<10?":0":":")+n.tm_sec+" "+(1900+n.tm_year)+`
`;return stringToUTF8(l,r,26),r};___asctime_r.sig="ppp";var MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31],MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31],arraySum=(t,r)=>{for(var n=0,a=0;a<=r;n+=t[a++]);return n},addDays=(t,r)=>{for(var n=new Date(t.getTime());r>0;){var a=isLeapYear(n.getFullYear()),o=n.getMonth(),l=(a?MONTH_DAYS_LEAP:MONTH_DAYS_REGULAR)[o];if(r>l-n.getDate())r-=l-n.getDate()+1,n.setDate(1),o<11?n.setMonth(o+1):(n.setMonth(0),n.setFullYear(n.getFullYear()+1));else return n.setDate(n.getDate()+r),n}return n},_strptime=(t,r,n)=>{for(var a=UTF8ToString(r),o="\\!@#$^&*()+=-[]/{}|:<>?,.",l=0,c=o.length;l<c;++l)a=a.replace(new RegExp("\\"+o[l],"g"),"\\"+o[l]);var _={A:"%a",B:"%b",c:"%a %b %d %H:%M:%S %Y",D:"%m\\/%d\\/%y",e:"%d",F:"%Y-%m-%d",h:"%b",R:"%H\\:%M",r:"%I\\:%M\\:%S\\s%p",T:"%H\\:%M\\:%S",x:"%m\\/%d\\/(?:%y|%Y)",X:"%H\\:%M\\:%S"},u={a:"(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)",b:"(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)",C:"\\d\\d",d:"0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31",H:"\\d(?!\\d)|[0,1]\\d|20|21|22|23",I:"\\d(?!\\d)|0\\d|10|11|12",j:"00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d",m:"0[1-9]|[1-9](?!\\d)|10|11|12",M:"0\\d|\\d(?!\\d)|[1-5]\\d",n:" ",p:"AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.",S:"0\\d|\\d(?!\\d)|[1-5]\\d|60",U:"0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",W:"0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",w:"[0-6]",y:"\\d\\d",Y:"\\d\\d\\d\\d",t:" ",z:"Z|(?:[\\+\\-]\\d\\d:?(?:\\d\\d)?)"},p={JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11},d={SUN:0,MON:1,TUE:2,WED:3,THU:4,FRI:5,SAT:6},m={MON:0,TUE:1,WED:2,THU:3,FRI:4,SAT:5,SUN:6},f=[],g=a.replace(/%(.)/g,(R,M)=>_[M]||R).replace(/%(.)/g,(R,M)=>{let G=u[M];return G?(f.push(M),`(${G})`):M}).replace(/\s+/g,"\\s*"),E=new RegExp("^"+g,"i").exec(UTF8ToString(t));function x(){function R(M,G,U){return typeof M!="number"||isNaN(M)?G:M>=G?M<=U?M:U:G}return{year:R(HEAP32[n+20>>2]+1900,1970,9999),month:R(HEAP32[n+16>>2],0,11),day:R(HEAP32[n+12>>2],1,31),hour:R(HEAP32[n+8>>2],0,23),min:R(HEAP32[n+4>>2],0,59),sec:R(HEAP32[n>>2],0,59),gmtoff:0}}if(E){var v=x(),h,b=R=>{var M=f.indexOf(R);if(M>=0)return E[M+1]};if((h=b("S"))&&(v.sec=Number(h)),(h=b("M"))&&(v.min=Number(h)),h=b("H"))v.hour=Number(h);else if(h=b("I")){var S=Number(h);(h=b("p"))&&(S+=h.toUpperCase()[0]==="P"?12:0),v.hour=S}if(h=b("Y"))v.year=Number(h);else if(h=b("y")){var y=Number(h);(h=b("C"))?y+=Number(h)*100:y+=y<69?2e3:1900,v.year=y}if((h=b("m"))?v.month=Number(h)-1:(h=b("b"))&&(v.month=p[h.substring(0,3).toUpperCase()]||0),h=b("d"))v.day=Number(h);else if(h=b("j"))for(var T=Number(h),A=isLeapYear(v.year),w=0;w<12;++w){var C=arraySum(A?MONTH_DAYS_LEAP:MONTH_DAYS_REGULAR,w-1);T<=C+(A?MONTH_DAYS_LEAP:MONTH_DAYS_REGULAR)[w]&&(v.day=T-C)}else if(h=b("a")){var L=h.substring(0,3).toUpperCase();if(h=b("U")){var k=d[L],P=Number(h),I=new Date(v.year,0,1),F;I.getDay()===0?F=addDays(I,k+7*(P-1)):F=addDays(I,7-I.getDay()+k+7*(P-1)),v.day=F.getDate(),v.month=F.getMonth()}else if(h=b("W")){var k=m[L],P=Number(h),I=new Date(v.year,0,1),F;I.getDay()===1?F=addDays(I,k+7*(P-1)):F=addDays(I,7-I.getDay()+1+k+7*(P-1)),v.day=F.getDate(),v.month=F.getMonth()}}if(h=b("z"))if(h.toLowerCase()==="z")v.gmtoff=0;else{var H=h.match(/^((?:\-|\+)\d\d):?(\d\d)?/);v.gmtoff=H[1]*3600,H[2]&&(v.gmtoff+=v.gmtoff>0?H[2]*60:-H[2]*60)}var O=new Date(v.year,v.month,v.day,v.hour,v.min,v.sec,0);return HEAP32[n>>2]=O.getSeconds(),HEAP32[n+4>>2]=O.getMinutes(),HEAP32[n+8>>2]=O.getHours(),HEAP32[n+12>>2]=O.getDate(),HEAP32[n+16>>2]=O.getMonth(),HEAP32[n+20>>2]=O.getFullYear()-1900,HEAP32[n+24>>2]=O.getDay(),HEAP32[n+28>>2]=arraySum(isLeapYear(O.getFullYear())?MONTH_DAYS_LEAP:MONTH_DAYS_REGULAR,O.getMonth()-1)+O.getDate()-1,HEAP32[n+32>>2]=0,HEAP32[n+36>>2]=v.gmtoff,t+lengthBytesUTF8(E[0])}return 0};_strptime.sig="pppp";var _strptime_l=(t,r,n,a)=>_strptime(t,r,n);_strptime_l.sig="ppppp";function ___syscall_shutdown(t,r){try{return getSocketFromFD(t),-52}catch(n){if(typeof FS>"u"||n.name!=="ErrnoError")throw n;return-n.errno}}___syscall_shutdown.sig="iiiiiii";var __dlsym_catchup_js=(t,r)=>{var n=LDSO.loadedLibsByHandle[t],a=n.exports,o=Object.keys(a)[r],l=a[o],c=addFunction(l,l.sig);return c};__dlsym_catchup_js.sig="ppi";var _setNetworkCallback=(t,r,n)=>{function a(o){callUserCallback(()=>{t==="error"?withStackSave(()=>{var l=stringToUTF8OnStack(o[2]);getWasmTableEntry(n)(o[0],o[1],l,r)}):getWasmTableEntry(n)(o,r)})}SOCKFS.on(t,n?a:null)},_emscripten_set_socket_error_callback=(t,r)=>_setNetworkCallback("error",t,r);_emscripten_set_socket_error_callback.sig="vpp";var _emscripten_set_socket_open_callback=(t,r)=>_setNetworkCallback("open",t,r);_emscripten_set_socket_open_callback.sig="vpp";var _emscripten_set_socket_listen_callback=(t,r)=>_setNetworkCallback("listen",t,r);_emscripten_set_socket_listen_callback.sig="vpp";var _emscripten_set_socket_connection_callback=(t,r)=>_setNetworkCallback("connection",t,r);_emscripten_set_socket_connection_callback.sig="vpp";var _emscripten_set_socket_message_callback=(t,r)=>_setNetworkCallback("message",t,r);_emscripten_set_socket_message_callback.sig="vpp";var _emscripten_set_socket_close_callback=(t,r)=>_setNetworkCallback("close",t,r);_emscripten_set_socket_close_callback.sig="vpp";var _eglGetConfigs=(t,r,n,a)=>EGL.chooseConfig(t,0,r,n,a);_eglGetConfigs.sig="ippip";var _eglQuerySurface=(t,r,n,a)=>{if(t!=62e3)return EGL.setErrorCode(12296),0;if(r!=62006)return EGL.setErrorCode(12301),0;if(!a)return EGL.setErrorCode(12300),0;switch(EGL.setErrorCode(12288),n){case 12328:return HEAP32[a>>2]=62002,1;case 12376:return 1;case 12375:return HEAP32[a>>2]=Browser.getCanvas().width,1;case 12374:return HEAP32[a>>2]=Browser.getCanvas().height,1;case 12432:return HEAP32[a>>2]=-1,1;case 12433:return HEAP32[a>>2]=-1,1;case 12434:return HEAP32[a>>2]=-1,1;case 12422:return HEAP32[a>>2]=12420,1;case 12441:return HEAP32[a>>2]=12442,1;case 12435:return HEAP32[a>>2]=12437,1;case 12416:case 12417:case 12418:case 12419:return 1;default:return EGL.setErrorCode(12292),0}};_eglQuerySurface.sig="ippip";var _eglQueryContext=(t,r,n,a)=>{if(t!=62e3)return EGL.setErrorCode(12296),0;if(r!=62004)return EGL.setErrorCode(12294),0;if(!a)return EGL.setErrorCode(12300),0;switch(EGL.setErrorCode(12288),n){case 12328:return HEAP32[a>>2]=62002,1;case 12439:return HEAP32[a>>2]=12448,1;case 12440:return HEAP32[a>>2]=EGL.contextAttributes.majorVersion+1,1;case 12422:return HEAP32[a>>2]=12420,1;default:return EGL.setErrorCode(12292),0}};_eglQueryContext.sig="ippip";var _eglQueryAPI=()=>(EGL.setErrorCode(12288),12448);_eglQueryAPI.sig="i";var _eglGetCurrentContext=()=>EGL.currentContext;_eglGetCurrentContext.sig="p";var _eglGetCurrentSurface=t=>t==12378?EGL.currentReadSurface:t==12377?EGL.currentDrawSurface:(EGL.setErrorCode(12300),0);_eglGetCurrentSurface.sig="pi";var _eglGetCurrentDisplay=()=>EGL.currentContext?62e3:0;_eglGetCurrentDisplay.sig="p";var _eglReleaseThread=()=>(EGL.currentContext=0,EGL.currentReadSurface=0,EGL.currentDrawSurface=0,EGL.setErrorCode(12288),1);_eglReleaseThread.sig="i";var _emscripten_webgl_enable_WEBGL_multi_draw=t=>webgl_enable_WEBGL_multi_draw(GL.contexts[t].GLctx);_emscripten_webgl_enable_WEBGL_multi_draw.sig="ip";var _emscripten_webgl_enable_EXT_polygon_offset_clamp=t=>webgl_enable_EXT_polygon_offset_clamp(GL.contexts[t].GLctx);_emscripten_webgl_enable_EXT_polygon_offset_clamp.sig="ip";var _emscripten_webgl_enable_EXT_clip_control=t=>webgl_enable_EXT_clip_control(GL.contexts[t].GLctx);_emscripten_webgl_enable_EXT_clip_control.sig="ip";var _emscripten_webgl_enable_WEBGL_polygon_mode=t=>webgl_enable_WEBGL_polygon_mode(GL.contexts[t].GLctx);_emscripten_webgl_enable_WEBGL_polygon_mode.sig="ip";var _glPixelStorei=_emscripten_glPixelStorei;_glPixelStorei.sig="vii";var _glGetString=_emscripten_glGetString;_glGetString.sig="pi";var _glGetIntegerv=_emscripten_glGetIntegerv;_glGetIntegerv.sig="vip";var _glGetFloatv=_emscripten_glGetFloatv;_glGetFloatv.sig="vip";var _glGetBooleanv=_emscripten_glGetBooleanv;_glGetBooleanv.sig="vip";var _glDeleteTextures=_emscripten_glDeleteTextures;_glDeleteTextures.sig="vip";var _glCompressedTexImage2D=_emscripten_glCompressedTexImage2D;_glCompressedTexImage2D.sig="viiiiiiip";var _glCompressedTexSubImage2D=_emscripten_glCompressedTexSubImage2D;_glCompressedTexSubImage2D.sig="viiiiiiiip";var _glTexImage2D=_emscripten_glTexImage2D;_glTexImage2D.sig="viiiiiiiip";var _glTexSubImage2D=_emscripten_glTexSubImage2D;_glTexSubImage2D.sig="viiiiiiiip";var _glReadPixels=_emscripten_glReadPixels;_glReadPixels.sig="viiiiiip";var _glBindTexture=_emscripten_glBindTexture;_glBindTexture.sig="vii";var _glGetTexParameterfv=_emscripten_glGetTexParameterfv;_glGetTexParameterfv.sig="viip";var _glGetTexParameteriv=_emscripten_glGetTexParameteriv;_glGetTexParameteriv.sig="viip";var _glTexParameterfv=_emscripten_glTexParameterfv;_glTexParameterfv.sig="viip";var _glTexParameteriv=_emscripten_glTexParameteriv;_glTexParameteriv.sig="viip";var _glIsTexture=_emscripten_glIsTexture;_glIsTexture.sig="ii";var _glGenBuffers=_emscripten_glGenBuffers;_glGenBuffers.sig="vip";var _glGenTextures=_emscripten_glGenTextures;_glGenTextures.sig="vip";var _glDeleteBuffers=_emscripten_glDeleteBuffers;_glDeleteBuffers.sig="vip";var _glGetBufferParameteriv=_emscripten_glGetBufferParameteriv;_glGetBufferParameteriv.sig="viip";var _glBufferData=_emscripten_glBufferData;_glBufferData.sig="vippi";var _glBufferSubData=_emscripten_glBufferSubData;_glBufferSubData.sig="vippp";var _glGenQueriesEXT=_emscripten_glGenQueriesEXT,_glDeleteQueriesEXT=_emscripten_glDeleteQueriesEXT,_glIsQueryEXT=_emscripten_glIsQueryEXT,_glBeginQueryEXT=_emscripten_glBeginQueryEXT,_glEndQueryEXT=_emscripten_glEndQueryEXT,_glQueryCounterEXT=_emscripten_glQueryCounterEXT,_glGetQueryivEXT=_emscripten_glGetQueryivEXT,_glGetQueryObjectuivEXT=_emscripten_glGetQueryObjectuivEXT,_glGetQueryObjectui64vEXT=_emscripten_glGetQueryObjectui64vEXT,_glIsBuffer=_emscripten_glIsBuffer;_glIsBuffer.sig="ii";var _glGenRenderbuffers=_emscripten_glGenRenderbuffers;_glGenRenderbuffers.sig="vip";var _glDeleteRenderbuffers=_emscripten_glDeleteRenderbuffers;_glDeleteRenderbuffers.sig="vip";var _glBindRenderbuffer=_emscripten_glBindRenderbuffer;_glBindRenderbuffer.sig="vii";var _glGetRenderbufferParameteriv=_emscripten_glGetRenderbufferParameteriv;_glGetRenderbufferParameteriv.sig="viip";var _glIsRenderbuffer=_emscripten_glIsRenderbuffer;_glIsRenderbuffer.sig="ii";var _glGetUniformfv=_emscripten_glGetUniformfv;_glGetUniformfv.sig="viip";var _glGetUniformiv=_emscripten_glGetUniformiv;_glGetUniformiv.sig="viip";var _glGetUniformLocation=_emscripten_glGetUniformLocation;_glGetUniformLocation.sig="iip";var _glGetVertexAttribfv=_emscripten_glGetVertexAttribfv;_glGetVertexAttribfv.sig="viip";var _glGetVertexAttribiv=_emscripten_glGetVertexAttribiv;_glGetVertexAttribiv.sig="viip";var _glGetVertexAttribPointerv=_emscripten_glGetVertexAttribPointerv;_glGetVertexAttribPointerv.sig="viip";var _glUniform1f=_emscripten_glUniform1f;_glUniform1f.sig="vif";var _glUniform2f=_emscripten_glUniform2f;_glUniform2f.sig="viff";var _glUniform3f=_emscripten_glUniform3f;_glUniform3f.sig="vifff";var _glUniform4f=_emscripten_glUniform4f;_glUniform4f.sig="viffff";var _glUniform1i=_emscripten_glUniform1i;_glUniform1i.sig="vii";var _glUniform2i=_emscripten_glUniform2i;_glUniform2i.sig="viii";var _glUniform3i=_emscripten_glUniform3i;_glUniform3i.sig="viiii";var _glUniform4i=_emscripten_glUniform4i;_glUniform4i.sig="viiiii";var _glUniform1iv=_emscripten_glUniform1iv;_glUniform1iv.sig="viip";var _glUniform2iv=_emscripten_glUniform2iv;_glUniform2iv.sig="viip";var _glUniform3iv=_emscripten_glUniform3iv;_glUniform3iv.sig="viip";var _glUniform4iv=_emscripten_glUniform4iv;_glUniform4iv.sig="viip";var _glUniform1fv=_emscripten_glUniform1fv;_glUniform1fv.sig="viip";var _glUniform2fv=_emscripten_glUniform2fv;_glUniform2fv.sig="viip";var _glUniform3fv=_emscripten_glUniform3fv;_glUniform3fv.sig="viip";var _glUniform4fv=_emscripten_glUniform4fv;_glUniform4fv.sig="viip";var _glUniformMatrix2fv=_emscripten_glUniformMatrix2fv;_glUniformMatrix2fv.sig="viiip";var _glUniformMatrix3fv=_emscripten_glUniformMatrix3fv;_glUniformMatrix3fv.sig="viiip";var _glUniformMatrix4fv=_emscripten_glUniformMatrix4fv;_glUniformMatrix4fv.sig="viiip";var _glBindBuffer=_emscripten_glBindBuffer;_glBindBuffer.sig="vii";var _glVertexAttrib1fv=_emscripten_glVertexAttrib1fv;_glVertexAttrib1fv.sig="vip";var _glVertexAttrib2fv=_emscripten_glVertexAttrib2fv;_glVertexAttrib2fv.sig="vip";var _glVertexAttrib3fv=_emscripten_glVertexAttrib3fv;_glVertexAttrib3fv.sig="vip";var _glVertexAttrib4fv=_emscripten_glVertexAttrib4fv;_glVertexAttrib4fv.sig="vip";var _glGetAttribLocation=_emscripten_glGetAttribLocation;_glGetAttribLocation.sig="iip";var _glGetActiveAttrib=_emscripten_glGetActiveAttrib;_glGetActiveAttrib.sig="viiipppp";var _glGetActiveUniform=_emscripten_glGetActiveUniform;_glGetActiveUniform.sig="viiipppp";var _glCreateShader=_emscripten_glCreateShader;_glCreateShader.sig="ii";var _glDeleteShader=_emscripten_glDeleteShader;_glDeleteShader.sig="vi";var _glGetAttachedShaders=_emscripten_glGetAttachedShaders;_glGetAttachedShaders.sig="viipp";var _glShaderSource=_emscripten_glShaderSource;_glShaderSource.sig="viipp";var _glGetShaderSource=_emscripten_glGetShaderSource;_glGetShaderSource.sig="viipp";var _glCompileShader=_emscripten_glCompileShader;_glCompileShader.sig="vi";var _glGetShaderInfoLog=_emscripten_glGetShaderInfoLog;_glGetShaderInfoLog.sig="viipp";var _glGetShaderiv=_emscripten_glGetShaderiv;_glGetShaderiv.sig="viip";var _glGetProgramiv=_emscripten_glGetProgramiv;_glGetProgramiv.sig="viip";var _glIsShader=_emscripten_glIsShader;_glIsShader.sig="ii";var _glCreateProgram=_emscripten_glCreateProgram;_glCreateProgram.sig="i";var _glDeleteProgram=_emscripten_glDeleteProgram;_glDeleteProgram.sig="vi";var _glAttachShader=_emscripten_glAttachShader;_glAttachShader.sig="vii";var _glDetachShader=_emscripten_glDetachShader;_glDetachShader.sig="vii";var _glGetShaderPrecisionFormat=_emscripten_glGetShaderPrecisionFormat;_glGetShaderPrecisionFormat.sig="viipp";var _glLinkProgram=_emscripten_glLinkProgram;_glLinkProgram.sig="vi";var _glGetProgramInfoLog=_emscripten_glGetProgramInfoLog;_glGetProgramInfoLog.sig="viipp";var _glUseProgram=_emscripten_glUseProgram;_glUseProgram.sig="vi";var _glValidateProgram=_emscripten_glValidateProgram;_glValidateProgram.sig="vi";var _glIsProgram=_emscripten_glIsProgram;_glIsProgram.sig="ii";var _glBindAttribLocation=_emscripten_glBindAttribLocation;_glBindAttribLocation.sig="viip";var _glBindFramebuffer=_emscripten_glBindFramebuffer;_glBindFramebuffer.sig="vii";var _glGenFramebuffers=_emscripten_glGenFramebuffers;_glGenFramebuffers.sig="vip";var _glDeleteFramebuffers=_emscripten_glDeleteFramebuffers;_glDeleteFramebuffers.sig="vip";var _glFramebufferRenderbuffer=_emscripten_glFramebufferRenderbuffer;_glFramebufferRenderbuffer.sig="viiii";var _glFramebufferTexture2D=_emscripten_glFramebufferTexture2D;_glFramebufferTexture2D.sig="viiiii";var _glGetFramebufferAttachmentParameteriv=_emscripten_glGetFramebufferAttachmentParameteriv;_glGetFramebufferAttachmentParameteriv.sig="viiip";var _glIsFramebuffer=_emscripten_glIsFramebuffer;_glIsFramebuffer.sig="ii";var _emscripten_glVertexPointer=(t,r,n,a)=>abort("Legacy GL function (glVertexPointer) called. If you want legacy GL emulation, you need to compile with -sLEGACY_GL_EMULATION to enable legacy GL emulation.");_emscripten_glVertexPointer.sig="viiip";var _glVertexPointer=_emscripten_glVertexPointer;_glVertexPointer.sig="viiip";var _emscripten_glMatrixMode=()=>abort("Legacy GL function (glMatrixMode) called. If you want legacy GL emulation, you need to compile with -sLEGACY_GL_EMULATION to enable legacy GL emulation.");_emscripten_glMatrixMode.sig="vi";var _glMatrixMode=_emscripten_glMatrixMode;_glMatrixMode.sig="vi";var _emscripten_glBegin=()=>abort("Legacy GL function (glBegin) called. If you want legacy GL emulation, you need to compile with -sLEGACY_GL_EMULATION to enable legacy GL emulation.");_emscripten_glBegin.sig="vi";var _glBegin=_emscripten_glBegin;_glBegin.sig="vi";var _emscripten_glLoadIdentity=()=>abort("Legacy GL function (glLoadIdentity) called. If you want legacy GL emulation, you need to compile with -sLEGACY_GL_EMULATION to enable legacy GL emulation.");_emscripten_glLoadIdentity.sig="v";var _glLoadIdentity=_emscripten_glLoadIdentity;_glLoadIdentity.sig="v";var _glGenVertexArraysOES=_emscripten_glGenVertexArraysOES;_glGenVertexArraysOES.sig="vip";var _glDeleteVertexArraysOES=_emscripten_glDeleteVertexArraysOES;_glDeleteVertexArraysOES.sig="vip";var _glBindVertexArrayOES=_emscripten_glBindVertexArrayOES;_glBindVertexArrayOES.sig="vi";var _glIsVertexArrayOES=_emscripten_glIsVertexArrayOES;_glIsVertexArrayOES.sig="ii";var _glVertexAttribPointer=_emscripten_glVertexAttribPointer;_glVertexAttribPointer.sig="viiiiip";var _glEnableVertexAttribArray=_emscripten_glEnableVertexAttribArray;_glEnableVertexAttribArray.sig="vi";var _glDisableVertexAttribArray=_emscripten_glDisableVertexAttribArray;_glDisableVertexAttribArray.sig="vi";var _glDrawArrays=_emscripten_glDrawArrays;_glDrawArrays.sig="viii";var _glShaderBinary=_emscripten_glShaderBinary;_glShaderBinary.sig="vipipi";var _glReleaseShaderCompiler=_emscripten_glReleaseShaderCompiler;_glReleaseShaderCompiler.sig="v";var _glGetError=_emscripten_glGetError;_glGetError.sig="i";var _glVertexAttribDivisorNV=_emscripten_glVertexAttribDivisorNV,_glDrawArraysInstancedNV=_emscripten_glDrawArraysInstancedNV,_glDrawElementsInstancedNV=_emscripten_glDrawElementsInstancedNV,_glVertexAttribDivisorEXT=_emscripten_glVertexAttribDivisorEXT,_glDrawArraysInstancedEXT=_emscripten_glDrawArraysInstancedEXT,_glDrawElementsInstancedEXT=_emscripten_glDrawElementsInstancedEXT,_glVertexAttribDivisorARB=_emscripten_glVertexAttribDivisorARB,_glDrawArraysInstancedARB=_emscripten_glDrawArraysInstancedARB,_glDrawElementsInstancedARB=_emscripten_glDrawElementsInstancedARB,_glVertexAttribDivisorANGLE=_emscripten_glVertexAttribDivisorANGLE,_glDrawArraysInstancedANGLE=_emscripten_glDrawArraysInstancedANGLE,_glDrawElementsInstancedANGLE=_emscripten_glDrawElementsInstancedANGLE,_glDrawBuffersEXT=_emscripten_glDrawBuffersEXT,_glDrawBuffersWEBGL=_emscripten_glDrawBuffersWEBGL,_glColorMask=_emscripten_glColorMask;_glColorMask.sig="viiii";var _glDepthMask=_emscripten_glDepthMask;_glDepthMask.sig="vi";var _glSampleCoverage=_emscripten_glSampleCoverage;_glSampleCoverage.sig="vfi";var _emscripten_glMultiDrawArraysWEBGL=(t,r,n,a)=>{GLctx.multiDrawWebgl.multiDrawArraysWEBGL(t,HEAP32,r>>2,HEAP32,n>>2,a)};_emscripten_glMultiDrawArraysWEBGL.sig="vippi";var _glMultiDrawArraysWEBGL=_emscripten_glMultiDrawArraysWEBGL,_emscripten_glMultiDrawArrays=_glMultiDrawArraysWEBGL;_emscripten_glMultiDrawArrays.sig="vippi";var _glMultiDrawArrays=_emscripten_glMultiDrawArrays;_glMultiDrawArrays.sig="vippi";var _emscripten_glMultiDrawArraysANGLE=_glMultiDrawArraysWEBGL,_glMultiDrawArraysANGLE=_emscripten_glMultiDrawArraysANGLE,_emscripten_glMultiDrawArraysInstancedWEBGL=(t,r,n,a,o)=>{GLctx.multiDrawWebgl.multiDrawArraysInstancedWEBGL(t,HEAP32,r>>2,HEAP32,n>>2,HEAP32,a>>2,o)};_emscripten_glMultiDrawArraysInstancedWEBGL.sig="vipppi";var _glMultiDrawArraysInstancedWEBGL=_emscripten_glMultiDrawArraysInstancedWEBGL,_emscripten_glMultiDrawArraysInstancedANGLE=_glMultiDrawArraysInstancedWEBGL,_glMultiDrawArraysInstancedANGLE=_emscripten_glMultiDrawArraysInstancedANGLE,_emscripten_glMultiDrawElementsWEBGL=(t,r,n,a,o)=>{GLctx.multiDrawWebgl.multiDrawElementsWEBGL(t,HEAP32,r>>2,n,HEAP32,a>>2,o)};_emscripten_glMultiDrawElementsWEBGL.sig="vipipi";var _glMultiDrawElementsWEBGL=_emscripten_glMultiDrawElementsWEBGL,_emscripten_glMultiDrawElements=_glMultiDrawElementsWEBGL;_emscripten_glMultiDrawElements.sig="vipipi";var _glMultiDrawElements=_emscripten_glMultiDrawElements;_glMultiDrawElements.sig="vipipi";var _emscripten_glMultiDrawElementsANGLE=_glMultiDrawElementsWEBGL,_glMultiDrawElementsANGLE=_emscripten_glMultiDrawElementsANGLE,_emscripten_glMultiDrawElementsInstancedWEBGL=(t,r,n,a,o,l)=>{GLctx.multiDrawWebgl.multiDrawElementsInstancedWEBGL(t,HEAP32,r>>2,n,HEAP32,a>>2,HEAP32,o>>2,l)};_emscripten_glMultiDrawElementsInstancedWEBGL.sig="vipippi";var _glMultiDrawElementsInstancedWEBGL=_emscripten_glMultiDrawElementsInstancedWEBGL,_emscripten_glMultiDrawElementsInstancedANGLE=_glMultiDrawElementsInstancedWEBGL,_glMultiDrawElementsInstancedANGLE=_emscripten_glMultiDrawElementsInstancedANGLE,_glPolygonOffsetClampEXT=_emscripten_glPolygonOffsetClampEXT,_glClipControlEXT=_emscripten_glClipControlEXT,_glPolygonModeWEBGL=_emscripten_glPolygonModeWEBGL,_glFinish=_emscripten_glFinish;_glFinish.sig="v";var _glFlush=_emscripten_glFlush;_glFlush.sig="v";var _emscripten_glClearDepth=t=>GLctx.clearDepth(t);_emscripten_glClearDepth.sig="vd";var _glClearDepth=_emscripten_glClearDepth;_glClearDepth.sig="vd";var _glClearDepthf=_emscripten_glClearDepthf;_glClearDepthf.sig="vf";var _glDepthFunc=_emscripten_glDepthFunc;_glDepthFunc.sig="vi";var _glEnable=_emscripten_glEnable;_glEnable.sig="vi";var _glDisable=_emscripten_glDisable;_glDisable.sig="vi";var _glFrontFace=_emscripten_glFrontFace;_glFrontFace.sig="vi";var _glCullFace=_emscripten_glCullFace;_glCullFace.sig="vi";var _glClear=_emscripten_glClear;_glClear.sig="vi";var _glLineWidth=_emscripten_glLineWidth;_glLineWidth.sig="vf";var _glClearStencil=_emscripten_glClearStencil;_glClearStencil.sig="vi";var _glStencilMask=_emscripten_glStencilMask;_glStencilMask.sig="vi";var _glCheckFramebufferStatus=_emscripten_glCheckFramebufferStatus;_glCheckFramebufferStatus.sig="ii";var _glGenerateMipmap=_emscripten_glGenerateMipmap;_glGenerateMipmap.sig="vi";var _glActiveTexture=_emscripten_glActiveTexture;_glActiveTexture.sig="vi";var _glBlendEquation=_emscripten_glBlendEquation;_glBlendEquation.sig="vi";var _glIsEnabled=_emscripten_glIsEnabled;_glIsEnabled.sig="ii";var _glBlendFunc=_emscripten_glBlendFunc;_glBlendFunc.sig="vii";var _glBlendEquationSeparate=_emscripten_glBlendEquationSeparate;_glBlendEquationSeparate.sig="vii";var _emscripten_glDepthRange=(t,r)=>GLctx.depthRange(t,r);_emscripten_glDepthRange.sig="vdd";var _glDepthRange=_emscripten_glDepthRange;_glDepthRange.sig="vdd";var _glDepthRangef=_emscripten_glDepthRangef;_glDepthRangef.sig="vff";var _glStencilMaskSeparate=_emscripten_glStencilMaskSeparate;_glStencilMaskSeparate.sig="vii";var _glHint=_emscripten_glHint;_glHint.sig="vii";var _glPolygonOffset=_emscripten_glPolygonOffset;_glPolygonOffset.sig="vff";var _glVertexAttrib1f=_emscripten_glVertexAttrib1f;_glVertexAttrib1f.sig="vif";var _glTexParameteri=_emscripten_glTexParameteri;_glTexParameteri.sig="viii";var _glTexParameterf=_emscripten_glTexParameterf;_glTexParameterf.sig="viif";var _glVertexAttrib2f=_emscripten_glVertexAttrib2f;_glVertexAttrib2f.sig="viff";var _glStencilFunc=_emscripten_glStencilFunc;_glStencilFunc.sig="viii";var _glStencilOp=_emscripten_glStencilOp;_glStencilOp.sig="viii";var _glViewport=_emscripten_glViewport;_glViewport.sig="viiii";var _glClearColor=_emscripten_glClearColor;_glClearColor.sig="vffff";var _glScissor=_emscripten_glScissor;_glScissor.sig="viiii";var _glVertexAttrib3f=_emscripten_glVertexAttrib3f;_glVertexAttrib3f.sig="vifff";var _glRenderbufferStorage=_emscripten_glRenderbufferStorage;_glRenderbufferStorage.sig="viiii";var _glBlendFuncSeparate=_emscripten_glBlendFuncSeparate;_glBlendFuncSeparate.sig="viiii";var _glBlendColor=_emscripten_glBlendColor;_glBlendColor.sig="vffff";var _glStencilFuncSeparate=_emscripten_glStencilFuncSeparate;_glStencilFuncSeparate.sig="viiii";var _glStencilOpSeparate=_emscripten_glStencilOpSeparate;_glStencilOpSeparate.sig="viiii";var _glVertexAttrib4f=_emscripten_glVertexAttrib4f;_glVertexAttrib4f.sig="viffff";var _glCopyTexImage2D=_emscripten_glCopyTexImage2D;_glCopyTexImage2D.sig="viiiiiiii";var _glCopyTexSubImage2D=_emscripten_glCopyTexSubImage2D;_glCopyTexSubImage2D.sig="viiiiiiii";var writeGLArray=(t,r,n,a)=>{assert(t),assert(typeof t.length<"u");var o=t.length,l=n<o?n:o,c=a?HEAPF32:HEAP32;r=r>>2;for(var _=0;_<l;++_)c[r+_]=t[_];return o},webglPowerPreferences=["default","low-power","high-performance"],_emscripten_webgl_do_create_context=(t,r)=>{assert(r);var n=r>>2,a=HEAP32[n+2],o={alpha:!!HEAP8[r+0],depth:!!HEAP8[r+1],stencil:!!HEAP8[r+2],antialias:!!HEAP8[r+3],premultipliedAlpha:!!HEAP8[r+4],preserveDrawingBuffer:!!HEAP8[r+5],powerPreference:webglPowerPreferences[a],failIfMajorPerformanceCaveat:!!HEAP8[r+12],majorVersion:HEAP32[n+4],minorVersion:HEAP32[n+5],enableExtensionsByDefault:HEAP8[r+24],explicitSwapControl:HEAP8[r+25],proxyContextToMainThread:HEAP32[n+7],renderViaOffscreenBackBuffer:HEAP8[r+32]};o.majorVersion!==1&&o.majorVersion!==2&&err(`Invalid WebGL version requested: ${o.majorVersion}`),o.majorVersion!==2&&err("WebGL 1 requested but only WebGL 2 is supported (MIN_WEBGL_VERSION is 2)");var l=findCanvasEventTarget(t);if(!l||o.explicitSwapControl)return 0;var c=GL.createContext(l,o);return c};_emscripten_webgl_do_create_context.sig="ppp";var _emscripten_webgl_create_context=_emscripten_webgl_do_create_context;_emscripten_webgl_create_context.sig="ppp";var _emscripten_webgl_do_get_current_context=()=>GL.currentContext?GL.currentContext.handle:0;_emscripten_webgl_do_get_current_context.sig="p";var _emscripten_webgl_get_current_context=_emscripten_webgl_do_get_current_context;_emscripten_webgl_get_current_context.sig="p";var _emscripten_webgl_do_commit_frame=()=>!GL.currentContext||!GL.currentContext.GLctx||!GL.currentContext.attributes.explicitSwapControl?-3:0;_emscripten_webgl_do_commit_frame.sig="i";var _emscripten_webgl_commit_frame=_emscripten_webgl_do_commit_frame;_emscripten_webgl_commit_frame.sig="i";var _emscripten_webgl_make_context_current=t=>{var r=GL.makeContextCurrent(t);return r?0:-5};_emscripten_webgl_make_context_current.sig="ip";var _emscripten_webgl_get_drawing_buffer_size=(t,r,n)=>{var a=GL.getContext(t);return!a||!a.GLctx||!r||!n?-5:(HEAP32[r>>2]=a.GLctx.drawingBufferWidth,HEAP32[n>>2]=a.GLctx.drawingBufferHeight,0)};_emscripten_webgl_get_drawing_buffer_size.sig="ippp";var _emscripten_webgl_get_context_attributes=(t,r)=>{if(!r)return-5;if(t=GL.contexts[t],!t)return-3;var n=t.GLctx?.getContextAttributes();if(!n)return-3;HEAP8[r]=n.alpha,HEAP8[r+1]=n.depth,HEAP8[r+2]=n.stencil,HEAP8[r+3]=n.antialias,HEAP8[r+4]=n.premultipliedAlpha,HEAP8[r+5]=n.preserveDrawingBuffer;var a=n.powerPreference&&webglPowerPreferences.indexOf(n.powerPreference);return HEAP32[r+8>>2]=a,HEAP8[r+12]=n.failIfMajorPerformanceCaveat,HEAP32[r+16>>2]=t.version,HEAP32[r+20>>2]=0,HEAP8[r+24]=t.attributes.enableExtensionsByDefault,0};_emscripten_webgl_get_context_attributes.sig="ipp";var _emscripten_webgl_destroy_context=t=>{GL.currentContext==t&&(GL.currentContext=0),GL.deleteContext(t)};_emscripten_webgl_destroy_context.sig="ip";var _emscripten_webgl_enable_extension=(t,r)=>{var n=GL.getContext(t),a=UTF8ToString(r);a.startsWith("GL_")&&(a=a.slice(3)),a=="WEBGL_draw_instanced_base_vertex_base_instance"&&webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx),a=="WEBGL_multi_draw_instanced_base_vertex_base_instance"&&webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx),a=="WEBGL_multi_draw"&&webgl_enable_WEBGL_multi_draw(GLctx),a=="EXT_polygon_offset_clamp"&&webgl_enable_EXT_polygon_offset_clamp(GLctx),a=="EXT_clip_control"&&webgl_enable_EXT_clip_control(GLctx),a=="WEBGL_polygon_mode"&&webgl_enable_WEBGL_polygon_mode(GLctx);var o=n.GLctx.getExtension(a);return!!o};_emscripten_webgl_enable_extension.sig="ipp";var _emscripten_supports_offscreencanvas=()=>0;_emscripten_supports_offscreencanvas.sig="i";var registerWebGlEventCallback=(t,r,n,a,o,l,c)=>{var _=p=>{getWasmTableEntry(a)(o,0,r)&&p.preventDefault()},u={target:findEventTarget(t),eventTypeString:l,eventTypeId:o,userData:r,callbackfunc:a,handlerFunc:_,useCapture:n};JSEvents.registerOrRemoveHandler(u)},_emscripten_set_webglcontextlost_callback_on_thread=(t,r,n,a,o)=>(registerWebGlEventCallback(t,r,n,a,31,"webglcontextlost"),0);_emscripten_set_webglcontextlost_callback_on_thread.sig="ippipp";var _emscripten_set_webglcontextrestored_callback_on_thread=(t,r,n,a,o)=>(registerWebGlEventCallback(t,r,n,a,32,"webglcontextrestored"),0);_emscripten_set_webglcontextrestored_callback_on_thread.sig="ippipp";var _emscripten_is_webgl_context_lost=t=>!GL.contexts[t]||GL.contexts[t].GLctx.isContextLost();_emscripten_is_webgl_context_lost.sig="ip";var _emscripten_webgl_get_supported_extensions=()=>stringToNewUTF8(GLctx.getSupportedExtensions().join(" "));_emscripten_webgl_get_supported_extensions.sig="p";var _emscripten_webgl_get_program_parameter_d=(t,r)=>GLctx.getProgramParameter(GL.programs[t],r);_emscripten_webgl_get_program_parameter_d.sig="dii";var _emscripten_webgl_get_program_info_log_utf8=t=>stringToNewUTF8(GLctx.getProgramInfoLog(GL.programs[t]));_emscripten_webgl_get_program_info_log_utf8.sig="pi";var _emscripten_webgl_get_shader_parameter_d=(t,r)=>GLctx.getShaderParameter(GL.shaders[t],r);_emscripten_webgl_get_shader_parameter_d.sig="dii";var _emscripten_webgl_get_shader_info_log_utf8=t=>stringToNewUTF8(GLctx.getShaderInfoLog(GL.shaders[t]));_emscripten_webgl_get_shader_info_log_utf8.sig="pi";var _emscripten_webgl_get_shader_source_utf8=t=>stringToNewUTF8(GLctx.getShaderSource(GL.shaders[t]));_emscripten_webgl_get_shader_source_utf8.sig="pi";var _emscripten_webgl_get_vertex_attrib_d=(t,r)=>GLctx.getVertexAttrib(t,r);_emscripten_webgl_get_vertex_attrib_d.sig="dii";var _emscripten_webgl_get_vertex_attrib_o=(t,r)=>{var n=GLctx.getVertexAttrib(t,r);return n?.name};_emscripten_webgl_get_vertex_attrib_o.sig="iii";var _emscripten_webgl_get_vertex_attrib_v=(t,r,n,a,o)=>writeGLArray(GLctx.getVertexAttrib(t,r),n,a,o);_emscripten_webgl_get_vertex_attrib_v.sig="iiipii";var _emscripten_webgl_get_uniform_d=(t,r)=>GLctx.getUniform(GL.programs[t],webglGetUniformLocation(r));_emscripten_webgl_get_uniform_d.sig="dii";var _emscripten_webgl_get_uniform_v=(t,r,n,a,o)=>writeGLArray(GLctx.getUniform(GL.programs[t],webglGetUniformLocation(r)),n,a,o);_emscripten_webgl_get_uniform_v.sig="iiipii";var _emscripten_webgl_get_parameter_v=(t,r,n,a)=>writeGLArray(GLctx.getParameter(t),r,n,a);_emscripten_webgl_get_parameter_v.sig="iipii";var _emscripten_webgl_get_parameter_d=t=>GLctx.getParameter(t);_emscripten_webgl_get_parameter_d.sig="di";var _emscripten_webgl_get_parameter_o=t=>{var r=GLctx.getParameter(t);return r?.name};_emscripten_webgl_get_parameter_o.sig="ii";var _emscripten_webgl_get_parameter_utf8=t=>stringToNewUTF8(GLctx.getParameter(t));_emscripten_webgl_get_parameter_utf8.sig="pi";var _emscripten_webgl_get_parameter_i64v=(t,r)=>writeI53ToI64(r,GLctx.getParameter(t));_emscripten_webgl_get_parameter_i64v.sig="vip";var _emscripten_webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance=t=>webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GL.contexts[t].GLctx);_emscripten_webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance.sig="ip";var _emscripten_webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance=t=>webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GL.contexts[t].GLctx);_emscripten_webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance.sig="ip";var _glGetStringi=_emscripten_glGetStringi;_glGetStringi.sig="pii";var _glGetInteger64v=_emscripten_glGetInteger64v;_glGetInteger64v.sig="vip";var _glGetInternalformativ=_emscripten_glGetInternalformativ;_glGetInternalformativ.sig="viiiip";var _glCompressedTexImage3D=_emscripten_glCompressedTexImage3D;_glCompressedTexImage3D.sig="viiiiiiiip";var _glCompressedTexSubImage3D=_emscripten_glCompressedTexSubImage3D;_glCompressedTexSubImage3D.sig="viiiiiiiiiip";var _glGetBufferParameteri64v=_emscripten_glGetBufferParameteri64v;_glGetBufferParameteri64v.sig="viip";var _emscripten_glGetBufferSubData=(t,r,n,a)=>{if(!a){GL.recordError(1281);return}n&&GLctx.getBufferSubData(t,r,HEAPU8,a,n)};_emscripten_glGetBufferSubData.sig="vippp";var _glGetBufferSubData=_emscripten_glGetBufferSubData;_glGetBufferSubData.sig="vippp";var _glInvalidateFramebuffer=_emscripten_glInvalidateFramebuffer;_glInvalidateFramebuffer.sig="viip";var _glInvalidateSubFramebuffer=_emscripten_glInvalidateSubFramebuffer;_glInvalidateSubFramebuffer.sig="viipiiii";var _glTexImage3D=_emscripten_glTexImage3D;_glTexImage3D.sig="viiiiiiiiip";var _glTexSubImage3D=_emscripten_glTexSubImage3D;_glTexSubImage3D.sig="viiiiiiiiiip";var _glGenQueries=_emscripten_glGenQueries;_glGenQueries.sig="vip";var _glDeleteQueries=_emscripten_glDeleteQueries;_glDeleteQueries.sig="vip";var _glIsQuery=_emscripten_glIsQuery;_glIsQuery.sig="ii";var _glBeginQuery=_emscripten_glBeginQuery;_glBeginQuery.sig="vii";var _glGetQueryiv=_emscripten_glGetQueryiv;_glGetQueryiv.sig="viip";var _glGetQueryObjectuiv=_emscripten_glGetQueryObjectuiv;_glGetQueryObjectuiv.sig="viip";var _glGenSamplers=_emscripten_glGenSamplers;_glGenSamplers.sig="vip";var _glDeleteSamplers=_emscripten_glDeleteSamplers;_glDeleteSamplers.sig="vip";var _glIsSampler=_emscripten_glIsSampler;_glIsSampler.sig="ii";var _glBindSampler=_emscripten_glBindSampler;_glBindSampler.sig="vii";var _glSamplerParameterf=_emscripten_glSamplerParameterf;_glSamplerParameterf.sig="viif";var _glSamplerParameteri=_emscripten_glSamplerParameteri;_glSamplerParameteri.sig="viii";var _glSamplerParameterfv=_emscripten_glSamplerParameterfv;_glSamplerParameterfv.sig="viip";var _glSamplerParameteriv=_emscripten_glSamplerParameteriv;_glSamplerParameteriv.sig="viip";var _glGetSamplerParameterfv=_emscripten_glGetSamplerParameterfv;_glGetSamplerParameterfv.sig="viip";var _glGetSamplerParameteriv=_emscripten_glGetSamplerParameteriv;_glGetSamplerParameteriv.sig="viip";var _glGenTransformFeedbacks=_emscripten_glGenTransformFeedbacks;_glGenTransformFeedbacks.sig="vip";var _glDeleteTransformFeedbacks=_emscripten_glDeleteTransformFeedbacks;_glDeleteTransformFeedbacks.sig="vip";var _glIsTransformFeedback=_emscripten_glIsTransformFeedback;_glIsTransformFeedback.sig="ii";var _glBindTransformFeedback=_emscripten_glBindTransformFeedback;_glBindTransformFeedback.sig="vii";var _glTransformFeedbackVaryings=_emscripten_glTransformFeedbackVaryings;_glTransformFeedbackVaryings.sig="viipi";var _glGetTransformFeedbackVarying=_emscripten_glGetTransformFeedbackVarying;_glGetTransformFeedbackVarying.sig="viiipppp";var _glGetIntegeri_v=_emscripten_glGetIntegeri_v;_glGetIntegeri_v.sig="viip";var _glGetInteger64i_v=_emscripten_glGetInteger64i_v;_glGetInteger64i_v.sig="viip";var _glBindBufferBase=_emscripten_glBindBufferBase;_glBindBufferBase.sig="viii";var _glBindBufferRange=_emscripten_glBindBufferRange;_glBindBufferRange.sig="viiipp";var _glGetUniformIndices=_emscripten_glGetUniformIndices;_glGetUniformIndices.sig="viipp";var _glGetActiveUniformsiv=_emscripten_glGetActiveUniformsiv;_glGetActiveUniformsiv.sig="viipip";var _glGetUniformBlockIndex=_emscripten_glGetUniformBlockIndex;_glGetUniformBlockIndex.sig="iip";var _glGetActiveUniformBlockiv=_emscripten_glGetActiveUniformBlockiv;_glGetActiveUniformBlockiv.sig="viiip";var _glGetActiveUniformBlockName=_emscripten_glGetActiveUniformBlockName;_glGetActiveUniformBlockName.sig="viiipp";var _glUniformBlockBinding=_emscripten_glUniformBlockBinding;_glUniformBlockBinding.sig="viii";var _glClearBufferiv=_emscripten_glClearBufferiv;_glClearBufferiv.sig="viip";var _glClearBufferuiv=_emscripten_glClearBufferuiv;_glClearBufferuiv.sig="viip";var _glClearBufferfv=_emscripten_glClearBufferfv;_glClearBufferfv.sig="viip";var _glFenceSync=_emscripten_glFenceSync;_glFenceSync.sig="pii";var _glDeleteSync=_emscripten_glDeleteSync;_glDeleteSync.sig="vp";var _glClientWaitSync=_emscripten_glClientWaitSync;_glClientWaitSync.sig="ipij";var _glWaitSync=_emscripten_glWaitSync;_glWaitSync.sig="vpij";var _glGetSynciv=_emscripten_glGetSynciv;_glGetSynciv.sig="vpiipp";var _glIsSync=_emscripten_glIsSync;_glIsSync.sig="ip";var _glGetUniformuiv=_emscripten_glGetUniformuiv;_glGetUniformuiv.sig="viip";var _glGetFragDataLocation=_emscripten_glGetFragDataLocation;_glGetFragDataLocation.sig="iip";var _glGetVertexAttribIuiv=_emscripten_glGetVertexAttribIuiv;_glGetVertexAttribIuiv.sig="viip";var _glUniform1ui=_emscripten_glUniform1ui;_glUniform1ui.sig="vii";var _glUniform2ui=_emscripten_glUniform2ui;_glUniform2ui.sig="viii";var _glUniform3ui=_emscripten_glUniform3ui;_glUniform3ui.sig="viiii";var _glUniform4ui=_emscripten_glUniform4ui;_glUniform4ui.sig="viiiii";var _glUniform1uiv=_emscripten_glUniform1uiv;_glUniform1uiv.sig="viip";var _glUniform2uiv=_emscripten_glUniform2uiv;_glUniform2uiv.sig="viip";var _glUniform3uiv=_emscripten_glUniform3uiv;_glUniform3uiv.sig="viip";var _glUniform4uiv=_emscripten_glUniform4uiv;_glUniform4uiv.sig="viip";var _glUniformMatrix2x3fv=_emscripten_glUniformMatrix2x3fv;_glUniformMatrix2x3fv.sig="viiip";var _glUniformMatrix3x2fv=_emscripten_glUniformMatrix3x2fv;_glUniformMatrix3x2fv.sig="viiip";var _glUniformMatrix2x4fv=_emscripten_glUniformMatrix2x4fv;_glUniformMatrix2x4fv.sig="viiip";var _glUniformMatrix4x2fv=_emscripten_glUniformMatrix4x2fv;_glUniformMatrix4x2fv.sig="viiip";var _glUniformMatrix3x4fv=_emscripten_glUniformMatrix3x4fv;_glUniformMatrix3x4fv.sig="viiip";var _glUniformMatrix4x3fv=_emscripten_glUniformMatrix4x3fv;_glUniformMatrix4x3fv.sig="viiip";var _glVertexAttribI4iv=_emscripten_glVertexAttribI4iv;_glVertexAttribI4iv.sig="vip";var _glVertexAttribI4uiv=_emscripten_glVertexAttribI4uiv;_glVertexAttribI4uiv.sig="vip";var _glProgramParameteri=_emscripten_glProgramParameteri;_glProgramParameteri.sig="viii";var _glGetProgramBinary=_emscripten_glGetProgramBinary;_glGetProgramBinary.sig="viippp";var _glProgramBinary=_emscripten_glProgramBinary;_glProgramBinary.sig="viipi";var _glFramebufferTextureLayer=_emscripten_glFramebufferTextureLayer;_glFramebufferTextureLayer.sig="viiiii";var _glVertexAttribIPointer=_emscripten_glVertexAttribIPointer;_glVertexAttribIPointer.sig="viiiip";var _glDrawRangeElements=_emscripten_glDrawRangeElements;_glDrawRangeElements.sig="viiiiip";var _emscripten_glDrawArraysInstancedBaseInstanceWEBGL=(t,r,n,a,o)=>{GLctx.dibvbi.drawArraysInstancedBaseInstanceWEBGL(t,r,n,a,o)};_emscripten_glDrawArraysInstancedBaseInstanceWEBGL.sig="viiiii";var _glDrawArraysInstancedBaseInstanceWEBGL=_emscripten_glDrawArraysInstancedBaseInstanceWEBGL,_emscripten_glDrawArraysInstancedBaseInstance=_glDrawArraysInstancedBaseInstanceWEBGL;_emscripten_glDrawArraysInstancedBaseInstance.sig="viiiii";var _glDrawArraysInstancedBaseInstance=_emscripten_glDrawArraysInstancedBaseInstance;_glDrawArraysInstancedBaseInstance.sig="viiiii";var _emscripten_glDrawArraysInstancedBaseInstanceANGLE=_glDrawArraysInstancedBaseInstanceWEBGL,_glDrawArraysInstancedBaseInstanceANGLE=_emscripten_glDrawArraysInstancedBaseInstanceANGLE,_emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL=(t,r,n,a,o,l,c)=>{GLctx.dibvbi.drawElementsInstancedBaseVertexBaseInstanceWEBGL(t,r,n,a,o,l,c)};_emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL.sig="viiiiiii";var _glDrawElementsInstancedBaseVertexBaseInstanceWEBGL=_emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL,_emscripten_glDrawElementsInstancedBaseVertexBaseInstanceANGLE=_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL,_glDrawElementsInstancedBaseVertexBaseInstanceANGLE=_emscripten_glDrawElementsInstancedBaseVertexBaseInstanceANGLE,_emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL=(t,r,n,a,o,l)=>{GLctx.mdibvbi.multiDrawArraysInstancedBaseInstanceWEBGL(t,HEAP32,r>>2,HEAP32,n>>2,HEAP32,a>>2,HEAPU32,o>>2,l)};_emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL.sig="viiiiii";var _glMultiDrawArraysInstancedBaseInstanceWEBGL=_emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL,_emscripten_glMultiDrawArraysInstancedBaseInstanceANGLE=_glMultiDrawArraysInstancedBaseInstanceWEBGL,_glMultiDrawArraysInstancedBaseInstanceANGLE=_emscripten_glMultiDrawArraysInstancedBaseInstanceANGLE,_emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL=(t,r,n,a,o,l,c,_)=>{GLctx.mdibvbi.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(t,HEAP32,r>>2,n,HEAP32,a>>2,HEAP32,o>>2,HEAP32,l>>2,HEAPU32,c>>2,_)};_emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL.sig="viiiiiiii";var _glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL=_emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL,_emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceANGLE=_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL,_glMultiDrawElementsInstancedBaseVertexBaseInstanceANGLE=_emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceANGLE,_glEndTransformFeedback=_emscripten_glEndTransformFeedback;_glEndTransformFeedback.sig="v";var _glPauseTransformFeedback=_emscripten_glPauseTransformFeedback;_glPauseTransformFeedback.sig="v";var _glResumeTransformFeedback=_emscripten_glResumeTransformFeedback;_glResumeTransformFeedback.sig="v";var _glBeginTransformFeedback=_emscripten_glBeginTransformFeedback;_glBeginTransformFeedback.sig="vi";var _glReadBuffer=_emscripten_glReadBuffer;_glReadBuffer.sig="vi";var _glEndQuery=_emscripten_glEndQuery;_glEndQuery.sig="vi";var _glClearBufferfi=_emscripten_glClearBufferfi;_glClearBufferfi.sig="viifi";var _glVertexAttribI4i=_emscripten_glVertexAttribI4i;_glVertexAttribI4i.sig="viiiii";var _glVertexAttribI4ui=_emscripten_glVertexAttribI4ui;_glVertexAttribI4ui.sig="viiiii";var _glCopyBufferSubData=_emscripten_glCopyBufferSubData;_glCopyBufferSubData.sig="viippp";var _glTexStorage2D=_emscripten_glTexStorage2D;_glTexStorage2D.sig="viiiii";var _glRenderbufferStorageMultisample=_emscripten_glRenderbufferStorageMultisample;_glRenderbufferStorageMultisample.sig="viiiii";var _glTexStorage3D=_emscripten_glTexStorage3D;_glTexStorage3D.sig="viiiiii";var _glCopyTexSubImage3D=_emscripten_glCopyTexSubImage3D;_glCopyTexSubImage3D.sig="viiiiiiiii";var _glBlitFramebuffer=_emscripten_glBlitFramebuffer;_glBlitFramebuffer.sig="viiiiiiiiii";var _emscripten_is_main_browser_thread=()=>!ENVIRONMENT_IS_WORKER,_emscripten_wget=(t,r)=>{abort("Please compile your program with async support in order to use asynchronous operations like emscripten_wget")};_emscripten_wget.sig="ipp";var _emscripten_scan_registers=t=>{abort("Please compile your program with async support in order to use asynchronous operations like emscripten_scan_registers")};_emscripten_scan_registers.sig="vp";var _emscripten_fiber_swap=(t,r)=>{abort("Please compile your program with async support in order to use asynchronous operations like emscripten_fiber_swap")};_emscripten_fiber_swap.sig="vpp";var _emscripten_net_gethostbyname=t=>Module.net?.gethostbyname?.(t)??0,_emscripten_net_connect=(t,r,n)=>Module.net?.connect?.(t,r,n)??-1,_emscripten_net_send=(t,r,n,a)=>Module.net?.send?.(t,r,n,a)??-1,_emscripten_net_recv=(t,r,n,a)=>Module.net?.recv?.(t,r,n,a)??-1,_emscripten_net_select=(t,r,n,a,o)=>Module.net?.select?.(t,r,n,a,o)??-1;registerWasmPlugin(),FS.createPreloadedFile=FS_createPreloadedFile,FS.preloadFile=FS_preloadFile,FS.staticInit(),Module.requestAnimationFrame=MainLoop.requestAnimationFrame,Module.pauseMainLoop=MainLoop.pause,Module.resumeMainLoop=MainLoop.resume,MainLoop.init(),registerPreMainLoop(()=>GL.newRenderingFrameStarted());for(let t=0;t<32;++t)tempFixedLengthArray.push(new Array(t));if(globalThis.setImmediate)emSetImmediate=setImmediateWrapped,emClearImmediate=clearImmediateWrapped;else if(globalThis.addEventListener){var __setImmediate_id_counter=0,__setImmediate_queue=[],__setImmediate_message_id="_si",__setImmediate_cb=t=>{t.data===__setImmediate_message_id&&(t.stopPropagation(),__setImmediate_queue.shift()(),++__setImmediate_id_counter)};addEventListener("message",__setImmediate_cb,!0),emSetImmediate=t=>(postMessage(__setImmediate_message_id,"*"),__setImmediate_id_counter+__setImmediate_queue.push(t)-1),emClearImmediate=t=>{var r=t-__setImmediate_id_counter;r>=0&&r<__setImmediate_queue.length&&(__setImmediate_queue[r]=()=>{})}}for(var miniTempWebGLFloatBuffersStorage=new Float32Array(288),i=0;i<=288;++i)miniTempWebGLFloatBuffersStorage.subarray(0,i);for(var miniTempWebGLIntBuffersStorage=new Int32Array(288),i=0;i<=288;++i)miniTempWebGLIntBuffersStorage.subarray(0,i);{if(Module.preloadPlugins&&(preloadPlugins=Module.preloadPlugins),Module.noExitRuntime&&(noExitRuntime=Module.noExitRuntime),Module.print&&(out=Module.print),Module.printErr&&(err=Module.printErr),Module.dynamicLibraries&&(dynamicLibraries=Module.dynamicLibraries),Module.wasmBinary&&(wasmBinary=Module.wasmBinary),checkIncomingModuleAPI(),Module.arguments&&(arguments_=Module.arguments),Module.thisProgram&&(thisProgram=Module.thisProgram),assert(typeof Module.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),assert(typeof Module.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),assert(typeof Module.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),assert(typeof Module.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),assert(typeof Module.read>"u","Module.read option was removed"),assert(typeof Module.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),assert(typeof Module.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),assert(typeof Module.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),assert(typeof Module.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),assert(typeof Module.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),assert(typeof Module.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),assert(typeof Module.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),assert(typeof Module.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),Module.preInit)for(typeof Module.preInit=="function"&&(Module.preInit=[Module.preInit]);Module.preInit.length>0;)Module.preInit.shift()();consumedModuleProp("preInit")}Module.callMain=callMain,Module.ENV=ENV,Module.inetNtop4=inetNtop4,Module.readSockaddr=readSockaddr,Module.writeSockaddr=writeSockaddr,Module.addRunDependency=addRunDependency,Module.removeRunDependency=removeRunDependency,Module.cwrap=cwrap,Module.setValue=setValue,Module.PATH=PATH,Module.intArrayFromString=intArrayFromString,Module.AsciiToString=AsciiToString,Module.writeArrayToMemory=writeArrayToMemory,Module.createContext=createContext,Module.FS=FS;var unexportedSymbols=["run","out","err","abort","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAP16","HEAPU16","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","getTempRet0","setTempRet0","createNamedFunction","ptrToString","zeroMemory","exitJS","getHeapMax","growMemory","withStackSave","ERRNO_CODES","strError","inetPton4","inetPton6","inetNtop6","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","runMainThreadEmAsm","jstoi_q","getExecutableName","autoResumeAudioContext","getDynCaller","dynCall","handleException","keepRuntimeAlive","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asyncLoad","asmjsMangle","alignMemory","mmapAlloc","HandleAllocator","wasmTable","wasmMemory","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","addOnPostRun","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","ccall","convertJsFunctionToWasm","freeTableIndexes","functionsInTableMap","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","getValue","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayToString","stringToAscii","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToNewUTF8","stringToUTF8OnStack","JSEvents","registerKeyEventCallback","specialHTMLTargets","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","currentFullscreenStrategy","restoreOldWindowedStyle","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","UNWIND_CACHE","convertPCtoSourceLocation","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","initRandomFill","randomFill","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","emSetImmediate","emClearImmediate_deps","emClearImmediate","registerPostMainLoop","registerPreMainLoop","promiseMap","getPromise","makePromise","idsToPromises","makePromiseCallback","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","Browser_asyncPrepareDataCounter","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","arraySum","addDays","SYSCALLS","getSocketFromFD","getSocketAddress","registerWasmPlugin","preloadedWasm","replaceORIGIN","isSymbolDefined","GOT","LDSO","getMemory","mergeLibSymbols","loadWebAssemblyModule","newDSO","findLibraryFS","loadDynamicLibrary","dlopenInternal","preloadPlugins","FS_createPreloadedFile","FS_preloadFile","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_unlink","FS_createPath","FS_createDevice","FS_readFile","FS_mkdirTree","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_createDataFile","FS_forceLoadFile","FS_createLazyFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","MEMFS","TTY","PIPEFS","SOCKFS","_setNetworkCallback","EGL","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","GL","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","emscriptenWebGLGetIndexed","webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance","webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","allocateUTF8","allocateUTF8OnStack","demangle","stackTrace","print","printErr","jstoi_s","getNativeTypeSize","IDBFS","AL","runAndAbortIfError"];unexportedSymbols.forEach(unexportedRuntimeSymbol),Module._setTempRet0=_setTempRet0,Module._getTempRet0=_getTempRet0,Module._sched_yield=_sched_yield,Module.___cxa_uncaught_exceptions=___cxa_uncaught_exceptions,Module.___cxa_current_primary_exception=___cxa_current_primary_exception,Module.___cxa_rethrow_primary_exception=___cxa_rethrow_primary_exception,Module.___syscall_shutdown=___syscall_shutdown,Module._emscripten_wget=_emscripten_wget;function checkIncomingModuleAPI(){ignoredModuleProp("fetchSettings")}var ASM_CONSTS={34353692:()=>{Module.callbacks?.gameReady?.()},34353728:(t,r)=>{const n=t,o=getWasmTableEntry(r).name,l=Object.entries(LDSO.loadedLibsByHandle[n]?.exports??{});for(const[c,{name:_}]of l)if(_===o)return stringToUTF8OnStack(c);return 0},34354012:(t,r,n,a,o,l)=>{const c=UTF8ToString(t),_=r,u=n,p=a,d=o,m=l;fetch(c).then(async({body:f,headers:g})=>{const E=f.getReader();for(HEAP32[_+p>>2]=Number(g.get("Content-Length"));;){const{done:x,value:v}=await E.read();if(x)break;HEAPU8.set(new Uint8Array(v),_+u),dynCall("ipii",d,[_,0,v.length])}dynCall("vpi",m,[_,0])}).catch(f=>{dynCall("vpi",m,[_,0])})},34354692:(t,r)=>{Module.callbacks?.serverInfo?.(t,UTF8ToString(r))},34354749:t=>{var r=UTF8ToString(t)+`

Abort/Retry/Ignore/AlwaysIgnore? [ariA] :`,n=window.prompt(r,"i");return n===null&&(n="i"),n.length===1?n.charCodeAt(0):-1},34354964:()=>typeof AudioContext<"u"?!0:typeof webkitAudioContext<"u",34355111:()=>typeof navigator.mediaDevices<"u"&&typeof navigator.mediaDevices.getUserMedia<"u"?!0:typeof navigator.webkitGetUserMedia<"u",34355345:t=>{typeof Module.SDL2>"u"&&(Module.SDL2={});var r=Module.SDL2;return t?r.capture={}:r.audio={},r.audioContext||(typeof AudioContext<"u"?r.audioContext=new AudioContext:typeof webkitAudioContext<"u"&&(r.audioContext=new webkitAudioContext),r.audioContext&&typeof navigator.userActivation>"u"&&autoResumeAudioContext(r.audioContext)),r.audioContext===void 0?-1:0},34355897:()=>{var t=Module.SDL2;return t.audioContext.sampleRate},34355965:(t,r,n,a)=>{var o=Module.SDL2,l=function(u){o.capture.silenceTimer!==void 0&&(clearInterval(o.capture.silenceTimer),o.capture.silenceTimer=void 0,o.capture.silenceBuffer=void 0),o.capture.mediaStreamNode=o.audioContext.createMediaStreamSource(u),o.capture.scriptProcessorNode=o.audioContext.createScriptProcessor(r,t,1),o.capture.scriptProcessorNode.onaudioprocess=function(p){o===void 0||o.capture===void 0||(p.outputBuffer.getChannelData(0).fill(0),o.capture.currentCaptureBuffer=p.inputBuffer,dynCall("vp",n,[a]))},o.capture.mediaStreamNode.connect(o.capture.scriptProcessorNode),o.capture.scriptProcessorNode.connect(o.audioContext.destination),o.capture.stream=u},c=function(u){};o.capture.silenceBuffer=o.audioContext.createBuffer(t,r,o.audioContext.sampleRate),o.capture.silenceBuffer.getChannelData(0).fill(0);var _=function(){o.capture.currentCaptureBuffer=o.capture.silenceBuffer,dynCall("vp",n,[a])};o.capture.silenceTimer=setInterval(_,r/o.audioContext.sampleRate*1e3),navigator.mediaDevices!==void 0&&navigator.mediaDevices.getUserMedia!==void 0?navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(l).catch(c):navigator.webkitGetUserMedia!==void 0&&navigator.webkitGetUserMedia({audio:!0,video:!1},l,c)},34357658:(t,r,n,a)=>{var o=Module.SDL2;if(o.audio.scriptProcessorNode=o.audioContext.createScriptProcessor(r,0,t),o.audio.scriptProcessorNode.onaudioprocess=function(c){o===void 0||o.audio===void 0||(o.audio.silenceTimer!==void 0&&(clearInterval(o.audio.silenceTimer),o.audio.silenceTimer=void 0,o.audio.silenceBuffer=void 0),o.audio.currentOutputBuffer=c.outputBuffer,dynCall("vp",n,[a]))},o.audio.scriptProcessorNode.connect(o.audioContext.destination),o.audioContext.state==="suspended"){o.audio.silenceBuffer=o.audioContext.createBuffer(t,r,o.audioContext.sampleRate),o.audio.silenceBuffer.getChannelData(0).fill(0);var l=function(){typeof navigator.userActivation<"u"&&navigator.userActivation.hasBeenActive&&o.audioContext.resume(),o.audio.currentOutputBuffer=o.audio.silenceBuffer,dynCall("vp",n,[a]),o.audio.currentOutputBuffer=void 0};o.audio.silenceTimer=setInterval(l,r/o.audioContext.sampleRate*1e3)}},34358833:(t,r)=>{for(var n=Module.SDL2,a=n.capture.currentCaptureBuffer.numberOfChannels,o=0;o<a;++o){var l=n.capture.currentCaptureBuffer.getChannelData(o);if(l.length!=r)throw"Web Audio capture buffer length mismatch! Destination size: "+l.length+" samples vs expected "+r+" samples!";if(a==1)for(var c=0;c<r;++c)setValue(t+c*4,l[c],"float");else for(var c=0;c<r;++c)setValue(t+(c*a+o)*4,l[c],"float")}},34359438:(t,r)=>{for(var n=Module.SDL2,a=t>>>2,o=n.audio.currentOutputBuffer.numberOfChannels,l=0;l<o;++l){var c=n.audio.currentOutputBuffer.getChannelData(l);if(c.length!=r)throw"Web Audio output buffer length mismatch! Destination size: "+c.length+" samples vs expected "+r+" samples!";for(var _=0;_<r;++_)c[_]=HEAPF32[a+(_*o+l)]}},34359927:t=>{var r=Module.SDL2;if(t){if(r.capture.silenceTimer!==void 0&&clearInterval(r.capture.silenceTimer),r.capture.stream!==void 0)for(var n=r.capture.stream.getAudioTracks(),a=0;a<n.length;a++)r.capture.stream.removeTrack(n[a]);r.capture.scriptProcessorNode!==void 0&&(r.capture.scriptProcessorNode.onaudioprocess=function(o){},r.capture.scriptProcessorNode.disconnect()),r.capture.mediaStreamNode!==void 0&&r.capture.mediaStreamNode.disconnect(),r.capture=void 0}else r.audio.scriptProcessorNode!=null&&r.audio.scriptProcessorNode.disconnect(),r.audio.silenceTimer!==void 0&&clearInterval(r.audio.silenceTimer),r.audio=void 0;r.audioContext!==void 0&&r.audio===void 0&&r.capture===void 0&&(r.audioContext.close(),r.audioContext=void 0)},34360933:(t,r,n)=>{var a=t,o=r,l=n;Module.SDL2||(Module.SDL2={});var c=Module.SDL2;c.ctxCanvas!==Module.canvas&&(c.ctx=Browser.createContext(Module.canvas,!1,!0),c.ctxCanvas=Module.canvas),(c.w!==a||c.h!==o||c.imageCtx!==c.ctx)&&(c.image=c.ctx.createImageData(a,o),c.w=a,c.h=o,c.imageCtx=c.ctx);var _=c.image.data,u=l/4,p=0,d;if(typeof CanvasPixelArray<"u"&&_ instanceof CanvasPixelArray)for(d=_.length;p<d;){var m=HEAP32[u];_[p]=m&255,_[p+1]=m>>8&255,_[p+2]=m>>16&255,_[p+3]=255,u++,p+=4}else{c.data32Data!==_&&(c.data32=new Int32Array(_.buffer),c.data8=new Uint8Array(_.buffer),c.data32Data=_);var f=c.data32;d=f.length,f.set(HEAP32.subarray(u,u+d));var g=c.data8,E=3,x=E+4*d;if(d%8==0)for(;E<x;)g[E]=255,E=E+4|0,g[E]=255,E=E+4|0,g[E]=255,E=E+4|0,g[E]=255,E=E+4|0,g[E]=255,E=E+4|0,g[E]=255,E=E+4|0,g[E]=255,E=E+4|0,g[E]=255,E=E+4|0;else for(;E<x;)g[E]=255,E=E+4|0}c.ctx.putImageData(c.image,0,0)},34362399:(t,r,n,a,o)=>{var l=t,c=r,_=n,u=a,p=o,d=document.createElement("canvas");d.width=l,d.height=c;var m=d.getContext("2d"),f=m.createImageData(l,c),g=f.data,E=p/4,x=0,v;if(typeof CanvasPixelArray<"u"&&g instanceof CanvasPixelArray)for(v=g.length;x<v;){var h=HEAP32[E];g[x]=h&255,g[x+1]=h>>8&255,g[x+2]=h>>16&255,g[x+3]=h>>24&255,E++,x+=4}else{var b=new Int32Array(g.buffer);v=b.length,b.set(HEAP32.subarray(E,E+v))}m.putImageData(f,0,0);var S=_===0&&u===0?"url("+d.toDataURL()+"), auto":"url("+d.toDataURL()+") "+_+" "+u+", auto",y=_malloc(S.length+1);return stringToUTF8(S,y,S.length+1),y},34363387:t=>{Module.canvas&&(Module.canvas.style.cursor=UTF8ToString(t))},34363470:()=>{Module.canvas&&(Module.canvas.style.cursor="none")},34363539:()=>window.innerWidth,34363569:()=>window.innerHeight,34363600:(t,r)=>{var n=t,a=r,o=void 0;if(navigator.languages&&navigator.languages.length)o=navigator.languages;else{var l=navigator.userLanguage||navigator.language||navigator.browserLanguage||navigator.systemLanguage;l!==void 0&&(o=[l])}if(o!==void 0){for(var c="",_=0;_<o.length;_++){var u=o[_];if(c.length+u.length+1>a)break;c.length>0&&(c+=","),c+=u}c=c.replace(/-/g,"_"),a>c.length&&(a=c.length);for(var _=0;_<a;_++)setValue(n+_,c.charCodeAt(_),"i8")}},34364308:t=>{window.open(UTF8ToString(t),"_blank")},34364348:(t,r)=>{alert(UTF8ToString(t)+`

`+UTF8ToString(r))},34364405:t=>{if(!t)return AL.alcErr=40964,1},34364453:t=>{if(!AL.currentCtx)return err("alGetProcAddress() called without a valid context"),1;if(!t)return AL.currentCtx.err=40963,1}};Module._Cmd_ExecuteString=makeInvalidEarlyAccess("_Cmd_ExecuteString");var _malloc=Module._malloc=makeInvalidEarlyAccess("_malloc"),_free=makeInvalidEarlyAccess("_free");Module.___errno_location=makeInvalidEarlyAccess("___errno_location");var _strerror=makeInvalidEarlyAccess("_strerror"),_htons=makeInvalidEarlyAccess("_htons"),_htonl=makeInvalidEarlyAccess("_htonl"),_ntohs=makeInvalidEarlyAccess("_ntohs"),_fileno=makeInvalidEarlyAccess("_fileno"),_fflush=makeInvalidEarlyAccess("_fflush"),_calloc=makeInvalidEarlyAccess("_calloc"),_realloc=makeInvalidEarlyAccess("_realloc"),___dl_seterr=makeInvalidEarlyAccess("___dl_seterr"),__emscripten_find_dylib=makeInvalidEarlyAccess("__emscripten_find_dylib"),_emscripten_stack_get_end=makeInvalidEarlyAccess("_emscripten_stack_get_end"),_emscripten_stack_get_base=makeInvalidEarlyAccess("_emscripten_stack_get_base"),_emscripten_builtin_memalign=makeInvalidEarlyAccess("_emscripten_builtin_memalign"),__emscripten_timeout=makeInvalidEarlyAccess("__emscripten_timeout"),_emscripten_get_sbrk_ptr=makeInvalidEarlyAccess("_emscripten_get_sbrk_ptr"),_setThrew=makeInvalidEarlyAccess("_setThrew"),__emscripten_tempret_set=makeInvalidEarlyAccess("__emscripten_tempret_set"),__emscripten_tempret_get=makeInvalidEarlyAccess("__emscripten_tempret_get"),_emscripten_stack_init=makeInvalidEarlyAccess("_emscripten_stack_init"),__emscripten_stack_restore=makeInvalidEarlyAccess("__emscripten_stack_restore"),__emscripten_stack_alloc=makeInvalidEarlyAccess("__emscripten_stack_alloc"),_emscripten_stack_get_current=makeInvalidEarlyAccess("_emscripten_stack_get_current"),___cxa_increment_exception_refcount=makeInvalidEarlyAccess("___cxa_increment_exception_refcount"),___cxa_decrement_exception_refcount=makeInvalidEarlyAccess("___cxa_decrement_exception_refcount"),___cxa_can_catch=makeInvalidEarlyAccess("___cxa_can_catch"),___cxa_get_exception_ptr=makeInvalidEarlyAccess("___cxa_get_exception_ptr"),___heap_base=makeInvalidEarlyAccess("___heap_base"),wasmTable=makeInvalidEarlyAccess("wasmTable"),wasmMemory=makeInvalidEarlyAccess("wasmMemory");function assignWasmExports(t){assert(typeof t.Cmd_ExecuteString<"u","missing Wasm export: Cmd_ExecuteString"),assert(typeof t.malloc<"u","missing Wasm export: malloc"),assert(typeof t.free<"u","missing Wasm export: free"),assert(typeof t.__errno_location<"u","missing Wasm export: __errno_location"),assert(typeof t.strerror<"u","missing Wasm export: strerror"),assert(typeof t.__main_argc_argv<"u","missing Wasm export: __main_argc_argv"),assert(typeof t.htons<"u","missing Wasm export: htons"),assert(typeof t.htonl<"u","missing Wasm export: htonl"),assert(typeof t.ntohs<"u","missing Wasm export: ntohs"),assert(typeof t.fileno<"u","missing Wasm export: fileno"),assert(typeof t.fflush<"u","missing Wasm export: fflush"),assert(typeof t.calloc<"u","missing Wasm export: calloc"),assert(typeof t.realloc<"u","missing Wasm export: realloc"),assert(typeof t.__dl_seterr<"u","missing Wasm export: __dl_seterr"),assert(typeof t._emscripten_find_dylib<"u","missing Wasm export: _emscripten_find_dylib"),assert(typeof t.emscripten_stack_get_end<"u","missing Wasm export: emscripten_stack_get_end"),assert(typeof t.emscripten_stack_get_base<"u","missing Wasm export: emscripten_stack_get_base"),assert(typeof t.emscripten_builtin_memalign<"u","missing Wasm export: emscripten_builtin_memalign"),assert(typeof t._emscripten_timeout<"u","missing Wasm export: _emscripten_timeout"),assert(typeof t.emscripten_get_sbrk_ptr<"u","missing Wasm export: emscripten_get_sbrk_ptr"),assert(typeof t.setThrew<"u","missing Wasm export: setThrew"),assert(typeof t._emscripten_tempret_set<"u","missing Wasm export: _emscripten_tempret_set"),assert(typeof t._emscripten_tempret_get<"u","missing Wasm export: _emscripten_tempret_get"),assert(typeof t.emscripten_stack_init<"u","missing Wasm export: emscripten_stack_init"),assert(typeof t.emscripten_stack_get_free<"u","missing Wasm export: emscripten_stack_get_free"),assert(typeof t._emscripten_stack_restore<"u","missing Wasm export: _emscripten_stack_restore"),assert(typeof t._emscripten_stack_alloc<"u","missing Wasm export: _emscripten_stack_alloc"),assert(typeof t.emscripten_stack_get_current<"u","missing Wasm export: emscripten_stack_get_current"),assert(typeof t.__cxa_demangle<"u","missing Wasm export: __cxa_demangle"),assert(typeof t.__cxa_increment_exception_refcount<"u","missing Wasm export: __cxa_increment_exception_refcount"),assert(typeof t.__cxa_decrement_exception_refcount<"u","missing Wasm export: __cxa_decrement_exception_refcount"),assert(typeof t.__cxa_can_catch<"u","missing Wasm export: __cxa_can_catch"),assert(typeof t.__cxa_get_exception_ptr<"u","missing Wasm export: __cxa_get_exception_ptr"),assert(typeof t.memory<"u","missing Wasm export: memory"),assert(typeof t.__stack_pointer<"u","missing Wasm export: __stack_pointer"),assert(typeof t.__indirect_function_table<"u","missing Wasm export: __indirect_function_table"),assert(typeof t.__heap_base<"u","missing Wasm export: __heap_base"),Module._Cmd_ExecuteString=createExportWrapper("Cmd_ExecuteString",1),_malloc=Module._malloc=createExportWrapper("malloc",1),_free=createExportWrapper("free",1),Module.___errno_location=createExportWrapper("__errno_location",0),_strerror=createExportWrapper("strerror",1),_htons=createExportWrapper("htons",1),_htonl=createExportWrapper("htonl",1),_ntohs=createExportWrapper("ntohs",1),_fileno=createExportWrapper("fileno",1),_fflush=createExportWrapper("fflush",1),_calloc=createExportWrapper("calloc",2),_realloc=createExportWrapper("realloc",2),___dl_seterr=createExportWrapper("__dl_seterr",2),__emscripten_find_dylib=createExportWrapper("_emscripten_find_dylib",4),_emscripten_stack_get_end=t.emscripten_stack_get_end,_emscripten_stack_get_base=t.emscripten_stack_get_base,_emscripten_builtin_memalign=createExportWrapper("emscripten_builtin_memalign",2),__emscripten_timeout=createExportWrapper("_emscripten_timeout",2),_emscripten_get_sbrk_ptr=t.emscripten_get_sbrk_ptr,_setThrew=createExportWrapper("setThrew",2),__emscripten_tempret_set=createExportWrapper("_emscripten_tempret_set",1),__emscripten_tempret_get=createExportWrapper("_emscripten_tempret_get",0),_emscripten_stack_init=t.emscripten_stack_init,t.emscripten_stack_get_free,__emscripten_stack_restore=t._emscripten_stack_restore,__emscripten_stack_alloc=t._emscripten_stack_alloc,_emscripten_stack_get_current=t.emscripten_stack_get_current,___cxa_increment_exception_refcount=createExportWrapper("__cxa_increment_exception_refcount",1),___cxa_decrement_exception_refcount=createExportWrapper("__cxa_decrement_exception_refcount",1),___cxa_can_catch=createExportWrapper("__cxa_can_catch",3),___cxa_get_exception_ptr=createExportWrapper("__cxa_get_exception_ptr",1),wasmMemory=t.memory,t.__stack_pointer,wasmTable=t.__indirect_function_table,___heap_base=t.__heap_base.value}var wasmImports={_Unwind_Backtrace:__Unwind_Backtrace,_Unwind_DeleteException:__Unwind_DeleteException,_Unwind_FindEnclosingFunction:__Unwind_FindEnclosingFunction,_Unwind_GetIPInfo:__Unwind_GetIPInfo,_Unwind_RaiseException:__Unwind_RaiseException,__asctime_r:___asctime_r,__assert_fail:___assert_fail,__call_sighandler:___call_sighandler,__cxa_begin_catch:___cxa_begin_catch,__cxa_call_unexpected:___cxa_call_unexpected,__cxa_current_exception_type:___cxa_current_exception_type,__cxa_end_catch:___cxa_end_catch,__cxa_find_matching_catch_2:___cxa_find_matching_catch_2,__cxa_find_matching_catch_3:___cxa_find_matching_catch_3,__cxa_find_matching_catch_4:___cxa_find_matching_catch_4,__cxa_rethrow:___cxa_rethrow,__cxa_throw:___cxa_throw,__handle_stack_overflow:___handle_stack_overflow,__resumeException:___resumeException,__syscall_accept4:___syscall_accept4,__syscall_bind:___syscall_bind,__syscall_chdir:___syscall_chdir,__syscall_chmod:___syscall_chmod,__syscall_connect:___syscall_connect,__syscall_dup:___syscall_dup,__syscall_dup3:___syscall_dup3,__syscall_faccessat:___syscall_faccessat,__syscall_fadvise64:___syscall_fadvise64,__syscall_fallocate:___syscall_fallocate,__syscall_fchdir:___syscall_fchdir,__syscall_fchmod:___syscall_fchmod,__syscall_fchmodat2:___syscall_fchmodat2,__syscall_fchown32:___syscall_fchown32,__syscall_fchownat:___syscall_fchownat,__syscall_fcntl64:___syscall_fcntl64,__syscall_fdatasync:___syscall_fdatasync,__syscall_fstat64:___syscall_fstat64,__syscall_fstatfs64:___syscall_fstatfs64,__syscall_ftruncate64:___syscall_ftruncate64,__syscall_getcwd:___syscall_getcwd,__syscall_getdents64:___syscall_getdents64,__syscall_getpeername:___syscall_getpeername,__syscall_getsockname:___syscall_getsockname,__syscall_getsockopt:___syscall_getsockopt,__syscall_ioctl:___syscall_ioctl,__syscall_listen:___syscall_listen,__syscall_lstat64:___syscall_lstat64,__syscall_mkdirat:___syscall_mkdirat,__syscall_mknodat:___syscall_mknodat,__syscall_newfstatat:___syscall_newfstatat,__syscall_openat:___syscall_openat,__syscall_pipe:___syscall_pipe,__syscall_poll:___syscall_poll,__syscall_readlinkat:___syscall_readlinkat,__syscall_recvfrom:___syscall_recvfrom,__syscall_recvmsg:___syscall_recvmsg,__syscall_renameat:___syscall_renameat,__syscall_rmdir:___syscall_rmdir,__syscall_sendmsg:___syscall_sendmsg,__syscall_sendto:___syscall_sendto,__syscall_socket:___syscall_socket,__syscall_stat64:___syscall_stat64,__syscall_statfs64:___syscall_statfs64,__syscall_symlinkat:___syscall_symlinkat,__syscall_truncate64:___syscall_truncate64,__syscall_unlinkat:___syscall_unlinkat,__syscall_utimensat:___syscall_utimensat,_abort_js:__abort_js,_dlopen_js:__dlopen_js,_dlsym_catchup_js:__dlsym_catchup_js,_dlsym_js:__dlsym_js,_emscripten_dlopen_js:__emscripten_dlopen_js,_emscripten_fs_load_embedded_files:__emscripten_fs_load_embedded_files,_emscripten_get_last_devicemotion_event:__emscripten_get_last_devicemotion_event,_emscripten_get_last_deviceorientation_event:__emscripten_get_last_deviceorientation_event,_emscripten_get_last_mouse_event:__emscripten_get_last_mouse_event,_emscripten_get_now_is_monotonic:__emscripten_get_now_is_monotonic,_emscripten_get_progname:__emscripten_get_progname,_emscripten_log_formatted:__emscripten_log_formatted,_emscripten_lookup_name:__emscripten_lookup_name,_emscripten_push_main_loop_blocker:__emscripten_push_main_loop_blocker,_emscripten_push_uncounted_main_loop_blocker:__emscripten_push_uncounted_main_loop_blocker,_emscripten_runtime_keepalive_clear:__emscripten_runtime_keepalive_clear,_emscripten_system:__emscripten_system,_emscripten_throw_longjmp:__emscripten_throw_longjmp,_glGetActiveAttribOrUniform:__glGetActiveAttribOrUniform,_gmtime_js:__gmtime_js,_localtime_js:__localtime_js,_mktime_js:__mktime_js,_mmap_js:__mmap_js,_msync_js:__msync_js,_munmap_js:__munmap_js,_setitimer_js:__setitimer_js,_timegm_js:__timegm_js,_tzset_js:__tzset_js,alBuffer3f:_alBuffer3f,alBuffer3i:_alBuffer3i,alBufferData:_alBufferData,alBufferf:_alBufferf,alBufferfv:_alBufferfv,alBufferi:_alBufferi,alBufferiv:_alBufferiv,alDeleteBuffers:_alDeleteBuffers,alDeleteSources:_alDeleteSources,alDisable:_alDisable,alDistanceModel:_alDistanceModel,alDopplerFactor:_alDopplerFactor,alDopplerVelocity:_alDopplerVelocity,alEnable:_alEnable,alGenBuffers:_alGenBuffers,alGenSources:_alGenSources,alGetBoolean:_alGetBoolean,alGetBooleanv:_alGetBooleanv,alGetBuffer3f:_alGetBuffer3f,alGetBuffer3i:_alGetBuffer3i,alGetBufferf:_alGetBufferf,alGetBufferfv:_alGetBufferfv,alGetBufferi:_alGetBufferi,alGetBufferiv:_alGetBufferiv,alGetDouble:_alGetDouble,alGetDoublev:_alGetDoublev,alGetEnumValue:_alGetEnumValue,alGetError:_alGetError,alGetFloat:_alGetFloat,alGetFloatv:_alGetFloatv,alGetInteger:_alGetInteger,alGetIntegerv:_alGetIntegerv,alGetListener3f:_alGetListener3f,alGetListener3i:_alGetListener3i,alGetListenerf:_alGetListenerf,alGetListenerfv:_alGetListenerfv,alGetListeneri:_alGetListeneri,alGetListeneriv:_alGetListeneriv,alGetSource3f:_alGetSource3f,alGetSource3i:_alGetSource3i,alGetSourcef:_alGetSourcef,alGetSourcefv:_alGetSourcefv,alGetSourcei:_alGetSourcei,alGetSourceiv:_alGetSourceiv,alGetString:_alGetString,alIsBuffer:_alIsBuffer,alIsEnabled:_alIsEnabled,alIsExtensionPresent:_alIsExtensionPresent,alIsSource:_alIsSource,alListener3f:_alListener3f,alListener3i:_alListener3i,alListenerf:_alListenerf,alListenerfv:_alListenerfv,alListeneri:_alListeneri,alListeneriv:_alListeneriv,alSource3f:_alSource3f,alSource3i:_alSource3i,alSourcePause:_alSourcePause,alSourcePausev:_alSourcePausev,alSourcePlay:_alSourcePlay,alSourcePlayv:_alSourcePlayv,alSourceQueueBuffers:_alSourceQueueBuffers,alSourceRewind:_alSourceRewind,alSourceRewindv:_alSourceRewindv,alSourceStop:_alSourceStop,alSourceStopv:_alSourceStopv,alSourceUnqueueBuffers:_alSourceUnqueueBuffers,alSourcef:_alSourcef,alSourcefv:_alSourcefv,alSourcei:_alSourcei,alSourceiv:_alSourceiv,alSpeedOfSound:_alSpeedOfSound,alcCaptureCloseDevice:_alcCaptureCloseDevice,alcCaptureOpenDevice:_alcCaptureOpenDevice,alcCaptureSamples:_alcCaptureSamples,alcCaptureStart:_alcCaptureStart,alcCaptureStop:_alcCaptureStop,alcCloseDevice:_alcCloseDevice,alcCreateContext:_alcCreateContext,alcDestroyContext:_alcDestroyContext,alcGetContextsDevice:_alcGetContextsDevice,alcGetCurrentContext:_alcGetCurrentContext,alcGetEnumValue:_alcGetEnumValue,alcGetError:_alcGetError,alcGetIntegerv:_alcGetIntegerv,alcGetString:_alcGetString,alcIsExtensionPresent:_alcIsExtensionPresent,alcMakeContextCurrent:_alcMakeContextCurrent,alcOpenDevice:_alcOpenDevice,alcProcessContext:_alcProcessContext,alcSuspendContext:_alcSuspendContext,clock_res_get:_clock_res_get,clock_time_get:_clock_time_get,eglBindAPI:_eglBindAPI,eglChooseConfig:_eglChooseConfig,eglCreateContext:_eglCreateContext,eglCreateWindowSurface:_eglCreateWindowSurface,eglDestroyContext:_eglDestroyContext,eglDestroySurface:_eglDestroySurface,eglGetConfigAttrib:_eglGetConfigAttrib,eglGetConfigs:_eglGetConfigs,eglGetCurrentContext:_eglGetCurrentContext,eglGetCurrentDisplay:_eglGetCurrentDisplay,eglGetCurrentSurface:_eglGetCurrentSurface,eglGetDisplay:_eglGetDisplay,eglGetError:_eglGetError,eglInitialize:_eglInitialize,eglMakeCurrent:_eglMakeCurrent,eglQueryAPI:_eglQueryAPI,eglQueryContext:_eglQueryContext,eglQueryString:_eglQueryString,eglQuerySurface:_eglQuerySurface,eglReleaseThread:_eglReleaseThread,eglSwapBuffers:_eglSwapBuffers,eglSwapInterval:_eglSwapInterval,eglTerminate:_eglTerminate,eglWaitClient:_eglWaitClient,eglWaitGL:_eglWaitGL,eglWaitNative:_eglWaitNative,emscripten_alcDevicePauseSOFT:_emscripten_alcDevicePauseSOFT,emscripten_alcDeviceResumeSOFT:_emscripten_alcDeviceResumeSOFT,emscripten_alcGetStringiSOFT:_emscripten_alcGetStringiSOFT,emscripten_alcResetDeviceSOFT:_emscripten_alcResetDeviceSOFT,emscripten_asm_const_async_on_main_thread:_emscripten_asm_const_async_on_main_thread,emscripten_asm_const_double:_emscripten_asm_const_double,emscripten_asm_const_double_sync_on_main_thread:_emscripten_asm_const_double_sync_on_main_thread,emscripten_asm_const_int:_emscripten_asm_const_int,emscripten_asm_const_int_sync_on_main_thread:_emscripten_asm_const_int_sync_on_main_thread,emscripten_asm_const_ptr:_emscripten_asm_const_ptr,emscripten_asm_const_ptr_sync_on_main_thread:_emscripten_asm_const_ptr_sync_on_main_thread,emscripten_async_call:_emscripten_async_call,emscripten_async_load_script:_emscripten_async_load_script,emscripten_async_run_script:_emscripten_async_run_script,emscripten_async_wget:_emscripten_async_wget,emscripten_async_wget2:_emscripten_async_wget2,emscripten_async_wget2_abort:_emscripten_async_wget2_abort,emscripten_async_wget2_data:_emscripten_async_wget2_data,emscripten_async_wget_data:_emscripten_async_wget_data,emscripten_call_worker:_emscripten_call_worker,emscripten_cancel_animation_frame:_emscripten_cancel_animation_frame,emscripten_cancel_main_loop:_emscripten_cancel_main_loop,emscripten_clear_immediate:_emscripten_clear_immediate,emscripten_clear_interval:_emscripten_clear_interval,emscripten_clear_timeout:_emscripten_clear_timeout,emscripten_console_error:_emscripten_console_error,emscripten_console_log:_emscripten_console_log,emscripten_console_trace:_emscripten_console_trace,emscripten_console_warn:_emscripten_console_warn,emscripten_create_worker:_emscripten_create_worker,emscripten_date_now:_emscripten_date_now,emscripten_dbg:_emscripten_dbg,emscripten_dbg_backtrace:_emscripten_dbg_backtrace,emscripten_dbgn:_emscripten_dbgn,emscripten_debugger:_emscripten_debugger,emscripten_destroy_worker:_emscripten_destroy_worker,emscripten_enter_soft_fullscreen:_emscripten_enter_soft_fullscreen,emscripten_err:_emscripten_err,emscripten_errn:_emscripten_errn,emscripten_exit_fullscreen:_emscripten_exit_fullscreen,emscripten_exit_pointerlock:_emscripten_exit_pointerlock,emscripten_exit_soft_fullscreen:_emscripten_exit_soft_fullscreen,emscripten_exit_with_live_runtime:_emscripten_exit_with_live_runtime,emscripten_fiber_swap:_emscripten_fiber_swap,emscripten_force_exit:_emscripten_force_exit,emscripten_get_battery_status:_emscripten_get_battery_status,emscripten_get_callstack:_emscripten_get_callstack,emscripten_get_canvas_element_size:_emscripten_get_canvas_element_size,emscripten_get_canvas_size:_emscripten_get_canvas_size,emscripten_get_compiler_setting:_emscripten_get_compiler_setting,emscripten_get_device_pixel_ratio:_emscripten_get_device_pixel_ratio,emscripten_get_element_css_size:_emscripten_get_element_css_size,emscripten_get_fullscreen_status:_emscripten_get_fullscreen_status,emscripten_get_gamepad_status:_emscripten_get_gamepad_status,emscripten_get_heap_max:_emscripten_get_heap_max,emscripten_get_main_loop_timing:_emscripten_get_main_loop_timing,emscripten_get_now:_emscripten_get_now,emscripten_get_now_res:_emscripten_get_now_res,emscripten_get_num_gamepads:_emscripten_get_num_gamepads,emscripten_get_orientation_status:_emscripten_get_orientation_status,emscripten_get_pointerlock_status:_emscripten_get_pointerlock_status,emscripten_get_preloaded_image_data:_emscripten_get_preloaded_image_data,emscripten_get_preloaded_image_data_from_FILE:_emscripten_get_preloaded_image_data_from_FILE,emscripten_get_screen_size:_emscripten_get_screen_size,emscripten_get_visibility_status:_emscripten_get_visibility_status,emscripten_get_window_title:_emscripten_get_window_title,emscripten_get_worker_queue_size:_emscripten_get_worker_queue_size,emscripten_glActiveTexture:_emscripten_glActiveTexture,emscripten_glAttachShader:_emscripten_glAttachShader,emscripten_glBegin:_emscripten_glBegin,emscripten_glBeginQuery:_emscripten_glBeginQuery,emscripten_glBeginQueryEXT:_emscripten_glBeginQueryEXT,emscripten_glBeginTransformFeedback:_emscripten_glBeginTransformFeedback,emscripten_glBindAttribLocation:_emscripten_glBindAttribLocation,emscripten_glBindBuffer:_emscripten_glBindBuffer,emscripten_glBindBufferBase:_emscripten_glBindBufferBase,emscripten_glBindBufferRange:_emscripten_glBindBufferRange,emscripten_glBindFramebuffer:_emscripten_glBindFramebuffer,emscripten_glBindRenderbuffer:_emscripten_glBindRenderbuffer,emscripten_glBindSampler:_emscripten_glBindSampler,emscripten_glBindTexture:_emscripten_glBindTexture,emscripten_glBindTransformFeedback:_emscripten_glBindTransformFeedback,emscripten_glBindVertexArray:_emscripten_glBindVertexArray,emscripten_glBindVertexArrayOES:_emscripten_glBindVertexArrayOES,emscripten_glBlendColor:_emscripten_glBlendColor,emscripten_glBlendEquation:_emscripten_glBlendEquation,emscripten_glBlendEquationSeparate:_emscripten_glBlendEquationSeparate,emscripten_glBlendFunc:_emscripten_glBlendFunc,emscripten_glBlendFuncSeparate:_emscripten_glBlendFuncSeparate,emscripten_glBlitFramebuffer:_emscripten_glBlitFramebuffer,emscripten_glBufferData:_emscripten_glBufferData,emscripten_glBufferSubData:_emscripten_glBufferSubData,emscripten_glCheckFramebufferStatus:_emscripten_glCheckFramebufferStatus,emscripten_glClear:_emscripten_glClear,emscripten_glClearBufferfi:_emscripten_glClearBufferfi,emscripten_glClearBufferfv:_emscripten_glClearBufferfv,emscripten_glClearBufferiv:_emscripten_glClearBufferiv,emscripten_glClearBufferuiv:_emscripten_glClearBufferuiv,emscripten_glClearColor:_emscripten_glClearColor,emscripten_glClearDepth:_emscripten_glClearDepth,emscripten_glClearDepthf:_emscripten_glClearDepthf,emscripten_glClearStencil:_emscripten_glClearStencil,emscripten_glClientWaitSync:_emscripten_glClientWaitSync,emscripten_glClipControlEXT:_emscripten_glClipControlEXT,emscripten_glColorMask:_emscripten_glColorMask,emscripten_glCompileShader:_emscripten_glCompileShader,emscripten_glCompressedTexImage2D:_emscripten_glCompressedTexImage2D,emscripten_glCompressedTexImage3D:_emscripten_glCompressedTexImage3D,emscripten_glCompressedTexSubImage2D:_emscripten_glCompressedTexSubImage2D,emscripten_glCompressedTexSubImage3D:_emscripten_glCompressedTexSubImage3D,emscripten_glCopyBufferSubData:_emscripten_glCopyBufferSubData,emscripten_glCopyTexImage2D:_emscripten_glCopyTexImage2D,emscripten_glCopyTexSubImage2D:_emscripten_glCopyTexSubImage2D,emscripten_glCopyTexSubImage3D:_emscripten_glCopyTexSubImage3D,emscripten_glCreateProgram:_emscripten_glCreateProgram,emscripten_glCreateShader:_emscripten_glCreateShader,emscripten_glCullFace:_emscripten_glCullFace,emscripten_glDeleteBuffers:_emscripten_glDeleteBuffers,emscripten_glDeleteFramebuffers:_emscripten_glDeleteFramebuffers,emscripten_glDeleteProgram:_emscripten_glDeleteProgram,emscripten_glDeleteQueries:_emscripten_glDeleteQueries,emscripten_glDeleteQueriesEXT:_emscripten_glDeleteQueriesEXT,emscripten_glDeleteRenderbuffers:_emscripten_glDeleteRenderbuffers,emscripten_glDeleteSamplers:_emscripten_glDeleteSamplers,emscripten_glDeleteShader:_emscripten_glDeleteShader,emscripten_glDeleteSync:_emscripten_glDeleteSync,emscripten_glDeleteTextures:_emscripten_glDeleteTextures,emscripten_glDeleteTransformFeedbacks:_emscripten_glDeleteTransformFeedbacks,emscripten_glDeleteVertexArrays:_emscripten_glDeleteVertexArrays,emscripten_glDeleteVertexArraysOES:_emscripten_glDeleteVertexArraysOES,emscripten_glDepthFunc:_emscripten_glDepthFunc,emscripten_glDepthMask:_emscripten_glDepthMask,emscripten_glDepthRange:_emscripten_glDepthRange,emscripten_glDepthRangef:_emscripten_glDepthRangef,emscripten_glDetachShader:_emscripten_glDetachShader,emscripten_glDisable:_emscripten_glDisable,emscripten_glDisableVertexAttribArray:_emscripten_glDisableVertexAttribArray,emscripten_glDrawArrays:_emscripten_glDrawArrays,emscripten_glDrawArraysInstanced:_emscripten_glDrawArraysInstanced,emscripten_glDrawArraysInstancedANGLE:_emscripten_glDrawArraysInstancedANGLE,emscripten_glDrawArraysInstancedARB:_emscripten_glDrawArraysInstancedARB,emscripten_glDrawArraysInstancedBaseInstance:_emscripten_glDrawArraysInstancedBaseInstance,emscripten_glDrawArraysInstancedBaseInstanceANGLE:_emscripten_glDrawArraysInstancedBaseInstanceANGLE,emscripten_glDrawArraysInstancedBaseInstanceWEBGL:_emscripten_glDrawArraysInstancedBaseInstanceWEBGL,emscripten_glDrawArraysInstancedEXT:_emscripten_glDrawArraysInstancedEXT,emscripten_glDrawArraysInstancedNV:_emscripten_glDrawArraysInstancedNV,emscripten_glDrawBuffers:_emscripten_glDrawBuffers,emscripten_glDrawBuffersEXT:_emscripten_glDrawBuffersEXT,emscripten_glDrawBuffersWEBGL:_emscripten_glDrawBuffersWEBGL,emscripten_glDrawElements:_emscripten_glDrawElements,emscripten_glDrawElementsInstanced:_emscripten_glDrawElementsInstanced,emscripten_glDrawElementsInstancedANGLE:_emscripten_glDrawElementsInstancedANGLE,emscripten_glDrawElementsInstancedARB:_emscripten_glDrawElementsInstancedARB,emscripten_glDrawElementsInstancedBaseVertexBaseInstanceANGLE:_emscripten_glDrawElementsInstancedBaseVertexBaseInstanceANGLE,emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL:_emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL,emscripten_glDrawElementsInstancedEXT:_emscripten_glDrawElementsInstancedEXT,emscripten_glDrawElementsInstancedNV:_emscripten_glDrawElementsInstancedNV,emscripten_glDrawRangeElements:_emscripten_glDrawRangeElements,emscripten_glEnable:_emscripten_glEnable,emscripten_glEnableVertexAttribArray:_emscripten_glEnableVertexAttribArray,emscripten_glEndQuery:_emscripten_glEndQuery,emscripten_glEndQueryEXT:_emscripten_glEndQueryEXT,emscripten_glEndTransformFeedback:_emscripten_glEndTransformFeedback,emscripten_glFenceSync:_emscripten_glFenceSync,emscripten_glFinish:_emscripten_glFinish,emscripten_glFlush:_emscripten_glFlush,emscripten_glFramebufferRenderbuffer:_emscripten_glFramebufferRenderbuffer,emscripten_glFramebufferTexture2D:_emscripten_glFramebufferTexture2D,emscripten_glFramebufferTextureLayer:_emscripten_glFramebufferTextureLayer,emscripten_glFrontFace:_emscripten_glFrontFace,emscripten_glGenBuffers:_emscripten_glGenBuffers,emscripten_glGenFramebuffers:_emscripten_glGenFramebuffers,emscripten_glGenQueries:_emscripten_glGenQueries,emscripten_glGenQueriesEXT:_emscripten_glGenQueriesEXT,emscripten_glGenRenderbuffers:_emscripten_glGenRenderbuffers,emscripten_glGenSamplers:_emscripten_glGenSamplers,emscripten_glGenTextures:_emscripten_glGenTextures,emscripten_glGenTransformFeedbacks:_emscripten_glGenTransformFeedbacks,emscripten_glGenVertexArrays:_emscripten_glGenVertexArrays,emscripten_glGenVertexArraysOES:_emscripten_glGenVertexArraysOES,emscripten_glGenerateMipmap:_emscripten_glGenerateMipmap,emscripten_glGetActiveAttrib:_emscripten_glGetActiveAttrib,emscripten_glGetActiveUniform:_emscripten_glGetActiveUniform,emscripten_glGetActiveUniformBlockName:_emscripten_glGetActiveUniformBlockName,emscripten_glGetActiveUniformBlockiv:_emscripten_glGetActiveUniformBlockiv,emscripten_glGetActiveUniformsiv:_emscripten_glGetActiveUniformsiv,emscripten_glGetAttachedShaders:_emscripten_glGetAttachedShaders,emscripten_glGetAttribLocation:_emscripten_glGetAttribLocation,emscripten_glGetBooleanv:_emscripten_glGetBooleanv,emscripten_glGetBufferParameteri64v:_emscripten_glGetBufferParameteri64v,emscripten_glGetBufferParameteriv:_emscripten_glGetBufferParameteriv,emscripten_glGetBufferSubData:_emscripten_glGetBufferSubData,emscripten_glGetError:_emscripten_glGetError,emscripten_glGetFloatv:_emscripten_glGetFloatv,emscripten_glGetFragDataLocation:_emscripten_glGetFragDataLocation,emscripten_glGetFramebufferAttachmentParameteriv:_emscripten_glGetFramebufferAttachmentParameteriv,emscripten_glGetInteger64i_v:_emscripten_glGetInteger64i_v,emscripten_glGetInteger64v:_emscripten_glGetInteger64v,emscripten_glGetIntegeri_v:_emscripten_glGetIntegeri_v,emscripten_glGetIntegerv:_emscripten_glGetIntegerv,emscripten_glGetInternalformativ:_emscripten_glGetInternalformativ,emscripten_glGetProgramBinary:_emscripten_glGetProgramBinary,emscripten_glGetProgramInfoLog:_emscripten_glGetProgramInfoLog,emscripten_glGetProgramiv:_emscripten_glGetProgramiv,emscripten_glGetQueryObjecti64vEXT:_emscripten_glGetQueryObjecti64vEXT,emscripten_glGetQueryObjectivEXT:_emscripten_glGetQueryObjectivEXT,emscripten_glGetQueryObjectui64vEXT:_emscripten_glGetQueryObjectui64vEXT,emscripten_glGetQueryObjectuiv:_emscripten_glGetQueryObjectuiv,emscripten_glGetQueryObjectuivEXT:_emscripten_glGetQueryObjectuivEXT,emscripten_glGetQueryiv:_emscripten_glGetQueryiv,emscripten_glGetQueryivEXT:_emscripten_glGetQueryivEXT,emscripten_glGetRenderbufferParameteriv:_emscripten_glGetRenderbufferParameteriv,emscripten_glGetSamplerParameterfv:_emscripten_glGetSamplerParameterfv,emscripten_glGetSamplerParameteriv:_emscripten_glGetSamplerParameteriv,emscripten_glGetShaderInfoLog:_emscripten_glGetShaderInfoLog,emscripten_glGetShaderPrecisionFormat:_emscripten_glGetShaderPrecisionFormat,emscripten_glGetShaderSource:_emscripten_glGetShaderSource,emscripten_glGetShaderiv:_emscripten_glGetShaderiv,emscripten_glGetString:_emscripten_glGetString,emscripten_glGetStringi:_emscripten_glGetStringi,emscripten_glGetSynciv:_emscripten_glGetSynciv,emscripten_glGetTexParameterfv:_emscripten_glGetTexParameterfv,emscripten_glGetTexParameteriv:_emscripten_glGetTexParameteriv,emscripten_glGetTransformFeedbackVarying:_emscripten_glGetTransformFeedbackVarying,emscripten_glGetUniformBlockIndex:_emscripten_glGetUniformBlockIndex,emscripten_glGetUniformIndices:_emscripten_glGetUniformIndices,emscripten_glGetUniformLocation:_emscripten_glGetUniformLocation,emscripten_glGetUniformfv:_emscripten_glGetUniformfv,emscripten_glGetUniformiv:_emscripten_glGetUniformiv,emscripten_glGetUniformuiv:_emscripten_glGetUniformuiv,emscripten_glGetVertexAttribIiv:_emscripten_glGetVertexAttribIiv,emscripten_glGetVertexAttribIuiv:_emscripten_glGetVertexAttribIuiv,emscripten_glGetVertexAttribPointerv:_emscripten_glGetVertexAttribPointerv,emscripten_glGetVertexAttribfv:_emscripten_glGetVertexAttribfv,emscripten_glGetVertexAttribiv:_emscripten_glGetVertexAttribiv,emscripten_glHint:_emscripten_glHint,emscripten_glInvalidateFramebuffer:_emscripten_glInvalidateFramebuffer,emscripten_glInvalidateSubFramebuffer:_emscripten_glInvalidateSubFramebuffer,emscripten_glIsBuffer:_emscripten_glIsBuffer,emscripten_glIsEnabled:_emscripten_glIsEnabled,emscripten_glIsFramebuffer:_emscripten_glIsFramebuffer,emscripten_glIsProgram:_emscripten_glIsProgram,emscripten_glIsQuery:_emscripten_glIsQuery,emscripten_glIsQueryEXT:_emscripten_glIsQueryEXT,emscripten_glIsRenderbuffer:_emscripten_glIsRenderbuffer,emscripten_glIsSampler:_emscripten_glIsSampler,emscripten_glIsShader:_emscripten_glIsShader,emscripten_glIsSync:_emscripten_glIsSync,emscripten_glIsTexture:_emscripten_glIsTexture,emscripten_glIsTransformFeedback:_emscripten_glIsTransformFeedback,emscripten_glIsVertexArray:_emscripten_glIsVertexArray,emscripten_glIsVertexArrayOES:_emscripten_glIsVertexArrayOES,emscripten_glLineWidth:_emscripten_glLineWidth,emscripten_glLinkProgram:_emscripten_glLinkProgram,emscripten_glLoadIdentity:_emscripten_glLoadIdentity,emscripten_glMatrixMode:_emscripten_glMatrixMode,emscripten_glMultiDrawArrays:_emscripten_glMultiDrawArrays,emscripten_glMultiDrawArraysANGLE:_emscripten_glMultiDrawArraysANGLE,emscripten_glMultiDrawArraysInstancedANGLE:_emscripten_glMultiDrawArraysInstancedANGLE,emscripten_glMultiDrawArraysInstancedBaseInstanceANGLE:_emscripten_glMultiDrawArraysInstancedBaseInstanceANGLE,emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL:_emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL,emscripten_glMultiDrawArraysInstancedWEBGL:_emscripten_glMultiDrawArraysInstancedWEBGL,emscripten_glMultiDrawArraysWEBGL:_emscripten_glMultiDrawArraysWEBGL,emscripten_glMultiDrawElements:_emscripten_glMultiDrawElements,emscripten_glMultiDrawElementsANGLE:_emscripten_glMultiDrawElementsANGLE,emscripten_glMultiDrawElementsInstancedANGLE:_emscripten_glMultiDrawElementsInstancedANGLE,emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceANGLE:_emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceANGLE,emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL:_emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL,emscripten_glMultiDrawElementsInstancedWEBGL:_emscripten_glMultiDrawElementsInstancedWEBGL,emscripten_glMultiDrawElementsWEBGL:_emscripten_glMultiDrawElementsWEBGL,emscripten_glPauseTransformFeedback:_emscripten_glPauseTransformFeedback,emscripten_glPixelStorei:_emscripten_glPixelStorei,emscripten_glPolygonModeWEBGL:_emscripten_glPolygonModeWEBGL,emscripten_glPolygonOffset:_emscripten_glPolygonOffset,emscripten_glPolygonOffsetClampEXT:_emscripten_glPolygonOffsetClampEXT,emscripten_glProgramBinary:_emscripten_glProgramBinary,emscripten_glProgramParameteri:_emscripten_glProgramParameteri,emscripten_glQueryCounterEXT:_emscripten_glQueryCounterEXT,emscripten_glReadBuffer:_emscripten_glReadBuffer,emscripten_glReadPixels:_emscripten_glReadPixels,emscripten_glReleaseShaderCompiler:_emscripten_glReleaseShaderCompiler,emscripten_glRenderbufferStorage:_emscripten_glRenderbufferStorage,emscripten_glRenderbufferStorageMultisample:_emscripten_glRenderbufferStorageMultisample,emscripten_glResumeTransformFeedback:_emscripten_glResumeTransformFeedback,emscripten_glSampleCoverage:_emscripten_glSampleCoverage,emscripten_glSamplerParameterf:_emscripten_glSamplerParameterf,emscripten_glSamplerParameterfv:_emscripten_glSamplerParameterfv,emscripten_glSamplerParameteri:_emscripten_glSamplerParameteri,emscripten_glSamplerParameteriv:_emscripten_glSamplerParameteriv,emscripten_glScissor:_emscripten_glScissor,emscripten_glShaderBinary:_emscripten_glShaderBinary,emscripten_glShaderSource:_emscripten_glShaderSource,emscripten_glStencilFunc:_emscripten_glStencilFunc,emscripten_glStencilFuncSeparate:_emscripten_glStencilFuncSeparate,emscripten_glStencilMask:_emscripten_glStencilMask,emscripten_glStencilMaskSeparate:_emscripten_glStencilMaskSeparate,emscripten_glStencilOp:_emscripten_glStencilOp,emscripten_glStencilOpSeparate:_emscripten_glStencilOpSeparate,emscripten_glTexImage2D:_emscripten_glTexImage2D,emscripten_glTexImage3D:_emscripten_glTexImage3D,emscripten_glTexParameterf:_emscripten_glTexParameterf,emscripten_glTexParameterfv:_emscripten_glTexParameterfv,emscripten_glTexParameteri:_emscripten_glTexParameteri,emscripten_glTexParameteriv:_emscripten_glTexParameteriv,emscripten_glTexStorage2D:_emscripten_glTexStorage2D,emscripten_glTexStorage3D:_emscripten_glTexStorage3D,emscripten_glTexSubImage2D:_emscripten_glTexSubImage2D,emscripten_glTexSubImage3D:_emscripten_glTexSubImage3D,emscripten_glTransformFeedbackVaryings:_emscripten_glTransformFeedbackVaryings,emscripten_glUniform1f:_emscripten_glUniform1f,emscripten_glUniform1fv:_emscripten_glUniform1fv,emscripten_glUniform1i:_emscripten_glUniform1i,emscripten_glUniform1iv:_emscripten_glUniform1iv,emscripten_glUniform1ui:_emscripten_glUniform1ui,emscripten_glUniform1uiv:_emscripten_glUniform1uiv,emscripten_glUniform2f:_emscripten_glUniform2f,emscripten_glUniform2fv:_emscripten_glUniform2fv,emscripten_glUniform2i:_emscripten_glUniform2i,emscripten_glUniform2iv:_emscripten_glUniform2iv,emscripten_glUniform2ui:_emscripten_glUniform2ui,emscripten_glUniform2uiv:_emscripten_glUniform2uiv,emscripten_glUniform3f:_emscripten_glUniform3f,emscripten_glUniform3fv:_emscripten_glUniform3fv,emscripten_glUniform3i:_emscripten_glUniform3i,emscripten_glUniform3iv:_emscripten_glUniform3iv,emscripten_glUniform3ui:_emscripten_glUniform3ui,emscripten_glUniform3uiv:_emscripten_glUniform3uiv,emscripten_glUniform4f:_emscripten_glUniform4f,emscripten_glUniform4fv:_emscripten_glUniform4fv,emscripten_glUniform4i:_emscripten_glUniform4i,emscripten_glUniform4iv:_emscripten_glUniform4iv,emscripten_glUniform4ui:_emscripten_glUniform4ui,emscripten_glUniform4uiv:_emscripten_glUniform4uiv,emscripten_glUniformBlockBinding:_emscripten_glUniformBlockBinding,emscripten_glUniformMatrix2fv:_emscripten_glUniformMatrix2fv,emscripten_glUniformMatrix2x3fv:_emscripten_glUniformMatrix2x3fv,emscripten_glUniformMatrix2x4fv:_emscripten_glUniformMatrix2x4fv,emscripten_glUniformMatrix3fv:_emscripten_glUniformMatrix3fv,emscripten_glUniformMatrix3x2fv:_emscripten_glUniformMatrix3x2fv,emscripten_glUniformMatrix3x4fv:_emscripten_glUniformMatrix3x4fv,emscripten_glUniformMatrix4fv:_emscripten_glUniformMatrix4fv,emscripten_glUniformMatrix4x2fv:_emscripten_glUniformMatrix4x2fv,emscripten_glUniformMatrix4x3fv:_emscripten_glUniformMatrix4x3fv,emscripten_glUseProgram:_emscripten_glUseProgram,emscripten_glValidateProgram:_emscripten_glValidateProgram,emscripten_glVertexAttrib1f:_emscripten_glVertexAttrib1f,emscripten_glVertexAttrib1fv:_emscripten_glVertexAttrib1fv,emscripten_glVertexAttrib2f:_emscripten_glVertexAttrib2f,emscripten_glVertexAttrib2fv:_emscripten_glVertexAttrib2fv,emscripten_glVertexAttrib3f:_emscripten_glVertexAttrib3f,emscripten_glVertexAttrib3fv:_emscripten_glVertexAttrib3fv,emscripten_glVertexAttrib4f:_emscripten_glVertexAttrib4f,emscripten_glVertexAttrib4fv:_emscripten_glVertexAttrib4fv,emscripten_glVertexAttribDivisor:_emscripten_glVertexAttribDivisor,emscripten_glVertexAttribDivisorANGLE:_emscripten_glVertexAttribDivisorANGLE,emscripten_glVertexAttribDivisorARB:_emscripten_glVertexAttribDivisorARB,emscripten_glVertexAttribDivisorEXT:_emscripten_glVertexAttribDivisorEXT,emscripten_glVertexAttribDivisorNV:_emscripten_glVertexAttribDivisorNV,emscripten_glVertexAttribI4i:_emscripten_glVertexAttribI4i,emscripten_glVertexAttribI4iv:_emscripten_glVertexAttribI4iv,emscripten_glVertexAttribI4ui:_emscripten_glVertexAttribI4ui,emscripten_glVertexAttribI4uiv:_emscripten_glVertexAttribI4uiv,emscripten_glVertexAttribIPointer:_emscripten_glVertexAttribIPointer,emscripten_glVertexAttribPointer:_emscripten_glVertexAttribPointer,emscripten_glVertexPointer:_emscripten_glVertexPointer,emscripten_glViewport:_emscripten_glViewport,emscripten_glWaitSync:_emscripten_glWaitSync,emscripten_has_asyncify:_emscripten_has_asyncify,emscripten_hide_mouse:_emscripten_hide_mouse,emscripten_html5_remove_all_event_listeners:_emscripten_html5_remove_all_event_listeners,emscripten_html5_remove_event_listener:_emscripten_html5_remove_event_listener,emscripten_is_main_browser_thread:_emscripten_is_main_browser_thread,emscripten_is_webgl_context_lost:_emscripten_is_webgl_context_lost,emscripten_lock_orientation:_emscripten_lock_orientation,emscripten_math_acos:_emscripten_math_acos,emscripten_math_acosh:_emscripten_math_acosh,emscripten_math_asin:_emscripten_math_asin,emscripten_math_asinh:_emscripten_math_asinh,emscripten_math_atan:_emscripten_math_atan,emscripten_math_atan2:_emscripten_math_atan2,emscripten_math_atanh:_emscripten_math_atanh,emscripten_math_cbrt:_emscripten_math_cbrt,emscripten_math_cos:_emscripten_math_cos,emscripten_math_cosh:_emscripten_math_cosh,emscripten_math_exp:_emscripten_math_exp,emscripten_math_expm1:_emscripten_math_expm1,emscripten_math_fmod:_emscripten_math_fmod,emscripten_math_hypot:_emscripten_math_hypot,emscripten_math_log:_emscripten_math_log,emscripten_math_log10:_emscripten_math_log10,emscripten_math_log1p:_emscripten_math_log1p,emscripten_math_log2:_emscripten_math_log2,emscripten_math_pow:_emscripten_math_pow,emscripten_math_random:_emscripten_math_random,emscripten_math_round:_emscripten_math_round,emscripten_math_sign:_emscripten_math_sign,emscripten_math_sin:_emscripten_math_sin,emscripten_math_sinh:_emscripten_math_sinh,emscripten_math_sqrt:_emscripten_math_sqrt,emscripten_math_tan:_emscripten_math_tan,emscripten_math_tanh:_emscripten_math_tanh,emscripten_net_bind:_emscripten_net_bind,emscripten_net_closesocket:_emscripten_net_closesocket,emscripten_net_connect:_emscripten_net_connect,emscripten_net_getaddrinfo:_emscripten_net_getaddrinfo,emscripten_net_gethostbyname:_emscripten_net_gethostbyname,emscripten_net_gethostname:_emscripten_net_gethostname,emscripten_net_getsockname:_emscripten_net_getsockname,emscripten_net_recv:_emscripten_net_recv,emscripten_net_recvfrom:_emscripten_net_recvfrom,emscripten_net_select:_emscripten_net_select,emscripten_net_send:_emscripten_net_send,emscripten_net_sendto:_emscripten_net_sendto,emscripten_net_socket:_emscripten_net_socket,emscripten_notify_memory_growth:_emscripten_notify_memory_growth,emscripten_out:_emscripten_out,emscripten_outn:_emscripten_outn,emscripten_pause_main_loop:_emscripten_pause_main_loop,emscripten_pc_get_column:_emscripten_pc_get_column,emscripten_pc_get_file:_emscripten_pc_get_file,emscripten_pc_get_function:_emscripten_pc_get_function,emscripten_pc_get_line:_emscripten_pc_get_line,emscripten_performance_now:_emscripten_performance_now,emscripten_print_double:_emscripten_print_double,emscripten_promise_all:_emscripten_promise_all,emscripten_promise_all_settled:_emscripten_promise_all_settled,emscripten_promise_any:_emscripten_promise_any,emscripten_promise_await:_emscripten_promise_await,emscripten_promise_create:_emscripten_promise_create,emscripten_promise_destroy:_emscripten_promise_destroy,emscripten_promise_race:_emscripten_promise_race,emscripten_promise_resolve:_emscripten_promise_resolve,emscripten_promise_then:_emscripten_promise_then,emscripten_random:_emscripten_random,emscripten_request_animation_frame:_emscripten_request_animation_frame,emscripten_request_animation_frame_loop:_emscripten_request_animation_frame_loop,emscripten_request_fullscreen:_emscripten_request_fullscreen,emscripten_request_fullscreen_strategy:_emscripten_request_fullscreen_strategy,emscripten_request_pointerlock:_emscripten_request_pointerlock,emscripten_resize_heap:_emscripten_resize_heap,emscripten_resume_main_loop:_emscripten_resume_main_loop,emscripten_return_address:_emscripten_return_address,emscripten_run_preload_plugins:_emscripten_run_preload_plugins,emscripten_run_preload_plugins_data:_emscripten_run_preload_plugins_data,emscripten_run_script:_emscripten_run_script,emscripten_run_script_int:_emscripten_run_script_int,emscripten_run_script_string:_emscripten_run_script_string,emscripten_runtime_keepalive_check:_emscripten_runtime_keepalive_check,emscripten_runtime_keepalive_pop:_emscripten_runtime_keepalive_pop,emscripten_runtime_keepalive_push:_emscripten_runtime_keepalive_push,emscripten_sample_gamepad_data:_emscripten_sample_gamepad_data,emscripten_scan_registers:_emscripten_scan_registers,emscripten_set_batterychargingchange_callback_on_thread:_emscripten_set_batterychargingchange_callback_on_thread,emscripten_set_batterylevelchange_callback_on_thread:_emscripten_set_batterylevelchange_callback_on_thread,emscripten_set_beforeunload_callback_on_thread:_emscripten_set_beforeunload_callback_on_thread,emscripten_set_blur_callback_on_thread:_emscripten_set_blur_callback_on_thread,emscripten_set_canvas_element_size:_emscripten_set_canvas_element_size,emscripten_set_canvas_size:_emscripten_set_canvas_size,emscripten_set_click_callback_on_thread:_emscripten_set_click_callback_on_thread,emscripten_set_dblclick_callback_on_thread:_emscripten_set_dblclick_callback_on_thread,emscripten_set_devicemotion_callback_on_thread:_emscripten_set_devicemotion_callback_on_thread,emscripten_set_deviceorientation_callback_on_thread:_emscripten_set_deviceorientation_callback_on_thread,emscripten_set_element_css_size:_emscripten_set_element_css_size,emscripten_set_focus_callback_on_thread:_emscripten_set_focus_callback_on_thread,emscripten_set_focusin_callback_on_thread:_emscripten_set_focusin_callback_on_thread,emscripten_set_focusout_callback_on_thread:_emscripten_set_focusout_callback_on_thread,emscripten_set_fullscreenchange_callback_on_thread:_emscripten_set_fullscreenchange_callback_on_thread,emscripten_set_gamepadconnected_callback_on_thread:_emscripten_set_gamepadconnected_callback_on_thread,emscripten_set_gamepaddisconnected_callback_on_thread:_emscripten_set_gamepaddisconnected_callback_on_thread,emscripten_set_immediate:_emscripten_set_immediate,emscripten_set_immediate_loop:_emscripten_set_immediate_loop,emscripten_set_interval:_emscripten_set_interval,emscripten_set_keydown_callback_on_thread:_emscripten_set_keydown_callback_on_thread,emscripten_set_keypress_callback_on_thread:_emscripten_set_keypress_callback_on_thread,emscripten_set_keyup_callback_on_thread:_emscripten_set_keyup_callback_on_thread,emscripten_set_main_loop:_emscripten_set_main_loop,emscripten_set_main_loop_arg:_emscripten_set_main_loop_arg,emscripten_set_main_loop_expected_blockers:_emscripten_set_main_loop_expected_blockers,emscripten_set_main_loop_timing:_emscripten_set_main_loop_timing,emscripten_set_mousedown_callback_on_thread:_emscripten_set_mousedown_callback_on_thread,emscripten_set_mouseenter_callback_on_thread:_emscripten_set_mouseenter_callback_on_thread,emscripten_set_mouseleave_callback_on_thread:_emscripten_set_mouseleave_callback_on_thread,emscripten_set_mousemove_callback_on_thread:_emscripten_set_mousemove_callback_on_thread,emscripten_set_mouseout_callback_on_thread:_emscripten_set_mouseout_callback_on_thread,emscripten_set_mouseover_callback_on_thread:_emscripten_set_mouseover_callback_on_thread,emscripten_set_mouseup_callback_on_thread:_emscripten_set_mouseup_callback_on_thread,emscripten_set_orientationchange_callback_on_thread:_emscripten_set_orientationchange_callback_on_thread,emscripten_set_pointerlockchange_callback_on_thread:_emscripten_set_pointerlockchange_callback_on_thread,emscripten_set_pointerlockerror_callback_on_thread:_emscripten_set_pointerlockerror_callback_on_thread,emscripten_set_resize_callback_on_thread:_emscripten_set_resize_callback_on_thread,emscripten_set_scroll_callback_on_thread:_emscripten_set_scroll_callback_on_thread,emscripten_set_socket_close_callback:_emscripten_set_socket_close_callback,emscripten_set_socket_connection_callback:_emscripten_set_socket_connection_callback,emscripten_set_socket_error_callback:_emscripten_set_socket_error_callback,emscripten_set_socket_listen_callback:_emscripten_set_socket_listen_callback,emscripten_set_socket_message_callback:_emscripten_set_socket_message_callback,emscripten_set_socket_open_callback:_emscripten_set_socket_open_callback,emscripten_set_timeout:_emscripten_set_timeout,emscripten_set_timeout_loop:_emscripten_set_timeout_loop,emscripten_set_touchcancel_callback_on_thread:_emscripten_set_touchcancel_callback_on_thread,emscripten_set_touchend_callback_on_thread:_emscripten_set_touchend_callback_on_thread,emscripten_set_touchmove_callback_on_thread:_emscripten_set_touchmove_callback_on_thread,emscripten_set_touchstart_callback_on_thread:_emscripten_set_touchstart_callback_on_thread,emscripten_set_visibilitychange_callback_on_thread:_emscripten_set_visibilitychange_callback_on_thread,emscripten_set_webglcontextlost_callback_on_thread:_emscripten_set_webglcontextlost_callback_on_thread,emscripten_set_webglcontextrestored_callback_on_thread:_emscripten_set_webglcontextrestored_callback_on_thread,emscripten_set_wheel_callback_on_thread:_emscripten_set_wheel_callback_on_thread,emscripten_set_window_title:_emscripten_set_window_title,emscripten_sleep:_emscripten_sleep,emscripten_stack_snapshot:_emscripten_stack_snapshot,emscripten_stack_unwind_buffer:_emscripten_stack_unwind_buffer,emscripten_supports_offscreencanvas:_emscripten_supports_offscreencanvas,emscripten_throw_number:_emscripten_throw_number,emscripten_throw_string:_emscripten_throw_string,emscripten_unlock_orientation:_emscripten_unlock_orientation,emscripten_unwind_to_js_event_loop:_emscripten_unwind_to_js_event_loop,emscripten_vibrate:_emscripten_vibrate,emscripten_vibrate_pattern:_emscripten_vibrate_pattern,emscripten_webgl_commit_frame:_emscripten_webgl_commit_frame,emscripten_webgl_create_context:_emscripten_webgl_create_context,emscripten_webgl_destroy_context:_emscripten_webgl_destroy_context,emscripten_webgl_do_commit_frame:_emscripten_webgl_do_commit_frame,emscripten_webgl_do_create_context:_emscripten_webgl_do_create_context,emscripten_webgl_do_get_current_context:_emscripten_webgl_do_get_current_context,emscripten_webgl_enable_EXT_clip_control:_emscripten_webgl_enable_EXT_clip_control,emscripten_webgl_enable_EXT_polygon_offset_clamp:_emscripten_webgl_enable_EXT_polygon_offset_clamp,emscripten_webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance:_emscripten_webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance,emscripten_webgl_enable_WEBGL_multi_draw:_emscripten_webgl_enable_WEBGL_multi_draw,emscripten_webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance:_emscripten_webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance,emscripten_webgl_enable_WEBGL_polygon_mode:_emscripten_webgl_enable_WEBGL_polygon_mode,emscripten_webgl_enable_extension:_emscripten_webgl_enable_extension,emscripten_webgl_get_context_attributes:_emscripten_webgl_get_context_attributes,emscripten_webgl_get_current_context:_emscripten_webgl_get_current_context,emscripten_webgl_get_drawing_buffer_size:_emscripten_webgl_get_drawing_buffer_size,emscripten_webgl_get_parameter_d:_emscripten_webgl_get_parameter_d,emscripten_webgl_get_parameter_i64v:_emscripten_webgl_get_parameter_i64v,emscripten_webgl_get_parameter_o:_emscripten_webgl_get_parameter_o,emscripten_webgl_get_parameter_utf8:_emscripten_webgl_get_parameter_utf8,emscripten_webgl_get_parameter_v:_emscripten_webgl_get_parameter_v,emscripten_webgl_get_program_info_log_utf8:_emscripten_webgl_get_program_info_log_utf8,emscripten_webgl_get_program_parameter_d:_emscripten_webgl_get_program_parameter_d,emscripten_webgl_get_shader_info_log_utf8:_emscripten_webgl_get_shader_info_log_utf8,emscripten_webgl_get_shader_parameter_d:_emscripten_webgl_get_shader_parameter_d,emscripten_webgl_get_shader_source_utf8:_emscripten_webgl_get_shader_source_utf8,emscripten_webgl_get_supported_extensions:_emscripten_webgl_get_supported_extensions,emscripten_webgl_get_uniform_d:_emscripten_webgl_get_uniform_d,emscripten_webgl_get_uniform_v:_emscripten_webgl_get_uniform_v,emscripten_webgl_get_vertex_attrib_d:_emscripten_webgl_get_vertex_attrib_d,emscripten_webgl_get_vertex_attrib_o:_emscripten_webgl_get_vertex_attrib_o,emscripten_webgl_get_vertex_attrib_v:_emscripten_webgl_get_vertex_attrib_v,emscripten_webgl_make_context_current:_emscripten_webgl_make_context_current,emscripten_wget_data:_emscripten_wget_data,endprotoent:_endprotoent,environ_get:_environ_get,environ_sizes_get:_environ_sizes_get,exit:_exit,fd_close:_fd_close,fd_fdstat_get:_fd_fdstat_get,fd_pread:_fd_pread,fd_pwrite:_fd_pwrite,fd_read:_fd_read,fd_seek:_fd_seek,fd_sync:_fd_sync,fd_write:_fd_write,getaddrinfo:_getaddrinfo,getnameinfo:_getnameinfo,getprotobyname:_getprotobyname,getprotobynumber:_getprotobynumber,getprotoent:_getprotoent,glActiveTexture:_glActiveTexture,glAttachShader:_glAttachShader,glBegin:_glBegin,glBeginQuery:_glBeginQuery,glBeginQueryEXT:_glBeginQueryEXT,glBeginTransformFeedback:_glBeginTransformFeedback,glBindAttribLocation:_glBindAttribLocation,glBindBuffer:_glBindBuffer,glBindBufferBase:_glBindBufferBase,glBindBufferRange:_glBindBufferRange,glBindFramebuffer:_glBindFramebuffer,glBindRenderbuffer:_glBindRenderbuffer,glBindSampler:_glBindSampler,glBindTexture:_glBindTexture,glBindTransformFeedback:_glBindTransformFeedback,glBindVertexArray:_glBindVertexArray,glBindVertexArrayOES:_glBindVertexArrayOES,glBlendColor:_glBlendColor,glBlendEquation:_glBlendEquation,glBlendEquationSeparate:_glBlendEquationSeparate,glBlendFunc:_glBlendFunc,glBlendFuncSeparate:_glBlendFuncSeparate,glBlitFramebuffer:_glBlitFramebuffer,glBufferData:_glBufferData,glBufferSubData:_glBufferSubData,glCheckFramebufferStatus:_glCheckFramebufferStatus,glClear:_glClear,glClearBufferfi:_glClearBufferfi,glClearBufferfv:_glClearBufferfv,glClearBufferiv:_glClearBufferiv,glClearBufferuiv:_glClearBufferuiv,glClearColor:_glClearColor,glClearDepth:_glClearDepth,glClearDepthf:_glClearDepthf,glClearStencil:_glClearStencil,glClientWaitSync:_glClientWaitSync,glClipControlEXT:_glClipControlEXT,glColorMask:_glColorMask,glCompileShader:_glCompileShader,glCompressedTexImage2D:_glCompressedTexImage2D,glCompressedTexImage3D:_glCompressedTexImage3D,glCompressedTexSubImage2D:_glCompressedTexSubImage2D,glCompressedTexSubImage3D:_glCompressedTexSubImage3D,glCopyBufferSubData:_glCopyBufferSubData,glCopyTexImage2D:_glCopyTexImage2D,glCopyTexSubImage2D:_glCopyTexSubImage2D,glCopyTexSubImage3D:_glCopyTexSubImage3D,glCreateProgram:_glCreateProgram,glCreateShader:_glCreateShader,glCullFace:_glCullFace,glDeleteBuffers:_glDeleteBuffers,glDeleteFramebuffers:_glDeleteFramebuffers,glDeleteProgram:_glDeleteProgram,glDeleteQueries:_glDeleteQueries,glDeleteQueriesEXT:_glDeleteQueriesEXT,glDeleteRenderbuffers:_glDeleteRenderbuffers,glDeleteSamplers:_glDeleteSamplers,glDeleteShader:_glDeleteShader,glDeleteSync:_glDeleteSync,glDeleteTextures:_glDeleteTextures,glDeleteTransformFeedbacks:_glDeleteTransformFeedbacks,glDeleteVertexArrays:_glDeleteVertexArrays,glDeleteVertexArraysOES:_glDeleteVertexArraysOES,glDepthFunc:_glDepthFunc,glDepthMask:_glDepthMask,glDepthRange:_glDepthRange,glDepthRangef:_glDepthRangef,glDetachShader:_glDetachShader,glDisable:_glDisable,glDisableVertexAttribArray:_glDisableVertexAttribArray,glDrawArrays:_glDrawArrays,glDrawArraysInstanced:_glDrawArraysInstanced,glDrawArraysInstancedANGLE:_glDrawArraysInstancedANGLE,glDrawArraysInstancedARB:_glDrawArraysInstancedARB,glDrawArraysInstancedBaseInstance:_glDrawArraysInstancedBaseInstance,glDrawArraysInstancedBaseInstanceANGLE:_glDrawArraysInstancedBaseInstanceANGLE,glDrawArraysInstancedBaseInstanceWEBGL:_glDrawArraysInstancedBaseInstanceWEBGL,glDrawArraysInstancedEXT:_glDrawArraysInstancedEXT,glDrawArraysInstancedNV:_glDrawArraysInstancedNV,glDrawBuffers:_glDrawBuffers,glDrawBuffersEXT:_glDrawBuffersEXT,glDrawBuffersWEBGL:_glDrawBuffersWEBGL,glDrawElements:_glDrawElements,glDrawElementsInstanced:_glDrawElementsInstanced,glDrawElementsInstancedANGLE:_glDrawElementsInstancedANGLE,glDrawElementsInstancedARB:_glDrawElementsInstancedARB,glDrawElementsInstancedBaseVertexBaseInstanceANGLE:_glDrawElementsInstancedBaseVertexBaseInstanceANGLE,glDrawElementsInstancedBaseVertexBaseInstanceWEBGL:_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL,glDrawElementsInstancedEXT:_glDrawElementsInstancedEXT,glDrawElementsInstancedNV:_glDrawElementsInstancedNV,glDrawRangeElements:_glDrawRangeElements,glEnable:_glEnable,glEnableVertexAttribArray:_glEnableVertexAttribArray,glEndQuery:_glEndQuery,glEndQueryEXT:_glEndQueryEXT,glEndTransformFeedback:_glEndTransformFeedback,glFenceSync:_glFenceSync,glFinish:_glFinish,glFlush:_glFlush,glFramebufferRenderbuffer:_glFramebufferRenderbuffer,glFramebufferTexture2D:_glFramebufferTexture2D,glFramebufferTextureLayer:_glFramebufferTextureLayer,glFrontFace:_glFrontFace,glGenBuffers:_glGenBuffers,glGenFramebuffers:_glGenFramebuffers,glGenQueries:_glGenQueries,glGenQueriesEXT:_glGenQueriesEXT,glGenRenderbuffers:_glGenRenderbuffers,glGenSamplers:_glGenSamplers,glGenTextures:_glGenTextures,glGenTransformFeedbacks:_glGenTransformFeedbacks,glGenVertexArrays:_glGenVertexArrays,glGenVertexArraysOES:_glGenVertexArraysOES,glGenerateMipmap:_glGenerateMipmap,glGetActiveAttrib:_glGetActiveAttrib,glGetActiveUniform:_glGetActiveUniform,glGetActiveUniformBlockName:_glGetActiveUniformBlockName,glGetActiveUniformBlockiv:_glGetActiveUniformBlockiv,glGetActiveUniformsiv:_glGetActiveUniformsiv,glGetAttachedShaders:_glGetAttachedShaders,glGetAttribLocation:_glGetAttribLocation,glGetBooleanv:_glGetBooleanv,glGetBufferParameteri64v:_glGetBufferParameteri64v,glGetBufferParameteriv:_glGetBufferParameteriv,glGetBufferSubData:_glGetBufferSubData,glGetError:_glGetError,glGetFloatv:_glGetFloatv,glGetFragDataLocation:_glGetFragDataLocation,glGetFramebufferAttachmentParameteriv:_glGetFramebufferAttachmentParameteriv,glGetInteger64i_v:_glGetInteger64i_v,glGetInteger64v:_glGetInteger64v,glGetIntegeri_v:_glGetIntegeri_v,glGetIntegerv:_glGetIntegerv,glGetInternalformativ:_glGetInternalformativ,glGetProgramBinary:_glGetProgramBinary,glGetProgramInfoLog:_glGetProgramInfoLog,glGetProgramiv:_glGetProgramiv,glGetQueryObjecti64vEXT:_glGetQueryObjecti64vEXT,glGetQueryObjectivEXT:_glGetQueryObjectivEXT,glGetQueryObjectui64vEXT:_glGetQueryObjectui64vEXT,glGetQueryObjectuiv:_glGetQueryObjectuiv,glGetQueryObjectuivEXT:_glGetQueryObjectuivEXT,glGetQueryiv:_glGetQueryiv,glGetQueryivEXT:_glGetQueryivEXT,glGetRenderbufferParameteriv:_glGetRenderbufferParameteriv,glGetSamplerParameterfv:_glGetSamplerParameterfv,glGetSamplerParameteriv:_glGetSamplerParameteriv,glGetShaderInfoLog:_glGetShaderInfoLog,glGetShaderPrecisionFormat:_glGetShaderPrecisionFormat,glGetShaderSource:_glGetShaderSource,glGetShaderiv:_glGetShaderiv,glGetString:_glGetString,glGetStringi:_glGetStringi,glGetSynciv:_glGetSynciv,glGetTexParameterfv:_glGetTexParameterfv,glGetTexParameteriv:_glGetTexParameteriv,glGetTransformFeedbackVarying:_glGetTransformFeedbackVarying,glGetUniformBlockIndex:_glGetUniformBlockIndex,glGetUniformIndices:_glGetUniformIndices,glGetUniformLocation:_glGetUniformLocation,glGetUniformfv:_glGetUniformfv,glGetUniformiv:_glGetUniformiv,glGetUniformuiv:_glGetUniformuiv,glGetVertexAttribIiv:_glGetVertexAttribIiv,glGetVertexAttribIuiv:_glGetVertexAttribIuiv,glGetVertexAttribPointerv:_glGetVertexAttribPointerv,glGetVertexAttribfv:_glGetVertexAttribfv,glGetVertexAttribiv:_glGetVertexAttribiv,glHint:_glHint,glInvalidateFramebuffer:_glInvalidateFramebuffer,glInvalidateSubFramebuffer:_glInvalidateSubFramebuffer,glIsBuffer:_glIsBuffer,glIsEnabled:_glIsEnabled,glIsFramebuffer:_glIsFramebuffer,glIsProgram:_glIsProgram,glIsQuery:_glIsQuery,glIsQueryEXT:_glIsQueryEXT,glIsRenderbuffer:_glIsRenderbuffer,glIsSampler:_glIsSampler,glIsShader:_glIsShader,glIsSync:_glIsSync,glIsTexture:_glIsTexture,glIsTransformFeedback:_glIsTransformFeedback,glIsVertexArray:_glIsVertexArray,glIsVertexArrayOES:_glIsVertexArrayOES,glLineWidth:_glLineWidth,glLinkProgram:_glLinkProgram,glLoadIdentity:_glLoadIdentity,glMatrixMode:_glMatrixMode,glMultiDrawArrays:_glMultiDrawArrays,glMultiDrawArraysANGLE:_glMultiDrawArraysANGLE,glMultiDrawArraysInstancedANGLE:_glMultiDrawArraysInstancedANGLE,glMultiDrawArraysInstancedBaseInstanceANGLE:_glMultiDrawArraysInstancedBaseInstanceANGLE,glMultiDrawArraysInstancedBaseInstanceWEBGL:_glMultiDrawArraysInstancedBaseInstanceWEBGL,glMultiDrawArraysInstancedWEBGL:_glMultiDrawArraysInstancedWEBGL,glMultiDrawArraysWEBGL:_glMultiDrawArraysWEBGL,glMultiDrawElements:_glMultiDrawElements,glMultiDrawElementsANGLE:_glMultiDrawElementsANGLE,glMultiDrawElementsInstancedANGLE:_glMultiDrawElementsInstancedANGLE,glMultiDrawElementsInstancedBaseVertexBaseInstanceANGLE:_glMultiDrawElementsInstancedBaseVertexBaseInstanceANGLE,glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL:_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL,glMultiDrawElementsInstancedWEBGL:_glMultiDrawElementsInstancedWEBGL,glMultiDrawElementsWEBGL:_glMultiDrawElementsWEBGL,glPauseTransformFeedback:_glPauseTransformFeedback,glPixelStorei:_glPixelStorei,glPolygonModeWEBGL:_glPolygonModeWEBGL,glPolygonOffset:_glPolygonOffset,glPolygonOffsetClampEXT:_glPolygonOffsetClampEXT,glProgramBinary:_glProgramBinary,glProgramParameteri:_glProgramParameteri,glQueryCounterEXT:_glQueryCounterEXT,glReadBuffer:_glReadBuffer,glReadPixels:_glReadPixels,glReleaseShaderCompiler:_glReleaseShaderCompiler,glRenderbufferStorage:_glRenderbufferStorage,glRenderbufferStorageMultisample:_glRenderbufferStorageMultisample,glResumeTransformFeedback:_glResumeTransformFeedback,glSampleCoverage:_glSampleCoverage,glSamplerParameterf:_glSamplerParameterf,glSamplerParameterfv:_glSamplerParameterfv,glSamplerParameteri:_glSamplerParameteri,glSamplerParameteriv:_glSamplerParameteriv,glScissor:_glScissor,glShaderBinary:_glShaderBinary,glShaderSource:_glShaderSource,glStencilFunc:_glStencilFunc,glStencilFuncSeparate:_glStencilFuncSeparate,glStencilMask:_glStencilMask,glStencilMaskSeparate:_glStencilMaskSeparate,glStencilOp:_glStencilOp,glStencilOpSeparate:_glStencilOpSeparate,glTexImage2D:_glTexImage2D,glTexImage3D:_glTexImage3D,glTexParameterf:_glTexParameterf,glTexParameterfv:_glTexParameterfv,glTexParameteri:_glTexParameteri,glTexParameteriv:_glTexParameteriv,glTexStorage2D:_glTexStorage2D,glTexStorage3D:_glTexStorage3D,glTexSubImage2D:_glTexSubImage2D,glTexSubImage3D:_glTexSubImage3D,glTransformFeedbackVaryings:_glTransformFeedbackVaryings,glUniform1f:_glUniform1f,glUniform1fv:_glUniform1fv,glUniform1i:_glUniform1i,glUniform1iv:_glUniform1iv,glUniform1ui:_glUniform1ui,glUniform1uiv:_glUniform1uiv,glUniform2f:_glUniform2f,glUniform2fv:_glUniform2fv,glUniform2i:_glUniform2i,glUniform2iv:_glUniform2iv,glUniform2ui:_glUniform2ui,glUniform2uiv:_glUniform2uiv,glUniform3f:_glUniform3f,glUniform3fv:_glUniform3fv,glUniform3i:_glUniform3i,glUniform3iv:_glUniform3iv,glUniform3ui:_glUniform3ui,glUniform3uiv:_glUniform3uiv,glUniform4f:_glUniform4f,glUniform4fv:_glUniform4fv,glUniform4i:_glUniform4i,glUniform4iv:_glUniform4iv,glUniform4ui:_glUniform4ui,glUniform4uiv:_glUniform4uiv,glUniformBlockBinding:_glUniformBlockBinding,glUniformMatrix2fv:_glUniformMatrix2fv,glUniformMatrix2x3fv:_glUniformMatrix2x3fv,glUniformMatrix2x4fv:_glUniformMatrix2x4fv,glUniformMatrix3fv:_glUniformMatrix3fv,glUniformMatrix3x2fv:_glUniformMatrix3x2fv,glUniformMatrix3x4fv:_glUniformMatrix3x4fv,glUniformMatrix4fv:_glUniformMatrix4fv,glUniformMatrix4x2fv:_glUniformMatrix4x2fv,glUniformMatrix4x3fv:_glUniformMatrix4x3fv,glUseProgram:_glUseProgram,glValidateProgram:_glValidateProgram,glVertexAttrib1f:_glVertexAttrib1f,glVertexAttrib1fv:_glVertexAttrib1fv,glVertexAttrib2f:_glVertexAttrib2f,glVertexAttrib2fv:_glVertexAttrib2fv,glVertexAttrib3f:_glVertexAttrib3f,glVertexAttrib3fv:_glVertexAttrib3fv,glVertexAttrib4f:_glVertexAttrib4f,glVertexAttrib4fv:_glVertexAttrib4fv,glVertexAttribDivisor:_glVertexAttribDivisor,glVertexAttribDivisorANGLE:_glVertexAttribDivisorANGLE,glVertexAttribDivisorARB:_glVertexAttribDivisorARB,glVertexAttribDivisorEXT:_glVertexAttribDivisorEXT,glVertexAttribDivisorNV:_glVertexAttribDivisorNV,glVertexAttribI4i:_glVertexAttribI4i,glVertexAttribI4iv:_glVertexAttribI4iv,glVertexAttribI4ui:_glVertexAttribI4ui,glVertexAttribI4uiv:_glVertexAttribI4uiv,glVertexAttribIPointer:_glVertexAttribIPointer,glVertexAttribPointer:_glVertexAttribPointer,glVertexPointer:_glVertexPointer,glViewport:_glViewport,glWaitSync:_glWaitSync,invoke_v,invoke_vd,invoke_vi,invoke_vii,llvm_eh_typeid_for:_llvm_eh_typeid_for,proc_exit:_proc_exit,random_get:_random_get,setNetworkCallback:_setNetworkCallback,setprotoent:_setprotoent,stackAlloc:_stackAlloc,stackRestore:_stackRestore,stackSave:_stackSave,strptime:_strptime,strptime_l:_strptime_l};function invoke_v(t){var r=stackSave();try{getWasmTableEntry(t)()}catch(n){if(stackRestore(r),n!==n+0)throw n;_setThrew(1,0)}}function invoke_vd(t,r){var n=stackSave();try{getWasmTableEntry(t)(r)}catch(a){if(stackRestore(n),a!==a+0)throw a;_setThrew(1,0)}}function invoke_vii(t,r,n){var a=stackSave();try{getWasmTableEntry(t)(r,n)}catch(o){if(stackRestore(a),o!==o+0)throw o;_setThrew(1,0)}}function invoke_vi(t,r){var n=stackSave();try{getWasmTableEntry(t)(r)}catch(a){if(stackRestore(n),a!==a+0)throw a;_setThrew(1,0)}}var calledRun;function callMain(t=[]){assert(runDependencies==0,'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])'),assert(typeof onPreRuns>"u"||onPreRuns.length==0,"cannot call main when preRun functions remain to be called");var r=resolveGlobalSymbol("main").sym;if(r){t.unshift(thisProgram);var n=t.length,a=stackAlloc((n+1)*4),o=a;for(var l of t)HEAPU32[o>>2]=stringToUTF8OnStack(l),o+=4;HEAPU32[o>>2]=0;try{var c=r(n,a);return exitJS(c,!0),c}catch(_){return handleException(_)}}}function stackCheckInit(){_emscripten_stack_init(),writeStackCookie()}function run(t=arguments_){if(runDependencies>0){dependenciesFulfilled=run;return}if(stackCheckInit(),preRun(),runDependencies>0){dependenciesFulfilled=run;return}function r(){if(assert(!calledRun),calledRun=!0,Module.calledRun=!0,!ABORT){initRuntime(),preMain(),readyPromiseResolve?.(Module),Module.onRuntimeInitialized?.(),consumedModuleProp("onRuntimeInitialized");var n=Module.noInitialRun||!1;n||callMain(t),postRun()}}Module.setStatus?(Module.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>Module.setStatus(""),1),r()},1)):r(),checkStackCookie()}function checkUnflushedContent(){var t=out,r=err,n=!1;out=err=u=>{n=!0};try{_fflush(0);for(var a of["stdout","stderr"]){var o=FS.analyzePath("/dev/"+a);if(!o)return;var l=o.object,c=l.rdev,_=TTY.ttys[c];_?.output?.length&&(n=!0)}}catch{}out=t,err=r,n&&warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}var wasmExports;wasmExports=await createWasm(),run(),runtimeInitialized?moduleRtn=Module:moduleRtn=new Promise((t,r)=>{readyPromiseResolve=t,readyPromiseReject=r});for(const t of Object.keys(Module))t in moduleArg||Object.defineProperty(moduleArg,t,{configurable:!0,get(){abort(`Access to module property ('${t}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return moduleRtn}})();typeof exports=="object"&&typeof module=="object"?(module.exports=Module,module.exports.default=Module):typeof define=="function"&&define.amd&&define([],()=>Module);const __CJS__export_default__=(module.exports==null?{}:module.exports).default||module.exports,iceServers=[{urls:"stun:stun.relay.metered.ca:80"},{urls:"turn:standard.relay.metered.ca:80",username:"775036bccfb97412ac56ae8a",credential:"S0nMcJRAuceCFQqK"},{urls:"turn:standard.relay.metered.ca:80?transport=tcp",username:"775036bccfb97412ac56ae8a",credential:"S0nMcJRAuceCFQqK"},{urls:"turn:standard.relay.metered.ca:443",username:"775036bccfb97412ac56ae8a",credential:"S0nMcJRAuceCFQqK"},{urls:"turns:standard.relay.metered.ca:443?transport=tcp",username:"775036bccfb97412ac56ae8a",credential:"S0nMcJRAuceCFQqK"}];let hostId,cloudflareIce,_fdescriptor=100;const peers=new Map,channels=new Map,sockets=new Map,send_queue=new Map,recv_queue=[],VirtualNetworkWrapper=t=>{const r=new WebSocket("https://turch.in/cs"),n=(o,l,c,_)=>{const u=`${l.addr}:${l.port}`,p=new RTCPeerConnection({iceServers:cloudflareIce?[cloudflareIce,...iceServers]:iceServers}),d=p.createDataChannel(u,{maxRetransmits:0,ordered:!1});d.addEventListener("open",()=>{channels.set(o,d);do{const m=send_queue.get(u)?.shift();m&&d.send(m)}while(send_queue.get(u)?.length);_?.()}),d.addEventListener("message",async({data:m})=>recv_queue.push({addr:l,data:m instanceof Blob?await m.arrayBuffer():m})),d.addEventListener("closing",()=>channels.delete(o)),d.addEventListener("close",()=>channels.delete(o)),peers.set(c,p),p.addEventListener("icecandidate",({candidate:m})=>{m&&r.send(JSON.stringify({"pc:ice-candidate":{candidate:m,from:hostId,to:o}}))}),p.createOffer().then(m=>p.setLocalDescription(m)).then(()=>r.send(JSON.stringify({"pc:offer":{description:p.currentLocalDescription??p.localDescription,from:hostId,to:o}}))),p.addEventListener("connectionstatechange",()=>{switch(p.connectionState){case"failed":_?.(p.connectionState),p.restartIce();break;case"disconnected":case"closed":peers.delete(c);break}})},a=(o,l)=>{var c,_;return c=t._malloc(16),t.writeSockaddr(c,2,o,l),_=t._malloc(32),t.HEAP32[_+4>>2]=2,t.HEAP32[_+8>>2]=2,t.HEAP32[_+12>>2]=17,t.HEAPU32[_+24>>2]=0,t.HEAPU32[_+20>>2]=c,t.HEAP32[_+16>>2]=16,t.HEAP32[_+28>>2]=0,_};return t.preConnectToServer=o=>new Promise((l,c)=>{const _=`101.101.${o>>0&255}.${o>>8&255}`;n(o,{family:2,addr:_,port:27015},`${hostId}:${o}`,u=>{if(u)return c(u);l()})}),t.net={getHostId:()=>hostId,recvfrom:(o,l,c,_,u,p)=>{const d=recv_queue.shift();return d?(t.writeSockaddr(u,2,d.addr.addr,d.addr.port,p),t.HEAPU8.set(new Uint8Array(d.data),l),d.data.byteLength):(t.setValue(t.___errno_location(),73,"i32"),-1)},sendto:(o,l,c,_,u,p)=>{const d=t.readSockaddr(u,p),m=t.HEAPU8.subarray(l,l+c);if(d.addr==="255.255.255.255")return m.length;const[,,f,g]=d.addr.split(".",4).map(Number),E=f<<0|g<<8,x=`${hostId}:${E}`;if(peers.has(x)&&channels.has(E))return channels.get(E)?.send(m),m.length;const v=`${d.addr}:${d.port}`,h=send_queue.get(v)??[];return h.push(m.buffer.slice(m.byteOffset,m.byteOffset+m.byteLength)),send_queue.set(v,h),peers.has(x)||n(E,d,x),m.length},socket:(o,l,c)=>{const _=new Socket(o,l,c);return sockets.set(_.fd,_),_.fd},gethostbyname:o=>(console.log("net:gethostbyname",t.AsciiToString(o)),0),gethostname:(o,l)=>(t.writeArrayToMemory(t.intArrayFromString(`ololoken.${hostId}`,!0),o),0),getsockname:(o,l,c)=>{const _=sockets.get(o);return _?(t.writeSockaddr(l,_.family,_.daddr?.addr??"0.0.0.0",_.daddr?.port??0,c),0):-1},bind:(o,l,c)=>{const _=sockets.get(o);return _?(_.bind(t.readSockaddr(l,c)),0):-1},closesocket:o=>sockets.delete(o)?0:-1,getaddrinfo:(o,l,c,_)=>{const u=t.AsciiToString(o),[p,d]=u.split(".",2),m=Number(d);return t.HEAPU32[_>>2]=a(`101.101.${m>>0&255}.${m>>8&255}`,0),0},master:r},new Promise((o,l)=>{const c=()=>{l()};r.addEventListener("error",c),r.addEventListener("close",()=>{}),r.addEventListener("open",()=>{r.addEventListener("message",({data:_})=>{try{const u=JSON.parse(_);switch(!0){case"init"in u:hostId=u.init.id,cloudflareIce=u.init.iceServers,console.log(_),o();break;case"pc:ice-candidate"in u:{const{candidate:p,from:d,to:m}=u["pc:ice-candidate"];peers.get(`${m}:${d}`)?.addIceCandidate(p)}break;case"pc:offer"in u:{const{description:p,from:d,to:m}=u["pc:offer"],f=new RTCPeerConnection({iceServers:cloudflareIce?[cloudflareIce,...iceServers]:iceServers});peers.set(`${m}:${d}`,f),f.setRemoteDescription(p).then(()=>f.createAnswer()).then(g=>f.setLocalDescription(g)).then(()=>r.send(JSON.stringify({"pc:answer":{description:f.currentLocalDescription??f.localDescription,from:m,to:d}}))),f.addEventListener("connectionstatechange",()=>{switch(f.connectionState){case"failed":f.restartIce();break;case"closed":case"disconnected":peers.delete(`${m}:${d}`)}}),f.addEventListener("icecandidate",({candidate:g})=>{g&&r.send(JSON.stringify({"pc:ice-candidate":{candidate:g,from:m,to:d}}))}),f.addEventListener("datachannel",({channel:g})=>{channels.set(d,g);const E={addr:`101.101.${d>>0&255}.${d>>8&255}`,port:d,family:2};g.addEventListener("message",async({data:x})=>recv_queue.push({addr:E,data:x instanceof Blob?await x.arrayBuffer():x})),g.addEventListener("closing",()=>channels.delete(d)),g.addEventListener("close",()=>channels.delete(d))})}break;case"pc:answer"in u:{const{description:p,from:d,to:m}=u["pc:answer"];peers.get(`${m}:${d}`)?.setRemoteDescription(p)}break}}catch(u){console.error("bad server response",_,u)}})})})};class Socket{constructor(r,n,a){this.family=r,this.type=n,this.protocol=a,this.fdescriptor=_fdescriptor++}fdescriptor;bound=!1;daddr;get fd(){return this.fdescriptor}bind(r){this.bound=!0,this.daddr=r}}const ModuleInstance=({ENV:t,reportDownloadProgress:r,canvas:n,onExit:a,...o})=>{let l;return console.log(t),__CJS__export_default__(l={canvas:n,dynamicLibraries:["filesystem_stdio.wasm","/xash/filesystem_stdio.wasm",`${t.HOME}/filesystem_stdio.wasm`,"libref_webgl2.wasm","cl_dlls/client_emscripten_wasm32.wasm","dlls/cs_emscripten_wasm32.wasm","cstrike.wasm"],preRun:[()=>{Object.assign(l.ENV,t)},()=>{l.addRunDependency("fs-sync"),l.FS.mkdir(`${t.HOME}`),l.FS.mount(l.FS.filesystems.IDBFS,{root:"/"},`${t.HOME}`),l.FS.syncfs(!0,c=>{if(c)throw c;l.removeRunDependency("fs-sync")})},()=>{l.addRunDependency("net-not-ready"),VirtualNetworkWrapper(l).then().catch().finally(()=>l.removeRunDependency("net-not-ready"))}],noInitialRun:!0,onExit:a,locateFile:c=>{if(c.endsWith("xash.wasm"))return wasm;if(c.endsWith("filesystem_stdio.wasm"))return filesystem_stdio;if(c.endsWith("libref_webgl2.wasm"))return libref_webgl2;if(c.endsWith("client_emscripten_wasm32.wasm"))return client_emscripten_javascript;if(c.endsWith("cs_emscripten_wasm32.wasm"))return yapb_emscripten_javascript;if(c.endsWith("cstrike.wasm"))return cs_emscripten_wasm32;throw`Unknown file[${c}] is requested by xash.js module`},setStatus:c=>{if(c&&typeof c=="string"){const _=/(?<progress>\d+)\/(?<total>\d+)/ig;if(!_.test(c))return;_.lastIndex=0;const{groups:{progress:u,total:p}}=[...c.matchAll(_)][0]}},...o})},Context=reactExports.createContext(null);function useUniquePrefix(){const[t,r]=reactExports.useState(null);return reactExports.useEffect(()=>{r(`mui-p-${Math.round(Math.random()*1e5)}`)},[]),t}function TabContext(t){const{children:r,value:n}=t,a=useUniquePrefix(),o=reactExports.useMemo(()=>({idPrefix:a,value:n}),[a,n]);return jsxRuntimeExports.jsx(Context.Provider,{value:o,children:r})}function useTabContext(){return reactExports.useContext(Context)}function getPanelId(t,r){const{idPrefix:n}=t;return n===null?null:`${t.idPrefix}-P-${r}`}function getTabId(t,r){const{idPrefix:n}=t;return n===null?null:`${t.idPrefix}-T-${r}`}const TabList=reactExports.forwardRef(function t(r,n){const{children:a,...o}=r,l=useTabContext();if(l===null)throw new TypeError("No TabContext provided");const c=reactExports.Children.map(a,_=>reactExports.isValidElement(_)?reactExports.cloneElement(_,{"aria-controls":getPanelId(l,_.props.value),id:getTabId(l,_.props.value)}):null);return jsxRuntimeExports.jsx(Tabs,{...o,ref:n,value:l.value,children:c})});function getTabPanelUtilityClass(t){return generateUtilityClass("MuiTabPanel",t)}generateUtilityClasses("MuiTabPanel",["root","hidden"]);const useUtilityClasses=t=>{const{classes:r,hidden:n}=t;return composeClasses({root:["root",n&&"hidden"]},getTabPanelUtilityClass,r)},TabPanelRoot=styled$1("div",{name:"MuiTabPanel",slot:"Root"})(({theme:t})=>({padding:t.spacing(3)})),TabPanel=reactExports.forwardRef(function t(r,n){const a=useThemeProps({props:r,name:"MuiTabPanel"}),{children:o,className:l,value:c,keepMounted:_=!1,...u}=a,p={...a},d=useUtilityClasses(p),m=useTabContext();if(m===null)throw new TypeError("No TabContext provided");const f=getPanelId(m,c),g=getTabId(m,c);return jsxRuntimeExports.jsx(TabPanelRoot,{"aria-labelledby":g,className:clsx(d.root,l),hidden:c!==m.value,id:f,ref:n,role:"tabpanel",ownerState:p,...u,children:(_||c===m.value)&&o})}),MAX_BITS$1=15,D_CODES=30,BL_CODES=19,LENGTH_CODES=29,LITERALS=256,L_CODES=LITERALS+1+LENGTH_CODES,HEAP_SIZE=2*L_CODES+1,END_BLOCK=256,MAX_BL_BITS=7,REP_3_6=16,REPZ_3_10=17,REPZ_11_138=18,Buf_size=8*2,Z_DEFAULT_COMPRESSION=-1,Z_FILTERED=1,Z_HUFFMAN_ONLY=2,Z_DEFAULT_STRATEGY=0,Z_NO_FLUSH$1=0,Z_PARTIAL_FLUSH=1,Z_FULL_FLUSH=3,Z_FINISH$1=4,Z_OK$1=0,Z_STREAM_END$1=1,Z_NEED_DICT$1=2,Z_STREAM_ERROR$1=-2,Z_DATA_ERROR$1=-3,Z_BUF_ERROR$1=-5;function extractArray(t){return flatArray(t.map(([r,n])=>new Array(r).fill(n,0,r)))}function flatArray(t){return t.reduce((r,n)=>r.concat(Array.isArray(n)?flatArray(n):n),[])}const _dist_code=[0,1,2,3].concat(...extractArray([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function Tree(){const t=this;function r(o){const l=t.dyn_tree,c=t.stat_desc.static_tree,_=t.stat_desc.extra_bits,u=t.stat_desc.extra_base,p=t.stat_desc.max_length;let d,m,f,g,E,x,v=0;for(g=0;g<=MAX_BITS$1;g++)o.bl_count[g]=0;for(l[o.heap[o.heap_max]*2+1]=0,d=o.heap_max+1;d<HEAP_SIZE;d++)m=o.heap[d],g=l[l[m*2+1]*2+1]+1,g>p&&(g=p,v++),l[m*2+1]=g,!(m>t.max_code)&&(o.bl_count[g]++,E=0,m>=u&&(E=_[m-u]),x=l[m*2],o.opt_len+=x*(g+E),c&&(o.static_len+=x*(c[m*2+1]+E)));if(v!==0){do{for(g=p-1;o.bl_count[g]===0;)g--;o.bl_count[g]--,o.bl_count[g+1]+=2,o.bl_count[p]--,v-=2}while(v>0);for(g=p;g!==0;g--)for(m=o.bl_count[g];m!==0;)f=o.heap[--d],!(f>t.max_code)&&(l[f*2+1]!=g&&(o.opt_len+=(g-l[f*2+1])*l[f*2],l[f*2+1]=g),m--)}}function n(o,l){let c=0;do c|=o&1,o>>>=1,c<<=1;while(--l>0);return c>>>1}function a(o,l,c){const _=[];let u=0,p,d,m;for(p=1;p<=MAX_BITS$1;p++)_[p]=u=u+c[p-1]<<1;for(d=0;d<=l;d++)m=o[d*2+1],m!==0&&(o[d*2]=n(_[m]++,m))}t.build_tree=function(o){const l=t.dyn_tree,c=t.stat_desc.static_tree,_=t.stat_desc.elems;let u,p,d=-1,m;for(o.heap_len=0,o.heap_max=HEAP_SIZE,u=0;u<_;u++)l[u*2]!==0?(o.heap[++o.heap_len]=d=u,o.depth[u]=0):l[u*2+1]=0;for(;o.heap_len<2;)m=o.heap[++o.heap_len]=d<2?++d:0,l[m*2]=1,o.depth[m]=0,o.opt_len--,c&&(o.static_len-=c[m*2+1]);for(t.max_code=d,u=Math.floor(o.heap_len/2);u>=1;u--)o.pqdownheap(l,u);m=_;do u=o.heap[1],o.heap[1]=o.heap[o.heap_len--],o.pqdownheap(l,1),p=o.heap[1],o.heap[--o.heap_max]=u,o.heap[--o.heap_max]=p,l[m*2]=l[u*2]+l[p*2],o.depth[m]=Math.max(o.depth[u],o.depth[p])+1,l[u*2+1]=l[p*2+1]=m,o.heap[1]=m++,o.pqdownheap(l,1);while(o.heap_len>=2);o.heap[--o.heap_max]=o.heap[1],r(o),a(l,t.max_code,o.bl_count)}}Tree._length_code=[0,1,2,3,4,5,6,7].concat(...extractArray([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]]));Tree.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0];Tree.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576];Tree.d_code=function(t){return t<256?_dist_code[t]:_dist_code[256+(t>>>7)]};Tree.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];Tree.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];Tree.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];Tree.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function StaticTree(t,r,n,a,o){const l=this;l.static_tree=t,l.extra_bits=r,l.extra_base=n,l.elems=a,l.max_length=o}const static_ltree2_first_part=[12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227],static_ltree2_second_part=extractArray([[144,8],[112,9],[24,7],[8,8]]);StaticTree.static_ltree=flatArray(static_ltree2_first_part.map((t,r)=>[t,static_ltree2_second_part[r]]));const static_dtree_first_part=[0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23],static_dtree_second_part=extractArray([[30,5]]);StaticTree.static_dtree=flatArray(static_dtree_first_part.map((t,r)=>[t,static_dtree_second_part[r]]));StaticTree.static_l_desc=new StaticTree(StaticTree.static_ltree,Tree.extra_lbits,LITERALS+1,L_CODES,MAX_BITS$1);StaticTree.static_d_desc=new StaticTree(StaticTree.static_dtree,Tree.extra_dbits,0,D_CODES,MAX_BITS$1);StaticTree.static_bl_desc=new StaticTree(null,Tree.extra_blbits,0,BL_CODES,MAX_BL_BITS);const MAX_MEM_LEVEL=9,DEF_MEM_LEVEL=8;function Config(t,r,n,a,o){const l=this;l.good_length=t,l.max_lazy=r,l.nice_length=n,l.max_chain=a,l.func=o}const STORED$1=0,FAST=1,SLOW=2,config_table=[new Config(0,0,0,0,STORED$1),new Config(4,4,8,4,FAST),new Config(4,5,16,8,FAST),new Config(4,6,32,32,FAST),new Config(4,4,16,16,SLOW),new Config(8,16,32,32,SLOW),new Config(8,16,128,128,SLOW),new Config(8,32,128,256,SLOW),new Config(32,128,258,1024,SLOW),new Config(32,258,258,4096,SLOW)],z_errmsg=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],NeedMore=0,BlockDone=1,FinishStarted=2,FinishDone=3,PRESET_DICT$1=32,INIT_STATE=42,BUSY_STATE=113,FINISH_STATE=666,Z_DEFLATED$1=8,STORED_BLOCK=0,STATIC_TREES=1,DYN_TREES=2,MIN_MATCH=3,MAX_MATCH=258,MIN_LOOKAHEAD=MAX_MATCH+MIN_MATCH+1;function smaller(t,r,n,a){const o=t[r*2],l=t[n*2];return o<l||o==l&&a[r]<=a[n]}function Deflate(){const t=this;let r,n,a,o,l,c,_,u,p,d,m,f,g,E,x,v,h,b,S,y,T,A,w,C,L,k,P,I,F,H,O,R,M;const G=new Tree,U=new Tree,j=new Tree;t.depth=[];let V,$,Q,re,X,Y;t.bl_count=[],t.heap=[],O=[],R=[],M=[];function oe(){p=2*l,m[g-1]=0;for(let B=0;B<g-1;B++)m[B]=0;k=config_table[P].max_lazy,F=config_table[P].good_length,H=config_table[P].nice_length,L=config_table[P].max_chain,T=0,h=0,w=0,b=C=MIN_MATCH-1,y=0,f=0}function fe(){let B;for(B=0;B<L_CODES;B++)O[B*2]=0;for(B=0;B<D_CODES;B++)R[B*2]=0;for(B=0;B<BL_CODES;B++)M[B*2]=0;O[END_BLOCK*2]=1,t.opt_len=t.static_len=0,$=Q=0}function ve(){G.dyn_tree=O,G.stat_desc=StaticTree.static_l_desc,U.dyn_tree=R,U.stat_desc=StaticTree.static_d_desc,j.dyn_tree=M,j.stat_desc=StaticTree.static_bl_desc,X=0,Y=0,re=8,fe()}t.pqdownheap=function(B,D){const N=t.heap,W=N[D];let q=D<<1;for(;q<=t.heap_len&&(q<t.heap_len&&smaller(B,N[q+1],N[q],t.depth)&&q++,!smaller(B,W,N[q],t.depth));)N[D]=N[q],D=q,q<<=1;N[D]=W};function ne(B,D){let N=-1,W,q=B[0*2+1],te=0,Ee=7,De=4;q===0&&(Ee=138,De=3),B[(D+1)*2+1]=65535;for(let Se=0;Se<=D;Se++)W=q,q=B[(Se+1)*2+1],!(++te<Ee&&W==q)&&(te<De?M[W*2]+=te:W!==0?(W!=N&&M[W*2]++,M[REP_3_6*2]++):te<=10?M[REPZ_3_10*2]++:M[REPZ_11_138*2]++,te=0,N=W,q===0?(Ee=138,De=3):W==q?(Ee=6,De=3):(Ee=7,De=4))}function _e(){let B;for(ne(O,G.max_code),ne(R,U.max_code),j.build_tree(t),B=BL_CODES-1;B>=3&&M[Tree.bl_order[B]*2+1]===0;B--);return t.opt_len+=3*(B+1)+5+5+4,B}function Z(B){t.pending_buf[t.pending++]=B}function ge(B){Z(B&255),Z(B>>>8&255)}function ie(B){Z(B>>8&255),Z(B&255&255)}function le(B,D){let N;const W=D;Y>Buf_size-W?(N=B,X|=N<<Y&65535,ge(X),X=N>>>Buf_size-Y,Y+=W-Buf_size):(X|=B<<Y&65535,Y+=W)}function xe(B,D){const N=B*2;le(D[N]&65535,D[N+1]&65535)}function ce(B,D){let N,W=-1,q,te=B[0*2+1],Ee=0,De=7,Se=4;for(te===0&&(De=138,Se=3),N=0;N<=D;N++)if(q=te,te=B[(N+1)*2+1],!(++Ee<De&&q==te)){if(Ee<Se)do xe(q,M);while(--Ee!==0);else q!==0?(q!=W&&(xe(q,M),Ee--),xe(REP_3_6,M),le(Ee-3,2)):Ee<=10?(xe(REPZ_3_10,M),le(Ee-3,3)):(xe(REPZ_11_138,M),le(Ee-11,7));Ee=0,W=q,te===0?(De=138,Se=3):q==te?(De=6,Se=3):(De=7,Se=4)}}function ye(B,D,N){let W;for(le(B-257,5),le(D-1,5),le(N-4,4),W=0;W<N;W++)le(M[Tree.bl_order[W]*2+1],3);ce(O,B-1),ce(R,D-1)}function ke(){Y==16?(ge(X),X=0,Y=0):Y>=8&&(Z(X&255),X>>>=8,Y-=8)}function Ae(){le(STATIC_TREES<<1,3),xe(END_BLOCK,StaticTree.static_ltree),ke(),1+re+10-Y<9&&(le(STATIC_TREES<<1,3),xe(END_BLOCK,StaticTree.static_ltree),ke()),re=7}function he(B,D){let N,W,q;if(t.dist_buf[$]=B,t.lc_buf[$]=D&255,$++,B===0?O[D*2]++:(Q++,B--,O[(Tree._length_code[D]+LITERALS+1)*2]++,R[Tree.d_code(B)*2]++),($&8191)===0&&P>2){for(N=$*8,W=T-h,q=0;q<D_CODES;q++)N+=R[q*2]*(5+Tree.extra_dbits[q]);if(N>>>=3,Q<Math.floor($/2)&&N<Math.floor(W/2))return!0}return $==V-1}function Re(B,D){let N,W,q=0,te,Ee;if($!==0)do N=t.dist_buf[q],W=t.lc_buf[q],q++,N===0?xe(W,B):(te=Tree._length_code[W],xe(te+LITERALS+1,B),Ee=Tree.extra_lbits[te],Ee!==0&&(W-=Tree.base_length[te],le(W,Ee)),N--,te=Tree.d_code(N),xe(te,D),Ee=Tree.extra_dbits[te],Ee!==0&&(N-=Tree.base_dist[te],le(N,Ee)));while(q<$);xe(END_BLOCK,B),re=B[END_BLOCK*2+1]}function Fe(){Y>8?ge(X):Y>0&&Z(X&255),X=0,Y=0}function we(B,D,N){Fe(),re=8,ge(D),ge(~D),t.pending_buf.set(u.subarray(B,B+D),t.pending),t.pending+=D}function z(B,D,N){le((STORED_BLOCK<<1)+(N?1:0),3),we(B,D)}function K(B,D,N){let W,q,te=0;P>0?(G.build_tree(t),U.build_tree(t),te=_e(),W=t.opt_len+3+7>>>3,q=t.static_len+3+7>>>3,q<=W&&(W=q)):W=q=D+5,D+4<=W&&B!=-1?z(B,D,N):q==W?(le((STATIC_TREES<<1)+(N?1:0),3),Re(StaticTree.static_ltree,StaticTree.static_dtree)):(le((DYN_TREES<<1)+(N?1:0),3),ye(G.max_code+1,U.max_code+1,te+1),Re(O,R)),fe(),N&&Fe()}function ee(B){K(h>=0?h:-1,T-h,B),h=T,r.flush_pending()}function ue(){let B,D,N,W;do{if(W=p-w-T,W===0&&T===0&&w===0)W=l;else if(W==-1)W--;else if(T>=l+l-MIN_LOOKAHEAD){u.set(u.subarray(l,l+l),0),A-=l,T-=l,h-=l,B=g,N=B;do D=m[--N]&65535,m[N]=D>=l?D-l:0;while(--B!==0);B=l,N=B;do D=d[--N]&65535,d[N]=D>=l?D-l:0;while(--B!==0);W+=l}if(r.avail_in===0)return;B=r.read_buf(u,T+w,W),w+=B,w>=MIN_MATCH&&(f=u[T]&255,f=(f<<v^u[T+1]&255)&x)}while(w<MIN_LOOKAHEAD&&r.avail_in!==0)}function de(B){let D=65535,N;for(D>a-5&&(D=a-5);;){if(w<=1){if(ue(),w===0&&B==Z_NO_FLUSH$1)return NeedMore;if(w===0)break}if(T+=w,w=0,N=h+D,(T===0||T>=N)&&(w=T-N,T=N,ee(!1),r.avail_out===0)||T-h>=l-MIN_LOOKAHEAD&&(ee(!1),r.avail_out===0))return NeedMore}return ee(B==Z_FINISH$1),r.avail_out===0?B==Z_FINISH$1?FinishStarted:NeedMore:B==Z_FINISH$1?FinishDone:BlockDone}function ae(B){let D=L,N=T,W,q,te=C;const Ee=T>l-MIN_LOOKAHEAD?T-(l-MIN_LOOKAHEAD):0;let De=H;const Se=_,Ie=T+MAX_MATCH;let Oe=u[N+te-1],Be=u[N+te];C>=F&&(D>>=2),De>w&&(De=w);do if(W=B,!(u[W+te]!=Be||u[W+te-1]!=Oe||u[W]!=u[N]||u[++W]!=u[N+1])){N+=2,W++;do;while(u[++N]==u[++W]&&u[++N]==u[++W]&&u[++N]==u[++W]&&u[++N]==u[++W]&&u[++N]==u[++W]&&u[++N]==u[++W]&&u[++N]==u[++W]&&u[++N]==u[++W]&&N<Ie);if(q=MAX_MATCH-(Ie-N),N=Ie-MAX_MATCH,q>te){if(A=B,te=q,q>=De)break;Oe=u[N+te-1],Be=u[N+te]}}while((B=d[B&Se]&65535)>Ee&&--D!==0);return te<=w?te:w}function se(B){let D=0,N;for(;;){if(w<MIN_LOOKAHEAD){if(ue(),w<MIN_LOOKAHEAD&&B==Z_NO_FLUSH$1)return NeedMore;if(w===0)break}if(w>=MIN_MATCH&&(f=(f<<v^u[T+(MIN_MATCH-1)]&255)&x,D=m[f]&65535,d[T&_]=m[f],m[f]=T),D!==0&&(T-D&65535)<=l-MIN_LOOKAHEAD&&I!=Z_HUFFMAN_ONLY&&(b=ae(D)),b>=MIN_MATCH)if(N=he(T-A,b-MIN_MATCH),w-=b,b<=k&&w>=MIN_MATCH){b--;do T++,f=(f<<v^u[T+(MIN_MATCH-1)]&255)&x,D=m[f]&65535,d[T&_]=m[f],m[f]=T;while(--b!==0);T++}else T+=b,b=0,f=u[T]&255,f=(f<<v^u[T+1]&255)&x;else N=he(0,u[T]&255),w--,T++;if(N&&(ee(!1),r.avail_out===0))return NeedMore}return ee(B==Z_FINISH$1),r.avail_out===0?B==Z_FINISH$1?FinishStarted:NeedMore:B==Z_FINISH$1?FinishDone:BlockDone}function Le(B){let D=0,N,W;for(;;){if(w<MIN_LOOKAHEAD){if(ue(),w<MIN_LOOKAHEAD&&B==Z_NO_FLUSH$1)return NeedMore;if(w===0)break}if(w>=MIN_MATCH&&(f=(f<<v^u[T+(MIN_MATCH-1)]&255)&x,D=m[f]&65535,d[T&_]=m[f],m[f]=T),C=b,S=A,b=MIN_MATCH-1,D!==0&&C<k&&(T-D&65535)<=l-MIN_LOOKAHEAD&&(I!=Z_HUFFMAN_ONLY&&(b=ae(D)),b<=5&&(I==Z_FILTERED||b==MIN_MATCH&&T-A>4096)&&(b=MIN_MATCH-1)),C>=MIN_MATCH&&b<=C){W=T+w-MIN_MATCH,N=he(T-1-S,C-MIN_MATCH),w-=C-1,C-=2;do++T<=W&&(f=(f<<v^u[T+(MIN_MATCH-1)]&255)&x,D=m[f]&65535,d[T&_]=m[f],m[f]=T);while(--C!==0);if(y=0,b=MIN_MATCH-1,T++,N&&(ee(!1),r.avail_out===0))return NeedMore}else if(y!==0){if(N=he(0,u[T-1]&255),N&&ee(!1),T++,w--,r.avail_out===0)return NeedMore}else y=1,T++,w--}return y!==0&&(N=he(0,u[T-1]&255),y=0),ee(B==Z_FINISH$1),r.avail_out===0?B==Z_FINISH$1?FinishStarted:NeedMore:B==Z_FINISH$1?FinishDone:BlockDone}function Te(B){return B.total_in=B.total_out=0,B.msg=null,t.pending=0,t.pending_out=0,n=BUSY_STATE,o=Z_NO_FLUSH$1,ve(),oe(),Z_OK$1}t.deflateInit=function(B,D,N,W,q,te){return W||(W=Z_DEFLATED$1),q||(q=DEF_MEM_LEVEL),te||(te=Z_DEFAULT_STRATEGY),B.msg=null,D==Z_DEFAULT_COMPRESSION&&(D=6),q<1||q>MAX_MEM_LEVEL||W!=Z_DEFLATED$1||N<9||N>15||D<0||D>9||te<0||te>Z_HUFFMAN_ONLY?Z_STREAM_ERROR$1:(B.dstate=t,c=N,l=1<<c,_=l-1,E=q+7,g=1<<E,x=g-1,v=Math.floor((E+MIN_MATCH-1)/MIN_MATCH),u=new Uint8Array(l*2),d=[],m=[],V=1<<q+6,t.pending_buf=new Uint8Array(V*4),a=V*4,t.dist_buf=new Uint16Array(V),t.lc_buf=new Uint8Array(V),P=D,I=te,Te(B))},t.deflateEnd=function(){return n!=INIT_STATE&&n!=BUSY_STATE&&n!=FINISH_STATE?Z_STREAM_ERROR$1:(t.lc_buf=null,t.dist_buf=null,t.pending_buf=null,m=null,d=null,u=null,t.dstate=null,n==BUSY_STATE?Z_DATA_ERROR$1:Z_OK$1)},t.deflateParams=function(B,D,N){let W=Z_OK$1;return D==Z_DEFAULT_COMPRESSION&&(D=6),D<0||D>9||N<0||N>Z_HUFFMAN_ONLY?Z_STREAM_ERROR$1:(config_table[P].func!=config_table[D].func&&B.total_in!==0&&(W=B.deflate(Z_PARTIAL_FLUSH)),P!=D&&(P=D,k=config_table[P].max_lazy,F=config_table[P].good_length,H=config_table[P].nice_length,L=config_table[P].max_chain),I=N,W)},t.deflateSetDictionary=function(B,D,N){let W=N,q,te=0;if(!D||n!=INIT_STATE)return Z_STREAM_ERROR$1;if(W<MIN_MATCH)return Z_OK$1;for(W>l-MIN_LOOKAHEAD&&(W=l-MIN_LOOKAHEAD,te=N-W),u.set(D.subarray(te,te+W),0),T=W,h=W,f=u[0]&255,f=(f<<v^u[1]&255)&x,q=0;q<=W-MIN_MATCH;q++)f=(f<<v^u[q+(MIN_MATCH-1)]&255)&x,d[q&_]=m[f],m[f]=q;return Z_OK$1},t.deflate=function(B,D){let N,W,q,te,Ee;if(D>Z_FINISH$1||D<0)return Z_STREAM_ERROR$1;if(!B.next_out||!B.next_in&&B.avail_in!==0||n==FINISH_STATE&&D!=Z_FINISH$1)return B.msg=z_errmsg[Z_NEED_DICT$1-Z_STREAM_ERROR$1],Z_STREAM_ERROR$1;if(B.avail_out===0)return B.msg=z_errmsg[Z_NEED_DICT$1-Z_BUF_ERROR$1],Z_BUF_ERROR$1;if(r=B,te=o,o=D,n==INIT_STATE&&(W=Z_DEFLATED$1+(c-8<<4)<<8,q=(P-1&255)>>1,q>3&&(q=3),W|=q<<6,T!==0&&(W|=PRESET_DICT$1),W+=31-W%31,n=BUSY_STATE,ie(W)),t.pending!==0){if(r.flush_pending(),r.avail_out===0)return o=-1,Z_OK$1}else if(r.avail_in===0&&D<=te&&D!=Z_FINISH$1)return r.msg=z_errmsg[Z_NEED_DICT$1-Z_BUF_ERROR$1],Z_BUF_ERROR$1;if(n==FINISH_STATE&&r.avail_in!==0)return B.msg=z_errmsg[Z_NEED_DICT$1-Z_BUF_ERROR$1],Z_BUF_ERROR$1;if(r.avail_in!==0||w!==0||D!=Z_NO_FLUSH$1&&n!=FINISH_STATE){switch(Ee=-1,config_table[P].func){case STORED$1:Ee=de(D);break;case FAST:Ee=se(D);break;case SLOW:Ee=Le(D);break}if((Ee==FinishStarted||Ee==FinishDone)&&(n=FINISH_STATE),Ee==NeedMore||Ee==FinishStarted)return r.avail_out===0&&(o=-1),Z_OK$1;if(Ee==BlockDone){if(D==Z_PARTIAL_FLUSH)Ae();else if(z(0,0,!1),D==Z_FULL_FLUSH)for(N=0;N<g;N++)m[N]=0;if(r.flush_pending(),r.avail_out===0)return o=-1,Z_OK$1}}return D!=Z_FINISH$1?Z_OK$1:Z_STREAM_END$1}}function ZStream$1(){const t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0}ZStream$1.prototype={deflateInit(t,r){const n=this;return n.dstate=new Deflate,r||(r=MAX_BITS$1),n.dstate.deflateInit(n,t,r)},deflate(t){const r=this;return r.dstate?r.dstate.deflate(r,t):Z_STREAM_ERROR$1},deflateEnd(){const t=this;if(!t.dstate)return Z_STREAM_ERROR$1;const r=t.dstate.deflateEnd();return t.dstate=null,r},deflateParams(t,r){const n=this;return n.dstate?n.dstate.deflateParams(n,t,r):Z_STREAM_ERROR$1},deflateSetDictionary(t,r){const n=this;return n.dstate?n.dstate.deflateSetDictionary(n,t,r):Z_STREAM_ERROR$1},read_buf(t,r,n){const a=this;let o=a.avail_in;return o>n&&(o=n),o===0?0:(a.avail_in-=o,t.set(a.next_in.subarray(a.next_in_index,a.next_in_index+o),r),a.next_in_index+=o,a.total_in+=o,o)},flush_pending(){const t=this;let r=t.dstate.pending;r>t.avail_out&&(r=t.avail_out),r!==0&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+r),t.next_out_index),t.next_out_index+=r,t.dstate.pending_out+=r,t.total_out+=r,t.avail_out-=r,t.dstate.pending-=r,t.dstate.pending===0&&(t.dstate.pending_out=0))}};function ZipDeflate(t){const r=this,n=new ZStream$1,a=getMaximumCompressedSize(t&&t.chunkSize?t.chunkSize:64*1024),o=Z_NO_FLUSH$1,l=new Uint8Array(a);let c=t?t.level:Z_DEFAULT_COMPRESSION;typeof c>"u"&&(c=Z_DEFAULT_COMPRESSION),n.deflateInit(c),n.next_out=l,r.append=function(_,u){let p,d,m=0,f=0,g=0;const E=[];if(_.length){n.next_in_index=0,n.next_in=_,n.avail_in=_.length;do{if(n.next_out_index=0,n.avail_out=a,p=n.deflate(o),p!=Z_OK$1)throw new Error("deflating: "+n.msg);n.next_out_index&&(n.next_out_index==a?E.push(new Uint8Array(l)):E.push(l.subarray(0,n.next_out_index))),g+=n.next_out_index,u&&n.next_in_index>0&&n.next_in_index!=m&&(u(n.next_in_index),m=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return E.length>1?(d=new Uint8Array(g),E.forEach(function(x){d.set(x,f),f+=x.length})):d=E[0]?new Uint8Array(E[0]):new Uint8Array,d}},r.flush=function(){let _,u,p=0,d=0;const m=[];do{if(n.next_out_index=0,n.avail_out=a,_=n.deflate(Z_FINISH$1),_!=Z_STREAM_END$1&&_!=Z_OK$1)throw new Error("deflating: "+n.msg);a-n.avail_out>0&&m.push(l.slice(0,n.next_out_index)),d+=n.next_out_index}while(n.avail_in>0||n.avail_out===0);return n.deflateEnd(),u=new Uint8Array(d),m.forEach(function(f){u.set(f,p),p+=f.length}),u}}function getMaximumCompressedSize(t){return t+5*(Math.floor(t/16383)+1)}const MAX_BITS=15,Z_OK=0,Z_STREAM_END=1,Z_NEED_DICT=2,Z_STREAM_ERROR=-2,Z_DATA_ERROR=-3,Z_MEM_ERROR=-4,Z_BUF_ERROR=-5,inflate_mask=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],MANY=1440,Z_NO_FLUSH=0,Z_FINISH=4,fixed_bl=9,fixed_bd=5,fixed_tl=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],fixed_td=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],cplens=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],cplext=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],cpdist=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],cpdext=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],BMAX=15;function InfTree(){const t=this;let r,n,a,o,l,c;function _(p,d,m,f,g,E,x,v,h,b,S){let y,T,A,w,C,L,k,P,I,F,H,O,R,M,G;F=0,C=m;do a[p[d+F]]++,F++,C--;while(C!==0);if(a[0]==m)return x[0]=-1,v[0]=0,Z_OK;for(P=v[0],L=1;L<=BMAX&&a[L]===0;L++);for(k=L,P<L&&(P=L),C=BMAX;C!==0&&a[C]===0;C--);for(A=C,P>C&&(P=C),v[0]=P,M=1<<L;L<C;L++,M<<=1)if((M-=a[L])<0)return Z_DATA_ERROR;if((M-=a[C])<0)return Z_DATA_ERROR;for(a[C]+=M,c[1]=L=0,F=1,R=2;--C!==0;)c[R]=L+=a[F],R++,F++;C=0,F=0;do(L=p[d+F])!==0&&(S[c[L]++]=C),F++;while(++C<m);for(m=c[A],c[0]=C=0,F=0,w=-1,O=-P,l[0]=0,H=0,G=0;k<=A;k++)for(y=a[k];y--!==0;){for(;k>O+P;){if(w++,O+=P,G=A-O,G=G>P?P:G,(T=1<<(L=k-O))>y+1&&(T-=y+1,R=k,L<G))for(;++L<G&&!((T<<=1)<=a[++R]);)T-=a[R];if(G=1<<L,b[0]+G>MANY)return Z_DATA_ERROR;l[w]=H=b[0],b[0]+=G,w!==0?(c[w]=C,o[0]=L,o[1]=P,L=C>>>O-P,o[2]=H-l[w-1]-L,h.set(o,(l[w-1]+L)*3)):x[0]=H}for(o[1]=k-O,F>=m?o[0]=192:S[F]<f?(o[0]=S[F]<256?0:96,o[2]=S[F++]):(o[0]=E[S[F]-f]+16+64,o[2]=g[S[F++]-f]),T=1<<k-O,L=C>>>O;L<G;L+=T)h.set(o,(H+L)*3);for(L=1<<k-1;(C&L)!==0;L>>>=1)C^=L;for(C^=L,I=(1<<O)-1;(C&I)!=c[w];)w--,O-=P,I=(1<<O)-1}return M!==0&&A!=1?Z_BUF_ERROR:Z_OK}function u(p){let d;for(r||(r=[],n=[],a=new Int32Array(BMAX+1),o=[],l=new Int32Array(BMAX),c=new Int32Array(BMAX+1)),n.length<p&&(n=[]),d=0;d<p;d++)n[d]=0;for(d=0;d<BMAX+1;d++)a[d]=0;for(d=0;d<3;d++)o[d]=0;l.set(a.subarray(0,BMAX),0),c.set(a.subarray(0,BMAX+1),0)}t.inflate_trees_bits=function(p,d,m,f,g){let E;return u(19),r[0]=0,E=_(p,0,19,19,null,null,m,d,f,r,n),E==Z_DATA_ERROR?g.msg="oversubscribed dynamic bit lengths tree":(E==Z_BUF_ERROR||d[0]===0)&&(g.msg="incomplete dynamic bit lengths tree",E=Z_DATA_ERROR),E},t.inflate_trees_dynamic=function(p,d,m,f,g,E,x,v,h){let b;return u(288),r[0]=0,b=_(m,0,p,257,cplens,cplext,E,f,v,r,n),b!=Z_OK||f[0]===0?(b==Z_DATA_ERROR?h.msg="oversubscribed literal/length tree":b!=Z_MEM_ERROR&&(h.msg="incomplete literal/length tree",b=Z_DATA_ERROR),b):(u(288),b=_(m,p,d,0,cpdist,cpdext,x,g,v,r,n),b!=Z_OK||g[0]===0&&p>257?(b==Z_DATA_ERROR?h.msg="oversubscribed distance tree":b==Z_BUF_ERROR?(h.msg="incomplete distance tree",b=Z_DATA_ERROR):b!=Z_MEM_ERROR&&(h.msg="empty distance tree with lengths",b=Z_DATA_ERROR),b):Z_OK)}}InfTree.inflate_trees_fixed=function(t,r,n,a){return t[0]=fixed_bl,r[0]=fixed_bd,n[0]=fixed_tl,a[0]=fixed_td,Z_OK};const START=0,LEN=1,LENEXT=2,DIST=3,DISTEXT=4,COPY=5,LIT=6,WASH=7,END=8,BADCODE=9;function InfCodes(){const t=this;let r,n=0,a,o=0,l=0,c=0,_=0,u=0,p=0,d=0,m,f=0,g,E=0;function x(v,h,b,S,y,T,A,w){let C,L,k,P,I,F,H,O,R,M,G,U,j,V,$,Q;H=w.next_in_index,O=w.avail_in,I=A.bitb,F=A.bitk,R=A.write,M=R<A.read?A.read-R-1:A.end-R,G=inflate_mask[v],U=inflate_mask[h];do{for(;F<20;)O--,I|=(w.read_byte(H++)&255)<<F,F+=8;if(C=I&G,L=b,k=S,Q=(k+C)*3,(P=L[Q])===0){I>>=L[Q+1],F-=L[Q+1],A.win[R++]=L[Q+2],M--;continue}do{if(I>>=L[Q+1],F-=L[Q+1],(P&16)!==0){for(P&=15,j=L[Q+2]+(I&inflate_mask[P]),I>>=P,F-=P;F<15;)O--,I|=(w.read_byte(H++)&255)<<F,F+=8;C=I&U,L=y,k=T,Q=(k+C)*3,P=L[Q];do if(I>>=L[Q+1],F-=L[Q+1],(P&16)!==0){for(P&=15;F<P;)O--,I|=(w.read_byte(H++)&255)<<F,F+=8;if(V=L[Q+2]+(I&inflate_mask[P]),I>>=P,F-=P,M-=j,R>=V)$=R-V,R-$>0&&2>R-$?(A.win[R++]=A.win[$++],A.win[R++]=A.win[$++],j-=2):(A.win.set(A.win.subarray($,$+2),R),R+=2,$+=2,j-=2);else{$=R-V;do $+=A.end;while($<0);if(P=A.end-$,j>P){if(j-=P,R-$>0&&P>R-$)do A.win[R++]=A.win[$++];while(--P!==0);else A.win.set(A.win.subarray($,$+P),R),R+=P,$+=P,P=0;$=0}}if(R-$>0&&j>R-$)do A.win[R++]=A.win[$++];while(--j!==0);else A.win.set(A.win.subarray($,$+j),R),R+=j,$+=j,j=0;break}else if((P&64)===0)C+=L[Q+2],C+=I&inflate_mask[P],Q=(k+C)*3,P=L[Q];else return w.msg="invalid distance code",j=w.avail_in-O,j=F>>3<j?F>>3:j,O+=j,H-=j,F-=j<<3,A.bitb=I,A.bitk=F,w.avail_in=O,w.total_in+=H-w.next_in_index,w.next_in_index=H,A.write=R,Z_DATA_ERROR;while(!0);break}if((P&64)===0){if(C+=L[Q+2],C+=I&inflate_mask[P],Q=(k+C)*3,(P=L[Q])===0){I>>=L[Q+1],F-=L[Q+1],A.win[R++]=L[Q+2],M--;break}}else return(P&32)!==0?(j=w.avail_in-O,j=F>>3<j?F>>3:j,O+=j,H-=j,F-=j<<3,A.bitb=I,A.bitk=F,w.avail_in=O,w.total_in+=H-w.next_in_index,w.next_in_index=H,A.write=R,Z_STREAM_END):(w.msg="invalid literal/length code",j=w.avail_in-O,j=F>>3<j?F>>3:j,O+=j,H-=j,F-=j<<3,A.bitb=I,A.bitk=F,w.avail_in=O,w.total_in+=H-w.next_in_index,w.next_in_index=H,A.write=R,Z_DATA_ERROR)}while(!0)}while(M>=258&&O>=10);return j=w.avail_in-O,j=F>>3<j?F>>3:j,O+=j,H-=j,F-=j<<3,A.bitb=I,A.bitk=F,w.avail_in=O,w.total_in+=H-w.next_in_index,w.next_in_index=H,A.write=R,Z_OK}t.init=function(v,h,b,S,y,T){r=START,p=v,d=h,m=b,f=S,g=y,E=T,a=null},t.proc=function(v,h,b){let S,y,T,A=0,w=0,C=0,L,k,P,I;for(C=h.next_in_index,L=h.avail_in,A=v.bitb,w=v.bitk,k=v.write,P=k<v.read?v.read-k-1:v.end-k;;)switch(r){case START:if(P>=258&&L>=10&&(v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,b=x(p,d,m,f,g,E,v,h),C=h.next_in_index,L=h.avail_in,A=v.bitb,w=v.bitk,k=v.write,P=k<v.read?v.read-k-1:v.end-k,b!=Z_OK)){r=b==Z_STREAM_END?WASH:BADCODE;break}l=p,a=m,o=f,r=LEN;case LEN:for(S=l;w<S;){if(L!==0)b=Z_OK;else return v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,v.inflate_flush(h,b);L--,A|=(h.read_byte(C++)&255)<<w,w+=8}if(y=(o+(A&inflate_mask[S]))*3,A>>>=a[y+1],w-=a[y+1],T=a[y],T===0){c=a[y+2],r=LIT;break}if((T&16)!==0){_=T&15,n=a[y+2],r=LENEXT;break}if((T&64)===0){l=T,o=y/3+a[y+2];break}if((T&32)!==0){r=WASH;break}return r=BADCODE,h.msg="invalid literal/length code",b=Z_DATA_ERROR,v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,v.inflate_flush(h,b);case LENEXT:for(S=_;w<S;){if(L!==0)b=Z_OK;else return v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,v.inflate_flush(h,b);L--,A|=(h.read_byte(C++)&255)<<w,w+=8}n+=A&inflate_mask[S],A>>=S,w-=S,l=d,a=g,o=E,r=DIST;case DIST:for(S=l;w<S;){if(L!==0)b=Z_OK;else return v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,v.inflate_flush(h,b);L--,A|=(h.read_byte(C++)&255)<<w,w+=8}if(y=(o+(A&inflate_mask[S]))*3,A>>=a[y+1],w-=a[y+1],T=a[y],(T&16)!==0){_=T&15,u=a[y+2],r=DISTEXT;break}if((T&64)===0){l=T,o=y/3+a[y+2];break}return r=BADCODE,h.msg="invalid distance code",b=Z_DATA_ERROR,v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,v.inflate_flush(h,b);case DISTEXT:for(S=_;w<S;){if(L!==0)b=Z_OK;else return v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,v.inflate_flush(h,b);L--,A|=(h.read_byte(C++)&255)<<w,w+=8}u+=A&inflate_mask[S],A>>=S,w-=S,r=COPY;case COPY:for(I=k-u;I<0;)I+=v.end;for(;n!==0;){if(P===0&&(k==v.end&&v.read!==0&&(k=0,P=k<v.read?v.read-k-1:v.end-k),P===0&&(v.write=k,b=v.inflate_flush(h,b),k=v.write,P=k<v.read?v.read-k-1:v.end-k,k==v.end&&v.read!==0&&(k=0,P=k<v.read?v.read-k-1:v.end-k),P===0)))return v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,v.inflate_flush(h,b);v.win[k++]=v.win[I++],P--,I==v.end&&(I=0),n--}r=START;break;case LIT:if(P===0&&(k==v.end&&v.read!==0&&(k=0,P=k<v.read?v.read-k-1:v.end-k),P===0&&(v.write=k,b=v.inflate_flush(h,b),k=v.write,P=k<v.read?v.read-k-1:v.end-k,k==v.end&&v.read!==0&&(k=0,P=k<v.read?v.read-k-1:v.end-k),P===0)))return v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,v.inflate_flush(h,b);b=Z_OK,v.win[k++]=c,P--,r=START;break;case WASH:if(w>7&&(w-=8,L++,C--),v.write=k,b=v.inflate_flush(h,b),k=v.write,P=k<v.read?v.read-k-1:v.end-k,v.read!=v.write)return v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,v.inflate_flush(h,b);r=END;case END:return b=Z_STREAM_END,v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,v.inflate_flush(h,b);case BADCODE:return b=Z_DATA_ERROR,v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,v.inflate_flush(h,b);default:return b=Z_STREAM_ERROR,v.bitb=A,v.bitk=w,h.avail_in=L,h.total_in+=C-h.next_in_index,h.next_in_index=C,v.write=k,v.inflate_flush(h,b)}},t.free=function(){}}const border=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],TYPE=0,LENS=1,STORED=2,TABLE=3,BTREE=4,DTREE=5,CODES=6,DRY=7,DONELOCKS=8,BADBLOCKS=9;function InfBlocks(t,r){const n=this;let a=TYPE,o=0,l=0,c=0,_;const u=[0],p=[0],d=new InfCodes;let m=0,f=new Int32Array(MANY*3);const g=0,E=new InfTree;n.bitk=0,n.bitb=0,n.win=new Uint8Array(r),n.end=r,n.read=0,n.write=0,n.reset=function(x,v){v&&(v[0]=g),a==CODES&&d.free(x),a=TYPE,n.bitk=0,n.bitb=0,n.read=n.write=0},n.reset(t,null),n.inflate_flush=function(x,v){let h,b,S;return b=x.next_out_index,S=n.read,h=(S<=n.write?n.write:n.end)-S,h>x.avail_out&&(h=x.avail_out),h!==0&&v==Z_BUF_ERROR&&(v=Z_OK),x.avail_out-=h,x.total_out+=h,x.next_out.set(n.win.subarray(S,S+h),b),b+=h,S+=h,S==n.end&&(S=0,n.write==n.end&&(n.write=0),h=n.write-S,h>x.avail_out&&(h=x.avail_out),h!==0&&v==Z_BUF_ERROR&&(v=Z_OK),x.avail_out-=h,x.total_out+=h,x.next_out.set(n.win.subarray(S,S+h),b),b+=h,S+=h),x.next_out_index=b,n.read=S,v},n.proc=function(x,v){let h,b,S,y,T,A,w,C;for(y=x.next_in_index,T=x.avail_in,b=n.bitb,S=n.bitk,A=n.write,w=A<n.read?n.read-A-1:n.end-A;;){let L,k,P,I,F,H,O,R;switch(a){case TYPE:for(;S<3;){if(T!==0)v=Z_OK;else return n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);T--,b|=(x.read_byte(y++)&255)<<S,S+=8}switch(h=b&7,m=h&1,h>>>1){case 0:b>>>=3,S-=3,h=S&7,b>>>=h,S-=h,a=LENS;break;case 1:L=[],k=[],P=[[]],I=[[]],InfTree.inflate_trees_fixed(L,k,P,I),d.init(L[0],k[0],P[0],0,I[0],0),b>>>=3,S-=3,a=CODES;break;case 2:b>>>=3,S-=3,a=TABLE;break;case 3:return b>>>=3,S-=3,a=BADBLOCKS,x.msg="invalid block type",v=Z_DATA_ERROR,n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v)}break;case LENS:for(;S<32;){if(T!==0)v=Z_OK;else return n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);T--,b|=(x.read_byte(y++)&255)<<S,S+=8}if((~b>>>16&65535)!=(b&65535))return a=BADBLOCKS,x.msg="invalid stored block lengths",v=Z_DATA_ERROR,n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);o=b&65535,b=S=0,a=o!==0?STORED:m!==0?DRY:TYPE;break;case STORED:if(T===0||w===0&&(A==n.end&&n.read!==0&&(A=0,w=A<n.read?n.read-A-1:n.end-A),w===0&&(n.write=A,v=n.inflate_flush(x,v),A=n.write,w=A<n.read?n.read-A-1:n.end-A,A==n.end&&n.read!==0&&(A=0,w=A<n.read?n.read-A-1:n.end-A),w===0)))return n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);if(v=Z_OK,h=o,h>T&&(h=T),h>w&&(h=w),n.win.set(x.read_buf(y,h),A),y+=h,T-=h,A+=h,w-=h,(o-=h)!==0)break;a=m!==0?DRY:TYPE;break;case TABLE:for(;S<14;){if(T!==0)v=Z_OK;else return n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);T--,b|=(x.read_byte(y++)&255)<<S,S+=8}if(l=h=b&16383,(h&31)>29||(h>>5&31)>29)return a=BADBLOCKS,x.msg="too many length or distance symbols",v=Z_DATA_ERROR,n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);if(h=258+(h&31)+(h>>5&31),!_||_.length<h)_=[];else for(C=0;C<h;C++)_[C]=0;b>>>=14,S-=14,c=0,a=BTREE;case BTREE:for(;c<4+(l>>>10);){for(;S<3;){if(T!==0)v=Z_OK;else return n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);T--,b|=(x.read_byte(y++)&255)<<S,S+=8}_[border[c++]]=b&7,b>>>=3,S-=3}for(;c<19;)_[border[c++]]=0;if(u[0]=7,h=E.inflate_trees_bits(_,u,p,f,x),h!=Z_OK)return v=h,v==Z_DATA_ERROR&&(_=null,a=BADBLOCKS),n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);c=0,a=DTREE;case DTREE:for(;h=l,!(c>=258+(h&31)+(h>>5&31));){let M,G;for(h=u[0];S<h;){if(T!==0)v=Z_OK;else return n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);T--,b|=(x.read_byte(y++)&255)<<S,S+=8}if(h=f[(p[0]+(b&inflate_mask[h]))*3+1],G=f[(p[0]+(b&inflate_mask[h]))*3+2],G<16)b>>>=h,S-=h,_[c++]=G;else{for(C=G==18?7:G-14,M=G==18?11:3;S<h+C;){if(T!==0)v=Z_OK;else return n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);T--,b|=(x.read_byte(y++)&255)<<S,S+=8}if(b>>>=h,S-=h,M+=b&inflate_mask[C],b>>>=C,S-=C,C=c,h=l,C+M>258+(h&31)+(h>>5&31)||G==16&&C<1)return _=null,a=BADBLOCKS,x.msg="invalid bit length repeat",v=Z_DATA_ERROR,n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);G=G==16?_[C-1]:0;do _[C++]=G;while(--M!==0);c=C}}if(p[0]=-1,F=[],H=[],O=[],R=[],F[0]=9,H[0]=6,h=l,h=E.inflate_trees_dynamic(257+(h&31),1+(h>>5&31),_,F,H,O,R,f,x),h!=Z_OK)return h==Z_DATA_ERROR&&(_=null,a=BADBLOCKS),v=h,n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);d.init(F[0],H[0],f,O[0],f,R[0]),a=CODES;case CODES:if(n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,(v=d.proc(n,x,v))!=Z_STREAM_END)return n.inflate_flush(x,v);if(v=Z_OK,d.free(x),y=x.next_in_index,T=x.avail_in,b=n.bitb,S=n.bitk,A=n.write,w=A<n.read?n.read-A-1:n.end-A,m===0){a=TYPE;break}a=DRY;case DRY:if(n.write=A,v=n.inflate_flush(x,v),A=n.write,w=A<n.read?n.read-A-1:n.end-A,n.read!=n.write)return n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);a=DONELOCKS;case DONELOCKS:return v=Z_STREAM_END,n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);case BADBLOCKS:return v=Z_DATA_ERROR,n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v);default:return v=Z_STREAM_ERROR,n.bitb=b,n.bitk=S,x.avail_in=T,x.total_in+=y-x.next_in_index,x.next_in_index=y,n.write=A,n.inflate_flush(x,v)}}},n.free=function(x){n.reset(x,null),n.win=null,f=null},n.set_dictionary=function(x,v,h){n.win.set(x.subarray(v,v+h),0),n.read=n.write=h},n.sync_point=function(){return a==LENS?1:0}}const PRESET_DICT=32,Z_DEFLATED=8,METHOD=0,FLAG=1,DICT4=2,DICT3=3,DICT2=4,DICT1=5,DICT0=6,BLOCKS=7,DONE=12,BAD=13,mark=[0,0,255,255];function Inflate(){const t=this;t.mode=0,t.method=0,t.was=[0],t.need=0,t.marker=0,t.wbits=0;function r(n){return!n||!n.istate?Z_STREAM_ERROR:(n.total_in=n.total_out=0,n.msg=null,n.istate.mode=BLOCKS,n.istate.blocks.reset(n,null),Z_OK)}t.inflateEnd=function(n){return t.blocks&&t.blocks.free(n),t.blocks=null,Z_OK},t.inflateInit=function(n,a){return n.msg=null,t.blocks=null,a<8||a>15?(t.inflateEnd(n),Z_STREAM_ERROR):(t.wbits=a,n.istate.blocks=new InfBlocks(n,1<<a),r(n),Z_OK)},t.inflate=function(n,a){let o,l;if(!n||!n.istate||!n.next_in)return Z_STREAM_ERROR;const c=n.istate;for(a=a==Z_FINISH?Z_BUF_ERROR:Z_OK,o=Z_BUF_ERROR;;)switch(c.mode){case METHOD:if(n.avail_in===0)return o;if(o=a,n.avail_in--,n.total_in++,((c.method=n.read_byte(n.next_in_index++))&15)!=Z_DEFLATED){c.mode=BAD,n.msg="unknown compression method",c.marker=5;break}if((c.method>>4)+8>c.wbits){c.mode=BAD,n.msg="invalid win size",c.marker=5;break}c.mode=FLAG;case FLAG:if(n.avail_in===0)return o;if(o=a,n.avail_in--,n.total_in++,l=n.read_byte(n.next_in_index++)&255,((c.method<<8)+l)%31!==0){c.mode=BAD,n.msg="incorrect header check",c.marker=5;break}if((l&PRESET_DICT)===0){c.mode=BLOCKS;break}c.mode=DICT4;case DICT4:if(n.avail_in===0)return o;o=a,n.avail_in--,n.total_in++,c.need=(n.read_byte(n.next_in_index++)&255)<<24&4278190080,c.mode=DICT3;case DICT3:if(n.avail_in===0)return o;o=a,n.avail_in--,n.total_in++,c.need+=(n.read_byte(n.next_in_index++)&255)<<16&16711680,c.mode=DICT2;case DICT2:if(n.avail_in===0)return o;o=a,n.avail_in--,n.total_in++,c.need+=(n.read_byte(n.next_in_index++)&255)<<8&65280,c.mode=DICT1;case DICT1:return n.avail_in===0?o:(o=a,n.avail_in--,n.total_in++,c.need+=n.read_byte(n.next_in_index++)&255,c.mode=DICT0,Z_NEED_DICT);case DICT0:return c.mode=BAD,n.msg="need dictionary",c.marker=0,Z_STREAM_ERROR;case BLOCKS:if(o=c.blocks.proc(n,o),o==Z_DATA_ERROR){c.mode=BAD,c.marker=0;break}if(o==Z_OK&&(o=a),o!=Z_STREAM_END)return o;o=a,c.blocks.reset(n,c.was),c.mode=DONE;case DONE:return n.avail_in=0,Z_STREAM_END;case BAD:return Z_DATA_ERROR;default:return Z_STREAM_ERROR}},t.inflateSetDictionary=function(n,a,o){let l=0,c=o;if(!n||!n.istate||n.istate.mode!=DICT0)return Z_STREAM_ERROR;const _=n.istate;return c>=1<<_.wbits&&(c=(1<<_.wbits)-1,l=o-c),_.blocks.set_dictionary(a,l,c),_.mode=BLOCKS,Z_OK},t.inflateSync=function(n){let a,o,l,c,_;if(!n||!n.istate)return Z_STREAM_ERROR;const u=n.istate;if(u.mode!=BAD&&(u.mode=BAD,u.marker=0),(a=n.avail_in)===0)return Z_BUF_ERROR;for(o=n.next_in_index,l=u.marker;a!==0&&l<4;)n.read_byte(o)==mark[l]?l++:n.read_byte(o)!==0?l=0:l=4-l,o++,a--;return n.total_in+=o-n.next_in_index,n.next_in_index=o,n.avail_in=a,u.marker=l,l!=4?Z_DATA_ERROR:(c=n.total_in,_=n.total_out,r(n),n.total_in=c,n.total_out=_,u.mode=BLOCKS,Z_OK)},t.inflateSyncPoint=function(n){return!n||!n.istate||!n.istate.blocks?Z_STREAM_ERROR:n.istate.blocks.sync_point()}}function ZStream(){}ZStream.prototype={inflateInit(t){const r=this;return r.istate=new Inflate,t||(t=MAX_BITS),r.istate.inflateInit(r,t)},inflate(t){const r=this;return r.istate?r.istate.inflate(r,t):Z_STREAM_ERROR},inflateEnd(){const t=this;if(!t.istate)return Z_STREAM_ERROR;const r=t.istate.inflateEnd(t);return t.istate=null,r},inflateSync(){const t=this;return t.istate?t.istate.inflateSync(t):Z_STREAM_ERROR},inflateSetDictionary(t,r){const n=this;return n.istate?n.istate.inflateSetDictionary(n,t,r):Z_STREAM_ERROR},read_byte(t){return this.next_in[t]},read_buf(t,r){return this.next_in.subarray(t,t+r)}};function ZipInflate(t){const r=this,n=new ZStream,a=t&&t.chunkSize?Math.floor(t.chunkSize*2):128*1024,o=Z_NO_FLUSH,l=new Uint8Array(a);let c=!1;n.inflateInit(),n.next_out=l,r.append=function(_,u){const p=[];let d,m,f=0,g=0,E=0;if(_.length!==0){n.next_in_index=0,n.next_in=_,n.avail_in=_.length;do{if(n.next_out_index=0,n.avail_out=a,n.avail_in===0&&!c&&(n.next_in_index=0,c=!0),d=n.inflate(o),c&&d===Z_BUF_ERROR){if(n.avail_in!==0)throw new Error("inflating: bad input")}else if(d!==Z_OK&&d!==Z_STREAM_END)throw new Error("inflating: "+n.msg);if((c||d===Z_STREAM_END)&&n.avail_in===_.length)throw new Error("inflating: bad input");n.next_out_index&&(n.next_out_index===a?p.push(new Uint8Array(l)):p.push(l.subarray(0,n.next_out_index))),E+=n.next_out_index,u&&n.next_in_index>0&&n.next_in_index!=f&&(u(n.next_in_index),f=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return p.length>1?(m=new Uint8Array(E),p.forEach(function(x){m.set(x,g),g+=x.length})):m=p[0]?new Uint8Array(p[0]):new Uint8Array,m}},r.flush=function(){n.inflateEnd()}}const MAX_32_BITS=4294967295,MAX_16_BITS=65535,COMPRESSION_METHOD_DEFLATE=8,COMPRESSION_METHOD_STORE=0,COMPRESSION_METHOD_AES=99,LOCAL_FILE_HEADER_SIGNATURE=67324752,SPLIT_ZIP_FILE_SIGNATURE=134695760,DATA_DESCRIPTOR_RECORD_SIGNATURE=SPLIT_ZIP_FILE_SIGNATURE,CENTRAL_FILE_HEADER_SIGNATURE=33639248,END_OF_CENTRAL_DIR_SIGNATURE=101010256,ZIP64_END_OF_CENTRAL_DIR_SIGNATURE=101075792,ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE=117853008,END_OF_CENTRAL_DIR_LENGTH=22,ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH=20,ZIP64_END_OF_CENTRAL_DIR_LENGTH=56,DATA_DESCRIPTOR_RECORD_LENGTH=12,DATA_DESCRIPTOR_RECORD_ZIP_64_LENGTH=20,DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH=4,EXTRAFIELD_TYPE_ZIP64=1,EXTRAFIELD_TYPE_AES=39169,EXTRAFIELD_TYPE_NTFS=10,EXTRAFIELD_TYPE_NTFS_TAG1=1,EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP=21589,EXTRAFIELD_TYPE_UNICODE_PATH=28789,EXTRAFIELD_TYPE_UNICODE_COMMENT=25461,EXTRAFIELD_TYPE_USDZ=6534,BITFLAG_ENCRYPTED=1,BITFLAG_LEVEL=6,BITFLAG_DATA_DESCRIPTOR=8,BITFLAG_LANG_ENCODING_FLAG=2048,FILE_ATTR_MSDOS_DIR_MASK=16,FILE_ATTR_UNIX_TYPE_MASK=61440,FILE_ATTR_UNIX_TYPE_DIR=16384,FILE_ATTR_UNIX_EXECUTABLE_MASK=73,DIRECTORY_SIGNATURE="/",HEADER_SIZE=30,HEADER_OFFSET_SIGNATURE=10,HEADER_OFFSET_COMPRESSED_SIZE=14,HEADER_OFFSET_UNCOMPRESSED_SIZE=18,UNDEFINED_VALUE=void 0,UNDEFINED_TYPE="undefined",FUNCTION_TYPE="function";class StreamAdapter{constructor(r){return class extends TransformStream{constructor(n,a){const o=new r(a);super({transform(l,c){c.enqueue(o.append(l))},flush(l){const c=o.flush();c&&l.enqueue(c)}})}}}}const MINIMUM_CHUNK_SIZE=64;let maxWorkers=2;try{typeof navigator!=UNDEFINED_TYPE&&navigator.hardwareConcurrency&&(maxWorkers=navigator.hardwareConcurrency)}catch(t){}const DEFAULT_CONFIGURATION={chunkSize:512*1024,maxWorkers,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:UNDEFINED_VALUE,CompressionStreamNative:typeof CompressionStream!=UNDEFINED_TYPE&&CompressionStream,DecompressionStreamNative:typeof DecompressionStream!=UNDEFINED_TYPE&&DecompressionStream},config=Object.assign({},DEFAULT_CONFIGURATION);function getConfiguration(){return config}function getChunkSize(t){return Math.max(t.chunkSize,MINIMUM_CHUNK_SIZE)}function configure(t){const{baseURL:r,chunkSize:n,maxWorkers:a,terminateWorkerTimeout:o,useCompressionStream:l,useWebWorkers:c,Deflate:_,Inflate:u,CompressionStream:p,DecompressionStream:d,workerScripts:m}=t;if(setIfDefined("baseURL",r),setIfDefined("chunkSize",n),setIfDefined("maxWorkers",a),setIfDefined("terminateWorkerTimeout",o),setIfDefined("useCompressionStream",l),setIfDefined("useWebWorkers",c),_&&(config.CompressionStream=new StreamAdapter(_)),u&&(config.DecompressionStream=new StreamAdapter(u)),setIfDefined("CompressionStream",p),setIfDefined("DecompressionStream",d),m!==UNDEFINED_VALUE){const{deflate:f,inflate:g}=m;if((f||g)&&(config.workerScripts||(config.workerScripts={})),f){if(!Array.isArray(f))throw new Error("workerScripts.deflate must be an array");config.workerScripts.deflate=f}if(g){if(!Array.isArray(g))throw new Error("workerScripts.inflate must be an array");config.workerScripts.inflate=g}}}function setIfDefined(t,r){r!==UNDEFINED_VALUE&&(config[t]=r)}const table$1={application:{"andrew-inset":"ez",annodex:"anx","atom+xml":"atom","atomcat+xml":"atomcat","atomserv+xml":"atomsrv",bbolin:"lin","cu-seeme":"cu","davmount+xml":"davmount",dsptype:"tsp",ecmascript:["es","ecma"],futuresplash:"spl",hta:"hta","java-archive":"jar","java-serialized-object":"ser","java-vm":"class",m3g:"m3g","mac-binhex40":"hqx",mathematica:["nb","ma","mb"],msaccess:"mdb",msword:["doc","dot","wiz"],mxf:"mxf",oda:"oda",ogg:"ogx",pdf:"pdf","pgp-keys":"key","pgp-signature":["asc","sig"],"pics-rules":"prf",postscript:["ps","ai","eps","epsi","epsf","eps2","eps3"],rar:"rar","rdf+xml":"rdf","rss+xml":"rss",rtf:"rtf","xhtml+xml":["xhtml","xht"],xml:["xml","xsl","xsd","xpdl"],"xspf+xml":"xspf",zip:"zip","vnd.android.package-archive":"apk","vnd.cinderella":"cdy","vnd.google-earth.kml+xml":"kml","vnd.google-earth.kmz":"kmz","vnd.mozilla.xul+xml":"xul","vnd.ms-excel":["xls","xlb","xlt","xlm","xla","xlc","xlw"],"vnd.ms-pki.seccat":"cat","vnd.ms-pki.stl":"stl","vnd.ms-powerpoint":["ppt","pps","pot","ppa","pwz"],"vnd.oasis.opendocument.chart":"odc","vnd.oasis.opendocument.database":"odb","vnd.oasis.opendocument.formula":"odf","vnd.oasis.opendocument.graphics":"odg","vnd.oasis.opendocument.graphics-template":"otg","vnd.oasis.opendocument.image":"odi","vnd.oasis.opendocument.presentation":"odp","vnd.oasis.opendocument.presentation-template":"otp","vnd.oasis.opendocument.spreadsheet":"ods","vnd.oasis.opendocument.spreadsheet-template":"ots","vnd.oasis.opendocument.text":"odt","vnd.oasis.opendocument.text-master":["odm","otm"],"vnd.oasis.opendocument.text-template":"ott","vnd.oasis.opendocument.text-web":"oth","vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xlsx","vnd.openxmlformats-officedocument.spreadsheetml.template":"xltx","vnd.openxmlformats-officedocument.presentationml.presentation":"pptx","vnd.openxmlformats-officedocument.presentationml.slideshow":"ppsx","vnd.openxmlformats-officedocument.presentationml.template":"potx","vnd.openxmlformats-officedocument.wordprocessingml.document":"docx","vnd.openxmlformats-officedocument.wordprocessingml.template":"dotx","vnd.smaf":"mmf","vnd.stardivision.calc":"sdc","vnd.stardivision.chart":"sds","vnd.stardivision.draw":"sda","vnd.stardivision.impress":"sdd","vnd.stardivision.math":["sdf","smf"],"vnd.stardivision.writer":["sdw","vor"],"vnd.stardivision.writer-global":"sgl","vnd.sun.xml.calc":"sxc","vnd.sun.xml.calc.template":"stc","vnd.sun.xml.draw":"sxd","vnd.sun.xml.draw.template":"std","vnd.sun.xml.impress":"sxi","vnd.sun.xml.impress.template":"sti","vnd.sun.xml.math":"sxm","vnd.sun.xml.writer":"sxw","vnd.sun.xml.writer.global":"sxg","vnd.sun.xml.writer.template":"stw","vnd.symbian.install":["sis","sisx"],"vnd.visio":["vsd","vst","vss","vsw","vsdx","vssx","vstx","vssm","vstm"],"vnd.wap.wbxml":"wbxml","vnd.wap.wmlc":"wmlc","vnd.wap.wmlscriptc":"wmlsc","vnd.wordperfect":"wpd","vnd.wordperfect5.1":"wp5","x-123":"wk","x-7z-compressed":"7z","x-abiword":"abw","x-apple-diskimage":"dmg","x-bcpio":"bcpio","x-bittorrent":"torrent","x-cbr":["cbr","cba","cbt","cb7"],"x-cbz":"cbz","x-cdf":["cdf","cda"],"x-cdlink":"vcd","x-chess-pgn":"pgn","x-cpio":"cpio","x-csh":"csh","x-director":["dir","dxr","cst","cct","cxt","w3d","fgd","swa"],"x-dms":"dms","x-doom":"wad","x-dvi":"dvi","x-httpd-eruby":"rhtml","x-font":"pcf.Z","x-freemind":"mm","x-gnumeric":"gnumeric","x-go-sgf":"sgf","x-graphing-calculator":"gcf","x-gtar":["gtar","taz"],"x-hdf":"hdf","x-httpd-php":["phtml","pht","php"],"x-httpd-php-source":"phps","x-httpd-php3":"php3","x-httpd-php3-preprocessed":"php3p","x-httpd-php4":"php4","x-httpd-php5":"php5","x-ica":"ica","x-info":"info","x-internet-signup":["ins","isp"],"x-iphone":"iii","x-iso9660-image":"iso","x-java-jnlp-file":"jnlp","x-jmol":"jmz","x-killustrator":"kil","x-latex":"latex","x-lyx":"lyx","x-lzx":"lzx","x-maker":["frm","fb","fbdoc"],"x-ms-wmd":"wmd","x-msdos-program":["com","exe","bat","dll"],"x-netcdf":["nc"],"x-ns-proxy-autoconfig":["pac","dat"],"x-nwc":"nwc","x-object":"o","x-oz-application":"oza","x-pkcs7-certreqresp":"p7r","x-python-code":["pyc","pyo"],"x-qgis":["qgs","shp","shx"],"x-quicktimeplayer":"qtl","x-redhat-package-manager":["rpm","rpa"],"x-ruby":"rb","x-sh":"sh","x-shar":"shar","x-shockwave-flash":["swf","swfl"],"x-silverlight":"scr","x-stuffit":"sit","x-sv4cpio":"sv4cpio","x-sv4crc":"sv4crc","x-tar":"tar","x-tex-gf":"gf","x-tex-pk":"pk","x-texinfo":["texinfo","texi"],"x-trash":["~","%","bak","old","sik"],"x-ustar":"ustar","x-wais-source":"src","x-wingz":"wz","x-x509-ca-cert":["crt","der","cer"],"x-xcf":"xcf","x-xfig":"fig","x-xpinstall":"xpi",applixware:"aw","atomsvc+xml":"atomsvc","ccxml+xml":"ccxml","cdmi-capability":"cdmia","cdmi-container":"cdmic","cdmi-domain":"cdmid","cdmi-object":"cdmio","cdmi-queue":"cdmiq","docbook+xml":"dbk","dssc+der":"dssc","dssc+xml":"xdssc","emma+xml":"emma","epub+zip":"epub",exi:"exi","font-tdpfr":"pfr","gml+xml":"gml","gpx+xml":"gpx",gxf:"gxf",hyperstudio:"stk","inkml+xml":["ink","inkml"],ipfix:"ipfix","jsonml+json":"jsonml","lost+xml":"lostxml","mads+xml":"mads",marc:"mrc","marcxml+xml":"mrcx","mathml+xml":["mathml","mml"],mbox:"mbox","mediaservercontrol+xml":"mscml","metalink+xml":"metalink","metalink4+xml":"meta4","mets+xml":"mets","mods+xml":"mods",mp21:["m21","mp21"],mp4:"mp4s","oebps-package+xml":"opf","omdoc+xml":"omdoc",onenote:["onetoc","onetoc2","onetmp","onepkg"],oxps:"oxps","patch-ops-error+xml":"xer","pgp-encrypted":"pgp",pkcs10:"p10","pkcs7-mime":["p7m","p7c"],"pkcs7-signature":"p7s",pkcs8:"p8","pkix-attr-cert":"ac","pkix-crl":"crl","pkix-pkipath":"pkipath",pkixcmp:"pki","pls+xml":"pls","prs.cww":"cww","pskc+xml":"pskcxml","reginfo+xml":"rif","relax-ng-compact-syntax":"rnc","resource-lists+xml":"rl","resource-lists-diff+xml":"rld","rls-services+xml":"rs","rpki-ghostbusters":"gbr","rpki-manifest":"mft","rpki-roa":"roa","rsd+xml":"rsd","sbml+xml":"sbml","scvp-cv-request":"scq","scvp-cv-response":"scs","scvp-vp-request":"spq","scvp-vp-response":"spp",sdp:"sdp","set-payment-initiation":"setpay","set-registration-initiation":"setreg","shf+xml":"shf","sparql-query":"rq","sparql-results+xml":"srx",srgs:"gram","srgs+xml":"grxml","sru+xml":"sru","ssdl+xml":"ssdl","ssml+xml":"ssml","tei+xml":["tei","teicorpus"],"thraud+xml":"tfi","timestamped-data":"tsd","vnd.3gpp.pic-bw-large":"plb","vnd.3gpp.pic-bw-small":"psb","vnd.3gpp.pic-bw-var":"pvb","vnd.3gpp2.tcap":"tcap","vnd.3m.post-it-notes":"pwn","vnd.accpac.simply.aso":"aso","vnd.accpac.simply.imp":"imp","vnd.acucobol":"acu","vnd.acucorp":["atc","acutc"],"vnd.adobe.air-application-installer-package+zip":"air","vnd.adobe.formscentral.fcdt":"fcdt","vnd.adobe.fxp":["fxp","fxpl"],"vnd.adobe.xdp+xml":"xdp","vnd.adobe.xfdf":"xfdf","vnd.ahead.space":"ahead","vnd.airzip.filesecure.azf":"azf","vnd.airzip.filesecure.azs":"azs","vnd.amazon.ebook":"azw","vnd.americandynamics.acc":"acc","vnd.amiga.ami":"ami","vnd.anser-web-certificate-issue-initiation":"cii","vnd.anser-web-funds-transfer-initiation":"fti","vnd.antix.game-component":"atx","vnd.apple.installer+xml":"mpkg","vnd.apple.mpegurl":"m3u8","vnd.aristanetworks.swi":"swi","vnd.astraea-software.iota":"iota","vnd.audiograph":"aep","vnd.blueice.multipass":"mpm","vnd.bmi":"bmi","vnd.businessobjects":"rep","vnd.chemdraw+xml":"cdxml","vnd.chipnuts.karaoke-mmd":"mmd","vnd.claymore":"cla","vnd.cloanto.rp9":"rp9","vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"vnd.cluetrust.cartomobile-config":"c11amc","vnd.cluetrust.cartomobile-config-pkg":"c11amz","vnd.commonspace":"csp","vnd.contact.cmsg":"cdbcmsg","vnd.cosmocaller":"cmc","vnd.crick.clicker":"clkx","vnd.crick.clicker.keyboard":"clkk","vnd.crick.clicker.palette":"clkp","vnd.crick.clicker.template":"clkt","vnd.crick.clicker.wordbank":"clkw","vnd.criticaltools.wbs+xml":"wbs","vnd.ctc-posml":"pml","vnd.cups-ppd":"ppd","vnd.curl.car":"car","vnd.curl.pcurl":"pcurl","vnd.dart":"dart","vnd.data-vision.rdz":"rdz","vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"vnd.dece.ttml+xml":["uvt","uvvt"],"vnd.dece.unspecified":["uvx","uvvx"],"vnd.dece.zip":["uvz","uvvz"],"vnd.denovo.fcselayout-link":"fe_launch","vnd.dna":"dna","vnd.dolby.mlp":"mlp","vnd.dpgraph":"dpg","vnd.dreamfactory":"dfac","vnd.ds-keypoint":"kpxx","vnd.dvb.ait":"ait","vnd.dvb.service":"svc","vnd.dynageo":"geo","vnd.ecowin.chart":"mag","vnd.enliven":"nml","vnd.epson.esf":"esf","vnd.epson.msf":"msf","vnd.epson.quickanime":"qam","vnd.epson.salt":"slt","vnd.epson.ssf":"ssf","vnd.eszigno3+xml":["es3","et3"],"vnd.ezpix-album":"ez2","vnd.ezpix-package":"ez3","vnd.fdf":"fdf","vnd.fdsn.mseed":"mseed","vnd.fdsn.seed":["seed","dataless"],"vnd.flographit":"gph","vnd.fluxtime.clip":"ftc","vnd.framemaker":["fm","frame","maker","book"],"vnd.frogans.fnc":"fnc","vnd.frogans.ltf":"ltf","vnd.fsc.weblaunch":"fsc","vnd.fujitsu.oasys":"oas","vnd.fujitsu.oasys2":"oa2","vnd.fujitsu.oasys3":"oa3","vnd.fujitsu.oasysgp":"fg5","vnd.fujitsu.oasysprs":"bh2","vnd.fujixerox.ddd":"ddd","vnd.fujixerox.docuworks":"xdw","vnd.fujixerox.docuworks.binder":"xbd","vnd.fuzzysheet":"fzs","vnd.genomatix.tuxedo":"txd","vnd.geogebra.file":"ggb","vnd.geogebra.tool":"ggt","vnd.geometry-explorer":["gex","gre"],"vnd.geonext":"gxt","vnd.geoplan":"g2w","vnd.geospace":"g3w","vnd.gmx":"gmx","vnd.grafeq":["gqf","gqs"],"vnd.groove-account":"gac","vnd.groove-help":"ghf","vnd.groove-identity-message":"gim","vnd.groove-injector":"grv","vnd.groove-tool-message":"gtm","vnd.groove-tool-template":"tpl","vnd.groove-vcard":"vcg","vnd.hal+xml":"hal","vnd.handheld-entertainment+xml":"zmm","vnd.hbci":"hbci","vnd.hhe.lesson-player":"les","vnd.hp-hpgl":"hpgl","vnd.hp-hpid":"hpid","vnd.hp-hps":"hps","vnd.hp-jlyt":"jlt","vnd.hp-pcl":"pcl","vnd.hp-pclxl":"pclxl","vnd.hydrostatix.sof-data":"sfd-hdstx","vnd.ibm.minipay":"mpy","vnd.ibm.modcap":["afp","listafp","list3820"],"vnd.ibm.rights-management":"irm","vnd.ibm.secure-container":"sc","vnd.iccprofile":["icc","icm"],"vnd.igloader":"igl","vnd.immervision-ivp":"ivp","vnd.immervision-ivu":"ivu","vnd.insors.igm":"igm","vnd.intercon.formnet":["xpw","xpx"],"vnd.intergeo":"i2g","vnd.intu.qbo":"qbo","vnd.intu.qfx":"qfx","vnd.ipunplugged.rcprofile":"rcprofile","vnd.irepository.package+xml":"irp","vnd.is-xpr":"xpr","vnd.isac.fcs":"fcs","vnd.jam":"jam","vnd.jcp.javame.midlet-rms":"rms","vnd.jisp":"jisp","vnd.joost.joda-archive":"joda","vnd.kahootz":["ktz","ktr"],"vnd.kde.karbon":"karbon","vnd.kde.kchart":"chrt","vnd.kde.kformula":"kfo","vnd.kde.kivio":"flw","vnd.kde.kontour":"kon","vnd.kde.kpresenter":["kpr","kpt"],"vnd.kde.kspread":"ksp","vnd.kde.kword":["kwd","kwt"],"vnd.kenameaapp":"htke","vnd.kidspiration":"kia","vnd.kinar":["kne","knp"],"vnd.koan":["skp","skd","skt","skm"],"vnd.kodak-descriptor":"sse","vnd.las.las+xml":"lasxml","vnd.llamagraphics.life-balance.desktop":"lbd","vnd.llamagraphics.life-balance.exchange+xml":"lbe","vnd.lotus-1-2-3":"123","vnd.lotus-approach":"apr","vnd.lotus-freelance":"pre","vnd.lotus-notes":"nsf","vnd.lotus-organizer":"org","vnd.lotus-screencam":"scm","vnd.lotus-wordpro":"lwp","vnd.macports.portpkg":"portpkg","vnd.mcd":"mcd","vnd.medcalcdata":"mc1","vnd.mediastation.cdkey":"cdkey","vnd.mfer":"mwf","vnd.mfmp":"mfm","vnd.micrografx.flo":"flo","vnd.micrografx.igx":"igx","vnd.mif":"mif","vnd.mobius.daf":"daf","vnd.mobius.dis":"dis","vnd.mobius.mbk":"mbk","vnd.mobius.mqy":"mqy","vnd.mobius.msl":"msl","vnd.mobius.plc":"plc","vnd.mobius.txf":"txf","vnd.mophun.application":"mpn","vnd.mophun.certificate":"mpc","vnd.ms-artgalry":"cil","vnd.ms-cab-compressed":"cab","vnd.ms-excel.addin.macroenabled.12":"xlam","vnd.ms-excel.sheet.binary.macroenabled.12":"xlsb","vnd.ms-excel.sheet.macroenabled.12":"xlsm","vnd.ms-excel.template.macroenabled.12":"xltm","vnd.ms-fontobject":"eot","vnd.ms-htmlhelp":"chm","vnd.ms-ims":"ims","vnd.ms-lrm":"lrm","vnd.ms-officetheme":"thmx","vnd.ms-powerpoint.addin.macroenabled.12":"ppam","vnd.ms-powerpoint.presentation.macroenabled.12":"pptm","vnd.ms-powerpoint.slide.macroenabled.12":"sldm","vnd.ms-powerpoint.slideshow.macroenabled.12":"ppsm","vnd.ms-powerpoint.template.macroenabled.12":"potm","vnd.ms-project":["mpp","mpt"],"vnd.ms-word.document.macroenabled.12":"docm","vnd.ms-word.template.macroenabled.12":"dotm","vnd.ms-works":["wps","wks","wcm","wdb"],"vnd.ms-wpl":"wpl","vnd.ms-xpsdocument":"xps","vnd.mseq":"mseq","vnd.musician":"mus","vnd.muvee.style":"msty","vnd.mynfc":"taglet","vnd.neurolanguage.nlu":"nlu","vnd.nitf":["ntf","nitf"],"vnd.noblenet-directory":"nnd","vnd.noblenet-sealer":"nns","vnd.noblenet-web":"nnw","vnd.nokia.n-gage.data":"ngdat","vnd.nokia.n-gage.symbian.install":"n-gage","vnd.nokia.radio-preset":"rpst","vnd.nokia.radio-presets":"rpss","vnd.novadigm.edm":"edm","vnd.novadigm.edx":"edx","vnd.novadigm.ext":"ext","vnd.oasis.opendocument.chart-template":"otc","vnd.oasis.opendocument.formula-template":"odft","vnd.oasis.opendocument.image-template":"oti","vnd.olpc-sugar":"xo","vnd.oma.dd2+xml":"dd2","vnd.openofficeorg.extension":"oxt","vnd.openxmlformats-officedocument.presentationml.slide":"sldx","vnd.osgeo.mapguide.package":"mgp","vnd.osgi.dp":"dp","vnd.osgi.subsystem":"esa","vnd.palm":["pdb","pqa","oprc"],"vnd.pawaafile":"paw","vnd.pg.format":"str","vnd.pg.osasli":"ei6","vnd.picsel":"efif","vnd.pmi.widget":"wg","vnd.pocketlearn":"plf","vnd.powerbuilder6":"pbd","vnd.previewsystems.box":"box","vnd.proteus.magazine":"mgz","vnd.publishare-delta-tree":"qps","vnd.pvi.ptid1":"ptid","vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"vnd.realvnc.bed":"bed","vnd.recordare.musicxml":"mxl","vnd.recordare.musicxml+xml":"musicxml","vnd.rig.cryptonote":"cryptonote","vnd.rn-realmedia":"rm","vnd.rn-realmedia-vbr":"rmvb","vnd.route66.link66+xml":"link66","vnd.sailingtracker.track":"st","vnd.seemail":"see","vnd.sema":"sema","vnd.semd":"semd","vnd.semf":"semf","vnd.shana.informed.formdata":"ifm","vnd.shana.informed.formtemplate":"itp","vnd.shana.informed.interchange":"iif","vnd.shana.informed.package":"ipk","vnd.simtech-mindmapper":["twd","twds"],"vnd.smart.teacher":"teacher","vnd.solent.sdkm+xml":["sdkm","sdkd"],"vnd.spotfire.dxp":"dxp","vnd.spotfire.sfs":"sfs","vnd.stepmania.package":"smzip","vnd.stepmania.stepchart":"sm","vnd.sus-calendar":["sus","susp"],"vnd.svd":"svd","vnd.syncml+xml":"xsm","vnd.syncml.dm+wbxml":"bdm","vnd.syncml.dm+xml":"xdm","vnd.tao.intent-module-archive":"tao","vnd.tcpdump.pcap":["pcap","cap","dmp"],"vnd.tmobile-livetv":"tmo","vnd.trid.tpt":"tpt","vnd.triscape.mxs":"mxs","vnd.trueapp":"tra","vnd.ufdl":["ufd","ufdl"],"vnd.uiq.theme":"utz","vnd.umajin":"umj","vnd.unity":"unityweb","vnd.uoml+xml":"uoml","vnd.vcx":"vcx","vnd.visionary":"vis","vnd.vsf":"vsf","vnd.webturbo":"wtb","vnd.wolfram.player":"nbp","vnd.wqd":"wqd","vnd.wt.stf":"stf","vnd.xara":"xar","vnd.xfdl":"xfdl","vnd.yamaha.hv-dic":"hvd","vnd.yamaha.hv-script":"hvs","vnd.yamaha.hv-voice":"hvp","vnd.yamaha.openscoreformat":"osf","vnd.yamaha.openscoreformat.osfpvg+xml":"osfpvg","vnd.yamaha.smaf-audio":"saf","vnd.yamaha.smaf-phrase":"spf","vnd.yellowriver-custom-menu":"cmp","vnd.zul":["zir","zirz"],"vnd.zzazz.deck+xml":"zaz","voicexml+xml":"vxml",widget:"wgt",winhlp:"hlp","wsdl+xml":"wsdl","wspolicy+xml":"wspolicy","x-ace-compressed":"ace","x-authorware-bin":["aab","x32","u32","vox"],"x-authorware-map":"aam","x-authorware-seg":"aas","x-blorb":["blb","blorb"],"x-bzip":"bz","x-bzip2":["bz2","boz"],"x-cfs-compressed":"cfs","x-chat":"chat","x-conference":"nsc","x-dgc-compressed":"dgc","x-dtbncx+xml":"ncx","x-dtbook+xml":"dtb","x-dtbresource+xml":"res","x-eva":"eva","x-font-bdf":"bdf","x-font-ghostscript":"gsf","x-font-linux-psf":"psf","x-font-pcf":"pcf","x-font-snf":"snf","x-font-ttf":["ttf","ttc"],"x-font-type1":["pfa","pfb","pfm","afm"],"x-freearc":"arc","x-gca-compressed":"gca","x-glulx":"ulx","x-gramps-xml":"gramps","x-install-instructions":"install","x-lzh-compressed":["lzh","lha"],"x-mie":"mie","x-mobipocket-ebook":["prc","mobi"],"x-ms-application":"application","x-ms-shortcut":"lnk","x-ms-xbap":"xbap","x-msbinder":"obd","x-mscardfile":"crd","x-msclip":"clp","application/x-ms-installer":"msi","x-msmediaview":["mvb","m13","m14"],"x-msmetafile":["wmf","wmz","emf","emz"],"x-msmoney":"mny","x-mspublisher":"pub","x-msschedule":"scd","x-msterminal":"trm","x-mswrite":"wri","x-nzb":"nzb","x-pkcs12":["p12","pfx"],"x-pkcs7-certificates":["p7b","spc"],"x-research-info-systems":"ris","x-silverlight-app":"xap","x-sql":"sql","x-stuffitx":"sitx","x-subrip":"srt","x-t3vm-image":"t3","x-tex-tfm":"tfm","x-tgif":"obj","x-xliff+xml":"xlf","x-xz":"xz","x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"xaml+xml":"xaml","xcap-diff+xml":"xdf","xenc+xml":"xenc","xml-dtd":"dtd","xop+xml":"xop","xproc+xml":"xpl","xslt+xml":"xslt","xv+xml":["mxml","xhvml","xvml","xvm"],yang:"yang","yin+xml":"yin",envoy:"evy",fractals:"fif","internet-property-stream":"acx",olescript:"axs","vnd.ms-outlook":"msg","vnd.ms-pkicertstore":"sst","x-compress":"z","x-perfmon":["pma","pmc","pmr","pmw"],"ynd.ms-pkipko":"pko",gzip:["gz","tgz"],"smil+xml":["smi","smil"],"vnd.debian.binary-package":["deb","udeb"],"vnd.hzn-3d-crossword":"x3d","vnd.sqlite3":["db","sqlite","sqlite3","db-wal","sqlite-wal","db-shm","sqlite-shm"],"vnd.wap.sic":"sic","vnd.wap.slc":"slc","x-krita":["kra","krz"],"x-perl":["pm","pl"],yaml:["yaml","yml"]},audio:{amr:"amr","amr-wb":"awb",annodex:"axa",basic:["au","snd"],flac:"flac",midi:["mid","midi","kar","rmi"],mpeg:["mpga","mpega","mp3","m4a","mp2a","m2a","m3a"],mpegurl:"m3u",ogg:["oga","ogg","spx"],"prs.sid":"sid","x-aiff":"aifc","x-gsm":"gsm","x-ms-wma":"wma","x-ms-wax":"wax","x-pn-realaudio":"ram","x-realaudio":"ra","x-sd2":"sd2",adpcm:"adp",mp4:"mp4a",s3m:"s3m",silk:"sil","vnd.dece.audio":["uva","uvva"],"vnd.digital-winds":"eol","vnd.dra":"dra","vnd.dts":"dts","vnd.dts.hd":"dtshd","vnd.lucent.voice":"lvp","vnd.ms-playready.media.pya":"pya","vnd.nuera.ecelp4800":"ecelp4800","vnd.nuera.ecelp7470":"ecelp7470","vnd.nuera.ecelp9600":"ecelp9600","vnd.rip":"rip",webm:"weba","x-caf":"caf","x-matroska":"mka","x-pn-realaudio-plugin":"rmp",xm:"xm",aac:"aac",aiff:["aiff","aif","aff"],opus:"opus",wav:"wav"},chemical:{"x-alchemy":"alc","x-cache":["cac","cache"],"x-cache-csf":"csf","x-cactvs-binary":["cbin","cascii","ctab"],"x-cdx":"cdx","x-chem3d":"c3d","x-cif":"cif","x-cmdf":"cmdf","x-cml":"cml","x-compass":"cpa","x-crossfire":"bsd","x-csml":["csml","csm"],"x-ctx":"ctx","x-cxf":["cxf","cef"],"x-embl-dl-nucleotide":["emb","embl"],"x-gamess-input":["inp","gam","gamin"],"x-gaussian-checkpoint":["fch","fchk"],"x-gaussian-cube":"cub","x-gaussian-input":["gau","gjc","gjf"],"x-gaussian-log":"gal","x-gcg8-sequence":"gcg","x-genbank":"gen","x-hin":"hin","x-isostar":["istr","ist"],"x-jcamp-dx":["jdx","dx"],"x-kinemage":"kin","x-macmolecule":"mcm","x-macromodel-input":"mmod","x-mdl-molfile":"mol","x-mdl-rdfile":"rd","x-mdl-rxnfile":"rxn","x-mdl-sdfile":"sd","x-mdl-tgf":"tgf","x-mmcif":"mcif","x-mol2":"mol2","x-molconn-Z":"b","x-mopac-graph":"gpt","x-mopac-input":["mop","mopcrt","zmt"],"x-mopac-out":"moo","x-ncbi-asn1":"asn","x-ncbi-asn1-ascii":["prt","ent"],"x-ncbi-asn1-binary":"val","x-rosdal":"ros","x-swissprot":"sw","x-vamas-iso14976":"vms","x-vmd":"vmd","x-xtel":"xtel","x-xyz":"xyz"},font:{otf:"otf",woff:"woff",woff2:"woff2"},image:{gif:"gif",ief:"ief",jpeg:["jpeg","jpg","jpe","jfif","jfif-tbnl","jif"],pcx:"pcx",png:"png","svg+xml":["svg","svgz"],tiff:["tiff","tif"],"vnd.djvu":["djvu","djv"],"vnd.wap.wbmp":"wbmp","x-canon-cr2":"cr2","x-canon-crw":"crw","x-cmu-raster":"ras","x-coreldraw":"cdr","x-coreldrawpattern":"pat","x-coreldrawtemplate":"cdt","x-corelphotopaint":"cpt","x-epson-erf":"erf","x-icon":"ico","x-jg":"art","x-jng":"jng","x-nikon-nef":"nef","x-olympus-orf":"orf","x-portable-anymap":"pnm","x-portable-bitmap":"pbm","x-portable-graymap":"pgm","x-portable-pixmap":"ppm","x-rgb":"rgb","x-xbitmap":"xbm","x-xpixmap":"xpm","x-xwindowdump":"xwd",bmp:"bmp",cgm:"cgm",g3fax:"g3",ktx:"ktx","prs.btif":"btif",sgi:"sgi","vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"vnd.dwg":"dwg","vnd.dxf":"dxf","vnd.fastbidsheet":"fbs","vnd.fpx":"fpx","vnd.fst":"fst","vnd.fujixerox.edmics-mmr":"mmr","vnd.fujixerox.edmics-rlc":"rlc","vnd.ms-modi":"mdi","vnd.ms-photo":"wdp","vnd.net-fpx":"npx","vnd.xiff":"xif",webp:"webp","x-3ds":"3ds","x-cmx":"cmx","x-freehand":["fh","fhc","fh4","fh5","fh7"],"x-pict":["pic","pct"],"x-tga":"tga","cis-cod":"cod",avif:"avifs",heic:["heif","heic"],pjpeg:["pjpg"],"vnd.adobe.photoshop":"psd","x-adobe-dng":"dng","x-fuji-raf":"raf","x-icns":"icns","x-kodak-dcr":"dcr","x-kodak-k25":"k25","x-kodak-kdc":"kdc","x-minolta-mrw":"mrw","x-panasonic-raw":["raw","rw2","rwl"],"x-pentax-pef":["pef","ptx"],"x-sigma-x3f":"x3f","x-sony-arw":"arw","x-sony-sr2":"sr2","x-sony-srf":"srf"},message:{rfc822:["eml","mime","mht","mhtml","nws"]},model:{iges:["igs","iges"],mesh:["msh","mesh","silo"],vrml:["wrl","vrml"],"x3d+vrml":["x3dv","x3dvz"],"x3d+xml":"x3dz","x3d+binary":["x3db","x3dbz"],"vnd.collada+xml":"dae","vnd.dwf":"dwf","vnd.gdl":"gdl","vnd.gtw":"gtw","vnd.mts":"mts","vnd.usdz+zip":"usdz","vnd.vtu":"vtu"},text:{"cache-manifest":["manifest","appcache"],calendar:["ics","icz","ifb"],css:"css",csv:"csv",h323:"323",html:["html","htm","shtml","stm"],iuls:"uls",plain:["txt","text","brf","conf","def","list","log","in","bas","diff","ksh"],richtext:"rtx",scriptlet:["sct","wsc"],texmacs:"tm","tab-separated-values":"tsv","vnd.sun.j2me.app-descriptor":"jad","vnd.wap.wml":"wml","vnd.wap.wmlscript":"wmls","x-bibtex":"bib","x-boo":"boo","x-c++hdr":["h++","hpp","hxx","hh"],"x-c++src":["c++","cpp","cxx","cc"],"x-component":"htc","x-dsrc":"d","x-diff":"patch","x-haskell":"hs","x-java":"java","x-literate-haskell":"lhs","x-moc":"moc","x-pascal":["p","pas","pp","inc"],"x-pcs-gcd":"gcd","x-python":"py","x-scala":"scala","x-setext":"etx","x-tcl":["tcl","tk"],"x-tex":["tex","ltx","sty","cls"],"x-vcalendar":"vcs","x-vcard":"vcf",n3:"n3","prs.lines.tag":"dsc",sgml:["sgml","sgm"],troff:["t","tr","roff","man","me","ms"],turtle:"ttl","uri-list":["uri","uris","urls"],vcard:"vcard","vnd.curl":"curl","vnd.curl.dcurl":"dcurl","vnd.curl.scurl":"scurl","vnd.curl.mcurl":"mcurl","vnd.dvb.subtitle":"sub","vnd.fly":"fly","vnd.fmi.flexstor":"flx","vnd.graphviz":"gv","vnd.in3d.3dml":"3dml","vnd.in3d.spot":"spot","x-asm":["s","asm"],"x-c":["c","h","dic"],"x-fortran":["f","for","f77","f90"],"x-opml":"opml","x-nfo":"nfo","x-sfv":"sfv","x-uuencode":"uu",webviewhtml:"htt",javascript:"js",json:"json",markdown:["md","markdown","mdown","markdn"],"vnd.wap.si":"si","vnd.wap.sl":"sl"},video:{avif:"avif","3gpp":"3gp",annodex:"axv",dl:"dl",dv:["dif","dv"],fli:"fli",gl:"gl",mpeg:["mpeg","mpg","mpe","m1v","m2v","mp2","mpa","mpv2"],mp4:["mp4","mp4v","mpg4"],quicktime:["qt","mov"],ogg:"ogv","vnd.mpegurl":["mxu","m4u"],"x-flv":"flv","x-la-asf":["lsf","lsx"],"x-mng":"mng","x-ms-asf":["asf","asx","asr"],"x-ms-wm":"wm","x-ms-wmv":"wmv","x-ms-wmx":"wmx","x-ms-wvx":"wvx","x-msvideo":"avi","x-sgi-movie":"movie","x-matroska":["mpv","mkv","mk3d","mks"],"3gpp2":"3g2",h261:"h261",h263:"h263",h264:"h264",jpeg:"jpgv",jpm:["jpm","jpgm"],mj2:["mj2","mjp2"],"vnd.dece.hd":["uvh","uvvh"],"vnd.dece.mobile":["uvm","uvvm"],"vnd.dece.pd":["uvp","uvvp"],"vnd.dece.sd":["uvs","uvvs"],"vnd.dece.video":["uvv","uvvv"],"vnd.dvb.file":"dvb","vnd.fvt":"fvt","vnd.ms-playready.media.pyv":"pyv","vnd.uvvu.mp4":["uvu","uvvu"],"vnd.vivo":"viv",webm:"webm","x-f4v":"f4v","x-m4v":"m4v","x-ms-vob":"vob","x-smv":"smv",mp2t:"ts"},"x-conference":{"x-cooltalk":"ice"},"x-world":{"x-vrml":["vrm","flr","wrz","xaf","xof"]}};(()=>{const t={};for(const r of Object.keys(table$1))for(const n of Object.keys(table$1[r])){const a=table$1[r][n];if(typeof a=="string")t[a]=r+"/"+n;else for(let o=0;o<a.length;o++)t[a[o]]=r+"/"+n}return t})();const table=[];for(let t=0;t<256;t++){let r=t;for(let n=0;n<8;n++)r&1?r=r>>>1^3988292384:r=r>>>1;table[t]=r}class Crc32{constructor(r){this.crc=r||-1}append(r){let n=this.crc|0;for(let a=0,o=r.length|0;a<o;a++)n=n>>>8^table[(n^r[a])&255];this.crc=n}get(){return~this.crc}}class Crc32Stream extends TransformStream{constructor(){let r;const n=new Crc32;super({transform(a,o){n.append(a),o.enqueue(a)},flush(){const a=new Uint8Array(4);new DataView(a.buffer).setUint32(0,n.get()),r.value=a}}),r=this}}function encodeText(t){if(typeof TextEncoder==UNDEFINED_TYPE){t=unescape(encodeURIComponent(t));const r=new Uint8Array(t.length);for(let n=0;n<r.length;n++)r[n]=t.charCodeAt(n);return r}else return new TextEncoder().encode(t)}const bitArray={concat(t,r){if(t.length===0||r.length===0)return t.concat(r);const n=t[t.length-1],a=bitArray.getPartial(n);return a===32?t.concat(r):bitArray._shiftRight(r,a,n|0,t.slice(0,t.length-1))},bitLength(t){const r=t.length;if(r===0)return 0;const n=t[r-1];return(r-1)*32+bitArray.getPartial(n)},clamp(t,r){if(t.length*32<r)return t;t=t.slice(0,Math.ceil(r/32));const n=t.length;return r=r&31,n>0&&r&&(t[n-1]=bitArray.partial(r,t[n-1]&2147483648>>r-1,1)),t},partial(t,r,n){return t===32?r:(n?r|0:r<<32-t)+t*1099511627776},getPartial(t){return Math.round(t/1099511627776)||32},_shiftRight(t,r,n,a){for(a===void 0&&(a=[]);r>=32;r-=32)a.push(n),n=0;if(r===0)return a.concat(t);for(let c=0;c<t.length;c++)a.push(n|t[c]>>>r),n=t[c]<<32-r;const o=t.length?t[t.length-1]:0,l=bitArray.getPartial(o);return a.push(bitArray.partial(r+l&31,r+l>32?n:a.pop(),1)),a}},codec={bytes:{fromBits(t){const n=bitArray.bitLength(t)/8,a=new Uint8Array(n);let o;for(let l=0;l<n;l++)(l&3)===0&&(o=t[l/4]),a[l]=o>>>24,o<<=8;return a},toBits(t){const r=[];let n,a=0;for(n=0;n<t.length;n++)a=a<<8|t[n],(n&3)===3&&(r.push(a),a=0);return n&3&&r.push(bitArray.partial(8*(n&3),a)),r}}},hash={};hash.sha1=class{constructor(t){const r=this;r.blockSize=512,r._init=[1732584193,4023233417,2562383102,271733878,3285377520],r._key=[1518500249,1859775393,2400959708,3395469782],t?(r._h=t._h.slice(0),r._buffer=t._buffer.slice(0),r._length=t._length):r.reset()}reset(){const t=this;return t._h=t._init.slice(0),t._buffer=[],t._length=0,t}update(t){const r=this;typeof t=="string"&&(t=codec.utf8String.toBits(t));const n=r._buffer=bitArray.concat(r._buffer,t),a=r._length,o=r._length=a+bitArray.bitLength(t);if(o>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");const l=new Uint32Array(n);let c=0;for(let _=r.blockSize+a-(r.blockSize+a&r.blockSize-1);_<=o;_+=r.blockSize)r._block(l.subarray(16*c,16*(c+1))),c+=1;return n.splice(0,16*c),r}finalize(){const t=this;let r=t._buffer;const n=t._h;r=bitArray.concat(r,[bitArray.partial(1,1)]);for(let a=r.length+2;a&15;a++)r.push(0);for(r.push(Math.floor(t._length/4294967296)),r.push(t._length|0);r.length;)t._block(r.splice(0,16));return t.reset(),n}_f(t,r,n,a){if(t<=19)return r&n|~r&a;if(t<=39)return r^n^a;if(t<=59)return r&n|r&a|n&a;if(t<=79)return r^n^a}_S(t,r){return r<<t|r>>>32-t}_block(t){const r=this,n=r._h,a=Array(80);for(let p=0;p<16;p++)a[p]=t[p];let o=n[0],l=n[1],c=n[2],_=n[3],u=n[4];for(let p=0;p<=79;p++){p>=16&&(a[p]=r._S(1,a[p-3]^a[p-8]^a[p-14]^a[p-16]));const d=r._S(5,o)+r._f(p,l,c,_)+u+a[p]+r._key[Math.floor(p/20)]|0;u=_,_=c,c=r._S(30,l),l=o,o=d}n[0]=n[0]+o|0,n[1]=n[1]+l|0,n[2]=n[2]+c|0,n[3]=n[3]+_|0,n[4]=n[4]+u|0}};const cipher={};cipher.aes=class{constructor(t){const r=this;r._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],r._tables[0][0][0]||r._precompute();const n=r._tables[0][4],a=r._tables[1],o=t.length;let l,c,_,u=1;if(o!==4&&o!==6&&o!==8)throw new Error("invalid aes key size");for(r._key=[c=t.slice(0),_=[]],l=o;l<4*o+28;l++){let p=c[l-1];(l%o===0||o===8&&l%o===4)&&(p=n[p>>>24]<<24^n[p>>16&255]<<16^n[p>>8&255]<<8^n[p&255],l%o===0&&(p=p<<8^p>>>24^u<<24,u=u<<1^(u>>7)*283)),c[l]=c[l-o]^p}for(let p=0;l;p++,l--){const d=c[p&3?l:l-4];l<=4||p<4?_[p]=d:_[p]=a[0][n[d>>>24]]^a[1][n[d>>16&255]]^a[2][n[d>>8&255]]^a[3][n[d&255]]}}encrypt(t){return this._crypt(t,0)}decrypt(t){return this._crypt(t,1)}_precompute(){const t=this._tables[0],r=this._tables[1],n=t[4],a=r[4],o=[],l=[];let c,_,u,p;for(let d=0;d<256;d++)l[(o[d]=d<<1^(d>>7)*283)^d]=d;for(let d=c=0;!n[d];d^=_||1,c=l[c]||1){let m=c^c<<1^c<<2^c<<3^c<<4;m=m>>8^m&255^99,n[d]=m,a[m]=d,p=o[u=o[_=o[d]]];let f=p*16843009^u*65537^_*257^d*16843008,g=o[m]*257^m*16843008;for(let E=0;E<4;E++)t[E][d]=g=g<<24^g>>>8,r[E][m]=f=f<<24^f>>>8}for(let d=0;d<5;d++)t[d]=t[d].slice(0),r[d]=r[d].slice(0)}_crypt(t,r){if(t.length!==4)throw new Error("invalid aes block size");const n=this._key[r],a=n.length/4-2,o=[0,0,0,0],l=this._tables[r],c=l[0],_=l[1],u=l[2],p=l[3],d=l[4];let m=t[0]^n[0],f=t[r?3:1]^n[1],g=t[2]^n[2],E=t[r?1:3]^n[3],x=4,v,h,b;for(let S=0;S<a;S++)v=c[m>>>24]^_[f>>16&255]^u[g>>8&255]^p[E&255]^n[x],h=c[f>>>24]^_[g>>16&255]^u[E>>8&255]^p[m&255]^n[x+1],b=c[g>>>24]^_[E>>16&255]^u[m>>8&255]^p[f&255]^n[x+2],E=c[E>>>24]^_[m>>16&255]^u[f>>8&255]^p[g&255]^n[x+3],x+=4,m=v,f=h,g=b;for(let S=0;S<4;S++)o[r?3&-S:S]=d[m>>>24]<<24^d[f>>16&255]<<16^d[g>>8&255]<<8^d[E&255]^n[x++],v=m,m=f,f=g,g=E,E=v;return o}};const random={getRandomValues(t){const r=new Uint32Array(t.buffer),n=a=>{let o=987654321;const l=4294967295;return function(){return o=36969*(o&65535)+(o>>16)&l,a=18e3*(a&65535)+(a>>16)&l,(((o<<16)+a&l)/4294967296+.5)*(Math.random()>.5?1:-1)}};for(let a=0,o;a<t.length;a+=4){const l=n((o||Math.random())*4294967296);o=l()*987654071,r[a/4]=l()*4294967296|0}return t}},mode={};mode.ctrGladman=class{constructor(t,r){this._prf=t,this._initIv=r,this._iv=r}reset(){this._iv=this._initIv}update(t){return this.calculate(this._prf,t,this._iv)}incWord(t){if((t>>24&255)===255){let r=t>>16&255,n=t>>8&255,a=t&255;r===255?(r=0,n===255?(n=0,a===255?a=0:++a):++n):++r,t=0,t+=r<<16,t+=n<<8,t+=a}else t+=1<<24;return t}incCounter(t){(t[0]=this.incWord(t[0]))===0&&(t[1]=this.incWord(t[1]))}calculate(t,r,n){let a;if(!(a=r.length))return[];const o=bitArray.bitLength(r);for(let l=0;l<a;l+=4){this.incCounter(n);const c=t.encrypt(n);r[l]^=c[0],r[l+1]^=c[1],r[l+2]^=c[2],r[l+3]^=c[3]}return bitArray.clamp(r,o)}};const misc={importKey(t){return new misc.hmacSha1(codec.bytes.toBits(t))},pbkdf2(t,r,n,a){if(n=n||1e4,a<0||n<0)throw new Error("invalid params to pbkdf2");const o=(a>>5)+1<<2;let l,c,_,u,p;const d=new ArrayBuffer(o),m=new DataView(d);let f=0;const g=bitArray;for(r=codec.bytes.toBits(r),p=1;f<(o||1);p++){for(l=c=t.encrypt(g.concat(r,[p])),_=1;_<n;_++)for(c=t.encrypt(c),u=0;u<c.length;u++)l[u]^=c[u];for(_=0;f<(o||1)&&_<l.length;_++)m.setInt32(f,l[_]),f+=4}return d.slice(0,a/8)}};misc.hmacSha1=class{constructor(t){const r=this,n=r._hash=hash.sha1,a=[[],[]];r._baseHash=[new n,new n];const o=r._baseHash[0].blockSize/32;t.length>o&&(t=new n().update(t).finalize());for(let l=0;l<o;l++)a[0][l]=t[l]^909522486,a[1][l]=t[l]^1549556828;r._baseHash[0].update(a[0]),r._baseHash[1].update(a[1]),r._resultHash=new n(r._baseHash[0])}reset(){const t=this;t._resultHash=new t._hash(t._baseHash[0]),t._updated=!1}update(t){const r=this;r._updated=!0,r._resultHash.update(t)}digest(){const t=this,r=t._resultHash.finalize(),n=new t._hash(t._baseHash[1]).update(r).finalize();return t.reset(),n}encrypt(t){if(this._updated)throw new Error("encrypt on already updated hmac called!");return this.update(t),this.digest(t)}};const GET_RANDOM_VALUES_SUPPORTED=typeof crypto!=UNDEFINED_TYPE&&typeof crypto.getRandomValues==FUNCTION_TYPE,ERR_INVALID_PASSWORD="Invalid password",ERR_INVALID_SIGNATURE="Invalid signature",ERR_ABORT_CHECK_PASSWORD="zipjs-abort-check-password";function getRandomValues(t){return GET_RANDOM_VALUES_SUPPORTED?crypto.getRandomValues(t):random.getRandomValues(t)}const BLOCK_LENGTH=16,RAW_FORMAT="raw",PBKDF2_ALGORITHM={name:"PBKDF2"},HASH_ALGORITHM={name:"HMAC"},HASH_FUNCTION="SHA-1",BASE_KEY_ALGORITHM=Object.assign({hash:HASH_ALGORITHM},PBKDF2_ALGORITHM),DERIVED_BITS_ALGORITHM=Object.assign({iterations:1e3,hash:{name:HASH_FUNCTION}},PBKDF2_ALGORITHM),DERIVED_BITS_USAGE=["deriveBits"],SALT_LENGTH=[8,12,16],KEY_LENGTH=[16,24,32],SIGNATURE_LENGTH=10,COUNTER_DEFAULT_VALUE=[0,0,0,0],CRYPTO_API_SUPPORTED=typeof crypto!=UNDEFINED_TYPE,subtle=CRYPTO_API_SUPPORTED&&crypto.subtle,SUBTLE_API_SUPPORTED=CRYPTO_API_SUPPORTED&&typeof subtle!=UNDEFINED_TYPE,codecBytes=codec.bytes,Aes=cipher.aes,CtrGladman=mode.ctrGladman,HmacSha1=misc.hmacSha1;let IMPORT_KEY_SUPPORTED=CRYPTO_API_SUPPORTED&&SUBTLE_API_SUPPORTED&&typeof subtle.importKey==FUNCTION_TYPE,DERIVE_BITS_SUPPORTED=CRYPTO_API_SUPPORTED&&SUBTLE_API_SUPPORTED&&typeof subtle.deriveBits==FUNCTION_TYPE;class AESDecryptionStream extends TransformStream{constructor({password:r,rawPassword:n,signed:a,encryptionStrength:o,checkPasswordOnly:l}){super({start(){Object.assign(this,{ready:new Promise(c=>this.resolveReady=c),password:encodePassword(r,n),signed:a,strength:o-1,pending:new Uint8Array})},async transform(c,_){const u=this,{password:p,strength:d,resolveReady:m,ready:f}=u;p?(await createDecryptionKeys(u,d,p,subarray(c,0,SALT_LENGTH[d]+2)),c=subarray(c,SALT_LENGTH[d]+2),l?_.error(new Error(ERR_ABORT_CHECK_PASSWORD)):m()):await f;const g=new Uint8Array(c.length-SIGNATURE_LENGTH-(c.length-SIGNATURE_LENGTH)%BLOCK_LENGTH);_.enqueue(append(u,c,g,0,SIGNATURE_LENGTH,!0))},async flush(c){const{signed:_,ctr:u,hmac:p,pending:d,ready:m}=this;if(p&&u){await m;const f=subarray(d,0,d.length-SIGNATURE_LENGTH),g=subarray(d,d.length-SIGNATURE_LENGTH);let E=new Uint8Array;if(f.length){const x=toBits(codecBytes,f);p.update(x);const v=u.update(x);E=fromBits(codecBytes,v)}if(_){const x=subarray(fromBits(codecBytes,p.digest()),0,SIGNATURE_LENGTH);for(let v=0;v<SIGNATURE_LENGTH;v++)if(x[v]!=g[v])throw new Error(ERR_INVALID_SIGNATURE)}c.enqueue(E)}}})}}class AESEncryptionStream extends TransformStream{constructor({password:r,rawPassword:n,encryptionStrength:a}){let o;super({start(){Object.assign(this,{ready:new Promise(l=>this.resolveReady=l),password:encodePassword(r,n),strength:a-1,pending:new Uint8Array})},async transform(l,c){const _=this,{password:u,strength:p,resolveReady:d,ready:m}=_;let f=new Uint8Array;u?(f=await createEncryptionKeys(_,p,u),d()):await m;const g=new Uint8Array(f.length+l.length-l.length%BLOCK_LENGTH);g.set(f,0),c.enqueue(append(_,l,g,f.length,0))},async flush(l){const{ctr:c,hmac:_,pending:u,ready:p}=this;if(_&&c){await p;let d=new Uint8Array;if(u.length){const m=c.update(toBits(codecBytes,u));_.update(m),d=fromBits(codecBytes,m)}o.signature=fromBits(codecBytes,_.digest()).slice(0,SIGNATURE_LENGTH),l.enqueue(concat(d,o.signature))}}}),o=this}}function append(t,r,n,a,o,l){const{ctr:c,hmac:_,pending:u}=t,p=r.length-o;u.length&&(r=concat(u,r),n=expand(n,p-p%BLOCK_LENGTH));let d;for(d=0;d<=p-BLOCK_LENGTH;d+=BLOCK_LENGTH){const m=toBits(codecBytes,subarray(r,d,d+BLOCK_LENGTH));l&&_.update(m);const f=c.update(m);l||_.update(f),n.set(fromBits(codecBytes,f),d+a)}return t.pending=subarray(r,d),n}async function createDecryptionKeys(t,r,n,a){const o=await createKeys$1(t,r,n,subarray(a,0,SALT_LENGTH[r])),l=subarray(a,SALT_LENGTH[r]);if(o[0]!=l[0]||o[1]!=l[1])throw new Error(ERR_INVALID_PASSWORD)}async function createEncryptionKeys(t,r,n){const a=getRandomValues(new Uint8Array(SALT_LENGTH[r])),o=await createKeys$1(t,r,n,a);return concat(a,o)}async function createKeys$1(t,r,n,a){t.password=null;const o=await importKey(RAW_FORMAT,n,BASE_KEY_ALGORITHM,!1,DERIVED_BITS_USAGE),l=await deriveBits(Object.assign({salt:a},DERIVED_BITS_ALGORITHM),o,8*(KEY_LENGTH[r]*2+2)),c=new Uint8Array(l),_=toBits(codecBytes,subarray(c,0,KEY_LENGTH[r])),u=toBits(codecBytes,subarray(c,KEY_LENGTH[r],KEY_LENGTH[r]*2)),p=subarray(c,KEY_LENGTH[r]*2);return Object.assign(t,{keys:{key:_,authentication:u,passwordVerification:p},ctr:new CtrGladman(new Aes(_),Array.from(COUNTER_DEFAULT_VALUE)),hmac:new HmacSha1(u)}),p}async function importKey(t,r,n,a,o){if(IMPORT_KEY_SUPPORTED)try{return await subtle.importKey(t,r,n,a,o)}catch{return IMPORT_KEY_SUPPORTED=!1,misc.importKey(r)}else return misc.importKey(r)}async function deriveBits(t,r,n){if(DERIVE_BITS_SUPPORTED)try{return await subtle.deriveBits(t,r,n)}catch{return DERIVE_BITS_SUPPORTED=!1,misc.pbkdf2(r,t.salt,DERIVED_BITS_ALGORITHM.iterations,n)}else return misc.pbkdf2(r,t.salt,DERIVED_BITS_ALGORITHM.iterations,n)}function encodePassword(t,r){return r===UNDEFINED_VALUE?encodeText(t):r}function concat(t,r){let n=t;return t.length+r.length&&(n=new Uint8Array(t.length+r.length),n.set(t,0),n.set(r,t.length)),n}function expand(t,r){if(r&&r>t.length){const n=t;t=new Uint8Array(r),t.set(n,0)}return t}function subarray(t,r,n){return t.subarray(r,n)}function fromBits(t,r){return t.fromBits(r)}function toBits(t,r){return t.toBits(r)}const HEADER_LENGTH=12;class ZipCryptoDecryptionStream extends TransformStream{constructor({password:r,passwordVerification:n,checkPasswordOnly:a}){super({start(){Object.assign(this,{password:r,passwordVerification:n}),createKeys(this,r)},transform(o,l){const c=this;if(c.password){const _=decrypt(c,o.subarray(0,HEADER_LENGTH));if(c.password=null,_[HEADER_LENGTH-1]!=c.passwordVerification)throw new Error(ERR_INVALID_PASSWORD);o=o.subarray(HEADER_LENGTH)}a?l.error(new Error(ERR_ABORT_CHECK_PASSWORD)):l.enqueue(decrypt(c,o))}})}}class ZipCryptoEncryptionStream extends TransformStream{constructor({password:r,passwordVerification:n}){super({start(){Object.assign(this,{password:r,passwordVerification:n}),createKeys(this,r)},transform(a,o){const l=this;let c,_;if(l.password){l.password=null;const u=getRandomValues(new Uint8Array(HEADER_LENGTH));u[HEADER_LENGTH-1]=l.passwordVerification,c=new Uint8Array(a.length+u.length),c.set(encrypt(l,u),0),_=HEADER_LENGTH}else c=new Uint8Array(a.length),_=0;c.set(encrypt(l,a),_),o.enqueue(c)}})}}function decrypt(t,r){const n=new Uint8Array(r.length);for(let a=0;a<r.length;a++)n[a]=getByte(t)^r[a],updateKeys(t,n[a]);return n}function encrypt(t,r){const n=new Uint8Array(r.length);for(let a=0;a<r.length;a++)n[a]=getByte(t)^r[a],updateKeys(t,r[a]);return n}function createKeys(t,r){const n=[305419896,591751049,878082192];Object.assign(t,{keys:n,crcKey0:new Crc32(n[0]),crcKey2:new Crc32(n[2])});for(let a=0;a<r.length;a++)updateKeys(t,r.charCodeAt(a))}function updateKeys(t,r){let[n,a,o]=t.keys;t.crcKey0.append([r]),n=~t.crcKey0.get(),a=getInt32(Math.imul(getInt32(a+getInt8(n)),134775813)+1),t.crcKey2.append([a>>>24]),o=~t.crcKey2.get(),t.keys=[n,a,o]}function getByte(t){const r=t.keys[2]|2;return getInt8(Math.imul(r,r^1)>>>8)}function getInt8(t){return t&255}function getInt32(t){return t&4294967295}const ERR_INVALID_UNCOMPRESSED_SIZE="Invalid uncompressed size",COMPRESSION_FORMAT="deflate-raw";class DeflateStream extends TransformStream{constructor(r,{chunkSize:n,CompressionStream:a,CompressionStreamNative:o}){super({});const{compressed:l,encrypted:c,useCompressionStream:_,zipCrypto:u,signed:p,level:d}=r,m=this;let f,g,E=super.readable;(!c||u)&&p&&(f=new Crc32Stream,E=pipeThrough(E,f)),l&&(E=pipeThroughCommpressionStream(E,_,{level:d,chunkSize:n},o,a)),c&&(u?E=pipeThrough(E,new ZipCryptoEncryptionStream(r)):(g=new AESEncryptionStream(r),E=pipeThrough(E,g))),setReadable(m,E,()=>{let x;c&&!u&&(x=g.signature),(!c||u)&&p&&(x=new DataView(f.value.buffer).getUint32(0)),m.signature=x})}}class InflateStream extends TransformStream{constructor(r,{chunkSize:n,DecompressionStream:a,DecompressionStreamNative:o}){super({});const{zipCrypto:l,encrypted:c,signed:_,signature:u,compressed:p,useCompressionStream:d}=r;let m,f,g=super.readable;c&&(l?g=pipeThrough(g,new ZipCryptoDecryptionStream(r)):(f=new AESDecryptionStream(r),g=pipeThrough(g,f))),p&&(g=pipeThroughCommpressionStream(g,d,{chunkSize:n},o,a)),(!c||l)&&_&&(m=new Crc32Stream,g=pipeThrough(g,m)),setReadable(this,g,()=>{if((!c||l)&&_){const E=new DataView(m.value.buffer);if(u!=E.getUint32(0,!1))throw new Error(ERR_INVALID_SIGNATURE)}})}}function setReadable(t,r,n){r=pipeThrough(r,new TransformStream({flush:n})),Object.defineProperty(t,"readable",{get(){return r}})}function pipeThroughCommpressionStream(t,r,n,a,o){try{const l=r&&a?a:o;t=pipeThrough(t,new l(COMPRESSION_FORMAT,n))}catch(l){if(r)t=pipeThrough(t,new o(COMPRESSION_FORMAT,n));else throw l}return t}function pipeThrough(t,r){return t.pipeThrough(r)}const MESSAGE_EVENT_TYPE="message",MESSAGE_START="start",MESSAGE_PULL="pull",MESSAGE_DATA="data",MESSAGE_ACK_DATA="ack",MESSAGE_CLOSE="close",CODEC_DEFLATE="deflate",CODEC_INFLATE="inflate";class CodecStream extends TransformStream{constructor(r,n){super({});const a=this,{codecType:o}=r;let l;o.startsWith(CODEC_DEFLATE)?l=DeflateStream:o.startsWith(CODEC_INFLATE)&&(l=InflateStream),a.outputSize=0;let c=0;const _=new l(r,n),u=super.readable,p=new TransformStream({transform(m,f){m&&m.length&&(c+=m.length,f.enqueue(m))},flush(){Object.assign(a,{inputSize:c})}}),d=new TransformStream({transform(m,f){if(m&&m.length&&(f.enqueue(m),a.outputSize+=m.length,r.outputSize&&a.outputSize>r.outputSize))throw new Error(ERR_INVALID_UNCOMPRESSED_SIZE)},flush(){const{signature:m}=_;Object.assign(a,{signature:m,inputSize:c})}});Object.defineProperty(a,"readable",{get(){return u.pipeThrough(p).pipeThrough(_).pipeThrough(d)}})}}class ChunkStream extends TransformStream{constructor(r){let n;super({transform:a,flush(o){n&&n.length&&o.enqueue(n)}});function a(o,l){if(n){const c=new Uint8Array(n.length+o.length);c.set(n),c.set(o,n.length),o=c,n=null}o.length>r?(l.enqueue(o.slice(0,r)),a(o.slice(r),l)):n=o}}}let WEB_WORKERS_SUPPORTED=typeof Worker!=UNDEFINED_TYPE;class CodecWorker{constructor(r,{readable:n,writable:a},{options:o,config:l,streamOptions:c,useWebWorkers:_,transferStreams:u,scripts:p},d){const{signal:m}=c;return Object.assign(r,{busy:!0,readable:n.pipeThrough(new ChunkStream(l.chunkSize)).pipeThrough(new ProgressWatcherStream(c),{signal:m}),writable:a,options:Object.assign({},o),scripts:p,transferStreams:u,terminate(){return new Promise(f=>{const{worker:g,busy:E}=r;g?(E?r.resolveTerminated=f:(g.terminate(),f()),r.interface=null):f()})},onTaskFinished(){const{resolveTerminated:f}=r;f&&(r.resolveTerminated=null,r.terminated=!0,r.worker.terminate(),f()),r.busy=!1,d(r)}}),(_&&WEB_WORKERS_SUPPORTED?createWebWorkerInterface:createWorkerInterface)(r,l)}}class ProgressWatcherStream extends TransformStream{constructor({onstart:r,onprogress:n,size:a,onend:o}){let l=0;super({async start(){r&&await callHandler(r,a)},async transform(c,_){l+=c.length,n&&await callHandler(n,l,a),_.enqueue(c)},async flush(){o&&await callHandler(o,l)}})}}async function callHandler(t,...r){try{await t(...r)}catch{}}function createWorkerInterface(t,r){return{run:()=>runWorker$1(t,r)}}function createWebWorkerInterface(t,r){const{baseURL:n,chunkSize:a}=r;if(!t.interface){let o;try{o=getWebWorker(t.scripts[0],n,t)}catch{return WEB_WORKERS_SUPPORTED=!1,createWorkerInterface(t,r)}Object.assign(t,{worker:o,interface:{run:()=>runWebWorker(t,{chunkSize:a})}})}return t.interface}async function runWorker$1({options:t,readable:r,writable:n,onTaskFinished:a},o){let l;try{l=new CodecStream(t,o),await r.pipeThrough(l).pipeTo(n,{preventClose:!0,preventAbort:!0});const{signature:c,inputSize:_,outputSize:u}=l;return{signature:c,inputSize:_,outputSize:u}}catch(c){throw l&&(c.outputSize=l.outputSize),c}finally{a()}}async function runWebWorker(t,r){let n,a;const o=new Promise((f,g)=>{n=f,a=g});Object.assign(t,{reader:null,writer:null,resolveResult:n,rejectResult:a,result:o});const{readable:l,options:c,scripts:_}=t,{writable:u,closed:p}=watchClosedStream(t.writable),d=sendMessage({type:MESSAGE_START,scripts:_.slice(1),options:c,config:r,readable:l,writable:u},t);d||Object.assign(t,{reader:l.getReader(),writer:u.getWriter()});const m=await o;return d||await u.getWriter().close(),await p,m}function watchClosedStream(t){let r;const n=new Promise(o=>r=o);return{writable:new WritableStream({async write(o){const l=t.getWriter();await l.ready,await l.write(o),l.releaseLock()},close(){r()},abort(o){return t.getWriter().abort(o)}}),closed:n}}let classicWorkersSupported=!0,transferStreamsSupported=!0;function getWebWorker(t,r,n){const a={type:"module"};let o,l;typeof t==FUNCTION_TYPE&&(t=t());try{o=new URL(t,r)}catch{o=t}if(classicWorkersSupported)try{l=new Worker(o)}catch{classicWorkersSupported=!1,l=new Worker(o,a)}else l=new Worker(o,a);return l.addEventListener(MESSAGE_EVENT_TYPE,c=>onMessage(c,n)),l}function sendMessage(t,{worker:r,writer:n,onTaskFinished:a,transferStreams:o}){try{const{value:l,readable:c,writable:_}=t,u=[];if(l&&(l.byteLength<l.buffer.byteLength?t.value=l.buffer.slice(0,l.byteLength):t.value=l.buffer,u.push(t.value)),o&&transferStreamsSupported?(c&&u.push(c),_&&u.push(_)):t.readable=t.writable=null,u.length)try{return r.postMessage(t,u),!0}catch{transferStreamsSupported=!1,t.readable=t.writable=null,r.postMessage(t)}else r.postMessage(t)}catch(l){throw n&&n.releaseLock(),a(),l}}async function onMessage({data:t},r){const{type:n,value:a,messageId:o,result:l,error:c}=t,{reader:_,writer:u,resolveResult:p,rejectResult:d,onTaskFinished:m}=r;try{if(c){const{message:g,stack:E,code:x,name:v,outputSize:h}=c,b=new Error(g);Object.assign(b,{stack:E,code:x,name:v,outputSize:h}),f(b)}else{if(n==MESSAGE_PULL){const{value:g,done:E}=await _.read();sendMessage({type:MESSAGE_DATA,value:g,done:E,messageId:o},r)}n==MESSAGE_DATA&&(await u.ready,await u.write(new Uint8Array(a)),sendMessage({type:MESSAGE_ACK_DATA,messageId:o},r)),n==MESSAGE_CLOSE&&f(null,l)}}catch(g){sendMessage({type:MESSAGE_CLOSE,messageId:o},r),f(g)}function f(g,E){g?d(g):p(E),u&&u.releaseLock(),m()}}let pool=[];const pendingRequests=[];let indexWorker=0;async function runWorker(t,r){const{options:n,config:a}=r,{transferStreams:o,useWebWorkers:l,useCompressionStream:c,codecType:_,compressed:u,signed:p,encrypted:d}=n,{workerScripts:m,maxWorkers:f}=a;r.transferStreams=o||o===UNDEFINED_VALUE;const g=!u&&!p&&!d&&!r.transferStreams;return r.useWebWorkers=!g&&(l||l===UNDEFINED_VALUE&&a.useWebWorkers),r.scripts=r.useWebWorkers&&m?m[_]:[],n.useCompressionStream=c||c===UNDEFINED_VALUE&&a.useCompressionStream,(await E()).run();async function E(){const v=pool.find(h=>!h.busy);if(v)return clearTerminateTimeout(v),new CodecWorker(v,t,r,x);if(pool.length<f){const h={indexWorker};return indexWorker++,pool.push(h),new CodecWorker(h,t,r,x)}else return new Promise(h=>pendingRequests.push({resolve:h,stream:t,workerOptions:r}))}function x(v){if(pendingRequests.length){const[{resolve:h,stream:b,workerOptions:S}]=pendingRequests.splice(0,1);h(new CodecWorker(v,b,S,x))}else v.worker?(clearTerminateTimeout(v),terminateWorker(v,r)):pool=pool.filter(h=>h!=v)}}function terminateWorker(t,r){const{config:n}=r,{terminateWorkerTimeout:a}=n;Number.isFinite(a)&&a>=0&&(t.terminated?t.terminated=!1:t.terminateTimeout=setTimeout(async()=>{pool=pool.filter(o=>o!=t);try{await t.terminate()}catch{}},a))}function clearTerminateTimeout(t){const{terminateTimeout:r}=t;r&&(clearTimeout(r),t.terminateTimeout=null)}function e(t,r={}){const n=`const{Array:e,Object:t,Number:n,Math:r,Error:s,Uint8Array:i,Uint16Array:o,Uint32Array:c,Int32Array:f,Map:a,DataView:l,Promise:u,TextEncoder:w,crypto:h,postMessage:d,TransformStream:p,ReadableStream:y,WritableStream:m,CompressionStream:b,DecompressionStream:g}=self,k=void 0,v="undefined",S="function";class z{constructor(e){return class extends p{constructor(t,n){const r=new e(n);super({transform(e,t){t.enqueue(r.append(e))},flush(e){const t=r.flush();t&&e.enqueue(t)}})}}}}const C=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;C[e]=t}class x{constructor(e){this.t=e||-1}append(e){let t=0|this.t;for(let n=0,r=0|e.length;r>n;n++)t=t>>>8^C[255&(t^e[n])];this.t=t}get(){return~this.t}}class A extends p{constructor(){let e;const t=new x;super({transform(e,n){t.append(e),n.enqueue(e)},flush(){const n=new i(4);new l(n.buffer).setUint32(0,t.get()),e.value=n}}),e=this}}const I={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],r=I.i(n);return 32===r?e.concat(t):I.o(t,r,0|n,e.slice(0,e.length-1))},l(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+I.i(n)},u(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,r.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=I.h(t,e[n-1]&2147483648>>t-1,1)),e},h:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,i:e=>r.round(e/1099511627776)||32,o(e,t,n,r){for(void 0===r&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(0===t)return r.concat(e);for(let s=0;s<e.length;s++)r.push(n|e[s]>>>t),n=e[s]<<32-t;const s=e.length?e[e.length-1]:0,i=I.i(s);return r.push(I.h(t+i&31,t+i>32?n:r.pop(),1)),r}},_={bytes:{p(e){const t=I.l(e)/8,n=new i(t);let r;for(let s=0;t>s;s++)3&s||(r=e[s/4]),n[s]=r>>>24,r<<=8;return n},m(e){const t=[];let n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],3&~n||(t.push(r),r=0);return 3&n&&t.push(I.h(8*(3&n),r)),t}}},P=class{constructor(e){const t=this;t.blockSize=512,t.k=[1732584193,4023233417,2562383102,271733878,3285377520],t.v=[1518500249,1859775393,2400959708,3395469782],e?(t.S=e.S.slice(0),t.C=e.C.slice(0),t.A=e.A):t.reset()}reset(){const e=this;return e.S=e.k.slice(0),e.C=[],e.A=0,e}update(e){const t=this;"string"==typeof e&&(e=_.I.m(e));const n=t.C=I.concat(t.C,e),r=t.A,i=t.A=r+I.l(e);if(i>9007199254740991)throw new s("Cannot hash more than 2^53 - 1 bits");const o=new c(n);let f=0;for(let e=t.blockSize+r-(t.blockSize+r&t.blockSize-1);i>=e;e+=t.blockSize)t._(o.subarray(16*f,16*(f+1))),f+=1;return n.splice(0,16*f),t}P(){const e=this;let t=e.C;const n=e.S;t=I.concat(t,[I.h(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(r.floor(e.A/4294967296)),t.push(0|e.A);t.length;)e._(t.splice(0,16));return e.reset(),n}D(e,t,n,r){return e>19?e>39?e>59?e>79?void 0:t^n^r:t&n|t&r|n&r:t^n^r:t&n|~t&r}V(e,t){return t<<e|t>>>32-e}_(t){const n=this,s=n.S,i=e(80);for(let e=0;16>e;e++)i[e]=t[e];let o=s[0],c=s[1],f=s[2],a=s[3],l=s[4];for(let e=0;79>=e;e++){16>e||(i[e]=n.V(1,i[e-3]^i[e-8]^i[e-14]^i[e-16]));const t=n.V(5,o)+n.D(e,c,f,a)+l+i[e]+n.v[r.floor(e/20)]|0;l=a,a=f,f=n.V(30,c),c=o,o=t}s[0]=s[0]+o|0,s[1]=s[1]+c|0,s[2]=s[2]+f|0,s[3]=s[3]+a|0,s[4]=s[4]+l|0}},D={getRandomValues(e){const t=new c(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(r.random()>.5?1:-1))};for(let s,i=0;i<e.length;i+=4){const e=n(4294967296*(s||r.random()));s=987654071*e(),t[i/4]=4294967296*e()|0}return e}},V={importKey:e=>new V.R(_.bytes.m(e)),B(e,t,n,r){if(n=n||1e4,0>r||0>n)throw new s("invalid params to pbkdf2");const i=1+(r>>5)<<2;let o,c,f,a,u;const w=new ArrayBuffer(i),h=new l(w);let d=0;const p=I;for(t=_.bytes.m(t),u=1;(i||1)>d;u++){for(o=c=e.encrypt(p.concat(t,[u])),f=1;n>f;f++)for(c=e.encrypt(c),a=0;a<c.length;a++)o[a]^=c[a];for(f=0;(i||1)>d&&f<o.length;f++)h.setInt32(d,o[f]),d+=4}return w.slice(0,r/8)},R:class{constructor(e){const t=this,n=t.M=P,r=[[],[]];t.U=[new n,new n];const s=t.U[0].blockSize/32;e.length>s&&(e=(new n).update(e).P());for(let t=0;s>t;t++)r[0][t]=909522486^e[t],r[1][t]=1549556828^e[t];t.U[0].update(r[0]),t.U[1].update(r[1]),t.K=new n(t.U[0])}reset(){const e=this;e.K=new e.M(e.U[0]),e.N=!1}update(e){this.N=!0,this.K.update(e)}digest(){const e=this,t=e.K.P(),n=new e.M(e.U[1]).update(t).P();return e.reset(),n}encrypt(e){if(this.N)throw new s("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},R=typeof h!=v&&typeof h.getRandomValues==S,B="Invalid password",E="Invalid signature",M="zipjs-abort-check-password";function U(e){return R?h.getRandomValues(e):D.getRandomValues(e)}const K=16,N={name:"PBKDF2"},O=t.assign({hash:{name:"HMAC"}},N),T=t.assign({iterations:1e3,hash:{name:"SHA-1"}},N),W=["deriveBits"],j=[8,12,16],H=[16,24,32],L=10,F=[0,0,0,0],q=typeof h!=v,G=q&&h.subtle,J=q&&typeof G!=v,Q=_.bytes,X=class{constructor(e){const t=this;t.O=[[[],[],[],[],[]],[[],[],[],[],[]]],t.O[0][0][0]||t.T();const n=t.O[0][4],r=t.O[1],i=e.length;let o,c,f,a=1;if(4!==i&&6!==i&&8!==i)throw new s("invalid aes key size");for(t.v=[c=e.slice(0),f=[]],o=i;4*i+28>o;o++){let e=c[o-1];(o%i===0||8===i&&o%i===4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],o%i===0&&(e=e<<8^e>>>24^a<<24,a=a<<1^283*(a>>7))),c[o]=c[o-i]^e}for(let e=0;o;e++,o--){const t=c[3&e?o:o-4];f[e]=4>=o||4>e?t:r[0][n[t>>>24]]^r[1][n[t>>16&255]]^r[2][n[t>>8&255]]^r[3][n[255&t]]}}encrypt(e){return this.W(e,0)}decrypt(e){return this.W(e,1)}T(){const e=this.O[0],t=this.O[1],n=e[4],r=t[4],s=[],i=[];let o,c,f,a;for(let e=0;256>e;e++)i[(s[e]=e<<1^283*(e>>7))^e]=e;for(let l=o=0;!n[l];l^=c||1,o=i[o]||1){let i=o^o<<1^o<<2^o<<3^o<<4;i=i>>8^255&i^99,n[l]=i,r[i]=l,a=s[f=s[c=s[l]]];let u=16843009*a^65537*f^257*c^16843008*l,w=257*s[i]^16843008*i;for(let n=0;4>n;n++)e[n][l]=w=w<<24^w>>>8,t[n][i]=u=u<<24^u>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}W(e,t){if(4!==e.length)throw new s("invalid aes block size");const n=this.v[t],r=n.length/4-2,i=[0,0,0,0],o=this.O[t],c=o[0],f=o[1],a=o[2],l=o[3],u=o[4];let w,h,d,p=e[0]^n[0],y=e[t?3:1]^n[1],m=e[2]^n[2],b=e[t?1:3]^n[3],g=4;for(let e=0;r>e;e++)w=c[p>>>24]^f[y>>16&255]^a[m>>8&255]^l[255&b]^n[g],h=c[y>>>24]^f[m>>16&255]^a[b>>8&255]^l[255&p]^n[g+1],d=c[m>>>24]^f[b>>16&255]^a[p>>8&255]^l[255&y]^n[g+2],b=c[b>>>24]^f[p>>16&255]^a[y>>8&255]^l[255&m]^n[g+3],g+=4,p=w,y=h,m=d;for(let e=0;4>e;e++)i[t?3&-e:e]=u[p>>>24]<<24^u[y>>16&255]<<16^u[m>>8&255]<<8^u[255&b]^n[g++],w=p,p=y,y=m,m=b,b=w;return i}},Y=class{constructor(e,t){this.j=e,this.H=t,this.L=t}reset(){this.L=this.H}update(e){return this.F(this.j,e,this.L)}q(e){if(255&~(e>>24))e+=1<<24;else{let t=e>>16&255,n=e>>8&255,r=255&e;255===t?(t=0,255===n?(n=0,255===r?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}return e}G(e){0===(e[0]=this.q(e[0]))&&(e[1]=this.q(e[1]))}F(e,t,n){let r;if(!(r=t.length))return[];const s=I.l(t);for(let s=0;r>s;s+=4){this.G(n);const r=e.encrypt(n);t[s]^=r[0],t[s+1]^=r[1],t[s+2]^=r[2],t[s+3]^=r[3]}return I.u(t,s)}},Z=V.R;let $=q&&J&&typeof G.importKey==S,ee=q&&J&&typeof G.deriveBits==S;class te extends p{constructor({password:e,rawPassword:n,signed:r,encryptionStrength:o,checkPasswordOnly:c}){super({start(){t.assign(this,{ready:new u(e=>this.J=e),password:ie(e,n),signed:r,X:o-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:o,J:f,ready:a}=n;r?(await(async(e,t,n,r)=>{const i=await se(e,t,n,ce(r,0,j[t])),o=ce(r,j[t]);if(i[0]!=o[0]||i[1]!=o[1])throw new s(B)})(n,o,r,ce(e,0,j[o]+2)),e=ce(e,j[o]+2),c?t.error(new s(M)):f()):await a;const l=new i(e.length-L-(e.length-L)%K);t.enqueue(re(n,e,l,0,L,!0))},async flush(e){const{signed:t,Y:n,Z:r,pending:o,ready:c}=this;if(r&&n){await c;const f=ce(o,0,o.length-L),a=ce(o,o.length-L);let l=new i;if(f.length){const e=ae(Q,f);r.update(e);const t=n.update(e);l=fe(Q,t)}if(t){const e=ce(fe(Q,r.digest()),0,L);for(let t=0;L>t;t++)if(e[t]!=a[t])throw new s(E)}e.enqueue(l)}}})}}class ne extends p{constructor({password:e,rawPassword:n,encryptionStrength:r}){let s;super({start(){t.assign(this,{ready:new u(e=>this.J=e),password:ie(e,n),X:r-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:s,J:o,ready:c}=n;let f=new i;r?(f=await(async(e,t,n)=>{const r=U(new i(j[t]));return oe(r,await se(e,t,n,r))})(n,s,r),o()):await c;const a=new i(f.length+e.length-e.length%K);a.set(f,0),t.enqueue(re(n,e,a,f.length,0))},async flush(e){const{Y:t,Z:n,pending:r,ready:o}=this;if(n&&t){await o;let c=new i;if(r.length){const e=t.update(ae(Q,r));n.update(e),c=fe(Q,e)}s.signature=fe(Q,n.digest()).slice(0,L),e.enqueue(oe(c,s.signature))}}}),s=this}}function re(e,t,n,r,s,o){const{Y:c,Z:f,pending:a}=e,l=t.length-s;let u;for(a.length&&(t=oe(a,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new i(t)).set(n,0)}return e})(n,l-l%K)),u=0;l-K>=u;u+=K){const e=ae(Q,ce(t,u,u+K));o&&f.update(e);const s=c.update(e);o||f.update(s),n.set(fe(Q,s),u+r)}return e.pending=ce(t,u),n}async function se(n,r,s,o){n.password=null;const c=await(async(e,t,n,r,s)=>{if(!$)return V.importKey(t);try{return await G.importKey("raw",t,n,!1,s)}catch(e){return $=!1,V.importKey(t)}})(0,s,O,0,W),f=await(async(e,t,n)=>{if(!ee)return V.B(t,e.salt,T.iterations,n);try{return await G.deriveBits(e,t,n)}catch(r){return ee=!1,V.B(t,e.salt,T.iterations,n)}})(t.assign({salt:o},T),c,8*(2*H[r]+2)),a=new i(f),l=ae(Q,ce(a,0,H[r])),u=ae(Q,ce(a,H[r],2*H[r])),w=ce(a,2*H[r]);return t.assign(n,{keys:{key:l,$:u,passwordVerification:w},Y:new Y(new X(l),e.from(F)),Z:new Z(u)}),w}function ie(e,t){return t===k?(e=>{if(typeof w==v){const t=new i((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new w).encode(e)})(e):t}function oe(e,t){let n=e;return e.length+t.length&&(n=new i(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function ce(e,t,n){return e.subarray(t,n)}function fe(e,t){return e.p(t)}function ae(e,t){return e.m(t)}class le extends p{constructor({password:e,passwordVerification:n,checkPasswordOnly:r}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;if(n.password){const t=we(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new s(B);e=e.subarray(12)}r?t.error(new s(M)):t.enqueue(we(n,e))}})}}class ue extends p{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;let r,s;if(n.password){n.password=null;const t=U(new i(12));t[11]=n.passwordVerification,r=new i(e.length+t.length),r.set(he(n,t),0),s=12}else r=new i(e.length),s=0;r.set(he(n,e),s),t.enqueue(r)}})}}function we(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,n[r]);return n}function he(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,t[r]);return n}function de(e,n){const r=[305419896,591751049,878082192];t.assign(e,{keys:r,ee:new x(r[0]),te:new x(r[2])});for(let t=0;t<n.length;t++)pe(e,n.charCodeAt(t))}function pe(e,t){let[n,s,i]=e.keys;e.ee.append([t]),n=~e.ee.get(),s=be(r.imul(be(s+me(n)),134775813)+1),e.te.append([s>>>24]),i=~e.te.get(),e.keys=[n,s,i]}function ye(e){const t=2|e.keys[2];return me(r.imul(t,1^t)>>>8)}function me(e){return 255&e}function be(e){return 4294967295&e}const ge="deflate-raw";class ke extends p{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});const{compressed:s,encrypted:i,useCompressionStream:o,zipCrypto:c,signed:f,level:a}=e,u=this;let w,h,d=super.readable;i&&!c||!f||(w=new A,d=Ce(d,w)),s&&(d=ze(d,o,{level:a,chunkSize:t},r,n)),i&&(c?d=Ce(d,new ue(e)):(h=new ne(e),d=Ce(d,h))),Se(u,d,()=>{let e;i&&!c&&(e=h.signature),i&&!c||!f||(e=new l(w.value.buffer).getUint32(0)),u.signature=e})}}class ve extends p{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});const{zipCrypto:i,encrypted:o,signed:c,signature:f,compressed:a,useCompressionStream:u}=e;let w,h,d=super.readable;o&&(i?d=Ce(d,new le(e)):(h=new te(e),d=Ce(d,h))),a&&(d=ze(d,u,{chunkSize:t},r,n)),o&&!i||!c||(w=new A,d=Ce(d,w)),Se(this,d,()=>{if((!o||i)&&c){const e=new l(w.value.buffer);if(f!=e.getUint32(0,!1))throw new s(E)}})}}function Se(e,n,r){n=Ce(n,new p({flush:r})),t.defineProperty(e,"readable",{get:()=>n})}function ze(e,t,n,r,s){try{e=Ce(e,new(t&&r?r:s)(ge,n))}catch(r){if(!t)throw r;e=Ce(e,new s(ge,n))}return e}function Ce(e,t){return e.pipeThrough(t)}const xe="data",Ae="close";class Ie extends p{constructor(e,n){super({});const r=this,{codecType:i}=e;let o;i.startsWith("deflate")?o=ke:i.startsWith("inflate")&&(o=ve),r.outputSize=0;let c=0;const f=new o(e,n),a=super.readable,l=new p({transform(e,t){e&&e.length&&(c+=e.length,t.enqueue(e))},flush(){t.assign(r,{inputSize:c})}}),u=new p({transform(t,n){if(t&&t.length&&(n.enqueue(t),r.outputSize+=t.length,e.outputSize&&r.outputSize>e.outputSize))throw new s("Invalid uncompressed size")},flush(){const{signature:e}=f;t.assign(r,{signature:e,inputSize:c})}});t.defineProperty(r,"readable",{get:()=>a.pipeThrough(l).pipeThrough(f).pipeThrough(u)})}}class _e extends p{constructor(e){let t;super({transform:function n(r,s){if(t){const e=new i(t.length+r.length);e.set(t),e.set(r,t.length),r=e,t=null}r.length>e?(s.enqueue(r.slice(0,e)),n(r.slice(e),s)):t=r},flush(e){t&&t.length&&e.enqueue(t)}})}}const Pe=new a,De=new a;let Ve,Re=0,Be=!0;async function Ee(e){try{const{options:t,scripts:r,config:s}=e;if(r&&r.length)try{Be?importScripts.apply(k,r):await Me(r)}catch(e){Be=!1,await Me(r)}self.initCodec&&self.initCodec(),s.CompressionStreamNative=self.CompressionStream,s.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(s.CompressionStream=new z(self.Deflate)),self.Inflate&&(s.DecompressionStream=new z(self.Inflate));const i={highWaterMark:1},o=e.readable||new y({async pull(e){const t=new u(e=>Pe.set(Re,e));Ue({type:"pull",messageId:Re}),Re=(Re+1)%n.MAX_SAFE_INTEGER;const{value:r,done:s}=await t;e.enqueue(r),s&&e.close()}},i),c=e.writable||new m({async write(e){let t;const r=new u(e=>t=e);De.set(Re,t),Ue({type:xe,value:e,messageId:Re}),Re=(Re+1)%n.MAX_SAFE_INTEGER,await r}},i),f=new Ie(t,s);Ve=new AbortController;const{signal:a}=Ve;await o.pipeThrough(f).pipeThrough(new _e(s.chunkSize)).pipeTo(c,{signal:a,preventClose:!0,preventAbort:!0}),await c.getWriter().close();const{signature:l,inputSize:w,outputSize:h}=f;Ue({type:Ae,result:{signature:l,inputSize:w,outputSize:h}})}catch(e){e.outputSize=0,Ke(e)}}async function Me(e){for(const t of e)await import(t)}function Ue(e){let{value:t}=e;if(t)if(t.length)try{t=new i(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function Ke(e=new s("Unknown error")){const{message:t,stack:n,code:r,name:i,outputSize:o}=e;d({error:{message:t,stack:n,code:r,name:i,outputSize:o}})}addEventListener("message",({data:e})=>{const{type:t,messageId:n,value:r,done:s}=e;try{if("start"==t&&Ee(e),t==xe){const e=Pe.get(n);Pe.delete(n),e({value:new i(r),done:s})}if("ack"==t){const e=De.get(n);De.delete(n),e()}t==Ae&&Ve.abort()}catch(e){Ke(e)}});const Ne=-2;function Oe(t){return Te(t.map(([t,n])=>new e(t).fill(n,0,t)))}function Te(t){return t.reduce((t,n)=>t.concat(e.isArray(n)?Te(n):n),[])}const We=[0,1,2,3].concat(...Oe([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function je(){const e=this;function t(e,t){let n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}e.ne=n=>{const s=e.re,i=e.ie.se,o=e.ie.oe;let c,f,a,l=-1;for(n.ce=0,n.fe=573,c=0;o>c;c++)0!==s[2*c]?(n.ae[++n.ce]=l=c,n.le[c]=0):s[2*c+1]=0;for(;2>n.ce;)a=n.ae[++n.ce]=2>l?++l:0,s[2*a]=1,n.le[a]=0,n.ue--,i&&(n.we-=i[2*a+1]);for(e.he=l,c=r.floor(n.ce/2);c>=1;c--)n.de(s,c);a=o;do{c=n.ae[1],n.ae[1]=n.ae[n.ce--],n.de(s,1),f=n.ae[1],n.ae[--n.fe]=c,n.ae[--n.fe]=f,s[2*a]=s[2*c]+s[2*f],n.le[a]=r.max(n.le[c],n.le[f])+1,s[2*c+1]=s[2*f+1]=a,n.ae[1]=a++,n.de(s,1)}while(n.ce>=2);n.ae[--n.fe]=n.ae[1],(t=>{const n=e.re,r=e.ie.se,s=e.ie.pe,i=e.ie.ye,o=e.ie.me;let c,f,a,l,u,w,h=0;for(l=0;15>=l;l++)t.be[l]=0;for(n[2*t.ae[t.fe]+1]=0,c=t.fe+1;573>c;c++)f=t.ae[c],l=n[2*n[2*f+1]+1]+1,l>o&&(l=o,h++),n[2*f+1]=l,f>e.he||(t.be[l]++,u=0,i>f||(u=s[f-i]),w=n[2*f],t.ue+=w*(l+u),r&&(t.we+=w*(r[2*f+1]+u)));if(0!==h){do{for(l=o-1;0===t.be[l];)l--;t.be[l]--,t.be[l+1]+=2,t.be[o]--,h-=2}while(h>0);for(l=o;0!==l;l--)for(f=t.be[l];0!==f;)a=t.ae[--c],a>e.he||(n[2*a+1]!=l&&(t.ue+=(l-n[2*a+1])*n[2*a],n[2*a+1]=l),f--)}})(n),((e,n,r)=>{const s=[];let i,o,c,f=0;for(i=1;15>=i;i++)s[i]=f=f+r[i-1]<<1;for(o=0;n>=o;o++)c=e[2*o+1],0!==c&&(e[2*o]=t(s[c]++,c))})(s,e.he,n.be)}}function He(e,t,n,r,s){const i=this;i.se=e,i.pe=t,i.ye=n,i.oe=r,i.me=s}je.ge=[0,1,2,3,4,5,6,7].concat(...Oe([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),je.ke=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],je.ve=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],je.Se=e=>256>e?We[e]:We[256+(e>>>7)],je.ze=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],je.Ce=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],je.xe=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],je.Ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const Le=Oe([[144,8],[112,9],[24,7],[8,8]]);He.Ie=Te([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map((e,t)=>[e,Le[t]]));const Fe=Oe([[30,5]]);function qe(e,t,n,r,s){const i=this;i._e=e,i.Pe=t,i.De=n,i.Ve=r,i.Re=s}He.Be=Te([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map((e,t)=>[e,Fe[t]])),He.Ee=new He(He.Ie,je.ze,257,286,15),He.Me=new He(He.Be,je.Ce,0,30,15),He.Ue=new He(null,je.xe,0,19,7);const Ge=[new qe(0,0,0,0,0),new qe(4,4,8,4,1),new qe(4,5,16,8,1),new qe(4,6,32,32,1),new qe(4,4,16,16,2),new qe(8,16,32,32,2),new qe(8,16,128,128,2),new qe(8,32,128,256,2),new qe(32,128,258,1024,2),new qe(32,258,258,4096,2)],Je=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],Qe=113,Xe=666,Ye=262;function Ze(e,t,n,r){const s=e[2*t],i=e[2*n];return i>s||s==i&&r[t]<=r[n]}function $e(){const e=this;let t,n,s,c,f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z,C,x,A,I,_,P,D,V,R,B,E,M,U;const K=new je,N=new je,O=new je;let T,W,j,H,L,F;function q(){let t;for(t=0;286>t;t++)E[2*t]=0;for(t=0;30>t;t++)M[2*t]=0;for(t=0;19>t;t++)U[2*t]=0;E[512]=1,e.ue=e.we=0,W=j=0}function G(e,t){let n,r=-1,s=e[1],i=0,o=7,c=4;0===s&&(o=138,c=3),e[2*(t+1)+1]=65535;for(let f=0;t>=f;f++)n=s,s=e[2*(f+1)+1],++i<o&&n==s||(c>i?U[2*n]+=i:0!==n?(n!=r&&U[2*n]++,U[32]++):i>10?U[36]++:U[34]++,i=0,r=n,0===s?(o=138,c=3):n==s?(o=6,c=3):(o=7,c=4))}function J(t){e.Ke[e.pending++]=t}function Q(e){J(255&e),J(e>>>8&255)}function X(e,t){let n;const r=t;F>16-r?(n=e,L|=n<<F&65535,Q(L),L=n>>>16-F,F+=r-16):(L|=e<<F&65535,F+=r)}function Y(e,t){const n=2*e;X(65535&t[n],65535&t[n+1])}function Z(e,t){let n,r,s=-1,i=e[1],o=0,c=7,f=4;for(0===i&&(c=138,f=3),n=0;t>=n;n++)if(r=i,i=e[2*(n+1)+1],++o>=c||r!=i){if(f>o)do{Y(r,U)}while(0!==--o);else 0!==r?(r!=s&&(Y(r,U),o--),Y(16,U),X(o-3,2)):o>10?(Y(18,U),X(o-11,7)):(Y(17,U),X(o-3,3));o=0,s=r,0===i?(c=138,f=3):r==i?(c=6,f=3):(c=7,f=4)}}function $(){16==F?(Q(L),L=0,F=0):8>F||(J(255&L),L>>>=8,F-=8)}function ee(t,n){let s,i,o;if(e.Ne[W]=t,e.Oe[W]=255&n,W++,0===t?E[2*n]++:(j++,t--,E[2*(je.ge[n]+256+1)]++,M[2*je.Se(t)]++),!(8191&W)&&D>2){for(s=8*W,i=C-k,o=0;30>o;o++)s+=M[2*o]*(5+je.Ce[o]);if(s>>>=3,j<r.floor(W/2)&&s<r.floor(i/2))return!0}return W==T-1}function te(t,n){let r,s,i,o,c=0;if(0!==W)do{r=e.Ne[c],s=e.Oe[c],c++,0===r?Y(s,t):(i=je.ge[s],Y(i+256+1,t),o=je.ze[i],0!==o&&(s-=je.ke[i],X(s,o)),r--,i=je.Se(r),Y(i,n),o=je.Ce[i],0!==o&&(r-=je.ve[i],X(r,o)))}while(W>c);Y(256,t),H=t[513]}function ne(){F>8?Q(L):F>0&&J(255&L),L=0,F=0}function re(t,n,r){X(0+(r?1:0),3),((t,n)=>{ne(),H=8,Q(n),Q(~n),e.Ke.set(u.subarray(t,t+n),e.pending),e.pending+=n})(t,n)}function se(n){((t,n,r)=>{let s,i,o=0;D>0?(K.ne(e),N.ne(e),o=(()=>{let t;for(G(E,K.he),G(M,N.he),O.ne(e),t=18;t>=3&&0===U[2*je.Ae[t]+1];t--);return e.ue+=14+3*(t+1),t})(),s=e.ue+3+7>>>3,i=e.we+3+7>>>3,i>s||(s=i)):s=i=n+5,n+4>s||-1==t?i==s?(X(2+(r?1:0),3),te(He.Ie,He.Be)):(X(4+(r?1:0),3),((e,t,n)=>{let r;for(X(e-257,5),X(t-1,5),X(n-4,4),r=0;n>r;r++)X(U[2*je.Ae[r]+1],3);Z(E,e-1),Z(M,t-1)})(K.he+1,N.he+1,o+1),te(E,M)):re(t,n,r),q(),r&&ne()})(0>k?-1:k,C-k,n),k=C,t.Te()}function ie(){let e,n,r,s;do{if(s=w-A-C,0===s&&0===C&&0===A)s=f;else if(-1==s)s--;else if(C>=f+f-Ye){u.set(u.subarray(f,f+f),0),x-=f,C-=f,k-=f,e=y,r=e;do{n=65535&d[--r],d[r]=f>n?0:n-f}while(0!==--e);e=f,r=e;do{n=65535&h[--r],h[r]=f>n?0:n-f}while(0!==--e);s+=f}if(0===t.We)return;e=t.je(u,C+A,s),A+=e,3>A||(p=255&u[C],p=(p<<g^255&u[C+1])&b)}while(Ye>A&&0!==t.We)}function oe(e){let t,n,r=_,s=C,i=I;const o=C>f-Ye?C-(f-Ye):0;let c=B;const a=l,w=C+258;let d=u[s+i-1],p=u[s+i];R>I||(r>>=2),c>A&&(c=A);do{if(t=e,u[t+i]==p&&u[t+i-1]==d&&u[t]==u[s]&&u[++t]==u[s+1]){s+=2,t++;do{}while(u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&w>s);if(n=258-(w-s),s=w-258,n>i){if(x=e,i=n,n>=c)break;d=u[s+i-1],p=u[s+i]}}}while((e=65535&h[e&a])>o&&0!==--r);return i>A?A:i}e.le=[],e.be=[],e.ae=[],E=[],M=[],U=[],e.de=(t,n)=>{const r=e.ae,s=r[n];let i=n<<1;for(;i<=e.ce&&(i<e.ce&&Ze(t,r[i+1],r[i],e.le)&&i++,!Ze(t,s,r[i],e.le));)r[n]=r[i],n=i,i<<=1;r[n]=s},e.He=(t,S,x,W,j,G)=>(W||(W=8),j||(j=8),G||(G=0),t.Le=null,-1==S&&(S=6),1>j||j>9||8!=W||9>x||x>15||0>S||S>9||0>G||G>2?Ne:(t.Fe=e,a=x,f=1<<a,l=f-1,m=j+7,y=1<<m,b=y-1,g=r.floor((m+3-1)/3),u=new i(2*f),h=[],d=[],T=1<<j+6,e.Ke=new i(4*T),s=4*T,e.Ne=new o(T),e.Oe=new i(T),D=S,V=G,(t=>(t.qe=t.Ge=0,t.Le=null,e.pending=0,e.Je=0,n=Qe,c=0,K.re=E,K.ie=He.Ee,N.re=M,N.ie=He.Me,O.re=U,O.ie=He.Ue,L=0,F=0,H=8,q(),(()=>{w=2*f,d[y-1]=0;for(let e=0;y-1>e;e++)d[e]=0;P=Ge[D].Pe,R=Ge[D]._e,B=Ge[D].De,_=Ge[D].Ve,C=0,k=0,A=0,v=I=2,z=0,p=0})(),0))(t))),e.Qe=()=>42!=n&&n!=Qe&&n!=Xe?Ne:(e.Oe=null,e.Ne=null,e.Ke=null,d=null,h=null,u=null,e.Fe=null,n==Qe?-3:0),e.Xe=(e,t,n)=>{let r=0;return-1==t&&(t=6),0>t||t>9||0>n||n>2?Ne:(Ge[D].Re!=Ge[t].Re&&0!==e.qe&&(r=e.Ye(1)),D!=t&&(D=t,P=Ge[D].Pe,R=Ge[D]._e,B=Ge[D].De,_=Ge[D].Ve),V=n,r)},e.Ze=(e,t,r)=>{let s,i=r,o=0;if(!t||42!=n)return Ne;if(3>i)return 0;for(i>f-Ye&&(i=f-Ye,o=r-i),u.set(t.subarray(o,o+i),0),C=i,k=i,p=255&u[0],p=(p<<g^255&u[1])&b,s=0;i-3>=s;s++)p=(p<<g^255&u[s+2])&b,h[s&l]=d[p],d[p]=s;return 0},e.Ye=(r,i)=>{let o,w,m,_,R;if(i>4||0>i)return Ne;if(!r.$e||!r.et&&0!==r.We||n==Xe&&4!=i)return r.Le=Je[4],Ne;if(0===r.tt)return r.Le=Je[7],-5;var B;if(t=r,_=c,c=i,42==n&&(w=8+(a-8<<4)<<8,m=(D-1&255)>>1,m>3&&(m=3),w|=m<<6,0!==C&&(w|=32),w+=31-w%31,n=Qe,J((B=w)>>8&255),J(255&B)),0!==e.pending){if(t.Te(),0===t.tt)return c=-1,0}else if(0===t.We&&_>=i&&4!=i)return t.Le=Je[7],-5;if(n==Xe&&0!==t.We)return r.Le=Je[7],-5;if(0!==t.We||0!==A||0!=i&&n!=Xe){switch(R=-1,Ge[D].Re){case 0:R=(e=>{let n,r=65535;for(r>s-5&&(r=s-5);;){if(1>=A){if(ie(),0===A&&0==e)return 0;if(0===A)break}if(C+=A,A=0,n=k+r,(0===C||C>=n)&&(A=C-n,C=n,se(!1),0===t.tt))return 0;if(C-k>=f-Ye&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 1:R=(e=>{let n,r=0;for(;;){if(Ye>A){if(ie(),Ye>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C),0===r||(C-r&65535)>f-Ye||2!=V&&(v=oe(r)),3>v)n=ee(0,255&u[C]),A--,C++;else if(n=ee(C-x,v-3),A-=v,v>P||3>A)C+=v,v=0,p=255&u[C],p=(p<<g^255&u[C+1])&b;else{v--;do{C++,p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C}while(0!==--v);C++}if(n&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 2:R=(e=>{let n,r,s=0;for(;;){if(Ye>A){if(ie(),Ye>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C),I=v,S=x,v=2,0!==s&&P>I&&f-Ye>=(C-s&65535)&&(2!=V&&(v=oe(s)),5>=v&&(1==V||3==v&&C-x>4096)&&(v=2)),3>I||v>I)if(0!==z){if(n=ee(0,255&u[C-1]),n&&se(!1),C++,A--,0===t.tt)return 0}else z=1,C++,A--;else{r=C+A-3,n=ee(C-1-S,I-3),A-=I-1,I-=2;do{++C>r||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C)}while(0!==--I);if(z=0,v=2,C++,n&&(se(!1),0===t.tt))return 0}}return 0!==z&&(n=ee(0,255&u[C-1]),z=0),se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i)}if(2!=R&&3!=R||(n=Xe),0==R||2==R)return 0===t.tt&&(c=-1),0;if(1==R){if(1==i)X(2,3),Y(256,He.Ie),$(),9>1+H+10-F&&(X(2,3),Y(256,He.Ie),$()),H=7;else if(re(0,0,!1),3==i)for(o=0;y>o;o++)d[o]=0;if(t.Te(),0===t.tt)return c=-1,0}}return 4!=i?0:1}}function et(){const e=this;e.nt=0,e.rt=0,e.We=0,e.qe=0,e.tt=0,e.Ge=0}function tt(e){const t=new et,n=(o=e&&e.chunkSize?e.chunkSize:65536)+5*(r.floor(o/16383)+1);var o;const c=new i(n);let f=e?e.level:-1;void 0===f&&(f=-1),t.He(f),t.$e=c,this.append=(e,r)=>{let o,f,a=0,l=0,u=0;const w=[];if(e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,o=t.Ye(0),0!=o)throw new s("deflating: "+t.Le);t.rt&&(t.rt==n?w.push(new i(c)):w.push(c.subarray(0,t.rt))),u+=t.rt,r&&t.nt>0&&t.nt!=a&&(r(t.nt),a=t.nt)}while(t.We>0||0===t.tt);return w.length>1?(f=new i(u),w.forEach(e=>{f.set(e,l),l+=e.length})):f=w[0]?new i(w[0]):new i,f}},this.flush=()=>{let e,r,o=0,f=0;const a=[];do{if(t.rt=0,t.tt=n,e=t.Ye(4),1!=e&&0!=e)throw new s("deflating: "+t.Le);n-t.tt>0&&a.push(c.slice(0,t.rt)),f+=t.rt}while(t.We>0||0===t.tt);return t.Qe(),r=new i(f),a.forEach(e=>{r.set(e,o),o+=e.length}),r}}et.prototype={He(e,t){const n=this;return n.Fe=new $e,t||(t=15),n.Fe.He(n,e,t)},Ye(e){const t=this;return t.Fe?t.Fe.Ye(t,e):Ne},Qe(){const e=this;if(!e.Fe)return Ne;const t=e.Fe.Qe();return e.Fe=null,t},Xe(e,t){const n=this;return n.Fe?n.Fe.Xe(n,e,t):Ne},Ze(e,t){const n=this;return n.Fe?n.Fe.Ze(n,e,t):Ne},je(e,t,n){const r=this;let s=r.We;return s>n&&(s=n),0===s?0:(r.We-=s,e.set(r.et.subarray(r.nt,r.nt+s),t),r.nt+=s,r.qe+=s,s)},Te(){const e=this;let t=e.Fe.pending;t>e.tt&&(t=e.tt),0!==t&&(e.$e.set(e.Fe.Ke.subarray(e.Fe.Je,e.Fe.Je+t),e.rt),e.rt+=t,e.Fe.Je+=t,e.Ge+=t,e.tt-=t,e.Fe.pending-=t,0===e.Fe.pending&&(e.Fe.Je=0))}};const nt=-2,rt=-3,st=-5,it=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],ot=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],ct=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],ft=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],at=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],lt=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],ut=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function wt(){let e,t,n,r,s,i;function o(e,t,o,c,f,a,l,u,w,h,d){let p,y,m,b,g,k,v,S,z,C,x,A,I,_,P;C=0,g=o;do{n[e[t+C]]++,C++,g--}while(0!==g);if(n[0]==o)return l[0]=-1,u[0]=0,0;for(S=u[0],k=1;15>=k&&0===n[k];k++);for(v=k,k>S&&(S=k),g=15;0!==g&&0===n[g];g--);for(m=g,S>g&&(S=g),u[0]=S,_=1<<k;g>k;k++,_<<=1)if(0>(_-=n[k]))return rt;if(0>(_-=n[g]))return rt;for(n[g]+=_,i[1]=k=0,C=1,I=2;0!==--g;)i[I]=k+=n[C],I++,C++;g=0,C=0;do{0!==(k=e[t+C])&&(d[i[k]++]=g),C++}while(++g<o);for(o=i[m],i[0]=g=0,C=0,b=-1,A=-S,s[0]=0,x=0,P=0;m>=v;v++)for(p=n[v];0!==p--;){for(;v>A+S;){if(b++,A+=S,P=m-A,P=P>S?S:P,(y=1<<(k=v-A))>p+1&&(y-=p+1,I=v,P>k))for(;++k<P&&(y<<=1)>n[++I];)y-=n[I];if(P=1<<k,h[0]+P>1440)return rt;s[b]=x=h[0],h[0]+=P,0!==b?(i[b]=g,r[0]=k,r[1]=S,k=g>>>A-S,r[2]=x-s[b-1]-k,w.set(r,3*(s[b-1]+k))):l[0]=x}for(r[1]=v-A,o>C?d[C]<c?(r[0]=256>d[C]?0:96,r[2]=d[C++]):(r[0]=a[d[C]-c]+16+64,r[2]=f[d[C++]-c]):r[0]=192,y=1<<v-A,k=g>>>A;P>k;k+=y)w.set(r,3*(x+k));for(k=1<<v-1;0!==(g&k);k>>>=1)g^=k;for(g^=k,z=(1<<A)-1;(g&z)!=i[b];)b--,A-=S,z=(1<<A)-1}return 0!==_&&1!=m?st:0}function c(o){let c;for(e||(e=[],t=[],n=new f(16),r=[],s=new f(15),i=new f(16)),t.length<o&&(t=[]),c=0;o>c;c++)t[c]=0;for(c=0;16>c;c++)n[c]=0;for(c=0;3>c;c++)r[c]=0;s.set(n.subarray(0,15),0),i.set(n.subarray(0,16),0)}this.st=(n,r,s,i,f)=>{let a;return c(19),e[0]=0,a=o(n,0,19,19,null,null,s,r,i,e,t),a==rt?f.Le="oversubscribed dynamic bit lengths tree":a!=st&&0!==r[0]||(f.Le="incomplete dynamic bit lengths tree",a=rt),a},this.it=(n,r,s,i,f,a,l,u,w)=>{let h;return c(288),e[0]=0,h=o(s,0,n,257,ft,at,a,i,u,e,t),0!=h||0===i[0]?(h==rt?w.Le="oversubscribed literal/length tree":-4!=h&&(w.Le="incomplete literal/length tree",h=rt),h):(c(288),h=o(s,n,r,0,lt,ut,l,f,u,e,t),0!=h||0===f[0]&&n>257?(h==rt?w.Le="oversubscribed distance tree":h==st?(w.Le="incomplete distance tree",h=rt):-4!=h&&(w.Le="empty distance tree with lengths",h=rt),h):0)}}function ht(){const e=this;let t,n,r,s,i=0,o=0,c=0,f=0,a=0,l=0,u=0,w=0,h=0,d=0;function p(e,t,n,r,s,i,o,c){let f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z;d=c.nt,p=c.We,w=o.ot,h=o.ct,y=o.write,m=y<o.read?o.read-y-1:o.end-y,b=it[e],g=it[t];do{for(;20>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(f=w&b,a=n,l=r,z=3*(l+f),0!==(u=a[z]))for(;;){if(w>>=a[z+1],h-=a[z+1],16&u){for(u&=15,k=a[z+2]+(w&it[u]),w>>=u,h-=u;15>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;for(f=w&g,a=s,l=i,z=3*(l+f),u=a[z];;){if(w>>=a[z+1],h-=a[z+1],16&u){for(u&=15;u>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(v=a[z+2]+(w&it[u]),w>>=u,h-=u,m-=k,v>y){S=y-v;do{S+=o.end}while(0>S);if(u=o.end-S,k>u){if(k-=u,y-S>0&&u>y-S)do{o.lt[y++]=o.lt[S++]}while(0!==--u);else o.lt.set(o.lt.subarray(S,S+u),y),y+=u,S+=u,u=0;S=0}}else S=y-v,y-S>0&&2>y-S?(o.lt[y++]=o.lt[S++],o.lt[y++]=o.lt[S++],k-=2):(o.lt.set(o.lt.subarray(S,S+2),y),y+=2,S+=2,k-=2);if(y-S>0&&k>y-S)do{o.lt[y++]=o.lt[S++]}while(0!==--k);else o.lt.set(o.lt.subarray(S,S+k),y),y+=k,S+=k,k=0;break}if(64&u)return c.Le="invalid distance code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,rt;f+=a[z+2],f+=w&it[u],z=3*(l+f),u=a[z]}break}if(64&u)return 32&u?(k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,1):(c.Le="invalid literal/length code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,rt);if(f+=a[z+2],f+=w&it[u],z=3*(l+f),0===(u=a[z])){w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--;break}}else w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--}while(m>=258&&p>=10);return k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,0}e.init=(e,i,o,c,f,a)=>{t=0,u=e,w=i,r=o,h=c,s=f,d=a,n=null},e.ut=(e,y,m)=>{let b,g,k,v,S,z,C,x=0,A=0,I=0;for(I=y.nt,v=y.We,x=e.ot,A=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S;;)switch(t){case 0:if(z>=258&&v>=10&&(e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,m=p(u,w,r,h,s,d,e,y),I=y.nt,v=y.We,x=e.ot,A=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S,0!=m)){t=1==m?7:9;break}c=u,n=r,o=h,t=1;case 1:for(b=c;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(I++))<<A,A+=8}if(g=3*(o+(x&it[b])),x>>>=n[g+1],A-=n[g+1],k=n[g],0===k){f=n[g+2],t=6;break}if(16&k){a=15&k,i=n[g+2],t=2;break}if(!(64&k)){c=k,o=g/3+n[g+2];break}if(32&k){t=7;break}return t=9,y.Le="invalid literal/length code",m=rt,e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,e.wt(y,m);case 2:for(b=a;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(I++))<<A,A+=8}i+=x&it[b],x>>=b,A-=b,c=w,n=s,o=d,t=3;case 3:for(b=c;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(I++))<<A,A+=8}if(g=3*(o+(x&it[b])),x>>=n[g+1],A-=n[g+1],k=n[g],16&k){a=15&k,l=n[g+2],t=4;break}if(!(64&k)){c=k,o=g/3+n[g+2];break}return t=9,y.Le="invalid distance code",m=rt,e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,e.wt(y,m);case 4:for(b=a;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(I++))<<A,A+=8}l+=x&it[b],x>>=b,A-=b,t=5;case 5:for(C=S-l;0>C;)C+=e.end;for(;0!==i;){if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,e.wt(y,m);e.lt[S++]=e.lt[C++],z--,C==e.end&&(C=0),i--}t=0;break;case 6:if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,e.wt(y,m);m=0,e.lt[S++]=f,z--,t=0;break;case 7:if(A>7&&(A-=8,v++,I--),e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,e.read!=e.write)return e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,e.wt(y,m);t=8;case 8:return m=1,e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,e.wt(y,m);case 9:return m=rt,e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,e.wt(y,m);default:return m=nt,e.ot=x,e.ct=A,y.We=v,y.qe+=I-y.nt,y.nt=I,e.write=S,e.wt(y,m)}},e.ht=()=>{}}wt.dt=(e,t,n,r)=>(e[0]=9,t[0]=5,n[0]=ot,r[0]=ct,0);const dt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function pt(e,t){const n=this;let r,s=0,o=0,c=0,a=0;const l=[0],u=[0],w=new ht;let h=0,d=new f(4320);const p=new wt;n.ct=0,n.ot=0,n.lt=new i(t),n.end=t,n.read=0,n.write=0,n.reset=(e,t)=>{t&&(t[0]=0),6==s&&w.ht(e),s=0,n.ct=0,n.ot=0,n.read=n.write=0},n.reset(e,null),n.wt=(e,t)=>{let r,s,i;return s=e.rt,i=n.read,r=(i>n.write?n.end:n.write)-i,r>e.tt&&(r=e.tt),0!==r&&t==st&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r,i==n.end&&(i=0,n.write==n.end&&(n.write=0),r=n.write-i,r>e.tt&&(r=e.tt),0!==r&&t==st&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r),e.rt=s,n.read=i,t},n.ut=(e,t)=>{let i,f,y,m,b,g,k,v;for(m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g;;){let S,z,C,x,A,I,_,P;switch(s){case 0:for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}switch(i=7&f,h=1&i,i>>>1){case 0:f>>>=3,y-=3,i=7&y,f>>>=i,y-=i,s=1;break;case 1:S=[],z=[],C=[[]],x=[[]],wt.dt(S,z,C,x),w.init(S[0],z[0],C[0],0,x[0],0),f>>>=3,y-=3,s=6;break;case 2:f>>>=3,y-=3,s=3;break;case 3:return f>>>=3,y-=3,s=9,e.Le="invalid block type",t=rt,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}break;case 1:for(;32>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if((~f>>>16&65535)!=(65535&f))return s=9,e.Le="invalid stored block lengths",t=rt,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);o=65535&f,f=y=0,s=0!==o?2:0!==h?7:0;break;case 2:if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(0===k&&(g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k&&(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k)))return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(t=0,i=o,i>b&&(i=b),i>k&&(i=k),n.lt.set(e.je(m,i),g),m+=i,b-=i,g+=i,k-=i,0!==(o-=i))break;s=0!==h?7:0;break;case 3:for(;14>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(c=i=16383&f,(31&i)>29||(i>>5&31)>29)return s=9,e.Le="too many length or distance symbols",t=rt,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(i=258+(31&i)+(i>>5&31),!r||r.length<i)r=[];else for(v=0;i>v;v++)r[v]=0;f>>>=14,y-=14,a=0,s=4;case 4:for(;4+(c>>>10)>a;){for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}r[dt[a++]]=7&f,f>>>=3,y-=3}for(;19>a;)r[dt[a++]]=0;if(l[0]=7,i=p.st(r,l,u,d,e),0!=i)return(t=i)==rt&&(r=null,s=9),n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);a=0,s=5;case 5:for(;i=c,258+(31&i)+(i>>5&31)>a;){let o,w;for(i=l[0];i>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(i=d[3*(u[0]+(f&it[i]))+1],w=d[3*(u[0]+(f&it[i]))+2],16>w)f>>>=i,y-=i,r[a++]=w;else{for(v=18==w?7:w-14,o=18==w?11:3;i+v>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(f>>>=i,y-=i,o+=f&it[v],f>>>=v,y-=v,v=a,i=c,v+o>258+(31&i)+(i>>5&31)||16==w&&1>v)return r=null,s=9,e.Le="invalid bit length repeat",t=rt,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w=16==w?r[v-1]:0;do{r[v++]=w}while(0!==--o);a=v}}if(u[0]=-1,A=[],I=[],_=[],P=[],A[0]=9,I[0]=6,i=c,i=p.it(257+(31&i),1+(i>>5&31),r,A,I,_,P,d,e),0!=i)return i==rt&&(r=null,s=9),t=i,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w.init(A[0],I[0],d,_[0],d,P[0]),s=6;case 6:if(n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,1!=(t=w.ut(n,e,t)))return n.wt(e,t);if(t=0,w.ht(e),m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g,0===h){s=0;break}s=7;case 7:if(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);s=8;case 8:return t=1,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);case 9:return t=rt,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);default:return t=nt,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}}},n.ht=e=>{n.reset(e,null),n.lt=null,d=null},n.yt=(e,t,r)=>{n.lt.set(e.subarray(t,t+r),0),n.read=n.write=r},n.bt=()=>1==s?1:0}const yt=13,mt=[0,0,255,255];function bt(){const e=this;function t(e){return e&&e.gt?(e.qe=e.Ge=0,e.Le=null,e.gt.mode=7,e.gt.kt.reset(e,null),0):nt}e.mode=0,e.method=0,e.vt=[0],e.St=0,e.marker=0,e.zt=0,e.Ct=t=>(e.kt&&e.kt.ht(t),e.kt=null,0),e.xt=(n,r)=>(n.Le=null,e.kt=null,8>r||r>15?(e.Ct(n),nt):(e.zt=r,n.gt.kt=new pt(n,1<<r),t(n),0)),e.At=(e,t)=>{let n,r;if(!e||!e.gt||!e.et)return nt;const s=e.gt;for(t=4==t?st:0,n=st;;)switch(s.mode){case 0:if(0===e.We)return n;if(n=t,e.We--,e.qe++,8!=(15&(s.method=e.ft(e.nt++)))){s.mode=yt,e.Le="unknown compression method",s.marker=5;break}if(8+(s.method>>4)>s.zt){s.mode=yt,e.Le="invalid win size",s.marker=5;break}s.mode=1;case 1:if(0===e.We)return n;if(n=t,e.We--,e.qe++,r=255&e.ft(e.nt++),((s.method<<8)+r)%31!=0){s.mode=yt,e.Le="incorrect header check",s.marker=5;break}if(!(32&r)){s.mode=7;break}s.mode=2;case 2:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St=(255&e.ft(e.nt++))<<24&4278190080,s.mode=3;case 3:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<16&16711680,s.mode=4;case 4:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<8&65280,s.mode=5;case 5:return 0===e.We?n:(n=t,e.We--,e.qe++,s.St+=255&e.ft(e.nt++),s.mode=6,2);case 6:return s.mode=yt,e.Le="need dictionary",s.marker=0,nt;case 7:if(n=s.kt.ut(e,n),n==rt){s.mode=yt,s.marker=0;break}if(0==n&&(n=t),1!=n)return n;n=t,s.kt.reset(e,s.vt),s.mode=12;case 12:return e.We=0,1;case yt:return rt;default:return nt}},e.It=(e,t,n)=>{let r=0,s=n;if(!e||!e.gt||6!=e.gt.mode)return nt;const i=e.gt;return s<1<<i.zt||(s=(1<<i.zt)-1,r=n-s),i.kt.yt(t,r,s),i.mode=7,0},e._t=e=>{let n,r,s,i,o;if(!e||!e.gt)return nt;const c=e.gt;if(c.mode!=yt&&(c.mode=yt,c.marker=0),0===(n=e.We))return st;for(r=e.nt,s=c.marker;0!==n&&4>s;)e.ft(r)==mt[s]?s++:s=0!==e.ft(r)?0:4-s,r++,n--;return e.qe+=r-e.nt,e.nt=r,e.We=n,c.marker=s,4!=s?rt:(i=e.qe,o=e.Ge,t(e),e.qe=i,e.Ge=o,c.mode=7,0)},e.Pt=e=>e&&e.gt&&e.gt.kt?e.gt.kt.bt():nt}function gt(){}function kt(e){const t=new gt,n=e&&e.chunkSize?r.floor(2*e.chunkSize):131072,o=new i(n);let c=!1;t.xt(),t.$e=o,this.append=(e,r)=>{const f=[];let a,l,u=0,w=0,h=0;if(0!==e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,0!==t.We||c||(t.nt=0,c=!0),a=t.At(0),c&&a===st){if(0!==t.We)throw new s("inflating: bad input")}else if(0!==a&&1!==a)throw new s("inflating: "+t.Le);if((c||1===a)&&t.We===e.length)throw new s("inflating: bad input");t.rt&&(t.rt===n?f.push(new i(o)):f.push(o.subarray(0,t.rt))),h+=t.rt,r&&t.nt>0&&t.nt!=u&&(r(t.nt),u=t.nt)}while(t.We>0||0===t.tt);return f.length>1?(l=new i(h),f.forEach(e=>{l.set(e,w),w+=e.length})):l=f[0]?new i(f[0]):new i,l}},this.flush=()=>{t.Ct()}}gt.prototype={xt(e){const t=this;return t.gt=new bt,e||(e=15),t.gt.xt(t,e)},At(e){const t=this;return t.gt?t.gt.At(t,e):nt},Ct(){const e=this;if(!e.gt)return nt;const t=e.gt.Ct(e);return e.gt=null,t},_t(){const e=this;return e.gt?e.gt._t(e):nt},It(e,t){const n=this;return n.gt?n.gt.It(n,e,t):nt},ft(e){return this.et[e]},je(e,t){return this.et.subarray(e,e+t)}},self.initCodec=()=>{self.Deflate=tt,self.Inflate=kt};
`,a=()=>r.useDataURI?"data:text/javascript,"+encodeURIComponent(n):URL.createObjectURL(new Blob([n],{type:"text/javascript"}));t({workerScripts:{inflate:[a],deflate:[a]}})}const ERR_ITERATOR_COMPLETED_TOO_SOON="Writer iterator completed too soon",ERR_WRITER_NOT_INITIALIZED="Writer not initialized",DEFAULT_CHUNK_SIZE=64*1024,PROPERTY_NAME_WRITABLE="writable";class Stream{constructor(){this.size=0}init(){this.initialized=!0}}class Reader extends Stream{get readable(){const r=this,{chunkSize:n=DEFAULT_CHUNK_SIZE}=r,a=new ReadableStream({start(){this.chunkOffset=0},async pull(o){const{offset:l=0,size:c,diskNumberStart:_}=a,{chunkOffset:u}=this,p=c===UNDEFINED_VALUE?n:Math.min(n,c-u),d=await readUint8Array(r,l+u,p,_);o.enqueue(d),u+n>c||c===UNDEFINED_VALUE&&!d.length&&p?o.close():this.chunkOffset+=n}});return a}}class Writer extends Stream{constructor(){super();const r=this,n=new WritableStream({write(a){if(!r.initialized)throw new Error(ERR_WRITER_NOT_INITIALIZED);return r.writeUint8Array(a)}});Object.defineProperty(r,PROPERTY_NAME_WRITABLE,{get(){return n}})}writeUint8Array(){}}class BlobReader extends Reader{constructor(r){super(),Object.assign(this,{blob:r,size:r.size})}async readUint8Array(r,n){const a=this,o=r+n;let c=await(r||o<a.size?a.blob.slice(r,o):a.blob).arrayBuffer();return c.byteLength>n&&(c=c.slice(r,o)),new Uint8Array(c)}}class Uint8ArrayWriter extends Writer{init(r=0){Object.assign(this,{offset:0,array:new Uint8Array(r)}),super.init()}writeUint8Array(r){const n=this;if(n.offset+r.length>n.array.length){const a=n.array;n.array=new Uint8Array(a.length+r.length),n.array.set(a)}n.array.set(r,n.offset),n.offset+=r.length}getData(){return this.array}}class SplitDataReader extends Reader{constructor(r){super(),this.readers=r}async init(){const r=this,{readers:n}=r;r.lastDiskNumber=0,r.lastDiskOffset=0,await Promise.all(n.map(async(a,o)=>{await a.init(),o!=n.length-1&&(r.lastDiskOffset+=a.size),r.size+=a.size})),super.init()}async readUint8Array(r,n,a=0){const o=this,{readers:l}=this;let c,_=a;_==-1&&(_=l.length-1);let u=r;for(;l[_]&&u>=l[_].size;)u-=l[_].size,_++;const p=l[_];if(p){const d=p.size;if(u+n<=d)c=await readUint8Array(p,u,n);else{const m=d-u;c=new Uint8Array(n);const f=await readUint8Array(p,u,m);c.set(f,0);const g=await o.readUint8Array(r+m,n-m,a);c.set(g,m),f.length+g.length<n&&(c=c.subarray(0,f.length+g.length))}}else c=new Uint8Array;return o.lastDiskNumber=Math.max(_,o.lastDiskNumber),c}}class SplitDataWriter extends Stream{constructor(r,n=4294967295){super();const a=this;Object.assign(a,{diskNumber:0,diskOffset:0,size:0,maxSize:n,availableSize:n});let o,l,c;const _=new WritableStream({async write(d){const{availableSize:m}=a;if(c)d.length>=m?(await u(d.subarray(0,m)),await p(),a.diskOffset+=o.size,a.diskNumber++,c=null,await this.write(d.subarray(m))):await u(d);else{const{value:f,done:g}=await r.next();if(g&&!f)throw new Error(ERR_ITERATOR_COMPLETED_TOO_SOON);o=f,o.size=0,o.maxSize&&(a.maxSize=o.maxSize),a.availableSize=a.maxSize,await initStream(o),l=f.writable,c=l.getWriter(),await this.write(d)}},async close(){await c.ready,await p()}});Object.defineProperty(a,PROPERTY_NAME_WRITABLE,{get(){return _}});async function u(d){const m=d.length;m&&(await c.ready,await c.write(d),o.size+=m,a.size+=m,a.availableSize-=m)}async function p(){await c.close()}}}class GenericReader{constructor(r){return Array.isArray(r)&&(r=new SplitDataReader(r)),r instanceof ReadableStream&&(r={readable:r}),r}}class GenericWriter{constructor(r){return r.writable===UNDEFINED_VALUE&&typeof r.next==FUNCTION_TYPE&&(r=new SplitDataWriter(r)),r instanceof WritableStream&&(r={writable:r}),r.size===UNDEFINED_VALUE&&(r.size=0),r instanceof SplitDataWriter||Object.assign(r,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),r}}async function initStream(t,r){if(t.init&&!t.initialized)await t.init(r);else return Promise.resolve()}function readUint8Array(t,r,n,a){return t.readUint8Array(r,n,a)}const CP437="\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(""),VALID_CP437=CP437.length==256;function decodeCP437(t){if(VALID_CP437){let r="";for(let n=0;n<t.length;n++)r+=CP437[t[n]];return r}else return new TextDecoder().decode(t)}function decodeText(t,r){return r&&r.trim().toLowerCase()=="cp437"?decodeCP437(t):new TextDecoder(r).decode(t)}const PROPERTY_NAME_FILENAME="filename",PROPERTY_NAME_RAW_FILENAME="rawFilename",PROPERTY_NAME_COMMENT="comment",PROPERTY_NAME_RAW_COMMENT="rawComment",PROPERTY_NAME_UNCOMPRESSED_SIZE="uncompressedSize",PROPERTY_NAME_COMPRESSED_SIZE="compressedSize",PROPERTY_NAME_OFFSET="offset",PROPERTY_NAME_DISK_NUMBER_START="diskNumberStart",PROPERTY_NAME_LAST_MODIFICATION_DATE="lastModDate",PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE="rawLastModDate",PROPERTY_NAME_LAST_ACCESS_DATE="lastAccessDate",PROPERTY_NAME_RAW_LAST_ACCESS_DATE="rawLastAccessDate",PROPERTY_NAME_CREATION_DATE="creationDate",PROPERTY_NAME_RAW_CREATION_DATE="rawCreationDate",PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTE="internalFileAttribute",PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES="internalFileAttributes",PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTE="externalFileAttribute",PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES="externalFileAttributes",PROPERTY_NAME_MS_DOS_COMPATIBLE="msDosCompatible",PROPERTY_NAME_ZIP64="zip64",PROPERTY_NAME_ENCRYPTED="encrypted",PROPERTY_NAME_VERSION="version",PROPERTY_NAME_VERSION_MADE_BY="versionMadeBy",PROPERTY_NAME_ZIPCRYPTO="zipCrypto",PROPERTY_NAME_DIRECTORY="directory",PROPERTY_NAME_EXECUTABLE="executable",PROPERTY_NAME_COMPRESSION_METHOD="compressionMethod",PROPERTY_NAME_SIGNATURE="signature",PROPERTY_NAME_EXTRA_FIELD="extraField",PROPERTY_NAMES=[PROPERTY_NAME_FILENAME,PROPERTY_NAME_RAW_FILENAME,PROPERTY_NAME_COMPRESSED_SIZE,PROPERTY_NAME_UNCOMPRESSED_SIZE,PROPERTY_NAME_LAST_MODIFICATION_DATE,PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE,PROPERTY_NAME_COMMENT,PROPERTY_NAME_RAW_COMMENT,PROPERTY_NAME_LAST_ACCESS_DATE,PROPERTY_NAME_CREATION_DATE,PROPERTY_NAME_OFFSET,PROPERTY_NAME_DISK_NUMBER_START,PROPERTY_NAME_DISK_NUMBER_START,PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTE,PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES,PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTE,PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES,PROPERTY_NAME_MS_DOS_COMPATIBLE,PROPERTY_NAME_ZIP64,PROPERTY_NAME_ENCRYPTED,PROPERTY_NAME_VERSION,PROPERTY_NAME_VERSION_MADE_BY,PROPERTY_NAME_ZIPCRYPTO,PROPERTY_NAME_DIRECTORY,PROPERTY_NAME_EXECUTABLE,PROPERTY_NAME_COMPRESSION_METHOD,PROPERTY_NAME_SIGNATURE,PROPERTY_NAME_EXTRA_FIELD,"bitFlag","filenameUTF8","commentUTF8","rawExtraField","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","extraFieldNTFS","extraFieldExtendedTimestamp"];class Entry{constructor(r){PROPERTY_NAMES.forEach(n=>this[n]=r[n])}}const OPTION_FILENAME_ENCODING="filenameEncoding",OPTION_COMMENT_ENCODING="commentEncoding",OPTION_DECODE_TEXT="decodeText",OPTION_EXTRACT_PREPENDED_DATA="extractPrependedData",OPTION_EXTRACT_APPENDED_DATA="extractAppendedData",OPTION_PASSWORD="password",OPTION_RAW_PASSWORD="rawPassword",OPTION_PASS_THROUGH="passThrough",OPTION_SIGNAL="signal",OPTION_CHECK_PASSWORD_ONLY="checkPasswordOnly",OPTION_CHECK_OVERLAPPING_ENTRY_ONLY="checkOverlappingEntryOnly",OPTION_CHECK_OVERLAPPING_ENTRY="checkOverlappingEntry",OPTION_CHECK_SIGNATURE="checkSignature",OPTION_USE_WEB_WORKERS="useWebWorkers",OPTION_USE_COMPRESSION_STREAM="useCompressionStream",OPTION_TRANSFER_STREAMS="transferStreams",OPTION_PREVENT_CLOSE="preventClose",ERR_BAD_FORMAT="File format is not recognized",ERR_EOCDR_NOT_FOUND="End of central directory not found",ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND="End of Zip64 central directory locator not found",ERR_CENTRAL_DIRECTORY_NOT_FOUND="Central directory header not found",ERR_LOCAL_FILE_HEADER_NOT_FOUND="Local file header not found",ERR_EXTRAFIELD_ZIP64_NOT_FOUND="Zip64 extra field not found",ERR_ENCRYPTED="File contains encrypted entry",ERR_UNSUPPORTED_ENCRYPTION="Encryption method not supported",ERR_UNSUPPORTED_COMPRESSION="Compression method not supported",ERR_SPLIT_ZIP_FILE="Split zip file",ERR_OVERLAPPING_ENTRY="Overlapping entry found",CHARSET_UTF8="utf-8",CHARSET_CP437="cp437",ZIP64_PROPERTIES=[[PROPERTY_NAME_UNCOMPRESSED_SIZE,MAX_32_BITS],[PROPERTY_NAME_COMPRESSED_SIZE,MAX_32_BITS],[PROPERTY_NAME_OFFSET,MAX_32_BITS],[PROPERTY_NAME_DISK_NUMBER_START,MAX_16_BITS]],ZIP64_EXTRACTION={[MAX_16_BITS]:{getValue:getUint32,bytes:4},[MAX_32_BITS]:{getValue:getBigUint64,bytes:8}};class ZipReader{constructor(r,n={}){Object.assign(this,{reader:new GenericReader(r),options:n,config:getConfiguration(),readRanges:[]})}async*getEntriesGenerator(r={}){const n=this;let{reader:a}=n;const{config:o}=n;if(await initStream(a),(a.size===UNDEFINED_VALUE||!a.readUint8Array)&&(a=new BlobReader(await new Response(a.readable).blob()),await initStream(a)),a.size<END_OF_CENTRAL_DIR_LENGTH)throw new Error(ERR_BAD_FORMAT);a.chunkSize=getChunkSize(o);const l=await seekSignature(a,END_OF_CENTRAL_DIR_SIGNATURE,a.size,END_OF_CENTRAL_DIR_LENGTH,MAX_16_BITS*16);if(!l){const k=await readUint8Array(a,0,4),P=getDataView(k);throw getUint32(P)==SPLIT_ZIP_FILE_SIGNATURE?new Error(ERR_SPLIT_ZIP_FILE):new Error(ERR_EOCDR_NOT_FOUND)}const c=getDataView(l);let _=getUint32(c,12),u=getUint32(c,16);const p=l.offset,d=getUint16(c,20),m=p+END_OF_CENTRAL_DIR_LENGTH+d;let f=getUint16(c,4);const g=a.lastDiskNumber||0;let E=getUint16(c,6),x=getUint16(c,8),v=0,h=0;if(u==MAX_32_BITS||_==MAX_32_BITS||x==MAX_16_BITS||E==MAX_16_BITS){const k=await readUint8Array(a,l.offset-ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH,ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH),P=getDataView(k);if(getUint32(P,0)==ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE){u=getBigUint64(P,8);let I=await readUint8Array(a,u,ZIP64_END_OF_CENTRAL_DIR_LENGTH,-1),F=getDataView(I);const H=l.offset-ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH-ZIP64_END_OF_CENTRAL_DIR_LENGTH;if(getUint32(F,0)!=ZIP64_END_OF_CENTRAL_DIR_SIGNATURE&&u!=H){const O=u;u=H,u>O&&(v=u-O),I=await readUint8Array(a,u,ZIP64_END_OF_CENTRAL_DIR_LENGTH,-1),F=getDataView(I)}if(getUint32(F,0)!=ZIP64_END_OF_CENTRAL_DIR_SIGNATURE)throw new Error(ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND);f==MAX_16_BITS&&(f=getUint32(F,16)),E==MAX_16_BITS&&(E=getUint32(F,20)),x==MAX_16_BITS&&(x=getBigUint64(F,32)),_==MAX_32_BITS&&(_=getBigUint64(F,40)),u-=_}}if(u>=a.size&&(v=a.size-u-_-END_OF_CENTRAL_DIR_LENGTH,u=a.size-_-END_OF_CENTRAL_DIR_LENGTH),g!=f)throw new Error(ERR_SPLIT_ZIP_FILE);if(u<0)throw new Error(ERR_BAD_FORMAT);let b=0,S=await readUint8Array(a,u,_,E),y=getDataView(S);if(_){const k=l.offset-_;if(getUint32(y,b)!=CENTRAL_FILE_HEADER_SIGNATURE&&u!=k){const P=u;u=k,u>P&&(v+=u-P),S=await readUint8Array(a,u,_,E),y=getDataView(S)}}const T=l.offset-u-(a.lastDiskOffset||0);if(_!=T&&T>=0&&(_=T,S=await readUint8Array(a,u,_,E),y=getDataView(S)),u<0||u>=a.size)throw new Error(ERR_BAD_FORMAT);const A=getOptionValue(n,r,OPTION_FILENAME_ENCODING),w=getOptionValue(n,r,OPTION_COMMENT_ENCODING);for(let k=0;k<x;k++){const P=new ZipEntry(a,o,n.options);if(getUint32(y,b)!=CENTRAL_FILE_HEADER_SIGNATURE)throw new Error(ERR_CENTRAL_DIRECTORY_NOT_FOUND);readCommonHeader(P,y,b+6);const I=!!P.bitFlag.languageEncodingFlag,F=b+46,H=F+P.filenameLength,O=H+P.extraFieldLength,R=getUint16(y,b+4),M=R>>8==0,G=R>>8==3,U=S.subarray(F,H),j=getUint16(y,b+32),V=O+j,$=S.subarray(O,V),Q=I,re=I,X=getUint32(y,b+38),Y=M&&(getUint8(y,b+38)&FILE_ATTR_MSDOS_DIR_MASK)==FILE_ATTR_MSDOS_DIR_MASK||G&&(X>>16&FILE_ATTR_UNIX_TYPE_MASK)==FILE_ATTR_UNIX_TYPE_DIR||U.length&&U[U.length-1]==DIRECTORY_SIGNATURE.charCodeAt(0),oe=G&&(X>>16&FILE_ATTR_UNIX_EXECUTABLE_MASK)!=0,fe=getUint32(y,b+42)+v;Object.assign(P,{versionMadeBy:R,msDosCompatible:M,compressedSize:0,uncompressedSize:0,commentLength:j,directory:Y,offset:fe,diskNumberStart:getUint16(y,b+34),internalFileAttributes:getUint16(y,b+36),externalFileAttributes:X,rawFilename:U,filenameUTF8:Q,commentUTF8:re,rawExtraField:S.subarray(H,O),executable:oe}),P.internalFileAttribute=P.internalFileAttributes,P.externalFileAttribute=P.externalFileAttributes;const ve=getOptionValue(n,r,OPTION_DECODE_TEXT)||decodeText,ne=Q?CHARSET_UTF8:A||CHARSET_CP437,_e=re?CHARSET_UTF8:w||CHARSET_CP437;let Z=ve(U,ne);Z===UNDEFINED_VALUE&&(Z=decodeText(U,ne));let ge=ve($,_e);ge===UNDEFINED_VALUE&&(ge=decodeText($,_e)),Object.assign(P,{rawComment:$,filename:Z,comment:ge,directory:Y||Z.endsWith(DIRECTORY_SIGNATURE)}),h=Math.max(fe,h),readCommonFooter(P,P,y,b+6),P.zipCrypto=P.encrypted&&!P.extraFieldAES;const ie=new Entry(P);ie.getData=(xe,ce)=>P.getData(xe,ie,n.readRanges,ce),ie.arrayBuffer=async xe=>{const ce=new TransformStream,[ye]=await Promise.all([new Response(ce.readable).arrayBuffer(),P.getData(ce,ie,n.readRanges,xe)]);return ye},b=V;const{onprogress:le}=r;if(le)try{await le(k+1,x,new Entry(P))}catch{}yield ie}const C=getOptionValue(n,r,OPTION_EXTRACT_PREPENDED_DATA),L=getOptionValue(n,r,OPTION_EXTRACT_APPENDED_DATA);return C&&(n.prependedData=h>0?await readUint8Array(a,0,h):new Uint8Array),n.comment=d?await readUint8Array(a,p+END_OF_CENTRAL_DIR_LENGTH,d):new Uint8Array,L&&(n.appendedData=m<a.size?await readUint8Array(a,m,a.size-m):new Uint8Array),!0}async getEntries(r={}){const n=[];for await(const a of this.getEntriesGenerator(r))n.push(a);return n}async close(){}}class ZipEntry{constructor(r,n,a){Object.assign(this,{reader:r,config:n,options:a})}async getData(r,n,a,o={}){const l=this,{reader:c,offset:_,diskNumberStart:u,extraFieldAES:p,extraFieldZip64:d,compressionMethod:m,config:f,bitFlag:g,signature:E,rawLastModDate:x,uncompressedSize:v,compressedSize:h}=l,{dataDescriptor:b}=g,S=n.localDirectory={},y=await readUint8Array(c,_,HEADER_SIZE,u),T=getDataView(y);let A=getOptionValue(l,o,OPTION_PASSWORD),w=getOptionValue(l,o,OPTION_RAW_PASSWORD);const C=getOptionValue(l,o,OPTION_PASS_THROUGH);if(A=A&&A.length&&A,w=w&&w.length&&w,p&&p.originalCompressionMethod!=COMPRESSION_METHOD_AES)throw new Error(ERR_UNSUPPORTED_COMPRESSION);if(m!=COMPRESSION_METHOD_STORE&&m!=COMPRESSION_METHOD_DEFLATE&&!C)throw new Error(ERR_UNSUPPORTED_COMPRESSION);if(getUint32(T,0)!=LOCAL_FILE_HEADER_SIGNATURE)throw new Error(ERR_LOCAL_FILE_HEADER_NOT_FOUND);readCommonHeader(S,T,4);const{extraFieldLength:L,filenameLength:k,lastAccessDate:P,creationDate:I}=S;S.rawExtraField=L?await readUint8Array(c,_+HEADER_SIZE+k,L,u):new Uint8Array,readCommonFooter(l,S,T,4,!0),Object.assign(n,{lastAccessDate:P,creationDate:I});const F=l.encrypted&&S.encrypted&&!C,H=F&&!p;if(C||(n.zipCrypto=H),F){if(!H&&p.strength===UNDEFINED_VALUE)throw new Error(ERR_UNSUPPORTED_ENCRYPTION);if(!A&&!w)throw new Error(ERR_ENCRYPTED)}const O=_+HEADER_SIZE+k+L,R=h,M=c.readable;Object.assign(M,{diskNumberStart:u,offset:O,size:R});const G=getOptionValue(l,o,OPTION_SIGNAL),U=getOptionValue(l,o,OPTION_CHECK_PASSWORD_ONLY);let j=getOptionValue(l,o,OPTION_CHECK_OVERLAPPING_ENTRY);const V=getOptionValue(l,o,OPTION_CHECK_OVERLAPPING_ENTRY_ONLY);V&&(j=!0);const{onstart:$,onprogress:Q,onend:re}=o,X={options:{codecType:CODEC_INFLATE,password:A,rawPassword:w,zipCrypto:H,encryptionStrength:p&&p.strength,signed:getOptionValue(l,o,OPTION_CHECK_SIGNATURE)&&!C,passwordVerification:H&&(b?x>>>8&255:E>>>24&255),outputSize:v,signature:E,compressed:m!=0&&!C,encrypted:l.encrypted&&!C,useWebWorkers:getOptionValue(l,o,OPTION_USE_WEB_WORKERS),useCompressionStream:getOptionValue(l,o,OPTION_USE_COMPRESSION_STREAM),transferStreams:getOptionValue(l,o,OPTION_TRANSFER_STREAMS),checkPasswordOnly:U},config:f,streamOptions:{signal:G,size:R,onstart:$,onprogress:Q,onend:re}};j&&await detectOverlappingEntry({reader:c,fileEntry:n,offset:_,diskNumberStart:u,signature:E,compressedSize:h,uncompressedSize:v,dataOffset:O,dataDescriptor:b||S.bitFlag.dataDescriptor,extraFieldZip64:d||S.extraFieldZip64,readRanges:a});let Y;try{if(!V){U&&(r=new WritableStream),r=new GenericWriter(r),await initStream(r,C?h:v),{writable:Y}=r;const{outputSize:oe}=await runWorker({readable:M,writable:Y},X);if(r.size+=oe,oe!=(C?h:v))throw new Error(ERR_INVALID_UNCOMPRESSED_SIZE)}}catch(oe){if(oe.outputSize!==UNDEFINED_VALUE&&(r.size+=oe.outputSize),!U||oe.message!=ERR_ABORT_CHECK_PASSWORD)throw oe}finally{!getOptionValue(l,o,OPTION_PREVENT_CLOSE)&&Y&&!Y.locked&&await Y.getWriter().close()}return U||V?UNDEFINED_VALUE:r.getData?r.getData():Y}}function readCommonHeader(t,r,n){const a=t.rawBitFlag=getUint16(r,n+2),o=(a&BITFLAG_ENCRYPTED)==BITFLAG_ENCRYPTED,l=getUint32(r,n+6);Object.assign(t,{encrypted:o,version:getUint16(r,n),bitFlag:{level:(a&BITFLAG_LEVEL)>>1,dataDescriptor:(a&BITFLAG_DATA_DESCRIPTOR)==BITFLAG_DATA_DESCRIPTOR,languageEncodingFlag:(a&BITFLAG_LANG_ENCODING_FLAG)==BITFLAG_LANG_ENCODING_FLAG},rawLastModDate:l,lastModDate:getDate(l),filenameLength:getUint16(r,n+22),extraFieldLength:getUint16(r,n+24)})}function readCommonFooter(t,r,n,a,o){const{rawExtraField:l}=r,c=r.extraField=new Map,_=getDataView(new Uint8Array(l));let u=0;try{for(;u<l.length;){const h=getUint16(_,u),b=getUint16(_,u+2);c.set(h,{type:h,data:l.slice(u+4,u+4+b)}),u+=4+b}}catch{}const p=getUint16(n,a+4);Object.assign(r,{signature:getUint32(n,a+HEADER_OFFSET_SIGNATURE),compressedSize:getUint32(n,a+HEADER_OFFSET_COMPRESSED_SIZE),uncompressedSize:getUint32(n,a+HEADER_OFFSET_UNCOMPRESSED_SIZE)});const d=c.get(EXTRAFIELD_TYPE_ZIP64);d&&(readExtraFieldZip64(d,r),r.extraFieldZip64=d);const m=c.get(EXTRAFIELD_TYPE_UNICODE_PATH);m&&(readExtraFieldUnicode(m,PROPERTY_NAME_FILENAME,PROPERTY_NAME_RAW_FILENAME,r,t),r.extraFieldUnicodePath=m);const f=c.get(EXTRAFIELD_TYPE_UNICODE_COMMENT);f&&(readExtraFieldUnicode(f,PROPERTY_NAME_COMMENT,PROPERTY_NAME_RAW_COMMENT,r,t),r.extraFieldUnicodeComment=f);const g=c.get(EXTRAFIELD_TYPE_AES);g?(readExtraFieldAES(g,r,p),r.extraFieldAES=g):r.compressionMethod=p;const E=c.get(EXTRAFIELD_TYPE_NTFS);E&&(readExtraFieldNTFS(E,r),r.extraFieldNTFS=E);const x=c.get(EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);x&&(readExtraFieldExtendedTimestamp(x,r,o),r.extraFieldExtendedTimestamp=x);const v=c.get(EXTRAFIELD_TYPE_USDZ);v&&(r.extraFieldUSDZ=v)}function readExtraFieldZip64(t,r){r.zip64=!0;const n=getDataView(t.data),a=ZIP64_PROPERTIES.filter(([o,l])=>r[o]==l);for(let o=0,l=0;o<a.length;o++){const[c,_]=a[o];if(r[c]==_){const u=ZIP64_EXTRACTION[_];r[c]=t[c]=u.getValue(n,l),l+=u.bytes}else if(t[c])throw new Error(ERR_EXTRAFIELD_ZIP64_NOT_FOUND)}}function readExtraFieldUnicode(t,r,n,a,o){const l=getDataView(t.data),c=new Crc32;c.append(o[n]);const _=getDataView(new Uint8Array(4));_.setUint32(0,c.get(),!0);const u=getUint32(l,1);Object.assign(t,{version:getUint8(l,0),[r]:decodeText(t.data.subarray(5)),valid:!o.bitFlag.languageEncodingFlag&&u==getUint32(_,0)}),t.valid&&(a[r]=t[r],a[r+"UTF8"]=!0)}function readExtraFieldAES(t,r,n){const a=getDataView(t.data),o=getUint8(a,4);Object.assign(t,{vendorVersion:getUint8(a,0),vendorId:getUint8(a,2),strength:o,originalCompressionMethod:n,compressionMethod:getUint16(a,5)}),r.compressionMethod=t.compressionMethod}function readExtraFieldNTFS(t,r){const n=getDataView(t.data);let a=4,o;try{for(;a<t.data.length&&!o;){const l=getUint16(n,a),c=getUint16(n,a+2);l==EXTRAFIELD_TYPE_NTFS_TAG1&&(o=t.data.slice(a+4,a+4+c)),a+=4+c}}catch{}try{if(o&&o.length==24){const l=getDataView(o),c=l.getBigUint64(0,!0),_=l.getBigUint64(8,!0),u=l.getBigUint64(16,!0);Object.assign(t,{rawLastModDate:c,rawLastAccessDate:_,rawCreationDate:u});const p=getDateNTFS(c),d=getDateNTFS(_),m=getDateNTFS(u),f={lastModDate:p,lastAccessDate:d,creationDate:m};Object.assign(t,f),Object.assign(r,f)}}catch{}}function readExtraFieldExtendedTimestamp(t,r,n){const a=getDataView(t.data),o=getUint8(a,0),l=[],c=[];n?((o&1)==1&&(l.push(PROPERTY_NAME_LAST_MODIFICATION_DATE),c.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE)),(o&2)==2&&(l.push(PROPERTY_NAME_LAST_ACCESS_DATE),c.push(PROPERTY_NAME_RAW_LAST_ACCESS_DATE)),(o&4)==4&&(l.push(PROPERTY_NAME_CREATION_DATE),c.push(PROPERTY_NAME_RAW_CREATION_DATE))):t.data.length>=5&&(l.push(PROPERTY_NAME_LAST_MODIFICATION_DATE),c.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE));let _=1;l.forEach((u,p)=>{if(t.data.length>=_+4){const d=getUint32(a,_);r[u]=t[u]=new Date(d*1e3);const m=c[p];t[m]=d}_+=4})}async function detectOverlappingEntry({reader:t,fileEntry:r,offset:n,diskNumberStart:a,signature:o,compressedSize:l,uncompressedSize:c,dataOffset:_,dataDescriptor:u,extraFieldZip64:p,readRanges:d}){let m=0;if(a)for(let E=0;E<a;E++){const x=t.readers[E];m+=x.size}let f=0;if(u&&(p?f=DATA_DESCRIPTOR_RECORD_ZIP_64_LENGTH:f=DATA_DESCRIPTOR_RECORD_LENGTH),f){const E=await readUint8Array(t,_+l,f+DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH,a);if(getUint32(getDataView(E),0)==DATA_DESCRIPTOR_RECORD_SIGNATURE){const v=getUint32(getDataView(E),4);let h,b;p?(h=getBigUint64(getDataView(E),8),b=getBigUint64(getDataView(E),16)):(h=getUint32(getDataView(E),8),b=getUint32(getDataView(E),12)),(r.encrypted&&!r.zipCrypto||v==o)&&h==l&&b==c&&(f+=DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH)}}const g={start:m+n,end:m+_+l+f,fileEntry:r};for(const E of d)if(E.fileEntry!=r&&g.start>=E.start&&g.start<E.end){const x=new Error(ERR_OVERLAPPING_ENTRY);throw x.overlappingEntry=E.fileEntry,x}d.push(g)}async function seekSignature(t,r,n,a,o){const l=new Uint8Array(4),c=getDataView(l);setUint32(c,0,r);const _=a+o;return await u(a)||await u(Math.min(_,n));async function u(p){const d=n-p,m=await readUint8Array(t,d,p);for(let f=m.length-a;f>=0;f--)if(m[f]==l[0]&&m[f+1]==l[1]&&m[f+2]==l[2]&&m[f+3]==l[3])return{offset:d+f,buffer:m.slice(f,f+a).buffer}}}function getOptionValue(t,r,n){return r[n]===UNDEFINED_VALUE?t.options[n]:r[n]}function getDate(t){const r=(t&4294901760)>>16,n=t&65535;try{return new Date(1980+((r&65024)>>9),((r&480)>>5)-1,r&31,(n&63488)>>11,(n&2016)>>5,(n&31)*2,0)}catch{}}function getDateNTFS(t){return new Date(Number(t/BigInt(1e4)-BigInt(116444736e5)))}function getUint8(t,r){return t.getUint8(r)}function getUint16(t,r){return t.getUint16(r,!0)}function getUint32(t,r){return t.getUint32(r,!0)}function getBigUint64(t,r){return Number(t.getBigUint64(r,!0))}function setUint32(t,r,n){t.setUint32(r,n,!0)}function getDataView(t){return new DataView(t.buffer)}let baseURL;try{baseURL=import.meta.url}catch(t){}configure({baseURL});e(configure);configure({Deflate:ZipDeflate,Inflate:ZipInflate});configure({useWebWorkers:!1});const filterInput=t=>{if(t.endsWith("/"))return!1;const[r]=t.split("/").reverse();return!(r.length===0||r.startsWith("."))},getUri=(t,r,n)=>{const[a,...o]=r.split("/").reverse();let l;return n?[,...l]=o.reverse():[...l]=o.reverse(),[`${t}/${l.join("/")}/${a}`,l.join("/")]},zipInputReader=(t,r,n,a)=>new ZipReader(new BlobReader(n)).getEntries({decodeText:o=>new TextDecoder().decode(o)}).then(o=>o.filter(({filename:l})=>filterInput(l))).then(async o=>{const l=Object.keys(o.reduce((u,{filename:p})=>({...u,[`${p.split("/").at(0)}`]:!0}),{})).length===1;let c=0;const _=await Promise.all(o.map(u=>{const[p,d]=getUri(`${t}`,u.filename,l);return r.FS.mkdirTree(`${t}/${d}`),u.getData?.(new Uint8ArrayWriter).then(m=>{r.print(`Writing file ${p} to virtual fs from provided zip archive`),r.FS.writeFile(`${p}`,m,{encoding:"binary"}),a?.(o.length,++c)}).then(()=>!0).catch(m=>!1)}));return!_.some(u=>!u)&&_.length===o.length}),extras_ru=""+new URL("extras_ru-DpGUJNXn.pk3",import.meta.url).href,extras_en=""+new URL("extras_en-BLRrSuHo.pk3",import.meta.url).href,titles_enTxt=`Team_Select
{
\\ySelect a team\\w

1. Terrorist Force
2. Counter-Terrorist Force

5. Auto-select
}

Team_Select_Spect
{
\\ySelect a team\\w

1. Terrorist Force
2. Counter-Terrorist Force

5. Auto-select
6. Spectator
}

IG_Team_Select
{
\\ySelect a team\\w

1. Terrorist Force
2. Counter-Terrorist Force

5. Auto-select

0. Exit
}

IG_Team_Select_Spect
{
\\ySelect a team\\w

1. Terrorist Force
2. Counter-Terrorist Force

5. Auto-select
6. Spectator

0. Exit
}

IG_VIP_Team_Select
{
\\ySelect a team\\w

1. Terrorist Force
2. Counter-Terrorist Force
3. VIP

5. Auto-select

0. Exit
}

IG_VIP_Team_Select_Spect
{
\\ySelect a team\\w

1. Terrorist Force
2. Counter-Terrorist Force
3. VIP

5. Auto-select
6. Spectator

0. Exit
}

Terrorist_Select
{
\\ySelect your appearance\\w

1. Phoenix Connexion
2. Elite Crew
3. Arctic Avengers
4. Guerilla Warfare

5. Auto-select
}

CT_Select
{
\\ySelect your appearance\\w

1. Seal Team 6
2. GSG-9
3. SAS
4. GIGN

5. Auto-select
}

		Menu_Buy,
		Menu_BuyPistol,
		Menu_BuyRifle,
		Menu_BuyMachineGun,
		Menu_BuyShotgun,
		Menu_BuySubMachineGun,
		Menu_BuyItem

Buy
{
\\yBuy Item\\w

1. Handgun
2. Shotgun
3. Sub-Machine Gun
4. Rifle
5. Machine Gun

6. Primary weapon ammo
7. Secondary weapon ammo

8. Equipment

0. Exit
}

CT_BuyItem
{
\\yBuy Equipment\\R$   Cost

\\w1. Kevlar Vest\\y\\R650
\\w2. Kevlar Vest & Helmet\\y\\R1000
\\w3. Flashbang\\y\\R200	
\\w4. HE Grenade\\y\\R300
\\w5. Smoke Grenade\\y\\R300
\\w6. NightVision Goggles\\y\\R1250
\\d7. Defuse Kit\\y\\R200
\\w8. Tactical Shield\\y\\R2200

\\w0. Exit
}

T_BuyItem
{
\\yBuy Equipment\\R$   Cost

\\w1. Kevlar Vest\\y\\R650
\\w2. Kevlar Vest & Helmet\\y\\R1000
\\w3. Flashbang\\y\\R200	
\\w4. HE Grenade\\y\\R300
\\w5. Smoke Grenade\\y\\R300
\\w6. NightVision Goggles\\y\\R1250

\\w0. Exit
}

DCT_BuyItem
{
\\yBuy Equipment\\R$   Cost

\\w1. Kevlar Vest\\y\\R650
\\w2. Kevlar Vest & Helmet\\y\\R1000
\\w3. Flashbang\\y\\R200	
\\w4. HE Grenade\\y\\R300
\\w5. Smoke Grenade\\y\\R300
\\w6. NightVision Goggles\\y\\R1250
\\w7. Defuse Kit\\y\\R200
\\w8. Tactical Shield\\y\\R2200

\\w0. Exit
}

DT_BuyItem
{
\\yBuy Equipment\\R$   Cost

\\w1. Kevlar Vest\\y\\R650
\\w2. Kevlar Vest & Helmet\\y\\R1000
\\w3. Flashbang\\y\\R200	
\\w4. HE Grenade\\y\\R300
\\w5. Smoke Grenade\\y\\R300
\\w6. NightVision Goggles\\y\\R1250

\\w0. Exit
}

CT_BuyPistol
{
\\yBuy Handgun\\R$   Cost
(Secondary weapon)

\\w1. 9X19mm Sidearm\\y\\R400
\\w2. K&M .45 Tactical\\y\\R500
\\w3. 228 Compact\\y\\R600
\\w4. Night Hawk .50C\\y\\R650
\\w5. ES Five-Seven\\y\\R750

\\w0. Exit
}

T_BuyPistol
{
\\yBuy Handgun\\R$   Cost
(Secondary weapon)

\\w1. 9X19mm Sidearm\\y\\R400
\\w2. K&M .45 Tactical\\y\\R500
\\w3. 228 Compact\\y\\R600
\\w4. Night Hawk .50C\\y\\R650
\\w5. .40 Dual Elites\\y\\R800

\\w0. Exit
}

AS_BuyShotgun
{
\\yBuy Shotgun\\R$   Cost
(Primary weapon)

\\d1. Leone 12 Gauge Super\\y\\R1700
\\d2. Leone YG1265 Auto Shotgun\\y\\R3000

\\w0. Exit
}

BuyShotgun
{
\\yBuy Shotgun\\R$   Cost
(Primary weapon)

\\w1. Leone 12 Gauge Super\\y\\R1700
\\w2. Leone YG1265 Auto Shotgun\\y\\R3000

\\w0. Exit
}

CT_BuySubMachineGun
{
\\yBuy Sub-Machine Gun\\R$   Cost
(Primary weapon)

\\w1. Schmidt Machine Pistol\\y\\R1250
\\w2. K&M Sub-Machine Gun\\y\\R1500
\\w3. K&M UMP45\\y\\R1700
\\w4. ES C90\\y\\R2350

\\w0. Exit
}

T_BuySubMachineGun
{
\\yBuy Sub-Machine Gun\\R$   Cost
(Primary weapon)

\\w1. Ingram MAC-10\\y\\R1400
\\w2. K&M Sub-Machine Gun\\y\\R1500
\\w3. K&M UMP45\\y\\R1700
\\w4. ES C90\\y\\R2350

\\w0. Exit
}

AS_CT_BuySubMachineGun
{
\\yBuy Sub-Machine Gun\\R$   Cost
(Primary weapon)

\\w1. Schmidt Machine Pistol\\y\\R1250
\\w2. K&M Sub-Machine Gun\\y\\R1500
\\w3. K&M UMP45\\y\\R1700
\\w4. ES C90\\y\\R2350

\\w0. Exit
}

AS_T_BuySubMachineGun
{
\\yBuy Sub-Machine Gun\\R$   Cost
(Primary weapon)

\\w1. Ingram MAC-10\\y\\R1400
\\d2. K&M Sub-Machine Gun\\y\\R1500
\\w3. K&M UMP45\\y\\R1700
\\d4. ES C90\\y\\R2350

\\w0. Exit
}

T_BuyRifle
{
\\yBuy Rifle\\R$   Cost
(Primary weapon)

\\w1. IDF Defender\\y\\R2000
\\w2. CV-47\\y\\R2500
\\w3. Schmidt Scout\\y\\R2750
\\w4. Krieg 552 Commando\\y\\R3500
\\w5. Magnum Sniper Rifle\\y\\R4750
\\w6. D3/AU-1 Semi-Auto Sniper Rifle\\y\\R5000

\\w0. Exit
}

CT_BuyRifle
{
\\yBuy Rifle\\R$   Cost
(Primary weapon)

\\w1. Clarion 5.56\\y\\R2250
\\w2. Schmidt Scout\\y\\R2750
\\w3. Maverick M4A1 Carbine\\y\\R3100
\\w4. Bullpup\\y\\R3500
\\w5. Krieg 550 Commando\\y\\R4200
\\w6. Magnum Sniper Rifle\\y\\R4750

\\w0. Exit
}

AS_T_BuyRifle
{
\\yBuy Rifle\\R$   Cost
(Primary weapon)

\\w1. IDF Defender\\y\\R2000
\\w2. CV-47\\y\\R2500
\\d3. Schmidt Scout\\y\\R2750
\\d4. Krieg 552 Commando\\y\\R3500
\\w5. Magnum Sniper Rifle\\y\\R4750
\\d6. D3/AU-1 Semi-Auto Sniper Rifle\\y\\R5000

\\w0. Exit
}

AS_CT_BuyRifle
{
\\yBuy Rifle\\R$   Cost
(Primary weapon)

\\w1. Clarion 5.56\\y\\R2250
\\d2. Schmidt Scout\\y\\R2750
\\w3. Maverick M4A1 Carbine\\y\\R3100
\\w4. Bullpup\\y\\R3500
\\w5. Krieg 550 Commando\\y\\R4200
\\d6. Magnum Sniper Rifle\\y\\R4750

\\w0. Exit
}

AS_T_BuyMachineGun
{
\\yBuy Machine Gun\\R$   Cost
(Primary weapon)

\\d1. ES M249 Para\\y\\R5750

\\w0. Exit
}

BuyMachineGun
{
\\yBuy Machine Gun\\R$   Cost
(Primary weapon)

\\w1. ES M249 Para\\y\\R5750

\\w0. Exit
}

RadioA
{
\\yRadio Commands\\w

1. "Cover Me"
2. "You Take the Point"
3. "Hold This Position"
4. "Regroup Team"
5. "Follow Me"
6. "Taking Fire, Need Assistance"

0. Exit
}

RadioB
{
\\yGroup Radio Commands\\w

1. "Go"
2. "Fall Back"
3. "Stick Together Team"
4. "Get in Position"
5. "Storm the Front"
6. "Report In"

0. Exit
}

RadioC
{
\\yRadio Responses/Reports\\w

1. "Affirmative/Roger"
2. "Enemy Spotted"
3. "Need Backup"
4. "Sector Clear"
5. "I'm in Position"
6. "Reporting In"	
7. "She's gonna Blow!"
8. "Negative"
9. "Enemy Down"

0. Exit
}

// weapon names

// RIFLES
AK47
{
#Cstrike_TitlesTXT_AK47
}

SG552
{
#Cstrike_TitlesTXT_SG552
}

M4A1
{
#Cstrike_TitlesTXT_M4A1
}

Famas
{
#Cstrike_TitlesTXT_Famas
}

Galil
{
#Cstrike_TitlesTXT_Galil
}

Aug
{
#Cstrike_TitlesTXT_Aug
}

Scout
{
#Cstrike_TitlesTXT_Scout
}

ArcticWarfareMagnum
{
#Cstrike_TitlesTXT_ArcticWarfareMagnum
}

G3SG1
{
#Cstrike_TitlesTXT_G3SG1
}

SG550
{
#Cstrike_TitlesTXT_SG550
}

USP45
{
#Cstrike_TitlesTXT_USP45
}

Glock18
{
#Cstrike_TitlesTXT_Glock18
}

DesertEagle
{
#Cstrike_TitlesTXT_DesertEagle
}

P228
{
#Cstrike_TitlesTXT_P228
}

Beretta96G
{
#Cstrike_TitlesTXT_Beretta96G
}

FiveSeven
{
#Cstrike_TitlesTXT_FiveSeven
}

// shotguns
Super90
{
#Cstrike_TitlesTXT_Super90
}

XM1014
{
#Cstrike_TitlesTXT_XM1014
}

// smg's
mp5navy
{
#Cstrike_TitlesTXT_mp5navy
}

tmp
{
#Cstrike_TitlesTXT_tmp
}

FNP90
{
#Cstrike_TitlesTXT_FNP90
}

Mac10
{
#Cstrike_TitlesTXT_Mac10
}

UMP45
{
#Cstrike_TitlesTXT_UMP45
}

// mg
M249
{
#Cstrike_TitlesTXT_M249
}

// weapon short names
Krieg552
{
#Cstrike_TitlesTXT_Krieg552
}

M4A1_Short
{
#Cstrike_TitlesTXT_M4A1_Short
}

Schmidt
{
#Cstrike_TitlesTXT_Schmidt
}

Magnum
{
#Cstrike_TitlesTXT_Magnum
}

D3AU1
{
#Cstrike_TitlesTXT_D3AU1
}

Krieg550
{
#Cstrike_TitlesTXT_Krieg550
}

// pistol
KM45Tactical
{
#Cstrike_TitlesTXT_KM45Tactical
}

Sidearm9X19mm
{
#Cstrike_TitlesTXT_Sidearm9X19mm
}

NightHawk
{
#Cstrike_TitlesTXT_NightHawk
}

P228Compact
{
#Cstrike_TitlesTXT_P228Compact
}

Dual40
{
#Cstrike_TitlesTXT_Dual40
}

ESFiveSeven
{
#Cstrike_TitlesTXT_ESFiveSeven
}

// shotgun short names
Leone12
{
#Cstrike_TitlesTXT_Leone12
}

AutoShotgun
{
#Cstrike_TitlesTXT_AutoShotgun
}

// smg short names
SubMachineGun
{
#Cstrike_TitlesTXT_SubMachineGun
}

SchmidtMP
{
#Cstrike_TitlesTXT_SchmidtMP
}

ESC90
{
#Cstrike_TitlesTXT_ESC90
}

Mac10_Short
{
#Cstrike_TitlesTXT_Mac10_Short
}

KMUMP45
{
#Cstrike_TitlesTXT_KMUMP45
}

// mg short name
ESM249
{
#Cstrike_TitlesTXT_ESM249
}

// Scoreboard
TEAMS
{
#Cstrike_TitlesTXT_TEAMS
}

PLAYERS
{
#Cstrike_TitlesTXT_PLAYERS
}

CLASS
{
#Cstrike_TitlesTXT_CLASS
}

SCORE
{
#Cstrike_TitlesTXT_SCORE
}

DEATHS
{
#Cstrike_TitlesTXT_DEATHS
}

LATENCY
{
#Cstrike_TitlesTXT_LATENCY
}

VOICE
{
#Cstrike_TitlesTXT_VOICE
}

// other menu text
Menu_OK
{
#Cstrike_TitlesTXT_Menu_OK
}

Menu_Cancel
{
#Cstrike_TitlesTXT_Menu_Cancel
}

Menu_Spectate
{
#Cstrike_TitlesTXT_Menu_Spectate
}

Team_AutoAssign
{
#Cstrike_TitlesTXT_Team_AutoAssign
}

Title_SelectYourTeam
{
#Cstrike_TitlesTXT_Title_SelectYourTeam
}

Target_Bombed
{
#Cstrike_TitlesTXT_Target_Bombed
}

VIP_Escaped
{
#Cstrike_TitlesTXT_VIP_Escaped
}

VIP_Assassinated
{
#Cstrike_TitlesTXT_VIP_Assassinated
}

Terrorists_Escaped
{
#Cstrike_TitlesTXT_Terrorists_Escaped
}

CTs_PreventEscape
{
#Cstrike_TitlesTXT_CTs_PreventEscape
}

Escaping_Terrorists_Neutralized
{
#Cstrike_TitlesTXT_Escaping_Terrorists_Neutralized
}

Bomb_Defused
{
#Cstrike_TitlesTXT_Bomb_Defused
}

CTs_Win
{
#Cstrike_TitlesTXT_CTs_Win
}

Terrorists_Win
{
#Cstrike_TitlesTXT_Terrorists_Win
}

Round_Draw
{
#Cstrike_TitlesTXT_Round_Draw
}

All_Hostages_Rescued
{
#Cstrike_TitlesTXT_All_Hostages_Rescued
}

Target_Saved
{
#Cstrike_TitlesTXT_Target_Saved
}

Hostages_Not_Rescued
{
#Cstrike_TitlesTXT_Hostages_Not_Rescued
}

Terrorists_Not_Escaped
{
#Cstrike_TitlesTXT_Terrorists_Not_Escaped
}

VIP_Not_Escaped
{
#Cstrike_TitlesTXT_VIP_Not_Escaped
}

Cannot_Buy_This
{
#Cstrike_TitlesTXT_Cannot_Buy_This
}

Not_Enough_Money
{
#Cstrike_TitlesTXT_Not_Enough_Money
}

Weapon_Not_Available
{
#Cstrike_TitlesTXT_Weapon_Not_Available
}

Already_Have_Kevlar
{
#Cstrike_TitlesTXT_Already_Have_Kevlar
}

Already_Have_Kevlar_Helmet
{
#Cstrike_TitlesTXT_Already_Have_Kevlar_Helmet
}

Already_Have_Kevlar_Bought_Helmet
{

}

Already_Have_Helmet_Bought_Kevlar
{

}

Cannot_Carry_Anymore
{
#Cstrike_TitlesTXT_Cannot_Carry_Anymore
}

Already_Have_One
{
#Cstrike_TitlesTXT_Already_Have_One
}

Cannot_Switch_From_VIP
{
#Cstrike_TitlesTXT_Cannot_Switch_From_VIP
}

All_Teams_Full
{
#Cstrike_TitlesTXT_All_Teams_Full
}

Terrorists_Full
{
#Cstrike_TitlesTXT_Terrorists_Full
}

CTs_Full
{
#Cstrike_TitlesTXT_CTs_Full
}

Too_Many_Terrorists
{
#Cstrike_TitlesTXT_Too_Many_Terrorists
}

Too_Many_CTs
{
#Cstrike_TitlesTXT_Too_Many_CTs
}

Wait_3_Seconds
{
Please wait 3 seconds.
}

Only_1_Team_Change
{
#Cstrike_TitlesTXT_Only_1_Team_Change
}

Ignore_Broadcast_Messages
{
#Cstrike_TitlesTXT_Ignore_Broadcast_Messages
}

Ignore_Broadcast_Team_Messages
{
#Cstrike_TitlesTXT_Ignore_Broadcast_Team_Messages
}

Accept_All_Messages
{
#Cstrike_TitlesTXT_Accept_All_Messages
}

Ignore_Radio
{
#Cstrike_TitlesTXT_Ignore_Radio
}

Accept_Radio
{
#Cstrike_TitlesTXT_Accept_Radio
}

Command_Not_Available
{
#Cstrike_TitlesTXT_Command_Not_Available
}

Defusing_Bomb_With_Defuse_Kit
{
#Cstrike_TitlesTXT_Defusing_Bomb_With_Defuse_Kit
}

Defusing_Bomb_Without_Defuse_Kit
{
#Cstrike_TitlesTXT_Defusing_Bomb_Without_Defuse_Kit
}

Killed_Hostage
{
#Cstrike_TitlesTXT_Killed_Hostage
}

Injured_Hostage
{
#Cstrike_TitlesTXT_Injured_Hostage
}

Auto_Team_Balance_Next_Round
{
#Cstrike_TitlesTXT_Auto_Team_Balance_Next_Round
}

All_VIP_Slots_Full
{
#Cstrike_TitlesTXT_All_VIP_Slots_Full
}

Killed_Teammate
{
#Cstrike_TitlesTXT_Killed_Teammate
}

Banned_For_Killing_Teammates
{
You are being banned from the server for killing too many teammates
}

Cannot_Vote_Map
{
You cannot vote within 3 minutes of a new map
}

Weapon_Cannot_Be_Dropped
{
#Cstrike_TitlesTXT_Weapon_Cannot_Be_Dropped
}

Terrorist_Escaped
{
#Cstrike_TitlesTXT_Terrorist_Escaped
}

C4_Plant_At_Bomb_Spot
{
#Cstrike_TitlesTXT_C4_Plant_At_Bomb_Spot
}

C4_Plant_Must_Be_On_Ground
{
#Cstrike_TitlesTXT_C4_Plant_Must_Be_On_Ground
}

C4_Arming_Cancelled
{
#Cstrike_TitlesTXT_C4_Arming_Cancelled
}

Bomb_Planted
{
#Cstrike_TitlesTXT_Bomb_Planted
}

C4_Activated_At_Bomb_Spot
{
#Cstrike_TitlesTXT_C4_Activated_At_Bomb_Spot
}

Switch_To_BurstFire
{
#Cstrike_TitlesTXT_Switch_To_BurstFire
}

Switch_To_SemiAuto
{
#Cstrike_TitlesTXT_Switch_To_SemiAuto
}

Switch_To_FullAuto
{
#Cstrike_TitlesTXT_Switch_To_FullAuto
}

//***************************
//** Training map messages **
//***************************

$position -1 -1
$color 12 200 12
$effect 0
$fadein 0.2
$holdtime 2
$fadeout 1

TRAINING1
{
#Cstrike_TitlesTXT_TRAINING1
}

TRAINING2
{
#Cstrike_TitlesTXT_TRAINING2
}

TRAINING3
{
#Cstrike_TitlesTXT_TRAINING3
}

TRAINING4
{
#Cstrike_TitlesTXT_TRAINING4
}

TRAINING5
{
#Cstrike_TitlesTXT_TRAINING5
}

TRAINING6
{
#Cstrike_TitlesTXT_TRAINING6
}

TRAINING7
{
#Cstrike_TitlesTXT_TRAINING7
}

// In-Game messages
$position -1 0.65
$effect 2
// This is the final color
$color 100 100 100
// This is the highlight color
$color2 240 110 0
// This is the time it takes to fade each character
$fadein 0.01
// This is the amount of time the highlight lags behind the leading edge of the text
$fxtime 0.25
// How long to hold the message on the screen (after it scans out)
$holdtime 2.0
// How long it takes to fade out the message after holding
$fadeout 0.5

GAMESAVED
{
#Cstrike_TitlesTXT_GAMESAVED
}

Game_Commencing
{
#Cstrike_TitlesTXT_Game_Commencing
}

Game_connected
{
%s connected
}

Game_disconnected
{
%s has left the game
}

Game_join_terrorist
{
%s is joining the Terrorist force
}

Game_join_ct
{
%s is joining the Counter-Terrorist force
}

Game_join_terrorist_auto
{
%s is joining the Terrorist force (auto)
}

Game_join_ct_auto
{
%s is joining the Counter-Terrorist force (auto)
}

Game_scoring
{
Scoring will not start until both teams have players
}

Game_idle_kick
{
%s has been idle for too long and has been kicked
}

Game_bomb_drop
{
#Cstrike_TitlesTXT_Game_bomb_drop
}

Game_bomb_pickup
{
#Cstrike_TitlesTXT_Game_bomb_pickup
}

Game_no_timelimit
{
* No Time Limit *
}

Game_timelimit
{
Time Remaining:  %s:%.2s
}

Game_unknown_command
{
Unknown command: %s
}

Game_in_position
{
#Cstrike_TitlesTXT_Game_in_position
}

Game_added_position
{
#Cstrike_TitlesTXT_Game_added_position
}

Game_teammate_kills
{
Teammate kills: %s of 3
}

Game_required_votes
{
Required number of votes for a new map = %s
}

Game_radio
{
%s (RADIO): %s
}

Game_teammate_attack
{
%s attacked a teammate
}

Game_kicked
{
#Cstrike_TitlesTXT_Game_kicked
}

Game_vote_cast
{
Vote cast against player # %s
}

Game_vote_usage
{
Usage:  vote <id>
}

Game_vote_player_not_found
{
Player # %s was not found
}

Game_vote_players_on_your_team
{
You can only vote for players on your team
}

Game_vote_not_yourself
{
You can't vote to kick yourself!
}

Game_voted_for_map
{
You voted for Map # %s
}

Game_votemap_usage
{
Usage:  votemap <id>
}

Cannot_Vote_Need_More_People
{
You can't vote for a map by yourself!
}

Map_Vote_Extend
{
#Cstrike_TitlesTXT_Map_Vote_Extend
}

Cannot_Vote_With_Less_Than_Three
{
You can't vote with less than three people on your team
}

Game_will_restart_in
{
#Cstrike_TitlesTXT_Game_will_restart_in
}

Game_will_restart_in_console
{
The game will restart in %s %s
}

Cover_me
{
Cover Me!
}

You_take_the_point
{
You Take the Point.
}

Hold_this_position
{
Hold This Position.
}

Regroup_team
{
Regroup Team.
}

Follow_me
{
Follow Me.
}

Taking_fire
{
Taking Fire...Need Assistance!
}

Go_go_go
{
Go go go!
}

Team_fall_back
{
Team, fall back!
}

Stick_together_team
{
Stick together, team.
}

Get_in_position_and_wait
{
Get in position and wait for my go.
}

Storm_the_front
{
Storm the Front!
}

Report_in_team
{
Report in, team.
}

Affirmative
{
Affirmative.
}

Roger_that
{
Roger that.
}

Enemy_spotted
{
Enemy spotted.
}

Need_backup
{
Need backup.
}

Sector_clear
{
Sector clear.
}

In_position
{
I'm in position.
}

Reporting_in
{
Reporting in.
}

Get_out_of_there
{
Get out of there, it's gonna blow!
}

Negative
{
Negative.
}

Enemy_down
{
Enemy down.
}

Hostage_down
{
Hostage down.
}

Fire_in_the_hole
{
Fire in the hole!
}

Cant_buy
{
#Cstrike_TitlesTXT_Cant_buy
}

VIP_cant_buy
{
#Cstrike_TitlesTXT_VIP_cant_buy
}

CT_cant_buy
{
#Cstrike_TitlesTXT_CT_cant_buy
}

Terrorist_cant_buy
{
#Cstrike_TitlesTXT_Terrorist_cant_buy
}

Vote
{
%s :  %s (%s vote)
}

Votes
{
%s :  %s (%s votes)
}

Hint_press_buy_to_purchase
{
#Cstrike_TitlesTXT_Hint_press_buy_to_purchase
}

Hint_use_nightvision
{
#Cstrike_TitlesTXT_Hint_use_nightvision
}

Hint_lost_money
{
#Cstrike_TitlesTXT_Hint_lost_money
}

Hint_removed_for_next_hostage_killed
{
#Cstrike_TitlesTXT_Hint_removed_for_next_hostage_killed
}

Hint_careful_around_hostages
{
#Cstrike_TitlesTXT_Hint_careful_around_hostages
}

Hint_careful_around_teammates
{
#Cstrike_TitlesTXT_Hint_careful_around_teammates
}

Hint_reward_for_killing_vip
{
#Cstrike_TitlesTXT_Hint_reward_for_killing_vip
}

Hint_win_round_by_killing_enemy
{
#Cstrike_TitlesTXT_Hint_win_round_by_killing_enemy
}

Hint_try_not_to_injure_teammates
{
#Cstrike_TitlesTXT_Hint_try_not_to_injure_teammates
}

Hint_you_are_in_targetzone
{
#Cstrike_TitlesTXT_Hint_you_are_in_targetzone
}

Hint_hostage_rescue_zone
{
#Cstrike_TitlesTXT_Hint_hostage_rescue_zone
}

Hint_terrorist_escape_zone
{
#Cstrike_TitlesTXT_Hint_terrorist_escape_zone
}

Hint_ct_vip_zone
{
#Cstrike_TitlesTXT_Hint_ct_vip_zone
}

Hint_terrorist_vip_zone
{
#Cstrike_TitlesTXT_Hint_terrorist_vip_zone
}

Hint_cannot_play_because_tk
{
#Cstrike_TitlesTXT_Hint_cannot_play_because_tk
}

Hint_use_hostage_to_stop_him
{
#Cstrike_TitlesTXT_Hint_use_hostage_to_stop_him
}

Hint_lead_hostage_to_rescue_point
{
#Cstrike_TitlesTXT_Hint_lead_hostage_to_rescue_point
}

Hint_you_have_the_bomb
{
#Cstrike_TitlesTXT_Hint_you_have_the_bomb
}

Hint_you_are_the_vip
{
#Cstrike_TitlesTXT_Hint_you_are_the_vip
}

Hint_out_of_ammo
{
#Cstrike_TitlesTXT_Hint_out_of_ammo
}

Hint_spotted_a_friend
{
#Cstrike_TitlesTXT_Hint_spotted_a_friend
}

Hint_spotted_an_enemy
{
#Cstrike_TitlesTXT_Hint_spotted_an_enemy
}

Hint_prevent_hostage_rescue
{
#Cstrike_TitlesTXT_Hint_prevent_hostage_rescue
}

Hint_rescue_the_hostages
{
#Cstrike_TitlesTXT_Hint_rescue_the_hostages
}

Hint_press_use_so_hostage_will_follow
{
#Cstrike_TitlesTXT_Hint_press_use_so_hostage_will_follow
}

Friend
{
Friend
}

Enemy
{
Enemy
}

Hostage
{
Hostage
}

Health
{
Health
}

Map_descr_not_avail
{
#Cstrike_TitlesTXT_Map_descr_not_avail
}

Class_descr_not_avail
{
#Cstrike_TitlesTXT_Class_descr_not_avail
}

Title_terrorist_model_selection
{
#Cstrike_TitlesTXT_Title_terrorist_model_selection
}

Phoenix_Connexion
{
#Cstrike_TitlesTXT_Phoenix_Connexion
}

L337_Krew
{
#Cstrike_TitlesTXT_L337_Krew
}

Arctic_Avengers
{
#Cstrike_TitlesTXT_Arctic_Avengers
}

Guerilla_Warfare
{
#Cstrike_TitlesTXT_Guerilla_Warfare
}

Auto_Select
{
#Cstrike_TitlesTXT_Auto_Select
}

Title_ct_model_selection
{
#Cstrike_TitlesTXT_Title_ct_model_selection
}

Seal_Team_6
{
#Cstrike_TitlesTXT_Seal_Team_6
}

Title_seal_team
{
#Cstrike_TitlesTXT_Title_seal_team
}

GSG_9
{
#Cstrike_TitlesTXT_GSG_9
}

Title_gsg9
{
#Cstrike_TitlesTXT_Title_gsg9
}

SAS
{
#Cstrike_TitlesTXT_SAS
}

Title_sas
{
#Cstrike_TitlesTXT_Title_sas
}

GIGN
{
#Cstrike_TitlesTXT_GIGN
}

Title_gign
{
#Cstrike_TitlesTXT_Title_gign
}

Title_select_category_of_purchase
{
#Cstrike_TitlesTXT_Title_select_category_of_purchase
}

Title_equipment_selection
{
#Cstrike_TitlesTXT_Title_equipment_selection
}

Kevlar
{
#Cstrike_TitlesTXT_Kevlar
}

Kevlar_Vest
{
#Cstrike_TitlesTXT_Kevlar_Vest
}

Kevlar_Helmet
{
#Cstrike_TitlesTXT_Kevlar_Helmet
}

Kevlar_Vest_Ballistic_Helmet
{
#Cstrike_TitlesTXT_Kevlar_Vest_Ballistic_Helmet
}

Flashbang
{
#Cstrike_TitlesTXT_Flashbang
}

HE_Grenade
{
#Cstrike_TitlesTXT_HE_Grenade
}

High_Explosive_Grenade
{
#Cstrike_TitlesTXT_High_Explosive_Grenade
}

Smoke_Grenade
{
#Cstrike_TitlesTXT_Smoke_Grenade
}

Defusal_Kit
{
#Cstrike_TitlesTXT_Defusal_Kit
}

Bomb_Defusal_Kit
{
#Cstrike_TitlesTXT_Bomb_Defusal_Kit
}

NightVision
{
#Cstrike_TitlesTXT_NightVision
}

Nightvision_Goggles
{
#Cstrike_TitlesTXT_Nightvision_Goggles
}

TactShield
{
#Cstrike_TitlesTXT_TactShield
}

TactShield_Desc
{
#Cstrike_TitlesTXT_TactShield_Desc
}

Title_pistol_selection
{
#Cstrike_TitlesTXT_Title_pistol_selection
}

Pistols
{
#Cstrike_TitlesTXT_Pistols
}

Buy_pistols
{
#Cstrike_TitlesTXT_Buy_pistols
}

Title_shotgun_selection
{
#Cstrike_TitlesTXT_Title_shotgun_selection
}

Shotguns
{
#Cstrike_TitlesTXT_Shotguns
}

Buy_shotguns
{
#Cstrike_TitlesTXT_Buy_shotguns
}

Title_smg_selection
{
#Cstrike_TitlesTXT_Title_smg_selection
}

SMGs
{
#Cstrike_TitlesTXT_SMGs
}

Buy_smgs
{
#Cstrike_TitlesTXT_Buy_smgs
}

Title_rifle_selection
{
#Cstrike_TitlesTXT_Title_rifle_selection
}

Rifles
{
#Cstrike_TitlesTXT_Rifles
}

Buy_rifles
{
#Cstrike_TitlesTXT_Buy_rifles
}

Title_machinegun_selection
{
#Cstrike_TitlesTXT_Title_machinegun_selection
}

MachineGuns
{
#Cstrike_TitlesTXT_MachineGuns
}

Buy_machineguns
{
#Cstrike_TitlesTXT_Buy_machineguns
}

Prim_Ammo
{
#Cstrike_TitlesTXT_Prim_Ammo
}

Buy_prim_ammo
{
#Cstrike_TitlesTXT_Buy_prim_ammo
}

Sec_Ammo
{
#Cstrike_TitlesTXT_Sec_Ammo
}

Buy_sec_ammo
{
#Cstrike_TitlesTXT_Buy_sec_ammo
}

Equipment
{
#Cstrike_TitlesTXT_Equipment
}

Buy_equipment
{
#Cstrike_TitlesTXT_Buy_equipment
}

Terrorist_Forces
{
#Cstrike_TitlesTXT_Terrorist_Forces
}

CT_Forces
{
#Cstrike_TitlesTXT_CT_Forces
}

VIP
{
#Cstrike_TitlesTXT_VIP
}

WINS
{
#Cstrike_TitlesTXT_WINS
}

BOMB
{
#Cstrike_TitlesTXT_BOMB
}

DEAD
{
#Cstrike_TitlesTXT_DEAD
}

// spaces are on purpose
SCORES
{
#Cstrike_TitlesTXT_SCORES
}

Player
{
#Cstrike_TitlesTXT_Player
}

Player_plural
{
#Cstrike_TitlesTXT_Player_plural
}

Got_defuser
{
#Cstrike_TitlesTXT_Got_defuser
}

Got_bomb
{
#Cstrike_TitlesTXT_Got_bomb
}

Mic_Volume
{
#Cstrike_TitlesTXT_Mic_Volume
}

Speaker_Volume
{
#Cstrike_TitlesTXT_Speaker_Volume
}

Voice_Properties
{
#Cstrike_TitlesTXT_Voice_Properties
}

Cannot_Be_Spectator
{
#Cstrike_TitlesTXT_Cannot_Be_Spectator
}

Map_Description_not_available
{
#Cstrike_TitlesTXT_Map_Description_not_available
}

Muted
{
#Cstrike_TitlesTXT_Muted
}

Unmuted
{
#Cstrike_TitlesTXT_Unmuted
}

No_longer_hear_that_player
{
#Cstrike_TitlesTXT_No_longer_hear_that_player
}

OBS_NONE
{
#Cstrike_TitlesTXT_OBS_NONE
}

OBS_CHASE_LOCKED
{
#Cstrike_TitlesTXT_OBS_CHASE_LOCKED
}

OBS_CHASE_FREE
{
#Cstrike_TitlesTXT_OBS_CHASE_FREE
}

OBS_ROAMING
{
#Cstrike_TitlesTXT_OBS_ROAMING
}

OBS_IN_EYE
{
#Cstrike_TitlesTXT_OBS_IN_EYE
}

OBS_MAP_FREE
{
#Cstrike_TitlesTXT_OBS_MAP_FREE
}

OBS_MAP_CHASE
{
#Cstrike_TitlesTXT_OBS_MAP_CHASE
}

SPECT_OPTIONS
{
#Cstrike_TitlesTXT_SPECT_OPTIONS
}

CAM_OPTIONS
{
#Cstrike_TitlesTXT_CAM_OPTIONS
}

Name_change_at_respawn
{
Your name will be changed after your next respawn.
}

C4_Defuse_Must_Be_On_Ground
{
#Cstrike_TitlesTXT_C4_Defuse_Must_Be_On_Ground
}

// SDK 2.0 Spectator Menu

Spec_Mode1
{
#Cstrike_TitlesTXT_Spec_Mode1
}

Spec_Mode2
{
#Cstrike_TitlesTXT_Spec_Mode2
}

Spec_Mode3
{
#Cstrike_TitlesTXT_Spec_Mode3
}

Spec_Mode4
{
#Cstrike_TitlesTXT_Spec_Mode4
}

Spec_Mode5
{
#Cstrike_TitlesTXT_Spec_Mode5
}

Spec_Mode6
{
#Cstrike_TitlesTXT_Spec_Mode6
}

Spec_NoTarget
{
#Cstrike_TitlesTXT_Spec_NoTarget
}

Spec_Help_Title
{
#Cstrike_TitlesTXT_Spec_Help_Title
}

Spec_Help_Text
{
#Cstrike_TitlesTXT_Spec_Help_Text
}

Spec_Slow_Motion
{
#Cstrike_TitlesTXT_Spec_Slow_Motion
}

Spec_Replay
{
#Cstrike_TitlesTXT_Spec_Replay
}

Spec_Auto
{
#Cstrike_TitlesTXT_Spec_Auto
}

Spec_Time
{
#Cstrike_TitlesTXT_Spec_Time
}

Spec_Map
{
#Cstrike_TitlesTXT_Spec_Map
}

Spectators
{
#Cstrike_TitlesTXT_Spectators
}

Unassigned
{
#Cstrike_TitlesTXT_Unassigned
}

Only_CT_Can_Move_Hostages
{
#Cstrike_TitlesTXT_Only_CT_Can_Move_Hostages
}

Spec_Duck
{
#Cstrike_TitlesTXT_Spec_Duck
}

Spec_Not_Valid_Choice
{
#Cstrike_TitlesTXT_Spec_Not_Valid_Choice
}

Spec_Not_In_Spectator_Mode
{
#Cstrike_TitlesTXT_Spec_Not_In_Spectator_Mode
}

Spec_NoPlayers
{
#Cstrike_TitlesTXT_Spec_NoPlayers
}

Spec_ListPlayers
{
#Cstrike_TitlesTXT_Spec_ListPlayers
}

Selection_Not_Available
{
#Cstrike_TitlesTXT_Selection_Not_Available
}

Alias_Not_Avail
{
#Cstrike_TitlesTXT_Alias_Not_Avail
}

Spec_No_PIP
{
#Cstrike_TitlesTXT_Spec_No_PIP
}

Cstrike_Already_Own_Weapon
{
#Cstrike_TitlesTXT_Cstrike_Already_Own_Weapon
}
`,titles_ruTxt=`Team_Select
{
\\yВыберите команду:\\w

1. Террористы
2. Контр-Террористы

5. Случайный выбор
}

Team_Select_Spect
{
\\yВыберите команду:\\w

1. Террористы
2. Контр-Террористы

5. Случайный выбор
6. Наблюдатель
}

IG_Team_Select
{
\\yВыберите команду:\\w

1. Террористы
2. Контр-Террористы

5. Случайный выбор

0. Выход
}

IG_Team_Select_Spect
{
\\yВыберите команду:\\w

1. Террористы
2. Контр-Террористы

5. Случайный выбор
6. Наблюдатель

0. Выход
}

IG_VIP_Team_Select
{
\\yВыберите команду:\\w

1. Террористы
2. Контр-Террористы
3. VIP

5. Случайный выбор

0. Выход
}

IG_VIP_Team_Select_Spect
{
\\yВыберите команду:\\w

1. Террористы
2. Контр-Террористы
3. VIP

5. Случайный выбор
6. Наблюдатель

0. Выход
}

Terrorist_Select
{
\\yВыберите класс:\\w

1. Подразделение Феникс
2. Элитное подразделение
3. Арктические мстители
4. Партизаны

5. Случайный выбор
}

CT_Select
{
\\yВыберите класс:\\w

1. Морские котики США
2. Германский спецназ
3. Великобританский спецназ
4. Французский спецназ

5. Случайный выбор
}

		Menu_Buy,
		Menu_BuyPistol,
		Menu_BuyRifle,
		Menu_BuyMachineGun,
		Menu_BuyShotgun,
		Menu_BuySubMachineGun,
		Menu_BuyItem

Buy
{
\\yКупить:\\w

1. Пистолет
2. Дробовик
3. Пистолет-Пулемет
4. Винтовка
5. Пулемет

6. Патроны к основному оружию
7. Патроны к запасному оружию

8. Снаряжение

0. Выход
}

CT_BuyItem
{
\\yКупить снаряжение:\\R$   Цена

\\w1. Бронежилет\\y\\R650
\\w2. Бронежилет и шлем \\y\\R1000
\\w3. Световая граната\\y\\R200	
\\w4. Взрывная граната\\y\\R300
\\w5. Дымовая граната\\y\\R300
\\w6. Прибор ночного видения\\y\\R1250
\\d7. Набор сапера\\y\\R200
\\w8. Щит\\y\\R2200

\\w0. Выход
}

T_BuyItem
{
\\yКупить снаряжение:\\R$   Цена

\\w1. Бронежилет\\y\\R650
\\w2. Бронежилет и шлем\\y\\R1000
\\w3. Световая граната\\y\\R200	
\\w4. Взрывная граната\\y\\R300
\\w5. Дымовая граната\\y\\R300
\\w6. Прибор ночного видения\\y\\R1250

\\w0. Выход
}

DCT_BuyItem
{
\\yКупить снаряжение:\\R$   Цена

\\w1. Бронежилет\\y\\R650
\\w2. Бронежилет и шлем\\y\\R1000
\\w3. Световая граната\\y\\R200	
\\w4. Взрывная граната\\y\\R300
\\w5. Дымовая граната\\y\\R300
\\w6. Прибор ночного видения\\y\\R1250
\\w7. Набор сапера\\y\\R200
\\w8. Щит\\y\\R2200

\\w0. Выход
}

DT_BuyItem
{
\\yКупить снаряжение:\\R$   Цена

\\w1. Бронежилет\\y\\R650
\\w2. Бронежилет и шлем\\y\\R1000
\\w3. Световая граната\\y\\R200	
\\w4. Взрывная граната\\y\\R300
\\w5. Дымовая граната\\y\\R300
\\w6. Прибор ночного видения\\y\\R1250

\\w0. Выход
}

CT_BuyPistol
{
\\yКупить пистолет:\\R$   Цена
(Запасное оружие)

\\w1. Glock 18\\y\\R400
\\w2. USP\\y\\R500
\\w3. P228 Compact\\y\\R600
\\w4. Desert Eagle\\y\\R650
\\w5. Five-Seven\\y\\R750

\\w0. Выход
}

T_BuyPistol
{
\\yКупить пистолет:\\R$   Цена
(Вторичное оружие)

\\w1. Glock 18\\y\\R400
\\w2. USP\\y\\R500
\\w3. P228 Compact\\y\\R600
\\w4. Desert Eagle\\y\\R650
\\w5. Dual-Beretta\\y\\R800

\\w0. Выход
}

AS_BuyShotgun
{
\\yКупить дробовик:\\R$   Цена
(Основное оружие)

\\d1. Leone Super M3\\y\\R1700
\\d2. Leone XM1014\\y\\R3000

\\w0. Выход
}

BuyShotgun
{
\\yКупить дробовик:\\R$   Цена
(Основное оружие)

\\w1. Leone Super M3\\y\\R1700
\\w2. Leone XM1014\\y\\R3000

\\w0. Выход
}

CT_BuySubMachineGun
{
\\yКупить Пистолет-Пулемет:\\R$   Цена
(Основное оружие)

\\w1. TMP\\y\\R1250
\\w2. MP5 Navy\\y\\R1500
\\w3. UMP45\\y\\R1700
\\w4. P90\\y\\R2350

\\w0. Выход
}

T_BuySubMachineGun
{
\\yКупить Пистолет-Пулемет:\\R$   Цена
(Основное оружие)

\\w1. MAC-10\\y\\R1400
\\w2. MP5 Navy\\y\\R1500
\\w3. UMP45\\y\\R1700
\\w4. P90\\y\\R2350

\\w0. Выход
}

AS_CT_BuySubMachineGun
{
\\yКупить Пистолет-Пулемет:\\R$   Цена
(Основное оружие)

\\w1. TMP\\y\\R1250
\\w2. MP5 Navy\\y\\R1500
\\w3. UMP45\\y\\R1700
\\w4. P90\\y\\R2350

\\w0. Выход
}

AS_T_BuySubMachineGun
{
\\yКупить Пистолет-Пулемет:\\R$   Цена
(Основное оружие)

\\w1. MAC-10\\y\\R1400
\\d2. MP5 Navy\\y\\R1500
\\w3. UMP45\\y\\R1700
\\d4. P90\\y\\R2350

\\w0. Выход
}

T_BuyRifle
{
\\yКупить винтовку:\\R$   Цена
(Основное оружие)

\\w1. Galil\\y\\R2000
\\w2. AK-47\\y\\R2500
\\w3. Scout\\y\\R2750
\\w4. Krieg 552\\y\\R3500
\\w5. AWP\\y\\R4750
\\w6. D3/AU-1\\y\\R5000

\\w0. Выход
}

CT_BuyRifle
{
\\yКупить винтовку:\\R$   Цена
(Основное оружие)

\\w1. Famas\\y\\R2250
\\w2. Scout\\y\\R2750
\\w3. M4A1 Carbine\\y\\R3100
\\w4. AUG\\y\\R3500
\\w5. Krieg 550 Commando\\y\\R4200
\\w6. AWP\\y\\R4750

\\w0. Выход
}

AS_T_BuyRifle
{
\\yКупить винтовку:\\R$   Цена
(Основное оружие)

\\w1. Galil\\y\\R2000
\\w2. AK-47\\y\\R2500
\\d3. Scout\\y\\R2750
\\d4. Krieg 552\\y\\R3500
\\w5. AWP\\y\\R4750
\\d6. D3/AU-1\\y\\R5000

\\w0. Выход
}

AS_CT_BuyRifle
{
\\yКупить винтовку:\\R$   Цена
(Основное оружие)

\\w1. Famas\\y\\R2250
\\d2. Scout\\y\\R2750
\\w3. M4A1 Carbine\\y\\R3100
\\w4. AUG\\y\\R3500
\\w5. Krieg 550 Cammando\\y\\R4200
\\d6. AWP\\y\\R4750

\\w0. Выход
}

AS_T_BuyMachineGun
{
\\yКупить пулемет:\\R$   Цена
(Основное оружие)

\\d1. M249\\y\\R5750

\\w0. Выход
}

BuyMachineGun
{
\\yКупить пулемет:\\R$   Цена
(Основное оружие)

\\w1. M249\\y\\R5750

\\w0. Выход
}

RadioA
{
\\yСтандартные радиосообщения:\\w

1. "Прикройте меня!"
2. "Возмите эту точку на себя."
3. "Удерживайте эту позицию."
4. "Перегруппируйтесь."
5. "Идите за мной."
6. "Атакуют... Нужна помощь!"

0. Выход
}

RadioB
{
\\yКомандные радиосообщения:\\w

1. "Пошли, пошли!"
2. "Отступаем."
3. "Команда держимся групой."
4. "Занять позицию."
5. "Атакуем фронт!"
6. "Доложить."

0. Выход
}

RadioC
{
\\yОтчетные радиосообщения:\\w

1. "Так точно/Понял."
2. "Вижу противника!"
3. "Нужна поддержка!"
4. "Сектор чист."
5. "Я на позиции."
6. "Докладываю."	
7. "Уходим отсюда, сейчас рванет!"
8. "Никак нет."
9. "Противник убит."

0. Выход
}

// weapon names

// RIFLES
AK47
{
#Cstrike_TitlesTXT_AK47
}

SG552
{
#Cstrike_TitlesTXT_SG552
}

M4A1
{
#Cstrike_TitlesTXT_M4A1
}

Famas
{
#Cstrike_TitlesTXT_Famas
}

Galil
{
#Cstrike_TitlesTXT_Galil
}

Aug
{
#Cstrike_TitlesTXT_Aug
}

Scout
{
#Cstrike_TitlesTXT_Scout
}

ArcticWarfareMagnum
{
#Cstrike_TitlesTXT_ArcticWarfareMagnum
}

G3SG1
{
#Cstrike_TitlesTXT_G3SG1
}

SG550
{
#Cstrike_TitlesTXT_SG550
}

USP45
{
#Cstrike_TitlesTXT_USP45
}

Glock18
{
#Cstrike_TitlesTXT_Glock18
}

DesertEagle
{
#Cstrike_TitlesTXT_DesertEagle
}

P228
{
#Cstrike_TitlesTXT_P228
}

Beretta96G
{
#Cstrike_TitlesTXT_Beretta96G
}

FiveSeven
{
#Cstrike_TitlesTXT_FiveSeven
}

// shotguns
Super90
{
#Cstrike_TitlesTXT_Super90
}

XM1014
{
#Cstrike_TitlesTXT_XM1014
}

// smg's
mp5navy
{
#Cstrike_TitlesTXT_mp5navy
}

tmp
{
#Cstrike_TitlesTXT_tmp
}

FNP90
{
#Cstrike_TitlesTXT_FNP90
}

Mac10
{
#Cstrike_TitlesTXT_Mac10
}

UMP45
{
#Cstrike_TitlesTXT_UMP45
}

// mg
M249
{
#Cstrike_TitlesTXT_M249
}

// weapon short names
Krieg552
{
#Cstrike_TitlesTXT_Krieg552
}

M4A1_Short
{
#Cstrike_TitlesTXT_M4A1_Short
}

Schmidt
{
#Cstrike_TitlesTXT_Schmidt
}

Magnum
{
#Cstrike_TitlesTXT_Magnum
}

D3AU1
{
#Cstrike_TitlesTXT_D3AU1
}

Krieg550
{
#Cstrike_TitlesTXT_Krieg550
}

// pistol
KM45Tactical
{
#Cstrike_TitlesTXT_KM45Tactical
}

Sidearm9X19mm
{
#Cstrike_TitlesTXT_Sidearm9X19mm
}

NightHawk
{
#Cstrike_TitlesTXT_NightHawk
}

P228Compact
{
#Cstrike_TitlesTXT_P228Compact
}

Dual40
{
#Cstrike_TitlesTXT_Dual40
}

ESFiveSeven
{
#Cstrike_TitlesTXT_ESFiveSeven
}

// shotgun short names
Leone12
{
#Cstrike_TitlesTXT_Leone12
}

AutoShotgun
{
#Cstrike_TitlesTXT_AutoShotgun
}

// smg short names
SubMachineGun
{
#Cstrike_TitlesTXT_SubMachineGun
}

SchmidtMP
{
#Cstrike_TitlesTXT_SchmidtMP
}

ESC90
{
#Cstrike_TitlesTXT_ESC90
}

Mac10_Short
{
#Cstrike_TitlesTXT_Mac10_Short
}

KMUMP45
{
#Cstrike_TitlesTXT_KMUMP45
}

// mg short name
ESM249
{
#Cstrike_TitlesTXT_ESM249
}

// Scoreboard
TEAMS
{
#Cstrike_TitlesTXT_TEAMS
}

PLAYERS
{
#Cstrike_TitlesTXT_PLAYERS
}

CLASS
{
#Cstrike_TitlesTXT_CLASS
}

SCORE
{
#Cstrike_TitlesTXT_SCORE
}

DEATHS
{
#Cstrike_TitlesTXT_DEATHS
}

LATENCY
{
#Cstrike_TitlesTXT_LATENCY
}

VOICE
{
#Cstrike_TitlesTXT_VOICE
}

// other menu text
Menu_OK
{
#Cstrike_TitlesTXT_Menu_OK
}

Menu_Cancel
{
#Cstrike_TitlesTXT_Menu_Cancel
}

Menu_Spectate
{
#Cstrike_TitlesTXT_Menu_Spectate
}

Team_AutoAssign
{
#Cstrike_TitlesTXT_Team_AutoAssign
}

Title_SelectYourTeam
{
#Cstrike_TitlesTXT_Title_SelectYourTeam
}

Target_Bombed
{
#Cstrike_TitlesTXT_Target_Bombed
}

VIP_Escaped
{
#Cstrike_TitlesTXT_VIP_Escaped
}

VIP_Assassinated
{
#Cstrike_TitlesTXT_VIP_Assassinated
}

Terrorists_Escaped
{
#Cstrike_TitlesTXT_Terrorists_Escaped
}

CTs_PreventEscape
{
#Cstrike_TitlesTXT_CTs_PreventEscape
}

Escaping_Terrorists_Neutralized
{
#Cstrike_TitlesTXT_Escaping_Terrorists_Neutralized
}

Bomb_Defused
{
#Cstrike_TitlesTXT_Bomb_Defused
}

CTs_Win
{
#Cstrike_TitlesTXT_CTs_Win
}

Terrorists_Win
{
#Cstrike_TitlesTXT_Terrorists_Win
}

Round_Draw
{
#Cstrike_TitlesTXT_Round_Draw
}

All_Hostages_Rescued
{
#Cstrike_TitlesTXT_All_Hostages_Rescued
}

Target_Saved
{
#Cstrike_TitlesTXT_Target_Saved
}

Hostages_Not_Rescued
{
#Cstrike_TitlesTXT_Hostages_Not_Rescued
}

Terrorists_Not_Escaped
{
#Cstrike_TitlesTXT_Terrorists_Not_Escaped
}

VIP_Not_Escaped
{
#Cstrike_TitlesTXT_VIP_Not_Escaped
}

Cannot_Buy_This
{
#Cstrike_TitlesTXT_Cannot_Buy_This
}

Not_Enough_Money
{
#Cstrike_TitlesTXT_Not_Enough_Money
}

Weapon_Not_Available
{
#Cstrike_TitlesTXT_Weapon_Not_Available
}

Already_Have_Kevlar
{
#Cstrike_TitlesTXT_Already_Have_Kevlar
}

Already_Have_Kevlar_Helmet
{
#Cstrike_TitlesTXT_Already_Have_Kevlar_Helmet
}

Already_Have_Kevlar_Bought_Helmet
{
У вас уже есть шлем!
}

Already_Have_Helmet_Bought_Kevlar
{
У вас уже есть бронежилет!
}

Cannot_Carry_Anymore
{
#Cstrike_TitlesTXT_Cannot_Carry_Anymore
}

Already_Have_One
{
#Cstrike_TitlesTXT_Already_Have_One
}

Cannot_Switch_From_VIP
{
#Cstrike_TitlesTXT_Cannot_Switch_From_VIP
}

All_Teams_Full
{
#Cstrike_TitlesTXT_All_Teams_Full
}

Terrorists_Full
{
#Cstrike_TitlesTXT_Terrorists_Full
}

CTs_Full
{
#Cstrike_TitlesTXT_CTs_Full
}

Too_Many_Terrorists
{
#Cstrike_TitlesTXT_Too_Many_Terrorists
}

Too_Many_CTs
{
#Cstrike_TitlesTXT_Too_Many_CTs
}

Wait_3_Seconds
{
Пожалуйста, подождите 3 секунды.
}

Only_1_Team_Change
{
#Cstrike_TitlesTXT_Only_1_Team_Change
}

Ignore_Broadcast_Messages
{
#Cstrike_TitlesTXT_Ignore_Broadcast_Messages
}

Ignore_Broadcast_Team_Messages
{
#Cstrike_TitlesTXT_Ignore_Broadcast_Team_Messages
}

Accept_All_Messages
{
#Cstrike_TitlesTXT_Accept_All_Messages
}

Ignore_Radio
{
#Cstrike_TitlesTXT_Ignore_Radio
}

Accept_Radio
{
#Cstrike_TitlesTXT_Accept_Radio
}

Command_Not_Available
{
#Cstrike_TitlesTXT_Command_Not_Available
}

Defusing_Bomb_With_Defuse_Kit
{
#Cstrike_TitlesTXT_Defusing_Bomb_With_Defuse_Kit
}

Defusing_Bomb_Without_Defuse_Kit
{
#Cstrike_TitlesTXT_Defusing_Bomb_Without_Defuse_Kit
}

Killed_Hostage
{
#Cstrike_TitlesTXT_Killed_Hostage
}

Injured_Hostage
{
#Cstrike_TitlesTXT_Injured_Hostage
}

Auto_Team_Balance_Next_Round
{
#Cstrike_TitlesTXT_Auto_Team_Balance_Next_Round
}

All_VIP_Slots_Full
{
#Cstrike_TitlesTXT_All_VIP_Slots_Full
}

Killed_Teammate
{
#Cstrike_TitlesTXT_Killed_Teammate
}

Banned_For_Killing_Teammates
{
Вы забанены сервером за неоднократное убийство товарищей по команде
}

Cannot_Vote_Map
{
Вы не можете голосовать на протяжении 3 минут на новой карте
}

Weapon_Cannot_Be_Dropped
{
#Cstrike_TitlesTXT_Weapon_Cannot_Be_Dropped
}

Terrorist_Escaped
{
#Cstrike_TitlesTXT_Terrorist_Escaped
}

C4_Plant_At_Bomb_Spot
{
#Cstrike_TitlesTXT_C4_Plant_At_Bomb_Spot
}

C4_Plant_Must_Be_On_Ground
{
#Cstrike_TitlesTXT_C4_Plant_Must_Be_On_Ground
}

C4_Arming_Cancelled
{
#Cstrike_TitlesTXT_C4_Arming_Cancelled
}

Bomb_Planted
{
#Cstrike_TitlesTXT_Bomb_Planted
}

C4_Activated_At_Bomb_Spot
{
#Cstrike_TitlesTXT_C4_Activated_At_Bomb_Spot
}

Switch_To_BurstFire
{
#Cstrike_TitlesTXT_Switch_To_BurstFire
}

Switch_To_SemiAuto
{
#Cstrike_TitlesTXT_Switch_To_SemiAuto
}

Switch_To_FullAuto
{
#Cstrike_TitlesTXT_Switch_To_FullAuto
}

//***************************
//** Training map messages **
//***************************

$position -1 -1
$color 12 200 12
$effect 0
$fadein 0.2
$holdtime 2
$fadeout 1

TRAINING1
{
#Cstrike_TitlesTXT_TRAINING1
}

TRAINING2
{
#Cstrike_TitlesTXT_TRAINING2
}

TRAINING3
{
#Cstrike_TitlesTXT_TRAINING3
}

TRAINING4
{
#Cstrike_TitlesTXT_TRAINING4
}

TRAINING5
{
#Cstrike_TitlesTXT_TRAINING5
}

TRAINING6
{
#Cstrike_TitlesTXT_TRAINING6
}

TRAINING7
{
#Cstrike_TitlesTXT_TRAINING7
}

// In-Game messages
$position -1 0.65
$effect 2
// This is the final color
$color 100 100 100
// This is the highlight color
$color2 240 110 0
// This is the time it takes to fade each character
$fadein 0.01
// This is the amount of time the highlight lags behind the leading edge of the text
$fxtime 0.25
// How long to hold the message on the screen (after it scans out)
$holdtime 2.0
// How long it takes to fade out the message after holding
$fadeout 0.5

GAMESAVED
{
#Cstrike_TitlesTXT_GAMESAVED
}

Game_Commencing
{
#Cstrike_TitlesTXT_Game_Commencing
}

Game_connected
{
%s подключается
}

Game_disconnected
{
%s вышел из игры
}

Game_join_terrorist
{
%s присоединился к Террористам
}

Game_join_ct
{
%s присоединился к Контр-Террористам
}

Game_join_terrorist_auto
{
%s присоединился к Террористам (автомат.)"
}

Game_join_ct_auto
{
%s присоединился к Контр-Террористам (автомат.)"
}

Game_scoring
{
Счет очков вестись не будет, пока обе команды не наберут игроков
}

Game_idle_kick
{
%s долгое время бездействовал и был отсоединен
}

Game_bomb_drop
{
#Cstrike_TitlesTXT_Game_bomb_drop
}

Game_bomb_pickup
{
#Cstrike_TitlesTXT_Game_bomb_pickup
}

Game_no_timelimit
{
* Без ограничения времени *
}

Game_timelimit
{
Осталось времени на карту: %s:%.2s
}

Game_unknown_command
{
Неизвестная команда: %s
}

Game_in_position
{
#Cstrike_TitlesTXT_Game_in_position
}

Game_added_position
{
#Cstrike_TitlesTXT_Game_added_position
}

Game_teammate_kills
{
Убийств товарищей по команде: %s из 3
}

Game_required_votes
{
Необходимое количество голосов за новую карту = %s
}

Game_radio
{
%s (РАДИО): %s
}

Game_teammate_attack
{
%s атаковал товарища по команде
}

Game_kicked
{
#Cstrike_TitlesTXT_Game_kicked
}

Game_vote_cast
{
Сумма голосов против игрока # %s
}

Game_vote_usage
{
Используйте:  vote <id>
}

Game_vote_player_not_found
{
Игрок # %s не был найден
}

Game_vote_players_on_your_team
{
Вы можете голосовать только за игроков своей команды
}

Game_vote_not_yourself
{
Вы не можете голосовать против себя!
}

Game_voted_for_map
{
Вы проголосовали за карту # %s
}

Game_votemap_usage
{
Используйте:  votemap <id>
}

Cannot_Vote_Need_More_People
{
Вы не можете сами голосовать за карту!
}

Map_Vote_Extend
{
#Cstrike_TitlesTXT_Map_Vote_Extend
}

Cannot_Vote_With_Less_Than_Three
{
Вы не можете голосовать, если в вашей команде менее 3 человек.
}

Game_will_restart_in
{
#Cstrike_TitlesTXT_Game_will_restart_in
}

Game_will_restart_in_console
{
Рестарт произойдет через %s секунд(у)
}

Cover_me
{
Прикройте меня!
}

You_take_the_point
{
Возмите эту точку на себя.
}

Hold_this_position
{
Удерживайте эту позицию.
}

Regroup_team
{
Перегруппируйтесь.
}

Follow_me
{
Идите за мной.
}

Taking_fire
{
Атакуют... Нужна помощь!
}

Go_go_go
{
Пошли, пошли!
}

Team_fall_back
{
Отступаем!
}

Stick_together_team
{
Команда, держимся групой.
}

Get_in_position_and_wait
{
Занять позицию и ждать команды.
}

Storm_the_front
{
Атакуем фронт!
}

Report_in_team
{
Доложить обстановку.
}

Affirmative
{
Так точно.
}

Roger_that
{
Понял.
}

Enemy_spotted
{
Вижу противника!
}

Need_backup
{
Нужна поддержка!
}

Sector_clear
{
Сектор чист.
}

In_position
{
Я на позиции.
}

Reporting_in
{
Докладываю.
}

Get_out_of_there
{
Валим отсюда, сейчас рванет!
}

Negative
{
Никак нет.
}

Enemy_down
{
Противник убит.
}

Hostage_down
{
Заложник убит.
}

Fire_in_the_hole
{
Осторожно, граната!
}

Cant_buy
{
#Cstrike_TitlesTXT_Cant_buy
}

VIP_cant_buy
{
#Cstrike_TitlesTXT_VIP_cant_buy
}

CT_cant_buy
{
#Cstrike_TitlesTXT_CT_cant_buy
}

Terrorist_cant_buy
{
#Cstrike_TitlesTXT_Terrorist_cant_buy
}

Vote
{
%s :  %s (%s голос)
}

Votes
{
%s :  %s (%s голосов)
}

Hint_press_buy_to_purchase
{
#Cstrike_TitlesTXT_Hint_press_buy_to_purchase
}

Hint_use_nightvision
{
#Cstrike_TitlesTXT_Hint_use_nightvision
}

Hint_lost_money
{
#Cstrike_TitlesTXT_Hint_lost_money
}

Hint_removed_for_next_hostage_killed
{
#Cstrike_TitlesTXT_Hint_removed_for_next_hostage_killed
}

Hint_careful_around_hostages
{
#Cstrike_TitlesTXT_Hint_careful_around_hostages
}

Hint_careful_around_teammates
{
#Cstrike_TitlesTXT_Hint_careful_around_teammates
}

Hint_reward_for_killing_vip
{
#Cstrike_TitlesTXT_Hint_reward_for_killing_vip
}

Hint_win_round_by_killing_enemy
{
#Cstrike_TitlesTXT_Hint_win_round_by_killing_enemy
}

Hint_try_not_to_injure_teammates
{
#Cstrike_TitlesTXT_Hint_try_not_to_injure_teammates
}

Hint_you_are_in_targetzone
{
#Cstrike_TitlesTXT_Hint_you_are_in_targetzone
}

Hint_hostage_rescue_zone
{
#Cstrike_TitlesTXT_Hint_hostage_rescue_zone
}

Hint_terrorist_escape_zone
{
#Cstrike_TitlesTXT_Hint_terrorist_escape_zone
}

Hint_ct_vip_zone
{
#Cstrike_TitlesTXT_Hint_ct_vip_zone
}

Hint_terrorist_vip_zone
{
#Cstrike_TitlesTXT_Hint_terrorist_vip_zone
}

Hint_cannot_play_because_tk
{
#Cstrike_TitlesTXT_Hint_cannot_play_because_tk
}

Hint_use_hostage_to_stop_him
{
#Cstrike_TitlesTXT_Hint_use_hostage_to_stop_him
}

Hint_lead_hostage_to_rescue_point
{
#Cstrike_TitlesTXT_Hint_lead_hostage_to_rescue_point
}

Hint_you_have_the_bomb
{
#Cstrike_TitlesTXT_Hint_you_have_the_bomb
}

Hint_you_are_the_vip
{
#Cstrike_TitlesTXT_Hint_you_are_the_vip
}

Hint_out_of_ammo
{
#Cstrike_TitlesTXT_Hint_out_of_ammo
}

Hint_spotted_a_friend
{
#Cstrike_TitlesTXT_Hint_spotted_a_friend
}

Hint_spotted_an_enemy
{
#Cstrike_TitlesTXT_Hint_spotted_an_enemy
}

Hint_prevent_hostage_rescue
{
#Cstrike_TitlesTXT_Hint_prevent_hostage_rescue
}

Hint_rescue_the_hostages
{
#Cstrike_TitlesTXT_Hint_rescue_the_hostages
}

Hint_press_use_so_hostage_will_follow
{
#Cstrike_TitlesTXT_Hint_press_use_so_hostage_will_follow
}

Friend
{
Товарищ
}

Enemy
{
Противник
}

Hostage
{
Заложник
}

Health
{
Здоровье
}

Map_descr_not_avail
{
#Cstrike_TitlesTXT_Map_descr_not_avail
}

Class_descr_not_avail
{
#Cstrike_TitlesTXT_Class_descr_not_avail
}

Title_terrorist_model_selection
{
#Cstrike_TitlesTXT_Title_terrorist_model_selection
}

Phoenix_Connexion
{
#Cstrike_TitlesTXT_Phoenix_Connexion
}

L337_Krew
{
#Cstrike_TitlesTXT_L337_Krew
}

Arctic_Avengers
{
#Cstrike_TitlesTXT_Arctic_Avengers
}

Guerilla_Warfare
{
#Cstrike_TitlesTXT_Guerilla_Warfare
}

Auto_Select
{
#Cstrike_TitlesTXT_Auto_Select
}

Title_ct_model_selection
{
#Cstrike_TitlesTXT_Title_ct_model_selection
}

Seal_Team_6
{
#Cstrike_TitlesTXT_Seal_Team_6
}

Title_seal_team
{
#Cstrike_TitlesTXT_Title_seal_team
}

GSG_9
{
#Cstrike_TitlesTXT_GSG_9
}

Title_gsg9
{
#Cstrike_TitlesTXT_Title_gsg9
}

SAS
{
#Cstrike_TitlesTXT_SAS
}

Title_sas
{
#Cstrike_TitlesTXT_Title_sas
}

GIGN
{
#Cstrike_TitlesTXT_GIGN
}

Title_gign
{
#Cstrike_TitlesTXT_Title_gign
}

Title_select_category_of_purchase
{
#Cstrike_TitlesTXT_Title_select_category_of_purchase
}

Title_equipment_selection
{
#Cstrike_TitlesTXT_Title_equipment_selection
}

Kevlar
{
#Cstrike_TitlesTXT_Kevlar
}

Kevlar_Vest
{
#Cstrike_TitlesTXT_Kevlar_Vest
}

Kevlar_Helmet
{
#Cstrike_TitlesTXT_Kevlar_Helmet
}

Kevlar_Vest_Ballistic_Helmet
{
#Cstrike_TitlesTXT_Kevlar_Vest_Ballistic_Helmet
}

Flashbang
{
#Cstrike_TitlesTXT_Flashbang
}

HE_Grenade
{
#Cstrike_TitlesTXT_HE_Grenade
}

High_Explosive_Grenade
{
#Cstrike_TitlesTXT_High_Explosive_Grenade
}

Smoke_Grenade
{
#Cstrike_TitlesTXT_Smoke_Grenade
}

Defusal_Kit
{
#Cstrike_TitlesTXT_Defusal_Kit
}

Bomb_Defusal_Kit
{
#Cstrike_TitlesTXT_Bomb_Defusal_Kit
}

NightVision
{
#Cstrike_TitlesTXT_NightVision
}

Nightvision_Goggles
{
#Cstrike_TitlesTXT_Nightvision_Goggles
}

TactShield
{
#Cstrike_TitlesTXT_TactShield
}

TactShield_Desc
{
#Cstrike_TitlesTXT_TactShield_Desc
}

Title_pistol_selection
{
#Cstrike_TitlesTXT_Title_pistol_selection
}

Pistols
{
#Cstrike_TitlesTXT_Pistols
}

Buy_pistols
{
#Cstrike_TitlesTXT_Buy_pistols
}

Title_shotgun_selection
{
#Cstrike_TitlesTXT_Title_shotgun_selection
}

Shotguns
{
#Cstrike_TitlesTXT_Shotguns
}

Buy_shotguns
{
#Cstrike_TitlesTXT_Buy_shotguns
}

Title_smg_selection
{
#Cstrike_TitlesTXT_Title_smg_selection
}

SMGs
{
#Cstrike_TitlesTXT_SMGs
}

Buy_smgs
{
#Cstrike_TitlesTXT_Buy_smgs
}

Title_rifle_selection
{
#Cstrike_TitlesTXT_Title_rifle_selection
}

Rifles
{
#Cstrike_TitlesTXT_Rifles
}

Buy_rifles
{
#Cstrike_TitlesTXT_Buy_rifles
}

Title_machinegun_selection
{
#Cstrike_TitlesTXT_Title_machinegun_selection
}

MachineGuns
{
#Cstrike_TitlesTXT_MachineGuns
}

Buy_machineguns
{
#Cstrike_TitlesTXT_Buy_machineguns
}

Prim_Ammo
{
#Cstrike_TitlesTXT_Prim_Ammo
}

Buy_prim_ammo
{
#Cstrike_TitlesTXT_Buy_prim_ammo
}

Sec_Ammo
{
#Cstrike_TitlesTXT_Sec_Ammo
}

Buy_sec_ammo
{
#Cstrike_TitlesTXT_Buy_sec_ammo
}

Equipment
{
#Cstrike_TitlesTXT_Equipment
}

Buy_equipment
{
#Cstrike_TitlesTXT_Buy_equipment
}

Terrorist_Forces
{
#Cstrike_TitlesTXT_Terrorist_Forces
}

CT_Forces
{
#Cstrike_TitlesTXT_CT_Forces
}

VIP
{
#Cstrike_TitlesTXT_VIP
}

WINS
{
#Cstrike_TitlesTXT_WINS
}

BOMB
{
#Cstrike_TitlesTXT_BOMB
}

DEAD
{
#Cstrike_TitlesTXT_DEAD
}

// spaces are on purpose
SCORES
{
#Cstrike_TitlesTXT_SCORES
}

Player
{
#Cstrike_TitlesTXT_Player
}

Player_plural
{
#Cstrike_TitlesTXT_Player_plural
}

Got_defuser
{
#Cstrike_TitlesTXT_Got_defuser
}

Got_bomb
{
#Cstrike_TitlesTXT_Got_bomb
}

Mic_Volume
{
#Cstrike_TitlesTXT_Mic_Volume
}

Speaker_Volume
{
#Cstrike_TitlesTXT_Speaker_Volume
}

Voice_Properties
{
#Cstrike_TitlesTXT_Voice_Properties
}

Cannot_Be_Spectator
{
#Cstrike_TitlesTXT_Cannot_Be_Spectator
}

Map_Description_not_available
{
#Cstrike_TitlesTXT_Map_Description_not_available
}

Muted
{
#Cstrike_TitlesTXT_Muted
}

Unmuted
{
#Cstrike_TitlesTXT_Unmuted
}

No_longer_hear_that_player
{
#Cstrike_TitlesTXT_No_longer_hear_that_player
}

OBS_NONE
{
#Cstrike_TitlesTXT_OBS_NONE
}

OBS_CHASE_LOCKED
{
#Cstrike_TitlesTXT_OBS_CHASE_LOCKED
}

OBS_CHASE_FREE
{
#Cstrike_TitlesTXT_OBS_CHASE_FREE
}

OBS_ROAMING
{
#Cstrike_TitlesTXT_OBS_ROAMING
}

OBS_IN_EYE
{
#Cstrike_TitlesTXT_OBS_IN_EYE
}

OBS_MAP_FREE
{
#Cstrike_TitlesTXT_OBS_MAP_FREE
}

OBS_MAP_CHASE
{
#Cstrike_TitlesTXT_OBS_MAP_CHASE
}

SPECT_OPTIONS
{
#Cstrike_TitlesTXT_SPECT_OPTIONS
}

CAM_OPTIONS
{
#Cstrike_TitlesTXT_CAM_OPTIONS
}

Name_change_at_respawn
{
#Cstrike_TitlesTXT_Name_change_at_respawn
}

C4_Defuse_Must_Be_On_Ground
{
#Cstrike_TitlesTXT_C4_Defuse_Must_Be_On_Ground
}

// SDK 2.0 Spectator Menu

Spec_Mode1
{
#Cstrike_TitlesTXT_Spec_Mode1
}

Spec_Mode2
{
#Cstrike_TitlesTXT_Spec_Mode2
}

Spec_Mode3
{
#Cstrike_TitlesTXT_Spec_Mode3
}

Spec_Mode4
{
#Cstrike_TitlesTXT_Spec_Mode4
}

Spec_Mode5
{
#Cstrike_TitlesTXT_Spec_Mode5
}

Spec_Mode6
{
#Cstrike_TitlesTXT_Spec_Mode6
}

Spec_NoTarget
{
#Cstrike_TitlesTXT_Spec_NoTarget
}

Spec_Help_Title
{
#Cstrike_TitlesTXT_Spec_Help_Title
}

Spec_Help_Text
{
#Cstrike_TitlesTXT_Spec_Help_Text
}

Spec_Slow_Motion
{
#Cstrike_TitlesTXT_Spec_Slow_Motion
}

Spec_Replay
{
#Cstrike_TitlesTXT_Spec_Replay
}

Spec_Auto
{
#Cstrike_TitlesTXT_Spec_Auto
}

Spec_Time
{
#Cstrike_TitlesTXT_Spec_Time
}

Spec_Map
{
#Cstrike_TitlesTXT_Spec_Map
}

Spectators
{
#Cstrike_TitlesTXT_Spectators
}

Unassigned
{
#Cstrike_TitlesTXT_Unassigned
}

Only_CT_Can_Move_Hostages
{
#Cstrike_TitlesTXT_Only_CT_Can_Move_Hostages
}

Spec_Duck
{
#Cstrike_TitlesTXT_Spec_Duck
}

Spec_Not_Valid_Choice
{
#Cstrike_TitlesTXT_Spec_Not_Valid_Choice
}

Spec_Not_In_Spectator_Mode
{
#Cstrike_TitlesTXT_Spec_Not_In_Spectator_Mode
}

Spec_NoPlayers
{
#Cstrike_TitlesTXT_Spec_NoPlayers
}

Spec_ListPlayers
{
#Cstrike_TitlesTXT_Spec_ListPlayers
}

Selection_Not_Available
{
#Cstrike_TitlesTXT_Selection_Not_Available
}

Alias_Not_Avail
{
#Cstrike_TitlesTXT_Alias_Not_Avail
}

Spec_No_PIP
{
#Cstrike_TitlesTXT_Spec_No_PIP
}

Cstrike_Already_Own_Weapon
{
#Cstrike_TitlesTXT_Cstrike_Already_Own_Weapon
}`,fetchWithTimeout=async(t,{timeoutMs:r=2147483647,idleTimeoutMs:n=5e3,onTotalBytes:a=void 0,onProgress:o=void 0,fetchOptions:l={}}={})=>{async function c(_){const u=new AbortController,p=u.signal;let d=setTimeout(()=>u.abort(),r),m=setTimeout(()=>u.abort(),n);try{const f=await fetch(_,{...l,signal:p});if(!f.ok||!f.body)throw new Error(`HTTP ${f.status}`);a?.(Number(f.headers.get("Content-Length")));const g=f.body.getReader(),E=[];for(clearTimeout(m),m=setTimeout(()=>u.abort(),n);;){const{done:x,value:v}=await g.read();if(x)break;clearTimeout(m),m=setTimeout(()=>u.abort(),n),clearTimeout(d),d=setTimeout(()=>u.abort(),r),E.push(v),o?.(v.length)}return clearTimeout(d),clearTimeout(m),new Blob(E)}catch(f){throw clearTimeout(d),clearTimeout(m),f}}for(const _ of t)try{return console.log("Trying:",_),await c(_)}catch(u){console.warn(`Failed: ${_} →`,u)}throw new Error("All URLs failed")},titles={en:titles_enTxt,ru:titles_ruTxt},extras={en:extras_en,ru:extras_ru},messages=new CircularBuffer(100),pingCache=new Map,Launcher=()=>{const{t}=useTranslation(),r=useTheme$1(),{selectedMap:n,servers:a,showSettings:o,connected:l,connecting:c,serverRunning:_,serverStarting:u}=useSelector(M=>M.game),[p,d]=reactExports.useState(),[m,f]=reactExports.useState(!1),[g,E]=reactExports.useState(!1),[x,v]=reactExports.useState(!1),[h,b]=reactExports.useState(0),[S,y]=reactExports.useState(0),T=useConfig(),{sdk:A}=useYSDK(),w=reactExports.useRef(null),[C,L]=reactExports.useState(),[k,P]=reactExports.useState(!0),[I,F]=reactExports.useState(!1),[H,O]=reactExports.useState(1),R=A.environment.i18n.lang=="ru"?"ru":"en";return reactExports.useEffect(()=>{T.onChangeLocalization(A.environment.i18n.lang==="ru"?"ru-RU":"en-US")},[A.environment.i18n.lang]),reactExports.useEffect(()=>{!m||!p||p.callMain(["-noip6","-windowed","-game","cstrike","-ref","webgl2","-language",R])},[m,p]),reactExports.useEffect(()=>{L(Number(A.environment.payload))},[A.environment.payload]),reactExports.useEffect(()=>{!p||!g||!C||p.executeString(`ui_queryserver ololoken.${C} current`)},[p,C,g]),reactExports.useEffect(()=>{if(!p)return;const M=setTimeout(()=>Object.keys(a).forEach(G=>{p.executeString(`ui_queryserver ololoken.${G} current`),pingCache.set(Number(G),{start:Date.now(),timeout:Number(setTimeout(()=>dispatch(removeServer(G)),5e3))})}),5e3);return()=>clearTimeout(M)},[a]),reactExports.useEffect(()=>{if(!p)return;const M=()=>{document.hidden?p.SDL2.audioContext.suspend():p.SDL2.audioContext.resume()};return document.addEventListener("visibilitychange",M),()=>document.removeEventListener("visibilitychange",M)},[p]),reactExports.useEffect(()=>{!x||!p||(p.print(t("Data bundle looks ok. Continue initialization...")),p.FS.syncfs(!1,M=>M?p.print(t("error.Failed to sync FS")):(p.FS.chdir(`${p?.ENV.HOME}`),f(!0),!0)))},[x,p]),reactExports.useEffect(()=>{p?.net.master.send(JSON.stringify({public:{status:I}}))},[I]),reactExports.useEffect(function M(){M.lock||(M.lock=!0,(async()=>w.current&&ModuleInstance({ENV:{XASH3D_RODIR:"/cstrike2/rodir",XASH3D_BASEDIR:"/cstrike2",XASH3D_GAMELIBPATH:"cstrike.wasm",HOME:"/cstrike2",LANG:R,XASH3D_EXTRAS_PAK1:`/cstrike2/rodir/extras_${R}.pk3`,...await A.getFlags()},canvas:w.current,reportDownloadProgress:()=>{},onExit:G=>{console.info("!+EXIT+!",G)},print:G=>{messages.push(G)},printErr:G=>{messages.push(G)}}).then(G=>{Object.assign(G,{callbacks:{fsSyncRequired:U=>setTimeout(()=>G?.FS.syncfs(j=>console.log(U,"synced",j)),500),gameReady:async()=>{A.features.LoadingAPI.ready(),E(!0),G.executeString("scr_conspeed 1048576"),G.executeString("con_notifytime 0"),G.executeString("hud_utf8 1"),G.executeString("cl_test_bandwidth 0"),G.executeString(`yb_language ${R}`),G.executeString("yb_difficulty 1"),G.executeString(`ui_language ${R}`),G.executeString('http_addcustomserver "https://gamesturch.in:443/cstrike/cstrike/"'),G.executeString('sv_downloadurl "https://gamesturch.in:443/cstrike/cstrike/"'),(await A.getFlags())?.DEFAULT_SETTINGS==="yes"?G.executeString('bind TAB "+showscores"'):G.executeString("unbind TAB")},serverInfo:(U,j)=>{const[,,V,$]=G.inetNtop4(U).split(".",4).map(Number),Q=V<<0|$<<8,re=j.split("\\").splice(1).reduce((X,Y,oe)=>{const fe=Math.floor(oe/2);return X[fe]=[...X[fe]??[],Y],X},[]).reduce((X,[Y,oe])=>({...X,[Y]:oe}),{});dispatch(addServer({[Q]:{...re,ping:Date.now()-(pingCache.get(Q)?.start??Date.now())}})),clearTimeout(pingCache.get(Q)?.timeout)}},executeString:G.cwrap("Cmd_ExecuteString","number",["string"]),getCVar:U=>G.waitMessage(`"${U}" is`,1e3,U).then(j=>{const[{groups:V}]=j?.matchAll(new RegExp(`"${U}" is "(?<value>[^"]*)"`,"gm"))??[{groups:{value:""}}];return V?.value}),waitMessage:(U,j=1e3,V="")=>new Promise(($,Q)=>{const re=Date.now(),X=setInterval(()=>{const Y=messages.find((oe,fe)=>oe.includes(U));if(!Y&&Date.now()-re>j)return clearInterval(X),Q("timeout");if(Y)return clearInterval(X),$(Y)},0);V&&G.executeString(V)})}),d(G)}).catch(G=>{console.error(G)}))())},[w]),reactExports.useEffect(()=>{p&&(p.print(t("Looking up data in [{{path}}]",{path:p.ENV.HOME})),(async()=>{if(p.FS.analyzePath(`${p.ENV.HOME}/cstrike/userconfig.cfg`).exists||(p.FS.mkdirTree(`${p.ENV.HOME}/cstrike`),p.FS.writeFile(`${p.ENV.HOME}/cstrike/config.cfg`,configCfg,{encoding:"utf8"})),p.FS.mkdirTree(`${p.ENV.HOME}/rodir/cstrike/`),p.FS.writeFile(`${p.ENV.HOME}/rodir/cstrike/titles.txt`,titles[R],{encoding:"utf8"}),p.FS.analyzePath(`${p.ENV.HOME}/rodir/extras_${R}.pk3`).exists||await fetch(extras[R]).then(U=>U.arrayBuffer()).then(U=>{p.FS.mkdirTree(`${p.ENV.HOME}/rodir`),p.FS.writeFile(`${p.ENV.HOME}/rodir/extras_${R}.pk3`,new Uint8Array(U),{encoding:"binary"})}),p.FS.analyzePath(`${p.ENV.HOME}/rodir/cstrike/liblist.gam`).exists)return v(!0);let M=0,G=0;fetchSplitZip({onTotalBytes:U=>M+=U,onProgress:U=>{G+=U,b(M?Math.min(100,Math.max(0,G/M*100)):0)}}).then(U=>zipInputReader(`${p.ENV.HOME}/rodir`,p,U,(j,V)=>y(V/j*100))).then(v).catch(U=>{p.print(`Failed to build local data ${U.message??U}`),console.error(U)}).finally(()=>b(0))})())},[p]),reactExports.useEffect(()=>{const M=()=>P(!document.pointerLockElement);return document.addEventListener("pointerlockchange",M,!1),()=>{document.removeEventListener("pointerlockchange",M)}},[]),jsxRuntimeExports.jsxs(Card,{elevation:0,sx:{background:`url(${BackgroundImage}) center center`,backgroundSize:"cover",position:"absolute",width:"100%",border:"none"},children:[jsxRuntimeExports.jsx(CardHeader,{title:"",sx:{background:r.palette.background.default,p:"8px 14px 8px 0",height:44,position:"absolute",zIndex:2e3,width:"100%",display:k?"flex":"none","& .MuiCardHeader-action":{width:"100%"}},onClick:M=>M.stopPropagation(),onMouseDown:M=>M.stopPropagation(),onMouseUp:M=>M.stopPropagation(),action:jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsxs(Stack,{direction:"row",spacing:2,children:[!C&&_&&p?.net?.getHostId()?jsxRuntimeExports.jsx(InviteLink,{instance:p}):jsxRuntimeExports.jsx(Box,{flex:1}),jsxRuntimeExports.jsx(BotComplexity,{mainRunning:g,instance:p}),jsxRuntimeExports.jsx(VolumeAndSensitivitySliders,{mainRunning:g,instance:p}),m?jsxRuntimeExports.jsx(Tooltip,{title:t("menu.Toggle Settings"),slotProps:{popper:{sx:{[`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:{marginTop:"0px",color:"#000",fontSize:"1em"}}}},children:jsxRuntimeExports.jsx(ToggleButton,{value:-1,selected:o,sx:{p:"3px 6px",height:"36px"},onClick:()=>{!_&&!l||dispatch(flow({showSettings:!o}))},children:jsxRuntimeExports.jsx(RefIcon$1,{style:{fontSize:"2.4em"}})})}):jsxRuntimeExports.jsx(CircularProgress,{color:"warning",size:"34px"})]})})}),jsxRuntimeExports.jsxs(CardContent,{sx:{p:0,m:0,background:"",backgroundSize:"cover",height:"calc(100vh)",position:"relative","&:last-child":{paddingBottom:0}},children:[jsxRuntimeExports.jsx(Box,{sx:{bgcolor:"rgba(0, 0, 0, 0.4)",height:o&&g?"100%":0,width:"100%",backdropFilter:"blur(10px)",overflow:"hidden",position:"absolute",zIndex:1e3},children:jsxRuntimeExports.jsx(Box,{sx:{width:"100%",top:44,position:"relative",maxWidth:"90%",margin:"0 auto"},children:C?jsxRuntimeExports.jsxs(Stack,{direction:"column",spacing:2,alignItems:"center",children:[jsxRuntimeExports.jsx(Stack,{direction:"row",spacing:2,children:jsxRuntimeExports.jsx(PlayerConfig,{instance:p,mainRunning:g})}),a?.[C]&&jsxRuntimeExports.jsx(Typography,{children:t("texts.Server info: players {{numcl}}/{{maxcl}}, map: {{map}}, ping: {{ping}}",{numcl:a[C].numcl,maxcl:a[C].maxcl,map:a[C].map,ping:a[C].ping})}),jsxRuntimeExports.jsx(Button,{size:"large",variant:"contained",startIcon:jsxRuntimeExports.jsx(GamepadIcon,{}),sx:{minWidth:"50%"},loading:!a?.[C]||c,loadingIndicator:jsxRuntimeExports.jsx(CircularProgress,{}),disabled:!a?.[C]||c,onClick:()=>{dispatch(flow({connecting:!0})),dispatch(publicServers({})),p?.executeString("host_writeconfig"),p?.preConnectToServer(C).then(()=>(p?.executeString(`connect o.${C}`),p?.waitMessage("Setting up renderer",6e4))).then(()=>{dispatch(flow({connected:!0,showSettings:!1}))}).finally(()=>dispatch(flow({connecting:!1})))},children:t("buttons.Connect {{name}}",{name:a?.[C]?.host??"--/--"})}),jsxRuntimeExports.jsx(Button,{variant:"text",onClick:()=>L(void 0),children:t("buttons.Run own server")})]}):jsxRuntimeExports.jsxs(TabContext,{value:H,children:[jsxRuntimeExports.jsx(Box,{sx:{borderBottom:1,borderColor:"divider"},children:jsxRuntimeExports.jsxs(TabList,{onChange:(M,G)=>O(G),children:[jsxRuntimeExports.jsx(Tab,{label:t("tabs.Connect To Server"),value:0,disabled:p?.net.master.readyState!==WebSocket.OPEN}),jsxRuntimeExports.jsx(Tab,{label:t("tabs.Create Server"),value:1})]})}),jsxRuntimeExports.jsx(TabPanel,{value:0,children:jsxRuntimeExports.jsx(Stack,{direction:"column",spacing:2,alignItems:"center",sx:{overflow:"hidden"},children:jsxRuntimeExports.jsx(ServersList,{instance:p})})}),jsxRuntimeExports.jsx(TabPanel,{value:1,sx:{transform:"scale(min(1, calc(100vh / 768px)))",transformOrigin:"top center",minWidth:"410px"},children:jsxRuntimeExports.jsxs(Stack,{direction:"column",spacing:2,alignItems:"center",sx:{overflow:"hidden"},children:[jsxRuntimeExports.jsxs(Stack,{direction:"row",spacing:2,children:[jsxRuntimeExports.jsx(MapConfig,{instance:p}),jsxRuntimeExports.jsx(PlayerConfig,{instance:p,mainRunning:g})]}),jsxRuntimeExports.jsx(Stack,{direction:"row",spacing:2,children:jsxRuntimeExports.jsxs(Typography,{children:[t("texts.Public server")," ",jsxRuntimeExports.jsx(Switch,{checked:I,disabled:p?.net.master.readyState!==WebSocket.OPEN,onChange:(M,G)=>F(G)})]})}),jsxRuntimeExports.jsx(Button,{size:"large",variant:"contained",startIcon:jsxRuntimeExports.jsx(GamepadIcon,{}),sx:{minWidth:"50%"},loading:u,loadingIndicator:jsxRuntimeExports.jsx(CircularProgress,{}),disabled:u,onClick:()=>{dispatch(flow({serverStarting:!0})),dispatch(publicServers({})),p?.executeString("host_writeconfig"),p?.executeString("deathmatch 1"),p?.executeString("maxplayers 16"),p?.executeString(`map ${n}`),p?.waitMessage("Setting up renderer",6e4).then(()=>dispatch(flow({showSettings:!1,serverStarting:!1,serverRunning:!0}))).finally(()=>snackbar({open:!0,close:!1,variant:"alert",message:t("snackbar.Press `Esc` to open top bar with invite link. Press `+` to manage bots.")}))},children:t("buttons.Play")})]})})]})})}),jsxRuntimeExports.jsx("canvas",{id:"canvas",ref:w,width:800,height:600,style:{width:"100%",height:"100%",position:"absolute",zIndex:100,top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:g?"#000":"transparent"}})]}),jsxRuntimeExports.jsx(DownloadIndicator,{downloadProgress:h,unpackProgress:S})]})};
// Multipart ZIP loader.
// Repo 2: part001-part010 + manifest.json
// Repo 4: part011-part020

async function fetchSplitZip({onTotalBytes,onProgress}={}) {
    const repo2 = GAME_ZIP_REPO2_ROOT;
    const repo4 = GAME_ZIP_REPO4_ROOT;

    const manifestUrl = repo2 + "manifest.json";

    const response = await fetch(manifestUrl, {
        mode: "cors",
        cache: "force-cache"
    });

    if (!response.ok) {
        throw new Error("Manifest HTTP " + response.status);
    }

    const manifest = await response.json();

    if (
        manifest.version !== 1 ||
        manifest.format !== "raw-zip-parts" ||
        !Array.isArray(manifest.parts) ||
        manifest.parts.length !== 20
    ) {
        throw new Error("Invalid ZIP manifest");
    }

    let total = 0;

    for (let i = 0; i < 20; i++) {
        const part = manifest.parts[i];
        const expected = "cstrike2.zip.part" +
            String(i + 1).padStart(3,"0");

        if (
            part.file !== expected ||
            !Number.isSafeInteger(part.size) ||
            part.size <= 0 ||
            part.size > 8388608 ||
            !/^[a-f0-9]{64}$/i.test(part.sha256)
        ) {
            throw new Error("Invalid ZIP part " + (i+1));
        }

        total += part.size;
    }

    if (total !== manifest.totalSize) {
        throw new Error("ZIP size mismatch");
    }

    if (!globalThis.crypto?.subtle) {
        throw new Error("HTTPS is required for SHA-256");
    }

    onTotalBytes?.(total);

    const parts = new Array(20);
    let nextIndex = 0;

    async function downloadPart(part,index) {
        const base = index < 10 ? repo2 : repo4;
        const url = base + part.file;

        let lastError;

        for (let attempt = 1; attempt <= 3; attempt++) {
            let loaded = 0;
            const controller = new AbortController();

            const timer = setTimeout(
                () => controller.abort(),
                120000
            );

            try {
                const res = await fetch(url,{
                    mode: "cors",
                    cache: "force-cache",
                    signal: controller.signal
                });

                if (!res.ok) {
                    throw new Error("HTTP " + res.status);
                }

                if (!res.body) {
                    throw new Error("Missing response body");
                }

                const reader = res.body.getReader();
                const buffers = [];

                while (true) {
                    const {done,value} = await reader.read();

                    if (done) break;

                    loaded += value.byteLength;

                    if (loaded > part.size) {
                        throw new Error("Part is too large");
                    }

                    buffers.push(value);
                    onProgress?.(value.byteLength);
                }

                if (loaded !== part.size) {
                    throw new Error("Invalid part length");
                }

                const blob = new Blob(buffers);

                const hashBuffer = await crypto.subtle.digest(
                    "SHA-256",
                    await blob.arrayBuffer()
                );

                const digest = Array.from(
                    new Uint8Array(hashBuffer),
                    x => x.toString(16).padStart(2,"0")
                ).join("");

                if (digest.toLowerCase() !==
                    part.sha256.toLowerCase()) {
                    throw new Error("SHA-256 mismatch");
                }

                return blob;

            } catch (error) {
                lastError = error;

                if (loaded > 0) {
                    onProgress?.(-loaded);
                }

                console.warn(
                    part.file,
                    "attempt",
                    attempt,
                    error
                );

                if (attempt < 3) {
                    await new Promise(
                        resolve => setTimeout(resolve,attempt*800)
                    );
                }

            } finally {
                clearTimeout(timer);
            }
        }

        throw new Error(
            "Download failed: " +
            part.file + " - " + lastError
        );
    }

    async function worker() {
        while (true) {
            const index = nextIndex++;

            if (index >= 20) return;

            parts[index] = await downloadPart(
                manifest.parts[index],
                index
            );
        }
    }

    await Promise.all([
        worker(),
        worker(),
        worker()
    ]);

    console.log(
        "ZIP assembled successfully:",
        parts.length,
        "parts",
        total,
        "bytes"
    );

    return new Blob(parts,{
        type: "application/zip"
    });
}

export{Launcher as default};
