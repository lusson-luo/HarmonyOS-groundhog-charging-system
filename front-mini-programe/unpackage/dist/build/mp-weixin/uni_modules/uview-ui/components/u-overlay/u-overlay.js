(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-overlay/u-overlay"],{"0bd1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{show:{type:Boolean,default:t.$u.props.overlay.show},zIndex:{type:[String,Number],default:t.$u.props.overlay.zIndex},duration:{type:[String,Number],default:t.$u.props.overlay.duration},opacity:{type:[String,Number],default:t.$u.props.overlay.opacity}}};e.default=n}).call(this,n("543d")["default"])},2068:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var u={uTransition:function(){return n.e("uni_modules/uview-ui/components/u-transition/u-transition").then(n.bind(null,"6d54"))}},i=function(){var t=this.$createElement;this._self._c},o=[]},"2f58":function(t,e,n){},a1ab:function(t,e,n){"use strict";n.r(e);var u=n("da40"),i=n.n(u);for(var o in u)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=i.a},ccbc:function(t,e,n){"use strict";var u=n("2f58"),i=n.n(u);i.a},d999:function(t,e,n){"use strict";n.r(e);var u=n("2068"),i=n("a1ab");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("ccbc");var a=n("f0c5"),r=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,"72cb839f",null,!1,u["a"],void 0);e["default"]=r.exports},da40:function(t,e,n){"use strict";(function(t){var u=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("0bd1")),o={name:"u-overlay",mixins:[t.$u.mpMixin,t.$u.mixin,i.default],computed:{overlayStyle:function(){var e={position:"fixed",top:0,left:0,right:0,zIndex:this.zIndex,bottom:0,"background-color":"rgba(0, 0, 0, ".concat(this.opacity,")")};return t.$u.deepMerge(e,t.$u.addStyle(this.customStyle))}},methods:{clickHandler:function(){this.$emit("click")}}};e.default=o}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-overlay/u-overlay-create-component',
    {
        'uni_modules/uview-ui/components/u-overlay/u-overlay-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d999"))
        })
    },
    [['uni_modules/uview-ui/components/u-overlay/u-overlay-create-component']]
]);
