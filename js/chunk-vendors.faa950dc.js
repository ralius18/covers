(self["webpackChunkbrads_covers_vue"]=self["webpackChunkbrads_covers_vue"]||[]).push([[998],{4444:function(e,t,n){"use strict";n.d(t,{$s:function(){return W},BH:function(){return h},G6:function(){return I},L:function(){return a},LL:function(){return C},Mn:function(){return _},Rd:function(){return T},Sg:function(){return d},UG:function(){return m},US:function(){return s},X3:function(){return X},ZB:function(){return u},ZR:function(){return x},b$:function(){return y},d:function(){return b},eu:function(){return E},hl:function(){return S},jU:function(){return g},m9:function(){return K},ne:function(){return V},pd:function(){return M},r3:function(){return D},ru:function(){return v},tV:function(){return c},uI:function(){return f},vZ:function(){return $},w1:function(){return w},xO:function(){return L},xb:function(){return N},z$:function(){return p},zd:function(){return R}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[u],n[l],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):r(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,c=a?n[e.charAt(r)]:64;++r;const u=r<e.length,l=u?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(i.push(h),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==l){const e=c<<6&192|l;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=i(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())}function m(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function g(){return"object"===typeof self&&self.self===self}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return p().indexOf("Electron/")>=0}function w(){const e=p();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return p().indexOf("MSAppHost/")>=0}function I(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S(){return"object"===typeof indexedDB}function E(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function T(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k="FirebaseError";class x extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=k,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?A(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new x(i,o,n);return a}}function A(e,t){return e.replace(O,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function N(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(P(n)&&P(s)){if(!$(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function P(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function R(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){const n=new F(e,t);return n.subscribe.bind(n)}class F{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=B(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=j),void 0===i.error&&(i.error=j),void 0===i.complete&&(i.complete=j);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function B(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function j(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U=1e3,q=2,z=144e5,H=.5;function W(e,t=U,n=q){const i=t*Math.pow(n,e),r=Math.round(H*i*(Math.random()-.5)*2);return Math.min(z,i+r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){return new Promise(((n,i)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;i(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class Z{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new Y(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new J(this._db.createObjectStore(e,t))}close(){this._db.close()}}class Y{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new J(this._transaction.objectStore(e))}}class J{constructor(e){this._store=e}index(e){return new Q(this._store.index(e))}createIndex(e,t,n){return new Q(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return G(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return G(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return G(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return G(e,"Error clearing IndexedDB object store")}}class Q{constructor(e){this._index=e}get(e){const t=this._index.get(e);return G(t,"Error reading from IndexedDB")}}function X(e,t,n){return new Promise(((i,r)=>{try{const s=indexedDB.open(e,t);s.onsuccess=e=>{i(new Z(e.target.result))},s.onerror=e=>{var t;r(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},s.onupgradeneeded=e=>{n(new Z(s.result),e.oldVersion,e.newVersion,new Y(s.transaction))}}catch(s){r(`Error opening indexedDB: ${s.message}`)}}))}},1001:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,{Z:function(){return i}})},9662:function(e,t,n){var i=n(7854),r=n(614),s=n(6330),o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not a function")}},6077:function(e,t,n){var i=n(7854),r=n(614),s=i.String,o=i.TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},9670:function(e,t,n){var i=n(7854),r=n(111),s=i.String,o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not an object")}},1318:function(e,t,n){var i=n(5656),r=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=i(t),u=s(c),l=r(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4326:function(e,t,n){var i=n(1702),r=i({}.toString),s=i("".slice);e.exports=function(e){return s(r(e),8,-1)}},648:function(e,t,n){var i=n(7854),r=n(1694),s=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),u=i.Object,l="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?o(t):"Object"==(i=o(t))&&s(t.callee)?"Arguments":i}},7741:function(e,t,n){var i=n(1702),r=i("".replace),s=function(e){return String(Error(e).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,a=o.test(s);e.exports=function(e,t){if(a&&"string"==typeof e)while(t--)e=r(e,o,"");return e}},9920:function(e,t,n){var i=n(2597),r=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=r(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];i(e,h)||n&&i(n,h)||c(e,h,u(t,h))}}},8880:function(e,t,n){var i=n(9781),r=n(3070),s=n(9114);e.exports=i?function(e,t,n){return r.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var i=n(7293);e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var i=n(7854),r=n(111),s=i.document,o=r(s)&&r(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},8113:function(e,t,n){var i=n(5005);e.exports=i("navigator","userAgent")||""},7392:function(e,t,n){var i,r,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(i=l.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,n){var i=n(7293),r=n(9114);e.exports=!i((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",r(1,7)),7!==e.stack)}))},2109:function(e,t,n){var i=n(7854),r=n(1236).f,s=n(8880),o=n(1320),a=n(3505),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,p,f,m=e.target,g=e.global,v=e.stat;if(l=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,l)for(h in t){if(p=t[h],e.noTargetGet?(f=r(l,h),d=f&&f.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(e.sham||d&&d.sham)&&s(p,"sham",!0),o(l,h,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var i=n(4374),r=Function.prototype,s=r.apply,o=r.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(e,t,n){var i=n(7293);e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var i=n(4374),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(e,t,n){var i=n(9781),r=n(2597),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!i||i&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var i=n(4374),r=Function.prototype,s=r.bind,o=r.call,a=i&&s.bind(o,o);e.exports=i?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var i=n(7854),r=n(614),s=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(i[e]):i[e]&&i[e][t]}},8173:function(e,t,n){var i=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:i(n)}},7854:function(e,t,n){var i=function(e){return e&&e.Math==Math&&e};e.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var i=n(1702),r=n(7908),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(r(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var i=n(9781),r=n(7293),s=n(317);e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var i=n(7854),r=n(1702),s=n(7293),o=n(4326),a=i.Object,c=r("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},9587:function(e,t,n){var i=n(614),r=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&i(o=t.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var i=n(1702),r=n(614),s=n(5465),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8340:function(e,t,n){var i=n(111),r=n(8880);e.exports=function(e,t){i(t)&&"cause"in t&&r(e,"cause",t.cause)}},9909:function(e,t,n){var i,r,s,o=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),d=n(5465),p=n(6200),f=n(3501),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(e){return s(e)?r(e):i(e,{})},b=function(e){return function(t){var n;if(!u(t)||(n=r(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var w=d.state||(d.state=new v),_=c(w.get),I=c(w.has),S=c(w.set);i=function(e,t){if(I(w,e))throw new g(m);return t.facade=e,S(w,e,t),t},r=function(e){return _(w,e)||{}},s=function(e){return I(w,e)}}else{var E=p("state");f[E]=!0,i=function(e,t){if(h(e,E))throw new g(m);return t.facade=e,l(e,E,t),t},r=function(e){return h(e,E)?e[E]:{}},s=function(e){return h(e,E)}}e.exports={set:i,get:r,has:s,enforce:y,getterFor:b}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var i=n(7293),r=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(r(t)?i(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},111:function(e,t,n){var i=n(614);e.exports=function(e){return"object"==typeof e?null!==e:i(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var i=n(7854),r=n(5005),s=n(614),o=n(7976),a=n(3307),c=i.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return s(t)&&o(t.prototype,c(e))}},6244:function(e,t,n){var i=n(7466);e.exports=function(e){return i(e.length)}},133:function(e,t,n){var i=n(7392),r=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:function(e,t,n){var i=n(7854),r=n(614),s=n(2788),o=i.WeakMap;e.exports=r(o)&&/native code/.test(s(o))},6277:function(e,t,n){var i=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:i(e)}},3070:function(e,t,n){var i=n(7854),r=n(9781),s=n(4664),o=n(3353),a=n(9670),c=n(4948),u=i.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",p="configurable",f="writable";t.f=r?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var i=h(e,t);i&&i[f]&&(e[t]=n.value,n={configurable:p in n?n[p]:i[p],enumerable:d in n?n[d]:i[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),s)try{return l(e,t,n)}catch(i){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var i=n(9781),r=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=i?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!r(s.f,e,t),e[t])}},8006:function(e,t,n){var i=n(6324),r=n(748),s=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var i=n(1702);e.exports=i({}.isPrototypeOf)},6324:function(e,t,n){var i=n(1702),r=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=i([].push);e.exports=function(e,t){var n,i=s(e),u=0,l=[];for(n in i)!r(a,n)&&r(i,n)&&c(l,n);while(t.length>u)r(i,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);t.f=r?function(e){var t=i(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var i=n(1702),r=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),t?e(n,i):n.__proto__=i,n}}():void 0)},2140:function(e,t,n){var i=n(7854),r=n(6916),s=n(614),o=n(111),a=i.TypeError;e.exports=function(e,t){var n,i;if("string"===t&&s(n=e.toString)&&!o(i=r(n,e)))return i;if(s(n=e.valueOf)&&!o(i=r(n,e)))return i;if("string"!==t&&s(n=e.toString)&&!o(i=r(n,e)))return i;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var i=n(5005),r=n(1702),s=n(8006),o=n(5181),a=n(9670),c=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},1320:function(e,t,n){var i=n(7854),r=n(614),s=n(2597),o=n(8880),a=n(3505),c=n(2788),u=n(9909),l=n(6530).CONFIGURABLE,h=u.get,d=u.enforce,p=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:t;r(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==g)&&o(n,"name",g),u=d(n),u.source||(u.source=p.join("string"==typeof g?g:""))),e!==i?(h?!m&&e[t]&&(f=!0):delete e[t],f?e[t]=n:o(e,t,n)):f?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return r(this)&&h(this).source||c(this)}))},4488:function(e,t,n){var i=n(7854),r=i.TypeError;e.exports=function(e){if(void 0==e)throw r("Can't call method on "+e);return e}},3505:function(e,t,n){var i=n(7854),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},6200:function(e,t,n){var i=n(2309),r=n(9711),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},5465:function(e,t,n){var i=n(7854),r=n(3505),s="__core-js_shared__",o=i[s]||r(s,{});e.exports=o},2309:function(e,t,n){var i=n(1913),r=n(5465);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var i=n(9303),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},5656:function(e,t,n){var i=n(8361),r=n(4488);e.exports=function(e){return i(r(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var i=+e;return i!==i||0===i?0:(i>0?n:t)(i)}},7466:function(e,t,n){var i=n(9303),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},7908:function(e,t,n){var i=n(7854),r=n(4488),s=i.Object;e.exports=function(e){return s(r(e))}},7593:function(e,t,n){var i=n(7854),r=n(6916),s=n(111),o=n(2190),a=n(8173),c=n(2140),u=n(5112),l=i.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,i=a(e,h);if(i){if(void 0===t&&(t="default"),n=r(i,e,t),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var i=n(7593),r=n(2190);e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},1694:function(e,t,n){var i=n(5112),r=i("toStringTag"),s={};s[r]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var i=n(7854),r=n(648),s=i.String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},6330:function(e,t,n){var i=n(7854),r=i.String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},9711:function(e,t,n){var i=n(1702),r=0,s=Math.random(),o=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+s,36)}},3307:function(e,t,n){var i=n(133);e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var i=n(9781),r=n(7293);e.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var i=n(7854),r=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),u=r("wks"),l=i.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},9191:function(e,t,n){"use strict";var i=n(5005),r=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(9587),l=n(6277),h=n(8340),d=n(7741),p=n(2914),f=n(1913);e.exports=function(e,t,n,m){var g=m?2:1,v=e.split("."),y=v[v.length-1],b=i.apply(null,v);if(b){var w=b.prototype;if(!f&&r(w,"cause")&&delete w.cause,!n)return b;var _=i("Error"),I=t((function(e,t){var n=l(m?t:e,void 0),i=m?new b(e):new b;return void 0!==n&&s(i,"message",n),p&&s(i,"stack",d(i.stack,2)),this&&o(w,this)&&u(i,this,I),arguments.length>g&&h(i,arguments[g]),i}));if(I.prototype=w,"Error"!==y&&(a?a(I,_):c(I,_,{name:!0})),c(I,b),!f)try{w.name!==y&&s(w,"name",y),w.constructor=I}catch(S){}return I}}},1703:function(e,t,n){var i=n(2109),r=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=r[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=o(e,t,u),i({global:!0,forced:u},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=o(a+"."+e,t,u),i({target:a,stat:!0,forced:u},n)}};l("Error",(function(e){return function(t){return s(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),l("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},9423:function(e,t,n){"use strict";n.d(t,{z9:function(){return ye},yu:function(){return _e}});var i=n(2238),r=n(8463),s=n(4444),o=n(3333);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=new Map,c={activated:!1,tokenObservers:[]},u={initialized:!1,enabled:!1};function l(e){return a.get(e)||c}function h(e,t){a.set(e,t)}function d(){return u}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p="https://content-firebaseappcheck.googleapis.com/v1beta",f="exchangeRecaptchaToken",m="exchangeDebugToken",g={OFFSET_DURATION:3e5,RETRIAL_MIN_WAIT:3e4,RETRIAL_MAX_WAIT:96e4},v=864e5;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(e,t,n,i,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch((()=>{}))}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new s.BH,await b(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new s.BH,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch((()=>{}))}catch(t){this.retryPolicy(t)?this.process(!1).catch((()=>{})):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}function b(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",["throttled"]:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},_=new s.LL("appCheck","AppCheck",w);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I(e=!1){var t;return e?null===(t=self.grecaptcha)||void 0===t?void 0:t.enterprise:self.grecaptcha}function S(e){if(!l(e).activated)throw _.create("use-before-activation",{appName:e.name})}function E(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)}))}function T(e){const t=Math.round(e/1e3),n=Math.floor(t/86400),i=Math.floor((t-3600*n*24)/3600),r=Math.floor((t-3600*n*24-3600*i)/60),s=t-3600*n*24-3600*i-60*r;let o="";return n&&(o+=k(n)+"d:"),i&&(o+=k(i)+"h:"),o+=k(r)+"m:"+k(s)+"s",o}function k(e){return 0===e?"00":e>=10?e.toString():"0"+e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x({url:e,body:t},n){const i={"Content-Type":"application/json"},r=n.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&(i["X-Firebase-Client"]=e)}const s={method:"POST",body:JSON.stringify(t),headers:i};let o,a;try{o=await fetch(e,s)}catch(h){throw _.create("fetch-network-error",{originalErrorMessage:h.message})}if(200!==o.status)throw _.create("fetch-status-error",{httpStatus:o.status});try{a=await o.json()}catch(h){throw _.create("fetch-parse-error",{originalErrorMessage:h.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw _.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const u=1e3*Number(c[1]),l=Date.now();return{token:a.attestationToken,expireTimeMillis:l+u,issuedAtTimeMillis:l}}function C(e,t){const{projectId:n,appId:i,apiKey:r}=e.options;return{url:`${p}/projects/${n}/apps/${i}:${f}?key=${r}`,body:{recaptcha_token:t}}}function A(e,t){const{projectId:n,appId:i,apiKey:r}=e.options;return{url:`${p}/projects/${n}/apps/${i}:${m}?key=${r}`,body:{debug_token:t}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O="firebase-app-check-database",D=1,N="firebase-app-check-store",$="debug-token";let P=null;function L(){return P||(P=new Promise(((e,t)=>{try{const n=indexedDB.open(O,D);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{var n;t(_.create("storage-open",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=e=>{const t=e.target.result;switch(e.oldVersion){case 0:t.createObjectStore(N,{keyPath:"compositeKey"})}}}catch(n){t(_.create("storage-open",{originalErrorMessage:n.message}))}})),P)}function R(e){return j(U(e))}function M(e,t){return B(U(e),t)}function V(e){return B($,e)}function F(){return j($)}async function B(e,t){const n=await L(),i=n.transaction(N,"readwrite"),r=i.objectStore(N),s=r.put({compositeKey:e,value:t});return new Promise(((e,t)=>{s.onsuccess=t=>{e()},i.onerror=e=>{var n;t(_.create("storage-set",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}}))}async function j(e){const t=await L(),n=t.transaction(N,"readonly"),i=n.objectStore(N),r=i.get(e);return new Promise(((e,t)=>{r.onsuccess=t=>{const n=t.target.result;e(n?n.value:void 0)},n.onerror=e=>{var n;t(_.create("storage-get",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}}))}function U(e){return`${e.options.appId}-${e.name}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=new o.Yd("@firebase/app-check");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e){if((0,s.hl)()){let n;try{n=await R(e)}catch(t){q.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return n}}function H(e,t){return(0,s.hl)()?M(e,t).catch((e=>{q.warn(`Failed to write token to IndexedDB. Error: ${e}`)})):Promise.resolve()}async function W(){let e;try{e=await F()}catch(t){}if(e)return e;{const e=E();return V(e).catch((e=>q.warn(`Failed to persist debug token to IndexedDB. Error: ${e}`))),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){const e=d();return e.enabled}async function G(){const e=d();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}function Z(){const e=(0,s.Rd)(),t=d();if(t.initialized=!0,"string"!==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==e.FIREBASE_APPCHECK_DEBUG_TOKEN)return;t.enabled=!0;const n=new s.BH;t.token=n,"string"===typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(W())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={error:"UNKNOWN_ERROR"};function J(e){return s.US.encodeString(JSON.stringify(e),!1)}async function Q(e,t=!1){const n=e.app;S(n);const i=l(n);let r,s=i.token;if(!s){const e=await i.cachedTokenPromise;e&&re(e)&&(s=e)}if(!t&&s&&re(s))return{token:s.token};let o,a=!1;if(K()){i.exchangeTokenPromise||(i.exchangeTokenPromise=x(A(n,await G()),e.heartbeatServiceProvider).then((e=>(i.exchangeTokenPromise=void 0,e))),a=!0);const t=await i.exchangeTokenPromise;return await H(n,t),h(n,Object.assign(Object.assign({},i),{token:t})),{token:t.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().then((e=>(i.exchangeTokenPromise=void 0,e))),a=!0),s=await i.exchangeTokenPromise}catch(c){"appCheck/throttled"===c.code?q.warn(c.message):q.error(c),r=c}return s?(o={token:s.token},h(n,Object.assign(Object.assign({},i),{token:s})),await H(n,s)):o=se(r),a&&ie(n,o),o}function X(e,t,n,i){const{app:r}=e,s=l(r),o={next:n,error:i,type:t};if(h(r,Object.assign(Object.assign({},s),{tokenObservers:[...s.tokenObservers,o]})),s.token&&re(s.token)){const t=s.token;Promise.resolve().then((()=>{n({token:t.token}),te(e)})).catch((()=>{}))}s.cachedTokenPromise.then((()=>te(e)))}function ee(e,t){const n=l(e),i=n.tokenObservers.filter((e=>e.next!==t));0===i.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),h(e,Object.assign(Object.assign({},n),{tokenObservers:i}))}function te(e){const{app:t}=e,n=l(t);let i=n.tokenRefresher;i||(i=ne(e),h(t,Object.assign(Object.assign({},n),{tokenRefresher:i}))),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function ne(e){const{app:t}=e;return new y((async()=>{const n=l(t);let i;if(i=n.token?await Q(e,!0):await Q(e),i.error)throw i.error}),(()=>!0),(()=>{const e=l(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const n=e.token.expireTimeMillis-3e5;return t=Math.min(t,n),Math.max(0,t-Date.now())}return 0}),g.RETRIAL_MIN_WAIT,g.RETRIAL_MAX_WAIT)}function ie(e,t){const n=l(e).tokenObservers;for(const r of n)try{"EXTERNAL"===r.type&&null!=t.error?r.error(t.error):r.next(t)}catch(i){}}function re(e){return e.expireTimeMillis-Date.now()>0}function se(e){return{token:J(Y),error:e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=l(this.app);for(const t of e)ee(this.app,t.next);return Promise.resolve()}}function ae(e,t){return new oe(e,t)}function ce(e){return{getToken:t=>Q(e,t),addTokenListener:t=>X(e,"INTERNAL",t),removeTokenListener:t=>ee(e.app,t)}}const ue="@firebase/app-check",le="0.5.5",he="https://www.google.com/recaptcha/api.js";function de(e,t){const n=l(e),i=new s.BH;h(e,Object.assign(Object.assign({},n),{reCAPTCHAState:{initialized:i}}));const r=fe(e),o=I(!1);return o?pe(e,t,o,r,i):ve((()=>{const n=I(!1);if(!n)throw new Error("no recaptcha");pe(e,t,n,r,i)})),i.promise}function pe(e,t,n,i,r){n.ready((()=>{ge(e,t,n,i),r.resolve(n)}))}function fe(e){const t=`fire_app_check_${e.name}`,n=document.createElement("div");return n.id=t,n.style.display="none",document.body.appendChild(n),t}async function me(e){S(e);const t=l(e).reCAPTCHAState,n=await t.initialized.promise;return new Promise(((t,i)=>{const r=l(e).reCAPTCHAState;n.ready((()=>{t(n.execute(r.widgetId,{action:"fire_app_check"}))}))}))}function ge(e,t,n,i){const r=n.render(i,{sitekey:t,size:"invisible"}),s=l(e);h(e,Object.assign(Object.assign({},s),{reCAPTCHAState:Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:r})}))}function ve(e){const t=document.createElement("script");t.src=he,t.onload=e,document.head.appendChild(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e;we(this._throttleData);const t=await me(this._app).catch((e=>{throw _.create("recaptcha-error")}));let n;try{n=await x(C(this._app,t),this._heartbeatServiceProvider)}catch(i){throw"fetch-status-error"===i.code?(this._throttleData=be(Number(null===(e=i.customData)||void 0===e?void 0:e.httpStatus),this._throttleData),_.create("throttled",{time:T(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,n}initialize(e){this._app=e,this._heartbeatServiceProvider=(0,i._getProvider)(e,"heartbeat"),de(e,this._siteKey).catch((()=>{}))}isEqual(e){return e instanceof ye&&this._siteKey===e._siteKey}}function be(e,t){if(404===e||403===e)return{backoffCount:1,allowRequestsAfter:Date.now()+v,httpStatus:e};{const n=t?t.backoffCount:0,i=(0,s.$s)(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+i,httpStatus:e}}}function we(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw _.create("throttled",{time:T(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e=(0,i.getApp)(),t){e=(0,s.m9)(e);const n=(0,i._getProvider)(e,"app-check");if(d().initialized||Z(),K()&&G().then((e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`))),n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(r.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&r.provider.isEqual(t.provider))return i;throw _.create("already-initialized",{appName:e.name})}const r=n.initialize({options:t});return Ie(e,t.provider,t.isTokenAutoRefreshEnabled),l(e).isTokenAutoRefreshEnabled&&X(r,"INTERNAL",(()=>{})),r}function Ie(e,t,n){const i=l(e),r=Object.assign(Object.assign({},i),{activated:!0});r.provider=t,r.cachedTokenPromise=z(e).then((t=>(t&&re(t)&&(h(e,Object.assign(Object.assign({},l(e)),{token:t})),ie(e,{token:t.token})),t))),r.isTokenAutoRefreshEnabled=void 0===n?e.automaticDataCollectionEnabled:n,h(e,r),r.provider.initialize(e)}const Se="app-check",Ee="app-check-internal";function Te(){(0,i._registerComponent)(new r.wA(Se,(e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return ae(t,n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider(Ee).initialize()}))),(0,i._registerComponent)(new r.wA(Ee,(e=>{const t=e.getProvider("app-check").getImmediate();return ce(t)}),"PUBLIC").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(ue,le)}Te()},1902:function(e,t,n){"use strict";n.d(t,{Z:function(){return i.Z}});var i=n(8180),r="firebase",s="9.6.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i.Z.registerVersion(r,s,"app-compat")},3204:function(e,t,n){"use strict";var i=n(8180),r=n(4444),s=n(2238);function o(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var a=n(3333),c=n(8463);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p=h,f=d,m=new r.LL("auth","Firebase",d()),g=new a.Yd("@firebase/auth");function v(e,...t){g.logLevel<=a["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw I(e,...t)}function b(e,...t){return I(e,...t)}function w(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function _(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&y(e,"argument-error"),w(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return m.create(e,...t)}function S(e,t,...n){if(!e)throw I(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function T(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map;function x(e){T(e instanceof Function,"Expected a class definition");let t=k.get(e);return t?(T(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,k.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(x);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function O(){return"http:"===D()||"https:"===D()}function D(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function $(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.shortDelay=e,this.longDelay=t,T(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){T(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},V=new P(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function B(e,t,n,i,s={}){return j(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(q(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function j(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},M),t);try{const t=new z(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw H(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw H(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw H(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw w(e,a,o);y(e,a)}}catch(s){if(s instanceof r.ZR)throw s;y(e,"network-request-failed")}}async function U(e,t,n,i,r={}){const s=await B(e,t,n,i,r);return"mfaPendingCredential"in s&&y(e,"multi-factor-auth-required",{_serverResponse:s}),s}function q(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?L(e.config,r):`${e.config.apiScheme}://${r}`}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(b(this.auth,"network-request-failed"))),V.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function H(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=b(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return B(e,"POST","/v1/accounts:delete",t)}async function K(e,t){return B(e,"POST","/v1/accounts:update",t)}async function G(e,t){return B(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=Q(i);S(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:Z(J(s.auth_time)),issuedAtTime:Z(J(s.iat)),expirationTime:Z(J(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function J(e){return 1e3*Number(e)}function Q(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",s),null}}function X(e){const t=Q(e);return S(t,"internal-error"),S("undefined"!==typeof t.exp,"internal-error"),S("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&te(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Z(this.lastLoginAt),this.creationTime=Z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e){var t;const n=e.auth,i=await e.getIdToken(),r=await ee(e,G(n,{idToken:i}));S(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ae(s.providerUserInfo):[],a=oe(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ie(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function se(e){const t=(0,r.m9)(e);await re(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ae(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const n=await j(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=q(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S("undefined"!==typeof e.idToken,"internal-error"),S("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await ce(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ue;return n&&(S("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(S("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(S("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ue,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){S("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ie(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return S(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Y(this,e)}reload(){return se(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await re(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:I}=t;S(y&&I,e,"internal-error");const E=ue.fromJSON(this.name,I);S("string"===typeof y,e,"internal-error"),le(l,e.name),le(h,e.name),S("boolean"===typeof b,e,"internal-error"),S("boolean"===typeof w,e,"internal-error"),le(d,e.name),le(p,e.name),le(f,e.name),le(m,e.name),le(g,e.name),le(v,e.name);const T=new he({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(T.providerData=_.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new ue;i.updateFromServerResponse(t);const r=new he({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await re(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const pe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=fe(this.userKey,i.apiKey,r),this.fullPersistenceKey=fe("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(x(pe),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||x(pe);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=he._fromJSON(e,t);u!==r&&(o=n),r=u;break}}catch(c){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(c){}}))),new me(r,e,n)):new me(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Se(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||be(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,r.z$)()){return/firefox\//i.test(e)}function ye(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function be(e=(0,r.z$)()){return/crios\//i.test(e)}function we(e=(0,r.z$)()){return/iemobile/i.test(e)}function _e(e=(0,r.z$)()){return/android/i.test(e)}function Ie(e=(0,r.z$)()){return/blackberry/i.test(e)}function Se(e=(0,r.z$)()){return/webos/i.test(e)}function Ee(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)}function Te(e=(0,r.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ke(e=(0,r.z$)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function xe(){return(0,r.w1)()&&10===document.documentMode}function Ce(e=(0,r.z$)()){return Ee(e)||_e(e)||Se(e)||Ie(e)||/windows phone/i.test(e)||we(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e,t=[]){let n;switch(e){case"Browser":n=ge((0,r.z$)());break;case"Worker":n=`${ge((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $e(this),this.idTokenSubscription=new $e(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=x(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await re(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&S(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(x(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&x(e)||this._popupRedirectResolver;S(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[x(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return S(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ne(e){return(0,r.m9)(e)}class $e{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pe(e,t,n){const i=Ne(e);S(i._canInitEmulator,i,"emulator-config-failed"),S(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Le(t),{host:o,port:a}=Re(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Ve()}function Le(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Re(e){const t=Le(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Me(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Me(t)}}}function Me(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ve(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return B(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function je(e,t){return B(e,"POST","/v1/accounts:update",t)}async function Ue(e,t){return B(e,"POST","/v1/accounts:update",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function ze(e,t){return B(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function He(e,t){return ze(e,t)}async function We(e,t){return ze(e,t)}async function Ke(e,t){return ze(e,t)}async function Ge(e,t){return ze(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function Ye(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Fe{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Je(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Je(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ze(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return je(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="http://localhost";class et extends Fe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=o(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new et(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Qe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qe(e,t)}buildRequest(){const e={requestUri:Xe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return B(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function nt(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function it(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw H(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),rt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Fe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ot({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ot({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return it(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new ot({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ct(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class ut{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=at(null!==(i=c["mode"])&&void 0!==i?i:null);S(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ct(e);try{return new ut(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(){this.providerId=lt.PROVIDER_ID}static credential(e,t){return Je._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ut.parseLink(t);return S(n,"argument-error"),Je._fromEmailAndCode(e,n.code,n.tenantId)}}lt.PROVIDER_ID="password",lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends dt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return S("providerId"in t&&"signInMethod"in t,"argument-error"),et._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return S(e.idToken||e.accessToken,"argument-error"),et._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=e;if(!n&&!i&&!t&&!r)return null;if(!o)return null;try{return new pt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:r})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends dt{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",ft.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return et._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mt.credential(t,n)}catch(i){return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com",mt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends dt{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch(t){return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com",gt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt="http://localhost";class yt extends Fe{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Qe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new yt(n,r):null}static _create(e,t){return new yt(e,t)}buildRequest(){return{requestUri:vt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="saml.";class wt extends ht{constructor(e){S(e.startsWith(bt),"argument-error"),super(e)}static credentialFromResult(e){return wt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return wt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=yt.fromJSON(e);return S(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return yt._create(n,t)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends dt{constructor(){super("twitter.com")}static credential(e,t){return et._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _t.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function It(e,t){return U(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.TWITTER_SIGN_IN_METHOD="twitter.com",_t.PROVIDER_ID="twitter.com";class St{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await he._fromIdTokenResponse(e,n,i),s=Et(n),o=new St({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Et(n);return new St({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(e){var t;const n=Ne(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new St({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await It(n,{returnSecureToken:!0}),r=await St._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends r.ZR{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,kt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new kt(e,t,n,i)}}function xt(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw kt._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(e,t){const n=(0,r.m9)(e);await Dt(!0,n,t);const{providerUserInfo:i}=await K(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Ct(i||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ot(e,t,n=!1){const i=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return St._forOperation(e,"link",i)}async function Dt(e,t,n){await re(t);const i=Ct(t.providerData),r=!1===e?"provider-already-linked":"no-such-provider";S(i.has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await ee(e,xt(i,r,t,e),n);S(s.idToken,i,"internal-error");const o=Q(s.idToken);S(o,i,"internal-error");const{sub:a}=o;return S(e.uid===a,i,"user-mismatch"),St._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&y(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(e,t,n=!1){const i="signIn",r=await xt(e,i,t),s=await St._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Pt(e,t){return $t(Ne(e),t)}async function Lt(e,t){const n=(0,r.m9)(e);return await Dt(!1,n,t.providerId),Ot(n,t)}async function Rt(e,t){return Nt((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(e,t){return U(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t){const n=Ne(e),i=await Mt(n,{token:t,returnSecureToken:!0}),r=await St._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Bt._fromServerResponse(e,t):y(e,"internal-error")}}class Bt extends Ft{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Bt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e,t,n){var i;S((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),S("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t,n){const i=(0,r.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&jt(i,s,n),await We(i,s)}async function qt(e,t,n){await Be((0,r.m9)(e),{oobCode:t,newPassword:n})}async function zt(e,t){await Ue((0,r.m9)(e),{oobCode:t})}async function Ht(e,t){const n=(0,r.m9)(e),i=await Be(n,{oobCode:t}),s=i.requestType;switch(S(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(i.mfaInfo,n,"internal-error");default:S(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Ft._fromServerResponse(Ne(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function Wt(e,t){const{data:n}=await Ht((0,r.m9)(e),t);return n.email}async function Kt(e,t,n){const i=Ne(e),r=await It(i,{returnSecureToken:!0,email:t,password:n}),s=await St._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Gt(e,t,n){return Pt((0,r.m9)(e),lt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t,n){const i=(0,r.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};S(n.handleCodeInApp,i,"argument-error"),n&&jt(i,s,n),await Ke(i,s)}function Yt(e,t){const n=ut.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Jt(e,t,n){const i=(0,r.m9)(e),s=lt.credentialWithLink(t,n||A());return S(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Pt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(e,t){return B(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){const n=O()?A():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await Qt((0,r.m9)(e),i);return s||[]}async function en(e,t){const n=(0,r.m9)(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&jt(n.auth,s,t);const{email:o}=await He(n.auth,s);o!==e.email&&await e.reload()}async function tn(e,t,n){const i=(0,r.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&jt(i.auth,o,n);const{email:a}=await Ge(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,t){return B(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(i,nn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function sn(e,t){return an((0,r.m9)(e),t,null)}function on(e,t){return an((0,r.m9)(e),null,t)}async function an(e,t,n){const{auth:i}=e,r=await e.getIdToken(),s={idToken:r,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ee(e,je(i,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null===e||void 0===e?void 0:e.idToken)){const i=null===(n=null===(t=Q(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(i){const e="anonymous"!==i&&"custom"!==i?i:null;return new un(s,e)}}if(!i)return null;switch(i){case"facebook.com":return new hn(s,r);case"github.com":return new dn(s,r);case"google.com":return new pn(s,r);case"twitter.com":return new fn(s,r,e.screenName||null);case"custom":case"anonymous":return new un(s,null);default:return new un(s,i,r)}}class un{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class ln extends un{constructor(e,t,n,i){super(e,t,n),this.username=i}}class hn extends un{constructor(e,t){super(e,"facebook.com",t)}}class dn extends ln{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class pn extends un{constructor(e,t){super(e,"google.com",t)}}class fn extends ln{constructor(e,t,n){super(e,"twitter.com",t,n)}}function mn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:cn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new gn("enroll",e)}static _fromMfaPendingCredential(e){return new gn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return gn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return gn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ne(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map((e=>Ft._fromServerResponse(n,e)));S(i.mfaPendingCredential,n,"internal-error");const s=gn._fromMfaPendingCredential(i.mfaPendingCredential);return new vn(s,r,(async e=>{const r=await e._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await St._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return S(t.user,n,"internal-error"),St._forOperation(t.user,t.operationType,o);default:y(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function yn(e,t){var n;const i=(0,r.m9)(e),s=t;return S(t.customData.operationType,i,"argument-error"),S(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),vn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function wn(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function _n(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class In{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Ft._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new In(e)}async getSession(){return gn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,i=await this.getSession(),r=await ee(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),i=await ee(this.user,_n(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(r){if("auth/user-token-expired"!==r.code)throw r}}}const Sn=new WeakMap;function En(e){const t=(0,r.m9)(e);return Sn.has(t)||Sn.set(t,In._fromUser(t)),Sn.get(t)}const Tn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Tn,"1"),this.storage.removeItem(Tn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){const e=(0,r.z$)();return ye(e)||Ee(e)}const Cn=1e3,An=10;class On extends kn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xn()&&Ae(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);xe()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,An):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Cn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}On.type="LOCAL";const Dn=On;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends kn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nn.type="SESSION";const $n=Nn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ln(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await Pn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rn(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln.receivers=[];class Mn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Rn("",20);i.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function Fn(e){Vn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return"undefined"!==typeof Vn()["WorkerGlobalScope"]&&"function"===typeof Vn()["importScripts"]}async function jn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Un(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function qn(){return Bn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="firebaseLocalStorageDb",Hn=1,Wn="firebaseLocalStorage",Kn="fbase_key";class Gn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Zn(e,t){return e.transaction([Wn],t?"readwrite":"readonly").objectStore(Wn)}function Yn(){const e=indexedDB.deleteDatabase(zn);return new Gn(e).toPromise()}function Jn(){const e=indexedDB.open(zn,Hn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Wn,{keyPath:Kn})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Wn)?t(n):(n.close(),await Yn(),t(await Jn()))}))}))}async function Qn(e,t,n){const i=Zn(e,!0).put({[Kn]:t,value:n});return new Gn(i).toPromise()}async function Xn(e,t){const n=Zn(e,!1).get(t),i=await new Gn(n).toPromise();return void 0===i?null:i.value}function ei(e,t){const n=Zn(e,!0).delete(t);return new Gn(n).toPromise()}const ti=800,ni=3;class ii{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Jn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>ni)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ln._getInstance(qn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await jn(),!this.activeServiceWorker)return;this.sender=new Mn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Un()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jn();return await Qn(e,Tn,"1"),await ei(e,Tn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Qn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Xn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ei(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Zn(e,!1).getAll();return new Gn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),ti)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ii.type="LOCAL";const ri=ii;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function oi(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(e){return(await B(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ui(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=b("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",ci().appendChild(i)}))}function li(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=500,di=6e4,pi=1e12;class fi{constructor(e){this.auth=e,this.counter=pi,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new mi(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||pi;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||pi;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||pi;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class mi{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof e?document.getElementById(e):e;S(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=gi(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),di)}),hi))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function gi(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=li("rcb"),yi=new P(3e4,6e4),bi="https://www.google.com/recaptcha/api.js?";class wi{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Vn().grecaptcha}load(e,t=""){return S(_i(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Vn().grecaptcha):new Promise(((n,i)=>{const s=Vn().setTimeout((()=>{i(b(e,"network-request-failed"))}),yi.get());Vn()[vi]=()=>{Vn().clearTimeout(s),delete Vn()[vi];const r=Vn().grecaptcha;if(!r)return void i(b(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${bi}?${(0,r.xO)({onload:vi,render:"explicit",hl:t})}`;ui(o).catch((()=>{clearTimeout(s),i(b(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Vn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _i(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Ii{async load(e){return new fi(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="recaptcha",Ei={theme:"light",type:"image"};class Ti{constructor(e,t=Object.assign({},Ei),n){this.parameters=t,this.type=Si,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ne(n),this.isInvisible="invisible"===this.parameters.size,S("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof e?document.getElementById(e):e;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Ii:new wi,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Vn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(O()&&!Bn(),this.auth,"internal-error"),await ki(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ai(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function ki(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ot._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ci(e,t,n){const i=Ne(e),s=await Di(i,t,(0,r.m9)(n));return new xi(s,(e=>Pt(i,e)))}async function Ai(e,t,n){const i=(0,r.m9)(e);await Dt(!1,i,"phone");const s=await Di(i.auth,t,(0,r.m9)(n));return new xi(s,(e=>Lt(i,e)))}async function Oi(e,t,n){const i=(0,r.m9)(e),s=await Di(i.auth,t,(0,r.m9)(n));return new xi(s,(e=>Rt(i,e)))}async function Di(e,t,n){var i;const r=await n.verify();try{let s;if(S("string"===typeof r,e,"argument-error"),S(n.type===Si,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){S("enroll"===t.type,e,"internal-error");const n=await bn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{S("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;S(n,e,"missing-multi-factor-info");const o=await si(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await tt(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}async function Ni(e,t){await Ot((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.providerId=$i.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,t){return Di(this.auth,e,(0,r.m9)(t))}static credential(e,t){return ot._fromVerification(e,t)}static credentialFromResult(e){const t=e;return $i.credentialFromTaggedObject(t)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ot._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pi(e,t){return t?x(t):(S(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$i.PROVIDER_ID="phone",$i.PHONE_SIGN_IN_METHOD="phone";class Li extends Fe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ri(e){return $t(e.auth,new Li(e),e.bypassAuthState)}function Mi(e){const{auth:t,user:n}=e;return S(n,t,"internal-error"),Nt(n,new Li(e),e.bypassAuthState)}async function Vi(e){const{auth:t,user:n}=e;return S(n,t,"internal-error"),Ot(n,new Li(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ri;case"linkViaPopup":case"linkViaRedirect":return Vi;case"reauthViaPopup":case"reauthViaRedirect":return Mi;default:y(this.auth,"internal-error")}}resolve(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new P(2e3,1e4);async function ji(e,t,n){const i=Ne(e);_(e,t,ht);const r=Pi(i,n),s=new zi(i,"signInViaPopup",t,r);return s.executeNotNull()}async function Ui(e,t,n){const i=(0,r.m9)(e);_(i.auth,t,ht);const s=Pi(i.auth,n),o=new zi(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function qi(e,t,n){const i=(0,r.m9)(e);_(i.auth,t,ht);const s=Pi(i.auth,n),o=new zi(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class zi extends Fi{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){T(1===this.filter.length,"Popup operations only handle one event");const e=Rn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(b(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Bi.get())};e()}}zi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hi="pendingRedirect",Wi=new Map;class Ki extends Fi{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Wi.get(this.auth._key());if(!e){try{const t=await Gi(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Wi.set(this.auth._key(),e)}return this.bypassAuthState||Wi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Gi(e,t){const n=Qi(t),i=Ji(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}async function Zi(e,t){return Ji(e)._set(Qi(t),"true")}function Yi(){Wi.clear()}function Ji(e){return x(e._redirectPersistence)}function Qi(e){return fe(Hi,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e,t,n){return er(e,t,n)}async function er(e,t,n){const i=Ne(e);_(e,t,ht);const r=Pi(i,n);return await Zi(r,i),r._openRedirect(i,t,"signInViaRedirect")}function tr(e,t,n){return nr(e,t,n)}async function nr(e,t,n){const i=(0,r.m9)(e);_(i.auth,t,ht);const s=Pi(i.auth,n);await Zi(s,i.auth);const o=await ar(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function ir(e,t,n){return rr(e,t,n)}async function rr(e,t,n){const i=(0,r.m9)(e);_(i.auth,t,ht);const s=Pi(i.auth,n);await Dt(!1,i,t.providerId),await Zi(s,i.auth);const o=await ar(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function sr(e,t){return await Ne(e)._initializationPromise,or(e,t,!1)}async function or(e,t,n=!1){const i=Ne(e),r=Pi(i,t),s=new Ki(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function ar(e){const t=Rn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=6e5;class ur{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!dr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!hr(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(b(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cr&&this.cachedEventUids.clear(),this.cachedEventUids.has(lr(e))}saveEventToCache(e){this.cachedEventUids.add(lr(e)),this.lastProcessedEventTime=Date.now()}}function lr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function hr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function dr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(e,t={}){return B(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mr=/^https?/;async function gr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await pr(e);for(const i of t)try{if(vr(i))return}catch(n){}y(e,"unauthorized-domain")}function vr(e){const t=A(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!mr.test(n))return!1;if(fr.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new P(3e4,6e4);function br(){const e=Vn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function wr(e){return new Promise(((t,n)=>{var i,r,s;function o(){br(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{br(),n(b(e,"network-request-failed"))},timeout:yr.get()})}if(null===(r=null===(i=Vn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Vn().gapi)||void 0===s?void 0:s.load)){const t=li("iframefcb");return Vn()[t]=()=>{gapi.load?o():n(b(e,"network-request-failed"))},ui(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw _r=null,e}))}let _r=null;function Ir(e){return _r=_r||wr(e),_r}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new P(5e3,15e3),Er="__/auth/iframe",Tr="emulator/auth/iframe",kr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cr(e){const t=e.config;S(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?L(t,Tr):`https://${e.config.authDomain}/${Er}`,i={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=xr.get(e.config.apiHost);o&&(i.eid=o);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function Ar(e){const t=await Ir(e),n=Vn().gapi;return S(n,e,"internal-error"),t.open({where:document.body,url:Cr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kr,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=b(e,"network-request-failed"),s=Vn().setTimeout((()=>{i(r)}),Sr.get());function o(){Vn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dr=500,Nr=600,$r="_blank",Pr="http://localhost";class Lr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Rr(e,t,n,i=Dr,s=Nr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Or),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=be(l)?$r:n),ve(l)&&(t=t||Pr,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ke(l)&&"_self"!==c)return Mr(t||"",c),new Lr(null);const d=window.open(t||"",c,h);S(d,e,"popup-blocked");try{d.focus()}catch(p){}return new Lr(d)}function Mr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="__/auth/handler",Fr="emulator/auth/handler";function Br(e,t,n,i,o,a){S(e.config.authDomain,e,"auth-domain-config-required"),S(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:s.SDK_VERSION,eventId:o};if(t instanceof ht){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof dt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${jr(e)}?${(0,r.xO)(u).slice(1)}`}function jr({config:e}){return e.emulator?L(e,Fr):`https://${e.authDomain}/${Vr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="webStorageSupport";class qr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$n,this._completeRedirectFn=or}async _openPopup(e,t,n,i){var r;T(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Br(e,t,n,A(),i);return Rr(e,s,Rn())}async _openRedirect(e,t,n,i){return await this._originValidation(e),Fn(Br(e,t,n,A(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(T(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ar(e),n=new ur(e);return t.register("authEvent",(t=>{S(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Ur,{type:Ur},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Ur];void 0!==r&&t(!!r),y(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ye()||Ee()}}const zr=qr;class Hr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class Wr extends Hr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Wr(e)}_finalizeEnroll(e,t,n){return wn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return oi(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Kr{constructor(){}static assertion(e){return Wr._fromCredential(e)}}Kr.FACTOR_ID="phone";var Gr="@firebase/auth",Zr="0.19.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qr(e){(0,s._registerComponent)(new c.wA("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((t,i)=>{S(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),S(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oe(e)},a=new De(t,i,r);return C(a,n),a})(i,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(e=>{const t=Ne(e.getProvider("auth").getImmediate());return(e=>new Yr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Gr,Zr,Jr(e)),(0,s.registerVersion)(Gr,Zr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qr("Browser");const es=2e3;async function ts(e,t,n){var i;const{BuildInfo:r}=Xr();T(t.sessionId,"AuthEvent did not contain a session ID");const s=await os(t.sessionId),o={};return Ee()?o["ibi"]=r.packageName:_e()?o["apn"]=r.packageName:y(e,"operation-not-supported-in-this-environment"),r.displayName&&(o["appDisplayName"]=r.displayName),o["sessionId"]=s,Br(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,o)}async function ns(e){const{BuildInfo:t}=Xr(),n={};Ee()?n.iosBundleId=t.packageName:_e()?n.androidPackageName=t.packageName:y(e,"operation-not-supported-in-this-environment"),await pr(e,n)}function is(e){const{cordova:t}=Xr();return new Promise((n=>{t.plugins.browsertab.isAvailable((i=>{let r=null;i?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,Te()?"_blank":"_system","location=yes"),n(r)}))}))}async function rs(e,t,n){const{cordova:i}=Xr();let r=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(b(e,"redirect-cancelled-by-user"))}),es))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),_e()&&document.addEventListener("visibilitychange",l,!1),r=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{r()}}function ss(e){var t,n,i,r,s,o,a,c,u,l;const h=Xr();S("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S("function"===typeof(null===(s=null===(r=null===(i=null===h||void 0===h?void 0:h.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function os(e){const t=as(e),n=await crypto.subtle.digest("SHA-256",t),i=Array.from(new Uint8Array(n));return i.map((e=>e.toString(16).padStart(2,"0"))).join("")}function as(e){if(T(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=20;class us extends ur{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function ls(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:fs(),postBody:null,tenantId:e.tenantId,error:b(e,"no-auth-event")}}function hs(e,t){return ms()._set(gs(e),t)}async function ds(e){const t=await ms()._get(gs(e));return t&&await ms()._remove(gs(e)),t}function ps(e,t){var n,i;const r=ys(t);if(r.includes("/__/auth/callback")){const t=bs(r),s=t["firebaseError"]?vs(decodeURIComponent(t["firebaseError"])):null,o=null===(i=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?b(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function fs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<cs;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ms(){return x(Dn)}function gs(e){return fe("authEvent",e.config.apiKey,e.name)}function vs(e){try{return JSON.parse(e)}catch(t){return null}}function ys(e){const t=bs(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,i=bs(n)["link"],r=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=bs(r)["link"];return s||r||i||n||e}function bs(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,r.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=500;class _s{constructor(){this._redirectPersistence=$n,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=or}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new us(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){y(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){ss(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),Yi(),await this._originValidation(e);const s=ls(e,n,i);await hs(e,s);const o=await ts(e,s,t),a=await is(o);return rs(e,r,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ns(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=Xr(),s=setTimeout((async()=>{await ds(e),t.onEvent(Ss())}),ws),o=async n=>{clearTimeout(s);const i=await ds(e);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=ps(i,n["url"])),t.onEvent(r||Ss())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=i,c=`${r.packageName.toLowerCase()}://`;Xr().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Is=_s;function Ss(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:b("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e,t){Ne(e)._logFramework(t)}var Ts="@firebase/auth-compat",ks="0.2.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xs=1e3;function Cs(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function As(){return"http:"===Cs()||"https:"===Cs()}function Os(e=(0,r.z$)()){return!("file:"!==Cs()&&"ionic:"!==Cs()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ds(){return(0,r.b$)()||(0,r.UG)()}function Ns(){return(0,r.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function $s(e=(0,r.z$)()){return/Edge\/\d+/.test(e)}function Ps(e=(0,r.z$)()){return Ns()||$s(e)}function Ls(){try{const e=self.localStorage,t=Rn();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!Ps()||(0,r.hl)()}catch(e){return Rs()&&(0,r.hl)()}return!1}function Rs(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Ms(){return(As()||(0,r.ru)()||Os())&&!Ds()&&Ls()&&!Rs()}function Vs(){return Os()&&"undefined"!==typeof document}async function Fs(){return!!Vs()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),xs);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function Bs(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js={LOCAL:"local",NONE:"none",SESSION:"session"},Us=S,qs="persistence";function zs(e,t){Us(Object.values(js).includes(t),e,"invalid-persistence-type"),(0,r.b$)()?Us(t!==js.SESSION,e,"unsupported-persistence-type"):(0,r.UG)()?Us(t===js.NONE,e,"unsupported-persistence-type"):Rs()?Us(t===js.NONE||t===js.LOCAL&&(0,r.hl)(),e,"unsupported-persistence-type"):Us(t===js.NONE||Ls(),e,"unsupported-persistence-type")}async function Hs(e){await e._initializationPromise;const t=Ks(),n=fe(qs,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function Ws(e,t){const n=Ks();if(!n)return[];const i=fe(qs,e,t),r=n.getItem(i);switch(r){case js.NONE:return[pe];case js.LOCAL:return[ri,$n];case js.SESSION:return[$n];default:return[]}}function Ks(){var e;try{return(null===(e=Bs())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=S;class Zs{constructor(){this.browserResolver=x(zr),this.cordovaResolver=x(Is),this.underlyingResolver=null,this._redirectPersistence=$n,this._completeRedirectFn=or}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Vs()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Gs(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Fs();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(e){return e.unwrap()}function Js(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(e){return eo(e)}function Xs(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new io(e,yn(e,t))}else if(i){const e=eo(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function eo(e){const{_tokenResponse:t}=e instanceof r.ZR?e.customData:e;if(!t)return null;if(!(e instanceof r.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return $i.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let i;switch(n){case u.GOOGLE:i=mt;break;case u.FACEBOOK:i=ft;break;case u.GITHUB:i=gt;break;case u.TWITTER:i=_t;break;default:const{oauthIdToken:e,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return r||s||e||o?o?n.startsWith("saml.")?yt._create(n,o):et._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:r}):new pt(n).credential({idToken:e,accessToken:r,rawNonce:a}):null}return e instanceof r.ZR?i.credentialFromError(e):i.credentialFromResult(e)}function to(e,t){return t.catch((t=>{throw t instanceof r.ZR&&Xs(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:Qs(e),additionalUserInfo:mn(e),user:ro.getOrCreate(n)}}))}async function no(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>to(e,n.confirm(t))}}class io{constructor(e,t){this.resolver=t,this.auth=Js(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return to(Ys(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this._delegate=e,this.multiFactor=En(e)}static getOrCreate(e){return ro.USER_MAP.has(e)||ro.USER_MAP.set(e,new ro(e)),ro.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return to(this.auth,Lt(this._delegate,e))}async linkWithPhoneNumber(e,t){return no(this.auth,Ai(this._delegate,e,t))}async linkWithPopup(e){return to(this.auth,qi(this._delegate,e,Zs))}async linkWithRedirect(e){return await Hs(Ne(this.auth)),ir(this._delegate,e,Zs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return to(this.auth,Rt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return no(this.auth,Oi(this._delegate,e,t))}reauthenticateWithPopup(e){return to(this.auth,Ui(this._delegate,e,Zs))}async reauthenticateWithRedirect(e){return await Hs(Ne(this.auth)),tr(this._delegate,e,Zs)}sendEmailVerification(e){return en(this._delegate,e)}async unlink(e){return await At(this._delegate,e),this}updateEmail(e){return sn(this._delegate,e)}updatePassword(e){return on(this._delegate,e)}updatePhoneNumber(e){return Ni(this._delegate,e)}updateProfile(e){return rn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return tn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ro.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const so=S;class oo{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;so(n,"invalid-api-key",{appName:e.name}),so(n,"invalid-api-key",{appName:e.name});const i="undefined"!==typeof window?Zs:void 0;this._delegate=t.initialize({options:{persistence:co(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(p),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ro.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Pe(this._delegate,e,t)}applyActionCode(e){return zt(this._delegate,e)}checkActionCode(e){return Ht(this._delegate,e)}confirmPasswordReset(e,t){return qt(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return to(this._delegate,Kt(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Xt(this._delegate,e)}isSignInWithEmailLink(e){return Yt(this._delegate,e)}async getRedirectResult(){so(Ms(),this._delegate,"operation-not-supported-in-this-environment");const e=await sr(this._delegate,Zs);return e?to(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Es(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:s}=ao(e,t,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:s}=ao(e,t,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(e,t){return Zt(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Ut(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(zs(this._delegate,e),e){case js.SESSION:t=$n;break;case js.LOCAL:const e=await x(ri)._isAvailable();t=e?ri:Dn;break;case js.NONE:t=pe;break;default:return y("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return to(this._delegate,Tt(this._delegate))}signInWithCredential(e){return to(this._delegate,Pt(this._delegate,e))}signInWithCustomToken(e){return to(this._delegate,Vt(this._delegate,e))}signInWithEmailAndPassword(e,t){return to(this._delegate,Gt(this._delegate,e,t))}signInWithEmailLink(e,t){return to(this._delegate,Jt(this._delegate,e,t))}signInWithPhoneNumber(e,t){return no(this._delegate,Ci(this._delegate,e,t))}async signInWithPopup(e){return so(Ms(),this._delegate,"operation-not-supported-in-this-environment"),to(this._delegate,ji(this._delegate,e,Zs))}async signInWithRedirect(e){return so(Ms(),this._delegate,"operation-not-supported-in-this-environment"),await Hs(this._delegate),Xi(this._delegate,e,Zs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Wt(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function ao(e,t,n){let i=e;"function"!==typeof e&&({next:i,error:t,complete:n}=e);const r=i,s=e=>r(e&&ro.getOrCreate(e));return{next:s,error:t,complete:n}}function co(e,t){const n=Ws(e,t);if("undefined"===typeof self||n.includes(ri)||n.push(ri),"undefined"!==typeof window)for(const i of[Dn,$n])n.includes(i)||n.push(i);return n.includes(pe)||n.push(pe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oo.Persistence=js;class uo{constructor(){this.providerId="phone",this._delegate=new $i(Ys(i.Z.auth()))}static credential(e,t){return $i.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}uo.PHONE_SIGN_IN_METHOD=$i.PHONE_SIGN_IN_METHOD,uo.PROVIDER_ID=$i.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lo=S;class ho{constructor(e,t,n=i.Z.app()){var r;lo(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Ti(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="auth-compat";function fo(e){e.INTERNAL.registerComponent(new c.wA(po,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new oo(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:lt,FacebookAuthProvider:ft,GithubAuthProvider:gt,GoogleAuthProvider:mt,OAuthProvider:pt,SAMLAuthProvider:wt,PhoneAuthProvider:uo,PhoneMultiFactorGenerator:Kr,RecaptchaVerifier:ho,TwitterAuthProvider:_t,Auth:oo,AuthCredential:Fe,Error:r.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Ts,ks)}fo(i.Z)},6621:function(e,t,n){"use strict";var i,r=n(8180),s=n(2238),o=n(8463),a=n(3333),c=n(4444),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function p(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,v)&&e[v]||(e[v]=++y)}var v="closure_uid_"+(1e9*Math.random()>>>0),y=0;function b(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?b:w,_.apply(null,arguments)}function I(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function S(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function E(){this.s=this.s,this.o=this.o}var T=0,k={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=T)){var e=g(this);delete k[e]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const x=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},C=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,r="string"===typeof e?e.split(""):e;for(let s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};function A(e){e:{var t=Kn;const n=e.length,i="string"===typeof e?e.split(""):e;for(let r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function O(e){return Array.prototype.concat.apply([],arguments)}function D(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function N(e){return/^[\s\xa0]*$/.test(e)}var $,P=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function L(e,t){return-1!=e.indexOf(t)}function R(e,t){return e<t?-1:e>t?1:0}e:{var M=d.navigator;if(M){var V=M.userAgent;if(V){$=V;break e}}$=""}function F(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function B(e){const t={};for(const n in e)t[n]=e[n];return t}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(e,t){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)e[n]=i[n];for(let t=0;t<j.length;t++)n=j[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function q(e){return q[" "](e),e}function z(e){var t=ie;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}q[" "]=p;var H,W=L($,"Opera"),K=L($,"Trident")||L($,"MSIE"),G=L($,"Edge"),Z=G||K,Y=L($,"Gecko")&&!(L($.toLowerCase(),"webkit")&&!L($,"Edge"))&&!(L($,"Trident")||L($,"MSIE"))&&!L($,"Edge"),J=L($.toLowerCase(),"webkit")&&!L($,"Edge");function Q(){var e=d.document;return e?e.documentMode:void 0}e:{var X="",ee=function(){var e=$;return Y?/rv:([^\);]+)(\)|;)/.exec(e):G?/Edge\/([\d\.]+)/.exec(e):K?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):J?/WebKit\/(\S+)/.exec(e):W?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(ee&&(X=ee?ee[1]:""),K){var te=Q();if(null!=te&&te>parseFloat(X)){H=String(te);break e}}H=X}var ne,ie={};function re(){return z((function(){let e=0;const t=P(String(H)).split("."),n=P("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=R(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||R(0==r[2].length,0==s[2].length)||R(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(d.document&&K){var se=Q();ne=se||(parseInt(H,10)||void 0)}else ne=void 0;var oe=ne,ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",p,t),d.removeEventListener("test",p,t)}catch(n){}return e}();function ce(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ue(e,t){if(ce.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Y){e:{try{q(t.nodeName);var r=!0;break e}catch(s){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:le[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ue.Z.h.call(this)}}ce.prototype.h=function(){this.defaultPrevented=!0},S(ue,ce);var le={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),de=0;function pe(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=r,this.key=++de,this.ca=this.fa=!1}function fe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function me(e){this.src=e,this.g={},this.h=0}function ge(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=x(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(fe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ve(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==i)return r}return-1}me.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ve(e,t,i,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new pe(t,this.src,s,!!i,r),t.fa=n,e.push(t)),t};var ye="closure_lm_"+(1e6*Math.random()|0),be={};function we(e,t,n,i,r){if(i&&i.once)return Se(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)we(e,t[s],n,i,r);return null}return n=Oe(n),e&&e[he]?e.N(t,n,m(i)?!!i.capture:!!i,r):_e(e,t,n,!1,i,r)}function _e(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=m(r)?!!r.capture:!!r,a=Ce(e);if(a||(e[ye]=a=new me(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=Ie(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)ae||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(ke(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function Ie(){function e(n){return t.call(e.src,e.listener,n)}var t=xe;return e}function Se(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Se(e,t[s],n,i,r);return null}return n=Oe(n),e&&e[he]?e.O(t,n,m(i)?!!i.capture:!!i,r):_e(e,t,n,!0,i,r)}function Ee(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ee(e,t[s],n,i,r);else i=m(i)?!!i.capture:!!i,n=Oe(n),e&&e[he]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ve(s,n,i,r),-1<n&&(fe(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ce(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ve(t,n,i,r)),(n=-1<e?t[e]:null)&&Te(n))}function Te(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[he])ge(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ke(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Ce(t))?(ge(n,e),0==n.h&&(n.src=null,t[ye]=null)):fe(e)}}}function ke(e){return e in be?be[e]:be[e]="on"+e}function xe(e,t){if(e.ca)e=!0;else{t=new ue(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&Te(e),e=n.call(i,t)}return e}function Ce(e){return e=e[ye],e instanceof me?e:null}var Ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oe(e){return"function"===typeof e?e:(e[Ae]||(e[Ae]=function(t){return e.handleEvent(t)}),e[Ae])}function De(){E.call(this),this.i=new me(this),this.P=this,this.I=null}function Ne(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"===typeof t)t=new ce(t,e);else if(t instanceof ce)t.target=t.target||e;else{var r=t;t=new ce(i,e),U(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=$e(o,i,!0,t)&&r}if(o=t.g=e,r=$e(o,i,!0,t)&&r,r=$e(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=$e(o,i,!1,t)&&r}function $e(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ge(e.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}S(De,E),De.prototype[he]=!0,De.prototype.removeEventListener=function(e,t,n,i){Ee(this,e,t,n,i)},De.prototype.M=function(){if(De.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)fe(n[i]);delete t.g[e],t.h--}}this.I=null},De.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},De.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Pe=d.JSON.stringify;function Le(){var e=ze;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Re{constructor(){this.h=this.g=null}add(e,t){const n=Ve.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Me,Ve=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Fe),(e=>e.reset()));class Fe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Be(e){d.setTimeout((()=>{throw e}),0)}function je(e,t){Me||Ue(),qe||(Me(),qe=!0),ze.add(e,t)}function Ue(){var e=d.Promise.resolve(void 0);Me=function(){e.then(He)}}var qe=!1,ze=new Re;function He(){for(var e;e=Le();){try{e.h.call(e.g)}catch(n){Be(n)}var t=Ve;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}qe=!1}function We(e,t){De.call(this),this.h=e||1,this.g=t||d,this.j=_(this.kb,this),this.l=Date.now()}function Ke(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ge(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Ze(e){e.g=Ge((()=>{e.g=null,e.i&&(e.i=!1,Ze(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}S(We,De),i=We.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ne(this,"tick"),this.da&&(Ke(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){We.Z.M.call(this),Ke(this),delete this.g};class Ye extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ze(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(e){E.call(this),this.h=e,this.g={}}S(Je,E);var Qe=[];function Xe(e,t,n,i){Array.isArray(n)||(n&&(Qe[0]=n.toString()),n=Qe);for(var r=0;r<n.length;r++){var s=we(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function et(e){F(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Te(e)}),e),e.g={}}function tt(){this.g=!0}function nt(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}function it(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function rt(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+ot(e,n)+(i?" "+i:"")}))}function st(e,t){e.info((function(){return"TIMEOUT: "+t}))}function ot(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Pe(n)}catch(a){return t}}Je.prototype.M=function(){Je.Z.M.call(this),et(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tt.prototype.Aa=function(){this.g=!1},tt.prototype.info=function(){};var at={},ct=null;function ut(){return ct=ct||new De}function lt(e){ce.call(this,at.Ma,e)}function ht(e){const t=ut();Ne(t,new lt(t,e))}function dt(e,t){ce.call(this,at.STAT_EVENT,e),this.stat=t}function pt(e){const t=ut();Ne(t,new dt(t,e))}function ft(e,t){ce.call(this,at.Na,e),this.size=t}function mt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}at.Ma="serverreachability",S(lt,ce),at.STAT_EVENT="statevent",S(dt,ce),at.Na="timingevent",S(ft,ce);var gt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},vt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function yt(){}function bt(e){return e.h||(e.h=e.i())}function wt(){}yt.prototype.h=null;var _t,It={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function St(){ce.call(this,"d")}function Et(){ce.call(this,"c")}function Tt(){}function kt(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new Je(this),this.P=Ct,e=Z?125:void 0,this.W=new We(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new xt}function xt(){this.i=null,this.g="",this.h=!1}S(St,ce),S(Et,ce),S(Tt,yt),Tt.prototype.g=function(){return new XMLHttpRequest},Tt.prototype.i=function(){return{}},_t=new Tt;var Ct=45e3,At={},Ot={};function Dt(e,t,n){e.K=1,e.v=nn(Yt(t)),e.s=n,e.U=!0,Nt(e,null)}function Nt(e,t){e.F=Date.now(),Rt(e),e.A=Yt(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),yn(n.h,"t",i),e.C=0,n=e.l.H,e.h=new xt,e.g=Ei(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ye(_(e.Ia,e,e.g),e.O)),Xe(e.V,e.g,"readystatechange",e.gb),t=e.H?B(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ht(1),nt(e.j,e.u,e.A,e.m,e.X,e.s)}function $t(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Pt(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=Lt(e,n),i==Ot){4==t&&(e.o=4,pt(14),r=!1),rt(e.j,e.m,null,"[Incomplete Response]");break}if(i==At){e.o=4,pt(15),rt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}rt(e.j,e.m,i,null),jt(e,i)}$t(e)&&i!=Ot&&i!=At&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,pt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gi(t),t.L=!0,pt(11))):(rt(e.j,e.m,n,"[Invalid Chunked Response]"),Bt(e),Ft(e))}function Lt(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?Ot:(n=Number(t.substring(n,i)),isNaN(n)?At:(i+=1,i+n>t.length?Ot:(t=t.substr(i,n),e.C=i+n,t)))}function Rt(e){e.Y=Date.now()+e.P,Mt(e,e.P)}function Mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=mt(_(e.eb,e),t)}function Vt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Ft(e){0==e.l.G||e.I||bi(e.l,e)}function Bt(e){Vt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ke(e.W),et(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||kn(n.i,e)))if(n.I=e.N,!e.J&&kn(n.i,e)&&3==n.G){try{var i=n.Ca.g.parse(t)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;yi(n),oi(n)}mi(n),pt(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=mt(_(n.ab,n),6e3));if(1>=Tn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else _i(n,11)}else if((e.J||n.g==e)&&yi(n),!N(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const r=u[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(i=1.5*l,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;!s.g&&(L(e,"spdy")||L(e,"quic")||L(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(xn(s,s.h),s.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.sa=e,tn(i.F,i.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=e;if(i.oa=Si(i,i.H?i.la:null,i.W),o.J){Cn(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Vt(a),Rt(a)),i.g=o}else fi(i);0<n.l.length&&ui(n)}else"stop"!=u[0]&&"close"!=u[0]||_i(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?_i(n,7):si(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ht(4)}catch(u){}}function Ut(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}function qt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)C(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(f(e)||"string"===typeof e){n=[];for(var i=e.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,e)n[i++]=r;i=Ut(e),r=i.length;for(var s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}}function zt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof zt)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function Ht(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];Wt(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)i=e.g[t],Wt(r,i)||(e.g[n++]=i,r[i]=1),t++;e.g.length=n}}function Wt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}i=kt.prototype,i.setTimeout=function(e){this.P=e},i.gb=function(e){e=e.target;const t=this.L;t&&3==Xn(e)?t.l():this.Ia(e)},i.Ia=function(e){try{if(e==this.g)e:{const l=Xn(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||Z||this.g&&(this.h.h||this.g.ga()||ei(this.g)))){this.I||4!=l||7==t||ht(8==t||0>=h?3:2),Vt(this);var n=this.g.ba();this.N=n;t:if($t(this)){var i=ei(this.g);e="";var r=i.length,s=4==Xn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Bt(this),Ft(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,it(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,pt(12),Bt(this),Ft(this);break e}rt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jt(this,n)}this.U?(Pt(this,l,o),Z&&this.i&&3==l&&(Xe(this.V,this.W,"tick",this.fb),this.W.start())):(rt(this.j,this.m,o,null),jt(this,o)),4==l&&Bt(this),this.i&&!this.I&&(4==l?bi(this.l,this):(this.i=!1,Rt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),Bt(this),Ft(this)}}}catch(l){}},i.fb=function(){if(this.g){var e=Xn(this.g),t=this.g.ga();this.C<t.length&&(Vt(this),Pt(this,e,t),this.i&&4!=e&&Rt(this))}},i.cancel=function(){this.I=!0,Bt(this)},i.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(st(this.j,this.A),2!=this.K&&(ht(3),pt(17)),Bt(this),this.o=2,Ft(this)):Mt(this,this.Y-e)},i=zt.prototype,i.R=function(){Ht(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},i.T=function(){return Ht(this),this.g.concat()},i.get=function(e,t){return Wt(this.h,e)?this.h[e]:t},i.set=function(e,t){Wt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},i.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}};var Kt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Gt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Zt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Zt){this.g=void 0!==t?t:e.g,Jt(this,e.j),this.s=e.s,Qt(this,e.i),Xt(this,e.m),this.l=e.l,t=e.h;var n=new fn;n.i=t.i,t.g&&(n.g=new zt(t.g),n.h=t.h),en(this,n),this.o=e.o}else e&&(n=String(e).match(Kt))?(this.g=!!t,Jt(this,n[1]||"",!0),this.s=on(n[2]||""),Qt(this,n[3]||"",!0),Xt(this,n[4]),this.l=on(n[5]||"",!0),en(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!t,this.h=new fn(null,this.g))}function Yt(e){return new Zt(e)}function Jt(e,t,n){e.j=n?on(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Qt(e,t,n){e.i=n?on(t,!0):t}function Xt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function en(e,t,n){t instanceof fn?(e.h=t,wn(e.h,e.g)):(n||(t=an(t,dn)),e.h=new fn(t,e.g))}function tn(e,t,n){e.h.set(t,n)}function nn(e){return tn(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rn(e){return e instanceof Zt?Yt(e):new Zt(e,void 0)}function sn(e,t,n,i){var r=new Zt(null,void 0);return e&&Jt(r,e),t&&Qt(r,t),n&&Xt(r,n),i&&(r.l=i),r}function on(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function an(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,cn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function cn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Zt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(an(t,un,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(an(t,un,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(an(n,"/"==n.charAt(0)?hn:ln,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",an(n,pn)),e.join("")};var un=/[#\/\?@]/g,ln=/[#\?:]/g,hn=/[#\?]/g,dn=/[#\?@]/g,pn=/#/g;function fn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mn(e){e.g||(e.g=new zt,e.h=0,e.i&&Gt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function gn(e,t){mn(e),t=bn(e,t),Wt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Wt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ht(e)))}function vn(e,t){return mn(e),t=bn(e,t),Wt(e.g.h,t)}function yn(e,t,n){gn(e,t),0<n.length&&(e.i=null,e.g.set(bn(e,t),D(n)),e.h+=n.length)}function bn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function wn(e,t){t&&!e.j&&(mn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(gn(this,t),yn(this,n,e))}),e)),e.j=t}i=fn.prototype,i.add=function(e,t){mn(this),this.i=null,e=bn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},i.forEach=function(e,t){mn(this),this.g.forEach((function(n,i){C(n,(function(n){e.call(t,n,i,this)}),this)}),this)},i.T=function(){mn(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},i.R=function(e){mn(this);var t=[];if("string"===typeof e)vn(this,e)&&(t=O(t,this.g.get(bn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=O(t,e[n])}return t},i.set=function(e,t){return mn(this),this.i=null,e=bn(this,e),vn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},i.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.i=e.join("&")};var _n=class{constructor(e,t){this.h=e,this.g=t}};function In(e){this.l=e||Sn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Sn=10;function En(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Tn(e){return e.h?1:e.g?e.g.size:0}function kn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function xn(e,t){e.g?e.g.add(t):e.h=t}function Cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function An(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return D(e.i)}function On(){}function Dn(){this.g=new On}function Nn(e,t,n){const i=n||"";try{qt(e,(function(e,n){let r=e;m(e)&&(r=Pe(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function $n(e,t){const n=new tt;if(d.Image){const i=new Image;i.onload=I(Pn,n,i,"TestLoadImage: loaded",!0,t),i.onerror=I(Pn,n,i,"TestLoadImage: error",!1,t),i.onabort=I(Pn,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=I(Pn,n,i,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}function Pn(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(s){}}function Ln(e){this.l=e.$b||null,this.j=e.ib||!1}function Rn(e,t){De.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}In.prototype.cancel=function(){if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},On.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},On.prototype.parse=function(e){return d.JSON.parse(e,void 0)},S(Ln,yt),Ln.prototype.g=function(){return new Rn(this.l,this.j)},Ln.prototype.i=function(e){return function(){return e}}({}),S(Rn,De);var Mn=0;function Vn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Fn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Bn(e)}function Bn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}i=Rn.prototype,i.open=function(e,t){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Bn(this)},i.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||d).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fn(this)),this.readyState=Mn},i.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Fn(this):Bn(this),3==this.readyState&&Vn(this)}},i.Ua=function(e){this.g&&(this.response=this.responseText=e,Fn(this))},i.Ta=function(e){this.g&&(this.response=e,Fn(this))},i.ha=function(){this.g&&Fn(this)},i.setRequestHeader=function(e,t){this.v.append(e,t)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var jn=d.JSON.parse;function Un(e){De.call(this),this.headers=new zt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qn,this.K=this.L=!1}S(Un,De);var qn="",zn=/^https?$/i,Hn=["POST","PUT"];function Wn(e){return K&&re()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Kn(e){return"content-type"==e.toLowerCase()}function Gn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Zn(e),Jn(e)}function Zn(e){e.D||(e.D=!0,Ne(e,"complete"),Ne(e,"error"))}function Yn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=Xn(e)||2!=e.ba()))if(e.v&&4==Xn(e))Ge(e.Fa,0,e);else if(Ne(e,"readystatechange"),4==Xn(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===c){var r=String(e.H).match(Kt)[1]||null;if(!r&&d.self&&d.self.location){var s=d.self.location.protocol;r=s.substr(0,s.length-1)}i=!zn.test(r?r.toLowerCase():"")}n=i}if(n)Ne(e,"complete"),Ne(e,"success");else{e.m=6;try{var o=2<Xn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Zn(e)}}finally{Jn(e)}}}function Jn(e,t){if(e.g){Qn(e);const i=e.g,r=e.C[0]?p:null;e.g=null,e.C=null,t||Ne(e,"ready");try{i.onreadystatechange=r}catch(n){}}}function Qn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Xn(e){return e.g?e.g.readyState:0}function ei(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case qn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ti(e){let t="";return F(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function ni(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ti(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):tn(e,t,n))}function ii(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ri(e){this.za=0,this.l=[],this.h=new tt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ii("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ii("baseRetryDelayMs",5e3,e),this.$a=ii("retryDelaySeedMs",1e4,e),this.Ya=ii("forwardChannelMaxRetries",2,e),this.ra=ii("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new In(e&&e.concurrentRequestLimit),this.Ca=new Dn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function si(e){if(ai(e),3==e.G){var t=e.V++,n=Yt(e.F);tn(n,"SID",e.J),tn(n,"RID",t),tn(n,"TYPE","terminate"),di(e,n),t=new kt(e,e.h,t,void 0),t.K=2,t.v=nn(Yt(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=Ei(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Rt(t)}Ii(e)}function oi(e){e.g&&(gi(e),e.g.cancel(),e.g=null)}function ai(e){oi(e),e.u&&(d.clearTimeout(e.u),e.u=null),yi(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function ci(e,t){e.l.push(new _n(e.Za++,t)),3==e.G&&ui(e)}function ui(e){En(e.i)||e.m||(e.m=!0,je(e.Ha,e),e.C=0)}function li(e,t){return!(Tn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=mt(_(e.Ha,e,t),wi(e,e.C)),e.C++,!0))}function hi(e,t){var n;n=t?t.m:e.V++;const i=Yt(e.F);tn(i,"SID",e.J),tn(i,"RID",n),tn(i,"AID",e.U),di(e,i),e.o&&e.s&&ni(i,e.o,e.s),n=new kt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=pi(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),xn(e.i,n),Dt(n,i,t)}function di(e,t){e.j&&qt({},(function(e,n){tn(t,n,e)}))}function pi(e,t,n){n=Math.min(e.l.length,n);var i=e.j?_(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),s=!1;else try{Nn(a,e,"req"+n+"_")}catch(Xi){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function fi(e){e.g||e.u||(e.Y=1,je(e.Ga,e),e.A=0)}function mi(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=mt(_(e.Ga,e),wi(e,e.A)),e.A++,!0)}function gi(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function vi(e){e.g=new kt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Yt(e.oa);tn(t,"RID","rpc"),tn(t,"SID",e.J),tn(t,"CI",e.N?"0":"1"),tn(t,"AID",e.U),di(e,t),tn(t,"TYPE","xmlhttp"),e.o&&e.s&&ni(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=nn(Yt(t)),n.s=null,n.U=!0,Nt(n,e)}function yi(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function bi(e,t){var n=null;if(e.g==t){yi(e),gi(e),e.g=null;var i=2}else{if(!kn(e.i,t))return;n=t.D,Cn(e.i,t),i=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;i=ut(),Ne(i,new ft(i,n,t,r)),ui(e)}else fi(e);else if(r=t.o,3==r||0==r&&0<e.I||!(1==i&&li(e,t)||2==i&&mi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:_i(e,5);break;case 4:_i(e,10);break;case 3:_i(e,6);break;default:_i(e,2)}}function wi(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function _i(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var i=_(e.jb,e);n||(n=new Zt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Jt(n,"https"),nn(n)),$n(n.toString(),i)}else pt(2);e.G=0,e.j&&e.j.va(t),Ii(e),ai(e)}function Ii(e){e.G=0,e.I=-1,e.j&&(0==An(e.i).length&&0==e.l.length||(e.i.i.length=0,D(e.l),e.l.length=0),e.j.ua())}function Si(e,t,n){let i=rn(n);if(""!=i.i)t&&Qt(i,t+"."+i.i),Xt(i,i.m);else{const e=d.location;i=sn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&F(e.aa,(function(e,t){tn(i,t,e)})),t=e.D,n=e.sa,t&&n&&tn(i,t,n),tn(i,"VER",e.ma),di(e,i),i}function Ei(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Un(new Ln({ib:!0})):new Un(e.qa),t.L=e.H,t}function Ti(){}function ki(){if(K&&!(10<=Number(oe)))throw Error("Environmental error: no available transport.")}function xi(e,t){De.call(this),this.g=new ri(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!N(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!N(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Oi(this)}function Ci(e){St.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ai(){Et.call(this),this.status=1}function Oi(e){this.g=e}i=Un.prototype,i.ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_t.g(),this.C=this.u?bt(this.u):bt(_t),this.g.onreadystatechange=_(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Gn(this,s)}e=n||"";const r=new zt(this.headers);i&&qt(i,(function(e,t){r.set(t,e)})),i=A(r.T()),n=d.FormData&&e instanceof d.FormData,!(0<=x(Hn,t))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qn(this),0<this.B&&((this.K=Wn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.pa,this)):this.A=Ge(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Gn(this,s)}},i.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ne(this,"timeout"),this.abort(8))},i.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ne(this,"complete"),Ne(this,"abort"),Jn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jn(this,!0)),Un.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Yn(this):this.cb())},i.cb=function(){Yn(this)},i.ba=function(){try{return 2<Xn(this)?this.g.status:-1}catch(e){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),jn(t)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=ri.prototype,i.ma=8,i.G=1,i.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},i.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new kt(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=B(s),U(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(t+=i,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=pi(this,r,t),n=Yt(this.F),tn(n,"RID",e),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),di(this,n),this.o&&s&&ni(n,this.o,s),xn(this.i,r),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",t),tn(n,"SID","null"),r.$=!0,Dt(r,n,null)):Dt(r,n,t),this.G=2}}else 3==this.G&&(e?hi(this,e):0==this.l.length||En(this.i)||hi(this))},i.Ga=function(){if(this.u=null,vi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=mt(_(this.bb,this),e)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,pt(10),oi(this),vi(this))},i.ab=function(){null!=this.v&&(this.v=null,oi(this),mi(this),pt(19))},i.jb=function(e){e?(this.h.info("Successfully pinged google.com"),pt(2)):(this.h.info("Failed to ping google.com"),pt(1))},i=Ti.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},ki.prototype.g=function(e,t){return new xi(e,t)},S(xi,De),xi.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),je(_(e.hb,e,t))),pt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Si(e,null,e.W),ui(e)},xi.prototype.close=function(){si(this.g)},xi.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,ci(this.g,t)}else this.v?(t={},t.__data__=Pe(e),ci(this.g,t)):ci(this.g,e)},xi.prototype.M=function(){this.g.j=null,delete this.j,si(this.g),delete this.g,xi.Z.M.call(this)},S(Ci,St),S(Ai,Et),S(Oi,Ti),Oi.prototype.xa=function(){Ne(this.g,"a")},Oi.prototype.wa=function(e){Ne(this.g,new Ci(e))},Oi.prototype.va=function(e){Ne(this.g,new Ai(e))},Oi.prototype.ua=function(){Ne(this.g,"b")},ki.prototype.createWebChannel=ki.prototype.g,xi.prototype.send=xi.prototype.u,xi.prototype.open=xi.prototype.m,xi.prototype.close=xi.prototype.close,gt.NO_ERROR=0,gt.TIMEOUT=8,gt.HTTP_ERROR=6,vt.COMPLETE="complete",wt.EventType=It,It.OPEN="a",It.CLOSE="b",It.ERROR="c",It.MESSAGE="d",De.prototype.listen=De.prototype.N,Un.prototype.listenOnce=Un.prototype.O,Un.prototype.getLastError=Un.prototype.La,Un.prototype.getLastErrorCode=Un.prototype.Da,Un.prototype.getStatus=Un.prototype.ba,Un.prototype.getResponseJson=Un.prototype.Qa,Un.prototype.getResponseText=Un.prototype.ga,Un.prototype.send=Un.prototype.ea;var Di=l.createWebChannelTransport=function(){return new ki},Ni=l.getStatEventTarget=function(){return ut()},$i=l.ErrorCode=gt,Pi=l.EventType=vt,Li=l.Event=at,Ri=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mi=l.FetchXmlHttpFactory=Ln,Vi=l.WebChannel=wt,Fi=l.XhrIo=Un;const Bi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ji.UNAUTHENTICATED=new ji(null),ji.GOOGLE_CREDENTIALS=new ji("google-credentials-uid"),ji.FIRST_PARTY=new ji("first-party-uid"),ji.MOCK_USER=new ji("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ui="9.6.10";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new a.Yd("@firebase/firestore");function zi(){return qi.logLevel}function Hi(e){qi.setLogLevel(e)}function Wi(e,...t){if(qi.logLevel<=a["in"].DEBUG){const n=t.map(Zi);qi.debug(`Firestore (${Ui}): ${e}`,...n)}}function Ki(e,...t){if(qi.logLevel<=a["in"].ERROR){const n=t.map(Zi);qi.error(`Firestore (${Ui}): ${e}`,...n)}}function Gi(e,...t){if(qi.logLevel<=a["in"].WARN){const n=t.map(Zi);qi.warn(`Firestore (${Ui}): ${e}`,...n)}}function Zi(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e="Unexpected state"){const t=`FIRESTORE (${Ui}) INTERNAL ASSERTION FAILED: `+e;throw Ki(t),new Error(t)}function Ji(e,t){e||Yi()}function Qi(e,t){e||Yi()}function Xi(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class tr extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ji.UNAUTHENTICATED)))}shutdown(){}}class sr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class or{constructor(e){this.t=e,this.currentUser=ji.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new nr,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{Wi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Wi("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new nr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Wi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Ji("string"==typeof t.accessToken),new ir(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ji(null===e||"string"==typeof e),new ji(e)}}class ar{constructor(e,t,n){this.type="FirstParty",this.user=ji.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class cr{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new ar(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(ji.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ur{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lr{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&Wi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,Wi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{Wi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?i(e):Wi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Ji("string"==typeof e.token),this.p=e.token,new ur(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hr.A=-1;class pr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=dr(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function fr(e,t){return e<t?-1:e>t?1:0}function mr(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}function gr(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new tr(er.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new tr(er.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new tr(er.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new tr(er.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return vr.fromMillis(Date.now())}static fromDate(e){return vr.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new vr(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fr(this.nanoseconds,e.nanoseconds):fr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.timestamp=e}static fromTimestamp(e){return new yr(e)}static min(){return new yr(new vr(0,0))}static max(){return new yr(new vr(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function wr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _r(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,n){void 0===t?t=0:t>e.length&&Yi(),void 0===n?n=e.length-t:n>e.length-t&&Yi(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ir.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ir?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Sr extends Ir{construct(e,t,n){return new Sr(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new tr(er.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Sr(t)}static emptyPath(){return new Sr([])}}const Er=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tr extends Ir{construct(e,t,n){return new Tr(e,t,n)}static isValidIdentifier(e){return Er.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Tr(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new tr(er.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new tr(er.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new tr(er.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new tr(er.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tr(t)}static emptyPath(){return new Tr([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.fields=e,e.sort(Tr.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Cr(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Cr(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Cr.EMPTY_BYTE_STRING=new Cr("");const Ar=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(e){if(Ji(!!e),"string"==typeof e){let t=0;const n=Ar.exec(e);if(Ji(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Dr(e.seconds),nanos:Dr(e.nanos)}}function Dr(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Nr(e){return"string"==typeof e?Cr.fromBase64String(e):Cr.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Pr(e){const t=e.mapValue.fields.__previous_value__;return $r(t)?Pr(t):t}function Lr(e){const t=Or(e.mapValue.fields.__local_write_time__.timestampValue);return new vr(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Mr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Mr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Mr&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(e){return null==e}function Fr(e){return 0===e&&1/e==-1/0}function Br(e){return"number"==typeof e&&Number.isInteger(e)&&!Fr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.path=e}static fromPath(e){return new jr(Sr.fromString(e))}static fromName(e){return new jr(Sr.fromString(e).popFirst(5))}static empty(){return new jr(Sr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Sr.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Sr.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new jr(new Sr(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},qr={nullValue:"NULL_VALUE"};function zr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?$r(e)?4:rs(e)?9:10:Yi()}function Hr(e,t){if(e===t)return!0;const n=zr(e);if(n!==zr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Lr(e).isEqual(Lr(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Or(e.timestampValue),i=Or(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Nr(e.bytesValue).isEqual(Nr(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Dr(e.geoPointValue.latitude)===Dr(t.geoPointValue.latitude)&&Dr(e.geoPointValue.longitude)===Dr(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Dr(e.integerValue)===Dr(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Dr(e.doubleValue),i=Dr(t.doubleValue);return n===i?Fr(n)===Fr(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return mr(e.arrayValue.values||[],t.arrayValue.values||[],Hr);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(br(n)!==br(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Hr(n[r],i[r])))return!1;return!0}(e,t);default:return Yi()}}function Wr(e,t){return void 0!==(e.values||[]).find((e=>Hr(e,t)))}function Kr(e,t){if(e===t)return 0;const n=zr(e),i=zr(t);if(n!==i)return fr(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return fr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Dr(e.integerValue||e.doubleValue),i=Dr(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Gr(e.timestampValue,t.timestampValue);case 4:return Gr(Lr(e),Lr(t));case 5:return fr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Nr(e),i=Nr(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let r=0;r<n.length&&r<i.length;r++){const e=fr(n[r],i[r]);if(0!==e)return e}return fr(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=fr(Dr(e.latitude),Dr(t.latitude));return 0!==n?n:fr(Dr(e.longitude),Dr(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const e=Kr(n[r],i[r]);if(e)return e}return fr(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const e=fr(i[o],s[o]);if(0!==e)return e;const t=Kr(n[i[o]],r[s[o]]);if(0!==t)return t}return fr(i.length,s.length)}(e.mapValue,t.mapValue);default:throw Yi()}}function Gr(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return fr(e,t);const n=Or(e),i=Or(t),r=fr(n.seconds,i.seconds);return 0!==r?r:fr(n.nanos,i.nanos)}function Zr(e){return Yr(e)}function Yr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Or(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Nr(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,jr.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Yr(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${Yr(e.fields[r])}`;return n+"}"}(e.mapValue):Yi();var t,n}function Jr(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Qr(e){return!!e&&"integerValue"in e}function Xr(e){return!!e&&"arrayValue"in e}function es(e){return!!e&&"nullValue"in e}function ts(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ns(e){return!!e&&"mapValue"in e}function is(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return wr(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=is(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=is(e.arrayValue.values[n]);return t}return Object.assign({},e)}function rs(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function ss(e,t){return void 0===e?t:void 0===t||Kr(e,t)>0?e:t}function os(e,t){return void 0===e?t:void 0===t||Kr(e,t)<0?e:t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.value=e}static empty(){return new as({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ns(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=is(t)}setAll(e){let t=Tr.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=is(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ns(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){wr(t,((t,n)=>e[t]=n));for(const i of n)delete e[i]}clone(){return new as(is(this.value))}}function cs(e){const t=[];return wr(e.fields,((e,n)=>{const i=new Tr([e]);if(ns(n)){const e=cs(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new kr(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class us{constructor(e,t,n,i,r,s){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.data=r,this.documentState=s}static newInvalidDocument(e){return new us(e,0,yr.min(),yr.min(),as.empty(),0)}static newFoundDocument(e,t,n){return new us(e,1,t,yr.min(),n,0)}static newNoDocument(e,t){return new us(e,2,t,yr.min(),as.empty(),0)}static newUnknownDocument(e,t){return new us(e,3,t,yr.min(),as.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=as.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=as.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof us&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new us(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ls{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function hs(e){return e.fields.find((e=>2===e.kind))}function ds(e){return e.fields.filter((e=>2!==e.kind))}ls.UNKNOWN_ID=-1;class ps{constructor(e,t){this.fieldPath=e,this.kind=t}}class fs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new fs(0,vs.min())}}function ms(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=yr.fromTimestamp(1e9===i?new vr(n+1,0):new vr(n,i));return new vs(r,jr.empty(),t)}function gs(e){return new vs(e.readTime,e.key,-1)}class vs{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new vs(yr.min(),jr.empty(),-1)}static max(){return new vs(yr.max(),jr.empty(),-1)}}function ys(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=jr.comparator(e.documentKey,t.documentKey),0!==n?n:fr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.P=null}}function ws(e,t=null,n=[],i=[],r=null,s=null,o=null){return new bs(e,t,n,i,r,s,o)}function _s(e){const t=Xi(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Zr(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Vr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Zr(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Zr(e))).join(",")),t.P=e}return t.P}function Is(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Zr(t.value)}`;var t})).join(", ")}]`),Vr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Zr(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Zr(e))).join(",")),`Target(${t})`}function Ss(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!Ms(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],i=t.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Hr(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Fs(e.startAt,t.startAt)&&Fs(e.endAt,t.endAt)}function Es(e){return jr.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Ts(e,t){return e.filters.filter((e=>e instanceof ks&&e.field.isEqual(t)))}class ks extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new xs(e,t,n):"array-contains"===t?new Ds(e,n):"in"===t?new Ns(e,n):"not-in"===t?new $s(e,n):"array-contains-any"===t?new Ps(e,n):new ks(e,t,n)}static V(e,t,n){return"in"===t?new Cs(e,n):new As(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Kr(t,this.value)):null!==t&&zr(this.value)===zr(t)&&this.v(Kr(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Yi()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class xs extends ks{constructor(e,t,n){super(e,t,n),this.key=jr.fromName(n.referenceValue)}matches(e){const t=jr.comparator(e.key,this.key);return this.v(t)}}class Cs extends ks{constructor(e,t){super(e,"in",t),this.keys=Os("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class As extends ks{constructor(e,t){super(e,"not-in",t),this.keys=Os("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Os(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>jr.fromName(e.referenceValue)))}class Ds extends ks{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xr(t)&&Wr(t.arrayValue,this.value)}}class Ns extends ks{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Wr(this.value.arrayValue,t)}}class $s extends ks{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Wr(this.value.arrayValue,t)}}class Ps extends ks{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xr(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Wr(this.value.arrayValue,e)))}}class Ls{constructor(e,t){this.position=e,this.inclusive=t}}class Rs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ms(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Vs(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?jr.comparator(jr.fromName(o.referenceValue),n.key):Kr(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Fs(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Hr(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function js(e,t,n,i,r,s,o,a){return new Bs(e,t,n,i,r,s,o,a)}function Us(e){return new Bs(e)}function qs(e){return!Vr(e.limit)&&"F"===e.limitType}function zs(e){return!Vr(e.limit)&&"L"===e.limitType}function Hs(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ws(e){for(const t of e.filters)if(t.S())return t.field;return null}function Ks(e){return null!==e.collectionGroup}function Gs(e){const t=Xi(e);if(null===t.D){t.D=[];const e=Ws(t),n=Hs(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new Rs(e)),t.D.push(new Rs(Tr.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new Rs(Tr.keyField(),e))}}}return t.D}function Zs(e){const t=Xi(e);if(!t.C)if("F"===t.limitType)t.C=ws(t.path,t.collectionGroup,Gs(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const r of Gs(t)){const t="desc"===r.dir?"asc":"desc";e.push(new Rs(r.field,t))}const n=t.endAt?new Ls(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new Ls(t.startAt.position,!t.startAt.inclusive):null;t.C=ws(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.C}function Ys(e,t,n){return new Bs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Js(e,t){return Ss(Zs(e),Zs(t))&&e.limitType===t.limitType}function Qs(e){return`${_s(Zs(e))}|lt:${e.limitType}`}function Xs(e){return`Query(target=${Is(Zs(e))}; limitType=${e.limitType})`}function eo(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):jr.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=Vs(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,Gs(e),t))&&!(e.endAt&&!function(e,t,n){const i=Vs(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,Gs(e),t))}(e,t)}function to(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function no(e){return(t,n)=>{let i=!1;for(const r of Gs(e)){const e=io(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function io(e,t,n){const i=e.field.isKeyField()?jr.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?Kr(i,r):Yi()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Yi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fr(t)?"-0":t}}function so(e){return{integerValue:""+e}}function oo(e,t){return Br(t)?so(t):ro(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this._=void 0}}function co(e,t,n){return e instanceof ho?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof po?fo(e,t):e instanceof mo?go(e,t):function(e,t){const n=lo(e,t),i=yo(n)+yo(e.k);return Qr(n)&&Qr(e.k)?so(i):ro(e.M,i)}(e,t)}function uo(e,t,n){return e instanceof po?fo(e,t):e instanceof mo?go(e,t):n}function lo(e,t){return e instanceof vo?Qr(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class ho extends ao{}class po extends ao{constructor(e){super(),this.elements=e}}function fo(e,t){const n=bo(t);for(const i of e.elements)n.some((e=>Hr(e,i)))||n.push(i);return{arrayValue:{values:n}}}class mo extends ao{constructor(e){super(),this.elements=e}}function go(e,t){let n=bo(t);for(const i of e.elements)n=n.filter((e=>!Hr(e,i)));return{arrayValue:{values:n}}}class vo extends ao{constructor(e,t){super(),this.M=e,this.k=t}}function yo(e){return Dr(e.integerValue||e.doubleValue)}function bo(e){return Xr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.field=e,this.transform=t}}function _o(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof po&&t instanceof po||e instanceof mo&&t instanceof mo?mr(e.elements,t.elements,Hr):e instanceof vo&&t instanceof vo?Hr(e.k,t.k):e instanceof ho&&t instanceof ho}(e.transform,t.transform)}class Io{constructor(e,t){this.version=e,this.transformResults=t}}class So{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new So}static exists(e){return new So(void 0,e)}static updateTime(e){return new So(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class To{}function ko(e,t,n){e instanceof Do?function(e,t,n){const i=e.value.clone(),r=Po(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof No?function(e,t,n){if(!Eo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Po(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll($o(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function xo(e,t,n){e instanceof Do?function(e,t,n){if(!Eo(e.precondition,t))return;const i=e.value.clone(),r=Lo(e.fieldTransforms,n,t);i.setAll(r),t.convertToFoundDocument(Oo(t),i).setHasLocalMutations()}(e,t,n):e instanceof No?function(e,t,n){if(!Eo(e.precondition,t))return;const i=Lo(e.fieldTransforms,n,t),r=t.data;r.setAll($o(e)),r.setAll(i),t.convertToFoundDocument(Oo(t),r).setHasLocalMutations()}(e,t,n):function(e,t){Eo(e.precondition,t)&&t.convertToNoDocument(yr.min())}(e,t)}function Co(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=lo(i.transform,e||null);null!=r&&(null==n&&(n=as.empty()),n.set(i.field,r))}return n||null}function Ao(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&mr(e,t,((e,t)=>_o(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Oo(e){return e.isFoundDocument()?e.version:yr.min()}class Do extends To{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class No extends To{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function $o(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Po(e,t,n){const i=new Map;Ji(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,uo(o,a,n[r]))}return i}function Lo(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,co(e,s,t))}return i}class Ro extends To{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Mo extends To{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fo,Bo;function jo(e){switch(e){default:return Yi();case er.CANCELLED:case er.UNKNOWN:case er.DEADLINE_EXCEEDED:case er.RESOURCE_EXHAUSTED:case er.INTERNAL:case er.UNAVAILABLE:case er.UNAUTHENTICATED:return!1;case er.INVALID_ARGUMENT:case er.NOT_FOUND:case er.ALREADY_EXISTS:case er.PERMISSION_DENIED:case er.FAILED_PRECONDITION:case er.ABORTED:case er.OUT_OF_RANGE:case er.UNIMPLEMENTED:case er.DATA_LOSS:return!0}}function Uo(e){if(void 0===e)return Ki("GRPC error has no .code"),er.UNKNOWN;switch(e){case Fo.OK:return er.OK;case Fo.CANCELLED:return er.CANCELLED;case Fo.UNKNOWN:return er.UNKNOWN;case Fo.DEADLINE_EXCEEDED:return er.DEADLINE_EXCEEDED;case Fo.RESOURCE_EXHAUSTED:return er.RESOURCE_EXHAUSTED;case Fo.INTERNAL:return er.INTERNAL;case Fo.UNAVAILABLE:return er.UNAVAILABLE;case Fo.UNAUTHENTICATED:return er.UNAUTHENTICATED;case Fo.INVALID_ARGUMENT:return er.INVALID_ARGUMENT;case Fo.NOT_FOUND:return er.NOT_FOUND;case Fo.ALREADY_EXISTS:return er.ALREADY_EXISTS;case Fo.PERMISSION_DENIED:return er.PERMISSION_DENIED;case Fo.FAILED_PRECONDITION:return er.FAILED_PRECONDITION;case Fo.ABORTED:return er.ABORTED;case Fo.OUT_OF_RANGE:return er.OUT_OF_RANGE;case Fo.UNIMPLEMENTED:return er.UNIMPLEMENTED;case Fo.DATA_LOSS:return er.DATA_LOSS;default:return Yi()}}(Bo=Fo||(Fo={}))[Bo.OK=0]="OK",Bo[Bo.CANCELLED=1]="CANCELLED",Bo[Bo.UNKNOWN=2]="UNKNOWN",Bo[Bo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bo[Bo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bo[Bo.NOT_FOUND=5]="NOT_FOUND",Bo[Bo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bo[Bo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bo[Bo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bo[Bo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bo[Bo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bo[Bo.ABORTED=10]="ABORTED",Bo[Bo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bo[Bo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bo[Bo.INTERNAL=13]="INTERNAL",Bo[Bo.UNAVAILABLE=14]="UNAVAILABLE",Bo[Bo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,((t,n)=>{for(const[i,r]of n)e(i,r)}))}isEmpty(){return _r(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t){this.comparator=e,this.root=t||Wo.EMPTY}insert(e,t){return new zo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Wo.BLACK,null,null))}remove(e){return new zo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wo.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ho(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ho(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ho(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ho(this.root,e,this.comparator,!0)}}class Ho{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Wo{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Wo.RED,this.left=null!=i?i:Wo.EMPTY,this.right=null!=r?r:Wo.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new Wo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Wo.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Wo.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Yi();if(this.right.isRed())throw Yi();const e=this.left.check();if(e!==this.right.check())throw Yi();return e+(this.isRed()?0:1)}}Wo.EMPTY=null,Wo.RED=!0,Wo.BLACK=!1,Wo.EMPTY=new class{constructor(){this.size=0}get key(){throw Yi()}get value(){throw Yi()}get color(){throw Yi()}get left(){throw Yi()}get right(){throw Yi()}copy(e,t,n,i,r){return this}insert(e,t,n){return new Wo(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{constructor(e){this.comparator=e,this.data=new zo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Go(this.data.getIterator())}getIteratorFrom(e){return new Go(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ko))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ko(this.comparator);return t.data=e,t}}class Go{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zo(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new zo(jr.comparator);function Jo(){return Yo}const Qo=new zo(jr.comparator);function Xo(){return Qo}function ea(){return new qo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ta=new zo(jr.comparator),na=new Ko(jr.comparator);function ia(...e){let t=na;for(const n of e)t=t.add(n);return t}const ra=new Ko(fr);function sa(){return ra}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,aa.createSynthesizedTargetChangeForCurrentChange(e,t)),new oa(yr.min(),n,sa(),Jo(),ia())}}class aa{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t){return new aa(Cr.EMPTY_BYTE_STRING,t,ia(),ia(),ia())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,n,i){this.O=e,this.removedTargetIds=t,this.key=n,this.F=i}}class ua{constructor(e,t){this.targetId=e,this.$=t}}class la{constructor(e,t,n=Cr.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class ha{constructor(){this.B=0,this.L=fa(),this.U=Cr.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return 0!==this.B}get j(){return this.G}W(e){e.approximateByteSize()>0&&(this.G=!0,this.U=e)}H(){let e=ia(),t=ia(),n=ia();return this.L.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Yi()}})),new aa(this.U,this.q,e,t,n)}J(){this.G=!1,this.L=fa()}Y(e,t){this.G=!0,this.L=this.L.insert(e,t)}X(e){this.G=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class da{constructor(e){this.nt=e,this.st=new Map,this.it=Jo(),this.rt=pa(),this.ot=new Ko(fr)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.K||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.K||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:Yi()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.$.count,i=this.wt(t);if(i){const e=i.target;if(Es(e))if(0===n){const n=new jr(e.path);this.ct(t,n,us.newNoDocument(n,yr.min()))}else Ji(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,i)=>{const r=this.wt(i);if(r){if(n.current&&Es(r.target)){const t=new jr(r.target.path);null!==this.it.get(t)||this.It(i,t)||this.ct(i,t,us.newNoDocument(t,e))}n.j&&(t.set(i,n.H()),n.J())}}));let n=ia();this.rt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const i=new oa(e,t,this.ot,this.it,n);return this.it=Jo(),this.rt=pa(),this.ot=new Ko(fr),i}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const i=this.lt(e);this.It(e,t)?i.Y(t,1):i.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new ha,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new Ko(fr),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||Wi("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.K?null:this.nt.Et(e)}dt(e){this.st.set(e,new ha),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function pa(){return new zo(jr.comparator)}function fa(){return new zo(jr.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ga=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class va{constructor(e,t){this.databaseId=e,this.N=t}}function ya(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ba(e,t){return e.N?t.toBase64():t.toUint8Array()}function wa(e,t){return ya(e,t.toTimestamp())}function _a(e){return Ji(!!e),yr.fromTimestamp(function(e){const t=Or(e);return new vr(t.seconds,t.nanos)}(e))}function Ia(e,t){return function(e){return new Sr(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Sa(e){const t=Sr.fromString(e);return Ji(Za(t)),t}function Ea(e,t){return Ia(e.databaseId,t.path)}function Ta(e,t){const n=Sa(t);if(n.get(1)!==e.databaseId.projectId)throw new tr(er.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new tr(er.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new jr(Aa(n))}function ka(e,t){return Ia(e.databaseId,t)}function xa(e){const t=Sa(e);return 4===t.length?Sr.emptyPath():Aa(t)}function Ca(e){return new Sr(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Aa(e){return Ji(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Oa(e,t,n){return{name:Ea(e,t),fields:n.value.mapValue.fields}}function Da(e,t,n){const i=Ta(e,t.name),r=_a(t.updateTime),s=new as({mapValue:{fields:t.fields}}),o=us.newFoundDocument(i,r,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Na(e,t){return"found"in t?function(e,t){Ji(!!t.found),t.found.name,t.found.updateTime;const n=Ta(e,t.found.name),i=_a(t.found.updateTime),r=new as({mapValue:{fields:t.found.fields}});return us.newFoundDocument(n,i,r)}(e,t):"missing"in t?function(e,t){Ji(!!t.missing),Ji(!!t.readTime);const n=Ta(e,t.missing),i=_a(t.readTime);return us.newNoDocument(n,i)}(e,t):Yi()}function $a(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Yi()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(e,t){return e.N?(Ji(void 0===t||"string"==typeof t),Cr.fromBase64String(t||"")):(Ji(void 0===t||t instanceof Uint8Array),Cr.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?er.UNKNOWN:Uo(e.code);return new tr(t,e.message||"")}(o);n=new la(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Ta(e,i.document.name),s=_a(i.document.updateTime),o=new as({mapValue:{fields:i.document.fields}}),a=us.newFoundDocument(r,s,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new ca(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Ta(e,i.document),s=i.readTime?_a(i.readTime):yr.min(),o=us.newNoDocument(r,s),a=i.removedTargetIds||[];n=new ca([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Ta(e,i.document),s=i.removedTargetIds||[];n=new ca([],s,r,null)}else{if(!("filter"in t))return Yi();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,r=new Vo(i),s=e.targetId;n=new ua(s,r)}}return n}function Pa(e,t){let n;if(t instanceof Do)n={update:Oa(e,t.key,t.value)};else if(t instanceof Ro)n={delete:Ea(e,t.key)};else if(t instanceof No)n={update:Oa(e,t.key,t.data),updateMask:Ga(t.fieldMask)};else{if(!(t instanceof Mo))return Yi();n={verify:Ea(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof ho)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof po)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof mo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof vo)return{fieldPath:t.field.canonicalString(),increment:n.k};throw Yi()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:wa(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Yi()}(e,t.precondition)),n}function La(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?So.updateTime(_a(e.updateTime)):void 0!==e.exists?So.exists(e.exists):So.none()}(t.currentDocument):So.none(),i=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Ji("REQUEST_TIME"===t.setToServerValue),n=new ho;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new po(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new mo(e)}else"increment"in t?n=new vo(e,t.increment):Yi();const i=Tr.fromServerFormat(t.fieldPath);return new wo(i,n)}(e,t))):[];if(t.update){t.update.name;const r=Ta(e,t.update.name),s=new as({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new kr(t.map((e=>Tr.fromServerFormat(e))))}(t.updateMask);return new No(r,s,e,n,i)}return new Do(r,s,n,i)}if(t.delete){const i=Ta(e,t.delete);return new Ro(i,n)}if(t.verify){const i=Ta(e,t.verify);return new Mo(i,n)}return Yi()}function Ra(e,t){return e&&e.length>0?(Ji(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?_a(e.updateTime):_a(t);return n.isEqual(yr.min())&&(n=_a(t)),new Io(n,e.transformResults||[])}(e,t)))):[]}function Ma(e,t){return{documents:[ka(e,t.path)]}}function Va(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=ka(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ka(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(ts(e.value))return{unaryFilter:{field:za(e.field),op:"IS_NAN"}};if(es(e.value))return{unaryFilter:{field:za(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ts(e.value))return{unaryFilter:{field:za(e.field),op:"IS_NOT_NAN"}};if(es(e.value))return{unaryFilter:{field:za(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:za(e.field),op:qa(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:za(e.field),direction:Ua(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.N||Vr(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Fa(e){let t=xa(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Ji(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=ja(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Rs(Ha(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Vr(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ls(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ls(n,t)}(n.endAt)),js(t,r,o,s,a,"F",c,u)}function Ba(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Yi()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function ja(e){return e?void 0!==e.unaryFilter?[Ka(e)]:void 0!==e.fieldFilter?[Wa(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>ja(e))).reduce(((e,t)=>e.concat(t))):Yi():[]}function Ua(e){return ma[e]}function qa(e){return ga[e]}function za(e){return{fieldPath:e.canonicalString()}}function Ha(e){return Tr.fromServerFormat(e.fieldPath)}function Wa(e){return ks.create(Ha(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Yi()}}(e.fieldFilter.op),e.fieldFilter.value)}function Ka(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ha(e.unaryFilter.field);return ks.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ha(e.unaryFilter.field);return ks.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ha(e.unaryFilter.field);return ks.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ha(e.unaryFilter.field);return ks.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Yi()}}function Ga(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Za(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Qa(t)),t=Ja(e.get(n),t);return Qa(t)}function Ja(e,t){let n=t;const i=e.length;for(let r=0;r<i;r++){const t=e.charAt(r);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Qa(e){return e+""}function Xa(e){const t=e.length;if(Ji(t>=2),2===t)return Ji(""===e.charAt(0)&&""===e.charAt(1)),Sr.emptyPath();const n=t-2,i=[];let r="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Yi(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===r.length?o=n:(r+=n,o=r,r=""),i.push(o);break;case"":r+=e.substring(s,t),r+="\0";break;case"":r+=e.substring(s,t+1);break;default:Yi()}s=t+2}return new Sr(i)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(e,t){return[e,Ya(t)]}function nc(e,t,n){return[e,Ya(t),n]}const ic={},rc=["prefixPath","collectionGroup","readTime","documentId"],sc=["prefixPath","collectionGroup","documentId"],oc=["collectionGroup","readTime","prefixPath","documentId"],ac=["canonicalId","targetId"],cc=["targetId","path"],uc=["path","targetId"],lc=["collectionId","parent"],hc=["indexId","uid"],dc=["uid","sequenceNumber"],pc=["indexId","uid","arrayValue","directionalValue","documentKey"],fc=["indexId","uid","documentKey"],mc=["userId","collectionPath","documentId"],gc=["userId","collectionPath","largestBatchId"],vc=["userId","collectionGroup","largestBatchId"],yc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],bc=[...yc,"documentOverlays"],wc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],_c=[...wc,"indexConfiguration","indexState","indexEntries"],Ic="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Yi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ec(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ec?t:Ec.resolve(t)}catch(e){return Ec.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ec.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ec.reject(t)}static resolve(e){return new Ec(((t,n)=>{t(e)}))}static reject(e){return new Ec(((t,n)=>{n(e)}))}static waitFor(e){return new Ec(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=Ec.resolve(!1);for(const n of e)t=t.next((e=>e?Ec.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new nr,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new Cc(e,t.error)):this.At.resolve()},this.transaction.onerror=t=>{const n=$c(t.target.error);this.At.reject(new Cc(e,n))}}static open(e,t,n,i){try{return new Tc(t,e.transaction(i,n))}catch(e){throw new Cc(t,e)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(Wi("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Oc(t)}}class kc{constructor(e,t,n){this.name=e,this.version=t,this.Pt=n,12.2===kc.Vt((0,c.z$)())&&Ki("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Wi("SimpleDb","Removing database:",e),Dc(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!(0,c.hl)())return!1;if(kc.St())return!0;const e=(0,c.z$)(),t=kc.Vt(e),n=0<t&&t<10,i=kc.Dt(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||r)}static St(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyA0ESHtyir-Di4xNEdMAvdrTWNHv0DlE80",VUE_APP_APP_ID:"1:230739198962:web:3b3690e4101c644ae2e16b",VUE_APP_AUTH_DOMAIN:"brads-covers.firebaseapp.com",VUE_APP_MESSAGING_SENDER_ID:"230739198962",VUE_APP_PROJECT_ID:"brads-covers",VUE_APP_STORAGE_BUCKET:"brads-covers.appspot.com",BASE_URL:"/covers/"})||void 0===e?void 0:e.Ct)}static xt(e,t){return e.store(t)}static Vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Nt(e){return this.db||(Wi("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=e=>{const n=e.target.result;t(n)},i.onblocked=()=>{n(new Cc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=t=>{const i=t.target.error;"VersionError"===i.name?n(new tr(er.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new tr(er.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new Cc(e,i))},i.onupgradeneeded=e=>{Wi("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.Pt.kt(t,i.transaction,e.oldVersion,this.version).next((()=>{Wi("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Mt&&(this.db.onversionchange=e=>this.Mt(e)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const r="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Nt(e);const t=Tc.open(this.db,e,r?"readonly":"readwrite",n),s=i(t).next((e=>(t.bt(),e))).catch((e=>(t.abort(e),Ec.reject(e)))).toPromise();return s.catch((()=>{})),await t.Rt,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(Wi("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class xc{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return Dc(this.Ft.delete())}}class Cc extends tr{constructor(e,t){super(er.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ac(e){return"IndexedDbTransactionError"===e.name}class Oc{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Wi("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Wi("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Dc(n)}add(e){return Wi("SimpleDb","ADD",this.store.name,e,e),Dc(this.store.add(e))}get(e){return Dc(this.store.get(e)).next((t=>(void 0===t&&(t=null),Wi("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Wi("SimpleDb","DELETE",this.store.name,e),Dc(this.store.delete(e))}count(){return Wi("SimpleDb","COUNT",this.store.name),Dc(this.store.count())}qt(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.Gt(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Ec(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}Kt(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ec(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}Qt(e,t){Wi("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.jt=!1;const i=this.cursor(n);return this.Gt(i,((e,t,n)=>n.delete()))}Wt(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.Gt(i,t)}zt(e){const t=this.cursor({});return new Ec(((n,i)=>{t.onerror=e=>{const t=$c(e.target.error);i(t)},t.onsuccess=t=>{const i=t.target.result;i?e(i.primaryKey,i.value).next((e=>{e?i.continue():n()})):n()}}))}Gt(e,t){const n=[];return new Ec(((i,r)=>{e.onerror=e=>{r(e.target.error)},e.onsuccess=e=>{const r=e.target.result;if(!r)return void i();const s=new xc(r),o=t(r.primaryKey,r.value,s);if(o instanceof Ec){const e=o.catch((e=>(s.done(),Ec.reject(e))));n.push(e)}s.isDone?i():null===s.Lt?r.continue():r.continue(s.Lt)}})).next((()=>Ec.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Dc(e){return new Ec(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=$c(e.target.error);n(t)}}))}let Nc=!1;function $c(e){const t=kc.Vt((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new tr("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Nc||(Nc=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends Sc{constructor(e,t){super(),this.Ht=e,this.currentSequenceNumber=t}}function Lc(e,t){const n=Xi(e);return kc.xt(n.Ht,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&ko(t,e,n[i])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&xo(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&xo(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(yr.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ia())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,((e,t)=>Ao(e,t)))&&mr(this.baseMutations,e.baseMutations,((e,t)=>Ao(e,t)))}}class Mc{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){Ji(e.mutations.length===n.length);let i=ta;const r=e.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new Mc(e,t,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,n,i,r=yr.min(),s=yr.min(),o=Cr.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Fc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Fc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Fc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.Jt=e}}function jc(e,t){let n;if(t.document)n=Da(e.Jt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=jr.fromSegments(t.noDocument.path),i=Hc(t.noDocument.readTime);n=us.newNoDocument(e,i),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Yi();{const e=jr.fromSegments(t.unknownDocument.path),i=Hc(t.unknownDocument.version);n=us.newUnknownDocument(e,i)}}return t.readTime&&n.setReadTime(function(e){const t=new vr(e[0],e[1]);return yr.fromTimestamp(t)}(t.readTime)),n}function Uc(e,t){const n=t.key,i={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:qc(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())i.document=function(e,t){return{name:Ea(e,t.key),fields:t.data.value.mapValue.fields,updateTime:ya(e,t.version.toTimestamp())}}(e.Jt,t);else if(t.isNoDocument())i.noDocument={path:n.path.toArray(),readTime:zc(t.version)};else{if(!t.isUnknownDocument())return Yi();i.unknownDocument={path:n.path.toArray(),version:zc(t.version)}}return i}function qc(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function zc(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Hc(e){const t=new vr(e.seconds,e.nanoseconds);return yr.fromTimestamp(t)}function Wc(e,t){const n=(t.baseMutations||[]).map((t=>La(e.Jt,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const i=t.mutations.map((t=>La(e.Jt,t))),r=vr.fromMillis(t.localWriteTimeMs);return new Rc(t.batchId,r,n,i)}function Kc(e){const t=Hc(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Hc(e.lastLimboFreeSnapshotVersion):yr.min();let i;var r;return void 0!==e.query.documents?(Ji(1===(r=e.query).documents.length),i=Zs(Us(xa(r.documents[0])))):i=function(e){return Zs(Fa(e))}(e.query),new Fc(i,e.targetId,0,e.lastListenSequenceNumber,t,n,Cr.fromBase64String(e.resumeToken))}function Gc(e,t){const n=zc(t.snapshotVersion),i=zc(t.lastLimboFreeSnapshotVersion);let r;r=Es(t.target)?Ma(e.Jt,t.target):Va(e.Jt,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:_s(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:r}}function Zc(e){const t=Fa({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ys(t,t.limit,"L"):t}function Yc(e,t){return new Vc(t.largestBatchId,La(e.Jt,t.overlayMutation))}function Jc(e,t){const n=t.path.lastSegment();return[e,Ya(t.path.popLast()),n]}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{getBundleMetadata(e,t){return Xc(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Hc(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Xc(e).put({bundleId:(n=t).id,createTime:zc(_a(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return eu(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Zc(t.bundledQuery),readTime:Hc(t.readTime)};var t}))}saveNamedQuery(e,t){return eu(e).put(function(e){return{name:e.name,readTime:zc(_a(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Xc(e){return Lc(e,"bundles")}function eu(e){return Lc(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t){this.M=e,this.userId=t}static Yt(e,t){const n=t.uid||"";return new tu(e,n)}getOverlay(e,t){return nu(e).get(Jc(this.userId,t)).next((e=>e?Yc(this.M,e):null))}saveOverlays(e,t,n){const i=[];return n.forEach(((n,r)=>{const s=new Vc(t,r);i.push(this.Xt(e,s))})),Ec.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach((e=>i.add(Ya(e.getCollectionPath()))));const r=[];return i.forEach((t=>{const i=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);r.push(nu(e).Qt("collectionPathOverlayIndex",i))})),Ec.waitFor(r)}getOverlaysForCollection(e,t,n){const i=ea(),r=Ya(t),s=IDBKeyRange.bound([this.userId,r,n],[this.userId,r,Number.POSITIVE_INFINITY],!0);return nu(e).qt("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Yc(this.M,t);i.set(e.getKey(),e)}return i}))}getOverlaysForCollectionGroup(e,t,n,i){const r=ea();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return nu(e).Wt({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Yc(this.M,t);r.size()<i||o.largestBatchId===s?(r.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>r))}Xt(e,t){return nu(e).put(function(e,t,n){const[i,r,s]=Jc(t,n.mutation.key);return{userId:t,collectionPath:r,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Pa(e.Jt,n.mutation)}}(this.M,this.userId,t))}}function nu(e){return Lc(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(Dr(e.integerValue));else if("doubleValue"in e){const n=Dr(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),Fr(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(`${n.seconds||""}`),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(Nr(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?rs(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):Yi()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const i of Object.keys(n))this.re(i,t),this.te(n[i],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const i of n)this.te(i,t)}ae(e,t){this.ne(t,37),jr.fromName(e).path.forEach((e=>{this.ne(t,60),this.le(e,t)}))}ne(e,t){e.se(t)}oe(e){e.se(2)}}function ru(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function su(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const i=ru(255&e[n]);if(t+=i,8!==i)break}return t}(e);return Math.ceil(t/8)}iu.fe=new iu;class ou{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this._e(n.value),n=t.next();this.we()}me(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.ge(n.value),n=t.next();this.ye()}pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this._e(e);else if(e<2048)this._e(960|e>>>6),this._e(128|63&e);else if(t<"\ud800"||"\udbff"<t)this._e(480|e>>>12),this._e(128|63&e>>>6),this._e(128|63&e);else{const e=t.codePointAt(0);this._e(240|e>>>18),this._e(128|63&e>>>12),this._e(128|63&e>>>6),this._e(128|63&e)}}this.we()}Ie(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.ge(e);else if(e<2048)this.ge(960|e>>>6),this.ge(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.ge(480|e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e);else{const e=t.codePointAt(0);this.ge(240|e>>>18),this.ge(128|63&e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e)}}this.ye()}Te(e){const t=this.Ee(e),n=su(t);this.Ae(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Re(e){const t=this.Ee(e),n=su(t);this.Ae(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}_e(e){const t=255&e;0===t?(this.Pe(0),this.Pe(255)):255===t?(this.Pe(255),this.Pe(0)):this.Pe(t)}ge(e){const t=255&e;0===t?(this.ve(0),this.ve(255)):255===t?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class au{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.be()}}class cu{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class uu{constructor(){this.De=new ou,this.Ce=new au(this.De),this.xe=new cu(this.De)}seed(e){this.De.seed(e)}Ne(e){return 0===e?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new lu(this.indexId,this.documentKey,this.arrayValue,n)}}function hu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=du(e.arrayValue,t.arrayValue),0!==n?n:(n=du(e.directionalValue,t.directionalValue),0!==n?n:jr.comparator(e.documentKey,t.documentKey)))}function du(e,t){for(let n=0;n<e.length&&n<t.length;++n){const i=e[n]-t[n];if(0!==i)return i}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const t of e.filters){const e=t;e.S()?this.Fe=e:this.Oe.push(e)}}$e(e){const t=hs(e);if(void 0!==t&&!this.Be(t))return!1;const n=ds(e);let i=0,r=0;for(;i<n.length&&this.Be(n[i]);++i);if(i===n.length)return!0;if(void 0!==this.Fe){const e=n[i];if(!this.Le(this.Fe,e)||!this.Ue(this.Me[r++],e))return!1;++i}for(;i<n.length;++i){const e=n[i];if(r>=this.Me.length||!this.Ue(this.Me[r++],e))return!1}return!0}Be(e){for(const t of this.Oe)if(this.Le(t,e))return!0;return!1}Le(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Ue(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.qe=new mu}addToCollectionParentIndex(e,t){return this.qe.add(t),Ec.resolve()}getCollectionParents(e,t){return Ec.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return Ec.resolve()}deleteFieldIndex(e,t){return Ec.resolve()}getDocumentsMatchingTarget(e,t){return Ec.resolve(null)}getFieldIndex(e,t){return Ec.resolve(null)}getFieldIndexes(e,t){return Ec.resolve([])}getNextCollectionGroupToUpdate(e){return Ec.resolve(null)}updateCollectionGroup(e,t,n){return Ec.resolve()}updateIndexEntries(e,t){return Ec.resolve()}}class mu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Ko(Sr.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Ko(Sr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Uint8Array(0);class vu{constructor(e){this.user=e,this.Ge=new mu,this.Ke=new qo((e=>_s(e)),((e,t)=>Ss(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ge.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener((()=>{this.Ge.add(t)}));const r={collectionId:n,parent:Ya(i)};return yu(e).put(r)}return Ec.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[gr(t),""],!1,!0);return yu(e).qt(i).next((e=>{for(const i of e){if(i.collectionId!==t)break;n.push(Xa(i.parent))}return n}))}addFieldIndex(e,t){const n=wu(e),i=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);return delete i.indexId,n.add(i).next()}deleteFieldIndex(e,t){const n=wu(e),i=_u(e),r=bu(e);return n.delete(t.indexId).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=bu(e);let i=!0;const r=new Map;return Ec.forEach(this.Qe(t),(t=>this.getFieldIndex(e,t).next((e=>{i&&(i=!!e),r.set(t,e)})))).next((()=>{if(i){let e=ia();return Ec.forEach(r,((i,r)=>{var s;Wi("IndexedDbIndexManager",`Using index ${s=i,`id=${s.indexId}|cg=${s.collectionGroup}|f=${s.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${_s(t)}`);const o=function(e,t){const n=hs(t);if(void 0===n)return null;for(const i of Ts(e,n.fieldPath))switch(i.op){case"array-contains-any":return i.value.arrayValue.values||[];case"array-contains":return[i.value]}return null}(r,i),a=function(e,t){const n=new Map;for(const i of ds(t))for(const t of Ts(e,i.fieldPath))switch(t.op){case"==":case"in":n.set(i.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(i.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(r,i),c=function(e,t){const n=[];let i=!0;for(const s of ds(t)){let t,o=!0;for(const n of Ts(e,s.fieldPath)){let e,i=!0;switch(n.op){case"<":case"<=":e="nullValue"in(r=n.value)?qr:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Jr(Mr.empty(),jr.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?{mapValue:{}}:Yi();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,i=!1;break;case"!=":case"not-in":e=qr}ss(t,e)===e&&(t=e,o=i)}if(null!==e.startAt)for(let n=0;n<e.orderBy.length;++n)if(e.orderBy[n].field.isEqual(s.fieldPath)){const i=e.startAt.position[n];ss(t,i)===i&&(t=i,o=e.startAt.inclusive);break}if(void 0===t)return null;n.push(t),i&&(i=o)}var r;return new Ls(n,i)}(r,i),u=function(e,t){const n=[];let i=!0;for(const s of ds(t)){let t,o=!0;for(const n of Ts(e,s.fieldPath)){let e,i=!0;switch(n.op){case">=":case">":e="nullValue"in(r=n.value)?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Jr(Mr.empty(),jr.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?{mapValue:{}}:"mapValue"in r?Ur:Yi(),i=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,i=!1;break;case"!=":case"not-in":e=Ur}os(t,e)===e&&(t=e,o=i)}if(null!==e.endAt)for(let n=0;n<e.orderBy.length;++n)if(e.orderBy[n].field.isEqual(s.fieldPath)){const i=e.endAt.position[n];os(t,i)===i&&(t=i,o=e.endAt.inclusive);break}if(void 0===t)return null;n.push(t),i&&(i=o)}var r;return new Ls(n,i)}(r,i),l=this.je(i,r,c),h=this.je(i,r,u),d=this.We(i,r,a),p=this.ze(i.indexId,o,l,!!c&&c.inclusive,h,!!u&&u.inclusive,d);return Ec.forEach(p,(i=>n.Kt(i,t.limit).next((t=>{t.forEach((t=>{e=e.add(new jr(Xa(t.documentKey)))}))}))))})).next((()=>e))}return Ec.resolve(null)}))}Qe(e){let t=this.Ke.get(e);return t||(t=[e],this.Ke.set(e,t),t)}ze(e,t,n,i,r,s,o){const a=(null!=t?t.length:1)*Math.max(null!=n?n.length:1,null!=r?r.length:1),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.He(t[l/c]):gu,h=n?this.Je(e,a,n[l%c],i):this.Ye(e),d=r?this.Xe(e,a,r[l%c],s):this.Ye(e+1);u.push(...this.createRange(h,d,o.map((t=>this.Je(e,a,t,!0)))))}return u}Je(e,t,n,i){const r=new lu(e,jr.empty(),t,n);return i?r:r.ke()}Xe(e,t,n,i){const r=new lu(e,jr.empty(),t,n);return i?r.ke():r}Ye(e){return new lu(e,jr.empty(),gu,gu)}getFieldIndex(e,t){const n=new pu(t),i=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next((e=>{const t=e.filter((e=>n.$e(e)));return t.sort(((e,t)=>t.fields.length-e.fields.length)),t.length>0?t[0]:null}))}Ze(e,t){const n=new uu;for(const i of ds(e)){const e=t.data.field(i.fieldPath);if(null==e)return null;const r=n.Ne(i.kind);iu.fe.Zt(e,r)}return n.Se()}He(e){const t=new uu;return iu.fe.Zt(e,t.Ne(0)),t.Se()}We(e,t,n){if(null===n)return[];let i=[];i.push(new uu);let r=0;for(const s of ds(e)){const e=n[r++];for(const n of i)if(this.tn(t,s.fieldPath)&&Xr(e))i=this.en(i,s,e);else{const t=n.Ne(s.kind);iu.fe.Zt(e,t)}}return this.nn(i)}je(e,t,n){return null==n?null:this.We(e,t,n.position)}nn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Se();return t}en(e,t,n){const i=[...e],r=[];for(const s of n.arrayValue.values||[])for(const e of i){const n=new uu;n.seed(e.Se()),iu.fe.Zt(s,n.Ne(t.kind)),r.push(n)}return r}tn(e,t){return!!e.filters.find((e=>e instanceof ks&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=wu(e),i=_u(e);return(t?n.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.qt()).next((e=>{const t=[];return Ec.forEach(e,(e=>i.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new fs(t.sequenceNumber,new vs(Hc(t.readTime),new jr(Xa(t.documentKey)),t.largestBatchId)):fs.empty(),i=e.fields.map((([e,t])=>new ps(Tr.fromServerFormat(e),t)));return new ls(e.indexId,e.collectionGroup,i,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:fr(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const i=wu(e),r=_u(e);return this.sn(e).next((e=>i.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Ec.forEach(t,(t=>r.put(function(e,t,n,i){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:zc(i.readTime),documentKey:Ya(i.documentKey.path),largestBatchId:i.largestBatchId}}(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Ec.forEach(t,((t,i)=>{const r=n.get(t.collectionGroup);return(r?Ec.resolve(r):this.getFieldIndexes(e,t.collectionGroup)).next((r=>(n.set(t.collectionGroup,r),Ec.forEach(r,(n=>this.rn(e,t,n).next((t=>{const r=this.on(i,n);return t.isEqual(r)?Ec.resolve():this.un(e,i,t,r)})))))))}))}an(e,t,n){return bu(e).put({indexId:n.indexId,uid:this.uid,arrayValue:n.arrayValue,directionalValue:n.directionalValue,documentKey:Ya(t.key.path)})}cn(e,t,n){return bu(e).delete([n.indexId,this.uid,n.arrayValue,n.directionalValue,Ya(t.key.path)])}rn(e,t,n){const i=bu(e);let r=new Ko(hu);return i.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,Ya(t.path)])},((e,i)=>{r=r.add(new lu(n.indexId,t,i.arrayValue,i.directionalValue))})).next((()=>r))}on(e,t){let n=new Ko(hu);const i=this.Ze(t,e);if(null==i)return n;const r=hs(t);if(null!=r){const s=e.data.field(r.fieldPath);if(Xr(s))for(const r of s.arrayValue.values||[])n=n.add(new lu(t.indexId,e.key,this.He(r),i))}else n=n.add(new lu(t.indexId,e.key,gu,i));return n}un(e,t,n,i){Wi("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const r=[];return function(e,t,n,i,r){const s=e.getIterator(),o=t.getIterator();let a=Zo(s),c=Zo(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const i=n(a,c);i<0?t=!0:i>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(i(c),c=Zo(o)):t?(r(a),a=Zo(s)):(a=Zo(s),c=Zo(o))}}(n,i,hu,(n=>{r.push(this.an(e,t,n))}),(n=>{r.push(this.cn(e,t,n))})),Ec.waitFor(r)}sn(e){let t=1;return _u(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,i)=>{i.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>hu(e,t))).filter(((e,t,n)=>!t||0!==hu(e,n[t-1])));const i=[];i.push(e);for(const s of n){const n=hu(s,e),r=hu(s,t);if(0===n)i[0]=e.ke();else if(n>0&&r<0)i.push(s),i.push(s.ke());else if(r>0)break}i.push(t);const r=[];for(let s=0;s<i.length;s+=2)r.push(IDBKeyRange.bound([i[s].indexId,this.uid,i[s].arrayValue,i[s].directionalValue,""],[i[s+1].indexId,this.uid,i[s+1].arrayValue,i[s+1].directionalValue,""]));return r}}function yu(e){return Lc(e,"collectionParents")}function bu(e){return Lc(e,"indexEntries")}function wu(e){return Lc(e,"indexConfiguration")}function _u(e){return Lc(e,"indexState")}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Su{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Su(e,Su.DEFAULT_COLLECTION_PERCENTILE,Su.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(e,t,n){const i=e.store("mutations"),r=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=i.Wt({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Ji(1===a)})));const u=[];for(const l of n.mutations){const e=nc(t,l.key.path,n.batchId);s.push(r.delete(e)),u.push(l.key)}return Ec.waitFor(s).next((()=>u))}function Tu(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Yi();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Su.DEFAULT_COLLECTION_PERCENTILE=10,Su.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Su.DEFAULT=new Su(41943040,Su.DEFAULT_COLLECTION_PERCENTILE,Su.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Su.DISABLED=new Su(-1,0,0);class ku{constructor(e,t,n,i){this.userId=e,this.M=t,this.indexManager=n,this.referenceDelegate=i,this.hn={}}static Yt(e,t,n,i){Ji(""!==e.uid);const r=e.isAuthenticated()?e.uid:"";return new ku(r,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Cu(e).Wt({index:"userMutationsIndex",range:n},((e,n,i)=>{t=!1,i.done()})).next((()=>t))}addMutationBatch(e,t,n,i){const r=Au(e),s=Cu(e);return s.add({}).next((o=>{Ji("number"==typeof o);const a=new Rc(o,t,n,i),c=function(e,t,n){const i=n.baseMutations.map((t=>Pa(e.Jt,t))),r=n.mutations.map((t=>Pa(e.Jt,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:i,mutations:r}}(this.M,this.userId,a),u=[];let l=new Ko(((e,t)=>fr(e.canonicalString(),t.canonicalString())));for(const e of i){const t=nc(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(r.put(t,ic))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.hn[o]=a.keys()})),Ec.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Cu(e).get(t).next((e=>e?(Ji(e.userId===this.userId),Wc(this.M,e)):null))}ln(e,t){return this.hn[t]?Ec.resolve(this.hn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.hn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let r=null;return Cu(e).Wt({index:"userMutationsIndex",range:i},((e,t,i)=>{t.userId===this.userId&&(Ji(t.batchId>=n),r=Wc(this.M,t)),i.done()})).next((()=>r))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Cu(e).Wt({index:"userMutationsIndex",range:t,reverse:!0},((e,t,i)=>{n=t.batchId,i.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Cu(e).qt("userMutationsIndex",t).next((e=>e.map((e=>Wc(this.M,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=tc(this.userId,t.path),i=IDBKeyRange.lowerBound(n),r=[];return Au(e).Wt({range:i},((n,i,s)=>{const[o,a,c]=n,u=Xa(a);if(o===this.userId&&t.path.isEqual(u))return Cu(e).get(c).next((e=>{if(!e)throw Yi();Ji(e.userId===this.userId),r.push(Wc(this.M,e))}));s.done()})).next((()=>r))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ko(fr);const i=[];return t.forEach((t=>{const r=tc(this.userId,t.path),s=IDBKeyRange.lowerBound(r),o=Au(e).Wt({range:s},((e,i,r)=>{const[s,o,a]=e,c=Xa(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):r.done()}));i.push(o)})),Ec.waitFor(i).next((()=>this.fn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,r=tc(this.userId,n),s=IDBKeyRange.lowerBound(r);let o=new Ko(fr);return Au(e).Wt({range:s},((e,t,r)=>{const[s,a,c]=e,u=Xa(a);s===this.userId&&n.isPrefixOf(u)?u.length===i&&(o=o.add(c)):r.done()})).next((()=>this.fn(e,o)))}fn(e,t){const n=[],i=[];return t.forEach((t=>{i.push(Cu(e).get(t).next((e=>{if(null===e)throw Yi();Ji(e.userId===this.userId),n.push(Wc(this.M,e))})))})),Ec.waitFor(i).next((()=>n))}removeMutationBatch(e,t){return Eu(e.Ht,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.dn(t.batchId)})),Ec.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}dn(e){delete this.hn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Ec.resolve();const n=IDBKeyRange.lowerBound([this.userId]),i=[];return Au(e).Wt({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=Xa(e[1]);i.push(t)}else n.done()})).next((()=>{Ji(0===i.length)}))}))}containsKey(e,t){return xu(e,this.userId,t)}_n(e){return Ou(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function xu(e,t,n){const i=tc(t,n.path),r=i[1],s=IDBKeyRange.lowerBound(i);let o=!1;return Au(e).Wt({range:s,jt:!0},((e,n,i)=>{const[s,a,c]=e;s===t&&a===r&&(o=!0),i.done()})).next((()=>o))}function Cu(e){return Lc(e,"mutations")}function Au(e){return Lc(e,"documentMutations")}function Ou(e){return Lc(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new Du(0)}static gn(){return new Du(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t){this.referenceDelegate=e,this.M=t}allocateTargetId(e){return this.yn(e).next((t=>{const n=new Du(t.highestTargetId);return t.highestTargetId=n.next(),this.pn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.yn(e).next((e=>yr.fromTimestamp(new vr(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.yn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.yn(e).next((i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.pn(e,i))))}addTargetData(e,t){return this.In(e,t).next((()=>this.yn(e).next((n=>(n.targetCount+=1,this.Tn(t,n),this.pn(e,n))))))}updateTargetData(e,t){return this.In(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>$u(e).delete(t.targetId))).next((()=>this.yn(e))).next((t=>(Ji(t.targetCount>0),t.targetCount-=1,this.pn(e,t))))}removeTargets(e,t,n){let i=0;const r=[];return $u(e).Wt(((s,o)=>{const a=Kc(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(i++,r.push(this.removeTargetData(e,a)))})).next((()=>Ec.waitFor(r))).next((()=>i))}forEachTarget(e,t){return $u(e).Wt(((e,n)=>{const i=Kc(n);t(i)}))}yn(e){return Pu(e).get("targetGlobalKey").next((e=>(Ji(null!==e),e)))}pn(e,t){return Pu(e).put("targetGlobalKey",t)}In(e,t){return $u(e).put(Gc(this.M,t))}Tn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.yn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=_s(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let r=null;return $u(e).Wt({range:i,index:"queryTargetsIndex"},((e,n,i)=>{const s=Kc(n);Ss(t,s.target)&&(r=s,i.done())})).next((()=>r))}addMatchingKeys(e,t,n){const i=[],r=Lu(e);return t.forEach((t=>{const s=Ya(t.path);i.push(r.put({targetId:n,path:s})),i.push(this.referenceDelegate.addReference(e,n,t))})),Ec.waitFor(i)}removeMatchingKeys(e,t,n){const i=Lu(e);return Ec.forEach(t,(t=>{const r=Ya(t.path);return Ec.waitFor([i.delete([n,r]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Lu(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Lu(e);let r=ia();return i.Wt({range:n,jt:!0},((e,t,n)=>{const i=Xa(e[1]),s=new jr(i);r=r.add(s)})).next((()=>r))}containsKey(e,t){const n=Ya(t.path),i=IDBKeyRange.bound([n],[gr(n)],!1,!0);let r=0;return Lu(e).Wt({index:"documentTargetsIndex",jt:!0,range:i},(([e,t],n,i)=>{0!==e&&(r++,i.done())})).next((()=>r>0))}Et(e,t){return $u(e).get(t).next((e=>e?Kc(e):null))}}function $u(e){return Lc(e,"targets")}function Pu(e){return Lc(e,"targetGlobal")}function Lu(e){return Lc(e,"targetDocuments")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(e){if(e.code!==er.FAILED_PRECONDITION||e.message!==Ic)throw e;Wi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu([e,t],[n,i]){const r=fr(e,n);return 0===r?fr(t,i):r}class Vu{constructor(e){this.En=e,this.buffer=new Ko(Mu),this.An=0}Rn(){return++this.An}bn(e){const t=[e,this.Rn()];if(this.buffer.size<this.En)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Mu(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Fu{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.Pn=!1,this.Vn=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.vn(e)}stop(){this.Vn&&(this.Vn.cancel(),this.Vn=null)}get started(){return null!==this.Vn}vn(e){const t=this.Pn?3e5:6e4;Wi("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Vn=null,this.Pn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Ac(e)?Wi("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Ru(e)}await this.vn(e)}))}}class Bu{constructor(e,t){this.Sn=e,this.params=t}calculateTargetCount(e,t){return this.Sn.Dn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Ec.resolve(hr.A);const n=new Vu(t);return this.Sn.forEachTarget(e,(e=>n.bn(e.sequenceNumber))).next((()=>this.Sn.Cn(e,(e=>n.bn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Sn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Sn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Wi("LruGarbageCollector","Garbage collection skipped; disabled"),Ec.resolve(Iu)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Wi("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Iu):this.xn(e,t)))}getCacheSize(e){return this.Sn.getCacheSize(e)}xn(e,t){let n,i,r,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Wi("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),i=this.params.maximumSequenceNumbersToCollect):i=t,s=Date.now(),this.nthSequenceNumber(e,i)))).next((i=>(n=i,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(r=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),zi()<=a["in"].DEBUG&&Wi("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${i} in `+(o-s)+"ms\n"+`\tRemoved ${r} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Ec.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Bu(e,t)}(this,t)}Dn(e){const t=this.Nn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Nn(e){let t=0;return this.Cn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Cn(e,t){return this.kn(e,((e,n)=>t(n)))}addReference(e,t,n){return Uu(e,n)}removeReference(e,t,n){return Uu(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Uu(e,t)}Mn(e,t){return function(e,t){let n=!1;return Ou(e).zt((i=>xu(e,i,t).next((e=>(e&&(n=!0),Ec.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.kn(e,((s,o)=>{if(o<=t){const t=this.Mn(e,s).next((t=>{if(!t)return r++,n.getEntry(e,s).next((()=>(n.removeEntry(s,yr.min()),Lu(e).delete([0,Ya(s.path)]))))}));i.push(t)}})).next((()=>Ec.waitFor(i))).next((()=>n.apply(e))).next((()=>r))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Uu(e,t)}kn(e,t){const n=Lu(e);let i,r=hr.A;return n.Wt({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(r!==hr.A&&t(new jr(Xa(i)),r),r=o,i=s):r=hr.A})).next((()=>{r!==hr.A&&t(new jr(Xa(i)),r)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Uu(e,t){return Lu(e).put(function(e,t){return{targetId:0,path:Ya(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this.changes=new qo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,us.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ec.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Ku(e).put(n)}removeEntry(e,t,n){return Ku(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],qc(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.On(e,n))))}getEntry(e,t){let n=us.newInvalidDocument(t);return Ku(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Gu(t))},((e,i)=>{n=this.Fn(t,i)})).next((()=>n))}$n(e,t){let n={size:0,document:us.newInvalidDocument(t)};return Ku(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Gu(t))},((e,i)=>{n={document:this.Fn(t,i),size:Tu(i)}})).next((()=>n))}getEntries(e,t){let n=Jo();return this.Bn(e,t,((e,t)=>{const i=this.Fn(e,t);n=n.insert(e,i)})).next((()=>n))}Ln(e,t){let n=Jo(),i=new zo(jr.comparator);return this.Bn(e,t,((e,t)=>{const r=this.Fn(e,t);n=n.insert(e,r),i=i.insert(e,Tu(t))})).next((()=>({documents:n,Un:i})))}Bn(e,t,n){if(t.isEmpty())return Ec.resolve();let i=new Ko(Yu);t.forEach((e=>i=i.add(e)));const r=IDBKeyRange.bound(Gu(i.first()),Gu(i.last())),s=i.getIterator();let o=s.getNext();return Ku(e).Wt({index:"documentKeyIndex",range:r},((e,t,i)=>{const r=jr.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Yu(o,r)<0;)n(o,null),o=s.getNext();o&&o.isEqual(r)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?i.Ut(Gu(o)):i.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getAllFromCollection(e,t,n){const i=[t.popLast().toArray(),t.lastSegment(),qc(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],r=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ku(e).qt(IDBKeyRange.bound(i,r,!0)).next((e=>{let t=Jo();for(const n of e){const e=this.Fn(jr.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,i){let r=Jo();const s=Zu(t,n),o=Zu(t,vs.max());return Ku(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.Fn(jr.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);r=r.insert(s.key,s),r.size===i&&n.done()})).next((()=>r))}newChangeBuffer(e){return new Hu(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Wu(e).get("remoteDocumentGlobalKey").next((e=>(Ji(!!e),e)))}On(e,t){return Wu(e).put("remoteDocumentGlobalKey",t)}Fn(e,t){if(t){const e=jc(this.M,t);if(!e.isNoDocument()||!e.version.isEqual(yr.min()))return e}return us.newInvalidDocument(e)}}class Hu extends qu{constructor(e,t){super(),this.qn=e,this.trackRemovals=t,this.Gn=new qo((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,i=new Ko(((e,t)=>fr(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((r,s)=>{const o=this.Gn.get(r);if(t.push(this.qn.removeEntry(e,r,o.readTime)),s.isValidDocument()){const a=Uc(this.qn.M,s);i=i.add(r.path.popLast());const c=Tu(a);n+=c-o.size,t.push(this.qn.addEntry(e,r,a))}else if(n-=o.size,this.trackRemovals){const n=Uc(this.qn.M,s.convertToNoDocument(yr.min()));t.push(this.qn.addEntry(e,r,n))}})),i.forEach((n=>{t.push(this.qn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.qn.updateMetadata(e,n)),Ec.waitFor(t)}getFromCache(e,t){return this.qn.$n(e,t).next((e=>(this.Gn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.qn.Ln(e,t).next((({documents:e,Un:t})=>(t.forEach(((t,n)=>{this.Gn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Wu(e){return Lc(e,"remoteDocumentGlobal")}function Ku(e){return Lc(e,"remoteDocumentsV14")}function Gu(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Zu(e,t){const n=t.documentKey.path.toArray();return[e,qc(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Yu(e,t){const n=e.path.length-t.path.length;return 0!==n?n:jr.comparator(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.M=e}kt(e,t,n,i){const r=new Tc("createOrUpgrade",t);n<1&&i>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ec,{unique:!0}),e.createObjectStore("documentMutations")}(e),Qu(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Ec.resolve();return n<3&&i>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Qu(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:yr.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(r)))),n<4&&i>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").qt().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ec,{unique:!0});const i=t.store("mutations"),r=n.map((e=>i.put(e)));return Ec.waitFor(r)}))}(e,r)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&i>=5&&(s=s.next((()=>this.Kn(r)))),n<6&&i>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Qn(r))))),n<7&&i>=7&&(s=s.next((()=>this.jn(r)))),n<8&&i>=8&&(s=s.next((()=>this.Wn(e,r)))),n<9&&i>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&i>=10&&(s=s.next((()=>this.zn(r)))),n<11&&i>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&i>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:mc});t.createIndex("collectionPathOverlayIndex",gc,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",vc,{unique:!1})}(e)}))),n<13&&i>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:rc});t.createIndex("documentKeyIndex",sc),t.createIndex("collectionGroupIndex",oc)}(e))).next((()=>this.Hn(e,r))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&i>=14&&(s=s.next((()=>{!function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:hc}).createIndex("sequenceNumberIndex",dc,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:pc}).createIndex("documentKeyIndex",fc,{unique:!1})}(e)}))),s}Qn(e){let t=0;return e.store("remoteDocuments").Wt(((e,n)=>{t+=Tu(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Kn(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.qt().next((t=>Ec.forEach(t,(t=>{const i=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.qt("userMutationsIndex",i).next((n=>Ec.forEach(n,(n=>{Ji(n.userId===t.userId);const i=Wc(this.M,n);return Eu(e,t.userId,i).next((()=>{}))}))))}))))}jn(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const i=[];return n.Wt(((n,r)=>{const s=new Sr(n),o=function(e){return[0,Ya(e)]}(s);i.push(t.get(o).next((n=>n?Ec.resolve():(n=>t.put({targetId:0,path:Ya(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Ec.waitFor(i)))}))}Wn(e,t){e.createObjectStore("collectionParents",{keyPath:lc});const n=t.store("collectionParents"),i=new mu,r=e=>{if(i.add(e)){const t=e.lastSegment(),i=e.popLast();return n.put({collectionId:t,parent:Ya(i)})}};return t.store("remoteDocuments").Wt({jt:!0},((e,t)=>{const n=new Sr(e);return r(n.popLast())})).next((()=>t.store("documentMutations").Wt({jt:!0},(([e,t,n],i)=>{const s=Xa(t);return r(s.popLast())}))))}zn(e){const t=e.store("targets");return t.Wt(((e,n)=>{const i=Kc(n),r=Gc(this.M,i);return t.put(r)}))}Hn(e,t){const n=t.store("remoteDocuments"),i=[];return n.Wt(((e,n)=>{const r=t.store("remoteDocumentsV14"),s=(o=n,o.document?new jr(Sr.fromString(o.document.name).popFirst(5)):o.noDocument?jr.fromSegments(o.noDocument.path):o.unknownDocument?jr.fromSegments(o.unknownDocument.path):Yi()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};i.push(r.put(a))})).next((()=>Ec.waitFor(i)))}}function Qu(e){e.createObjectStore("targetDocuments",{keyPath:cc}).createIndex("documentTargetsIndex",uc,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ac,{unique:!0}),e.createObjectStore("targetGlobal")}const Xu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class el{constructor(e,t,n,i,r,s,o,a,c,u,l=13){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Jn=r,this.window=s,this.document=o,this.Yn=c,this.Xn=u,this.Zn=l,this.ts=null,this.es=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ns=null,this.inForeground=!1,this.ss=null,this.rs=null,this.os=Number.NEGATIVE_INFINITY,this.us=e=>Promise.resolve(),!el.vt())throw new tr(er.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ju(this,i),this.cs=t+"main",this.M=new Bc(a),this.hs=new kc(this.cs,this.Zn,new Ju(this.M)),this.ls=new Nu(this.referenceDelegate,this.M),this.fs=function(e){return new zu(e)}(this.M),this.ds=new Qc,this.window&&this.window.localStorage?this._s=this.window.localStorage:(this._s=null,!1===u&&Ki("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ws().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new tr(er.FAILED_PRECONDITION,Xu);return this.gs(),this.ys(),this.ps(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.ls.getHighestSequenceNumber(e)))})).then((e=>{this.ts=new hr(e,this.Yn)})).then((()=>{this.es=!0})).catch((e=>(this.hs&&this.hs.close(),Promise.reject(e))))}Is(e){return this.us=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.hs.Ot((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Jn.enqueueAndForget((async()=>{this.started&&await this.ws()})))}ws(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>nl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ts(e).next((e=>{e||(this.isPrimary=!1,this.Jn.enqueueRetryable((()=>this.us(!1))))}))})).next((()=>this.Es(e))).next((t=>this.isPrimary&&!t?this.As(e).next((()=>!1)):!!t&&this.Rs(e).next((()=>!0)))))).catch((e=>{if(Ac(e))return Wi("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Wi("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Jn.enqueueRetryable((()=>this.us(e))),this.isPrimary=e}))}Ts(e){return tl(e).get("owner").next((e=>Ec.resolve(this.bs(e))))}Ps(e){return nl(e).delete(this.clientId)}async Vs(){if(this.isPrimary&&!this.vs(this.os,18e5)){this.os=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Lc(e,"clientMetadata");return t.qt().next((e=>{const n=this.Ss(e,18e5),i=e.filter((e=>-1===n.indexOf(e)));return Ec.forEach(i,(e=>t.delete(e.clientId))).next((()=>i))}))})).catch((()=>[]));if(this._s)for(const t of e)this._s.removeItem(this.Ds(t.clientId))}}ps(){this.rs=this.Jn.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ws().then((()=>this.Vs())).then((()=>this.ps()))))}bs(e){return!!e&&e.ownerId===this.clientId}Es(e){return this.Xn?Ec.resolve(!0):tl(e).get("owner").next((t=>{if(null!==t&&this.vs(t.leaseTimestampMs,5e3)&&!this.Cs(t.ownerId)){if(this.bs(t)&&this.networkEnabled)return!0;if(!this.bs(t)){if(!t.allowTabSynchronization)throw new tr(er.FAILED_PRECONDITION,Xu);return!1}}return!(!this.networkEnabled||!this.inForeground)||nl(e).qt().next((e=>void 0===this.Ss(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,i=this.networkEnabled===e.networkEnabled;if(t||n&&i)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Wi("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.es=!1,this.xs(),this.rs&&(this.rs.cancel(),this.rs=null),this.Ns(),this.ks(),await this.hs.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Pc(e,hr.A);return this.As(t).next((()=>this.Ps(t)))})),this.hs.close(),this.Ms()}Ss(e,t){return e.filter((e=>this.vs(e.updateTimeMs,t)&&!this.Cs(e.clientId)))}Os(){return this.runTransaction("getActiveClients","readonly",(e=>nl(e).qt().next((e=>this.Ss(e,18e5).map((e=>e.clientId))))))}get started(){return this.es}getMutationQueue(e,t){return ku.Yt(e,this.M,t,this.referenceDelegate)}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getIndexManager(e){return new vu(e)}getDocumentOverlayCache(e){return tu.Yt(this.M,e)}getBundleCache(){return this.ds}runTransaction(e,t,n){Wi("IndexedDbPersistence","Starting transaction:",e);const i="readonly"===t?"readonly":"readwrite",r=14===(s=this.Zn)?_c:13===s?wc:12===s?bc:11===s?yc:void Yi();var s;let o;return this.hs.runTransaction(e,i,r,(i=>(o=new Pc(i,this.ts?this.ts.next():hr.A),"readwrite-primary"===t?this.Ts(o).next((e=>!!e||this.Es(o))).next((t=>{if(!t)throw Ki(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Jn.enqueueRetryable((()=>this.us(!1))),new tr(er.FAILED_PRECONDITION,Ic);return n(o)})).next((e=>this.Rs(o).next((()=>e)))):this.Fs(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Fs(e){return tl(e).get("owner").next((e=>{if(null!==e&&this.vs(e.leaseTimestampMs,5e3)&&!this.Cs(e.ownerId)&&!this.bs(e)&&!(this.Xn||this.allowTabSynchronization&&e.allowTabSynchronization))throw new tr(er.FAILED_PRECONDITION,Xu)}))}Rs(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return tl(e).put("owner",t)}static vt(){return kc.vt()}As(e){const t=tl(e);return t.get("owner").next((e=>this.bs(e)?(Wi("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Ec.resolve()))}vs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Ki(`Detected an update time that is in the future: ${e} > ${n}`),!1))}gs(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ss=()=>{this.Jn.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ws())))},this.document.addEventListener("visibilitychange",this.ss),this.inForeground="visible"===this.document.visibilityState)}Ns(){this.ss&&(this.document.removeEventListener("visibilitychange",this.ss),this.ss=null)}ys(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ns=()=>{this.xs(),(0,c.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Jn.enterRestrictedMode(!0),this.Jn.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ns))}ks(){this.ns&&(this.window.removeEventListener("pagehide",this.ns),this.ns=null)}Cs(e){var t;try{const n=null!==(null===(t=this._s)||void 0===t?void 0:t.getItem(this.Ds(e)));return Wi("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Ki("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xs(){if(this._s)try{this._s.setItem(this.Ds(this.clientId),String(Date.now()))}catch(S){Ki("Failed to set zombie client id.",S)}}Ms(){if(this._s)try{this._s.removeItem(this.Ds(this.clientId))}catch(S){}}Ds(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function tl(e){return Lc(e,"owner")}function nl(e){return Lc(e,"clientMetadata")}function il(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class rl{constructor(e,t,n){this.fs=e,this.$s=t,this.indexManager=n}Bs(e,t){return this.$s.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Ls(e,t,n)))}Ls(e,t,n){return this.fs.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}Us(e,t){e.forEach(((e,n)=>{for(const i of t)i.applyToLocalView(n)}))}qs(e,t){return this.fs.getEntries(e,t).next((t=>this.Gs(e,t).next((()=>t))))}Gs(e,t){return this.$s.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.Us(t,e)))}Ks(e,t,n){return function(e){return jr.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Qs(e,t.path):Ks(t)?this.js(e,t,n):this.Ws(e,t,n)}Qs(e,t){return this.Bs(e,new jr(t)).next((e=>{let t=Xo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}js(e,t,n){const i=t.collectionGroup;let r=Xo();return this.indexManager.getCollectionParents(e,i).next((s=>Ec.forEach(s,(s=>{const o=function(e,t){return new Bs(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(i));return this.Ws(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}Ws(e,t,n){let i;return this.fs.getAllFromCollection(e,t.path,n).next((n=>(i=n,this.$s.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let r=i.get(n);null==r&&(r=us.newInvalidDocument(n),i=i.insert(n,r)),xo(e,r,t.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}})).next((()=>(i.forEach(((e,n)=>{eo(t,n)||(i=i.remove(e))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.zs=n,this.Hs=i}static Js(e,t){let n=ia(),i=ia();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new sl(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{Ys(e){this.Xs=e}Ks(e,t,n,i){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(yr.min())?this.Zs(e,t):this.Xs.qs(e,i).next((r=>{const s=this.ti(t,r);return(qs(t)||zs(t))&&this.ei(t.limitType,s,i,n)?this.Zs(e,t):(zi()<=a["in"].DEBUG&&Wi("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Xs(t)),this.Xs.Ks(e,t,ms(n,-1)).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}ti(e,t){let n=new Ko(no(e));return t.forEach(((t,i)=>{eo(e,i)&&(n=n.add(i))})),n}ei(e,t,n,i){if(n.size!==t.size)return!0;const r="F"===e?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Zs(e,t){return zi()<=a["in"].DEBUG&&Wi("QueryEngine","Using full collection scan to execute query:",Xs(t)),this.Xs.Ks(e,t,vs.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t,n,i){this.persistence=e,this.ni=t,this.M=i,this.si=new zo(fr),this.ii=new qo((e=>_s(e)),Ss),this.ri=new Map,this.oi=e.getRemoteDocumentCache(),this.ls=e.getTargetCache(),this.ds=e.getBundleCache(),this.ui(n)}ui(e){this.indexManager=this.persistence.getIndexManager(e),this.$s=this.persistence.getMutationQueue(e,this.indexManager),this.ai=new rl(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.si)))}}function cl(e,t,n,i){return new al(e,t,n,i)}async function ul(e,t){const n=Xi(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.$s.getAllMutationBatches(e).next((r=>(i=r,n.ui(t),n.$s.getAllMutationBatches(e)))).next((t=>{const r=[],s=[];let o=ia();for(const e of i){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.ai.qs(e,o).next((e=>({ci:e,removedBatchIds:r,addedBatchIds:s})))}))}))}function ll(e,t){const n=Xi(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.oi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=Ec.resolve();return s.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Ji(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.$s.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.$s.performConsistencyCheck(e))).next((()=>n.ai.qs(e,i)))}))}function hl(e){const t=Xi(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.ls.getLastRemoteSnapshotVersion(e)))}function dl(e,t){const n=Xi(e),i=t.snapshotVersion;let r=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.oi.newChangeBuffer({trackRemovals:!0});r=n.si;const o=[];t.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.ls.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.ls.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Cr.EMPTY_BYTE_STRING,yr.min()).withLastLimboFreeSnapshotVersion(yr.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,i)),r=r.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.ls.updateTargetData(e,u))}));let a=Jo();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(pl(e,s,t.documentUpdates).next((e=>{a=e}))),!i.isEqual(yr.min())){const t=n.ls.getLastRemoteSnapshotVersion(e).next((t=>n.ls.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return Ec.waitFor(o).next((()=>s.apply(e))).next((()=>n.ai.Gs(e,a))).next((()=>a))})).then((e=>(n.si=r,e)))}function pl(e,t,n){let i=ia();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Jo();return n.forEach(((n,r)=>{const s=e.get(n);r.isNoDocument()&&r.version.isEqual(yr.min())?(t.removeEntry(n,r.readTime),i=i.insert(n,r)):!s.isValidDocument()||r.version.compareTo(s.version)>0||0===r.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(r),i=i.insert(n,r)):Wi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",r.version)})),i}))}function fl(e,t){const n=Xi(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.$s.getNextMutationBatchAfterBatchId(e,t))))}function ml(e,t){const n=Xi(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.ls.getTargetData(e,t).next((r=>r?(i=r,Ec.resolve(i)):n.ls.allocateTargetId(e).next((r=>(i=new Fc(t,r,0,e.currentSequenceNumber),n.ls.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.si.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.si=n.si.insert(e.targetId,e),n.ii.set(t,e.targetId)),e}))}async function gl(e,t,n){const i=Xi(e),r=i.si.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(e=>i.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!Ac(e))throw e;Wi("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.si=i.si.remove(t),i.ii.delete(r.target)}function vl(e,t,n){const i=Xi(e);let r=yr.min(),s=ia();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=Xi(e),r=i.ii.get(n);return void 0!==r?Ec.resolve(i.si.get(r)):i.ls.getTargetData(t,n)}(i,e,Zs(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.ls.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>i.ni.Ks(e,t,n?r:yr.min(),n?s:ia()))).next((e=>(wl(i,to(t),e),{documents:e,hi:s})))))}function yl(e,t){const n=Xi(e),i=Xi(n.ls),r=n.si.get(t);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",(e=>i.Et(e,t).next((e=>e?e.target:null))))}function bl(e,t){const n=Xi(e),i=n.ri.get(t)||yr.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.oi.getAllFromCollectionGroup(e,t,ms(i,-1),Number.MAX_SAFE_INTEGER))).then((e=>(wl(n,t,e),e)))}function wl(e,t,n){let i=yr.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.ri.set(t,i)}async function _l(e,t,n,i){const r=Xi(e);let s=ia(),o=Jo();for(const u of n){const e=t.li(u.metadata.name);u.document&&(s=s.add(e));const n=t.fi(u);n.setReadTime(t.di(u.metadata.readTime)),o=o.insert(e,n)}const a=r.oi.newChangeBuffer({trackRemovals:!0}),c=await ml(r,function(e){return Zs(Us(Sr.fromString(`__bundle__/docs/${e}`)))}(i));return r.persistence.runTransaction("Apply bundle documents","readwrite",(e=>pl(e,a,o).next((t=>(a.apply(e),t))).next((t=>r.ls.removeMatchingKeysForTargetId(e,c.targetId).next((()=>r.ls.addMatchingKeys(e,s,c.targetId))).next((()=>r.ai.Gs(e,t))).next((()=>t))))))}async function Il(e,t,n=ia()){const i=await ml(e,Zs(Zc(t.bundledQuery))),r=Xi(e);return r.persistence.runTransaction("Save named query","readwrite",(e=>{const s=_a(t.readTime);if(i.snapshotVersion.compareTo(s)>=0)return r.ds.saveNamedQuery(e,t);const o=i.withResumeToken(Cr.EMPTY_BYTE_STRING,s);return r.si=r.si.insert(o.targetId,o),r.ls.updateTargetData(e,o).next((()=>r.ls.removeMatchingKeysForTargetId(e,i.targetId))).next((()=>r.ls.addMatchingKeys(e,n,i.targetId))).next((()=>r.ds.saveNamedQuery(e,t)))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,t){return Ec.resolve(this._i.get(t))}saveBundleMetadata(e,t){var n;return this._i.set(t.id,{id:(n=t).id,version:n.version,createTime:_a(n.createTime)}),Ec.resolve()}getNamedQuery(e,t){return Ec.resolve(this.wi.get(t))}saveNamedQuery(e,t){return this.wi.set(t.name,function(e){return{name:e.name,query:Zc(e.bundledQuery),readTime:_a(e.readTime)}}(t)),Ec.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.overlays=new zo(jr.comparator),this.mi=new Map}getOverlay(e,t){return Ec.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.Xt(e,t,i)})),Ec.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.mi.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.mi.delete(n)),Ec.resolve()}getOverlaysForCollection(e,t,n){const i=ea(),r=t.length+1,s=new jr(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return Ec.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new zo(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=ea(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ea(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=i)break;return Ec.resolve(o)}Xt(e,t,n){if(null===n)return;const i=this.overlays.get(n.key);if(null!==i){const e=this.mi.get(i.largestBatchId).delete(n.key);this.mi.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Vc(t,n));let r=this.mi.get(t);void 0===r&&(r=ia(),this.mi.set(t,r)),this.mi.set(t,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.gi=new Ko(kl.yi),this.pi=new Ko(kl.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,t){const n=new kl(e,t);this.gi=this.gi.add(n),this.pi=this.pi.add(n)}Ti(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ei(new kl(e,t))}Ai(e,t){e.forEach((e=>this.removeReference(e,t)))}Ri(e){const t=new jr(new Sr([])),n=new kl(t,e),i=new kl(t,e+1),r=[];return this.pi.forEachInRange([n,i],(e=>{this.Ei(e),r.push(e.key)})),r}bi(){this.gi.forEach((e=>this.Ei(e)))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const t=new jr(new Sr([])),n=new kl(t,e),i=new kl(t,e+1);let r=ia();return this.pi.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new kl(e,0),n=this.gi.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class kl{constructor(e,t){this.key=e,this.Vi=t}static yi(e,t){return jr.comparator(e.key,t.key)||fr(e.Vi,t.Vi)}static Ii(e,t){return fr(e.Vi,t.Vi)||jr.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.$s=[],this.vi=1,this.Si=new Ko(kl.yi)}checkEmpty(e){return Ec.resolve(0===this.$s.length)}addMutationBatch(e,t,n,i){const r=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const s=new Rc(r,t,n,i);this.$s.push(s);for(const o of i)this.Si=this.Si.add(new kl(o.key,r)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ec.resolve(s)}lookupMutationBatch(e,t){return Ec.resolve(this.Di(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Ci(n),r=i<0?0:i;return Ec.resolve(this.$s.length>r?this.$s[r]:null)}getHighestUnacknowledgedBatchId(){return Ec.resolve(0===this.$s.length?-1:this.vi-1)}getAllMutationBatches(e){return Ec.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new kl(t,0),i=new kl(t,Number.POSITIVE_INFINITY),r=[];return this.Si.forEachInRange([n,i],(e=>{const t=this.Di(e.Vi);r.push(t)})),Ec.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ko(fr);return t.forEach((e=>{const t=new kl(e,0),i=new kl(e,Number.POSITIVE_INFINITY);this.Si.forEachInRange([t,i],(e=>{n=n.add(e.Vi)}))})),Ec.resolve(this.xi(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;jr.isDocumentKey(r)||(r=r.child(""));const s=new kl(new jr(r),0);let o=new Ko(fr);return this.Si.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.Vi)),!0)}),s),Ec.resolve(this.xi(o))}xi(e){const t=[];return e.forEach((e=>{const n=this.Di(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Ji(0===this.Ni(t.batchId,"removed")),this.$s.shift();let n=this.Si;return Ec.forEach(t.mutations,(i=>{const r=new kl(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Si=n}))}dn(e){}containsKey(e,t){const n=new kl(t,0),i=this.Si.firstAfterOrEqual(n);return Ec.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.$s.length,Ec.resolve()}Ni(e,t){return this.Ci(e)}Ci(e){return 0===this.$s.length?0:e-this.$s[0].batchId}Di(e){const t=this.Ci(e);return t<0||t>=this.$s.length?null:this.$s[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.ki=e,this.docs=new zo(jr.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.ki(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ec.resolve(n?n.document.mutableCopy():us.newInvalidDocument(t))}getEntries(e,t){let n=Jo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():us.newInvalidDocument(e))})),Ec.resolve(n)}getAllFromCollection(e,t,n){let i=Jo();const r=new jr(t.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:e,value:{document:r}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||ys(gs(r),n)<=0||(i=i.insert(r.key,r.mutableCopy()))}return Ec.resolve(i)}getAllFromCollectionGroup(e,t,n,i){Yi()}Mi(e,t){return Ec.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Al(this)}getSize(e){return Ec.resolve(this.size)}}class Al extends qu{constructor(e){super(),this.qn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.qn.addEntry(e,i)):this.qn.removeEntry(n)})),Ec.waitFor(t)}getFromCache(e,t){return this.qn.getEntry(e,t)}getAllFromCache(e,t){return this.qn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.persistence=e,this.Oi=new qo((e=>_s(e)),Ss),this.lastRemoteSnapshotVersion=yr.min(),this.highestTargetId=0,this.Fi=0,this.$i=new Tl,this.targetCount=0,this.Bi=Du.mn()}forEachTarget(e,t){return this.Oi.forEach(((e,n)=>t(n))),Ec.resolve()}getLastRemoteSnapshotVersion(e){return Ec.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ec.resolve(this.Fi)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),Ec.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Fi&&(this.Fi=t),Ec.resolve()}In(e){this.Oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Bi=new Du(t),this.highestTargetId=t),e.sequenceNumber>this.Fi&&(this.Fi=e.sequenceNumber)}addTargetData(e,t){return this.In(t),this.targetCount+=1,Ec.resolve()}updateTargetData(e,t){return this.In(t),Ec.resolve()}removeTargetData(e,t){return this.Oi.delete(t.target),this.$i.Ri(t.targetId),this.targetCount-=1,Ec.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Oi.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Oi.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),Ec.waitFor(r).next((()=>i))}getTargetCount(e){return Ec.resolve(this.targetCount)}getTargetData(e,t){const n=this.Oi.get(t)||null;return Ec.resolve(n)}addMatchingKeys(e,t,n){return this.$i.Ti(t,n),Ec.resolve()}removeMatchingKeys(e,t,n){this.$i.Ai(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),Ec.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.$i.Ri(t),Ec.resolve()}getMatchingKeysForTargetId(e,t){const n=this.$i.Pi(t);return Ec.resolve(n)}containsKey(e,t){return Ec.resolve(this.$i.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t){this.Li={},this.overlays={},this.ts=new hr(0),this.es=!1,this.es=!0,this.referenceDelegate=e(this),this.ls=new Ol(this),this.indexManager=new fu,this.fs=function(e){return new Cl(e)}((e=>this.referenceDelegate.Ui(e))),this.M=new Bc(t),this.ds=new Sl(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new El,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Li[e.toKey()];return n||(n=new xl(t,this.referenceDelegate),this.Li[e.toKey()]=n),n}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(e,t,n){Wi("MemoryPersistence","Starting transaction:",e);const i=new Nl(this.ts.next());return this.referenceDelegate.qi(),n(i).next((e=>this.referenceDelegate.Gi(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Ki(e,t){return Ec.or(Object.values(this.Li).map((n=>()=>n.containsKey(e,t))))}}class Nl extends Sc{constructor(e){super(),this.currentSequenceNumber=e}}class $l{constructor(e){this.persistence=e,this.Qi=new Tl,this.ji=null}static Wi(e){return new $l(e)}get zi(){if(this.ji)return this.ji;throw Yi()}addReference(e,t,n){return this.Qi.addReference(n,t),this.zi.delete(n.toString()),Ec.resolve()}removeReference(e,t,n){return this.Qi.removeReference(n,t),this.zi.add(n.toString()),Ec.resolve()}markPotentiallyOrphaned(e,t){return this.zi.add(t.toString()),Ec.resolve()}removeTarget(e,t){this.Qi.Ri(t.targetId).forEach((e=>this.zi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.zi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}qi(){this.ji=new Set}Gi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ec.forEach(this.zi,(n=>{const i=jr.fromPath(n);return this.Hi(e,i).next((e=>{e||t.removeEntry(i,yr.min())}))})).next((()=>(this.ji=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hi(e,t).next((e=>{e?this.zi.delete(t.toString()):this.zi.add(t.toString())}))}Ui(e){return 0}Hi(e,t){return Ec.or([()=>Ec.resolve(this.Qi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ki(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(e,t){return`firestore_clients_${e}_${t}`}function Ll(e,t,n){let i=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(i+=`_${t.uid}`),i}function Rl(e,t){return`firestore_targets_${e}_${t}`}class Ml{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Ji(e,t,n){const i=JSON.parse(n);let r,s="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return s&&i.error&&(s="string"==typeof i.error.message&&"string"==typeof i.error.code,s&&(r=new tr(i.error.code,i.error.message))),s?new Ml(e,t,i.state,r):(Ki("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Vl{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ji(e,t){const n=JSON.parse(t);let i,r="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code,r&&(i=new tr(n.error.code,n.error.message))),r?new Vl(e,n.state,i):(Ki("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fl{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const n=JSON.parse(t);let i="object"==typeof n&&n.activeTargetIds instanceof Array,r=sa();for(let s=0;i&&s<n.activeTargetIds.length;++s)i=Br(n.activeTargetIds[s]),r=r.add(n.activeTargetIds[s]);return i?new Fl(e,r):(Ki("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Bl{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Bl(t.clientId,t.onlineState):(Ki("SharedClientState",`Failed to parse online state: ${e}`),null)}}class jl{constructor(){this.activeTargetIds=sa()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ul{constructor(e,t,n,i,r){this.window=e,this.Jn=t,this.persistenceKey=n,this.tr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new zo(fr),this.started=!1,this.ir=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.rr=Pl(this.persistenceKey,this.tr),this.ur=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.sr=this.sr.insert(this.tr,new jl),this.ar=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.cr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.lr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.dr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Os();for(const n of e){if(n===this.tr)continue;const e=this.getItem(Pl(this.persistenceKey,n));if(e){const t=Fl.Ji(n,e);t&&(this.sr=this.sr.insert(t.clientId,t))}}this._r();const t=this.storage.getItem(this.lr);if(t){const e=this.wr(t);e&&this.mr(e)}for(const n of this.ir)this.nr(n);this.ir=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach(((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,n){this.yr(e,t,n),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Rl(this.persistenceKey,e));if(n){const i=Vl.Ji(e,n);i&&(t=i.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Rl(this.persistenceKey,e))}updateQueryState(e,t,n){this.Tr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.pr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Wi("SharedClientState","READ",e,t),t}setItem(e,t){Wi("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Wi("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(Wi("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void Ki("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Jn.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.ar.test(t.key)){if(null==t.newValue){const e=this.Rr(t.key);return this.br(e,null)}{const e=this.Pr(t.key,t.newValue);if(e)return this.br(e.clientId,e)}}else if(this.cr.test(t.key)){if(null!==t.newValue){const e=this.Vr(t.key,t.newValue);if(e)return this.vr(e)}}else if(this.hr.test(t.key)){if(null!==t.newValue){const e=this.Sr(t.key,t.newValue);if(e)return this.Dr(e)}}else if(t.key===this.lr){if(null!==t.newValue){const e=this.wr(t.newValue);if(e)return this.mr(e)}}else if(t.key===this.ur){const e=function(e){let t=hr.A;if(null!=e)try{const n=JSON.parse(e);Ji("number"==typeof n),t=n}catch(e){Ki("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==hr.A&&this.sequenceNumberHandler(e)}else if(t.key===this.dr){const e=this.Cr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Nr(e))))}}else this.ir.push(t)}))}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,n){const i=new Ml(this.currentUser,e,t,n),r=Ll(this.persistenceKey,this.currentUser,e);this.setItem(r,i.Yi())}pr(e){const t=Ll(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,n){const i=Rl(this.persistenceKey,e),r=new Vl(e,t,n);this.setItem(i,r.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.ar.exec(e);return t?t[1]:null}Pr(e,t){const n=this.Rr(e);return Fl.Ji(n,t)}Vr(e,t){const n=this.cr.exec(e),i=Number(n[1]),r=void 0!==n[2]?n[2]:null;return Ml.Ji(new ji(r),i,t)}Sr(e,t){const n=this.hr.exec(e),i=Number(n[1]);return Vl.Ji(i,t)}wr(e){return Bl.Ji(e)}Cr(e){return JSON.parse(e)}async vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);Wi("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}br(e,t){const n=t?this.sr.insert(e,t):this.sr.remove(e),i=this.gr(this.sr),r=this.gr(n),s=[],o=[];return r.forEach((e=>{i.has(e)||s.push(e)})),i.forEach((e=>{r.has(e)||o.push(e)})),this.syncEngine.Or(s,o).then((()=>{this.sr=n}))}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=sa();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class ql{constructor(){this.Fr=new jl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new jl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{Br(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Wi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Gr(){Wi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,n,i,r){const s=this.oo(e,t);Wi("RestConnection","Sending: ",s,n);const o={};return this.uo(o,i,r),this.ao(e,s,o,n).then((e=>(Wi("RestConnection","Received: ",e),e)),(t=>{throw Gi("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}co(e,t,n,i,r){return this.ro(e,t,n,i,r)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ui,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}oo(e,t){const n=Wl[e];return`${this.so}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,t,n,i){return new Promise(((r,s)=>{const o=new Fi;o.listenOnce(Pi.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case $i.NO_ERROR:const t=o.getResponseJson();Wi("Connection","XHR received:",JSON.stringify(t)),r(t);break;case $i.TIMEOUT:Wi("Connection",'RPC "'+e+'" timed out'),s(new tr(er.DEADLINE_EXCEEDED,"Request time out"));break;case $i.HTTP_ERROR:const n=o.getStatus();if(Wi("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(er).indexOf(t)>=0?t:er.UNKNOWN}(e.status);s(new tr(t,e.message))}else s(new tr(er.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new tr(er.UNAVAILABLE,"Connection failed."));break;default:Yi()}}finally{Wi("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(i);o.send(t,"POST",a,n,15)}))}ho(e,t,n){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Di(),s=Ni(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mi({})),this.uo(o.initMessageHeaders,t,n),(0,c.uI)()||(0,c.b$)()||(0,c.d)()||(0,c.w1)()||(0,c.Mn)()||(0,c.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");Wi("Connection","Creating WebChannel: "+a,o);const u=r.createWebChannel(a,o);let l=!1,h=!1;const d=new Kl({jr:e=>{h?Wi("Connection","Not sending because WebChannel is closed:",e):(l||(Wi("Connection","Opening WebChannel transport."),u.open(),l=!0),Wi("Connection","WebChannel sending:",e),u.send(e))},Wr:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,Vi.EventType.OPEN,(()=>{h||Wi("Connection","WebChannel transport opened.")})),p(u,Vi.EventType.CLOSE,(()=>{h||(h=!0,Wi("Connection","WebChannel transport closed"),d.eo())})),p(u,Vi.EventType.ERROR,(e=>{h||(h=!0,Gi("Connection","WebChannel transport errored:",e),d.eo(new tr(er.UNAVAILABLE,"The operation could not be completed")))})),p(u,Vi.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];Ji(!!n);const i=n,r=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(r){Wi("Connection","WebChannel received error:",r);const e=r.status;let t=function(e){const t=Fo[e];if(void 0!==t)return Uo(t)}(e),n=r.message;void 0===t&&(t=er.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),h=!0,d.eo(new tr(t,n)),u.close()}else Wi("Connection","WebChannel received:",n),d.no(n)}})),p(s,Li.STAT_EVENT,(e=>{e.stat===Ri.PROXY?Wi("Connection","Detected buffering proxy"):e.stat===Ri.NOPROXY&&Wi("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){return"undefined"!=typeof window?window:null}function Yl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(e){return new va(e,!0)}class Ql{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Jn=e,this.timerId=t,this.lo=n,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,t-n);i>0&&Wi("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),e()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t,n,i,r,s,o,a){this.Jn=e,this.Ao=n,this.Ro=i,this.bo=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new Ql(e,t)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.Vo&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===er.RESOURCE_EXHAUSTED?(Ki(t.toString()),Ki("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===er.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Po===t&&this.Uo(e,n)}),(t=>{e((()=>{const e=new tr(er.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)}))}))}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Go(e,t),this.stream.zr((()=>{n((()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((e=>{n((()=>this.qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(e){return Wi("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.Jn.enqueueAndForget((()=>this.Po===e?t():(Wi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class eh extends Xl{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.M=r}Go(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=$a(this.M,e),n=function(e){if(!("targetChange"in e))return yr.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?yr.min():t.readTime?_a(t.readTime):yr.min()}(e);return this.listener.Ko(t,n)}Qo(e){const t={};t.database=Ca(this.M),t.addTarget=function(e,t){let n;const i=t.target;return n=Es(i)?{documents:Ma(e,i)}:{query:Va(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ba(e,t.resumeToken):t.snapshotVersion.compareTo(yr.min())>0&&(n.readTime=ya(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=Ba(this.M,e);n&&(t.labels=n),this.Oo(t)}jo(e){const t={};t.database=Ca(this.M),t.removeTarget=e,this.Oo(t)}}class th extends Xl{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.M=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(Ji(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=Ra(e.writeResults,e.commitTime),n=_a(e.commitTime);return this.listener.Jo(n,t)}return Ji(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Ca(this.M),this.Oo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Pa(this.M,e)))};this.Oo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.M=i,this.Zo=!1}tu(){if(this.Zo)throw new tr(er.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.bo.ro(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===er.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new tr(er.UNKNOWN,e.toString())}))}co(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.bo.co(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===er.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new tr(er.UNKNOWN,e.toString())}))}terminate(){this.Zo=!0}}class ih{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.au(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Ki(t),this.su=!1):Wi("OnlineStateTracker",t)}au(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br((e=>{n.enqueueAndForget((async()=>{ph(this)&&(Wi("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Xi(e);t.lu.add(4),await oh(t),t._u.set("Unknown"),t.lu.delete(4),await sh(t)}(this))}))})),this._u=new ih(n,i)}}async function sh(e){if(ph(e))for(const t of e.fu)await t(!0)}async function oh(e){for(const t of e.fu)await t(!1)}function ah(e,t){const n=Xi(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),dh(n)?hh(n):Dh(n).Co()&&uh(n,t))}function ch(e,t){const n=Xi(e),i=Dh(n);n.hu.delete(t),i.Co()&&lh(n,t),0===n.hu.size&&(i.Co()?i.ko():ph(n)&&n._u.set("Unknown"))}function uh(e,t){e.wu.Z(t.targetId),Dh(e).Qo(t)}function lh(e,t){e.wu.Z(t),Dh(e).jo(t)}function hh(e){e.wu=new da({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.hu.get(t)||null}),Dh(e).start(),e._u.iu()}function dh(e){return ph(e)&&!Dh(e).Do()&&e.hu.size>0}function ph(e){return 0===Xi(e).lu.size}function fh(e){e.wu=void 0}async function mh(e){e.hu.forEach(((t,n)=>{uh(e,t)}))}async function gh(e,t){fh(e),dh(e)?(e._u.uu(t),hh(e)):e._u.set("Unknown")}async function vh(e,t,n){if(e._u.set("Online"),t instanceof la&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.hu.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.hu.delete(i),e.wu.removeTarget(i))}(e,t)}catch(n){Wi("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await yh(e,n)}else if(t instanceof ca?e.wu.ut(t):t instanceof ua?e.wu._t(t):e.wu.ht(t),!n.isEqual(yr.min()))try{const t=await hl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.yt(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.hu.get(i);r&&e.hu.set(i,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(Cr.EMPTY_BYTE_STRING,n.snapshotVersion)),lh(e,t);const i=new Fc(n.target,t,1,n.sequenceNumber);uh(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Wi("RemoteStore","Failed to raise snapshot:",t),await yh(e,t)}}async function yh(e,t,n){if(!Ac(t))throw t;e.lu.add(1),await oh(e),e._u.set("Offline"),n||(n=()=>hl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Wi("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await sh(e)}))}function bh(e,t){return t().catch((n=>yh(e,n,t)))}async function wh(e){const t=Xi(e),n=Nh(t);let i=t.cu.length>0?t.cu[t.cu.length-1].batchId:-1;for(;_h(t);)try{const e=await fl(t.localStore,i);if(null===e){0===t.cu.length&&n.ko();break}i=e.batchId,Ih(t,e)}catch(e){await yh(t,e)}Sh(t)&&Eh(t)}function _h(e){return ph(e)&&e.cu.length<10}function Ih(e,t){e.cu.push(t);const n=Nh(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function Sh(e){return ph(e)&&!Nh(e).Do()&&e.cu.length>0}function Eh(e){Nh(e).start()}async function Th(e){Nh(e).Xo()}async function kh(e){const t=Nh(e);for(const n of e.cu)t.Ho(n.mutations)}async function xh(e,t,n){const i=e.cu.shift(),r=Mc.from(i,t,n);await bh(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await wh(e)}async function Ch(e,t){t&&Nh(e).zo&&await async function(e,t){if(n=t.code,jo(n)&&n!==er.ABORTED){const n=e.cu.shift();Nh(e).No(),await bh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await wh(e)}var n}(e,t),Sh(e)&&Eh(e)}async function Ah(e,t){const n=Xi(e);n.asyncQueue.verifyOperationInProgress(),Wi("RemoteStore","RemoteStore received new credentials");const i=ph(n);n.lu.add(3),await oh(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await sh(n)}async function Oh(e,t){const n=Xi(e);t?(n.lu.delete(2),await sh(n)):t||(n.lu.add(2),await oh(n),n._u.set("Unknown"))}function Dh(e){return e.mu||(e.mu=function(e,t,n){const i=Xi(e);return i.tu(),new eh(t,i.bo,i.authCredentials,i.appCheckCredentials,i.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{zr:mh.bind(null,e),Jr:gh.bind(null,e),Ko:vh.bind(null,e)}),e.fu.push((async t=>{t?(e.mu.No(),dh(e)?hh(e):e._u.set("Unknown")):(await e.mu.stop(),fh(e))}))),e.mu}function Nh(e){return e.gu||(e.gu=function(e,t,n){const i=Xi(e);return i.tu(),new th(t,i.bo,i.authCredentials,i.appCheckCredentials,i.M,n)}(e.datastore,e.asyncQueue,{zr:Th.bind(null,e),Jr:Ch.bind(null,e),Yo:kh.bind(null,e),Jo:xh.bind(null,e)}),e.fu.push((async t=>{t?(e.gu.No(),await wh(e)):(await e.gu.stop(),e.cu.length>0&&(Wi("RemoteStore",`Stopping write stream with ${e.cu.length} pending writes`),e.cu=[]))}))),e.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class $h{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new $h(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new tr(er.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ph(e,t){if(Ki("AsyncQueue",`${t}: ${e}`),Ac(e))return new tr(er.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||jr.comparator(t.key,n.key):(e,t)=>jr.comparator(e.key,t.key),this.keyedMap=Xo(),this.sortedSet=new zo(this.comparator)}static emptySet(e){return new Lh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Lh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Lh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.yu=new zo(jr.comparator)}track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):Yi():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Mh{constructor(e,t,n,i,r,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,i){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new Mh(e,t,Lh.emptySet(t),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Js(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.Iu=void 0,this.listeners=[]}}class Fh{constructor(){this.queries=new qo((e=>Qs(e)),Js),this.onlineState="Unknown",this.Tu=new Set}}async function Bh(e,t){const n=Xi(e),i=t.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Vh),r)try{s.Iu=await n.onListen(i)}catch(e){const n=Ph(e,`Initialization of query '${Xs(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.listeners.push(t),t.Eu(n.onlineState),s.Iu&&t.Au(s.Iu)&&zh(n)}async function jh(e,t){const n=Xi(e),i=t.query;let r=!1;const s=n.queries.get(i);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Uh(e,t){const n=Xi(e);let i=!1;for(const r of t){const e=r.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Au(r)&&(i=!0);t.Iu=r}}i&&zh(n)}function qh(e,t,n){const i=Xi(e),r=i.queries.get(t);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(t)}function zh(e){e.Tu.forEach((e=>{e.next()}))}class Hh{constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Mh(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.Vu(e)&&(this.Ru.next(e),t=!0):this.vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Du||!n)&&(!e.docs.isEmpty()||"Offline"===t)}Vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=Mh.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.M=e}li(e){return Ta(this.M,e)}fi(e){return e.metadata.exists?Da(this.M,e.document,!1):us.newNoDocument(this.li(e.metadata.name),this.di(e.metadata.readTime))}di(e){return _a(e)}}class Gh{constructor(e,t,n){this.xu=e,this.localStore=t,this.M=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Zh(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=Sr.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,n=new Kh(this.M);for(const i of e)if(i.metadata.queries){const e=n.li(i.metadata.name);for(const n of i.metadata.queries){const i=(t.get(n)||ia()).add(e);t.set(n,i)}}return t}async complete(){const e=await _l(this.localStore,new Kh(this.M),this.documents,this.xu.id),t=this.ku(this.documents);for(const n of this.queries)await Il(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Mu:this.collectionGroups,Ou:e}}}function Zh(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.key=e}}class Jh{constructor(e){this.key=e}}class Qh{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=ia(),this.mutatedKeys=ia(),this.Lu=no(e),this.Uu=new Lh(this.Lu)}get qu(){return this.Fu}Gu(e,t){const n=t?t.Ku:new Rh,i=t?t.Uu:this.Uu;let r=t?t.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a=qs(this.query)&&i.size===this.query.limit?i.last():null,c=zs(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const u=i.get(e),l=eo(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let p=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),p=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),p=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),p=!0):u&&!l&&(n.track({type:1,doc:u}),p=!0,(a||c)&&(o=!0)),p&&(l?(s=s.add(l),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))})),qs(this.query)||zs(this.query))for(;s.size>this.query.limit;){const e=qs(this.query)?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Uu:s,Ku:n,ei:o,mutatedKeys:r}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const r=e.Ku.pu();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Yi()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Lu(e.doc,t.doc))),this.ju(n);const s=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==r.length||a?{snapshot:new Mh(this.query,e.Uu,i,r,e.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new Rh,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach((e=>this.Fu=this.Fu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Fu=this.Fu.delete(e))),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ia(),this.Uu.forEach((e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))}));const t=[];return e.forEach((e=>{this.Bu.has(e)||t.push(new Jh(e))})),this.Bu.forEach((n=>{e.has(n)||t.push(new Yh(n))})),t}Ju(e){this.Fu=e.hi,this.Bu=ia();const t=this.Gu(e.documents);return this.applyChanges(t,!0)}Yu(){return Mh.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Xh{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ed{constructor(e){this.key=e,this.Xu=!1}}class td{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Zu={},this.ta=new qo((e=>Qs(e)),Js),this.ea=new Map,this.na=new Set,this.sa=new zo(jr.comparator),this.ia=new Map,this.ra=new Tl,this.oa={},this.ua=new Map,this.aa=Du.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return!0===this.ca}}async function nd(e,t){const n=Dd(e);let i,r;const s=n.ta.get(t);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Yu();else{const e=await ml(n.localStore,Zs(t));n.isPrimaryClient&&ah(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,r=await id(n,t,i,"current"===s)}return r}async function id(e,t,n,i){e.ha=(t,n,i)=>async function(e,t,n,i){let r=t.view.Gu(n);r.ei&&(r=await vl(e.localStore,t.query,!1).then((({documents:e})=>t.view.Gu(e,r))));const s=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s);return gd(e,t.targetId,o.zu),o.snapshot}(e,t,n,i);const r=await vl(e.localStore,t,!0),s=new Qh(t,r.hi),o=s.Gu(r.documents),a=aa.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);gd(e,n,c.zu);const u=new Xh(t,n,s);return e.ta.set(t,u),e.ea.has(n)?e.ea.get(n).push(t):e.ea.set(n,[t]),c.snapshot}async function rd(e,t){const n=Xi(e),i=n.ta.get(t),r=n.ea.get(i.targetId);if(r.length>1)return n.ea.set(i.targetId,r.filter((e=>!Js(e,t)))),void n.ta.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await gl(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),ch(n.remoteStore,i.targetId),fd(n,i.targetId)})).catch(Ru)):(fd(n,i.targetId),await gl(n.localStore,i.targetId,!0))}async function sd(e,t,n){const i=Nd(e);try{const e=await function(e,t){const n=Xi(e),i=vr.now(),r=t.reduce(((e,t)=>e.add(t.key)),ia());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.ai.qs(e,r).next((r=>{s=r;const o=[];for(const e of t){const t=Co(e,s.get(e.key));null!=t&&o.push(new No(e.key,t,cs(t.value.mapValue),So.exists(!0)))}return n.$s.addMutationBatch(e,i,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.oa[e.currentUser.toKey()];i||(i=new zo(fr)),i=i.insert(t,n),e.oa[e.currentUser.toKey()]=i}(i,e.batchId,n),await bd(i,e.changes),await wh(i.remoteStore)}catch(e){const t=Ph(e,"Failed to persist write");n.reject(t)}}async function od(e,t){const n=Xi(e);try{const e=await dl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.ia.get(t);i&&(Ji(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.Xu=!0:e.modifiedDocuments.size>0?Ji(i.Xu):e.removedDocuments.size>0&&(Ji(i.Xu),i.Xu=!1))})),await bd(n,e,t)}catch(e){await Ru(e)}}function ad(e,t,n){const i=Xi(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.ta.forEach(((n,i)=>{const r=i.view.Eu(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=Xi(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const r of n.listeners)r.Eu(t)&&(i=!0)})),i&&zh(n)}(i.eventManager,t),e.length&&i.Zu.Ko(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function cd(e,t,n){const i=Xi(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.ia.get(t),s=r&&r.key;if(s){let e=new zo(jr.comparator);e=e.insert(s,us.newNoDocument(s,yr.min()));const n=ia().add(s),r=new oa(yr.min(),new Map,new Ko(fr),e,n);await od(i,r),i.sa=i.sa.remove(s),i.ia.delete(t),yd(i)}else await gl(i.localStore,t,!1).then((()=>fd(i,t,n))).catch(Ru)}async function ud(e,t){const n=Xi(e),i=t.batch.batchId;try{const e=await ll(n.localStore,t);pd(n,i,null),dd(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await bd(n,e)}catch(e){await Ru(e)}}async function ld(e,t,n){const i=Xi(e);try{const e=await function(e,t){const n=Xi(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.$s.lookupMutationBatch(e,t).next((t=>(Ji(null!==t),i=t.keys(),n.$s.removeMutationBatch(e,t)))).next((()=>n.$s.performConsistencyCheck(e))).next((()=>n.ai.qs(e,i)))}))}(i.localStore,t);pd(i,t,n),dd(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await bd(i,e)}catch(n){await Ru(n)}}async function hd(e,t){const n=Xi(e);ph(n.remoteStore)||Wi("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Xi(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.$s.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const i=n.ua.get(e)||[];i.push(t),n.ua.set(e,i)}catch(e){const n=Ph(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function dd(e,t){(e.ua.get(t)||[]).forEach((e=>{e.resolve()})),e.ua.delete(t)}function pd(e,t,n){const i=Xi(e);let r=i.oa[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.oa[i.currentUser.toKey()]=r}}function fd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.ea.get(t))e.ta.delete(i),n&&e.Zu.la(i,n);e.ea.delete(t),e.isPrimaryClient&&e.ra.Ri(t).forEach((t=>{e.ra.containsKey(t)||md(e,t)}))}function md(e,t){e.na.delete(t.path.canonicalString());const n=e.sa.get(t);null!==n&&(ch(e.remoteStore,n),e.sa=e.sa.remove(t),e.ia.delete(n),yd(e))}function gd(e,t,n){for(const i of n)i instanceof Yh?(e.ra.addReference(i.key,t),vd(e,i)):i instanceof Jh?(Wi("SyncEngine","Document no longer in limbo: "+i.key),e.ra.removeReference(i.key,t),e.ra.containsKey(i.key)||md(e,i.key)):Yi()}function vd(e,t){const n=t.key,i=n.path.canonicalString();e.sa.get(n)||e.na.has(i)||(Wi("SyncEngine","New document in limbo: "+n),e.na.add(i),yd(e))}function yd(e){for(;e.na.size>0&&e.sa.size<e.maxConcurrentLimboResolutions;){const t=e.na.values().next().value;e.na.delete(t);const n=new jr(Sr.fromString(t)),i=e.aa.next();e.ia.set(i,new ed(n)),e.sa=e.sa.insert(n,i),ah(e.remoteStore,new Fc(Zs(Us(n.path)),i,2,hr.A))}}async function bd(e,t,n){const i=Xi(e),r=[],s=[],o=[];i.ta.isEmpty()||(i.ta.forEach(((e,a)=>{o.push(i.ha(a,t,n).then((e=>{if(e){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),r.push(e);const t=sl.Js(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.Zu.Ko(r),await async function(e,t){const n=Xi(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ec.forEach(t,(t=>Ec.forEach(t.zs,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>Ec.forEach(t.Hs,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!Ac(e))throw e;Wi("LocalStore","Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.si.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.si=n.si.insert(e,r)}}}(i.localStore,s))}async function wd(e,t){const n=Xi(e);if(!n.currentUser.isEqual(t)){Wi("SyncEngine","User change. New user:",t.toKey());const e=await ul(n.localStore,t);n.currentUser=t,function(e,t){e.ua.forEach((e=>{e.forEach((e=>{e.reject(new tr(er.CANCELLED,t))}))})),e.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await bd(n,e.ci)}}function _d(e,t){const n=Xi(e),i=n.ia.get(t);if(i&&i.Xu)return ia().add(i.key);{let e=ia();const i=n.ea.get(t);if(!i)return e;for(const t of i){const i=n.ta.get(t);e=e.unionWith(i.view.qu)}return e}}async function Id(e,t){const n=Xi(e),i=await vl(n.localStore,t.query,!0),r=t.view.Ju(i);return n.isPrimaryClient&&gd(n,t.targetId,r.zu),r}async function Sd(e,t){const n=Xi(e);return bl(n.localStore,t).then((e=>bd(n,e)))}async function Ed(e,t,n,i){const r=Xi(e),s=await function(e,t){const n=Xi(e),i=Xi(n.$s);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>i.ln(e,t).next((t=>t?n.ai.qs(e,t):Ec.resolve(null)))))}(r.localStore,t);null!==s?("pending"===n?await wh(r.remoteStore):"acknowledged"===n||"rejected"===n?(pd(r,t,i||null),dd(r,t),function(e,t){Xi(Xi(e).$s).dn(t)}(r.localStore,t)):Yi(),await bd(r,s)):Wi("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Td(e,t){const n=Xi(e);if(Dd(n),Nd(n),!0===t&&!0!==n.ca){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await kd(n,e.toArray());n.ca=!0,await Oh(n.remoteStore,!0);for(const i of t)ah(n.remoteStore,i)}else if(!1===t&&!1!==n.ca){const e=[];let t=Promise.resolve();n.ea.forEach(((i,r)=>{n.sharedClientState.isLocalQueryTarget(r)?e.push(r):t=t.then((()=>(fd(n,r),gl(n.localStore,r,!0)))),ch(n.remoteStore,r)})),await t,await kd(n,e),function(e){const t=Xi(e);t.ia.forEach(((e,n)=>{ch(t.remoteStore,n)})),t.ra.bi(),t.ia=new Map,t.sa=new zo(jr.comparator)}(n),n.ca=!1,await Oh(n.remoteStore,!1)}}async function kd(e,t,n){const i=Xi(e),r=[],s=[];for(const o of t){let e;const t=i.ea.get(o);if(t&&0!==t.length){e=await ml(i.localStore,Zs(t[0]));for(const e of t){const t=i.ta.get(e),n=await Id(i,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await yl(i.localStore,o);e=await ml(i.localStore,t),await id(i,xd(t),o,!1)}r.push(e)}return i.Zu.Ko(s),r}function xd(e){return js(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Cd(e){const t=Xi(e);return Xi(Xi(t.localStore).persistence).Os()}async function Ad(e,t,n,i){const r=Xi(e);if(r.ca)return void Wi("SyncEngine","Ignoring unexpected query state notification.");const s=r.ea.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await bl(r.localStore,to(s[0])),i=oa.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await bd(r,e,i);break}case"rejected":await gl(r.localStore,t,!0),fd(r,t,i);break;default:Yi()}}async function Od(e,t,n){const i=Dd(e);if(i.ca){for(const e of t){if(i.ea.has(e)){Wi("SyncEngine","Adding an already active target "+e);continue}const t=await yl(i.localStore,e),n=await ml(i.localStore,t);await id(i,xd(t),n.targetId,!1),ah(i.remoteStore,n)}for(const e of n)i.ea.has(e)&&await gl(i.localStore,e,!1).then((()=>{ch(i.remoteStore,e),fd(i,e)})).catch(Ru)}}function Dd(e){const t=Xi(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=od.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_d.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cd.bind(null,t),t.Zu.Ko=Uh.bind(null,t.eventManager),t.Zu.la=qh.bind(null,t.eventManager),t}function Nd(e){const t=Xi(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ud.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ld.bind(null,t),t}function $d(e,t,n){const i=Xi(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=Xi(e),i=_a(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.ds.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(i)>=0))}(e.localStore,i))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(i)),Promise.resolve(new Set);n._updateProgress(Zh(i));const r=new Gh(i,e.localStore,t.M);let s=await t.fa();for(;s;){const e=await r.Nu(s);e&&n._updateProgress(e),s=await t.fa()}const o=await r.complete();return await bd(e,o.Ou,void 0),await function(e,t){const n=Xi(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.ds.saveBundleMetadata(e,t)))}(e.localStore,i),n._completeWith(o.progress),Promise.resolve(o.Mu)}catch(e){return Gi("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(i,t,n).then((e=>{i.sharedClientState.notifyBundleLoaded(e)}))}class Pd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Jl(e.databaseInfo.databaseId),this.sharedClientState=this.da(e),this.persistence=this._a(e),await this.persistence.start(),this.gcScheduler=this.wa(e),this.localStore=this.ma(e)}wa(e){return null}ma(e){return cl(this.persistence,new ol,e.initialUser,this.M)}_a(e){return new Dl($l.Wi,this.M)}da(e){return new ql}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ld extends Pd{constructor(e,t,n){super(),this.ga=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ga.initialize(this,e),await Nd(this.ga.syncEngine),await wh(this.ga.remoteStore),await this.persistence.Is((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}ma(e){return cl(this.persistence,new ol,e.initialUser,this.M)}wa(e){const t=this.persistence.referenceDelegate.garbageCollector;return new Fu(t,e.asyncQueue)}_a(e){const t=il(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Su.withCacheSize(this.cacheSizeBytes):Su.DEFAULT;return new el(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Zl(),Yl(),this.M,this.sharedClientState,!!this.forceOwnership)}da(e){return new ql}}class Rd extends Ld{constructor(e,t){super(e,t,!1),this.ga=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ga.syncEngine;this.sharedClientState instanceof Ul&&(this.sharedClientState.syncEngine={kr:Ed.bind(null,t),Mr:Ad.bind(null,t),Or:Od.bind(null,t),Os:Cd.bind(null,t),Nr:Sd.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Is((async e=>{await Td(this.ga.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}da(e){const t=Zl();if(!Ul.vt(t))throw new tr(er.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=il(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ul(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Md{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ad(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=wd.bind(null,this.syncEngine),await Oh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Fh}createDatastore(e){const t=Jl(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Gl(i));var i;return function(e,t,n,i){return new nh(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>ad(this.syncEngine,e,0),s=Hl.vt()?new Hl:new zl,new rh(t,n,i,r,s);var t,n,i,r,s}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new td(e,t,n,i,r,s);return o&&(a.ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Xi(e);Wi("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await oh(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const i={value:e.slice(n,n+t),done:!1};return n+=t,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ya(this.observer.next,e)}error(e){this.observer.error?this.ya(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}pa(){this.muted=!0}ya(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t){this.Ia=e,this.M=t,this.metadata=new nr,this.buffer=new Uint8Array,this.Ta=new TextDecoder("utf-8"),this.Ea().then((e=>{e&&e.Cu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ia.cancel()}async getMetadata(){return this.metadata.promise}async fa(){return await this.getMetadata(),this.Ea()}async Ea(){const e=await this.Aa();if(null===e)return null;const t=this.Ta.decode(e),n=Number(t);isNaN(n)&&this.Ra(`length string (${t}) is not valid number`);const i=await this.ba(n);return new Wh(JSON.parse(i),e.length+n)}Pa(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Aa(){for(;this.Pa()<0;)if(await this.Va())break;if(0===this.buffer.length)return null;const e=this.Pa();e<0&&this.Ra("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ba(e){for(;this.buffer.length<e;)await this.Va()&&this.Ra("Reached the end of bundle when more is expected.");const t=this.Ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Ra(e){throw this.Ia.cancel(),new Error(`Invalid bundle format: ${e}`)}async Va(){const e=await this.Ia.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new tr(er.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Xi(e),i=Ca(n.M)+"/documents",r={documents:t.map((e=>Ea(n.M,e)))},s=await n.co("BatchGetDocuments",i,r),o=new Map;s.forEach((e=>{const t=Na(n.M,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Ji(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ro(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=jr.fromPath(t);this.mutations.push(new Mo(n,this.precondition(n)))})),await async function(e,t){const n=Xi(e),i=Ca(n.M)+"/documents",r={writes:t.map((e=>Pa(n.M,e)))};await n.ro("Commit",i,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Yi();t=yr.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new tr(er.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?So.updateTime(t):So.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(yr.min()))throw new tr(er.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return So.updateTime(t)}return So.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t,n,i){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=i,this.va=5,this.So=new Ql(this.asyncQueue,"transaction_retry")}run(){this.va-=1,this.Sa()}Sa(){this.So.Io((async()=>{const e=new jd(this.datastore),t=this.Da(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Ca(e)}))))})).catch((e=>{this.Ca(e)}))}))}Da(e){try{const t=this.updateFunction(e);return!Vr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ca(e){this.va>0&&this.xa(e)?(this.va-=1,this.asyncQueue.enqueueAndForget((()=>(this.Sa(),Promise.resolve())))):this.deferred.reject(e)}xa(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!jo(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=ji.UNAUTHENTICATED,this.clientId=pr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Wi("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Wi("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new tr(er.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ph(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function zd(e,t){e.asyncQueue.verifyOperationInProgress(),Wi("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await ul(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Hd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Wd(e);Wi("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>Ah(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Ah(t.remoteStore,n))),e.onlineComponents=t}async function Wd(e){return e.offlineComponents||(Wi("FirestoreClient","Using default OfflineComponentProvider"),await zd(e,new Pd)),e.offlineComponents}async function Kd(e){return e.onlineComponents||(Wi("FirestoreClient","Using default OnlineComponentProvider"),await Hd(e,new Md)),e.onlineComponents}function Gd(e){return Wd(e).then((e=>e.persistence))}function Zd(e){return Wd(e).then((e=>e.localStore))}function Yd(e){return Kd(e).then((e=>e.remoteStore))}function Jd(e){return Kd(e).then((e=>e.syncEngine))}async function Qd(e){const t=await Kd(e),n=t.eventManager;return n.onListen=nd.bind(null,t.syncEngine),n.onUnlisten=rd.bind(null,t.syncEngine),n}function Xd(e){return e.asyncQueue.enqueue((async()=>{const t=await Gd(e),n=await Yd(e);return t.setNetworkEnabled(!0),function(e){const t=Xi(e);return t.lu.delete(0),sh(t)}(n)}))}function ep(e){return e.asyncQueue.enqueue((async()=>{const t=await Gd(e),n=await Yd(e);return t.setNetworkEnabled(!1),async function(e){const t=Xi(e);t.lu.add(0),await oh(t),t._u.set("Offline")}(n)}))}function tp(e,t){const n=new nr;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const i=await function(e,t){const n=Xi(e);return n.persistence.runTransaction("read document","readonly",(e=>n.ai.Bs(e,t)))}(e,t);i.isFoundDocument()?n.resolve(i):i.isNoDocument()?n.resolve(null):n.reject(new tr(er.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const i=Ph(e,`Failed to get document '${t} from cache`);n.reject(i)}}(await Zd(e),t,n))),n.promise}function np(e,t,n={}){const i=new nr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new Fd({next:s=>{t.enqueueAndForget((()=>jh(e,o)));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new tr(er.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new tr(er.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:e=>r.reject(e)}),o=new Hh(Us(n.path),s,{includeMetadataChanges:!0,Du:!0});return Bh(e,o)}(await Qd(e),e.asyncQueue,t,n,i))),i.promise}function ip(e,t){const n=new nr;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const i=await vl(e,t,!0),r=new Qh(t,i.hi),s=r.Gu(i.documents),o=r.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const i=Ph(e,`Failed to execute query '${t} against cache`);n.reject(i)}}(await Zd(e),t,n))),n.promise}function rp(e,t,n={}){const i=new nr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new Fd({next:n=>{t.enqueueAndForget((()=>jh(e,o))),n.fromCache&&"server"===i.source?r.reject(new tr(er.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new Hh(n,s,{includeMetadataChanges:!0,Du:!0});return Bh(e,o)}(await Qd(e),e.asyncQueue,t,n,i))),i.promise}function sp(e,t){const n=new Fd(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Xi(e).Tu.add(t),t.next()}(await Qd(e),n))),()=>{n.pa(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Xi(e).Tu.delete(t)}(await Qd(e),n)))}}function op(e,t){const n=new nr;return e.asyncQueue.enqueueAndForget((async()=>{const i=await function(e){return Kd(e).then((e=>e.datastore))}(e);new Ud(e.asyncQueue,i,t,n).run()})),n.promise}function ap(e,t,n,i){const r=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Bd(e,t)}(function(e,t){if(e instanceof Uint8Array)return Vd(e,t);if(e instanceof ArrayBuffer)return Vd(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Jl(t));e.asyncQueue.enqueueAndForget((async()=>{$d(await Jd(e),r,i)}))}function cp(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Xi(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.ds.getNamedQuery(e,t)))}(await Zd(e),t)))}const up=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(e,t,n){if(!n)throw new tr(er.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function hp(e,t,n,i){if(!0===t&&!0===i)throw new tr(er.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function dp(e){if(!jr.isDocumentKey(e))throw new tr(er.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function pp(e){if(jr.isDocumentKey(e))throw new tr(er.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function fp(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Yi()}function mp(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new tr(er.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fp(e);throw new tr(er.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function gp(e,t){if(t<=0)throw new tr(er.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new tr(er.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new tr(er.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,hp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vp({}),this._settingsFrozen=!1,e instanceof Mr?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new tr(er.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(e.options.projectId)}(e))}get app(){if(!this._app)throw new tr(er.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new tr(er.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vp(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new rr;switch(e.type){case"gapi":const t=e.client;return Ji(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new cr(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new tr(er.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=up.get(e);t&&(Wi("ComponentProvider","Removing Datastore"),up.delete(e),t.terminate())}(this),Promise.resolve()}}function bp(e,t,n,i={}){var r;const s=(e=mp(e,yp))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Gi("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=ji.MOCK_USER;else{t=(0,c.Sg)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new tr(er.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ji(s)}e._authCredentials=new sr(new ir(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ip(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wp(this.firestore,e,this._key)}}class _p{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new _p(this.firestore,e,this._query)}}class Ip extends _p{constructor(e,t,n){super(e,t,Us(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wp(this.firestore,null,new jr(e))}withConverter(e){return new Ip(this.firestore,e,this._path)}}function Sp(e,t,...n){if(e=(0,c.m9)(e),lp("collection","path",t),e instanceof yp){const i=Sr.fromString(t,...n);return pp(i),new Ip(e,null,i)}{if(!(e instanceof wp||e instanceof Ip))throw new tr(er.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Sr.fromString(t,...n));return pp(i),new Ip(e.firestore,null,i)}}function Ep(e,t){if(e=mp(e,yp),lp("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new tr(er.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new _p(e,null,function(e){return new Bs(Sr.emptyPath(),e)}(t))}function Tp(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=pr.R()),lp("doc","path",t),e instanceof yp){const i=Sr.fromString(t,...n);return dp(i),new wp(e,null,new jr(i))}{if(!(e instanceof wp||e instanceof Ip))throw new tr(er.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Sr.fromString(t,...n));return dp(i),new wp(e.firestore,e instanceof Ip?e.converter:null,new jr(i))}}function kp(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof wp||e instanceof Ip)&&(t instanceof wp||t instanceof Ip)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function xp(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof _p&&t instanceof _p&&e.firestore===t.firestore&&Js(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Cp{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new Ql(this,"async_queue_retry"),this.Ua=()=>{const e=Yl();e&&Wi("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=Yl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.qa(),this.Ga(e)}enterRestrictedMode(e){if(!this.Ma){this.Ma=!0,this.Ba=e||!1;const t=Yl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ua)}}enqueue(e){if(this.qa(),this.Ma)return new Promise((()=>{}));const t=new nr;return this.Ga((()=>this.Ma&&this.Ba?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ka.push(e),this.Ka())))}async Ka(){if(0!==this.ka.length){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(S){if(!Ac(S))throw S;Wi("AsyncQueue","Operation failed with retryable error: "+S)}this.ka.length>0&&this.So.Io((()=>this.Ka()))}}Ga(e){const t=this.Na.then((()=>(this.$a=!0,e().catch((e=>{this.Fa=e,this.$a=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Ki("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.$a=!1,e))))));return this.Na=t,t}enqueueAfterDelay(e,t,n){this.qa(),this.La.indexOf(e)>-1&&(t=0);const i=$h.createAndSchedule(this,e,t,n,(e=>this.Qa(e)));return this.Oa.push(i),i}qa(){this.Fa&&Yi()}verifyOperationInProgress(){}async ja(){let e;do{e=this.Na,await e}while(e!==this.Na)}Wa(e){for(const t of this.Oa)if(t.timerId===e)return!0;return!1}za(e){return this.ja().then((()=>{this.Oa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Oa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ja()}))}Ha(e){this.La.push(e)}Qa(e){const t=this.Oa.indexOf(e);this.Oa.splice(t,1)}}function Ap(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Op{constructor(){this._progressObserver={},this._taskCompletionResolver=new nr,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=-1;class Np extends yp{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Cp,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Pp(this),this._firestoreClient.terminate()}}function $p(e){return e._firestoreClient||Pp(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Pp(e){var t;const n=e._freezeSettings(),i=function(e,t,n,i){return new Rr(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new qd(e._authCredentials,e._appCheckCredentials,e._queue,i)}function Lp(e,t){zp(e=mp(e,Np));const n=$p(e),i=e._freezeSettings(),r=new Md;return Mp(n,r,new Ld(r,i.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Rp(e){zp(e=mp(e,Np));const t=$p(e),n=e._freezeSettings(),i=new Md;return Mp(t,i,new Rd(i,n.cacheSizeBytes))}function Mp(e,t,n){const i=new nr;return e.asyncQueue.enqueue((async()=>{try{await zd(e,n),await Hd(e,t),i.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===er.FAILED_PRECONDITION||e.code===er.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),i.reject(e)}})).then((()=>i.promise))}function Vp(e){if(e._initialized&&!e._terminated)throw new tr(er.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new nr;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!kc.vt())return Promise.resolve();const t=e+"main";await kc.delete(t)}(il(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Fp(e){return function(e){const t=new nr;return e.asyncQueue.enqueueAndForget((async()=>hd(await Jd(e),t))),t.promise}($p(e=mp(e,Np)))}function Bp(e){return Xd($p(e=mp(e,Np)))}function jp(e){return ep($p(e=mp(e,Np)))}function Up(e,t){const n=$p(e=mp(e,Np)),i=new Op;return ap(n,e._databaseId,t,i),i}function qp(e,t){return cp($p(e=mp(e,Np)),t).then((t=>t?new _p(e,null,t.query):null))}function zp(e){if(e._initialized||e._terminated)throw new tr(er.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new tr(er.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wp(Cr.fromBase64String(e))}catch(e){throw new tr(er.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Wp(Cr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new tr(er.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new tr(er.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fr(this._lat,e._lat)||fr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=/^__.*__$/;class Yp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new No(e,this.data,this.fieldMask,t,this.fieldTransforms):new Do(e,this.data,t,this.fieldTransforms)}}class Jp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new No(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Qp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Yi()}}class Xp{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Ja(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(e){return new Xp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Xa({path:n,tc:!1});return i.ec(e),i}nc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Xa({path:n,tc:!1});return i.Ja(),i}sc(e){return this.Xa({path:void 0,tc:!0})}ic(e){return wf(e,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Ja(){if(this.path)for(let e=0;e<this.path.length;e++)this.ec(this.path.get(e))}ec(e){if(0===e.length)throw this.ic("Document fields must not be empty");if(Qp(this.Ya)&&Zp.test(e))throw this.ic('Document fields cannot begin and end with "__"')}}class ef{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||Jl(e)}uc(e,t,n,i=!1){return new Xp({Ya:e,methodName:t,oc:n,path:Tr.emptyPath(),tc:!1,rc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function tf(e){const t=e._freezeSettings(),n=Jl(e._databaseId);return new ef(e._databaseId,!!t.ignoreUndefinedProperties,n)}function nf(e,t,n,i,r,s={}){const o=e.uc(s.merge||s.mergeFields?2:0,t,n,r);gf("Data must be an object, but it was:",o,i);const a=ff(i,o);let c,u;if(s.merge)c=new kr(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=vf(t,i,n);if(!o.contains(r))throw new tr(er.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);_f(e,r)||e.push(r)}c=new kr(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Yp(new as(a),c,u)}class rf extends Kp{_toFieldTransform(e){if(2!==e.Ya)throw 1===e.Ya?e.ic(`${this._methodName}() can only appear at the top level of your update data`):e.ic(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rf}}function sf(e,t,n){return new Xp({Ya:3,oc:t.settings.oc,methodName:e._methodName,tc:n},t.databaseId,t.M,t.ignoreUndefinedProperties)}class of extends Kp{_toFieldTransform(e){return new wo(e.path,new ho)}isEqual(e){return e instanceof of}}class af extends Kp{constructor(e,t){super(e),this.ac=t}_toFieldTransform(e){const t=sf(this,e,!0),n=this.ac.map((e=>pf(e,t))),i=new po(n);return new wo(e.path,i)}isEqual(e){return this===e}}class cf extends Kp{constructor(e,t){super(e),this.ac=t}_toFieldTransform(e){const t=sf(this,e,!0),n=this.ac.map((e=>pf(e,t))),i=new mo(n);return new wo(e.path,i)}isEqual(e){return this===e}}class uf extends Kp{constructor(e,t){super(e),this.cc=t}_toFieldTransform(e){const t=new vo(e.M,oo(e.M,this.cc));return new wo(e.path,t)}isEqual(e){return this===e}}function lf(e,t,n,i){const r=e.uc(1,t,n);gf("Data must be an object, but it was:",r,i);const s=[],o=as.empty();wr(i,((e,i)=>{const a=bf(t,e,n);i=(0,c.m9)(i);const u=r.nc(a);if(i instanceof rf)s.push(a);else{const e=pf(i,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new kr(s);return new Jp(o,a,r.fieldTransforms)}function hf(e,t,n,i,r,s){const o=e.uc(1,t,n),a=[vf(t,i,n)],u=[r];if(s.length%2!=0)throw new tr(er.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(vf(t,s[c])),u.push(s[c+1]);const l=[],h=as.empty();for(let p=a.length-1;p>=0;--p)if(!_f(l,a[p])){const e=a[p];let t=u[p];t=(0,c.m9)(t);const n=o.nc(e);if(t instanceof rf)l.push(e);else{const i=pf(t,n);null!=i&&(l.push(e),h.set(e,i))}}const d=new kr(l);return new Jp(h,d,o.fieldTransforms)}function df(e,t,n,i=!1){return pf(n,e.uc(i?4:3,t))}function pf(e,t){if(mf(e=(0,c.m9)(e)))return gf("Unsupported field value:",t,e),ff(e,t);if(e instanceof Kp)return function(e,t){if(!Qp(t.Ya))throw t.ic(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ic(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.tc&&4!==t.Ya)throw t.ic("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=pf(r,t.sc(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return oo(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=vr.fromDate(e);return{timestampValue:ya(t.M,n)}}if(e instanceof vr){const n=new vr(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ya(t.M,n)}}if(e instanceof Gp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Wp)return{bytesValue:ba(t.M,e._byteString)};if(e instanceof wp){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.ic(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ia(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ic(`Unsupported field value: ${fp(e)}`)}(e,t)}function ff(e,t){const n={};return _r(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):wr(e,((e,i)=>{const r=pf(i,t.Za(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function mf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof vr||e instanceof Gp||e instanceof Wp||e instanceof wp||e instanceof Kp)}function gf(e,t,n){if(!mf(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=fp(n);throw"an object"===i?t.ic(e+" a custom object"):t.ic(e+" "+i)}}function vf(e,t,n){if((t=(0,c.m9)(t))instanceof Hp)return t._internalPath;if("string"==typeof t)return bf(e,t);throw wf("Field path arguments must be of type string or ",e,!1,void 0,n)}const yf=new RegExp("[~\\*/\\[\\]]");function bf(e,t,n){if(t.search(yf)>=0)throw wf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Hp(...t.split("."))._internalPath}catch(i){throw wf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function wf(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new tr(er.INVALID_ARGUMENT,a+e+c)}function _f(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new wp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Sf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ef("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Sf extends If{data(){return super.data()}}function Ef(e,t){return"string"==typeof t?bf(e,t):t instanceof Hp?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kf extends If{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ef("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class xf extends kf{data(e={}){return super.data(e)}}class Cf{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Tf(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new xf(this._firestore,this._userDataWriter,n.key,n,new Tf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new tr(er.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new xf(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Tf(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new xf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Tf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Af(t.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Af(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Yi()}}function Of(e,t){return e instanceof kf&&t instanceof kf?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Cf&&t instanceof Cf&&e._firestore===t._firestore&&xp(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(e){if(zs(e)&&0===e.explicitOrderBy.length)throw new tr(er.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nf{}function $f(e,...t){for(const n of t)e=n._apply(e);return e}class Pf extends Nf{constructor(e,t,n){super(),this.hc=e,this.lc=t,this.fc=n,this.type="where"}_apply(e){const t=tf(e.firestore),n=function(e,t,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new tr(er.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Zf(o,s);const t=[];for(const n of o)t.push(Gf(i,e,n));a={arrayValue:{values:t}}}else a=Gf(i,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Zf(o,s),a=df(n,t,o,"in"===s||"not-in"===s);const c=ks.create(r,s,a);return function(e,t){if(t.S()){const n=Ws(e);if(null!==n&&!n.isEqual(t.field))throw new tr(er.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const i=Hs(e);null!==i&&Yf(e,t.field,i)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new tr(er.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new tr(er.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.hc,this.lc,this.fc);return new _p(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Bs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Lf(e,t,n){const i=t,r=Ef("where",e);return new Pf(r,i,n)}class Rf extends Nf{constructor(e,t){super(),this.hc=e,this.dc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new tr(er.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new tr(er.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Rs(t,n);return function(e,t){if(null===Hs(e)){const n=Ws(e);null!==n&&Yf(e,n,t.field)}}(e,i),i}(e._query,this.hc,this.dc);return new _p(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Bs(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Mf(e,t="asc"){const n=t,i=Ef("orderBy",e);return new Rf(i,n)}class Vf extends Nf{constructor(e,t,n){super(),this.type=e,this._c=t,this.wc=n}_apply(e){return new _p(e.firestore,e.converter,Ys(e._query,this._c,this.wc))}}function Ff(e){return gp("limit",e),new Vf("limit",e,"F")}function Bf(e){return gp("limitToLast",e),new Vf("limitToLast",e,"L")}class jf extends Nf{constructor(e,t,n){super(),this.type=e,this.mc=t,this.gc=n}_apply(e){const t=Kf(e,this.type,this.mc,this.gc);return new _p(e.firestore,e.converter,function(e,t){return new Bs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Uf(...e){return new jf("startAt",e,!0)}function qf(...e){return new jf("startAfter",e,!1)}class zf extends Nf{constructor(e,t,n){super(),this.type=e,this.mc=t,this.gc=n}_apply(e){const t=Kf(e,this.type,this.mc,this.gc);return new _p(e.firestore,e.converter,function(e,t){return new Bs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Hf(...e){return new zf("endBefore",e,!1)}function Wf(...e){return new zf("endAt",e,!0)}function Kf(e,t,n,i){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof If)return function(e,t,n,i,r){if(!i)throw new tr(er.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Gs(e))if(o.field.isKeyField())s.push(Jr(t,i.key));else{const e=i.data.field(o.field);if($r(e))throw new tr(er.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new tr(er.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Ls(s,r)}(e._query,e.firestore._databaseId,t,n[0]._document,i);{const r=tf(e.firestore);return function(e,t,n,i,r,s){const o=e.explicitOrderBy;if(r.length>o.length)throw new tr(er.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<r.length;c++){const s=r[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new tr(er.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof s}`);if(!Ks(e)&&-1!==s.indexOf("/"))throw new tr(er.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${i}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Sr.fromString(s));if(!jr.isDocumentKey(n))throw new tr(er.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const r=new jr(n);a.push(Jr(t,r))}else{const e=df(n,i,s);a.push(e)}}return new Ls(a,s)}(e._query,e.firestore._databaseId,r,t,n,i)}}function Gf(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new tr(er.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ks(t)&&-1!==n.indexOf("/"))throw new tr(er.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(Sr.fromString(n));if(!jr.isDocumentKey(i))throw new tr(er.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Jr(e,new jr(i))}if(n instanceof wp)return Jr(e,n._key);throw new tr(er.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fp(n)}.`)}function Zf(e,t){if(!Array.isArray(e)||0===e.length)throw new tr(er.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new tr(er.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Yf(e,t,n){if(!n.isEqual(t))throw new tr(er.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{convertValue(e,t="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Dr(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Yi()}}convertObject(e,t){const n={};return wr(e.fields,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Gp(Dr(e.latitude),Dr(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Pr(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const t=Or(e);return new vr(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Sr.fromString(e);Ji(Za(n));const i=new Mr(n.get(1),n.get(3)),r=new jr(n.popFirst(5));return i.isEqual(t)||Ki(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Xf extends Jf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wp(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=tf(e)}set(e,t,n){this._verifyNotCommitted();const i=tm(e,this._firestore),r=Qf(i.converter,t,n),s=nf(this._dataReader,"WriteBatch.set",i._key,r,null!==i.converter,n);return this._mutations.push(s.toMutation(i._key,So.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const r=tm(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Hp?hf(this._dataReader,"WriteBatch.update",r._key,t,n,i):lf(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(s.toMutation(r._key,So.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=tm(e,this._firestore);return this._mutations=this._mutations.concat(new Ro(t._key,So.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new tr(er.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function tm(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new tr(er.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(e){e=mp(e,wp);const t=mp(e.firestore,Np);return np($p(t),e._key).then((n=>gm(t,e,n)))}class im extends Jf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wp(this.firestore,null,t)}}function rm(e){e=mp(e,wp);const t=mp(e.firestore,Np),n=$p(t),i=new im(t);return tp(n,e._key).then((n=>new kf(t,i,e._key,n,new Tf(null!==n&&n.hasLocalMutations,!0),e.converter)))}function sm(e){e=mp(e,wp);const t=mp(e.firestore,Np);return np($p(t),e._key,{source:"server"}).then((n=>gm(t,e,n)))}function om(e){e=mp(e,_p);const t=mp(e.firestore,Np),n=$p(t),i=new im(t);return Df(e._query),rp(n,e._query).then((n=>new Cf(t,i,e,n)))}function am(e){e=mp(e,_p);const t=mp(e.firestore,Np),n=$p(t),i=new im(t);return ip(n,e._query).then((n=>new Cf(t,i,e,n)))}function cm(e){e=mp(e,_p);const t=mp(e.firestore,Np),n=$p(t),i=new im(t);return rp(n,e._query,{source:"server"}).then((n=>new Cf(t,i,e,n)))}function um(e,t,n){e=mp(e,wp);const i=mp(e.firestore,Np),r=Qf(e.converter,t,n);return mm(i,[nf(tf(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,So.none())])}function lm(e,t,n,...i){e=mp(e,wp);const r=mp(e.firestore,Np),s=tf(r);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof Hp?hf(s,"updateDoc",e._key,t,n,i):lf(s,"updateDoc",e._key,t),mm(r,[o.toMutation(e._key,So.exists(!0))])}function hm(e){return mm(mp(e.firestore,Np),[new Ro(e._key,So.none())])}function dm(e,t){const n=mp(e.firestore,Np),i=Tp(e),r=Qf(e.converter,t);return mm(n,[nf(tf(e.firestore),"addDoc",i._key,r,null!==e.converter,{}).toMutation(i._key,So.exists(!1))]).then((()=>i))}function pm(e,...t){var n,i,r;e=(0,c.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Ap(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ap(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[o+2]=null===(r=e.complete)||void 0===r?void 0:r.bind(e)}let u,l,h;if(e instanceof wp)l=mp(e.firestore,Np),h=Us(e._key.path),u={next:n=>{t[o]&&t[o](gm(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=mp(e,_p);l=mp(n.firestore,Np),h=n._query;const i=new im(l);u={next:e=>{t[o]&&t[o](new Cf(l,i,n,e))},error:t[o+1],complete:t[o+2]},Df(e._query)}return function(e,t,n,i){const r=new Fd(i),s=new Hh(t,r,n);return e.asyncQueue.enqueueAndForget((async()=>Bh(await Qd(e),s))),()=>{r.pa(),e.asyncQueue.enqueueAndForget((async()=>jh(await Qd(e),s)))}}($p(l),h,a,u)}function fm(e,t){return sp($p(e=mp(e,Np)),Ap(t)?t:{next:t})}function mm(e,t){return function(e,t){const n=new nr;return e.asyncQueue.enqueueAndForget((async()=>sd(await Jd(e),t,n))),n.promise}($p(e),t)}function gm(e,t,n){const i=n.docs.get(t._key),r=new im(e);return new kf(e,r,t._key,i,new Tf(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=tf(e)}get(e){const t=tm(e,this._firestore),n=new Xf(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Yi();const i=e[0];if(i.isFoundDocument())return new If(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new If(this._firestore,n,t._key,null,t.converter);throw Yi()}))}set(e,t,n){const i=tm(e,this._firestore),r=Qf(i.converter,t,n),s=nf(this._dataReader,"Transaction.set",i._key,r,null!==i.converter,n);return this._transaction.set(i._key,s),this}update(e,t,n,...i){const r=tm(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Hp?hf(this._dataReader,"Transaction.update",r._key,t,n,i):lf(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,s),this}delete(e){const t=tm(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=tm(e,this._firestore),n=new im(this._firestore);return super.get(e).then((e=>new kf(this._firestore,n,t._key,e._document,new Tf(!1,!1),t.converter)))}}function ym(e,t){return op($p(e=mp(e,Np)),(n=>t(new vm(e,n))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){return new rf("deleteField")}function wm(){return new of("serverTimestamp")}function _m(...e){return new af("arrayUnion",e)}function Im(...e){return new cf("arrayRemove",e)}function Sm(e){return new uf("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Ui=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=new Np(i,new or(e.getProvider("auth-internal")),new lr(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),r._setSettings(n),r}),"PUBLIC")),(0,s.registerVersion)(Bi,"3.4.7",e),(0,s.registerVersion)(Bi,"3.4.7","esm2017")}();const Em="@firebase/firestore-compat",Tm="0.1.16";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function km(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new tr("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(){if("undefined"===typeof Uint8Array)throw new tr("unimplemented","Uint8Arrays are not available in this environment.")}function Cm(){if(!xr())throw new tr("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Am{constructor(e){this._delegate=e}static fromBase64String(e){return Cm(),new Am(Wp.fromBase64String(e))}static fromUint8Array(e){return xm(),new Am(Wp.fromUint8Array(e))}toBase64(){return Cm(),this._delegate.toBase64()}toUint8Array(){return xm(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(e){return Dm(e,["next","error","complete"])}function Dm(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"===typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{enableIndexedDbPersistence(e,t){return Lp(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Rp(e._delegate)}clearIndexedDbPersistence(e){return Vp(e._delegate)}}class $m{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Mr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Gi("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){bp(this._delegate,e,t,n)}enableNetwork(){return Bp(this._delegate)}disableNetwork(){return jp(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,hp("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Fp(this._delegate)}onSnapshotsInSync(e){return fm(this._delegate,e)}get app(){if(!this._appCompat)throw new tr("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Gm(this,Sp(this._delegate,e))}catch(t){throw Bm(t,"collection()","Firestore.collection()")}}doc(e){try{return new Fm(this,Tp(this._delegate,e))}catch(t){throw Bm(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Hm(this,Ep(this._delegate,e))}catch(t){throw Bm(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return ym(this._delegate,(t=>e(new Rm(this,t))))}batch(){return $p(this._delegate),new Mm(new em(this._delegate,(e=>mm(this._delegate,e))))}loadBundle(e){return Up(this._delegate,e)}namedQuery(e){return qp(this._delegate,e).then((e=>e?new Hm(this,e):null))}}class Pm extends Jf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Am(new Wp(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Fm.forKey(t,this.firestore,null)}}function Lm(e){Hi(e)}class Rm{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Pm(e)}get(e){const t=Zm(e);return this._delegate.get(t).then((e=>new qm(this._firestore,new kf(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const i=Zm(e);return n?(km("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const r=Zm(e);return 2===arguments.length?this._delegate.update(r,t):this._delegate.update(r,t,n,...i),this}delete(e){const t=Zm(e);return this._delegate.delete(t),this}}class Mm{constructor(e){this._delegate=e}set(e,t,n){const i=Zm(e);return n?(km("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const r=Zm(e);return 2===arguments.length?this._delegate.update(r,t):this._delegate.update(r,t,n,...i),this}delete(e){const t=Zm(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Vm{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new xf(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new zm(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Vm.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let r=i.get(t);return r||(r=new Vm(e,new Pm(e),t),i.set(t,r)),r}}Vm.INSTANCES=new WeakMap;class Fm{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Pm(e)}static forPath(e,t,n){if(e.length%2!==0)throw new tr("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Fm(t,new wp(t._delegate,n,new jr(e)))}static forKey(e,t,n){return new Fm(t,new wp(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Gm(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Gm(this.firestore,Sp(this._delegate,e))}catch(t){throw Bm(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof wp&&kp(this._delegate,e)}set(e,t){t=km("DocumentReference.set",t);try{return t?um(this._delegate,e,t):um(this._delegate,e)}catch(n){throw Bm(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?lm(this._delegate,e):lm(this._delegate,e,t,...n)}catch(i){throw Bm(i,"updateDoc()","DocumentReference.update()")}}delete(){return hm(this._delegate)}onSnapshot(...e){const t=jm(e),n=Um(e,(e=>new qm(this.firestore,new kf(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return pm(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?rm(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?sm(this._delegate):nm(this._delegate),t.then((e=>new qm(this.firestore,new kf(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Fm(this.firestore,e?this._delegate.withConverter(Vm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Bm(e,t,n){return e.message=e.message.replace(t,n),e}function jm(e){for(const t of e)if("object"===typeof t&&!Om(t))return t;return{}}function Um(e,t){var n,i;let r;return r=Om(e[0])?e[0]:Om(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{r.next&&r.next(t(e))},error:null===(n=r.error)||void 0===n?void 0:n.bind(r),complete:null===(i=r.complete)||void 0===i?void 0:i.bind(r)}}class qm{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Fm(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Of(this._delegate,e._delegate)}}class zm extends qm{data(e){const t=this._delegate.data(e);return Qi(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Hm{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Pm(e)}where(e,t,n){try{return new Hm(this.firestore,$f(this._delegate,Lf(e,t,n)))}catch(i){throw Bm(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Hm(this.firestore,$f(this._delegate,Mf(e,t)))}catch(n){throw Bm(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Hm(this.firestore,$f(this._delegate,Ff(e)))}catch(t){throw Bm(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Hm(this.firestore,$f(this._delegate,Bf(e)))}catch(t){throw Bm(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Hm(this.firestore,$f(this._delegate,Uf(...e)))}catch(t){throw Bm(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Hm(this.firestore,$f(this._delegate,qf(...e)))}catch(t){throw Bm(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Hm(this.firestore,$f(this._delegate,Hf(...e)))}catch(t){throw Bm(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Hm(this.firestore,$f(this._delegate,Wf(...e)))}catch(t){throw Bm(t,"endAt()","Query.endAt()")}}isEqual(e){return xp(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?am(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?cm(this._delegate):om(this._delegate),t.then((e=>new Km(this.firestore,new Cf(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=jm(e),n=Um(e,(e=>new Km(this.firestore,new Cf(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return pm(this._delegate,t,n)}withConverter(e){return new Hm(this.firestore,e?this._delegate.withConverter(Vm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Wm{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new zm(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Km{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Hm(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new zm(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new Wm(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new zm(this._firestore,n))}))}isEqual(e){return Of(this._delegate,e._delegate)}}class Gm extends Hm{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Fm(this.firestore,e):null}doc(e){try{return new Fm(this.firestore,void 0===e?Tp(this._delegate):Tp(this._delegate,e))}catch(t){throw Bm(t,"doc()","CollectionReference.doc()")}}add(e){return dm(this._delegate,e).then((e=>new Fm(this.firestore,e)))}isEqual(e){return kp(this._delegate,e._delegate)}withConverter(e){return new Gm(this.firestore,e?this._delegate.withConverter(Vm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Zm(e){return mp(e,wp)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(...e){this._delegate=new Hp(...e)}static documentId(){return new Ym(Tr.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof Hp&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this._delegate=e}static serverTimestamp(){const e=wm();return e._methodName="FieldValue.serverTimestamp",new Jm(e)}static delete(){const e=bm();return e._methodName="FieldValue.delete",new Jm(e)}static arrayUnion(...e){const t=_m(...e);return t._methodName="FieldValue.arrayUnion",new Jm(t)}static arrayRemove(...e){const t=Im(...e);return t._methodName="FieldValue.arrayRemove",new Jm(t)}static increment(e){const t=Sm(e);return t._methodName="FieldValue.increment",new Jm(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm={Firestore:$m,GeoPoint:Gp,Timestamp:vr,Blob:Am,Transaction:Rm,WriteBatch:Mm,DocumentReference:Fm,DocumentSnapshot:qm,Query:Hm,QueryDocumentSnapshot:zm,QuerySnapshot:Km,CollectionReference:Gm,FieldPath:Ym,FieldValue:Jm,setLogLevel:Lm,CACHE_SIZE_UNLIMITED:Dp};function Xm(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("firestore").getImmediate();return t(n,i)}),"PUBLIC").setServiceProps(Object.assign({},Qm)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(e){Xm(e,((e,t)=>new $m(e,t,new Nm))),e.registerVersion(Em,Tm)}eg(r.Z)},7273:function(){},8582:function(){},9845:function(){},7391:function(e,t,n){"use strict";n.d(t,{og:function(){return Yt},WB:function(){return Rt},Q_:function(){return Gt},rn:function(){return Zt}});var i=n(144),r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o,a=function(){return a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)};function c(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,r,s=n.call(e),o=[];try{while((void 0===t||t-- >0)&&!(i=s.next()).done)o.push(i.value)}catch(a){r={error:a}}finally{try{i&&!i.done&&(n=s["return"])&&n.call(s)}finally{if(r)throw r.error}}return o}function l(e,t,n){if(n||2===arguments.length)for(var i,r=0,s=t.length;r<s;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var h=[],d=function(){function e(e){this.active=!0,this.effects=[],this.cleanups=[],this.vm=e}return e.prototype.run=function(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0},e.prototype.on=function(){this.active&&(h.push(this),o=this)},e.prototype.off=function(){this.active&&(h.pop(),o=h[h.length-1])},e.prototype.stop=function(){this.active&&(this.vm.$destroy(),this.effects.forEach((function(e){return e.stop()})),this.cleanups.forEach((function(e){return e()})),this.active=!1)},e}(),p=function(e){function t(t){void 0===t&&(t=!1);var n=this,i=void 0;return O((function(){i=ie(x())})),n=e.call(this,i)||this,t||f(n),n}return s(t,e),t}(d);function f(e,t){var n;if(t=t||o,t&&t.active)t.effects.push(e);else{var i=null===(n=N())||void 0===n?void 0:n.proxy;i&&i.$on("hook:destroyed",(function(){return e.stop()}))}}function m(e){return new p(e)}function g(){return o}function v(){var e,t;return(null===(e=g())||void 0===e?void 0:e.vm)||(null===(t=N())||void 0===t?void 0:t.proxy)}function y(e){if(!e.scope){var t=new d(e.proxy);e.scope=t,e.proxy.$on("hook:destroyed",(function(){return t.stop()}))}return e.scope}var b=void 0;try{var w=require("vue");w&&T(w)?b=w:w&&"default"in w&&T(w.default)&&(b=w.default)}catch(Jt){}var _=null,I=null,S=!0,E="__composition_api_installed__";function T(e){return e&&X(e)&&"Vue"===e.name}function k(e){return _&&j(e,E)}function x(){return _}function C(){var e=_||b;return e}function A(e){_=e,Object.defineProperty(e,E,{configurable:!0,writable:!0,value:!0})}function O(e){var t=S;S=!1;try{e()}finally{S=t}}function D(e){if(S){var t=I;null===t||void 0===t||t.scope.off(),I=e,null===I||void 0===I||I.scope.on()}}function N(){return I}var $=new WeakMap;function P(e){if($.has(e))return $.get(e);var t={proxy:e,update:e.$forceUpdate,type:e.$options,uid:e._uid,emit:e.$emit.bind(e),parent:null,root:null};y(t);var n=["data","props","attrs","refs","vnode","slots"];return n.forEach((function(n){F(t,n,{get:function(){return e["$".concat(n)]}})})),F(t,"isMounted",{get:function(){return e._isMounted}}),F(t,"isUnmounted",{get:function(){return e._isDestroyed}}),F(t,"isDeactivated",{get:function(){return e._inactive}}),F(t,"emitted",{get:function(){return e._events}}),$.set(e,t),e.$parent&&(t.parent=P(e.$parent)),e.$root&&(t.root=P(e.$root)),t}var L=function(e){return Object.prototype.toString.call(e)};function R(e){return"function"===typeof e&&/native code/.test(e.toString())}var M="undefined"!==typeof Symbol&&R(Symbol)&&"undefined"!==typeof Reflect&&R(Reflect.ownKeys),V=function(e){return e};function F(e,t,n){var i=n.get,r=n.set;Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:i||V,set:r||V})}function B(e,t,n,i){Object.defineProperty(e,t,{value:n,enumerable:!!i,writable:!0,configurable:!0})}function j(e,t){return Object.hasOwnProperty.call(e,t)}function U(e,t){if(!e)throw new Error("[vue-composition-api] ".concat(t))}function q(e){return Array.isArray(e)}var z,H=Object.prototype.toString,W=function(e){return H.call(e)},K=function(e){return"[object Map]"===W(e)},G=function(e){return"[object Set]"===W(e)},Z=4294967295;function Y(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)&&t<=Z}function J(e){return null!==e&&"object"===typeof e}function Q(e){return"[object Object]"===L(e)}function X(e){return"function"===typeof e}function ee(e,t,n){if("undefined"===typeof window||"undefined"===typeof console)throw e;console.error(e)}function te(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function ne(e,t){return t=t||N(),t}function ie(e,t){void 0===t&&(t={});var n=e.config.silent;e.config.silent=!0;var i=new e(t);return e.config.silent=n,i}function re(e){var t=x();return t&&e instanceof t}function se(e,t){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(e.$scopedSlots[t])return e.$scopedSlots[t].apply(e,n)}}function oe(e,t){var n;if(e){if(e._normalized)return e._normalized;for(var i in n={},e)e[i]&&"$"!==i[0]&&(n[i]=!0)}else n={};for(var i in t)i in n||(n[i]=!0);return n}var ae=function(){if(!z){var e=ie(x(),{computed:{value:function(){return 0}}}),t=e._computedWatchers.value.constructor,n=e._data.__ob__.dep.constructor;z={Watcher:t,Dep:n},e.$destroy()}return z};function ce(e){return M?Symbol.for(e):e}var ue=ce("composition-api.preFlushQueue"),le=ce("composition-api.postFlushQueue"),he="composition-api.refKey",de=new WeakMap,pe=new WeakMap,fe=new WeakMap;function me(e,t,n){var i=x(),r=i.util,s=(r.warn,r.defineReactive);var o=e.__ob__;function a(){o&&J(n)&&!j(n,"__ob__")&&Ce(n)}if(q(e)){if(Y(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),a(),n;if("length"===t&&n!==e.length)return e.length=n,null===o||void 0===o||o.dep.notify(),n}return t in e&&!(t in Object.prototype)?(e[t]=n,a(),n):e._isVue||o&&o.vmCount?n:o?(s(o.value,t,n),ke(e,t,n),a(),o.dep.notify(),n):(e[t]=n,n)}var ge=function(){function e(e){var t=e.get,n=e.set;F(this,"value",{get:t,set:n})}return e}();function ve(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var i=new ge(e);n&&(i.effect=!0);var r=Object.seal(i);return t&&fe.set(r,!0),r}function ye(e){var t;if(be(e))return e;var n=De((t={},t[he]=e,t));return ve({get:function(){return n[he]},set:function(e){return n[he]=e}})}function be(e){return e instanceof ge}function we(e){if(!Q(e))return e;var t={};for(var n in e)t[n]=_e(e,n);return t}function _e(e,t){t in e||me(e,t,void 0);var n=e[t];return be(n)?n:ve({get:function(){return e[t]},set:function(n){return e[t]=n}})}var Ie="__v_skip";function Se(e){var t;return Boolean(e&&j(e,"__ob__")&&"object"===typeof e.__ob__&&(null===(t=e.__ob__)||void 0===t?void 0:t[Ie]))}function Ee(e){var t;return Boolean(e&&j(e,"__ob__")&&"object"===typeof e.__ob__&&!(null===(t=e.__ob__)||void 0===t?void 0:t[Ie]))}function Te(e){if(!(!Q(e)||Se(e)||q(e)||be(e)||re(e)||de.has(e))){de.set(e,!0);for(var t=Object.keys(e),n=0;n<t.length;n++)ke(e,t[n])}}function ke(e,t,n){if("__ob__"!==t&&!Se(e[t])){var i,r,s=Object.getOwnPropertyDescriptor(e,t);if(s){if(!1===s.configurable)return;i=s.get,r=s.set,i&&!r||2!==arguments.length||(n=e[t])}Te(n),F(e,t,{get:function(){var r=i?i.call(e):n;return t!==he&&be(r)?r.value:r},set:function(s){i&&!r||(t!==he&&be(n)&&!be(s)?n.value=s:r?(r.call(e,s),n=s):n=s,Te(s))}})}}function xe(e){var t,n=C();if(n.observable)t=n.observable(e);else{var i=ie(n,{data:{$$state:e}});t=i._data.$$state}return j(t,"__ob__")||Ce(t),t}function Ce(e,t){var n,i;if(void 0===t&&(t=new Set),!t.has(e)&&!j(e,"__ob__")&&Object.isExtensible(e)){B(e,"__ob__",Ae(e)),t.add(e);try{for(var r=c(Object.keys(e)),s=r.next();!s.done;s=r.next()){var o=s.value,a=e[o];(Q(a)||q(a))&&!Se(a)&&Object.isExtensible(a)&&Ce(a,t)}}catch(u){n={error:u}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}}}function Ae(e){return void 0===e&&(e={}),{value:e,dep:{notify:V,depend:V,addSub:V,removeSub:V}}}function Oe(){return xe({}).__ob__}function De(e){if(!J(e))return e;if(!Q(e)&&!q(e)||Se(e)||!Object.isExtensible(e))return e;var t=xe(e);return Te(t),t}function Ne(e){if(!Q(e)&&!q(e)||!Object.isExtensible(e))return e;var t=Oe();return t[Ie]=!0,B(e,"__ob__",t),pe.set(e,!0),e}function $e(e){var t;return Se(e)||!Object.isExtensible(e)?e:(null===(t=null===e||void 0===e?void 0:e.__ob__)||void 0===t?void 0:t.value)||e}var Pe=function(e){return"on".concat(e[0].toUpperCase()+e.slice(1))};function Le(e){return function(t,n){var i=ne(Pe(e),n);return i&&Re(x(),i,e,t)}}function Re(e,t,n,i){var r=t.proxy.$options,s=e.config.optionMergeStrategies[n],o=Me(t,i);return r[n]=s(r[n],o),o}function Me(e,t){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=N();D(e);try{return t.apply(void 0,l([],u(n),!1))}finally{D(r)}}}Le("beforeMount"),Le("mounted"),Le("beforeUpdate"),Le("updated"),Le("beforeDestroy");var Ve,Fe=Le("destroyed");Le("errorCaptured"),Le("activated"),Le("deactivated"),Le("serverPrefetch");function Be(){We(this,ue)}function je(){We(this,le)}function Ue(e){return void 0!==e[ue]}function qe(e){e[ue]=[],e[le]=[],e.$on("hook:beforeUpdate",Be),e.$on("hook:updated",je)}function ze(e){return a({immediate:!1,deep:!1,flush:"pre"},e)}function He(){var e=v();return e?Ue(e)||qe(e):(Ve||(Ve=ie(x())),e=Ve),e}function We(e,t){for(var n=e[t],i=0;i<n.length;i++)n[i]();n.length=0}function Ke(e,t,n){var i=function(){e.$nextTick((function(){e[ue].length&&We(e,ue),e[le].length&&We(e,le)}))};switch(n){case"pre":i(),e[ue].push(t);break;case"post":i(),e[le].push(t);break;default:U(!1,'flush must be one of ["post", "pre", "sync"], but got '.concat(n));break}}function Ge(e,t,n,i){var r=e._watchers.length;return e.$watch(t,n,{immediate:i.immediateInvokeCallback,deep:i.deep,lazy:i.noRun,sync:i.sync,before:i.before}),e._watchers[r]}function Ze(e,t){var n=e.teardown;e.teardown=function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];n.apply(e,i),t()}}function Ye(e,t,n,i){var r;var s,o=i.flush,a="sync"===o,c=function(t){s=function(){try{t()}catch(n){ee(n,e,"onCleanup()")}}},h=function(){s&&(s(),s=null)},d=function(t){return a||e===Ve?t:function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return Ke(e,(function(){t.apply(void 0,l([],u(n),!1))}),o)}};if(null===n){var p=!1,f=function(){if(!p)try{p=!0,t(c)}finally{p=!1}},m=Ge(e,f,V,{deep:i.deep||!1,sync:a,before:h});Ze(m,h),m.lazy=!1;var g=m.get.bind(m);return m.get=d(g),function(){m.teardown()}}var v,y=i.deep,b=!1;if(be(t)?v=function(){return t.value}:Ee(t)?(v=function(){return t},y=!0):q(t)?(b=!0,v=function(){return t.map((function(e){return be(e)?e.value:Ee(e)?Qe(e):X(e)?e():V}))}):v=X(t)?t:V,y){var w=v;v=function(){return Qe(w())}}var _=function(e,t){if(y||!b||!e.every((function(e,n){return te(e,t[n])})))return h(),n(e,t,c)},I=d(_);if(i.immediate){var S=I,E=function(e,t){return E=S,_(e,q(e)?[]:t)};I=function(e,t){return E(e,t)}}var T=e.$watch(v,I,{immediate:i.immediate,deep:y,sync:a}),k=e._watchers[e._watchers.length-1];return Ee(k.value)&&(null===(r=k.value.__ob__)||void 0===r?void 0:r.dep)&&y&&k.value.__ob__.dep.addSub({update:function(){k.run()}}),Ze(k,h),function(){T()}}function Je(e,t,n){var i=null;X(t)?i=t:(n=t,i=null);var r=ze(n),s=He();return Ye(s,e,i,r)}function Qe(e,t){if(void 0===t&&(t=new Set),!J(e)||t.has(e)||pe.has(e))return e;if(t.add(e),be(e))Qe(e.value,t);else if(q(e))for(var n=0;n<e.length;n++)Qe(e[n],t);else if(G(e)||K(e))e.forEach((function(e){Qe(e,t)}));else if(Q(e))for(var i in e)Qe(e[i],t);return e}function Xe(e){var t,n,i,r,s=v();if(X(e)?t=e:(t=e.get,n=e.set),s&&!s.$isServer){var o,a=ae(),c=a.Watcher,u=a.Dep;r=function(){return o||(o=new c(s,t,V,{lazy:!0})),o.dirty&&o.evaluate(),u.target&&o.depend(),o.value},i=function(e){n&&n(e)}}else{var l=ie(x(),{computed:{$$state:{get:t,set:n}}});s&&s.$on("hook:destroyed",(function(){return l.$destroy()})),r=function(){return l.$$state},i=function(e){l.$$state=e}}return ve({get:r,set:i},!n,!0)}var et={};function tt(e,t){var n=t;while(n){if(n._provided&&j(n._provided,e))return n._provided[e];n=n.$parent}return et}function nt(e,t,n){var i;void 0===n&&(n=!1);var r=null===(i=N())||void 0===i?void 0:i.proxy;if(r){if(!e)return t;var s=tt(e,r);return s!==et?s:arguments.length>1?n&&X(t)?t():t:void 0}}var it=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return null===(e=x())||void 0===e?void 0:e.nextTick.apply(this,t)};function rt(e,t,n){var i=e.__composition_api_state__=e.__composition_api_state__||{};i[t]=n}function st(e,t){return(e.__composition_api_state__||{})[t]}var ot={set:rt,get:st};function at(e,t,n){var i=e.$options.props;t in e||i&&j(i,t)||(be(n)?F(e,t,{get:function(){return n.value},set:function(e){n.value=e}}):F(e,t,{get:function(){return Ee(n)&&n.__ob__.dep.depend(),n},set:function(e){n=e}}))}function ct(e){var t=ot.get(e,"rawBindings")||{};if(t&&Object.keys(t).length){for(var n=e.$refs,i=ot.get(e,"refs")||[],r=0;r<i.length;r++){var s=i[r],o=t[s];!n[s]&&o&&be(o)&&(o.value=null)}var a=Object.keys(n),c=[];for(r=0;r<a.length;r++){s=a[r],o=t[s];n[s]&&o&&be(o)&&(o.value=n[s],c.push(s))}ot.set(e,"refs",c)}}function ut(e){var t=[e._vnode];while(t.length){var n=t.pop();if(n&&(n.context&&ct(n.context),n.children))for(var i=0;i<n.children.length;++i)t.push(n.children[i])}}function lt(e,t){var n,i;if(e){var r=ot.get(e,"attrBindings");if(r||t){if(!r){var s=De({});r={ctx:t,data:s},ot.set(e,"attrBindings",r),F(t,"attrs",{get:function(){return null===r||void 0===r?void 0:r.data},set:function(){}})}var o=e.$attrs,a=function(t){j(r.data,t)||F(r.data,t,{get:function(){return e.$attrs[t]}})};try{for(var u=c(Object.keys(o)),l=u.next();!l.done;l=u.next()){var h=l.value;a(h)}}catch(d){n={error:d}}finally{try{l&&!l.done&&(i=u.return)&&i.call(u)}finally{if(n)throw n.error}}}}}function ht(e,t){var n=e.$options._parentVnode;if(n){for(var i=ot.get(e,"slots")||[],r=oe(n.data.scopedSlots,e.$slots),s=0;s<i.length;s++){var o=i[s];r[o]||delete t[o]}var a=Object.keys(r);for(s=0;s<a.length;s++){o=a[s];t[o]||(t[o]=se(e,o))}ot.set(e,"slots",a)}}function dt(e,t,n){var i=N();D(e);try{return t(e)}catch(r){if(!n)throw r;n(r)}finally{D(i)}}function pt(e){function t(){var e=this,t=e.$options,i=t.setup,r=t.render;if(r&&(t.render=function(){for(var t=this,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return dt(P(e),(function(){return r.apply(t,n)}))}),i&&X(i)){var s=t.data;t.data=function(){return n(e,e.$props),X(s)?s.call(e,e):s||{}}}}function n(e,t){void 0===t&&(t={});var n,o=e.$options.setup,a=s(e),c=P(e);if(c.setupContext=a,B(t,"__ob__",Oe()),ht(e,a.slots),dt(c,(function(){n=o(t,a)})),n)if(X(n)){var u=n;e.$options.render=function(){return ht(e,a.slots),dt(c,(function(){return u()}))}}else if(J(n)){Ee(n)&&(n=we(n)),ot.set(e,"rawBindings",n);var l=n;Object.keys(l).forEach((function(t){var n=l[t];if(!be(n))if(Ee(n))q(n)&&(n=ye(n));else if(X(n)){var s=n;n=n.bind(e),Object.keys(s).forEach((function(e){n[e]=s[e]}))}else J(n)?r(n)&&i(n):n=ye(n);at(e,t,n)}))}else 0}function i(e,t){if(void 0===t&&(t=new Set),!t.has(e)&&Q(e)&&!be(e)&&!Ee(e)&&!Se(e)){var n=x(),r=n.util.defineReactive;Object.keys(e).forEach((function(n){var s=e[n];r(e,n,s),s&&(t.add(s),i(s,t))}))}}function r(e,t){return void 0===t&&(t=new Map),t.has(e)?t.get(e):(t.set(e,!1),q(e)&&Ee(e)?(t.set(e,!0),!0):!(!Q(e)||Se(e)||be(e))&&Object.keys(e).some((function(n){return r(e[n],t)})))}function s(e){var t={slots:{}},n=["root","parent","refs","listeners","isServer","ssrContext"],i=["emit"];return n.forEach((function(n){var i="$".concat(n);F(t,n,{get:function(){return e[i]},set:function(){}})})),lt(e,t),i.forEach((function(n){var i="$".concat(n);F(t,n,{get:function(){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=e[i];r.apply(e,t)}}})})),t}e.mixin({beforeCreate:t,mounted:function(){ut(this)},beforeUpdate:function(){lt(this)},updated:function(){ut(this)}})}function ft(e,t){if(!e)return t;if(!t)return e;for(var n,i,r,s=M?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(i=t[n],r=e[n],j(t,n)?i!==r&&Q(i)&&!be(i)&&Q(r)&&!be(r)&&ft(r,i):t[n]=r);return t}function mt(e){k(e)||(e.config.optionMergeStrategies.setup=function(e,t){return function(n,i){return ft(X(e)?e(n,i)||{}:void 0,X(t)?t(n,i)||{}:void 0)}},A(e),pt(e))}var gt={install:function(e){return mt(e)}};function vt(e){e=e||i.Z,e&&!e["__composition_api_installed__"]&&i.Z.use(gt)}"undefined"!==typeof window&&window.Vue&&window.Vue.use(gt),vt(i.Z);var yt=!0;i.Z,i.Z.version;
/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let bt;const wt=e=>bt=e,_t=Symbol();function It(e){return e&&"object"===typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!==typeof e.toJSON}var St;(function(e){e["direct"]="direct",e["patchObject"]="patch object",e["patchFunction"]="patch function"})(St||(St={}));const Et="undefined"!==typeof window,Tt=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof n.g&&n.g.global===n.g?n.g:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function kt(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function xt(e,t,n){const i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){Nt(i.response,t,n)},i.onerror=function(){console.error("could not download file")},i.send()}function Ct(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return t.status>=200&&t.status<=299}function At(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const Ot="object"===typeof navigator?navigator:{userAgent:""},Dt=(()=>/Macintosh/.test(Ot.userAgent)&&/AppleWebKit/.test(Ot.userAgent)&&!/Safari/.test(Ot.userAgent))(),Nt=Et?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!Dt?$t:"msSaveOrOpenBlob"in Ot?Pt:Lt:()=>{};function $t(e,t="download",n){const i=document.createElement("a");i.download=t,i.rel="noopener","string"===typeof e?(i.href=e,i.origin!==location.origin?Ct(i.href)?xt(e,t,n):(i.target="_blank",At(i)):At(i)):(i.href=URL.createObjectURL(e),setTimeout((function(){URL.revokeObjectURL(i.href)}),4e4),setTimeout((function(){At(i)}),0))}function Pt(e,t="download",n){if("string"===typeof e)if(Ct(e))xt(e,t,n);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout((function(){At(t)}))}else navigator.msSaveOrOpenBlob(kt(e,n),t)}function Lt(e,t,n,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),"string"===typeof e)return xt(e,t,n);const r="application/octet-stream"===e.type,s=/constructor/i.test(String(Tt.HTMLElement))||"safari"in Tt,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||r&&s||Dt)&&"undefined"!==typeof FileReader){const t=new FileReader;t.onloadend=function(){let e=t.result;if("string"!==typeof e)throw i=null,new Error("Wrong reader.result type");e=o?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location.assign(e),i=null},t.readAsDataURL(e)}else{const t=URL.createObjectURL(e);i?i.location.assign(t):location.href=t,i=null,setTimeout((function(){URL.revokeObjectURL(t)}),4e4)}}function Rt(){const e=m(!0),t=e.run((()=>ye({})));let n=[],i=[];const r=Ne({install(e){wt(r),yt||(r._a=e,e.provide(_t,r),e.config.globalProperties.$pinia=r,i.forEach((e=>n.push(e))),i=[])},use(e){return this._a||yt?n.push(e):i.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}const Mt=()=>{};function Vt(e,t,n,i=Mt){e.push(t);const r=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),i())};return!n&&N()&&Fe(r),r}function Ft(e,...t){e.slice().forEach((e=>{e(...t)}))}function Bt(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const i=t[n],r=e[n];It(r)&&It(i)&&e.hasOwnProperty(n)&&!be(i)&&!Ee(i)?e[n]=Bt(r,i):e[n]=i}return e}const jt=Symbol(),Ut=new WeakMap;function qt(e){return yt?!Ut.has(e):!It(e)||!e.hasOwnProperty(jt)}const{assign:zt}=Object;function Ht(e){return!(!be(e)||!e.effect)}function Wt(e,t,n,i){const{state:r,actions:s,getters:o}=t,a=n.state.value[e];let c;function u(){a||(yt?me(n.state.value,e,r?r():{}):n.state.value[e]=r?r():{});const t=we(n.state.value[e]);return zt(t,s,Object.keys(o||{}).reduce(((t,i)=>(t[i]=Ne(Xe((()=>{wt(n);const t=n._s.get(e);if(!yt||t._r)return o[i].call(t,t)}))),t)),{}))}return c=Kt(e,u,t,n,i,!0),c.$reset=function(){const e=r?r():{};this.$patch((t=>{zt(t,e)}))},c}function Kt(e,t,n={},i,r,s){let o;const a=zt({actions:{}},n);const c={deep:!0};let u,l;let h,d=Ne([]),p=Ne([]);const f=i.state.value[e];s||f||(yt?me(i.state.value,e,{}):i.state.value[e]={});ye({});let g;function v(t){let n;u=l=!1,"function"===typeof t?(t(i.state.value[e]),n={type:St.patchFunction,storeId:e,events:h}):(Bt(i.state.value[e],t),n={type:St.patchObject,payload:t,storeId:e,events:h});const r=g=Symbol();it().then((()=>{g===r&&(u=!0)})),l=!0,Ft(d,n,i.state.value[e])}const y=Mt;function b(){o.stop(),d=[],p=[],i._s.delete(e)}function w(t,n){return function(){wt(i);const r=Array.from(arguments),s=[],o=[];function a(e){s.push(e)}function c(e){o.push(e)}let u;Ft(p,{args:r,name:t,store:I,after:a,onError:c});try{u=n.apply(this&&this.$id===e?this:I,r)}catch(l){throw Ft(o,l),l}return u instanceof Promise?u.then((e=>(Ft(s,e),e))).catch((e=>(Ft(o,e),Promise.reject(e)))):(Ft(s,u),u)}}const _={_p:i,$id:e,$onAction:Vt.bind(null,p),$patch:v,$reset:y,$subscribe(t,n={}){const r=Vt(d,t,n.detached,(()=>s())),s=o.run((()=>Je((()=>i.state.value[e]),(i=>{("sync"===n.flush?l:u)&&t({storeId:e,type:St.direct,events:h},i)}),zt({},c,n))));return r},$dispose:b};yt&&(_._r=!1);const I=De(zt({},_));i._s.set(e,I);const S=i._e.run((()=>(o=m(),o.run((()=>t())))));for(const m in S){const t=S[m];if(be(t)&&!Ht(t)||Ee(t))s||(f&&qt(t)&&(be(t)?t.value=f[m]:Bt(t,f[m])),yt?me(i.state.value[e],m,t):i.state.value[e][m]=t);else if("function"===typeof t){const e=w(m,t);yt?me(S,m,e):S[m]=e,a.actions[m]=t}else 0}return yt?Object.keys(S).forEach((e=>{me(I,e,S[e])})):(zt(I,S),zt($e(I),S)),Object.defineProperty(I,"$state",{get:()=>i.state.value[e],set:e=>{v((t=>{zt(t,e)}))}}),yt&&(I._r=!0),i._p.forEach((e=>{zt(I,o.run((()=>e({store:I,app:i._a,pinia:i,options:a}))))})),f&&s&&n.hydrate&&n.hydrate(I.$state,f),u=!0,l=!0,I}function Gt(e,t,n){let i,r;const s="function"===typeof t;function o(e,n){const o=N();e=e||o&&nt(_t),e&&wt(e),e=bt,e._s.has(i)||(s?Kt(i,t,r,e):Wt(i,r,e));const a=e._s.get(i);return a}return"string"===typeof e?(i=e,r=s?n:t):(r=e,i=e.id),o.$id=i,o}function Zt(e,t){return Array.isArray(t)?t.reduce(((t,n)=>(t[n]=function(){return e(this.$pinia)[n]},t)),{}):Object.keys(t).reduce(((n,i)=>(n[i]=function(){const n=e(this.$pinia),r=t[i];return"function"===typeof r?r.call(this,n):n[r]},n)),{})}const Yt=function(e){e.mixin({beforeCreate(){const e=this.$options;if(e.pinia){const t=e.pinia;if(!this._provided){const e={};Object.defineProperty(this,"_provided",{get:()=>e,set:t=>Object.assign(e,t)})}this._provided[_t]=t,this.$pinia||(this.$pinia=t),t._a=this,Et&&wt(t)}else!this.$pinia&&e.parent&&e.parent.$pinia&&(this.$pinia=e.parent.$pinia)},destroyed(){delete this._pStores}})}},7524:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(1703);var i=n(8085),r=n(3325),s=(0,r.Z)(i.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(e){const t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},4995:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var i=n(3385),r=i.Z,s=n(8083),o=n(6952),a=n(4589),c=o.Z.extend({name:"v-progress-circular",directives:{intersect:s.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,a.kb)(this.calculatedSize),width:(0,a.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(e,t){return this.$createElement("circle",{class:`v-progress-circular__${e}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":t}})},genSvg(){const e=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},e)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(e,t,n){this.isVisible=n}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),u=c,l=n(7352),h=n(2936),d=n(3377),p=n(3536),f=n(6505),m=n(9131),g=n(3325),v=n(1824);const y=(0,g.Z)(r,f.Z,p.Z,m.Z,(0,l.d)("btnToggle"),(0,h.d)("inputValue"));var b=y.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...f.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return d.Z.options.computed.computedElevation.call(this)},computedRipple(){var e;const t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(e=this.ripple)?e:t)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,v.fK)(e,t,this)}))},methods:{click(e){!this.retainFocusOnClick&&!this.fab&&e.detail&&this.$el.blur(),this.$emit("click",e),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(u,{props:{indeterminate:!0,size:23,width:2}})])}},render(e){const t=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:i}=this.generateRouteLink(),r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),e(n,this.disabled?i:r(this.color,i),t)}})},3291:function(e,t,n){"use strict";n.d(t,{Z:function(){return ze}});var i=n(4589),r=n(144),s=r.Z.extend({name:"v-data",inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},sortBy:{type:[String,Array]},sortDesc:{type:[Boolean,Array]},customSort:{type:Function,default:i.xl},mustSort:Boolean,multiSort:Boolean,page:{type:Number,default:1},itemsPerPage:{type:Number,default:10},groupBy:{type:[String,Array],default:()=>[]},groupDesc:{type:[Boolean,Array],default:()=>[]},customGroup:{type:Function,default:i.sD},locale:{type:String,default:"en-US"},disableSort:Boolean,disablePagination:Boolean,disableFiltering:Boolean,search:String,customFilter:{type:Function,default:i.KT},serverItemsLength:{type:Number,default:-1}},data(){let e={page:this.page,itemsPerPage:this.itemsPerPage,sortBy:(0,i.TI)(this.sortBy),sortDesc:(0,i.TI)(this.sortDesc),groupBy:(0,i.TI)(this.groupBy),groupDesc:(0,i.TI)(this.groupDesc),mustSort:this.mustSort,multiSort:this.multiSort};this.options&&(e=Object.assign(e,this.options));const{sortBy:t,sortDesc:n,groupBy:r,groupDesc:s}=e,o=t.length-n.length,a=r.length-s.length;return o>0&&e.sortDesc.push(...(0,i.kg)(o,!1)),a>0&&e.groupDesc.push(...(0,i.kg)(a,!1)),{internalOptions:e}},computed:{itemsLength(){return this.serverItemsLength>=0?this.serverItemsLength:this.filteredItems.length},pageCount(){return this.internalOptions.itemsPerPage<=0?1:Math.ceil(this.itemsLength/this.internalOptions.itemsPerPage)},pageStart(){return-1!==this.internalOptions.itemsPerPage&&this.items.length?(this.internalOptions.page-1)*this.internalOptions.itemsPerPage:0},pageStop(){return-1===this.internalOptions.itemsPerPage?this.itemsLength:this.items.length?Math.min(this.itemsLength,this.internalOptions.page*this.internalOptions.itemsPerPage):0},isGrouped(){return!!this.internalOptions.groupBy.length},pagination(){return{page:this.internalOptions.page,itemsPerPage:this.internalOptions.itemsPerPage,pageStart:this.pageStart,pageStop:this.pageStop,pageCount:this.pageCount,itemsLength:this.itemsLength}},filteredItems(){let e=this.items.slice();return!this.disableFiltering&&this.serverItemsLength<=0&&(e=this.customFilter(e,this.search)),e},computedItems(){let e=this.filteredItems.slice();return(!this.disableSort||this.internalOptions.groupBy.length)&&this.serverItemsLength<=0&&(e=this.sortItems(e)),!this.disablePagination&&this.serverItemsLength<=0&&(e=this.paginateItems(e)),e},groupedItems(){return this.isGrouped?this.groupItems(this.computedItems):null},scopedProps(){return{sort:this.sort,sortArray:this.sortArray,group:this.group,items:this.computedItems,options:this.internalOptions,updateOptions:this.updateOptions,pagination:this.pagination,groupedItems:this.groupedItems,originalItemsLength:this.items.length}},computedOptions(){return{...this.options}}},watch:{computedOptions:{handler(e,t){(0,i.vZ)(e,t)||this.updateOptions(e)},deep:!0,immediate:!0},internalOptions:{handler(e,t){(0,i.vZ)(e,t)||this.$emit("update:options",e)},deep:!0,immediate:!0},page(e){this.updateOptions({page:e})},"internalOptions.page"(e){this.$emit("update:page",e)},itemsPerPage(e){this.updateOptions({itemsPerPage:e})},"internalOptions.itemsPerPage"(e){this.$emit("update:items-per-page",e)},sortBy(e){this.updateOptions({sortBy:(0,i.TI)(e)})},"internalOptions.sortBy"(e,t){!(0,i.vZ)(e,t)&&this.$emit("update:sort-by",Array.isArray(this.sortBy)?e:e[0])},sortDesc(e){this.updateOptions({sortDesc:(0,i.TI)(e)})},"internalOptions.sortDesc"(e,t){!(0,i.vZ)(e,t)&&this.$emit("update:sort-desc",Array.isArray(this.sortDesc)?e:e[0])},groupBy(e){this.updateOptions({groupBy:(0,i.TI)(e)})},"internalOptions.groupBy"(e,t){!(0,i.vZ)(e,t)&&this.$emit("update:group-by",Array.isArray(this.groupBy)?e:e[0])},groupDesc(e){this.updateOptions({groupDesc:(0,i.TI)(e)})},"internalOptions.groupDesc"(e,t){!(0,i.vZ)(e,t)&&this.$emit("update:group-desc",Array.isArray(this.groupDesc)?e:e[0])},multiSort(e){this.updateOptions({multiSort:e})},"internalOptions.multiSort"(e){this.$emit("update:multi-sort",e)},mustSort(e){this.updateOptions({mustSort:e})},"internalOptions.mustSort"(e){this.$emit("update:must-sort",e)},pageCount:{handler(e){this.$emit("page-count",e)},immediate:!0},computedItems:{handler(e){this.$emit("current-items",e)},immediate:!0},pagination:{handler(e,t){(0,i.vZ)(e,t)||this.$emit("pagination",this.pagination)},immediate:!0}},methods:{toggle(e,t,n,r,s,o){let a=t.slice(),c=n.slice();const u=a.findIndex((t=>t===e));return u<0?(o||(a=[],c=[]),a.push(e),c.push(!1)):u>=0&&!c[u]?c[u]=!0:s?c[u]=!1:(a.splice(u,1),c.splice(u,1)),(0,i.vZ)(a,t)&&(0,i.vZ)(c,n)||(r=1),{by:a,desc:c,page:r}},group(e){const{by:t,desc:n,page:i}=this.toggle(e,this.internalOptions.groupBy,this.internalOptions.groupDesc,this.internalOptions.page,!0,!1);this.updateOptions({groupBy:t,groupDesc:n,page:i})},sort(e){if(Array.isArray(e))return this.sortArray(e);const{by:t,desc:n,page:i}=this.toggle(e,this.internalOptions.sortBy,this.internalOptions.sortDesc,this.internalOptions.page,this.internalOptions.mustSort,this.internalOptions.multiSort);this.updateOptions({sortBy:t,sortDesc:n,page:i})},sortArray(e){const t=e.map((e=>{const t=this.internalOptions.sortBy.findIndex((t=>t===e));return t>-1&&this.internalOptions.sortDesc[t]}));this.updateOptions({sortBy:e,sortDesc:t})},updateOptions(e){this.internalOptions={...this.internalOptions,...e,page:this.serverItemsLength<0?Math.max(1,Math.min(e.page||this.internalOptions.page,this.pageCount)):e.page||this.internalOptions.page}},sortItems(e){let t=[],n=[];return this.disableSort||(t=this.internalOptions.sortBy,n=this.internalOptions.sortDesc),this.internalOptions.groupBy.length&&(t=[...this.internalOptions.groupBy,...t],n=[...this.internalOptions.groupDesc,...n]),this.customSort(e,t,n,this.locale)},groupItems(e){return this.customGroup(e,this.internalOptions.groupBy,this.internalOptions.groupDesc)},paginateItems(e){return-1===this.serverItemsLength&&e.length<=this.pageStart&&(this.internalOptions.page=Math.max(1,Math.ceil(e.length/this.internalOptions.itemsPerPage))||1),e.slice(this.pageStart,this.pageStop)}},render(){return this.$scopedSlots.default&&this.$scopedSlots.default(this.scopedProps)}}),o=(n(9845),n(3325)),a=n(5827),c=n(172),u=n(6952),l=n(7352),h=n(8085),d=n(2936),p=n(6505),f=n(9131),m=n(1824),g=(0,o.Z)(u.Z,f.Z,p.Z,h.Z,(0,l.d)("chipGroup"),(0,d.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...p.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(p.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,m.fK)(e,t,this)}))},methods:{click(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter(){const e=[];return this.isActive&&e.push(this.$createElement(c.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a.Zq,e)},genClose(){return this.$createElement(c.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:e=>{e.stopPropagation(),e.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(e){const t=[this.genContent()];let{tag:n,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const r=this.textColor||this.outlined&&this.color;return e(n,this.setTextColor(r,i),t)}}),v=g,y=h.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:h.Z.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((e=>!e.isComment&&" "!==e.text))}}),b=r.Z.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(e,t){this.clearDelay();const n=parseInt(this[`${e}Delay`],10);this[`${e}Timeout`]=setTimeout(t||(()=>{this.isActive={open:!0,close:!1}[e]}),n)}}});const w=(0,o.Z)(b,d.Z);var _=w.extend({name:"activatable",props:{activator:{default:null,validator:e=>["string","object"].includes(typeof e)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const e=(0,i.sp)(this,"activator",!0);e&&["v-slot","normal"].includes(e)&&(0,m.N6)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const e=Object.keys(this.listeners);for(const t of e)this.getActivator().addEventListener(t,this.listeners[t])},genActivator(){const e=(0,i.z9)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=e,e},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const e={};return this.openOnHover?(e.mouseenter=e=>{this.getActivator(e),this.runDelay("open")},e.mouseleave=e=>{this.getActivator(e),this.runDelay("close")}):this.openOnClick&&(e.click=e=>{const t=this.getActivator(e);t&&t.focus(),e.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(e.focus=e=>{this.getActivator(e),e.stopPropagation(),this.isActive=!this.isActive}),e},getActivator(e){var t;if(this.activatorElement)return this.activatorElement;let n=null;if(this.activator){const e=this.internalActivator?this.$el:document;n="string"===typeof this.activator?e.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!e){const e=this.activatorNode[0].componentInstance;n=e&&e.$options.mixins&&e.$options.mixins.some((e=>e.options&&["activatable","menuable"].includes(e.options.name)))?e.getActivator():this.activatorNode[0].elm}else e&&(n=e.currentTarget||e.target);return this.activatorElement=(null==(t=n)?void 0:t.nodeType)===Node.ELEMENT_NODE?n:null,this.activatorElement},getContentSlot(){return(0,i.z9)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const e=this;return{get value(){return e.isActive},set value(t){e.isActive=t}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const e=Object.keys(this.listeners);for(const t of e)this.activatorElement.removeEventListener(t,this.listeners[t]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}});function I(e){const t=[];for(let n=0;n<e.length;n++){const i=e[n];i.isActive&&i.isDependent?t.push(i):t.push(...I(i.$children))}return t}var S=(0,o.Z)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(e){if(e)return;const t=this.getOpenDependents();for(let n=0;n<t.length;n++)t[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?I(this.$children):[]},getOpenDependentElements(){const e=[],t=this.getOpenDependents();for(let n=0;n<t.length;n++)e.push(...t[n].getClickableDependentElements());return e},getClickableDependentElements(){const e=[this.$el];return this.$refs.content&&e.push(this.$refs.content),this.overlay&&e.push(this.overlay.$el),e.push(...this.getOpenDependentElements()),e}}}),E=r.Z.extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const e=this.stackElement||this.$refs.content,t=this.isActive?this.getMaxZIndex(this.stackExclude||[e])+2:(0,i.KK)(e);return null==t?t:parseInt(t)}},methods:{getMaxZIndex(e=[]){const t=this.$el,n=[this.stackMinZIndex,(0,i.KK)(t)],r=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let s=0;s<r.length;s++)e.includes(r[s])||n.push((0,i.KK)(r[s]));return Math.max(...n)}}}),T=n(3536),k=r.Z.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,m.Jk)("lazy",this)},methods:{showLazyContent(e){return this.hasContent&&e?e():[this.$createElement()]}}});function x(e){const t=typeof e;return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}function C(e){e.forEach((e=>{e.elm&&e.elm.parentNode&&e.elm.parentNode.removeChild(e.elm)}))}var A=(0,o.Z)(k).extend({name:"detachable",props:{attach:{default:!1,validator:x},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick((()=>{if(this.activatorNode){const e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];e.forEach((e=>{if(!e.elm)return;if(!this.$el.parentNode)return;const t=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(e.elm,t)}))}}))},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const t=new MutationObserver((n=>{n.some((e=>Array.from(e.removedNodes).includes(this.$el)))&&(t.disconnect(),C(e))}));t.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else C(e)}},methods:{getScopeIdAttrs(){const e=(0,i.vO)(this.$vnode,"context.$options._scopeId");return e&&{[e]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let e;e=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,e?(e.appendChild(this.$refs.content),this.hasDetached=!0):(0,m.Kd)(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}});const O=(0,o.Z)(E,(0,T.d)(["top","right","bottom","left","absolute"]),_,A);var D=O.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const e=this.dimensions.activator,t=this.dimensions.content,n=(!1!==this.attach?e.offsetLeft:e.left)||0,i=Math.max(e.width,t.width);let r=0;if(r+=n,(this.left||this.$vuetify.rtl&&!this.right)&&(r-=i-e.width),this.offsetX){const t=isNaN(Number(this.maxWidth))?e.width:Math.min(e.width,Number(this.maxWidth));r+=this.left?-t:e.width}return this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),r},computedTop(){const e=this.dimensions.activator,t=this.dimensions.content;let n=0;return this.top&&(n+=e.height-t.height),!1!==this.attach?n+=e.offsetTop:n+=e.top+this.pageYOffset,this.offsetY&&(n+=this.top?-e.height:e.height),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),n},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled(e){e&&this.callDeactivate()},isActive(e){this.disabled||(e?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(e){return(0,i.kb)(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,e))},calcTop(){return(0,i.kb)(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(e,t){const n=e+t-this.pageWidth+12;return e=(!this.left||this.right)&&n>0?Math.max(e-n,0):Math.max(e,12),e+this.getOffsetLeft()},calcYOverflow(e){const t=this.getInnerHeight(),n=this.absoluteYOffset+t,i=this.dimensions.activator,r=this.dimensions.content.height,s=e+r,o=n<s;return o&&this.offsetOverflow&&i.top>r?e=this.pageYOffset+(i.top-r):o&&!this.allowOverflow?e=n-r-12:e<this.absoluteYOffset&&!this.allowOverflow&&(e=this.absoluteYOffset+12),e<12?12:e},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return;let e=this.getActivator();while(e){if("fixed"===window.getComputedStyle(e).position)return void(this.activatorFixed=!0);e=e.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const e=_.options.methods.genActivatorListeners.call(this),t=e.click;return t&&(e.click=e=>{this.openOnClick&&t&&t(e),this.absoluteX=e.clientX,this.absoluteY=e.clientY}),e},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(e){const t=e.getBoundingClientRect();return{top:Math.round(t.top),left:Math.round(t.left),bottom:Math.round(t.bottom),right:Math.round(t.right),width:Math.round(t.width),height:Math.round(t.height)}},measure(e){if(!e||!this.hasWindow)return null;const t=this.getRoundedBoundedClientRect(e);if(!1!==this.attach){const n=window.getComputedStyle(e);t.left=parseInt(n.marginLeft),t.top=parseInt(n.marginTop)}return t},sneakPeek(e){requestAnimationFrame((()=>{const t=this.$refs.content;t&&"none"===t.style.display?(t.style.display="inline-block",e(),t.style.display="none"):e()}))},startTransition(){return new Promise((e=>requestAnimationFrame((()=>{this.isContentActive=this.hasJustFocused=this.isActive,e()}))))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const e={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{const t=this.getActivator();if(!t)return;e.activator=this.measure(t),e.activator.offsetLeft=t.offsetLeft,!1!==this.attach?e.activator.offsetTop=t.offsetTop:e.activator.offsetTop=0}this.sneakPeek((()=>{if(this.$refs.content){if(this.$refs.content.offsetParent){const t=this.getRoundedBoundedClientRect(this.$refs.content.offsetParent);this.relativeYOffset=window.pageYOffset+t.top,e.activator.top-=this.relativeYOffset,e.activator.left-=window.pageXOffset+t.left}e.content=this.measure(this.$refs.content)}this.dimensions=e}))}}}),N=r.Z.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(e){e?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(e){this.originalValue=e,setTimeout((()=>{this.isActive=!1}))}}}),$=n(3712),P=n(1706);function L(){return!0}function R(e,t,n){if(!e||!1===M(e,n))return!1;const i=(0,P.e)(t);if("undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&i.host===e.target)return!1;const r=("object"===typeof n.value&&n.value.include||(()=>[]))();return r.push(t),!r.some((t=>t.contains(e.target)))}function M(e,t){const n="object"===typeof t.value&&t.value.closeConditional||L;return n(e)}function V(e,t,n,i){const r="function"===typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&R(e,t,n)&&setTimeout((()=>{M(e,n)&&r&&r(e)}),0)}function F(e,t){const n=(0,P.e)(e);t(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}const B={inserted(e,t,n){const i=i=>V(i,e,t,n),r=n=>{e._clickOutside.lastMousedownWasOutside=R(n,e,t)};F(e,(e=>{e.addEventListener("click",i,!0),e.addEventListener("mousedown",r,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.context._uid]={onClick:i,onMousedown:r}},unbind(e,t,n){e._clickOutside&&(F(e,(t=>{var i;if(!t||null==(i=e._clickOutside)||!i[n.context._uid])return;const{onClick:r,onMousedown:s}=e._clickOutside[n.context._uid];t.removeEventListener("click",r,!0),t.removeEventListener("mousedown",s,!0)})),delete e._clickOutside[n.context._uid])}};var j=B,U=n(549),q=n(1439);const z=(0,o.Z)(S,b,N,$.Z,h.Z,D);var H=z.extend({name:"v-menu",directives:{ClickOutside:j,Resize:U.Z},provide(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const e=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?(0,i.kb)(this.calcXOverflow(this.calcLeftAuto(),e))||"0":this.calcLeft(e)||"0"},calculatedMaxHeight(){const e=this.auto?"200px":(0,i.kb)(this.maxHeight);return e||"0"},calculatedMaxWidth(){return(0,i.kb)(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return(0,i.kb)(this.minWidth)||"0";const e=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),t=isNaN(parseInt(this.calculatedMaxWidth))?e:parseInt(this.calculatedMaxWidth);return(0,i.kb)(Math.min(t,e))||"0"},calculatedTop(){const e=this.auto?(0,i.kb)(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return e||"0"},hasClickableTiles(){return Boolean(this.tiles.find((e=>e.tabIndex>-1)))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(e){e||(this.listIndex=-1)},isContentActive(e){this.hasJustFocused=e},listIndex(e,t){if(e in this.tiles){const t=this.tiles[e];t.classList.add("v-list-item--highlighted");const n=this.$refs.content.scrollTop,i=this.$refs.content.clientHeight;n>t.offsetTop-8?(0,q.Z)(t.offsetTop-t.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):n+i<t.offsetTop+t.clientHeight+8&&(0,q.Z)(t.offsetTop-i+2*t.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}t in this.tiles&&this.tiles[t].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,m.Jk)("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame((()=>{this.startTransition().then((()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))}))}))},calcScrollPosition(){const e=this.$refs.content,t=e.querySelector(".v-list-item--active"),n=e.scrollHeight-e.offsetHeight;return t?Math.min(n,Math.max(0,t.offsetTop-e.offsetHeight/2+t.offsetHeight/2)):e.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const e=this.$refs.content,t=e.querySelector(".v-list-item--active");if(t||(this.selectedIndex=null),this.offsetY||!t)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(t);const n=t.offsetTop-this.calcScrollPosition(),i=e.querySelector(".v-list-item").offsetTop;return this.computedTop-n-i-1},changeListIndex(e){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(e.keyCode!==i.Do.tab){if(e.keyCode===i.Do.down)this.nextTile();else if(e.keyCode===i.Do.up)this.prevTile();else if(e.keyCode===i.Do.end)this.lastTile();else if(e.keyCode===i.Do.home)this.firstTile();else{if(e.keyCode!==i.Do.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}e.preventDefault()}else this.isActive=!1},closeConditional(e){const t=e.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(t)},genActivatorAttributes(){const e=_.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...e,"aria-activedescendant":this.activeTile.id}:e},genActivatorListeners(){const e=D.options.methods.genActivatorListeners.call(this);return this.disableKeys||(e.keydown=this.onKeyDown),e},genTransition(){const e=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[e]):e},genDirectives(){const e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),e},genContent(){const e={attrs:{...this.getScopeIdAttrs(),role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,...this.roundedClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:e=>{const t=e.target;t.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler(){this.runDelay("open",(()=>{this.hasJustFocused||(this.hasJustFocused=!0)}))},mouseLeaveHandler(e){this.runDelay("close",(()=>{var t;null!=(t=this.$refs.content)&&t.contains(e.relatedTarget)||requestAnimationFrame((()=>{this.isActive=!1,this.callDeactivate()}))}))},nextTile(){const e=this.tiles[this.listIndex+1];if(!e){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===e.tabIndex&&this.nextTile()},prevTile(){const e=this.tiles[this.listIndex-1];if(!e){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===e.tabIndex&&this.prevTile()},lastTile(){const e=this.tiles[this.tiles.length-1];e&&(this.listIndex=this.tiles.length-1,-1===e.tabIndex&&this.prevTile())},firstTile(){const e=this.tiles[0];e&&(this.listIndex=0,-1===e.tabIndex&&this.nextTile())},onKeyDown(e){if(e.keyCode===i.Do.esc){setTimeout((()=>{this.isActive=!1}));const e=this.getActivator();this.$nextTick((()=>e&&e.focus()))}else!this.isActive&&[i.Do.up,i.Do.down].includes(e.keyCode)&&(this.isActive=!0);this.$nextTick((()=>this.changeListIndex(e)))},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(e){const t={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return e("div",t,[!this.activator&&this.genActivator(),this.showLazyContent((()=>[this.$createElement(y,{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])]))])}}),W=H,K=n(6286),G=n(6428),Z=n(6290),Y=r.Z.extend({name:"v-simple-checkbox",functional:!0,directives:{ripple:K.Z},props:{...u.Z.options.props,...h.Z.options.props,disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}},render(e,{props:t,data:n,listeners:r}){const s=[];let o=t.offIcon;if(t.indeterminate?o=t.indeterminateIcon:t.value&&(o=t.onIcon),s.push(e(G.Z,u.Z.options.methods.setTextColor(t.value&&t.color,{props:{disabled:t.disabled,dark:t.dark,light:t.light}}),o)),t.ripple&&!t.disabled){const n=e("div",u.Z.options.methods.setTextColor(t.color,{staticClass:"v-input--selection-controls__ripple",directives:[{name:"ripple",value:{center:!0}}]}));s.push(n)}return e("div",(0,Z.ZP)(n,{class:{"v-simple-checkbox":!0,"v-simple-checkbox--disabled":t.disabled},on:{click:e=>{e.stopPropagation(),n.on&&n.on.input&&!t.disabled&&(0,i.TI)(n.on.input).forEach((e=>e(!t.value)))}}}),[e("div",{staticClass:"v-input--selection-controls__input"},s)])}}),J=h.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":t,...this.$attrs},on:this.$listeners})}}),Q=J,X=(0,o.Z)(h.Z).extend({name:"v-subheader",props:{inset:Boolean},render(e){return e("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}}),ee=X,te=n(3385),ne=te.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...te.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(e){this.groups.push(e)},unregister(e){const t=this.groups.findIndex((t=>t._uid===e._uid));t>-1&&this.groups.splice(t,1)},listClick(e){if(!this.expand)for(const t of this.groups)t.toggle(e)}},render(e){const t={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return e(this.tag,this.setBackgroundColor(this.color,t),[this.$slots.default])}});const ie=(0,o.Z)(u.Z,p.Z,h.Z,(0,l.d)("listItemGroup"),(0,d.d)("inputValue"));var re=ie.extend().extend({name:"v-list-item",directives:{Ripple:K.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...p.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(p.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,m.Jk)("avatar",this)},methods:{click(e){e.detail&&this.$el.blur(),this.$emit("click",e),this.to||this.toggle()},genAttrs(){const e={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(e.role="option",e["aria-selected"]=String(this.isActive)):this.isInMenu?(e.role=this.isClickable?"menuitem":void 0,e.id=e.id||`list-item-${this._uid}`):this.isInList&&(e.role="listitem")),e},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(e){let{tag:t,data:n}=this.generateRouteLink();n.attrs={...n.attrs,...this.genAttrs()},n[this.to?"nativeOn":"on"]={...n[this.to?"nativeOn":"on"],keydown:e=>{e.keyCode===i.Do.enter&&this.click(e),this.$emit("keydown",e)}},this.inactive&&(t="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);const r=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return e(t,this.isActive?this.setTextColor(this.color,n):n,r)}}),se=r.Z.extend({name:"v-list-item-icon",functional:!0,render(e,{data:t,children:n}){return t.staticClass=`v-list-item__icon ${t.staticClass||""}`.trim(),e("div",t,n)}}),oe=n(6210),ae=n(6257);const ce=(0,o.Z)(oe.Z,k,u.Z,(0,ae.f)("list"),d.Z);ce.extend().extend({name:"v-list-group",directives:{ripple:K.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(e){!this.subGroup&&e&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(e){this.disabled||(this.isBooted=!0,this.$emit("click",e),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(e){return this.$createElement(c.Z,e)},genAppendIcon(){const e=!this.subGroup&&this.appendIcon;return e||this.$slots.appendIcon?this.$createElement(se,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(e)]):null},genHeader(){return this.$createElement(re,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,i.z9)(this))]))},genPrependIcon(){const e=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return e||this.$slots.prependIcon?this.$createElement(se,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(e)]):null},onRouteChange(e){if(!this.group)return;const t=this.matchRoute(e.path);t&&this.isActive!==t&&this.list&&this.list.listClick(this._uid),this.isActive=t},toggle(e){const t=this._uid===e;t&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=t))},matchRoute(e){return null!==e.match(this.group)}},render(e){return e("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),e(a.Fx,this.genItems())])}});var ue=r.Z.extend({name:"comparable",props:{valueComparator:{type:Function,default:i.vZ}}}),le=n(1431);const he=(0,o.Z)(ue,le.Z,h.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((e,t)=>this.toggleMethod(this.getValue(e,t))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return e=>this.valueComparator(this.internalValue,e);const e=this.internalValue;return Array.isArray(e)?t=>e.some((e=>this.valueComparator(e,t))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,m.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(e,t){return void 0===e.value?t:e.value},onClick(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register(e){const t=this.items.push(e)-1;e.$on("change",(()=>this.onClick(e))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,t)},unregister(e){if(this._isDestroyed)return;const t=this.items.indexOf(e),n=this.getValue(e,t);this.items.splice(t,1);const i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((e=>e!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(e,t){const n=this.getValue(e,t);e.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory(e){if(!this.items.length)return;const t=this.items.slice();e&&t.reverse();const n=t.find((e=>!e.disabled));if(!n)return;const i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))},updateMultiple(e){const t=Array.isArray(this.internalValue)?this.internalValue:[],n=t.slice(),i=n.findIndex((t=>t===e));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(e),this.internalValue=n)},updateSingle(e){const t=e===this.internalValue;this.mandatory&&t||(this.internalValue=t?void 0:e)}},render(e){return e(this.tag,this.genData(),this.$slots.default)}});he.extend({name:"v-item-group",provide(){return{itemGroup:this}}}),(0,o.Z)(he,u.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...he.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...he.options.methods.genData.call(this),attrs:{role:"listbox"}})}}});var de=r.Z.extend({name:"v-list-item-action",functional:!0,render(e,{data:t,children:n=[]}){t.staticClass=t.staticClass?`v-list-item__action ${t.staticClass}`:"v-list-item__action";const i=n.filter((e=>!1===e.isComment&&" "!==e.text));return i.length>1&&(t.staticClass+=" v-list-item__action--stack"),e("div",t,n)}}),pe=n(2529),fe=(0,o.Z)(u.Z,pe.Z,$.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,i.kb)(this.size),minWidth:(0,i.kb)(this.size),width:(0,i.kb)(this.size),...this.measurableStyles}}},render(e){const t={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return e("div",this.setBackgroundColor(this.color,t),this.$slots.default)}}),me=fe;me.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...me.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(e){const t=me.options.render.call(this,e);return t.data=t.data||{},t.data.staticClass+=" v-list-item__avatar",t}});(0,i.Ji)("v-list-item__action-text","span");const ge=(0,i.Ji)("v-list-item__content","div"),ve=(0,i.Ji)("v-list-item__title","div");(0,i.Ji)("v-list-item__subtitle","div");var ye=(0,o.Z)(u.Z,h.Z).extend({name:"v-select-list",directives:{ripple:K.Z},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:()=>[]}},computed:{parsedItems(){return this.selectedItems.map((e=>this.getValue(e)))},tileActiveClass(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile(){const e={attrs:{role:void 0},on:{mousedown:e=>e.preventDefault()}};return this.$createElement(re,e,[this.genTileContent(this.noDataText)])}},methods:{genAction(e,t){return this.$createElement(de,[this.$createElement(Y,{props:{color:this.color,value:t,ripple:!1},on:{input:()=>this.$emit("select",e)}})])},genDivider(e){return this.$createElement(Q,{props:e})},genFilteredText(e){if(e=e||"",!this.searchInput||this.noFilter)return(0,i.r)(e);const{start:t,middle:n,end:r}=this.getMaskedCharacters(e);return`${(0,i.r)(t)}${this.genHighlight(n)}${(0,i.r)(r)}`},genHeader(e){return this.$createElement(ee,{props:e},e.header)},genHighlight(e){return`<span class="v-list-item__mask">${(0,i.r)(e)}</span>`},getMaskedCharacters(e){const t=(this.searchInput||"").toString().toLocaleLowerCase(),n=e.toLocaleLowerCase().indexOf(t);if(n<0)return{start:e,middle:"",end:""};const i=e.slice(0,n),r=e.slice(n,n+t.length),s=e.slice(n+t.length);return{start:i,middle:r,end:s}},genTile({item:e,index:t,disabled:n=null,value:i=!1}){i||(i=this.hasItem(e)),e===Object(e)&&(n=null!==n?n:this.getDisabled(e));const r={attrs:{"aria-selected":String(i),id:`list-item-${this._uid}-${t}`,role:"option"},on:{mousedown:e=>{e.preventDefault()},click:()=>n||this.$emit("select",e)},props:{activeClass:this.tileActiveClass,disabled:n,ripple:!0,inputValue:i}};if(!this.$scopedSlots.item)return this.$createElement(re,r,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(e,i):null,this.genTileContent(e,t)]);const s=this,o=this.$scopedSlots.item({parent:s,item:e,attrs:{...r.attrs,...r.props},on:r.on});return this.needsTile(o)?this.$createElement(re,r,o):o},genTileContent(e,t=0){const n=this.genFilteredText(this.getText(e));return this.$createElement(ge,[this.$createElement(ve,{domProps:{innerHTML:n}})])},hasItem(e){return this.parsedItems.indexOf(this.getValue(e))>-1},needsTile(e){return 1!==e.length||null==e[0].componentOptions||"v-list-item"!==e[0].componentOptions.Ctor.options.name},getDisabled(e){return Boolean((0,i.qF)(e,this.itemDisabled,!1))},getText(e){return String((0,i.qF)(e,this.itemText,e))},getValue(e){return(0,i.qF)(e,this.itemValue,this.getText(e))}},render(){const e=[],t=this.items.length;for(let n=0;n<t;n++){const t=this.items[n];this.hideSelected&&this.hasItem(t)||(null==t?e.push(this.genTile({item:t,index:n})):t.header?e.push(this.genHeader(t)):t.divider?e.push(this.genDivider(t)):e.push(this.genTile({item:t,index:n})))}return e.length||e.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&e.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&e.push(this.$slots["append-item"]),this.$createElement(ne,{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},e)}}),be=n(8230),we=n(5978),_e=r.Z.extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}});const Ie={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},Se=(0,o.Z)(we.Z,ue,S,_e);var Ee=Se.extend().extend({name:"v-select",directives:{ClickOutside:j},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:()=>Ie},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes(){return{...we.Z.options.computed.classes.call(this),"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple}},computedItems(){return this.allItems},computedOwns(){return`list-${this._uid}`},computedCounterValue(){const e=this.multiple?this.selectedItems:(this.getText(this.selectedItems[0])||"").toString();return"function"===typeof this.counterValue?this.counterValue(e):e.length},directives(){return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional,include:()=>this.getOpenDependentElements()}}]:void 0},dynamicHeight(){return"auto"},hasChips(){return this.chips||this.smallChips},hasSlot(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty(){return this.selectedItems.length>0},listData(){const e=this.$vnode&&this.$vnode.context.$options._scopeId,t=e?{[e]:!0}:{};return{attrs:{...t,id:this.computedOwns},props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&(0,m.N6)("assert: staticList should not be called if slots are used"),this.$createElement(ye,this.listData)},virtualizedItems(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:()=>!0,$_menuProps(){let e="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(e)&&(e=e.reduce(((e,t)=>(e[t.trim()]=!0,e)),{})),{...Ie,eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:e.offsetY?1:0,...e}}},watch:{internalValue(e){this.initialValue=e,this.setSelectedItems(),this.multiple&&this.$nextTick((()=>{var e;null==(e=this.$refs.menu)||e.updateDimensions()}))},isMenuActive(e){window.setTimeout((()=>this.onMenuActiveChange(e)))},items:{immediate:!0,handler(e){this.cacheItems&&this.$nextTick((()=>{this.cachedItems=this.filterDuplicates(this.cachedItems.concat(e))})),this.setSelectedItems()}}},methods:{blur(e){we.Z.options.methods.blur.call(this,e),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1,this.setMenuIndex(-1)},activateMenu(){this.isInteractive&&!this.isMenuActive&&(this.isMenuActive=!0)},clearableCallback(){this.setValue(this.multiple?[]:null),this.setMenuIndex(-1),this.$nextTick((()=>this.$refs.input&&this.$refs.input.focus())),this.openOnClear&&(this.isMenuActive=!0)},closeConditional(e){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(e.target))&&this.$el&&!this.$el.contains(e.target)&&e.target!==this.$el},filterDuplicates(e){const t=new Map;for(let n=0;n<e.length;++n){const i=e[n];if(null==i)continue;if(i.header||i.divider){t.set(i,i);continue}const r=this.getValue(i);!t.has(r)&&t.set(r,i)}return Array.from(t.values())},findExistingIndex(e){const t=this.getValue(e);return(this.internalValue||[]).findIndex((e=>this.valueComparator(this.getValue(e),t)))},getContent(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection(e,t){const n=this.isDisabled||this.getDisabled(e),i=!n&&this.isInteractive;return this.$createElement(v,{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&i,disabled:n,inputValue:t===this.selectedIndex,small:this.smallChips},on:{click:e=>{i&&(e.stopPropagation(),this.selectedIndex=t)},"click:close":()=>this.onChipInput(e)},key:JSON.stringify(this.getValue(e))},this.getText(e))},genCommaSelection(e,t,n){const i=t===this.selectedIndex&&this.computedColor,r=this.isDisabled||this.getDisabled(e);return this.$createElement("div",this.setTextColor(i,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":r},key:JSON.stringify(this.getValue(e))}),`${this.getText(e)}${n?"":", "}`)},genDefaultSlot(){const e=this.genSelections(),t=this.genInput();return Array.isArray(e)?e.push(t):(e.children=e.children||[],e.children.push(t)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,e,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon(e,t,n){const i=be.Z.options.methods.genIcon.call(this,e,t,n);return"append"===e&&(i.children[0].data=(0,Z.ZP)(i.children[0].data,{attrs:{tabindex:i.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),i},genInput(){const e=we.Z.options.methods.genInput.call(this);return delete e.data.attrs.name,e.data=(0,Z.ZP)(e.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":(0,i.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,i.vO)(e.data,"attrs.autocomplete","off"),placeholder:this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?void 0:this.placeholder},on:{keypress:this.onKeyPress}}),e},genHiddenInput(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot(){const e=we.Z.options.methods.genInputSlot.call(this);return e.data.attrs={...e.data.attrs,role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns},e},genList(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot(){const e=["prepend-item","no-data","append-item"].filter((e=>this.$slots[e])).map((e=>this.$createElement("template",{slot:e},this.$slots[e])));return this.$createElement(ye,{...this.listData},e)},genMenu(){const e=this.$_menuProps;return e.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?e.attach=this.$el:e.attach=this.attach,this.$createElement(W,{attrs:{role:void 0},props:e,on:{input:e=>{this.isMenuActive=e,this.isFocused=e},scroll:this.onScroll},ref:"menu"},[this.genList()])},genSelections(){let e=this.selectedItems.length;const t=new Array(e);let n;n=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(e--)t[e]=n(this.selectedItems[e],e,e===t.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},t)},genSlotSelection(e,t){return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:e,index:t,select:e=>{e.stopPropagation(),this.selectedIndex=t},selected:t===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled(e){return(0,i.qF)(e,this.itemDisabled,!1)},getText(e){return(0,i.qF)(e,this.itemText,e)},getValue(e){return(0,i.qF)(e,this.itemValue,this.getText(e))},onBlur(e){e&&this.$emit("blur",e)},onChipInput(e){this.multiple?this.selectItem(e):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick(e){this.isInteractive&&(this.isAppendInner(e.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",e))},onEscDown(e){e.preventDefault(),this.isMenuActive&&(e.stopPropagation(),this.isMenuActive=!1)},onKeyPress(e){if(this.multiple||!this.isInteractive||this.disableLookup)return;const t=1e3,n=performance.now();n-this.keyboardLookupLastTime>t&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=e.key.toLowerCase(),this.keyboardLookupLastTime=n;const i=this.allItems.findIndex((e=>{const t=(this.getText(e)||"").toString();return t.toLowerCase().startsWith(this.keyboardLookupPrefix)})),r=this.allItems[i];-1!==i&&(this.lastItem=Math.max(this.lastItem,i+5),this.setValue(this.returnObject?r:this.getValue(r)),this.$nextTick((()=>this.$refs.menu.getTiles())),setTimeout((()=>this.setMenuIndex(i))))},onKeyDown(e){if(this.isReadonly&&e.keyCode!==i.Do.tab)return;const t=e.keyCode,n=this.$refs.menu;return this.$emit("keydown",e),n?(this.isMenuActive&&[i.Do.up,i.Do.down,i.Do.home,i.Do.end,i.Do.enter].includes(t)&&this.$nextTick((()=>{n.changeListIndex(e),this.$emit("update:list-index",n.listIndex)})),[i.Do.enter,i.Do.space].includes(t)&&this.activateMenu(),!this.isMenuActive&&[i.Do.up,i.Do.down,i.Do.home,i.Do.end].includes(t)?this.onUpDown(e):t===i.Do.esc?this.onEscDown(e):t===i.Do.tab?this.onTabDown(e):t===i.Do.space?this.onSpaceDown(e):void 0):void 0},onMenuActiveChange(e){if(this.multiple&&!e||this.getMenuIndex()>-1)return;const t=this.$refs.menu;if(t&&this.isDirty){this.$refs.menu.getTiles();for(let e=0;e<t.tiles.length;e++)if("true"===t.tiles[e].getAttribute("aria-selected")){this.setMenuIndex(e);break}}},onMouseUp(e){this.hasMouseDown&&3!==e.which&&this.isInteractive&&this.isAppendInner(e.target)&&this.$nextTick((()=>this.isMenuActive=!this.isMenuActive)),we.Z.options.methods.onMouseUp.call(this,e)},onScroll(){if(this.isMenuActive){if(this.lastItem>this.computedItems.length)return;const e=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;e&&(this.lastItem+=20)}else requestAnimationFrame((()=>this.getContent().scrollTop=0))},onSpaceDown(e){e.preventDefault()},onTabDown(e){const t=this.$refs.menu;if(!t)return;const n=t.activeTile;!this.multiple&&n&&this.isMenuActive?(e.preventDefault(),e.stopPropagation(),n.click()):this.blur(e)},onUpDown(e){const t=this.$refs.menu;if(!t)return;if(e.preventDefault(),this.multiple)return this.activateMenu();const n=e.keyCode;t.isBooted=!0,window.requestAnimationFrame((()=>{if(t.getTiles(),!t.hasClickableTiles)return this.activateMenu();switch(n){case i.Do.up:t.prevTile();break;case i.Do.down:t.nextTile();break;case i.Do.home:t.firstTile();break;case i.Do.end:t.lastTile();break}this.selectItem(this.allItems[this.getMenuIndex()])}))},selectItem(e){if(this.multiple){const t=(this.internalValue||[]).slice(),n=this.findExistingIndex(e);if(-1!==n?t.splice(n,1):t.push(e),this.setValue(t.map((e=>this.returnObject?e:this.getValue(e)))),this.hideSelected)this.setMenuIndex(-1);else{const t=this.allItems.indexOf(e);~t&&(this.$nextTick((()=>this.$refs.menu.getTiles())),setTimeout((()=>this.setMenuIndex(t))))}}else this.setValue(this.returnObject?e:this.getValue(e)),this.isMenuActive=!1},setMenuIndex(e){this.$refs.menu&&(this.$refs.menu.listIndex=e)},setSelectedItems(){const e=[],t=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue];for(const n of t){const t=this.allItems.findIndex((e=>this.valueComparator(this.getValue(e),this.getValue(n))));t>-1&&e.push(this.allItems[t])}this.selectedItems=e},setValue(e){this.valueComparator(e,this.internalValue)||(this.internalValue=e,this.$emit("change",e))},isAppendInner(e){const t=this.$refs["append-inner"];return t&&(t===e||t.contains(e))}}}),Te=n(4995),ke=Te.Z,xe=r.Z.extend({name:"v-data-footer",props:{options:{type:Object,required:!0},pagination:{type:Object,required:!0},itemsPerPageOptions:{type:Array,default:()=>[5,10,15,-1]},prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},itemsPerPageAllText:{type:String,default:"$vuetify.dataFooter.itemsPerPageAll"},showFirstLastPage:Boolean,showCurrentPage:Boolean,disablePagination:Boolean,disableItemsPerPage:Boolean,pageText:{type:String,default:"$vuetify.dataFooter.pageText"}},computed:{disableNextPageIcon(){return this.options.itemsPerPage<=0||this.options.page*this.options.itemsPerPage>=this.pagination.itemsLength||this.pagination.pageStop<0},computedDataItemsPerPageOptions(){return this.itemsPerPageOptions.map((e=>"object"===typeof e?e:this.genDataItemsPerPageOption(e)))}},methods:{updateOptions(e){this.$emit("update:options",Object.assign({},this.options,e))},onFirstPage(){this.updateOptions({page:1})},onPreviousPage(){this.updateOptions({page:this.options.page-1})},onNextPage(){this.updateOptions({page:this.options.page+1})},onLastPage(){this.updateOptions({page:this.pagination.pageCount})},onChangeItemsPerPage(e){this.updateOptions({itemsPerPage:e,page:1})},genDataItemsPerPageOption(e){return{text:-1===e?this.$vuetify.lang.t(this.itemsPerPageAllText):String(e),value:e}},genItemsPerPageSelect(){let e=this.options.itemsPerPage;const t=this.computedDataItemsPerPageOptions;return t.length<=1?null:(t.find((t=>t.value===e))||(e=t[0]),this.$createElement("div",{staticClass:"v-data-footer__select"},[this.$vuetify.lang.t(this.itemsPerPageText),this.$createElement(Ee,{attrs:{"aria-label":this.$vuetify.lang.t(this.itemsPerPageText)},props:{disabled:this.disableItemsPerPage,items:t,value:e,hideDetails:!0,auto:!0,minWidth:"75px"},on:{input:this.onChangeItemsPerPage}})]))},genPaginationInfo(){let e=["–"];const t=this.pagination.itemsLength;let n=this.pagination.pageStart,i=this.pagination.pageStop;return this.pagination.itemsLength&&this.pagination.itemsPerPage?(n=this.pagination.pageStart+1,i=t<this.pagination.pageStop||this.pagination.pageStop<0?t:this.pagination.pageStop,e=this.$scopedSlots["page-text"]?[this.$scopedSlots["page-text"]({pageStart:n,pageStop:i,itemsLength:t})]:[this.$vuetify.lang.t(this.pageText,n,i,t)]):this.$scopedSlots["page-text"]&&(e=[this.$scopedSlots["page-text"]({pageStart:n,pageStop:i,itemsLength:t})]),this.$createElement("div",{class:"v-data-footer__pagination"},e)},genIcon(e,t,n,i){return this.$createElement(ke,{props:{disabled:t||this.disablePagination,icon:!0,text:!0},on:{click:e},attrs:{"aria-label":n}},[this.$createElement(c.Z,i)])},genIcons(){const e=[],t=[];return e.push(this.genIcon(this.onPreviousPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.prevPage"),this.$vuetify.rtl?this.nextIcon:this.prevIcon)),t.push(this.genIcon(this.onNextPage,this.disableNextPageIcon,this.$vuetify.lang.t("$vuetify.dataFooter.nextPage"),this.$vuetify.rtl?this.prevIcon:this.nextIcon)),this.showFirstLastPage&&(e.unshift(this.genIcon(this.onFirstPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.firstPage"),this.$vuetify.rtl?this.lastIcon:this.firstIcon)),t.push(this.genIcon(this.onLastPage,this.options.page>=this.pagination.pageCount||-1===this.options.itemsPerPage,this.$vuetify.lang.t("$vuetify.dataFooter.lastPage"),this.$vuetify.rtl?this.firstIcon:this.lastIcon))),[this.$createElement("div",{staticClass:"v-data-footer__icons-before"},e),this.showCurrentPage&&this.$createElement("span",[this.options.page.toString()]),this.$createElement("div",{staticClass:"v-data-footer__icons-after"},t)]}},render(){return this.$createElement("div",{staticClass:"v-data-footer"},[(0,i.z9)(this,"prepend"),this.genItemsPerPageSelect(),this.genPaginationInfo(),this.genIcons()])}}),Ce=r.Z.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:e=>!isNaN(Number(e))||["xs","sm","md","lg","xl"].includes(String(e))}},computed:{isMobile(){const{mobile:e,width:t,name:n,mobileBreakpoint:i}=this.$vuetify.breakpoint;if(i===this.mobileBreakpoint)return e;const r=parseInt(this.mobileBreakpoint,10),s=!isNaN(r);return s?t<r:n===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,m.Rn)("mobile-break-point","mobile-breakpoint",this)}}),Ae=(0,o.Z)(Ce,h.Z).extend({name:"v-data-iterator",props:{...s.options.props,itemKey:{type:String,default:"id"},value:{type:Array,default:()=>[]},singleSelect:Boolean,expanded:{type:Array,default:()=>[]},mobileBreakpoint:{...Ce.options.props.mobileBreakpoint,default:600},singleExpand:Boolean,loading:[Boolean,String],noResultsText:{type:String,default:"$vuetify.dataIterator.noResultsText"},noDataText:{type:String,default:"$vuetify.noDataText"},loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideDefaultFooter:Boolean,footerProps:Object,selectableKey:{type:String,default:"isSelectable"}},data:()=>({selection:{},expansion:{},internalCurrentItems:[],shiftKeyDown:!1,lastEntry:-1}),computed:{everyItem(){return!!this.selectableItems.length&&this.selectableItems.every((e=>this.isSelected(e)))},someItems(){return this.selectableItems.some((e=>this.isSelected(e)))},sanitizedFooterProps(){return(0,i.$x)(this.footerProps)},selectableItems(){return this.internalCurrentItems.filter((e=>this.isSelectable(e)))}},watch:{value:{handler(e){this.selection=e.reduce(((e,t)=>(e[(0,i.vO)(t,this.itemKey)]=t,e)),{})},immediate:!0},selection(e,t){(0,i.vZ)(Object.keys(e),Object.keys(t))||this.$emit("input",Object.values(e))},expanded:{handler(e){this.expansion=e.reduce(((e,t)=>(e[(0,i.vO)(t,this.itemKey)]=!0,e)),{})},immediate:!0},expansion(e,t){if((0,i.vZ)(e,t))return;const n=Object.keys(e).filter((t=>e[t])),r=n.length?this.items.filter((e=>n.includes(String((0,i.vO)(e,this.itemKey))))):[];this.$emit("update:expanded",r)}},created(){const e=[["disable-initial-sort","sort-by"],["filter","custom-filter"],["pagination","options"],["total-items","server-items-length"],["hide-actions","hide-default-footer"],["rows-per-page-items","footer-props.items-per-page-options"],["rows-per-page-text","footer-props.items-per-page-text"],["prev-icon","footer-props.prev-icon"],["next-icon","footer-props.next-icon"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,m.fK)(e,t,this)}));const t=["expand","content-class","content-props","content-tag"];t.forEach((e=>{this.$attrs.hasOwnProperty(e)&&(0,m.Jk)(e)}))},mounted(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)},beforeDestroy(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)},methods:{onKeyDown(e){e.keyCode===i.Do.shift&&(this.shiftKeyDown=!0)},onKeyUp(e){e.keyCode===i.Do.shift&&(this.shiftKeyDown=!1)},toggleSelectAll(e){const t=Object.assign({},this.selection);for(let n=0;n<this.selectableItems.length;n++){const r=this.selectableItems[n];if(!this.isSelectable(r))continue;const s=(0,i.vO)(r,this.itemKey);e?t[s]=r:delete t[s]}this.selection=t,this.$emit("toggle-select-all",{items:this.internalCurrentItems,value:e})},isSelectable(e){return!1!==(0,i.vO)(e,this.selectableKey)},isSelected(e){return!!this.selection[(0,i.vO)(e,this.itemKey)]||!1},select(e,t=!0,n=!0){if(!this.isSelectable(e))return;const r=this.singleSelect?{}:Object.assign({},this.selection),s=(0,i.vO)(e,this.itemKey);t?r[s]=e:delete r[s];const o=this.selectableItems.findIndex((e=>(0,i.vO)(e,this.itemKey)===s));if(-1===this.lastEntry)this.lastEntry=o;else if(this.shiftKeyDown&&!this.singleSelect&&n){const e=(0,i.vO)(this.selectableItems[this.lastEntry],this.itemKey),t=Object.keys(this.selection).includes(String(e));this.multipleSelect(t,n,r,o)}if(this.lastEntry=o,this.singleSelect&&n){const e=Object.keys(this.selection),t=e.length&&(0,i.vO)(this.selection[e[0]],this.itemKey);t&&t!==s&&this.$emit("item-selected",{item:this.selection[t],value:!1})}this.selection=r,n&&this.$emit("item-selected",{item:e,value:t})},multipleSelect(e=!0,t=!0,n,r){const s=r<this.lastEntry?r:this.lastEntry,o=r<this.lastEntry?this.lastEntry:r;for(let a=s;a<=o;a++){const r=this.selectableItems[a],s=(0,i.vO)(r,this.itemKey);e?n[s]=r:delete n[s],t&&this.$emit("item-selected",{currentItem:r,value:e})}},isExpanded(e){return this.expansion[(0,i.vO)(e,this.itemKey)]||!1},expand(e,t=!0){const n=this.singleExpand?{}:Object.assign({},this.expansion),r=(0,i.vO)(e,this.itemKey);t?n[r]=!0:delete n[r],this.expansion=n,this.$emit("item-expanded",{item:e,value:t})},createItemProps(e,t){return{item:e,index:t,select:t=>this.select(e,t),isSelected:this.isSelected(e),expand:t=>this.expand(e,t),isExpanded:this.isExpanded(e),isMobile:this.isMobile}},genEmptyWrapper(e){return this.$createElement("div",e)},genEmpty(e,t){if(0===e&&this.loading){const e=this.$slots.loading||this.$vuetify.lang.t(this.loadingText);return this.genEmptyWrapper(e)}if(0===e){const e=this.$slots["no-data"]||this.$vuetify.lang.t(this.noDataText);return this.genEmptyWrapper(e)}if(0===t){const e=this.$slots["no-results"]||this.$vuetify.lang.t(this.noResultsText);return this.genEmptyWrapper(e)}return null},genItems(e){const t=this.genEmpty(e.originalItemsLength,e.pagination.itemsLength);return t?[t]:this.$scopedSlots.default?this.$scopedSlots.default({...e,isSelected:this.isSelected,select:this.select,isExpanded:this.isExpanded,isMobile:this.isMobile,expand:this.expand}):this.$scopedSlots.item?e.items.map(((e,t)=>this.$scopedSlots.item(this.createItemProps(e,t)))):[]},genFooter(e){if(this.hideDefaultFooter)return null;const t={props:{...this.sanitizedFooterProps,options:e.options,pagination:e.pagination},on:{"update:options":t=>e.updateOptions(t)}},n=(0,i.FT)("footer.",this.$scopedSlots);return this.$createElement(xe,{scopedSlots:n,...t})},genDefaultScopedSlot(e){const t={...e,someItems:this.someItems,everyItem:this.everyItem,toggleSelectAll:this.toggleSelectAll};return this.$createElement("div",{staticClass:"v-data-iterator"},[(0,i.z9)(this,"header",t,!0),this.genItems(e),this.genFooter(e),(0,i.z9)(this,"footer",t,!0)])}},render(){return this.$createElement(s,{props:this.$props,on:{"update:options":(e,t)=>!(0,i.vZ)(e,t)&&this.$emit("update:options",e),"update:page":e=>this.$emit("update:page",e),"update:items-per-page":e=>this.$emit("update:items-per-page",e),"update:sort-by":e=>this.$emit("update:sort-by",e),"update:sort-desc":e=>this.$emit("update:sort-desc",e),"update:group-by":e=>this.$emit("update:group-by",e),"update:group-desc":e=>this.$emit("update:group-desc",e),pagination:(e,t)=>!(0,i.vZ)(e,t)&&this.$emit("pagination",e),"current-items":e=>{this.internalCurrentItems=e,this.$emit("current-items",e)},"page-count":e=>this.$emit("page-count",e)},scopedSlots:{default:this.genDefaultScopedSlot}})}}),Oe=(0,o.Z)().extend({directives:{ripple:K.Z},props:{headers:{type:Array,default:()=>[]},options:{type:Object,default:()=>({page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],groupDesc:[],multiSort:!1,mustSort:!1})},checkboxColor:String,sortIcon:{type:String,default:"$sort"},everyItem:Boolean,someItems:Boolean,showGroupBy:Boolean,singleSelect:Boolean,disableSort:Boolean},methods:{genSelectAll(){var e;const t={props:{value:this.everyItem,indeterminate:!this.everyItem&&this.someItems,color:null!=(e=this.checkboxColor)?e:""},on:{input:e=>this.$emit("toggle-select-all",e)}};return this.$scopedSlots["data-table-select"]?this.$scopedSlots["data-table-select"](t):this.$createElement(Y,{staticClass:"v-data-table__checkbox",...t})},genSortIcon(){return this.$createElement(c.Z,{staticClass:"v-data-table-header__icon",props:{size:18}},[this.sortIcon])}}}),De=(0,o.Z)(Oe).extend({name:"v-data-table-header-mobile",props:{sortByText:{type:String,default:"$vuetify.dataTable.sortBy"}},methods:{genSortChip(e){const t=[e.item.text],n=this.options.sortBy.findIndex((t=>t===e.item.value)),i=n>=0,r=this.options.sortDesc[n];return t.push(this.$createElement("div",{staticClass:"v-chip__close",class:{sortable:!0,active:i,asc:i&&!r,desc:i&&r}},[this.genSortIcon()])),this.$createElement(v,{staticClass:"sortable",on:{click:t=>{t.stopPropagation(),this.$emit("sort",e.item.value)}}},t)},genSortSelect(e){return this.$createElement(Ee,{props:{label:this.$vuetify.lang.t(this.sortByText),items:e,hideDetails:!0,multiple:this.options.multiSort,value:this.options.multiSort?this.options.sortBy:this.options.sortBy[0],menuProps:{closeOnContentClick:!0}},on:{change:e=>this.$emit("sort",e)},scopedSlots:{selection:e=>this.genSortChip(e)}})}},render(e){const t=[],n=this.headers.find((e=>"data-table-select"===e.value));n&&!this.singleSelect&&t.push(this.$createElement("div",{class:["v-data-table-header-mobile__select",...(0,i.TI)(n.class)],attrs:{width:n.width}},[this.genSelectAll()]));const r=this.headers.filter((e=>!1!==e.sortable&&"data-table-select"!==e.value)).map((e=>({text:e.text,value:e.value})));!this.disableSort&&r.length&&t.push(this.genSortSelect(r));const s=t.length?e("th",[e("div",{staticClass:"v-data-table-header-mobile__wrapper"},t)]):void 0,o=e("tr",[s]);return e("thead",{staticClass:"v-data-table-header v-data-table-header-mobile"},[o])}}),Ne=(0,o.Z)(Oe).extend({name:"v-data-table-header-desktop",methods:{genGroupByToggle(e){return this.$createElement("span",{on:{click:t=>{t.stopPropagation(),this.$emit("group",e.value)}}},["group"])},getAria(e,t){const n=e=>this.$vuetify.lang.t(`$vuetify.dataTable.ariaLabel.${e}`);let i="none",r=[n("sortNone"),n("activateAscending")];return e?(t?(i="descending",r=[n("sortDescending"),n(this.options.mustSort?"activateAscending":"activateNone")]):(i="ascending",r=[n("sortAscending"),n("activateDescending")]),{ariaSort:i,ariaLabel:r.join(" ")}):{ariaSort:i,ariaLabel:r.join(" ")}},genHeader(e){const t={attrs:{role:"columnheader",scope:"col","aria-label":e.text||""},style:{width:(0,i.kb)(e.width),minWidth:(0,i.kb)(e.width)},class:[`text-${e.align||"start"}`,...(0,i.TI)(e.class),e.divider&&"v-data-table__divider"],on:{}},n=[];if("data-table-select"===e.value&&!this.singleSelect)return this.$createElement("th",t,[this.genSelectAll()]);if(n.push(this.$scopedSlots.hasOwnProperty(e.value)?this.$scopedSlots[e.value]({header:e}):this.$createElement("span",[e.text])),!this.disableSort&&(e.sortable||!e.hasOwnProperty("sortable"))){t.on.click=()=>this.$emit("sort",e.value);const i=this.options.sortBy.findIndex((t=>t===e.value)),r=i>=0,s=this.options.sortDesc[i];t.class.push("sortable");const{ariaLabel:o,ariaSort:a}=this.getAria(r,s);t.attrs["aria-label"]+=`${e.text?": ":""}${o}`,t.attrs["aria-sort"]=a,r&&(t.class.push("active"),t.class.push(s?"desc":"asc")),"end"===e.align?n.unshift(this.genSortIcon()):n.push(this.genSortIcon()),this.options.multiSort&&r&&n.push(this.$createElement("span",{class:"v-data-table-header__sort-badge"},[String(i+1)]))}return this.showGroupBy&&!1!==e.groupable&&n.push(this.genGroupByToggle(e)),this.$createElement("th",t,n)}},render(){return this.$createElement("thead",{staticClass:"v-data-table-header"},[this.$createElement("tr",this.headers.map((e=>this.genHeader(e))))])}});function $e(e){if(e.model&&e.on&&e.on.input)if(Array.isArray(e.on.input)){const t=e.on.input.indexOf(e.model.callback);t>-1&&e.on.input.splice(t,1)}else delete e.on.input}function Pe(e,t){const n=[];for(const i in e)e.hasOwnProperty(i)&&n.push(t("template",{slot:i},e[i]));return n}var Le=r.Z.extend({name:"v-data-table-header",functional:!0,props:{...Oe.options.props,mobile:Boolean},render(e,{props:t,data:n,slots:i}){$e(n);const r=Pe(i(),e);return n=(0,Z.ZP)(n,{props:t}),t.mobile?e(De,n,r):e(Ne,n,r)}});function Re(e){var t;return 1!==e.length||!["td","th"].includes(null==(t=e[0])?void 0:t.tag)}var Me=r.Z.extend({name:"row",functional:!0,props:{headers:Array,index:Number,item:Object,rtl:Boolean},render(e,{props:t,slots:n,data:r}){const s=n(),o=t.headers.map((n=>{const o=[],a=(0,i.vO)(t.item,n.value),c=n.value,u=r.scopedSlots&&r.scopedSlots.hasOwnProperty(c)&&r.scopedSlots[c],l=s.hasOwnProperty(c)&&s[c];u?o.push(...(0,i.TI)(u({item:t.item,isMobile:!1,header:n,index:t.index,value:a}))):l?o.push(...(0,i.TI)(l)):o.push(null==a?a:String(a));const h=`text-${n.align||"start"}`;return Re(o)?e("td",{class:[h,n.cellClass,{"v-data-table__divider":n.divider}]},o):o}));return e("tr",r,o)}}),Ve=r.Z.extend({name:"row-group",functional:!0,props:{value:{type:Boolean,default:!0},headerClass:{type:String,default:"v-row-group__header"},contentClass:String,summaryClass:{type:String,default:"v-row-group__summary"}},render(e,{slots:t,props:n}){const i=t(),r=[];return i["column.header"]?r.push(e("tr",{staticClass:n.headerClass},i["column.header"])):i["row.header"]&&r.push(...i["row.header"]),i["row.content"]&&n.value&&r.push(...i["row.content"]),i["column.summary"]?r.push(e("tr",{staticClass:n.summaryClass},i["column.summary"])):i["row.summary"]&&r.push(...i["row.summary"]),r}}),Fe=(0,o.Z)(h.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,i.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),Be=r.Z.extend({name:"row",functional:!0,props:{headers:Array,hideDefaultHeader:Boolean,index:Number,item:Object,rtl:Boolean},render(e,{props:t,slots:n,data:r}){const s=n(),o=t.headers.map((n=>{const o={"v-data-table__mobile-row":!0},a=[],c=(0,i.vO)(t.item,n.value),u=n.value,l=r.scopedSlots&&r.scopedSlots.hasOwnProperty(u)&&r.scopedSlots[u],h=s.hasOwnProperty(u)&&s[u];l?a.push(l({item:t.item,isMobile:!0,header:n,index:t.index,value:c})):h?a.push(h):a.push(null==c?c:String(c));const d=[e("div",{staticClass:"v-data-table__mobile-row__cell"},a)];return"dataTableSelect"===n.value||t.hideDefaultHeader||d.unshift(e("div",{staticClass:"v-data-table__mobile-row__header"},[n.text])),e("td",{class:o},d)}));return e("tr",{...r,staticClass:"v-data-table__mobile-table-row"},o)}}),je=n(1226);function Ue(e,t,n){return r=>{const s=(0,i.vO)(e,r.value);return r.filter?r.filter(s,t,e):n(s,t,e)}}function qe(e,t,n,r,s){return t="string"===typeof t?t.trim():null,e.filter((e=>{const o=n.every(Ue(e,t,i.f9)),a=!t||r.some(Ue(e,t,s));return o&&a}))}var ze=(0,o.Z)(Ae,je.Z).extend({name:"v-data-table",directives:{ripple:K.Z},props:{headers:{type:Array,default:()=>[]},showSelect:Boolean,checkboxColor:String,showExpand:Boolean,showGroupBy:Boolean,height:[Number,String],hideDefaultHeader:Boolean,caption:String,dense:Boolean,headerProps:Object,calculateWidths:Boolean,fixedHeader:Boolean,headersLength:Number,expandIcon:{type:String,default:"$expand"},customFilter:{type:Function,default:i.f9},itemClass:{type:[String,Function],default:()=>""},loaderHeight:{type:[Number,String],default:4}},data(){return{internalGroupBy:[],openCache:{},widths:[]}},computed:{computedHeaders(){if(!this.headers)return[];const e=this.headers.filter((e=>void 0===e.value||!this.internalGroupBy.find((t=>t===e.value)))),t={text:"",sortable:!1,width:"1px"};if(this.showSelect){const n=e.findIndex((e=>"data-table-select"===e.value));n<0?e.unshift({...t,value:"data-table-select"}):e.splice(n,1,{...t,...e[n]})}if(this.showExpand){const n=e.findIndex((e=>"data-table-expand"===e.value));n<0?e.unshift({...t,value:"data-table-expand"}):e.splice(n,1,{...t,...e[n]})}return e},colspanAttrs(){return this.isMobile?void 0:{colspan:this.headersLength||this.computedHeaders.length}},columnSorters(){return this.computedHeaders.reduce(((e,t)=>(t.sort&&(e[t.value]=t.sort),e)),{})},headersWithCustomFilters(){return this.headers.filter((e=>e.filter&&(!e.hasOwnProperty("filterable")||!0===e.filterable)))},headersWithoutCustomFilters(){return this.headers.filter((e=>!e.filter&&(!e.hasOwnProperty("filterable")||!0===e.filterable)))},sanitizedHeaderProps(){return(0,i.$x)(this.headerProps)},computedItemsPerPage(){const e=this.options&&this.options.itemsPerPage?this.options.itemsPerPage:this.itemsPerPage,t=this.sanitizedFooterProps.itemsPerPageOptions;if(t&&!t.find((t=>"number"===typeof t?t===e:t.value===e))){const e=t[0];return"object"===typeof e?e.value:e}return e}},created(){const e=[["sort-icon","header-props.sort-icon"],["hide-headers","hide-default-header"],["select-all","show-select"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,m.fK)(e,t,this)}))},mounted(){this.calculateWidths&&(window.addEventListener("resize",this.calcWidths),this.calcWidths())},beforeDestroy(){this.calculateWidths&&window.removeEventListener("resize",this.calcWidths)},methods:{calcWidths(){this.widths=Array.from(this.$el.querySelectorAll("th")).map((e=>e.clientWidth))},customFilterWithColumns(e,t){return qe(e,t,this.headersWithCustomFilters,this.headersWithoutCustomFilters,this.customFilter)},customSortWithHeaders(e,t,n,i){return this.customSort(e,t,n,i,this.columnSorters)},createItemProps(e,t){const n=Ae.options.methods.createItemProps.call(this,e,t);return Object.assign(n,{headers:this.computedHeaders})},genCaption(e){return this.caption?[this.$createElement("caption",[this.caption])]:(0,i.z9)(this,"caption",e,!0)},genColgroup(e){return this.$createElement("colgroup",this.computedHeaders.map((e=>this.$createElement("col",{class:{divider:e.divider}}))))},genLoading(){const e=this.$createElement("th",{staticClass:"column",attrs:this.colspanAttrs},[this.genProgress()]),t=this.$createElement("tr",{staticClass:"v-data-table__progress"},[e]);return this.$createElement("thead",[t])},genHeaders(e){const t={props:{...this.sanitizedHeaderProps,headers:this.computedHeaders,options:e.options,mobile:this.isMobile,showGroupBy:this.showGroupBy,checkboxColor:this.checkboxColor,someItems:this.someItems,everyItem:this.everyItem,singleSelect:this.singleSelect,disableSort:this.disableSort},on:{sort:e.sort,group:e.group,"toggle-select-all":this.toggleSelectAll}},n=[(0,i.z9)(this,"header",{...t,isMobile:this.isMobile})];if(!this.hideDefaultHeader){const e=(0,i.FT)("header.",this.$scopedSlots);n.push(this.$createElement(Le,{...t,scopedSlots:e}))}return this.loading&&n.push(this.genLoading()),n},genEmptyWrapper(e){return this.$createElement("tr",{staticClass:"v-data-table__empty-wrapper"},[this.$createElement("td",{attrs:this.colspanAttrs},e)])},genItems(e,t){const n=this.genEmpty(t.originalItemsLength,t.pagination.itemsLength);return n?[n]:t.groupedItems?this.genGroupedRows(t.groupedItems,t):this.genRows(e,t)},genGroupedRows(e,t){return e.map((e=>(this.openCache.hasOwnProperty(e.name)||this.$set(this.openCache,e.name,!0),this.$scopedSlots.group?this.$scopedSlots.group({group:e.name,options:t.options,isMobile:this.isMobile,items:e.items,headers:this.computedHeaders}):this.genDefaultGroupedRow(e.name,e.items,t))))},genDefaultGroupedRow(e,t,n){const i=!!this.openCache[e],r=[this.$createElement("template",{slot:"row.content"},this.genRows(t,n))],s=()=>this.$set(this.openCache,e,!this.openCache[e]),o=()=>n.updateOptions({groupBy:[],groupDesc:[]});if(this.$scopedSlots["group.header"])r.unshift(this.$createElement("template",{slot:"column.header"},[this.$scopedSlots["group.header"]({group:e,groupBy:n.options.groupBy,isMobile:this.isMobile,items:t,headers:this.computedHeaders,isOpen:i,toggle:s,remove:o})]));else{const t=this.$createElement(ke,{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:s}},[this.$createElement(c.Z,[i?"$minus":"$plus"])]),a=this.$createElement(ke,{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:o}},[this.$createElement(c.Z,["$close"])]),u=this.$createElement("td",{staticClass:"text-start",attrs:this.colspanAttrs},[t,`${n.options.groupBy[0]}: ${e}`,a]);r.unshift(this.$createElement("template",{slot:"column.header"},[u]))}return this.$scopedSlots["group.summary"]&&r.push(this.$createElement("template",{slot:"column.summary"},[this.$scopedSlots["group.summary"]({group:e,groupBy:n.options.groupBy,isMobile:this.isMobile,items:t,headers:this.computedHeaders,isOpen:i,toggle:s})])),this.$createElement(Ve,{key:e,props:{value:i}},r)},genRows(e,t){return this.$scopedSlots.item?this.genScopedRows(e,t):this.genDefaultRows(e,t)},genScopedRows(e,t){const n=[];for(let i=0;i<e.length;i++){const t=e[i];n.push(this.$scopedSlots.item({...this.createItemProps(t,i),isMobile:this.isMobile})),this.isExpanded(t)&&n.push(this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,index:i,item:t}))}return n},genDefaultRows(e,t){return this.$scopedSlots["expanded-item"]?e.map(((e,t)=>this.genDefaultExpandedRow(e,t))):e.map(((e,t)=>this.genDefaultSimpleRow(e,t)))},genDefaultExpandedRow(e,t){const n=this.isExpanded(e),i={"v-data-table__expanded v-data-table__expanded__row":n},r=this.genDefaultSimpleRow(e,t,i),s=this.$createElement("tr",{staticClass:"v-data-table__expanded v-data-table__expanded__content"},[this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,item:e})]);return this.$createElement(Ve,{props:{value:n}},[this.$createElement("template",{slot:"row.header"},[r]),this.$createElement("template",{slot:"row.content"},[s])])},genDefaultSimpleRow(e,t,n={}){const r=(0,i.FT)("item.",this.$scopedSlots),s=this.createItemProps(e,t);if(this.showSelect){const t=r["data-table-select"];r["data-table-select"]=t?()=>t({...s,isMobile:this.isMobile}):()=>{var t;return this.$createElement(Y,{staticClass:"v-data-table__checkbox",props:{value:s.isSelected,disabled:!this.isSelectable(e),color:null!=(t=this.checkboxColor)?t:""},on:{input:e=>s.select(e)}})}}if(this.showExpand){const e=r["data-table-expand"];r["data-table-expand"]=e?()=>e(s):()=>this.$createElement(c.Z,{staticClass:"v-data-table__expand-icon",class:{"v-data-table__expand-icon--active":s.isExpanded},on:{click:e=>{e.stopPropagation(),s.expand(!s.isExpanded)}}},[this.expandIcon])}return this.$createElement(this.isMobile?Be:Me,{key:(0,i.vO)(e,this.itemKey),class:(0,Z.ze)({...n,"v-data-table__selected":s.isSelected},(0,i.qF)(e,this.itemClass)),props:{headers:this.computedHeaders,hideDefaultHeader:this.hideDefaultHeader,index:t,item:e,rtl:this.$vuetify.rtl},scopedSlots:r,on:{click:()=>this.$emit("click:row",e,s),contextmenu:e=>this.$emit("contextmenu:row",e,s),dblclick:e=>this.$emit("dblclick:row",e,s)}})},genBody(e){const t={...e,expand:this.expand,headers:this.computedHeaders,isExpanded:this.isExpanded,isMobile:this.isMobile,isSelected:this.isSelected,select:this.select};return this.$scopedSlots.body?this.$scopedSlots.body(t):this.$createElement("tbody",[(0,i.z9)(this,"body.prepend",t,!0),this.genItems(e.items,e),(0,i.z9)(this,"body.append",t,!0)])},genFoot(e){var t,n;return null==(t=(n=this.$scopedSlots).foot)?void 0:t.call(n,e)},genFooters(e){const t={props:{options:e.options,pagination:e.pagination,itemsPerPageText:"$vuetify.dataTable.itemsPerPageText",...this.sanitizedFooterProps},on:{"update:options":t=>e.updateOptions(t)},widths:this.widths,headers:this.computedHeaders},n=[(0,i.z9)(this,"footer",t,!0)];return this.hideDefaultFooter||n.push(this.$createElement(xe,{...t,scopedSlots:(0,i.FT)("footer.",this.$scopedSlots)})),n},genDefaultScopedSlot(e){const t={height:this.height,fixedHeader:this.fixedHeader,dense:this.dense};return this.$createElement(Fe,{props:t,class:{"v-data-table--mobile":this.isMobile}},[this.proxySlot("top",(0,i.z9)(this,"top",{...e,isMobile:this.isMobile},!0)),this.genCaption(e),this.genColgroup(e),this.genHeaders(e),this.genBody(e),this.genFoot(e),this.proxySlot("bottom",this.genFooters(e))])},proxySlot(e,t){return this.$createElement("template",{slot:e},t)}},render(){return this.$createElement(s,{props:{...this.$props,customFilter:this.customFilterWithColumns,customSort:this.customSortWithHeaders,itemsPerPage:this.computedItemsPerPage},on:{"update:options":(e,t)=>{this.internalGroupBy=e.groupBy||[],!(0,i.vZ)(e,t)&&this.$emit("update:options",e)},"update:page":e=>this.$emit("update:page",e),"update:items-per-page":e=>this.$emit("update:items-per-page",e),"update:sort-by":e=>this.$emit("update:sort-by",e),"update:sort-desc":e=>this.$emit("update:sort-desc",e),"update:group-by":e=>this.$emit("update:group-by",e),"update:group-desc":e=>this.$emit("update:group-desc",e),pagination:(e,t)=>!(0,i.vZ)(e,t)&&this.$emit("pagination",e),"current-items":e=>{this.internalCurrentItems=e,this.$emit("current-items",e)},"page-count":e=>this.$emit("page-count",e)},scopedSlots:{default:this.genDefaultScopedSlot}})}})},6232:function(e,t,n){"use strict";var i=n(3325),r=n(6210),s=n(6257);t["Z"]=(0,i.Z)(r.Z,(0,s.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),n={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=e.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(e._uid)||(n.valid=t(e)))})):n.valid=t(e),n},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const n=this.watchers.find((e=>e._uid===t._uid));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},2102:function(e,t,n){"use strict";n(7273);var i=n(144),r=n(6290),s=n(4589);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),c=(()=>o.reduce(((e,t)=>(e["offset"+(0,s.jC)(t)]={type:[String,Number],default:null},e)),{}))(),u=(()=>o.reduce(((e,t)=>(e["order"+(0,s.jC)(t)]={type:[String,Number],default:null},e)),{}))(),l={col:Object.keys(a),offset:Object.keys(c),order:Object.keys(u)};function h(e,t,n){let i=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");i+=`-${n}`}return"col"!==e||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;t["Z"]=i.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:i,parent:s}){let o="";for(const r in t)o+=String(t[r]);let a=d.get(o);if(!a){let e;for(e in a=[],l)l[e].forEach((n=>{const i=t[n],r=h(e,n,i);r&&a.push(r)}));const n=a.some((e=>e.startsWith("col-")));a.push({col:!n||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),d.set(o,a)}return e(t.tag,(0,r.ZP)(n,{class:a}),i)}})},9846:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(8582),n(7273);var i=n(144);function r(e){return i.Z.extend({name:`v-${e}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:n,data:i,children:r}){i.staticClass=`${e} ${i.staticClass||""}`.trim();const{attrs:s}=i;if(s){i.attrs={};const e=Object.keys(s).filter((e=>{if("slot"===e)return!1;const t=s[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t}));e.length&&(i.staticClass+=` ${e.join(" ")}`)}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,i,r)}})}var s=n(6290),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:n,children:i}){let r;const{attrs:o}=n;return o&&(n.attrs={},r=Object.keys(o).filter((e=>{if("slot"===e)return!1;const t=o[e];return e.startsWith("data-")?(n.attrs[e]=t,!1):t||"string"===typeof t}))),t.id&&(n.domProps=n.domProps||{},n.domProps.id=t.id),e(t.tag,(0,s.ZP)(n,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(r||[])}),i)}})},2877:function(e,t,n){"use strict";n(7273);var i=n(144),r=n(6290),s=n(4589);const o=["sm","md","lg","xl"],a=["start","end","center"];function c(e,t){return o.reduce(((n,i)=>(n[e+(0,s.jC)(i)]=t(),n)),{})}const u=e=>[...a,"baseline","stretch"].includes(e),l=c("align",(()=>({type:String,default:null,validator:u}))),h=e=>[...a,"space-between","space-around"].includes(e),d=c("justify",(()=>({type:String,default:null,validator:h}))),p=e=>[...a,"space-between","space-around","stretch"].includes(e),f=c("alignContent",(()=>({type:String,default:null,validator:p}))),m={align:Object.keys(l),justify:Object.keys(d),alignContent:Object.keys(f)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(e,t,n){let i=g[e];if(null!=n){if(t){const n=t.replace(e,"");i+=`-${n}`}return i+=`-${n}`,i.toLowerCase()}}const y=new Map;t["Z"]=i.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...l,justify:{type:String,default:null,validator:h},...d,alignContent:{type:String,default:null,validator:p},...f},render(e,{props:t,data:n,children:i}){let s="";for(const r in t)s+=String(t[r]);let o=y.get(s);if(!o){let e;for(e in o=[],m)m[e].forEach((n=>{const i=t[n],r=v(e,n,i);r&&o.push(r)}));o.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),y.set(s,o)}return e(t.tag,(0,r.ZP)(n,{staticClass:"row",class:o}),i)}})},9762:function(e,t,n){"use strict";n(8582);var i=n(4589);t["Z"]=(0,i.Ji)("spacer","div","v-spacer")},6428:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i,r=n(6210),s=n(6952),o=n(9131),a=n(8085),c=n(4589),u=n(144),l=n(3325);function h(e){return["fas","far","fal","fab","fad","fak"].some((t=>e.includes(t)))}function d(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(i||(i={}));const p=(0,l.Z)(r.Z,s.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),(0,c.RB)(this,e)},getSize(){const e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=(0,c.XP)(e).find((t=>e[t]));return t&&i[t]||(0,c.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const e=this.getSize(),t={...this.getDefaultData(),style:e?{fontSize:e,height:e,width:e}:void 0};return this.applyColors(t),t},applyColors(e){e.class={...e.class,...this.themeClasses},this.setTextColor(this.color,e)},renderFontIcon(e,t){const n=[],i=this.getDefaultData();let r="material-icons";const s=e.indexOf("-"),o=s<=-1;o?n.push(e):(r=e.slice(0,s),h(r)&&(r="")),i.class[r]=!0,i.class[e]=!o;const a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),t(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon(e,t){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",n,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent(e,t){const n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);const r=e.component;return n.props=e.props,n.nativeOn=n.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(r,n)])}},render(e){const t=this.getIcon();return"string"===typeof t?d(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});var f=u.Z.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(e,{data:t,children:n}){let i="";return t.domProps&&(i=t.domProps.textContent||t.domProps.innerHTML||i,delete t.domProps.textContent,delete t.domProps.innerHTML),e(p,t,i?[i]:n)}})},172:function(e,t,n){"use strict";var i=n(6428);t["Z"]=i.Z},8230:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(172),r=n(5097),s=n(6952),o=n(8085),a=n(3325),c=n(4589),u=(0,a.Z)(s.Z,o.Z).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(e,t){return this.$createElement("div",{staticClass:"v-messages__message",key:t},(0,c.z9)(this,"default",{message:e,key:t})||[e])}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),l=u,h=n(6210),d=n(6884),p=n(6290);const f=(0,a.Z)(h.Z,d.Z);var m=f.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit(this.$_modelEvent,e)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((e=>{if("string"===typeof e)return e;const t=e(this.internalValue);return"string"===typeof t?t:""})).filter((e=>""!==e)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(e){this.lazyValue=e}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(e,t,n={}){const r=this[`${e}Icon`],s=`click:${(0,c.GL)(e)}`,o=!(!this.listeners$[s]&&!t),a=(0,p.ZP)({attrs:{"aria-label":o?(0,c.GL)(e).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:o?{click:e=>{e.preventDefault(),e.stopPropagation(),this.$emit(s,e),t&&t(e)},mouseup:e=>{e.preventDefault(),e.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:e?`v-input__icon--${(0,c.GL)(e)}`:void 0},[this.$createElement(i.Z,a,r)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,c.kb)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(r.Z,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(l,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:e=>(0,c.z9)(this,"message",e)}}):null},genSlot(e,t,n){if(!n.length)return null;const i=`${e}-${t}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},n)},genPrependSlot(){const e=[];return this.$slots.prepend?e.push(this.$slots.prepend):this.prependIcon&&e.push(this.genIcon("prepend")),this.genSlot("prepend","outer",e)},genAppendSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","outer",e)},onClick(e){this.$emit("click",e)},onMouseDown(e){this.hasMouseDown=!0,this.$emit("mousedown",e)},onMouseUp(e){this.hasMouseDown=!1,this.$emit("mouseup",e)}},render(e){return e("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),g=m},5097:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(6952),r=n(8085),s=n(3325),o=n(4589),a=(0,s.Z)(r.Z).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(e,t){const{children:n,listeners:s,props:a}=t,c={staticClass:"v-label",class:{"v-label--active":a.value,"v-label--is-disabled":a.disabled,...(0,r.X)(t)},attrs:{for:a.for,"aria-hidden":!a.for},on:s,style:{left:(0,o.kb)(a.left),right:(0,o.kb)(a.right),position:a.absolute?"absolute":"relative"},ref:"label"};return e("label",i.Z.options.methods.setTextColor(a.focused&&a.color,c),n)}}),c=a},1009:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(144),r=i.Z.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}}),s=r.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:e,top:t,right:n,footer:i,insetFooter:r,bottom:s,left:o}=this.$vuetify.application;return{paddingTop:`${t+e}px`,paddingRight:`${n}px`,paddingBottom:`${i+r+s}px`,paddingLeft:`${o}px`}}},render(e){const t={staticClass:"v-main",style:this.styles,ref:"main"};return e(this.tag,t,[e("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},3385:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(6210),r=n(6952),s=n(3377),o=n(2529),a=n(3712),c=n(8085),u=n(3325),l=(0,u.Z)(i.Z,r.Z,s.Z,o.Z,a.Z,c.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(e){const t={class:this.classes,style:this.styles,on:this.listeners$};return e(this.tag,this.setBackgroundColor(this.color,t),this.$slots.default)}})},3202:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var i=n(3385),r=n(6952),s=n(8085),o=n(2936),a=n(3536),c=n(3325),u=n(4589),l=n(1824),h=(0,c.Z)(i.Z,r.Z,o.Z,(0,a.d)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:e=>"string"===typeof e||!1===e},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:s.Z.options.computed.isDark.call(this)},styles(){if(this.absolute||!this.app)return{};const{bar:e,bottom:t,footer:n,insetFooter:i,left:r,right:s,top:o}=this.$vuetify.application;return{paddingBottom:(0,u.kb)(t+n+i),paddingLeft:(0,u.kb)(r),paddingRight:(0,u.kb)(s),paddingTop:(0,u.kb)(e+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&(0,l.Jk)("auto-height",this),0==this.timeout&&(0,l.Rn)('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[(0,u.z9)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[(0,u.z9)(this)])},genWrapper(){const e=this.hasBackground?this.setBackgroundColor:this.setTextColor,t=e(this.color,{staticClass:"v-snack__wrapper",class:i.Z.options.computed.classes.call(this),style:i.Z.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:()=>window.clearTimeout(this.activeTimeout),pointerleave:this.setTimeout}});return this.$createElement("div",t,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((()=>{this.isActive=!1}),e))}},render(e){return e("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},5978:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});n(9845);var i=n(8230),r=n(8085),s=n(3325),o=(0,s.Z)(r.Z).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(e,t){const{props:n}=t,i=parseInt(n.max,10),s=parseInt(n.value,10),o=i?`${s} / ${i}`:String(n.value),a=i&&s>i;return e("div",{staticClass:"v-counter",class:{"error--text":a,...(0,r.X)(t)}},o)}}),a=o,c=n(5097),u=n(8083),l=n(1824),h=n(144);function d(e){return h.Z.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){u.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){u.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(t,n,i){if(this.isIntersecting=i,i)for(let r=0,s=e.onVisible.length;r<s;r++){const t=this[e.onVisible[r]];"function"!==typeof t?(0,l.Kd)(e.onVisible[r]+" method is not available on the instance but referenced in intersectable mixin options"):t()}}}})}var p=n(1226),f=n(6884),m=n(549),g=n(6286),v=n(1706),y=n(4589);const b=(0,s.Z)(i.Z,d({onVisible:["onResize","tryAutofocus"]}),p.Z),w=["color","file","time","date","datetime-local","week","month"];var _=b.extend().extend({name:"v-text-field",directives:{resize:m.Z,ripple:g.Z},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const e=f.Z.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":e},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return i.Z.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",this.lazyValue)}},isDirty(){var e;return(null==(e=this.lazyValue)?void 0:e.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||w.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let e=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(e-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:e,right:"auto"}:{left:"auto",right:e}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(e){this.lazyValue=e}},created(){this.$attrs.hasOwnProperty("box")&&(0,l.fK)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,l.fK)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,l.Kd)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch((()=>this.labelValue),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((()=>{this.isBooted=!0,requestAnimationFrame((()=>{this.isIntersecting||this.onResize()}))}))},methods:{focus(){this.onFocus()},blur(e){window.requestAnimationFrame((()=>{this.$refs.input&&this.$refs.input.blur()}))},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick((()=>this.internalValue=null))},genAppendSlot(){const e=[];return this.$slots["append-outer"]?e.push(this.$slots["append-outer"]):this.appendOuterIcon&&e.push(this.genIcon("appendOuter")),this.genSlot("append","outer",e)},genPrependInnerSlot(){const e=[];return this.$slots["prepend-inner"]?e.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&e.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",e)},genIconSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","inner",e)},genInputSlot(){const e=i.Z.options.methods.genInputSlot.call(this),t=this.genPrependInnerSlot();return t&&(e.children=e.children||[],e.children.unshift(t)),e},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var e,t,n;if(!this.hasCounter)return null;const i=!0===this.counter?this.attrs$.maxlength:this.counter,r={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!=(e=null==(t=(n=this.$scopedSlots).counter)?void 0:t.call(n,{props:r}))?e:this.$createElement(a,{props:r})},genControl(){return i.Z.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const e={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(c.Z,e,this.$slots.label||this.label)},genLegend(){const e=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,t=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,y.kb)(e)}},[t])},genInput(){const e=Object.assign({},this.listeners$);delete e.change;const{title:t,...n}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...n,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(e,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const e=i.Z.options.methods.genMessages.call(this),t=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[e,t])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(e){return this.$createElement("div",{class:`v-text-field__${e}`,ref:e},this[e])},onBlur(e){this.isFocused=!1,e&&this.$nextTick((()=>this.$emit("blur",e)))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(e){if(!this.$refs.input)return;const t=(0,v.e)(this.$el);return t?t.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,e&&this.$emit("focus",e))):void 0},onInput(e){const t=e.target;this.internalValue=t.value,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){e.keyCode===y.Do.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",e)},onMouseDown(e){e.target!==this.$refs.input&&(e.preventDefault(),e.stopPropagation()),i.Z.options.methods.onMouseDown.call(this,e)},onMouseUp(e){this.hasMouseDown&&this.focus(),i.Z.options.methods.onMouseUp.call(this,e)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const e=(0,v.e)(this.$el);return!(!e||e.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(e){this.hasColor=e,e?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},5827:function(e,t,n){"use strict";n.d(t,{Fx:function(){return h},Zq:function(){return d},Z5:function(){return u},Qn:function(){return l}});var i=n(6290);function r(e=[],...t){return Array().concat(e,...t)}function s(e,t="top center 0",n){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:t}},render(t,n){const s="transition"+(n.props.group?"-group":""),o={props:{name:e,mode:n.props.mode},on:{beforeEnter(e){e.style.transformOrigin=n.props.origin,e.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,(e=>{const{offsetTop:t,offsetLeft:n,offsetWidth:i,offsetHeight:r}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=n+"px",e.style.width=i+"px",e.style.height=r+"px"})),o.on.afterLeave=r(o.on.afterLeave,(e=>{if(e&&e._transitionInitialStyles){const{position:t,top:n,left:i,width:r,height:s}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=n||"",e.style.left=i||"",e.style.width=r||"",e.style.height=s||""}}))),n.props.hideOnLeave&&(o.on.leave=r(o.on.leave,(e=>{e.style.setProperty("display","none","important")}))),t(s,(0,i.ZP)(n.data,o),n.children)}}}function o(e,t,n="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:n}},render(n,r){return n("transition",(0,i.ZP)(r.data,{props:{name:e},on:t}),r.children)}}}var a=n(4589);function c(e="",t=!1){const n=t?"width":"height",i=`offset${(0,a.jC)(n)}`;return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},enter(t){const r=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const s=`${t[i]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=r.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[n]=s}))},afterEnter:s,enterCancelled:s,leave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[i]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[n]="0"))},afterLeave:r,leaveCancelled:r};function r(t){e&&t._parent&&t._parent.classList.remove(e),s(t)}function s(e){const t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}}s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition");const u=s("fade-transition"),l=(s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),h=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",c())),d=o("expand-x-transition",c("",!0))},8083:function(e,t,n){"use strict";function i(e,t,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=t.modifiers||{},s=t.value,{handler:o,options:a}="object"===typeof s?s:{handler:s,options:{}},c=new IntersectionObserver(((s=[],a)=>{var c;const u=null==(c=e._observe)?void 0:c[n.context._uid];if(!u)return;const l=s.some((e=>e.isIntersecting));!o||i.quiet&&!u.init||i.once&&!l&&!u.init||o(s,a,l),l&&i.once?r(e,t,n):u.init=!0}),a);e._observe=Object(e._observe),e._observe[n.context._uid]={init:!1,observer:c},c.observe(e)}function r(e,t,n){var i;const r=null==(i=e._observe)?void 0:i[n.context._uid];r&&(r.observer.unobserve(e),delete e._observe[n.context._uid])}const s={inserted:i,unbind:r};t["Z"]=s},549:function(e,t,n){"use strict";function i(e,t,n){const i=t.value,r=t.options||{passive:!0};window.addEventListener("resize",i,r),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:i,options:r},t.modifiers&&t.modifiers.quiet||i()}function r(e,t,n){var i;if(null==(i=e._onResize)||!i[n.context._uid])return;const{callback:r,options:s}=e._onResize[n.context._uid];window.removeEventListener("resize",r,s),delete e._onResize[n.context._uid]}const s={inserted:i,unbind:r};t["Z"]=s},6286:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var i=n(4589);const r=80;function s(e,t){e.style.transform=t,e.style.webkitTransform=t}function o(e){return"TouchEvent"===e.constructor.name}function a(e){return"KeyboardEvent"===e.constructor.name}const c=(e,t,n={})=>{let i=0,r=0;if(!a(e)){const n=t.getBoundingClientRect(),s=o(e)?e.touches[e.touches.length-1]:e;i=s.clientX-n.left,r=s.clientY-n.top}let s=0,c=.3;t._ripple&&t._ripple.circle?(c=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=(t.clientWidth-2*s)/2+"px",l=(t.clientHeight-2*s)/2+"px",h=n.center?u:i-s+"px",d=n.center?l:r-s+"px";return{radius:s,scale:c,x:h,y:d,centerX:u,centerY:l}},u={show(e,t,n={}){if(!t._ripple||!t._ripple.enabled)return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:o,scale:a,x:u,y:l,centerX:h,centerY:d}=c(e,t,n),p=2*o+"px";r.className="v-ripple__animation",r.style.width=p,r.style.height=p,t.appendChild(i);const f=window.getComputedStyle(t);f&&"static"===f.position&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),s(r,`translate(${u}, ${l}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),setTimeout((()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),s(r,`translate(${h}, ${d}) scale3d(1,1,1)`)}),0)},hide(e){if(!e||!e._ripple||!e._ripple.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(0===t.length)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{const t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)}),300)}),r)}};function l(e){return"undefined"===typeof e||!!e}function h(e){const t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,o(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||a(e),n._ripple.class&&(t.class=n._ripple.class),o(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{u.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),r)}else u.show(e,n,t)}}function d(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout((()=>{d(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),u.hide(t)}}function p(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let f=!1;function m(e){f||e.keyCode!==i.Do.enter&&e.keyCode!==i.Do.space||(f=!0,h(e))}function g(e){f=!1,d(e)}function v(e){!0===f&&(f=!1,d(e))}function y(e,t,n){const i=l(t.value);i||u.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=i;const r=t.value||{};r.center&&(e._ripple.centered=!0),r.class&&(e._ripple.class=t.value.class),r.circle&&(e._ripple.circle=r.circle),i&&!n?(e.addEventListener("touchstart",h,{passive:!0}),e.addEventListener("touchend",d,{passive:!0}),e.addEventListener("touchmove",p,{passive:!0}),e.addEventListener("touchcancel",d),e.addEventListener("mousedown",h),e.addEventListener("mouseup",d),e.addEventListener("mouseleave",d),e.addEventListener("keydown",m),e.addEventListener("keyup",g),e.addEventListener("blur",v),e.addEventListener("dragstart",d,{passive:!0})):!i&&n&&b(e)}function b(e){e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",h),e.removeEventListener("touchend",d),e.removeEventListener("touchmove",p),e.removeEventListener("touchcancel",d),e.removeEventListener("mouseup",d),e.removeEventListener("mouseleave",d),e.removeEventListener("keydown",m),e.removeEventListener("keyup",g),e.removeEventListener("dragstart",d),e.removeEventListener("blur",v)}function w(e,t,n){y(e,t,!1)}function _(e){delete e._ripple,b(e)}function I(e,t){if(t.value===t.oldValue)return;const n=l(t.oldValue);y(e,t,n)}const S={bind:w,unbind:_,update:I};var E=S},9132:function(e,t,n){"use strict";n.d(t,{Z:function(){return ee}});var i=n(144),r=n(1824);function s(e,t={}){if(s.installed)return;s.installed=!0,i.Z!==e&&(0,r.N6)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=t.components||{},o=t.directives||{};for(const i in o){const t=o[i];e.directive(i,t)}(function t(n){if(n){for(const i in n){const r=n[i];r&&!t(r.$_vuetify_subcomponents)&&e.component(i,r)}return!0}return!1})(n),e.$_vuetify_installed||(e.$_vuetify_installed=!0,e.mixin({beforeCreate(){const t=this.$options;t.vuetify?(t.vuetify.init(this,this.$ssrContext),this.$vuetify=e.observable(t.vuetify.framework)):this.$vuetify=t.parent&&t.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var o={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const a={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:o},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var c=n(4589),u=n(4097);class l extends u.t{constructor(e,t){super();const n=(0,c.Ee)({},a),{userPreset:i}=t,{preset:s={},...o}=i;null!=s.preset&&(0,r.Kd)("Global presets do not support the **preset** option, it can be safely omitted"),t.preset=(0,c.Ee)((0,c.Ee)(n,s),o)}}l.property="presets";class h extends u.t{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(e,t,n){this.application[t][e]=n,this.update(t)}unregister(e,t){null!=this.application[t][e]&&(delete this.application[t][e],this.update(t))}update(e){this[e]=Object.values(this.application[e]).reduce(((e,t)=>e+t),0)}}h.property="application";class d extends u.t{constructor(e){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:t,scrollBarWidth:n,thresholds:i}=e[d.property];this.mobileBreakpoint=t,this.scrollBarWidth=n,this.thresholds=i}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(e=!1){const t=e?0:this.getClientHeight(),n=e?0:this.getClientWidth(),i=n<this.thresholds.xs,r=n<this.thresholds.sm&&!i,s=n<this.thresholds.md-this.scrollBarWidth&&!(r||i),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||r||i),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=t,this.width=n,this.xs=i,this.sm=r,this.md=s,this.lg=o,this.xl=a,this.xsOnly=i,this.smOnly=r,this.smAndDown=(i||r)&&!(s||o||a),this.smAndUp=!i&&(r||s||o||a),this.mdOnly=s,this.mdAndDown=(i||r||s)&&!(o||a),this.mdAndUp=!(i||r)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(i||r||s||o)&&!a,this.lgAndUp=!(i||r||s)&&(o||a),this.xlOnly=a,!0){case i:this.name="xs";break;case r:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const c={xs:0,sm:1,md:2,lg:3,xl:4},u=c[this.name],l=c[this.mobileBreakpoint];this.mobile=u<=l}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}d.property="breakpoint";const p={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",success:"M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",warning:"M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",error:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var f=p;const m={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var g=m;const v={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var y=v;const b={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var w=b;const _={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var I=_;function S(e,t){const n={};for(const i in t)n[i]={component:e,props:{icon:t[i].split(" fa-")}};return n}var E=S("font-awesome-icon",w),T=Object.freeze({mdiSvg:f,md:g,mdi:y,fa:w,fa4:I,faSvg:E});class k extends u.t{constructor(e){super();const{iconfont:t,values:n,component:i}=e[k.property];this.component=i,this.iconfont=t,this.values=(0,c.Ee)(T[t],n)}}k.property="icons";const x="$vuetify.",C=Symbol("Lang fallback");function A(e,t,n=!1,i){const s=t.replace(x,"");let o=(0,c.vO)(e,s,C);return o===C&&(n?((0,r.N6)(`Translation key "${s}" not found in fallback`),o=t):((0,r.Kd)(`Translation key "${s}" not found, falling back to default`),o=A(i,t,!0,i))),o}class O extends u.t{constructor(e){super(),this.defaultLocale="en";const{current:t,locales:n,t:i}=e[O.property];this.current=t,this.locales=n,this.translator=i||this.defaultTranslator}currentLocale(e){const t=this.locales[this.current],n=this.locales[this.defaultLocale];return A(t,e,!1,n)}t(e,...t){return e.startsWith(x)?this.translator(e,...t):this.replace(e,t)}defaultTranslator(e,...t){return this.replace(this.currentLocale(e),t)}replace(e,t){return e.replace(/\{(\d+)\}/g,((e,n)=>String(t[+n])))}}O.property="lang";var D=n(7093);const N=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],$=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,P=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],L=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function R(e){const t=Array(3),n=$,i=N;for(let r=0;r<3;++r)t[r]=Math.round(255*(0,c.uZ)(n(i[r][0]*e[0]+i[r][1]*e[1]+i[r][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function M(e){const t=[0,0,0],n=L,i=P,r=n((e>>16&255)/255),s=n((e>>8&255)/255),o=n((e>>0&255)/255);for(let a=0;a<3;++a)t[a]=i[a][0]*r+i[a][1]*s+i[a][2]*o;return t}const V=.20689655172413793,F=e=>e>V**3?Math.cbrt(e):e/(3*V**2)+4/29,B=e=>e>V?e**3:3*V**2*(e-4/29);function j(e){const t=F,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function U(e){const t=B,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}function q(e,t=!1,n=!0){const{anchor:i,...r}=e,s=Object.keys(r),o={};for(let a=0;a<s.length;++a){const i=s[a],r=e[i];null!=r&&(n?t?("base"===i||i.startsWith("lighten")||i.startsWith("darken"))&&(o[i]=(0,D.hq)(r)):o[i]="object"===typeof r?q(r,!0,n):Z(i,(0,D.jx)(r)):o[i]={base:(0,D.I4)((0,D.jx)(r))})}return t||(o.anchor=i||o.base||o.primary.base),o}const z=(e,t)=>`\n.v-application .${e} {\n  background-color: ${t} !important;\n  border-color: ${t} !important;\n}\n.v-application .${e}--text {\n  color: ${t} !important;\n  caret-color: ${t} !important;\n}`,H=(e,t,n)=>{const[i,r]=t.split(/(\d)/,2);return`\n.v-application .${e}.${i}-${r} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${e}--text.text--${i}-${r} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},W=(e,t="base")=>`--v-${e}-${t}`,K=(e,t="base")=>`var(${W(e,t)})`;function G(e,t=!1){const{anchor:n,...i}=e,r=Object.keys(i);if(!r.length)return"";let s="",o="";const a=t?K("anchor"):n;o+=`.v-application a { color: ${a}; }`,t&&(s+=`  ${W("anchor")}: ${n};\n`);for(let u=0;u<r.length;++u){const n=r[u],i=e[n];o+=z(n,t?K(n):i.base),t&&(s+=`  ${W(n)}: ${i.base};\n`);const a=(0,c.XP)(i);for(let e=0;e<a.length;++e){const r=a[e],c=i[r];"base"!==r&&(o+=H(n,r,t?K(n,r):c),t&&(s+=`  ${W(n,r)}: ${c};\n`))}}return t&&(s=`:root {\n${s}}\n\n`),s+o}function Z(e,t){const n={base:(0,D.I4)(t)};for(let i=5;i>0;--i)n[`lighten${i}`]=(0,D.I4)(Y(t,i));for(let i=1;i<=4;++i)n[`darken${i}`]=(0,D.I4)(J(t,i));return n}function Y(e,t){const n=j(M(e));return n[0]=n[0]+10*t,R(U(n))}function J(e,t){const n=j(M(e));return n[0]=n[0]-10*t,R(U(n))}class Q extends u.t{constructor(e){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:t,disable:n,options:i,themes:r}=e[Q.property];this.dark=Boolean(t),this.defaults=this.themes=r,this.options=i,n?this.disabled=!0:this.themes={dark:this.fillVariant(r.dark,!0),light:this.fillVariant(r.light,!1)}}set css(e){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=e)}set dark(e){const t=this.isDark;this.isDark=e,null!=t&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(e,t){this.disabled||(e.$meta?this.initVueMeta(e):t&&this.initSSR(t),this.initTheme(e))}setTheme(e,t){this.themes[e]=Object.assign(this.themes[e],t),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(e={},t){const n=this.themes[t?"dark":"light"];return Object.assign({},n,e)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(e){if(this.vueMeta=e.$meta(),this.isVueMeta23)return void e.$nextTick((()=>{this.applyVueMeta23()}));const t="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=e.$options[t]||{};e.$options[t]=()=>{n.style=n.style||[];const e=n.style.find((e=>"vuetify-theme-stylesheet"===e.id));return e?e.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:e}=this.vueMeta.addApp("vuetify");e({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(e){const t=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";e.head=e.head||"",e.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${t}>${this.generatedStyles}</style>`}initTheme(e){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),e.$once("hook:created",(()=>{const t=i.Z.observable({themes:this.themes});this.unwatch=e.$watch((()=>t.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const e=this.dark?"dark":"light";return this.themes[e]}get generatedStyles(){const e=this.parsedTheme,t=this.options||{};let n;return null!=t.themeCache&&(n=t.themeCache.get(e),null!=n)||(n=G(e,t.customProperties),null!=t.minifyTheme&&(n=t.minifyTheme(n)),null!=t.themeCache&&t.themeCache.set(e,n)),n}get parsedTheme(){return q(this.currentTheme||{},void 0,(0,c.qw)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}Q.property="theme";var X=n(1439);class ee{constructor(e={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=e,this.use(l),this.use(h),this.use(d),this.use(X.A),this.use(k),this.use(O),this.use(Q)}init(e,t){this.installed.forEach((n=>{const i=this.framework[n];i.framework=this.framework,i.init(e,t)})),this.framework.rtl=Boolean(this.preset.rtl)}use(e){const t=e.property;this.installed.includes(t)||(this.framework[t]=new e(this.preset,this),this.installed.push(t))}}ee.install=s,ee.installed=!1,ee.version="2.6.4",ee.config={silent:!1}},6210:function(e,t,n){"use strict";var i=n(144);function r(e){return function(t,n){for(const i in n)Object.prototype.hasOwnProperty.call(t,i)||this.$delete(this.$data[e],i);for(const i in t)this.$set(this.$data[e],i,t[i])}}t["Z"]=i.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},6952:function(e,t,n){"use strict";var i=n(144),r=n(1824),s=n(7093);t["Z"]=i.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(e,t={}){return"string"===typeof t.style?((0,r.N6)("style must be an object",this),t):"string"===typeof t.class?((0,r.N6)("class must be an object",this),t):((0,s.NA)(e)?t.style={...t.style,"background-color":`${e}`,"border-color":`${e}`}:e&&(t.class={...t.class,[e]:!0}),t)},setTextColor(e,t={}){if("string"===typeof t.style)return(0,r.N6)("style must be an object",this),t;if("string"===typeof t.class)return(0,r.N6)("class must be an object",this),t;if((0,s.NA)(e))t.style={...t.style,color:`${e}`,"caret-color":`${e}`};else if(e){const[n,i]=e.toString().trim().split(" ",2);t.class={...t.class,[n+"--text"]:!0},i&&(t.class["text--"+i]=!0)}return t}}})},3377:function(e,t,n){"use strict";var i=n(144);t["Z"]=i.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const e=this.computedElevation;return null==e||isNaN(parseInt(e))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});var i=n(6257);function r(e,t,n){return(0,i.f)(e,t,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[e])return this[e].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[e]&&this[e].register(this)},beforeDestroy(){this[e]&&this[e].unregister(this)},methods:{toggle(){this.$emit("change")}}})}r("itemGroup")},1226:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var i=n(144),r=n(5827),s=n(8083),o=n(6952),a=n(3536),c=n(1431),u=n(8085),l=n(4589),h=n(3325);const d=(0,h.Z)(o.Z,(0,a.d)(["absolute","fixed","top","bottom"]),c.Z,u.Z);var p=d.extend({name:"v-progress-linear",directives:{intersect:s.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,l.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,l.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:(0,l.kb)(this.normalizedValue,"%"),width:(0,l.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?r.Z5:r.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=(0,l.kb)(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=(0,l.z9)(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,n){this.isVisible=n},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,l.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),f=p,m=i.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},2529:function(e,t,n){"use strict";var i=n(4589),r=n(144);t["Z"]=r.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const e={},t=(0,i.kb)(this.height),n=(0,i.kb)(this.minHeight),r=(0,i.kb)(this.minWidth),s=(0,i.kb)(this.maxHeight),o=(0,i.kb)(this.maxWidth),a=(0,i.kb)(this.width);return t&&(e.height=t),n&&(e.minHeight=n),r&&(e.minWidth=r),s&&(e.maxHeight=s),o&&(e.maxWidth=o),a&&(e.width=a),e}}})},3536:function(e,t,n){"use strict";n.d(t,{d:function(){return o}});var i=n(144),r=n(4589);const s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(e=[]){return i.Z.extend({name:"positionable",props:e.length?(0,r.ji)(s,e):s})}t["Z"]=o()},1431:function(e,t,n){"use strict";var i=n(144);function r(e="value",t="change"){return i.Z.extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const s=r();t["Z"]=s},6257:function(e,t,n){"use strict";n.d(t,{J:function(){return a},f:function(){return o}});var i=n(144),r=n(1824);function s(e,t){return()=>(0,r.Kd)(`The ${e} component must be used inside a ${t}`)}function o(e,t,n){const r=t&&n?{register:s(t,n),unregister:s(t,n)}:null;return i.Z.extend({name:"registrable-inject",inject:{[e]:{default:r}}})}function a(e,t=!1){return i.Z.extend({name:"registrable-provide",provide(){return{[e]:t?this:{register:this.register,unregister:this.unregister}}}})}},3712:function(e,t,n){"use strict";var i=n(144);t["Z"]=i.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const e=[],t="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)e.push("rounded-0");else if("string"===typeof t){const n=t.split(" ");for(const t of n)e.push(`rounded-${t}`)}else t&&e.push("rounded");return e.length>0?{[e.join(" ")]:!0}:{}}}})},6505:function(e,t,n){"use strict";var i=n(144),r=n(6286),s=n(4589);t["Z"]=i.Z.extend({name:"routable",directives:{Ripple:r.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const e={};return this.to||(this.activeClass&&(e[this.activeClass]=this.isActive),this.proxyClass&&(e[this.proxyClass]=this.isActive)),e},computedRipple(){var e;return null!=(e=this.ripple)?e:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let e,t=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(t="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,r=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),r=`${r} ${this.proxyClass}`.trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:t,exactPath:this.exactPath,activeClass:i,exactActiveClass:r,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:e,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const e=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),t=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||e,n="_vnode.data.class."+(this.exact?t:e);this.$nextTick((()=>{!(0,s.vO)(this.$refs.link,n)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},9131:function(e,t,n){"use strict";var i=n(144);t["Z"]=i.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},8085:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var i=n(144);const r=i.Z.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(e,t){e!==t&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function s(e){const t={...e.props,...e.injections},n=r.options.computed.isDark.call(t);return r.options.computed.themeClasses.call({isDark:n})}t["Z"]=r},2936:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});var i=n(144);function r(e="value",t="input"){return i.Z.extend({name:"toggleable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{isActive:!!this[e]}},watch:{[e](e){this.isActive=!!e},isActive(n){!!n!==this[e]&&this.$emit(t,n)}}})}const s=r();t["Z"]=s},6884:function(e,t,n){"use strict";var i=n(6952),r=n(8085),s=n(6257),o=n(4589),a=n(1824),c=n(3325);const u=(0,c.Z)(i.Z,(0,s.f)("form"),r.Z);t["Z"]=u.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",e)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(e,t){(0,o.vZ)(e,t)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(e){e||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(e){this.shouldValidate&&this.$emit("update:error",e)},value(e){this.lazyValue=e}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(e){return e?Array.isArray(e)?e:[e]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(e=!1,t){const n=[];t=t||this.internalValue,e&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const e=this.rules[i],r="function"===typeof e?e(t):e;!1===r||"string"===typeof r?n.push(r||""):"boolean"!==typeof r&&(0,a.N6)(`Rules should return a string or boolean, received '${typeof r}' instead`,this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}})},1439:function(e,t,n){"use strict";n.d(t,{A:function(){return S},Z:function(){return I}});var i={};n.r(i),n.d(i,{easeInCubic:function(){return u},easeInOutCubic:function(){return h},easeInOutQuad:function(){return c},easeInOutQuart:function(){return f},easeInOutQuint:function(){return v},easeInQuad:function(){return o},easeInQuart:function(){return d},easeInQuint:function(){return m},easeOutCubic:function(){return l},easeOutQuad:function(){return a},easeOutQuart:function(){return p},easeOutQuint:function(){return g},linear:function(){return s}});n(1703);var r=n(4097);const s=e=>e,o=e=>e**2,a=e=>e*(2-e),c=e=>e<.5?2*e**2:(4-2*e)*e-1,u=e=>e**3,l=e=>--e**3+1,h=e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,d=e=>e**4,p=e=>1- --e**4,f=e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,m=e=>e**5,g=e=>1+--e**5,v=e=>e<.5?16*e**5:1+16*--e**5;function y(e){if("number"===typeof e)return e;let t=_(e);if(!t)throw"string"===typeof e?new Error(`Target element "${e}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${w(e)} instead.`);let n=0;while(t)n+=t.offsetTop,t=t.offsetParent;return n}function b(e){const t=_(e);if(t)return t;throw"string"===typeof e?new Error(`Container element "${e}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${w(e)} instead.`)}function w(e){return null==e?e:e.constructor.name}function _(e){return"string"===typeof e?document.querySelector(e):e&&e._isVue?e.$el:e instanceof HTMLElement?e:null}function I(e,t={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...t},r=b(n.container);if(n.appOffset&&I.framework.application){const e=r.classList.contains("v-navigation-drawer"),t=r.classList.contains("v-navigation-drawer--clipped"),{bar:i,top:s}=I.framework.application;n.offset+=i,e&&!t||(n.offset+=s)}const s=performance.now();let o;o="number"===typeof e?y(e)-n.offset:y(e)-y(r)-n.offset;const a=r.scrollTop;if(o===a)return Promise.resolve(o);const c="function"===typeof n.easing?n.easing:i[n.easing];if(!c)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((e=>requestAnimationFrame((function t(i){const u=i-s,l=Math.abs(n.duration?Math.min(u/n.duration,1):1);r.scrollTop=Math.floor(a+(o-a)*c(l));const h=r===document.body?document.documentElement.clientHeight:r.clientHeight,d=h+r.scrollTop>=r.scrollHeight;if(1===l||o>r.scrollTop&&d)return e(o);requestAnimationFrame(t)}))))}I.framework={},I.init=()=>{};class S extends r.t{constructor(){return super(),I}}S.property="goTo"},4097:function(e,t,n){"use strict";n.d(t,{t:function(){return i}});class i{constructor(){this.framework={}}init(e,t){}}},7093:function(e,t,n){"use strict";n.d(t,{I4:function(){return o},NA:function(){return r},hq:function(){return a},jx:function(){return s}});n(1703);var i=n(1824);function r(e){return!!e&&!!e.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(e){let t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`);{let n="#"===e[0]?e.substring(1):e;3===n.length&&(n=n.split("").map((e=>e+e)).join("")),6!==n.length&&(0,i.Kd)(`'${e}' is not a valid rgb color`),t=parseInt(n,16)}}return t<0?((0,i.Kd)(`Colors cannot be negative: '${e}'`),t=0):(t>16777215||isNaN(t))&&((0,i.Kd)(`'${e}' is not a valid rgb color`),t=16777215),t}function o(e){let t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function a(e){return o(s(e))}},1824:function(e,t,n){"use strict";n.d(t,{Jk:function(){return u},Kd:function(){return s},N6:function(){return o},Rn:function(){return a},fK:function(){return c}});var i=n(9132);function r(e,t,n){if(!i.Z.config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?p(t):"")}}function s(e,t,n){const i=r(e,t,n);null!=i&&console.warn(i)}function o(e,t,n){const i=r(e,t,n);null!=i&&console.error(i)}function a(e,t,n,i){s(`[UPGRADE] '${e}' is deprecated, use '${t}' instead.`,n,i)}function c(e,t,n,i){o(`[BREAKING] '${e}' has been removed, use '${t}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,i)}function u(e,t,n){s(`[REMOVED] '${e}' has been removed. You can safely omit it.`,t,n)}const l=/(?:^|[-_])(\w)/g,h=e=>e.replace(l,(e=>e.toUpperCase())).replace(/[-_]/g,"");function d(e,t){if(e.$root===e)return"<Root>";const n="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let i=n.name||n._componentTag;const r=n.__file;if(!i&&r){const e=r.match(/([^/\\]+)\.vue$/);i=e&&e[1]}return(i?`<${h(i)}>`:"<Anonymous>")+(r&&!1!==t?` at ${r}`:"")}function p(e){if(e._isVue&&e.$parent){const t=[];let n=0;while(e){if(t.length>0){const i=t[t.length-1];if(i.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[i,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${d(e[0])}... (${e[1]} recursive calls)`:d(e)}`)).join("\n")}return`\n\n(found in ${d(e)})`}},1706:function(e,t,n){"use strict";function i(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}n.d(t,{e:function(){return i}})},4589:function(e,t,n){"use strict";n.d(t,{$x:function(){return N},Do:function(){return v},Ee:function(){return $},FT:function(){return A},GL:function(){return m},Ji:function(){return r},KK:function(){return l},KT:function(){return x},RB:function(){return y},TI:function(){return E},XP:function(){return b},_A:function(){return _},f9:function(){return k},jC:function(){return I},ji:function(){return p},kb:function(){return f},kg:function(){return P},qF:function(){return u},qw:function(){return o},r:function(){return d},sD:function(){return S},sp:function(){return C},uZ:function(){return D},vO:function(){return c},vZ:function(){return a},xl:function(){return T},z9:function(){return O}});var i=n(144);function r(e,t="div",n){return i.Z.extend({name:n||e.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:t}},render(t,{data:n,props:i,children:r}){return n.staticClass=`${e} ${n.staticClass||""}`.trim(),t(i.tag,n,r)}})}let s=!1;try{if("undefined"!==typeof window){const e=Object.defineProperty({},"passive",{get:()=>{s=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(L){console.warn(L)}function o(e,t,n){const i=t.length-1;if(i<0)return void 0===e?n:e;for(let r=0;r<i;r++){if(null==e)return n;e=e[t[r]]}return null==e||void 0===e[t[i]]?n:e[t[i]]}function a(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>a(e[n],t[n])))}function c(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),o(e,t.split("."),n)):n}function u(e,t,n){if(null==t)return void 0===e?n:e;if(e!==Object(e))return void 0===n?e:n;if("string"===typeof t)return c(e,t,n);if(Array.isArray(t))return o(e,t,n);if("function"!==typeof t)return n;const i=t(e,n);return"undefined"===typeof i?n:i}function l(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;const t=+window.getComputedStyle(e).getPropertyValue("z-index");return t||l(e.parentNode)}const h={"&":"&amp;","<":"&lt;",">":"&gt;"};function d(e){return e.replace(/[&<>]/g,(e=>h[e]||e))}function p(e,t){const n={};for(let i=0;i<t.length;i++){const r=t[i];"undefined"!==typeof e[r]&&(n[r]=e[r])}return n}function f(e,t="px"){return null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`}function m(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function g(e){return null!==e&&"object"===typeof e}const v=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function y(e,t){const n=e.$vuetify.icons.component;if(t.startsWith("$")){const n=`$vuetify.icons.values.${t.split("$").pop().split(".").pop()}`,i=c(e,n,t);if("string"!==typeof i)return i;t=i}return null==n?t:{component:n,props:{icon:t}}}function b(e){return Object.keys(e)}const w=/-(\w)/g,_=e=>e.replace(w,((e,t)=>t?t.toUpperCase():""));function I(e){return e.charAt(0).toUpperCase()+e.slice(1)}function S(e,t,n){const i=t[0],r=[];let s;for(let o=0;o<e.length;o++){const t=e[o],n=c(t,i,null);s!==n&&(s=n,r.push({name:null!=n?n:"",items:[]})),r[r.length-1].items.push(t)}return r}function E(e){return null!=e?Array.isArray(e)?e:[e]:[]}function T(e,t,n,i,r){if(null===t||!t.length)return e;const s=new Intl.Collator(i,{sensitivity:"accent",usage:"sort"});return e.sort(((e,i)=>{for(let o=0;o<t.length;o++){const a=t[o];let u=c(e,a),l=c(i,a);if(n[o]&&([u,l]=[l,u]),r&&r[a]){const e=r[a](u,l);if(!e)continue;return e}if(null!==u||null!==l){if(u instanceof Date&&l instanceof Date)return u.getTime()-l.getTime();if([u,l]=[u,l].map((e=>(e||"").toString().toLocaleLowerCase())),u!==l)return isNaN(u)||isNaN(l)?s.compare(u,l):Number(u)-Number(l)}}return 0}))}function k(e,t,n){return null!=e&&null!=t&&"boolean"!==typeof e&&-1!==e.toString().toLocaleLowerCase().indexOf(t.toLocaleLowerCase())}function x(e,t){return t?(t=t.toString().toLowerCase(),""===t.trim()?e:e.filter((e=>Object.keys(e).some((n=>k(c(e,n),t,e)))))):e}function C(e,t,n){return e.$slots.hasOwnProperty(t)&&e.$scopedSlots.hasOwnProperty(t)&&e.$scopedSlots[t].name?n?"v-slot":"scoped":e.$slots.hasOwnProperty(t)?"normal":e.$scopedSlots.hasOwnProperty(t)?"scoped":void 0}function A(e,t){return Object.keys(t).filter((t=>t.startsWith(e))).reduce(((n,i)=>(n[i.replace(e,"")]=t[i],n)),{})}function O(e,t="default",n,i=!1){return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!i?void 0:e.$slots[t]}function D(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function N(e){return e?Object.keys(e).reduce(((t,n)=>(t[_(n)]=e[n],t)),{}):{}}function $(e={},t={}){for(const n in t){const i=e[n],r=t[n];g(i)&&g(r)?e[n]=$(i,r):e[n]=r}return e}function P(e,t){return Array(e).fill(t)}},6290:function(e,t,n){"use strict";n.d(t,{ZP:function(){return o},ze:function(){return c}});var i=n(4589);const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function s(e){const t={};for(const n of e.split(r.styleList)){let[e,s]=n.split(r.styleProp);e=e.trim(),e&&("string"===typeof s&&(s=s.trim()),t[(0,i._A)(e)]=s)}return t}function o(){const e={};let t,n=arguments.length;while(n--)for(t of Object.keys(arguments[n]))switch(t){case"class":case"directives":arguments[n][t]&&(e[t]=c(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=a(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=u(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]={...arguments[n][t],...e[t]};break;default:e[t]||(e[t]=arguments[n][t])}return e}function a(e,t){return e?t?(e=(0,i.TI)("string"===typeof e?s(e):e),e.concat("string"===typeof t?s(t):t)):e:t}function c(e,t){return t?e&&e?(0,i.TI)(e).concat(t):t:e}function u(...e){if(!e[0])return e[1];if(!e[1])return e[0];const t={};for(let n=2;n--;){const i=e[n];for(const e in i)i[e]&&(t[e]?t[e]=[].concat(i[e],t[e]):t[e]=i[e])}return t}},3325:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(144);function r(...e){return i.Z.extend({mixins:e})}},8345:function(e,t){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function n(e,t){for(var n in t)e[n]=t[n];return e}var i=/[!'()*]/g,r=function(e){return"%"+e.charCodeAt(0).toString(16)},s=/%2C/g,o=function(e){return encodeURIComponent(e).replace(i,r).replace(s,",")};function a(e){try{return decodeURIComponent(e)}catch(t){0}return e}function c(e,t,n){void 0===t&&(t={});var i,r=n||l;try{i=r(e||"")}catch(a){i={}}for(var s in t){var o=t[s];i[s]=Array.isArray(o)?o.map(u):u(o)}return i}var u=function(e){return null==e||"object"===typeof e?e:String(e)};function l(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),i=a(n.shift()),r=n.length>0?a(n.join("=")):null;void 0===t[i]?t[i]=r:Array.isArray(t[i])?t[i].push(r):t[i]=[t[i],r]})),t):t}function h(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return o(t);if(Array.isArray(n)){var i=[];return n.forEach((function(e){void 0!==e&&(null===e?i.push(o(t)):i.push(o(t)+"="+o(e)))})),i.join("&")}return o(t)+"="+o(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var d=/\/?$/;function p(e,t,n,i){var r=i&&i.options.stringifyQuery,s=t.query||{};try{s=f(s)}catch(a){}var o={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:s,params:t.params||{},fullPath:v(t,r),matched:e?g(e):[]};return n&&(o.redirectedFrom=v(n,r)),Object.freeze(o)}function f(e){if(Array.isArray(e))return e.map(f);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=f(e[n]);return t}return e}var m=p(null,{path:"/"});function g(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function v(e,t){var n=e.path,i=e.query;void 0===i&&(i={});var r=e.hash;void 0===r&&(r="");var s=t||h;return(n||"/")+s(i)+r}function y(e,t,n){return t===m?e===t:!!t&&(e.path&&t.path?e.path.replace(d,"")===t.path.replace(d,"")&&(n||e.hash===t.hash&&b(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&b(e.query,t.query)&&b(e.params,t.params))))}function b(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),i=Object.keys(t).sort();return n.length===i.length&&n.every((function(n,r){var s=e[n],o=i[r];if(o!==n)return!1;var a=t[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?b(s,a):String(s)===String(a)}))}function w(e,t){return 0===e.path.replace(d,"/").indexOf(t.path.replace(d,"/"))&&(!t.hash||e.hash===t.hash)&&_(e.query,t.query)}function _(e,t){for(var n in t)if(!(n in e))return!1;return!0}function I(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var i in n.instances){var r=n.instances[i],s=n.enteredCbs[i];if(r&&s){delete n.enteredCbs[i];for(var o=0;o<s.length;o++)r._isBeingDestroyed||s[o](r)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var i=t.props,r=t.children,s=t.parent,o=t.data;o.routerView=!0;var a=s.$createElement,c=i.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var p=s.$vnode?s.$vnode.data:{};p.routerView&&h++,p.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var f=l[c],m=f&&f.component;return m?(f.configProps&&E(m,o,f.route,f.configProps),a(m,o,r)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(e,t){var n=g.instances[c];(t&&n!==e||!t&&n===e)&&(g.instances[c]=t)},(o.hook||(o.hook={})).prepatch=function(e,t){g.instances[c]=t.componentInstance},o.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==g.instances[c]&&(g.instances[c]=e.componentInstance),I(u)};var y=g.props&&g.props[c];return y&&(n(l[c],{route:u,configProps:y}),E(v,o,u,y)),a(v,o,r)}};function E(e,t,i,r){var s=t.props=T(i,r);if(s){s=t.props=n({},s);var o=t.attrs=t.attrs||{};for(var a in s)e.props&&a in e.props||(o[a]=s[a],delete s[a])}}function T(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function k(e,t,n){var i=e.charAt(0);if("/"===i)return e;if("?"===i||"#"===i)return t+e;var r=t.split("/");n&&r[r.length-1]||r.pop();for(var s=e.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}return""!==r[0]&&r.unshift(""),r.join("/")}function x(e){var t="",n="",i=e.indexOf("#");i>=0&&(t=e.slice(i),e=e.slice(0,i));var r=e.indexOf("?");return r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),{path:e,query:n,hash:t}}function C(e){return e.replace(/\/+/g,"/")}var A=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},O=Z,D=R,N=M,$=B,P=G,L=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function R(e,t){var n,i=[],r=0,s=0,o="",a=t&&t.delimiter||"/";while(null!=(n=L.exec(e))){var c=n[0],u=n[1],l=n.index;if(o+=e.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=e[s],d=n[2],p=n[3],f=n[4],m=n[5],g=n[6],v=n[7];o&&(i.push(o),o="");var y=null!=d&&null!=h&&h!==d,b="+"===g||"*"===g,w="?"===g||"*"===g,_=n[2]||a,I=f||m;i.push({name:p||r++,prefix:d||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!v,pattern:I?U(I):v?".*":"[^"+j(_)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&i.push(o),i}function M(e,t){return B(R(e,t),t)}function V(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function F(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function B(e,t){for(var n=new Array(e.length),i=0;i<e.length;i++)"object"===typeof e[i]&&(n[i]=new RegExp("^(?:"+e[i].pattern+")$",z(t)));return function(t,i){for(var r="",s=t||{},o=i||{},a=o.pretty?V:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(r+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(A(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");r+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?F(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');r+=u.prefix+l}}else r+=u}return r}}function j(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function q(e,t){return e.keys=t,e}function z(e){return e&&e.sensitive?"":"i"}function H(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return q(e,t)}function W(e,t,n){for(var i=[],r=0;r<e.length;r++)i.push(Z(e[r],t,n).source);var s=new RegExp("(?:"+i.join("|")+")",z(n));return q(s,t)}function K(e,t,n){return G(R(e,n),t,n)}function G(e,t,n){A(t)||(n=t||n,t=[]),n=n||{};for(var i=n.strict,r=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"===typeof a)s+=j(a);else{var c=j(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=j(n.delimiter||"/"),h=s.slice(-l.length)===l;return i||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=r?"$":i&&h?"":"(?="+l+"|$)",q(new RegExp("^"+s,z(n)),t)}function Z(e,t,n){return A(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?H(e,t):A(e)?W(e,t,n):K(e,t,n)}O.parse=D,O.compile=N,O.tokensToFunction=$,O.tokensToRegExp=P;var Y=Object.create(null);function J(e,t,n){t=t||{};try{var i=Y[e]||(Y[e]=O.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),i(t,{pretty:!0})}catch(r){return""}finally{delete t[0]}}function Q(e,t,i,r){var s="string"===typeof e?{path:e}:e;if(s._normalized)return s;if(s.name){s=n({},e);var o=s.params;return o&&"object"===typeof o&&(s.params=n({},o)),s}if(!s.path&&s.params&&t){s=n({},s),s._normalized=!0;var a=n(n({},t.params),s.params);if(t.name)s.name=t.name,s.params=a;else if(t.matched.length){var u=t.matched[t.matched.length-1].path;s.path=J(u,a,"path "+t.path)}else 0;return s}var l=x(s.path||""),h=t&&t.path||"/",d=l.path?k(l.path,h,i||s.append):h,p=c(l.query,s.query,r&&r.options.parseQuery),f=s.hash||l.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:d,query:p,hash:f}}var X,ee=[String,Object],te=[String,Array],ne=function(){},ie={name:"RouterLink",props:{to:{type:ee,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:te,default:"click"}},render:function(e){var t=this,i=this.$router,r=this.$route,s=i.resolve(this.to,r,this.append),o=s.location,a=s.route,c=s.href,u={},l=i.options.linkActiveClass,h=i.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,Q(a.redirectedFrom),null,i):a;u[g]=y(r,v,this.exactPath),u[m]=this.exact||this.exactPath?u[g]:w(r,v);var b=u[g]?this.ariaCurrentValue:null,_=function(e){re(e)&&(t.replace?i.replace(o,ne):i.push(o,ne))},I={click:re};Array.isArray(this.event)?this.event.forEach((function(e){I[e]=_})):I[this.event]=_;var S={class:u},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:_,isActive:u[m],isExactActive:u[g]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?e():e("span",{},E)}if("a"===this.tag)S.on=I,S.attrs={href:c,"aria-current":b};else{var T=se(this.$slots.default);if(T){T.isStatic=!1;var k=T.data=n({},T.data);for(var x in k.on=k.on||{},k.on){var C=k.on[x];x in I&&(k.on[x]=Array.isArray(C)?C:[C])}for(var A in I)A in k.on?k.on[A].push(I[A]):k.on[A]=_;var O=T.data.attrs=n({},T.data.attrs);O.href=c,O["aria-current"]=b}else S.on=I}return e(this.tag,S,this.$slots.default)}};function re(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function se(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=se(t.children)))return t}}function oe(e){if(!oe.installed||X!==e){oe.installed=!0,X=e;var t=function(e){return void 0!==e},n=function(e,n){var i=e.$options._parentVnode;t(i)&&t(i=i.data)&&t(i=i.registerRouteInstance)&&i(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",S),e.component("RouterLink",ie);var i=e.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var ae="undefined"!==typeof window;function ce(e,t,n,i,r){var s=t||[],o=n||Object.create(null),a=i||Object.create(null);e.forEach((function(e){ue(s,o,a,e,r)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function ue(e,t,n,i,r,s){var o=i.path,a=i.name;var c=i.pathToRegexpOptions||{},u=he(o,r,c.strict);"boolean"===typeof i.caseSensitive&&(c.sensitive=i.caseSensitive);var l={path:u,regex:le(u,c),components:i.components||{default:i.component},alias:i.alias?"string"===typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:a,parent:r,matchAs:s,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach((function(i){var r=s?C(s+"/"+i.path):void 0;ue(e,t,n,i,l,r)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==i.alias)for(var h=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<h.length;++d){var p=h[d];0;var f={path:p,children:i.children};ue(e,t,n,f,r,l.path||"/")}a&&(n[a]||(n[a]=l))}function le(e,t){var n=O(e,[],t);return n}function he(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:C(t.path+"/"+e)}function de(e,t){var n=ce(e),i=n.pathList,r=n.pathMap,s=n.nameMap;function o(e){ce(e,i,r,s)}function a(e,t){var n="object"!==typeof e?s[e]:void 0;ce([t||e],i,r,s,n),n&&n.alias.length&&ce(n.alias.map((function(e){return{path:e,children:[t]}})),i,r,s,n)}function c(){return i.map((function(e){return r[e]}))}function u(e,n,o){var a=Q(e,n,!1,t),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=J(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var p=0;p<i.length;p++){var f=i[p],m=r[f];if(pe(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(e,n){var i=e.redirect,r="function"===typeof i?i(p(e,n,null,t)):i;if("string"===typeof r&&(r={path:r}),!r||"object"!==typeof r)return d(null,n);var o=r,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var m=fe(c,e),g=J(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var i=J(n,t.params,'aliased route with path "'+n+'"'),r=u({_normalized:!0,path:i});if(r){var s=r.matched,o=s[s.length-1];return t.params=r.params,d(o,t)}return d(null,t)}function d(e,n,i){return e&&e.redirect?l(e,i||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,i,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function pe(e,t,n){var i=t.match(e);if(!i)return!1;if(!n)return!0;for(var r=1,s=i.length;r<s;++r){var o=e.keys[r-1];o&&(n[o.name||"pathMatch"]="string"===typeof i[r]?a(i[r]):i[r])}return!0}function fe(e,t){return k(e,t.parent?t.parent.path:"/",!0)}var me=ae&&window.performance&&window.performance.now?window.performance:Date;function ge(){return me.now().toFixed(3)}var ve=ge();function ye(){return ve}function be(e){return ve=e}var we=Object.create(null);function _e(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),i=n({},window.history.state);return i.key=ye(),window.history.replaceState(i,"",t),window.addEventListener("popstate",Ee),function(){window.removeEventListener("popstate",Ee)}}function Ie(e,t,n,i){if(e.app){var r=e.options.scrollBehavior;r&&e.app.$nextTick((function(){var s=Te(),o=r.call(e,t,n,i?s:null);o&&("function"===typeof o.then?o.then((function(e){Ne(e,s)})).catch((function(e){0})):Ne(o,s))}))}}function Se(){var e=ye();e&&(we[e]={x:window.pageXOffset,y:window.pageYOffset})}function Ee(e){Se(),e.state&&e.state.key&&be(e.state.key)}function Te(){var e=ye();if(e)return we[e]}function ke(e,t){var n=document.documentElement,i=n.getBoundingClientRect(),r=e.getBoundingClientRect();return{x:r.left-i.left-t.x,y:r.top-i.top-t.y}}function xe(e){return Oe(e.x)||Oe(e.y)}function Ce(e){return{x:Oe(e.x)?e.x:window.pageXOffset,y:Oe(e.y)?e.y:window.pageYOffset}}function Ae(e){return{x:Oe(e.x)?e.x:0,y:Oe(e.y)?e.y:0}}function Oe(e){return"number"===typeof e}var De=/^#\d/;function Ne(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var i=De.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(i){var r=e.offset&&"object"===typeof e.offset?e.offset:{};r=Ae(r),t=ke(i,r)}else xe(e)&&(t=Ce(e))}else n&&xe(e)&&(t=Ce(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var $e=ae&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Pe(e,t){Se();var i=window.history;try{if(t){var r=n({},i.state);r.key=ye(),i.replaceState(r,"",e)}else i.pushState({key:be(ge())},"",e)}catch(s){window.location[t?"replace":"assign"](e)}}function Le(e){Pe(e,!0)}function Re(e,t,n){var i=function(r){r>=e.length?n():e[r]?t(e[r],(function(){i(r+1)})):i(r+1)};i(0)}var Me={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ve(e,t){return Ue(e,t,Me.redirected,'Redirected when going from "'+e.fullPath+'" to "'+ze(t)+'" via a navigation guard.')}function Fe(e,t){var n=Ue(e,t,Me.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Be(e,t){return Ue(e,t,Me.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function je(e,t){return Ue(e,t,Me.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function Ue(e,t,n,i){var r=new Error(i);return r._isRouter=!0,r.from=e,r.to=t,r.type=n,r}var qe=["params","query","hash"];function ze(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return qe.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function He(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function We(e,t){return He(e)&&e._isRouter&&(null==t||e.type===t)}function Ke(e){return function(t,n,i){var r=!1,s=0,o=null;Ge(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){r=!0,s++;var c,u=Qe((function(t){Je(t)&&(t=t.default),e.resolved="function"===typeof t?t:X.extend(t),n.components[a]=t,s--,s<=0&&i()})),l=Qe((function(e){var t="Failed to resolve async component "+a+": "+e;o||(o=He(e)?e:new Error(t),i(o))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),r||i()}}function Ge(e,t){return Ze(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Ze(e){return Array.prototype.concat.apply([],e)}var Ye="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Je(e){return e.__esModule||Ye&&"Module"===e[Symbol.toStringTag]}function Qe(e){var t=!1;return function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];if(!t)return t=!0,e.apply(this,n)}}var Xe=function(e,t){this.router=e,this.base=et(t),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function et(e){if(!e)if(ae){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function tt(e,t){var n,i=Math.max(e.length,t.length);for(n=0;n<i;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function nt(e,t,n,i){var r=Ge(e,(function(e,i,r,s){var o=it(e,t);if(o)return Array.isArray(o)?o.map((function(e){return n(e,i,r,s)})):n(o,i,r,s)}));return Ze(i?r.reverse():r)}function it(e,t){return"function"!==typeof e&&(e=X.extend(e)),e.options[t]}function rt(e){return nt(e,"beforeRouteLeave",ot,!0)}function st(e){return nt(e,"beforeRouteUpdate",ot)}function ot(e,t){if(t)return function(){return e.apply(t,arguments)}}function at(e){return nt(e,"beforeRouteEnter",(function(e,t,n,i){return ct(e,n,i)}))}function ct(e,t,n){return function(i,r,s){return e(i,r,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),s(e)}))}}Xe.prototype.listen=function(e){this.cb=e},Xe.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},Xe.prototype.onError=function(e){this.errorCbs.push(e)},Xe.prototype.transitionTo=function(e,t,n){var i,r=this;try{i=this.router.match(e,this.current)}catch(o){throw this.errorCbs.forEach((function(e){e(o)})),o}var s=this.current;this.confirmTransition(i,(function(){r.updateRoute(i),t&&t(i),r.ensureURL(),r.router.afterHooks.forEach((function(e){e&&e(i,s)})),r.ready||(r.ready=!0,r.readyCbs.forEach((function(e){e(i)})))}),(function(e){n&&n(e),e&&!r.ready&&(We(e,Me.redirected)&&s===m||(r.ready=!0,r.readyErrorCbs.forEach((function(t){t(e)}))))}))},Xe.prototype.confirmTransition=function(e,t,n){var i=this,r=this.current;this.pending=e;var s=function(e){!We(e)&&He(e)&&(i.errorCbs.length?i.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},o=e.matched.length-1,a=r.matched.length-1;if(y(e,r)&&o===a&&e.matched[o]===r.matched[a])return this.ensureURL(),e.hash&&Ie(this.router,r,e,!1),s(Fe(r,e));var c=tt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(rt(l),this.router.beforeHooks,st(u),h.map((function(e){return e.beforeEnter})),Ke(h)),p=function(t,n){if(i.pending!==e)return s(Be(r,e));try{t(e,r,(function(t){!1===t?(i.ensureURL(!0),s(je(r,e))):He(t)?(i.ensureURL(!0),s(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(s(Ve(r,e)),"object"===typeof t&&t.replace?i.replace(t):i.push(t)):n(t)}))}catch(o){s(o)}};Re(d,p,(function(){var n=at(h),o=n.concat(i.router.resolveHooks);Re(o,p,(function(){if(i.pending!==e)return s(Be(r,e));i.pending=null,t(e),i.router.app&&i.router.app.$nextTick((function(){I(e)}))}))}))},Xe.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},Xe.prototype.setupListeners=function(){},Xe.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=m,this.pending=null};var ut=function(e){function t(t,n){e.call(this,t,n),this._startLocation=lt(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,i=$e&&n;i&&this.listeners.push(_e());var r=function(){var n=e.current,r=lt(e.base);e.current===m&&r===e._startLocation||e.transitionTo(r,(function(e){i&&Ie(t,e,n,!0)}))};window.addEventListener("popstate",r),this.listeners.push((function(){window.removeEventListener("popstate",r)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var i=this,r=this,s=r.current;this.transitionTo(e,(function(e){Pe(C(i.base+e.fullPath)),Ie(i.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var i=this,r=this,s=r.current;this.transitionTo(e,(function(e){Le(C(i.base+e.fullPath)),Ie(i.router,e,s,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(lt(this.base)!==this.current.fullPath){var t=C(this.base+this.current.fullPath);e?Pe(t):Le(t)}},t.prototype.getCurrentLocation=function(){return lt(this.base)},t}(Xe);function lt(e){var t=window.location.pathname,n=t.toLowerCase(),i=e.toLowerCase();return!e||n!==i&&0!==n.indexOf(C(i+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var ht=function(e){function t(t,n,i){e.call(this,t,n),i&&dt(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,i=$e&&n;i&&this.listeners.push(_e());var r=function(){var t=e.current;pt()&&e.transitionTo(ft(),(function(n){i&&Ie(e.router,n,t,!0),$e||vt(n.fullPath)}))},s=$e?"popstate":"hashchange";window.addEventListener(s,r),this.listeners.push((function(){window.removeEventListener(s,r)}))}},t.prototype.push=function(e,t,n){var i=this,r=this,s=r.current;this.transitionTo(e,(function(e){gt(e.fullPath),Ie(i.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var i=this,r=this,s=r.current;this.transitionTo(e,(function(e){vt(e.fullPath),Ie(i.router,e,s,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;ft()!==t&&(e?gt(t):vt(t))},t.prototype.getCurrentLocation=function(){return ft()},t}(Xe);function dt(e){var t=lt(e);if(!/^\/#/.test(t))return window.location.replace(C(e+"/#"+t)),!0}function pt(){var e=ft();return"/"===e.charAt(0)||(vt("/"+e),!1)}function ft(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function mt(e){var t=window.location.href,n=t.indexOf("#"),i=n>=0?t.slice(0,n):t;return i+"#"+e}function gt(e){$e?Pe(mt(e)):window.location.hash=e}function vt(e){$e?Le(mt(e)):window.location.replace(mt(e))}var yt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var i=this;this.transitionTo(e,(function(e){i.stack=i.stack.slice(0,i.index+1).concat(e),i.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var i=this;this.transitionTo(e,(function(e){i.stack=i.stack.slice(0,i.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var i=this.stack[n];this.confirmTransition(i,(function(){var e=t.current;t.index=n,t.updateRoute(i),t.router.afterHooks.forEach((function(t){t&&t(i,e)}))}),(function(e){We(e,Me.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(Xe),bt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=de(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!$e&&!1!==e.fallback,this.fallback&&(t="hash"),ae||(t="abstract"),this.mode=t,t){case"history":this.history=new ut(this,e.base);break;case"hash":this.history=new ht(this,e.base,this.fallback);break;case"abstract":this.history=new yt(this,e.base);break;default:0}},wt={currentRoute:{configurable:!0}};function _t(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function It(e,t,n){var i="hash"===n?"#"+t:t;return e?C(e+"/"+i):i}bt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},wt.currentRoute.get=function(){return this.history&&this.history.current},bt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof ut||n instanceof ht){var i=function(e){var i=n.current,r=t.options.scrollBehavior,s=$e&&r;s&&"fullPath"in e&&Ie(t,e,i,!1)},r=function(e){n.setupListeners(),i(e)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},bt.prototype.beforeEach=function(e){return _t(this.beforeHooks,e)},bt.prototype.beforeResolve=function(e){return _t(this.resolveHooks,e)},bt.prototype.afterEach=function(e){return _t(this.afterHooks,e)},bt.prototype.onReady=function(e,t){this.history.onReady(e,t)},bt.prototype.onError=function(e){this.history.onError(e)},bt.prototype.push=function(e,t,n){var i=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){i.history.push(e,t,n)}));this.history.push(e,t,n)},bt.prototype.replace=function(e,t,n){var i=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){i.history.replace(e,t,n)}));this.history.replace(e,t,n)},bt.prototype.go=function(e){this.history.go(e)},bt.prototype.back=function(){this.go(-1)},bt.prototype.forward=function(){this.go(1)},bt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},bt.prototype.resolve=function(e,t,n){t=t||this.history.current;var i=Q(e,t,n,this),r=this.match(i,t),s=r.redirectedFrom||r.fullPath,o=this.history.base,a=It(o,s,this.mode);return{location:i,route:r,href:a,normalizedTo:i,resolved:r}},bt.prototype.getRoutes=function(){return this.matcher.getRoutes()},bt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},bt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(bt.prototype,wt),bt.install=oe,bt.version="3.5.3",bt.isNavigationFailure=We,bt.NavigationFailureType=Me,bt.START_LOCATION=m,ae&&window.Vue&&window.Vue.use(bt),t["Z"]=bt},144:function(e,t,n){"use strict";
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */var i=Object.freeze({});function r(e){return void 0===e||null===e}function s(e){return void 0!==e&&null!==e}function o(e){return!0===e}function a(e){return!1===e}function c(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function u(e){return null!==e&&"object"===typeof e}var l=Object.prototype.toString;function h(e){return"[object Object]"===l.call(e)}function d(e){return"[object RegExp]"===l.call(e)}function p(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function f(e){return s(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function m(e){return null==e?"":Array.isArray(e)||h(e)&&e.toString===l?JSON.stringify(e,null,2):String(e)}function g(e){var t=parseFloat(e);return isNaN(t)?e:t}function v(e,t){for(var n=Object.create(null),i=e.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function b(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var w=Object.prototype.hasOwnProperty;function _(e,t){return w.call(e,t)}function I(e){var t=Object.create(null);return function(n){var i=t[n];return i||(t[n]=e(n))}}var S=/-(\w)/g,E=I((function(e){return e.replace(S,(function(e,t){return t?t.toUpperCase():""}))})),T=I((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),k=/\B([A-Z])/g,x=I((function(e){return e.replace(k,"-$1").toLowerCase()}));function C(e,t){function n(n){var i=arguments.length;return i?i>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function A(e,t){return e.bind(t)}var O=Function.prototype.bind?A:C;function D(e,t){t=t||0;var n=e.length-t,i=new Array(n);while(n--)i[n]=e[n+t];return i}function N(e,t){for(var n in t)e[n]=t[n];return e}function $(e){for(var t={},n=0;n<e.length;n++)e[n]&&N(t,e[n]);return t}function P(e,t,n){}var L=function(e,t,n){return!1},R=function(e){return e};function M(e,t){if(e===t)return!0;var n=u(e),i=u(t);if(!n||!i)return!n&&!i&&String(e)===String(t);try{var r=Array.isArray(e),s=Array.isArray(t);if(r&&s)return e.length===t.length&&e.every((function(e,n){return M(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(r||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((function(n){return M(e[n],t[n])}))}catch(c){return!1}}function V(e,t){for(var n=0;n<e.length;n++)if(M(e[n],t))return n;return-1}function F(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var B="data-server-rendered",j=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:P,parsePlatformTagName:R,mustUseProp:L,async:!0,_lifecycleHooks:U},z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function W(e,t,n,i){Object.defineProperty(e,t,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var K=new RegExp("[^"+z.source+".$_\\d]");function G(e){if(!K.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var Z,Y="__proto__"in{},J="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Q&&WXEnvironment.platform.toLowerCase(),ee=J&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,ie=ee&&ee.indexOf("edge/")>0,re=(ee&&ee.indexOf("android"),ee&&/iphone|ipad|ipod|ios/.test(ee)||"ios"===X),se=(ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee),ee&&ee.match(/firefox\/(\d+)/)),oe={}.watch,ae=!1;if(J)try{var ce={};Object.defineProperty(ce,"passive",{get:function(){ae=!0}}),window.addEventListener("test-passive",null,ce)}catch(To){}var ue=function(){return void 0===Z&&(Z=!J&&!Q&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),Z},le=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function he(e){return"function"===typeof e&&/native code/.test(e.toString())}var de,pe="undefined"!==typeof Symbol&&he(Symbol)&&"undefined"!==typeof Reflect&&he(Reflect.ownKeys);de="undefined"!==typeof Set&&he(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var fe=P,me=0,ge=function(){this.id=me++,this.subs=[]};ge.prototype.addSub=function(e){this.subs.push(e)},ge.prototype.removeSub=function(e){b(this.subs,e)},ge.prototype.depend=function(){ge.target&&ge.target.addDep(this)},ge.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},ge.target=null;var ve=[];function ye(e){ve.push(e),ge.target=e}function be(){ve.pop(),ge.target=ve[ve.length-1]}var we=function(e,t,n,i,r,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_e={child:{configurable:!0}};_e.child.get=function(){return this.componentInstance},Object.defineProperties(we.prototype,_e);var Ie=function(e){void 0===e&&(e="");var t=new we;return t.text=e,t.isComment=!0,t};function Se(e){return new we(void 0,void 0,void 0,String(e))}function Ee(e){var t=new we(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Te=Array.prototype,ke=Object.create(Te),xe=["push","pop","shift","unshift","splice","sort","reverse"];xe.forEach((function(e){var t=Te[e];W(ke,e,(function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var Ce=Object.getOwnPropertyNames(ke),Ae=!0;function Oe(e){Ae=e}var De=function(e){this.value=e,this.dep=new ge,this.vmCount=0,W(e,"__ob__",this),Array.isArray(e)?(Y?Ne(e,ke):$e(e,ke,Ce),this.observeArray(e)):this.walk(e)};function Ne(e,t){e.__proto__=t}function $e(e,t,n){for(var i=0,r=n.length;i<r;i++){var s=n[i];W(e,s,t[s])}}function Pe(e,t){var n;if(u(e)&&!(e instanceof we))return _(e,"__ob__")&&e.__ob__ instanceof De?n=e.__ob__:Ae&&!ue()&&(Array.isArray(e)||h(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new De(e)),t&&n&&n.vmCount++,n}function Le(e,t,n,i,r){var s=new ge,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=e[t]);var u=!r&&Pe(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return ge.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(t)&&Ve(t))),t},set:function(t){var i=a?a.call(e):n;t===i||t!==t&&i!==i||a&&!c||(c?c.call(e,t):n=t,u=!r&&Pe(t),s.notify())}})}}function Re(e,t,n){if(Array.isArray(e)&&p(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var i=e.__ob__;return e._isVue||i&&i.vmCount?n:i?(Le(i.value,t,n),i.dep.notify(),n):(e[t]=n,n)}function Me(e,t){if(Array.isArray(e)&&p(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||_(e,t)&&(delete e[t],n&&n.dep.notify())}}function Ve(e){for(var t=void 0,n=0,i=e.length;n<i;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Ve(t)}De.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Le(e,t[n])},De.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Pe(e[t])};var Fe=q.optionMergeStrategies;function Be(e,t){if(!t)return e;for(var n,i,r,s=pe?Reflect.ownKeys(t):Object.keys(t),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(i=e[n],r=t[n],_(e,n)?i!==r&&h(i)&&h(r)&&Be(i,r):Re(e,n,r));return e}function je(e,t,n){return n?function(){var i="function"===typeof t?t.call(n,n):t,r="function"===typeof e?e.call(n,n):e;return i?Be(i,r):r}:t?e?function(){return Be("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function Ue(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?qe(n):n}function qe(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function ze(e,t,n,i){var r=Object.create(e||null);return t?N(r,t):r}Fe.data=function(e,t,n){return n?je(e,t,n):t&&"function"!==typeof t?e:je(e,t)},U.forEach((function(e){Fe[e]=Ue})),j.forEach((function(e){Fe[e+"s"]=ze})),Fe.watch=function(e,t,n,i){if(e===oe&&(e=void 0),t===oe&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var r={};for(var s in N(r,e),t){var o=r[s],a=t[s];o&&!Array.isArray(o)&&(o=[o]),r[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return r},Fe.props=Fe.methods=Fe.inject=Fe.computed=function(e,t,n,i){if(!e)return t;var r=Object.create(null);return N(r,e),t&&N(r,t),r},Fe.provide=je;var He=function(e,t){return void 0===t?e:t};function We(e,t){var n=e.props;if(n){var i,r,s,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(s=E(r),o[s]={type:null})}else if(h(n))for(var a in n)r=n[a],s=E(a),o[s]=h(r)?r:{type:r};else 0;e.props=o}}function Ke(e,t){var n=e.inject;if(n){var i=e.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(h(n))for(var s in n){var o=n[s];i[s]=h(o)?N({from:s},o):{from:o}}else 0}}function Ge(e){var t=e.directives;if(t)for(var n in t){var i=t[n];"function"===typeof i&&(t[n]={bind:i,update:i})}}function Ze(e,t,n){if("function"===typeof t&&(t=t.options),We(t,n),Ke(t,n),Ge(t),!t._base&&(t.extends&&(e=Ze(e,t.extends,n)),t.mixins))for(var i=0,r=t.mixins.length;i<r;i++)e=Ze(e,t.mixins[i],n);var s,o={};for(s in e)a(s);for(s in t)_(e,s)||a(s);function a(i){var r=Fe[i]||He;o[i]=r(e[i],t[i],n,i)}return o}function Ye(e,t,n,i){if("string"===typeof n){var r=e[t];if(_(r,n))return r[n];var s=E(n);if(_(r,s))return r[s];var o=T(s);if(_(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Je(e,t,n,i){var r=t[e],s=!_(n,e),o=n[e],a=nt(Boolean,r.type);if(a>-1)if(s&&!_(r,"default"))o=!1;else if(""===o||o===x(e)){var c=nt(String,r.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Qe(i,r,e);var u=Ae;Oe(!0),Pe(o),Oe(u)}return o}function Qe(e,t,n){if(_(t,"default")){var i=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof i&&"Function"!==et(t.type)?i.call(e):i}}var Xe=/^\s*function (\w+)/;function et(e){var t=e&&e.toString().match(Xe);return t?t[1]:""}function tt(e,t){return et(e)===et(t)}function nt(e,t){if(!Array.isArray(t))return tt(t,e)?0:-1;for(var n=0,i=t.length;n<i;n++)if(tt(t[n],e))return n;return-1}function it(e,t,n){ye();try{if(t){var i=t;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,e,t,n);if(o)return}catch(To){st(To,i,"errorCaptured hook")}}}st(e,t,n)}finally{be()}}function rt(e,t,n,i,r){var s;try{s=n?e.apply(t,n):e.call(t),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((function(e){return it(e,i,r+" (Promise/async)")})),s._handled=!0)}catch(To){it(To,i,r)}return s}function st(e,t,n){if(q.errorHandler)try{return q.errorHandler.call(null,e,t,n)}catch(To){To!==e&&ot(To,null,"config.errorHandler")}ot(e,t,n)}function ot(e,t,n){if(!J&&!Q||"undefined"===typeof console)throw e;console.error(e)}var at,ct=!1,ut=[],lt=!1;function ht(){lt=!1;var e=ut.slice(0);ut.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&he(Promise)){var dt=Promise.resolve();at=function(){dt.then(ht),re&&setTimeout(P)},ct=!0}else if(te||"undefined"===typeof MutationObserver||!he(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())at="undefined"!==typeof setImmediate&&he(setImmediate)?function(){setImmediate(ht)}:function(){setTimeout(ht,0)};else{var pt=1,ft=new MutationObserver(ht),mt=document.createTextNode(String(pt));ft.observe(mt,{characterData:!0}),at=function(){pt=(pt+1)%2,mt.data=String(pt)},ct=!0}function gt(e,t){var n;if(ut.push((function(){if(e)try{e.call(t)}catch(To){it(To,t,"nextTick")}else n&&n(t)})),lt||(lt=!0,at()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var vt=new de;function yt(e){bt(e,vt),vt.clear()}function bt(e,t){var n,i,r=Array.isArray(e);if(!(!r&&!u(e)||Object.isFrozen(e)||e instanceof we)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(r){n=e.length;while(n--)bt(e[n],t)}else{i=Object.keys(e),n=i.length;while(n--)bt(e[i[n]],t)}}}var wt=I((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var i="!"===e.charAt(0);return e=i?e.slice(1):e,{name:e,once:n,capture:i,passive:t}}));function _t(e,t){function n(){var e=arguments,i=n.fns;if(!Array.isArray(i))return rt(i,null,arguments,t,"v-on handler");for(var r=i.slice(),s=0;s<r.length;s++)rt(r[s],null,e,t,"v-on handler")}return n.fns=e,n}function It(e,t,n,i,s,a){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=wt(c),r(u)||(r(l)?(r(u.fns)&&(u=e[c]=_t(u,a)),o(h.once)&&(u=e[c]=s(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)r(e[c])&&(h=wt(c),i(h.name,t[c],h.capture))}function St(e,t,n){var i;e instanceof we&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function c(){n.apply(this,arguments),b(i.fns,c)}r(a)?i=_t([c]):s(a.fns)&&o(a.merged)?(i=a,i.fns.push(c)):i=_t([a,c]),i.merged=!0,e[t]=i}function Et(e,t,n){var i=t.options.props;if(!r(i)){var o={},a=e.attrs,c=e.props;if(s(a)||s(c))for(var u in i){var l=x(u);Tt(o,c,u,l,!0)||Tt(o,a,u,l,!1)}return o}}function Tt(e,t,n,i,r){if(s(t)){if(_(t,n))return e[n]=t[n],r||delete t[n],!0;if(_(t,i))return e[n]=t[i],r||delete t[i],!0}return!1}function kt(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function xt(e){return c(e)?[Se(e)]:Array.isArray(e)?At(e):void 0}function Ct(e){return s(e)&&s(e.text)&&a(e.isComment)}function At(e,t){var n,i,a,u,l=[];for(n=0;n<e.length;n++)i=e[n],r(i)||"boolean"===typeof i||(a=l.length-1,u=l[a],Array.isArray(i)?i.length>0&&(i=At(i,(t||"")+"_"+n),Ct(i[0])&&Ct(u)&&(l[a]=Se(u.text+i[0].text),i.shift()),l.push.apply(l,i)):c(i)?Ct(u)?l[a]=Se(u.text+i):""!==i&&l.push(Se(i)):Ct(i)&&Ct(u)?l[a]=Se(u.text+i.text):(o(e._isVList)&&s(i.tag)&&r(i.key)&&s(t)&&(i.key="__vlist"+t+"_"+n+"__"),l.push(i)));return l}function Ot(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function Dt(e){var t=Nt(e.$options.inject,e);t&&(Oe(!1),Object.keys(t).forEach((function(n){Le(e,n,t[n])})),Oe(!0))}function Nt(e,t){if(e){for(var n=Object.create(null),i=pe?Reflect.ownKeys(e):Object.keys(e),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=e[s].from,a=t;while(a){if(a._provided&&_(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in e[s]){var c=e[s].default;n[s]="function"===typeof c?c.call(t):c}else 0}}return n}}function $t(e,t){if(!e||!e.length)return{};for(var n={},i=0,r=e.length;i<r;i++){var s=e[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Pt)&&delete n[u];return n}function Pt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Lt(e){return e.isComment&&e.asyncFactory}function Rt(e,t,n){var r,s=Object.keys(t).length>0,o=e?!!e.$stable:!s,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(o&&n&&n!==i&&a===n.$key&&!s&&!n.$hasNormal)return n;for(var c in r={},e)e[c]&&"$"!==c[0]&&(r[c]=Mt(t,c,e[c]))}else r={};for(var u in t)u in r||(r[u]=Vt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=r),W(r,"$stable",o),W(r,"$key",a),W(r,"$hasNormal",s),r}function Mt(e,t,n){var i=function(){var e=arguments.length?n.apply(null,arguments):n({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:xt(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!Lt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:i,enumerable:!0,configurable:!0}),i}function Vt(e,t){return function(){return e[t]}}function Ft(e,t){var n,i,r,o,a;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),i=0,r=e.length;i<r;i++)n[i]=t(e[i],i);else if("number"===typeof e)for(n=new Array(e),i=0;i<e;i++)n[i]=t(i+1,i);else if(u(e))if(pe&&e[Symbol.iterator]){n=[];var c=e[Symbol.iterator](),l=c.next();while(!l.done)n.push(t(l.value,n.length)),l=c.next()}else for(o=Object.keys(e),n=new Array(o.length),i=0,r=o.length;i<r;i++)a=o[i],n[i]=t(e[a],a,i);return s(n)||(n=[]),n._isVList=!0,n}function Bt(e,t,n,i){var r,s=this.$scopedSlots[e];s?(n=n||{},i&&(n=N(N({},i),n)),r=s(n)||("function"===typeof t?t():t)):r=this.$slots[e]||("function"===typeof t?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function jt(e){return Ye(this.$options,"filters",e,!0)||R}function Ut(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function qt(e,t,n,i,r){var s=q.keyCodes[t]||n;return r&&i&&!q.keyCodes[t]?Ut(r,i):s?Ut(s,e):i?x(i)!==t:void 0===e}function zt(e,t,n,i,r){if(n)if(u(n)){var s;Array.isArray(n)&&(n=$(n));var o=function(o){if("class"===o||"style"===o||y(o))s=e;else{var a=e.attrs&&e.attrs.type;s=i||q.mustUseProp(t,a,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=E(o),u=x(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],r)){var l=e.on||(e.on={});l["update:"+o]=function(e){n[o]=e}}};for(var a in n)o(a)}else;return e}function Ht(e,t){var n=this._staticTrees||(this._staticTrees=[]),i=n[e];return i&&!t||(i=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Kt(i,"__static__"+e,!1)),i}function Wt(e,t,n){return Kt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Kt(e,t,n){if(Array.isArray(e))for(var i=0;i<e.length;i++)e[i]&&"string"!==typeof e[i]&&Gt(e[i],t+"_"+i,n);else Gt(e,t,n)}function Gt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Zt(e,t){if(t)if(h(t)){var n=e.on=e.on?N({},e.on):{};for(var i in t){var r=n[i],s=t[i];n[i]=r?[].concat(r,s):s}}else;return e}function Yt(e,t,n,i){t=t||{$stable:!n};for(var r=0;r<e.length;r++){var s=e[r];Array.isArray(s)?Yt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return i&&(t.$key=i),t}function Jt(e,t){for(var n=0;n<t.length;n+=2){var i=t[n];"string"===typeof i&&i&&(e[t[n]]=t[n+1])}return e}function Qt(e,t){return"string"===typeof e?t+e:e}function Xt(e){e._o=Wt,e._n=g,e._s=m,e._l=Ft,e._t=Bt,e._q=M,e._i=V,e._m=Ht,e._f=jt,e._k=qt,e._b=zt,e._v=Se,e._e=Ie,e._u=Yt,e._g=Zt,e._d=Jt,e._p=Qt}function en(e,t,n,r,s){var a,c=this,u=s.options;_(r,"_uid")?(a=Object.create(r),a._original=r):(a=r,r=r._original);var l=o(u._compiled),h=!l;this.data=e,this.props=t,this.children=n,this.parent=r,this.listeners=e.on||i,this.injections=Nt(u.inject,r),this.slots=function(){return c.$slots||Rt(e.scopedSlots,c.$slots=$t(n,r)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Rt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Rt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,i){var s=fn(a,e,t,n,i,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=r),s}:this._c=function(e,t,n,i){return fn(a,e,t,n,i,h)}}function tn(e,t,n,r,o){var a=e.options,c={},u=a.props;if(s(u))for(var l in u)c[l]=Je(l,u,t||i);else s(n.attrs)&&rn(c,n.attrs),s(n.props)&&rn(c,n.props);var h=new en(n,c,o,r,e),d=a.render.call(null,h._c,h);if(d instanceof we)return nn(d,n,h.parent,a,h);if(Array.isArray(d)){for(var p=xt(d)||[],f=new Array(p.length),m=0;m<p.length;m++)f[m]=nn(p[m],n,h.parent,a,h);return f}}function nn(e,t,n,i,r){var s=Ee(e);return s.fnContext=n,s.fnOptions=i,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function rn(e,t){for(var n in t)e[E(n)]=t[n]}Xt(en.prototype);var sn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;sn.prepatch(n,n)}else{var i=e.componentInstance=cn(e,Nn);i.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,i=t.componentInstance=e.componentInstance;Mn(i,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,jn(n,"mounted")),e.data.keepAlive&&(t._isMounted?ei(n):Fn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Bn(t,!0):t.$destroy())}},on=Object.keys(sn);function an(e,t,n,i,a){if(!r(e)){var c=n.$options._base;if(u(e)&&(e=c.extend(e)),"function"===typeof e){var l;if(r(e.cid)&&(l=e,e=En(l,c),void 0===e))return Sn(l,t,n,i,a);t=t||{},Si(e),s(t.model)&&hn(e.options,t);var h=Et(t,e,a);if(o(e.options.functional))return tn(e,h,t,n,i);var d=t.on;if(t.on=t.nativeOn,o(e.options.abstract)){var p=t.slot;t={},p&&(t.slot=p)}un(t);var f=e.options.name||a,m=new we("vue-component-"+e.cid+(f?"-"+f:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:h,listeners:d,tag:a,children:i},l);return m}}}function cn(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;return s(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new e.componentOptions.Ctor(n)}function un(e){for(var t=e.hook||(e.hook={}),n=0;n<on.length;n++){var i=on[n],r=t[i],s=sn[i];r===s||r&&r._merged||(t[i]=r?ln(s,r):s)}}function ln(e,t){var n=function(n,i){e(n,i),t(n,i)};return n._merged=!0,n}function hn(e,t){var n=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var r=t.on||(t.on={}),o=r[i],a=t.model.callback;s(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(r[i]=[a].concat(o)):r[i]=a}var dn=1,pn=2;function fn(e,t,n,i,r,s){return(Array.isArray(n)||c(n))&&(r=i,i=n,n=void 0),o(s)&&(r=pn),mn(e,t,n,i,r)}function mn(e,t,n,i,r){if(s(n)&&s(n.__ob__))return Ie();if(s(n)&&s(n.is)&&(t=n.is),!t)return Ie();var o,a,c;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),r===pn?i=xt(i):r===dn&&(i=kt(i)),"string"===typeof t)?(a=e.$vnode&&e.$vnode.ns||q.getTagNamespace(t),o=q.isReservedTag(t)?new we(q.parsePlatformTagName(t),n,i,void 0,void 0,e):n&&n.pre||!s(c=Ye(e.$options,"components",t))?new we(t,n,i,void 0,void 0,e):an(c,n,e,i,t)):o=an(t,n,e,i);return Array.isArray(o)?o:s(o)?(s(a)&&gn(o,a),s(n)&&vn(n),o):Ie()}function gn(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),s(e.children))for(var i=0,a=e.children.length;i<a;i++){var c=e.children[i];s(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&gn(c,t,n)}}function vn(e){u(e.style)&&yt(e.style),u(e.class)&&yt(e.class)}function yn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=$t(t._renderChildren,r),e.$scopedSlots=i,e._c=function(t,n,i,r){return fn(e,t,n,i,r,!1)},e.$createElement=function(t,n,i,r){return fn(e,t,n,i,r,!0)};var s=n&&n.data;Le(e,"$attrs",s&&s.attrs||i,null,!0),Le(e,"$listeners",t._parentListeners||i,null,!0)}var bn,wn=null;function _n(e){Xt(e.prototype),e.prototype.$nextTick=function(e){return gt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,i=n.render,r=n._parentVnode;r&&(t.$scopedSlots=Rt(r.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=r;try{wn=t,e=i.call(t._renderProxy,t.$createElement)}catch(To){it(To,t,"render"),e=t._vnode}finally{wn=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof we||(e=Ie()),e.parent=r,e}}function In(e,t){return(e.__esModule||pe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),u(e)?t.extend(e):e}function Sn(e,t,n,i,r){var s=Ie();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:i,tag:r},s}function En(e,t){if(o(e.error)&&s(e.errorComp))return e.errorComp;if(s(e.resolved))return e.resolved;var n=wn;if(n&&s(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),o(e.loading)&&s(e.loadingComp))return e.loadingComp;if(n&&!s(e.owners)){var i=e.owners=[n],a=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return b(i,n)}));var h=function(e){for(var t=0,n=i.length;t<n;t++)i[t].$forceUpdate();e&&(i.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},d=F((function(n){e.resolved=In(n,t),a?i.length=0:h(!0)})),p=F((function(t){s(e.errorComp)&&(e.error=!0,h(!0))})),m=e(d,p);return u(m)&&(f(m)?r(e.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),s(m.error)&&(e.errorComp=In(m.error,t)),s(m.loading)&&(e.loadingComp=In(m.loading,t),0===m.delay?e.loading=!0:c=setTimeout((function(){c=null,r(e.resolved)&&r(e.error)&&(e.loading=!0,h(!1))}),m.delay||200)),s(m.timeout)&&(l=setTimeout((function(){l=null,r(e.resolved)&&p(null)}),m.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}function Tn(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(s(n)&&(s(n.componentOptions)||Lt(n)))return n}}function kn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&On(e,t)}function xn(e,t){bn.$on(e,t)}function Cn(e,t){bn.$off(e,t)}function An(e,t){var n=bn;return function i(){var r=t.apply(null,arguments);null!==r&&n.$off(e,i)}}function On(e,t,n){bn=e,It(t,n||{},xn,Cn,An,e),bn=void 0}function Dn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var i=this;if(Array.isArray(e))for(var r=0,s=e.length;r<s;r++)i.$on(e[r],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){var n=this;function i(){n.$off(e,i),t.apply(n,arguments)}return i.fn=t,n.$on(e,i),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var i=0,r=e.length;i<r;i++)n.$off(e[i],t);return n}var s,o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;var a=o.length;while(a--)if(s=o[a],s===t||s.fn===t){o.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?D(n):n;for(var i=D(arguments,1),r='event handler for "'+e+'"',s=0,o=n.length;s<o;s++)rt(n[s],t,i,t,r)}return t}}var Nn=null;function $n(e){var t=Nn;return Nn=e,function(){Nn=t}}function Pn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Ln(e){e.prototype._update=function(e,t){var n=this,i=n.$el,r=n._vnode,s=$n(n);n._vnode=e,n.$el=r?n.__patch__(r,e):n.__patch__(n.$el,e,t,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){jn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||b(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),jn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Rn(e,t,n){var i;return e.$el=t,e.$options.render||(e.$options.render=Ie),jn(e,"beforeMount"),i=function(){e._update(e._render(),n)},new ri(e,i,P,{before:function(){e._isMounted&&!e._isDestroyed&&jn(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,jn(e,"mounted")),e}function Mn(e,t,n,r,s){var o=r.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==i&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),u=!!(s||e.$options._renderChildren||c);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=s,e.$attrs=r.data.attrs||i,e.$listeners=n||i,t&&e.$options.props){Oe(!1);for(var l=e._props,h=e.$options._propKeys||[],d=0;d<h.length;d++){var p=h[d],f=e.$options.props;l[p]=Je(p,f,t,e)}Oe(!0),e.$options.propsData=t}n=n||i;var m=e.$options._parentListeners;e.$options._parentListeners=n,On(e,n,m),u&&(e.$slots=$t(s,r.context),e.$forceUpdate())}function Vn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Fn(e,t){if(t){if(e._directInactive=!1,Vn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Fn(e.$children[n]);jn(e,"activated")}}function Bn(e,t){if((!t||(e._directInactive=!0,!Vn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Bn(e.$children[n]);jn(e,"deactivated")}}function jn(e,t){ye();var n=e.$options[t],i=t+" hook";if(n)for(var r=0,s=n.length;r<s;r++)rt(n[r],e,null,e,i);e._hasHookEvent&&e.$emit("hook:"+t),be()}var Un=[],qn=[],zn={},Hn=!1,Wn=!1,Kn=0;function Gn(){Kn=Un.length=qn.length=0,zn={},Hn=Wn=!1}var Zn=0,Yn=Date.now;if(J&&!te){var Jn=window.performance;Jn&&"function"===typeof Jn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Jn.now()})}function Qn(){var e,t;for(Zn=Yn(),Wn=!0,Un.sort((function(e,t){return e.id-t.id})),Kn=0;Kn<Un.length;Kn++)e=Un[Kn],e.before&&e.before(),t=e.id,zn[t]=null,e.run();var n=qn.slice(),i=Un.slice();Gn(),ti(n),Xn(i),le&&q.devtools&&le.emit("flush")}function Xn(e){var t=e.length;while(t--){var n=e[t],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&jn(i,"updated")}}function ei(e){e._inactive=!1,qn.push(e)}function ti(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Fn(e[t],!0)}function ni(e){var t=e.id;if(null==zn[t]){if(zn[t]=!0,Wn){var n=Un.length-1;while(n>Kn&&Un[n].id>e.id)n--;Un.splice(n+1,0,e)}else Un.push(e);Hn||(Hn=!0,gt(Qn))}}var ii=0,ri=function(e,t,n,i,r){this.vm=e,r&&(e._watcher=this),e._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ii,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new de,this.newDepIds=new de,this.expression="","function"===typeof t?this.getter=t:(this.getter=G(t),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};ri.prototype.get=function(){var e;ye(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(To){if(!this.user)throw To;it(To,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&yt(e),be(),this.cleanupDeps()}return e},ri.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ri.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ri.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ni(this)},ri.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';rt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},ri.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ri.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},ri.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||b(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var si={enumerable:!0,configurable:!0,get:P,set:P};function oi(e,t,n){si.get=function(){return this[t][n]},si.set=function(e){this[t][n]=e},Object.defineProperty(e,n,si)}function ai(e){e._watchers=[];var t=e.$options;t.props&&ci(e,t.props),t.methods&&gi(e,t.methods),t.data?ui(e):Pe(e._data={},!0),t.computed&&di(e,t.computed),t.watch&&t.watch!==oe&&vi(e,t.watch)}function ci(e,t){var n=e.$options.propsData||{},i=e._props={},r=e.$options._propKeys=[],s=!e.$parent;s||Oe(!1);var o=function(s){r.push(s);var o=Je(s,t,n,e);Le(i,s,o),s in e||oi(e,"_props",s)};for(var a in t)o(a);Oe(!0)}function ui(e){var t=e.$options.data;t=e._data="function"===typeof t?li(t,e):t||{},h(t)||(t={});var n=Object.keys(t),i=e.$options.props,r=(e.$options.methods,n.length);while(r--){var s=n[r];0,i&&_(i,s)||H(s)||oi(e,"_data",s)}Pe(t,!0)}function li(e,t){ye();try{return e.call(t,t)}catch(To){return it(To,t,"data()"),{}}finally{be()}}var hi={lazy:!0};function di(e,t){var n=e._computedWatchers=Object.create(null),i=ue();for(var r in t){var s=t[r],o="function"===typeof s?s:s.get;0,i||(n[r]=new ri(e,o||P,P,hi)),r in e||pi(e,r,s)}}function pi(e,t,n){var i=!ue();"function"===typeof n?(si.get=i?fi(t):mi(n),si.set=P):(si.get=n.get?i&&!1!==n.cache?fi(t):mi(n.get):P,si.set=n.set||P),Object.defineProperty(e,t,si)}function fi(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ge.target&&t.depend(),t.value}}function mi(e){return function(){return e.call(this,this)}}function gi(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?P:O(t[n],e)}function vi(e,t){for(var n in t){var i=t[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)yi(e,n,i[r]);else yi(e,n,i)}}function yi(e,t,n,i){return h(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,i)}function bi(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Re,e.prototype.$delete=Me,e.prototype.$watch=function(e,t,n){var i=this;if(h(t))return yi(i,e,t,n);n=n||{},n.user=!0;var r=new ri(i,e,t,n);if(n.immediate){var s='callback for immediate watcher "'+r.expression+'"';ye(),rt(t,i,[r.value],i,s),be()}return function(){r.teardown()}}}var wi=0;function _i(e){e.prototype._init=function(e){var t=this;t._uid=wi++,t._isVue=!0,e&&e._isComponent?Ii(t,e):t.$options=Ze(Si(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Pn(t),kn(t),yn(t),jn(t,"beforeCreate"),Dt(t),ai(t),Ot(t),jn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Ii(e,t){var n=e.$options=Object.create(e.constructor.options),i=t._parentVnode;n.parent=t.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Si(e){var t=e.options;if(e.super){var n=Si(e.super),i=e.superOptions;if(n!==i){e.superOptions=n;var r=Ei(e);r&&N(e.extendOptions,r),t=e.options=Ze(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Ei(e){var t,n=e.options,i=e.sealedOptions;for(var r in n)n[r]!==i[r]&&(t||(t={}),t[r]=n[r]);return t}function Ti(e){this._init(e)}function ki(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function xi(e){e.mixin=function(e){return this.options=Ze(this.options,e),this}}function Ci(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,i=n.cid,r=e._Ctor||(e._Ctor={});if(r[i])return r[i];var s=e.name||n.options.name;var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Ze(n.options,e),o["super"]=n,o.options.props&&Ai(o),o.options.computed&&Oi(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,j.forEach((function(e){o[e]=n[e]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=N({},o.options),r[i]=o,o}}function Ai(e){var t=e.options.props;for(var n in t)oi(e.prototype,"_props",n)}function Oi(e){var t=e.options.computed;for(var n in t)pi(e.prototype,n,t[n])}function Di(e){j.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&h(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Ni(e){return e&&(e.Ctor.options.name||e.tag)}function $i(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!d(e)&&e.test(t)}function Pi(e,t){var n=e.cache,i=e.keys,r=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&Li(n,s,i,r)}}}function Li(e,t,n,i){var r=e[t];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),e[t]=null,b(n,t)}_i(Ti),bi(Ti),Dn(Ti),Ln(Ti),_n(Ti);var Ri=[String,RegExp,Array],Mi={name:"keep-alive",abstract:!0,props:{include:Ri,exclude:Ri,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,i=e.vnodeToCache,r=e.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;t[r]={name:Ni(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&Li(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Li(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Pi(e,(function(e){return $i(t,e)}))})),this.$watch("exclude",(function(t){Pi(e,(function(e){return!$i(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=Tn(e),n=t&&t.componentOptions;if(n){var i=Ni(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!$i(s,i))||o&&i&&$i(o,i))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,b(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},Vi={KeepAlive:Mi};function Fi(e){var t={get:function(){return q}};Object.defineProperty(e,"config",t),e.util={warn:fe,extend:N,mergeOptions:Ze,defineReactive:Le},e.set=Re,e.delete=Me,e.nextTick=gt,e.observable=function(e){return Pe(e),e},e.options=Object.create(null),j.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,N(e.options.components,Vi),ki(e),xi(e),Ci(e),Di(e)}Fi(Ti),Object.defineProperty(Ti.prototype,"$isServer",{get:ue}),Object.defineProperty(Ti.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ti,"FunctionalRenderContext",{value:en}),Ti.version="2.6.14";var Bi=v("style,class"),ji=v("input,textarea,option,select,progress"),Ui=function(e,t,n){return"value"===n&&ji(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},qi=v("contenteditable,draggable,spellcheck"),zi=v("events,caret,typing,plaintext-only"),Hi=function(e,t){return Yi(t)||"false"===t?"false":"contenteditable"===e&&zi(t)?t:"true"},Wi=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Ki="http://www.w3.org/1999/xlink",Gi=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Zi=function(e){return Gi(e)?e.slice(6,e.length):""},Yi=function(e){return null==e||!1===e};function Ji(e){var t=e.data,n=e,i=e;while(s(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(t=Qi(i.data,t));while(s(n=n.parent))n&&n.data&&(t=Qi(t,n.data));return Xi(t.staticClass,t.class)}function Qi(e,t){return{staticClass:er(e.staticClass,t.staticClass),class:s(e.class)?[e.class,t.class]:t.class}}function Xi(e,t){return s(e)||s(t)?er(e,tr(t)):""}function er(e,t){return e?t?e+" "+t:e:t||""}function tr(e){return Array.isArray(e)?nr(e):u(e)?ir(e):"string"===typeof e?e:""}function nr(e){for(var t,n="",i=0,r=e.length;i<r;i++)s(t=tr(e[i]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function ir(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var rr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},sr=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),or=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ar=function(e){return sr(e)||or(e)};function cr(e){return or(e)?"svg":"math"===e?"math":void 0}var ur=Object.create(null);function lr(e){if(!J)return!0;if(ar(e))return!1;if(e=e.toLowerCase(),null!=ur[e])return ur[e];var t=document.createElement(e);return e.indexOf("-")>-1?ur[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ur[e]=/HTMLUnknownElement/.test(t.toString())}var hr=v("text,number,password,search,email,tel,url");function dr(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function pr(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fr(e,t){return document.createElementNS(rr[e],t)}function mr(e){return document.createTextNode(e)}function gr(e){return document.createComment(e)}function vr(e,t,n){e.insertBefore(t,n)}function yr(e,t){e.removeChild(t)}function br(e,t){e.appendChild(t)}function wr(e){return e.parentNode}function _r(e){return e.nextSibling}function Ir(e){return e.tagName}function Sr(e,t){e.textContent=t}function Er(e,t){e.setAttribute(t,"")}var Tr=Object.freeze({createElement:pr,createElementNS:fr,createTextNode:mr,createComment:gr,insertBefore:vr,removeChild:yr,appendChild:br,parentNode:wr,nextSibling:_r,tagName:Ir,setTextContent:Sr,setStyleScope:Er}),kr={create:function(e,t){xr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(xr(e,!0),xr(t))},destroy:function(e){xr(e,!0)}};function xr(e,t){var n=e.data.ref;if(s(n)){var i=e.context,r=e.componentInstance||e.elm,o=i.$refs;t?Array.isArray(o[n])?b(o[n],r):o[n]===r&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(r)<0&&o[n].push(r):o[n]=[r]:o[n]=r}}var Cr=new we("",{},[]),Ar=["create","activate","update","remove","destroy"];function Or(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&s(e.data)===s(t.data)&&Dr(e,t)||o(e.isAsyncPlaceholder)&&r(t.asyncFactory.error))}function Dr(e,t){if("input"!==e.tag)return!0;var n,i=s(n=e.data)&&s(n=n.attrs)&&n.type,r=s(n=t.data)&&s(n=n.attrs)&&n.type;return i===r||hr(i)&&hr(r)}function Nr(e,t,n){var i,r,o={};for(i=t;i<=n;++i)r=e[i].key,s(r)&&(o[r]=i);return o}function $r(e){var t,n,i={},a=e.modules,u=e.nodeOps;for(t=0;t<Ar.length;++t)for(i[Ar[t]]=[],n=0;n<a.length;++n)s(a[n][Ar[t]])&&i[Ar[t]].push(a[n][Ar[t]]);function l(e){return new we(u.tagName(e).toLowerCase(),{},[],void 0,e)}function h(e,t){function n(){0===--n.listeners&&d(e)}return n.listeners=t,n}function d(e){var t=u.parentNode(e);s(t)&&u.removeChild(t,e)}function p(e,t,n,i,r,a,c){if(s(e.elm)&&s(a)&&(e=a[c]=Ee(e)),e.isRootInsert=!r,!f(e,t,n,i)){var l=e.data,h=e.children,d=e.tag;s(d)?(e.elm=e.ns?u.createElementNS(e.ns,d):u.createElement(d,e),I(e),b(e,h,t),s(l)&&_(e,t),y(n,e.elm,i)):o(e.isComment)?(e.elm=u.createComment(e.text),y(n,e.elm,i)):(e.elm=u.createTextNode(e.text),y(n,e.elm,i))}}function f(e,t,n,i){var r=e.data;if(s(r)){var a=s(e.componentInstance)&&r.keepAlive;if(s(r=r.hook)&&s(r=r.init)&&r(e,!1),s(e.componentInstance))return m(e,t),y(n,e.elm,i),o(a)&&g(e,t,n,i),!0}}function m(e,t){s(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,w(e)?(_(e,t),I(e)):(xr(e),t.push(e))}function g(e,t,n,r){var o,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<i.activate.length;++o)i.activate[o](Cr,a);t.push(a);break}y(n,e.elm,r)}function y(e,t,n){s(e)&&(s(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function b(e,t,n){if(Array.isArray(t)){0;for(var i=0;i<t.length;++i)p(t[i],n,e.elm,null,!0,t,i)}else c(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function w(e){while(e.componentInstance)e=e.componentInstance._vnode;return s(e.tag)}function _(e,n){for(var r=0;r<i.create.length;++r)i.create[r](Cr,e);t=e.data.hook,s(t)&&(s(t.create)&&t.create(Cr,e),s(t.insert)&&n.push(e))}function I(e){var t;if(s(t=e.fnScopeId))u.setStyleScope(e.elm,t);else{var n=e;while(n)s(t=n.context)&&s(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent}s(t=Nn)&&t!==e.context&&t!==e.fnContext&&s(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function S(e,t,n,i,r,s){for(;i<=r;++i)p(n[i],s,e,t,!1,n,i)}function E(e){var t,n,r=e.data;if(s(r))for(s(t=r.hook)&&s(t=t.destroy)&&t(e),t=0;t<i.destroy.length;++t)i.destroy[t](e);if(s(t=e.children))for(n=0;n<e.children.length;++n)E(e.children[n])}function T(e,t,n){for(;t<=n;++t){var i=e[t];s(i)&&(s(i.tag)?(k(i),E(i)):d(i.elm))}}function k(e,t){if(s(t)||s(e.data)){var n,r=i.remove.length+1;for(s(t)?t.listeners+=r:t=h(e.elm,r),s(n=e.componentInstance)&&s(n=n._vnode)&&s(n.data)&&k(n,t),n=0;n<i.remove.length;++n)i.remove[n](e,t);s(n=e.data.hook)&&s(n=n.remove)?n(e,t):t()}else d(e.elm)}function x(e,t,n,i,o){var a,c,l,h,d=0,f=0,m=t.length-1,g=t[0],v=t[m],y=n.length-1,b=n[0],w=n[y],_=!o;while(d<=m&&f<=y)r(g)?g=t[++d]:r(v)?v=t[--m]:Or(g,b)?(A(g,b,i,n,f),g=t[++d],b=n[++f]):Or(v,w)?(A(v,w,i,n,y),v=t[--m],w=n[--y]):Or(g,w)?(A(g,w,i,n,y),_&&u.insertBefore(e,g.elm,u.nextSibling(v.elm)),g=t[++d],w=n[--y]):Or(v,b)?(A(v,b,i,n,f),_&&u.insertBefore(e,v.elm,g.elm),v=t[--m],b=n[++f]):(r(a)&&(a=Nr(t,d,m)),c=s(b.key)?a[b.key]:C(b,t,d,m),r(c)?p(b,i,e,g.elm,!1,n,f):(l=t[c],Or(l,b)?(A(l,b,i,n,f),t[c]=void 0,_&&u.insertBefore(e,l.elm,g.elm)):p(b,i,e,g.elm,!1,n,f)),b=n[++f]);d>m?(h=r(n[y+1])?null:n[y+1].elm,S(e,h,n,f,y,i)):f>y&&T(t,d,m)}function C(e,t,n,i){for(var r=n;r<i;r++){var o=t[r];if(s(o)&&Or(e,o))return r}}function A(e,t,n,a,c,l){if(e!==t){s(t.elm)&&s(a)&&(t=a[c]=Ee(t));var h=t.elm=e.elm;if(o(e.isAsyncPlaceholder))s(t.asyncFactory.resolved)?N(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(o(t.isStatic)&&o(e.isStatic)&&t.key===e.key&&(o(t.isCloned)||o(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,p=t.data;s(p)&&s(d=p.hook)&&s(d=d.prepatch)&&d(e,t);var f=e.children,m=t.children;if(s(p)&&w(t)){for(d=0;d<i.update.length;++d)i.update[d](e,t);s(d=p.hook)&&s(d=d.update)&&d(e,t)}r(t.text)?s(f)&&s(m)?f!==m&&x(h,f,m,n,l):s(m)?(s(e.text)&&u.setTextContent(h,""),S(h,null,m,0,m.length-1,n)):s(f)?T(f,0,f.length-1):s(e.text)&&u.setTextContent(h,""):e.text!==t.text&&u.setTextContent(h,t.text),s(p)&&s(d=p.hook)&&s(d=d.postpatch)&&d(e,t)}}}function O(e,t,n){if(o(n)&&s(e.parent))e.parent.data.pendingInsert=t;else for(var i=0;i<t.length;++i)t[i].data.hook.insert(t[i])}var D=v("attrs,class,staticClass,staticStyle,key");function N(e,t,n,i){var r,a=t.tag,c=t.data,u=t.children;if(i=i||c&&c.pre,t.elm=e,o(t.isComment)&&s(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(r=c.hook)&&s(r=r.init)&&r(t,!0),s(r=t.componentInstance)))return m(t,n),!0;if(s(a)){if(s(u))if(e.hasChildNodes())if(s(r=c)&&s(r=r.domProps)&&s(r=r.innerHTML)){if(r!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!N(h,u[d],n,i)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(t,u,n);if(s(c)){var p=!1;for(var f in c)if(!D(f)){p=!0,_(t,n);break}!p&&c["class"]&&yt(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,a){if(!r(t)){var c=!1,h=[];if(r(e))c=!0,p(t,h);else{var d=s(e.nodeType);if(!d&&Or(e,t))A(e,t,h,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(B)&&(e.removeAttribute(B),n=!0),o(n)&&N(e,t,h))return O(t,h,!0),e;e=l(e)}var f=e.elm,m=u.parentNode(f);if(p(t,h,f._leaveCb?null:m,u.nextSibling(f)),s(t.parent)){var g=t.parent,v=w(t);while(g){for(var y=0;y<i.destroy.length;++y)i.destroy[y](g);if(g.elm=t.elm,v){for(var b=0;b<i.create.length;++b)i.create[b](Cr,g);var _=g.data.hook.insert;if(_.merged)for(var I=1;I<_.fns.length;I++)_.fns[I]()}else xr(g);g=g.parent}}s(m)?T([e],0,0):s(e.tag)&&E(e)}}return O(t,h,c),t.elm}s(e)&&E(e)}}var Pr={create:Lr,update:Lr,destroy:function(e){Lr(e,Cr)}};function Lr(e,t){(e.data.directives||t.data.directives)&&Rr(e,t)}function Rr(e,t){var n,i,r,s=e===Cr,o=t===Cr,a=Vr(e.data.directives,e.context),c=Vr(t.data.directives,t.context),u=[],l=[];for(n in c)i=a[n],r=c[n],i?(r.oldValue=i.value,r.oldArg=i.arg,Br(r,"update",t,e),r.def&&r.def.componentUpdated&&l.push(r)):(Br(r,"bind",t,e),r.def&&r.def.inserted&&u.push(r));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Br(u[n],"inserted",t,e)};s?St(t,"insert",h):h()}if(l.length&&St(t,"postpatch",(function(){for(var n=0;n<l.length;n++)Br(l[n],"componentUpdated",t,e)})),!s)for(n in a)c[n]||Br(a[n],"unbind",e,e,o)}var Mr=Object.create(null);function Vr(e,t){var n,i,r=Object.create(null);if(!e)return r;for(n=0;n<e.length;n++)i=e[n],i.modifiers||(i.modifiers=Mr),r[Fr(i)]=i,i.def=Ye(t.$options,"directives",i.name,!0);return r}function Fr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Br(e,t,n,i,r){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,i,r)}catch(To){it(To,n.context,"directive "+e.name+" "+t+" hook")}}var jr=[kr,Pr];function Ur(e,t){var n=t.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(e.data.attrs)||!r(t.data.attrs))){var i,o,a,c=t.elm,u=e.data.attrs||{},l=t.data.attrs||{};for(i in s(l.__ob__)&&(l=t.data.attrs=N({},l)),l)o=l[i],a=u[i],a!==o&&qr(c,i,o,t.data.pre);for(i in(te||ie)&&l.value!==u.value&&qr(c,"value",l.value),u)r(l[i])&&(Gi(i)?c.removeAttributeNS(Ki,Zi(i)):qi(i)||c.removeAttribute(i))}}function qr(e,t,n,i){i||e.tagName.indexOf("-")>-1?zr(e,t,n):Wi(t)?Yi(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):qi(t)?e.setAttribute(t,Hi(t,n)):Gi(t)?Yi(n)?e.removeAttributeNS(Ki,Zi(t)):e.setAttributeNS(Ki,t,n):zr(e,t,n)}function zr(e,t,n){if(Yi(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var i=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",i)};e.addEventListener("input",i),e.__ieph=!0}e.setAttribute(t,n)}}var Hr={create:Ur,update:Ur};function Wr(e,t){var n=t.elm,i=t.data,o=e.data;if(!(r(i.staticClass)&&r(i.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=Ji(t),c=n._transitionClasses;s(c)&&(a=er(a,tr(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Kr,Gr={create:Wr,update:Wr},Zr="__r",Yr="__c";function Jr(e){if(s(e[Zr])){var t=te?"change":"input";e[t]=[].concat(e[Zr],e[t]||[]),delete e[Zr]}s(e[Yr])&&(e.change=[].concat(e[Yr],e.change||[]),delete e[Yr])}function Qr(e,t,n){var i=Kr;return function r(){var s=t.apply(null,arguments);null!==s&&ts(e,r,n,i)}}var Xr=ct&&!(se&&Number(se[1])<=53);function es(e,t,n,i){if(Xr){var r=Zn,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=r||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}Kr.addEventListener(e,t,ae?{capture:n,passive:i}:n)}function ts(e,t,n,i){(i||Kr).removeEventListener(e,t._wrapper||t,n)}function ns(e,t){if(!r(e.data.on)||!r(t.data.on)){var n=t.data.on||{},i=e.data.on||{};Kr=t.elm,Jr(n),It(n,i,es,ts,Qr,t.context),Kr=void 0}}var is,rs={create:ns,update:ns};function ss(e,t){if(!r(e.data.domProps)||!r(t.data.domProps)){var n,i,o=t.elm,a=e.data.domProps||{},c=t.data.domProps||{};for(n in s(c.__ob__)&&(c=t.data.domProps=N({},c)),a)n in c||(o[n]="");for(n in c){if(i=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),i===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=i;var u=r(i)?"":String(i);os(o,u)&&(o.value=u)}else if("innerHTML"===n&&or(o.tagName)&&r(o.innerHTML)){is=is||document.createElement("div"),is.innerHTML="<svg>"+i+"</svg>";var l=is.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(i!==a[n])try{o[n]=i}catch(To){}}}}function os(e,t){return!e.composing&&("OPTION"===e.tagName||as(e,t)||cs(e,t))}function as(e,t){var n=!0;try{n=document.activeElement!==e}catch(To){}return n&&e.value!==t}function cs(e,t){var n=e.value,i=e._vModifiers;if(s(i)){if(i.number)return g(n)!==g(t);if(i.trim)return n.trim()!==t.trim()}return n!==t}var us={create:ss,update:ss},ls=I((function(e){var t={},n=/;(?![^(]*\))/g,i=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function hs(e){var t=ds(e.style);return e.staticStyle?N(e.staticStyle,t):t}function ds(e){return Array.isArray(e)?$(e):"string"===typeof e?ls(e):e}function ps(e,t){var n,i={};if(t){var r=e;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=hs(r.data))&&N(i,n)}(n=hs(e.data))&&N(i,n);var s=e;while(s=s.parent)s.data&&(n=hs(s.data))&&N(i,n);return i}var fs,ms=/^--/,gs=/\s*!important$/,vs=function(e,t,n){if(ms.test(t))e.style.setProperty(t,n);else if(gs.test(n))e.style.setProperty(x(t),n.replace(gs,""),"important");else{var i=bs(t);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)e.style[i]=n[r];else e.style[i]=n}},ys=["Webkit","Moz","ms"],bs=I((function(e){if(fs=fs||document.createElement("div").style,e=E(e),"filter"!==e&&e in fs)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<ys.length;n++){var i=ys[n]+t;if(i in fs)return i}}));function ws(e,t){var n=t.data,i=e.data;if(!(r(n.staticStyle)&&r(n.style)&&r(i.staticStyle)&&r(i.style))){var o,a,c=t.elm,u=i.staticStyle,l=i.normalizedStyle||i.style||{},h=u||l,d=ds(t.data.style)||{};t.data.normalizedStyle=s(d.__ob__)?N({},d):d;var p=ps(t,!0);for(a in h)r(p[a])&&vs(c,a,"");for(a in p)o=p[a],o!==h[a]&&vs(c,a,null==o?"":o)}}var _s={create:ws,update:ws},Is=/\s+/;function Ss(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Is).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Es(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Is).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",i=" "+t+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Ts(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&N(t,ks(e.name||"v")),N(t,e),t}return"string"===typeof e?ks(e):void 0}}var ks=I((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),xs=J&&!ne,Cs="transition",As="animation",Os="transition",Ds="transitionend",Ns="animation",$s="animationend";xs&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Os="WebkitTransition",Ds="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ns="WebkitAnimation",$s="webkitAnimationEnd"));var Ps=J?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Ls(e){Ps((function(){Ps(e)}))}function Rs(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Ss(e,t))}function Ms(e,t){e._transitionClasses&&b(e._transitionClasses,t),Es(e,t)}function Vs(e,t,n){var i=Bs(e,t),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===Cs?Ds:$s,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),e.addEventListener(a,l)}var Fs=/\b(transform|all)(,|$)/;function Bs(e,t){var n,i=window.getComputedStyle(e),r=(i[Os+"Delay"]||"").split(", "),s=(i[Os+"Duration"]||"").split(", "),o=js(r,s),a=(i[Ns+"Delay"]||"").split(", "),c=(i[Ns+"Duration"]||"").split(", "),u=js(a,c),l=0,h=0;t===Cs?o>0&&(n=Cs,l=o,h=s.length):t===As?u>0&&(n=As,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?Cs:As:null,h=n?n===Cs?s.length:c.length:0);var d=n===Cs&&Fs.test(i[Os+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function js(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return Us(t)+Us(e[n])})))}function Us(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function qs(e,t){var n=e.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Ts(e.data.transition);if(!r(i)&&!s(n._enterCb)&&1===n.nodeType){var o=i.css,a=i.type,c=i.enterClass,l=i.enterToClass,h=i.enterActiveClass,d=i.appearClass,p=i.appearToClass,f=i.appearActiveClass,m=i.beforeEnter,v=i.enter,y=i.afterEnter,b=i.enterCancelled,w=i.beforeAppear,_=i.appear,I=i.afterAppear,S=i.appearCancelled,E=i.duration,T=Nn,k=Nn.$vnode;while(k&&k.parent)T=k.context,k=k.parent;var x=!T._isMounted||!e.isRootInsert;if(!x||_||""===_){var C=x&&d?d:c,A=x&&f?f:h,O=x&&p?p:l,D=x&&w||m,N=x&&"function"===typeof _?_:v,$=x&&I||y,P=x&&S||b,L=g(u(E)?E.enter:E);0;var R=!1!==o&&!ne,M=Ws(N),V=n._enterCb=F((function(){R&&(Ms(n,O),Ms(n,A)),V.cancelled?(R&&Ms(n,C),P&&P(n)):$&&$(n),n._enterCb=null}));e.data.show||St(e,"insert",(function(){var t=n.parentNode,i=t&&t._pending&&t._pending[e.key];i&&i.tag===e.tag&&i.elm._leaveCb&&i.elm._leaveCb(),N&&N(n,V)})),D&&D(n),R&&(Rs(n,C),Rs(n,A),Ls((function(){Ms(n,C),V.cancelled||(Rs(n,O),M||(Hs(L)?setTimeout(V,L):Vs(n,a,V)))}))),e.data.show&&(t&&t(),N&&N(n,V)),R||M||V()}}}function zs(e,t){var n=e.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Ts(e.data.transition);if(r(i)||1!==n.nodeType)return t();if(!s(n._leaveCb)){var o=i.css,a=i.type,c=i.leaveClass,l=i.leaveToClass,h=i.leaveActiveClass,d=i.beforeLeave,p=i.leave,f=i.afterLeave,m=i.leaveCancelled,v=i.delayLeave,y=i.duration,b=!1!==o&&!ne,w=Ws(p),_=g(u(y)?y.leave:y);0;var I=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),b&&(Ms(n,l),Ms(n,h)),I.cancelled?(b&&Ms(n,c),m&&m(n)):(t(),f&&f(n)),n._leaveCb=null}));v?v(S):S()}function S(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),b&&(Rs(n,c),Rs(n,h),Ls((function(){Ms(n,c),I.cancelled||(Rs(n,l),w||(Hs(_)?setTimeout(I,_):Vs(n,a,I)))}))),p&&p(n,I),b||w||I())}}function Hs(e){return"number"===typeof e&&!isNaN(e)}function Ws(e){if(r(e))return!1;var t=e.fns;return s(t)?Ws(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Ks(e,t){!0!==t.data.show&&qs(t)}var Gs=J?{create:Ks,activate:Ks,remove:function(e,t){!0!==e.data.show?zs(e,t):t()}}:{},Zs=[Hr,Gr,rs,us,_s,Gs],Ys=Zs.concat(jr),Js=$r({nodeOps:Tr,modules:Ys});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&so(e,"input")}));var Qs={inserted:function(e,t,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?St(n,"postpatch",(function(){Qs.componentUpdated(e,t,n)})):Xs(e,t,n.context),e._vOptions=[].map.call(e.options,no)):("textarea"===n.tag||hr(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",io),e.addEventListener("compositionend",ro),e.addEventListener("change",ro),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Xs(e,t,n.context);var i=e._vOptions,r=e._vOptions=[].map.call(e.options,no);if(r.some((function(e,t){return!M(e,i[t])}))){var s=e.multiple?t.value.some((function(e){return to(e,r)})):t.value!==t.oldValue&&to(t.value,r);s&&so(e,"change")}}}};function Xs(e,t,n){eo(e,t,n),(te||ie)&&setTimeout((function(){eo(e,t,n)}),0)}function eo(e,t,n){var i=t.value,r=e.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],r)s=V(i,no(o))>-1,o.selected!==s&&(o.selected=s);else if(M(no(o),i))return void(e.selectedIndex!==a&&(e.selectedIndex=a));r||(e.selectedIndex=-1)}}function to(e,t){return t.every((function(t){return!M(t,e)}))}function no(e){return"_value"in e?e._value:e.value}function io(e){e.target.composing=!0}function ro(e){e.target.composing&&(e.target.composing=!1,so(e.target,"input"))}function so(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function oo(e){return!e.componentInstance||e.data&&e.data.transition?e:oo(e.componentInstance._vnode)}var ao={bind:function(e,t,n){var i=t.value;n=oo(n);var r=n.data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;i&&r?(n.data.show=!0,qs(n,(function(){e.style.display=s}))):e.style.display=i?s:"none"},update:function(e,t,n){var i=t.value,r=t.oldValue;if(!i!==!r){n=oo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?qs(n,(function(){e.style.display=e.__vOriginalDisplay})):zs(n,(function(){e.style.display="none"}))):e.style.display=i?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,i,r){r||(e.style.display=e.__vOriginalDisplay)}},co={model:Qs,show:ao},uo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function lo(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?lo(Tn(t.children)):e}function ho(e){var t={},n=e.$options;for(var i in n.propsData)t[i]=e[i];var r=n._parentListeners;for(var s in r)t[E(s)]=r[s];return t}function po(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function fo(e){while(e=e.parent)if(e.data.transition)return!0}function mo(e,t){return t.key===e.key&&t.tag===e.tag}var go=function(e){return e.tag||Lt(e)},vo=function(e){return"show"===e.name},yo={name:"transition",props:uo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(go),n.length)){0;var i=this.mode;0;var r=n[0];if(fo(this.$vnode))return r;var s=lo(r);if(!s)return r;if(this._leaving)return po(e,r);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:c(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=ho(this),u=this._vnode,l=lo(u);if(s.data.directives&&s.data.directives.some(vo)&&(s.data.show=!0),l&&l.data&&!mo(s,l)&&!Lt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=N({},a);if("out-in"===i)return this._leaving=!0,St(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),po(e,r);if("in-out"===i){if(Lt(s))return u;var d,p=function(){d()};St(a,"afterEnter",p),St(a,"enterCancelled",p),St(h,"delayLeave",(function(e){d=e}))}}return r}}},bo=N({tag:String,moveClass:String},uo);delete bo.mode;var wo={props:bo,beforeMount:function(){var e=this,t=this._update;this._update=function(n,i){var r=$n(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,r(),t.call(e,n,i)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=ho(this),a=0;a<r.length;a++){var c=r[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(i){for(var u=[],l=[],h=0;h<i.length;h++){var d=i[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(_o),e.forEach(Io),e.forEach(So),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,i=n.style;Rs(n,t),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(Ds,n._moveCb=function e(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(Ds,e),n._moveCb=null,Ms(n,t))})}})))},methods:{hasMove:function(e,t){if(!xs)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Es(n,e)})),Ss(n,t),n.style.display="none",this.$el.appendChild(n);var i=Bs(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function _o(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Io(e){e.data.newPos=e.elm.getBoundingClientRect()}function So(e){var t=e.data.pos,n=e.data.newPos,i=t.left-n.left,r=t.top-n.top;if(i||r){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate("+i+"px,"+r+"px)",s.transitionDuration="0s"}}var Eo={Transition:yo,TransitionGroup:wo};Ti.config.mustUseProp=Ui,Ti.config.isReservedTag=ar,Ti.config.isReservedAttr=Bi,Ti.config.getTagNamespace=cr,Ti.config.isUnknownElement=lr,N(Ti.options.directives,co),N(Ti.options.components,Eo),Ti.prototype.__patch__=J?Js:P,Ti.prototype.$mount=function(e,t){return e=e&&J?dr(e):void 0,Rn(this,e,t)},J&&setTimeout((function(){q.devtools&&le&&le.emit("init",Ti)}),0),t["Z"]=Ti},6497:function(e,t,n){"use strict";
/*!
  * vuefire v2.2.5
  * (c) 2020 Eduardo San Martin Morote
  * @license MIT
  */
function i(e,t){return t.split(".").reduce((function(e,t){return e[t]}),e)}function r(e,t,n){var i=(""+t).split("."),r=i.pop(),s=i.reduce((function(e,t){return e[t]}),e);return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function s(e){return e&&"object"===typeof e}function o(e){return e.toDate}function a(e){return e&&e.onSnapshot}function c(e,t){var n=!1;return function(){if(!n)return n=!0,e(t())}}function u(e){var t=e.val(),n=s(t)?t:Object.defineProperty({},".value",{value:t});return Object.defineProperty(n,".key",{value:e.key}),n}n.d(t,{S:function(){return S}});var l={reset:!0,serialize:u,wait:!1};function h(e){return Object.defineProperty(e.data()||{},"id",{value:e.id})}function d(e,t,n){var i=[{},{}],r=Object.keys(n).reduce((function(e,t){var i=n[t];return e[i.path]=i.data(),e}),{});function c(e,t,n,i){t=t||{};var u=i[0],l=i[1];for(var h in Object.getOwnPropertyNames(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);n&&!n.enumerable&&Object.defineProperty(u,t,n)})),e){var d=e[h];if(null==d||d instanceof Date||o(d)||d.longitude&&d.latitude)u[h]=d;else if(a(d))u[h]="object"===typeof t&&h in t&&"string"!=typeof t[h]?t[h]:d.path,l[n+h]=d;else if(Array.isArray(d)){u[h]=Array(d.length);for(var p=0;p<d.length;p++){var f=d[p];f&&f.path in r&&(u[h][p]=r[f.path])}c(d,t[h]||u[h],n+h+".",[u[h],l])}else s(d)?(u[h]={},c(d,t[h],n+h+".",[u[h],l])):u[h]=d}}return c(e,t,"",i),i}var p={maxRefDepth:2,reset:!0,serialize:h,wait:!1};function f(e){for(var t in e)e[t].unsub()}function m(e,t,n,r,s,o,a,c){var u=d(e.serialize(r),i(t,n),s),l=u[0],h=u[1];o.set(t,n,l),v(e,t,n,s,h,o,a,c)}function g(e,t){var n=e.ref,i=e.target,r=e.path,s=e.depth,o=e.resolve,a=e.ops,c=Object.create(null),u=n.onSnapshot((function(e){e.exists?m(t,i,r,e,c,a,s,o):(a.set(i,r,null),o())}));return function(){u(),f(c)}}function v(e,t,n,r,s,o,a,c){var u=Object.keys(s),l=Object.keys(r).filter((function(e){return u.indexOf(e)<0}));if(l.forEach((function(e){r[e].unsub(),delete r[e]})),!u.length||++a>e.maxRefDepth)return c(n);var h=0,d=u.length,p=Object.create(null);function f(e){e in p&&++h>=d&&c(n)}u.forEach((function(c){var u=r[c],l=s[c],h=n+"."+c;if(p[h]=!0,u){if(u.path===l.path)return;u.unsub()}r[c]={data:function(){return i(t,h)},unsub:g({ref:l,target:t,path:h,depth:a,ops:o,resolve:f.bind(null,h)},e),path:l.path}}))}function y(e,t){var n=e.vm,i=e.key,r=e.collection,s=e.ops,o=e.resolve,a=e.reject;void 0===t&&(t=p);var c,u=Object.assign({},p,t),l=u.wait?[]:s.set(n,i,[]),h=o,m=[],g={added:function(e){var t=e.newIndex,n=e.doc;m.splice(t,0,Object.create(null));var i=m[t],r=d(u.serialize(n),void 0,i),a=r[0],c=r[1];s.add(l,t,a),v(u,l,t,i,c,s,0,o.bind(null,n))},modified:function(e){var t=e.oldIndex,n=e.newIndex,i=e.doc,r=m[t],a=l[t],c=d(u.serialize(i),a,r),h=c[0],p=c[1];m.splice(n,0,r),s.remove(l,t),s.add(l,n,h),v(u,l,n,r,p,s,0,o)},removed:function(e){var t=e.oldIndex;s.remove(l,t),f(m.splice(t,1)[0])}},y=r.onSnapshot((function(e){var t="function"===typeof e.docChanges?e.docChanges():e.docChanges;if(!c&&t.length){c=!0;for(var r=0,a=t.length,d=Object.create(null),p=0;p<a;p++)d[t[p].doc.id]=!0;o=function(e){var t=e.id;t in d&&++r>=a&&(u.wait&&s.set(n,i,l),h(n[i]),o=function(){})}}t.forEach((function(e){g[e.type](e)})),t.length||(u.wait&&s.set(n,i,l),o(l))}),a);return function(e){if(y(),!1!==e){var t="function"===typeof e?e():[];s.set(n,i,t)}m.forEach(f)}}function b(e,t){var n=e.vm,r=e.key,s=e.document,o=e.resolve,a=e.reject,u=e.ops;void 0===t&&(t=p);var l=Object.assign({},p,t),h=Object.create(null);o=c(o,(function(){return i(n,r)}));var d=s.onSnapshot((function(e){e.exists?m(l,n,r,e,h,u,0,o):(u.set(n,r,null),o(null))}),a);return function(e){if(d(),!1!==e){var t="function"===typeof e?e():null;u.set(n,r,t)}f(h)}}l.serialize,l.reset,l.wait;var w={set:function(e,t,n){return r(e,t,n)},add:function(e,t,n){return e.splice(t,0,n)},remove:function(e,t){return e.splice(t,1)}};function _(e,t,n,i,r){return new Promise((function(s,o){var a;a="where"in n?y({vm:e,key:t,ops:i,collection:n,resolve:s,reject:o},r):b({vm:e,key:t,ops:i,document:n,resolve:s,reject:o},r),e._firestoreUnbinds[t]=a}))}var I={bindName:"$bind",unbindName:"$unbind",serialize:p.serialize,reset:p.reset,wait:p.wait},S=function(e,t){void 0===t&&(t=I);var n=e.config.optionMergeStrategies;n.firestore=n.provide;var i=Object.assign({},I,t),r=i.bindName,s=i.unbindName;e.prototype[s]=function(e,t){this._firestoreUnbinds[e](t),delete this._firestoreUnbinds[e],delete this.$firestoreRefs[e]},e.prototype[r]=function(e,t,n){var r=Object.assign({},i,n);this._firestoreUnbinds[e]&&this[s](e,r.wait?"function"===typeof r.reset&&r.reset:r.reset);var o=_(this,e,t,w,r);return this.$firestoreRefs[e]=t,o},e.mixin({beforeCreate:function(){this._firestoreUnbinds=Object.create(null),this.$firestoreRefs=Object.create(null)},created:function(){var e=this.$options.firestore,t="function"===typeof e?e.call(this):e;if(t)for(var n in t)this[r](n,t[n],i)},beforeDestroy:function(){for(var e in this._firestoreUnbinds)this._firestoreUnbinds[e]();this._firestoreUnbinds=null,this.$firestoreRefs=null}})}},3453:function(e){e.exports=function(e,t){var n="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var i in"function"===typeof e.exports&&(n.components=e.exports.options.components),n.components=n.components||{},t)n.components[i]=n.components[i]||t[i]}},8180:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var i=n(4444),r=n(8463),s=n(2238),o=n(3333);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new r.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new i.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:r,useAsService:h,modularAPIs:s}};function r(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,i.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(r,o={}){const a=s.initializeApp(r,o);if((0,i.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const r=t.name,a=r.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:r});return e[a]()};void 0!==t.serviceProps&&(0,i.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,i.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:i.ne,ErrorFactory:i.LL,deepExtend:i.ZB}),e}const d=h(),p=new o.Yd("@firebase/app-compat"),f="@firebase/app-compat",m="0.1.21";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(f,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,i.jU)()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},2238:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return Z},_DEFAULT_ENTRY_NAME:function(){return R},_addComponent:function(){return B},_addOrOverwriteComponent:function(){return j},_apps:function(){return V},_clearComponents:function(){return H},_components:function(){return F},_getProvider:function(){return q},_registerComponent:function(){return U},_removeServiceInstance:function(){return z},deleteApp:function(){return X},getApp:function(){return J},getApps:function(){return Q},initializeApp:function(){return Y},onLog:function(){return te},registerVersion:function(){return ee},setLogLevel:function(){return ne}});var i=n(8463),r=n(3333),s=n(4444);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.20",l=new r.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",p="@firebase/analytics",f="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",I="@firebase/installations",S="@firebase/installations-compat",E="@firebase/messaging",T="@firebase/messaging-compat",k="@firebase/performance",x="@firebase/performance-compat",C="@firebase/remote-config",A="@firebase/remote-config-compat",O="@firebase/storage",D="@firebase/storage-compat",N="@firebase/firestore",$="@firebase/firestore-compat",P="firebase",L="9.6.10",R="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[p]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[f]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[I]:"fire-iid",[S]:"fire-iid-compat",[E]:"fire-fcm",[T]:"fire-fcm-compat",[k]:"fire-perf",[x]:"fire-perf-compat",[C]:"fire-rc",[A]:"fire-rc-compat",[O]:"fire-gcs",[D]:"fire-gcs-compat",[N]:"fire-fst",[$]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},V=new Map,F=new Map;function B(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function j(e,t){e.container.addOrOverwriteComponent(t)}function U(e){const t=e.name;if(F.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;F.set(t,e);for(const n of V.values())B(n,e);return!0}function q(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function z(e,t,n=R){q(e,t).clearInstance(n)}function H(){F.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},K=new s.LL("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=L;function Y(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:R,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw K.create("bad-app-name",{appName:String(r)});const o=V.get(r);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw K.create("duplicate-app",{appName:r})}const a=new i.H0(r);for(const i of F.values())a.addComponent(i);const c=new G(e,n,a);return V.set(r,c),c}function J(e=R){const t=V.get(e);if(!t)throw K.create("no-app",{appName:e});return t}function Q(){return Array.from(V.values())}async function X(e){const t=e.name;V.has(t)&&(V.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ee(e,t,n){var r;let s=null!==(r=M[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}U(new i.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw K.create("invalid-log-argument");(0,r.Am)(e,t)}function ne(e){(0,r.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="firebase-heartbeat-database",re=1,se="firebase-heartbeat-store";let oe=null;function ae(){return oe||(oe=(0,s.X3)(ie,re,((e,t)=>{switch(t){case 0:e.createObjectStore(se)}})).catch((e=>{throw K.create("storage-open",{originalErrorMessage:e.message})}))),oe}async function ce(e){try{const t=await ae();return t.transaction(se).objectStore(se).get(le(e))}catch(t){throw K.create("storage-get",{originalErrorMessage:t.message})}}async function ue(e,t){try{const n=await ae(),i=n.transaction(se,"readwrite"),r=i.objectStore(se);return await r.put(t,le(e)),i.complete}catch(n){throw K.create("storage-set",{originalErrorMessage:n.message})}}function le(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=1024,de=2592e6;class pe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ge(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=de})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=fe(),{heartbeatsToSend:t,unsentEntries:n}=me(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fe(){const e=new Date;return e.toISOString().substring(0,10)}function me(e,t=he){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),ve(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ve(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ge{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ce(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ve(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){U(new i.wA("platform-logger",(e=>new o(e)),"PRIVATE")),U(new i.wA("heartbeat",(e=>new pe(e)),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}ye("")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return r}});var i=n(4444);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return r}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function l(e){i.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}},3796:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=chunk-vendors.faa950dc.js.map