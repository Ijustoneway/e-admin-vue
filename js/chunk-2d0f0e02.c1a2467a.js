(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0e02"],{"9dde":function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"com-container"},[r("el-form",{ref:"form",attrs:{"label-width":"96px",model:e.form,rules:e.rules,size:"small"}},[r("el-form-item",{attrs:{label:"上传图片: ",prop:"urls"}},[r("com-upload-image-multiple",{model:{value:e.form.urls,callback:function(t){e.$set(e.form,"urls",t)},expression:"form.urls"}})],1),r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"primary",size:"small",loading:e.submiting},on:{click:e.onSubmit}},[e._v("确 定")])],1)],1)],1)},s=[],o={data:function(){return{submiting:!1,form:{urls:[]},rules:{urls:[{required:!0,message:"请上传图片",trigger:"blur"}]}}},mounted:function(){var e=this;setTimeout((function(){e.form.urls=["https://test.qiniu.qyhever.com/1580292629299b37be1e0ac312","https://test.qiniu.qyhever.com/15802926307285ef893ee8ca4f"]}),1e3)},methods:{onSubmit:function(){var e=this;this.$refs.form.validate((function(t){t&&console.log(e.form.urls)}))}}},i=o,u=r("2877"),n=Object(u["a"])(i,l,s,!1,null,null,null);t["default"]=n.exports}}]);