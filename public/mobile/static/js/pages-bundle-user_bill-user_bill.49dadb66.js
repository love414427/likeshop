(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bundle-user_bill-user_bill"],{"02c8":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:{active:t.active,inactive:!t.active,tab:!0},style:t.shouldShow?"":"display: none;"},[t.shouldRender?t._t("default"):t._e()],2)},o=[]},"0a8d":function(t,e,i){"use strict";i.r(e);var a=i("4535"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"0ba3":function(t,e,i){"use strict";i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("e262"),n=i("a6e8"),o=i("43c7"),s={data:function(){return{active:0,lists:[],page:1,loadingStatus:n.loadingType.LOADING}},components:{},props:{},onLoad:function(t){console.log(t.type,"option.type"),this.active=parseInt(t.type),this.getAccountLogFun(this.active)},onReachBottom:function(){this.getAccountLogFun(this.active)},methods:{onChange:function(t){this.active=t,this.cleanStatus(),this.getAccountLogFun(t)},cleanStatus:function(){this.page=1,this.lists=[],this.loadingStatus=n.loadingType.LOADING},getAccountLogFun:function(t){var e=this,i=0;i=0==t?0:1==t?2:1;var n=this.lists,s=this.loadingStatus,r=this.page;(0,o.loadingFun)(a.getAccountLog,r,n,s,{source:1,type:i}).then((function(t){t&&(e.page=t.page,e.lists=t.dataList,e.loadingStatus=t.status)}))}}};e.default=s},"0dc5":function(t,e,i){var a=i("9a92");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("35fc9e13",a,!0,{sourceMap:!1,shadowMode:!1})},"0e8f":function(t,e,i){var a=i("488f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("590bd8ae",a,!0,{sourceMap:!1,shadowMode:!1})},"11cc":function(t,e,i){"use strict";i("a630"),i("a9e3"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{color:String,vertical:Boolean,type:{type:String,default:"spinner"},size:{type:Number,default:40},textSize:String},data:function(){return{array12:Array.from({length:12})}}};e.default=a},"11db":function(t,e,i){var a=i("1862");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1dcb1ed7",a,!0,{sourceMap:!1,shadowMode:!1})},1440:function(t,e,i){"use strict";var a=i("46da"),n=i.n(a);n.a},1862:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".tab.active[data-v-469015b5]{height:auto}.tab.inactive[data-v-469015b5]{height:0;overflow:visible}",""]),t.exports=e},"1bd0":function(t,e,i){"use strict";i.r(e);var a=i("0ba3"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"210d":function(t,e,i){"use strict";i.r(e);var a=i("da9d"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"2ef7":function(t,e,i){"use strict";i.r(e);var a=i("e74b"),n=i("0a8d");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("7e5d");var s,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"6dc30303",null,!1,a["a"],s);e["default"]=l.exports},"32c7":function(t,e,i){"use strict";i.r(e);var a=i("a793"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},4535:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},components:{},props:{status:{type:String,default:"loading"},errorText:{type:String,default:"加载失败，点击重新加载"},loadingText:{type:String,default:"加载中..."},finishedText:{type:String,default:"我可是有底线的～"},slotEmpty:{type:Boolean,default:!1},color:{type:String,default:"#666"}},methods:{onRefresh:function(){this.$emit("refresh")}}};e.default=a},"46da":function(t,e,i){var a=i("e75a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("678f7d50",a,!0,{sourceMap:!1,shadowMode:!1})},"488f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".loading-footer[data-v-6dc30303]{padding:%?30?% 0;color:#666}",""]),t.exports=e},"5ac2":function(t,e,i){"use strict";i.r(e);var a=i("b70ea"),n=i("32c7");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("1440");var s,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"43b0f33a",null,!1,a["a"],s);e["default"]=l.exports},"7cee":function(t,e,i){"use strict";i.r(e);var a=i("c175"),n=i("1bd0");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9269");var s,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"9d456358",null,!1,a["a"],s);e["default"]=l.exports},"7e5d":function(t,e,i){"use strict";var a=i("0e8f"),n=i.n(a);n.a},"8c2f":function(t,e,i){"use strict";var a=i("9166"),n=i.n(a);n.a},9166:function(t,e,i){var a=i("a6e2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("59fadd79",a,!0,{sourceMap:!1,shadowMode:!1})},9269:function(t,e,i){"use strict";var a=i("0dc5"),n=i.n(a);n.a},"9a92":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* pages/user_bill/user_bill.wxss */.user-bill .list .item .time[data-v-9d456358]{padding:%?30?%}.user-bill .list .item .bill-list .bill-item[data-v-9d456358]{padding:%?20?% %?30?%;border-bottom:1px solid #e5e5e5}.user-bill .list .item .bill-list .bill-item .income[data-v-9d456358]{color:#ff2c3c}.order-null[data-v-9d456358]{padding-top:%?200?%}.data-null[data-v-9d456358]{padding-top:%?150?%}',""]),t.exports=e},a6e2:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'[data-v-13a5beb4]:host{font-size:0;line-height:1}.loading[data-v-13a5beb4]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc}.loading__spinner[data-v-13a5beb4]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?45?%;max-width:100%;max-height:100%;height:%?45?%;-webkit-animation:rotate-data-v-13a5beb4 .8s linear infinite;animation:rotate-data-v-13a5beb4 .8s linear infinite}.loading__spinner--spinner[data-v-13a5beb4]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.loading__spinner--circular[data-v-13a5beb4]{border:%?2?% solid transparent;border-top-color:initial;border-radius:100%}.loading__text[data-v-13a5beb4]{margin-left:%?16?%;color:#969799;font-size:%?28?%;line-height:%?40?%}.loading__text[data-v-13a5beb4]:empty{display:none}.loading--vertical[data-v-13a5beb4]{-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.loading--vertical .loading__text[data-v-13a5beb4]{margin:%?16?% 0 0}.loading__dot[data-v-13a5beb4]{position:absolute;top:0;left:0;width:100%;height:100%}.loading__dot[data-v-13a5beb4]:before{display:block;width:%?4?%;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.loading__dot[data-v-13a5beb4]:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.loading__dot[data-v-13a5beb4]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.loading__dot[data-v-13a5beb4]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.loading__dot[data-v-13a5beb4]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.loading__dot[data-v-13a5beb4]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.loading__dot[data-v-13a5beb4]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.loading__dot[data-v-13a5beb4]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.loading__dot[data-v-13a5beb4]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.loading__dot[data-v-13a5beb4]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.loading__dot[data-v-13a5beb4]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.loading__dot[data-v-13a5beb4]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.loading__dot[data-v-13a5beb4]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes rotate-data-v-13a5beb4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-13a5beb4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},a793:function(t,e,i){"use strict";i("4160"),i("d81d"),i("a9e3"),i("ac1f"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tabs",props:{active:{type:Number,default:0},config:{type:Object,default:function(){return{}}}},provide:function(){return{tabs:this}},data:function(){return{tabList:[],tagIndex:0,slider:{left:0,width:0,scrollLeft:0},scorll:{},defaultConfig:{bgColor:"#fff",fontSize:26,color:"#333",activeColor:"#FF2C3C",itemWidth:0,underLinePadding:10,underLineWidth:0,underLineHeight:4,underLineColor:"#FF2C3C"}}},watch:{},created:function(){this.childrens=[]},mounted:function(){this.updateTabs()},methods:{updateTabs:function(){var t=this;this.tabList=this.childrens.map((function(t){var e=t.title,i=t.info,a=t.name,n=t.dot,o=t.titleStyle,s=t.active,r=t.updateRender;return{title:e,info:i,name:a,dot:n,titleStyle:o,active:s,updateRender:r}})),this.updateConfig(),this.tagIndex=this.active,this.$nextTick((function(){t.calcScrollPosition()}))},updateConfig:function(){this.defaultConfig=Object.assign(this.defaultConfig,this.config)},calcScrollPosition:function(){var t=this,e=uni.createSelectorQuery().in(this);e.select("#_scroll").boundingClientRect((function(e){t.scorll=e,t.updateTabWidth()})).exec()},updateTabWidth:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=this.tabList;if(0==i.length)return!1;var a=uni.createSelectorQuery().in(this);a.select("#_tab_"+e).boundingClientRect((function(a){i[e]._slider={width:a.width,left:a.left,scrollLeft:a.left-(i[e-1]?i[e-1]._slider.width:0)},t.tagIndex==e&&t.tabToIndex(t.tagIndex),e++,i.length>e&&t.updateTabWidth(e)})).exec()},tabToIndex:function(t){var e=this,i=this.tabList[t]._slider,a=uni.upx2px(this.defaultConfig.underLineWidth);a||(a=this.defaultConfig.itemWidth?uni.upx2px(this.defaultConfig.itemWidth)/3:this.tabList[t]["title"].length*uni.upx2px(this.defaultConfig.fontSize),a+=2*uni.upx2px(this.defaultConfig.underLinePadding)),this.childrens.forEach((function(i,a){var n=a===t;n===i.active&&i.inited||i.updateRender(n,e)}));var n=this.scorll.left||0;this.slider={left:i.left-n+(i.width-a)/2,width:a,scrollLeft:i.scrollLeft-n}},tabClick:function(t){this.tagIndex=t,this.tabToIndex(t),this.$emit("change",t)}}};e.default=a},aa48:function(t,e,i){"use strict";var a=i("11db"),n=i.n(a);n.a},b70ea:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"_tab-box",style:{fontSize:t.defaultConfig.fontSize+"rpx",color:t.defaultConfig.color}},[i("v-uni-scroll-view",{staticClass:"scroll-view-h",style:{backgroundColor:t.defaultConfig.bgColor},attrs:{id:"_scroll","scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.slider.scrollLeft}},[i("v-uni-view",{staticClass:"_scroll-content"},[i("v-uni-view",{staticClass:"_tab-item-box",class:[t.defaultConfig.itemWidth?"_clamp":"_flex"]},[t._l(t.tabList,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"_item",class:{_active:t.tagIndex===a},style:{color:t.tagIndex==a?t.defaultConfig.activeColor:t.defaultConfig.color,width:t.defaultConfig.itemWidth?t.defaultConfig.itemWidth+"rpx":""},attrs:{id:"_tab_"+a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(a)}}},[t._v(t._s(e.title))])]}))],2),i("v-uni-view",{staticClass:"_underline",style:{transform:"translateX("+t.slider.left+"px)",width:t.slider.width+"px",height:t.defaultConfig.underLineHeight+"rpx",backgroundColor:t.defaultConfig.underLineColor}})],1)],1),i("v-uni-view",{staticClass:"tab-content"},[i("v-uni-view",[t._t("default")],2)],1)],1)},o=[]},c175:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={tabs:i("5ac2").default,tab:i("dd61").default,loadingFooter:i("2ef7").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"user-bill"},[i("tabs",{attrs:{active:t.active,"line-width":"40"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}},[i("tab",{attrs:{title:"全部"}},[i("v-uni-view",{staticClass:"list mt20"},t._l(t.lists,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("v-uni-view",{staticClass:"bill-list bg-white"},[i("v-uni-view",{staticClass:"bill-item row-between"},[i("v-uni-view",[i("v-uni-view",{staticClass:"black mb10"},[t._v(t._s(e.source_type))]),i("v-uni-view",{staticClass:"xs muted"},[t._v(t._s(e.create_time))])],1),i("v-uni-view",{class:"lg "+(1==e.change_type?"income":"")},[t._v(t._s(e.change_amount))])],1)],1)],1)})),1),i("loading-footer",{attrs:{status:t.loadingStatus,slotEmpty:!0}},[i("v-uni-view",{staticClass:"data-null column-center",attrs:{slot:"empty"},slot:"empty"},[i("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/order_null.png"}}),i("v-uni-text",{staticClass:"nr muted"},[t._v("暂无记录～")])],1)],1)],1),i("tab",{attrs:{title:"支出"}},[i("v-uni-view",{staticClass:"list mt20"},t._l(t.lists,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("v-uni-view",{staticClass:"bill-list bg-white"},[i("v-uni-view",{staticClass:"bill-item row-between"},[i("v-uni-view",[i("v-uni-view",{staticClass:"black mb10"},[t._v(t._s(e.source_type))]),i("v-uni-view",{staticClass:"xs muted"},[t._v(t._s(e.create_time))])],1),i("v-uni-view",{staticClass:"lg"},[t._v(t._s(e.change_amount))])],1)],1)],1)})),1),i("loading-footer",{attrs:{status:t.loadingStatus,slotEmpty:!0}},[i("v-uni-view",{staticClass:"data-null column-center",attrs:{slot:"empty"},slot:"empty"},[i("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/order_null.png"}}),i("v-uni-text",{staticClass:"nr muted"},[t._v("暂无支出记录～")])],1)],1)],1),i("tab",{attrs:{title:"收入"}},[i("v-uni-view",{staticClass:"list mt20"},t._l(t.lists,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("v-uni-view",{staticClass:"bill-list bg-white"},[i("v-uni-view",{staticClass:"bill-item row-between"},[i("v-uni-view",[i("v-uni-view",{staticClass:"black mb10"},[t._v(t._s(e.source_type))]),i("v-uni-view",{staticClass:"xs muted"},[t._v(t._s(e.create_time))])],1),i("v-uni-view",{staticClass:"lg income"},[t._v(t._s(e.change_amount))])],1)],1)],1)})),1),i("loading-footer",{attrs:{status:t.loadingStatus,slotEmpty:!0}},[i("v-uni-view",{staticClass:"data-null column-center",attrs:{slot:"empty"},slot:"empty"},[i("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/order_null.png"}}),i("v-uni-text",{staticClass:"nr muted"},[t._v("暂无收入记录～")])],1)],1)],1)],1)],1)},o=[]},d44c:function(t,e,i){"use strict";i.r(e);var a=i("11cc"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},da9d:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{dot:{type:Boolean},info:{type:null},title:{type:String},titleStyle:{type:String},name:{type:[Number,String],value:""}},inject:["tabs"],data:function(){return{active:!1,shouldShow:!1,shouldRender:!1}},created:function(){this.tabs.childrens.push(this)},mounted:function(){this.update()},methods:{getComputedName:function(){return""!==this.data.name?this.data.name:this.index},updateRender:function(t,e){this.inited=this.inited||t,this.active=t,this.shouldRender=this.inited,this.shouldShow=t},update:function(){this.tabs&&this.tabs.updateTabs()}},computed:{changeData:function(){var t=this.dot,e=this.info,i=this.title,a=this.titleStyle;return{dot:t,info:e,title:i,titleStyle:a}}},watch:{changeData:function(t){this.update()}}};e.default=a},db76:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:"loading "+(t.vertical?"loading--vertical":"")},[i("v-uni-view",{class:"loading__spinner loading__spinner--"+t.type,style:{color:t.color,width:t.size+"rpx",height:t.size+"rpx"}},t._l(t.array12,(function(e,a){return"spinner"===t.type?i("v-uni-view",{key:a,staticClass:"loading__dot"}):t._e()})),1),i("v-uni-view",{staticClass:"loading__text",style:{"font-size":t.textSize+"rpx",color:t.color}},[t._t("default")],2)],1)},o=[]},dd2e:function(t,e,i){"use strict";i.r(e);var a=i("db76"),n=i("d44c");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("8c2f");var s,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"13a5beb4",null,!1,a["a"],s);e["default"]=l.exports},dd61:function(t,e,i){"use strict";i.r(e);var a=i("02c8"),n=i("210d");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("aa48");var s,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"469015b5",null,!1,a["a"],s);e["default"]=l.exports},e74b:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={loading:i("dd2e").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"loading-footer row-center",style:"color: "+t.color},["loading"===t.status?i("v-uni-view",{staticClass:"loading row"},[i("loading",{staticClass:"mr20",attrs:{color:t.color}}),i("v-uni-text",{style:"color: "+t.color},[t._v(t._s(t.loadingText))])],1):t._e(),"finished"===t.status?i("v-uni-view",{staticClass:"finished"},[t._v(t._s(t.finishedText))]):t._e(),"error"===t.status?i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onRefresh.apply(void 0,arguments)}}},[t._v(t._s(t.errorText))]):t._e(),"empty"===t.status?i("v-uni-view",{staticClass:"empty"},[t.slotEmpty?t._t("empty"):i("v-uni-text",[t._v("暂无数据")])],2):t._e()],1)},o=[]},e75a:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */._tab-box[data-v-43b0f33a]{width:100%;font-size:%?26?%;position:relative;z-index:10}._tab-box .scroll-view-h[data-v-43b0f33a]{height:%?80?%;line-height:%?80?%;white-space:nowrap;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}._tab-box .scroll-view-h ._scroll-content[data-v-43b0f33a]{width:100%;height:100%;position:relative;display:inline-block}._tab-box .scroll-view-h ._scroll-content ._tab-item-box[data-v-43b0f33a]{height:100%;display:inline-block}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._flex[data-v-43b0f33a]{display:-webkit-box;display:-webkit-flex;display:flex}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._flex ._item[data-v-43b0f33a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._clamp ._item[data-v-43b0f33a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._tab-box .scroll-view-h ._scroll-content ._tab-item-box ._item[data-v-43b0f33a]{height:100%;display:inline-block;text-align:center;position:relative;text-align:center;color:#333}._tab-box .scroll-view-h ._scroll-content ._tab-item-box ._item._active[data-v-43b0f33a]{color:#e54d42}._tab-box .scroll-view-h ._scroll-content ._underline[data-v-43b0f33a]{height:%?4?%;background-color:#e54d42;border-radius:%?6?%;-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;position:absolute;bottom:0}',""]),t.exports=e}}]);