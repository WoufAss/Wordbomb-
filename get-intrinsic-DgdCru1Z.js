import{e as r,_ as t,r as e,a as o,s as n,t as a,u as y}from"./es-errors-Bza6HHKb.js";import{h as p}from"./has-symbols-BjfDv0FJ.js";import{h as i}from"./has-proto-DxUgyt-t.js";import{f}from"./function-bind-Ckw9YnhN.js";import{h as s}from"./hasown-DTGZhiFA.js";var c,l=r,u=t,A=e,d=o,P=n,g=a,m=y,S=Function,h=function(r){try{return S('"use strict"; return ('+r+").constructor;")()}catch(t){}},I=Object.getOwnPropertyDescriptor;if(I)try{I({},"")}catch(q){I=null}var F=function(){throw new g},b=I?function(){try{return F}catch(r){try{return I(arguments,"callee").get}catch(t){return F}}}():F,E=p(),U=i(),v=Object.getPrototypeOf||(U?function(r){return r.__proto__}:null),w={},R="undefined"!=typeof Uint8Array&&v?v(Uint8Array):c,B={__proto__:null,"%AggregateError%":"undefined"==typeof AggregateError?c:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?c:ArrayBuffer,"%ArrayIteratorPrototype%":E&&v?v([][Symbol.iterator]()):c,"%AsyncFromSyncIteratorPrototype%":c,"%AsyncFunction%":w,"%AsyncGenerator%":w,"%AsyncGeneratorFunction%":w,"%AsyncIteratorPrototype%":w,"%Atomics%":"undefined"==typeof Atomics?c:Atomics,"%BigInt%":"undefined"==typeof BigInt?c:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?c:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?c:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?c:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":l,"%eval%":eval,"%EvalError%":u,"%Float32Array%":"undefined"==typeof Float32Array?c:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?c:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?c:FinalizationRegistry,"%Function%":S,"%GeneratorFunction%":w,"%Int8Array%":"undefined"==typeof Int8Array?c:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?c:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?c:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":E&&v?v(v([][Symbol.iterator]())):c,"%JSON%":"object"==typeof JSON?JSON:c,"%Map%":"undefined"==typeof Map?c:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&E&&v?v((new Map)[Symbol.iterator]()):c,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?c:Promise,"%Proxy%":"undefined"==typeof Proxy?c:Proxy,"%RangeError%":A,"%ReferenceError%":d,"%Reflect%":"undefined"==typeof Reflect?c:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?c:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&E&&v?v((new Set)[Symbol.iterator]()):c,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?c:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":E&&v?v(""[Symbol.iterator]()):c,"%Symbol%":E?Symbol:c,"%SyntaxError%":P,"%ThrowTypeError%":b,"%TypedArray%":R,"%TypeError%":g,"%Uint8Array%":"undefined"==typeof Uint8Array?c:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?c:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?c:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?c:Uint32Array,"%URIError%":m,"%WeakMap%":"undefined"==typeof WeakMap?c:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?c:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?c:WeakSet};if(v)try{null.error}catch(q){var _=v(v(q));B["%Error.prototype%"]=_}var O=function r(t){var e;if("%AsyncFunction%"===t)e=h("async function () {}");else if("%GeneratorFunction%"===t)e=h("function* () {}");else if("%AsyncGeneratorFunction%"===t)e=h("async function* () {}");else if("%AsyncGenerator%"===t){var o=r("%AsyncGeneratorFunction%");o&&(e=o.prototype)}else if("%AsyncIteratorPrototype%"===t){var n=r("%AsyncGenerator%");n&&v&&(e=v(n.prototype))}return B[t]=e,e},x={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},j=f,G=s,M=j.call(Function.call,Array.prototype.concat),k=j.call(Function.apply,Array.prototype.splice),N=j.call(Function.call,String.prototype.replace),W=j.call(Function.call,String.prototype.slice),C=j.call(Function.call,RegExp.prototype.exec),D=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,T=/\\(\\)?/g,J=function(r,t){var e,o=r;if(G(x,o)&&(o="%"+(e=x[o])[0]+"%"),G(B,o)){var n=B[o];if(n===w&&(n=O(o)),void 0===n&&!t)throw new g("intrinsic "+r+" exists, but is not available. Please file an issue!");return{alias:e,name:o,value:n}}throw new P("intrinsic "+r+" does not exist!")},V=function(r,t){if("string"!=typeof r||0===r.length)throw new g("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new g('"allowMissing" argument must be a boolean');if(null===C(/^%?[^%]*%?$/,r))throw new P("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var e=function(r){var t=W(r,0,1),e=W(r,-1);if("%"===t&&"%"!==e)throw new P("invalid intrinsic syntax, expected closing `%`");if("%"===e&&"%"!==t)throw new P("invalid intrinsic syntax, expected opening `%`");var o=[];return N(r,D,(function(r,t,e,n){o[o.length]=e?N(n,T,"$1"):t||r})),o}(r),o=e.length>0?e[0]:"",n=J("%"+o+"%",t),a=n.name,y=n.value,p=!1,i=n.alias;i&&(o=i[0],k(e,M([0,1],i)));for(var f=1,s=!0;f<e.length;f+=1){var c=e[f],l=W(c,0,1),u=W(c,-1);if(('"'===l||"'"===l||"`"===l||'"'===u||"'"===u||"`"===u)&&l!==u)throw new P("property names with quotes must have matching quotes");if("constructor"!==c&&s||(p=!0),G(B,a="%"+(o+="."+c)+"%"))y=B[a];else if(null!=y){if(!(c in y)){if(!t)throw new g("base intrinsic for "+r+" exists, but the property is not available.");return}if(I&&f+1>=e.length){var A=I(y,c);y=(s=!!A)&&"get"in A&&!("originalValue"in A.get)?A.get:y[c]}else s=G(y,c),y=y[c];s&&!p&&(B[a]=y)}}return y};export{V as g};
