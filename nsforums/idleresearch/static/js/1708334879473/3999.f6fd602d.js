"use strict";(self.webpackChunkcrazygames_gameframe=self.webpackChunkcrazygames_gameframe||[]).push([[3999],{12871:(e,t,o)=>{o.d(t,{Z:()=>p});var r=o(47313),n=o(1168),i=o(47472),a=o(2678),l=o(89265),s=o(46417);const p=r.forwardRef((function(e,t){const{children:o,container:p,disablePortal:u=!1}=e,[c,d]=r.useState(null),m=(0,i.Z)(r.isValidElement(o)?o.ref:null,t);return(0,a.Z)((()=>{u||d(function(e){return"function"===typeof e?e():e}(p)||document.body)}),[p,u]),(0,a.Z)((()=>{if(c&&!u)return(0,l.Z)(t,c),()=>{(0,l.Z)(t,null)}}),[t,c,u]),u?r.isValidElement(o)?r.cloneElement(o,{ref:m}):o:(0,s.jsx)(r.Fragment,{children:c?n.createPortal(o,c):c})}))},53637:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(87462),n=o(43066);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;return(0,n.Z)(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,o)})}},43066:(e,t,o)=>{o.d(t,{Z:()=>r});const r=function(e){return"string"===typeof e}},43107:(e,t,o)=>{function r(e,t){return"function"===typeof e?e(t):e}o.d(t,{Z:()=>r})},55229:(e,t,o)=>{o.d(t,{Z:()=>d});var r=o(87462),n=o(63366),i=o(47472),a=o(53637),l=o(83061);function s(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"===typeof e[t]))).forEach((o=>{t[o]=e[o]})),t}function p(e){const{getSlotProps:t,additionalProps:o,externalSlotProps:n,externalForwardedProps:i,className:a}=e;if(!t){const e=(0,l.Z)(null==i?void 0:i.className,null==n?void 0:n.className,a,null==o?void 0:o.className),t=(0,r.Z)({},null==o?void 0:o.style,null==i?void 0:i.style,null==n?void 0:n.style),s=(0,r.Z)({},o,i,n);return e.length>0&&(s.className=e),Object.keys(t).length>0&&(s.style=t),{props:s,internalRef:void 0}}const p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===e)return{};const o={};return Object.keys(e).filter((o=>o.match(/^on[A-Z]/)&&"function"===typeof e[o]&&!t.includes(o))).forEach((t=>{o[t]=e[t]})),o}((0,r.Z)({},i,n)),u=s(n),c=s(i),d=t(p),m=(0,l.Z)(null==d?void 0:d.className,null==o?void 0:o.className,a,null==i?void 0:i.className,null==n?void 0:n.className),f=(0,r.Z)({},null==d?void 0:d.style,null==o?void 0:o.style,null==i?void 0:i.style,null==n?void 0:n.style),g=(0,r.Z)({},d,o,c,u);return m.length>0&&(g.className=m),Object.keys(f).length>0&&(g.style=f),{props:g,internalRef:d.ref}}var u=o(43107);const c=["elementType","externalSlotProps","ownerState"];function d(e){var t;const{elementType:o,externalSlotProps:l,ownerState:s}=e,d=(0,n.Z)(e,c),m=(0,u.Z)(l,s),{props:f,internalRef:g}=p((0,r.Z)({},d,{externalSlotProps:m})),h=(0,i.Z)(g,(0,i.Z)(null==m?void 0:m.ref,null==(t=e.additionalProps)?void 0:t.ref));return(0,a.Z)(o,(0,r.Z)({},f,{ref:h}),s)}},16104:(e,t,o)=>{o.r(t),o.d(t,{default:()=>I,getTooltipUtilityClass:()=>N,tooltipClasses:()=>L});var r=o(63366),n=o(87462),i=o(47313),a=o(83061),l=o(21921),s=o(53637),p=o(17551),u=o(42379),c=o(62111),d=o(32772),m=o(28170),f=o(60596),g=o(68999),h=o(2995),v=o(46417);const y=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Z(e){return`scale(${e}, ${e**2})`}const b={entering:{opacity:1,transform:Z(1)},entered:{opacity:1,transform:"none"}},T="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),w=i.forwardRef((function(e,t){const{addEndListener:o,appear:a=!0,children:l,easing:s,in:p,onEnter:u,onEntered:d,onEntering:m,onExit:w,onExited:x,onExiting:E,style:R,timeout:P="auto",TransitionComponent:S=f.ZP}=e,C=(0,r.Z)(e,y),k=i.useRef(),N=i.useRef(),L=(0,c.Z)(),M=i.useRef(null),O=(0,h.Z)(l.ref,t),A=(0,h.Z)(M,O),F=e=>t=>{if(e){const o=M.current;void 0===t?e(o):e(o,t)}},j=F(m),$=F(((e,t)=>{(0,g.n)(e);const{duration:o,delay:r,easing:n}=(0,g.C)({style:R,timeout:P,easing:s},{mode:"enter"});let i;"auto"===P?(i=L.transitions.getAutoHeightDuration(e.clientHeight),N.current=i):i=o,e.style.transition=[L.transitions.create("opacity",{duration:i,delay:r}),L.transitions.create("transform",{duration:T?i:.666*i,delay:r,easing:n})].join(","),u&&u(e,t)})),D=F(d),I=F(E),B=F((e=>{const{duration:t,delay:o,easing:r}=(0,g.C)({style:R,timeout:P,easing:s},{mode:"exit"});let n;"auto"===P?(n=L.transitions.getAutoHeightDuration(e.clientHeight),N.current=n):n=t,e.style.transition=[L.transitions.create("opacity",{duration:n,delay:o}),L.transitions.create("transform",{duration:T?n:.666*n,delay:T?o:o||.333*n,easing:r})].join(","),e.style.opacity=0,e.style.transform=Z(.75),w&&w(e)})),W=F(x);return i.useEffect((()=>()=>{clearTimeout(k.current)}),[]),(0,v.jsx)(S,(0,n.Z)({appear:a,in:p,nodeRef:M,onEnter:$,onEntered:D,onEntering:j,onExit:B,onExited:W,onExiting:I,addEndListener:e=>{"auto"===P&&(k.current=setTimeout(e,N.current||0)),o&&o(M.current,e)},timeout:"auto"===P?null:P},C,{children:(e,t)=>i.cloneElement(l,(0,n.Z)({style:(0,n.Z)({opacity:0,transform:Z(.75),visibility:"exited"!==e||p?void 0:"hidden"},b[e],R,l.props.style),ref:A},t))}))}));w.muiSupportAuto=!0;const x=w;var E=o(80859),R=o(56127);const P=o(33362).Z;var S=o(45730);const C=function(e){let{controlled:t,default:o,name:r,state:n="value"}=e;const{current:a}=i.useRef(void 0!==t),[l,s]=i.useState(o);return[a?t:l,i.useCallback((e=>{a||s(e)}),[])]};var k=o(32298);function N(e){return(0,k.Z)("MuiTooltip",e)}const L=(0,o(77430).Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),M=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];const O=(0,u.ZP)(E.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((e=>{let{theme:t,ownerState:o,open:r}=e;return(0,n.Z)({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${L.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${L.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${L.arrow}`]:(0,n.Z)({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${L.arrow}`]:(0,n.Z)({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})})),A=(0,u.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,m.Z)(o.placement.split("-")[0])}`]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,n.Z)({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:(0,p.Fq)(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:(r=16/14,Math.round(1e5*r)/1e5)+"em",fontWeight:t.typography.fontWeightRegular},{[`.${L.popper}[data-popper-placement*="left"] &`]:(0,n.Z)({transformOrigin:"right center"},o.isRtl?(0,n.Z)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):(0,n.Z)({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${L.popper}[data-popper-placement*="right"] &`]:(0,n.Z)({transformOrigin:"left center"},o.isRtl?(0,n.Z)({marginRight:"14px"},o.touch&&{marginRight:"24px"}):(0,n.Z)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${L.popper}[data-popper-placement*="top"] &`]:(0,n.Z)({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${L.popper}[data-popper-placement*="bottom"] &`]:(0,n.Z)({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})});var r})),F=(0,u.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((e=>{let{theme:t}=e;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:(0,p.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}}));let j=!1,$=null;function D(e,t){return o=>{t&&t(o),e(o)}}const I=i.forwardRef((function(e,t){var o,p,u,f,g,y;const Z=(0,d.Z)({props:e,name:"MuiTooltip"}),{arrow:b=!1,children:T,components:w={},componentsProps:k={},describeChild:L=!1,disableFocusListener:I=!1,disableHoverListener:B=!1,disableInteractive:W=!1,disableTouchListener:z=!1,enterDelay:H=100,enterNextDelay:U=0,enterTouchDelay:V=700,followCursor:_=!1,id:q,leaveDelay:X=0,leaveTouchDelay:Y=1500,onClose:G,onOpen:J,open:K,placement:Q="bottom",PopperComponent:ee,PopperProps:te={},title:oe,TransitionComponent:re=x,TransitionProps:ne}=Z,ie=(0,r.Z)(Z,M),ae=(0,c.Z)(),le="rtl"===ae.direction,[se,pe]=i.useState(),[ue,ce]=i.useState(null),de=i.useRef(!1),me=W||_,fe=i.useRef(),ge=i.useRef(),he=i.useRef(),ve=i.useRef(),[ye,Ze]=C({controlled:K,default:!1,name:"Tooltip",state:"open"});let be=ye;const Te=P(q),we=i.useRef(),xe=i.useCallback((()=>{void 0!==we.current&&(document.body.style.WebkitUserSelect=we.current,we.current=void 0),clearTimeout(ve.current)}),[]);i.useEffect((()=>()=>{clearTimeout(fe.current),clearTimeout(ge.current),clearTimeout(he.current),xe()}),[xe]);const Ee=e=>{clearTimeout($),j=!0,Ze(!0),J&&!be&&J(e)},Re=(0,R.Z)((e=>{clearTimeout($),$=setTimeout((()=>{j=!1}),800+X),Ze(!1),G&&be&&G(e),clearTimeout(fe.current),fe.current=setTimeout((()=>{de.current=!1}),ae.transitions.duration.shortest)})),Pe=e=>{de.current&&"touchstart"!==e.type||(se&&se.removeAttribute("title"),clearTimeout(ge.current),clearTimeout(he.current),H||j&&U?ge.current=setTimeout((()=>{Ee(e)}),j?U:H):Ee(e))},Se=e=>{clearTimeout(ge.current),clearTimeout(he.current),he.current=setTimeout((()=>{Re(e)}),X)},{isFocusVisibleRef:Ce,onBlur:ke,onFocus:Ne,ref:Le}=(0,S.Z)(),[,Me]=i.useState(!1),Oe=e=>{ke(e),!1===Ce.current&&(Me(!1),Se(e))},Ae=e=>{se||pe(e.currentTarget),Ne(e),!0===Ce.current&&(Me(!0),Pe(e))},Fe=e=>{de.current=!0;const t=T.props;t.onTouchStart&&t.onTouchStart(e)},je=Pe,$e=Se,De=e=>{Fe(e),clearTimeout(he.current),clearTimeout(fe.current),xe(),we.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ve.current=setTimeout((()=>{document.body.style.WebkitUserSelect=we.current,Pe(e)}),V)},Ie=e=>{T.props.onTouchEnd&&T.props.onTouchEnd(e),xe(),clearTimeout(he.current),he.current=setTimeout((()=>{Re(e)}),Y)};i.useEffect((()=>{if(be)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Re(e)}}),[Re,be]);const Be=(0,h.Z)(pe,t),We=(0,h.Z)(Le,Be),ze=(0,h.Z)(T.ref,We);""===oe&&(be=!1);const He=i.useRef({x:0,y:0}),Ue=i.useRef(),Ve={},_e="string"===typeof oe;L?(Ve.title=be||!_e||B?null:oe,Ve["aria-describedby"]=be?Te:null):(Ve["aria-label"]=_e?oe:null,Ve["aria-labelledby"]=be&&!_e?Te:null);const qe=(0,n.Z)({},Ve,ie,T.props,{className:(0,a.Z)(ie.className,T.props.className),onTouchStart:Fe,ref:ze},_?{onMouseMove:e=>{const t=T.props;t.onMouseMove&&t.onMouseMove(e),He.current={x:e.clientX,y:e.clientY},Ue.current&&Ue.current.update()}}:{});const Xe={};z||(qe.onTouchStart=De,qe.onTouchEnd=Ie),B||(qe.onMouseOver=D(je,qe.onMouseOver),qe.onMouseLeave=D($e,qe.onMouseLeave),me||(Xe.onMouseOver=je,Xe.onMouseLeave=$e)),I||(qe.onFocus=D(Ae,qe.onFocus),qe.onBlur=D(Oe,qe.onBlur),me||(Xe.onFocus=Ae,Xe.onBlur=Oe));const Ye=i.useMemo((()=>{var e;let t=[{name:"arrow",enabled:Boolean(ue),options:{element:ue,padding:4}}];return null!=(e=te.popperOptions)&&e.modifiers&&(t=t.concat(te.popperOptions.modifiers)),(0,n.Z)({},te.popperOptions,{modifiers:t})}),[ue,te]),Ge=(0,n.Z)({},Z,{isRtl:le,arrow:b,disableInteractive:me,placement:Q,PopperComponentProp:ee,touch:de.current}),Je=(e=>{const{classes:t,disableInteractive:o,arrow:r,touch:n,placement:i}=e,a={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch",`tooltipPlacement${(0,m.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,l.Z)(a,N,t)})(Ge),Ke=null!=(o=w.Popper)?o:O,Qe=null!=(p=null!=(u=w.Transition)?u:re)?p:x,et=null!=(f=w.Tooltip)?f:A,tt=null!=(g=w.Arrow)?g:F,ot=(0,s.Z)(Ke,(0,n.Z)({},te,k.popper),Ge),rt=(0,s.Z)(Qe,(0,n.Z)({},ne,k.transition),Ge),nt=(0,s.Z)(et,(0,n.Z)({},k.tooltip),Ge),it=(0,s.Z)(tt,(0,n.Z)({},k.arrow),Ge);return(0,v.jsxs)(i.Fragment,{children:[i.cloneElement(T,qe),(0,v.jsx)(Ke,(0,n.Z)({as:null!=ee?ee:E.Z,placement:Q,anchorEl:_?{getBoundingClientRect:()=>({top:He.current.y,left:He.current.x,right:He.current.x,bottom:He.current.y,width:0,height:0})}:se,popperRef:Ue,open:!!se&&be,id:Te,transition:!0},Xe,ot,{className:(0,a.Z)(Je.popper,null==te?void 0:te.className,null==(y=k.popper)?void 0:y.className),popperOptions:Ye,children:e=>{let{TransitionProps:t}=e;var o,r;return(0,v.jsx)(Qe,(0,n.Z)({timeout:ae.transitions.duration.shorter},t,rt,{children:(0,v.jsxs)(et,(0,n.Z)({},nt,{className:(0,a.Z)(Je.tooltip,null==(o=k.tooltip)?void 0:o.className),children:[oe,b?(0,v.jsx)(tt,(0,n.Z)({},it,{className:(0,a.Z)(Je.arrow,null==(r=k.arrow)?void 0:r.className),ref:ce})):null]}))}))}}))]})}))},33362:(e,t,o)=>{var r;o.d(t,{Z:()=>l});var n=o(47313);let i=0;const a=(r||(r=o.t(n,2))).useId;function l(e){if(void 0!==a){const t=a();return null!=e?e:t}return function(e){const[t,o]=n.useState(e),r=e||t;return n.useEffect((()=>{null==t&&(i+=1,o(`mui-${i}`))}),[t]),r}(e)}}}]);