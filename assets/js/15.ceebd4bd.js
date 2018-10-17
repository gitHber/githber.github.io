(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{202:function(e,t,i){"use strict";i.r(t);var n=i(0),a=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"重绘与回流-重排"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#重绘与回流-重排","aria-hidden":"true"}},[e._v("#")]),e._v(" 重绘与回流(重排)")]),i("h2",{attrs:{id:"概念"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[e._v("#")]),e._v(" 概念")]),i("p",[e._v("首先我们先明确文档加载到完成的过程：")]),i("ol",[i("li",[e._v("根据文档生成DOM树(包括display:none)")]),i("li",[e._v("在DOM树基础上根据节点的几何属性(margin/padding/width/height)生成render树(不包括display:none,但包括visibility:hiddenn)")]),i("li",[e._v("在render树基础上进一步渲染css样式")])]),i("p",[e._v("回流(reflow): "),i("code",[e._v("当render树中的元素因为大小边距位置等问题繁盛改变而需要重建的过程叫做回流")]),i("br"),e._v("\n重绘(repaint): "),i("code",[e._v("当元素的一部分属性发生改变，如外观颜色等不会引起布局的变化而需要重新渲染的过程叫做重绘")])]),i("blockquote",[i("p",[e._v("回流比重绘的代价要高，至于具体花销这render树的节点树多少有关。回流一定伴随这重绘，而重绘不一定引起回流。")])]),i("h2",{attrs:{id:"尽量避免"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#尽量避免","aria-hidden":"true"}},[e._v("#")]),e._v(" 尽量避免")]),i("ol",[i("li",[e._v("将那些改变样式的操作集合在一次完事，直接改变className或者cssText")]),i("li",[e._v("让要操作的元素进行离线处理，处理完事后在一起更新"),i("br"),e._v("\n(1) 使用DocumentFragment进行缓存操作，引发一次回流和重绘\n(2) 使用display:none,只引发两次回流和重绘\n(3) 使用cloneNode和replaceChild，只引发一次回流和重绘")]),i("li",[e._v("不要经常访问引起浏览器flush队列的属性，高频访问请先缓存")]),i("li",[e._v("将需要多次重排的元素，position设置为absolute或fixed，这样脱离文档流")]),i("li",[e._v("尽量不要使用表格布局")])])])}],!1,null,null,null);a.options.__file="3.md";t.default=a.exports}}]);