(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-table/components/uni-td/uni-td"],{"27d0":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"uniTd",options:{virtualHost:!0},props:{width:{type:[String,Number],default:""},align:{type:String,default:"left"},rowspan:{type:[Number,String],default:1},colspan:{type:[Number,String],default:1}},data:function(){return{border:!1}},created:function(){this.root=this.getTable(),this.border=this.root.border},methods:{getTable:function(){var t=this.$parent,n=t.$options.name;while("uniTable"!==n){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};n.default=r},"2e75":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var r=function(){var t=this.$createElement;this._self._c},u=[]},3977:function(t,n,e){"use strict";e.r(n);var r=e("2e75"),u=e("5f52");for(var a in u)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("ae23");var i=e("f0c5"),o=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);n["default"]=o.exports},"5f52":function(t,n,e){"use strict";e.r(n);var r=e("27d0"),u=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},aac9:function(t,n,e){},ae23:function(t,n,e){"use strict";var r=e("aac9"),u=e.n(r);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-table/components/uni-td/uni-td-create-component',
    {
        'uni_modules/uni-table/components/uni-td/uni-td-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3977"))
        })
    },
    [['uni_modules/uni-table/components/uni-td/uni-td-create-component']]
]);