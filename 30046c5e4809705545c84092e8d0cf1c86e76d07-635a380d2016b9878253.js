(self.webpackChunkmy_web_site=self.webpackChunkmy_web_site||[]).push([[991],{9130:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(2122),i=n(1253),o=n(7294),u=n(3935),a=n(5505),c=n(1291),l=n(7544),s=n(4621),p=n(4095),d=n(7329),f=n(9756),h=n(3349),m=n(3552),v=o.createContext(null);function b(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function y(e,t,n){return null!=n[t]?n[t]:e.props[t]}function E(e,t,n){var r=b(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var u in e)u in t?o.length&&(i[u]=o,o=[]):o.push(u);var a={};for(var c in t){if(i[c])for(r=0;r<i[c].length;r++){var l=i[c][r];a[i[c][r]]=n(l)}a[c]=n(c)}for(r=0;r<o.length;r++)a[o[r]]=n(o[r]);return a}(t,r);return Object.keys(i).forEach((function(u){var a=i[u];if((0,o.isValidElement)(a)){var c=u in t,l=u in r,s=t[u],p=(0,o.isValidElement)(s)&&!s.props.in;!l||c&&!p?l||!c||p?l&&c&&(0,o.isValidElement)(s)&&(i[u]=(0,o.cloneElement)(a,{onExited:n.bind(null,a),in:s.props.in,exit:y(a,"exit",e),enter:y(a,"enter",e)})):i[u]=(0,o.cloneElement)(a,{in:!1}):i[u]=(0,o.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:y(a,"exit",e),enter:y(a,"enter",e)})}})),i}var g=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},w=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind((0,h.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,m.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,u=t.handleExited;return{children:t.firstRender?(n=e,r=u,b(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:y(e,"appear",n),enter:y(e,"enter",n),exit:y(e,"exit",n)})}))):E(e,i,u),firstRender:!1}},n.handleExited=function(e,t){var n=b(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,f.Z)(e,["component","childFactory"]),i=this.state.contextValue,u=g(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.createElement(v.Provider,{value:i},u):o.createElement(v.Provider,{value:i},o.createElement(t,r,u))},t}(o.Component);w.defaultProps={component:"div",childFactory:function(e){return e}};var k=w,x="undefined"==typeof window?o.useEffect:o.useLayoutEffect;var M=function(e){var t=e.classes,n=e.pulsate,r=void 0!==n&&n,i=e.rippleX,u=e.rippleY,c=e.rippleSize,s=e.in,p=e.onExited,d=void 0===p?function(){}:p,f=e.timeout,h=o.useState(!1),m=h[0],v=h[1],b=(0,a.Z)(t.ripple,t.rippleVisible,r&&t.ripplePulsate),y={width:c,height:c,top:-c/2+u,left:-c/2+i},E=(0,a.Z)(t.child,m&&t.childLeaving,r&&t.childPulsate),g=(0,l.Z)(d);return x((function(){if(!s){v(!0);var e=setTimeout(g,f);return function(){clearTimeout(e)}}}),[g,s,f]),o.createElement("span",{className:b,style:y},o.createElement("span",{className:E}))},R=o.forwardRef((function(e,t){var n=e.center,u=void 0!==n&&n,c=e.classes,l=e.className,s=(0,i.Z)(e,["center","classes","className"]),p=o.useState([]),f=p[0],h=p[1],m=o.useRef(0),v=o.useRef(null);o.useEffect((function(){v.current&&(v.current(),v.current=null)}),[f]);var b=o.useRef(!1),y=o.useRef(null),E=o.useRef(null),g=o.useRef(null);o.useEffect((function(){return function(){clearTimeout(y.current)}}),[]);var w=o.useCallback((function(e){var t=e.pulsate,n=e.rippleX,r=e.rippleY,i=e.rippleSize,u=e.cb;h((function(e){return[].concat((0,d.Z)(e),[o.createElement(M,{key:m.current,classes:c,timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i})])})),m.current+=1,v.current=u}),[c]),x=o.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.pulsate,i=void 0!==r&&r,o=t.center,a=void 0===o?u||t.pulsate:o,c=t.fakeElement,l=void 0!==c&&c;if("mousedown"===e.type&&b.current)b.current=!1;else{"touchstart"===e.type&&(b.current=!0);var s,p,d,f=l?null:g.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(a||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(h.width/2),p=Math.round(h.height/2);else{var m=e.touches?e.touches[0]:e,v=m.clientX,k=m.clientY;s=Math.round(v-h.left),p=Math.round(k-h.top)}if(a)(d=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2==0&&(d+=1);else{var x=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,M=2*Math.max(Math.abs((f?f.clientHeight:0)-p),p)+2;d=Math.sqrt(Math.pow(x,2)+Math.pow(M,2))}e.touches?null===E.current&&(E.current=function(){w({pulsate:i,rippleX:s,rippleY:p,rippleSize:d,cb:n})},y.current=setTimeout((function(){E.current&&(E.current(),E.current=null)}),80)):w({pulsate:i,rippleX:s,rippleY:p,rippleSize:d,cb:n})}}),[u,w]),R=o.useCallback((function(){x({},{pulsate:!0})}),[x]),Z=o.useCallback((function(e,t){if(clearTimeout(y.current),"touchend"===e.type&&E.current)return e.persist(),E.current(),E.current=null,void(y.current=setTimeout((function(){Z(e,t)})));E.current=null,h((function(e){return e.length>0?e.slice(1):e})),v.current=t}),[]);return o.useImperativeHandle(t,(function(){return{pulsate:R,start:x,stop:Z}}),[R,x,Z]),o.createElement("span",(0,r.Z)({className:(0,a.Z)(c.root,l),ref:g},s),o.createElement(k,{component:null,exit:!0},f))})),Z=(0,s.Z)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(o.memo(R)),T=o.forwardRef((function(e,t){var n=e.action,s=e.buttonRef,d=e.centerRipple,f=void 0!==d&&d,h=e.children,m=e.classes,v=e.className,b=e.component,y=void 0===b?"button":b,E=e.disabled,g=void 0!==E&&E,w=e.disableRipple,k=void 0!==w&&w,x=e.disableTouchRipple,M=void 0!==x&&x,R=e.focusRipple,T=void 0!==R&&R,C=e.focusVisibleClassName,V=e.onBlur,D=e.onClick,S=e.onFocus,L=e.onFocusVisible,N=e.onKeyDown,P=e.onKeyUp,O=e.onMouseDown,F=e.onMouseLeave,I=e.onMouseUp,K=e.onTouchEnd,X=e.onTouchMove,z=e.onTouchStart,B=e.onDragLeave,U=e.tabIndex,j=void 0===U?0:U,Y=e.TouchRippleProps,A=e.type,H=void 0===A?"button":A,$=(0,i.Z)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),_=o.useRef(null);var W=o.useRef(null),q=o.useState(!1),G=q[0],J=q[1];g&&G&&J(!1);var Q=(0,p.Z)(),ee=Q.isFocusVisible,te=Q.onBlurVisible,ne=Q.ref;function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:M;return(0,l.Z)((function(r){return t&&t(r),!n&&W.current&&W.current[e](r),!0}))}o.useImperativeHandle(n,(function(){return{focusVisible:function(){J(!0),_.current.focus()}}}),[]),o.useEffect((function(){G&&T&&!k&&W.current.pulsate()}),[k,T,G]);var ie=re("start",O),oe=re("stop",B),ue=re("stop",I),ae=re("stop",(function(e){G&&e.preventDefault(),F&&F(e)})),ce=re("start",z),le=re("stop",K),se=re("stop",X),pe=re("stop",(function(e){G&&(te(e),J(!1)),V&&V(e)}),!1),de=(0,l.Z)((function(e){_.current||(_.current=e.currentTarget),ee(e)&&(J(!0),L&&L(e)),S&&S(e)})),fe=function(){var e=u.findDOMNode(_.current);return y&&"button"!==y&&!("A"===e.tagName&&e.href)},he=o.useRef(!1),me=(0,l.Z)((function(e){T&&!he.current&&G&&W.current&&" "===e.key&&(he.current=!0,e.persist(),W.current.stop(e,(function(){W.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),N&&N(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!g&&(e.preventDefault(),D&&D(e))})),ve=(0,l.Z)((function(e){T&&" "===e.key&&W.current&&G&&!e.defaultPrevented&&(he.current=!1,e.persist(),W.current.stop(e,(function(){W.current.pulsate(e)}))),P&&P(e),D&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&D(e)})),be=y;"button"===be&&$.href&&(be="a");var ye={};"button"===be?(ye.type=H,ye.disabled=g):("a"===be&&$.href||(ye.role="button"),ye["aria-disabled"]=g);var Ee=(0,c.Z)(s,t),ge=(0,c.Z)(ne,_),we=(0,c.Z)(Ee,ge),ke=o.useState(!1),xe=ke[0],Me=ke[1];o.useEffect((function(){Me(!0)}),[]);var Re=xe&&!k&&!g;return o.createElement(be,(0,r.Z)({className:(0,a.Z)(m.root,v,G&&[m.focusVisible,C],g&&m.disabled),onBlur:pe,onClick:D,onFocus:de,onKeyDown:me,onKeyUp:ve,onMouseDown:ie,onMouseLeave:ae,onMouseUp:ue,onDragLeave:oe,onTouchEnd:le,onTouchMove:se,onTouchStart:ce,ref:we,tabIndex:g?-1:j},ye,$),h,Re?o.createElement(Z,(0,r.Z)({ref:W,center:f},Y)):null)})),C=(0,s.Z)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(T)},1474:function(e,t,n){"use strict";function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:function(){return r}})},7544:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function o(e){var t=r.useRef(e);return i((function(){t.current=e})),r.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},1291:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),i=n(1474);function o(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){(0,i.Z)(e,n),(0,i.Z)(t,n)}}),[e,t])}},4095:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7294),i=n(3935),o=!0,u=!1,a=null,c={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function s(){o=!1}function p(){"hidden"===this.visibilityState&&u&&(o=!0)}function d(e){var t,n,r,i=e.target;try{return i.matches(":focus-visible")}catch(u){}return o||(n=(t=i).type,!("INPUT"!==(r=t.tagName)||!c[n]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable)}function f(){u=!0,window.clearTimeout(a),a=window.setTimeout((function(){u=!1}),100)}function h(){return{isFocusVisible:d,onBlurVisible:f,ref:r.useCallback((function(e){var t,n=i.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",s,!0),t.addEventListener("pointerdown",s,!0),t.addEventListener("touchstart",s,!0),t.addEventListener("visibilitychange",p,!0))}),[])}}}}]);
//# sourceMappingURL=30046c5e4809705545c84092e8d0cf1c86e76d07-635a380d2016b9878253.js.map