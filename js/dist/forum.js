module.exports=function(t){var o={};function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=o,r.d=function(t,o,e){r.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)r.d(e,n,function(o){return t[o]}.bind(null,n));return e},r.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="",r(r.s=9)}([function(t,o){t.exports=flarum.core.compat.app},function(t,o,r){"use strict";function e(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}r.d(o,"a",function(){return e})},function(t,o){t.exports=flarum.core.compat["helpers/icon"]},function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat["components/TextEditor"]},function(t,o){t.exports=flarum.core.compat.Component},function(t,o){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,o){t.exports=flarum.core.compat["components/Alert"]},,function(t,o,r){"use strict";r.r(o);var e=r(0),n=r.n(e),a=r(3),i=r(4),s=r.n(i),u=r(1),c=r(5),p=r.n(c),l=r(2),f=r.n(l),d=r(6),h=r.n(d),b=r(7),g=r.n(b),y=function(t){function o(){return t.apply(this,arguments)||this}Object(u.a)(o,t);var r=o.prototype;return r.init=function(){this.isLoading=!1,this.isSuccess=!1,document.addEventListener("paste",this.paste.bind(this))},r.view=function(){var t,o=this,r={className:"Button hasIcon botfactoryit-upload-button",title:app.translator.trans("botfactoryit-upload.forum.upload"),config:function(t){o.domElement=t,$(t).tooltip()}};t=this.isLoading?h.a.component({className:"Button-icon"}):this.isSuccess?f()("fas fa-check green",{className:"Button-icon"}):f()("far fa-image",{className:"Button-icon"});var e="";return this.isLoading?e=app.translator.trans("botfactoryit-upload.forum.loading"):this.isSuccess&&(e=app.translator.trans("botfactoryit-upload.forum.done")),""==e&&(r.className+=" Button--icon"),m("div",r,[t,m("span",{className:"Button-label"},e),m("form#botfactoryit-upload-form",[m("input",{type:"file",accept:"image/*",onchange:this.formUpload.bind(this),disabled:this.isLoading||this.isSuccess||this.isError})])])},r.paste=function(t){if(!this.isLoading&&t.clipboardData&&t.clipboardData.items){var o=t.clipboardData.items[0];if(!o.type.startsWith("image"))return;var r=o.getAsFile();this.upload(r)}},r.formUpload=function(t){var o=$(t.target)[0].files[0];this.upload(o)},r.upload=function(t){var o=this;$(this.domElement).tooltip("hide"),this.isLoading=!0,m.redraw();var r=new FormData;r.append("image",t),r.append("d",app.current.discussion.id()),app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/upload",serialize:function(t){return t},data:r,errorHandler:function(t){return o.error(t)}}).then(this.success.bind(this))},r.success=function(t){var o=this;$("#botfactoryit-upload-form input").val(""),this.isLoading=!1,this.isSuccess=!0,m.redraw();var r="[IMMAGINE]"+t.fileName+"[/IMMAGINE]";0==this.props.textArea.getSelectionRange()[0]?r+="\n\n":r="\n\n"+r+"\n\n",this.props.textArea.setValue(this.props.textArea.value().trim()),this.props.textArea.insertAtCursor(r),setTimeout(function(){o.isSuccess=!1,m.redraw()},2e3)},r.error=function(t){console.error(t),$("#botfactoryit-upload-form input").val(""),this.isLoading=!1,m.redraw(),app.alerts.show(new g.a({type:"error",children:this.errorToMessage(t)}))},r.errorToMessage=function(t){var o;return o=415==t.status?"botfactoryit-upload.forum.error.unsupported":400==t.status?"botfactoryit-upload.forum.error.too-big":"core.lib.error.generic_message",app.translator.trans(o)},o}(p.a);n.a.initializers.add("botfactoryit-upload",function(){Object(a.extend)(s.a.prototype,"controlItems",function(t){t.add("botfactoryit-upload",m(y,{textArea:this}))})})}]);
//# sourceMappingURL=forum.js.map