(function(e){function t(t){for(var a,s,r=t[0],u=t[1],c=t[2],h=0,p=[];h<r.length;h++)s=r[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01b2":function(e,t,n){},"05e5":function(e,t,n){"use strict";n("9c6e")},"10e0":function(e,t,n){"use strict";n("01b2")},"1d5e":function(e,t,n){},"218f":function(e,t,n){"use strict";n("1d5e")},"4dbd":function(e,t,n){"use strict";n("7db7")},"548c":function(e,t,n){},5685:function(e,t,n){"use strict";n("850a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b383");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("small",[e._v("© 2021 mimonelu")]),n("menu",[n("a",{staticClass:"text-link",attrs:{href:"https://twitter.com/mimonelu",rel:"noopener",target:"_blank"}},[e._v("@Twitter")]),n("a",{staticClass:"text-link",attrs:{href:"https://mimonelu.itch.io/",rel:"noopener",target:"_blank"}},[e._v("Itch.io")]),n("a",{staticClass:"text-link",attrs:{href:"https://github.com/mimonelu/chirping-machine",rel:"noopener",target:"_blank"}},[e._v("GitHub")]),n("a",{staticClass:"text-link",attrs:{href:"https://mimonelu.github.io/chirping-machine/",rel:"noopener",target:"_blank"}},[e._v("GitHub Pages")])])])}],s=(n("10e0"),n("2877")),r={},u=Object(s["a"])(r,i,o,!1,null,"12f4d0ac",null),c=u.exports,l=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Top"},[n("header",[n("h1",[e._v("chirping-machine")]),n("div",{staticClass:"button right",on:{click:e.onClickOpenAboutButton}},[e._v("About")]),n("div",{staticClass:"button",on:{click:e.onClickOpenOptionButton}},[e._v("Option")])]),n("ControllerContainer",{ref:"ControllerContainer"}),e.aboutPopupVisible?n("AboutPopup",{on:{close:e.onClickCloseAboutPopupButton}}):e._e(),e.optionPopupVisible?n("OptionPopup",{on:{close:e.onClickCloseOptionPopupButton,changeAllSecond:e.onClickChangeAllSecondButton,changeAllVolume:e.onClickChangeAllVolumeButton,changeAllSpecial:e.onClickChangeAllSpecialButton,resetAll:e.onClickResetAllButton}}):e._e()],1)},p=[],v=n("1da1"),f=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Popup",{staticClass:"AboutPopup",on:{close:function(t){return e.$emit("close")}}},[n("h2",[e._v("About")]),n("section",[n("p",[e._v("chirping-machine is an application can create simple sound effects.")]),n("ul",[n("li",[e._v("Click the Save button to save the sound effect.")]),n("li",[e._v("Click the Code button to copy JavaScript code. The library is in "),n("a",{staticClass:"text-link",attrs:{href:"https://github.com/mimonelu/chirping-machine/blob/master/src/scripts/chirping-machine.js",rel:"noopener",target:"_blank"}},[e._v("GitHub")]),e._v(" .")])]),n("pre",[e._v("import ChirpingMachine from 'chirping-machine';\n\nconst chirpingMachine = new ChirpingMachine();\nchirpingMachine.create(...); // Copied code\nchirpingMachine.play();\nchirpingMachine.play(volume); // volume: 0 - 1.0\nchirpingMachine.stop();")])])])}),d=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"Popup",appear:""}},[n("div",{staticClass:"Popup"},[n("div",{staticClass:"inner"},[e._t("default"),n("div",{staticClass:"closeButton",on:{click:function(t){return e.$emit("close")}}})],2)])])},m=[],b={name:"Popup"},C=b,E=(n("05e5"),Object(s["a"])(C,g,m,!1,null,"308c7438",null)),k=E.exports,M={name:"AboutPopup",components:{Popup:k}},w=M,x=(n("5f1f"),Object(s["a"])(w,f,d,!1,null,"11e18797",null)),_=x.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ControllerContainer"},e._l(e.samples,(function(t){return n("div",{key:t},[n("Controller",{ref:"controller-"+t,refInFor:!0,attrs:{chirpingMachine:e.chirpingMachine,name:t}})],1)})),0)},y=[],P=(n("b64b"),n("d3b7"),n("ddb0"),n("d4ec")),O=n("bee2"),S=(n("c19f"),n("cfc3"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("2b3d"),n("3ca3"),n("d81d"),n("a630"),function(){function e(){var t=this;Object(P["a"])(this,e),this.context=new(window.AudioContext||window.webkitAudioContext),window.addEventListener("click",(function(){"running"!==t.context.state&&t.context.resume().then((function(){}))}))}return Object(O["a"])(e,[{key:"create",value:function(e,t){var n=t||{};n.rate=void 0===n.rate?44100:n.rate,n.second=void 0===n.second?1:n.second,n.volume=void 0===n.volume?.5:n.volume,n.volumeEasing=void 0===n.volumeEasing?"none":n.volumeEasing,n.special=void 0===n.special?1:n.special,n.specialEasing=void 0===n.specialEasing?"none":n.specialEasing;var a=new $(this.context);return a.create(e,n),a}}]),e}()),$=function(){function e(t){Object(P["a"])(this,e),this.context=t,this.buffer=null,this.source=null}return Object(O["a"])(e,[{key:"data",get:function(){return null===this.buffer?null:this.buffer.getChannelData(0)}},{key:"create",value:function(e,t){var n=t.rate*t.second;if(!(n<=0)){this.buffer=this.context.createBuffer(1,n,t.rate),T[e](this.data,t);for(var a=0,i=this.data.length;a<i;a++)this.data[a]<-1?this.data[a]=-1:this.data[a]>1&&(this.data[a]=1)}}},{key:"play",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;if("running"===this.context.state){this.stop(),this.source=this.context.createBufferSource(),this.source.buffer=this.buffer;var t=this.context.createGain();this.source.connect(t),t.connect(this.context.destination),t.gain.value=e,this.source.start(this.context.currentTime)}}},{key:"stop",value:function(){null!==this.source&&this.source.stop()}},{key:"save",value:function(e){var t=this.createAudioBlob();this.download(e,t)}},{key:"createAudioBlob",value:function(){var e=[this.buffer.getChannelData(0)],t=function(e,t){var n=new ArrayBuffer(44+2*e.length),a=new DataView(n),i=function(e,t,n){for(var a=0;a<n.length;a++)e.setUint8(t+a,n.charCodeAt(a))},o=function(e,t,n){for(var a=0;a<n.length;a++,t+=2){var i=Math.max(-1,Math.min(1,n[a]));e.setInt16(t,i<0?32768*i:32767*i,!0)}};return i(a,0,"RIFF"),a.setUint32(4,32+2*e.length,!0),i(a,8,"WAVE"),i(a,12,"fmt "),a.setUint32(16,16,!0),a.setUint16(20,1,!0),a.setUint16(22,1,!0),a.setUint32(24,t,!0),a.setUint32(28,2*t,!0),a.setUint16(32,2,!0),a.setUint16(34,16,!0),i(a,36,"data"),a.setUint32(40,2*e.length,!0),o(a,44,e),a},n=function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].length;for(var a=new Float32Array(t),i=0,o=0;o<e.length;o++)for(var s=0;s<e[o].length;s++)a[i]=e[o][s],i++;return a},a=t(n(e),this.context.sampleRate);return new Blob([a],{type:"audio/wav"})}},{key:"download",value:function(e,t){var n=document.createElement("a");n.download=e,n.href=URL.createObjectURL(t),n.target="_blank",n.click()}}]),e}(),A=Math.PI,j=.5*Math.PI,B=2*Math.PI,I=function(e,t){return Math.random()*(t-e)+e},V={none:function(e,t){return 1},in:function(e,t){return e/t},out:function(e,t){return 1-e/t},sin:function(e,t){return Math.sin(e/t*A)},sinInv:function(e,t){return 1-Math.sin(e/t*A)},sinHalf:function(e,t){return Math.sin(e/t*j)},sinHalfInv:function(e,t){return 1-Math.sin(e/t*j)},cos:function(e,t){return Math.cos(e/t*A)},cosInv:function(e,t){return 1-Math.cos(e/t*A)},cosHalf:function(e,t){return Math.cos(e/t*j)},cosHalfInv:function(e,t){return 1-Math.cos(e/t*j)},tan:function(e,t){return Math.tan(e/t*A)},tanInv:function(e,t){return 1-Math.tan(e/t*A)}},T={noise:function(e,t){for(var n=0,a=e.length;n<a;n++){var i=I(-1,1)*t.special*V[t.specialEasing](n,a);e[n]=i*t.volume*V[t.volumeEasing](n,a)}},sin:function(e,t){for(var n=0,a=e.length;n<a;n++){var i=t.rate*t.special*V[t.specialEasing](n,a);e[n]=Math.sin(n/a*Math.PI*i)*t.volume*V[t.volumeEasing](n,a)}},cos:function(e,t){for(var n=0,a=e.length;n<a;n++){var i=t.special*V[t.specialEasing](n,a),o=Math.cos(n/a*Math.PI*2048*i);e[n]=o*t.volume*V[t.volumeEasing](n,a)}},tan:function(e,t){for(var n=0,a=e.length;n<a;n++){var i=t.special*V[t.specialEasing](n,a),o=Math.tan(n/a*Math.PI*1024*i);e[n]=o*t.volume*V[t.volumeEasing](n,a)}},square:function(e,t){for(var n=1,a=0,i=e.length;a<i;a++)a%Math.round(512*t.special*V[t.specialEasing](a,i))===0&&(n*=-1),e[a]=n*t.volume*V[t.volumeEasing](a,i)},triangle:function(e,t){for(var n=0,a=-1,i=0,o=e.length;i<o;i++)a>=1?n=-.2*t.special*V[t.specialEasing](i,o):a<=-1&&(n=.2*t.special*V[t.specialEasing](i,o)),a+=n,e[i]=a*t.volume*V[t.volumeEasing](i,o)},and:function(e,t){for(var n=0,a=e.length;n<a;n++){var i=t.special*V[t.specialEasing](n,a),o=Math.sin(n/a*Math.PI*(a&n)*i);e[n]=o*t.volume*V[t.volumeEasing](n,a)}},or:function(e,t){for(var n=0,a=e.length;n<a;n++){var i=t.special*V[t.specialEasing](n,a),o=Math.sin(n/a*Math.PI*(a|n)*i);e[n]=o*t.volume*V[t.volumeEasing](n,a)}},explosion:function(e,t){for(var n=0,a=0,i=e.length;a<i;a++)a%Math.round(64*t.special*V[t.specialEasing](a,i))===0&&(n=I(-1,1)),e[a]=n*t.volume*V[t.volumeEasing](a,i)},spring:function(e,t){for(var n=0,a=0,i=e.length;a<i;a++)n=a/i,e[a]=(a%Math.round(256*t.special*V[t.specialEasing](a,i))===0?1:2*(n-.5))*(1-n)*t.volume*V[t.volumeEasing](a,i)},warp:function(e,t){for(var n=0,a=e.length;n<a;n++){var i=t.special*V[t.specialEasing](n,a),o=Math.sin(1e3*Math.pow(n/a*Math.PI,2*i));e[n]=o*t.volume*V[t.volumeEasing](n,a)}},bell:function(e,t){for(var n=1,a=0,i=e.length;a<i;a++){var o=t.rate/(2048*t.special*V[t.specialEasing](a,i))*n;a%128===0&&(n*=-1),e[a]=Math.sin(a/o*Math.PI)*t.volume*V[t.volumeEasing](a,i)}},phone:function(e,t){for(var n=0,a=e.length;n<a;n++)e[n]=Math.sin(.05*n)*Math.sin(n/t.rate*Math.PI*16*t.special*V[t.specialEasing](n,a))*t.volume*V[t.volumeEasing](n,a)},energy:function(e,t){for(var n=0,a=e.length;n<a;n++){var i=Math.sin(128*n*t.special*V[t.specialEasing](n,a)/a*Math.PI*2*Math.sin(32*n*t.special*V[t.specialEasing](n,a)/a*Math.PI*2));e[n]=i*t.volume*V[t.volumeEasing](n,a)}},ping:function(e,t){for(var n=0,a=e.length;n<a;n++)e[n]=Math.sin(2048*n*t.special*V[t.specialEasing](n,a)/a*B)*t.volume*V[t.volumeEasing](n,a)},chime:function(e,t){for(var n=1,a=0,i=e.length,o=1;a<i;a++){a%Math.round(64*t.special*V[t.specialEasing](a,i))===0&&(n*=-1),a%Math.round(192*t.special*V[t.specialEasing](a,i))===0&&(o*=-1);var s=(n+o)/2;e[a]=s*t.volume*V[t.volumeEasing](a,i)}},cackle:function(e,t){for(var n=0,a=0,i=e.length;a<i;a++)n=a/i*Math.PI,e[a]=Math.sin(512*n*Math.sin(8*n*t.special*V[t.specialEasing](a,i)))*t.volume*V[t.volumeEasing](a,i)},space:function(e,t){for(var n=0,a=e.length;n<a;n++){var i=t.special*V[t.specialEasing](n,a),o=n/a*Math.PI*128,s=Math.sin(o*Math.cos(o)*i);e[n]=s*t.volume*V[t.volumeEasing](n,a)}},synthesizer:function(e,t){for(var n=0,a=0,i=e.length;a<i;a++)n=a/i*Math.PI,e[a]=Math.sin(8*n*Math.sin(1024*n*t.special*V[t.specialEasing](a,i)))*t.volume*V[t.volumeEasing](a,i)},electone:function(e,t){for(var n=0,a=e.length;n<a;n++){var i=200*Math.round(t.special*V[t.specialEasing](n,a)*1e3/200),o=Math.sin(n/a*Math.PI*i);e[n]=o*t.volume*V[t.volumeEasing](n,a)}},echo:function(e,t){for(var n=0,a=0,i=e.length;a<i;a++)n=a/i*Math.PI,e[a]=Math.sin(2048*n*t.special*V[t.specialEasing](a,i))*Math.sin(8*n)*t.volume*V[t.volumeEasing](a,i)},floating:function(e,t){for(var n=0,a=0,i=e.length;a<i;a++)n=a/i*Math.PI,e[a]=Math.sin(n*(1024*t.special*V[t.specialEasing](a,i))/Math.cos(.5*n))*t.volume*V[t.volumeEasing](a,i)},zap:function(e,t){for(var n=0,a=0,i=e.length;a<i;a++)n=a/i*Math.PI,e[a]=Math.sin(128*n/Math.sin(16*n*t.special*V[t.specialEasing](a,i)))*t.volume*V[t.volumeEasing](a,i)},bounce:function(e,t){for(var n=0,a=0,i=e.length;a<i;a++)n=a/i*Math.PI,e[a]=Math.sin(32*n*(Math.round(a/i*100*t.special*V[t.specialEasing](a,i))%2===0?1:64))*t.volume*V[t.volumeEasing](a,i)},surprise:function(e,t){for(var n=0,a=0,i=e.length;a<i;a++)n=a/i,e[a]=Math.sin(n*(Math.sin(n*j)*Math.PI)*2048*t.special*V[t.specialEasing](a,i))*t.volume*V[t.volumeEasing](a,i)},despair:function(e,t){for(var n=0,a=0,i=e.length;a<i;a++)n=a/i,e[a]=Math.sin(n*(Math.cos(n*Math.PI*.25)*Math.PI)*2048*t.special*V[t.specialEasing](a,i))*t.volume*V[t.volumeEasing](a,i)},robot:function(e,t){for(var n=Array.from(Array(8)).map((function(){return I(0,1)})),a=0,i=e.length;a<i;a++){var o=t.special*V[t.specialEasing](a,i),s=Math.floor(a/i*8),r=Math.sin(a/i*Math.PI*4096*n[s]*o);e[a]=r*t.volume*V[t.volumeEasing](a,i)}}},H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Controller"},[n("div",{staticClass:"name"},[e._v(e._s(e.name))]),n("WaveCanvas",{ref:"waveCanvas",attrs:{audio:e.audio}}),n("div",{staticClass:"rangeContainer"},[n("div",{staticClass:"label"},[e._v("Length")]),n("div"),n("Range",{ref:"secondRange",attrs:{min:.05,max:3,step:.05,value:e.second},on:{"update:value":function(t){e.second=t},change:e.onChange}}),n("div",{staticClass:"label"},[e._v("Volume")]),n("HoverMenu",{attrs:{options:e.easings,value:e.volumeEasing},on:{"update:value":function(t){e.volumeEasing=t},change:e.onChange}}),n("Range",{ref:"volumeRange",attrs:{min:.05,max:1,step:.05,value:e.volume},on:{"update:value":function(t){e.volume=t},change:e.onChange}}),n("div",{staticClass:"label"},[e._v("Special")]),n("HoverMenu",{attrs:{options:e.easings,value:e.specialEasing},on:{"update:value":function(t){e.specialEasing=t},change:e.onChange}}),n("Range",{ref:"specialRange",attrs:{min:.05,max:1,step:.05,value:e.special},on:{"update:value":function(t){e.special=t},change:e.onChange}})],1),n("div",{staticClass:"buttonContainer"},[n("div",{staticClass:"button",on:{click:e.onClickPlayButton}},[e._v("Play")]),n("div",{staticClass:"button",on:{click:e.onClickRandomizeSpecialButton}},[n("ColorfulText",{attrs:{text:"Special"}})],1),n("div",{staticClass:"button",on:{click:e.onClickResetButton}},[e._v("Reset")]),n("div",{staticClass:"button right",on:{click:e.onClickCodeButton}},[e._v("Code")]),n("div",{staticClass:"button",on:{click:e.onClickDownloadButton}},[e._v("Save")])])],1)},L=[],N=(n("b0c0"),n("99af"),function(e,t){return Math.floor(Math.random()*(t-e+1))+e}),U=function(e,t){return Math.round(e*t)/t},W=function(e){return new Promise((function(t,n){setTimeout((function(){t(!1)}),e)}))},K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"ColorfulText"},e._l(e.characters,(function(t,a){return n("span",{key:t,style:{color:e.color(a)}},[e._v(e._s(t))])})),0)},J=[],z=(n("1276"),n("ac1f"),{name:"ColorfulText",props:{text:{type:String,default:""},colors:{type:Array,default:function(){return["#ff0000","#ff8000","#80ff00","#00ff00","#00ff80","#0080ff","#0000ff","#8000ff","#ff0080"]}}},computed:{characters:function(){return this.text.split("")}},methods:{color:function(e){return this.colors[e%this.colors.length]}}}),q=z,D=Object(s["a"])(q,K,J,!1,null,null,null),F=D.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"HoverMenu",on:{mouseleave:e.onMouseLeave}},[n("div",{staticClass:"button",on:{click:e.onClickTrigger}},[e._v(e._s(e.label))]),n("div",{staticClass:"menu"},e._l(e.options,(function(t){return n("div",{key:t.value,staticClass:"option",attrs:{"data-selected":t.value===e.value},on:{click:function(n){return e.onClickOption(t)}}},[e._v(e._s(t.label))])})),0)])},X=[],Q=(n("7db0"),n("07ac"),{name:"HoverMenu",props:{options:{type:Array,default:function(){return[]}},value:{}},computed:{label:function(){var e=this;return Object.values(this.options).find((function(t){return e.value===t.value})).label}},methods:{onMouseLeave:function(){var e=this.$el.querySelector(".menu");e.style.display=""},onClickTrigger:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$el.querySelector(".menu"),n.style.display="block",n.style.visibility="hidden",t.next=5,W(50);case 5:n.style.visibility="",a=n.getBoundingClientRect(),i=document.documentElement.clientHeight-a.bottom,i<0&&(n.style.top="calc(".concat(i,"px - 1rem)"));case 9:case"end":return t.stop()}}),t)})))()},onClickOption:function(e){this.$emit("update:value",e.value),this.value!==e.value&&this.$emit("change")}}}),Y=Q,Z=(n("f54f"),Object(s["a"])(Y,G,X,!1,null,null,null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Range"},[n("div",{staticClass:"bar"},[n("div",{staticClass:"knob"})])])}],ae=(n("a9e3"),n("b680"),{name:"Range",props:{min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},value:{type:Number,default:50}},data:function(){return{pseudoValue:this.value,knobNode:null,inputStarted:!1,previousLeft:0}},mounted:function(){var e=this;this.knobNode=this.$el.querySelector(".knob"),this.knobNode&&(this.updateKnobPosition(!1),this.$el.addEventListener("mousedown",this.onInputStart),document.body.addEventListener("mousemove",this.onInputMove),document.body.addEventListener("mouseup",this.onInputEnd),window.addEventListener("resize",(function(){return e.updateKnobPosition(!1)})))},methods:{onInputStart:function(e){this.inputStarted=!0,this.moveKnob(e)},onInputMove:function(e){this.inputStarted&&this.moveKnob(e)},onInputEnd:function(){this.inputStarted=!1},moveKnob:function(e){var t=this.$el.clientWidth,n=(e.touches?e.touches[0]:e).pageX,a=this.$el.getBoundingClientRect(),i=Math.max(0,Math.min(t,n-a.left));this.pseudoValue=i/t*(this.max-this.min)+this.min,this.updateKnobPosition(!0)},updateKnobPosition:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.$el.clientWidth;this.pseudoValue=Math.round(this.pseudoValue/this.step)*this.step,this.pseudoValue=Number(this.pseudoValue.toFixed((String(this.step).split(".")[1]||"0").length));var n=(this.pseudoValue-this.min)/(this.max-this.min)*t-this.knobNode.clientWidth/2;this.knobNode&&(this.knobNode.style.left="".concat(n,"px")),this.previousLeft!==n&&e&&(this.$emit("update:value",this.pseudoValue),this.$emit("change")),this.previousLeft=n},updateValue:function(e){this.pseudoValue=e,this.updateKnobPosition(!1)}}}),ie=ae,oe=(n("a4d1"),Object(s["a"])(ie,te,ne,!1,null,null,null)),se=oe.exports,re=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ue=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"WaveCanvas"},[n("canvas",{attrs:{height:"0"}})])}],ce={name:"WaveCanvas",mounted:function(){this.update()},methods:{update:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){var a,i,o,s,r,u,c,l,h;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.$el.querySelector("canvas"),a.width=1,n.next=4,W(1);case 4:if(a.width=t.$el.clientWidth,a.height=48,i=a.getContext("2d"),i.fillStyle="#004000",i.fillRect(0,0,a.width,a.height),null!=e){n.next=11;break}return n.abrupt("return");case 11:for(o=[],s=Math.floor(e.length/a.width),r=0,u=e.length,c=0;r<u;r++)c+=e[r],r%s===0&&(c/=s,o.push(c+.5),c=0);for(i.strokeStyle="#00f000",i.beginPath(),i.moveTo(.5,o[e.length]*a.height+.5),l=0,h=o.length;l<h;l++)i.lineTo(l+.5,o[l]*a.height+.5);i.stroke();case 19:case"end":return n.stop()}}),n)})))()}}},le=ce,he=(n("5685"),Object(s["a"])(le,re,ue,!1,null,"66b04b93",null)),pe=he.exports,ve={name:"Controller",components:{ColorfulText:F,HoverMenu:ee,Range:se,WaveCanvas:pe},props:{chirpingMachine:Object,name:String},data:function(){return{ChirpingMachineEasings:V,audio:null,second:0,volume:0,volumeEasing:"",special:0,specialEasing:""}},computed:{easings:function(){return Object.keys(V).map((function(e){return{label:e,value:e}}))}},created:function(){this.reset(),this.load()},mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.update(),t.next=3,e.updateCanvas();case 3:window.addEventListener("resize",Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateCanvas();case 2:case"end":return t.stop()}}),t)}))));case 4:case"end":return t.stop()}}),t)})))()},methods:{reset:function(){this.second=1,this.volume=.5,this.volumeEasing="out",this.special=.5,this.specialEasing="none"},load:function(){var e=localStorage.getItem(this.name);if(e){var t=JSON.parse(e);this.second=t.second,this.volume=t.volume,this.volumeEasing=t.volumeEasing,this.special=t.special,this.specialEasing=t.specialEasing}},save:function(){var e=JSON.stringify({second:this.second,volume:this.volume,volumeEasing:this.volumeEasing,special:this.special,specialEasing:this.specialEasing});localStorage.setItem(this.name,e)},update:function(){this.audio=this.chirpingMachine.create(this.name,{rate:44100,second:this.second,volume:this.volume,volumeEasing:this.volumeEasing,special:this.special,specialEasing:this.specialEasing}),this.save()},updateCanvas:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$refs.waveCanvas){t.next=3;break}return t.next=3,e.$refs.waveCanvas.update(e.audio.data);case 3:case"end":return t.stop()}}),t)})))()},updateSecondRange:function(){this.$refs.secondRange.updateValue(this.second)},updateVolumeRange:function(){this.$refs.volumeRange.updateValue(this.volume)},updateSpecialRange:function(){this.$refs.specialRange.updateValue(this.special)},onChange:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.update(),t.next=3,e.updateCanvas();case 3:e.audio.play();case 4:case"end":return t.stop()}}),t)})))()},onClickPlayButton:function(){this.update(),this.audio.play()},onClickResetButton:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.reset(),e.updateSecondRange(),e.updateVolumeRange(),e.updateSpecialRange(),e.update(),t.next=7,e.updateCanvas();case 7:case"end":return t.stop()}}),t)})))()},onClickCodeButton:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a="chirpingMachine.create('".concat(t.name,"', {\n  rate: 44100,\n  second: ").concat(t.second,",\n  volume: ").concat(t.volume,",\n  volumeEasing: '").concat(t.volumeEasing,"',\n  special: ").concat(t.special,",\n  specialEasing: '").concat(t.specialEasing,"'\n});\n"),n.next=3,navigator.clipboard.writeText(a);case 3:return i=e.target.innerText,e.target.innerText="Copied!",n.next=7,W(1e3);case 7:e.target.innerText=i;case 8:case"end":return n.stop()}}),n)})))()},onClickDownloadButton:function(){this.audio.save(this.name)},onClickRandomizeSpecialButton:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.special=U(.05*N(1,20),100),e.updateSpecialRange(),n=Object.keys(V),e.specialEasing=n[N(0,n.length-1)],e.update(),e.audio.play(),t.next=8,e.updateCanvas();case 8:case"end":return t.stop()}}),t)})))()}}},fe=ve,de=(n("218f"),Object(s["a"])(fe,H,L,!1,null,"3ae3d123",null)),ge=de.exports,me={name:"ControllerContainer",components:{Controller:ge},data:function(){return{chirpingMachine:new S,ChirpingMachineSamples:T}},computed:{samples:function(){return Object.keys(T)}},methods:{changeAllSecond:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:for(a in t.$refs)i=t.$refs[a][0],i.second=e,i.updateSecondRange(),i.save();case 1:case"end":return n.stop()}}),n)})))()},changeAllVolume:function(e,t){var n=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(i in n.$refs)o=n.$refs[i][0],o.volume=e,o.updateVolumeRange(),o.volumeEasing=t,o.save();case 1:case"end":return a.stop()}}),a)})))()},changeAllSpecial:function(e,t){var n=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(i in n.$refs)o=n.$refs[i][0],o.special=e,o.updateSpecialRange(),o.specialEasing=t,o.save();case 1:case"end":return a.stop()}}),a)})))()},resetAll:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.t0=regeneratorRuntime.keys(e.$refs);case 1:if((t.t1=t.t0()).done){t.next=7;break}return n=t.t1.value,t.next=5,e.$refs[n][0].onClickResetButton();case 5:t.next=1;break;case 7:case"end":return t.stop()}}),t)})))()}}},be=me,Ce=(n("4dbd"),Object(s["a"])(be,R,y,!1,null,"d8847838",null)),Ee=Ce.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Popup",{staticClass:"OptionPopup",on:{close:function(t){return e.$emit("close")}}},[n("h2",[e._v("Option")]),n("div",{staticClass:"rangeContainer"},[n("div",{staticClass:"label"},[e._v("Length")]),n("div"),n("Range",{ref:"secondRange",attrs:{min:.05,max:3,step:.05,value:e.second},on:{"update:value":function(t){e.second=t},change:e.onChange}}),n("div",{staticClass:"button",on:{click:e.onClickChangeAllSecondButton}},[e._v("Change all")]),n("div",{staticClass:"label"},[e._v("Volume")]),n("HoverMenu",{attrs:{options:e.easings,value:e.volumeEasing},on:{"update:value":function(t){e.volumeEasing=t},change:e.onChange}}),n("Range",{ref:"volumeRange",attrs:{min:.05,max:1,step:.05,value:e.volume},on:{"update:value":function(t){e.volume=t},change:e.onChange}}),n("div",{staticClass:"button",on:{click:e.onClickChangeAllVolumeButton}},[e._v("Change all")]),n("div",{staticClass:"label"},[e._v("Special")]),n("HoverMenu",{attrs:{options:e.easings,value:e.specialEasing},on:{"update:value":function(t){e.specialEasing=t},change:e.onChange}}),n("Range",{ref:"specialRange",attrs:{min:.05,max:1,step:.05,value:e.special},on:{"update:value":function(t){e.special=t},change:e.onChange}}),n("div",{staticClass:"button",on:{click:e.onClickChangeAllSpecialButton}},[e._v("Change all")])],1),n("div",{staticClass:"button",on:{click:e.onClickResetAllButton}},[e._v("Reset all")])])},Me=[],we={name:"OptionPopup",components:{HoverMenu:ee,Popup:k,Range:se},data:function(){return{ChirpingMachineEasings:V,second:0,volume:0,volumeEasing:"",special:0,specialEasing:""}},computed:{easings:function(){return Object.keys(V).map((function(e){return{label:e,value:e}}))}},created:function(){this.reset(),this.load()},methods:{reset:function(){this.second=1,this.volume=.5,this.volumeEasing="out",this.special=.5,this.specialEasing="none"},load:function(){var e=localStorage.getItem("option");if(e){var t=JSON.parse(e);this.second=t.second,this.volume=t.volume,this.volumeEasing=t.volumeEasing,this.special=t.special,this.specialEasing=t.specialEasing}},save:function(){var e=JSON.stringify({second:this.second,volume:this.volume,volumeEasing:this.volumeEasing,special:this.special,specialEasing:this.specialEasing});localStorage.setItem("option",e)},onChange:function(){this.save()},onClickChangeAllSecondButton:function(){this.$emit("changeAllSecond",this.second)},onClickChangeAllVolumeButton:function(){this.$emit("changeAllVolume",this.volume,this.volumeEasing)},onClickChangeAllSpecialButton:function(){this.$emit("changeAllSpecial",this.special,this.specialEasing)},onClickResetAllButton:function(){this.reset(),this.save(),this.$refs.secondRange.updateValue(this.second),this.$refs.volumeRange.updateValue(this.volume),this.$refs.specialRange.updateValue(this.special),this.$emit("resetAll")}}},xe=we,_e=(n("9149"),Object(s["a"])(xe,ke,Me,!1,null,"00055ee1",null)),Re=_e.exports,ye={name:"Top",components:{AboutPopup:_,ControllerContainer:Ee,OptionPopup:Re},data:function(){return{aboutPopupVisible:!1,optionPopupVisible:!1}},methods:{onClickOpenAboutButton:function(){this.aboutPopupVisible=!0},onClickCloseAboutPopupButton:function(){this.aboutPopupVisible=!1},onClickOpenOptionButton:function(){this.optionPopupVisible=!0},onClickCloseOptionPopupButton:function(){this.optionPopupVisible=!1},onClickChangeAllSecondButton:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$refs.ControllerContainer.changeAllSecond(e);case 2:case"end":return n.stop()}}),n)})))()},onClickChangeAllVolumeButton:function(e,t){var n=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$refs.ControllerContainer.changeAllVolume(e,t);case 2:case"end":return a.stop()}}),a)})))()},onClickChangeAllSpecialButton:function(e,t){var n=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$refs.ControllerContainer.changeAllSpecial(e,t);case 2:case"end":return a.stop()}}),a)})))()},onClickResetAllButton:function(){this.$refs.ControllerContainer.resetAll()}}},Pe=ye,Oe=(n("c8c5"),Object(s["a"])(Pe,h,p,!1,null,"e14e0106",null)),Se=Oe.exports;a["a"].use(l["a"]);var $e=[{path:"/",name:"Top",component:Se}],Ae=new l["a"]({routes:$e}),je=Ae,Be=n("2f62");a["a"].use(Be["a"]);var Ie=new Be["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:je,store:Ie,render:function(e){return e(c)}}).$mount("#app")},"59f0":function(e,t,n){},"5f1f":function(e,t,n){"use strict";n("548c")},"63ee":function(e,t,n){},"7db7":function(e,t,n){},"850a":function(e,t,n){},9149:function(e,t,n){"use strict";n("59f0")},"9c6e":function(e,t,n){},a4d1:function(e,t,n){"use strict";n("63ee")},ae4a:function(e,t,n){},b383:function(e,t,n){},c8c5:function(e,t,n){"use strict";n("ae4a")},d736:function(e,t,n){},f54f:function(e,t,n){"use strict";n("d736")}});