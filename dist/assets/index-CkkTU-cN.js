(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var G0={exports:{}},Hc={},H0={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),ny=Symbol.for("react.portal"),iy=Symbol.for("react.fragment"),ry=Symbol.for("react.strict_mode"),sy=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),oy=Symbol.for("react.context"),ly=Symbol.for("react.forward_ref"),cy=Symbol.for("react.suspense"),uy=Symbol.for("react.memo"),dy=Symbol.for("react.lazy"),Zp=Symbol.iterator;function hy(n){return n===null||typeof n!="object"?null:(n=Zp&&n[Zp]||n["@@iterator"],typeof n=="function"?n:null)}var V0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W0=Object.assign,X0={};function ca(n,e,t){this.props=n,this.context=e,this.refs=X0,this.updater=t||V0}ca.prototype.isReactComponent={};ca.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ca.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function j0(){}j0.prototype=ca.prototype;function gf(n,e,t){this.props=n,this.context=e,this.refs=X0,this.updater=t||V0}var _f=gf.prototype=new j0;_f.constructor=gf;W0(_f,ca.prototype);_f.isPureReactComponent=!0;var Jp=Array.isArray,Y0=Object.prototype.hasOwnProperty,vf={current:null},K0={key:!0,ref:!0,__self:!0,__source:!0};function q0(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Y0.call(e,i)&&!K0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Fo,type:n,key:s,ref:a,props:r,_owner:vf.current}}function fy(n,e){return{$$typeof:Fo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function xf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Fo}function py(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Qp=/\/+/g;function fu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?py(""+n.key):e.toString(36)}function Ol(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Fo:case ny:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+fu(a,0):i,Jp(r)?(t="",n!=null&&(t=n.replace(Qp,"$&/")+"/"),Ol(r,e,t,"",function(c){return c})):r!=null&&(xf(r)&&(r=fy(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Qp,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Jp(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+fu(s,o);a+=Ol(s,e,t,l,r)}else if(l=hy(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+fu(s,o++),a+=Ol(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function jo(n,e,t){if(n==null)return n;var i=[],r=0;return Ol(n,i,"","",function(s){return e.call(t,s,r++)}),i}function my(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var vn={current:null},Bl={transition:null},gy={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:Bl,ReactCurrentOwner:vf};function $0(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:jo,forEach:function(n,e,t){jo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return jo(n,function(){e++}),e},toArray:function(n){return jo(n,function(e){return e})||[]},only:function(n){if(!xf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};$e.Component=ca;$e.Fragment=iy;$e.Profiler=sy;$e.PureComponent=gf;$e.StrictMode=ry;$e.Suspense=cy;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gy;$e.act=$0;$e.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=W0({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=vf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)Y0.call(e,l)&&!K0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Fo,type:n.type,key:r,ref:s,props:i,_owner:a}};$e.createContext=function(n){return n={$$typeof:oy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:ay,_context:n},n.Consumer=n};$e.createElement=q0;$e.createFactory=function(n){var e=q0.bind(null,n);return e.type=n,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(n){return{$$typeof:ly,render:n}};$e.isValidElement=xf;$e.lazy=function(n){return{$$typeof:dy,_payload:{_status:-1,_result:n},_init:my}};$e.memo=function(n,e){return{$$typeof:uy,type:n,compare:e===void 0?null:e}};$e.startTransition=function(n){var e=Bl.transition;Bl.transition={};try{n()}finally{Bl.transition=e}};$e.unstable_act=$0;$e.useCallback=function(n,e){return vn.current.useCallback(n,e)};$e.useContext=function(n){return vn.current.useContext(n)};$e.useDebugValue=function(){};$e.useDeferredValue=function(n){return vn.current.useDeferredValue(n)};$e.useEffect=function(n,e){return vn.current.useEffect(n,e)};$e.useId=function(){return vn.current.useId()};$e.useImperativeHandle=function(n,e,t){return vn.current.useImperativeHandle(n,e,t)};$e.useInsertionEffect=function(n,e){return vn.current.useInsertionEffect(n,e)};$e.useLayoutEffect=function(n,e){return vn.current.useLayoutEffect(n,e)};$e.useMemo=function(n,e){return vn.current.useMemo(n,e)};$e.useReducer=function(n,e,t){return vn.current.useReducer(n,e,t)};$e.useRef=function(n){return vn.current.useRef(n)};$e.useState=function(n){return vn.current.useState(n)};$e.useSyncExternalStore=function(n,e,t){return vn.current.useSyncExternalStore(n,e,t)};$e.useTransition=function(){return vn.current.useTransition()};$e.version="18.3.1";H0.exports=$e;var Qe=H0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y=Qe,vy=Symbol.for("react.element"),xy=Symbol.for("react.fragment"),yy=Object.prototype.hasOwnProperty,Sy=_y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,My={key:!0,ref:!0,__self:!0,__source:!0};function Z0(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)yy.call(e,i)&&!My.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:vy,type:n,key:s,ref:a,props:r,_owner:Sy.current}}Hc.Fragment=xy;Hc.jsx=Z0;Hc.jsxs=Z0;G0.exports=Hc;var C=G0.exports,J0={exports:{}},Bn={},Q0={exports:{}},e_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(B,U){var X=B.length;B.push(U);e:for(;0<X;){var J=X-1>>>1,me=B[J];if(0<r(me,U))B[J]=U,B[X]=me,X=J;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var U=B[0],X=B.pop();if(X!==U){B[0]=X;e:for(var J=0,me=B.length,Te=me>>>1;J<Te;){var Je=2*(J+1)-1,He=B[Je],Ge=Je+1,q=B[Ge];if(0>r(He,X))Ge<me&&0>r(q,He)?(B[J]=q,B[Ge]=X,J=Ge):(B[J]=He,B[Je]=X,J=Je);else if(Ge<me&&0>r(q,X))B[J]=q,B[Ge]=X,J=Ge;else break e}}return U}function r(B,U){var X=B.sortIndex-U.sortIndex;return X!==0?X:B.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,d=3,p=!1,g=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(B){for(var U=t(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=B)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=t(c)}}function y(B){if(S=!1,M(B),!g)if(t(l)!==null)g=!0,Q(E);else{var U=t(c);U!==null&&Y(y,U.startTime-B)}}function E(B,U){g=!1,S&&(S=!1,f(v),v=-1),p=!0;var X=d;try{for(M(U),h=t(l);h!==null&&(!(h.expirationTime>U)||B&&!I());){var J=h.callback;if(typeof J=="function"){h.callback=null,d=h.priorityLevel;var me=J(h.expirationTime<=U);U=n.unstable_now(),typeof me=="function"?h.callback=me:h===t(l)&&i(l),M(U)}else i(l);h=t(l)}if(h!==null)var Te=!0;else{var Je=t(c);Je!==null&&Y(y,Je.startTime-U),Te=!1}return Te}finally{h=null,d=X,p=!1}}var w=!1,b=null,v=-1,A=5,P=-1;function I(){return!(n.unstable_now()-P<A)}function O(){if(b!==null){var B=n.unstable_now();P=B;var U=!0;try{U=b(!0,B)}finally{U?W():(w=!1,b=null)}}else w=!1}var W;if(typeof _=="function")W=function(){_(O)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,G=L.port2;L.port1.onmessage=O,W=function(){G.postMessage(null)}}else W=function(){m(O,0)};function Q(B){b=B,w||(w=!0,W())}function Y(B,U){v=m(function(){B(n.unstable_now())},U)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,Q(E))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(B){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var X=d;d=U;try{return B()}finally{d=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,U){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=d;d=B;try{return U()}finally{d=X}},n.unstable_scheduleCallback=function(B,U,X){var J=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?J+X:J):X=J,B){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=X+me,B={id:u++,callback:U,priorityLevel:B,startTime:X,expirationTime:me,sortIndex:-1},X>J?(B.sortIndex=X,e(c,B),t(l)===null&&B===t(c)&&(S?(f(v),v=-1):S=!0,Y(y,X-J))):(B.sortIndex=me,e(l,B),g||p||(g=!0,Q(E))),B},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(B){var U=d;return function(){var X=d;d=U;try{return B.apply(this,arguments)}finally{d=X}}}})(e_);Q0.exports=e_;var Ey=Q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty=Qe,Fn=Ey;function re(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t_=new Set,lo={};function os(n,e){Js(n,e),Js(n+"Capture",e)}function Js(n,e){for(lo[n]=e,n=0;n<e.length;n++)t_.add(e[n])}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pd=Object.prototype.hasOwnProperty,wy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,em={},tm={};function by(n){return Pd.call(tm,n)?!0:Pd.call(em,n)?!1:wy.test(n)?tm[n]=!0:(em[n]=!0,!1)}function Ay(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Ry(n,e,t,i){if(e===null||typeof e>"u"||Ay(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){tn[n]=new xn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];tn[e]=new xn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){tn[n]=new xn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){tn[n]=new xn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){tn[n]=new xn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){tn[n]=new xn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){tn[n]=new xn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){tn[n]=new xn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){tn[n]=new xn(n,5,!1,n.toLowerCase(),null,!1,!1)});var yf=/[\-:]([a-z])/g;function Sf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(yf,Sf);tn[e]=new xn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(yf,Sf);tn[e]=new xn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(yf,Sf);tn[e]=new xn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){tn[n]=new xn(n,1,!1,n.toLowerCase(),null,!1,!1)});tn.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){tn[n]=new xn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Mf(n,e,t,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ry(e,t,r,i)&&(t=null),i||r===null?by(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ir=Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),n_=Symbol.for("react.provider"),i_=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),Nd=Symbol.for("react.suspense_list"),wf=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),r_=Symbol.for("react.offscreen"),nm=Symbol.iterator;function _a(n){return n===null||typeof n!="object"?null:(n=nm&&n[nm]||n["@@iterator"],typeof n=="function"?n:null)}var Rt=Object.assign,pu;function za(n){if(pu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);pu=e&&e[1]||""}return`
`+pu+n}var mu=!1;function gu(n,e){if(!n||mu)return"";mu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{mu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?za(n):""}function Cy(n){switch(n.tag){case 5:return za(n.type);case 16:return za("Lazy");case 13:return za("Suspense");case 19:return za("SuspenseList");case 0:case 2:case 15:return n=gu(n.type,!1),n;case 11:return n=gu(n.type.render,!1),n;case 1:return n=gu(n.type,!0),n;default:return""}}function Dd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ls:return"Fragment";case Ps:return"Portal";case Ld:return"Profiler";case Ef:return"StrictMode";case Id:return"Suspense";case Nd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case i_:return(n.displayName||"Context")+".Consumer";case n_:return(n._context.displayName||"Context")+".Provider";case Tf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case wf:return e=n.displayName||null,e!==null?e:Dd(n.type)||"Memo";case pr:e=n._payload,n=n._init;try{return Dd(n(e))}catch{}}return null}function Py(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dd(e);case 8:return e===Ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function s_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ly(n){var e=s_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ko(n){n._valueTracker||(n._valueTracker=Ly(n))}function a_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=s_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function oc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function kd(n,e){var t=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function im(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Lr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function o_(n,e){e=e.checked,e!=null&&Mf(n,"checked",e,!1)}function Ud(n,e){o_(n,e);var t=Lr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Fd(n,e.type,t):e.hasOwnProperty("defaultValue")&&Fd(n,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function rm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Fd(n,e,t){(e!=="number"||oc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ga=Array.isArray;function Vs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Lr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Od(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function sm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(re(92));if(Ga(t)){if(1<t.length)throw Error(re(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Lr(t)}}function l_(n,e){var t=Lr(e.value),i=Lr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function am(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function c_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?c_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qo,u_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function co(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var qa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iy=["Webkit","ms","Moz","O"];Object.keys(qa).forEach(function(n){Iy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),qa[e]=qa[n]})});function d_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||qa.hasOwnProperty(n)&&qa[n]?(""+e).trim():e+"px"}function h_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=d_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Ny=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zd(n,e){if(e){if(Ny[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Gd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hd=null;function bf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Vd=null,Ws=null,Xs=null;function om(n){if(n=zo(n)){if(typeof Vd!="function")throw Error(re(280));var e=n.stateNode;e&&(e=Yc(e),Vd(n.stateNode,n.type,e))}}function f_(n){Ws?Xs?Xs.push(n):Xs=[n]:Ws=n}function p_(){if(Ws){var n=Ws,e=Xs;if(Xs=Ws=null,om(n),e)for(n=0;n<e.length;n++)om(e[n])}}function m_(n,e){return n(e)}function g_(){}var _u=!1;function __(n,e,t){if(_u)return n(e,t);_u=!0;try{return m_(n,e,t)}finally{_u=!1,(Ws!==null||Xs!==null)&&(g_(),p_())}}function uo(n,e){var t=n.stateNode;if(t===null)return null;var i=Yc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(re(231,e,typeof t));return t}var Wd=!1;if(Ji)try{var va={};Object.defineProperty(va,"passive",{get:function(){Wd=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{Wd=!1}function Dy(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var $a=!1,lc=null,cc=!1,Xd=null,ky={onError:function(n){$a=!0,lc=n}};function Uy(n,e,t,i,r,s,a,o,l){$a=!1,lc=null,Dy.apply(ky,arguments)}function Fy(n,e,t,i,r,s,a,o,l){if(Uy.apply(this,arguments),$a){if($a){var c=lc;$a=!1,lc=null}else throw Error(re(198));cc||(cc=!0,Xd=c)}}function ls(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function v_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function lm(n){if(ls(n)!==n)throw Error(re(188))}function Oy(n){var e=n.alternate;if(!e){if(e=ls(n),e===null)throw Error(re(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return lm(r),n;if(s===i)return lm(r),e;s=s.sibling}throw Error(re(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(t.alternate!==i)throw Error(re(190))}if(t.tag!==3)throw Error(re(188));return t.stateNode.current===t?n:e}function x_(n){return n=Oy(n),n!==null?y_(n):null}function y_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=y_(n);if(e!==null)return e;n=n.sibling}return null}var S_=Fn.unstable_scheduleCallback,cm=Fn.unstable_cancelCallback,By=Fn.unstable_shouldYield,zy=Fn.unstable_requestPaint,Lt=Fn.unstable_now,Gy=Fn.unstable_getCurrentPriorityLevel,Af=Fn.unstable_ImmediatePriority,M_=Fn.unstable_UserBlockingPriority,uc=Fn.unstable_NormalPriority,Hy=Fn.unstable_LowPriority,E_=Fn.unstable_IdlePriority,Vc=null,Ai=null;function Vy(n){if(Ai&&typeof Ai.onCommitFiberRoot=="function")try{Ai.onCommitFiberRoot(Vc,n,void 0,(n.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:jy,Wy=Math.log,Xy=Math.LN2;function jy(n){return n>>>=0,n===0?32:31-(Wy(n)/Xy|0)|0}var $o=64,Zo=4194304;function Ha(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Ha(o):(s&=a,s!==0&&(i=Ha(s)))}else a=t&~r,a!==0?i=Ha(a):s!==0&&(i=Ha(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ui(e),r=1<<t,i|=n[t],e&=~r;return i}function Yy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ky(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-ui(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=Yy(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function jd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function T_(){var n=$o;return $o<<=1,!($o&4194240)&&($o=64),n}function vu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Oo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ui(e),n[e]=t}function qy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ui(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Rf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ui(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ut=0;function w_(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var b_,Cf,A_,R_,C_,Yd=!1,Jo=[],Er=null,Tr=null,wr=null,ho=new Map,fo=new Map,vr=[],$y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function um(n,e){switch(n){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function xa(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=zo(e),e!==null&&Cf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Zy(n,e,t,i,r){switch(e){case"focusin":return Er=xa(Er,n,e,t,i,r),!0;case"dragenter":return Tr=xa(Tr,n,e,t,i,r),!0;case"mouseover":return wr=xa(wr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ho.set(s,xa(ho.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fo.set(s,xa(fo.get(s)||null,n,e,t,i,r)),!0}return!1}function P_(n){var e=Kr(n.target);if(e!==null){var t=ls(e);if(t!==null){if(e=t.tag,e===13){if(e=v_(t),e!==null){n.blockedOn=e,C_(n.priority,function(){A_(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function zl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Kd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Hd=i,t.target.dispatchEvent(i),Hd=null}else return e=zo(t),e!==null&&Cf(e),n.blockedOn=t,!1;e.shift()}return!0}function dm(n,e,t){zl(n)&&t.delete(e)}function Jy(){Yd=!1,Er!==null&&zl(Er)&&(Er=null),Tr!==null&&zl(Tr)&&(Tr=null),wr!==null&&zl(wr)&&(wr=null),ho.forEach(dm),fo.forEach(dm)}function ya(n,e){n.blockedOn===e&&(n.blockedOn=null,Yd||(Yd=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,Jy)))}function po(n){function e(r){return ya(r,n)}if(0<Jo.length){ya(Jo[0],n);for(var t=1;t<Jo.length;t++){var i=Jo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Er!==null&&ya(Er,n),Tr!==null&&ya(Tr,n),wr!==null&&ya(wr,n),ho.forEach(e),fo.forEach(e),t=0;t<vr.length;t++)i=vr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<vr.length&&(t=vr[0],t.blockedOn===null);)P_(t),t.blockedOn===null&&vr.shift()}var js=ir.ReactCurrentBatchConfig,hc=!0;function Qy(n,e,t,i){var r=ut,s=js.transition;js.transition=null;try{ut=1,Pf(n,e,t,i)}finally{ut=r,js.transition=s}}function eS(n,e,t,i){var r=ut,s=js.transition;js.transition=null;try{ut=4,Pf(n,e,t,i)}finally{ut=r,js.transition=s}}function Pf(n,e,t,i){if(hc){var r=Kd(n,e,t,i);if(r===null)Ru(n,e,i,fc,t),um(n,i);else if(Zy(r,n,e,t,i))i.stopPropagation();else if(um(n,i),e&4&&-1<$y.indexOf(n)){for(;r!==null;){var s=zo(r);if(s!==null&&b_(s),s=Kd(n,e,t,i),s===null&&Ru(n,e,i,fc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ru(n,e,i,null,t)}}var fc=null;function Kd(n,e,t,i){if(fc=null,n=bf(i),n=Kr(n),n!==null)if(e=ls(n),e===null)n=null;else if(t=e.tag,t===13){if(n=v_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return fc=n,null}function L_(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gy()){case Af:return 1;case M_:return 4;case uc:case Hy:return 16;case E_:return 536870912;default:return 16}default:return 16}}var Sr=null,Lf=null,Gl=null;function I_(){if(Gl)return Gl;var n,e=Lf,t=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Gl=r.slice(n,1<i?1-i:void 0)}function Hl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Qo(){return!0}function hm(){return!1}function zn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qo:hm,this.isPropagationStopped=hm,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),e}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},If=zn(ua),Bo=Rt({},ua,{view:0,detail:0}),tS=zn(Bo),xu,yu,Sa,Wc=Rt({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Sa&&(Sa&&n.type==="mousemove"?(xu=n.screenX-Sa.screenX,yu=n.screenY-Sa.screenY):yu=xu=0,Sa=n),xu)},movementY:function(n){return"movementY"in n?n.movementY:yu}}),fm=zn(Wc),nS=Rt({},Wc,{dataTransfer:0}),iS=zn(nS),rS=Rt({},Bo,{relatedTarget:0}),Su=zn(rS),sS=Rt({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),aS=zn(sS),oS=Rt({},ua,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),lS=zn(oS),cS=Rt({},ua,{data:0}),pm=zn(cS),uS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=hS[n])?!!e[n]:!1}function Nf(){return fS}var pS=Rt({},Bo,{key:function(n){if(n.key){var e=uS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Hl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nf,charCode:function(n){return n.type==="keypress"?Hl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),mS=zn(pS),gS=Rt({},Wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=zn(gS),_S=Rt({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nf}),vS=zn(_S),xS=Rt({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),yS=zn(xS),SS=Rt({},Wc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),MS=zn(SS),ES=[9,13,27,32],Df=Ji&&"CompositionEvent"in window,Za=null;Ji&&"documentMode"in document&&(Za=document.documentMode);var TS=Ji&&"TextEvent"in window&&!Za,N_=Ji&&(!Df||Za&&8<Za&&11>=Za),gm=" ",_m=!1;function D_(n,e){switch(n){case"keyup":return ES.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function wS(n,e){switch(n){case"compositionend":return k_(e);case"keypress":return e.which!==32?null:(_m=!0,gm);case"textInput":return n=e.data,n===gm&&_m?null:n;default:return null}}function bS(n,e){if(Is)return n==="compositionend"||!Df&&D_(n,e)?(n=I_(),Gl=Lf=Sr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N_&&e.locale!=="ko"?null:e.data;default:return null}}var AS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!AS[n.type]:e==="textarea"}function U_(n,e,t,i){f_(i),e=pc(e,"onChange"),0<e.length&&(t=new If("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ja=null,mo=null;function RS(n){Y_(n,0)}function Xc(n){var e=ks(n);if(a_(e))return n}function CS(n,e){if(n==="change")return e}var F_=!1;if(Ji){var Mu;if(Ji){var Eu="oninput"in document;if(!Eu){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),Eu=typeof xm.oninput=="function"}Mu=Eu}else Mu=!1;F_=Mu&&(!document.documentMode||9<document.documentMode)}function ym(){Ja&&(Ja.detachEvent("onpropertychange",O_),mo=Ja=null)}function O_(n){if(n.propertyName==="value"&&Xc(mo)){var e=[];U_(e,mo,n,bf(n)),__(RS,e)}}function PS(n,e,t){n==="focusin"?(ym(),Ja=e,mo=t,Ja.attachEvent("onpropertychange",O_)):n==="focusout"&&ym()}function LS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xc(mo)}function IS(n,e){if(n==="click")return Xc(e)}function NS(n,e){if(n==="input"||n==="change")return Xc(e)}function DS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var pi=typeof Object.is=="function"?Object.is:DS;function go(n,e){if(pi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Pd.call(e,r)||!pi(n[r],e[r]))return!1}return!0}function Sm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Mm(n,e){var t=Sm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Sm(t)}}function B_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?B_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function z_(){for(var n=window,e=oc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=oc(n.document)}return e}function kf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function kS(n){var e=z_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&B_(t.ownerDocument.documentElement,t)){if(i!==null&&kf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Mm(t,s);var a=Mm(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var US=Ji&&"documentMode"in document&&11>=document.documentMode,Ns=null,qd=null,Qa=null,$d=!1;function Em(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$d||Ns==null||Ns!==oc(i)||(i=Ns,"selectionStart"in i&&kf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qa&&go(Qa,i)||(Qa=i,i=pc(qd,"onSelect"),0<i.length&&(e=new If("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ns)))}function el(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ds={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},Tu={},G_={};Ji&&(G_=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function jc(n){if(Tu[n])return Tu[n];if(!Ds[n])return n;var e=Ds[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in G_)return Tu[n]=e[t];return n}var H_=jc("animationend"),V_=jc("animationiteration"),W_=jc("animationstart"),X_=jc("transitionend"),j_=new Map,Tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(n,e){j_.set(n,e),os(e,[n])}for(var wu=0;wu<Tm.length;wu++){var bu=Tm[wu],FS=bu.toLowerCase(),OS=bu[0].toUpperCase()+bu.slice(1);kr(FS,"on"+OS)}kr(H_,"onAnimationEnd");kr(V_,"onAnimationIteration");kr(W_,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(X_,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Va));function wm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Fy(i,e,void 0,n),n.currentTarget=null}function Y_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;wm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;wm(r,o,c),s=l}}}if(cc)throw n=Xd,cc=!1,Xd=null,n}function xt(n,e){var t=e[th];t===void 0&&(t=e[th]=new Set);var i=n+"__bubble";t.has(i)||(K_(e,n,2,!1),t.add(i))}function Au(n,e,t){var i=0;e&&(i|=4),K_(t,n,i,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function _o(n){if(!n[tl]){n[tl]=!0,t_.forEach(function(t){t!=="selectionchange"&&(BS.has(t)||Au(t,!1,n),Au(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[tl]||(e[tl]=!0,Au("selectionchange",!1,e))}}function K_(n,e,t,i){switch(L_(e)){case 1:var r=Qy;break;case 4:r=eS;break;default:r=Pf}t=r.bind(null,e,t,n),r=void 0,!Wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ru(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Kr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}__(function(){var c=s,u=bf(t),h=[];e:{var d=j_.get(n);if(d!==void 0){var p=If,g=n;switch(n){case"keypress":if(Hl(t)===0)break e;case"keydown":case"keyup":p=mS;break;case"focusin":g="focus",p=Su;break;case"focusout":g="blur",p=Su;break;case"beforeblur":case"afterblur":p=Su;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=iS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=vS;break;case H_:case V_:case W_:p=aS;break;case X_:p=yS;break;case"scroll":p=tS;break;case"wheel":p=MS;break;case"copy":case"cut":case"paste":p=lS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=mm}var S=(e&4)!==0,m=!S&&n==="scroll",f=S?d!==null?d+"Capture":null:d;S=[];for(var _=c,M;_!==null;){M=_;var y=M.stateNode;if(M.tag===5&&y!==null&&(M=y,f!==null&&(y=uo(_,f),y!=null&&S.push(vo(_,y,M)))),m)break;_=_.return}0<S.length&&(d=new p(d,g,null,t,u),h.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Hd&&(g=t.relatedTarget||t.fromElement)&&(Kr(g)||g[Qi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Kr(g):null,g!==null&&(m=ls(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(S=fm,y="onMouseLeave",f="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(S=mm,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?d:ks(p),M=g==null?d:ks(g),d=new S(y,_+"leave",p,t,u),d.target=m,d.relatedTarget=M,y=null,Kr(u)===c&&(S=new S(f,_+"enter",g,t,u),S.target=M,S.relatedTarget=m,y=S),m=y,p&&g)t:{for(S=p,f=g,_=0,M=S;M;M=hs(M))_++;for(M=0,y=f;y;y=hs(y))M++;for(;0<_-M;)S=hs(S),_--;for(;0<M-_;)f=hs(f),M--;for(;_--;){if(S===f||f!==null&&S===f.alternate)break t;S=hs(S),f=hs(f)}S=null}else S=null;p!==null&&bm(h,d,p,S,!1),g!==null&&m!==null&&bm(h,m,g,S,!0)}}e:{if(d=c?ks(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var E=CS;else if(vm(d))if(F_)E=NS;else{E=LS;var w=PS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=IS);if(E&&(E=E(n,c))){U_(h,E,t,u);break e}w&&w(n,d,c),n==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Fd(d,"number",d.value)}switch(w=c?ks(c):window,n){case"focusin":(vm(w)||w.contentEditable==="true")&&(Ns=w,qd=c,Qa=null);break;case"focusout":Qa=qd=Ns=null;break;case"mousedown":$d=!0;break;case"contextmenu":case"mouseup":case"dragend":$d=!1,Em(h,t,u);break;case"selectionchange":if(US)break;case"keydown":case"keyup":Em(h,t,u)}var b;if(Df)e:{switch(n){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Is?D_(n,t)&&(v="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(v="onCompositionStart");v&&(N_&&t.locale!=="ko"&&(Is||v!=="onCompositionStart"?v==="onCompositionEnd"&&Is&&(b=I_()):(Sr=u,Lf="value"in Sr?Sr.value:Sr.textContent,Is=!0)),w=pc(c,v),0<w.length&&(v=new pm(v,n,null,t,u),h.push({event:v,listeners:w}),b?v.data=b:(b=k_(t),b!==null&&(v.data=b)))),(b=TS?wS(n,t):bS(n,t))&&(c=pc(c,"onBeforeInput"),0<c.length&&(u=new pm("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=b))}Y_(h,e)})}function vo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function pc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=uo(n,t),s!=null&&i.unshift(vo(n,s,r)),s=uo(n,e),s!=null&&i.push(vo(n,s,r))),n=n.return}return i}function hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bm(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=uo(t,s),l!=null&&a.unshift(vo(t,l,o))):r||(l=uo(t,s),l!=null&&a.push(vo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var zS=/\r\n?/g,GS=/\u0000|\uFFFD/g;function Am(n){return(typeof n=="string"?n:""+n).replace(zS,`
`).replace(GS,"")}function nl(n,e,t){if(e=Am(e),Am(n)!==e&&t)throw Error(re(425))}function mc(){}var Zd=null,Jd=null;function Qd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var eh=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,Rm=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof Rm<"u"?function(n){return Rm.resolve(null).then(n).catch(WS)}:eh;function WS(n){setTimeout(function(){throw n})}function Cu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),po(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);po(e)}function br(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Cm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var da=Math.random().toString(36).slice(2),Ti="__reactFiber$"+da,xo="__reactProps$"+da,Qi="__reactContainer$"+da,th="__reactEvents$"+da,XS="__reactListeners$"+da,jS="__reactHandles$"+da;function Kr(n){var e=n[Ti];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Qi]||t[Ti]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Cm(n);n!==null;){if(t=n[Ti])return t;n=Cm(n)}return e}n=t,t=n.parentNode}return null}function zo(n){return n=n[Ti]||n[Qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(re(33))}function Yc(n){return n[xo]||null}var nh=[],Us=-1;function Ur(n){return{current:n}}function yt(n){0>Us||(n.current=nh[Us],nh[Us]=null,Us--)}function _t(n,e){Us++,nh[Us]=n.current,n.current=e}var Ir={},dn=Ur(Ir),En=Ur(!1),es=Ir;function Qs(n,e){var t=n.type.contextTypes;if(!t)return Ir;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Tn(n){return n=n.childContextTypes,n!=null}function gc(){yt(En),yt(dn)}function Pm(n,e,t){if(dn.current!==Ir)throw Error(re(168));_t(dn,e),_t(En,t)}function q_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Py(n)||"Unknown",r));return Rt({},t,i)}function _c(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ir,es=dn.current,_t(dn,n),_t(En,En.current),!0}function Lm(n,e,t){var i=n.stateNode;if(!i)throw Error(re(169));t?(n=q_(n,e,es),i.__reactInternalMemoizedMergedChildContext=n,yt(En),yt(dn),_t(dn,n)):yt(En),_t(En,t)}var Wi=null,Kc=!1,Pu=!1;function $_(n){Wi===null?Wi=[n]:Wi.push(n)}function YS(n){Kc=!0,$_(n)}function Fr(){if(!Pu&&Wi!==null){Pu=!0;var n=0,e=ut;try{var t=Wi;for(ut=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Wi=null,Kc=!1}catch(r){throw Wi!==null&&(Wi=Wi.slice(n+1)),S_(Af,Fr),r}finally{ut=e,Pu=!1}}return null}var Fs=[],Os=0,vc=null,xc=0,Xn=[],jn=0,ts=null,Xi=1,ji="";function jr(n,e){Fs[Os++]=xc,Fs[Os++]=vc,vc=n,xc=e}function Z_(n,e,t){Xn[jn++]=Xi,Xn[jn++]=ji,Xn[jn++]=ts,ts=n;var i=Xi;n=ji;var r=32-ui(i)-1;i&=~(1<<r),t+=1;var s=32-ui(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Xi=1<<32-ui(e)+r|t<<r|i,ji=s+n}else Xi=1<<s|t<<r|i,ji=n}function Uf(n){n.return!==null&&(jr(n,1),Z_(n,1,0))}function Ff(n){for(;n===vc;)vc=Fs[--Os],Fs[Os]=null,xc=Fs[--Os],Fs[Os]=null;for(;n===ts;)ts=Xn[--jn],Xn[jn]=null,ji=Xn[--jn],Xn[jn]=null,Xi=Xn[--jn],Xn[jn]=null}var Un=null,Nn=null,Mt=!1,oi=null;function J_(n,e){var t=Yn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Im(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Un=n,Nn=br(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Un=n,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ts!==null?{id:Xi,overflow:ji}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Yn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Un=n,Nn=null,!0):!1;default:return!1}}function ih(n){return(n.mode&1)!==0&&(n.flags&128)===0}function rh(n){if(Mt){var e=Nn;if(e){var t=e;if(!Im(n,e)){if(ih(n))throw Error(re(418));e=br(t.nextSibling);var i=Un;e&&Im(n,e)?J_(i,t):(n.flags=n.flags&-4097|2,Mt=!1,Un=n)}}else{if(ih(n))throw Error(re(418));n.flags=n.flags&-4097|2,Mt=!1,Un=n}}}function Nm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Un=n}function il(n){if(n!==Un)return!1;if(!Mt)return Nm(n),Mt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Qd(n.type,n.memoizedProps)),e&&(e=Nn)){if(ih(n))throw Q_(),Error(re(418));for(;e;)J_(n,e),e=br(e.nextSibling)}if(Nm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(re(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Nn=br(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Nn=null}}else Nn=Un?br(n.stateNode.nextSibling):null;return!0}function Q_(){for(var n=Nn;n;)n=br(n.nextSibling)}function ea(){Nn=Un=null,Mt=!1}function Of(n){oi===null?oi=[n]:oi.push(n)}var KS=ir.ReactCurrentBatchConfig;function Ma(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(re(309));var i=t.stateNode}if(!i)throw Error(re(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(re(284));if(!t._owner)throw Error(re(290,n))}return n}function rl(n,e){throw n=Object.prototype.toString.call(e),Error(re(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Dm(n){var e=n._init;return e(n._payload)}function ev(n){function e(f,_){if(n){var M=f.deletions;M===null?(f.deletions=[_],f.flags|=16):M.push(_)}}function t(f,_){if(!n)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Pr(f,_),f.index=0,f.sibling=null,f}function s(f,_,M){return f.index=M,n?(M=f.alternate,M!==null?(M=M.index,M<_?(f.flags|=2,_):M):(f.flags|=2,_)):(f.flags|=1048576,_)}function a(f){return n&&f.alternate===null&&(f.flags|=2),f}function o(f,_,M,y){return _===null||_.tag!==6?(_=Fu(M,f.mode,y),_.return=f,_):(_=r(_,M),_.return=f,_)}function l(f,_,M,y){var E=M.type;return E===Ls?u(f,_,M.props.children,y,M.key):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===pr&&Dm(E)===_.type)?(y=r(_,M.props),y.ref=Ma(f,_,M),y.return=f,y):(y=ql(M.type,M.key,M.props,null,f.mode,y),y.ref=Ma(f,_,M),y.return=f,y)}function c(f,_,M,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==M.containerInfo||_.stateNode.implementation!==M.implementation?(_=Ou(M,f.mode,y),_.return=f,_):(_=r(_,M.children||[]),_.return=f,_)}function u(f,_,M,y,E){return _===null||_.tag!==7?(_=Qr(M,f.mode,y,E),_.return=f,_):(_=r(_,M),_.return=f,_)}function h(f,_,M){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Fu(""+_,f.mode,M),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:return M=ql(_.type,_.key,_.props,null,f.mode,M),M.ref=Ma(f,null,_),M.return=f,M;case Ps:return _=Ou(_,f.mode,M),_.return=f,_;case pr:var y=_._init;return h(f,y(_._payload),M)}if(Ga(_)||_a(_))return _=Qr(_,f.mode,M,null),_.return=f,_;rl(f,_)}return null}function d(f,_,M,y){var E=_!==null?_.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return E!==null?null:o(f,_,""+M,y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Yo:return M.key===E?l(f,_,M,y):null;case Ps:return M.key===E?c(f,_,M,y):null;case pr:return E=M._init,d(f,_,E(M._payload),y)}if(Ga(M)||_a(M))return E!==null?null:u(f,_,M,y,null);rl(f,M)}return null}function p(f,_,M,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(M)||null,o(_,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yo:return f=f.get(y.key===null?M:y.key)||null,l(_,f,y,E);case Ps:return f=f.get(y.key===null?M:y.key)||null,c(_,f,y,E);case pr:var w=y._init;return p(f,_,M,w(y._payload),E)}if(Ga(y)||_a(y))return f=f.get(M)||null,u(_,f,y,E,null);rl(_,y)}return null}function g(f,_,M,y){for(var E=null,w=null,b=_,v=_=0,A=null;b!==null&&v<M.length;v++){b.index>v?(A=b,b=null):A=b.sibling;var P=d(f,b,M[v],y);if(P===null){b===null&&(b=A);break}n&&b&&P.alternate===null&&e(f,b),_=s(P,_,v),w===null?E=P:w.sibling=P,w=P,b=A}if(v===M.length)return t(f,b),Mt&&jr(f,v),E;if(b===null){for(;v<M.length;v++)b=h(f,M[v],y),b!==null&&(_=s(b,_,v),w===null?E=b:w.sibling=b,w=b);return Mt&&jr(f,v),E}for(b=i(f,b);v<M.length;v++)A=p(b,f,v,M[v],y),A!==null&&(n&&A.alternate!==null&&b.delete(A.key===null?v:A.key),_=s(A,_,v),w===null?E=A:w.sibling=A,w=A);return n&&b.forEach(function(I){return e(f,I)}),Mt&&jr(f,v),E}function S(f,_,M,y){var E=_a(M);if(typeof E!="function")throw Error(re(150));if(M=E.call(M),M==null)throw Error(re(151));for(var w=E=null,b=_,v=_=0,A=null,P=M.next();b!==null&&!P.done;v++,P=M.next()){b.index>v?(A=b,b=null):A=b.sibling;var I=d(f,b,P.value,y);if(I===null){b===null&&(b=A);break}n&&b&&I.alternate===null&&e(f,b),_=s(I,_,v),w===null?E=I:w.sibling=I,w=I,b=A}if(P.done)return t(f,b),Mt&&jr(f,v),E;if(b===null){for(;!P.done;v++,P=M.next())P=h(f,P.value,y),P!==null&&(_=s(P,_,v),w===null?E=P:w.sibling=P,w=P);return Mt&&jr(f,v),E}for(b=i(f,b);!P.done;v++,P=M.next())P=p(b,f,v,P.value,y),P!==null&&(n&&P.alternate!==null&&b.delete(P.key===null?v:P.key),_=s(P,_,v),w===null?E=P:w.sibling=P,w=P);return n&&b.forEach(function(O){return e(f,O)}),Mt&&jr(f,v),E}function m(f,_,M,y){if(typeof M=="object"&&M!==null&&M.type===Ls&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Yo:e:{for(var E=M.key,w=_;w!==null;){if(w.key===E){if(E=M.type,E===Ls){if(w.tag===7){t(f,w.sibling),_=r(w,M.props.children),_.return=f,f=_;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===pr&&Dm(E)===w.type){t(f,w.sibling),_=r(w,M.props),_.ref=Ma(f,w,M),_.return=f,f=_;break e}t(f,w);break}else e(f,w);w=w.sibling}M.type===Ls?(_=Qr(M.props.children,f.mode,y,M.key),_.return=f,f=_):(y=ql(M.type,M.key,M.props,null,f.mode,y),y.ref=Ma(f,_,M),y.return=f,f=y)}return a(f);case Ps:e:{for(w=M.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===M.containerInfo&&_.stateNode.implementation===M.implementation){t(f,_.sibling),_=r(_,M.children||[]),_.return=f,f=_;break e}else{t(f,_);break}else e(f,_);_=_.sibling}_=Ou(M,f.mode,y),_.return=f,f=_}return a(f);case pr:return w=M._init,m(f,_,w(M._payload),y)}if(Ga(M))return g(f,_,M,y);if(_a(M))return S(f,_,M,y);rl(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,_!==null&&_.tag===6?(t(f,_.sibling),_=r(_,M),_.return=f,f=_):(t(f,_),_=Fu(M,f.mode,y),_.return=f,f=_),a(f)):t(f,_)}return m}var ta=ev(!0),tv=ev(!1),yc=Ur(null),Sc=null,Bs=null,Bf=null;function zf(){Bf=Bs=Sc=null}function Gf(n){var e=yc.current;yt(yc),n._currentValue=e}function sh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ys(n,e){Sc=n,Bf=Bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Mn=!0),n.firstContext=null)}function Jn(n){var e=n._currentValue;if(Bf!==n)if(n={context:n,memoizedValue:e,next:null},Bs===null){if(Sc===null)throw Error(re(308));Bs=n,Sc.dependencies={lanes:0,firstContext:n}}else Bs=Bs.next=n;return e}var qr=null;function Hf(n){qr===null?qr=[n]:qr.push(n)}function nv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Hf(e)):(t.next=r.next,r.next=t),e.interleaved=t,er(n,i)}function er(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var mr=!1;function Vf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,er(n,t)}return r=i.interleaved,r===null?(e.next=e,Hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,er(n,t)}function Vl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Rf(n,t)}}function km(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Mc(n,e,t,i){var r=n.updateQueue;mr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=n,S=o;switch(d=e,p=t,S.tag){case 1:if(g=S.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=Rt({},h,d);break e;case 2:mr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);is|=a,n.lanes=a,n.memoizedState=h}}function Um(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Go={},Ri=Ur(Go),yo=Ur(Go),So=Ur(Go);function $r(n){if(n===Go)throw Error(re(174));return n}function Wf(n,e){switch(_t(So,e),_t(yo,n),_t(Ri,Go),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Bd(e,n)}yt(Ri),_t(Ri,e)}function na(){yt(Ri),yt(yo),yt(So)}function rv(n){$r(So.current);var e=$r(Ri.current),t=Bd(e,n.type);e!==t&&(_t(yo,n),_t(Ri,t))}function Xf(n){yo.current===n&&(yt(Ri),yt(yo))}var Tt=Ur(0);function Ec(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lu=[];function jf(){for(var n=0;n<Lu.length;n++)Lu[n]._workInProgressVersionPrimary=null;Lu.length=0}var Wl=ir.ReactCurrentDispatcher,Iu=ir.ReactCurrentBatchConfig,ns=0,wt=null,Gt=null,qt=null,Tc=!1,eo=!1,Mo=0,qS=0;function an(){throw Error(re(321))}function Yf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!pi(n[t],e[t]))return!1;return!0}function Kf(n,e,t,i,r,s){if(ns=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wl.current=n===null||n.memoizedState===null?QS:eM,n=t(i,r),eo){s=0;do{if(eo=!1,Mo=0,25<=s)throw Error(re(301));s+=1,qt=Gt=null,e.updateQueue=null,Wl.current=tM,n=t(i,r)}while(eo)}if(Wl.current=wc,e=Gt!==null&&Gt.next!==null,ns=0,qt=Gt=wt=null,Tc=!1,e)throw Error(re(300));return n}function qf(){var n=Mo!==0;return Mo=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?wt.memoizedState=qt=n:qt=qt.next=n,qt}function Qn(){if(Gt===null){var n=wt.alternate;n=n!==null?n.memoizedState:null}else n=Gt.next;var e=qt===null?wt.memoizedState:qt.next;if(e!==null)qt=e,Gt=n;else{if(n===null)throw Error(re(310));Gt=n,n={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},qt===null?wt.memoizedState=qt=n:qt=qt.next=n}return qt}function Eo(n,e){return typeof e=="function"?e(n):e}function Nu(n){var e=Qn(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=Gt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((ns&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,wt.lanes|=u,is|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,pi(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,wt.lanes|=s,is|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Du(n){var e=Qn(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);pi(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function sv(){}function av(n,e){var t=wt,i=Qn(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,$f(cv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(t.flags|=2048,To(9,lv.bind(null,t,i,r,e),void 0,null),$t===null)throw Error(re(349));ns&30||ov(t,e,r)}return r}function ov(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function lv(n,e,t,i){e.value=t,e.getSnapshot=i,uv(e)&&dv(n)}function cv(n,e,t){return t(function(){uv(e)&&dv(n)})}function uv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!pi(n,t)}catch{return!0}}function dv(n){var e=er(n,1);e!==null&&di(e,n,1,-1)}function Fm(n){var e=Si();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:n},e.queue=n,n=n.dispatch=JS.bind(null,wt,n),[e.memoizedState,n]}function To(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function hv(){return Qn().memoizedState}function Xl(n,e,t,i){var r=Si();wt.flags|=n,r.memoizedState=To(1|e,t,void 0,i===void 0?null:i)}function qc(n,e,t,i){var r=Qn();i=i===void 0?null:i;var s=void 0;if(Gt!==null){var a=Gt.memoizedState;if(s=a.destroy,i!==null&&Yf(i,a.deps)){r.memoizedState=To(e,t,s,i);return}}wt.flags|=n,r.memoizedState=To(1|e,t,s,i)}function Om(n,e){return Xl(8390656,8,n,e)}function $f(n,e){return qc(2048,8,n,e)}function fv(n,e){return qc(4,2,n,e)}function pv(n,e){return qc(4,4,n,e)}function mv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function gv(n,e,t){return t=t!=null?t.concat([n]):null,qc(4,4,mv.bind(null,e,n),t)}function Zf(){}function _v(n,e){var t=Qn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function vv(n,e){var t=Qn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function xv(n,e,t){return ns&21?(pi(t,e)||(t=T_(),wt.lanes|=t,is|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Mn=!0),n.memoizedState=t)}function $S(n,e){var t=ut;ut=t!==0&&4>t?t:4,n(!0);var i=Iu.transition;Iu.transition={};try{n(!1),e()}finally{ut=t,Iu.transition=i}}function yv(){return Qn().memoizedState}function ZS(n,e,t){var i=Cr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Sv(n))Mv(e,t);else if(t=nv(n,e,t,i),t!==null){var r=_n();di(t,n,i,r),Ev(t,e,i)}}function JS(n,e,t){var i=Cr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sv(n))Mv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,pi(o,a)){var l=e.interleaved;l===null?(r.next=r,Hf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=nv(n,e,r,i),t!==null&&(r=_n(),di(t,n,i,r),Ev(t,e,i))}}function Sv(n){var e=n.alternate;return n===wt||e!==null&&e===wt}function Mv(n,e){eo=Tc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Ev(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Rf(n,t)}}var wc={readContext:Jn,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},QS={readContext:Jn,useCallback:function(n,e){return Si().memoizedState=[n,e===void 0?null:e],n},useContext:Jn,useEffect:Om,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Xl(4194308,4,mv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Xl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Xl(4,2,n,e)},useMemo:function(n,e){var t=Si();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Si();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=ZS.bind(null,wt,n),[i.memoizedState,n]},useRef:function(n){var e=Si();return n={current:n},e.memoizedState=n},useState:Fm,useDebugValue:Zf,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=Fm(!1),e=n[0];return n=$S.bind(null,n[1]),Si().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=wt,r=Si();if(Mt){if(t===void 0)throw Error(re(407));t=t()}else{if(t=e(),$t===null)throw Error(re(349));ns&30||ov(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Om(cv.bind(null,i,s,n),[n]),i.flags|=2048,To(9,lv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Si(),e=$t.identifierPrefix;if(Mt){var t=ji,i=Xi;t=(i&~(1<<32-ui(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Mo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=qS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},eM={readContext:Jn,useCallback:_v,useContext:Jn,useEffect:$f,useImperativeHandle:gv,useInsertionEffect:fv,useLayoutEffect:pv,useMemo:vv,useReducer:Nu,useRef:hv,useState:function(){return Nu(Eo)},useDebugValue:Zf,useDeferredValue:function(n){var e=Qn();return xv(e,Gt.memoizedState,n)},useTransition:function(){var n=Nu(Eo)[0],e=Qn().memoizedState;return[n,e]},useMutableSource:sv,useSyncExternalStore:av,useId:yv,unstable_isNewReconciler:!1},tM={readContext:Jn,useCallback:_v,useContext:Jn,useEffect:$f,useImperativeHandle:gv,useInsertionEffect:fv,useLayoutEffect:pv,useMemo:vv,useReducer:Du,useRef:hv,useState:function(){return Du(Eo)},useDebugValue:Zf,useDeferredValue:function(n){var e=Qn();return Gt===null?e.memoizedState=n:xv(e,Gt.memoizedState,n)},useTransition:function(){var n=Du(Eo)[0],e=Qn().memoizedState;return[n,e]},useMutableSource:sv,useSyncExternalStore:av,useId:yv,unstable_isNewReconciler:!1};function si(n,e){if(n&&n.defaultProps){e=Rt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function ah(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Rt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var $c={isMounted:function(n){return(n=n._reactInternals)?ls(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=_n(),r=Cr(n),s=qi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ar(n,s,r),e!==null&&(di(e,n,r,i),Vl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=_n(),r=Cr(n),s=qi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ar(n,s,r),e!==null&&(di(e,n,r,i),Vl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=_n(),i=Cr(n),r=qi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ar(n,r,i),e!==null&&(di(e,n,i,t),Vl(e,n,i))}};function Bm(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!go(t,i)||!go(r,s):!0}function Tv(n,e,t){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Jn(s):(r=Tn(e)?es:dn.current,i=e.contextTypes,s=(i=i!=null)?Qs(n,r):Ir),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$c,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function zm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&$c.enqueueReplaceState(e,e.state,null)}function oh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Vf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Jn(s):(s=Tn(e)?es:dn.current,r.context=Qs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ah(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&$c.enqueueReplaceState(r,r.state,null),Mc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ia(n,e){try{var t="",i=e;do t+=Cy(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ku(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function lh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var nM=typeof WeakMap=="function"?WeakMap:Map;function wv(n,e,t){t=qi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ac||(Ac=!0,vh=i),lh(n,e)},t}function bv(n,e,t){t=qi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){lh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){lh(n,e),typeof i!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Gm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new nM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=gM.bind(null,n,e,t),e.then(n,n))}function Hm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Vm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=qi(-1,1),e.tag=2,Ar(t,e,1))),t.lanes|=1),n)}var iM=ir.ReactCurrentOwner,Mn=!1;function mn(n,e,t,i){e.child=n===null?tv(e,null,t,i):ta(e,n.child,t,i)}function Wm(n,e,t,i,r){t=t.render;var s=e.ref;return Ys(e,r),i=Kf(n,e,t,i,s,r),t=qf(),n!==null&&!Mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,tr(n,e,r)):(Mt&&t&&Uf(e),e.flags|=1,mn(n,e,i,r),e.child)}function Xm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!sp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Av(n,e,s,i,r)):(n=ql(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:go,t(a,i)&&n.ref===e.ref)return tr(n,e,r)}return e.flags|=1,n=Pr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Av(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(go(s,i)&&n.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Mn=!0);else return e.lanes=n.lanes,tr(n,e,r)}return ch(n,e,t,i,r)}function Rv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(Gs,Pn),Pn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,_t(Gs,Pn),Pn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,_t(Gs,Pn),Pn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,_t(Gs,Pn),Pn|=i;return mn(n,e,r,t),e.child}function Cv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ch(n,e,t,i,r){var s=Tn(t)?es:dn.current;return s=Qs(e,s),Ys(e,r),t=Kf(n,e,t,i,s,r),i=qf(),n!==null&&!Mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,tr(n,e,r)):(Mt&&i&&Uf(e),e.flags|=1,mn(n,e,t,r),e.child)}function jm(n,e,t,i,r){if(Tn(t)){var s=!0;_c(e)}else s=!1;if(Ys(e,r),e.stateNode===null)jl(n,e),Tv(e,t,i),oh(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Jn(c):(c=Tn(t)?es:dn.current,c=Qs(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&zm(e,a,i,c),mr=!1;var d=e.memoizedState;a.state=d,Mc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||En.current||mr?(typeof u=="function"&&(ah(e,t,u,i),l=e.memoizedState),(o=mr||Bm(e,t,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,iv(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:si(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Jn(l):(l=Tn(t)?es:dn.current,l=Qs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&zm(e,a,i,l),mr=!1,d=e.memoizedState,a.state=d,Mc(e,i,a,r);var g=e.memoizedState;o!==h||d!==g||En.current||mr?(typeof p=="function"&&(ah(e,t,p,i),g=e.memoizedState),(c=mr||Bm(e,t,c,i,d,g,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return uh(n,e,t,i,s,r)}function uh(n,e,t,i,r,s){Cv(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Lm(e,t,!1),tr(n,e,s);i=e.stateNode,iM.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=ta(e,n.child,null,s),e.child=ta(e,null,o,s)):mn(n,e,o,s),e.memoizedState=i.state,r&&Lm(e,t,!0),e.child}function Pv(n){var e=n.stateNode;e.pendingContext?Pm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Pm(n,e.context,!1),Wf(n,e.containerInfo)}function Ym(n,e,t,i,r){return ea(),Of(r),e.flags|=256,mn(n,e,t,i),e.child}var dh={dehydrated:null,treeContext:null,retryLane:0};function hh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Lv(n,e,t){var i=e.pendingProps,r=Tt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),_t(Tt,r&1),n===null)return rh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Qc(a,i,0,null),n=Qr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=hh(t),e.memoizedState=dh,n):Jf(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return rM(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Pr(o,s):(s=Qr(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?hh(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=dh,i}return s=n.child,n=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Jf(n,e){return e=Qc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function sl(n,e,t,i){return i!==null&&Of(i),ta(e,n.child,null,t),n=Jf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function rM(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=ku(Error(re(422))),sl(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Qc({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ta(e,n.child,null,a),e.child.memoizedState=hh(a),e.memoizedState=dh,s);if(!(e.mode&1))return sl(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=ku(s,i,void 0),sl(n,e,a,i)}if(o=(a&n.childLanes)!==0,Mn||o){if(i=$t,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,er(n,r),di(i,n,r,-1))}return rp(),i=ku(Error(re(421))),sl(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=_M.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Nn=br(r.nextSibling),Un=e,Mt=!0,oi=null,n!==null&&(Xn[jn++]=Xi,Xn[jn++]=ji,Xn[jn++]=ts,Xi=n.id,ji=n.overflow,ts=e),e=Jf(e,i.children),e.flags|=4096,e)}function Km(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),sh(n.return,e,t)}function Uu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Iv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(mn(n,e,i.children,t),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Km(n,t,e);else if(n.tag===19)Km(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(_t(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ec(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Uu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ec(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Uu(e,!0,t,null,s);break;case"together":Uu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function tr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),is|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(re(153));if(e.child!==null){for(n=e.child,t=Pr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Pr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function sM(n,e,t){switch(e.tag){case 3:Pv(e),ea();break;case 5:rv(e);break;case 1:Tn(e.type)&&_c(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(yc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(Tt,Tt.current&1),e.flags|=128,null):t&e.child.childLanes?Lv(n,e,t):(_t(Tt,Tt.current&1),n=tr(n,e,t),n!==null?n.sibling:null);_t(Tt,Tt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Iv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,Rv(n,e,t)}return tr(n,e,t)}var Nv,fh,Dv,kv;Nv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fh=function(){};Dv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,$r(Ri.current);var s=null;switch(t){case"input":r=kd(n,r),i=kd(n,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Od(n,r),i=Od(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=mc)}zd(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(lo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(lo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};kv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ea(n,e){if(!Mt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function on(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function aM(n,e,t){var i=e.pendingProps;switch(Ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return Tn(e.type)&&gc(),on(e),null;case 3:return i=e.stateNode,na(),yt(En),yt(dn),jf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(il(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(Sh(oi),oi=null))),fh(n,e),on(e),null;case 5:Xf(e);var r=$r(So.current);if(t=e.type,n!==null&&e.stateNode!=null)Dv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return on(e),null}if(n=$r(Ri.current),il(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ti]=e,i[xo]=s,n=(e.mode&1)!==0,t){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<Va.length;r++)xt(Va[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":im(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":sm(i,s),xt("invalid",i)}zd(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,o,n),r=["children",""+o]):lo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&xt("scroll",i)}switch(t){case"input":Ko(i),rm(i,s,!0);break;case"textarea":Ko(i),am(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=mc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=c_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Ti]=e,n[xo]=i,Nv(n,e,!1,!1),e.stateNode=n;e:{switch(a=Gd(t,i),t){case"dialog":xt("cancel",n),xt("close",n),r=i;break;case"iframe":case"object":case"embed":xt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Va.length;r++)xt(Va[r],n);r=i;break;case"source":xt("error",n),r=i;break;case"img":case"image":case"link":xt("error",n),xt("load",n),r=i;break;case"details":xt("toggle",n),r=i;break;case"input":im(n,i),r=kd(n,i),xt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),xt("invalid",n);break;case"textarea":sm(n,i),r=Od(n,i),xt("invalid",n);break;default:r=i}zd(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?h_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&co(n,l):typeof l=="number"&&co(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(lo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xt("scroll",n):l!=null&&Mf(n,s,l,a))}switch(t){case"input":Ko(n),rm(n,i,!1);break;case"textarea":Ko(n),am(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Lr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Vs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Vs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=mc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(n&&e.stateNode!=null)kv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=$r(So.current),$r(Ri.current),il(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ti]=e,(s=i.nodeValue!==t)&&(n=Un,n!==null))switch(n.tag){case 3:nl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&nl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ti]=e,e.stateNode=i}return on(e),null;case 13:if(yt(Tt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Mt&&Nn!==null&&e.mode&1&&!(e.flags&128))Q_(),ea(),e.flags|=98560,s=!1;else if(s=il(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Ti]=e}else ea(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else oi!==null&&(Sh(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Tt.current&1?Ht===0&&(Ht=3):rp())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return na(),fh(n,e),n===null&&_o(e.stateNode.containerInfo),on(e),null;case 10:return Gf(e.type._context),on(e),null;case 17:return Tn(e.type)&&gc(),on(e),null;case 19:if(yt(Tt),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ea(s,!1);else{if(Ht!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Ec(n),a!==null){for(e.flags|=128,Ea(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return _t(Tt,Tt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Lt()>ra&&(e.flags|=128,i=!0,Ea(s,!1),e.lanes=4194304)}else{if(!i)if(n=Ec(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Mt)return on(e),null}else 2*Lt()-s.renderingStartTime>ra&&t!==1073741824&&(e.flags|=128,i=!0,Ea(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,t=Tt.current,_t(Tt,i?t&1|2:t&1),e):(on(e),null);case 22:case 23:return ip(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function oM(n,e){switch(Ff(e),e.tag){case 1:return Tn(e.type)&&gc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return na(),yt(En),yt(dn),jf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Xf(e),null;case 13:if(yt(Tt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(re(340));ea()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return yt(Tt),null;case 4:return na(),null;case 10:return Gf(e.type._context),null;case 22:case 23:return ip(),null;case 24:return null;default:return null}}var al=!1,un=!1,lM=typeof WeakSet=="function"?WeakSet:Set,ye=null;function zs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ct(n,e,i)}else t.current=null}function ph(n,e,t){try{t()}catch(i){Ct(n,e,i)}}var qm=!1;function cM(n,e){if(Zd=hc,n=z_(),kf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++c===r&&(o=a),d===s&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Jd={focusedElem:n,selectionRange:t},hc=!1,ye=e;ye!==null;)if(e=ye,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ye=n;else for(;ye!==null;){e=ye;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,m=g.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:si(e.type,S),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){Ct(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}return g=qm,qm=!1,g}function to(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&ph(e,t,s)}r=r.next}while(r!==i)}}function Zc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function mh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Uv(n){var e=n.alternate;e!==null&&(n.alternate=null,Uv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ti],delete e[xo],delete e[th],delete e[XS],delete e[jS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Fv(n){return n.tag===5||n.tag===3||n.tag===4}function $m(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=mc));else if(i!==4&&(n=n.child,n!==null))for(gh(n,e,t),n=n.sibling;n!==null;)gh(n,e,t),n=n.sibling}function _h(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(_h(n,e,t),n=n.sibling;n!==null;)_h(n,e,t),n=n.sibling}var Zt=null,ai=!1;function or(n,e,t){for(t=t.child;t!==null;)Ov(n,e,t),t=t.sibling}function Ov(n,e,t){if(Ai&&typeof Ai.onCommitFiberUnmount=="function")try{Ai.onCommitFiberUnmount(Vc,t)}catch{}switch(t.tag){case 5:un||zs(t,e);case 6:var i=Zt,r=ai;Zt=null,or(n,e,t),Zt=i,ai=r,Zt!==null&&(ai?(n=Zt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Zt.removeChild(t.stateNode));break;case 18:Zt!==null&&(ai?(n=Zt,t=t.stateNode,n.nodeType===8?Cu(n.parentNode,t):n.nodeType===1&&Cu(n,t),po(n)):Cu(Zt,t.stateNode));break;case 4:i=Zt,r=ai,Zt=t.stateNode.containerInfo,ai=!0,or(n,e,t),Zt=i,ai=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ph(t,e,a),r=r.next}while(r!==i)}or(n,e,t);break;case 1:if(!un&&(zs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Ct(t,e,o)}or(n,e,t);break;case 21:or(n,e,t);break;case 22:t.mode&1?(un=(i=un)||t.memoizedState!==null,or(n,e,t),un=i):or(n,e,t);break;default:or(n,e,t)}}function Zm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new lM),e.forEach(function(i){var r=vM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ti(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Zt=o.stateNode,ai=!1;break e;case 3:Zt=o.stateNode.containerInfo,ai=!0;break e;case 4:Zt=o.stateNode.containerInfo,ai=!0;break e}o=o.return}if(Zt===null)throw Error(re(160));Ov(s,a,r),Zt=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Bv(e,n),e=e.sibling}function Bv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ti(e,n),vi(n),i&4){try{to(3,n,n.return),Zc(3,n)}catch(S){Ct(n,n.return,S)}try{to(5,n,n.return)}catch(S){Ct(n,n.return,S)}}break;case 1:ti(e,n),vi(n),i&512&&t!==null&&zs(t,t.return);break;case 5:if(ti(e,n),vi(n),i&512&&t!==null&&zs(t,t.return),n.flags&32){var r=n.stateNode;try{co(r,"")}catch(S){Ct(n,n.return,S)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&o_(r,s),Gd(o,a);var c=Gd(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?h_(r,h):u==="dangerouslySetInnerHTML"?u_(r,h):u==="children"?co(r,h):Mf(r,u,h,c)}switch(o){case"input":Ud(r,s);break;case"textarea":l_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Vs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Vs(r,!!s.multiple,s.defaultValue,!0):Vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[xo]=s}catch(S){Ct(n,n.return,S)}}break;case 6:if(ti(e,n),vi(n),i&4){if(n.stateNode===null)throw Error(re(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(S){Ct(n,n.return,S)}}break;case 3:if(ti(e,n),vi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{po(e.containerInfo)}catch(S){Ct(n,n.return,S)}break;case 4:ti(e,n),vi(n);break;case 13:ti(e,n),vi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(tp=Lt())),i&4&&Zm(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(un=(c=un)||u,ti(e,n),un=c):ti(e,n),vi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(ye=n,u=n.child;u!==null;){for(h=ye=u;ye!==null;){switch(d=ye,p=d.child,d.tag){case 0:case 11:case 14:case 15:to(4,d,d.return);break;case 1:zs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(S){Ct(i,t,S)}}break;case 5:zs(d,d.return);break;case 22:if(d.memoizedState!==null){Qm(h);continue}}p!==null?(p.return=d,ye=p):Qm(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=d_("display",a))}catch(S){Ct(n,n.return,S)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){Ct(n,n.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ti(e,n),vi(n),i&4&&Zm(n);break;case 21:break;default:ti(e,n),vi(n)}}function vi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Fv(t)){var i=t;break e}t=t.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(co(r,""),i.flags&=-33);var s=$m(n);_h(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=$m(n);gh(n,o,a);break;default:throw Error(re(161))}}catch(l){Ct(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function uM(n,e,t){ye=n,zv(n)}function zv(n,e,t){for(var i=(n.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||al;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||un;o=al;var c=un;if(al=a,(un=l)&&!c)for(ye=r;ye!==null;)a=ye,l=a.child,a.tag===22&&a.memoizedState!==null?eg(r):l!==null?(l.return=a,ye=l):eg(r);for(;s!==null;)ye=s,zv(s),s=s.sibling;ye=r,al=o,un=c}Jm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):Jm(n)}}function Jm(n){for(;ye!==null;){var e=ye;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||Zc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:si(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Um(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Um(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&po(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}un||e.flags&512&&mh(e)}catch(d){Ct(e,e.return,d)}}if(e===n){ye=null;break}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}}function Qm(n){for(;ye!==null;){var e=ye;if(e===n){ye=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ye=t;break}ye=e.return}}function eg(n){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Zc(4,e)}catch(l){Ct(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{mh(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{mh(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===n){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var dM=Math.ceil,bc=ir.ReactCurrentDispatcher,Qf=ir.ReactCurrentOwner,Zn=ir.ReactCurrentBatchConfig,tt=0,$t=null,Ot=null,en=0,Pn=0,Gs=Ur(0),Ht=0,wo=null,is=0,Jc=0,ep=0,no=null,Sn=null,tp=0,ra=1/0,Vi=null,Ac=!1,vh=null,Rr=null,ol=!1,Mr=null,Rc=0,io=0,xh=null,Yl=-1,Kl=0;function _n(){return tt&6?Lt():Yl!==-1?Yl:Yl=Lt()}function Cr(n){return n.mode&1?tt&2&&en!==0?en&-en:KS.transition!==null?(Kl===0&&(Kl=T_()),Kl):(n=ut,n!==0||(n=window.event,n=n===void 0?16:L_(n.type)),n):1}function di(n,e,t,i){if(50<io)throw io=0,xh=null,Error(re(185));Oo(n,t,i),(!(tt&2)||n!==$t)&&(n===$t&&(!(tt&2)&&(Jc|=t),Ht===4&&xr(n,en)),wn(n,i),t===1&&tt===0&&!(e.mode&1)&&(ra=Lt()+500,Kc&&Fr()))}function wn(n,e){var t=n.callbackNode;Ky(n,e);var i=dc(n,n===$t?en:0);if(i===0)t!==null&&cm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&cm(t),e===1)n.tag===0?YS(tg.bind(null,n)):$_(tg.bind(null,n)),VS(function(){!(tt&6)&&Fr()}),t=null;else{switch(w_(i)){case 1:t=Af;break;case 4:t=M_;break;case 16:t=uc;break;case 536870912:t=E_;break;default:t=uc}t=Kv(t,Gv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Gv(n,e){if(Yl=-1,Kl=0,tt&6)throw Error(re(327));var t=n.callbackNode;if(Ks()&&n.callbackNode!==t)return null;var i=dc(n,n===$t?en:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Cc(n,i);else{e=i;var r=tt;tt|=2;var s=Vv();($t!==n||en!==e)&&(Vi=null,ra=Lt()+500,Jr(n,e));do try{pM();break}catch(o){Hv(n,o)}while(!0);zf(),bc.current=s,tt=r,Ot!==null?e=0:($t=null,en=0,e=Ht)}if(e!==0){if(e===2&&(r=jd(n),r!==0&&(i=r,e=yh(n,r))),e===1)throw t=wo,Jr(n,0),xr(n,i),wn(n,Lt()),t;if(e===6)xr(n,i);else{if(r=n.current.alternate,!(i&30)&&!hM(r)&&(e=Cc(n,i),e===2&&(s=jd(n),s!==0&&(i=s,e=yh(n,s))),e===1))throw t=wo,Jr(n,0),xr(n,i),wn(n,Lt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Yr(n,Sn,Vi);break;case 3:if(xr(n,i),(i&130023424)===i&&(e=tp+500-Lt(),10<e)){if(dc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){_n(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=eh(Yr.bind(null,n,Sn,Vi),e);break}Yr(n,Sn,Vi);break;case 4:if(xr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-ui(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dM(i/1960))-i,10<i){n.timeoutHandle=eh(Yr.bind(null,n,Sn,Vi),i);break}Yr(n,Sn,Vi);break;case 5:Yr(n,Sn,Vi);break;default:throw Error(re(329))}}}return wn(n,Lt()),n.callbackNode===t?Gv.bind(null,n):null}function yh(n,e){var t=no;return n.current.memoizedState.isDehydrated&&(Jr(n,e).flags|=256),n=Cc(n,e),n!==2&&(e=Sn,Sn=t,e!==null&&Sh(e)),n}function Sh(n){Sn===null?Sn=n:Sn.push.apply(Sn,n)}function hM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(n,e){for(e&=~ep,e&=~Jc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ui(e),i=1<<t;n[t]=-1,e&=~i}}function tg(n){if(tt&6)throw Error(re(327));Ks();var e=dc(n,0);if(!(e&1))return wn(n,Lt()),null;var t=Cc(n,e);if(n.tag!==0&&t===2){var i=jd(n);i!==0&&(e=i,t=yh(n,i))}if(t===1)throw t=wo,Jr(n,0),xr(n,e),wn(n,Lt()),t;if(t===6)throw Error(re(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Yr(n,Sn,Vi),wn(n,Lt()),null}function np(n,e){var t=tt;tt|=1;try{return n(e)}finally{tt=t,tt===0&&(ra=Lt()+500,Kc&&Fr())}}function rs(n){Mr!==null&&Mr.tag===0&&!(tt&6)&&Ks();var e=tt;tt|=1;var t=Zn.transition,i=ut;try{if(Zn.transition=null,ut=1,n)return n()}finally{ut=i,Zn.transition=t,tt=e,!(tt&6)&&Fr()}}function ip(){Pn=Gs.current,yt(Gs)}function Jr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,HS(t)),Ot!==null)for(t=Ot.return;t!==null;){var i=t;switch(Ff(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gc();break;case 3:na(),yt(En),yt(dn),jf();break;case 5:Xf(i);break;case 4:na();break;case 13:yt(Tt);break;case 19:yt(Tt);break;case 10:Gf(i.type._context);break;case 22:case 23:ip()}t=t.return}if($t=n,Ot=n=Pr(n.current,null),en=Pn=e,Ht=0,wo=null,ep=Jc=is=0,Sn=no=null,qr!==null){for(e=0;e<qr.length;e++)if(t=qr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}qr=null}return n}function Hv(n,e){do{var t=Ot;try{if(zf(),Wl.current=wc,Tc){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tc=!1}if(ns=0,qt=Gt=wt=null,eo=!1,Mo=0,Qf.current=null,t===null||t.return===null){Ht=1,wo=e,Ot=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=en,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Hm(a);if(p!==null){p.flags&=-257,Vm(p,a,o,s,e),p.mode&1&&Gm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var S=new Set;S.add(l),e.updateQueue=S}else g.add(l);break e}else{if(!(e&1)){Gm(s,c,e),rp();break e}l=Error(re(426))}}else if(Mt&&o.mode&1){var m=Hm(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Vm(m,a,o,s,e),Of(ia(l,o));break e}}s=l=ia(l,o),Ht!==4&&(Ht=2),no===null?no=[s]:no.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=wv(s,l,e);km(s,f);break e;case 1:o=l;var _=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Rr===null||!Rr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=bv(s,o,e);km(s,y);break e}}s=s.return}while(s!==null)}Xv(t)}catch(E){e=E,Ot===t&&t!==null&&(Ot=t=t.return);continue}break}while(!0)}function Vv(){var n=bc.current;return bc.current=wc,n===null?wc:n}function rp(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),$t===null||!(is&268435455)&&!(Jc&268435455)||xr($t,en)}function Cc(n,e){var t=tt;tt|=2;var i=Vv();($t!==n||en!==e)&&(Vi=null,Jr(n,e));do try{fM();break}catch(r){Hv(n,r)}while(!0);if(zf(),tt=t,bc.current=i,Ot!==null)throw Error(re(261));return $t=null,en=0,Ht}function fM(){for(;Ot!==null;)Wv(Ot)}function pM(){for(;Ot!==null&&!By();)Wv(Ot)}function Wv(n){var e=Yv(n.alternate,n,Pn);n.memoizedProps=n.pendingProps,e===null?Xv(n):Ot=e,Qf.current=null}function Xv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=oM(t,e),t!==null){t.flags&=32767,Ot=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ht=6,Ot=null;return}}else if(t=aM(t,e,Pn),t!==null){Ot=t;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=n}while(e!==null);Ht===0&&(Ht=5)}function Yr(n,e,t){var i=ut,r=Zn.transition;try{Zn.transition=null,ut=1,mM(n,e,t,i)}finally{Zn.transition=r,ut=i}return null}function mM(n,e,t,i){do Ks();while(Mr!==null);if(tt&6)throw Error(re(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(re(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(qy(n,s),n===$t&&(Ot=$t=null,en=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ol||(ol=!0,Kv(uc,function(){return Ks(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Zn.transition,Zn.transition=null;var a=ut;ut=1;var o=tt;tt|=4,Qf.current=null,cM(n,t),Bv(t,n),kS(Jd),hc=!!Zd,Jd=Zd=null,n.current=t,uM(t),zy(),tt=o,ut=a,Zn.transition=s}else n.current=t;if(ol&&(ol=!1,Mr=n,Rc=r),s=n.pendingLanes,s===0&&(Rr=null),Vy(t.stateNode),wn(n,Lt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ac)throw Ac=!1,n=vh,vh=null,n;return Rc&1&&n.tag!==0&&Ks(),s=n.pendingLanes,s&1?n===xh?io++:(io=0,xh=n):io=0,Fr(),null}function Ks(){if(Mr!==null){var n=w_(Rc),e=Zn.transition,t=ut;try{if(Zn.transition=null,ut=16>n?16:n,Mr===null)var i=!1;else{if(n=Mr,Mr=null,Rc=0,tt&6)throw Error(re(331));var r=tt;for(tt|=4,ye=n.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ye=c;ye!==null;){var u=ye;switch(u.tag){case 0:case 11:case 15:to(8,u,s)}var h=u.child;if(h!==null)h.return=u,ye=h;else for(;ye!==null;){u=ye;var d=u.sibling,p=u.return;if(Uv(u),u===c){ye=null;break}if(d!==null){d.return=p,ye=d;break}ye=p}}}var g=s.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ye=f;break e}ye=s.return}}var _=n.current;for(ye=_;ye!==null;){a=ye;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,ye=M;else e:for(a=_;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Zc(9,o)}}catch(E){Ct(o,o.return,E)}if(o===a){ye=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ye=y;break e}ye=o.return}}if(tt=r,Fr(),Ai&&typeof Ai.onPostCommitFiberRoot=="function")try{Ai.onPostCommitFiberRoot(Vc,n)}catch{}i=!0}return i}finally{ut=t,Zn.transition=e}}return!1}function ng(n,e,t){e=ia(t,e),e=wv(n,e,1),n=Ar(n,e,1),e=_n(),n!==null&&(Oo(n,1,e),wn(n,e))}function Ct(n,e,t){if(n.tag===3)ng(n,n,t);else for(;e!==null;){if(e.tag===3){ng(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rr===null||!Rr.has(i))){n=ia(t,n),n=bv(e,n,1),e=Ar(e,n,1),n=_n(),e!==null&&(Oo(e,1,n),wn(e,n));break}}e=e.return}}function gM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=_n(),n.pingedLanes|=n.suspendedLanes&t,$t===n&&(en&t)===t&&(Ht===4||Ht===3&&(en&130023424)===en&&500>Lt()-tp?Jr(n,0):ep|=t),wn(n,e)}function jv(n,e){e===0&&(n.mode&1?(e=Zo,Zo<<=1,!(Zo&130023424)&&(Zo=4194304)):e=1);var t=_n();n=er(n,e),n!==null&&(Oo(n,e,t),wn(n,t))}function _M(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),jv(n,t)}function vM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),jv(n,t)}var Yv;Yv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||En.current)Mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Mn=!1,sM(n,e,t);Mn=!!(n.flags&131072)}else Mn=!1,Mt&&e.flags&1048576&&Z_(e,xc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;jl(n,e),n=e.pendingProps;var r=Qs(e,dn.current);Ys(e,t),r=Kf(null,e,i,n,r,t);var s=qf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tn(i)?(s=!0,_c(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vf(e),r.updater=$c,e.stateNode=r,r._reactInternals=e,oh(e,i,n,t),e=uh(null,e,i,!0,s,t)):(e.tag=0,Mt&&s&&Uf(e),mn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(jl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yM(i),n=si(i,n),r){case 0:e=ch(null,e,i,n,t);break e;case 1:e=jm(null,e,i,n,t);break e;case 11:e=Wm(null,e,i,n,t);break e;case 14:e=Xm(null,e,i,si(i.type,n),t);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),ch(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),jm(n,e,i,r,t);case 3:e:{if(Pv(e),n===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,iv(n,e),Mc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ia(Error(re(423)),e),e=Ym(n,e,i,t,r);break e}else if(i!==r){r=ia(Error(re(424)),e),e=Ym(n,e,i,t,r);break e}else for(Nn=br(e.stateNode.containerInfo.firstChild),Un=e,Mt=!0,oi=null,t=tv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ea(),i===r){e=tr(n,e,t);break e}mn(n,e,i,t)}e=e.child}return e;case 5:return rv(e),n===null&&rh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Qd(i,r)?a=null:s!==null&&Qd(i,s)&&(e.flags|=32),Cv(n,e),mn(n,e,a,t),e.child;case 6:return n===null&&rh(e),null;case 13:return Lv(n,e,t);case 4:return Wf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ta(e,null,i,t):mn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Wm(n,e,i,r,t);case 7:return mn(n,e,e.pendingProps,t),e.child;case 8:return mn(n,e,e.pendingProps.children,t),e.child;case 12:return mn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,_t(yc,i._currentValue),i._currentValue=a,s!==null)if(pi(s.value,a)){if(s.children===r.children&&!En.current){e=tr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=qi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),sh(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),sh(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}mn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ys(e,t),r=Jn(r),i=i(r),e.flags|=1,mn(n,e,i,t),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),Xm(n,e,i,r,t);case 15:return Av(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),jl(n,e),e.tag=1,Tn(i)?(n=!0,_c(e)):n=!1,Ys(e,t),Tv(e,i,r),oh(e,i,r,t),uh(null,e,i,!0,n,t);case 19:return Iv(n,e,t);case 22:return Rv(n,e,t)}throw Error(re(156,e.tag))};function Kv(n,e){return S_(n,e)}function xM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,e,t,i){return new xM(n,e,t,i)}function sp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function yM(n){if(typeof n=="function")return sp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Tf)return 11;if(n===wf)return 14}return 2}function Pr(n,e){var t=n.alternate;return t===null?(t=Yn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ql(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")sp(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Ls:return Qr(t.children,r,s,e);case Ef:a=8,r|=8;break;case Ld:return n=Yn(12,t,e,r|2),n.elementType=Ld,n.lanes=s,n;case Id:return n=Yn(13,t,e,r),n.elementType=Id,n.lanes=s,n;case Nd:return n=Yn(19,t,e,r),n.elementType=Nd,n.lanes=s,n;case r_:return Qc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case n_:a=10;break e;case i_:a=9;break e;case Tf:a=11;break e;case wf:a=14;break e;case pr:a=16,i=null;break e}throw Error(re(130,n==null?n:typeof n,""))}return e=Yn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Qr(n,e,t,i){return n=Yn(7,n,i,e),n.lanes=t,n}function Qc(n,e,t,i){return n=Yn(22,n,i,e),n.elementType=r_,n.lanes=t,n.stateNode={isHidden:!1},n}function Fu(n,e,t){return n=Yn(6,n,null,e),n.lanes=t,n}function Ou(n,e,t){return e=Yn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function SM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vu(0),this.expirationTimes=vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ap(n,e,t,i,r,s,a,o,l){return n=new SM(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),n}function MM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function qv(n){if(!n)return Ir;n=n._reactInternals;e:{if(ls(n)!==n||n.tag!==1)throw Error(re(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(n.tag===1){var t=n.type;if(Tn(t))return q_(n,t,e)}return e}function $v(n,e,t,i,r,s,a,o,l){return n=ap(t,i,!0,n,r,s,a,o,l),n.context=qv(null),t=n.current,i=_n(),r=Cr(t),s=qi(i,r),s.callback=e??null,Ar(t,s,r),n.current.lanes=r,Oo(n,r,i),wn(n,i),n}function eu(n,e,t,i){var r=e.current,s=_n(),a=Cr(r);return t=qv(t),e.context===null?e.context=t:e.pendingContext=t,e=qi(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ar(r,e,a),n!==null&&(di(n,r,a,s),Vl(n,r,a)),a}function Pc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ig(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function op(n,e){ig(n,e),(n=n.alternate)&&ig(n,e)}function EM(){return null}var Zv=typeof reportError=="function"?reportError:function(n){console.error(n)};function lp(n){this._internalRoot=n}tu.prototype.render=lp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(re(409));eu(n,e,null,null)};tu.prototype.unmount=lp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;rs(function(){eu(null,n,null,null)}),e[Qi]=null}};function tu(n){this._internalRoot=n}tu.prototype.unstable_scheduleHydration=function(n){if(n){var e=R_();n={blockedOn:null,target:n,priority:e};for(var t=0;t<vr.length&&e!==0&&e<vr[t].priority;t++);vr.splice(t,0,n),t===0&&P_(n)}};function cp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function rg(){}function TM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Pc(a);s.call(c)}}var a=$v(e,i,n,0,null,!1,!1,"",rg);return n._reactRootContainer=a,n[Qi]=a.current,_o(n.nodeType===8?n.parentNode:n),rs(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Pc(l);o.call(c)}}var l=ap(n,0,!1,null,null,!1,!1,"",rg);return n._reactRootContainer=l,n[Qi]=l.current,_o(n.nodeType===8?n.parentNode:n),rs(function(){eu(e,l,t,i)}),l}function iu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Pc(a);o.call(l)}}eu(e,a,n,r)}else a=TM(t,e,n,r,i);return Pc(a)}b_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ha(e.pendingLanes);t!==0&&(Rf(e,t|1),wn(e,Lt()),!(tt&6)&&(ra=Lt()+500,Fr()))}break;case 13:rs(function(){var i=er(n,1);if(i!==null){var r=_n();di(i,n,1,r)}}),op(n,1)}};Cf=function(n){if(n.tag===13){var e=er(n,134217728);if(e!==null){var t=_n();di(e,n,134217728,t)}op(n,134217728)}};A_=function(n){if(n.tag===13){var e=Cr(n),t=er(n,e);if(t!==null){var i=_n();di(t,n,e,i)}op(n,e)}};R_=function(){return ut};C_=function(n,e){var t=ut;try{return ut=n,e()}finally{ut=t}};Vd=function(n,e,t){switch(e){case"input":if(Ud(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Yc(i);if(!r)throw Error(re(90));a_(i),Ud(i,r)}}}break;case"textarea":l_(n,t);break;case"select":e=t.value,e!=null&&Vs(n,!!t.multiple,e,!1)}};m_=np;g_=rs;var wM={usingClientEntryPoint:!1,Events:[zo,ks,Yc,f_,p_,np]},Ta={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bM={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=x_(n),n===null?null:n.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||EM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Vc=ll.inject(bM),Ai=ll}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wM;Bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cp(e))throw Error(re(200));return MM(n,e,null,t)};Bn.createRoot=function(n,e){if(!cp(n))throw Error(re(299));var t=!1,i="",r=Zv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ap(n,1,!1,null,null,t,!1,i,r),n[Qi]=e.current,_o(n.nodeType===8?n.parentNode:n),new lp(e)};Bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(re(188)):(n=Object.keys(n).join(","),Error(re(268,n)));return n=x_(e),n=n===null?null:n.stateNode,n};Bn.flushSync=function(n){return rs(n)};Bn.hydrate=function(n,e,t){if(!nu(e))throw Error(re(200));return iu(null,n,e,!0,t)};Bn.hydrateRoot=function(n,e,t){if(!cp(n))throw Error(re(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=Zv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=$v(e,null,n,1,t??null,r,!1,s,a),n[Qi]=e.current,_o(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new tu(e)};Bn.render=function(n,e,t){if(!nu(e))throw Error(re(200));return iu(null,n,e,!1,t)};Bn.unmountComponentAtNode=function(n){if(!nu(n))throw Error(re(40));return n._reactRootContainer?(rs(function(){iu(null,null,n,!1,function(){n._reactRootContainer=null,n[Qi]=null})}),!0):!1};Bn.unstable_batchedUpdates=np;Bn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!nu(t))throw Error(re(200));if(n==null||n._reactInternals===void 0)throw Error(re(38));return iu(n,e,t,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function Jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jv)}catch(n){console.error(n)}}Jv(),J0.exports=Bn;var AM=J0.exports,Qv,sg=AM;Qv=sg.createRoot,sg.hydrateRoot;const ex=Qe.createContext(null);function RM({children:n}){const[e,t]=Qe.useState("ar"),[i,r]=Qe.useState("idle"),[s,a]=Qe.useState("group"),[o,l]=Qe.useState(!1),[c,u]=Qe.useState(!1),[h,d]=Qe.useState(null),p=Qe.useCallback(()=>{u(!1)},[]),g=Qe.useMemo(()=>({currentScreen:e,arSessionState:i,interactionMode:s,isMenuOpen:o,isInfoOpen:c,selectedObject:h,setScreen:t,setARSessionState:r,setInteractionMode:a,setMenuOpen:l,setInfoOpen:u,setSelectedObject:d,closeInfo:p}),[e,i,s,o,c,h,p]);return C.jsx(ex.Provider,{value:g,children:n})}function up(){const n=Qe.useContext(ex);if(!n)throw new Error("useAppState must be used within AppProvider");return n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dp="186",CM=0,ag=1,PM=2,$l=1,LM=2,Wa=3,Nr=0,bn=1,Ln=2,$i=0,ro=1,og=2,lg=3,cg=4,IM=5,Cs=100,NM=101,DM=102,kM=103,UM=104,FM=200,OM=201,BM=202,zM=203,tx=204,nx=205,GM=206,HM=207,VM=208,WM=209,XM=210,jM=211,YM=212,KM=213,qM=214,Mh=0,Eh=1,Th=2,bo=3,wh=4,bh=5,Ah=6,Rh=7,ix=0,$M=1,ZM=2,Ci=0,rx=1,sx=2,ax=3,ox=4,lx=5,cx=6,ux=7,ug="attached",JM="detached",dx=300,ss=301,sa=302,Bu=303,zu=304,ru=306,aa=1e3,wi=1001,Lc=1002,Vt=1003,hx=1004,Xa=1005,It=1006,Zl=1007,Yi=1008,In=1009,fx=1010,px=1011,Ao=1012,hp=1013,Li=1014,Kn=1015,Ii=1016,fp=1017,pp=1018,Ro=1020,mx=35902,gx=35899,_x=1021,vx=1022,qn=1023,nr=1026,Zr=1027,mp=1028,gp=1029,as=1030,_p=1031,vp=1033,Jl=33776,Ql=33777,ec=33778,tc=33779,Ch=35840,Ph=35841,Lh=35842,Ih=35843,Nh=36196,Dh=37492,kh=37496,Uh=37488,Fh=37489,Ic=37490,Oh=37491,Bh=37808,zh=37809,Gh=37810,Hh=37811,Vh=37812,Wh=37813,Xh=37814,jh=37815,Yh=37816,Kh=37817,qh=37818,$h=37819,Zh=37820,Jh=37821,Qh=36492,ef=36494,tf=36495,nf=36283,rf=36284,Nc=36285,sf=36286,Co=2300,Po=2301,Gu=2302,dg=2303,hg=2400,fg=2401,pg=2402,QM=2500,eE=0,xx=1,af=2,tE=3200,of=0,nE=1,yr="",Ft="srgb",On="srgb-linear",Dc="linear",ot="srgb",Hu=7680,iE=519,rE=512,sE=513,aE=514,xp=515,oE=516,lE=517,yp=518,cE=519,yx=35044,mg="300 es",bi=2e3,Lo=2001;function uE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function dE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hE(){const n=Io("canvas");return n.style.display="block",n}const gg={};function kc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Sx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ce(...n){n=Sx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ie(...n){n=Sx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function qs(...n){const e=n.join(" ");e in gg||(gg[e]=!0,Ce(...n))}function fE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const pE={[Mh]:Eh,[Th]:Ah,[wh]:Rh,[bo]:bh,[Eh]:Mh,[Ah]:Th,[Rh]:wh,[bh]:bo};class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _g=1234567;const so=Math.PI/180,oa=180/Math.PI;function hi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function Sp(n,e){return(n%e+e)%e}function mE(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function gE(n,e,t){return n!==e?(t-n)/(e-n):0}function ao(n,e,t){return(1-t)*n+t*e}function _E(n,e,t,i){return ao(n,e,1-Math.exp(-t*i))}function vE(n,e=1){return e-Math.abs(Sp(n,e*2)-e)}function xE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function yE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function SE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ME(n,e){return n+Math.random()*(e-n)}function EE(n){return n*(.5-Math.random())}function TE(n){n!==void 0&&(_g=n);let e=_g+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wE(n){return n*so}function bE(n){return n*oa}function AE(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function RE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function CE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function PE(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*u,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const lf={DEG2RAD:so,RAD2DEG:oa,generateUUID:hi,clamp:qe,euclideanModulo:Sp,mapLinear:mE,inverseLerp:gE,lerp:ao,damp:_E,pingpong:vE,smoothstep:xE,smootherstep:yE,randInt:SE,randFloat:ME,randFloatSpread:EE,seededRandom:TE,degToRad:wE,radToDeg:bE,isPowerOfTwo:AE,ceilPowerOfTwo:RE,floorPowerOfTwo:CE,setQuaternionFromProperEuler:PE,normalize:lt,denormalize:li},Up=class Up{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Up.prototype.isVector2=!0;let Oe=Up;class Gn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],p=s[a+1],g=s[a+2],S=s[a+3];if(h!==S||l!==d||c!==p||u!==g){let m=l*d+c*p+u*g+h*S;m<0&&(d=-d,p=-p,g=-g,S=-S,m=-m);let f=1-o;if(m<.9995){const _=Math.acos(m),M=Math.sin(_);f=Math.sin(f*_)/M,o=Math.sin(o*_)/M,l=l*f+d*o,c=c*f+p*o,u=u*f+g*o,h=h*f+S*o}else{l=l*f+d*o,c=c*f+p*o,u=u*f+g*o,h=h*f+S*o;const _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fp=class Fp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vu.copy(this).projectOnVector(e),this.sub(Vu)}reflect(e){return this.sub(Vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fp.prototype.isVector3=!0;let F=Fp;const Vu=new F,vg=new Gn,Op=class Op{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],S=r[0],m=r[3],f=r[6],_=r[1],M=r[4],y=r[7],E=r[2],w=r[5],b=r[8];return s[0]=a*S+o*_+l*E,s[3]=a*m+o*M+l*w,s[6]=a*f+o*y+l*b,s[1]=c*S+u*_+h*E,s[4]=c*m+u*M+h*w,s[7]=c*f+u*y+h*b,s[2]=d*S+p*_+g*E,s[5]=d*m+p*M+g*w,s[8]=d*f+p*y+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=t*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=h*S,e[1]=(r*c-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wu.makeScale(e,t)),this}rotate(e){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wu.makeRotation(-e)),this}translate(e,t){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Op.prototype.isMatrix3=!0;let ke=Op;const Wu=new ke,xg=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yg=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LE(){const n={enabled:!0,workingColorSpace:On,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=$s(r.r),r.g=$s(r.g),r.b=$s(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yr?Dc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[On]:{primaries:e,whitePoint:i,transfer:Dc,toXYZ:xg,fromXYZ:yg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:xg,fromXYZ:yg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),n}const Ke=LE();function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fs;class IE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=Io("canvas")),fs.width=e.width,fs.height=e.height;const r=fs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Zi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NE=0;class Mp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xu(r[a].image)):s.push(Xu(r[a]))}else s=Xu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Xu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?IE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let DE=0;const ju=new F;class Wt extends cs{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=wi,r=wi,s=It,a=Yi,o=qn,l=In,c=Wt.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=hi(),this.name="",this.source=new Mp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ju).x}get height(){return this.source.getSize(ju).y}get depth(){return this.source.getSize(ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=dx;Wt.DEFAULT_ANISOTROPY=1;const Bp=class Bp{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(p+1)/2,E=(f+1)/2,w=(u+d)/4,b=(h+S)/4,v=(g+m)/4;return M>y&&M>E?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=b/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=v/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=b/s,r=v/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-S)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bp.prototype.isVector4=!0;let ht=Bp;class kE extends cs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Wt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Mp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends kE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mx extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class UE extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Gc=class Gc{constructor(e,t,i,r,s,a,o,l,c,u,h,d,p,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,p,g,S,m)}set(e,t,i,r,s,a,o,l,c,u,h,d,p,g,S,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,S=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-S*c,t[9]=-o*l,t[2]=S-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,S=c*h;t[0]=d+S*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=S+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,S=c*h;t[0]=d-S*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=S-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,S=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+S,t[1]=l*h,t[5]=S*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,S=o*c;t[0]=l*u,t[4]=S-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-S*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,S=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+S,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=S*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FE,e,OE)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),lr.crossVectors(i,Rn),lr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),lr.crossVectors(i,Rn)),lr.normalize(),cl.crossVectors(Rn,lr),r[0]=lr.x,r[4]=cl.x,r[8]=Rn.x,r[1]=lr.y,r[5]=cl.y,r[9]=Rn.y,r[2]=lr.z,r[6]=cl.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],S=i[6],m=i[10],f=i[14],_=i[3],M=i[7],y=i[11],E=i[15],w=r[0],b=r[4],v=r[8],A=r[12],P=r[1],I=r[5],O=r[9],W=r[13],L=r[2],G=r[6],Q=r[10],Y=r[14],B=r[3],U=r[7],X=r[11],J=r[15];return s[0]=a*w+o*P+l*L+c*B,s[4]=a*b+o*I+l*G+c*U,s[8]=a*v+o*O+l*Q+c*X,s[12]=a*A+o*W+l*Y+c*J,s[1]=u*w+h*P+d*L+p*B,s[5]=u*b+h*I+d*G+p*U,s[9]=u*v+h*O+d*Q+p*X,s[13]=u*A+h*W+d*Y+p*J,s[2]=g*w+S*P+m*L+f*B,s[6]=g*b+S*I+m*G+f*U,s[10]=g*v+S*O+m*Q+f*X,s[14]=g*A+S*W+m*Y+f*J,s[3]=_*w+M*P+y*L+E*B,s[7]=_*b+M*I+y*G+E*U,s[11]=_*v+M*O+y*Q+E*X,s[15]=_*A+M*W+y*Y+E*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],S=e[7],m=e[11],f=e[15],_=l*p-c*d,M=o*p-c*h,y=o*d-l*h,E=a*p-c*u,w=a*d-l*u,b=a*h-o*u;return t*(S*_-m*M+f*y)-i*(g*_-m*E+f*w)+r*(g*M-S*E+f*b)-s*(g*y-S*w+m*b)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],S=e[13],m=e[14],f=e[15],_=t*o-i*a,M=t*l-r*a,y=t*c-s*a,E=i*l-r*o,w=i*c-s*o,b=r*c-s*l,v=u*S-h*g,A=u*m-d*g,P=u*f-p*g,I=h*m-d*S,O=h*f-p*S,W=d*f-p*m,L=_*W-M*O+y*I+E*P-w*A+b*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=(o*W-l*O+c*I)*G,e[1]=(r*O-i*W-s*I)*G,e[2]=(S*b-m*w+f*E)*G,e[3]=(d*w-h*b-p*E)*G,e[4]=(l*P-a*W-c*A)*G,e[5]=(t*W-r*P+s*A)*G,e[6]=(m*y-g*b-f*M)*G,e[7]=(u*b-d*y+p*M)*G,e[8]=(a*O-o*P+c*v)*G,e[9]=(i*P-t*O-s*v)*G,e[10]=(g*w-S*y+f*_)*G,e[11]=(h*y-u*w-p*_)*G,e[12]=(o*A-a*I-l*v)*G,e[13]=(t*I-i*A+r*v)*G,e[14]=(S*M-g*E-m*_)*G,e[15]=(u*E-h*M+d*_)*G,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,g=s*h,S=a*u,m=a*h,f=o*h,_=l*c,M=l*u,y=l*h,E=i.x,w=i.y,b=i.z;return r[0]=(1-(S+f))*E,r[1]=(p+y)*E,r[2]=(g-M)*E,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(d+f))*w,r[6]=(m+_)*w,r[7]=0,r[8]=(g+M)*b,r[9]=(m-_)*b,r[10]=(1-(d+S))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),l=ps.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ni.copy(this);const c=1/a,u=1/o,h=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,t.setFromRotationMatrix(ni),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=bi,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let g,S;if(l)g=s/(a-s),S=a*s/(a-s);else if(o===bi)g=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Lo)g=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=bi,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,S;if(l)g=1/(a-s),S=a/(a-s);else if(o===bi)g=-2/(a-s),S=-(a+s)/(a-s);else if(o===Lo)g=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Gc.prototype.isMatrix4=!0;let Fe=Gc;const ps=new F,ni=new Fe,FE=new F(0,0,0),OE=new F(1,1,1),lr=new F,cl=new F,Rn=new F,Sg=new Fe,Mg=new Gn;class Dr{constructor(e=0,t=0,i=0,r=Dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dr.DEFAULT_ORDER="XYZ";let Ep=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},BE=0;const Eg=new F,ms=new Gn,Fi=new Fe,ul=new F,wa=new F,zE=new F,GE=new Gn,Tg=new F(1,0,0),wg=new F(0,1,0),bg=new F(0,0,1),Ag={type:"added"},HE={type:"removed"},gs={type:"childadded",child:null},Yu={type:"childremoved",child:null};class bt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new F,t=new Dr,i=new Gn,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ke}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(wg,e)}rotateZ(e){return this.rotateOnAxis(bg,e)}translateOnAxis(e,t){return Eg.copy(e).applyQuaternion(this.quaternion),this.position.add(Eg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(wg,e)}translateZ(e){return this.translateOnAxis(bg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ul.copy(e):ul.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(wa,ul,this.up):Fi.lookAt(ul,wa,this.up),this.quaternion.setFromRotationMatrix(Fi),r&&(Fi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Fi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ag),gs.child=e,this.dispatchEvent(gs),gs.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HE),Yu.child=e,this.dispatchEvent(Yu),Yu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ag),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,zE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,GE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bt.DEFAULT_UP=new F(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $n extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VE={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(VE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $n;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function qu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Sp(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=qu(a,s,e+1/3),this.g=qu(a,s,e),this.b=qu(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Ft){function i(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=Ex[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Ke.workingToColorSpace(cn.copy(this),e),Math.round(qe(cn.r*255,0,255))*65536+Math.round(qe(cn.g*255,0,255))*256+Math.round(qe(cn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(cn.copy(this),t);const i=cn.r,r=cn.g,s=cn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Ft){Ke.workingToColorSpace(cn.copy(this),e);const t=cn.r,i=cn.g,r=cn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(dl);const i=ao(cr.h,dl.h,t),r=ao(cr.s,dl.s,t),s=ao(cr.l,dl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Ne;Ne.NAMES=Ex;class WE extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dr,this.environmentIntensity=1,this.environmentRotation=new Dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ii=new F,Oi=new F,$u=new F,Bi=new F,_s=new F,vs=new F,Rg=new F,Zu=new F,Ju=new F,Qu=new F,ed=new ht,td=new ht,nd=new ht;class ci{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ii.subVectors(e,t),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ii.subVectors(r,t),Oi.subVectors(i,t),$u.subVectors(e,t);const a=ii.dot(ii),o=ii.dot(Oi),l=ii.dot($u),c=Oi.dot(Oi),u=Oi.dot($u),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,t),td.fromBufferAttribute(e,i),nd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ed,s.x),a.addScaledVector(td,s.y),a.addScaledVector(nd,s.z),a}static isFrontFacing(e,t,i,r){return ii.subVectors(i,t),Oi.subVectors(e,t),ii.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ii.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;_s.subVectors(r,i),vs.subVectors(s,i),Zu.subVectors(e,i);const l=_s.dot(Zu),c=vs.dot(Zu);if(l<=0&&c<=0)return t.copy(i);Ju.subVectors(e,r);const u=_s.dot(Ju),h=vs.dot(Ju);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(_s,a);Qu.subVectors(e,s);const p=_s.dot(Qu),g=vs.dot(Qu);if(g>=0&&p<=g)return t.copy(s);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(vs,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Rg.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Rg,o);const f=1/(m+S+d);return a=S*f,o=d*f,t.copy(i).addScaledVector(_s,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Di{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(s,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hl.copy(i.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),fl.subVectors(this.max,ba),xs.subVectors(e.a,ba),ys.subVectors(e.b,ba),Ss.subVectors(e.c,ba),ur.subVectors(ys,xs),dr.subVectors(Ss,ys),Br.subVectors(xs,Ss);let t=[0,-ur.z,ur.y,0,-dr.z,dr.y,0,-Br.z,Br.y,ur.z,0,-ur.x,dr.z,0,-dr.x,Br.z,0,-Br.x,-ur.y,ur.x,0,-dr.y,dr.x,0,-Br.y,Br.x,0];return!id(t,xs,ys,Ss,fl)||(t=[1,0,0,0,1,0,0,0,1],!id(t,xs,ys,Ss,fl))?!1:(pl.crossVectors(ur,dr),t=[pl.x,pl.y,pl.z],id(t,xs,ys,Ss,fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new F,new F,new F,new F,new F,new F,new F,new F],ri=new F,hl=new Di,xs=new F,ys=new F,Ss=new F,ur=new F,dr=new F,Br=new F,ba=new F,fl=new F,pl=new F,zr=new F;function id(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){zr.fromArray(n,s);const o=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),c=t.dot(zr),u=i.dot(zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ut=new F,ml=new Oe;let XE=0;class An extends cs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yx,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Tx extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wx extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class At extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}const jE=new Di,Aa=new F,rd=new F;class ki{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);const t=Aa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(rd)),this.expandByPoint(Aa.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YE=0;const Vn=new Fe,sd=new bt,Ms=new F,Cn=new Di,Ra=new Di,Kt=new F;class nn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uE(e)?wx:Tx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new At(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Cn.min,Ra.min),Cn.expandByPoint(Kt),Kt.addVectors(Cn.max,Ra.max),Cn.expandByPoint(Kt)):(Cn.expandByPoint(Ra.min),Cn.expandByPoint(Ra.max))}Cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Kt.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),Kt.add(Ms)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new An(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new F,l[v]=new F;const c=new F,u=new F,h=new F,d=new Oe,p=new Oe,g=new Oe,S=new F,m=new F;function f(v,A,P){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,v),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,P),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),o[v].add(S),o[A].add(S),o[P].add(S),l[v].add(m),l[A].add(m),l[P].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,A=_.length;v<A;++v){const P=_[v],I=P.start,O=P.count;for(let W=I,L=I+O;W<L;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const M=new F,y=new F,E=new F,w=new F;function b(v){E.fromBufferAttribute(r,v),w.copy(E);const A=o[v];M.copy(A),M.sub(E.multiplyScalar(E.dot(A))).normalize(),y.crossVectors(w,A);const I=y.dot(l[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,I)}for(let v=0,A=_.length;v<A;++v){const P=_[v],I=P.start,O=P.count;for(let W=I,L=I+O;W<L;W+=3)b(e.getX(W+0)),b(e.getX(W+1)),b(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new An(d,u,h)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class KE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yx,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const fn=new F;class Tp{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){kc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new An(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Tp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){kc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ad=new F,qE=new F,$E=new ke;class gr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ad.subVectors(i,t).cross(qE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(ad),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$E.getNormalMatrix(e),r=this.coplanarPoint(ad).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ZE=0;class Pi extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=ro,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tx,this.blendDst=nx,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hu,this.stencilZFail=Hu,this.stencilZPass=Hu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Gi=new F,od=new F,gl=new F,_l=new F;class Ho{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){od.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),_l.copy(this.origin).sub(od);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gl),o=_l.dot(this.direction),l=-_l.dot(gl),c=_l.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const S=1/u;h*=S,d*=S,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(od).addScaledVector(gl,d),p}intersectSphere(e,t){if(e.radius<0)return null;Gi.subVectors(e.center,this.origin);const i=Gi.dot(this.direction),r=Gi.dot(Gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,p=e.z-a.z,g=t.x-a.x,S=t.y-a.y,m=t.z-a.z,f=i.x-a.x,_=i.y-a.y,M=i.z-a.z,y=Math.abs(l),E=Math.abs(c),w=Math.abs(u);let b,v,A,P,I,O,W,L,G,Q,Y,B;if(y>=E&&y>=w?(A=l,O=h,G=g,B=f,l>=0?(b=c,v=u,P=d,I=p,W=S,L=m,Q=_,Y=M):(b=u,v=c,P=p,I=d,W=m,L=S,Q=M,Y=_)):E>=w?(A=c,O=d,G=S,B=_,c>=0?(b=u,v=l,P=p,I=h,W=m,L=g,Q=M,Y=f):(b=l,v=u,P=h,I=p,W=g,L=m,Q=f,Y=M)):(A=u,O=p,G=m,B=M,u>=0?(b=l,v=c,P=h,I=d,W=g,L=S,Q=f,Y=_):(b=c,v=l,P=d,I=h,W=S,L=g,Q=_,Y=f)),A===0)return null;const U=b/A,X=v/A,J=1/A,me=P-U*O,Te=I-X*O,Je=W-U*G,He=L-X*G,Ge=Q-U*B,q=Y-X*B,ne=Ge*He-q*Je,Se=me*q-Te*Ge,De=Je*Te-He*me;if(r){if(ne<0||Se<0||De<0)return null}else if((ne<0||Se<0||De<0)&&(ne>0||Se>0||De>0))return null;const ve=ne+Se+De;if(ve===0)return null;const Ve=J*(ne*O+Se*G+De*B);return(ve>0?Ve<0:Ve>0)?null:this.at(Ve/ve,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dn extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dr,this.combine=ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cg=new Fe,Gr=new Ho,vl=new ki,Pg=new F,xl=new F,yl=new F,Sl=new F,ld=new F,Ml=new F,Lg=new F,El=new F;class We extends bt{constructor(e=new nn,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ld.fromBufferAttribute(h,e),a?Ml.addScaledVector(ld,u):Ml.addScaledVector(ld.sub(t),u))}t.add(Ml)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(s),Gr.copy(e.ray).recast(e.near),!(vl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(vl,Pg)===null||Gr.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(Cg.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(Cg),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=d.length;g<S;g++){const m=d[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,E=M;y<E;y+=3){const w=o.getX(y),b=o.getX(y+1),v=o.getX(y+2);r=Tl(this,f,e,i,c,u,h,w,b,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=g,f=S;m<f;m+=3){const _=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);r=Tl(this,a,e,i,c,u,h,_,M,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=d.length;g<S;g++){const m=d[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,E=M;y<E;y+=3){const w=y,b=y+1,v=y+2;r=Tl(this,f,e,i,c,u,h,w,b,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,f=S;m<f;m+=3){const _=m,M=m+1,y=m+2;r=Tl(this,a,e,i,c,u,h,_,M,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function JE(n,e,t,i,r,s,a,o){let l;if(e.side===bn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Nr,o),l===null)return null;El.copy(o),El.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(El);return c<t.near||c>t.far?null:{distance:c,point:El.clone(),object:n}}function Tl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,xl),n.getVertexPosition(l,yl),n.getVertexPosition(c,Sl);const u=JE(n,e,t,i,xl,yl,Sl,Lg);if(u){const h=new F;ci.getBarycoord(Lg,xl,yl,Sl,h),r&&(u.uv=ci.getInterpolatedAttribute(r,o,l,c,h,new Oe)),s&&(u.uv1=ci.getInterpolatedAttribute(s,o,l,c,h,new Oe)),a&&(u.normal=ci.getInterpolatedAttribute(a,o,l,c,h,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};ci.getNormal(xl,yl,Sl,d.normal),u.face=d,u.barycoord=h}return u}const Ca=new ht,Ig=new ht,Ng=new ht,QE=new ht,Dg=new Fe,wl=new F,cd=new ki,kg=new Fe,ud=new Ho;class e1 extends We{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ug,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Di),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,wl),this.boundingBox.expandByPoint(wl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ki),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,wl),this.boundingSphere.expandByPoint(wl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cd.copy(this.boundingSphere),cd.applyMatrix4(r),e.ray.intersectsSphere(cd)!==!1&&(kg.copy(r).invert(),ud.copy(e.ray).applyMatrix4(kg),!(this.boundingBox!==null&&ud.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ud)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ug?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===JM?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Ig.fromBufferAttribute(r.attributes.skinIndex,e),Ng.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ca.copy(t),t.set(0,0,0,0)):(Ca.set(...t,1),t.set(0,0,0)),Ca.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Ng.getComponent(s);if(a!==0){const o=Ig.getComponent(s);Dg.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(QE.copy(Ca).applyMatrix4(Dg),a)}}return t.isVector4&&(t.w=Ca.w),t.applyMatrix4(this.bindMatrixInverse)}}class bx extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wp extends Wt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Vt,u=Vt,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ug=new Fe,t1=new Fe;class bp{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Fe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:t1;Ug.multiplyMatrices(o,t[s]),Ug.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new bp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new wp(t,e,e,qn,Kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(Ce("Skeleton: No bone found with UUID:",s),a=new bx),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class Uc extends An{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Es=new Fe,Fg=new Fe,bl=[],Og=new Di,n1=new Fe,Pa=new We,La=new ki;class i1 extends We{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Uc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,n1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),Og.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(Og)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),La.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(i),e.ray.intersectsSphere(La)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Es),Fg.multiplyMatrices(i,Es),Pa.matrixWorld=Fg,Pa.raycast(e,bl);for(let a=0,o=bl.length;a<o;a++){const l=bl[a];l.instanceId=s,l.object=this,t.push(l)}bl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new wp(new Float32Array(r*this.count),r,this.count,mp,Kn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Hr=new ki,r1=new Oe(.5,.5),Al=new F;class Ap{constructor(e=new gr,t=new gr,i=new gr,r=new gr,s=new gr,a=new gr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],S=s[9],m=s[10],f=s[11],_=s[12],M=s[13],y=s[14],E=s[15];if(r[0].setComponents(c-a,p-u,f-g,E-_).normalize(),r[1].setComponents(c+a,p+u,f+g,E+_).normalize(),r[2].setComponents(c+o,p+h,f+S,E+M).normalize(),r[3].setComponents(c-o,p-h,f-S,E-M).normalize(),i)r[4].setComponents(l,d,m,y).normalize(),r[5].setComponents(c-l,p-d,f-m,E-y).normalize();else if(r[4].setComponents(c-l,p-d,f-m,E-y).normalize(),t===bi)r[5].setComponents(c+l,p+d,f+m,E+y).normalize();else if(t===Lo)r[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const t=r1.distanceTo(e.center);return Hr.radius=.7071067811865476+t,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Al.x=r.normal.x>0?e.max.x:e.min.x,Al.y=r.normal.y>0?e.max.y:e.min.y,Al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ax extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fc=new F,Oc=new F,Bg=new Fe,Ia=new Ho,Rl=new ki,dd=new F,zg=new F;class Rp extends bt{constructor(e=new nn,t=new Ax){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Fc.fromBufferAttribute(t,r-1),Oc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Fc.distanceTo(Oc);e.setAttribute("lineDistance",new At(i,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(r),Rl.radius+=s,e.ray.intersectsSphere(Rl)===!1)return;Bg.copy(r).invert(),Ia.copy(e.ray).applyMatrix4(Bg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let S=p,m=g-1;S<m;S+=c){const f=u.getX(S),_=u.getX(S+1),M=Cl(this,e,Ia,l,f,_,S);M&&t.push(M)}if(this.isLineLoop){const S=u.getX(g-1),m=u.getX(p),f=Cl(this,e,Ia,l,S,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let S=p,m=g-1;S<m;S+=c){const f=Cl(this,e,Ia,l,S,S+1,S);f&&t.push(f)}if(this.isLineLoop){const S=Cl(this,e,Ia,l,g-1,p,g-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Cl(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Fc.fromBufferAttribute(o,r),Oc.fromBufferAttribute(o,s),t.distanceSqToSegment(Fc,Oc,dd,zg)>i)return;dd.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(dd);if(!(c<e.near||c>e.far))return{distance:c,point:zg.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Gg=new F,Hg=new F;class s1 extends Rp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Gg.fromBufferAttribute(t,r),Hg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Gg.distanceTo(Hg);e.setAttribute("lineDistance",new At(i,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class a1 extends Rp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rx extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vg=new Fe,cf=new Ho,Pl=new ki,Ll=new F;class o1 extends bt{constructor(e=new nn,t=new Rx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(r),Pl.radius+=s,e.ray.intersectsSphere(Pl)===!1)return;Vg.copy(r).invert(),cf.copy(e.ray).applyMatrix4(Vg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,S=p;g<S;g++){const m=c.getX(g);Ll.fromBufferAttribute(h,m),Wg(Ll,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,S=p;g<S;g++)Ll.fromBufferAttribute(h,g),Wg(Ll,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wg(n,e,t,i,r,s,a){const o=cf.distanceSqToPoint(n);if(o<t){const l=new F;cf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Cx extends Wt{constructor(e=[],t=ss,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l1 extends Wt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class No extends Wt{constructor(e,t,i=Li,r,s,a,o=Vt,l=Vt,c,u=nr,h=1){if(u!==nr&&u!==Zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class c1 extends No{constructor(e,t=Li,i=ss,r,s,a=Vt,o=Vt,l,c=nr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Px extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jt extends nn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function g(S,m,f,_,M,y,E,w,b,v,A){const P=y/b,I=E/v,O=y/2,W=E/2,L=w/2,G=b+1,Q=v+1;let Y=0,B=0;const U=new F;for(let X=0;X<Q;X++){const J=X*I-W;for(let me=0;me<G;me++){const Te=me*P-O;U[S]=Te*_,U[m]=J*M,U[f]=L,c.push(U.x,U.y,U.z),U[S]=0,U[m]=0,U[f]=w>0?1:-1,u.push(U.x,U.y,U.z),h.push(me/b),h.push(1-X/v),Y+=1}}for(let X=0;X<v;X++)for(let J=0;J<b;J++){const me=d+J+G*X,Te=d+J+G*(X+1),Je=d+(J+1)+G*(X+1),He=d+(J+1)+G*X;l.push(me,Te,He),l.push(Te,Je,He),B+=6}o.addGroup(p,B,A),p+=B,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cp extends nn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new F,u=new Oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=i+h/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(o,3)),this.setAttribute("uv",new At(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bc extends nn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const S=[],m=i/2;let f=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(p,2));function _(){const y=new F,E=new F;let w=0;const b=(t-e)/i;for(let v=0;v<=s;v++){const A=[],P=v/s,I=P*(t-e)+e;for(let O=0;O<=r;O++){const W=O/r,L=W*l+o,G=Math.sin(L),Q=Math.cos(L);E.x=I*G,E.y=-P*i+m,E.z=I*Q,h.push(E.x,E.y,E.z),y.set(G,b,Q).normalize(),d.push(y.x,y.y,y.z),p.push(W,1-P),A.push(g++)}S.push(A)}for(let v=0;v<r;v++)for(let A=0;A<s;A++){const P=S[A][v],I=S[A+1][v],O=S[A+1][v+1],W=S[A][v+1];(e>0||A!==0)&&(u.push(P,I,W),w+=3),(t>0||A!==s-1)&&(u.push(I,O,W),w+=3)}c.addGroup(f,w,0),f+=w}function M(y){const E=g,w=new Oe,b=new F;let v=0;const A=y===!0?e:t,P=y===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,m*P,0),d.push(0,P,0),p.push(.5,.5),g++;const I=g;for(let O=0;O<=r;O++){const L=O/r*l+o,G=Math.cos(L),Q=Math.sin(L);b.x=A*Q,b.y=m*P,b.z=A*G,h.push(b.x,b.y,b.z),d.push(0,P,0),w.x=G*.5+.5,w.y=Q*.5*P+.5,p.push(w.x,w.y),g++}for(let O=0;O<r;O++){const W=E+O,L=I+O;y===!0?u.push(L,L+1,W):u.push(L+1,L,W),v+=3}c.addGroup(f,v,y===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vo extends nn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],S=[],m=[];for(let f=0;f<u;f++){const _=f*d-a;for(let M=0;M<c;M++){const y=M*h-s;g.push(y,-_,0),S.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const M=_+c*f,y=_+c*(f+1),E=_+1+c*(f+1),w=_+1+c*f;p.push(M,y,w),p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(S,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}class su extends nn{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/r,p=new F,g=new Oe;for(let S=0;S<=r;S++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let S=0;S<r;S++){const m=S*(i+1);for(let f=0;f<i;f++){const _=f+m,M=_,y=_+i+1,E=_+i+2,w=_+1;o.push(M,y,w),o.push(y,E,w)}}this.setIndex(o),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Pp extends nn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new F,d=new F,p=[],g=[],S=[],m=[];for(let f=0;f<=i;f++){const _=[],M=f/i,y=a+M*o,E=e*Math.cos(y),w=Math.sqrt(e*e-E*E);let b=0;f===0&&a===0?b=.5/t:f===i&&l===Math.PI&&(b=-.5/t);for(let v=0;v<=t;v++){const A=v/t,P=r+A*s;h.x=-w*Math.cos(P),h.y=E,h.z=w*Math.sin(P),g.push(h.x,h.y,h.z),d.copy(h).normalize(),S.push(d.x,d.y,d.z),m.push(A+b,1-M),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){const M=u[f][_+1],y=u[f][_],E=u[f+1][_],w=u[f+1][_+1];(f!==0||a>0)&&p.push(M,y,w),(f!==i-1||l<Math.PI)&&p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(S,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function la(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Xg(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Xg(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function pn(n){const e={};for(let t=0;t<n.length;t++){const i=la(n[t]);for(const r in i)e[r]=i[r]}return e}function Xg(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function u1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const d1={clone:la,merge:pn};var h1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h1,this.fragmentShader=f1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=u1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ne().setHex(r.value);break;case"v2":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ht().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Fe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class p1 extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zt extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ui extends zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class m1 extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g1 extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function _r(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function nc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function _1(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function jg(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function v1(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class ha{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class x1 extends ha{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hg,endingEnd:hg}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case fg:s=e,o=2*t-i;break;case pg:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fg:a=e,l=2*i-t;break;case pg:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),S=g*g,m=S*g,f=-d*m+2*d*S-d*g,_=(1+d)*m+(-1.5-2*d)*S+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*S+.5*g,y=p*m-p*S;for(let E=0;E!==o;++E)s[E]=f*a[u+E]+_*a[c+E]+M*a[l+E]+y*a[h+E];return s}}class y1 extends ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class S1 extends ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class M1 extends ha{interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){const g=(i-t)/(r-t),S=1-g;for(let m=0;m!==o;++m)s[m]=a[c+m]*S+a[l+m]*g;return s}const d=o*2,p=e-1;for(let g=0;g!==o;++g){const S=a[c+g],m=a[l+g],f=p*d+g*2,_=h[f],M=h[f+1],y=e*d+g*2,E=u[y],w=u[y+1],b=T1(i,t,_,E,r);s[g]=Ix(b,S,M,w,m)}return s}}function Ix(n,e,t,i,r){const s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function E1(n,e,t,i,r){const s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function T1(n,e,t,i,r){let s=(n-e)/(r-e);for(let a=0;a<8;a++){const o=Ix(s,e,t,i,r)-n;if(Math.abs(o)<1e-10)break;const l=E1(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}class mi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_r(t,this.TimeBufferType),this.values=_r(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_r(e.times,Array),values:_r(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),nc(e.settings)&&(i.settings={inTangents:_r(e.settings.inTangents,Array),outTangents:_r(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new S1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new y1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new x1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new M1(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Co:t=this.InterpolantFactoryMethodDiscrete;break;case Po:t=this.InterpolantFactoryMethodLinear;break;case Gu:t=this.InterpolantFactoryMethodSmooth;break;case dg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ce("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Co;case this.InterpolantFactoryMethodLinear:return Po;case this.InterpolantFactoryMethodSmooth:return Gu;case this.InterpolantFactoryMethodBezier:return dg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;nc(this.settings)&&(Yg(this.settings.inTangents,e),Yg(this.settings.outTangents,e))}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Ie("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ie("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&dE(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){Ie("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Gu,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*i,d=h-i,p=h+i;for(let g=0;g!==i;++g){const S=t[h+g];if(S!==t[d+g]||S!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,nc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}}function Yg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Po;class fa extends mi{constructor(e,t,i){super(e,t,i)}}fa.prototype.ValueTypeName="bool";fa.prototype.ValueBufferType=Array;fa.prototype.DefaultInterpolation=Co;fa.prototype.InterpolantFactoryMethodLinear=void 0;fa.prototype.InterpolantFactoryMethodSmooth=void 0;class Nx extends mi{constructor(e,t,i,r){super(e,t,i,r)}}Nx.prototype.ValueTypeName="color";class Do extends mi{constructor(e,t,i,r){super(e,t,i,r)}}Do.prototype.ValueTypeName="number";class w1 extends ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Gn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class ko extends mi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new w1(this.times,this.values,this.getValueSize(),e)}}ko.prototype.ValueTypeName="quaternion";ko.prototype.InterpolantFactoryMethodSmooth=void 0;class pa extends mi{constructor(e,t,i){super(e,t,i)}}pa.prototype.ValueTypeName="string";pa.prototype.ValueBufferType=Array;pa.prototype.DefaultInterpolation=Co;pa.prototype.InterpolantFactoryMethodLinear=void 0;pa.prototype.InterpolantFactoryMethodSmooth=void 0;class zc extends mi{constructor(e,t,i,r){super(e,t,i,r)}}zc.prototype.ValueTypeName="vector";class b1{constructor(e="",t=-1,i=[],r=QM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=hi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(R1(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=i.length;s!==a;++s)t.push(mi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=_1(l);l=jg(l,1,u),c=jg(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Do(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function A1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Do;case"vector":case"vector2":case"vector3":case"vector4":return zc;case"color":return Nx;case"quaternion":return ko;case"bool":case"boolean":return fa;case"string":return pa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function R1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=A1(n.type);if(n.times===void 0){const i=[],r=[];v1(n.keys,i,r,"value"),n.times=i,n.values=r}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),nc(n.settings)&&(t.settings={inTangents:_r(n.settings.inTangents,Float32Array),outTangents:_r(n.settings.outTangents,Float32Array)}),t}const Ki={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Kg(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Kg(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Kg(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class C1{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const P1=new C1;class ma{constructor(e){this.manager=e!==void 0?e:P1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ma.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class L1 extends Error{constructor(e,t){super(e),this.response=t}}class Dx extends ma{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ki.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:i,onError:r});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let S=0;const m=new ReadableStream({start(f){_();function _(){h.read().then(({done:M,value:y})=>{if(M)f.close();else{S+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:S,total:p});for(let w=0,b=u.length;w<b;w++){const v=u[w];v.onProgress&&v.onProgress(E)}f.enqueue(y),_()}},M=>{f.error(M)})}}});return new Response(m)}else throw new L1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ki.add(`file:${e}`,c);const u=Hi[e];delete Hi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ts=new WeakMap;class I1 extends ma{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ki.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Ts.get(a);h===void 0&&(h=[],Ts.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=Io("img");function l(){u(),t&&t(this);const h=Ts.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Ts.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Ki.remove(`image:${e}`);const d=Ts.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(h)}Ts.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ki.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class N1 extends ma{constructor(e){super(e)}load(e,t,i,r){const s=new Wt,a=new I1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class au extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const hd=new Fe,qg=new F,$g=new F;class Lp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ap,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;qg.setFromMatrixPosition(e.matrixWorld),t.position.copy(qg),$g.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($g),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){hd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(hd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Lo||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Il=new F,Nl=new Gn,xi=new F;let kx=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Nl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Nl,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Il,Nl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Nl,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const hr=new F,Zg=new Oe,Jg=new Oe;class gn extends kx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,Zg,Jg),t.subVectors(Jg,Zg)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(so*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class D1 extends Lp{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=oa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class k1 extends au{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new D1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class U1 extends Lp{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class F1 extends au{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new U1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ou extends kx{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class O1 extends Lp{constructor(){super(new ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uf extends au{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new O1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class B1 extends au{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class oo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const fd=new WeakMap;class z1 extends ma{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ki.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{fd.has(a)===!0?(r&&r(fd.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ki.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),fd.set(l,c),Ki.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ki.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ws=-90,bs=1;class G1 extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(ws,bs,e,t);r.layers=this.layers,this.add(r);const s=new gn(ws,bs,e,t);s.layers=this.layers,this.add(s);const a=new gn(ws,bs,e,t);a.layers=this.layers,this.add(a);const o=new gn(ws,bs,e,t);o.layers=this.layers,this.add(o);const l=new gn(ws,bs,e,t);l.layers=this.layers,this.add(l);const c=new gn(ws,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class H1 extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ip="\\[\\]\\.:\\/",V1=new RegExp("["+Ip+"]","g"),Np="[^"+Ip+"]",W1="[^"+Ip.replace("\\.","")+"]",X1=/((?:WC+[\/:])*)/.source.replace("WC",Np),j1=/(WCOD+)?/.source.replace("WCOD",W1),Y1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Np),K1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Np),q1=new RegExp("^"+X1+j1+Y1+K1+"$"),$1=["material","materials","bones","map"];class Z1{constructor(e,t,i){const r=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ct{constructor(e,t,i){this.path=t,this.parsedPath=i||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,i):new ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(V1,"")}static parseTrackName(e){const t=q1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);$1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=Z1;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Qg=new Fe;class J1{constructor(e,t,i=0,r=1/0){this.ray=new Ho(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ep,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ie("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qg),this}intersectObject(e,t=!0,i=[]){return df(e,this,i,t),i.sort(e0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)df(e[r],this,i,t);return i.sort(e0),i}}function e0(n,e){return n.distance-e.distance}function df(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)df(s[a],e,t,!0)}}const zp=class zp{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};zp.prototype.isMatrix2=!0;let t0=zp;function n0(n,e,t,i){const r=Q1(i);switch(t){case _x:return n*e;case mp:return n*e/r.components*r.byteLength;case gp:return n*e/r.components*r.byteLength;case as:return n*e*2/r.components*r.byteLength;case _p:return n*e*2/r.components*r.byteLength;case vx:return n*e*3/r.components*r.byteLength;case qn:return n*e*4/r.components*r.byteLength;case vp:return n*e*4/r.components*r.byteLength;case Jl:case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ph:case Ih:return Math.max(n,16)*Math.max(e,8)/4;case Ch:case Lh:return Math.max(n,8)*Math.max(e,8)/2;case Nh:case Dh:case Uh:case Fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kh:case Ic:case Oh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $h:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qh:case ef:case tf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nf:case rf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nc:case sf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Q1(n){switch(n){case In:case fx:return{byteLength:1,components:1};case Ao:case px:case Ii:return{byteLength:2,components:1};case fp:case pp:return{byteLength:2,components:4};case Li:case hp:case Kn:return{byteLength:4,components:1};case mx:case gx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dp}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ux(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function eT(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],S=h[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++d,h[d]=S)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const S=h[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var tT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ST=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,MT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ET=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,TT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LT="gl_FragColor = linearToOutputTexel( gl_FragColor );",IT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,YT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,KT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$T=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ew=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ow=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_w=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ew=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Aw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ww=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$w=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ub=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:tT,alphahash_pars_fragment:nT,alphamap_fragment:iT,alphamap_pars_fragment:rT,alphatest_fragment:sT,alphatest_pars_fragment:aT,aomap_fragment:oT,aomap_pars_fragment:lT,batching_pars_vertex:cT,batching_vertex:uT,begin_vertex:dT,beginnormal_vertex:hT,bsdfs:fT,iridescence_fragment:pT,bumpmap_pars_fragment:mT,clipping_planes_fragment:gT,clipping_planes_pars_fragment:_T,clipping_planes_pars_vertex:vT,clipping_planes_vertex:xT,color_fragment:yT,color_pars_fragment:ST,color_pars_vertex:MT,color_vertex:ET,common:TT,cube_uv_reflection_fragment:wT,defaultnormal_vertex:bT,displacementmap_pars_vertex:AT,displacementmap_vertex:RT,emissivemap_fragment:CT,emissivemap_pars_fragment:PT,colorspace_fragment:LT,colorspace_pars_fragment:IT,envmap_fragment:NT,envmap_common_pars_fragment:DT,envmap_pars_fragment:kT,envmap_pars_vertex:UT,envmap_physical_pars_fragment:YT,envmap_vertex:FT,fog_vertex:OT,fog_pars_vertex:BT,fog_fragment:zT,fog_pars_fragment:GT,gradientmap_pars_fragment:HT,lightmap_pars_fragment:VT,lights_lambert_fragment:WT,lights_lambert_pars_fragment:XT,lights_pars_begin:jT,lights_toon_fragment:KT,lights_toon_pars_fragment:qT,lights_phong_fragment:$T,lights_phong_pars_fragment:ZT,lights_physical_fragment:JT,lights_physical_pars_fragment:QT,lights_fragment_begin:ew,lights_fragment_maps:tw,lights_fragment_end:nw,lightprobes_pars_fragment:iw,logdepthbuf_fragment:rw,logdepthbuf_pars_fragment:sw,logdepthbuf_pars_vertex:aw,logdepthbuf_vertex:ow,map_fragment:lw,map_pars_fragment:cw,map_particle_fragment:uw,map_particle_pars_fragment:dw,metalnessmap_fragment:hw,metalnessmap_pars_fragment:fw,morphinstance_vertex:pw,morphcolor_vertex:mw,morphnormal_vertex:gw,morphtarget_pars_vertex:_w,morphtarget_vertex:vw,normal_fragment_begin:xw,normal_fragment_maps:yw,normal_pars_fragment:Sw,normal_pars_vertex:Mw,normal_vertex:Ew,normalmap_pars_fragment:Tw,clearcoat_normal_fragment_begin:ww,clearcoat_normal_fragment_maps:bw,clearcoat_pars_fragment:Aw,iridescence_pars_fragment:Rw,opaque_fragment:Cw,packing:Pw,premultiplied_alpha_fragment:Lw,project_vertex:Iw,dithering_fragment:Nw,dithering_pars_fragment:Dw,roughnessmap_fragment:kw,roughnessmap_pars_fragment:Uw,shadowmap_pars_fragment:Fw,shadowmap_pars_vertex:Ow,shadowmap_vertex:Bw,shadowmask_pars_fragment:zw,skinbase_vertex:Gw,skinning_pars_vertex:Hw,skinning_vertex:Vw,skinnormal_vertex:Ww,specularmap_fragment:Xw,specularmap_pars_fragment:jw,tonemapping_fragment:Yw,tonemapping_pars_fragment:Kw,transmission_fragment:qw,transmission_pars_fragment:$w,uv_pars_fragment:Zw,uv_pars_vertex:Jw,uv_vertex:Qw,worldpos_vertex:eb,background_vert:tb,background_frag:nb,backgroundCube_vert:ib,backgroundCube_frag:rb,cube_vert:sb,cube_frag:ab,depth_vert:ob,depth_frag:lb,distance_vert:cb,distance_frag:ub,equirect_vert:db,equirect_frag:hb,linedashed_vert:fb,linedashed_frag:pb,meshbasic_vert:mb,meshbasic_frag:gb,meshlambert_vert:_b,meshlambert_frag:vb,meshmatcap_vert:xb,meshmatcap_frag:yb,meshnormal_vert:Sb,meshnormal_frag:Mb,meshphong_vert:Eb,meshphong_frag:Tb,meshphysical_vert:wb,meshphysical_frag:bb,meshtoon_vert:Ab,meshtoon_frag:Rb,points_vert:Cb,points_frag:Pb,shadow_vert:Lb,shadow_frag:Ib,sprite_vert:Nb,sprite_frag:Db},he={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Ei={basic:{uniforms:pn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:pn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:pn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:pn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:pn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:pn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:pn([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:pn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:pn([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:pn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:pn([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:pn([he.common,he.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:pn([he.lights,he.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Ei.physical={uniforms:pn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Dl={r:0,b:0,g:0},kb=new Fe,Fx=new ke;Fx.set(-1,0,0,0,1,0,0,0,1);function Ub(n,e,t,i,r,s){const a=new Ne(0);let o=r===!0?0:1,l,c,u=null,h=0,d=null;function p(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const y=_.backgroundBlurriness>0;M=e.get(M,y)}return M}function g(_){let M=!1;const y=p(_);y===null?m(a,o):y&&y.isColor&&(m(y,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(_,M){const y=p(M);y&&(y.isCubeTexture||y.mapping===ru)?(c===void 0&&(c=new We(new Jt(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:la(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kb.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fx),c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ot,(u!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new We(new Vo(2,2),new Ni({name:"BackgroundMaterial",uniforms:la(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(Dl,Lx(n)),t.buffers.color.setClear(Dl.r,Dl.g,Dl.b,M,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:S,dispose:f}}function Fb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(I,O,W,L,G){let Q=!1;const Y=h(I,L,W,O);s!==Y&&(s=Y,c(s.object)),Q=p(I,L,W,G),Q&&g(I,L,W,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,y(I,O,W,L),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function h(I,O,W,L){const G=L.wireframe===!0;let Q=i[O.id];Q===void 0&&(Q={},i[O.id]=Q);const Y=I.isInstancedMesh===!0?I.id:0;let B=Q[Y];B===void 0&&(B={},Q[Y]=B);let U=B[W.id];U===void 0&&(U={},B[W.id]=U);let X=U[G];return X===void 0&&(X=d(l()),U[G]=X),X}function d(I){const O=[],W=[],L=[];for(let G=0;G<t;G++)O[G]=0,W[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:L,object:I,attributes:{},index:null}}function p(I,O,W,L){const G=s.attributes,Q=O.attributes;let Y=0;const B=W.getAttributes();for(const U in B)if(B[U].location>=0){const J=G[U];let me=Q[U];if(me===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(me=I.instanceColor)),J===void 0||J.attribute!==me||me&&J.data!==me.data)return!0;Y++}return s.attributesNum!==Y||s.index!==L}function g(I,O,W,L){const G={},Q=O.attributes;let Y=0;const B=W.getAttributes();for(const U in B)if(B[U].location>=0){let J=Q[U];J===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));const me={};me.attribute=J,J&&J.data&&(me.data=J.data),G[U]=me,Y++}s.attributes=G,s.attributesNum=Y,s.index=L}function S(){const I=s.newAttributes;for(let O=0,W=I.length;O<W;O++)I[O]=0}function m(I){f(I,0)}function f(I,O){const W=s.newAttributes,L=s.enabledAttributes,G=s.attributeDivisors;W[I]=1,L[I]===0&&(n.enableVertexAttribArray(I),L[I]=1),G[I]!==O&&(n.vertexAttribDivisor(I,O),G[I]=O)}function _(){const I=s.newAttributes,O=s.enabledAttributes;for(let W=0,L=O.length;W<L;W++)O[W]!==I[W]&&(n.disableVertexAttribArray(W),O[W]=0)}function M(I,O,W,L,G,Q,Y){Y===!0?n.vertexAttribIPointer(I,O,W,G,Q):n.vertexAttribPointer(I,O,W,L,G,Q)}function y(I,O,W,L){S();const G=L.attributes,Q=W.getAttributes(),Y=O.defaultAttributeValues;for(const B in Q){const U=Q[B];if(U.location>=0){let X=G[B];if(X===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const J=X.normalized,me=X.itemSize,Te=e.get(X);if(Te===void 0)continue;const Je=Te.buffer,He=Te.type,Ge=Te.bytesPerElement,q=He===n.INT||He===n.UNSIGNED_INT||X.gpuType===hp;if(X.isInterleavedBufferAttribute){const ne=X.data,Se=ne.stride,De=X.offset;if(ne.isInstancedInterleavedBuffer){for(let ve=0;ve<U.locationSize;ve++)f(U.location+ve,ne.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<U.locationSize;ve++)m(U.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ve=0;ve<U.locationSize;ve++)M(U.location+ve,me/U.locationSize,He,J,Se*Ge,(De+me/U.locationSize*ve)*Ge,q)}else{if(X.isInstancedBufferAttribute){for(let ne=0;ne<U.locationSize;ne++)f(U.location+ne,X.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ne=0;ne<U.locationSize;ne++)m(U.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ne=0;ne<U.locationSize;ne++)M(U.location+ne,me/U.locationSize,He,J,me*Ge,me/U.locationSize*ne*Ge,q)}}else if(Y!==void 0){const J=Y[B];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(U.location,J);break;case 3:n.vertexAttrib3fv(U.location,J);break;case 4:n.vertexAttrib4fv(U.location,J);break;default:n.vertexAttrib1fv(U.location,J)}}}}_()}function E(){A();for(const I in i){const O=i[I];for(const W in O){const L=O[W];for(const G in L){const Q=L[G];for(const Y in Q)u(Q[Y].object),delete Q[Y];delete L[G]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;const O=i[I.id];for(const W in O){const L=O[W];for(const G in L){const Q=L[G];for(const Y in Q)u(Q[Y].object),delete Q[Y];delete L[G]}}delete i[I.id]}function b(I){for(const O in i){const W=i[O];for(const L in W){const G=W[L];if(G[I.id]===void 0)continue;const Q=G[I.id];for(const Y in Q)u(Q[Y].object),delete Q[Y];delete G[I.id]}}}function v(I){for(const O in i){const W=i[O],L=I.isInstancedMesh===!0?I.id:0,G=W[L];if(G!==void 0){for(const Q in G){const Y=G[Q];for(const B in Y)u(Y[B].object),delete Y[B];delete G[Q]}delete W[L],Object.keys(W).length===0&&delete i[O]}}}function A(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:m,disableUnusedAttributes:_}}function Ob(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Bb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==qn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const v=b===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==In&&b!==Kn&&!v&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ce("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:E,samples:w}}function zb(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new gr,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,M=_*4;let y=f.clippingState||null;l.value=y,y=u(g,d,M,p);for(let E=0;E!==M;++E)y[E]=t[E];f.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const f=p+S*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,y=p;M!==S;++M,y+=4)a.copy(h[M]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Hs=4,Gb=6,Hb=20,Vb=256,Na=new ou,i0=new Ne;let pd=null,md=0,gd=0,_d=!1;const Wb=new F,Vr=new F;class r0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Wb}=s;pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,gd),this._renderer.xr.enabled=_d,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:Ii,format:qn,colorSpace:On,depthBuffer:!1},r=s0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s0(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xb(s)),this._blurMaterial=Yb(s,e,t),this._ggxMaterial=jb(s,e,t)}return r}_compileMaterial(e){const t=new We(new nn,e);this._renderer.compile(t,Na)}_sceneToCubeUV(e,t,i,r,s){const l=new gn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(i0),h.toneMapping=Ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new Jt,new Dn({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,f=!0):(m.color.copy(i0),f=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const E=this._cubeSize;As(r,y*E,M>2?E:0,E,E),h.setRenderTarget(r),f&&h.render(S,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ss||e.mapping===sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=o0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;As(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Na)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,p=h*d,{_lodMax:g}=this,S=this._sizeLods[i],m=3*S*(i>g-Hs?i-g+Hs:0),f=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,As(s,m,f,3*S,2*S),r.setRenderTarget(s),r.render(o,Na),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,As(e,m,f,3*S,2*S),r.setRenderTarget(e),r.render(o,Na)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],h=3*u*(r>this._lodMax-Hs?r-this._lodMax+Hs:0),d=4*(this._cubeSize-u);As(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,Na)}}function Xb(n){const e=[],t=[];let i=n;const r=n-Hs+1+Gb;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,p=3,g=new Float32Array(p*d*h),S=new Float32Array(p*d*h);for(let f=0;f<h;f++){const _=f%3*2/3-1,M=f>2?0:-1,y=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];g.set(y,p*d*f);for(let E=0;E<d;E++){const w=u[E*2]*2-1,b=u[E*2+1]*2-1;f===0?Vr.set(1,b,w):f===1?Vr.set(-w,1,-b):f===2?Vr.set(-w,b,1):f===3?Vr.set(-1,b,-w):f===4?Vr.set(-w,-1,b):Vr.set(w,b,-1),Vr.toArray(S,(f*d+E)*p)}}const m=new nn;m.setAttribute("position",new An(g,p)),m.setAttribute("outputDirection",new An(S,p)),t.push(new We(m,null)),i>Hs&&i--}return{lodMeshes:t,sizeLods:e}}function s0(n,e,t){const i=new fi(n,e,t);return i.texture.mapping=ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jb(n,e,t){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Yb(n,e,t){return new Ni({name:"SphericalGaussianBlur",defines:{SAMPLES:Hb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function a0(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function o0(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ox extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cx(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jt(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:la(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:$i});s.uniforms.tEquirect.value=t;const a=new We(r,s),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=It),new G1(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Kb(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Bu||p===zu)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const S=new Ox(g.height);return S.fromEquirectangularTexture(n,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,g=p===Bu||p===zu,S=p===ss||p===sa;if(g||S){let m=t.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new r0(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return g&&_&&_.height>0||S&&_&&l(_)?(i===null&&(i=new r0(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,p){return p===Bu?d.mapping=ss:p===zu&&(d.mapping=sa),d}function l(d){let p=0;const g=6;for(let S=0;S<g;S++)d[S]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function qb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&qs("WebGLRenderer: "+i+" extension not supported."),r}}}function $b(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let S=0;if(g===void 0)return;if(p!==null){const _=p.array;S=p.version;for(let M=0,y=_.length;M<y;M+=3){const E=_[M+0],w=_[M+1],b=_[M+2];d.push(E,w,w,b,b,E)}}else{const _=g.array;S=g.version;for(let M=0,y=_.length/3-1;M<y;M+=3){const E=M+0,w=M+1,b=M+2;d.push(E,w,w,b,b,E)}}const m=new(g.count>=65535?wx:Tx)(d,1);m.version=S;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Zb(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function c(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,s,h*a,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let S=0;for(let m=0;m<p;m++)S+=d[m];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Jb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Qb(n,e,t){const i=new WeakMap,r=new ht;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let P=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),S===!0&&(y=2),m===!0&&(y=3);let E=o.attributes.position.count*y,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*w*4*h),v=new Mx(b,E,w,h);v.type=Kn,v.needsUpdate=!0;const A=y*4;for(let I=0;I<h;I++){const O=f[I],W=_[I],L=M[I],G=E*w*4*I;for(let Q=0;Q<O.count;Q++){const Y=Q*A;g===!0&&(r.fromBufferAttribute(O,Q),b[G+Y+0]=r.x,b[G+Y+1]=r.y,b[G+Y+2]=r.z,b[G+Y+3]=0),S===!0&&(r.fromBufferAttribute(W,Q),b[G+Y+4]=r.x,b[G+Y+5]=r.y,b[G+Y+6]=r.z,b[G+Y+7]=0),m===!0&&(r.fromBufferAttribute(L,Q),b[G+Y+8]=r.x,b[G+Y+9]=r.y,b[G+Y+10]=r.z,b[G+Y+11]=L.itemSize===4?r.w:1)}}d={count:h,texture:v,size:new Oe(E,w)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const S=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function eA(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const tA={[rx]:"LINEAR_TONE_MAPPING",[sx]:"REINHARD_TONE_MAPPING",[ax]:"CINEON_TONE_MAPPING",[ox]:"ACES_FILMIC_TONE_MAPPING",[cx]:"AGX_TONE_MAPPING",[ux]:"NEUTRAL_TONE_MAPPING",[lx]:"CUSTOM_TONE_MAPPING"};function nA(n,e,t,i,r,s){const a=new fi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new nn;c.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new At([0,2,0,0,2,0],2));const u=new p1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new We(c,u),d=new ou(-1,1,1,-1,0,1);let p=null,g=null,S=!1,m,f=null,_=[],M=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let w=0;w<_.length;w++){const b=_[w];b.setSize&&b.setSize(y,E)}},this.setEffects=function(y){_=y,M=_.length>0&&_[0].isRenderPass===!0;const E=a.width,w=a.height;_.length>0&&o===null&&(o=new fi(E,w,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new fi(E,w,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<_.length;b++){const v=_[b];v.setSize&&v.setSize(E,w)}},this.begin=function(y,E){if(S||y.toneMapping===Ci&&_.length===0)return!1;if(f=E,E!==null){const w=E.width,b=E.height;(a.width!==w||a.height!==b)&&this.setSize(w,b)}return M===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Ci,!0},this.hasRenderPass=function(){return M},this.end=function(y,E){y.toneMapping=m,S=!0;let w=a,b=o;for(let v=0;v<_.length;v++){const A=_[v];A.enabled!==!1&&(A.render(y,b,w,E),A.needsSwap!==!1&&(w=b,b=b===o?l:o))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,u.defines={},Ke.getTransfer(p)===ot&&(u.defines.SRGB_TRANSFER="");const v=tA[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(f),y.render(h,d),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Bx=new Wt,hf=new No(1,1),zx=new Mx,Gx=new UE,Hx=new Cx,l0=[],c0=[],u0=new Float32Array(16),d0=new Float32Array(9),h0=new Float32Array(4);function ga(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=l0[r];if(s===void 0&&(s=new Float32Array(r),l0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cu(n,e){let t=c0[e];t===void 0&&(t=new Int32Array(e),c0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function sA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function aA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function oA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,i))return;h0.set(i),n.uniformMatrix2fv(this.addr,!1,h0),jt(t,i)}}function lA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,i))return;d0.set(i),n.uniformMatrix3fv(this.addr,!1,d0),jt(t,i)}}function cA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,i))return;u0.set(i),n.uniformMatrix4fv(this.addr,!1,u0),jt(t,i)}}function uA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function hA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function fA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function pA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function gA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function _A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function vA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(hf.compareFunction=t.isReversedDepthBuffer()?yp:xp,s=hf):s=Bx,t.setTexture2D(e||s,r)}function xA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gx,r)}function yA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hx,r)}function SA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zx,r)}function MA(n){switch(n){case 5126:return iA;case 35664:return rA;case 35665:return sA;case 35666:return aA;case 35674:return oA;case 35675:return lA;case 35676:return cA;case 5124:case 35670:return uA;case 35667:case 35671:return dA;case 35668:case 35672:return hA;case 35669:case 35673:return fA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return _A;case 35678:case 36198:case 36298:case 36306:case 35682:return vA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return yA;case 36289:case 36303:case 36311:case 36292:return SA}}function EA(n,e){n.uniform1fv(this.addr,e)}function TA(n,e){const t=ga(e,this.size,2);n.uniform2fv(this.addr,t)}function wA(n,e){const t=ga(e,this.size,3);n.uniform3fv(this.addr,t)}function bA(n,e){const t=ga(e,this.size,4);n.uniform4fv(this.addr,t)}function AA(n,e){const t=ga(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function RA(n,e){const t=ga(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function CA(n,e){const t=ga(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function PA(n,e){n.uniform1iv(this.addr,e)}function LA(n,e){n.uniform2iv(this.addr,e)}function IA(n,e){n.uniform3iv(this.addr,e)}function NA(n,e){n.uniform4iv(this.addr,e)}function DA(n,e){n.uniform1uiv(this.addr,e)}function kA(n,e){n.uniform2uiv(this.addr,e)}function UA(n,e){n.uniform3uiv(this.addr,e)}function FA(n,e){n.uniform4uiv(this.addr,e)}function OA(n,e,t){const i=this.cache,r=e.length,s=cu(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=hf:a=Bx;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function BA(n,e,t){const i=this.cache,r=e.length,s=cu(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gx,s[a])}function zA(n,e,t){const i=this.cache,r=e.length,s=cu(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hx,s[a])}function GA(n,e,t){const i=this.cache,r=e.length,s=cu(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zx,s[a])}function HA(n){switch(n){case 5126:return EA;case 35664:return TA;case 35665:return wA;case 35666:return bA;case 35674:return AA;case 35675:return RA;case 35676:return CA;case 5124:case 35670:return PA;case 35667:case 35671:return LA;case 35668:case 35672:return IA;case 35669:case 35673:return NA;case 5125:return DA;case 36294:return kA;case 36295:return UA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return GA}}class VA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=MA(t.type)}}class WA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HA(t.type)}}class XA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function f0(n,e){n.seq.push(e),n.map[e.id]=e}function jA(n,e,t){const i=n.name,r=i.length;for(vd.lastIndex=0;;){const s=vd.exec(i),a=vd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){f0(t,c===void 0?new VA(o,n,e):new WA(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new XA(o),f0(t,h)),t=h}}}class ic{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);jA(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function p0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const YA=37297;let KA=0;function qA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const m0=new ke;function $A(n){Ke._getMatrix(m0,Ke.workingColorSpace,n);const e=`mat3( ${m0.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Dc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function g0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+qA(n.getShaderSource(e),o)}else return s}function ZA(n,e){const t=$A(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const JA={[rx]:"Linear",[sx]:"Reinhard",[ax]:"Cineon",[ox]:"ACESFilmic",[cx]:"AgX",[ux]:"Neutral",[lx]:"Custom"};function QA(n,e){const t=JA[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kl=new F;function eR(){Ke.getLuminanceCoefficients(kl);const n=kl.x.toFixed(4),e=kl.y.toFixed(4),t=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function nR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ja(n){return n!==""}function _0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function v0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(n){return n.replace(rR,aR)}const sR=new Map;function aR(n,e){let t=ze[e];if(t===void 0){const i=sR.get(e);if(i!==void 0)t=ze[i],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ff(t)}const oR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x0(n){return n.replace(oR,lR)}function lR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function y0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cR={[$l]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function uR(n){return cR[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dR={[ss]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE",[ru]:"ENVMAP_TYPE_CUBE_UV"};function hR(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":dR[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const fR={[sa]:"ENVMAP_MODE_REFRACTION"};function pR(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fR[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mR={[ix]:"ENVMAP_BLENDING_MULTIPLY",[$M]:"ENVMAP_BLENDING_MIX",[ZM]:"ENVMAP_BLENDING_ADD"};function gR(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mR[n.combine]||"ENVMAP_BLENDING_NONE"}function _R(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vR(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=uR(t),c=hR(t),u=pR(t),h=gR(t),d=_R(t),p=tR(t),g=nR(s),S=r.createProgram();let m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ja).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ja).join(`
`),f.length>0&&(f+=`
`)):(m=[y0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),f=[y0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ci?QA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,ZA("linearToOutputTexel",t.outputColorSpace),eR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),a=ff(a),a=_0(a,t),a=v0(a,t),o=ff(o),o=_0(o,t),o=v0(o,t),a=x0(a),o=x0(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=_+m+a,y=_+f+o,E=p0(r,r.VERTEX_SHADER,M),w=p0(r,r.FRAGMENT_SHADER,y);r.attachShader(S,E),r.attachShader(S,w),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function b(I){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(S)||"",W=r.getShaderInfoLog(E)||"",L=r.getShaderInfoLog(w)||"",G=O.trim(),Q=W.trim(),Y=L.trim();let B=!0,U=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,E,w);else{const X=g0(r,E,"vertex"),J=g0(r,w,"fragment");Ie("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+X+`
`+J)}else G!==""?Ce("WebGLProgram: Program Info Log:",G):(Q===""||Y==="")&&(U=!1);U&&(I.diagnostics={runnable:B,programLog:G,vertexShader:{log:Q,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(E),r.deleteShader(w),v=new ic(r,S),A=iR(r,S)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(S,YA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KA++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=w,this}let xR=0;class yR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new SR(e),t.set(e,i)),i}}class SR{constructor(e){this.id=xR++,this.code=e,this.usedTimes=0}}function MR(n){return n===as||n===Ic||n===Nc}function ER(n,e,t,i,r,s){const a=new Ep,o=new yR,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,A,P,I,O,W){const L=I.fog,G=O.geometry,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=e.get(v.envMap||Q,Y),U=B&&B.mapping===ru?B.image.height:null,X=p[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const J=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=J!==void 0?J.length:0;let Te=0;G.morphAttributes.position!==void 0&&(Te=1),G.morphAttributes.normal!==void 0&&(Te=2),G.morphAttributes.color!==void 0&&(Te=3);let Je,He,Ge,q;if(X){const mt=Ei[X];Je=mt.vertexShader,He=mt.fragmentShader}else{Je=v.vertexShader,He=v.fragmentShader;const mt=o.getVertexShaderStage(v),it=o.getFragmentShaderStage(v);o.update(v,mt,it),Ge=mt.id,q=it.id}const ne=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,ve=O.isBatchedMesh===!0,Ve=!!v.map,Bt=!!v.matcap,je=!!B,nt=!!v.aoMap,pt=!!v.lightMap,Ze=!!v.bumpMap&&v.wireframe===!1,St=!!v.normalMap,Yt=!!v.displacementMap,yn=!!v.emissiveMap,Et=!!v.metalnessMap,Dt=!!v.roughnessMap,k=v.anisotropy>0,rn=v.clearcoat>0,at=v.dispersion>0,R=v.retroreflectivity>0,x=v.iridescence>0,z=v.sheen>0,j=v.transmission>0,$=k&&!!v.anisotropyMap,se=rn&&!!v.clearcoatMap,ae=rn&&!!v.clearcoatNormalMap,Z=rn&&!!v.clearcoatRoughnessMap,te=x&&!!v.iridescenceMap,oe=x&&!!v.iridescenceThicknessMap,Ae=z&&!!v.sheenColorMap,de=z&&!!v.sheenRoughnessMap,le=!!v.specularMap,Re=!!v.specularColorMap,Le=!!v.specularIntensityMap,Ue=j&&!!v.transmissionMap,D=j&&!!v.thicknessMap,ce=!!v.gradientMap,ee=!!v.alphaMap,ue=v.alphaTest>0,ge=!!v.alphaHash,ie=!!v.extensions;let Pe=Ci;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Pe=n.toneMapping);const we={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:Je,fragmentShader:He,defines:v.defines,customVertexShaderID:Ge,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ve,batchingColor:ve&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:Bt,envMap:je,envMapMode:je&&B.mapping,envMapCubeUVHeight:U,aoMap:nt,lightMap:pt,bumpMap:Ze,normalMap:St,displacementMap:Yt,emissiveMap:yn,normalMapObjectSpace:St&&v.normalMapType===nE,normalMapTangentSpace:St&&v.normalMapType===of,packedNormalMap:St&&v.normalMapType===of&&MR(v.normalMap.format),metalnessMap:Et,roughnessMap:Dt,anisotropy:k,anisotropyMap:$,clearcoat:rn,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:Z,dispersion:at,retroreflection:R,iridescence:x,iridescenceMap:te,iridescenceThicknessMap:oe,sheen:z,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:le,specularColorMap:Re,specularIntensityMap:Le,transmission:j,transmissionMap:Ue,thicknessMap:D,gradientMap:ce,opaque:v.transparent===!1&&v.blending===ro&&v.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:ge,combine:v.combine,mapUv:Ve&&g(v.map.channel),aoMapUv:nt&&g(v.aoMap.channel),lightMapUv:pt&&g(v.lightMap.channel),bumpMapUv:Ze&&g(v.bumpMap.channel),normalMapUv:St&&g(v.normalMap.channel),displacementMapUv:Yt&&g(v.displacementMap.channel),emissiveMapUv:yn&&g(v.emissiveMap.channel),metalnessMapUv:Et&&g(v.metalnessMap.channel),roughnessMapUv:Dt&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:se&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(v.sheenRoughnessMap.channel),specularMapUv:le&&g(v.specularMap.channel),specularColorMapUv:Re&&g(v.specularColorMap.channel),specularIntensityMapUv:Le&&g(v.specularIntensityMap.channel),transmissionMapUv:Ue&&g(v.transmissionMap.channel),thicknessMapUv:D&&g(v.thicknessMap.channel),alphaMapUv:ee&&g(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(St||k),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Ve||ee),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&St===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Te,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===ot,decodeVideoTextureEmissive:yn&&v.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(v.emissiveMap.colorSpace)===ot,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ln,flipSided:v.side===bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)A.push(P),A.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(f(A,v),_(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function f(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function _(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function M(v){const A=p[v.type];let P;if(A){const I=Ei[A];P=d1.clone(I.uniforms)}else P=v.uniforms;return P}function y(v,A){let P=u.get(A);return P!==void 0?++P.usedTimes:(P=new vR(n,A,v,r),c.push(P),u.set(A,P)),P}function E(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function b(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:b}}function TR(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function wR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function S0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function M0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,S,m,f){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:f},n[e]=_):(_.id=d.id,_.object=d,_.geometry=p,_.material=g,_.materialVariant=a(d),_.groupOrder=S,_.renderOrder=d.renderOrder,_.z=m,_.group=f),e++,_}function l(d,p,g,S,m,f,_){_.reversedDepth===!0&&(m=-m);const M=o(d,p,g,S,m,f);g.transmission>0?i.push(M):g.transparent===!0?r.push(M):t.push(M)}function c(d,p,g,S,m,f){const _=o(d,p,g,S,m,f);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):t.unshift(_)}function u(d,p){t.length>1&&t.sort(d||wR),i.length>1&&i.sort(p||S0),r.length>1&&r.sort(p||S0)}function h(){for(let d=e,p=n.length;d<p;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function bR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new M0,n.set(i,[a])):r>=s.length?(a=new M0,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function AR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ne};break;case"SpotLight":t={position:new F,direction:new F,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function RR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let CR=0;function PR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LR(n){const e=new AR,t=RR(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new Fe,a=new Fe;function o(c){let u=0,h=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,g=0,S=0,m=0,f=0,_=0,M=0,y=0,E=0,w=0,b=0,v=0,A=0,P=0;c.sort(PR);for(let O=0,W=c.length;O<W;O++){const L=c[O],G=L.color,Q=L.intensity,Y=L.distance;let B=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===as?B=L.shadow.map.texture:B=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=G.r*Q,h+=G.g*Q,d+=G.b*Q;else if(L.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(L.sh.coefficients[U],Q);P++}else if(L.isSunLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,J=t.get(L);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[g]=J,i.sunShadowMap[g]=B;const me=X.getViewportCount();for(let Te=0;Te<me;Te++)i.sunShadowMatrix[S+Te]=X.getMatrix(Te),i.sunShadowCascade[S+Te]=X._cascadeData[Te];S+=me,g++}i.sun[p]=U,p++}else if(L.isDirectionalLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,J=t.get(L);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=L.shadow.matrix,E++}i.directional[m]=U,m++}else if(L.isSpotLight){const U=e.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(G).multiplyScalar(Q),U.distance=Y,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,i.spot[_]=U;const X=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,X.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[_]=X.matrix,L.castShadow){const J=t.get(L);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=B,b++}_++}else if(L.isRectAreaLight){const U=e.get(L);U.color.copy(G).multiplyScalar(Q),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=U,M++}else if(L.isPointLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const X=L.shadow,J=t.get(L);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,i.pointShadow[f]=J,i.pointShadowMap[f]=B,i.pointShadowMatrix[f]=L.shadow.matrix,w++}i.point[f]=U,f++}else if(L.isHemisphereLight){const U=e.get(L);U.skyColor.copy(L.color).multiplyScalar(Q),U.groundColor.copy(L.groundColor).multiplyScalar(Q),i.hemi[y]=U,y++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==_||I.rectAreaLength!==M||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==E||I.numPointShadows!==w||I.numSpotShadows!==b||I.numSpotMaps!==v||I.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=f,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.spotLightMatrix.length=b+v-A,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,I.sunLength=p,I.directionalLength=m,I.pointLength=f,I.spotLength=_,I.rectAreaLength=M,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=E,I.numPointShadows=w,I.numSpotShadows=b,I.numSpotMaps=v,I.numLightProbes=P,i.version=CR++)}function l(c,u){let h=0,d=0,p=0,g=0,S=0,m=0;const f=u.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){const y=c[_];if(y.isSunLight){const E=i.sun[h];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),h++}else if(y.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),d++}else if(y.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const E=i.rectArea[S];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function E0(n){const e=new LR(n),t=[],i=[],r=[];function s(d){h.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function IR(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new E0(n),e.set(r,[o])):s>=a.length?(o=new E0(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const NR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kR=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],UR=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],T0=new Fe,Da=new F,xd=new F;function FR(n,e,t){let i=new Ap;const r=new Oe,s=new Oe,a=new ht,o=new m1,l=new g1,c={},u=t.maxTextureSize,h={[Nr]:bn,[bn]:Nr,[Ln]:Ln},d=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:NR,fragmentShader:DR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new We(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let f=this.type;this.render=function(w,b,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===LM&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$l);const A=n.getRenderTarget(),P=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),O=n.state;O.setBlending($i),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=f!==this.type;W&&b.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=w.length;L<G;L++){const Q=w[L],Y=Q.shadow;if(Y===void 0){Ce("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const B=Y.getFrameExtents();r.multiply(B),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,Y.mapSize.y=s.y));const U=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=U,Y.map===null||W===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Wa){if(Q.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new fi(r.x,r.y,{format:as,type:Ii,minFilter:It,magFilter:It,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new No(r.x,r.y,Kn),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=nr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Vt,Y.map.depthTexture.magFilter=Vt}else Q.isPointLight?(Y.map=new Ox(r.x),Y.map.depthTexture=new c1(r.x,Li)):(Y.map=new fi(r.x,r.y),Y.map.depthTexture=new No(r.x,r.y,Li)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=nr,this.type===$l?(Y.map.depthTexture.compareFunction=U?yp:xp,Y.map.depthTexture.minFilter=It,Y.map.depthTexture.magFilter=It):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Vt,Y.map.depthTexture.magFilter=Vt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==r.x||Y.map.height!==r.y)&&Y.map.setSize(r.x,r.y);const X=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,v);for(let J=0;J<X;J++){const me=Y.getCamera(J);if(Q.isPointLight){const Te=Y.camera,Je=Y.matrix,He=Q.distance||Te.far;He!==Te.far&&(Te.far=He,Te.updateProjectionMatrix()),Da.setFromMatrixPosition(Q.matrixWorld),Te.position.copy(Da),xd.copy(Te.position),xd.add(kR[J]),Te.up.copy(UR[J]),Te.lookAt(xd),Te.updateMatrixWorld(),Je.makeTranslation(-Da.x,-Da.y,-Da.z),T0.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(T0,Te.coordinateSystem,Te.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,J),n.clear();else{J===0&&(n.setRenderTarget(Y.map),n.clear());const Te=Y.getViewport(J);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),O.viewport(a)}i=Y.getFrustum(J),y(b,v,me,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===Wa&&_(Y,v),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(A,P,I)};function _(w,b){const v=e.update(S);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new fi(r.x,r.y,{format:as,type:Ii}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(b,null,v,d,S,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(b,null,v,p,S,null)}function M(w,b,v,A){let P=null;const I=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)P=I;else if(P=v.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const O=P.uuid,W=b.uuid;let L=c[O];L===void 0&&(L={},c[O]=L);let G=L[W];G===void 0&&(G=P.clone(),L[W]=G,b.addEventListener("dispose",E)),P=G}if(P.visible=b.visible,P.wireframe=b.wireframe,A===Wa?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:h[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=n.properties.get(P);O.light=v}return P}function y(w,b,v,A,P){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Wa)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const W=e.update(w),L=w.material;if(Array.isArray(L)){const G=W.groups;for(let Q=0,Y=G.length;Q<Y;Q++){const B=G[Q],U=L[B.materialIndex];if(U&&U.visible){const X=M(w,U,A,P);w.onBeforeShadow(n,w,b,v,W,X,B),n.renderBufferDirect(v,null,W,X,w,B),w.onAfterShadow(n,w,b,v,W,X,B)}}}else if(L.visible){const G=M(w,L,A,P);w.onBeforeShadow(n,w,b,v,W,G,null),n.renderBufferDirect(v,null,W,G,w,null),w.onAfterShadow(n,w,b,v,W,G,null)}}const O=w.children;for(let W=0,L=O.length;W<L;W++)y(O[W],b,v,A,P)}function E(w){w.target.removeEventListener("dispose",E);for(const v in c){const A=c[v],P=w.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function OR(n,e){function t(){let D=!1;const ce=new ht;let ee=null;const ue=new ht(0,0,0,0);return{setMask:function(ge){ee!==ge&&!D&&(n.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){D=ge},setClear:function(ge,ie,Pe,we,mt){mt===!0&&(ge*=we,ie*=we,Pe*=we),ce.set(ge,ie,Pe,we),ue.equals(ce)===!1&&(n.clearColor(ge,ie,Pe,we),ue.copy(ce))},reset:function(){D=!1,ee=null,ue.set(-1,0,0,0)}}}function i(){let D=!1,ce=!1,ee=null,ue=null,ge=null;return{setReversed:function(ie){if(ce!==ie){const Pe=e.get("EXT_clip_control");ie?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ce=ie;const we=ge;ge=null,this.setClear(we)}},getReversed:function(){return ce},setTest:function(ie){ie?ne(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!D&&(n.depthMask(ie),ee=ie)},setFunc:function(ie){if(ce&&(ie=pE[ie]),ue!==ie){switch(ie){case Mh:n.depthFunc(n.NEVER);break;case Eh:n.depthFunc(n.ALWAYS);break;case Th:n.depthFunc(n.LESS);break;case bo:n.depthFunc(n.LEQUAL);break;case wh:n.depthFunc(n.EQUAL);break;case bh:n.depthFunc(n.GEQUAL);break;case Ah:n.depthFunc(n.GREATER);break;case Rh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ie}},setLocked:function(ie){D=ie},setClear:function(ie){ge!==ie&&(ge=ie,ce&&(ie=1-ie),n.clearDepth(ie))},reset:function(){D=!1,ee=null,ue=null,ge=null,ce=!1}}}function r(){let D=!1,ce=null,ee=null,ue=null,ge=null,ie=null,Pe=null,we=null,mt=null;return{setTest:function(it){D||(it?ne(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(it){ce!==it&&!D&&(n.stencilMask(it),ce=it)},setFunc:function(it,ei,gi){(ee!==it||ue!==ei||ge!==gi)&&(n.stencilFunc(it,ei,gi),ee=it,ue=ei,ge=gi)},setOp:function(it,ei,gi){(ie!==it||Pe!==ei||we!==gi)&&(n.stencilOp(it,ei,gi),ie=it,Pe=ei,we=gi)},setLocked:function(it){D=it},setClear:function(it){mt!==it&&(n.clearStencil(it),mt=it)},reset:function(){D=!1,ce=null,ee=null,ue=null,ge=null,ie=null,Pe=null,we=null,mt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d={},p=new WeakMap,g=[],S=null,m=!1,f=null,_=null,M=null,y=null,E=null,w=null,b=null,v=new Ne(0,0,0),A=0,P=!1,I=null,O=null,W=null,L=null,G=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,B=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(U)[1]),Y=B>=1):U.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),Y=B>=2);let X=null,J={};const me=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),Je=new ht().fromArray(me),He=new ht().fromArray(Te);function Ge(D,ce,ee,ue){const ge=new Uint8Array(4),ie=n.createTexture();n.bindTexture(D,ie),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<ee;Pe++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ce+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ie}const q={};q[n.TEXTURE_2D]=Ge(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(bo),Ze(!1),St(ag),ne(n.CULL_FACE),nt($i);function ne(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Se(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function De(D,ce){return d[D]!==ce?(n.bindFramebuffer(D,ce),d[D]=ce,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ce),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function ve(D,ce){let ee=g,ue=!1;if(D){ee=p.get(ce),ee===void 0&&(ee=[],p.set(ce,ee));const ge=D.textures;if(ee.length!==ge.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Pe=ge.length;ie<Pe;ie++)ee[ie]=n.COLOR_ATTACHMENT0+ie;ee.length=ge.length,ue=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ee)}function Ve(D){return S!==D?(n.useProgram(D),S=D,!0):!1}const Bt={[Cs]:n.FUNC_ADD,[NM]:n.FUNC_SUBTRACT,[DM]:n.FUNC_REVERSE_SUBTRACT};Bt[kM]=n.MIN,Bt[UM]=n.MAX;const je={[FM]:n.ZERO,[OM]:n.ONE,[BM]:n.SRC_COLOR,[tx]:n.SRC_ALPHA,[XM]:n.SRC_ALPHA_SATURATE,[VM]:n.DST_COLOR,[GM]:n.DST_ALPHA,[zM]:n.ONE_MINUS_SRC_COLOR,[nx]:n.ONE_MINUS_SRC_ALPHA,[WM]:n.ONE_MINUS_DST_COLOR,[HM]:n.ONE_MINUS_DST_ALPHA,[jM]:n.CONSTANT_COLOR,[YM]:n.ONE_MINUS_CONSTANT_COLOR,[KM]:n.CONSTANT_ALPHA,[qM]:n.ONE_MINUS_CONSTANT_ALPHA};function nt(D,ce,ee,ue,ge,ie,Pe,we,mt,it){if(D===$i){m===!0&&(Se(n.BLEND),m=!1);return}if(m===!1&&(ne(n.BLEND),m=!0),D!==IM){if(D!==f||it!==P){if((_!==Cs||E!==Cs)&&(n.blendEquation(n.FUNC_ADD),_=Cs,E=Cs),it)switch(D){case ro:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case og:n.blendFunc(n.ONE,n.ONE);break;case lg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cg:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ie("WebGLState: Invalid blending: ",D);break}else switch(D){case ro:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case og:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case lg:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cg:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",D);break}M=null,y=null,w=null,b=null,v.set(0,0,0),A=0,f=D,P=it}return}ge=ge||ce,ie=ie||ee,Pe=Pe||ue,(ce!==_||ge!==E)&&(n.blendEquationSeparate(Bt[ce],Bt[ge]),_=ce,E=ge),(ee!==M||ue!==y||ie!==w||Pe!==b)&&(n.blendFuncSeparate(je[ee],je[ue],je[ie],je[Pe]),M=ee,y=ue,w=ie,b=Pe),(we.equals(v)===!1||mt!==A)&&(n.blendColor(we.r,we.g,we.b,mt),v.copy(we),A=mt),f=D,P=!1}function pt(D,ce){D.side===Ln?Se(n.CULL_FACE):ne(n.CULL_FACE);let ee=D.side===bn;ce&&(ee=!ee),Ze(ee),D.blending===ro&&D.transparent===!1?nt($i):nt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ue=D.stencilWrite;o.setTest(ue),ue&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(D){I!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),I=D)}function St(D){D!==CM?(ne(n.CULL_FACE),D!==O&&(D===ag?n.cullFace(n.BACK):D===PM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),O=D}function Yt(D){D!==W&&(Y&&n.lineWidth(D),W=D)}function yn(D,ce,ee){D?(ne(n.POLYGON_OFFSET_FILL),(L!==ce||G!==ee)&&(L=ce,G=ee,a.getReversed()&&(ce=-ce),n.polygonOffset(ce,ee))):Se(n.POLYGON_OFFSET_FILL)}function Et(D){D?ne(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Dt(D){D===void 0&&(D=n.TEXTURE0+Q-1),X!==D&&(n.activeTexture(D),X=D)}function k(D,ce,ee){ee===void 0&&(X===null?ee=n.TEXTURE0+Q-1:ee=X);let ue=J[ee];ue===void 0&&(ue={type:void 0,texture:void 0},J[ee]=ue),(ue.type!==D||ue.texture!==ce)&&(X!==ee&&(n.activeTexture(ee),X=ee),n.bindTexture(D,ce||q[D]),ue.type=D,ue.texture=ce)}function rn(){const D=J[X];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function at(){try{n.compressedTexImage2D(...arguments)}catch(D){Ie("WebGLState:",D)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(D){Ie("WebGLState:",D)}}function x(){try{n.texSubImage2D(...arguments)}catch(D){Ie("WebGLState:",D)}}function z(){try{n.texSubImage3D(...arguments)}catch(D){Ie("WebGLState:",D)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Ie("WebGLState:",D)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Ie("WebGLState:",D)}}function se(){try{n.texStorage2D(...arguments)}catch(D){Ie("WebGLState:",D)}}function ae(){try{n.texStorage3D(...arguments)}catch(D){Ie("WebGLState:",D)}}function Z(){try{n.texImage2D(...arguments)}catch(D){Ie("WebGLState:",D)}}function te(){try{n.texImage3D(...arguments)}catch(D){Ie("WebGLState:",D)}}function oe(D){return h[D]!==void 0?h[D]:n.getParameter(D)}function Ae(D,ce){h[D]!==ce&&(n.pixelStorei(D,ce),h[D]=ce)}function de(D){Je.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Je.copy(D))}function le(D){He.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),He.copy(D))}function Re(D,ce){let ee=c.get(ce);ee===void 0&&(ee=new WeakMap,c.set(ce,ee));let ue=ee.get(D);ue===void 0&&(ue=n.getUniformBlockIndex(ce,D.name),ee.set(D,ue))}function Le(D,ce){const ue=c.get(ce).get(D);l.get(ce)!==ue&&(n.uniformBlockBinding(ce,ue,D.__bindingPointIndex),l.set(ce,ue))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},X=null,J={},d={},p=new WeakMap,g=[],S=null,m=!1,f=null,_=null,M=null,y=null,E=null,w=null,b=null,v=new Ne(0,0,0),A=0,P=!1,I=null,O=null,W=null,L=null,G=null,Je.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:Se,bindFramebuffer:De,drawBuffers:ve,useProgram:Ve,setBlending:nt,setMaterial:pt,setFlipSided:Ze,setCullFace:St,setLineWidth:Yt,setPolygonOffset:yn,setScissorTest:Et,activeTexture:Dt,bindTexture:k,unbindTexture:rn,compressedTexImage2D:at,compressedTexImage3D:R,texImage2D:Z,texImage3D:te,pixelStorei:Ae,getParameter:oe,updateUBOMapping:Re,uniformBlockBinding:Le,texStorage2D:se,texStorage3D:ae,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:j,compressedTexSubImage3D:$,scissor:de,viewport:le,reset:Ue}}function BR(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,x){return g?new OffscreenCanvas(R,x):Io("canvas")}function m(R,x,z){let j=1;const $=at(R);if(($.width>z||$.height>z)&&(j=z/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor(j*$.width),ae=Math.floor(j*$.height);d===void 0&&(d=S(se,ae));const Z=x?S(se,ae):d;return Z.width=se,Z.height=ae,Z.getContext("2d").drawImage(R,0,0,se,ae),Ce("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+ae+")."),Z}else return"data"in R&&Ce("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function f(R){return R.generateMipmaps}function _(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,x,z,j,$,se=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae;j&&(ae=e.get("EXT_texture_norm16"),ae||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===n.RED&&(z===n.FLOAT&&(Z=n.R32F),z===n.HALF_FLOAT&&(Z=n.R16F),z===n.UNSIGNED_BYTE&&(Z=n.R8),z===n.UNSIGNED_SHORT&&ae&&(Z=ae.R16_EXT),z===n.SHORT&&ae&&(Z=ae.R16_SNORM_EXT)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.R8UI),z===n.UNSIGNED_SHORT&&(Z=n.R16UI),z===n.UNSIGNED_INT&&(Z=n.R32UI),z===n.BYTE&&(Z=n.R8I),z===n.SHORT&&(Z=n.R16I),z===n.INT&&(Z=n.R32I)),x===n.RG&&(z===n.FLOAT&&(Z=n.RG32F),z===n.HALF_FLOAT&&(Z=n.RG16F),z===n.UNSIGNED_BYTE&&(Z=n.RG8),z===n.UNSIGNED_SHORT&&ae&&(Z=ae.RG16_EXT),z===n.SHORT&&ae&&(Z=ae.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RG8UI),z===n.UNSIGNED_SHORT&&(Z=n.RG16UI),z===n.UNSIGNED_INT&&(Z=n.RG32UI),z===n.BYTE&&(Z=n.RG8I),z===n.SHORT&&(Z=n.RG16I),z===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),z===n.UNSIGNED_INT&&(Z=n.RGB32UI),z===n.BYTE&&(Z=n.RGB8I),z===n.SHORT&&(Z=n.RGB16I),z===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),z===n.UNSIGNED_INT&&(Z=n.RGBA32UI),z===n.BYTE&&(Z=n.RGBA8I),z===n.SHORT&&(Z=n.RGBA16I),z===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_SHORT&&ae&&(Z=ae.RGB16_EXT),z===n.SHORT&&ae&&(Z=ae.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),x===n.RGBA){const te=se?Dc:Ke.getTransfer($);z===n.FLOAT&&(Z=n.RGBA32F),z===n.HALF_FLOAT&&(Z=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Z=te===ot?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&ae&&(Z=ae.RGBA16_EXT),z===n.SHORT&&ae&&(Z=ae.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(R,x){let z;return R?x===null||x===Li||x===Ro?z=n.DEPTH24_STENCIL8:x===Kn?z=n.DEPTH32F_STENCIL8:x===Ao&&(z=n.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Li||x===Ro?z=n.DEPTH_COMPONENT24:x===Kn?z=n.DEPTH_COMPONENT32F:x===Ao&&(z=n.DEPTH_COMPONENT16),z}function w(R,x){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vt&&R.minFilter!==It?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function b(R){const x=R.target;x.removeEventListener("dispose",b),A(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&h.delete(x)}function v(R){const x=R.target;x.removeEventListener("dispose",v),I(x)}function A(R){const x=i.get(R);if(x.__webglInit===void 0)return;const z=R.source,j=p.get(z);if(j){const $=j[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(R),Object.keys(j).length===0&&p.delete(z)}i.remove(R)}function P(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const z=R.source,j=p.get(z);delete j[x.__cacheKey],a.memory.textures--}function I(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let $=0;$<x.__webglFramebuffer[j].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[j][$]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=R.textures;for(let j=0,$=z.length;j<$;j++){const se=i.get(z[j]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(z[j])}i.remove(R)}let O=0;function W(){O=0}function L(){return O}function G(R){O=R}function Q(){const R=O;return R>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function Y(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function B(R,x){const z=i.get(R);if(R.isVideoTexture&&k(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const j=R.image;if(j===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(z,R,x);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function U(R,x){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Se(z,R,x);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function X(R,x){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Se(z,R,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function J(R,x){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){De(z,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}const me={[aa]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[Lc]:n.MIRRORED_REPEAT},Te={[Vt]:n.NEAREST,[hx]:n.NEAREST_MIPMAP_NEAREST,[Xa]:n.NEAREST_MIPMAP_LINEAR,[It]:n.LINEAR,[Zl]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},Je={[rE]:n.NEVER,[cE]:n.ALWAYS,[sE]:n.LESS,[xp]:n.LEQUAL,[aE]:n.EQUAL,[yp]:n.GEQUAL,[oE]:n.GREATER,[lE]:n.NOTEQUAL};function He(R,x){if(x.type===Kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===It||x.magFilter===Zl||x.magFilter===Xa||x.magFilter===Yi||x.minFilter===It||x.minFilter===Zl||x.minFilter===Xa||x.minFilter===Yi)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,me[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,me[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,me[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Te[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Je[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==Xa&&x.minFilter!==Yi||x.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ge(R,x){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",b));const j=x.source;let $=p.get(j);$===void 0&&($={},p.set(j,$));const se=Y(x);if(se!==R.__cacheKey){$[se]===void 0&&($[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[se].usedTimes++;const ae=$[R.__cacheKey];ae!==void 0&&($[R.__cacheKey].usedTimes--,ae.usedTimes===0&&P(x)),R.__cacheKey=se,R.__webglTexture=$[se].texture}return z}function q(R,x,z){return Math.floor(Math.floor(R/z)/x)}function ne(R,x,z,j){const se=R.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,j,x.data);else{se.sort((Ae,de)=>Ae.start-de.start);let ae=0;for(let Ae=1;Ae<se.length;Ae++){const de=se[ae],le=se[Ae],Re=de.start+de.count,Le=q(le.start,x.width,4),Ue=q(de.start,x.width,4);le.start<=Re+1&&Le===Ue&&q(le.start+le.count-1,x.width,4)===Le?de.count=Math.max(de.count,le.start+le.count-de.start):(++ae,se[ae]=le)}se.length=ae+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),oe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Ae=0,de=se.length;Ae<de;Ae++){const le=se[Ae],Re=Math.floor(le.start/4),Le=Math.ceil(le.count/4),Ue=Re%x.width,D=Math.floor(Re/x.width),ce=Le,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Ue,D,ce,ee,z,j,x.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,oe)}}function Se(R,x,z){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);const $=Ge(R,x),se=x.source;t.bindTexture(j,R.__webglTexture,n.TEXTURE0+z);const ae=i.get(se);if(se.version!==ae.__version||$===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ee=Ke.getPrimaries(Ke.workingColorSpace),ue=x.colorSpace===yr?null:Ke.getPrimaries(x.colorSpace),ge=x.colorSpace===yr||ee===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let te=m(x.image,!1,r.maxTextureSize);te=rn(x,te);const oe=s.convert(x.format,x.colorSpace),Ae=s.convert(x.type);let de=y(x.internalFormat,oe,Ae,x.normalized,x.colorSpace,x.isVideoTexture);He(j,x);let le;const Re=x.mipmaps,Le=x.isVideoTexture!==!0,Ue=ae.__version===void 0||$===!0,D=se.dataReady,ce=w(x,te);if(x.isDepthTexture)de=E(x.format===Zr,x.type),Ue&&(Le?t.texStorage2D(n.TEXTURE_2D,1,de,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,de,te.width,te.height,0,oe,Ae,null));else if(x.isDataTexture)if(Re.length>0){Le&&Ue&&t.texStorage2D(n.TEXTURE_2D,ce,de,Re[0].width,Re[0].height);for(let ee=0,ue=Re.length;ee<ue;ee++)le=Re[ee],Le?D&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,le.width,le.height,oe,Ae,le.data):t.texImage2D(n.TEXTURE_2D,ee,de,le.width,le.height,0,oe,Ae,le.data);x.generateMipmaps=!1}else Le?(Ue&&t.texStorage2D(n.TEXTURE_2D,ce,de,te.width,te.height),D&&ne(x,te,oe,Ae)):t.texImage2D(n.TEXTURE_2D,0,de,te.width,te.height,0,oe,Ae,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Le&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,de,Re[0].width,Re[0].height,te.depth);for(let ee=0,ue=Re.length;ee<ue;ee++)if(le=Re[ee],x.format!==qn)if(oe!==null)if(Le){if(D)if(x.layerUpdates.size>0){const ge=n0(le.width,le.height,x.format,x.type);for(const ie of x.layerUpdates){const Pe=le.data.subarray(ie*ge/le.data.BYTES_PER_ELEMENT,(ie+1)*ge/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,ie,le.width,le.height,1,oe,Pe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,te.depth,oe,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,de,le.width,le.height,te.depth,0,le.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,te.depth,oe,Ae,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,de,le.width,le.height,te.depth,0,oe,Ae,le.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Le&&Ue&&t.texStorage2D(n.TEXTURE_2D,ce,de,Re[0].width,Re[0].height);for(let ee=0,ue=Re.length;ee<ue;ee++)le=Re[ee],x.format!==qn?oe!==null?Le?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,de,le.width,le.height,0,le.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,le.width,le.height,oe,Ae,le.data):t.texImage2D(n.TEXTURE_2D,ee,de,le.width,le.height,0,oe,Ae,le.data)}else if(x.isDataArrayTexture)if(Le){if(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,de,te.width,te.height,te.depth),D)if(x.layerUpdates.size>0){const ee=n0(te.width,te.height,x.format,x.type);for(const ue of x.layerUpdates){const ge=te.data.subarray(ue*ee/te.data.BYTES_PER_ELEMENT,(ue+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,te.width,te.height,1,oe,Ae,ge)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,Ae,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,oe,Ae,te.data);else if(x.isData3DTexture)Le?(Ue&&t.texStorage3D(n.TEXTURE_3D,ce,de,te.width,te.height,te.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,Ae,te.data)):t.texImage3D(n.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,oe,Ae,te.data);else if(x.isFramebufferTexture){if(Ue)if(Le)t.texStorage2D(n.TEXTURE_2D,ce,de,te.width,te.height);else{let ee=te.width,ue=te.height;for(let ge=0;ge<ce;ge++)t.texImage2D(n.TEXTURE_2D,ge,de,ee,ue,0,oe,Ae,null),ee>>=1,ue>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),h.add(x),ee.onpaint=ue=>{const ge=ue.changedElements;for(const ie of h)ge.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{const ge=n.RGBA,ie=n.RGBA,Pe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ge,ie,Pe,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Le&&Ue){const ee=at(Re[0]);t.texStorage2D(n.TEXTURE_2D,ce,de,ee.width,ee.height)}for(let ee=0,ue=Re.length;ee<ue;ee++)le=Re[ee],Le?D&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,oe,Ae,le):t.texImage2D(n.TEXTURE_2D,ee,de,oe,Ae,le);x.generateMipmaps=!1}else if(Le){if(Ue){const ee=at(te);t.texStorage2D(n.TEXTURE_2D,ce,de,ee.width,ee.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Ae,te)}else t.texImage2D(n.TEXTURE_2D,0,de,oe,Ae,te);f(x)&&_(j),ae.__version=se.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function De(R,x,z){if(x.image.length!==6)return;const j=Ge(R,x),$=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const se=i.get($);if($.version!==se.__version||j===!0){t.activeTexture(n.TEXTURE0+z);const ae=Ke.getPrimaries(Ke.workingColorSpace),Z=x.colorSpace===yr?null:Ke.getPrimaries(x.colorSpace),te=x.colorSpace===yr||ae===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ae=x.image[0]&&x.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!oe&&!Ae?de[ie]=m(x.image[ie],!0,r.maxCubemapSize):de[ie]=Ae?x.image[ie].image:x.image[ie],de[ie]=rn(x,de[ie]);const le=de[0],Re=s.convert(x.format,x.colorSpace),Le=s.convert(x.type),Ue=y(x.internalFormat,Re,Le,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,ce=se.__version===void 0||j===!0,ee=$.dataReady;let ue=w(x,le);He(n.TEXTURE_CUBE_MAP,x);let ge;if(oe){D&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ue,le.width,le.height);for(let ie=0;ie<6;ie++){ge=de[ie].mipmaps;for(let Pe=0;Pe<ge.length;Pe++){const we=ge[Pe];x.format!==qn?Re!==null?D?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,we.width,we.height,Re,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Ue,we.width,we.height,0,we.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,we.width,we.height,Re,Le,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Ue,we.width,we.height,0,Re,Le,we.data)}}}else{if(ge=x.mipmaps,D&&ce){ge.length>0&&ue++;const ie=at(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ue,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ae){D?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,Re,Le,de[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,de[ie].width,de[ie].height,0,Re,Le,de[ie].data);for(let Pe=0;Pe<ge.length;Pe++){const mt=ge[Pe].image[ie].image;D?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,mt.width,mt.height,Re,Le,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Ue,mt.width,mt.height,0,Re,Le,mt.data)}}else{D?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,Le,de[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,Re,Le,de[ie]);for(let Pe=0;Pe<ge.length;Pe++){const we=ge[Pe];D?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,Re,Le,we.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Ue,Re,Le,we.image[ie])}}}f(x)&&_(n.TEXTURE_CUBE_MAP),se.__version=$.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ve(R,x,z,j,$,se){const ae=s.convert(z.format,z.colorSpace),Z=s.convert(z.type),te=y(z.internalFormat,ae,Z,z.normalized,z.colorSpace),oe=i.get(x),Ae=i.get(z);if(Ae.__renderTarget=x,!oe.__hasExternalTextures){const de=Math.max(1,x.width>>se),le=Math.max(1,x.height>>se);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,se,te,de,le,x.depth,0,ae,Z,null):t.texImage2D($,se,te,de,le,0,ae,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Dt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,$,Ae.__webglTexture,0,Et(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,$,Ae.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(R,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const j=x.depthTexture,$=j&&j.isDepthTexture?j.type:null,se=E(x.stencilBuffer,$),ae=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Dt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(x),se,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(x),se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,se,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,R)}else{const j=x.textures;for(let $=0;$<j.length;$++){const se=j[$],ae=s.convert(se.format,se.colorSpace),Z=s.convert(se.type),te=y(se.internalFormat,ae,Z,se.normalized,se.colorSpace);Dt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(x),te,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(x),te,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,te,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(R,x,z){const j=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",b)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),He(n.TEXTURE_CUBE_MAP,x.depthTexture);const oe=s.convert(x.depthTexture.format),Ae=s.convert(x.depthTexture.type);let de;x.depthTexture.format===nr?de=n.DEPTH_COMPONENT24:x.depthTexture.format===Zr&&(de=n.DEPTH24_STENCIL8);for(let le=0;le<6;le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,de,x.width,x.height,0,oe,Ae,null)}}else B(x.depthTexture,0);const se=$.__webglTexture,ae=Et(x),Z=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,te=x.depthTexture.format===Zr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===nr)Dt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Z,se,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,te,Z,se,0);else if(x.depthTexture.format===Zr)Dt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Z,se,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,te,Z,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(R){const x=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=j}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let j=0;j<6;j++)Bt(x.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?Bt(x.__webglFramebuffer[0],R,0):Bt(x.__webglFramebuffer,R,0)}else if(z){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=n.createRenderbuffer(),Ve(x.__webglDepthbuffer[j],R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,se)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ve(x.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(R,x,z){const j=i.get(R);x!==void 0&&ve(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&je(R)}function pt(R){const x=R.texture,z=i.get(R),j=i.get(x);R.addEventListener("dispose",v);const $=R.textures,se=R.isWebGLCubeRenderTarget===!0,ae=$.length>1;if(ae||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,a.memory.textures++),se){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let te=0;te<x.mipmaps.length;te++)z.__webglFramebuffer[Z][te]=n.createFramebuffer()}else z.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)z.__webglFramebuffer[Z]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ae)for(let Z=0,te=$.length;Z<te;Z++){const oe=i.get($[Z]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Dt(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){const te=$[Z];z.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);const oe=s.convert(te.format,te.colorSpace),Ae=s.convert(te.type),de=y(te.internalFormat,oe,Ae,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),le=Et(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,de,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),He(n.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)ve(z.__webglFramebuffer[Z][te],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else ve(z.__webglFramebuffer[Z],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(x)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Z=0,te=$.length;Z<te;Z++){const oe=$[Z],Ae=i.get(oe);let de=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Ae.__webglTexture),He(de,oe),ve(z.__webglFramebuffer,R,oe,n.COLOR_ATTACHMENT0+Z,de,0),f(oe)&&_(de)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,j.__webglTexture),He(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)ve(z.__webglFramebuffer[te],R,x,n.COLOR_ATTACHMENT0,Z,te);else ve(z.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,Z,0);f(x)&&_(Z),t.unbindTexture()}R.depthBuffer&&je(R)}function Ze(R){const x=R.textures;for(let z=0,j=x.length;z<j;z++){const $=x[z];if(f($)){const se=M(R),ae=i.get($).__webglTexture;t.bindTexture(se,ae),_(se),t.unbindTexture()}}}const St=[],Yt=[];function yn(R){if(R.samples>0){if(Dt(R)===!1){const x=R.textures,z=R.width,j=R.height;let $=n.COLOR_BUFFER_BIT;const se=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(R),Z=x.length>1;if(Z)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ae=i.get(x[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,z,j,0,0,z,j,$,n.NEAREST),l===!0&&(St.length=0,Yt.length=0,St.push(n.COLOR_ATTACHMENT0+oe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(St.push(se),Yt.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ae=i.get(x[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Et(R){return Math.min(r.maxSamples,R.samples)}function Dt(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function k(R){const x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function rn(R,x){const z=R.colorSpace,j=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==On&&z!==yr&&(Ke.getTransfer(z)===ot?(j!==qn||$!==In)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",z)),x}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=W,this.getTextureUnits=L,this.setTextureUnits=G,this.setTexture2D=B,this.setTexture2DArray=U,this.setTexture3D=X,this.setTextureCube=J,this.rebindTextures=nt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zR(n,e){function t(i,r=yr){let s;const a=Ke.getTransfer(r);if(i===In)return n.UNSIGNED_BYTE;if(i===fp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===fx)return n.BYTE;if(i===px)return n.SHORT;if(i===Ao)return n.UNSIGNED_SHORT;if(i===hp)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===_x)return n.ALPHA;if(i===vx)return n.RGB;if(i===qn)return n.RGBA;if(i===nr)return n.DEPTH_COMPONENT;if(i===Zr)return n.DEPTH_STENCIL;if(i===mp)return n.RED;if(i===gp)return n.RED_INTEGER;if(i===as)return n.RG;if(i===_p)return n.RG_INTEGER;if(i===vp)return n.RGBA_INTEGER;if(i===Jl||i===Ql||i===ec||i===tc)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ql)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ch||i===Ph||i===Lh||i===Ih)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nh||i===Dh||i===kh||i===Uh||i===Fh||i===Ic||i===Oh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nh||i===Dh)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Uh)return s.COMPRESSED_R11_EAC;if(i===Fh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ic)return s.COMPRESSED_RG11_EAC;if(i===Oh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bh||i===zh||i===Gh||i===Hh||i===Vh||i===Wh||i===Xh||i===jh||i===Yh||i===Kh||i===qh||i===$h||i===Zh||i===Jh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$h)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qh||i===ef||i===tf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qh)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ef)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nf||i===rf||i===Nc||i===sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const GR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Px(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ni({vertexShader:GR,fragmentShader:HR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Vo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WR extends cs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const S=typeof XRWebGLBinding<"u",m=new VR,f={},_=t.getContextAttributes();let M=null,y=null;const E=[],w=[],b=new Oe;let v=null,A=null;const P=new gn;P.viewport=new ht;const I=new gn;I.viewport=new ht;const O=[P,I],W=new H1;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=E[q];return ne===void 0&&(ne=new Ku,E[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=E[q];return ne===void 0&&(ne=new Ku,E[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=E[q];return ne===void 0&&(ne=new Ku,E[q]=ne),ne.getHandSpace()};function Q(q){const ne=w.indexOf(q.inputSource);if(ne===-1)return;const Se=E[ne];Se!==void 0&&(Se.update(q.inputSource,q.frame,c||a),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",B);for(let q=0;q<E.length;q++){const ne=w[q];ne!==null&&(w[q]=null,E[q].disconnect(ne))}L=null,G=null,m.reset();for(const q in f)delete f[q];if(e.setRenderTarget(M),p=null,d=null,h=null,r=null,y=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(b.width,b.height,!1),A!==null){const q=A.camera;q.fov=A.fov,q.zoom=A.zoom,q.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(b),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,De=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=_.stencil?Zr:nr,De=_.stencil?Ro:Li);const Ve={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new fi(d.textureWidth,d.textureHeight,{format:qn,type:In,depthTexture:new No(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new fi(p.framebufferWidth,p.framebufferHeight,{format:qn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(q){for(let ne=0;ne<q.removed.length;ne++){const Se=q.removed[ne],De=w.indexOf(Se);De>=0&&(w[De]=null,E[De].disconnect(Se))}for(let ne=0;ne<q.added.length;ne++){const Se=q.added[ne];let De=w.indexOf(Se);if(De===-1){for(let Ve=0;Ve<E.length;Ve++)if(Ve>=w.length){w.push(Se),De=Ve;break}else if(w[Ve]===null){w[Ve]=Se,De=Ve;break}if(De===-1)break}const ve=E[De];ve&&ve.connect(Se)}}const U=new F,X=new F;function J(q,ne,Se){U.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(Se.matrixWorld);const De=U.distanceTo(X),ve=ne.projectionMatrix.elements,Ve=Se.projectionMatrix.elements,Bt=ve[14]/(ve[10]-1),je=ve[14]/(ve[10]+1),nt=(ve[9]+1)/ve[5],pt=(ve[9]-1)/ve[5],Ze=(ve[8]-1)/ve[0],St=(Ve[8]+1)/Ve[0],Yt=Bt*Ze,yn=Bt*St,Et=De/(-Ze+St),Dt=Et*-Ze;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Dt),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ve[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const k=Bt+Et,rn=je+Et,at=Yt-Dt,R=yn+(De-Dt),x=nt*je/rn*k,z=pt*je/rn*k;q.projectionMatrix.makePerspective(at,R,x,z,k,rn),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function me(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ne=q.near,Se=q.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),W.near=I.near=P.near=ne,W.far=I.far=P.far=Se,(L!==W.near||G!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),L=W.near,G=W.far),W.layers.mask=q.layers.mask|6,P.layers.mask=W.layers.mask&-5,I.layers.mask=W.layers.mask&-3;const De=q.parent,ve=W.cameras;me(W,De);for(let Ve=0;Ve<ve.length;Ve++)me(ve[Ve],De);ve.length===2?J(W,P,I):W.projectionMatrix.copy(P.projectionMatrix),A===null&&q.isPerspectiveCamera&&(A={camera:q,fov:q.fov,zoom:q.zoom}),Te(q,W,De)};function Te(q,ne,Se){Se===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=oa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(q){return f[q]};let Je=null;function He(q,ne){if(u=ne.getViewerPose(c||a),g=ne,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let De=!1;Se.length!==W.cameras.length&&(W.cameras.length=0,De=!0);for(let je=0;je<Se.length;je++){const nt=Se[je];let pt=null;if(p!==null)pt=p.getViewport(nt);else{const St=h.getViewSubImage(d,nt);pt=St.viewport,je===0&&(e.setRenderTargetTextures(y,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(y))}let Ze=O[je];Ze===void 0&&(Ze=new gn,Ze.layers.enable(je),Ze.viewport=new ht,O[je]=Ze),Ze.matrix.fromArray(nt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(nt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(pt.x,pt.y,pt.width,pt.height),je===0&&(W.matrix.copy(Ze.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),De===!0&&W.cameras.push(Ze)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const je=h.getDepthInformation(Se[0]);je&&je.isValid&&je.texture&&m.init(je,r.renderState)}if(ve&&ve.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let je=0;je<Se.length;je++){const nt=Se[je].camera;if(nt){let pt=f[nt];pt||(pt=new Px,f[nt]=pt);const Ze=h.getCameraImage(nt);pt.sourceTexture=Ze}}}}for(let Se=0;Se<E.length;Se++){const De=w[Se],ve=E[Se];De!==null&&ve!==void 0&&ve.update(De,ne,c||a)}Je&&Je(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ge=new Ux;Ge.setAnimationLoop(He),this.setAnimationLoop=function(q){Je=q},this.dispose=function(){}}}const XR=new Fe,Vx=new ke;Vx.set(-1,0,0,0,1,0,0,0,1);function jR(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Lx(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,M,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),S(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===bn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===bn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(XR.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vx),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YR(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const w=E.program;i.uniformBlockBinding(y,w)}function c(y,E){let w=r[y.id];w===void 0&&(m(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",_));const b=E.program;i.updateUBOMapping(y,b);const v=e.render.frame;s[y.id]!==v&&(d(y),s[y.id]=v)}function u(y){const E=h();y.__bindingPointIndex=E;const w=n.createBuffer(),b=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,b,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,w),w}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=r[y.id],w=y.uniforms,b=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let v=0,A=w.length;v<A;v++){const P=w[v];if(Array.isArray(P))for(let I=0,O=P.length;I<O;I++)p(P[I],v,I,b);else p(P,v,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,E,w,b){if(S(y,E,w,b)===!0){const v=y.__offset,A=y.value;if(Array.isArray(A)){let P=0;for(let I=0;I<A.length;I++){const O=A[I],W=f(O);g(O,y.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,y.__data)}}function g(y,E,w){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,w)}function S(y,E,w,b){const v=y.value,A=E+"_"+w;if(b[A]===void 0)return typeof v=="number"||typeof v=="boolean"?b[A]=v:ArrayBuffer.isView(v)?b[A]=v.slice():b[A]=v.clone(),!0;{const P=b[A];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return b[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(y){const E=y.uniforms;let w=0;const b=16;for(let A=0,P=E.length;A<P;A++){const I=Array.isArray(E[A])?E[A]:[E[A]];for(let O=0,W=I.length;O<W;O++){const L=I[O],G=Array.isArray(L.value)?L.value:[L.value];for(let Q=0,Y=G.length;Q<Y;Q++){const B=G[Q],U=f(B),X=w%b,J=X%U.boundary,me=X+J;w+=J,me!==0&&b-me<U.storage&&(w+=b-me),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=U.storage}}}const v=w%b;return v>0&&(w+=b-v),y.__size=w,y.__cache={},this}function f(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",y),E}function _(y){const E=y.target;E.removeEventListener("dispose",_);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function M(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}const KR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yi=null;function qR(){return yi===null&&(yi=new wp(KR,16,16,as,Ii),yi.name="DFG_LUT",yi.minFilter=It,yi.magFilter=It,yi.wrapS=wi,yi.wrapT=wi,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}class $R{constructor(e={}){const{canvas:t=hE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=In}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const S=p,m=new Set([vp,_p,gp]),f=new Set([In,Li,Ao,Ro,fp,pp]),_=new Uint32Array(4),M=new Int32Array(4),y=new F;let E=null,w=null;const b=[],v=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,O=null,W=null,L=null,G=null;this._outputColorSpace=Ft;let Q=0,Y=0,B=null,U=-1,X=null;const J=new ht,me=new ht;let Te=null;const Je=new Ne(0);let He=0,Ge=t.width,q=t.height,ne=1,Se=null,De=null;const ve=new ht(0,0,Ge,q),Ve=new ht(0,0,Ge,q);let Bt=!1;const je=new Ap;let nt=!1,pt=!1;const Ze=new Fe,St=new F,Yt=new ht,yn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Dt(){return B===null?ne:1}let k=i;function rn(T,N){return t.getContext(T,N)}let at,R,x,z,j,$,se,ae,Z,te,oe,Ae,de,le,Re,Le,Ue,D,ce,ee,ue,ge,ie;try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dp}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",ei,!1),k===null){const N="webgl2";if(k=rn(N,T),k===null)throw rn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(T){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),Ie("WebGLRenderer: "+T.message),T}function Pe(){at=new qb(k),at.init(),ue=new zR(k,at),R=new Bb(k,at,e,ue),x=new OR(k,at),R.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),W=k.createFramebuffer(),L=k.createFramebuffer(),G=k.createFramebuffer(),z=new Jb(k),j=new TR,$=new BR(k,at,x,j,R,ue,z),se=new Kb(P),ae=new eT(k),ge=new Fb(k,ae),Z=new $b(k,ae,z,ge),te=new eA(k,Z,ae,ge,z),D=new Qb(k,R,$),Re=new zb(j),oe=new ER(P,se,at,R,ge,Re),Ae=new jR(P,j),de=new bR,le=new IR(at),Ue=new Ub(P,se,x,te,g,l),Le=new FR(P,te,R),ie=new YR(k,z,R,x),ce=new Ob(k,at,z),ee=new Zb(k,at,z),z.programs=oe.programs,P.capabilities=R,P.extensions=at,P.properties=j,P.renderLists=de,P.shadowMap=Le,P.state=x,P.info=z}S!==In&&(A=new nA(S,t.width,t.height,o,r,s));const we=new WR(P,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(T){T!==void 0&&(ne=T,this.setSize(Ge,q,!1))},this.getSize=function(T){return T.set(Ge,q)},this.setSize=function(T,N,K=!0){if(we.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=T,q=N,t.width=Math.floor(T*ne),t.height=Math.floor(N*ne),K===!0&&(t.style.width=T+"px",t.style.height=N+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(Ge*ne,q*ne).floor()},this.setDrawingBufferSize=function(T,N,K){Ge=T,q=N,ne=K,t.width=Math.floor(T*K),t.height=Math.floor(N*K),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(S===In){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(J)},this.getViewport=function(T){return T.copy(ve)},this.setViewport=function(T,N,K,H){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,N,K,H),x.viewport(J.copy(ve).multiplyScalar(ne).round())},this.getScissor=function(T){return T.copy(Ve)},this.setScissor=function(T,N,K,H){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,N,K,H),x.scissor(me.copy(Ve).multiplyScalar(ne).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(T){x.setScissorTest(Bt=T)},this.setOpaqueSort=function(T){Se=T},this.setTransparentSort=function(T){De=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,K=!0){let H=0;if(T){let V=!1;if(B!==null){const pe=B.texture.format;V=m.has(pe)}if(V){const pe=B.texture.type,xe=f.has(pe),fe=Ue.getClearColor(),Me=Ue.getClearAlpha(),be=fe.r,Be=fe.g,Ye=fe.b;xe?(_[0]=be,_[1]=Be,_[2]=Ye,_[3]=Me,k.clearBufferuiv(k.COLOR,0,_)):(M[0]=be,M[1]=Be,M[2]=Ye,M[3]=Me,k.clearBufferiv(k.COLOR,0,M))}else H|=k.COLOR_BUFFER_BIT}N&&(H|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(H|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&k.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),Ue.dispose(),de.dispose(),le.dispose(),j.dispose(),se.dispose(),te.dispose(),ge.dispose(),ie.dispose(),oe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Hp),we.removeEventListener("sessionend",Vp),Or.stop()};function mt(T){T.preventDefault(),kc("WebGLRenderer: Context Lost."),I=!0}function it(){kc("WebGLRenderer: Context Restored."),I=!1;const T=z.autoReset,N=Le.enabled,K=Le.autoUpdate,H=Le.needsUpdate,V=Le.type;Pe(),z.autoReset=T,Le.enabled=N,Le.autoUpdate=K,Le.needsUpdate=H,Le.type=V}function ei(T){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function gi(T){const N=T.target;N.removeEventListener("dispose",gi),qx(N)}function qx(T){$x(T),j.remove(T)}function $x(T){const N=j.get(T).programs;N!==void 0&&(N.forEach(function(K){oe.releaseProgram(K)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,K,H,V,pe){N===null&&(N=yn);const xe=V.isMesh&&V.matrixWorld.determinantAffine()<0,fe=Qx(T,N,K,H,V);x.setMaterial(H,xe);let Me=K.index,be=1;if(H.wireframe===!0){if(Me=Z.getWireframeAttribute(K),Me===void 0)return;be=2}const Be=K.drawRange,Ye=K.attributes.position;let Ee=Be.start*be,rt=(Be.start+Be.count)*be;pe!==null&&(Ee=Math.max(Ee,pe.start*be),rt=Math.min(rt,(pe.start+pe.count)*be)),Me!==null?(Ee=Math.max(Ee,0),rt=Math.min(rt,Me.count)):Ye!=null&&(Ee=Math.max(Ee,0),rt=Math.min(rt,Ye.count));const kt=rt-Ee;if(kt<0||kt===1/0)return;ge.setup(V,H,fe,K,Me);let vt,ft=ce;if(Me!==null&&(vt=ae.get(Me),ft=ee,ft.setIndex(vt)),V.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*Dt()),ft.setMode(k.LINES)):ft.setMode(k.TRIANGLES);else if(V.isLine){let sn=H.linewidth;sn===void 0&&(sn=1),x.setLineWidth(sn*Dt()),V.isLineSegments?ft.setMode(k.LINES):V.isLineLoop?ft.setMode(k.LINE_LOOP):ft.setMode(k.LINE_STRIP)}else V.isPoints?ft.setMode(k.POINTS):V.isSprite&&ft.setMode(k.TRIANGLES);if(V.isBatchedMesh)if(at.get("WEBGL_multi_draw"))ft.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const sn=V._multiDrawStarts,_e=V._multiDrawCounts,hn=V._multiDrawCount,et=Me?ae.get(Me).bytesPerElement:1,Hn=j.get(H).currentProgram.getUniforms();for(let _i=0;_i<hn;_i++)Hn.setValue(k,"_gl_DrawID",_i),ft.render(sn[_i]/et,_e[_i])}else if(V.isInstancedMesh)ft.renderInstances(Ee,kt,V.count);else if(K.isInstancedBufferGeometry){const sn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,_e=Math.min(K.instanceCount,sn);ft.renderInstances(Ee,kt,_e)}else ft.render(Ee,kt)};function Gp(T,N,K,H){O!==null&&T.isNodeMaterial&&O.setObject(H,T),nt===!0&&Re.setState(T,K,!1),T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=bn,T.needsUpdate=!0,Xo(T,N,H),T.side=Nr,T.needsUpdate=!0,Xo(T,N,H),T.side=Ln):Xo(T,N,H)}this.compile=function(T,N,K=null){K===null&&(K=T),O!==null&&O.renderStart(T,N,K),w=le.get(K),w.init(N),v.push(w),K.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),T!==K&&T.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),pt=this.localClippingEnabled,nt=Re.init(this.clippingPlanes,pt),nt===!0&&Re.setGlobalState(this.clippingPlanes,N),O!==null&&Le.render(w.state.shadowsArray,K,N);const H=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pe=V.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const fe=pe[xe];Gp(fe,K,N,V),H.add(fe)}else Gp(pe,K,N,V),H.add(pe)}),w=v.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(T,N,K=null){const H=this.compile(T,N,K);return new Promise(V=>{function pe(){if(H.forEach(function(xe){const Me=j.get(xe).currentProgram;(Me===void 0||Me.isReady())&&H.delete(xe)}),H.size===0){V(T);return}setTimeout(pe,10)}at.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let du=null;function Zx(T){du&&du(T)}function Hp(){Or.stop()}function Vp(){Or.start()}const Or=new Ux;Or.setAnimationLoop(Zx),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(T){du=T,we.setAnimationLoop(T),T===null?Or.stop():Or.start()},we.addEventListener("sessionstart",Hp),we.addEventListener("sessionend",Vp),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(T,N);const K=we.enabled===!0&&we.isPresenting===!0,H=A!==null&&(B===null||K)&&A.begin(P,B);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(N),N=we.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,N,B),w=le.get(T,v.length),w.init(N),w.state.textureUnits=$.getTextureUnits(),v.push(w),Ze.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),je.setFromProjectionMatrix(Ze,bi,N.reversedDepth),pt=this.localClippingEnabled,nt=Re.init(this.clippingPlanes,pt),E=de.get(T,b.length),E.init(),b.push(E),we.enabled===!0&&we.isPresenting===!0){const xe=P.xr.getDepthSensingMesh();xe!==null&&hu(xe,N,-1/0,P.sortObjects)}hu(T,N,0,P.sortObjects),E.finish(),O!==null&&O.updateLights(w.state.lightsArray),P.sortObjects===!0&&E.sort(Se,De),Et=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Et&&Ue.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Re.beginShadows();const V=w.state.shadowsArray;if(Le.render(V,T,N),nt===!0&&Re.endShadows(),(H&&A.hasRenderPass())===!1){const xe=E.opaque,fe=E.transmissive;if(w.setupLights(),N.isArrayCamera){const Me=N.cameras;if(fe.length>0)for(let be=0,Be=Me.length;be<Be;be++){const Ye=Me[be];Xp(xe,fe,T,Ye)}Et&&Ue.render(T);for(let be=0,Be=Me.length;be<Be;be++){const Ye=Me[be];Wp(E,T,Ye,Ye.viewport)}}else fe.length>0&&Xp(xe,fe,T,N),Et&&Ue.render(T),Wp(E,T,N)}B!==null&&Y===0&&($.updateMultisampleRenderTarget(B),$.updateRenderTargetMipmap(B)),H&&A.end(P),T.isScene===!0&&T.onAfterRender(P,T,N),ge.resetDefaultState(),U=-1,X=null,v.pop(),v.length>0?(w=v[v.length-1],$.setTextureUnits(w.state.textureUnits),nt===!0&&Re.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?E=b[b.length-1]:E=null,O!==null&&O.renderEnd()};function hu(T,N,K,H){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(je)){H&&Yt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ze);const xe=te.update(T),fe=T.material;fe.visible&&E.push(T,xe,fe,K,Yt.z,null,N)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(je))){const xe=te.update(T),fe=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Yt.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Yt.copy(xe.boundingSphere.center)),Yt.applyMatrix4(T.matrixWorld).applyMatrix4(Ze)),Array.isArray(fe)){const Me=xe.groups;for(let be=0,Be=Me.length;be<Be;be++){const Ye=Me[be],Ee=fe[Ye.materialIndex];Ee&&Ee.visible&&E.push(T,xe,Ee,K,Yt.z,Ye,N)}}else fe.visible&&E.push(T,xe,fe,K,Yt.z,null,N)}}const pe=T.children;for(let xe=0,fe=pe.length;xe<fe;xe++)hu(pe[xe],N,K,H)}function Wp(T,N,K,H){const{opaque:V,transmissive:pe,transparent:xe}=T;w.setupLightsView(K),nt===!0&&Re.setGlobalState(P.clippingPlanes,K),H&&x.viewport(J.copy(H)),V.length>0&&Wo(V,N,K),pe.length>0&&Wo(pe,N,K),xe.length>0&&Wo(xe,N,K),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Xp(T,N,K,H){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Ee=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new fi(1,1,{generateMipmaps:!0,type:Ee?Ii:In,minFilter:Yi,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const pe=w.state.transmissionRenderTarget[H.id],xe=H.viewport||J;pe.setSize(xe.z*P.transmissionResolutionScale,xe.w*P.transmissionResolutionScale);const fe=P.getRenderTarget(),Me=P.getActiveCubeFace(),be=P.getActiveMipmapLevel();P.setRenderTarget(pe),P.getClearColor(Je),He=P.getClearAlpha(),He<1&&P.setClearColor(16777215,.5),P.clear(),Et&&Ue.render(K);const Be=P.toneMapping;P.toneMapping=Ci;const Ye=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),nt===!0&&Re.setGlobalState(P.clippingPlanes,H),Wo(T,K,H),$.updateMultisampleRenderTarget(pe),$.updateRenderTargetMipmap(pe),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let rt=0,kt=N.length;rt<kt;rt++){const vt=N[rt],{object:ft,geometry:sn,material:_e,group:hn}=vt;if(_e.side===Ln&&ft.layers.test(H.layers)){const et=_e.side;_e.side=bn,_e.needsUpdate=!0,jp(ft,K,H,sn,_e,hn),_e.side=et,_e.needsUpdate=!0,Ee=!0}}Ee===!0&&($.updateMultisampleRenderTarget(pe),$.updateRenderTargetMipmap(pe))}P.setRenderTarget(fe,Me,be),P.setClearColor(Je,He),Ye!==void 0&&(H.viewport=Ye),P.toneMapping=Be}function Wo(T,N,K){const H=N.isScene===!0?N.overrideMaterial:null;for(let V=0,pe=T.length;V<pe;V++){const xe=T[V],{object:fe,geometry:Me,group:be}=xe;let Be=xe.material;Be.allowOverride===!0&&H!==null&&(Be=H),fe.layers.test(K.layers)&&jp(fe,N,K,Me,Be,be)}}function jp(T,N,K,H,V,pe){O!==null&&V.isNodeMaterial&&O.setObject(T,V),T.onBeforeRender(P,N,K,H,V,pe),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(P,N,K,H,T,pe),V.transparent===!0&&V.side===Ln&&V.forceSinglePass===!1?(V.side=bn,V.needsUpdate=!0,P.renderBufferDirect(K,N,H,V,T,pe),V.side=Nr,V.needsUpdate=!0,P.renderBufferDirect(K,N,H,V,T,pe),V.side=Ln):P.renderBufferDirect(K,N,H,V,T,pe),T.onAfterRender(P,N,K,H,V,pe)}function Xo(T,N,K){N.isScene!==!0&&(N=yn);const H=j.get(T),V=w.state.lights,pe=w.state.shadowsArray,xe=V.state.version,fe=oe.getParameters(T,V.state,pe,N,K,w.state.lightProbeGridArray),Me=oe.getProgramCacheKey(fe);let be=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;const Be=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=se.get(T.envMap||H.environment,Be),H.envMapRotation=H.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,be===void 0&&(T.addEventListener("dispose",gi),be=new Map,H.programs=be);let Ye=be.get(Me);if(Ye!==void 0){if(H.currentProgram===Ye&&H.lightsStateVersion===xe)return Kp(T,fe),Ye}else fe.uniforms=oe.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,K,fe),T.onBeforeCompile(fe,P),Ye=oe.acquireProgram(fe,Me),be.set(Me,Ye),H.uniforms=fe.uniforms;const Ee=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=Re.uniform),Kp(T,fe),H.needsLights=ty(T),H.lightsStateVersion=xe,H.needsLights&&(Ee.ambientLightColor.value=V.state.ambient,Ee.lightProbe.value=V.state.probe,Ee.sunLights.value=V.state.sun,Ee.sunLightShadows.value=V.state.sunShadow,Ee.directionalLights.value=V.state.directional,Ee.directionalLightShadows.value=V.state.directionalShadow,Ee.spotLights.value=V.state.spot,Ee.spotLightShadows.value=V.state.spotShadow,Ee.rectAreaLights.value=V.state.rectArea,Ee.ltc_1.value=V.state.rectAreaLTC1,Ee.ltc_2.value=V.state.rectAreaLTC2,Ee.pointLights.value=V.state.point,Ee.pointLightShadows.value=V.state.pointShadow,Ee.hemisphereLights.value=V.state.hemi,Ee.sunShadowMatrix.value=V.state.sunShadowMatrix,Ee.sunShadowCascade.value=V.state.sunShadowCascade,Ee.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ee.spotLightMatrix.value=V.state.spotLightMatrix,Ee.spotLightMap.value=V.state.spotLightMap,Ee.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=Ye,H.uniformsList=null,Ye}function Yp(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=ic.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Kp(T,N){const K=j.get(T);K.outputColorSpace=N.outputColorSpace,K.batching=N.batching,K.batchingColor=N.batchingColor,K.instancing=N.instancing,K.instancingColor=N.instancingColor,K.instancingMorph=N.instancingMorph,K.skinning=N.skinning,K.morphTargets=N.morphTargets,K.morphNormals=N.morphNormals,K.morphColors=N.morphColors,K.morphTargetsCount=N.morphTargetsCount,K.numClippingPlanes=N.numClippingPlanes,K.numIntersection=N.numClipIntersection,K.vertexAlphas=N.vertexAlphas,K.vertexTangents=N.vertexTangents,K.toneMapping=N.toneMapping}function Jx(T,N){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let K=0,H=T.length;K<H;K++){const V=T[K];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function Qx(T,N,K,H,V){N.isScene!==!0&&(N=yn),$.resetTextureUnits();const pe=N.fog,xe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,fe=B===null?P.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ke.workingColorSpace,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,be=se.get(H.envMap||xe,Me),Be=H.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!K.morphAttributes.position,rt=!!K.morphAttributes.normal,kt=!!K.morphAttributes.color;let vt=Ci;H.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(vt=P.toneMapping);const ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,sn=ft!==void 0?ft.length:0,_e=j.get(H),hn=w.state.lights;if(nt===!0&&(pt===!0||T!==X)){const gt=T===X&&H.id===U;Re.setState(H,T,gt)}let et=!1;H.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==hn.state.version||_e.outputColorSpace!==fe||V.isBatchedMesh&&_e.batching===!1||!V.isBatchedMesh&&_e.batching===!0||V.isBatchedMesh&&_e.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&_e.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&_e.instancing===!1||!V.isInstancedMesh&&_e.instancing===!0||V.isSkinnedMesh&&_e.skinning===!1||!V.isSkinnedMesh&&_e.skinning===!0||V.isInstancedMesh&&_e.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&_e.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&_e.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&_e.instancingMorph===!1&&V.morphTexture!==null||_e.envMap!==be||H.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Re.numPlanes||_e.numIntersection!==Re.numIntersection)||_e.vertexAlphas!==Be||_e.vertexTangents!==Ye||_e.morphTargets!==Ee||_e.morphNormals!==rt||_e.morphColors!==kt||_e.toneMapping!==vt||_e.morphTargetsCount!==sn||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,_e.__version=H.version);let Hn=_e.currentProgram;et===!0&&(Hn=Xo(H,N,V),O&&H.isNodeMaterial&&O.onUpdateProgram(H,Hn,_e));let _i=!1,rr=!1,us=!1;const dt=Hn.getUniforms(),Pt=_e.uniforms;if(x.useProgram(Hn.program)&&(_i=!0,rr=!0,us=!0),H.id!==U&&(U=H.id,rr=!0),_e.needsLights){const gt=Jx(w.state.lightProbeGridArray,V);_e.lightProbeGrid!==gt&&(_e.lightProbeGrid=gt,rr=!0)}if(_i||X!==T){x.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),dt.setValue(k,"projectionMatrix",T.projectionMatrix),dt.setValue(k,"viewMatrix",T.matrixWorldInverse);const ar=dt.map.cameraPosition;ar!==void 0&&ar.setValue(k,St.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&dt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,rr=!0,us=!0)}if(_e.needsLights&&(hn.state.sunShadowMap.length>0&&dt.setValue(k,"sunShadowMap",hn.state.sunShadowMap,$),hn.state.directionalShadowMap.length>0&&dt.setValue(k,"directionalShadowMap",hn.state.directionalShadowMap,$),hn.state.spotShadowMap.length>0&&dt.setValue(k,"spotShadowMap",hn.state.spotShadowMap,$),hn.state.pointShadowMap.length>0&&dt.setValue(k,"pointShadowMap",hn.state.pointShadowMap,$)),V.isSkinnedMesh){dt.setOptional(k,V,"bindMatrix"),dt.setOptional(k,V,"bindMatrixInverse");const gt=V.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),dt.setValue(k,"boneTexture",gt.boneTexture,$))}V.isBatchedMesh&&(dt.setOptional(k,V,"batchingTexture"),dt.setValue(k,"batchingTexture",V._matricesTexture,$),dt.setOptional(k,V,"batchingIdTexture"),dt.setValue(k,"batchingIdTexture",V._indirectTexture,$),dt.setOptional(k,V,"batchingColorTexture"),V._colorsTexture!==null&&dt.setValue(k,"batchingColorTexture",V._colorsTexture,$));const sr=K.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&D.update(V,K,Hn),(rr||_e.receiveShadow!==V.receiveShadow)&&(_e.receiveShadow=V.receiveShadow,dt.setValue(k,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Pt.envMapIntensity.value=N.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=qR()),rr){if(dt.setValue(k,"toneMappingExposure",P.toneMappingExposure),_e.needsLights&&ey(Pt,us),pe&&H.fog===!0&&Ae.refreshFogUniforms(Pt,pe),Ae.refreshMaterialUniforms(Pt,H,ne,q,w.state.transmissionRenderTarget[T.id]),_e.needsLights&&_e.lightProbeGrid){const gt=_e.lightProbeGrid;Pt.probesSH.value=gt.texture,Pt.probesMin.value.copy(gt.boundingBox.min),Pt.probesMax.value.copy(gt.boundingBox.max),Pt.probesResolution.value.copy(gt.resolution)}ic.upload(k,Yp(_e),Pt,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ic.upload(k,Yp(_e),Pt,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(k,"center",V.center),dt.setValue(k,"modelViewMatrix",V.modelViewMatrix),dt.setValue(k,"normalMatrix",V.normalMatrix),dt.setValue(k,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const gt=H.uniformsGroups;for(let ar=0,ds=gt.length;ar<ds;ar++){const $p=gt[ar];ie.update($p,Hn),ie.bind($p,Hn)}}return Hn}function ey(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.sunLights.needsUpdate=N,T.sunLightShadows.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function ty(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(T,N,K){const H=j.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),j.get(T.texture).__webglTexture=N,j.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:K,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){const K=j.get(T);K.__webglFramebuffer=N,K.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,K=0){B=T,Q=N,Y=K;let H=null,V=!1,pe=!1;if(T){const fe=j.get(T);if(fe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(k.FRAMEBUFFER,fe.__webglFramebuffer),J.copy(T.viewport),me.copy(T.scissor),Te=T.scissorTest,x.viewport(J),x.scissor(me),x.setScissorTest(Te),U=-1;return}else if(fe.__webglFramebuffer===void 0)$.setupRenderTarget(T);else if(fe.__hasExternalTextures)$.rebindTextures(T,j.get(T.texture).__webglTexture,j.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(fe.__boundDepthTexture!==Be){if(Be!==null&&j.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(T)}}const Me=T.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const be=j.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(be[N])?H=be[N][K]:H=be[N],V=!0):T.samples>0&&$.useMultisampledRTT(T)===!1?H=j.get(T).__webglMultisampledFramebuffer:Array.isArray(be)?H=be[K]:H=be,J.copy(T.viewport),me.copy(T.scissor),Te=T.scissorTest}else J.copy(ve).multiplyScalar(ne).floor(),me.copy(Ve).multiplyScalar(ne).floor(),Te=Bt;if(K!==0&&(H=W),x.bindFramebuffer(k.FRAMEBUFFER,H)&&x.drawBuffers(T,H),x.viewport(J),x.scissor(me),x.setScissorTest(Te),V){const fe=j.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,K)}else if(pe){const fe=N;for(let Me=0;Me<T.textures.length;Me++){const be=j.get(T.textures[Me]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Me,be.__webglTexture,K,fe)}}else if(T!==null&&K!==0){const fe=j.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fe.__webglTexture,K)}U=-1};function qp(T){const N=j.get(T);return(N.__readFormat!==T.format||N.__readType!==T.type)&&(N.__readFormat=T.format,N.__readType=T.type,N.__formatReadable=R.textureFormatReadable(T.format),N.__typeReadable=R.textureTypeReadable(T.type)),N}this.readRenderTargetPixels=function(T,N,K,H,V,pe,xe,fe=0){if(!(T&&T.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){x.bindFramebuffer(k.FRAMEBUFFER,Me);try{const be=T.textures[fe],Be=be.format,Ye=be.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+fe);const Ee=qp(be);if(Ee.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-H&&K>=0&&K<=T.height-V&&k.readPixels(N,K,H,V,ue.convert(Be),ue.convert(Ye),pe)}finally{const be=B!==null?j.get(B).__webglFramebuffer:null;x.bindFramebuffer(k.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,N,K,H,V,pe,xe,fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(N>=0&&N<=T.width-H&&K>=0&&K<=T.height-V){x.bindFramebuffer(k.FRAMEBUFFER,Me);const be=T.textures[fe],Be=be.format,Ye=be.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+fe);const Ee=qp(be);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.bufferData(k.PIXEL_PACK_BUFFER,pe.byteLength,k.STREAM_READ),k.readPixels(N,K,H,V,ue.convert(Be),ue.convert(Ye),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const kt=B!==null?j.get(B).__webglFramebuffer:null;x.bindFramebuffer(k.FRAMEBUFFER,kt);const vt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await fE(k,vt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,pe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(rt),k.deleteSync(vt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,K=0){const H=Math.pow(2,-K),V=Math.floor(T.image.width*H),pe=Math.floor(T.image.height*H),xe=N!==null?N.x:0,fe=N!==null?N.y:0;$.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,xe,fe,V,pe),x.unbindTexture()},this.copyTextureToTexture=function(T,N,K=null,H=null,V=0,pe=0){let xe,fe,Me,be,Be,Ye,Ee,rt,kt;const vt=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(K!==null)xe=K.max.x-K.min.x,fe=K.max.y-K.min.y,Me=K.isBox3?K.max.z-K.min.z:1,be=K.min.x,Be=K.min.y,Ye=K.isBox3?K.min.z:0;else{const Pt=Math.pow(2,-V);xe=Math.floor(vt.width*Pt),fe=Math.floor(vt.height*Pt),T.isDataArrayTexture?Me=vt.depth:T.isData3DTexture?Me=Math.floor(vt.depth*Pt):Me=1,be=0,Be=0,Ye=0}H!==null?(Ee=H.x,rt=H.y,kt=H.z):(Ee=0,rt=0,kt=0);const ft=ue.convert(N.format),sn=ue.convert(N.type);let _e;N.isData3DTexture?($.setTexture3D(N,0),_e=k.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?($.setTexture2DArray(N,0),_e=k.TEXTURE_2D_ARRAY):($.setTexture2D(N,0),_e=k.TEXTURE_2D),x.activeTexture(k.TEXTURE0),x.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);const hn=x.getParameter(k.UNPACK_ROW_LENGTH),et=x.getParameter(k.UNPACK_IMAGE_HEIGHT),Hn=x.getParameter(k.UNPACK_SKIP_PIXELS),_i=x.getParameter(k.UNPACK_SKIP_ROWS),rr=x.getParameter(k.UNPACK_SKIP_IMAGES);x.pixelStorei(k.UNPACK_ROW_LENGTH,vt.width),x.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt.height),x.pixelStorei(k.UNPACK_SKIP_PIXELS,be),x.pixelStorei(k.UNPACK_SKIP_ROWS,Be),x.pixelStorei(k.UNPACK_SKIP_IMAGES,Ye);const us=T.isDataArrayTexture||T.isData3DTexture,dt=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){const Pt=j.get(T),sr=j.get(N),gt=j.get(Pt.__renderTarget),ar=j.get(sr.__renderTarget);x.bindFramebuffer(k.READ_FRAMEBUFFER,gt.__webglFramebuffer),x.bindFramebuffer(k.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let ds=0;ds<Me;ds++)us&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(T).__webglTexture,V,Ye+ds),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(N).__webglTexture,pe,kt+ds)),k.blitFramebuffer(be,Be,xe,fe,Ee,rt,xe,fe,k.DEPTH_BUFFER_BIT,k.NEAREST);x.bindFramebuffer(k.READ_FRAMEBUFFER,null),x.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||j.has(T)){const Pt=j.get(T),sr=j.get(N);x.bindFramebuffer(k.READ_FRAMEBUFFER,L),x.bindFramebuffer(k.DRAW_FRAMEBUFFER,G);for(let gt=0;gt<Me;gt++)us?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.__webglTexture,V,Ye+gt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pt.__webglTexture,V),dt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sr.__webglTexture,pe,kt+gt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sr.__webglTexture,pe),V!==0?k.blitFramebuffer(be,Be,xe,fe,Ee,rt,xe,fe,k.COLOR_BUFFER_BIT,k.NEAREST):dt?k.copyTexSubImage3D(_e,pe,Ee,rt,kt+gt,be,Be,xe,fe):k.copyTexSubImage2D(_e,pe,Ee,rt,be,Be,xe,fe);x.bindFramebuffer(k.READ_FRAMEBUFFER,null),x.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else dt?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(_e,pe,Ee,rt,kt,xe,fe,Me,ft,sn,vt.data):N.isCompressedArrayTexture?k.compressedTexSubImage3D(_e,pe,Ee,rt,kt,xe,fe,Me,ft,vt.data):k.texSubImage3D(_e,pe,Ee,rt,kt,xe,fe,Me,ft,sn,vt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,pe,Ee,rt,xe,fe,ft,sn,vt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,pe,Ee,rt,vt.width,vt.height,ft,vt.data):k.texSubImage2D(k.TEXTURE_2D,pe,Ee,rt,xe,fe,ft,sn,vt);x.pixelStorei(k.UNPACK_ROW_LENGTH,hn),x.pixelStorei(k.UNPACK_IMAGE_HEIGHT,et),x.pixelStorei(k.UNPACK_SKIP_PIXELS,Hn),x.pixelStorei(k.UNPACK_SKIP_ROWS,_i),x.pixelStorei(k.UNPACK_SKIP_IMAGES,rr),pe===0&&N.generateMipmaps&&k.generateMipmap(_e),x.unbindTexture()},this.initRenderTarget=function(T){j.get(T).__webglFramebuffer===void 0&&$.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$.setTextureCube(T,0):T.isData3DTexture?$.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$.setTexture2DArray(T,0):$.setTexture2D(T,0),x.unbindTexture()},this.resetState=function(){Q=0,Y=0,B=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const ZR="/models/Vacuum Tube.glb",JR="/models/intel4004/scene.gltf",QR="/models/semiconductors.gltf",eC="/models/5.25_floppy_disk__free_version/floppy_disk.gltf",tC="/models/cpu_intel_8086/scene.gltf",nC="/models/ibm_pc_xt_5150/ibm_pc_xt_5150.gltf",iC="/models/macintosh_classic_1991/macintosh_classic_1991.gltf",rC="/models/apple_power_mac_g3/scene.gltf",Dp=[{id:"vacuum_tube",order:0,modelPath:ZR,name:"TABUNG HAMPA UDARA",year:"1940–1959",generation:"Generasi I",technology:"Vacuum Tube / Tabung Hampa Udara",targetHeight:.16,rotation:[0,0,0],shortDescription:"Komponen utama komputer generasi pertama yang menggunakan tabung hampa udara.",placeholderShape:"cylinder",placeholderColor:"#22d3ee",educationalInfo:{summary:"Komputer generasi pertama berkembang pada periode 1940–1959 dan menggunakan tabung hampa udara (vacuum tube) serta drum magnetik. Perkembangannya didorong oleh kebutuhan strategis, termasuk lingkungan akademik dan militer pada masa Perang Dunia II. Ukuran komputer pada generasi ini sangat besar hingga dapat memenuhi satu ruangan.",details:["Periode Generasi I: 1940–1959","Teknologi utama: tabung hampa udara (vacuum tube)","Menggunakan drum magnetik sebagai salah satu media penyimpanan","Berkembang dalam lingkungan akademik dan militer","Perkembangannya didorong oleh kebutuhan strategis Perang Dunia II","Ukuran fisik komputer sangat besar dan dapat memenuhi satu ruangan"],topics:["sejarah"],sourceNote:"Berdasarkan materi Modul 1 — Sejarah/Evolusi Komputer, Generasi I."}},{id:"intel_4004",order:1,modelPath:JR,name:"INTEL 4004",year:"1971",generation:"Generasi IV",technology:"Microprocessor / MOSFET / LSI",targetHeight:.1,rotation:[0,0,0],shortDescription:"Model mikroprosesor yang merepresentasikan awal perkembangan era mikroprosesor.",placeholderShape:"chip",placeholderColor:"#3b82f6",educationalInfo:{summary:"Intel 4004 digunakan dalam timeline AR sebagai representasi awal era mikroprosesor pada Generasi IV. Materi Modul 1 menjelaskan bahwa Generasi IV dimulai pada dekade 1970-an ketika perkembangan MOSFET dan Large Scale Integration (LSI) membawa komputer menuju pengembangan mikroprosesor.",details:["Tahun pada timeline: 1971","Merepresentasikan perkembangan awal era mikroprosesor","Generasi IV berkembang mulai dekade 1970-an","MOSFET menjadi salah satu teknologi penting dalam perkembangan Generasi IV","Large Scale Integration (LSI) memungkinkan integrasi komponen dalam skala lebih besar","Perkembangan tersebut membawa komputer menuju penggunaan mikroprosesor"],topics:["sejarah","prosesor"],sourceNote:"Konteks Generasi IV berdasarkan materi Modul 1. Detail historis Intel 4004 digunakan sebagai konteks tambahan untuk model pada timeline."}},{id:"semiconductors",order:2,modelPath:QR,name:"SEMIKONDUKTOR",year:"1970-an",generation:"Generasi IV",technology:"Semiconductor / MOSFET / LSI",targetHeight:.12,rotation:[0,0,0],shortDescription:"Teknologi semikonduktor yang mendukung integrasi komponen dan perkembangan mikroprosesor.",placeholderShape:"chip",placeholderColor:"#0e7490",educationalInfo:{summary:"Perkembangan semikonduktor, MOSFET, dan integrasi berskala besar (Large Scale Integration/LSI) menjadi bagian penting dari Generasi IV. Perkembangan ini memungkinkan komponen elektronik menjadi semakin terintegrasi dan mendukung lahirnya mikroprosesor.",details:["Berkaitan dengan perkembangan komputer Generasi IV","MOSFET menjadi salah satu teknologi penting dalam perkembangan Generasi IV","Large Scale Integration (LSI) meningkatkan tingkat integrasi komponen","Integrasi komponen mendukung miniaturisasi perangkat komputer","Perkembangan semikonduktor mendukung lahirnya mikroprosesor","Perkembangan ini menjadi bagian dari transisi menuju era komputer personal"],topics:["sejarah","prosesor"],sourceNote:"Berdasarkan materi Modul 1 — Sejarah/Evolusi Komputer, Generasi IV."}},{id:"floppy_disk",order:3,modelPath:eC,name:"FLOPPY DISK",year:"1970-an–1980-an",generation:"Generasi IV",technology:"Magnetic Storage",targetHeight:.14,rotation:[0,0,0],shortDescription:"Media penyimpanan berbasis magnetik yang merepresentasikan perkembangan storage pada era komputer personal.",placeholderShape:"floppy",placeholderColor:"#60a5fa",educationalInfo:{summary:"Floppy disk merupakan media penyimpanan berbasis magnetik yang digunakan pada perkembangan komputer personal. Dalam konteks Modul 1, objek ini dapat dikaitkan dengan pembahasan storage dan pengaruh hierarki memori terhadap kinerja sistem komputer.",details:["Media penyimpanan berbasis magnetik","Berkaitan dengan perkembangan komputer personal","Merepresentasikan perkembangan teknologi penyimpanan pada era komputer personal","Storage merupakan bagian dari sistem memori dan penyimpanan komputer","Kecepatan akses memori dan penyimpanan dapat memengaruhi kinerja sistem","Hierarki memori mempertimbangkan perbedaan kecepatan dan karakteristik berbagai tingkat penyimpanan"],topics:["sejarah","kinerja"],sourceNote:"Kaitan dengan kinerja dan storage hierarchy berdasarkan materi Modul 1 — Perancangan Kinerja Sistem Komputer."}},{id:"intel_8086",order:4,modelPath:tC,name:"INTEL 8086",year:"1978",generation:"Generasi IV",technology:"16-bit Microprocessor / x86",targetHeight:.14,rotation:[0,0,0],shortDescription:"Mikroprosesor 16-bit tahun 1978 yang menjadi bagian penting dalam evolusi arsitektur x86.",placeholderShape:"chip",placeholderColor:"#3b82f6",educationalInfo:{summary:"Intel 8086 merupakan mikroprosesor tahun 1978 dengan arsitektur 16-bit dan bus alamat 20-bit yang dapat mengalamati hingga 1 MB. Dalam materi Modul 1, 8086 menjadi titik awal tabel evolusi prosesor Intel yang kemudian berkembang menuju generasi prosesor berikutnya.",details:["Tahun: 1978","Arsitektur: 16-bit","Bus alamat: 20-bit","Kemampuan pengalamatan: hingga 1 MB","Menjadi bagian awal dari evolusi prosesor Intel yang dibahas dalam materi","Materi juga mencatat perkembangan awal pipelining pada 8086","Evolusi berikutnya mencakup 80286, 80386, 80486, Pentium, Pentium Pro/II/III, dan Pentium 4"],topics:["sejarah","prosesor"],sourceNote:"Berdasarkan materi Modul 1 — Evolusi Prosesor: 8086 (1978), termasuk karakteristik 16-bit, bus alamat 20-bit, kemampuan pengalamatan 1 MB, dan perkembangan awal pipelining."}},{id:"ibm_pc_xt_5150",order:5,modelPath:nC,name:"IBM PC XT 5150",year:"1981",generation:"Generasi IV",technology:"Personal Computer / Intel x86",targetHeight:.2,rotation:[0,0,0],shortDescription:"Komputer personal IBM yang merepresentasikan perkembangan era personal computer.",placeholderShape:"ibm_pc",placeholderColor:"#475569",educationalInfo:{summary:"IBM PC XT 5150 digunakan sebagai representasi perkembangan komputer personal pada era mikroprosesor. Objek ini menghubungkan perkembangan mikroprosesor dengan perubahan bentuk dan penggunaan komputer dari sistem berukuran besar menuju komputer personal.",details:["Tahun: 1981","Merepresentasikan perkembangan komputer personal","Berkaitan dengan perkembangan platform PC berbasis prosesor Intel","Menunjukkan perubahan penggunaan komputer menuju sistem personal","Perkembangan mikroprosesor menjadi salah satu faktor penting dalam perkembangan komputer personal","Objek ini berada pada konteks Generasi IV dalam timeline AR"],topics:["sejarah"],sourceNote:"Konteks Generasi IV dan perkembangan komputer personal berdasarkan materi Modul 1."}},{id:"macintosh_classic",order:6,modelPath:iC,name:"MACINTOSH CLASSIC",year:"1990–1991",generation:"Generasi IV",technology:"Personal Computer / Microprocessor",targetHeight:.2,rotation:[0,0,0],shortDescription:"Komputer personal Apple yang merepresentasikan perkembangan platform komputer personal.",placeholderShape:"monitor",placeholderColor:"#60a5fa",educationalInfo:{summary:"Macintosh Classic merupakan komputer personal Apple pada era perkembangan komputer generasi keempat. Dalam konteks pembelajaran, objek ini menjadi penghubung menuju pembahasan perkembangan platform Apple dan studi kasus perubahan arsitektur prosesor dari PowerPC menuju Intel.",details:["Komputer personal Apple","Tahun pada timeline: 1990–1991","Merepresentasikan perkembangan komputer personal pada Generasi IV","Menjadi bagian dari konteks perkembangan platform komputer Apple","Apple pernah menggunakan arsitektur PowerPC sebelum berpindah ke prosesor Intel","Peralihan tersebut menjadi bagian penting dalam studi kasus Pentium dan PowerPC"],topics:["sejarah","pentium_vs_powerpc"],sourceNote:"Konteks Generasi IV berdasarkan materi Modul 1. Hubungan dengan PowerPC dan Intel digunakan dalam konteks studi kasus Pentium vs PowerPC."}},{id:"power_mac_g3",order:7,modelPath:rC,name:"POWER MAC G3",year:"1997",generation:"Generasi IV",technology:"PowerPC / RISC",targetHeight:.22,rotation:[0,0,0],shortDescription:"Komputer Apple berbasis PowerPC yang menjadi bagian penting studi kasus RISC vs CISC.",placeholderShape:"tower",placeholderColor:"#06b6d4",educationalInfo:{summary:"Power Mac G3 digunakan untuk merepresentasikan platform PowerPC dalam studi kasus Modul 1. PowerPC dikembangkan oleh IBM, Apple, dan Motorola dengan pendekatan RISC, sedangkan Pentium Intel menggunakan pendekatan CISC. Perbandingan ini menunjukkan bahwa performa teknis bukan satu-satunya faktor yang menentukan keberhasilan sebuah teknologi di pasar.",details:["Tahun pada timeline: 1997","Menggunakan prosesor PowerPC G3","PowerPC dikembangkan oleh IBM, Apple, dan Motorola","PowerPC menggunakan pendekatan RISC","Pentium Intel menggunakan pendekatan CISC","RISC menggunakan instruksi yang lebih sederhana dibanding pendekatan CISC","Materi membandingkan Pentium dan PowerPC dari sisi filosofi arsitektur, bus, dan koherensi cache","PowerPC akhirnya ditinggalkan Apple pada tahun 2006","Pentium terus berkembang dalam ekosistem Intel","Studi kasus menunjukkan bahwa kompatibilitas, ekosistem, dan dukungan industri dapat memengaruhi keberhasilan teknologi di pasar"],topics:["sejarah","prosesor","pentium_vs_powerpc"],sourceNote:"Berdasarkan materi Modul 1 — Evolusi Pentium vs PowerPC, termasuk perbedaan CISC dan RISC, IBM–Apple–Motorola, kompatibilitas, perkembangan pasar, dan hasil studi kasus."}}];function sC(n){return Dp.find(e=>e.id===n)}function Wx(){return[...Dp].sort((n,e)=>n.order-e.order)}function yd(n){const e=new $n;e.userData.objectId=n.id;const t=n.placeholderShape,i=new Ne(n.placeholderColor),r=n.targetHeight;switch(t){case"cylinder":{const s=new Bc(r*.35,r*.3,r,24,1),a=new zt({color:i,metalness:.3,roughness:.4,transparent:!0,opacity:.88}),o=new We(s,a);o.position.y=r/2,e.add(o);const l=new Bc(r*.3,r*.35,r*.08,24),c=new zt({color:3355443,metalness:.6,roughness:.3}),u=new We(l,c);u.position.y=r*.04,e.add(u);break}case"chip":{const s=new Jt(r*1.4,r*.15,r*1.4),a=new zt({color:1710638,metalness:.5,roughness:.3}),o=new We(s,a);o.position.y=r*.075,e.add(o);const l=new Jt(r*1.1,r*.02,r*1.1),c=new zt({color:i,metalness:.4,roughness:.4,emissive:i,emissiveIntensity:.15}),u=new We(l,c);u.position.y=r*.16,e.add(u);const h=new Jt(r*.04,r*.08,r*.12),d=new zt({color:8947848,metalness:.8,roughness:.2});for(let p=0;p<4;p++)for(let g=0;g<5;g++){const S=new We(h,d),m=(g-2)*r*.22;p===0?S.position.set(m,r*.04,r*.72):p===1?S.position.set(m,r*.04,-r*.72):p===2?(S.position.set(r*.72,r*.04,m),S.rotation.y=Math.PI/2):(S.position.set(-r*.72,r*.04,m),S.rotation.y=Math.PI/2),e.add(S)}break}case"monitor":{const s=new Jt(r*1.1,r,r*1.2),a=new zt({color:12895428,metalness:.1,roughness:.7}),o=new We(s,a);o.position.y=r/2,e.add(o);const l=new Jt(r*.75,r*.55,r*.02),c=new zt({color:2282478,metalness:.1,roughness:.2,emissive:i,emissiveIntensity:.2}),u=new We(l,c);u.position.set(0,r*.58,r*.61),e.add(u);break}case"tower":{const s=new Jt(r*.5,r,r*.55),a=new zt({color:14737632,metalness:.15,roughness:.6}),o=new We(s,a);o.position.y=r/2,e.add(o);const l=new Jt(r*.42,r*.3,r*.01),c=new zt({color:i,metalness:.3,roughness:.4,emissive:i,emissiveIntensity:.1}),u=new We(l,c);u.position.set(0,r*.7,r*.28),e.add(u);break}case"floppy":{const s=new Jt(r*1.2,r*.08,r*1.2),a=new zt({color:3900150,metalness:.2,roughness:.5}),o=new We(s,a);o.position.y=r*.04,e.add(o);const l=new Jt(r*.6,r*.01,r*.5),c=new zt({color:15790320,metalness:0,roughness:.8}),u=new We(l,c);u.position.set(0,r*.09,r*.1),e.add(u);break}case"ibm_pc":{const s=new Jt(r*.9,r,r*1.1),a=new zt({color:12895428,metalness:.1,roughness:.7}),o=new We(s,a);o.position.y=r/2,e.add(o);const l=new Jt(r*.6,r*.15,r*.02),c=new zt({color:3355443,metalness:.3,roughness:.5});for(let u=0;u<2;u++){const h=new We(l,c);h.position.set(0,r*(.35+u*.2),r*.56),e.add(h)}break}default:{const s=new Jt(r,r,r),a=new zt({color:i,metalness:.3,roughness:.5}),o=new We(s,a);o.position.y=r/2,e.add(o)}}return e.rotation.set(n.rotation[0],n.rotation[1],n.rotation[2]),e}function aC(){const n=new $n,e=new su(.08,.1,32),t=new Dn({color:2282478,side:Ln,transparent:!0,opacity:.8}),i=new We(e,t);i.rotation.x=-Math.PI/2,i.position.y=.001,n.add(i);const r=new Cp(.07,32),s=new Dn({color:2282478,transparent:!0,opacity:.15,side:Ln}),a=new We(r,s);return a.rotation.x=-Math.PI/2,a.position.y=5e-4,n.add(a),n}function oC(n){const e=new su(n*.45,n*.55,48),t=new Dn({color:2282478,side:Ln,transparent:!0,opacity:.7}),i=new We(e,t);return i.rotation.x=-Math.PI/2,i.position.y=.002,i}function lC(n,e){const t=new $n,i=document.createElement("canvas"),r=i.getContext("2d"),s=48,a=32;r.font=`bold ${s}px Space Grotesk, sans-serif`;const o=r.measureText(n).width;r.font=`${a}px Inter, sans-serif`;const l=r.measureText(e).width,c=Math.max(o,l)+40,u=s+a+24;i.width=c,i.height=u,r.fillStyle="rgba(10, 14, 26, 0.85)",r.beginPath();const h=12;r.moveTo(h,0),r.lineTo(c-h,0),r.quadraticCurveTo(c,0,c,h),r.lineTo(c,u-h),r.quadraticCurveTo(c,u,c-h,u),r.lineTo(h,u),r.quadraticCurveTo(0,u,0,u-h),r.lineTo(0,h),r.quadraticCurveTo(0,0,h,0),r.closePath(),r.fill(),r.strokeStyle="rgba(6, 182, 212, 0.4)",r.lineWidth=2,r.stroke(),r.font=`bold ${s}px Space Grotesk, sans-serif`,r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="top",r.fillText(n,c/2,8),r.font=`${a}px Inter, sans-serif`,r.fillStyle="#22d3ee",r.fillText(e,c/2,8+s+4);const d=new l1(i);d.colorSpace=Ft,d.minFilter=It,d.magFilter=It;const p=new Dn({map:d,transparent:!0,depthTest:!1,depthWrite:!1}),g=c/u,S=.04,m=new Vo(S*g,S),f=new We(m,p);return f.renderOrder=999,t.add(f),t.userData.isLabel=!0,t.userData.labelTexture=d,t}function w0(n,e){if(e===eE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===af||e===xx){let t=n.getIndex();if(t===null){const s=[],a=n.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===af)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(r),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function cC(n){const e=new Map,t=new Map,i=n.clone();return Xx(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Xx(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Xx(n.children[i],e.children[i],t)}class uC extends ma{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mC(t)}),this.register(function(t){return new gC(t)}),this.register(function(t){return new wC(t)}),this.register(function(t){return new bC(t)}),this.register(function(t){return new AC(t)}),this.register(function(t){return new vC(t)}),this.register(function(t){return new xC(t)}),this.register(function(t){return new yC(t)}),this.register(function(t){return new SC(t)}),this.register(function(t){return new pC(t)}),this.register(function(t){return new MC(t)}),this.register(function(t){return new _C(t)}),this.register(function(t){return new TC(t)}),this.register(function(t){return new EC(t)}),this.register(function(t){return new hC(t)}),this.register(function(t){return new b0(t,Xe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new b0(t,Xe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new RC(t)})}load(e,t,i,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=oo.extractUrlBase(e);a=oo.resolveURL(c,this.path)}else a=oo.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Dx(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jx){try{a[Xe.KHR_BINARY_GLTF]=new CC(e)}catch(h){r&&r(h);return}s=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new HC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Xe.KHR_MATERIALS_UNLIT:a[h]=new fC;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[h]=new PC(s,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[h]=new LC;break;case Xe.KHR_MESH_QUANTIZATION:a[h]=new IC;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function dC(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Nt(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hC{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],On);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new uf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new F1(u),c.distance=h;break;case"spot":c=new k1(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class fC{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return Dn}extendParams(e,t,i){const r=[];e.color=new Ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],On),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Ft))}return Promise.all(r)}}class pC{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class mC{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Ui:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(s,s)}return Promise.all(r)}}class gC{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Ui:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class _C{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Ui:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class vC{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Ui:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],On)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Ft)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class xC{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Ui:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class yC{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Ui:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(s[0],s[1],s[2],On),Promise.all(r)}}class SC{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Ui:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class MC{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Ui:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(s[0],s[1],s[2],On),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Ft)),Promise.all(r)}}class EC{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Ui:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}}class TC{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Ui:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class wC{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class bC{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class AC{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class b0{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,r.mode,r.filter),p})})}else return null}}class RC{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Wn.TRIANGLES&&c.mode!==Wn.TRIANGLE_STRIP&&c.mode!==Wn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const S=new Fe,m=new F,f=new Gn,_=new F(1,1,1),M=new i1(g.geometry,g.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,E),l.SCALE&&_.fromBufferAttribute(l.SCALE,E),M.setMatrixAt(E,S.compose(m,f,_));let y=null;for(const E in l)if(E==="_COLOR_0"){const w=l[E];M.instanceColor=new Uc(w.array,w.itemSize,w.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(y===null){const b=M.geometry;y=new nn,y.name=b.name;for(const v in b.attributes)y.setAttribute(v,b.attributes[v]);for(const v in b.morphAttributes)y.morphAttributes[v]=b.morphAttributes[v];b.index!==null&&y.setIndex(b.index),y.morphTargetsRelative=b.morphTargetsRelative;for(const v of b.groups)y.addGroup(v.start,v.count,v.materialIndex);b.boundingBox!==null&&(y.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(y.boundingSphere=b.boundingSphere.clone()),y.drawRange.start=b.drawRange.start,y.drawRange.count=b.drawRange.count,y.userData=Object.assign({},b.userData),M.geometry=y}const w=l[E];y.setAttribute(E,new Uc(w.array,w.itemSize,w.normalized))}bt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const jx="glTF",ka=12,A0={JSON:1313821514,BIN:5130562};class CC{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ka),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ka,s=new DataView(e,ka);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===A0.JSON){const c=new Uint8Array(e,ka+a,o);this.content=i.decode(c)}else if(l===A0.BIN){const c=ka+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class PC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=pf[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=pf[u]||u.toLowerCase();if(a[u]!==void 0){const d=i.accessors[e.attributes[u]],p=Zs[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const S=p.attributes[g],m=l[g];m!==void 0&&(S.normalized=m)}h(p)},o,c,On,d)})})}}class LC{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const i=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class IC{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class Yx extends ha{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,h=(i-t)/u,d=h*h,p=d*h,g=e*c,S=g-c,m=-2*p+3*d,f=p-d,_=1-m,M=f-d+h;for(let y=0;y!==o;y++){const E=a[S+y+o],w=a[S+y+l]*u,b=a[g+y+o],v=a[g+y]*u;s[y]=_*E+M*w+m*b+f*v}return s}}const NC=new Gn;class DC extends Yx{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return NC.fromArray(s).normalize().toArray(s),s}}const Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},R0={9728:Vt,9729:It,9984:hx,9985:Zl,9986:Xa,9987:Yi},C0={33071:wi,33648:Lc,10497:aa},Sd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kC={CUBICSPLINE:void 0,LINEAR:Po,STEP:Co},Md={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function UC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nr})),n.DefaultMaterial}function Wr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Mi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function FC(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function OC(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function BC(n){let e;const t=n.extensions&&n.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ed(t.attributes):e=n.indices+":"+Ed(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Ed(n.targets[i]);return e}function Ed(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function mf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zC(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const GC=new Fe;class HC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&a<98?this.textureLoader=new N1(this.options.manager):this.textureLoader=new z1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Wr(s,o,r),Mi(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(oo.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Sd[r.type],o=Zs[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new An(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Sd[r.type],c=Zs[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let S,m;if(p&&p!==h){const f=Math.floor(d/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let M=t.cache.get(_);M||(S=new c(o,f*p,r.count*p/u),M=new KE(S,p/u),t.cache.add(_,M)),m=new Tp(M,l,d%p/u,g)}else o===null?S=new c(r.count*l):S=new c(o,d,r.count*l),m=new An(S,l,g);if(r.sparse!==void 0){const f=Sd.SCALAR,_=Zs[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,E=new _(a[1],M,r.sparse.count*f),w=new c(a[2],y,r.sparse.count*l);o!==null&&(m=new An(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,v=E.length;b<v;b++){const A=E[b];if(m.setX(A,w[b*l]),l>=2&&m.setY(A,w[b*l+1]),l>=3&&m.setZ(A,w[b*l+2]),l>=4&&m.setW(A,w[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=R0[d.magFilter]||It,u.minFilter=R0[d.minFilter]||Yi,u.wrapS=C0[d.wrapS]||aa,u.wrapT=C0[d.wrapT]||aa,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Vt&&u.minFilter!==It,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(S){const m=new Wt(S);m.needsUpdate=!0,d(m)}),t.load(oo.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Mi(h,a),h.userData.mimeType=a.mimeType||zC(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Rx,Pi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ax,Pi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return zt}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const h=r[Xe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],On),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ft)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ln);const u=s.alphaMode||Md.OPAQUE;if(u===Md.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Md.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Dn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Dn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Dn){const h=s.emissiveFactor;o.emissive=new Ne().setRGB(h[0],h[1],h[2],On)}return s.emissiveTexture!==void 0&&a!==Dn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ft)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),Mi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Wr(r,h,s),h})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return P0(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=BC(c),h=r[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=P0(new nn,c,t),c.mode===Wn.TRIANGLE_STRIP?d=d.then(p=>w0(p,xx)):c.mode===Wn.TRIANGLE_FAN&&(d=d.then(p=>w0(p,af))),r[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?UC(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const S=u[p],m=a[p];let f;const _=c[p];if(m.mode===Wn.TRIANGLES||m.mode===Wn.TRIANGLE_STRIP||m.mode===Wn.TRIANGLE_FAN||m.mode===void 0){const M=s.isSkinnedMesh===!0,y=S.hasAttribute("skinIndex")&&S.hasAttribute("skinWeight");M&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=M&&y?new e1(S,_):new We(S,_),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(m.mode===Wn.LINES)f=new s1(S,_);else if(m.mode===Wn.LINE_STRIP)f=new Rp(S,_);else if(m.mode===Wn.LINE_LOOP)f=new a1(S,_);else if(m.mode===Wn.POINTS)f=new o1(S,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&OC(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Mi(f,s),m.extensions&&Wr(r,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Wr(r,h[0],s),h[0];const d=new $n;s.extensions&&Wr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new gn(lf.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new ou(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Mi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new Fe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new bp(o,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const p=r.channels[h],g=r.samplers[p.sampler],S=p.target,m=S.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;S.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(S))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],g=h[2],S=h[3],m=h[4],f=[];for(let M=0,y=d.length;M<y;M++){const E=d[M],w=p[M],b=g[M],v=S[M],A=m[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const P=i._createAnimationTracks(E,w,b,v,A);if(P)for(let I=0;I<P.length;I++)f.push(P[I])}const _=new b1(s,void 0,f);return Mi(_,r),_})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,GC)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);if(u.userData.pivot!==void 0&&h.length>0){const p=u.userData.pivot,g=h[0];u.pivot=new F().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new bx:c.length>1?u=new $n:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),Mi(u,s),s.extensions&&Wr(i,u,s),s.matrix!==void 0){const h=new Fe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new $n;i.name&&(s.name=r.createUniqueName(i.name)),Mi(s,i),i.extensions&&Wr(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){const d=l[u];d.parent!==null?s.add(cC(d)):s.add(d)}const c=u=>{const h=new Map;for(const[d,p]of r.associations)(d instanceof Pi||d instanceof Wt)&&h.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&h.set(d,p)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}fr[s.path]===fr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(fr[s.path]){case fr.weights:u=Do;break;case fr.rotation:u=ko;break;case fr.translation:case fr.scale:u=zc;break;default:switch(i.itemSize){case 1:u=Do;break;case 2:case 3:default:u=zc;break}break}const h=r.interpolation!==void 0?kC[r.interpolation]:Po,d=this._getArrayFromAccessor(i);for(let p=0,g=l.length;p<g;p++){const S=new u(l[p]+"."+fr[s.path],t.array,d,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),a.push(S)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=mf(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ko?DC:Yx;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function VC(n,e,t){const i=e.attributes,r=new Di;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),o.normalized){const u=mf(Zs[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new F,l=new F;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const S=mf(Zs[d.componentType]);l.multiplyScalar(S)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new ki;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function P0(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=pf[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return Ke.workingColorSpace!==On&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Mi(n,e),VC(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?FC(n,e.targets,t):n})}const WC=new uC,rc=new Map,Ya=new Map,Ua=new Di,Fa=new F,Ul=new F;function L0(n){let e=0;return n.traverse(t=>{t instanceof We&&e++}),e}async function XC(n){const e=n.modelPath;if(Ya.has(e)){const t=Ya.get(e);return console.error(`[M1 GARML] MODEL LOAD FAILED (cached): ${n.name} (${n.id})`),console.error(`[M1 GARML]   URL: ${e}`),console.error(`[M1 GARML]   Error: ${t}`),console.error("[M1 GARML]   PLACEHOLDER USED — this is NOT the real model"),{group:yd(n),isPlaceholder:!0,error:t}}if(rc.has(e)){const t=rc.get(e),i=I0(t);N0(i,n);const r=L0(i);return console.log(`[M1 GARML] MODEL LOADED (cached): ${n.name} (${n.id}) → ${e} | meshes: ${r}`),{group:i,isPlaceholder:!1}}try{console.log(`[M1 GARML] Loading model: ${n.name} (${n.id}) → ${e}`);const i=(await WC.loadAsync(e)).scene,r=L0(i);if(console.log(`[M1 GARML] MODEL LOAD SUCCESS: ${n.name} (${n.id}) → ${e}`),console.log(`[M1 GARML]   gltf.scene: YES | mesh count: ${r}`),r===0){const a=`Loaded gltf.scene contains 0 meshes for ${n.name} (${e})`;return console.error(`[M1 GARML] WARNING: ${a}`),Ya.set(e,a),{group:yd(n),isPlaceholder:!0,error:a}}i.traverse(a=>{if(a instanceof We&&(a.castShadow=!1,a.receiveShadow=!1,a.material)){const o=Array.isArray(a.material)?a.material:[a.material];for(const l of o)l instanceof zt&&l.map&&(l.map.colorSpace=Ft)}}),rc.set(e,i);const s=I0(i);return N0(s,n),{group:s,isPlaceholder:!1}}catch(t){const i=t instanceof Error?t.message:String(t);return Ya.set(e,i),console.error("[M1 GARML] ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),console.error(`[M1 GARML] MODEL LOAD FAILED: ${n.name} (${n.id})`),console.error(`[M1 GARML]   URL: ${e}`),console.error(`[M1 GARML]   Error: ${i}`),console.error("[M1 GARML]   PLACEHOLDER USED — this is NOT the real model"),console.error("[M1 GARML] ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),{group:yd(n),isPlaceholder:!0,error:`REAL MODEL LOAD FAILED: ${e} — ${i}`}}}function I0(n){const e=n.clone(!0);return e.traverse(t=>{t instanceof We&&(Array.isArray(t.material)?t.material=t.material.map(i=>i.clone()):t.material&&(t.material=t.material.clone()))}),e}function N0(n,e){if(Ua.setFromObject(n),Ua.isEmpty())return;Ua.getSize(Fa);const t=e.targetHeight,i=Fa.y;let r=1;if(i>1e-4)r=t/i;else{const s=Math.max(Fa.x,Fa.y,Fa.z);s>1e-4&&(r=t/s)}n.scale.setScalar(r),Ua.setFromObject(n),Ua.getCenter(Ul),n.userData.baseScale=r,n.userData.userScale=1,n.position.x-=Ul.x,n.position.y-=Ul.y,n.position.z-=Ul.z,n.rotation.set(e.rotation[0],e.rotation[1],e.rotation[2])}function jC(){rc.clear(),Ya.clear()}const YC=.3,KC=5,Ka=new F,sc=new F,ac=new F,Xr=new F,D0=new Fe,Td=new F,wd=new F,bd=new F,Rs=new F,Ad=new Gn,k0=new Gn,Fl=new Gn,Oa=new Gn;function Rd(n){n.updateMatrixWorld(!0),n.matrixWorld.extractBasis(Ka,sc,ac)}function U0(n,e,t){const i=t.parent;if(!i)return n.copy(e),n;i.updateMatrixWorld(!0),D0.copy(i.matrixWorld).invert();const r=D0.elements,s=e.x,a=e.y,o=e.z;return n.set(r[0]*s+r[4]*a+r[8]*o,r[1]*s+r[5]*a+r[9]*o,r[2]*s+r[6]*a+r[10]*o),n}class Qt{static moveInCameraSpace(e,t,i,r,s){Rd(t),Xr.set(0,0,0),Xr.addScaledVector(Ka,i),Xr.addScaledVector(sc,r),Xr.addScaledVector(ac,s),U0(Xr,Xr,e),e.position.add(Xr)}static rotateAroundCameraAxis(e,t,i,r){Rd(t),U0(Td,i==="x"?Ka:i==="y"?sc:ac,e),Td.normalize(),Oa.setFromAxisAngle(Td,r),e.quaternion.premultiply(Oa).normalize()}static rotateArcball(e,t,i,r,s,a){Rd(t);const o=(h,d,p)=>{const g=h*h+d*d,S=g<=1?Math.sqrt(1-g):0,m=Math.hypot(h,d,S)||1;p.copy(Ka).multiplyScalar(h/m),p.addScaledVector(sc,d/m),p.addScaledVector(ac,S/m),p.normalize()};o(i,r,wd),o(s,a,bd);const l=lf.clamp(wd.dot(bd),-1,1);if(l>.999999)return;Rs.crossVectors(wd,bd);const c=Rs.length();if(c<1e-7)Rs.copy(Ka),Fl.setFromAxisAngle(Rs,Math.PI);else{Rs.multiplyScalar(1/c);const h=Math.acos(l);Fl.setFromAxisAngle(Rs,h)}const u=e.parent;u?(u.getWorldQuaternion(Ad),k0.copy(Ad).invert(),Oa.copy(k0).multiply(Fl).multiply(Ad).normalize()):Oa.copy(Fl),e.quaternion.premultiply(Oa).normalize()}static scaleRelative(e,t){if(!Number.isFinite(t)||t<=0)return;const i=e.userData.baseScale??1,r=e.userData.userScale??e.scale.x/Math.max(i,1e-8),s=lf.clamp(r*t,YC,KC);e.scale.setScalar(i*s),e.userData.userScale=s}static getUserScale(e){const t=e.userData.baseScale??1;return e.userData.userScale??e.scale.x/Math.max(t,1e-8)}static snapshot(e){return{position:e.position.clone(),quaternion:e.quaternion.clone(),userScale:this.getUserScale(e)}}static resetToSnapshot(e,t){e.position.copy(t.position),e.quaternion.copy(t.quaternion);const i=e.userData.baseScale??1;e.scale.setScalar(i*t.userScale),e.userData.userScale=t.userScale}}const F0=10,Cd=10,O0=1.2,qC=1;class $C{constructor(e,t,i,r){this.mode="group",this.target=null,this.touchGesture="none",this.touchWasMulti=!1,this.touchStartX=0,this.touchStartY=0,this.touchLastX=0,this.touchLastY=0,this.pinchLastDist=0,this.pinchLastAngle=0,this.pinchLastMidX=0,this.pinchLastMidY=0,this.pointerActive=!1,this.pointerButton=0,this.pointerStartX=0,this.pointerStartY=0,this.pointerLastX=0,this.pointerLastY=0,this.pointerGesture="none",this.el=e,this.camera=t,this.callbacks=r,this.el.style.touchAction="none",this.boundTouchStart=this.onTouchStart.bind(this),this.boundTouchMove=this.onTouchMove.bind(this),this.boundTouchEnd=this.onTouchEnd.bind(this),this.boundPointerDown=this.onPointerDown.bind(this),this.boundPointerMove=this.onPointerMove.bind(this),this.boundPointerUp=this.onPointerUp.bind(this),this.boundWheel=this.onWheel.bind(this),this.boundContext=s=>s.preventDefault(),e.addEventListener("touchstart",this.boundTouchStart,{passive:!1}),e.addEventListener("touchmove",this.boundTouchMove,{passive:!1}),e.addEventListener("touchend",this.boundTouchEnd,{passive:!1}),e.addEventListener("touchcancel",this.boundTouchEnd,{passive:!1}),e.addEventListener("pointerdown",this.boundPointerDown),window.addEventListener("pointermove",this.boundPointerMove),window.addEventListener("pointerup",this.boundPointerUp),e.addEventListener("wheel",this.boundWheel,{passive:!1}),e.addEventListener("contextmenu",this.boundContext)}setMode(e){var t,i;this.mode=e,(i=(t=this.callbacks).onModeChange)==null||i.call(t,e)}setTarget(e){this.target=e}onTouchStart(e){if(e.preventDefault(),e.touches.length===1){const t=e.touches[0];this.touchGesture="arcball",this.touchWasMulti=!1,this.touchStartX=t.clientX,this.touchStartY=t.clientY,this.touchLastX=t.clientX,this.touchLastY=t.clientY;return}if(e.touches.length>=2&&this.target){this.touchGesture="multi",this.touchWasMulti=!0;const[t,i]=[e.touches[0],e.touches[1]],r=i.clientX-t.clientX,s=i.clientY-t.clientY;this.pinchLastDist=Math.max(Math.hypot(r,s),Cd),this.pinchLastAngle=Math.atan2(s,r),this.pinchLastMidX=(t.clientX+i.clientX)*.5,this.pinchLastMidY=(t.clientY+i.clientY)*.5}}onTouchMove(e){if(e.preventDefault(),e.touches.length===1&&this.touchGesture==="arcball"&&!this.touchWasMulti){const t=e.touches[0];this.applyArcballDrag(this.touchLastX,this.touchLastY,t.clientX,t.clientY),this.touchLastX=t.clientX,this.touchLastY=t.clientY;return}if(e.touches.length>=2&&this.touchGesture==="multi"&&this.target){const[t,i]=[e.touches[0],e.touches[1]];this.updateMultiTouch(t.clientX,t.clientY,i.clientX,i.clientY)}}onTouchEnd(e){if(e.preventDefault(),e.touches.length===0){this.touchGesture==="arcball"&&!this.touchWasMulti&&Math.hypot(this.touchLastX-this.touchStartX,this.touchLastY-this.touchStartY)<F0&&this.tryTap(this.touchLastX,this.touchLastY),this.touchGesture="none",this.touchWasMulti=!1;return}if(e.touches.length===1){this.touchGesture="none",this.touchWasMulti=!0;const t=e.touches[0];this.touchLastX=t.clientX,this.touchLastY=t.clientY}}onPointerDown(e){if(e.pointerType!=="touch"){e.preventDefault(),this.pointerActive=!0,this.pointerButton=e.button,this.pointerStartX=e.clientX,this.pointerStartY=e.clientY,this.pointerLastX=e.clientX,this.pointerLastY=e.clientY,this.pointerGesture=e.button===2?"pan":"arcball";try{this.el.setPointerCapture(e.pointerId)}catch{}}}onPointerMove(e){e.pointerType!=="touch"&&(!this.pointerActive||!this.target||(this.pointerGesture==="arcball"?this.applyArcballDrag(this.pointerLastX,this.pointerLastY,e.clientX,e.clientY):this.pointerGesture==="pan"&&this.applyScreenPan(e.clientX-this.pointerLastX,e.clientY-this.pointerLastY),this.pointerLastX=e.clientX,this.pointerLastY=e.clientY))}onPointerUp(e){if(e.pointerType==="touch"||!this.pointerActive)return;const t=Math.hypot(e.clientX-this.pointerStartX,e.clientY-this.pointerStartY);this.pointerButton===0&&this.pointerGesture==="arcball"&&t<F0&&this.tryTap(e.clientX,e.clientY);try{this.el.releasePointerCapture(e.pointerId)}catch{}this.pointerActive=!1,this.pointerGesture="none"}onWheel(e){if(!this.target)return;e.preventDefault();const t=e.deltaY>0?1/1.1:1.1;Qt.scaleRelative(this.target,t)}applyArcballDrag(e,t,i,r){if(!this.target)return;const s=this.el.getBoundingClientRect();if(s.width<=0||s.height<=0)return;const a=(c,u)=>({x:(c-s.left)/s.width*2-1,y:-((u-s.top)/s.height*2-1)}),o=a(e,t),l=a(i,r);Qt.rotateArcball(this.target,this.camera,o.x,o.y,l.x,l.y)}applyScreenPan(e,t){if(!this.target)return;const i=this.el.getBoundingClientRect();if(i.width<=0||i.height<=0)return;const r=this.mode==="inspect"?O0*.7:O0;Qt.moveInCameraSpace(this.target,this.camera,e/i.width*r,-(t/i.height)*r,0)}updateMultiTouch(e,t,i,r){if(!this.target)return;const s=i-e,a=r-t,o=Math.max(Math.hypot(s,a),Cd),l=Math.atan2(a,s),c=(e+i)*.5,u=(t+r)*.5;this.applyScreenPan(c-this.pinchLastMidX,u-this.pinchLastMidY);const h=o/Math.max(this.pinchLastDist,Cd);Qt.scaleRelative(this.target,h);let d=l-this.pinchLastAngle;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),Math.abs(d)>1e-4&&Qt.rotateAroundCameraAxis(this.target,this.camera,"y",d*qC),this.pinchLastDist=o,this.pinchLastAngle=l,this.pinchLastMidX=c,this.pinchLastMidY=u}tryTap(e,t){const i=this.el.getBoundingClientRect();if(i.width<=0||i.height<=0)return;const r=(e-i.left)/i.width*2-1,s=-((t-i.top)/i.height)*2+1;this.callbacks.onTap(r,s)}dispose(){this.el.removeEventListener("touchstart",this.boundTouchStart),this.el.removeEventListener("touchmove",this.boundTouchMove),this.el.removeEventListener("touchend",this.boundTouchEnd),this.el.removeEventListener("touchcancel",this.boundTouchEnd),this.el.removeEventListener("pointerdown",this.boundPointerDown),window.removeEventListener("pointermove",this.boundPointerMove),window.removeEventListener("pointerup",this.boundPointerUp),this.el.removeEventListener("wheel",this.boundWheel),this.el.removeEventListener("contextmenu",this.boundContext)}}const ZC=.2,JC=1,QC=1e-4,eP=1;class tP{constructor(e,t){this.animationId=null,this.arRoot=null,this.placementPose=null,this.timelineGroup=null,this.timelineHomeSnap=null,this.initialCameraPosition=new F,this.initialCameraTarget=new F,this.objectEntries=[],this.isLoadingTimeline=!1,this.selectedId=null,this.selectionRing=null,this.selectionHalo=null,this.cameraAngle=0,this.surfaceY=0,this.mode="group",this.TIMELINE_SPACING=.28,this.LABEL_OFFSET=.05,this.MOVE_STEP=.04,this.DEPTH_STEP=.06,this.ROTATE_STEP=Math.PI/12,this.SCALE_FACTOR=1.15,this.animate=()=>{if(this.animationId=requestAnimationFrame(this.animate),!this.isPlaced()){this.cameraAngle+=.003;const l=.6;this.camera.position.x=Math.sin(this.cameraAngle)*l,this.camera.position.z=Math.cos(this.cameraAngle)*l,this.camera.position.y=.35,this.camera.lookAt(0,.1,0)}if(this.indicator.visible){const l=performance.now()*.002;this.indicator.scale.setScalar(1+Math.sin(l)*.08)}if(this.selectionRing){const l=performance.now()*.003,c=this.selectionRing.material;c.opacity=.5+Math.sin(l)*.2}if(this.selectionHalo){const l=performance.now()*.002,c=this.selectionHalo.material;c.opacity=.12+Math.sin(l)*.04}if(this.timelineGroup)for(const l of this.objectEntries)l.label.visible&&l.label.lookAt(this.camera.position);this.renderer.render(this.scene,this.camera)},this.container=e,this.callbacks=t;const i=Math.max(e.clientWidth,1),r=Math.max(e.clientHeight,1);this.renderer=new $R({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(i,r),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Ft,this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.inset="0",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.zIndex="1",this.renderer.domElement.style.background="transparent",this.renderer.domElement.style.touchAction="none",e.appendChild(this.renderer.domElement),this.scene=new WE,this.camera=new gn(60,i/r,.01,100),this.camera.position.set(0,.3,.6),this.camera.lookAt(0,0,0);const s=new B1(16777215,.7);this.scene.add(s);const a=new uf(16777215,.6);a.position.set(1,2,1),this.scene.add(a);const o=new uf(2282478,.15);o.position.set(-1,.5,-1),this.scene.add(o),this.indicator=aC(),this.indicator.position.set(0,this.surfaceY,-.5),this.indicator.visible=!1,this.scene.add(this.indicator),this.raycaster=new J1,this.pointer=new Oe,this.interaction=new $C(e,this.camera,this.raycaster,{onTap:(l,c)=>{this.handleTap(l,c)},onModeChange:l=>{var c,u;this.mode=l,(u=(c=this.callbacks).onModeChange)==null||u.call(c,l)}}),this.boundResize=this.onResize.bind(this),window.addEventListener("resize",this.boundResize),this.animate()}onResize(){const e=Math.max(this.container.clientWidth,1),t=Math.max(this.container.clientHeight,1);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}async autoPlaceTimeline(){if(this.arRoot||this.isLoadingTimeline)return;this.isLoadingTimeline=!0,this.callbacks.onStateChange("loading"),this.placementPose={position:[0,this.surfaceY,-.4],rotation:[0,0,0]},this.arRoot=new $n,this.arRoot.position.set(0,this.surfaceY,-.4),this.scene.add(this.arRoot),this.indicator.visible=!1;const e=Wx();this.timelineGroup=new $n;const i=-((e.length-1)*this.TIMELINE_SPACING)/2,r=await Promise.all(e.map(a=>XC(a)));if(!this.arRoot){this.isLoadingTimeline=!1;return}this.objectEntries=[],r.forEach((a,o)=>{const l=e[o],c=a.group;c.position.x=i+o*this.TIMELINE_SPACING,c.userData.objectId=l.id,c.userData.isSelectable=!0,c.userData.isPlaceholder=a.isPlaceholder,c.traverse(h=>{h instanceof We&&(h.userData.objectId=l.id,h.userData.isSelectable=!0)}),this.timelineGroup.add(c);const u=lC(l.name,l.year);u.position.set(c.position.x,l.targetHeight+this.LABEL_OFFSET,0),this.timelineGroup.add(u),this.objectEntries.push({id:l.id,group:c,label:u,isPlaceholder:a.isPlaceholder,targetHeight:l.targetHeight,homeSnap:Qt.snapshot(c)})}),this.arRoot.add(this.timelineGroup),this.timelineHomeSnap=Qt.snapshot(this.timelineGroup),this.isLoadingTimeline=!1,this.mode="group",this.interaction.setMode("group"),this.interaction.setTarget(this.timelineGroup);const s=(e.length-1)*this.TIMELINE_SPACING;this.camera.position.set(0,.25,s*.6+.3),this.camera.lookAt(0,.08,0),this.initialCameraPosition.copy(this.camera.position),this.initialCameraTarget.set(0,.08,0),this.callbacks.onStateChange("placed")}setDimForEntry(e,t){e.group.traverse(i=>{if(!(i instanceof We))return;const r=Array.isArray(i.material)?i.material:[i.material];for(const s of r)(s instanceof zt||s instanceof Dn)&&(s.transparent=!0,s.opacity=t?ZC:JC)}),e.label.scale.setScalar(t?QC:eP)}dimAllExcept(e){for(const t of this.objectEntries)this.setDimForEntry(t,t.id!==e)}undimAll(){for(const e of this.objectEntries)this.setDimForEntry(e,!1)}handleTap(e,t){if(!this.timelineGroup)return;this.pointer.set(e,t),this.raycaster.setFromCamera(this.pointer,this.camera);const i=this.raycaster.intersectObject(this.timelineGroup,!0);if(i.length>0){let r=null,s=i[0].object;for(;s;){if(s.userData.objectId){r=s.userData.objectId;break}s=s.parent}if(r){this.selectObject(r);return}}if(this.mode==="inspect"){this.returnToTimeline();return}this.clearSelection()}selectObject(e){var o,l;const t=this.objectEntries.find(c=>c.id===e);if(!t)return;this.clearSelectionVisuals(),this.selectedId=e,this.dimAllExcept(e);const i=oC(t.targetHeight);i.position.set(0,.002,0),t.group.add(i),this.selectionRing=i;const r=new Pp(t.targetHeight*.8,24,16),s=new Dn({color:2282478,transparent:!0,opacity:.12,depthWrite:!1}),a=new We(r,s);a.position.set(0,0,0),t.group.add(a),this.selectionHalo=a,this.mode="inspect",this.interaction.setMode("inspect"),this.interaction.setTarget(t.group),(l=(o=this.callbacks).onModeChange)==null||l.call(o,"inspect"),this.callbacks.onObjectSelect(e)}clearSelection(){var e,t;this.clearSelectionVisuals(),this.selectedId=null,this.undimAll(),this.mode="group",this.interaction.setMode("group"),this.interaction.setTarget(this.timelineGroup),(t=(e=this.callbacks).onModeChange)==null||t.call(e,"group"),this.callbacks.onObjectSelect(null)}clearSelectionVisuals(){if(this.selectionRing){const e=this.selectionRing;e.parent&&e.parent.remove(e),e.geometry.dispose(),e.material.dispose(),this.selectionRing=null}if(this.selectionHalo){const e=this.selectionHalo;e.parent&&e.parent.remove(e),e.geometry.dispose(),e.material.dispose(),this.selectionHalo=null}}returnToTimeline(){if(!this.selectedId)return;const e=this.objectEntries.find(t=>t.id===this.selectedId);e&&Qt.resetToSnapshot(e.group,e.homeSnap),this.clearSelection()}resetSelectedObject(){if(!this.selectedId)return;const e=this.objectEntries.find(t=>t.id===this.selectedId);e&&Qt.resetToSnapshot(e.group,e.homeSnap)}resetTimeline(){if(!(!this.timelineGroup||!this.timelineHomeSnap)){Qt.resetToSnapshot(this.timelineGroup,this.timelineHomeSnap);for(const e of this.objectEntries)Qt.resetToSnapshot(e.group,e.homeSnap);this.camera.position.copy(this.initialCameraPosition),this.camera.lookAt(this.initialCameraTarget)}}resetAll(){this.clearSelection();for(const e of this.objectEntries)e.group.visible=!0,e.label.visible=!0;this.resetTimeline()}setMode(e){var i,r,s,a;if(e==="group"){this.mode==="inspect"?this.returnToTimeline():(this.mode="group",this.interaction.setMode("group"),this.interaction.setTarget(this.timelineGroup),(r=(i=this.callbacks).onModeChange)==null||r.call(i,"group"));return}if(!this.selectedId)return;const t=this.objectEntries.find(o=>o.id===this.selectedId);t&&t.group.visible&&(this.mode="inspect",this.interaction.setMode("inspect"),this.interaction.setTarget(t.group),(a=(s=this.callbacks).onModeChange)==null||a.call(s,"inspect"))}getMode(){return this.mode}moveGroup(e,t){if(!this.timelineGroup)return;const i=e==="z"?this.DEPTH_STEP:this.MOVE_STEP,r=e==="x"?i*t:0,s=e==="y"?i*t:0,a=e==="z"?i*t:0;Qt.moveInCameraSpace(this.timelineGroup,this.camera,r,s,a)}rotateGroup(e,t){this.timelineGroup&&Qt.rotateAroundCameraAxis(this.timelineGroup,this.camera,e,this.ROTATE_STEP*t)}zoomGroup(e){if(!this.timelineGroup)return;const t=e>0?this.SCALE_FACTOR:1/this.SCALE_FACTOR;Qt.scaleRelative(this.timelineGroup,t)}moveSelected(e,t){if(!this.selectedId)return;const i=this.objectEntries.find(l=>l.id===this.selectedId);if(!i)return;const r=e==="z"?this.DEPTH_STEP:this.MOVE_STEP,s=e==="x"?r*t:0,a=e==="y"?r*t:0,o=e==="z"?r*t:0;Qt.moveInCameraSpace(i.group,this.camera,s,a,o)}rotateSelected(e,t){if(!this.selectedId)return;const i=this.objectEntries.find(r=>r.id===this.selectedId);i&&Qt.rotateAroundCameraAxis(i.group,this.camera,e,this.ROTATE_STEP*t)}zoomSelected(e){if(!this.selectedId)return;const t=this.objectEntries.find(r=>r.id===this.selectedId);if(!t)return;const i=e>0?this.SCALE_FACTOR:1/this.SCALE_FACTOR;Qt.scaleRelative(t.group,i)}filterByCategory(e){if(!this.timelineGroup)return;const t=e===null?null:new Set(e);for(const i of this.objectEntries){const r=t===null||t.has(i.id);i.group.visible=r,i.label.visible=r}this.selectedId&&t&&!t.has(this.selectedId)&&this.clearSelection()}reset(){var e,t;this.clearSelectionVisuals(),this.selectedId=null,this.mode="group",this.interaction.setMode("group"),this.interaction.setTarget(null),this.timelineGroup&&(this.disposeGroup(this.timelineGroup),this.arRoot&&this.arRoot.remove(this.timelineGroup),this.timelineGroup=null),this.timelineHomeSnap=null,this.objectEntries=[],this.arRoot&&(this.scene.remove(this.arRoot),this.arRoot=null),this.placementPose=null,this.isLoadingTimeline=!1,this.undimAll(),this.callbacks.onObjectSelect(null),(t=(e=this.callbacks).onModeChange)==null||t.call(e,"group"),this.callbacks.onStateChange("searching")}async enableDemoMode(){this.arRoot||await this.autoPlaceTimeline()}isPlaced(){return this.arRoot!==null}disposeGroup(e){e.traverse(t=>{var i,r,s;t instanceof We&&((i=t.geometry)==null||i.dispose(),Array.isArray(t.material)?t.material.forEach(a=>a.dispose()):(r=t.material)==null||r.dispose()),(s=t.userData)!=null&&s.labelTexture&&t.userData.labelTexture.dispose()})}dispose(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),window.removeEventListener("resize",this.boundResize),this.interaction.dispose(),this.reset(),jC(),this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement)}}/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kx=(...n)=>n.filter((e,t,i)=>!!e&&i.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=Qe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Qe.createElement("svg",{ref:l,...iP,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:Kx("lucide",r),...o},[...a.map(([c,u])=>Qe.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(n,e)=>{const t=Qe.forwardRef(({className:i,...r},s)=>Qe.createElement(rP,{ref:s,iconNode:e,className:Kx(`lucide-${nP(n)}`,i),...r}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=st("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=st("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=st("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=st("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=st("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=st("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=st("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=st("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=st("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=st("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=st("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=st("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=st("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=st("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=st("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=st("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=st("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=st("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=st("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=st("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=st("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=st("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=st("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=st("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=st("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=st("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=st("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=st("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=st("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=st("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);function NP({object:n,onClose:e}){const t=n.educationalInfo;return C.jsx("div",{className:`
        pointer-events-none
        absolute inset-x-0 bottom-0 z-40
        px-2.5 pb-2.5
        animate-fade-up
      `,children:C.jsxs("div",{className:`
          ar-info-card
          pointer-events-auto
          mx-auto
          max-h-[55vh]
          max-w-lg
          overflow-y-auto
          overscroll-contain
        `,children:[C.jsxs("div",{className:"ar-info-header",children:[C.jsxs("div",{className:"min-w-0 flex-1",children:[C.jsxs("div",{className:"ar-info-kicker",children:[C.jsx(yP,{size:11}),C.jsx("span",{children:"DETAIL KOMPONEN"})]}),C.jsx("h3",{className:"ar-info-title",children:n.name}),C.jsx("p",{className:"ar-info-subtitle",children:n.shortDescription})]}),C.jsx("button",{type:"button",onClick:e,"aria-label":"Tutup informasi",className:"ar-info-close",children:C.jsx(PP,{size:18})})]}),C.jsxs("div",{className:"ar-info-meta",children:[C.jsxs("span",{children:[C.jsx(Uo,{size:11}),n.technology]}),C.jsxs("span",{children:[C.jsx(uP,{size:11}),n.year]}),C.jsx("span",{className:"ar-info-gen",children:n.generation})]}),C.jsx("p",{className:"ar-info-summary",children:t.summary}),t.details.length>0&&C.jsx("ul",{className:"ar-info-details",children:t.details.map((i,r)=>C.jsxs("li",{children:[C.jsx("span",{className:"ar-info-bullet","aria-hidden":"true"}),C.jsx("span",{children:i})]},r))}),t.sourceNote&&C.jsx("div",{className:"ar-info-source",children:t.sourceNote})]})})}function DP({sessionState:n,objectCount:e,activeCategory:t,onCategoryChange:i,onResetView:r}){const s=n==="loading",a=n==="searching"||n==="starting",o=n==="placed"||n==="demo",l=[{id:"all",label:"ALL",count:e,ids:null,color:"#2f6fed"},{id:"generasi1",label:"GENERASI I",count:1,ids:["vacuum_tube"],color:"#ef6b4a"},{id:"generasi4",label:"GENERASI IV",count:7,ids:["intel_4004","semiconductors","floppy_disk","intel_8086","ibm_pc_xt_5150","macintosh_classic","power_mac_g3"],color:"#18a999"},{id:"mikroprosesor",label:"MIKROPROSESOR",count:3,ids:["intel_4004","intel_8086","power_mac_g3"],color:"#2563eb"},{id:"storage",label:"STORAGE",count:1,ids:["floppy_disk"],color:"#0e7490"},{id:"studi_kasus",label:"STUDI KASUS",count:2,ids:["macintosh_classic","power_mac_g3"],color:"#d63960"}],c=u=>{i(u.id,u.ids)};return C.jsxs(C.Fragment,{children:[o&&C.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-30 px-2 ar-safe-top",children:C.jsxs("div",{className:"pointer-events-auto mx-auto flex max-w-[600px] flex-wrap items-center justify-center gap-1.5 pt-2",children:[l.map(u=>C.jsxs("button",{type:"button",onClick:()=>c(u),disabled:u.count===0,className:`ar-cat-btn ${t===u.id?"is-active":""}`,style:{background:t===u.id?u.color:"rgba(15, 23, 42, 0.78)",borderColor:t===u.id?u.color:"rgba(255,255,255,0.12)",opacity:u.count===0?.4:1},children:[u.label,u.count>0&&C.jsxs("span",{className:"ar-cat-badge",children:["(",u.count,")"]})]},u.id)),C.jsx("button",{type:"button",onClick:r,className:"ar-cat-btn ar-cat-reset","aria-label":"Reset view",children:"RESET VIEW"})]})}),o&&C.jsx("div",{className:"pointer-events-none absolute inset-x-0 z-30 px-3",style:{bottom:"calc(env(safe-area-inset-bottom, 0px) + 5.5rem)"},children:C.jsx("div",{className:"mx-auto max-w-[400px] text-center",children:C.jsxs("div",{className:"ar-gesture-bar",children:[C.jsxs("span",{className:"ar-gesture-item",children:[C.jsx(vP,{size:10})," PUTAR 1 JARI"]}),C.jsx("span",{className:"ar-gesture-sep",children:"•"}),C.jsxs("span",{className:"ar-gesture-item",children:[C.jsx(EP,{size:10})," PINDAH 2 JARI"]}),C.jsx("span",{className:"ar-gesture-sep",children:"•"}),C.jsxs("span",{className:"ar-gesture-item",children:[C.jsx(IP,{size:10})," ZOOM PINCH"]})]})})}),(a||s)&&C.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-3 z-30 px-3",children:C.jsx("div",{className:"mx-auto max-w-[390px] text-center",children:C.jsxs("div",{className:"ar-plain-status",children:[C.jsx("span",{className:"ar-status-dot"}),s?"Memuat timeline":"Mengaktifkan kamera"]})})})]})}function kP({objects:n,activeIndex:e,onSelect:t}){return C.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 z-30 px-2 pb-2 ar-safe-bottom",children:C.jsx("div",{className:"pointer-events-auto w-full",children:C.jsxs("div",{className:"ar-sequence-wrap",children:[C.jsx("div",{className:"ar-sequence-heading",children:"ALUR URUTAN KOMPONEN"}),C.jsx("div",{className:"ar-sequence",children:n.map((i,r)=>C.jsxs("span",{className:"ar-seq-link",children:[r>0&&C.jsx("span",{className:"ar-seq-arrow",children:"→"}),C.jsxs("button",{type:"button",onClick:()=>t(i.id),className:`ar-seq-item ${r===e?"is-active":""}`,children:[C.jsx("span",{className:"ar-seq-num",children:r+1}),i.name]})]},i.id))})]})})})}function B0(){const n=Qe.useRef(null),e=Qe.useRef(null),t=Qe.useRef(null),i=Qe.useRef(null),r=Qe.useRef(!1),{arSessionState:s,setARSessionState:a,interactionMode:o,setInteractionMode:l,isInfoOpen:c,setInfoOpen:u,selectedObject:h,setSelectedObject:d,closeInfo:p}=up(),[g,S]=Qe.useState(null),[m,f]=Qe.useState("all"),_=Qe.useCallback(L=>{a(L)},[a]),M=Qe.useCallback(L=>{d(L),u(L!==null)},[d,u]),y=Qe.useCallback(L=>{l(L)},[l]);Qe.useEffect(()=>{if(!n.current)return;r.current=!0;const L=n.current,G=new tP(L,{onStateChange:_,onObjectSelect:M,onModeChange:y});return e.current=G,G.autoPlaceTimeline(),(async()=>{var Y;if(r.current)try{if(!((Y=navigator.mediaDevices)!=null&&Y.getUserMedia))throw new DOMException("mediaDevices unavailable","NotFoundError");const B=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}},audio:!1});if(!r.current){B.getTracks().forEach(X=>X.stop());return}i.current=B,S(null);const U=document.createElement("video");U.srcObject=B,U.muted=!0,U.playsInline=!0,U.autoplay=!0,U.style.position="absolute",U.style.inset="0",U.style.width="100%",U.style.height="100%",U.style.objectFit="cover",U.style.zIndex="0",t.current=U,L.insertBefore(U,L.firstChild),await U.play().catch(()=>{})}catch(B){if(!r.current)return;const U=(B==null?void 0:B.name)??"";S(U==="NotAllowedError"||U==="SecurityError"?"Izinkan akses kamera untuk mode AR penuh":"Kamera tidak tersedia — menampilkan model 3D")}})(),()=>{r.current=!1,i.current&&(i.current.getTracks().forEach(Y=>Y.stop()),i.current=null),t.current&&(t.current.parentElement===L&&L.removeChild(t.current),t.current=null),G.dispose(),e.current=null}},[]);const E=Qe.useMemo(()=>Wx(),[]),w=s==="placed"||s==="demo"||s==="loading",b=h?sC(h):null,v=h?E.findIndex(L=>L.id===h):-1,A=L=>{e.current&&e.current.setMode(L)},P=()=>{e.current&&(e.current.resetAll(),f("all"))},I=(L,G)=>{f(L),G&&G.length>0?e.current&&e.current.selectObject(G[0]):e.current&&e.current.clearSelection()},O=L=>{e.current&&e.current.selectObject(L)},W=()=>{p()};return C.jsxs("div",{className:"fixed inset-0 h-full w-full overflow-hidden bg-ink-950",children:[C.jsx("div",{ref:n,className:"absolute inset-0 z-10"}),C.jsx("div",{className:"pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-ink-950/20 via-transparent to-ink-950/25"}),C.jsx(DP,{sessionState:s,interactionMode:o,hasSelection:h!==null,objectCount:E.length,activeCategory:m,onSetMode:A,onCategoryChange:I,onResetView:P}),w&&C.jsx(kP,{objects:E.map(L=>({id:L.id,name:L.name})),activeIndex:v,onSelect:O}),c&&b&&C.jsx(NP,{object:b,onClose:W}),g&&C.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-14 z-25 flex justify-center px-3",children:C.jsxs("div",{className:"pointer-events-auto flex items-center gap-2 rounded-lg bg-ink-950/80 px-3 py-2 text-xs text-amber-300 backdrop-blur-sm",children:[C.jsx(dP,{size:14,className:"shrink-0"}),C.jsx("span",{children:g})]})})]})}function uu({title:n,subtitle:e,children:t}){const{setScreen:i}=up();return C.jsxs("div",{className:"fixed inset-0 z-50 overflow-y-auto bg-ink-900 animate-fade-in",children:[C.jsx("div",{className:"sticky top-0 z-10 glass border-b border-ink-700/50",children:C.jsxs("div",{className:"mx-auto flex h-14 max-w-3xl items-center gap-3 px-4",children:[C.jsx("button",{onClick:()=>i("ar"),className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink-700 bg-ink-850 text-slate-300 transition-colors hover:text-accent-400",children:C.jsx(aP,{size:20})}),C.jsxs("div",{className:"min-w-0 flex-1",children:[C.jsx("h1",{className:"truncate font-display text-base font-bold text-white",children:n}),e&&C.jsx("p",{className:"truncate text-xs text-slate-500",children:e})]})]})}),C.jsx("div",{className:"mx-auto max-w-3xl px-4 py-6 pb-20",children:t})]})}function kn({children:n,className:e="",onClick:t,active:i=!1,hoverable:r=!1}){return C.jsx("div",{onClick:t,className:`rounded-2xl border bg-ink-850/80 p-5 transition-all duration-300 ${i?"border-accent-500/60 shadow-glow":"border-ink-700"} ${r&&!i?"hover:border-ink-600 hover:shadow-card-hover cursor-pointer":""} ${t?"cursor-pointer":""} ${e}`,children:n})}const UP=[{id:1,name:"GENERASI I",period:"1940–1959",technology:"Vacuum Tube / Tabung Hampa Udara",description:"Komputer generasi pertama menggunakan tabung hampa udara sebagai komponen elektronik utama.",fullDescription:"Komputer generasi pertama menggunakan tabung hampa udara dan magnetic drum untuk memori. Perkembangannya berkaitan dengan kebutuhan akademik dan militer, termasuk konteks Perang Dunia II. Komputer pada periode ini berukuran sangat besar, mengonsumsi banyak energi, dan menghasilkan panas yang tinggi.",keyPoints:["Komponen utama: tabung hampa udara","Memori: magnetic drum","Ukuran fisik sangat besar","Konteks: kebutuhan akademik dan militer"]},{id:2,name:"GENERASI II",period:"1950s–1960s",technology:"Transistor",description:"Transistor menggantikan tabung hampa udara sehingga komputer menjadi lebih kecil dan efisien.",fullDescription:"Transistor menggantikan tabung hampa udara sehingga komputer menjadi lebih kecil, lebih cepat, dan lebih hemat energi. Pada periode ini berkembang bahasa pemrograman tinggi, memori berbasis magnetik, dan sistem operasi yang memungkinkan eksekusi program secara batch.",keyPoints:["Transistor menggantikan tabung hampa udara","Lebih kecil, lebih cepat, lebih hemat energi","Perkembangan bahasa pemrograman","Muncul sistem operasi dan memori magnetik"]},{id:3,name:"GENERASI III",period:"1960s–1970s",technology:"Integrated Circuit / IC",description:"Integrated Circuit menjadi teknologi penting dalam perkembangan komputer generasi ketiga.",fullDescription:"Integrated Circuit (IC) menjadi teknologi penting dalam perkembangan komputer generasi ketiga. IC memungkinkan ratusan transistor terintegrasi dalam satu chip, sehingga ukuran komputer semakin berkurang dan kecepatan meningkat. Pada periode ini juga berkembang sistem operasi multiprogramming.",keyPoints:["Integrated Circuit sebagai teknologi utama","Ratusan transistor dalam satu chip","Ukuran komputer semakin berkurang","Perkembangan multiprogramming"]},{id:4,name:"GENERASI IV",period:"1970s–sekarang",technology:"MOSFET / LSI / Microprocessor",description:"Perkembangan MOSFET, LSI, dan mikroprosesor menjadi bagian penting generasi keempat.",fullDescription:"Perkembangan MOSFET dan LSI (Large Scale Integration) menjadi bagian penting generasi keempat. Mikroprosesor berkembang pada awal 1970-an, membawa seluruh unit pemrosesan ke dalam satu chip. Era ini menandai lahirnya personal computer dan revolusi komputasi skala kecil.",keyPoints:["MOSFET dan LSI sebagai teknologi utama","Mikroprosesor lahir pada awal 1970-an","Seluruh CPU dalam satu chip","Lahirnya personal computer"]},{id:5,name:"GENERASI V",period:"1980s–sekarang",technology:"Quantum Computing / Nanotechnology",description:"Materi pembelajaran mengaitkan generasi kelima dengan quantum computing dan nanotechnology.",fullDescription:"Materi pembelajaran mengaitkan generasi kelima dengan perkembangan quantum computing dan nanotechnology. Komputasi kuantum memanfaatkan prinsip superposisi dan entanglement untuk memecahkan masalah yang sulit bagi komputer klasik. Nanotechnology membuka kemungkinan miniaturisasi komponen hingga skala molekuler.",keyPoints:["Quantum computing dan nanotechnology","Prinsip superposisi dan entanglement","Miniaturisasi hingga skala molekuler","Paradigma komputasi baru"]}];function FP(){const[n,e]=Qe.useState(1);return C.jsx(uu,{title:"Sejarah & Evolusi Komputer",subtitle:"Timeline interaktif 5 generasi",children:C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/40 via-ink-700 to-ink-700"}),C.jsx("div",{className:"space-y-3",children:UP.map(t=>{const i=n===t.id;return C.jsxs("div",{className:"relative pl-12",children:[C.jsx("div",{className:`absolute left-0 top-4 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 ${i?"border-accent-500 bg-accent-500/20 shadow-glow":"border-ink-600 bg-ink-850"}`,children:C.jsx("span",{className:`text-xs font-bold ${i?"text-accent-300":"text-slate-500"}`,children:t.id})}),C.jsxs(kn,{active:i,hoverable:!0,onClick:()=>e(i?null:t.id),children:[C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"font-display text-sm font-semibold text-white",children:t.name}),C.jsx("p",{className:"text-xs font-medium text-accent-400",children:t.period})]}),C.jsx(hP,{size:18,className:`shrink-0 text-slate-500 transition-transform ${i?"rotate-180":""}`})]}),C.jsxs("p",{className:"mt-2 text-xs text-slate-500",children:["Teknologi: ",t.technology]}),i&&C.jsxs("div",{className:"mt-3 animate-fade-up",children:[C.jsx("p",{className:"text-sm leading-relaxed text-slate-300",children:t.fullDescription}),C.jsx("ul",{className:"mt-3 space-y-1.5",children:t.keyPoints.map((r,s)=>C.jsxs("li",{className:"flex items-start gap-2 text-sm text-slate-300",children:[C.jsx(pP,{size:15,className:"mt-0.5 shrink-0 text-accent-400"}),r]},s))})]})]})]},t.id)})})]})})}function Ba({eyebrow:n,title:e,subtitle:t,center:i=!1}){return C.jsxs("div",{className:`mb-6 ${i?"text-center":""}`,children:[n&&C.jsx("div",{className:"mb-2 text-xs font-medium uppercase tracking-wider text-accent-400 ",children:n}),C.jsx("h2",{className:"text-2xl font-bold text-white sm:text-3xl",children:e}),t&&C.jsx("p",{className:`mt-2 text-sm text-slate-400 sm:text-base ${i?"mx-auto max-w-2xl":"max-w-3xl"}`,children:t})]})}const OP=[{id:"clock-rate",title:"CLOCK RATE",description:"Frekuensi clock menentukan seberapa cepat instruksi dijalankan per detik. Semakin tinggi clock rate, semakin banyak siklus eksekusi yang tersedia.",icon:"Gauge"},{id:"instruction-count",title:"INSTRUCTION COUNT",description:"Jumlah instruksi yang dijalankan untuk sebuah program. Dipengaruhi oleh arsitektur instruction set dan optimasi compiler.",icon:"ListOrdered"},{id:"cpi",title:"CPI",description:"Cycles Per Instruction — rata-rata jumlah siklus clock yang dibutuhkan untuk menjalankan satu instruksi. Nilai CPI dipengaruhi oleh kompleksitas instruksi dan arsitektur prosesor.",icon:"Repeat"},{id:"memory-hierarchy",title:"MEMORY HIERARCHY",description:"Struktur bertingkat dari register, cache, RAM, dan storage. Akses ke level yang lebih dekat ke prosesor lebih cepat namun kapasitasnya lebih kecil.",icon:"Layers"},{id:"pipelining-ilp",title:"PIPELINING / ILP",description:"Pipelining memungkinkan tumpang tindih eksekusi instruksi. Instruction-Level Parallelism (ILP) memanfaatkan ketersediaan instruksi independen untuk dieksekusi secara paralel.",icon:"GitBranch"},{id:"branch-prediction",title:"BRANCH PREDICTION",description:"Memprediksi hasil percabangan agar pipeline tetap penuh. Prediksi yang salah menyebabkan pipeline flush dan penurunan kinerja.",icon:"Split"},{id:"storage",title:"STORAGE",description:"Kecepatan akses storage memengaruhi waktu muat program dan data. SSD jauh lebih cepat dibanding HDD karena tidak memiliki komponen mekanis.",icon:"HardDrive"}],BP={Gauge:kp,ListOrdered:MP,Repeat:wP,Layers:SP,GitBranch:gP,Split:AP,HardDrive:xP};function zP(){return C.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:OP.map(n=>{const e=BP[n.icon]??kp;return C.jsxs(kn,{hoverable:!0,className:"p-5",children:[C.jsx("div",{className:"mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20",children:C.jsx(e,{size:22,className:"text-accent-400"})}),C.jsx("h3",{className:"font-display text-sm font-semibold text-white",children:n.title}),C.jsx("p",{className:"mt-2 text-sm leading-relaxed text-slate-400",children:n.description})]},n.id)})})}function GP(){const[n,e]=Qe.useState(.5),[t,i]=Qe.useState(4),s=1/(1-n+n/t),a=Math.round(n*100),o=s.toFixed(2),l=1/(1-n),c=Math.min(s/Math.max(l,1)*100,100);return C.jsxs(kn,{className:"p-5 sm:p-6",children:[C.jsxs("div",{className:"mb-5 flex items-center gap-2",children:[C.jsx(cP,{size:20,className:"text-accent-400"}),C.jsx("h3",{className:"font-display text-base font-semibold text-white",children:"Kalkulator Amdahl's Law"})]}),C.jsxs("div",{className:"mb-5 rounded-xl bg-ink-900/60 px-4 py-3",children:[C.jsx("p",{className:"text-sm leading-relaxed text-slate-300",children:"Speedup keseluruhan sistem dibatasi oleh bagian program yang tidak mengalami peningkatan."}),C.jsx("p",{className:"mt-2 font-mono text-xs text-accent-400",children:"S = 1 / ((1 - p) + p / s)"})]}),C.jsxs("div",{className:"space-y-5",children:[C.jsxs("div",{children:[C.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[C.jsx("label",{className:"text-sm font-medium text-slate-300",children:"Bagian yang ditingkatkan (p)"}),C.jsxs("span",{className:"font-mono text-sm font-bold text-accent-400",children:[a,"%"]})]}),C.jsx("input",{type:"range",min:0,max:1,step:.05,value:n,onChange:u=>e(parseFloat(u.target.value)),className:"w-full accent-accent-500"})]}),C.jsxs("div",{children:[C.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[C.jsx("label",{className:"text-sm font-medium text-slate-300",children:"Speedup bagian tersebut (s)"}),C.jsxs("span",{className:"font-mono text-sm font-bold text-accent-400",children:[t,"x"]})]}),C.jsx("input",{type:"range",min:1,max:100,step:1,value:t,onChange:u=>i(parseInt(u.target.value)),className:"w-full accent-accent-500"})]})]}),C.jsxs("div",{className:"mt-6 rounded-xl border border-accent-500/20 bg-accent-500/5 px-4 py-4",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx(CP,{size:18,className:"text-accent-400"}),C.jsx("span",{className:"text-sm text-slate-300",children:"Speedup Total Sistem"})]}),C.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[C.jsx("span",{className:"font-display text-3xl font-bold text-white",children:o}),C.jsx("span",{className:"text-lg text-accent-400",children:"x"})]}),C.jsx("div",{className:"mt-3 h-2 overflow-hidden rounded-full bg-ink-900",children:C.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-accent-600 to-accent-400 transition-all duration-300",style:{width:`${c}%`}})}),C.jsxs("p",{className:"mt-2 text-xs text-slate-500",children:["Speedup maksimum teoritis: ",l.toFixed(2),"x (jika s → ∞)"]})]})]})}const z0=[{id:0,name:"8086",year:"1978",description:"Mikroprosesor 16-bit pertama dari Intel. Menjadi fondasi arsitektur x86 yang digunakan hingga saat ini."},{id:1,name:"80286",year:"1982",description:"Mikroprosesor 16-bit dengan kemampuan protected mode. Mendukung memori virtual dan multitasking."},{id:2,name:"80386",year:"1985",description:"Mikroprosesor 32-bit pertama dari Intel. Mendukung paging dan virtual memory secara penuh."},{id:3,name:"80486",year:"1989",description:"Mikroprosesor dengan cache L1 terintegrasi dan unit floating-point on-chip. Peningkatan kinerja signifikan."},{id:4,name:"Pentium",year:"1993",description:"Mikroprosesor superscalar dengan dua pipeline eksekusi. Menggunakan arsitektur CISC dengan pipelining."},{id:5,name:"Pentium Pro / II / III",year:"1995–1999",description:"Arsitektur P6 dengan out-of-order execution dan cache L2 on-package. Peningkatan IPC yang signifikan."},{id:6,name:"Pentium 4",year:"2000",description:"Arsitektur NetBurst dengan pipeline sangat dalam. Frekuensi clock tinggi namun IPC relatif rendah."}];function HP(){const[n,e]=Qe.useState(null),t=n!==null?z0[n]:null;return C.jsxs("div",{children:[C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-accent-500/30 via-ink-700 to-ink-700 hidden sm:block"}),C.jsx("div",{className:"grid gap-3 sm:grid-cols-7",children:z0.map((i,r)=>{const s=n===i.id;return C.jsxs("button",{onClick:()=>e(s?null:i.id),className:"group relative text-left",children:[C.jsx("div",{className:`mb-3 hidden h-3 w-3 rounded-full border-2 transition-all duration-300 sm:block ${s?"border-accent-500 bg-accent-500 shadow-glow":"border-ink-600 bg-ink-850 group-hover:border-ink-500"}`,style:{marginInlineStart:"0.25rem"}}),C.jsxs("div",{className:`rounded-xl border p-3 transition-all duration-300 ${s?"border-accent-500/50 bg-accent-500/10":"border-ink-700 bg-ink-850/60 hover:border-ink-600"}`,children:[C.jsx("div",{className:`text-sm font-bold ${s?"text-accent-300":"text-white"}`,children:i.name}),C.jsx("div",{className:"text-xs text-slate-500",children:i.year})]})]},i.id)})})]}),t&&C.jsx(kn,{active:!0,className:"mt-4 animate-fade-up",children:C.jsxs("div",{className:"flex items-start gap-3",children:[C.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20",children:C.jsx(Uo,{size:20,className:"text-accent-400"})}),C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("h3",{className:"font-display text-base font-semibold text-white",children:t.name}),C.jsx("span",{className:"rounded-md bg-accent-500/15 px-2 py-0.5 text-xs font-medium text-accent-400",children:t.year})]}),C.jsx("p",{className:"mt-1.5 text-sm leading-relaxed text-slate-300",children:t.description})]})]})})]})}function VP(){return C.jsxs(uu,{title:"Perancangan Kinerja Komputer",subtitle:"Faktor, hukum Amdahl, dan benchmarking",children:[C.jsx(Ba,{title:"Apa Itu Kinerja?"}),C.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[{icon:mP,label:"Execution Time",desc:"Total waktu untuk menyelesaikan sebuah tugas komputasi."},{icon:sP,label:"Throughput",desc:"Jumlah tugas yang diselesaikan per satuan waktu."},{icon:RP,label:"Latency / Response Time",desc:"Waktu tunggu dari permintaan dikirim hingga respons diterima."}].map(n=>{const e=n.icon;return C.jsxs(kn,{className:"p-4",children:[C.jsx("div",{className:"mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10 border border-accent-500/20",children:C.jsx(e,{size:18,className:"text-accent-400"})}),C.jsx("h3",{className:"text-sm font-semibold text-white",children:n.label}),C.jsx("p",{className:"mt-1.5 text-xs leading-relaxed text-slate-400",children:n.desc})]},n.label)})}),C.jsxs("div",{className:"mt-8",children:[C.jsx(Ba,{title:"Faktor yang Mempengaruhi Kinerja"}),C.jsx(zP,{})]}),C.jsxs("div",{className:"mt-8",children:[C.jsx(Ba,{title:"Amdahl's Law",subtitle:"Speedup keseluruhan sistem dibatasi oleh bagian program yang tidak mengalami peningkatan."}),C.jsx(GP,{})]}),C.jsxs("div",{className:"mt-8",children:[C.jsx(Ba,{title:"Benchmarking"}),C.jsx(kn,{className:"p-4",children:C.jsxs("div",{className:"flex items-start gap-3",children:[C.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 border border-accent-500/20",children:C.jsx(kp,{size:18,className:"text-accent-400"})}),C.jsxs("div",{children:[C.jsx("p",{className:"text-sm leading-relaxed text-slate-300",children:"Benchmark digunakan untuk mengukur kinerja komputer menggunakan program atau workload tertentu."}),C.jsxs("ul",{className:"mt-2 space-y-1.5 text-xs text-slate-400",children:[C.jsxs("li",{className:"flex items-start gap-2",children:[C.jsx("span",{className:"mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-400"}),C.jsxs("span",{children:[C.jsx("strong",{className:"text-slate-200",children:"Benchmark programs"})," — program khusus untuk mengukur aspek kinerja tertentu."]})]}),C.jsxs("li",{className:"flex items-start gap-2",children:[C.jsx("span",{className:"mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-400"}),C.jsxs("span",{children:[C.jsx("strong",{className:"text-slate-200",children:"SPEC"})," — suite benchmark standar industri oleh SPEC Corporation."]})]}),C.jsxs("li",{className:"flex items-start gap-2",children:[C.jsx("span",{className:"mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-400"}),C.jsxs("span",{children:[C.jsx("strong",{className:"text-slate-200",children:"Real workloads"})," — aplikasi nyata yang mencerminkan penggunaan sebenarnya."]})]})]})]})]})})]}),C.jsxs("div",{className:"mt-8",children:[C.jsx(Ba,{title:"Timeline Prosesor",subtitle:"Perkembangan prosesor Intel 1978–2000."}),C.jsx(HP,{})]})]})}const WP={name:"PENTIUM",company:"Intel",platform:"PC",architecture:"CISC",details:[{label:"Perusahaan",value:"Intel"},{label:"Platform",value:"PC"},{label:"Arsitektur",value:"CISC"}]},XP={name:"POWERPC",company:"IBM · Apple · Motorola",platform:"Apple Macintosh",architecture:"RISC",details:[{label:"Perusahaan",value:"IBM · Apple · Motorola"},{label:"Platform",value:"Apple Macintosh"},{label:"Arsitektur",value:"RISC"}]},jP=[{label:"Architecture",pentium:"Arsitektur x86 berbasis CISC dengan set instruksi yang kompleks dan panjang.",powerpc:"Arsitektur PowerPC berbasis RISC dengan set instruksi yang sederhana dan seragam."},{label:"Instruction Set Philosophy",pentium:"CISC — instruksi kompleks dapat melakukan banyak operasi dalam satu instruksi, namun decoding lebih rumit.",powerpc:"RISC — instruksi sederhana dan seragam, memudahkan pipelining dan eksekusi paralel."},{label:"Compatibility",pentium:"Kompatibilitas luas dengan ekosistem PC dan perangkat lunak x86 yang sudah mapan.",powerpc:"Kompatibilitas terbatas pada ekosistem Apple dan platform yang mendukung PowerPC."},{label:"Ecosystem",pentium:"Ekosistem PC sangat luas — ribuan vendor hardware dan perangkat lunak mendukung platform x86.",powerpc:"Ekosistem terutama terikat pada Apple Macintosh, dengan dukungan vendor yang lebih terbatas."},{label:"Performance Considerations",pentium:"Kinerja tinggi melalui clock rate yang meningkat dan micro-ops translation. CPI relatif lebih tinggi karena instruksi kompleks.",powerpc:"Kinerja efisien per clock berkat instruksi sederhana dan pipelining yang efektif. CPI relatif lebih rendah."},{label:"Market Outcome",pentium:"Platform x86 mendominasi pasar PC dan komputasi personal secara global.",powerpc:"Apple beralih ke Intel x86 pada tahun 2006, mengakhiri penggunaan PowerPC untuk komputasi personal."}];function YP(){return C.jsxs("div",{className:"space-y-5",children:[C.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[WP,XP].map(n=>C.jsxs(kn,{className:"p-5",children:[C.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[C.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20",children:C.jsx(Uo,{size:24,className:"text-accent-400"})}),C.jsxs("div",{children:[C.jsx("h3",{className:"font-display text-lg font-bold text-white",children:n.name}),C.jsx("p",{className:"text-xs text-slate-500",children:n.company})]})]}),C.jsx("div",{className:"space-y-2",children:n.details.map(e=>C.jsxs("div",{className:"flex items-center justify-between rounded-lg bg-ink-900/60 px-3 py-2",children:[C.jsx("span",{className:"text-xs text-slate-500",children:e.label}),C.jsx("span",{className:"text-sm font-medium text-slate-200",children:e.value})]},e.label))})]},n.name))}),C.jsxs("div",{className:"space-y-3",children:[C.jsxs("h3",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400",children:[C.jsx(LP,{size:16,className:"text-accent-400"}),"Perbandingan Detail"]}),jP.map(n=>C.jsxs(kn,{className:"p-4 sm:p-5",children:[C.jsx("h4",{className:"mb-3 font-display text-sm font-semibold text-accent-400",children:n.label}),C.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[C.jsxs("div",{className:"rounded-lg bg-ink-900/50 px-3 py-2.5",children:[C.jsx("div",{className:"mb-1 text-xs font-bold text-white",children:"PENTIUM"}),C.jsx("p",{className:"text-sm leading-relaxed text-slate-300",children:n.pentium})]}),C.jsxs("div",{className:"rounded-lg bg-ink-900/50 px-3 py-2.5",children:[C.jsx("div",{className:"mb-1 text-xs font-bold text-white",children:"POWERPC"}),C.jsx("p",{className:"text-sm leading-relaxed text-slate-300",children:n.powerpc})]})]})]},n.label))]})]})}function KP(){return C.jsxs(uu,{title:"Pentium vs PowerPC",subtitle:"Studi kasus arsitektur prosesor",children:[C.jsx(kn,{className:"mb-5 border-ink-700 bg-ink-850/60 p-4",children:C.jsxs("div",{className:"flex items-start gap-3",children:[C.jsx(fP,{size:18,className:"mt-0.5 shrink-0 text-warning-500"}),C.jsx("p",{className:"text-sm leading-relaxed text-slate-300",children:'Performa teknis, compatibility, ecosystem, dan market outcome merupakan dimensi yang berbeda. Perbandingan ini tidak menyederhanakan menjadi "Pentium buruk" atau "PowerPC selalu lebih baik".'})]})}),C.jsx(YP,{})]})}function qP(){return C.jsxs(uu,{title:"Tentang M1 GARML",subtitle:"Media pembelajaran interaktif berbasis AR",children:[C.jsxs(kn,{className:"mb-5 p-5",children:[C.jsx("div",{className:"mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20",children:C.jsx(Uo,{size:22,className:"text-accent-400"})}),C.jsx("h3",{className:"font-display text-base font-semibold text-white",children:"M1 GARML"}),C.jsx("p",{className:"mt-2 text-sm leading-relaxed text-slate-300",children:"Media pembelajaran interaktif untuk mempelajari sejarah dan evolusi komputer, perancangan kinerja komputer, serta studi kasus evolusi Pentium dan PowerPC."})]}),C.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[{icon:lP,title:"AR Camera",desc:"Eksplorasi objek 3D di dunia nyata"},{icon:oP,title:"Timeline",desc:"8 objek evolusi komputer"},{icon:Uo,title:"Kinerja",desc:"Faktor, Amdahl, benchmarking"},{icon:_P,title:"Studi Kasus",desc:"Pentium vs PowerPC"}].map(n=>{const e=n.icon;return C.jsxs(kn,{className:"p-4",children:[C.jsx("div",{className:"mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10 border border-accent-500/20",children:C.jsx(e,{size:18,className:"text-accent-400"})}),C.jsx("h4",{className:"text-sm font-semibold text-white",children:n.title}),C.jsx("p",{className:"mt-1 text-xs text-slate-400",children:n.desc})]},n.title)})}),C.jsxs("div",{className:"mt-5",children:[C.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[C.jsx(TP,{size:18,className:"text-accent-400"}),C.jsx("h3",{className:"font-display text-sm font-semibold text-white",children:"Status Model 3D"})]}),C.jsx(kn,{className:"p-4",children:C.jsx("div",{className:"space-y-2",children:Dp.map(n=>C.jsxs("div",{className:"flex items-center justify-between rounded-lg bg-ink-900/60 px-3 py-2",children:[C.jsx("div",{children:C.jsx("span",{className:"text-xs font-medium text-slate-300",children:n.name})}),C.jsx("span",{className:`rounded-md px-2 py-0.5 text-[10px] font-medium ${n.modelPath?"bg-success-500/15 text-success-400":"bg-ink-700 text-slate-500"}`,children:n.modelPath?"TERSEDIA":"MENUNGGU"})]},n.id))})})]}),C.jsx("div",{className:"mt-5",children:C.jsxs(kn,{className:"p-4",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx(bP,{size:18,className:"text-accent-400"}),C.jsx("h4",{className:"text-sm font-semibold text-white",children:"Platform"})]}),C.jsx("p",{className:"mt-2 text-xs text-slate-400",children:"Aplikasi AR edukasi untuk perangkat Android. Kamera sebagai layar utama, timeline objek 3D sejarah komputer ditampilkan secara otomatis."})]})})]})}function $P(){const{currentScreen:n}=up();switch(n){case"ar":return C.jsx(B0,{},"ar-scene");case"timeline":return C.jsx(FP,{});case"performance":return C.jsx(VP,{});case"comparison":return C.jsx(KP,{});case"about":return C.jsx(qP,{});default:return C.jsx(B0,{})}}function ZP(){return C.jsx(RM,{children:C.jsx($P,{})})}Qv(document.getElementById("root")).render(C.jsx(Qe.StrictMode,{children:C.jsx(ZP,{})}));
