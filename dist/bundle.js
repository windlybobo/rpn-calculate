!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports={TYPE_NUMBER:"number",TYPE_OPERATION:"operation",TYPE_LEFT_BRACKET:"left_bracket",TYPE_RIGHT_BRACKET:"right_bracket",TYPE_OPERATION_ADD:"+",TYPE_OPERATION_SUB:"-",TYPE_OPERATION_MUL:"*",TYPE_OPERATION_DIV:"/"}},function(e,t,r){const n=r(0);function o(e){if(e.match(/[0-9|\.]/g))return n.TYPE_NUMBER;if(e.match(/[\+\-\*\/]/g))return n.TYPE_OPERATION;if(e.match(/\(/))return n.TYPE_LEFT_BRACKET;if(e.match(/\)/))return n.TYPE_RIGHT_BRACKET;throw"not found this type: "+e}function u(e){var t=[];return function(e){return e.match(/([0-9|\.]+)|([\+\-\*\/])|(\()|(\))/g).reverse()}(e).forEach(e=>{var r=o(e);t.push({type:r,value:isNaN(+e)?e:+e})}),t}e.exports={parse:function(e){for(var t=[],r=[],o=u(e);o.length;){let e=o.pop();switch(e.type){case n.TYPE_NUMBER:t.push(e);break;case n.TYPE_OPERATION:case n.TYPE_LEFT_BRACKET:r.push(e);break;case n.TYPE_RIGHT_BRACKET:for(var a=r.pop();"("!==a.value;)t.push(a),a=r.pop();break;default:throw"not found this type"+e.type}}for(;r.length;)t.push(r.pop());return t},getType:o,tokenizer:u}},function(e,t,r){var n=r(1).parse;const o=r(0);function u(e){var t,r,n=[];for(e=e.reverse();e.length;){var u=e.pop();switch(u.type){case o.TYPE_NUMBER:n.push(u.value);break;case o.TYPE_OPERATION:switch(t=+n.pop(),r=+n.pop(),u.value){case o.TYPE_OPERATION_ADD:n.push(r+t);break;case o.TYPE_OPERATION_SUB:n.push(r-t);break;case o.TYPE_OPERATION_MUL:n.push(r*t);break;case o.TYPE_OPERATION_DIV:n.push(r/t);break;default:throw"not found this type of operation:"+u}}}return n[0]}e.exports={calculate:u,directCalculate:function(e){return u(n(e))}}},function(e,t,r){const n=r(1),o=r(2);e.exports={parse:n,calculate:o.calculate,directCalculate:o.directCalculate}}])});