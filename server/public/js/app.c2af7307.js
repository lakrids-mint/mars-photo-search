(function(t){function e(e){for(var a,s,c=e[0],i=e[1],l=e[2],f=0,p=[];f<c.length;f++)s=c[f],n[s]&&p.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0fc6":function(t,e,r){t.exports=r.p+"img/edu_rover.29739450.jpg"},"23c8":function(t,e,r){"use strict";var a=r("d892"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("bb71");r("da64");a["a"].use(n["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-parallax",{attrs:{dark:"",src:r("0fc6")}},[a("v-layout",{attrs:{"mt-4":"","align-center":"",column:"","justify-center":""}},[a("v-flex",{attrs:{"mt-4":""}},[a("h1",{staticClass:"display-2 mb-3"},[a("Title")],1)]),a("v-flex",[a("Search")],1)],1)],1),a("v-content",[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-flex",[a("Results")],1)],1)],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-form",{ref:"form"},[r("v-layout",{attrs:{column:t.$vuetify.breakpoint.xsOnly}},[r("v-flex",{attrs:{"ma-1":"",xs12:"",sm6:""}},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("span",t._g({},a),[t._v("SOL")])]}}])},[r("span",[t._v("Martian rotation or day")])]),r("v-text-field",{attrs:{block:"",type:"text",solo:"",placeholder:"Enter a number","append-icon":"close",rules:t.soloRules,name:"sol"},on:{"click:append":function(e){return t.$refs.form.reset()}},model:{value:t.input,callback:function(e){t.input="string"===typeof e?e.trim():e},expression:"input"}})],1),r("v-flex",{attrs:{"ma-1":"",xs12:"",sm6:""}},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("span",t._g({},a),[t._v("Camera")])]}}])},[r("span",[t._v("Choose from 7 different cameras")])]),r("v-overflow-btn",{attrs:{solo:"",block:"",items:t.cameras,label:"Choose camera",rules:t.cameraRules,name:"camera"},model:{value:t.camera,callback:function(e){t.camera=e},expression:"camera"}})],1)],1)],1),r("v-layout",{attrs:{"ma-2":"",column:"","align-center":""}},[r("v-flex",[r("v-btn",{attrs:{"mb-2":"",dark:"",loading:t.loading,color:"pink"},on:{click:function(e){return e.preventDefault(),t.search(e)}}},[t._v("\n        Search\n        "),r("v-icon",{attrs:{right:""}},[t._v("search")])],1)],1)],1)],1)},i=[],l={data:function(){return{input:"",loading:!1,camera:"",photos:[],cameras:["FHAZ","NAVCAM","MAST","CHEMCAM","MAHLI","MARDI","RHAZ","ANY"],soloRules:[function(t){return!!t||"Input is required, please input a number "},function(t){return/^[0-9 ]*$/.test(t)||"Only digits allowed!"}],cameraRules:[function(t){return!!t||"You must choose a camera"}]}},methods:{search:function(){this.$refs.form.validate()?this.$store.dispatch("getPhotos",{sol:this.input,camera:this.camera}):(console.log("validation failed"),this.$store.dispatch("error","Please enter the required information"))}}},u=l,f=r("2877"),p=r("6544"),v=r.n(p),d=r("8336"),h=r("549c"),m=r("0e8f"),g=r("4bd4"),x=r("132d"),b=r("a722"),_=r("de8e"),y=r("2677"),k=r("3a2f"),V=Object(f["a"])(u,c,i,!1,null,null,null),C=V.exports;v()(V,{VBtn:d["a"],VContent:h["a"],VFlex:m["a"],VForm:g["a"],VIcon:x["a"],VLayout:b["a"],VOverflowBtn:_["a"],VTextField:y["a"],VTooltip:k["a"]});var w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",{staticClass:"hidden-xs-only"},[r("h2",{staticClass:"display-3 text-xs-center"},[t._v("\n      Explore\n      "),r("span",{staticClass:"text-uppercase"},[t._v("Mars")]),t._v("\n      with\n    ")]),r("h1",{staticClass:"display-4 text-xs-center"},[t._v("Curiosity")])]),r("v-flex",{staticClass:"hidden-sm-and-up"},[r("h2",{staticClass:"display-2 text-xs-center"},[t._v("\n      Explore\n      "),r("span",{staticClass:"text-uppercase"},[t._v("Mars")]),t._v("\n      with\n    ")]),r("h1",{staticClass:"display-3 text-xs-center"},[t._v("Curiosity")])])],1)},O=[],E={},S=E,$=Object(f["a"])(S,w,O,!1,null,"ce6de0cc",null),j=$.exports;v()($,{VFlex:m["a"],VLayout:b["a"]});var P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","grid-list-xl":""}},[r("v-snackbar",{attrs:{color:"failure",timeout:5e3,top:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[r("span",[t._v(t._s(t.error))]),r("v-btn",{attrs:{flat:"",color:"white"},on:{click:function(e){t.snackbar=!1}}},[r("v-icon",[t._v("close")])],1)],1),r("v-layout",{attrs:{row:"",wrap:"","mt-4":""}},t._l(t.photos,function(e){return r("v-flex",{key:e.id,attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var n=a.hover;return r("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4","min-width":"200"}},[r("v-img",{attrs:{"aspect-ratio":1,src:e.img_src}},[r("v-expand-transition",[n?r("div",{staticClass:"d-flex transition-fast-in-fast-out pink v-card--reveal caption pa-4 text-xs-left white--text",staticStyle:{height:"100%"}},[r("p",{staticClass:"subheading"},[t._v("\n                  Taken on:\n                  "),r("span",{staticClass:"font-weight-light"},[t._v(t._s(e.earth_date))]),r("br"),t._v("By:\n                  "),r("span",{staticClass:"font-weight-light"},[t._v(t._s(e.camera.full_name))])])]):t._e()])],1)],1)}}],null,!0)})],1)}),1)],1)},M=[],A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")},T=[],F={},R=F,I=Object(f["a"])(R,A,T,!1,null,null,null),L=(I.exports,{data:function(){return{snackbar:!1,timeout:1e4}},methods:{getImgUrl:function(t){return t}},computed:{photos:function(){if(this.$store.getters.getPhotos)return this.$store.getters.getPhotos},error:function(){if(this.$store.getters.getError)return this.snackbar=!0,this.$store.getters.getError}}}),H=L,B=(r("23c8"),r("b0af")),q=r("a523"),D=r("0789"),J=r("ce87"),N=r("adda"),Y=r("2db4"),Z=Object(f["a"])(H,P,M,!1,null,null,null),U=Z.exports;v()(Z,{VBtn:d["a"],VCard:B["a"],VContainer:q["a"],VExpandTransition:D["a"],VFlex:m["a"],VHover:J["a"],VIcon:x["a"],VImg:N["a"],VLayout:b["a"],VSnackbar:Y["a"]});var z={name:"App",components:{Search:C,Title:j,Results:U},data:function(){return{}}},G=z,K=r("7496"),Q=r("8b9c"),W=Object(f["a"])(G,o,s,!1,null,null,null),X=W.exports;v()(W,{VApp:K["a"],VContent:h["a"],VFlex:m["a"],VLayout:b["a"],VParallax:Q["a"]});var tt=r("2f62"),et=r("bc3a"),rt=r.n(et);a["a"].use(tt["a"]);var at=new tt["a"].Store({state:{photos:[],error:""},getters:{getError:function(t){return t.error},getPhotos:function(t){return t.photos}},mutations:{getError:function(t,e){t.error=e},getPhotos:function(t,e){t.photos=e.photos}},actions:{error:function(t,e){t.commit("getError",e)},feedback:function(t,e){t.commit("getFeedback",e)},getPhotos:function(t,e){var r=rt.a.post("/api/photos",{sol:e.sol,camera:e.camera});return r.then(function(e){return t.commit("getPhotos",{photos:e.data.photos}),t.commit("getError","".concat(e.data.photos.length," photos matched your search criteria")),e.data.photos}).catch(function(e){t.commit("getError",e.message)})}}});a["a"].config.productionTip=!1,new a["a"]({store:at,render:function(t){return t(X)}}).$mount("#app")},d892:function(t,e,r){}});
//# sourceMappingURL=app.c2af7307.js.map