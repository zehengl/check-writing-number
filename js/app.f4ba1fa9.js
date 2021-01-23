(function(e){function t(t){for(var r,a,l=t[0],s=t[1],u=t[2],p=0,d=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/check-writing-number/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"40e3":function(e,t,n){n("4de4"),n("a15b"),n("d81d"),n("fb6a"),n("ac1f"),n("843c"),n("1276");var r=n("278c"),o="Oops! This is not a number.",i=["","Thousand","Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion","Septillion","Octillion","Nonillion","Decillion","Undecillion","Duodecillion","Tredecillion","Quattuordecillion","Quindecillion","Sexdecillion","Septendecillion","Octodecillion","Novemdecillion","Vigintillion"],a=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],l=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],s=function(e){for(var t=e.length,n=[];t>=0;t-=3){var r=e.slice(t-3>=0?t-3:0,t);r&&n.push(r)}return n},u=function e(t){var n=parseInt(t);if(n<20)return a[n];var r=n%10;return n<100?l[~~(n/10)-2]+(r?"-"+a[r]:""):n<1e3?a[~~(n/100)]+" Hundred"+(n%100==0?"":" "+e(n%100)):void 0},c=function(e){return e.map((function(e,t){return u(e)?u(e)+(0===t?"":" ")+(t<i.length?i[t]:"[1000^".concat(t,"]")):""})).reverse().filter(Boolean).join(" ")},p=function(e){var t=e.split(".");if(t.length>2)return o;if(1===t.length){var n=+t[0];if(isNaN(n))return o;var i=c(s(t[0]));return i+(i?" and ":"")+"00/100 Dollar"}var a=r(t,2),l=a[0],u=a[1],p=l?+l:0,d=u?+u:0,f=!isNaN(p)&&!isNaN(d),m=c(s(l));m&&(m+=" and ");var v=u?u.slice(0,2).padEnd(2,"0"):"00";return f?m+v+"/100 Dollar":o};e.exports={convert:p,chunkArray:s,chunkToWords:u,matches:a,tens:l}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("c898");var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col h-screen justify-between",attrs:{id:"app"}},[n("header",{staticClass:"h-10 bg-yellow-300"}),e._m(0),n("main",{staticClass:"mb-auto flex-grow"},[n("div",{staticClass:"font-bold text-xl text-center"},[e._v("Try it yourself")]),n("CheckWritingNumberApp",{attrs:{initAmount:""}}),n("div",{staticClass:"flex mb-4 py-4 font-bold text-xl text-center",on:{click:function(t){e.showExample=!e.showExample}}},[e.showExample?n("span",{staticClass:"flex items-center ml-auto mr-auto"},[n("MinusCircleIcon"),e._v("Hide Examples ")],1):n("span",{staticClass:"flex items-center ml-auto mr-auto"},[n("PlusCircleIcon"),e._v("Expand Examples ")],1)]),e.showExample?n("div",e._l(e.examples,(function(e,t){return n("CheckWritingNumberApp",{key:t,attrs:{initAmount:e,inputDisabled:""}})})),1):e._e()],1),n("footer",{staticClass:"bg-gray-300"},[n("p",{staticClass:"p-4 text-center align-top"},[e._v(" Version: "),n("strong",[e._v(e._s(e.version))])])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-8 mb-4 py-1"},[r("img",{staticClass:"w-1/8 mx-auto",attrs:{alt:"logo",src:n("cf05")}})])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"flex mb-1"},[n("div",{staticClass:"w-full md:w-1/3 lg:w-1/3 xl:w-1/3 ml-auto mr-auto"},[n("div",{staticClass:"flex items-center border-b border-b-2 border-blue-500 py-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],ref:"inputAmount",staticClass:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",attrs:{type:"text",placeholder:"Enter the amount of money",disabled:e.inputDisabled,"aria-label":"Amount"},domProps:{value:e.amount},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.clearAmount()},input:function(t){t.target.composing||(e.amount=t.target.value)}}}),!e.inputDisabled&&e.amount?n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.convert(e.amount),expression:"convert(amount)",arg:"copy"}],staticClass:"flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 focus:outline-none"},[e._v(" Copy ")]):e._e(),e.inputDisabled?e._e():n("button",{staticClass:"flex-shrink-0 border-transparent border-4 text-gray-500 hover:text-gray-800 text-sm py-1 px-2 focus:outline-none",attrs:{type:"button"},on:{click:function(t){return e.clearAmount()}}},[e._v(" Clear ")])])])]),e.amount?n("div",{staticClass:"flex mb-4",attrs:{role:"alert"}},[e.inputDisabled?n("div",{staticClass:"w-full md:w-1/3 lg:w-1/3 xl:w-1/3 ml-auto mr-auto bg-gray-500 border-transparent border-4 py-1 px-2"},[n("p",[e._v(e._s(e.convert(e.amount)))])]):n("div",{staticClass:"w-full md:w-1/3 lg:w-1/3 xl:w-1/3 ml-auto mr-auto bg-blue-500 border-transparent border-4 py-1 px-2"},[n("p",[e._v(e._s(e.convert(e.amount)))])])]):e._e()])},a=[],l=n("40e3"),s={name:"CheckWritingNumberApp",props:{inputDisabled:Boolean,initAmount:String},data:function(){return{amount:this.initAmount}},methods:{clearAmount:function(){this.amount="",this.$refs.inputAmount.focus()},convert:l["convert"]}},u=s,c=n("2877"),p=Object(c["a"])(u,i,a,!1,null,null,null),d=p.exports,f=n("0a35"),m=n("9224"),v={name:"app",components:{CheckWritingNumberApp:d,MinusCircleIcon:f["a"],PlusCircleIcon:f["b"]},data:function(){return{version:m["a"],showExample:!1,examples:["0",".12","1","12.3","99.","100","123.45","999","1000","1999","999999","1000000999","999999999999999999999999999.99"]}}},b=v,x=Object(c["a"])(b,r,o,!1,null,null,null),h=x.exports,y=n("2b0e"),g=n("4eb5"),w=n.n(g);y["a"].config.productionTip=!1,y["a"].use(w.a),new y["a"]({render:function(e){return e(h)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"a":"0.3.0"}')},c898:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.e296db42.png"}});
//# sourceMappingURL=app.f4ba1fa9.js.map