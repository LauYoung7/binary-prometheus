(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9782],{80414:(ye,Q,l)=>{"use strict";l.d(Q,{K:()=>k});var t=l(671),q=l(3363),N=l(86647),ae=l(34177);const C=({sourceUID:$,targetUID:V,...se})=>({...se,source:(0,N.F)().getInstanceSettings($),target:(0,N.F)().getInstanceSettings(V)}),_=$=>$.map(C);function u($){return $.data}const k=()=>{const{backend:$}=(0,ae.p)(),[V,se]=(0,t.Z)(()=>(0,q.n)($.fetch({url:"/api/datasources/correlations",method:"GET",showErrorAlert:!1})).then(u).then(_),[$]),[K,T]=(0,t.Z)(({sourceUID:j,...ve})=>$.post(`/api/datasources/uid/${j}/correlations`,ve).then(C),[$]),[G,ie]=(0,t.Z)(({sourceUID:j,uid:ve})=>$.delete(`/api/datasources/uid/${j}/correlations/${ve}`),[$]),[U,le]=(0,t.Z)(({sourceUID:j,uid:ve,..._e})=>$.patch(`/api/datasources/uid/${j}/correlations/${ve}`,_e).then(C),[$]);return{create:{execute:T,...K},update:{execute:le,...U},get:{execute:se,...V},remove:{execute:ie,...G}}}},45075:(ye,Q,l)=>{"use strict";l.r(Q),l.d(Q,{default:()=>qa});var t=l(68404),q=l(58252),N=l(35645),ae=l(87513),C=l(81168),_=l(25e3),u=l(52423),k=l(82897),$=l(98101),V=l(49922),se=l(37932),K=l(60325),T=l(53546),G=l(80177),ie=l(34177),U=l(60499),le=l(76770),j=l(3032),ve=l(36578),_e=l(80414),et=l(55560),Y=l(48197),A=l(73257),Me=l(75090);const gs=({exploreIdLeft:e,exploreIdRight:n})=>{const[s,o]=(0,t.useState)([]),{query:a}=(0,et.useKBar)(),r=(0,C.useDispatch)(),i=(0,C.useSelector)(Me.p);return(0,t.useEffect)(()=>{const c={name:"Explore",priority:et.Priority.HIGH+1},d=[];i?(d.push({id:"explore/run-query-left",name:"Run query (left)",keywords:"query left",perform:()=>{r((0,A.aA)(e))},section:c}),n&&(d.push({id:"explore/run-query-right",name:"Run query (right)",keywords:"query right",perform:()=>{r((0,A.aA)(n))},section:c}),d.push({id:"explore/split-view-close-left",name:"Close split view left",keywords:"split",perform:()=>{r((0,Y.YV)(e))},section:c}),d.push({id:"explore/split-view-close-right",name:"Close split view right",keywords:"split",perform:()=>{r((0,Y.YV)(n))},section:c}))):(d.push({id:"explore/run-query",name:"Run query",keywords:"query",perform:()=>{r((0,A.aA)(e))},section:c}),d.push({id:"explore/split-view-open",name:"Open split view",keywords:"split",perform:()=>{r((0,Y.bW)())},section:c})),o(d)},[e,n,i,a,r]),(0,et.useRegisterActions)(a?s:[],[s,a]),null};var Ee=l(58635),de=l(36635),ms=l(85081),Oe=l(68183),P=l(41818),z=l(72648),Ie=l(47694),ee=l(58379),ge=l(55935),Ae=l(63496),Be=l(91162),Re=l(25405),fs=l(89050),D=l(90595),Fe=l(86647),We=l(45253),Et=l(68226),xt=l(72080),St=l(13580),tt=l(97063),ys=l(41141);const bt=e=>{const n={transition:`opacity ${e.duration}ms linear`,opacity:0},s={exited:{opacity:0,display:"none"},entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0}};return t.createElement(ys.ZP,{in:e.in,timeout:e.duration,unmountOnExit:e.unmountOnExit||!1,onExited:e.onExited},o=>t.createElement("div",{style:{...n,...s[o]}},e.children))};var De=l(40967),vs=l(68545),st=l(45984),Ne=l(40400),wt=l(18607),Es=l(97394),xs=function(){var e=function(n,s){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,a){o.__proto__=a}||function(o,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(o[r]=a[r])},e(n,s)};return function(n,s){e(n,s);function o(){this.constructor=n}n.prototype=s===null?Object.create(s):(o.prototype=s.prototype,new o)}}(),Z=function(){return Z=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Z.apply(this,arguments)},Ct={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},Rt={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},ke={width:"20px",height:"20px",position:"absolute"},Ss={top:Z(Z({},Ct),{top:"-5px"}),right:Z(Z({},Rt),{left:void 0,right:"-5px"}),bottom:Z(Z({},Ct),{top:void 0,bottom:"-5px"}),left:Z(Z({},Rt),{left:"-5px"}),topRight:Z(Z({},ke),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:Z(Z({},ke),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:Z(Z({},ke),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:Z(Z({},ke),{left:"-10px",top:"-10px",cursor:"nw-resize"})},bs=function(e){xs(n,e);function n(){var s=e!==null&&e.apply(this,arguments)||this;return s.onMouseDown=function(o){s.props.onResizeStart(o,s.props.direction)},s.onTouchStart=function(o){s.props.onResizeStart(o,s.props.direction)},s}return n.prototype.render=function(){return t.createElement("div",{className:this.props.className||"",style:Z(Z({position:"absolute",userSelect:"none"},Ss[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},n}(t.PureComponent),ws=function(){var e=function(n,s){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,a){o.__proto__=a}||function(o,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(o[r]=a[r])},e(n,s)};return function(n,s){e(n,s);function o(){this.constructor=n}n.prototype=s===null?Object.create(s):(o.prototype=s.prototype,new o)}}(),ue=function(){return ue=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ue.apply(this,arguments)},Cs={width:"auto",height:"auto"},Ue=function(e,n,s){return Math.max(Math.min(e,s),n)},Tt=function(e,n){return Math.round(e/n)*n},Te=function(e,n){return new RegExp(e,"i").test(n)},Qe=function(e){return Boolean(e.touches&&e.touches.length)},Rs=function(e){return Boolean((e.clientX||e.clientX===0)&&(e.clientY||e.clientY===0))},Lt=function(e,n,s){s===void 0&&(s=0);var o=n.reduce(function(r,i,c){return Math.abs(i-e)<Math.abs(n[r]-e)?c:r},0),a=Math.abs(n[o]-e);return s===0||a<s?n[o]:e},ot=function(e){return e=e.toString(),e==="auto"||e.endsWith("px")||e.endsWith("%")||e.endsWith("vh")||e.endsWith("vw")||e.endsWith("vmax")||e.endsWith("vmin")?e:e+"px"},Ve=function(e,n,s,o){if(e&&typeof e=="string"){if(e.endsWith("px"))return Number(e.replace("px",""));if(e.endsWith("%")){var a=Number(e.replace("%",""))/100;return n*a}if(e.endsWith("vw")){var a=Number(e.replace("vw",""))/100;return s*a}if(e.endsWith("vh")){var a=Number(e.replace("vh",""))/100;return o*a}}return e},Ts=function(e,n,s,o,a,r,i){return o=Ve(o,e.width,n,s),a=Ve(a,e.height,n,s),r=Ve(r,e.width,n,s),i=Ve(i,e.height,n,s),{maxWidth:typeof o>"u"?void 0:Number(o),maxHeight:typeof a>"u"?void 0:Number(a),minWidth:typeof r>"u"?void 0:Number(r),minHeight:typeof i>"u"?void 0:Number(i)}},Ls=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],zt="__resizable_base__",zs=function(e){ws(n,e);function n(s){var o=e.call(this,s)||this;return o.ratio=1,o.resizable=null,o.parentLeft=0,o.parentTop=0,o.resizableLeft=0,o.resizableRight=0,o.resizableTop=0,o.resizableBottom=0,o.targetLeft=0,o.targetTop=0,o.appendBase=function(){if(!o.resizable||!o.window)return null;var a=o.parentNode;if(!a)return null;var r=o.window.document.createElement("div");return r.style.width="100%",r.style.height="100%",r.style.position="absolute",r.style.transform="scale(0, 0)",r.style.left="0",r.style.flex="0 0 100%",r.classList?r.classList.add(zt):r.className+=zt,a.appendChild(r),r},o.removeBase=function(a){var r=o.parentNode;r&&r.removeChild(a)},o.ref=function(a){a&&(o.resizable=a)},o.state={isResizing:!1,width:typeof(o.propsSize&&o.propsSize.width)>"u"?"auto":o.propsSize&&o.propsSize.width,height:typeof(o.propsSize&&o.propsSize.height)>"u"?"auto":o.propsSize&&o.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},o.onResizeStart=o.onResizeStart.bind(o),o.onMouseMove=o.onMouseMove.bind(o),o.onMouseUp=o.onMouseUp.bind(o),o}return Object.defineProperty(n.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"window",{get:function(){return!this.resizable||!this.resizable.ownerDocument?null:this.resizable.ownerDocument.defaultView},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||Cs},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"size",{get:function(){var s=0,o=0;if(this.resizable&&this.window){var a=this.resizable.offsetWidth,r=this.resizable.offsetHeight,i=this.resizable.style.position;i!=="relative"&&(this.resizable.style.position="relative"),s=this.resizable.style.width!=="auto"?this.resizable.offsetWidth:a,o=this.resizable.style.height!=="auto"?this.resizable.offsetHeight:r,this.resizable.style.position=i}return{width:s,height:o}},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"sizeStyle",{get:function(){var s=this,o=this.props.size,a=function(c){if(typeof s.state[c]>"u"||s.state[c]==="auto")return"auto";if(s.propsSize&&s.propsSize[c]&&s.propsSize[c].toString().endsWith("%")){if(s.state[c].toString().endsWith("%"))return s.state[c].toString();var d=s.getParentSize(),h=Number(s.state[c].toString().replace("px","")),p=h/d[c]*100;return p+"%"}return ot(s.state[c])},r=o&&typeof o.width<"u"&&!this.state.isResizing?ot(o.width):a("width"),i=o&&typeof o.height<"u"&&!this.state.isResizing?ot(o.height):a("height");return{width:r,height:i}},enumerable:!1,configurable:!0}),n.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var s=this.appendBase();if(!s)return{width:0,height:0};var o=!1,a=this.parentNode.style.flexWrap;a!=="wrap"&&(o=!0,this.parentNode.style.flexWrap="wrap"),s.style.position="relative",s.style.minWidth="100%",s.style.minHeight="100%";var r={width:s.offsetWidth,height:s.offsetHeight};return o&&(this.parentNode.style.flexWrap=a),this.removeBase(s),r},n.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},n.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},n.prototype.componentDidMount=function(){if(!(!this.resizable||!this.window)){var s=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:s.flexBasis!=="auto"?s.flexBasis:void 0})}},n.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},n.prototype.createSizeForCssProperty=function(s,o){var a=this.propsSize&&this.propsSize[o];return this.state[o]==="auto"&&this.state.original[o]===s&&(typeof a>"u"||a==="auto")?"auto":s},n.prototype.calculateNewMaxFromBoundary=function(s,o){var a=this.props.boundsByDirection,r=this.state.direction,i=a&&Te("left",r),c=a&&Te("top",r),d,h;if(this.props.bounds==="parent"){var p=this.parentNode;p&&(d=i?this.resizableRight-this.parentLeft:p.offsetWidth+(this.parentLeft-this.resizableLeft),h=c?this.resizableBottom-this.parentTop:p.offsetHeight+(this.parentTop-this.resizableTop))}else this.props.bounds==="window"?this.window&&(d=i?this.resizableRight:this.window.innerWidth-this.resizableLeft,h=c?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(d=i?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),h=c?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return d&&Number.isFinite(d)&&(s=s&&s<d?s:d),h&&Number.isFinite(h)&&(o=o&&o<h?o:h),{maxWidth:s,maxHeight:o}},n.prototype.calculateNewSizeFromDirection=function(s,o){var a=this.props.scale||1,r=this.props.resizeRatio||1,i=this.state,c=i.direction,d=i.original,h=this.props,p=h.lockAspectRatio,m=h.lockAspectRatioExtraHeight,g=h.lockAspectRatioExtraWidth,y=d.width,f=d.height,v=m||0,E=g||0;return Te("right",c)&&(y=d.width+(s-d.x)*r/a,p&&(f=(y-E)/this.ratio+v)),Te("left",c)&&(y=d.width-(s-d.x)*r/a,p&&(f=(y-E)/this.ratio+v)),Te("bottom",c)&&(f=d.height+(o-d.y)*r/a,p&&(y=(f-v)*this.ratio+E)),Te("top",c)&&(f=d.height-(o-d.y)*r/a,p&&(y=(f-v)*this.ratio+E)),{newWidth:y,newHeight:f}},n.prototype.calculateNewSizeFromAspectRatio=function(s,o,a,r){var i=this.props,c=i.lockAspectRatio,d=i.lockAspectRatioExtraHeight,h=i.lockAspectRatioExtraWidth,p=typeof r.width>"u"?10:r.width,m=typeof a.width>"u"||a.width<0?s:a.width,g=typeof r.height>"u"?10:r.height,y=typeof a.height>"u"||a.height<0?o:a.height,f=d||0,v=h||0;if(c){var E=(g-f)*this.ratio+v,x=(y-f)*this.ratio+v,b=(p-v)/this.ratio+f,S=(m-v)/this.ratio+f,w=Math.max(p,E),R=Math.min(m,x),M=Math.max(g,b),W=Math.min(y,S);s=Ue(s,w,R),o=Ue(o,M,W)}else s=Ue(s,p,m),o=Ue(o,g,y);return{newWidth:s,newHeight:o}},n.prototype.setBoundingClientRect=function(){if(this.props.bounds==="parent"){var s=this.parentNode;if(s){var o=s.getBoundingClientRect();this.parentLeft=o.left,this.parentTop=o.top}}if(this.props.bounds&&typeof this.props.bounds!="string"){var a=this.props.bounds.getBoundingClientRect();this.targetLeft=a.left,this.targetTop=a.top}if(this.resizable){var r=this.resizable.getBoundingClientRect(),i=r.left,c=r.top,d=r.right,h=r.bottom;this.resizableLeft=i,this.resizableRight=d,this.resizableTop=c,this.resizableBottom=h}},n.prototype.onResizeStart=function(s,o){if(!(!this.resizable||!this.window)){var a=0,r=0;if(s.nativeEvent&&Rs(s.nativeEvent)?(a=s.nativeEvent.clientX,r=s.nativeEvent.clientY):s.nativeEvent&&Qe(s.nativeEvent)&&(a=s.nativeEvent.touches[0].clientX,r=s.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable){var i=this.props.onResizeStart(s,o,this.resizable);if(i===!1)return}this.props.size&&(typeof this.props.size.height<"u"&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),typeof this.props.size.width<"u"&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio=typeof this.props.lockAspectRatio=="number"?this.props.lockAspectRatio:this.size.width/this.size.height;var c,d=this.window.getComputedStyle(this.resizable);if(d.flexBasis!=="auto"){var h=this.parentNode;if(h){var p=this.window.getComputedStyle(h).flexDirection;this.flexDir=p.startsWith("row")?"row":"column",c=d.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var m={original:{x:a,y:r,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:ue(ue({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(s.target).cursor||"auto"}),direction:o,flexBasis:c};this.setState(m)}},n.prototype.onMouseMove=function(s){var o=this;if(!(!this.state.isResizing||!this.resizable||!this.window)){if(this.window.TouchEvent&&Qe(s))try{s.preventDefault(),s.stopPropagation()}catch{}var a=this.props,r=a.maxWidth,i=a.maxHeight,c=a.minWidth,d=a.minHeight,h=Qe(s)?s.touches[0].clientX:s.clientX,p=Qe(s)?s.touches[0].clientY:s.clientY,m=this.state,g=m.direction,y=m.original,f=m.width,v=m.height,E=this.getParentSize(),x=Ts(E,this.window.innerWidth,this.window.innerHeight,r,i,c,d);r=x.maxWidth,i=x.maxHeight,c=x.minWidth,d=x.minHeight;var b=this.calculateNewSizeFromDirection(h,p),S=b.newHeight,w=b.newWidth,R=this.calculateNewMaxFromBoundary(r,i);this.props.snap&&this.props.snap.x&&(w=Lt(w,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(S=Lt(S,this.props.snap.y,this.props.snapGap));var M=this.calculateNewSizeFromAspectRatio(w,S,{width:R.maxWidth,height:R.maxHeight},{width:c,height:d});if(w=M.newWidth,S=M.newHeight,this.props.grid){var W=Tt(w,this.props.grid[0]),X=Tt(S,this.props.grid[1]),L=this.props.snapGap||0;w=L===0||Math.abs(W-w)<=L?W:w,S=L===0||Math.abs(X-S)<=L?X:S}var I={width:w-y.width,height:S-y.height};if(f&&typeof f=="string"){if(f.endsWith("%")){var H=w/E.width*100;w=H+"%"}else if(f.endsWith("vw")){var te=w/this.window.innerWidth*100;w=te+"vw"}else if(f.endsWith("vh")){var F=w/this.window.innerHeight*100;w=F+"vh"}}if(v&&typeof v=="string"){if(v.endsWith("%")){var H=S/E.height*100;S=H+"%"}else if(v.endsWith("vw")){var te=S/this.window.innerWidth*100;S=te+"vw"}else if(v.endsWith("vh")){var F=S/this.window.innerHeight*100;S=F+"vh"}}var O={width:this.createSizeForCssProperty(w,"width"),height:this.createSizeForCssProperty(S,"height")};this.flexDir==="row"?O.flexBasis=O.width:this.flexDir==="column"&&(O.flexBasis=O.height),(0,Es.flushSync)(function(){o.setState(O)}),this.props.onResize&&this.props.onResize(s,g,this.resizable,I)}},n.prototype.onMouseUp=function(s){var o=this.state,a=o.isResizing,r=o.direction,i=o.original;if(!(!a||!this.resizable)){var c={width:this.size.width-i.width,height:this.size.height-i.height};this.props.onResizeStop&&this.props.onResizeStop(s,r,this.resizable,c),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:ue(ue({},this.state.backgroundStyle),{cursor:"auto"})})}},n.prototype.updateSize=function(s){this.setState({width:s.width,height:s.height})},n.prototype.renderResizer=function(){var s=this,o=this.props,a=o.enable,r=o.handleStyles,i=o.handleClasses,c=o.handleWrapperStyle,d=o.handleWrapperClass,h=o.handleComponent;if(!a)return null;var p=Object.keys(a).map(function(m){return a[m]!==!1?t.createElement(bs,{key:m,direction:m,onResizeStart:s.onResizeStart,replaceStyles:r&&r[m],className:i&&i[m]},h&&h[m]?h[m]:null):null});return t.createElement("div",{className:d,style:c},p)},n.prototype.render=function(){var s=this,o=Object.keys(this.props).reduce(function(i,c){return Ls.indexOf(c)!==-1||(i[c]=s.props[c]),i},{}),a=ue(ue(ue({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(a.flexBasis=this.state.flexBasis);var r=this.props.as||"div";return t.createElement(r,ue({ref:this.ref,style:a,className:this.props.className},o),this.state.isResizing&&t.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},n.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},n}(t.PureComponent),Is=l(7804);const Fs=e=>u.keyframes`
  0% {
    transform: translateY(${e.components.horizontalDrawer.defaultHeight}px);
  }

  100% {
    transform: translateY(0px);
  }
`,Ds=(0,Is.B)(e=>({container:u.css`
      position: fixed !important;
      bottom: 0;
      background: ${e.colors.background.primary};
      border-top: 1px solid ${e.colors.border.weak};
      margin: ${e.spacing(0,-2,0,-2)};
      box-shadow: ${e.shadows.z3};
      z-index: ${e.zIndex.navbarFixed};
    `,drawerActive:u.css`
      opacity: 1;
      animation: 0.5s ease-out ${Fs(e)};
    `,rzHandle:u.css`
      background: ${e.colors.secondary.main};
      transition: 0.3s background ease-in-out;
      position: relative;
      width: 200px !important;
      height: 7px !important;
      left: calc(50% - 100px) !important;
      top: -4px !important;
      cursor: grab;
      border-radius: 4px;
      &:hover {
        background: ${e.colors.secondary.shade};
      }
    `}));function It(e){const{width:n,children:s,onResize:o}=e,a=(0,z.l4)(),r=Ds(a),i=`${n+31.5}px`;return t.createElement(zs,{className:(0,u.cx)(r.container,r.drawerActive),defaultSize:{width:i,height:`${a.components.horizontalDrawer.defaultHeight}px`},handleClasses:{top:r.rzHandle},enable:{top:!0,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},maxHeight:"100vh",maxWidth:i,minWidth:i,onResize:o},s)}var Ns=l(21957),Ps=l(46835),Hs=l(18893),$s=l(82090),Ms=l(72062);function Os(e){const{loading:n,width:s,onClose:o,queryResponse:a,timeZone:r}=e,i=a?.series||[],c=a?.error;(0,t.useEffect)(()=>{(0,P.ff)("grafana_explore_query_inspector_opened")},[]);const d={label:"Stats",value:"stats",icon:"chart-line",content:t.createElement($s.f,{data:a,timeZone:a?.request?.timezone})},h={label:"JSON",value:"json",icon:"brackets-curly",content:t.createElement(Hs.W,{data:a,onClose:o})},p={label:"Data",value:"data",icon:"database",content:t.createElement(Ns.E,{data:i,isLoading:n,options:{withTransforms:!1,withFieldConfig:!1},timeZone:r,app:Ne.zj.Explore})},m={label:"Query",value:"query",icon:"info-circle",content:t.createElement(Ms.D,{data:i,onRefreshQuery:()=>e.runQueries(e.exploreId)})},g=[d,m,h,p];if(c){const y={label:"Error",value:"error",icon:"exclamation-triangle",content:t.createElement(Ps.l,{error:c})};g.push(y)}return t.createElement(It,{width:s},t.createElement(wt.W,{tabs:g,onClose:o,closeIconTooltip:"Close query inspector"}))}function As(e,{exploreId:n}){const o=e.explore[n],{loading:a,queryResponse:r}=o;return{loading:a,queryResponse:r}}const Bs={runQueries:A.aA},Ws=(0,de.connect)(As,Bs)(Os);var ks=l(53117),Ze=l(5562),xe=l(64319),Ft=l(26202),Us=l(41490),Qs=l(35224),Vs=l(95379),Le=l(77582),Dt=l(57465),Zs=l(64503),Gs=l(19349),Nt=l(54294),me=l(46519),Pt=l(21053),js=l(32873),Ht=l(5242),Ge=l(61860);function Ks(e){const{onClick:n,isSynced:s}=e,o=()=>{const{isSynced:a}=e,r=a?"Unsync all views":"Sync all views to this time range";return t.createElement(t.Fragment,null,r)};return t.createElement(Ge.u,{content:o,placement:"bottom"},t.createElement(xe.h,{icon:"link",variant:s?"active":"canvas","aria-label":s?"Synced times":"Unsynced times",onClick:n}))}class Ys extends t.Component{constructor(){super(...arguments),this.onMoveTimePicker=n=>{const{range:s,onChangeTime:o,timeZone:a}=this.props,{from:r,to:i}=(0,Ht.e)(n,s),c={from:(0,me.GY)(a,r),to:(0,me.GY)(a,i)};o(c)},this.onMoveForward=()=>this.onMoveTimePicker(1),this.onMoveBack=()=>this.onMoveTimePicker(-1),this.onChangeTimePicker=n=>{const s=Pt.isMathString(n.raw.from)?n.raw.from:n.from,o=Pt.isMathString(n.raw.to)?n.raw.to:n.to;this.props.onChangeTime({from:s,to:o}),(0,P.ff)("grafana_explore_time_picker_time_range_changed",{timeRangeFrom:s,timeRangeTo:o})},this.onZoom=()=>{const{range:n,onChangeTime:s,timeZone:o}=this.props,{from:a,to:r}=(0,Ht.h)(n,2),i={from:(0,me.GY)(o,a),to:(0,me.GY)(o,r)};s(i)}}render(){const{range:n,timeZone:s,fiscalYearStartMonth:o,splitted:a,syncedTimes:r,onChangeTimeSync:i,hideText:c,onChangeTimeZone:d,onChangeFiscalYearStartMonth:h}=this.props,p=a?t.createElement(Ks,{onClick:i,isSynced:r}):void 0,m={value:n,timeZone:s,fiscalYearStartMonth:o,onMoveBackward:this.onMoveBack,onMoveForward:this.onMoveForward,onZoom:this.onZoom,hideText:c};return t.createElement(js.a,{isOnCanvas:!0,...m,timeSyncButton:p,isSynced:r,widthOverride:a?window.innerWidth/2:void 0,onChange:this.onChangeTimePicker,onChangeTimeZone:d,onChangeFiscalYearStartMonth:h})}}var $t=l(22163);function Xs(e){const{start:n,pause:s,resume:o,isLive:a,isPaused:r,stop:i,splitted:c}=e,d=a&&!r?"active":"canvas",h=a?r?o:s:n;return t.createElement(Ft.h,null,t.createElement(Ge.u,{content:a&&!r?t.createElement(t.Fragment,null,"Pause the live stream"):t.createElement(t.Fragment,null,"Start live stream your logs"),placement:"bottom"},t.createElement(xe.h,{iconOnly:c,variant:d,icon:!a||r?"play":"pause",onClick:h},a&&r?"Paused":"Live")),t.createElement($t.Z,{mountOnEnter:!0,unmountOnExit:!0,timeout:100,in:a,classNames:{enter:je.stopButtonEnter,enterActive:je.stopButtonEnterActive,exit:je.stopButtonExit,exitActive:je.stopButtonExitActive}},t.createElement(Ge.u,{content:t.createElement(t.Fragment,null,"Stop and exit the live stream"),placement:"bottom"},t.createElement(xe.h,{variant:d,onClick:i,icon:"square-shape"}))))}const je={stopButtonEnter:u.css`
    label: stopButtonEnter;
    width: 0;
    opacity: 0;
    overflow: hidden;
  `,stopButtonEnterActive:u.css`
    label: stopButtonEnterActive;
    opacity: 1;
    width: 32px;
  `,stopButtonExit:u.css`
    label: stopButtonExit;
    width: 32px;
    opacity: 1;
    overflow: hidden;
  `,stopButtonExitActive:u.css`
    label: stopButtonExitActive;
    opacity: 0;
    width: 0;
  `};var Mt=l(46526),Se=l(86297);function Js(e){const n=(0,C.useDispatch)(),s=(0,t.useCallback)(()=>{n((0,A.sQ)({exploreId:e,isPaused:!0}))},[e,n]),o=(0,t.useCallback)(()=>{n((0,A.sQ)({exploreId:e,isPaused:!1}))},[e,n]),a=(0,t.useCallback)(()=>{s(),n((0,Se.oz)(e,Ze.dP.offOption.value)),n((0,A.aA)(e))},[e,n,s]),r=(0,t.useCallback)(()=>{n((0,Se.oz)(e,Ze.dP.liveOption.value))},[e,n]);return{pause:s,resume:o,stop:a,start:r}}function Ot(e){const n=Js(e.exploreId);return e.children(n)}const qs=(0,t.lazy)(()=>l.e(2319).then(l.bind(l,2319)).then(({AddToDashboard:e})=>({default:e}))),_s=(e,n)=>({rotateIcon:(0,u.css)({"> div > svg":{transform:e==="left"&&n||e==="right"&&!n?"rotate(180deg)":"none"}})});class eo extends t.PureComponent{constructor(){super(...arguments),this.onChangeDatasource=async n=>{const{changeDatasource:s,exploreId:o}=this.props;s(o,n.uid,{importQueries:!0})},this.onRunQuery=(n=!1)=>{const{runQueries:s,cancelQueries:o,exploreId:a}=this.props;return n?o(a):s(a)},this.onChangeRefreshInterval=n=>{const{changeRefreshInterval:s,exploreId:o}=this.props;s(o,n)},this.onChangeTimeSync=()=>{const{syncTimes:n,exploreId:s}=this.props;n(s)},this.onCopyShortLink=async()=>{await(0,Dt.L)(window.location.href),(0,P.ff)("grafana_explore_shortened_link_clicked")},this.onOpenSplitView=()=>{const{split:n}=this.props;n(),(0,P.ff)("grafana_explore_split_view_opened",{origin:"menu"})},this.onCloseSplitView=()=>{const{closeSplit:n,exploreId:s}=this.props;n(s),(0,P.ff)("grafana_explore_split_view_closed")},this.renderRefreshPicker=n=>{const{loading:s,refreshInterval:o,isLive:a}=this.props;let r=s?"Cancel":"Run query",i,c="108px";return n&&(i=r,r=void 0,c="35px"),t.createElement(Ze.dP,{key:"refreshPicker",onIntervalChanged:this.onChangeRefreshInterval,value:o,isLoading:s,text:r,tooltip:i,intervals:(0,Gs.$t)().getValidIntervals(Ze.o5),isLive:a,onRefresh:()=>this.onRunQuery(s),noIntervalPicker:a,primary:!0,width:c})},this.renderActions=()=>{const{splitted:n,isLive:s,exploreId:o,range:a,timeZone:r,fiscalYearStartMonth:i,onChangeTime:c,syncedTimes:d,onChangeTimeZone:h,onChangeFiscalYearStartMonth:p,isPaused:m,hasLiveOption:g,containerWidth:y,largerExploreId:f}=this.props,v=n||y<1210,E=f===o,x=_s(o,E),b=Le.Vt.hasAccess(C.AccessControlAction.DashboardsCreate,Le.Vt.isEditor)||Le.Vt.hasAccess(C.AccessControlAction.DashboardsWrite,Le.Vt.isEditor),S=()=>{E?this.props.evenPaneResizeAction():this.props.maximizePaneAction({exploreId:o})};return[n?t.createElement(Ft.h,{key:"split-controls"},t.createElement(xe.h,{variant:"canvas",tooltip:`${E?"Narrow":"Widen"} pane`,onClick:S,icon:E?"gf-movepane-left":"gf-movepane-right",iconOnly:!0,className:x.rotateIcon}),t.createElement(xe.h,{tooltip:"Close split pane",onClick:this.onCloseSplitView,icon:"times",variant:"canvas"},"Close")):t.createElement(xe.h,{variant:"canvas",key:"split",tooltip:"Split the pane",onClick:this.onOpenSplitView,icon:"columns",disabled:s},"Split"),b&&t.createElement(t.Suspense,{key:"addToDashboard",fallback:null},t.createElement(qs,{exploreId:o})),!s&&t.createElement(Ys,{key:"timeControls",exploreId:o,range:a,timeZone:r,fiscalYearStartMonth:i,onChangeTime:c,splitted:n,syncedTimes:d,onChangeTimeSync:this.onChangeTimeSync,hideText:v,onChangeTimeZone:h,onChangeFiscalYearStartMonth:p}),this.renderRefreshPicker(v),g&&t.createElement(Ot,{key:"liveControls",exploreId:o},w=>{const R={...w,start:()=>{(0,P.ff)("grafana_explore_logs_live_tailing_clicked",{datasourceType:this.props.datasourceType}),w.start()}};return t.createElement(Xs,{splitted:n,isLive:s,isPaused:m,start:R.start,pause:R.pause,resume:R.resume,stop:R.stop})})].filter(Boolean)}}render(){const{datasourceMissing:n,exploreId:s,splitted:o,containerWidth:a,topOfViewRef:r,refreshInterval:i,loading:c}=this.props,d=(o?a<700:a<800)||!1,h=N.v.featureToggles.topnav,p=t.createElement(Zs.u,{key:"share",tooltip:"Copy shortened link",icon:"share-alt",onClick:this.onCopyShortLink,"aria-label":"Copy shortened link"}),m=()=>!n&&t.createElement(ks.q,{key:`${s}-ds-picker`,mixed:N.v.featureToggles.exploreMixedDatasource===!0,onChange:this.onChangeDatasource,current:this.props.datasourceRef,hideTextValue:d,width:d?8:void 0}),g=[!h&&s===j.Kd.left&&p,m()].filter(Boolean);return t.createElement("div",{ref:r},i&&t.createElement(Us.F,{func:this.onRunQuery,interval:i,loading:c}),h&&t.createElement("div",{ref:r},t.createElement(Vs.A,{actions:[p,t.createElement("div",{style:{flex:1},key:"spacer"})]})),t.createElement(Qs.X,{"aria-label":"Explore toolbar",title:s===j.Kd.left&&!h?"Explore":void 0,pageIcon:s===j.Kd.left&&!h?"compass":void 0,leftItems:g},this.renderActions()))}}const to=(e,{exploreId:n})=>{const{syncedTimes:s,largerExploreId:o}=e.explore,a=e.explore[n],{datasourceInstance:r,datasourceMissing:i,range:c,refreshInterval:d,loading:h,isLive:p,isPaused:m,containerWidth:g}=a,y=!!r?.meta?.streaming;return{datasourceMissing:i,datasourceRef:r?.getRef(),datasourceType:r?.type,loading:h,range:c,timeZone:(0,Re.Z)(e.user),fiscalYearStartMonth:(0,Re.i)(e.user),splitted:(0,Me.p)(e),refreshInterval:d,hasLiveOption:y,isLive:p,isPaused:m,syncedTimes:s,containerWidth:g,largerExploreId:o}},so={changeDatasource:Mt.zU,changeRefreshInterval:Se.oz,cancelQueries:A.ci,runQueries:A.aA,closeSplit:Y.YV,split:Y.bW,syncTimes:Se.mG,onChangeTimeZone:Nt.YT,onChangeFiscalYearStartMonth:Nt.rf,maximizePaneAction:Y.nL,evenPaneResizeAction:Y.AP},oo=(0,de.connect)(to,so)(eo);var no=l(35450);const ao=e=>{const n=(0,z.wW)(s=>ro(s));return t.createElement("div",{className:n.container},t.createElement(no.Z,{data:e.dataFrames[0],app:Ne.zj.Explore}))},ro=e=>({container:u.css`
    background: ${e.colors.background.primary};
    display: flow-root;
    padding: 0 ${e.spacing(1)} ${e.spacing(1)} ${e.spacing(1)};
    border: 1px solid ${e.components.panel.borderColor};
    border-radius: ${e.shape.borderRadius(1)};
  `});var pe=l(2352),At=l(16983),io=l(39778),lo=l(66926),Ke=l(36998),co=l(89890),uo=l(29431),po=l(98825),oe=l(40538),be=l(39904),B=l(31403),Bt=l(56703),ho=l(91551),go=l(64421);function mo(e,n){return(0,go.ZP)(e,s=>{s.defaults.custom===void 0&&(s.defaults.custom={});const{custom:o}=s.defaults;switch(o.stacking===void 0&&(o.stacking={group:"A"}),n){case"lines":o.drawStyle=oe.l8.Line,o.stacking.mode=oe.o0.None,o.fillOpacity=0;break;case"bars":o.drawStyle=oe.l8.Bars,o.stacking.mode=oe.o0.None,o.fillOpacity=100;break;case"points":o.drawStyle=oe.l8.Points,o.stacking.mode=oe.o0.None,o.fillOpacity=0;break;case"stacked_lines":o.drawStyle=oe.l8.Line,o.stacking.mode=oe.o0.Normal,o.fillOpacity=100;break;case"stacked_bars":o.drawStyle=oe.l8.Bars,o.stacking.mode=oe.o0.Normal,o.fillOpacity=100;break;default:{const a=n;throw new Error(`Invalid graph-style: ${a}`)}}})}var fo=function(e){return(e+1)%1e6};function yo(){var e=(0,t.useReducer)(fo,0),n=e[1];return n}function we(e,n){return typeof e=="function"?e.length?e(n):e():e}function vo(e){var n=(0,t.useRef)(we(e)),s=yo();return(0,t.useMemo)(function(){return[function(){return n.current},function(o){n.current=we(o,n.current),s()}]},[])}function Eo(e,n,s){e===void 0&&(e=0),n===void 0&&(n=null),s===void 0&&(s=null);var o=we(e);typeof o!="number"&&console.error("initialValue has to be a number, got "+typeof e),typeof s=="number"?o=Math.max(o,s):s!==null&&console.error("min has to be a number, got "+typeof s),typeof n=="number"?o=Math.min(o,n):n!==null&&console.error("max has to be a number, got "+typeof n);var a=vo(o),r=a[0],i=a[1];return[r(),(0,t.useMemo)(function(){var c=function(d){var h=r(),p=we(d,h);h!==p&&(typeof s=="number"&&(p=Math.max(p,s)),typeof n=="number"&&(p=Math.min(p,n)),h!==p&&i(p))};return{get:r,set:c,inc:function(d){d===void 0&&(d=1);var h=we(d,r());typeof h!="number"&&console.error("delta has to be a number or function returning a number, got "+typeof h),c(function(p){return p+h})},dec:function(d){d===void 0&&(d=1);var h=we(d,r());typeof h!="number"&&console.error("delta has to be a number or function returning a number, got "+typeof h),c(function(p){return p-h})},reset:function(d){d===void 0&&(d=o);var h=we(d,r());typeof h!="number"&&console.error("value has to be a number or function returning a number, got "+typeof h),o=h,c(h)}}},[o,s,n])]}var xo=l(54291),Wt=l(38067);function So(e){const[n,{inc:s}]=Eo(0),o=(0,xo.Z)(e);return(0,t.useMemo)(()=>{o&&!(0,Wt.nl)(e,o,Wt.Ch)&&s()},[e,o,s]),n}const nt=20;function kt({data:e,height:n,width:s,timeZone:o,absoluteRange:a,onChangeTime:r,loadingState:i,annotations:c,onHiddenSeriesChanged:d,splitOpenFn:h,graphStyle:p,tooltipDisplayMode:m=oe.f3.Single,anchorToZero:g=!1,eventBus:y}){const f=(0,z.l4)(),v=(0,z.wW)(bo),[E,x]=(0,t.useState)(!1),b={from:(0,me.CQ)(a.from),to:(0,me.CQ)(a.to),raw:{from:(0,me.CQ)(a.from),to:(0,me.CQ)(a.to)}},S=(0,t.useMemo)(()=>(0,io.j)((0,Bt.F)(Bt.r),"Explore"),[]),[w,R]=(0,t.useState)({defaults:{min:g?0:void 0,color:{mode:lo.S.PaletteClassic},custom:{drawStyle:oe.l8.Line,fillOpacity:0,pointSize:5}},overrides:[]}),M=(0,t.useMemo)(()=>mo(w,p),[w,p]),W=(0,t.useMemo)(()=>(0,Ke.SM)({fieldConfig:M,data:E?e:e.slice(0,nt),timeZone:o,replaceVariables:H=>H,theme:f,fieldConfigRegistry:S}),[S,e,o,f,M,E]),X=So(W);(0,t.useEffect)(()=>{if(d){const H=[];W.forEach(te=>{te.fields.map(O=>O.config?.custom?.hideFrom?.viz).every(k.identity)&&H.push((0,co.n)(te))}),d(H)}},[W,d]);const L={eventBus:y,sync:()=>uo.m.Crosshair,onSplitOpen:h,onToggleSeriesVisibility(H,te){R((0,ho.N)(H,te,w,e))}},I=(0,t.useMemo)(()=>({tooltip:{mode:m,sort:oe.As.None},legend:{displayMode:oe.jK.List,showLegend:!0,placement:"bottom",calcs:[]}}),[m]);return t.createElement(K._w,{value:L},e.length>nt&&!E&&t.createElement("div",{className:(0,u.cx)([v.timeSeriesDisclaimer])},t.createElement(be.J,{className:v.disclaimerIcon,name:"exclamation-triangle"}),"Showing only ",nt," time series.",t.createElement(B.zx,{variant:"primary",fill:"text",onClick:()=>x(!0),className:v.showAllButton},"Show all ",e.length)),t.createElement(po.$,{data:{series:W,timeRange:b,state:i,annotations:c,structureRev:X},pluginId:"timeseries",title:"",width:s,height:n,onChangeTimeRange:r,timeZone:o,options:I}))}const bo=e=>({timeSeriesDisclaimer:u.css`
    label: time-series-disclaimer;
    margin: ${e.spacing(1)} auto;
    padding: 10px 0;
    border-radius: ${e.spacing(2)};
    text-align: center;
    background-color: ${e.colors.background.primary};
  `,disclaimerIcon:u.css`
    label: disclaimer-icon;
    color: ${e.colors.warning.main};
    margin-right: ${e.spacing(.5)};
  `,showAllButton:u.css`
    margin-left: ${e.spacing(.5)};
  `});var Ut=l(52081),Ye=l(2594);const wo=C.EXPLORE_GRAPH_STYLES.map(e=>({value:e,label:e[0].toUpperCase()+e.slice(1).replace(/_/," ")}));function Co(e){const{graphStyle:n,onChangeGraphStyle:s}=e;return t.createElement(Ut.Lh,{justify:"space-between",wrap:!0},"Graph",t.createElement(Ye.S,{size:"sm",options:wo,value:n,onChange:s}))}const Qt="grafana.explore.style.graph",dr=e=>{store.set(Qt,e)},Ro=()=>Lo(ee.Z.get(Qt)),To="lines",Lo=e=>C.EXPLORE_GRAPH_STYLES.find(s=>s===e)??To,zo=({loading:e,data:n,eventBus:s,height:o,width:a,absoluteRange:r,timeZone:i,annotations:c,onChangeTime:d,splitOpenFn:h,loadingState:p})=>{const[m,g]=(0,t.useState)(Ro),y=(0,z.l4)(),f=parseInt(y.spacing(2).slice(0,-2),10),v=(0,t.useCallback)(E=>{(0,At.FG)(E),g(E)},[]);return t.createElement(pe.U,{label:t.createElement(Co,{graphStyle:m,onChangeGraphStyle:v}),loading:e,isOpen:!0},t.createElement(kt,{graphStyle:m,data:n,height:o,width:a-f,absoluteRange:r,onChangeTime:d,timeZone:i,annotations:c,splitOpenFn:h,loadingState:p,eventBus:s}))};var Io=l(35008),Vt=l.n(Io),at=l(38849),Fo=l(25287),Do=l(34282),No=l(78337);const Po=({timeInMs:e,className:n,humanize:s})=>t.createElement("span",{className:n},Ho(e,s)),Ho=(e,n=!1)=>{const s=e/1e3;if(!n)return`${s.toFixed(1)}s`;const o=(0,me.Ks)(s,"seconds"),a=o.hours(),r=o.minutes(),i=o.seconds();return a?`${a}h ${r}m ${i}s`:r?`${r}m ${i}s`:`${i}s`},Zt=150,$o=({resetKey:e,humanize:n,className:s})=>{const[o,a]=(0,t.useState)(0);return(0,No.Z)(()=>a(o+Zt),Zt),(0,t.useEffect)(()=>a(0),[e]),t.createElement(Po,{timeInMs:o,className:s,humanize:n})},Mo=e=>({logsRowsLive:u.css`
    label: logs-rows-live;
    font-family: ${e.typography.fontFamilyMonospace};
    font-size: ${e.typography.bodySmall.fontSize};
    display: flex;
    flex-flow: column nowrap;
    height: 60vh;
    overflow-y: scroll;
    :first-child {
      margin-top: auto !important;
    }
  `,logsRowFade:u.css`
    label: logs-row-fresh;
    color: ${e.colors.text};
    background-color: ${Vt()(e.colors.info.transparent).setAlpha(.25).toString()};
    animation: fade 1s ease-out 1s 1 normal forwards;
    @keyframes fade {
      from {
        background-color: ${Vt()(e.colors.info.transparent).setAlpha(.25).toString()};
      }
      to {
        background-color: transparent;
      }
    }
  `,logsRowsIndicator:u.css`
    font-size: ${e.typography.h6.fontSize};
    padding-top: ${e.spacing(1)};
    display: flex;
    align-items: center;
  `,button:u.css`
    margin-right: ${e.spacing(1)};
  `,fullWidth:u.css`
    width: 100%;
  `});class Oo extends t.PureComponent{constructor(n){super(n),this.liveEndDiv=null,this.scrollContainerRef=t.createRef(),this.onScroll=s=>{const{isPaused:o,onPause:a}=this.props,{scrollTop:r,clientHeight:i,scrollHeight:c}=s.currentTarget;c-(r+i)>=5&&!o&&a()},this.rowsToRender=()=>{const{isPaused:s}=this.props;let{logRowsToRender:o=[]}=this.state;return s||(o=o.slice(-100)),o},this.state={logRowsToRender:n.logRows}}static getDerivedStateFromProps(n,s){return n.isPaused?null:{logRowsToRender:n.logRows}}render(){const{theme:n,timeZone:s,onPause:o,onResume:a,isPaused:r}=this.props,i=Mo(n),{logsRow:c,logsRowLocalTime:d,logsRowMessage:h}=(0,Do.h)(n);return t.createElement("div",null,t.createElement("table",{className:i.fullWidth},t.createElement("tbody",{onScroll:r?void 0:this.onScroll,className:i.logsRowsLive,ref:this.scrollContainerRef},this.rowsToRender().map(p=>t.createElement("tr",{className:(0,u.cx)(c,i.logsRowFade),key:p.uid},t.createElement("td",{className:d},(0,at.dq)(p.timeEpochMs,{timeZone:s})),t.createElement("td",{className:h},p.hasAnsi?t.createElement(Fo.Q,{value:p.raw}):p.entry))),t.createElement("tr",{ref:p=>{this.liveEndDiv=p,this.liveEndDiv&&this.scrollContainerRef.current?.scrollTo&&!r&&this.scrollContainerRef.current?.scrollTo(0,this.scrollContainerRef.current.scrollHeight)}}))),t.createElement("div",{className:i.logsRowsIndicator},t.createElement(B.zx,{variant:"secondary",onClick:r?a:o,className:i.button},t.createElement(be.J,{name:r?"play":"pause"}),"\xA0",r?"Resume":"Pause"),t.createElement(B.zx,{variant:"secondary",onClick:this.props.stopLive,className:i.button},t.createElement(be.J,{name:"square-shape",size:"lg",type:"mono"}),"\xA0 Exit live mode"),r||t.createElement("span",null,"Last line received: ",t.createElement($o,{resetKey:this.props.logRows,humanize:!0})," ago")))}}const Ao=(0,z.HE)(Oo);var Gt=l(55294),Bo=l(33180),Wo=l(11543),fe=l(81764),Ce=l(8944),rt=l(37959),jt=l(28947),ko=l(3574),Uo=l.n(ko),it=l(38484),Qo=l(71698),Vo=l(65066),Zo=l(54972),Go=l(48955),jo=l(81042);const Kt=e=>({metaContainer:u.css`
    flex: 1;
    color: ${e.colors.text.secondary};
    margin-bottom: ${e.spacing(2)};
    min-width: 30%;
    display: flex;
    flex-wrap: wrap;
  `,metaItem:u.css`
    margin-right: ${e.spacing(2)};
    margin-top: ${e.spacing(.5)};
    display: flex;
    align-items: center;

    .logs-meta-item__error {
      color: ${e.colors.error.text};
    }
  `,metaLabel:u.css`
    margin-right: calc(${e.spacing(2)} / 2);
    font-size: ${e.typography.bodySmall.fontSize};
    font-weight: ${e.typography.fontWeightMedium};
  `,metaValue:u.css`
    font-family: ${e.typography.fontFamilyMonospace};
    font-size: ${e.typography.bodySmall.fontSize};
  `}),Ko=(0,t.memo)(function(n){const s=(0,z.wW)(Kt),{label:o,value:a}=n;return t.createElement("div",{"data-testid":"meta-info-text-item",className:s.metaItem},o&&t.createElement("span",{className:s.metaLabel},o,":"),t.createElement("span",{className:s.metaValue},a))}),lt=(0,t.memo)(function(n){const s=(0,z.wW)(Kt),{metaItems:o}=n;return t.createElement("div",{className:s.metaContainer,"data-testid":"meta-info-text"},o.map((a,r)=>t.createElement(Ko,{key:`${r}-${a.label}`,label:a.label,value:a.value})))}),Yo=()=>({metaContainer:u.css`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  `});var Xo=(e=>(e.Text="text",e.Json="json",e))(Xo||{});const Yt=t.memo(({meta:e,dedupStrategy:n,dedupCount:s,displayedFields:o,clearDetectedFields:a,hasUnescapedContent:r,forceEscape:i,onEscapeNewlines:c,logRows:d})=>{const h=(0,z.wW)(Yo),p=y=>{switch((0,P.ff)("grafana_logs_download_logs_clicked",{app:Ne.zj.Explore,format:y,area:"logs-meta-row"}),y){case"text":(0,Vo.Fc)({meta:e,rows:d},"Explore");break;case"json":const f=(0,jo.Di)(d),v=new Blob([JSON.stringify(f)],{type:"application/json;charset=utf-8"}),E=`Explore-logs-${(0,at.dq)(new Date)}.json`;Uo()(v,E);break}},m=[...e];n!==D.Y4.none&&m.push({label:"Dedup count",value:s,kind:D.Ku.Number}),d.some(y=>y.entry.length>Go.n)&&m.push({label:"Info",value:"Logs with more than 100,000 characters could not be parsed and highlighted",kind:D.Ku.String}),o?.length>0&&m.push({label:"Showing only selected fields",value:Xt(o,D.Ku.LabelsMap)},{label:"",value:t.createElement(B.zx,{variant:"secondary",size:"sm",onClick:a},"Show original line")}),r&&m.push({label:"Your logs might have incorrectly escaped content",value:t.createElement(Ge.u,{content:"Fix incorrectly escaped newline and tab sequences in log lines. Manually review the results to confirm that the replacements are correct.",placement:"right"},t.createElement(B.zx,{variant:"secondary",size:"sm",onClick:c},i?"Remove escaping":"Escape newlines"))});const g=t.createElement(it.v,null,t.createElement(it.v.Item,{label:"txt",onClick:()=>p("text")}),t.createElement(it.v.Item,{label:"json",onClick:()=>p("json")}));return t.createElement(t.Fragment,null,m&&t.createElement("div",{className:h.metaContainer},t.createElement(lt,{metaItems:m.map(y=>({label:y.label,value:"kind"in y?Xt(y.value,y.kind):y.value}))}),t.createElement(Qo.L,{overlay:g},t.createElement(xe.h,{isOpen:!1,variant:"default",icon:"download-alt"},"Download"))))});Yt.displayName="LogsMetaRow";function Xt(e,n){return n===D.Ku.LabelsMap?t.createElement(Zo.j,{labels:e}):n===D.Ku.Error?t.createElement("span",{className:"logs-meta-item__error"},e):e}var ct=l(67487),Jo=l(13211),qo=l(47513);function _o({pages:e,currentPageIndex:n,oldestLogsFirst:s,timeZone:o,loading:a,changeTime:r}){const i=p=>`${(0,at.dq)(p,{format:qo.U6.interval.second,timeZone:o})}`,c=(p,m)=>{if(n===m&&a)return t.createElement(ct.$,null);const g=i(s?p.logsRange.from:p.logsRange.to),y=i(s?p.logsRange.to:p.logsRange.from);return`${g} \u2014 ${y}`},d=(0,z.l4)(),h=en(d,a);return t.createElement(Et.$,{autoHide:!0},t.createElement("div",{className:h.pagesWrapper,"data-testid":"logsNavigationPages"},t.createElement("div",{className:h.pagesContainer},e.map((p,m)=>t.createElement("button",{type:"button","data-testid":`page${m+1}`,className:(0,u.cx)((0,B.gN)(d),h.page),key:p.queryRange.to,onClick:()=>{(0,P.ff)("grafana_explore_logs_pagination_clicked",{pageType:"page",pageNumber:m+1}),!a&&r({from:p.queryRange.from,to:p.queryRange.to})}},t.createElement("div",{className:(0,u.cx)(h.line,{selectedBg:n===m})}),t.createElement("div",{className:(0,u.cx)(h.time,{selectedText:n===m})},c(p,m)))))))}const en=(e,n)=>({pagesWrapper:u.css`
      height: 100%;
      padding-left: ${e.spacing(.5)};
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      &::after {
        content: '';
        display: block;
        background: repeating-linear-gradient(
          135deg,
          ${e.colors.background.primary},
          ${e.colors.background.primary} 5px,
          ${e.colors.background.secondary} 5px,
          ${e.colors.background.secondary} 15px
        );
        width: 3px;
        height: inherit;
        margin-bottom: 8px;
      }
    `,pagesContainer:u.css`
      display: flex;
      padding: 0;
      flex-direction: column;
    `,page:u.css`
      display: flex;
      margin: ${e.spacing(2)} 0;
      cursor: ${n?"auto":"pointer"};
      white-space: normal;
      .selectedBg {
        background: ${e.colors.primary.main};
      }
      .selectedText {
        color: ${e.colors.primary.main};
      }
    `,line:u.css`
      width: 3px;
      height: 100%;
      align-items: center;
      background: ${e.colors.text.secondary};
    `,time:u.css`
      width: 60px;
      min-height: 80px;
      font-size: ${e.v1.typography.size.sm};
      padding-left: ${e.spacing(.5)};
      display: flex;
      align-items: center;
    `});function tn({absoluteRange:e,logsSortOrder:n,timeZone:s,loading:o,onChangeTime:a,scrollToTopLogs:r,visibleRange:i,queries:c,clearCache:d,addResultsToCache:h}){const[p,m]=(0,t.useState)([]),[g,y]=(0,t.useState)(0),f=(0,t.useRef)(),v=(0,t.useRef)(),E=(0,t.useRef)(0),x=n===D.UV.Ascending,b=x?g===p.length-1:g===0,S=x?g===0:g===p.length-1,w=(0,z.l4)(),R=on(w,x,o);(0,t.useEffect)(()=>{const I={logsRange:i,queryRange:e};let H=[];if(!(0,k.isEqual)(v.current,e)||!(0,k.isEqual)(f.current,c))d(),m([I]),y(0),f.current=c,E.current=e.to-e.from;else{m(F=>(H=F.filter(O=>!(0,k.isEqual)(I.queryRange,O.queryRange)),H=[...H,I].sort((O,ce)=>W(O,ce,n)),H));const te=H.findIndex(F=>F.queryRange.to===e.to);y(te)}h()},[i,e,n,c,d,h]),(0,t.useEffect)(()=>{d()},[]);const M=({from:I,to:H})=>{v.current={from:I,to:H},a({from:I,to:H})},W=(I,H,te)=>te===D.UV.Ascending?I.queryRange.to>H.queryRange.to?1:-1:I.queryRange.to>H.queryRange.to?-1:1,X=t.createElement(B.zx,{"data-testid":"olderLogsButton",className:R.navButton,variant:"secondary",onClick:()=>{if((0,P.ff)("grafana_explore_logs_pagination_clicked",{pageType:"olderLogsButton"}),S)M({from:i.from-E.current,to:i.from});else{const I=x?-1:1;M({from:p[g+I].queryRange.from,to:p[g+I].queryRange.to})}},disabled:o},t.createElement("div",{className:R.navButtonContent},o?t.createElement(ct.$,null):t.createElement(be.J,{name:x?"angle-up":"angle-down",size:"lg"}),"Older logs")),L=t.createElement(B.zx,{"data-testid":"newerLogsButton",className:R.navButton,variant:"secondary",onClick:()=>{if((0,P.ff)("grafana_explore_logs_pagination_clicked",{pageType:"newerLogsButton"}),!b){const I=x?1:-1;M({from:p[g+I].queryRange.from,to:p[g+I].queryRange.to})}},disabled:o||b},t.createElement("div",{className:R.navButtonContent},o&&t.createElement(ct.$,null),b||o?null:t.createElement(be.J,{name:x?"angle-down":"angle-up",size:"lg"}),b?"Start of range":"Newer logs"));return t.createElement("div",{className:R.navContainer},x?X:L,t.createElement(_o,{pages:p,currentPageIndex:g,oldestLogsFirst:x,timeZone:s,loading:o,changeTime:M}),x?L:X,t.createElement(B.zx,{"data-testid":"scrollToTop",className:R.scrollToTopButton,variant:"secondary",onClick:r,title:"Scroll to top"},t.createElement(be.J,{name:"arrow-up",size:"lg"})))}const sn=(0,t.memo)(tn),on=(e,n,s)=>{const o=e.flags.topnav?`calc(100vh - 2*${e.spacing(2)} - 2*${Jo.$}px)`:"95vh";return{navContainer:u.css`
      max-height: ${o};
      display: flex;
      flex-direction: column;
      justify-content: ${n?"flex-start":"space-between"};
      position: sticky;
      top: ${e.spacing(2)};
      right: 0;
    `,navButton:u.css`
      width: 58px;
      height: 68px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1;
    `,navButtonContent:u.css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      white-space: normal;
    `,scrollToTopButton:u.css`
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: ${e.spacing(1)};
    `}};function Jt(e){const[n,s]=(0,t.useState)(!1),o=100,{error:a,title:r}=e,i=a.message||a.data?.message||"",c=!n&&i.length>o;return t.createElement(We.b,{title:r,severity:"warning"},c?t.createElement(B.zx,{variant:"secondary",size:"xs",onClick:()=>{s(!0)}},"Show details"):i)}function nn(e,n,s,o){if(s!==void 0)return{logsVolumeData:s,fullRangeData:!0,range:o};if(e!==void 0)return{logsVolumeData:e,fullRangeData:!1,range:n||o}}function an(e){const{width:n,timeZone:s,splitOpen:o,onUpdateTimeRange:a,onLoadLogsVolume:r,onHiddenSeriesChanged:i}=e,c=(0,z.l4)(),d=(0,z.wW)(rn),h=parseInt(c.spacing(2).slice(0,-2),10),p=150,m=nn(e.logLinesBasedData,e.logLinesBasedDataVisibleRange,e.logsVolumeData,e.absoluteRange);if(m===void 0)return null;const{logsVolumeData:g,fullRangeData:y,range:f}=m;if(g.error!==void 0)return t.createElement(Jt,{error:g.error,title:"Failed to load log volume for this query"});let v;g?.state===V.Gu.Loading?v=t.createElement("span",null,"Log volume is loading..."):g?.data&&(g.data.length>0?v=t.createElement(kt,{graphStyle:"lines",loadingState:V.Gu.Done,data:g.data,height:p,width:n-h*2,absoluteRange:f,onChangeTime:a,timeZone:s,splitOpenFn:o,tooltipDisplayMode:oe.f3.Multi,onHiddenSeriesChanged:i,anchorToZero:!0,eventBus:e.eventBus}):v=t.createElement("span",null,"No volume data."));let E;if(y){const x=ln(g,f);x!==void 0&&x<1&&(E=t.createElement(fe._,{label:"Reload log volume",transparent:!0},t.createElement(B.zx,{size:"xs",icon:"sync",variant:"secondary",onClick:r,id:"reload-volume"})))}else E=t.createElement("div",{className:d.oldInfoText},"This datasource does not support full-range histograms. The graph is based on the logs seen in the response.");return t.createElement(pe.U,{label:"",isOpen:!0},t.createElement("div",{style:{height:p},className:d.contentContainer},v),t.createElement("div",{className:d.extraInfoContainer},E))}const rn=e=>({extraInfoContainer:u.css`
      display: flex;
      justify-content: end;
      position: absolute;
      right: 5px;
      top: 5px;
    `,contentContainer:u.css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,oldInfoText:u.css`
      font-size: ${e.typography.size.sm};
      color: ${e.colors.text.secondary};
    `});function ln(e,n){const s=e&&e.data[0]&&e.data[0].meta?.custom?.absoluteRange;return s?(n.from-n.to)/(s.from-s.to):void 0}const re={showLabels:"grafana.explore.logs.showLabels",showTime:"grafana.explore.logs.showTime",wrapLogMessage:"grafana.explore.logs.wrapLogMessage",prettifyLogMessage:"grafana.explore.logs.prettifyLogMessage",logsSortOrder:"grafana.explore.logs.sortOrder"},cn=u.css`
  & > div {
    overflow: visible;
    & > div {
      overflow: visible;
    }
  }
`;class dn extends t.PureComponent{constructor(n){super(n),this.topLogsRef=(0,t.createRef)(),this.state={showLabels:ee.Z.getBool(re.showLabels,!1),showTime:ee.Z.getBool(re.showTime,!0),wrapLogMessage:ee.Z.getBool(re.wrapLogMessage,!0),prettifyLogMessage:ee.Z.getBool(re.prettifyLogMessage,!1),dedupStrategy:D.Y4.none,hiddenLogLevels:[],logsSortOrder:ee.Z.get(re.logsSortOrder)||D.UV.Descending,isFlipping:!1,displayedFields:[],forceEscape:!1},this.onLogRowHover=s=>{s?this.props.eventBus.publish(new Gt.es({point:{time:s.timeEpochMs}})):this.props.eventBus.publish(new Gt.xH)},this.onChangeLogsSortOrder=()=>{this.setState({isFlipping:!0}),this.flipOrderTimer=window.setTimeout(()=>{this.setState(s=>{const o=s.logsSortOrder===D.UV.Descending?D.UV.Ascending:D.UV.Descending;return ee.Z.set(re.logsSortOrder,o),{logsSortOrder:o}})},0),this.cancelFlippingTimer=window.setTimeout(()=>this.setState({isFlipping:!1}),1e3)},this.onEscapeNewlines=()=>{this.setState(s=>({forceEscape:!s.forceEscape}))},this.onChangeDedup=s=>{(0,P.ff)("grafana_explore_logs_deduplication_clicked",{deduplicationType:s,datasourceType:this.props.datasourceType}),this.setState({dedupStrategy:s})},this.onChangeLabels=s=>{const{target:o}=s;if(o){const a=o.checked;this.setState({showLabels:a}),ee.Z.set(re.showLabels,a)}},this.onChangeTime=s=>{const{target:o}=s;if(o){const a=o.checked;this.setState({showTime:a}),ee.Z.set(re.showTime,a)}},this.onChangeWrapLogMessage=s=>{const{target:o}=s;if(o){const a=o.checked;this.setState({wrapLogMessage:a}),ee.Z.set(re.wrapLogMessage,a)}},this.onChangePrettifyLogMessage=s=>{const{target:o}=s;if(o){const a=o.checked;this.setState({prettifyLogMessage:a}),ee.Z.set(re.prettifyLogMessage,a)}},this.onToggleLogLevel=s=>{const o=s.map(a=>D.in[a]);this.setState({hiddenLogLevels:o})},this.onToggleLogsVolumeCollapse=s=>{this.props.onSetLogsVolumeEnabled(s),(0,P.ff)("grafana_explore_logs_histogram_toggle_clicked",{datasourceType:this.props.datasourceType,type:s?"open":"close"})},this.onClickScan=s=>{s.preventDefault(),this.props.onStartScanning&&this.props.onStartScanning()},this.onClickStopScan=s=>{s.preventDefault(),this.props.onStopScanning&&this.props.onStopScanning()},this.showField=s=>{this.state.displayedFields.indexOf(s)===-1&&this.setState(a=>({displayedFields:a.displayedFields.concat(s)}))},this.hideField=s=>{this.state.displayedFields.indexOf(s)>-1&&this.setState(a=>({displayedFields:a.displayedFields.filter(r=>s!==r)}))},this.clearDetectedFields=()=>{this.setState(s=>({displayedFields:[]}))},this.checkUnescapedContent=(0,Ee.Z)(s=>!!s.some(o=>o.hasUnescapedContent)),this.dedupRows=(0,Ee.Z)((s,o)=>{const a=(0,rt.UW)(s,o),r=a.reduce((i,c)=>c.duplicates?i+c.duplicates:i,0);return{dedupedRows:a,dedupCount:r}}),this.filterRows=(0,Ee.Z)((s,o)=>(0,rt.nu)(s,new Set(o))),this.createNavigationRange=(0,Ee.Z)(s=>{if(!s||s.length===0)return;const o=s[0].timeEpochMs,a=s[s.length-1].timeEpochMs;return a<o?{from:a,to:o}:{from:o,to:a}}),this.scrollToTopLogs=()=>this.topLogsRef.current?.scrollIntoView(),this.logsVolumeEventBus=n.eventBus.newScopedBus("logsvolume",{onlyLocal:!1})}componentWillUnmount(){this.flipOrderTimer&&window.clearTimeout(this.flipOrderTimer),this.cancelFlippingTimer&&window.clearTimeout(this.cancelFlippingTimer)}render(){const{width:n,splitOpen:s,logRows:o,logsMeta:a,logsSeries:r,visibleRange:i,logsVolumeEnabled:c,logsVolumeData:d,loadLogsVolumeData:h,loading:p=!1,loadingState:m,onClickFilterLabel:g,onClickFilterOutLabel:y,timeZone:f,scanning:v,scanRange:E,showContextToggle:x,absoluteRange:b,onChangeTime:S,getFieldLinks:w,theme:R,logsQueries:M,clearCache:W,addResultsToCache:X,exploreId:L,scrollElement:I,getRowContext:H,getLogRowContextUi:te}=this.props,{showLabels:F,showTime:O,wrapLogMessage:ce,prettifyLogMessage:us,dedupStrategy:qe,hiddenLogLevels:_a,logsSortOrder:yt,isFlipping:er,displayedFields:ps,forceEscape:hs}=this.state,J=pn(R,ce),tr=o&&o.length>0,sr=this.checkUnescapedContent(o),or=this.filterRows(o,_a),{dedupedRows:nr,dedupCount:ar}=this.dedupRows(or,qe),rr=this.createNavigationRange(o),ir=E?`Scanning ${Bo.describeTimeRange(E)}`:"Scanning...";return t.createElement(t.Fragment,null,t.createElement(pe.U,{label:"Logs volume",collapsible:!0,isOpen:c,onToggle:this.onToggleLogsVolumeCollapse},c&&t.createElement(an,{absoluteRange:b,width:n,logsVolumeData:d,logLinesBasedData:r?{data:r,state:m}:void 0,logLinesBasedDataVisibleRange:i,onUpdateTimeRange:S,timeZone:f,splitOpen:s,onLoadLogsVolume:h,onHiddenSeriesChanged:this.onToggleLogLevel,eventBus:this.logsVolumeEventBus})),t.createElement(pe.U,{label:"Logs",loading:p,isOpen:!0,className:cn},t.createElement("div",{className:J.logOptions,ref:this.topLogsRef},t.createElement(Wo.Z,null,t.createElement(fe._,{label:"Time",className:J.horizontalInlineLabel,transparent:!0},t.createElement(Ce.x,{value:O,onChange:this.onChangeTime,className:J.horizontalInlineSwitch,transparent:!0,id:`show-time_${L}`})),t.createElement(fe._,{label:"Unique labels",className:J.horizontalInlineLabel,transparent:!0},t.createElement(Ce.x,{value:F,onChange:this.onChangeLabels,className:J.horizontalInlineSwitch,transparent:!0,id:`unique-labels_${L}`})),t.createElement(fe._,{label:"Wrap lines",className:J.horizontalInlineLabel,transparent:!0},t.createElement(Ce.x,{value:ce,onChange:this.onChangeWrapLogMessage,className:J.horizontalInlineSwitch,transparent:!0,id:`wrap-lines_${L}`})),t.createElement(fe._,{label:"Prettify JSON",className:J.horizontalInlineLabel,transparent:!0},t.createElement(Ce.x,{value:us,onChange:this.onChangePrettifyLogMessage,className:J.horizontalInlineSwitch,transparent:!0,id:`prettify_${L}`})),t.createElement(fe._,{label:"Dedup",className:J.horizontalInlineLabel,transparent:!0},t.createElement(Ye.S,{options:Object.values(D.Y4).map(vt=>({label:(0,k.capitalize)(vt),value:vt,description:D.Uv[vt]})),value:qe,onChange:this.onChangeDedup,className:J.radioButtons}))),t.createElement("div",null,t.createElement(fe._,{label:"Display results",className:J.horizontalInlineLabel,transparent:!0},t.createElement(Ye.S,{disabled:er,options:[{label:"Newest first",value:D.UV.Descending,description:"Show results newest to oldest"},{label:"Oldest first",value:D.UV.Ascending,description:"Show results oldest to newest"}],value:yt,onChange:this.onChangeLogsSortOrder,className:J.radioButtons})))),t.createElement(Yt,{logRows:o,meta:a||[],dedupStrategy:qe,dedupCount:ar,hasUnescapedContent:sr,forceEscape:hs,displayedFields:ps,onEscapeNewlines:this.onEscapeNewlines,clearDetectedFields:this.clearDetectedFields}),t.createElement("div",{className:J.logsSection},t.createElement("div",{className:J.logRows,"data-testid":"logRows"},t.createElement(jt.w,{logRows:o,deduplicatedRows:nr,dedupStrategy:qe,getRowContext:H,getLogRowContextUi:te,onClickFilterLabel:g,onClickFilterOutLabel:y,showContextToggle:x,showLabels:F,showTime:O,enableLogDetails:!0,forceEscape:hs,wrapLogMessage:ce,prettifyLogMessage:us,timeZone:f,getFieldLinks:w,logsSortOrder:yt,displayedFields:ps,onClickShowField:this.showField,onClickHideField:this.hideField,app:Ne.zj.Explore,scrollElement:I,onLogRowHover:this.onLogRowHover}),!p&&!tr&&!v&&t.createElement("div",{className:J.noData},"No logs found.",t.createElement(B.zx,{size:"sm",variant:"secondary",onClick:this.onClickScan},"Scan for older logs")),v&&t.createElement("div",{className:J.noData},t.createElement("span",null,ir),t.createElement(B.zx,{size:"sm",variant:"secondary",onClick:this.onClickStopScan},"Stop scan"))),t.createElement(sn,{logsSortOrder:yt,visibleRange:rr??b,absoluteRange:b,timeZone:f,onChangeTime:S,loading:p,queries:M??[],scrollToTopLogs:this.scrollToTopLogs,addResultsToCache:X,clearCache:W}))))}}const un=(0,z.HE)(dn),pn=(e,n)=>({noData:u.css`
      > * {
        margin-left: 0.5em;
      }
    `,logOptions:u.css`
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      background-color: ${e.colors.background.primary};
      padding: ${e.spacing(1,2)};
      border-radius: ${e.shape.borderRadius()};
      margin: ${e.spacing(0,0,1)};
      border: 1px solid ${e.colors.border.medium};
    `,headerButton:u.css`
      margin: ${e.spacing(.5,0,0,1)};
    `,horizontalInlineLabel:u.css`
      > label {
        margin-right: 0;
      }
    `,horizontalInlineSwitch:u.css`
      padding: 0 ${e.spacing(1)} 0 0;
    `,radioButtons:u.css`
      margin: 0;
    `,logsSection:u.css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `,logRows:u.css`
      overflow-x: ${n?"unset":"scroll"};
      overflow-y: visible;
      width: 100%;
    `}),dt=500,ut=100,hn=(0,Ee.Z)(()=>({logsEnter:u.css`
      label: logsEnter;
      position: absolute;
      opacity: 0;
      height: auto;
      width: 100%;
    `,logsEnterActive:u.css`
      label: logsEnterActive;
      opacity: 1;
      transition: opacity ${dt}ms ease-out ${ut}ms;
    `,logsExit:u.css`
      label: logsExit;
      position: absolute;
      opacity: 1;
      height: auto;
      width: 100%;
    `,logsExitActive:u.css`
      label: logsExitActive;
      opacity: 0;
      transition: opacity ${dt}ms ease-out ${ut}ms;
    `}));function qt(e){const{visible:n,children:s}=e,o=hn();return t.createElement($t.Z,{in:n,mountOnEnter:!0,unmountOnExit:!0,timeout:dt+ut,classNames:{enter:o.logsEnter,enterActive:o.logsEnterActive,exit:o.logsExit,exitActive:o.logsExitActive}},s)}var Xe=l(71570);class gn extends t.PureComponent{constructor(){super(...arguments),this.onChangeTime=n=>{const{exploreId:s,updateTimeRange:o}=this.props;o({exploreId:s,absoluteRange:n})},this.getLogRowContext=async(n,s)=>{const{datasourceInstance:o,logsQueries:a}=this.props;if((0,D.Q4)(o)){const r=(a??[]).find(i=>i.refId===n.dataFrame.refId&&i.datasource!=null&&i.datasource.type===o.type);return o.getLogRowContext(n,s,r)}return[]},this.getLogRowContextUi=(n,s)=>{const{datasourceInstance:o}=this.props;return(0,D.xW)(o)&&o.getLogRowContextUi?o.getLogRowContextUi(n,s):t.createElement(t.Fragment,null)},this.showContextToggle=n=>{const{datasourceInstance:s}=this.props;return(0,D.Q4)(s)?s.showContextToggle(n):!1},this.getFieldLinks=(n,s,o)=>{const{splitOpenFn:a,range:r}=this.props;return(0,Xe.a)({field:n,rowIndex:s,splitOpenFn:a,range:r,dataFrame:o})}}render(){const{loading:n,loadingState:s,logRows:o,logsMeta:a,logsSeries:r,logsQueries:i,loadSupplementaryQueryData:c,setSupplementaryQueryEnabled:d,onClickFilterLabel:h,onClickFilterOutLabel:p,onStartScanning:m,onStopScanning:g,absoluteRange:y,timeZone:f,visibleRange:v,scanning:E,range:x,width:b,splitOpenFn:S,isLive:w,exploreId:R,addResultsToCache:M,clearCache:W,scrollElement:X,logsVolume:L}=this.props;return o?t.createElement(t.Fragment,null,t.createElement(qt,{visible:w},t.createElement(pe.U,{label:"Logs",loading:!1,isOpen:!0},t.createElement(Ot,{exploreId:R},I=>t.createElement(Ao,{logRows:o,timeZone:f,stopLive:I.stop,isPaused:this.props.isPaused,onPause:I.pause,onResume:I.resume})))),t.createElement(qt,{visible:!w},t.createElement(un,{exploreId:R,datasourceType:this.props.datasourceInstance?.type,logRows:o,logsMeta:a,logsSeries:r,logsVolumeEnabled:L.enabled,onSetLogsVolumeEnabled:I=>d(R,I,D.v8.LogsVolume),logsVolumeData:L.data,logsQueries:i,width:b,splitOpen:S,loading:n,loadingState:s,loadLogsVolumeData:()=>c(R,D.v8.LogsVolume),onChangeTime:this.onChangeTime,onClickFilterLabel:h,onClickFilterOutLabel:p,onStartScanning:m,onStopScanning:g,absoluteRange:y,visibleRange:v,timeZone:f,scanning:E,scanRange:x.raw,showContextToggle:this.showContextToggle,getRowContext:this.getLogRowContext,getLogRowContextUi:this.getLogRowContextUi,getFieldLinks:this.getFieldLinks,addResultsToCache:()=>M(R),clearCache:()=>W(R),scrollElement:X,eventBus:this.props.eventBus}))):null}}function mn(e,{exploreId:n}){const o=e.explore[n],{logsResult:a,loading:r,scanning:i,datasourceInstance:c,isLive:d,isPaused:h,range:p,absoluteRange:m,supplementaryQueries:g}=o,y=(0,Re.Z)(e.user),f=g[D.v8.LogsVolume];return{loading:r,logRows:a?.rows,logsMeta:a?.meta,logsSeries:a?.series,logsQueries:a?.queries,visibleRange:a?.visibleRange,scanning:i,timeZone:y,datasourceInstance:c,isLive:d,isPaused:h,range:p,absoluteRange:m,logsVolume:f}}const fn={updateTimeRange:Se.cD,addResultsToCache:A.K8,clearCache:A.LK,loadSupplementaryQueryData:A.W1,setSupplementaryQueryEnabled:A.z0},yn=(0,de.connect)(mn,fn)(gn);function vn(e){const{queryResponse:n,timeZone:s,enabled:o,setLogsSampleEnabled:a,datasourceInstance:r,queries:i,splitOpen:c}=e,d=(0,z.wW)(En),h=g=>{a(g),(0,P.ff)("grafana_explore_logs_sample_toggle_clicked",{datasourceType:r?.type??"unknown",type:g?"open":"close"})},p=()=>{if(!(0,D.mN)(r,D.v8.LogsSample))return null;const g=i.map(f=>r.getSupplementaryQuery(D.v8.LogsSample,f)).filter(f=>!!f);if(!g.length)return null;const y=()=>{c({query:g[0],datasourceUid:r.uid}),(0,P.ff)("grafana_explore_logs_sample_split_button_clicked",{datasourceType:r?.type??"unknown",queriesCount:g.length})};return t.createElement(B.zx,{size:"sm",className:d.logSamplesButton,onClick:y},"Open logs in split view")};let m;if(n===void 0)m=null;else if(n.error!==void 0)m=t.createElement(Jt,{error:n.error,title:"Failed to load logs sample for this query"});else if(n.state===V.Gu.Loading)m=t.createElement("span",null,"Logs sample is loading...");else if(n.data.length===0||n.data[0].length===0)m=t.createElement("span",null,"No logs sample data.");else{const g=(0,rt.aB)(n.data);m=t.createElement(t.Fragment,null,t.createElement(p,null),t.createElement(jt.w,{logRows:g.rows,dedupStrategy:D.Y4.none,showLabels:ee.Z.getBool(re.showLabels,!1),showTime:ee.Z.getBool(re.showTime,!0),wrapLogMessage:ee.Z.getBool(re.wrapLogMessage,!0),prettifyLogMessage:ee.Z.getBool(re.prettifyLogMessage,!1),timeZone:s,enableLogDetails:!0}))}return t.createElement(pe.U,{label:"Logs sample",isOpen:o,collapsible:!0,onToggle:h},m)}const En=e=>({logSamplesButton:u.css`
    position: absolute;
    top: ${e.spacing(1)};
    right: ${e.spacing(1)}; ;
  `}),xn=()=>{const e=(0,z.wW)(Sn);return t.createElement(t.Fragment,null,t.createElement(xt.l,{"data-testid":"explore-no-data",className:e.wrapper},t.createElement("span",{className:e.message},"No data")))},Sn=e=>({wrapper:u.css`
    label: no-data-card;
    padding: ${e.spacing(3)};
    background: ${e.colors.background.primary};
    border-radius: ${e.shape.borderRadius(2)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  `,message:u.css`
    font-size: ${e.typography.h2.fontSize};
    padding: ${e.spacing(4)};
    color: ${e.colors.text.disabled};
  `});var bn=l(97097);const wn=()=>{const e=(0,z.l4)(),n=Le.Vt.hasPermission(C.AccessControlAction.DataSourcesCreate)&&Le.Vt.hasPermission(C.AccessControlAction.DataSourcesWrite),s="Explore requires at least one data source. Once you have added a data source, you can query it here.",o=t.createElement(t.Fragment,null,t.createElement(be.J,{name:"rocket"}),t.createElement(t.Fragment,null," ProTip: You can also define data sources through configuration files. "),t.createElement("a",{href:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=explore",target:"_blank",rel:"noreferrer",className:"text-link"},"Learn more")),a=t.createElement(B.Qj,{size:"lg",href:"datasources/new",icon:"database",disabled:!n},"Add data source"),r=u.css`
    max-width: ${e.breakpoints.values.lg}px;
    margin-top: ${e.spacing(2)};
    align-self: center;
  `;return t.createElement(bn._,{callToActionElement:a,className:r,footer:o,message:s})};var Cn=l(86253),Rn=l(74538),Tn=l(85506);const Ln=e=>({warningText:u.css`
    label: warningText;
    font-size: ${e.typography.bodySmall.fontSize};
    color: ${e.colors.text.secondary};
  `});function zn(e){const{dataFrames:n,range:s,splitOpenFn:o,withTraceView:a,datasourceType:r}=e,i=(0,Xe.u)(s,o),c=(0,z.l4)(),d=(0,z.wW)(Ln),h=(0,Ke.SM)({fieldConfig:{defaults:{},overrides:[]},data:n,replaceVariables:w=>w,theme:c}),{nodes:p}=(0,Tn.Y)(h),[m,g]=(0,Cn.Z)(!1),y=()=>{g(),(0,P.ff)("grafana_traces_node_graph_panel_clicked",{datasourceType:r,grafana_version:N.v.buildInfo.version,isExpanded:!m})},{height:f}=(0,$.Z)(),v=(0,t.useRef)(null),[E,x]=(0,t.useState)(250);(0,t.useEffect)(()=>{if(v.current){const{top:w}=v.current.getBoundingClientRect();x(w)}},[v]);const b=f-E-32,S=a&&p[0]?.length>1e3?t.createElement("span",{className:d.warningText}," (",p[0].length," nodes, can be slow to load)"):null;return t.createElement(pe.U,{label:t.createElement("span",null,"Node graph",S," "),collapsible:a,isOpen:a?m:!0,onToggle:a?()=>y():void 0},t.createElement("div",{ref:v,style:a?{height:500}:{minHeight:600,height:b}},t.createElement(Rn.E,{dataFrames:h,getLinks:i})))}function In(e,{exploreId:n}){return{range:e.explore[n].range}}const Fn=(0,de.connect)(In,{})(zn);var Pe=l(90158),Dn=l(99822),Nn=l(84457);const Pn=e=>{const n=(0,Me.F)(e);return{getQueries:(0,Pe.P1)(n,s=>s.queries),getQueryResponse:(0,Pe.P1)(n,s=>s.queryResponse),getHistory:(0,Pe.P1)(n,s=>s.history),getEventBridge:(0,Pe.P1)(n,s=>s.eventBridge),getDatasourceInstanceSettings:(0,Pe.P1)(n,s=>(0,Be.ak)().getInstanceSettings(s.datasourceInstance?.uid))}},Hn=({exploreId:e})=>{const n=(0,C.useDispatch)(),{getQueries:s,getDatasourceInstanceSettings:o,getQueryResponse:a,getHistory:r,getEventBridge:i}=(0,t.useMemo)(()=>Pn(e),[e]),c=(0,C.useSelector)(s),d=(0,C.useSelector)(o),h=(0,C.useSelector)(a),p=(0,C.useSelector)(r),m=(0,C.useSelector)(i),g=(0,t.useCallback)(()=>{n((0,A.aA)(e))},[n,e]),y=(0,t.useCallback)(async b=>{n((0,A.PM)({queries:b,exploreId:e}));for(const S of b)for(const w of c)if(S.refId===w.refId&&S.datasource?.type!==w.datasource?.type){const R=await(0,Fe.F)().get(S.datasource),M=await(0,Fe.F)().get({uid:S.datasource?.uid});n((0,A.GJ)(e,c,R,M,S.refId))}b.length<c.length&&g()},[n,e,g,c]),f=(0,t.useCallback)(b=>{y([...c,{...b,refId:(0,Dn.Hs)(c)}])},[y,c]),v=()=>{(0,P.ff)("grafana_explore_query_row_copy")},E=()=>{(0,P.ff)("grafana_explore_query_row_remove")},x=b=>{(0,P.ff)("grafana_query_row_toggle",b===void 0?{}:{queryEnabled:b})};return t.createElement(Nn.l,{dsSettings:d,queries:c,onQueriesChange:y,onAddQuery:f,onRunQueries:g,onQueryCopied:v,onQueryRemoved:E,onQueryToggled:x,data:h,app:Ne.zj.Explore,history:p,eventBus:m})};var _t=l(88144),es=l(84952),$n=l(75478),ts=l(24799),Mn=l(20112);const pt=" ",On=e=>{const n={},s=[],o=e.fields.filter(i=>!["Time"].includes(i.name));let a=o.find(i=>i.name==="__name__")?.values.toArray()??[];!a.length&&o.length&&o[0].values.length&&(a=Array(o[0].values.length).fill(""));const r=e.fields.filter(i=>!["__name__"].includes(i.name));return a.forEach(function(i,c){n[i]={};const d=n[i][c]??{};for(const h of r){const p=h.name;if(p!=="Time")if(typeof h?.display=="function"){const m=(0,Mn.zc)(h?.display(h.values.get(c)));m?d[p]=m:p.includes("Value #")&&(d[p]=pt)}else console.warn("Field display method is missing!")}s.push({...d,__name__:i})}),s};var ss=l(76303),An=l(3823),ze=l(8180);const Bn=(e,n)=>({rowWrapper:u.css`
    position: relative;
    min-width: ${Je};
    padding-right: 5px;
  `,rowValue:u.css`
    white-space: nowrap;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    display: block;
    padding-right: 10px;

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }

    &:before {
      pointer-events: none;
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(to right, transparent calc(100% - 25px), ${e.colors.background.primary});
    }
  `,rowValuesWrap:u.css`
    padding-left: ${ns};
    width: calc(${n} * ${Je});
    display: flex;
  `}),Wn=({totalNumberOfValues:e,values:n,hideFieldsWithoutValues:s})=>{const o=(0,z.wW)(a=>Bn(a,e));return t.createElement("div",{role:"cell",className:o.rowValuesWrap},n?.map(a=>s&&(a.value===void 0||a.value===pt)?null:t.createElement("span",{key:a.key,className:o.rowWrapper},t.createElement("span",{className:o.rowValue},a.value))))},kn=e=>{const n=e.isDark?"#ce9178":"#a31515",s=e.isDark?"#73bf69":"#56a64b";return{metricName:u.css`
      color: ${s};
    `,metricValue:u.css`
      color: ${n};
    `,expanded:u.css`
      display: block;
      text-indent: 1em;
    `}},Un=({value:e,index:n,length:s,isExpandedView:o})=>{const a=(0,z.wW)(kn),r=e.key,i=e.value;return t.createElement("span",{className:o?a.expanded:"",key:n},t.createElement("span",{className:a.metricName},r),t.createElement("span",null,"="),t.createElement("span",null,'"'),t.createElement("span",{className:a.metricValue},i),t.createElement("span",null,'"'),n<s-1&&t.createElement("span",null,", "))},os="20px",Je="80px",ns="25px",Qn=(e,n,s)=>({rowWrapper:u.css`
    border-bottom: 1px solid ${e.colors.border.medium};
    display: flex;
    position: relative;
    padding-left: 22px;
    ${s?"":"align-items: center;"}
    ${s?"":"height: 100%;"}
  `,copyToClipboardWrapper:u.css`
    position: absolute;
    left: 0;
    ${s?"":"bottom: 0;"}
    ${s?"top: 4px;":"top: 0;"}
    margin: auto;
    z-index: 1;
    height: 16px;
    width: 16px;
  `,rowLabelWrapWrap:u.css`
    position: relative;
    width: calc(100% - (${n} * ${Je}) - ${ns});
  `,rowLabelWrap:u.css`
    white-space: nowrap;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    padding-right: ${os};

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }

    &:after {
      pointer-events: none;
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(
        to right,
        transparent calc(100% - ${os}),
        ${e.colors.background.primary}
      );
    }
  `});function Vn(e){let n=[],s=[];for(const o in e)o in e&&e[o]&&!o.includes("Value")?n.push({key:o,value:e[o]}):o in e&&e[o]&&o.includes("Value")&&s.push({key:o,value:e[o]});return{values:s,attributeValues:n}}const Zn=({listItemData:e,listKey:n,totalNumberOfValues:s,valueLabels:o,isExpandedView:a})=>{const{__name__:r,...i}=e,[c,d]=(0,An.Z)(),h=o?.length??s,p=(0,z.wW)(E=>Qn(E,h,a)),{values:m,attributeValues:g}=Vn(i),y=E=>E==="\u221E"?"+Inf":E,f=`${r}{${g.map(E=>E.key!=="le"?`${E.key}="${y(E.value)}"`:"")}}`,v=Boolean(o&&o?.length);return t.createElement(t.Fragment,null,o!==void 0&&a&&t.createElement(as,{valueLabels:o,expanded:a}),t.createElement("div",{key:n,className:p.rowWrapper},t.createElement("span",{className:p.copyToClipboardWrapper},t.createElement(ze.h,{tooltip:"Copy to clipboard",onClick:()=>{(0,P.ff)("grafana_explore_prometheus_instant_query_ui_raw_toggle_expand"),d(f)},name:"copy"})),t.createElement("span",{role:"cell",className:p.rowLabelWrapWrap},t.createElement("div",{className:p.rowLabelWrap},t.createElement("span",null,r),t.createElement("span",null,"{"),t.createElement("span",null,g.map((E,x)=>t.createElement(Un,{isExpandedView:a,value:E,key:x,index:x,length:g.length}))),t.createElement("span",null,"}"))),t.createElement(Wn,{hideFieldsWithoutValues:v,totalNumberOfValues:h,values:m})))},Gn=(e,n)=>({valueNavigation:u.css`
      width: ${Je};
      font-weight: bold;
    `,valueNavigationWrapper:u.css`
      display: flex;
      justify-content: flex-end;
    `,itemLabelsWrap:u.css`
      ${n?"":`border-bottom: 1px solid ${e.colors.border.medium}`};
    `}),jn=e=>e.includes(ss.QG)?e.replace(ss.QG,""):e,as=({valueLabels:e,expanded:n})=>{const s=(0,z.wW)(o=>Gn(o,n));return t.createElement("div",{className:s.itemLabelsWrap},t.createElement("div",{className:s.valueNavigationWrapper},e.map((o,a)=>t.createElement("span",{className:s.valueNavigation,key:o.name},jn(o.name)))))},He={wrapper:u.css`
    height: 100%;
    overflow: scroll;
  `,switchWrapper:u.css`
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
  `,switchLabel:u.css`
    margin-left: 15px;
    margin-bottom: 0;
  `,switch:u.css`
    margin-left: 10px;
  `,resultCount:u.css`
    margin-bottom: 4px;
  `,header:u.css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-size: 12px;
    line-height: 1.25;
  `},Kn=480,Yn=2,Xn=e=>{const{tableResult:n}=e,s=(0,k.cloneDeep)(n),o=(0,t.useRef)(null),a=s.fields.filter(g=>g.name.includes("Value")),r=On(s),{width:i}=(0,$.Z)(),[c,d]=(0,t.useState)(i<=Kn||a.length>Yn),h=()=>{d(!c);const g={isExpanded:!c};(0,P.ff)("grafana_explore_prometheus_instant_query_ui_raw_toggle_expand",g)};(0,t.useEffect)(()=>{o.current?.resetAfterIndex(0,!0)},[c]);const p=g=>{if(g<10){let v=0;for(let E=0;E<g;E++)v+=m(E,!0);return Math.min(600,v)}return 600},m=(g,y)=>{if(!y)return 32;const E=r[g];return 1.5*32+(Object.keys(E).length-a.length)*22};return t.createElement("section",null,t.createElement("header",{className:He.header},t.createElement(ts.g,{className:He.switchWrapper,label:"Expand results",htmlFor:"isExpandedView"},t.createElement("div",{className:He.switch},t.createElement(Ce.r,{onChange:h,id:"isExpandedView",value:c,label:"Expand results"}))),t.createElement("div",{className:He.resultCount},"Result series: ",r.length)),t.createElement("div",{role:"table"},t.createElement(t.Fragment,null,a.length>1&&!c&&t.createElement(as,{valueLabels:a,expanded:c}),t.createElement($n.S_,{ref:o,itemCount:r.length,className:He.wrapper,itemSize:g=>m(g,c),height:p(r.length),width:"100%"},({index:g,style:y})=>{let f;return c&&(f=a.filter(v=>{const E=r[g][v.name];return E&&E!==pt})),t.createElement("div",{role:"row",style:{...y,overflow:"hidden"}},t.createElement(Zn,{isExpandedView:c,valueLabels:f,totalNumberOfValues:a.length,listKey:r[g].__name__,listItemData:r[g]}))}))))};function Jn(e,{exploreId:n}){const o=e.explore[n],{loading:a,tableResult:r,rawPrometheusResult:i,range:c}=o,d=i?[i]:[],h=(r?.length??!1)>0&&i?r:d;return{loading:h&&h.length>0?!1:a,tableResult:h,range:c}}const qn=(0,de.connect)(Jn,{});class _n extends t.PureComponent{constructor(n){super(n),this.onChangeResultsStyle=s=>{this.setState({resultsStyle:s})},this.renderLabel=()=>{const s=(0,u.css)({display:"flex",justifyContent:"space-between"}),o=j.zN.map(a=>({value:a,label:a[0].toUpperCase()+a.slice(1).replace(/_/," ")}));return t.createElement("div",{className:s},this.state.resultsStyle===C.TABLE_RESULTS_STYLE.raw?"Raw":"Table",t.createElement(Ye.S,{onClick:()=>{const a={state:this.state.resultsStyle===C.TABLE_RESULTS_STYLE.table?C.TABLE_RESULTS_STYLE.raw:C.TABLE_RESULTS_STYLE.table};(0,P.ff)("grafana_explore_prometheus_instant_query_ui_toggle_clicked",a)},size:"sm",options:o,value:this.state?.resultsStyle,onChange:this.onChangeResultsStyle}))},n.showRawPrometheus&&(this.state={resultsStyle:C.TABLE_RESULTS_STYLE.raw})}getMainFrame(n){return n?.find(s=>s.meta?.custom?.parentRowIndex===void 0)||n?.[0]}getTableHeight(){const{tableResult:n}=this.props,s=this.getMainFrame(n);return!s||s.length===0?200:Math.max(Math.min(600,s.length*35)+35)}render(){const{loading:n,onCellFilterAdded:s,tableResult:o,width:a,splitOpenFn:r,range:i,ariaLabel:c,timeZone:d}=this.props,h=this.getTableHeight(),p=a-Ie.vc.theme.panelPadding*2-es.QO;let m=o;if(m?.length){m=(0,Ke.SM)({data:m,timeZone:d,theme:Ie.vc.theme2,replaceVariables:E=>E,fieldConfig:{defaults:{},overrides:[]}});for(const E of m)for(const x of E.fields)x.getLinks=b=>(0,Xe.a)({field:x,rowIndex:b.valueRowIndex,splitOpenFn:r,range:i,dataFrame:E})}const g=this.getMainFrame(m),y=m?.filter(E=>E.meta?.custom?.parentRowIndex!==void 0),f=this.state?.resultsStyle!==void 0?this.renderLabel():"Table",v=!this.state?.resultsStyle||this.state?.resultsStyle===C.TABLE_RESULTS_STYLE.table;return t.createElement(pe.U,{label:f,loading:n,isOpen:!0},g?.length&&t.createElement(t.Fragment,null,v&&t.createElement(_t.i,{ariaLabel:c,data:g,subData:y,width:p,height:h,onCellFilterAdded:s}),this.state?.resultsStyle===C.TABLE_RESULTS_STYLE.raw&&t.createElement(Xn,{tableResult:g})),!g?.length&&t.createElement(lt,{metaItems:[{value:"0 series returned"}]}))}}const ea=qn(_n),ta=e=>{const{queryError:n}=e,s=!!n,o=s?100:10,a=n?"Query error":"Unknown error",r=n?.message||n?.data?.message||null;return t.createElement(bt,{in:s,duration:o},t.createElement(We.b,{severity:"error",title:a,topSpacing:2},r))};function sa(e){const n=(0,C.useSelector)(o=>o.explore[e.exploreId]?.queryResponse),s=n?.state===V.Gu.Error?n?.error:void 0;return s?.refId?null:t.createElement(ta,{queryError:s})}var he=l(13582),ne=l(51424),oa=l(97759),$e=l(53217),rs=l(14747),na=l(97379),ht=l(659),gt=l(3153);function aa(e,{exploreId:n}){const s=e.explore,{datasourceInstance:o}=s[n];return{exploreId:n,datasourceInstance:o}}const ra={changeDatasource:Mt.zU,deleteHistoryItem:he.NV,commentHistoryItem:he.Ff,starHistoryItem:he.ev,setQueries:A.KO},ia=(0,de.connect)(aa,ra),la=e=>{const n="240px",s="170px",o=e.colors.background.secondary;return{queryCard:u.css`
      display: flex;
      flex-direction: column;
      border: 1px solid ${e.colors.border.weak};
      margin: ${e.spacing(1)} 0;
      background-color: ${o};
      border-radius: ${e.shape.borderRadius(1)};
      .starred {
        color: ${e.v1.palette.orange};
      }
    `,cardRow:u.css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${e.spacing(1)};
      border-bottom: none;
      :first-of-type {
        border-bottom: 1px solid ${e.colors.border.weak};
        padding: ${e.spacing(.5,1)};
      }
      img {
        height: ${e.typography.fontSize}px;
        max-width: ${e.typography.fontSize}px;
        margin-right: ${e.spacing(1)};
      }
    `,datasourceContainer:u.css`
      display: flex;
      align-items: center;
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightMedium};
    `,queryActionButtons:u.css`
      max-width: ${s};
      display: flex;
      justify-content: flex-end;
      font-size: ${e.typography.size.base};
      button {
        margin-left: ${e.spacing(1)};
      }
    `,queryContainer:u.css`
      font-weight: ${e.typography.fontWeightMedium};
      width: calc(100% - ${n});
    `,queryRow:u.css`
      border-top: 1px solid ${e.colors.border.weak};
      word-break: break-all;
      padding: 4px 2px;
      :first-child {
        border-top: none;
        padding: 0 0 4px 0;
      }
    `,updateCommentContainer:u.css`
      width: calc(100% + ${n});
      margin-top: ${e.spacing(1)};
    `,comment:u.css`
      overflow-wrap: break-word;
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightRegular};
      margin-top: ${e.spacing(.5)};
    `,commentButtonRow:u.css`
      > * {
        margin-right: ${e.spacing(1)};
      }
    `,textArea:u.css`
      width: 100%;
    `,runButton:u.css`
      max-width: ${s};
      display: flex;
      justify-content: flex-end;
      button {
        height: auto;
        padding: ${e.spacing(.5,2)};
        line-height: 1.4;
        span {
          white-space: normal !important;
        }
      }
    `}};function ca(e){const{query:n,dsImg:s,isRemoved:o,commentHistoryItem:a,starHistoryItem:r,deleteHistoryItem:i,changeDatasource:c,exploreId:d,datasourceInstance:h,setQueries:p}=e,[m,g]=(0,t.useState)(!1),[y,f]=(0,t.useState)(n.comment),[v,E]=(0,t.useState)(void 0);(0,t.useEffect)(()=>{(async()=>{const O=await(0,Fe.F)().get(n.datasourceUid);E(O)})()},[n.datasourceUid]);const x=(0,z.wW)(la),b=async()=>{const F=n.queries,O=n.datasourceUid!==h?.uid;O&&await c(d,n.datasourceUid,{importQueries:!0}),p(d,F),(0,P.ff)("grafana_explore_query_history_run",{queryHistoryEnabled:N.v.queryHistoryEnabled,differentDataSource:O})},S=()=>{const F=[...n.queries.map(ce=>ce.datasource?.type||"unknown")];(0,P.ff)("grafana_explore_query_history_copy_query",{datasources:F,mixed:Boolean(v?.meta.mixed)});const O=n.queries.map(ce=>(0,ne.OH)(ce,v)).join(`
`);(0,ge.n9)(O),(0,gt.WI)((0,ht.$l)((0,U.AT)("Query copied to clipboard")))},w=async()=>{const F=(0,ne.t2)(n);await(0,Dt.L)(F)},R=()=>{const F=O=>{i(O),(0,gt.WI)((0,ht.$l)((0,U.AT)("Query deleted"))),(0,P.ff)("grafana_explore_query_history_deleted",{queryHistoryEnabled:N.v.queryHistoryEnabled})};n.starred?tt.Z.publish(new st.VJ({title:"Delete",text:"Are you sure you want to permanently delete your starred query?",yesText:"Delete",icon:"trash-alt",onConfirm:()=>F(n.id)})):F(n.id)},M=()=>{r(n.id,!n.starred),(0,P.ff)("grafana_explore_query_history_starred",{queryHistoryEnabled:N.v.queryHistoryEnabled,newValue:!n.starred})},W=()=>g(!m),X=()=>{a(n.id,y),g(!1),(0,P.ff)("grafana_explore_query_history_commented",{queryHistoryEnabled:N.v.queryHistoryEnabled})},L=()=>{g(!1),f(n.comment)},I=F=>{F.key==="Enter"&&(F.shiftKey||F.ctrlKey)&&X(),F.key==="Escape"&&L()},H=t.createElement("div",{className:x.updateCommentContainer,"aria-label":y?"Update comment form":"Add comment form"},t.createElement(na.K,{onKeyDown:I,value:y,placeholder:y?void 0:"An optional description of what the query does.",onChange:F=>f(F.currentTarget.value),className:x.textArea}),t.createElement("div",{className:x.commentButtonRow},t.createElement(B.zx,{onClick:X,"aria-label":"Submit button"},"Save comment"),t.createElement(B.zx,{variant:"secondary",onClick:L},"Cancel"))),te=t.createElement("div",{className:x.queryActionButtons},t.createElement(ze.h,{name:"comment-alt",onClick:W,title:n.comment?.length>0?"Edit comment":"Add comment"}),t.createElement(ze.h,{name:"copy",onClick:S,title:"Copy query to clipboard"}),!o&&t.createElement(ze.h,{name:"share-alt",onClick:w,title:"Copy shortened link to clipboard"}),t.createElement(ze.h,{name:"trash-alt",title:"Delete query",onClick:R}),t.createElement(ze.h,{name:n.starred?"favorite":"star",iconType:n.starred?"mono":"default",onClick:M,title:n.starred?"Unstar query":"Star query"}));return t.createElement("div",{className:x.queryCard},t.createElement("div",{className:x.cardRow},t.createElement("div",{className:x.datasourceContainer},t.createElement("img",{src:s,"aria-label":"Data source icon"}),t.createElement("div",{"aria-label":"Data source name"},o?"Data source does not exist anymore":n.datasourceName)),te),t.createElement("div",{className:(0,u.cx)(x.cardRow)},t.createElement("div",{className:x.queryContainer},n.queries.map((F,O)=>{const ce=(0,ne.OH)(F,v);return t.createElement("div",{"aria-label":"Query text",key:`${F}-${O}`,className:x.queryRow},ce)}),!m&&n.comment&&t.createElement("div",{"aria-label":"Query comment",className:x.comment},n.comment),m&&H),!m&&t.createElement("div",{className:x.runButton},t.createElement(B.zx,{variant:"secondary",onClick:b,disabled:o},h?.uid===n.datasourceUid?"Run query":"Switch data source and run query"))))}const is=ia(ca),da=(e,n)=>{const s=e.isLight?e.v1.palette.gray5:e.v1.palette.dark4;return{container:u.css`
      display: flex;
    `,labelSlider:u.css`
      font-size: ${e.typography.bodySmall.fontSize};
      &:last-of-type {
        margin-top: ${e.spacing(3)};
      }
      &:first-of-type {
        font-weight: ${e.typography.fontWeightMedium};
        margin-bottom: ${e.spacing(2)};
      }
    `,containerContent:u.css`
      /* 134px is based on the width of the Query history tabs bar, so the content is aligned to right side of the tab */
      width: calc(100% - 134px);
    `,containerSlider:u.css`
      width: 129px;
      margin-right: ${e.spacing(1)};
    `,fixedSlider:u.css`
      position: fixed;
    `,slider:u.css`
      bottom: 10px;
      height: ${n-180}px;
      width: 129px;
      padding: ${e.spacing(1)} 0;
    `,selectors:u.css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `,filterInput:u.css`
      margin-bottom: ${e.spacing(1)};
    `,multiselect:u.css`
      width: 100%;
      margin-bottom: ${e.spacing(1)};
      .gf-form-select-box__multi-value {
        background-color: ${s};
        padding: ${e.spacing(.25,.5,.25,1)};
        border-radius: ${e.shape.borderRadius(1)};
      }
    `,sort:u.css`
      width: 170px;
    `,sessionName:u.css`
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: ${e.spacing(3)};
      h4 {
        margin: 0 10px 0 0;
      }
    `,heading:u.css`
      font-size: ${e.typography.h4.fontSize};
      margin: ${e.spacing(2,.25,1,.25)};
    `,footer:u.css`
      height: 60px;
      margin: ${e.spacing(3)} auto;
      display: flex;
      justify-content: center;
      font-weight: ${e.typography.fontWeightLight};
      font-size: ${e.typography.bodySmall.fontSize};
      a {
        font-weight: ${e.typography.fontWeightMedium};
        margin-left: ${e.spacing(.25)};
      }
    `,queries:u.css`
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightRegular};
      margin-left: ${e.spacing(.5)};
    `}};function ua(e){const{queries:n,totalQueries:s,loading:o,richHistorySearchFilters:a,updateFilters:r,clearRichHistoryResults:i,loadMoreRichHistory:c,richHistorySettings:d,exploreId:h,height:p,activeDatasourceInstance:m}=e,g=(0,z.wW)((0,t.useCallback)(x=>da(x,p),[p])),y=(0,ne.DR)();if((0,t.useEffect)(()=>{const x=!d.activeDatasourceOnly&&d.lastUsedDatasourceFilters?d.lastUsedDatasourceFilters:[m],b={search:"",sortOrder:ne.As.Descending,datasourceFilters:x,from:0,to:d.retentionPeriod,starred:!1};return r(b),()=>{i()}},[]),!a)return t.createElement("span",null,"Loading...");const f=(0,ne.k4)(n,a.sortOrder),v=cs(),E=n.length&&n.length!==s;return t.createElement("div",{className:g.container},t.createElement("div",{className:g.containerSlider},t.createElement("div",{className:g.fixedSlider},t.createElement("div",{className:g.labelSlider},"Filter history"),t.createElement("div",{className:g.labelSlider},(0,ne.bQ)(a.from)),t.createElement("div",{className:g.slider},t.createElement(oa.U,{tooltipAlwaysVisible:!1,min:0,max:d.retentionPeriod,value:[a.from,a.to],orientation:"vertical",formatTooltipResult:ne.bQ,reverse:!0,onAfterChange:x=>{r({from:x[0],to:x[1]})}})),t.createElement("div",{className:g.labelSlider},(0,ne.bQ)(a.to)))),t.createElement("div",{className:g.containerContent},t.createElement("div",{className:g.selectors},!d.activeDatasourceOnly&&t.createElement($e.NU,{className:g.multiselect,options:y.map(x=>({value:x.name,label:x.name})),value:a.datasourceFilters,placeholder:"Filter queries for data sources(s)","aria-label":"Filter queries for data sources(s)",onChange:x=>{r({datasourceFilters:x.map(b=>b.value)})}}),t.createElement("div",{className:g.filterInput},t.createElement(rs.H,{placeholder:"Search queries",value:a.search,onChange:x=>r({search:x})})),t.createElement("div",{"aria-label":"Sort queries",className:g.sort},t.createElement($e.Ph,{value:v.filter(x=>x.value===a.sortOrder),options:v,placeholder:"Sort queries by",onChange:x=>r({sortOrder:x.value})}))),o&&t.createElement("span",null,"Loading results..."),!o&&Object.keys(f).map(x=>t.createElement("div",{key:x},t.createElement("div",{className:g.heading},x," ",t.createElement("span",{className:g.queries},E?"Displaying ":"",f[x].length," queries")),f[x].map(b=>{const S=y.findIndex(w=>w.uid===b.datasourceUid);return t.createElement(is,{query:b,key:b.id,exploreId:h,dsImg:S===-1?"public/img/icn-datasource.svg":y[S].imgUrl,isRemoved:S===-1})}))),E?t.createElement("div",null,"Showing ",n.length," of ",s," ",t.createElement(B.zx,{onClick:c},"Load more")):null,t.createElement("div",{className:g.footer},N.v.queryHistoryEnabled?"":"The history is local to your browser and is not shared with others.")))}var pa=l(66719);const ha=e=>({container:u.css`
      font-size: ${e.typography.bodySmall.fontSize};
    `,spaceBetween:u.css`
      margin-bottom: ${e.spacing(3)};
    `,input:u.css`
      max-width: 200px;
    `,bold:u.css`
      font-weight: ${e.typography.fontWeightBold};
    `,bottomMargin:u.css`
      margin-bottom: ${e.spacing(1)};
    `}),ls=[{value:2,label:"2 days"},{value:5,label:"5 days"},{value:7,label:"1 week"},{value:14,label:"2 weeks"}];function ga(e){const{retentionPeriod:n,starredTabAsFirstTab:s,activeDatasourceOnly:o,onChangeRetentionPeriod:a,toggleStarredTabAsFirstTab:r,toggleactiveDatasourceOnly:i,deleteRichHistory:c}=e,d=(0,z.wW)(ha),h=ls.find(m=>m.value===n),p=()=>{tt.Z.publish(new st.VJ({title:"Delete",text:"Are you sure you want to permanently delete your query history?",yesText:"Delete",icon:"trash-alt",onConfirm:()=>{c(),(0,gt.WI)((0,ht.$l)((0,U.AT)("Query history deleted")))}}))};return t.createElement("div",{className:d.container},(0,De.X)().changeRetention?t.createElement(ts.g,{label:"History time span",description:`Select the period of time for which Grafana will save your query history. Up to ${pa.H6} entries will be stored.`},t.createElement("div",{className:d.input},t.createElement($e.Ph,{value:h,options:ls,onChange:a}))):t.createElement(We.b,{severity:"info",title:"History time span"},"Grafana will keep entries up to ",h?.label,"."),t.createElement(fe._,{label:"Change the default active tab from \u201CQuery history\u201D to \u201CStarred\u201D",className:d.spaceBetween},t.createElement(Ce.x,{id:"explore-query-history-settings-default-active-tab",value:s,onChange:r})),(0,De.X)().onlyActiveDataSource&&t.createElement(fe._,{label:"Only show queries for data source currently active in Explore",className:d.spaceBetween},t.createElement(Ce.x,{id:"explore-query-history-settings-data-source-behavior",value:o,onChange:i})),(0,De.X)().clearHistory&&t.createElement("div",null,t.createElement("div",{className:d.bold},"Clear query history"),t.createElement("div",{className:d.bottomMargin},"Delete all of your query history, permanently."),t.createElement(B.zx,{variant:"destructive",onClick:p},"Clear query history")))}const ma=e=>{const n=e.isLight?e.v1.palette.gray5:e.v1.palette.dark4;return{container:u.css`
      display: flex;
    `,containerContent:u.css`
      width: 100%;
    `,selectors:u.css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `,multiselect:u.css`
      width: 100%;
      margin-bottom: ${e.spacing(1)};
      .gf-form-select-box__multi-value {
        background-color: ${n};
        padding: ${e.spacing(.25,.5,.25,1)};
        border-radius: ${e.shape.borderRadius(1)};
      }
    `,filterInput:u.css`
      margin-bottom: ${e.spacing(1)};
    `,sort:u.css`
      width: 170px;
    `,footer:u.css`
      height: 60px;
      margin-top: ${e.spacing(3)};
      display: flex;
      justify-content: center;
      font-weight: ${e.typography.fontWeightLight};
      font-size: ${e.typography.bodySmall.fontSize};
      a {
        font-weight: ${e.typography.fontWeightMedium};
        margin-left: ${e.spacing(.25)};
      }
    `}};function fa(e){const{updateFilters:n,clearRichHistoryResults:s,loadMoreRichHistory:o,activeDatasourceInstance:a,richHistorySettings:r,queries:i,totalQueries:c,loading:d,richHistorySearchFilters:h,exploreId:p}=e,m=(0,z.wW)(ma),g=(0,ne.DR)();if((0,t.useEffect)(()=>{const f=r.activeDatasourceOnly&&r.lastUsedDatasourceFilters?r.lastUsedDatasourceFilters:[a],v={search:"",sortOrder:ne.As.Descending,datasourceFilters:f,from:0,to:r.retentionPeriod,starred:!0};return n(v),()=>{s()}},[]),!h)return t.createElement("span",null,"Loading...");const y=cs();return t.createElement("div",{className:m.container},t.createElement("div",{className:m.containerContent},t.createElement("div",{className:m.selectors},!r.activeDatasourceOnly&&t.createElement($e.NU,{className:m.multiselect,options:g.map(f=>({value:f.name,label:f.name})),value:h.datasourceFilters,placeholder:"Filter queries for data sources(s)","aria-label":"Filter queries for data sources(s)",onChange:f=>{n({datasourceFilters:f.map(v=>v.value)})}}),t.createElement("div",{className:m.filterInput},t.createElement(rs.H,{placeholder:"Search queries",value:h.search,onChange:f=>n({search:f})})),t.createElement("div",{"aria-label":"Sort queries",className:m.sort},t.createElement($e.Ph,{value:y.filter(f=>f.value===h.sortOrder),options:y,placeholder:"Sort queries by",onChange:f=>n({sortOrder:f.value})}))),d&&t.createElement("span",null,"Loading results..."),!d&&i.map(f=>{const v=g.findIndex(E=>E.uid===f.datasourceUid);return t.createElement(is,{query:f,key:f.id,exploreId:p,dsImg:v===-1?"public/img/icn-datasource.svg":g[v].imgUrl,isRemoved:v===-1})}),i.length&&i.length!==c?t.createElement("div",null,"Showing ",i.length," of ",c," ",t.createElement(B.zx,{onClick:o},"Load more")):null,t.createElement("div",{className:m.footer},N.v.queryHistoryEnabled?"":"The history is local to your browser and is not shared with others.")))}var mt=(e=>(e.RichHistory="Query history",e.Starred="Starred",e.Settings="Settings",e))(mt||{});const cs=()=>[{label:"Newest first",value:ne.As.Descending},{label:"Oldest first",value:ne.As.Ascending},{label:"Data source A-Z",value:ne.As.DatasourceAZ},{label:"Data source Z-A",value:ne.As.DatasourceZA}].filter(e=>(0,De.X)().availableFilters.includes(e.value));class ya extends t.PureComponent{constructor(){super(...arguments),this.state={loading:!1},this.updateSettings=n=>{this.props.updateHistorySettings({...this.props.richHistorySettings,...n})},this.updateFilters=n=>{const s={...this.props.richHistorySearchFilters,...n,page:1};this.props.updateHistorySearchFilters(this.props.exploreId,s),this.loadRichHistory()},this.clearResults=()=>{this.props.clearRichHistoryResults(this.props.exploreId)},this.loadRichHistory=(0,k.debounce)(()=>{this.props.loadRichHistory(this.props.exploreId),this.setState({loading:!0})},300),this.onChangeRetentionPeriod=n=>{n.value!==void 0&&this.updateSettings({retentionPeriod:n.value})},this.toggleStarredTabAsFirstTab=()=>this.updateSettings({starredTabAsFirstTab:!this.props.richHistorySettings.starredTabAsFirstTab}),this.toggleActiveDatasourceOnly=()=>this.updateSettings({activeDatasourceOnly:!this.props.richHistorySettings.activeDatasourceOnly})}componentDidUpdate(n,s,o){n.richHistory!==this.props.richHistory&&this.setState({loading:!1})}render(){const{richHistory:n,richHistoryTotal:s,height:o,exploreId:a,deleteRichHistory:r,onClose:i,firstTab:c,activeDatasourceInstance:d}=this.props,{loading:h}=this.state,p={label:"Query history",value:"Query history",content:t.createElement(ua,{queries:n,totalQueries:s||0,loading:h,updateFilters:this.updateFilters,clearRichHistoryResults:()=>this.props.clearRichHistoryResults(this.props.exploreId),loadMoreRichHistory:()=>this.props.loadMoreRichHistory(this.props.exploreId),activeDatasourceInstance:d,richHistorySettings:this.props.richHistorySettings,richHistorySearchFilters:this.props.richHistorySearchFilters,exploreId:a,height:o}),icon:"history"},m={label:"Starred",value:"Starred",content:t.createElement(fa,{queries:n,totalQueries:s||0,loading:h,activeDatasourceInstance:d,updateFilters:this.updateFilters,clearRichHistoryResults:()=>this.props.clearRichHistoryResults(this.props.exploreId),loadMoreRichHistory:()=>this.props.loadMoreRichHistory(this.props.exploreId),richHistorySettings:this.props.richHistorySettings,richHistorySearchFilters:this.props.richHistorySearchFilters,exploreId:a}),icon:"star"},g={label:"Settings",value:"Settings",content:t.createElement(ga,{retentionPeriod:this.props.richHistorySettings.retentionPeriod,starredTabAsFirstTab:this.props.richHistorySettings.starredTabAsFirstTab,activeDatasourceOnly:this.props.richHistorySettings.activeDatasourceOnly,onChangeRetentionPeriod:this.onChangeRetentionPeriod,toggleStarredTabAsFirstTab:this.toggleStarredTabAsFirstTab,toggleactiveDatasourceOnly:this.toggleActiveDatasourceOnly,deleteRichHistory:r}),icon:"sliders-v-alt"};let y=[p,m,g];return t.createElement(wt.W,{tabs:y,onClose:i,defaultTab:c,closeIconTooltip:"Close query history"})}}const va=(0,z.HE)(ya);function Ea(e,{exploreId:n}){const s=e.explore,o=s[n],a=o.richHistorySearchFilters,r=s.richHistorySettings,{datasourceInstance:i}=o,c=r?.starredTabAsFirstTab?mt.Starred:mt.RichHistory,{richHistory:d,richHistoryTotal:h}=o;return{richHistory:d,richHistoryTotal:h,firstTab:c,activeDatasourceInstance:i.name,richHistorySettings:r,richHistorySearchFilters:a}}const xa={initRichHistory:he.sO,loadRichHistory:he.TV,loadMoreRichHistory:he.io,clearRichHistoryResults:he.Cs,updateHistorySettings:he.ch,updateHistorySearchFilters:he.KZ,deleteRichHistory:he.ik},Sa=(0,de.connect)(Ea,xa);function ba(e){const n=(0,z.l4)(),[s,o]=(0,t.useState)(n.components.horizontalDrawer.defaultHeight),{richHistory:a,richHistoryTotal:r,width:i,firstTab:c,activeDatasourceInstance:d,exploreId:h,deleteRichHistory:p,initRichHistory:m,loadRichHistory:g,loadMoreRichHistory:y,clearRichHistoryResults:f,richHistorySettings:v,updateHistorySettings:E,richHistorySearchFilters:x,updateHistorySearchFilters:b,onClose:S}=e;return(0,t.useEffect)(()=>{m(),(0,P.ff)("grafana_explore_query_history_opened",{queryHistoryEnabled:N.v.queryHistoryEnabled})},[m]),v?t.createElement(It,{width:i,onResize:(w,R,M)=>{o(Number(M.style.height.slice(0,-2)))}},t.createElement(va,{richHistory:a,richHistoryTotal:r,firstTab:c,activeDatasourceInstance:d,exploreId:h,onClose:S,height:s,deleteRichHistory:p,richHistorySettings:v,richHistorySearchFilters:x,updateHistorySettings:E,updateHistorySearchFilters:b,loadRichHistory:g,loadMoreRichHistory:y,clearRichHistoryResults:f})):t.createElement("span",null,"Loading...")}const wa=Sa(ba),Ca=e=>({containerMargin:u.css`
      margin-top: ${e.spacing(2)};
    `});function Ra(e){const n=(0,z.l4)(),s=Ca(n);return t.createElement("div",{className:s.containerMargin},t.createElement(Ut.Lh,null,!e.addQueryRowButtonHidden&&t.createElement(B.zx,{variant:"secondary","aria-label":"Add row button",onClick:e.onClickAddQueryRowButton,disabled:e.addQueryRowButtonDisabled,icon:"plus"},"Add query"),!e.richHistoryRowButtonHidden&&t.createElement(B.zx,{variant:"secondary","aria-label":"Rich history button",className:(0,u.cx)({["explore-active-button"]:e.richHistoryButtonActive}),onClick:e.onClickRichHistoryButton,icon:"history"},"Query history"),t.createElement(B.zx,{variant:"secondary","aria-label":"Query inspector button",className:(0,u.cx)({["explore-active-button"]:e.queryInspectorButtonActive}),onClick:e.onClickQueryInspectorButton,icon:"info-circle"},"Inspector")))}function Ta(e,{exploreId:n}){const o=e.explore[n],{loading:a,tableResult:r,range:i}=o;return{loading:r&&r.length>0?!1:a,tableResult:r,range:i}}const La=(0,de.connect)(Ta,{});class za extends t.PureComponent{getMainFrame(n){return n?.find(s=>s.meta?.custom?.parentRowIndex===void 0)||n?.[0]}getTableHeight(){const{tableResult:n}=this.props,s=this.getMainFrame(n);return!s||s.length===0?200:Math.max(Math.min(600,s.length*35)+35)}render(){const{loading:n,onCellFilterAdded:s,tableResult:o,width:a,splitOpenFn:r,range:i,ariaLabel:c,timeZone:d}=this.props,h=this.getTableHeight(),p=a-Ie.vc.theme.panelPadding*2-es.QO;let m=o;if(m?.length){m=(0,Ke.SM)({data:m,timeZone:d,theme:Ie.vc.theme2,replaceVariables:f=>f,fieldConfig:{defaults:{},overrides:[]}});for(const f of m)for(const v of f.fields)v.getLinks=E=>(0,Xe.a)({field:v,rowIndex:E.valueRowIndex,splitOpenFn:r,range:i,dataFrame:f})}const g=this.getMainFrame(m),y=m?.filter(f=>f.meta?.custom?.parentRowIndex!==void 0);return t.createElement(pe.U,{label:"Table",loading:n,isOpen:!0},g?.length?t.createElement(_t.i,{ariaLabel:c,data:g,subData:y,width:p,height:h,maxHeight:600,onCellFilterAdded:s}):t.createElement(lt,{metaItems:[{value:"0 series returned"}]}))}}const Ia=La(za);var Fa=l(94619),Da=l(72169),Na=l(93183),Pa=l(75151),Ha=l(335);function $a(e){const n=e.dataFrames[0],{dataFrames:s,splitOpenFn:o,exploreId:a,scrollElement:r,topOfViewRef:i,queryResponse:c}=e,d=(0,t.useMemo)(()=>(0,Ha.N)(n),[n]),{search:h,setSearch:p,spanFindMatches:m}=(0,Pa.R)(d?.spans),[g,y]=(0,t.useState)(""),[f,v]=(0,t.useState)(""),E=(0,C.useSelector)(b=>b.explore[e.exploreId]?.datasourceInstance??void 0),x=E?E?.type:"unknown";return d?t.createElement(pe.U,{label:"Trace View",isOpen:!0},t.createElement(Da.Z,{navigable:!0,searchValue:h,setSearch:p,spanFindMatches:m,searchBarSuffix:f,setSearchBarSuffix:v,focusedSpanIdForSearch:g,setFocusedSpanIdForSearch:y,datasourceType:x}),t.createElement(Fa.m,{exploreId:a,dataFrames:s,splitOpenFn:o,scrollElement:r,traceProp:d,spanFindMatches:m,search:h,focusedSpanIdForSearch:g,queryResponse:c,datasource:E,topOfViewRef:i,topOfViewRefType:Na.l4.Explore})):null}var ft=l(93713);const Ma=e=>({exploreMain:u.css`
      label: exploreMain;
      // Is needed for some transition animations to work.
      position: relative;
      margin-top: 21px;
    `,button:u.css`
      label: button;
      margin: 1em 4px 0 0;
    `,queryContainer:u.css`
      label: queryContainer;
      // Need to override normal css class and don't want to count on ordering of the classes in html.
      height: auto !important;
      flex: unset !important;
      display: unset !important;
      padding: ${e.spacing(1)};
    `,exploreContainer:u.css`
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      padding: ${e.spacing(2)};
      padding-top: 0;
    `});var Oa=(e=>(e[e.RichHistory=0]="RichHistory",e[e.QueryInspector=1]="QueryInspector",e))(Oa||{});class Aa extends t.PureComponent{constructor(n){super(n),this.topOfViewRef=(0,t.createRef)(),this.onChangeTime=s=>{const{updateTimeRange:o,exploreId:a}=this.props;o({exploreId:a,rawRange:s})},this.onClickExample=s=>{this.props.setQueries(this.props.exploreId,[s])},this.onCellFilterAdded=s=>{const{value:o,key:a,operator:r}=s;r===St.PT&&this.onClickFilterLabel(a,o),r===St.tE&&this.onClickFilterOutLabel(a,o)},this.onClickFilterLabel=(s,o)=>{this.onModifyQueries({type:"ADD_FILTER",options:{key:s,value:o}})},this.onClickFilterOutLabel=(s,o)=>{this.onModifyQueries({type:"ADD_FILTER_OUT",options:{key:s,value:o}})},this.onClickAddQueryRowButton=()=>{const{exploreId:s,queryKeys:o}=this.props;this.props.addQueryRow(s,o.length)},this.onMakeAbsoluteTime=()=>{const{makeAbsoluteTime:s}=this.props;s()},this.onModifyQueries=s=>{const o=async(a,r)=>{const{datasource:i}=a;if(i==null)return a;const c=await(0,Fe.F)().get(i);return c.modifyQuery?c.modifyQuery(a,r):a};this.props.modifyQueries(this.props.exploreId,s,o)},this.onResize=s=>{this.props.changeSize(this.props.exploreId,s)},this.onStartScanning=()=>{this.props.scanStart(this.props.exploreId)},this.onStopScanning=()=>{this.props.scanStopAction({exploreId:this.props.exploreId})},this.onUpdateTimeRange=s=>{const{exploreId:o,updateTimeRange:a}=this.props;a({exploreId:o,absoluteRange:s})},this.toggleShowRichHistory=()=>{this.setState(s=>({openDrawer:s.openDrawer===0?void 0:0}))},this.toggleShowQueryInspector=()=>{this.setState(s=>({openDrawer:s.openDrawer===1?void 0:1}))},this.onSplitOpen=s=>async o=>{if(this.props.splitOpen(o),o&&this.props.datasourceInstance){const a=(await(0,Fe.F)().get(o.datasourceUid)).type,r=this.props.datasourceInstance.uid===Ae.D?(0,k.get)(this.props.queries,"0.datasource.type"):this.props.datasourceInstance.type,i={origin:"panel",panelType:s,source:r,target:a,exploreId:this.props.exploreId};(0,P.ff)("grafana_explore_split_view_opened",i)}},this.memoizedGetNodeGraphDataFrames=(0,Ee.Z)(vs.Ee),this.state={openDrawer:void 0},this.graphEventBus=n.eventBus.newScopedBus("graph",{onlyLocal:!1}),this.logsEventBus=n.eventBus.newScopedBus("logs",{onlyLocal:!1})}componentDidMount(){this.absoluteTimeUnsubsciber=tt.Z.subscribe(st.QI,this.onMakeAbsoluteTime)}componentWillUnmount(){this.absoluteTimeUnsubsciber?.unsubscribe()}renderEmptyState(n){return t.createElement("div",{className:(0,u.cx)(n)},t.createElement(wn,null))}renderNoData(){return t.createElement(xn,null)}renderCompactUrlWarning(){return t.createElement(bt,{in:!0,duration:100},t.createElement(We.b,{severity:"warning",title:"Compact URL Deprecation Notice",topSpacing:2},"The URL that brought you here was a compact URL - this format will soon be deprecated. Please replace the URL previously saved with the URL available now."))}renderGraphPanel(n){const{graphResult:s,absoluteRange:o,timeZone:a,queryResponse:r,loading:i,showFlameGraph:c}=this.props;return t.createElement(zo,{loading:i,data:s,height:c?180:400,width:n,absoluteRange:o,timeZone:a,onChangeTime:this.onUpdateTimeRange,annotations:r.annotations,splitOpenFn:this.onSplitOpen("graph"),loadingState:r.state,eventBus:this.graphEventBus})}renderTablePanel(n){const{exploreId:s,timeZone:o}=this.props;return t.createElement(Ia,{ariaLabel:Oe.wl.pages.Explore.General.table,width:n,exploreId:s,onCellFilterAdded:this.onCellFilterAdded,timeZone:o,splitOpenFn:this.onSplitOpen("table")})}renderRawPrometheus(n){const{exploreId:s,datasourceInstance:o,timeZone:a}=this.props;return t.createElement(ea,{showRawPrometheus:!0,ariaLabel:Oe.wl.pages.Explore.General.table,width:n,exploreId:s,onCellFilterAdded:o?.modifyQuery?this.onCellFilterAdded:void 0,timeZone:a,splitOpenFn:this.onSplitOpen("table")})}renderLogsPanel(n){const{exploreId:s,syncedTimes:o,theme:a,queryResponse:r}=this.props,i=parseInt(a.spacing(2).slice(0,-2),10);return t.createElement(yn,{exploreId:s,loadingState:r.state,syncedTimes:o,width:n-i,onClickFilterLabel:this.onClickFilterLabel,onClickFilterOutLabel:this.onClickFilterOutLabel,onStartScanning:this.onStartScanning,onStopScanning:this.onStopScanning,scrollElement:this.scrollElement,eventBus:this.logsEventBus,splitOpenFn:this.onSplitOpen("logs")})}renderLogsSamplePanel(){const{logsSample:n,timeZone:s,setSupplementaryQueryEnabled:o,exploreId:a,datasourceInstance:r,queries:i}=this.props;return t.createElement(vn,{queryResponse:n.data,timeZone:s,enabled:n.enabled,queries:i,datasourceInstance:r,splitOpen:this.onSplitOpen("logsSample"),setLogsSampleEnabled:c=>o(a,c,D.v8.LogsSample)})}renderNodeGraphPanel(){const{exploreId:n,showTrace:s,queryResponse:o,datasourceInstance:a}=this.props,r=a?a?.type:"unknown";return t.createElement(Fn,{dataFrames:this.memoizedGetNodeGraphDataFrames(o.series),exploreId:n,withTraceView:s,datasourceType:r,splitOpenFn:this.onSplitOpen("nodeGraph")})}renderFlameGraphPanel(){const{queryResponse:n}=this.props;return t.createElement(ao,{dataFrames:n.flameGraphFrames})}renderTraceViewPanel(){const{queryResponse:n,exploreId:s}=this.props,o=n.series.filter(a=>a.meta?.preferredVisualisationType==="trace");return o.length&&t.createElement($a,{exploreId:s,dataFrames:o,splitOpenFn:this.onSplitOpen("traceView"),scrollElement:this.scrollElement,queryResponse:n,topOfViewRef:this.topOfViewRef})}render(){const{datasourceInstance:n,datasourceMissing:s,exploreId:o,graphResult:a,queryResponse:r,isLive:i,theme:c,showMetrics:d,showTable:h,showRawPrometheus:p,showLogs:m,showTrace:g,showNodeGraph:y,showFlameGraph:f,timeZone:v,isFromCompactUrl:E,showLogsSample:x}=this.props,{openDrawer:b}=this.state,S=Ma(c),w=r&&r.state!==V.Gu.NotStarted,R=b===0,M=!(0,De.X)().queryHistoryAvailable,W=b===1,X=r.state===V.Gu.Done&&[r.logsFrames,r.graphFrames,r.nodeGraphFrames,r.flameGraphFrames,r.tableFrames,r.rawPrometheusFrames,r.traceFrames].every(L=>L.length===0);return t.createElement(Et.$,{testId:Oe.wl.pages.Explore.General.scrollView,autoHeightMin:"100%",scrollRefCallback:L=>this.scrollElement=L||void 0},t.createElement(oo,{exploreId:o,onChangeTime:this.onChangeTime,topOfViewRef:this.topOfViewRef}),E?this.renderCompactUrlWarning():null,s?this.renderEmptyState(S.exploreContainer):null,n&&t.createElement("div",{className:S.exploreContainer},t.createElement(xt.l,{className:S.queryContainer},t.createElement(Hn,{exploreId:o}),t.createElement(Ra,{addQueryRowButtonDisabled:i,addQueryRowButtonHidden:!1,richHistoryRowButtonHidden:M,richHistoryButtonActive:R,queryInspectorButtonActive:W,onClickAddQueryRowButton:this.onClickAddQueryRowButton,onClickRichHistoryButton:this.toggleShowRichHistory,onClickQueryInspectorButton:this.toggleShowQueryInspector}),t.createElement(sa,{exploreId:o})),t.createElement(fs.Z,{onResize:this.onResize,disableHeight:!0},({width:L})=>L===0?null:t.createElement("main",{className:(0,u.cx)(S.exploreMain),style:{width:L}},t.createElement(T.z4,null,w&&t.createElement(t.Fragment,null,d&&a&&t.createElement(T.z4,null,this.renderGraphPanel(L)),p&&t.createElement(T.z4,null,this.renderRawPrometheus(L)),h&&t.createElement(T.z4,null,this.renderTablePanel(L)),m&&t.createElement(T.z4,null,this.renderLogsPanel(L)),y&&t.createElement(T.z4,null,this.renderNodeGraphPanel()),f&&N.v.featureToggles.flameGraph&&t.createElement(T.z4,null,this.renderFlameGraphPanel()),g&&t.createElement(T.z4,null,this.renderTraceViewPanel()),N.v.featureToggles.logsSampleInExplore&&x&&t.createElement(T.z4,null,this.renderLogsSamplePanel()),X&&t.createElement(T.z4,null,this.renderNoData())),R&&t.createElement(wa,{width:L,exploreId:o,onClose:this.toggleShowRichHistory}),W&&t.createElement(Ws,{exploreId:o,width:L,onClose:this.toggleShowQueryInspector,timeZone:v}))))))}}function Ba(e,{exploreId:n}){const s=e.explore,{syncedTimes:o}=s,a=s[n],r=(0,Re.Z)(e.user),{datasourceInstance:i,datasourceMissing:c,queryKeys:d,queries:h,isLive:p,graphResult:m,tableResult:g,logsResult:y,showLogs:f,showMetrics:v,showTable:E,showTrace:x,absoluteRange:b,queryResponse:S,showNodeGraph:w,showFlameGraph:R,loading:M,isFromCompactUrl:W,showRawPrometheus:X,supplementaryQueries:L}=a,I=L[D.v8.LogsSample],H=!!(I.dataProvider!==void 0&&!y&&(m||g));return{datasourceInstance:i,datasourceMissing:c,queryKeys:d,queries:h,isLive:p,graphResult:m,logsResult:y??void 0,absoluteRange:b,queryResponse:S,syncedTimes:o,timeZone:r,showLogs:f,showMetrics:v,showTable:E,showTrace:x,showNodeGraph:w,showRawPrometheus:X,showFlameGraph:R,splitted:(0,Me.p)(e),loading:M,isFromCompactUrl:W||!1,logsSample:I,showLogsSample:H}}const Wa={changeSize:ft.qN,modifyQueries:A.sK,scanStart:A.EA,scanStopAction:A.P4,setQueries:A.KO,updateTimeRange:Se.cD,makeAbsoluteTime:Se.F9,addQueryRow:A.CS,splitOpen:Y.bW,setSupplementaryQueryEnabled:A.z0},ka=(0,de.connect)(Ba,Wa),Ua=(0,z.HE)(ka(Aa)),Qa=e=>({explore:u.css`
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      overflow: hidden;
      min-width: 600px;
      & + & {
        border-left: 1px dotted ${e.colors.border.medium};
      }
    `});class Va extends t.PureComponent{constructor(n){super(n),this.el=null,this.refreshExplore=s=>{const{exploreId:o,urlQuery:a}=this.props;a!==s&&a!==Y.IS[o]&&this.props.refreshExplore(o,a)},this.getRef=s=>{this.el=s},this.exploreEvents=new ms.F,this.state={openDrawer:void 0}}async componentDidMount(){const{initialized:n,exploreId:s,initialDatasource:o,initialQueries:a,initialRange:r,panelsState:i,orgId:c,isFromCompactUrl:d}=this.props,h=this.el?.offsetWidth??0;if(!n){let p,m;if((!a||a.length===0)&&o&&!(o===Ae.D||o.uid===Ae.D)){const{instance:v}=await(0,At.r_)(c,o);p=v.getRef()}let g=await(0,ge.Z8)(a,p);if(!(0,ge._o)(g).noneHaveDatasource&&!(0,ge._o)(g).allDatasourceSame)if(Ie.vc.featureToggles.exploreMixedDatasource)m=await(0,Be.ak)().get(Ae.D);else{const f=g.find(v=>v.datasource?.uid).datasource.uid;if(f){m=f;const v=await(0,Be.ak)().get(f),E=await(0,Be.ak)().get(o);await this.props.importQueries(s,g,E,v),await this.props.stateSave({replace:!0}),g=this.props.initialQueries}}d&&(0,P.ff)("grafana_explore_compact_notice"),this.props.initializeExplore(s,m||g[0]?.datasource||o,g,r,h,this.exploreEvents,i,d)}}componentWillUnmount(){this.exploreEvents.removeAllListeners()}componentDidUpdate(n){this.refreshExplore(n.urlQuery)}render(){const{theme:n,exploreId:s,initialized:o,eventBus:a}=this.props,r=Qa(n);return t.createElement("div",{className:r.explore,ref:this.getRef,"data-testid":Oe.wl.pages.Explore.General.container},o&&t.createElement(Ua,{exploreId:s,eventBus:a}))}}const Za=(0,Ee.Z)(ge.vP);function Ga(e,n){const s=(0,ge.J5)(n.urlQuery),o=(0,Re.Z)(e.user),a=(0,Re.i)(e.user),{datasource:r,queries:i,range:c,panelsState:d}=s||{},h=r||ee.Z.get((0,ge.I$)(e.user.orgId)),p=c?Za(c,o,a):(0,ge.OQ)(o,ge.UI,a);return{initialized:e.explore[n.exploreId]?.initialized,initialDatasource:h,initialQueries:i,initialRange:p,panelsState:d,orgId:e.user.orgId,isFromCompactUrl:s.isFromCompactUrl||!1}}const ja={initializeExplore:ft.CK,refreshExplore:ft.Om,importQueries:A.GJ,stateSave:Y.og},Ka=(0,de.connect)(Ga,ja),ds=(0,z.HE)(Ka(Va)),Ya={pageScrollbarWrapper:u.css`
    width: 100%;
    flex-grow: 1;
    min-height: 0;
    height: 100%;
    position: relative;
  `};function Xa(e){Ja();const n=(0,C.useDispatch)(),s=e.queryParams,{keybindings:o,chrome:a,config:r}=(0,ie.p)(),i=(0,le.q)("explore"),{get:c}=(0,_e.K)(),{warning:d}=(0,U.iG)(),h=(0,K.R9)(),p=(0,t.useRef)(h.eventBus.newScopedBus("explore",{onlyLocal:!1})),[m,g]=(0,t.useState)(.5),{width:y}=(0,$.Z)(),f=200,v=(0,C.useSelector)(S=>S.explore);(0,t.useEffect)(()=>{a.update({sectionNav:i.node})},[a,i]),(0,t.useEffect)(()=>{o.setupTimeRangeBindings(!1)},[o]),(0,t.useEffect)(()=>{r.featureToggles.correlations?c.execute():n((0,Y.CL)([]))},[]),(0,t.useEffect)(()=>{c.value?n((0,Y.CL)(c.value)):c.error&&(n((0,Y.CL)([])),d("Could not load correlations.","Correlations data could not be loaded, DataLinks may have partial data."))},[c.value,c.error,n,d]),(0,t.useEffect)(()=>{Y.IS.left=void 0,Y.IS.right=void 0;const S=se.E1.getSearchObject();return(S.from||S.to)&&se.E1.partial({from:void 0,to:void 0},!0),()=>{n((0,Y.WK)())}},[]);const E=S=>{const w=y/2,R=(0,k.inRange)(S,w-100,w+100);n(R?(0,Y.Sx)({largerExploreId:void 0}):(0,Y.Sx)({largerExploreId:S>w?j.Kd.right:j.Kd.left})),g(S/y)},x=Boolean(s.left)&&Boolean(s.right);let b=0;return x&&(!v.evenSplitPanes&&v.maxedExploreId?b=v.maxedExploreId===j.Kd.right?y-f:f:v.evenSplitPanes?b=Math.floor(y/2):m!==void 0&&(b=y*m)),t.createElement("div",{className:Ya.pageScrollbarWrapper},t.createElement(gs,{exploreIdLeft:j.Kd.left,exploreIdRight:j.Kd.right}),t.createElement(G.U,{splitOrientation:"vertical",paneSize:b,minSize:f,maxSize:f*-1,primary:"second",splitVisible:x,paneStyle:{overflow:"auto",display:"flex",flexDirection:"column"},onDragFinished:S=>{S&&E(S)}},t.createElement(T.z4,{style:"page"},t.createElement(ds,{exploreId:j.Kd.left,urlQuery:s.left,eventBus:p.current})),x&&t.createElement(T.z4,{style:"page"},t.createElement(ds,{exploreId:j.Kd.right,urlQuery:s.right,eventBus:p.current}))))}const Ja=()=>{const e=(0,le.q)("explore"),n=(0,C.useSelector)(s=>[s.explore.left.datasourceInstance?.name,s.explore.right?.datasourceInstance?.name].filter(V.fQ));document.title=`${e.main.text} - ${n.join(" | ")} - ${ve.c.AppTitle}`};function qa(e){const n=(0,C.useDispatch)();(0,q.Z)(()=>{N.v.featureToggles.datasourceOnboarding&&n((0,_.bZ)())});const{hasDatasource:s,loading:o}=(0,C.useSelector)(c=>({hasDatasource:c.dataSources.dataSourcesCount>0,loading:!c.dataSources.hasFetched})),[a,r]=(0,t.useState)(N.v.featureToggles.datasourceOnboarding);return s||!a?t.createElement(Xa,{...e}):t.createElement(ae.O,{onCTAClick:()=>r(!1),loading:o,title:"Welcome to Grafana Explore!",CTAText:"Or explore sample data",navId:"explore"})}},75090:(ye,Q,l)=>{"use strict";l.d(Q,{F:()=>N,p:()=>q});var t=l(81168);const q=ae=>Boolean(ae.explore[t.ExploreId.left]&&ae.explore[t.ExploreId.right]),N=ae=>C=>C.explore[ae]},3823:(ye,Q,l)=>{"use strict";l.d(Q,{Z:()=>k});var t=l(81582),q=l.n(t),N=l(68404),ae=l(24015),C=function($){$===void 0&&($={});var V=(0,N.useState)($),se=V[0],K=V[1],T=(0,N.useCallback)(function(G){K(function(ie){return Object.assign({},ie,G instanceof Function?G(ie):G)})},[]);return[se,T]};const _=C;var u=function(){var $=(0,ae.Z)(),V=_({value:void 0,error:void 0,noUserInteraction:!0}),se=V[0],K=V[1],T=(0,N.useCallback)(function(G){if($()){var ie,U;try{if(typeof G!="string"&&typeof G!="number"){var le=new Error("Cannot copy typeof "+typeof G+" to clipboard, must be a string");K({value:G,error:le,noUserInteraction:!0});return}else if(G===""){var le=new Error("Cannot copy empty string to clipboard.");K({value:G,error:le,noUserInteraction:!0});return}U=G.toString(),ie=q()(U),K({value:U,error:void 0,noUserInteraction:ie})}catch(j){K({value:U,error:j,noUserInteraction:ie})}}},[]);return[se,T]};const k=u},78337:(ye,Q,l)=>{"use strict";l.d(Q,{Z:()=>N});var t=l(68404),q=function(ae,C){var _=(0,t.useRef)(function(){});(0,t.useEffect)(function(){_.current=ae}),(0,t.useEffect)(function(){if(C!==null){var u=setInterval(function(){return _.current()},C||0);return function(){return clearInterval(u)}}},[C])};const N=q},81582:(ye,Q,l)=>{"use strict";var t=l(66259),q={"text/plain":"Text","text/html":"Url",default:"Text"},N="Copy to clipboard: #{key}, Enter";function ae(_){var u=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return _.replace(/#{\s*key\s*}/g,u)}function C(_,u){var k,$,V,se,K,T,G=!1;u||(u={}),k=u.debug||!1;try{V=t(),se=document.createRange(),K=document.getSelection(),T=document.createElement("span"),T.textContent=_,T.style.all="unset",T.style.position="fixed",T.style.top=0,T.style.clip="rect(0, 0, 0, 0)",T.style.whiteSpace="pre",T.style.webkitUserSelect="text",T.style.MozUserSelect="text",T.style.msUserSelect="text",T.style.userSelect="text",T.addEventListener("copy",function(U){if(U.stopPropagation(),u.format)if(U.preventDefault(),typeof U.clipboardData>"u"){k&&console.warn("unable to use e.clipboardData"),k&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var le=q[u.format]||q.default;window.clipboardData.setData(le,_)}else U.clipboardData.clearData(),U.clipboardData.setData(u.format,_);u.onCopy&&(U.preventDefault(),u.onCopy(U.clipboardData))}),document.body.appendChild(T),se.selectNodeContents(T),K.addRange(se);var ie=document.execCommand("copy");if(!ie)throw new Error("copy command was unsuccessful");G=!0}catch(U){k&&console.error("unable to copy using execCommand: ",U),k&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(u.format||"text",_),u.onCopy&&u.onCopy(window.clipboardData),G=!0}catch(le){k&&console.error("unable to copy using clipboardData: ",le),k&&console.error("falling back to prompt"),$=ae("message"in u?u.message:N),window.prompt($,_)}}finally{K&&(typeof K.removeRange=="function"?K.removeRange(se):K.removeAllRanges()),T&&document.body.removeChild(T),V()}return G}ye.exports=C},66259:ye=>{ye.exports=function(){var Q=document.getSelection();if(!Q.rangeCount)return function(){};for(var l=document.activeElement,t=[],q=0;q<Q.rangeCount;q++)t.push(Q.getRangeAt(q));switch(l.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":l.blur();break;default:l=null;break}return Q.removeAllRanges(),function(){Q.type==="Caret"&&Q.removeAllRanges(),Q.rangeCount||t.forEach(function(N){Q.addRange(N)}),l&&l.focus()}}}}]);

//# sourceMappingURL=explore.d25087d0f7efc0cc648a.js.map