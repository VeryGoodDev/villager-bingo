parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aSor":[function(require,module,exports) {
var n,l,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function v(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return h(n,f,i,t,null)}function h(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function y(){return{current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?_(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!g.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(g)}function g(){for(var n;g.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=o.__v+1,t=$(f,o,i,l.__n,void 0!==f.ownerSVGElement,null!=o.__h?[r]:null,u,null==r?_(o):r,o.__h),j(u,o),t!=r&&w(o)))})}function m(n,l,u,i,t,o,r,c,s,v){var y,d,w,k,g,m,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=r?r[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(k=u.__k[y]=null==(k=l[y])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?h(null,k,null,null,k):Array.isArray(k)?h(p,{children:k},null,null,null):null!=k.__e||null!=k.__c?h(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(w=A[y])||w&&k.key==w.key&&k.type===w.type)A[y]=void 0;else for(d=0;d<P;d++){if((w=A[d])&&k.key==w.key&&k.type===w.type){A[d]=void 0;break}w=null}g=$(n,k,w=w||f,t,o,r,c,s,v),(d=k.ref)&&w.ref!=d&&(b||(b=[]),w.ref&&b.push(w.ref,null,k),b.push(d,k.__c||g,k)),null!=g?(null==m&&(m=g),s=x(n,k,w,A,r,g,s),v||"option"!=u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&w.__e==s&&s.parentNode!=n&&(s=_(w))}if(u.__e=m,null!=r&&"function"!=typeof u.type)for(y=r.length;y--;)null!=r[y]&&a(r[y]);for(y=P;y--;)null!=A[y]&&L(A[y],A[y]);if(b)for(y=0;y<b.length;y++)I(b[y],b[++y],b[++y])}function b(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){b(n,l)}):l.push(n)),l}function x(n,l,u,i,t,o,r){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),f=null;else{for(e=r,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==o)break n;n.insertBefore(o,r),f=r}return void 0!==f?f:o.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px"}function C(n,l,u,i,t){var o,r,f;if(t&&"className"==l&&(l="class"),"style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else"o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),(r=l.toLowerCase())in n&&(l=r),l=l.slice(2),n.l||(n.l={}),n.l[l+o]=u,f=o?N:z,u?i||n.addEventListener(l,f,o):n.removeEventListener(l,f,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&"download"!==l&&"href"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u))}function z(l){this.l[l.type+!1](n.event?n.event(l):l)}function N(l){this.l[l.type+!0](n.event?n.event(l):l)}function T(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&T(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)))}function $(l,u,i,t,o,r,f,e,c){var a,v,h,y,_,w,k,g,b,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new d(g,x),v.constructor=P,v.render=M),b&&b.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(g,v.__s))),y=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),T(u,e,l);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,_,w)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=H(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),n.__e(l,u,i)}return u.__e}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function H(n,l,u,i,t,o,r,c){var s,a,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,c=!1}if(null===l.type)p===d||c&&n.data===d||(n.data=d);else{if(null!=o&&(o=e.slice.call(n.childNodes)),v=(p=u.props||f).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}A(n,d,p,t,c),h?l.__k=[]:(s=l.props.children,m(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,o,r,f,c)),c||("value"in d&&void 0!==(s=d.value)&&(s!==n.value||"progress"===l.type&&!s)&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1))}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&a(o)}function M(n,l,u){return this.constructor(n,u)}function O(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=v(p,null,[l]),c=[],$(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),j(c,l)}function S(n,l){O(n,l,o)}function q(n,l,u){var i,t,o,r=arguments,f=s({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),h(n.type,f,i||n.key,t||n.ref,null)}function B(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n,u,i){return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t,o=l.__h;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return l.__h=o,u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,o=f,r=0;export{O as render,S as hydrate,v as createElement,v as h,p as Fragment,y as createRef,l as isValidElement,d as Component,q as cloneElement,B as createContext,b as toChildArray,L as __u,n as options};


},{}],"MwGB":[function(require,module,exports) {
import{options as n}from"preact";var t,u,r,o=0,i=[],c=n.__b,f=n.__r,e=n.diffed,a=n.__c,v=n.unmount;function m(t,r){n.__h&&n.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!n.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!n.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,d(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){n.useDebugValue&&n.useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],n.__e(u,t.__v)}}),i=[]}n.__b=function(n){u=null,c&&c(n)},n.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},n.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===n.requestAnimationFrame||((r=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=void 0},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],n.__e(r,t.__v)}}),a&&a(t,u)},n.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){n.__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}export{l as useState,p as useReducer,y as useEffect,h as useLayoutEffect,s as useRef,_ as useImperativeHandle,d as useMemo,A as useCallback,F as useContext,T as useDebugValue,q as useErrorBoundary};


},{"preact":"aSor"}],"D07H":[function(require,module,exports) {
export const random = (l, h) => l + Math.floor(Math.random() * (h - l))

},{}],"ri1X":[function(require,module,exports) {
// Adapted from https://css-tricks.com/converting-color-spaces-in-javascript/#hex-to-hsl and https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript
function getColorChannels(hex) {
  return hex
    .match(/^#?([\da-f]{1,2})([\da-f]{1,2})([\da-f]{1,2})$/i)
    .slice(1)
    .map(n => (n.length === 2 ? n : n.repeat(2)))
    .map(n => parseInt(n, 16) / 255)
}
export function hexToHsl(hex) {
  const [red, green, blue] = getColorChannels(hex)
  const cmin = Math.min(red, green, blue)
  const cmax = Math.max(red, green, blue)
  const delta = cmax - cmin
  let hue = 0
  let saturation = 0
  let light = 0
  if (delta === 0) {
    hue = 0
  } else if (cmax === red) {
    hue = ((green - blue) / delta) % 6
  } else if (cmax === green) {
    hue = (blue - red) / delta + 2
  } else {
    hue = (red - green) / delta + 4
  }
  hue = Math.round(hue * 60)
  if (hue < 0) hue += 360
  light = (cmax + cmin) / 2
  saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * light - 1))
  saturation = Number((saturation * 100).toFixed(1))
  light = Number((light * 100).toFixed(1))
  return [hue, saturation, light]
}
export function hslToHex(h, s, l) {
  const hue = h
  const saturation = s / 100
  const light = l / 100
  const c = (1 - Math.abs(2 * light - 1)) * saturation
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1))
  const m = light - c / 2
  let red = 0
  let green = 0
  let blue = 0
  if (hue >= 0 && hue < 60) {
    red = c
    green = x
    blue = 0
  } else if (hue >= 60 && hue < 120) {
    red = x
    green = c
    blue = 0
  } else if (hue >= 120 && hue < 180) {
    red = 0
    green = c
    blue = x
  } else if (hue >= 180 && hue < 240) {
    red = 0
    green = x
    blue = c
  } else if (hue >= 240 && hue < 300) {
    red = x
    green = 0
    blue = c
  } else if (hue >= 300 && hue < 360) {
    red = c
    green = 0
    blue = x
  }
  red = Math.round((red + m) * 255).toString(16)
  green = Math.round((green + m) * 255).toString(16)
  blue = Math.round((blue + m) * 255).toString(16)
  return `#${red.padStart(2, 0)}${green.padStart(2, 0)}${blue.padStart(2, 0)}`
}
export function findComplement(hex) {
  return getColorChannels(hex)
    .map(channel => Math.floor((1 - channel) * 255))
    .map(diff => diff.toString(16).padStart(2, 0))
}

},{}],"wjZW":[function(require,module,exports) {
class IndexedDB {
  constructor(db) {
    this.db = db
  }

  addMany(store, data) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(store, `readwrite`)
      transaction.oncomplete = evt => {
        resolve(evt)
      }
      transaction.onerror = reject
      const objStore = transaction.objectStore(store)
      data.forEach(item => {
        objStore.add(item)
      })
    })
  }

  getAll(store) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(store)
      transaction.onerror = reject
      const request = transaction.objectStore(store).getAll()
      request.onsuccess = evt => {
        resolve(evt.target.result)
      }
      request.onerror = reject
    })
  }
}

export default function getDb(name, { version, handleUpgrade = db => db } = {}) {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      return reject(new Error(`indexedDb could not be accessed`))
    }
    const request = indexedDB.open(name, version)
    request.onerror = err => reject(err)
    request.onsuccess = evt => resolve(new IndexedDB(evt.target.result))
    request.onupgradeneeded = evt => {
      handleUpgrade(evt.target.result)
      // resolve(new IndexedDB(db))
    }
    // This handler will only be needed if I make changes to the data caching in the future
    // request.onblocked = evt => {
    //   console.log(evt)
    // }
  })
}

},{}],"KS8d":[function(require,module,exports) {
import { useEffect, useState } from 'preact/hooks'
import { findComplement, hexToHsl, hslToHex } from '../util/color-utils'
import getDb from '../util/idb'

function getVillagersFromApi() {
  return fetch(`https://acnhapi.com/v1a/villagers`)
    .then(res => res.json())
    .then(raw => raw.map(transformVillager))
}
function handleUpgrade(db) {
  db.createObjectStore(`villagers`, { keyPath: `id` })
  return db
}

export default function useVillagers(shouldUseCache) {
  const [villagers, setVillagers] = useState([])
  useEffect(() => {
    if (!villagers?.length) {
      if (shouldUseCache) {
        getDb(`bingo`, { handleUpgrade })
          .then(async db => {
            try {
              const cached = await db.getAll(`villagers`)
              if (!cached?.length) throw new Error(`No data cached`)
              setVillagers(cached)
            } catch (err) {
              if (err.message !== `No data cached`) {
                console.warn(err)
              }
              // If something went wrong reading from the db, just fetch from the API
              getVillagersFromApi().then(transformed => {
                setVillagers(transformed)
                db.addMany(`villagers`, transformed).catch(console.warn)
              })
            }
          })
          .catch(err => {
            // Something went wrong, just fetch from the API
            console.error(err)
            getVillagersFromApi().then(setVillagers)
          })
      } else {
        getVillagersFromApi().then(setVillagers)
      }
    }
  }, [shouldUseCache, villagers.length])
  return villagers
}

function transformVillager(villager) {
  const [hue, saturation, light] = hexToHsl(villager[`text-color`])
  const backgroundColor = hslToHex(hue, saturation, Math.max(25, light - 1))
  const complementaryColor = `#${findComplement(villager[`bubble-color`]).join(``)}`
  return {
    // Slightly darkened textColor
    backgroundColor,
    bubbleColor: villager[`bubble-color`],
    complementaryColor,
    icon: villager.icon_uri,
    id: villager.id,
    name: villager.name[`name-USen`],
    textColor: villager[`text-color`],
  }
}

},{"preact/hooks":"MwGB","../util/color-utils":"ri1X","../util/idb":"wjZW"}],"FyBm":[function(require,module,exports) {
import { createContext, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import useVillagers from './useVillagers'

export const AppContext = createContext({})
const initialShouldCache = JSON.parse(localStorage.getItem(`shouldUseCache`))
export function AppProvider({ children }) {
  const [selectedTarget, setSelectedTarget] = useState(null)
  const [exclusions, setExclusions] = useState([])
  const [exclusionMax, setExclusionMax] = useState(0)
  const [shouldUseCache, setShouldUseCache] = useState(
    typeof initialShouldCache === `boolean` ? initialShouldCache : true
  )
  useEffect(() => {
    if (shouldUseCache === false) {
      indexedDB.deleteDatabase(`bingo`)
    }
    localStorage.setItem(`shouldUseCache`, shouldUseCache)
  }, [shouldUseCache])
  const allVillagers = useVillagers(shouldUseCache)
  const villagerCount = allVillagers?.length ?? 0
  useEffect(() => {
    setExclusionMax(villagerCount - 25)
  }, [villagerCount])
  return (
    <AppContext.Provider
      value={{
        selectedTarget,
        setSelectedTarget,
        exclusions,
        setExclusions,
        exclusionMax,
        setExclusionMax,
        shouldUseCache,
        setShouldUseCache,
        allVillagers,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

},{"preact":"aSor","preact/hooks":"MwGB","./useVillagers":"KS8d"}],"ROoo":[function(require,module,exports) {
import { Fragment, h } from 'preact'

export default function BingoCard({ villagers }) {
  if (!villagers?.length) {
    return null
  }
  return (
    <Fragment>
      {window.print ? (
        <div className="print-buttons">
          <button
            type="button"
            onClick={() => {
              window.print()
            }}
          >
            Print Card
          </button>
        </div>
      ) : null}
      <div className="bingo-card">
        {villagers.map(({ backgroundColor, bubbleColor, icon, id, name, textColor }) => (
          <button
            key={id}
            type="button"
            className="cell"
            onClick={evt => {
              evt.currentTarget.classList.toggle(`marked`)
            }}
          >
            <div className="cell-inner" style={{ backgroundColor }}>
              <img src={icon} aria-hidden="true" alt="" />
              <span className="name" style={{ backgroundColor: bubbleColor, color: textColor }}>
                {name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </Fragment>
  )
}

},{"preact":"aSor"}],"f3F9":[function(require,module,exports) {

},{}],"WgTJ":[function(require,module,exports) {
import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import './css/details.styl'

export default function Details({ defaultOpen, onToggle, summaryContent, children, ...props }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  return (
    <details
      className="details-component"
      open={isOpen}
      onToggle={() => {
        if (!hasMounted) return
        setIsOpen(prev => {
          const newValue = !prev
          if (onToggle) onToggle(newValue)
          return newValue
        })
      }}
      {...props}
    >
      <summary>{summaryContent}</summary>
      {children}
    </details>
  )
}

},{"preact":"aSor","preact/hooks":"MwGB","./css/details.styl":"f3F9"}],"kv12":[function(require,module,exports) {
import { h } from 'preact'

// Shamelessly stolen from https://joshwcomeau.com/react/modern-spacer-gif/#the-code
export default function Spacer({ size, axis }) {
  const height = axis === `horizontal` ? 1 : Number(size)
  const width = axis === `vertical` ? 1 : Number(size)
  return (
    <span
      style={{
        display: `block`,
        height,
        minHeight: height,
        minWidth: width,
        width,
      }}
    />
  )
}

},{"preact":"aSor"}],"H5vG":[function(require,module,exports) {
import { h } from 'preact'
import { useState } from 'preact/hooks'
import '../assets/css/instructions.styl'
import Details from './ui/Details'
import Spacer from './ui/Spacer'

export default function Instructions() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Details
      defaultOpen={false}
      summaryContent="Instructions"
      onToggle={newValue => {
        setIsOpen(newValue)
      }}
      style={{
        maxWidth: 450,
        width: isOpen ? `100%` : `calc(100vw - 2em)`,
      }}
    >
      <div className="instructions-wrapper">
        <p>
          Built for use when you or a friend, streamer, etc. are villager hunting. You can click the Generate New Card
          button below immediately if you want, or click the gear icon next to it to set some options.
        </p>
        <Spacer axis="vertical" size={12} />
        <b>Available Options</b>
        <Spacer axis="vertical" size={12} />
        <ul className="options-list">
          <li>
            <b>Target Villager</b>
            <p>
              This can be used to mark the villager the one hunting is hoping to find. If selected, this villager will
              be used as the free space in the center.
            </p>
          </li>
          <li>
            <b>Exclude Villager(s)</b>
            <p>
              Any villagers selected from this list will be excluded from the bingo card generation. This is useful to
              make sure you don't have a card with villagers who are already on the island of the person doing the
              hunting.
            </p>
          </li>
          <li>
            <b>Cache Data</b>
            <p>
              This option allows you to decide whether or not the villager data should be cached on your device. This is
              on by default because{` `}
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href="https://acnhapi.com/" target="_blank" rel="noopener">
                the API providing this data
              </a>
              {` `}
              is free and it seems kind to do our part to help keep the costs of running it low. If you have limited
              storage on your device, you are of course welcome to disable this option. Please note that this can only
              control the caching I am doing manually; when disabled, the API will be called each time you visit the
              page, but depending on your browser settings, your browser may or may not still be caching the response to
              that call.
            </p>
          </li>
          <li>
            <b>Clear Cache</b>
            <p>
              Clears out the cached villager data from your device. Please note that this only clears the cache I
              maintain with the code for the website, and will have no effect on any caching your browser has done.
            </p>
          </li>
        </ul>
      </div>
    </Details>
  )
}

},{"preact":"aSor","preact/hooks":"MwGB","../assets/css/instructions.styl":"f3F9","./ui/Details":"WgTJ","./ui/Spacer":"kv12"}],"XLMn":[function(require,module,exports) {

},{"./..\\icons\\check.svg":[["check.ab46e0bd.svg","tPID"],"tPID"]}],"wTEy":[function(require,module,exports) {
import { h } from 'preact'
import './css/checkbox.styl'

export default function Checkbox({ id, labelText, checked, onChange }) {
  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{labelText}</label>
    </div>
  )
}

},{"preact":"aSor","./css/checkbox.styl":"XLMn"}],"AQ6k":[function(require,module,exports) {
import{useState as n,useReducer as t,useEffect as e,useLayoutEffect as r,useRef as u,useImperativeHandle as o,useMemo as i,useCallback as c,useContext as l,useDebugValue as f}from"preact/hooks";export*from"preact/hooks";import{Component as a,createElement as s,options as h,toChildArray as v,Fragment as p,hydrate as d,render as m,__u as y,cloneElement as b,createRef as _,createContext as E}from"preact";export{createElement,createContext,createRef,Fragment,Component}from"preact";function S(n,t){for(var e in t)n[e]=t[e];return n}function g(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function w(n){this.props=n}function C(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:g(this.props,n)}function r(t){return this.shouldComponentUpdate=e,s(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(w.prototype=new a).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return g(this.props,n)||g(this.state,t)};var R=h.__b;h.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n)};var x="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function k(n){function t(t,e){var r=S({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=x,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var A=function(n,t){return null==n?null:v(v(n).map(t))},N={map:A,forEach:A,count:function(n){return n?v(n).length:0},only:function(n){var t=v(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:v},O=h.__e;function L(n){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),(n=S({},n)).__c=null,n.__k=n.__k&&n.__k.map(L)),n}function U(n){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(U)),n}function F(){this.__u=0,this.t=null,this.__b=null}function M(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function D(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return s(e,u)}return u.displayName="Lazy",u.__f=!0,u}function I(){this.u=null,this.o=null}h.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);O(n,t,e)},(F.prototype=new a).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=M(r.__v),o=!1,i=function(){o||(o=!0,e.componentWillUnmount=e.__c,u?u(c):c())};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){i(),e.__c&&e.__c()};var c=function(){var n;if(!--r.__u)for(r.__v.__k[0]=U(r.state.__e),r.setState({__e:r.__b=null});n=r.t.pop();)n.forceUpdate()};!0===t.__h||r.__u++||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},F.prototype.componentWillUnmount=function(){this.t=[]},F.prototype.render=function(n,t){this.__b&&(this.__v.__k&&(this.__v.__k[0]=L(this.__b)),this.__b=null);var e=t.__e&&s(p,null,n.fallback);return e&&(e.__h=null),[s(p,null,t.__e?null:n.children),e]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function W(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var t=this,e=n.i,r=s(W,{context:t.context},n.__v);t.componentWillUnmount=function(){var n=t.l.parentNode;n&&n.removeChild(t.l),y(t.s)},t.i&&t.i!==e&&(t.componentWillUnmount(),t.h=!1),n.__v?t.h?(e.__k=t.__k,m(r,e),t.__k=e.__k):(t.l=document.createTextNode(""),t.__k=e.__k,d("",e),e.appendChild(t.l),t.h=!0,t.i=e,m(r,e,t.l),e.__k=t.__k,t.__k=t.l.__k):t.h&&t.componentWillUnmount(),t.s=r}function P(n,t){return s(j,{__v:n,i:t})}(I.prototype=new a).__e=function(n){var t=this,e=M(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u()};e?e(o):o()}},I.prototype.render=function(n){this.u=null,this.o=new Map;var t=v(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},I.prototype.componentDidUpdate=I.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t)})};var z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,V=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,B="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;function H(n,t,e){return null==t.__k&&(t.textContent=""),m(n,t),"function"==typeof e&&e(),n?n.__c:null}function Z(n,t,e){return d(n,t),"function"==typeof e&&e(),n?n.__c:null}a.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(a.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var Y=h.event;function $(){}function q(){return this.cancelBubble}function G(){return this.defaultPrevented}h.event=function(n){return Y&&(n=Y(n)),n.persist=$,n.isPropagationStopped=q,n.isDefaultPrevented=G,n.nativeEvent=n};var J,K={configurable:!0,get:function(){return this.class}},Q=h.vnode;h.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!B.test(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():V.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=v(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),n.props=r}t&&e.class!=e.className&&(K.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",K)),n.$$typeof=z,Q&&Q(n)};var X=h.__r;h.__r=function(n){X&&X(n),J=n.__c};var nn={ReactCurrentDispatcher:{current:{readContext:function(n){return J.__n[n.__c].props.value}}}},tn="16.8.0";function en(n){return s.bind(null,n)}function rn(n){return!!n&&n.$$typeof===z}function un(n){return rn(n)?b.apply(null,arguments):n}function on(n){return!!n.__k&&(m(null,n),!0)}function cn(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},fn=p;export default{useState:n,useReducer:t,useEffect:e,useLayoutEffect:r,useRef:u,useImperativeHandle:o,useMemo:i,useCallback:c,useContext:l,useDebugValue:f,version:"16.8.0",Children:N,render:H,hydrate:Z,unmountComponentAtNode:on,createPortal:P,createElement:s,createContext:E,createFactory:en,cloneElement:un,createRef:_,Fragment:p,isValidElement:rn,findDOMNode:cn,Component:a,PureComponent:w,memo:C,forwardRef:k,unstable_batchedUpdates:ln,StrictMode:p,Suspense:F,SuspenseList:I,lazy:D,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:nn};export{tn as version,N as Children,H as render,Z as hydrate,on as unmountComponentAtNode,P as createPortal,en as createFactory,un as cloneElement,rn as isValidElement,cn as findDOMNode,w as PureComponent,C as memo,k as forwardRef,ln as unstable_batchedUpdates,fn as StrictMode,F as Suspense,I as SuspenseList,D as lazy,nn as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED};


},{"preact/hooks":"MwGB","preact":"aSor"}],"PuJU":[function(require,module,exports) {
import { createPortal } from 'preact/compat'

export default function Portal({ children }) {
  let element = document.querySelector(`[data-portal]`)
  if (!element) {
    element = document.createElement(`div`)
    element.setAttribute(`data-portal`, ``)
    document.body.appendChild(element)
  }
  return createPortal(children, element)
}

},{"preact/compat":"AQ6k"}],"V0fQ":[function(require,module,exports) {
import { createContext, h } from 'preact'
import { useCallback, useContext, useEffect, useState } from 'preact/hooks'

function getLastHandler(handlers) {
  return handlers?.[handlers.length - 1]
}

export const EscapeHandlerContext = createContext()

export default function useEscapeHandler({ enabled, handler }) {
  const { handlers, setHandlers } = useContext(EscapeHandlerContext)
  const lastHandler = getLastHandler(handlers)
  const handleEscape = useCallback(
    evt => {
      if (evt.key === `Escape`) {
        window.removeEventListener(`keydown`, handleEscape)
        if (lastHandler) lastHandler()
      }
    },
    [lastHandler]
  )
  useEffect(() => {
    if (enabled) {
      setHandlers(prev => [...prev, handler])
    } else {
      setHandlers(prev => prev.filter(fn => fn !== handler))
    }
    window.addEventListener(`keydown`, handleEscape)
    return () => {
      window.removeEventListener(`keydown`, handleEscape)
    }
  }, [enabled, handler, handleEscape, setHandlers])
}

export function EscapeHandlerProvider({ children }) {
  const [handlers, setHandlers] = useState([])
  return <EscapeHandlerContext.Provider value={{ handlers, setHandlers }}>{children}</EscapeHandlerContext.Provider>
}

},{"preact":"aSor","preact/hooks":"MwGB"}],"Umpg":[function(require,module,exports) {
import { useEffect } from 'preact/hooks'

// Adapted from https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
export default function useFocusLock({ enabled, containerRef, shouldAutofocus }) {
  const container = containerRef.current
  useEffect(() => {
    if (!enabled || !container) return
    const focusableSelectors = `button, [href], input, select, textarea, [tabindex]:not([tabindex="-1])`
    const focusables = container.querySelectorAll(focusableSelectors)
    const firstFocusableEl = focusables[0]
    const lastFocusableEl = focusables[focusables.length - 1]
    const handleKeydown = evt => {
      if (evt.key !== `Tab`) return
      if (evt.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus()
          evt.preventDefault()
        }
      } else if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus()
        evt.preventDefault()
      }
    }
    window.addEventListener(`keydown`, handleKeydown)
    // This also makes sure that if the current focused element
    // isn't in the locked container, it shifts focus there
    if (shouldAutofocus && !container.contains(document.activeElement)) {
      firstFocusableEl.focus()
    }
    return () => {
      window.removeEventListener(`keydown`, handleKeydown)
    }
  }, [enabled, container, shouldAutofocus])
}

},{"preact/hooks":"MwGB"}],"RbKk":[function(require,module,exports) {
import { Fragment, h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import Portal from '../Portal'
import useEscapeHandler from '../useEscapeHandler'
import './css/overlay.styl'
import useFocusLock from './useFocusLock'

// TODO: Animate open/close?

export default function Overlay({ children, isOpen, handleClose }) {
  const overlayRef = useRef(null)
  useEffect(() => {
    if (isOpen) {
      document.body.style.height = `100vh`
      document.body.style.overflowY = `hidden`
    } else {
      document.body.style.height = ``
      document.body.style.overflowY = ``
    }
  }, [isOpen])
  // Close on escape
  useEscapeHandler({
    enabled: isOpen,
    handler: handleClose,
  })
  // Trap focus in the overlay when it's open
  useFocusLock({
    enabled: isOpen,
    containerRef: overlayRef,
    shouldAutofocus: true,
  })
  return (
    <Portal>
      {/* I hate it, but this was the only way I could get the ref (which is needed for autofocus and focus lock) to consistently not be null when the overlay is open */}
      <div ref={overlayRef}>
        {isOpen ? (
          <Fragment>
            <div className="scrim" />
            <div className="overlay">
              <div className="overlay-contents">{children}</div>
              <button type="button" className="close-btn" onClick={handleClose} aria-label="Close dialog">
                <span aria-hidden>✖</span>
              </button>
            </div>
          </Fragment>
        ) : null}
      </div>
    </Portal>
  )
}

},{"preact":"aSor","preact/hooks":"MwGB","../Portal":"PuJU","../useEscapeHandler":"V0fQ","./css/overlay.styl":"f3F9","./useFocusLock":"Umpg"}],"oQAu":[function(require,module,exports) {
import { Fragment, h } from 'preact'
import { useCallback, useContext, useEffect, useRef, useState } from 'preact/hooks'
import '../assets/css/villager-combobox.styl'
import { AppContext } from './AppContext'
import useEscapeHandler from './useEscapeHandler'

function Chip({ text, onDelete = () => {}, onClick }) {
  if (typeof onClick === `function`) {
    return (
      <button type="button" className="chip" onClick={onClick}>
        <small>{text}</small>
      </button>
    )
  }
  return (
    <div className="chip">
      <small>{text}</small>
      <button type="button" onClick={() => onDelete(text)}>
        ✖
      </button>
    </div>
  )
}

function Input({
  placeholder,
  id,
  labelText,
  clearable = false,
  onClear,
  style,
  inputRef,
  readOnly = false,
  readOnlyText,
  readOnlyDelete,
  disabled,
  ...rest
}) {
  const readOnlyStyles = { display: `block` }
  return (
    <Fragment>
      <label htmlFor={id} className={disabled ? `disabled` : ``}>
        <small>{labelText}</small>
      </label>
      <div
        className={[`input-wrapper`, disabled ? `disabled` : ``].join(` `)}
        style={readOnly ? { ...style, ...readOnlyStyles } : style}
      >
        {readOnly ? (
          <Chip text={readOnlyText} onDelete={readOnlyDelete} />
        ) : (
          <input ref={inputRef} type="text" id={id} placeholder={placeholder} disabled={disabled} {...rest} />
        )}
        {clearable ? (
          <button
            type="button"
            className="clear-input"
            aria-label="Clear input"
            onClick={() => {
              onClear?.()
              inputRef.current?.focus()
            }}
          >
            ✖
          </button>
        ) : null}
      </div>
    </Fragment>
  )
}

export default function VillagerCombobox({
  placeholder,
  id,
  labelText,
  onSelect = () => {},
  multiSelect = false,
  onDeselect = () => {},
  onClearAll = () => {},
  disabled = false,
  filter = () => true,
}) {
  const [inputText, setInputText] = useState(``)
  const [showOptions, setShowOptions] = useState(false)
  const [selectedVillagers, setSelectedVillagers] = useState([])
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [readOnly, setReadOnly] = useState(false)
  const [readOnlyText, setReadOnlyText] = useState(``)
  const { allVillagers } = useContext(AppContext)
  const highlightedRef = useRef()
  const inputRef = useRef()
  const optionsWrapperRef = useRef()
  const comboboxRef = useRef()
  const fuzzyMatcher = new RegExp([...inputText].join(`.*`), `i`)
  const filteredVillagers = allVillagers?.filter(villager => filter(villager) && fuzzyMatcher.test(villager.name)) ?? []
  const handleSelect = villager => {
    if (disabled) return
    onSelect(villager)
    if (multiSelect) {
      if (selectedVillagers.includes(villager.id)) {
        const index = selectedVillagers.indexOf(villager.id)
        const newList = [...selectedVillagers]
        newList.splice(index, 1)
        setSelectedVillagers(newList)
      } else {
        setSelectedVillagers([...selectedVillagers, villager.id])
      }
      // eslint-disable-next-line babel/no-unused-expressions
      inputRef.current?.focus()
    } else {
      setReadOnly(true)
      setReadOnlyText(villager.name)
      setShowOptions(false)
      setHighlightedIndex(-1)
    }
  }
  const handleHackyBlur = useCallback(evt => {
    if (!comboboxRef.current?.contains(evt.target)) {
      setShowOptions(false)
      document.removeEventListener(`click`, handleHackyBlur)
    }
  }, [])
  const handleEscape = useCallback(() => {
    setShowOptions(false)
  }, [])
  useEscapeHandler({
    enabled: showOptions,
    handler: handleEscape,
  })
  useEffect(() => {
    if (showOptions) {
      document.addEventListener(`click`, handleHackyBlur)
    }
  }, [showOptions, handleHackyBlur])
  // FIXME: Find a way to do this where I can have a clear conscience
  useEffect(() => {
    if (!showOptions || !highlightedRef.current) return
    const { scrollTop: parentScrollTop, offsetHeight: parentOffsetHeight } = optionsWrapperRef.current
    const { offsetTop: optionOffsetTop, offsetHeight: optionOffsetHeight } = highlightedRef.current
    if (optionOffsetTop + optionOffsetHeight > parentScrollTop + parentOffsetHeight) {
      highlightedRef.current.scrollIntoView(false)
    } else if (optionOffsetTop < parentScrollTop) {
      highlightedRef.current.scrollIntoView()
    }
  }, [highlightedRef.current, showOptions])
  return (
    <div ref={comboboxRef} className="combobox-wrapper">
      <Input
        inputRef={inputRef}
        id={id}
        placeholder={placeholder}
        labelText={labelText}
        value={inputText}
        disabled={disabled}
        onInput={evt => {
          setInputText(evt.target.value)
          if (!showOptions) setShowOptions(true)
        }}
        style={
          showOptions
            ? {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }
            : undefined
        }
        clearable={inputText.length || showOptions}
        onClear={() => {
          if (showOptions) {
            setShowOptions(false)
          } else {
            setInputText(``)
          }
        }}
        onFocus={evt => {
          if (evt.relatedTarget) return
          setShowOptions(true)
        }}
        onClick={() => {
          if (!showOptions) setShowOptions(true)
        }}
        onKeyDown={evt => {
          switch (evt.code) {
            case `ArrowDown`:
              setHighlightedIndex(prev => (prev === filteredVillagers.length - 1 ? 0 : prev + 1))
              break
            case `ArrowUp`:
              setHighlightedIndex(prev => (prev === 0 ? filteredVillagers.length - 1 : prev - 1))
              break
            case `Enter`:
              handleSelect(filteredVillagers[highlightedIndex])
              break
          }
        }}
        readOnly={readOnly}
        readOnlyText={readOnlyText}
        readOnlyDelete={() => {
          onDeselect()
          setReadOnly(false)
        }}
      />
      {/* Popup */}
      {!disabled && showOptions ? (
        <div ref={optionsWrapperRef} className="options-wrapper">
          <ul className="options-list">
            {filteredVillagers.map((villager, idx) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                ref={highlightedIndex === idx ? highlightedRef : undefined}
                key={villager.id}
                className={`option ${selectedVillagers.includes(villager.id) ? `selected` : ``} ${
                  highlightedIndex === idx ? `highlighted` : ``
                }`}
                onClick={() => handleSelect(villager)}
              >
                {villager.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {selectedVillagers.length ? (
        <div className="chip-container">
          <Chip
            text="Clear All"
            onClick={() => {
              onClearAll?.()
              setSelectedVillagers([])
            }}
          />
          {selectedVillagers.map(villagerId => {
            const villager = allVillagers.find(v => v.id === villagerId)
            return (
              <Chip
                key={villagerId}
                text={villager.name}
                onDelete={() => {
                  onDeselect(allVillagers.find(v => v.id === villagerId))
                  setSelectedVillagers(selectedVillagers.filter(v => v !== villagerId))
                }}
              />
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

},{"preact":"aSor","preact/hooks":"MwGB","../assets/css/villager-combobox.styl":"f3F9","./AppContext":"FyBm","./useEscapeHandler":"V0fQ"}],"DRXc":[function(require,module,exports) {
import { h } from 'preact'
import { useContext } from 'preact/hooks'
import '../assets/css/options-dialog.styl'
import { AppContext } from './AppContext'
import Checkbox from './ui/Checkbox'
import Overlay from './ui/Overlay'
import VillagerCombobox from './VillagerCombobox'

// TODO: Language selector (default to navigator.languages, then en-US)

export default function OptionsDialog({ isOpen, handleClose }) {
  const {
    selectedTarget,
    setSelectedTarget,
    exclusions,
    setExclusions,
    exclusionMax,
    shouldUseCache,
    setShouldUseCache,
  } = useContext(AppContext)
  return (
    <Overlay isOpen={isOpen} handleClose={handleClose}>
      <div className="options-dialog-wrapper">
        <span>Options</span>
        <VillagerCombobox
          placeholder="Type villager's name"
          id="targetVillager"
          labelText="Target Villager (Free Space)"
          onSelect={villager => setSelectedTarget(villager)}
          onDeselect={() => {
            setSelectedTarget(null)
          }}
          filter={villager => !exclusions.find(v => v.id === villager.id)}
        />
        <VillagerCombobox
          multiSelect
          placeholder="Type villager name(s)"
          id="excludeVillagers"
          labelText="Exclude Villager(s)"
          onSelect={villager => {
            if (exclusions.includes(villager)) {
              setExclusions(exclusions.filter(v => v !== villager))
            } else {
              setExclusions([...exclusions, villager])
            }
          }}
          onDeselect={villager => {
            setExclusions(exclusions.filter(v => v !== villager))
          }}
          onClearAll={() => setExclusions([])}
          disabled={exclusions.length === exclusionMax}
          filter={villager => (selectedTarget ? selectedTarget.id !== villager.id : true)}
        />
        <div className="cache-wrapper">
          <Checkbox
            labelText="Cache Data"
            id="cacheDataCheckbox"
            checked={shouldUseCache}
            onChange={() => setShouldUseCache(prev => !prev)}
          />
          {shouldUseCache ? (
            <button
              type="button"
              onClick={() => {
                indexedDB.deleteDatabase(`bingo`)
              }}
            >
              Clear Cache
            </button>
          ) : null}
        </div>
      </div>
    </Overlay>
  )
}

},{"preact":"aSor","preact/hooks":"MwGB","../assets/css/options-dialog.styl":"f3F9","./AppContext":"FyBm","./ui/Checkbox":"wTEy","./ui/Overlay":"RbKk","./VillagerCombobox":"oQAu"}],"leDv":[function(require,module,exports) {
import { Fragment, h } from 'preact'
import { useContext, useState } from 'preact/hooks'
import { random } from '../util/math'
import { AppContext } from './AppContext'
import BingoCard from './BingoCard'
import Instructions from './Instructions'
import OptionsDialog from './OptionsDialog'

// Important to do
// TODO: Mobile
// TODO: Check screen reader a11y for VillagerCombobox
// TODO: Issues/feedback popup from footer
// TODO: Full a11y audit
// TODO: Generate new card should clear previously marked squares

// Future enhancements
// TODO: Add option to disable images
// TODO: Investigate caching images as base64 strings
// TODO: Bingo detection (count total bingos)
// TODO: Maybe look into PWA-ifying
// TODO: Use browser language/user selected for names (villager data has multiple, use navigator.languages)
// TODO: Show loading while villagers/preferences load
// TODO: Support multiple bingo cards

function getRandomVillagers(villagers, { target, exclusions = [] } = {}) {
  if (!villagers?.length) return villagers
  const max = target ? 24 : 25
  const indexSet = new Set()
  const targetIndex = villagers.findIndex(v => v.id === target?.id)
  const excludedIndexes = exclusions.map(villager => villagers.findIndex(v => v.id === villager.id))
  if (target) excludedIndexes.push(targetIndex)
  while (indexSet.size < max) {
    let newIndex
    do {
      newIndex = random(0, villagers.length)
    } while (excludedIndexes.includes(newIndex))
    indexSet.add(newIndex)
  }
  const indexes = [...indexSet]
  if (target) indexes.splice(12, 0, targetIndex)
  return indexes.map(idx => villagers[idx])
}
export default function App() {
  const { selectedTarget, exclusions, allVillagers } = useContext(AppContext)
  const [showCard, setShowCard] = useState(false)
  const [villagers, setVillagers] = useState(null)
  const [optionsOpen, setOptionsOpen] = useState(false)

  return (
    <Fragment>
      <div className="sidebar">
        <Instructions />
        <div className="controls">
          <button
            type="button"
            className="cta-btn"
            disabled={!allVillagers?.length}
            onClick={() => {
              setVillagers(
                getRandomVillagers(allVillagers, {
                  target: selectedTarget,
                  exclusions,
                })
              )
              setShowCard(true)
            }}
          >
            Generate New Card
          </button>
          <button
            type="button"
            className="options-btn"
            onClick={() => setOptionsOpen(true)}
            aria-label="Open options menu"
          >
            <svg aria-hidden xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
              <path fill="none" d="M0 0h256v256H0z" />
              <circle
                cx="128"
                cy="128"
                r="56"
                fill="none"
                stroke="var(--acnh-color-yellow)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M55.8 179l-1.2 18.5a8.1 8.1 0 002.5 6.4 100.6 100.6 0 0040.6 23.5 8.1 8.1 0 006.8-1L120 216h16l15.5 10.3a8.1 8.1 0 006.8 1.1 100.6 100.6 0 0040.6-23.5 8.1 8.1 0 002.5-6.4l-1.2-18.6 8-13.8 16.7-8.3a8.1 8.1 0 004.3-5.3 100.6 100.6 0 000-47 8.1 8.1 0 00-4.3-5.3l-16.7-8.3-8-13.8 1.2-18.6a8.1 8.1 0 00-2.5-6.4 100.6 100.6 0 00-40.6-23.5 8.1 8.1 0 00-6.8 1L136 40h-16l-15.5-10.3a8.1 8.1 0 00-6.8-1A100.6 100.6 0 0057.1 52a8.1 8.1 0 00-2.5 6.4l1.2 18.6-8 13.8L31 99.2a8.1 8.1 0 00-4.3 5.3 100.6 100.6 0 000 47 8.1 8.1 0 004.3 5.3l16.7 8.3z"
                fill="none"
                stroke="var(--acnh-color-yellow)"
                strokeMiterlimit="10"
                strokeWidth="16"
              />
            </svg>
          </button>
        </div>
      </div>
      <main>{!showCard ? null : <BingoCard villagers={villagers} />}</main>
      <footer>
        <div>
          &copy; {new Date().getFullYear()}
          {` `}
          <a href="https://twitter.com/_verygooddev" target="_blank" rel="noreferrer noopener">
            VeryGoodDev
          </a>
        </div>
        <div>
          Villager data provided by{` `}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://acnhapi.com/" target="_blank" rel="noopener">
            ACNH API
          </a>
        </div>
        <div>
          Find a bug? Got a suggestion?{` `}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://github.com/VeryGoodDev/villager-bingo/issues" target="_blank" rel="noopener">
            Create an issue here
          </a>
        </div>
      </footer>
      <OptionsDialog isOpen={optionsOpen} handleClose={() => setOptionsOpen(false)} />
    </Fragment>
  )
}

},{"preact":"aSor","preact/hooks":"MwGB","../util/math":"D07H","./AppContext":"FyBm","./BingoCard":"ROoo","./Instructions":"H5vG","./OptionsDialog":"DRXc"}],"Focm":[function(require,module,exports) {
import { h, render } from 'preact'
import App from './components/App'
import { AppProvider } from './components/AppContext'
import { EscapeHandlerProvider } from './components/useEscapeHandler'

render(
  <AppProvider>
    <EscapeHandlerProvider>
      <App />
    </EscapeHandlerProvider>
  </AppProvider>,
  document.querySelector(`#root`)
)

},{"preact":"aSor","./components/App":"leDv","./components/AppContext":"FyBm","./components/useEscapeHandler":"V0fQ"}]},{},["Focm"], null)
//# sourceMappingURL=src.ba2a63ac.js.map