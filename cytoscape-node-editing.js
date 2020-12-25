!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.cytoscapeNodeEditing=t():e.cytoscapeNodeEditing=t()}(window,(function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";var n,o,s,r,a,d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=Math.max,s=Date.now||function(){return(new Date).getTime()},r=function(e,t,i){var n,r,a,h,u,p,c,f,g,l=0,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");if(t=t<0?0:+t||0,!0===i){var v=!0;y=!1}else g=void 0===(f=i)?"undefined":d(f),!f||"object"!=g&&"function"!=g||(v=!!i.leading,m="maxWait"in i&&o(+i.maxWait||0,t),y="trailing"in i?!!i.trailing:y);function b(t,i){i&&clearTimeout(i),r=p=c=void 0,t&&(l=s(),a=e.apply(u,n),p||r||(n=u=void 0))}function x(){var e=t-(s()-h);e<=0||e>t?b(c,r):p=setTimeout(x,e)}function C(){b(y,p)}function M(){if(n=arguments,h=s(),u=this,c=y&&(p||!v),!1===m)var i=v&&!p;else{r||v||(l=h);var o=m-(h-l),d=o<=0||o>m;d?(r&&(r=clearTimeout(r)),l=h,a=e.apply(u,n)):r||(r=setTimeout(C,o))}return d&&p?p=clearTimeout(p):p||t===m||(p=setTimeout(x,t)),i&&(d=!0,a=e.apply(u,n)),!d||p||r||(n=u=void 0),a}return M.cancel=function(){p&&clearTimeout(p),r&&clearTimeout(r),l=0,r=p=c=void 0},M},a=function(e,t,i){if(e&&t&&i){var n=0;e("core","nodeEditing",(function(e){var s,a=this;if("get"===e)return o(a,"api");var d,h,u=t.extend(!0,{padding:5,undoable:!0,grappleSize:8,grappleColor:"green",inactiveGrappleStroke:"inside 1px blue",boundingRectangleLineDash:[4,8],boundingRectangleLineColor:"red",boundingRectangleLineWidth:1.5,zIndex:999,moveSelectedNodesOnKeyEvents:function(){return!0},minWidth:function(e){var t=e.data("resizeMinWidth");return t||15},minHeight:function(e){var t=e.data("resizeMinHeight");return t||15},getCompoundMinWidth:function(e){return e.css("min-width")},getCompoundMinHeight:function(e){return e.css("min-height")},getCompoundMinWidthBiasRight:function(e){return e.css("min-width-bias-right")},getCompoundMinWidthBiasLeft:function(e){return e.css("min-width-bias-left")},getCompoundMinHeightBiasTop:function(e){return e.css("min-height-bias-top")},getCompoundMinHeightBiasBottom:function(e){return e.css("min-height-bias-bottom")},setWidth:function(e,t){e.css("width",t)},setHeight:function(e,t){e.css("height",t)},setCompoundMinWidth:function(e,t){e.css("min-width",t)},setCompoundMinHeight:function(e,t){e.css("min-height",t)},setCompoundMinWidthBiasLeft:function(e,t){e.css("min-width-bias-left",t)},setCompoundMinWidthBiasRight:function(e,t){e.css("min-width-bias-right",t)},setCompoundMinHeightBiasTop:function(e,t){e.css("min-height-bias-top",t)},setCompoundMinHeightBiasBottom:function(e,t){e.css("min-height-bias-bottom",t)},isFixedAspectRatioResizeMode:function(e){return e.is(".fixedAspectRatioResizeMode")},isNoResizeMode:function(e){return e.is(".noResizeMode, :parent")},isNoControlsMode:function(e){return e.is(".noControlsMode")},cursors:{default:"default",inactive:"not-allowed",nw:"nw-resize",n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize"},resizeToContentCueEnabled:function(e){return!0},resizeToContentFunction:void 0,resizeToContentCuePosition:"bottom-right",resizeToContentCueImage:"/node_modules/cytoscape-node-editing/resizeCue.svg",enableMovementWithArrowKeys:!0,autoRemoveResizeToContentCue:!1},e),p=t(a.container()),c="cy-node-edge-editing-stage"+n;n++;var f,g,l=t('<div id="'+c+'"></div>');p.find("#"+c).length<1&&p.append(l),(f=i.stages.length<n?new i.Stage({id:"node-edge-editing-stage",container:c,width:p.width(),height:p.height()}):i.stages[n-1]).getChildren().length<1?(g=new i.Layer,f.add(g)):g=f.getChildren()[0];var m=r((function(){l.attr("height",p.height()).attr("width",p.width()).css({position:"absolute",top:0,left:0,"z-index":u.zIndex}),setTimeout((function(){var e=l.offset(),t=p.offset();l.css({top:-(e.top-t.top),left:-(e.left-t.left)}),g.getStage().setWidth(p.width()),g.getStage().setHeight(p.height())}),0)}),250);m(),t(window).on("resize",m);var y=function(e){this.parent=e,this.boundingRectangle=new v(e);var t=["topleft","topcenter","topright","centerright","bottomright","bottomcenter","bottomleft","centerleft"];this.grapples=[];for(var i=0;i<t.length;i++){var n=t[i],o=!0;(u.isNoResizeMode(e)||u.isFixedAspectRatioResizeMode(e)&&n.indexOf("center")>=0)&&(o=!1),this.grapples.push(new b(e,this,n,o))}!u.resizeToContentCueEnabled(e)||u.isNoResizeMode(e)||u.autoRemoveResizeToContentCue&&(!u.autoRemoveResizeToContentCue||w(e))||(this.resizeCue=new x(e,this)),g.draw()};y.prototype.update=function(){this.boundingRectangle.update();for(var e=0;e<this.grapples.length;e++)this.grapples[e].update();var t=this.boundingRectangle.parent,i=u.resizeToContentCueEnabled(t)&&!u.isNoResizeMode(t)&&(!u.autoRemoveResizeToContentCue||u.autoRemoveResizeToContentCue&&!w(t));this.resizeCue&&i?this.resizeCue.update():this.resizeCue&&!i?(this.resizeCue.unbindEvents(),this.resizeCue.shape.destroy(),delete this.resizeCue):!this.resizeCue&&i&&(this.resizeCue=new x(t,this)),g.draw()},y.prototype.remove=function(){this.boundingRectangle.shape.destroy(),delete this.boundingRectangle;for(var e=0;e<this.grapples.length;e++)this.grapples[e].unbindAllEvents(),this.grapples[e].shape.destroy();delete this.grapples,this.resizeCue&&(this.resizeCue.unbindEvents(),this.resizeCue.shape.destroy(),delete this.resizeCue),g.draw()};var v=function(e){this.parent=e,this.shape=null;var t=e.renderedPosition(),n=e.renderedOuterWidth()+S(),o=e.renderedOuterHeight()+S(),s={x:t.x-n/2,y:t.y-o/2},r=new i.Rect({x:s.x,y:s.y,width:n,height:o,stroke:u.boundingRectangleLineColor,strokeWidth:u.boundingRectangleLineWidth,dash:u.boundingRectangleLineDash});g.add(r),this.shape=r};v.prototype.update=function(){var e=this.parent.renderedPosition(),t=this.parent.renderedOuterWidth()+S(),i=this.parent.renderedOuterHeight()+S(),n={x:e.x-t/2,y:e.y-i/2};this.shape.x(n.x),this.shape.y(n.y),this.shape.width(t),this.shape.height(i)};var b=function(e,t,n,o){this.parent=e,this.location=n,this.isActive=o,this.resizeControls=t;var s=e.renderedPosition(),r=e.renderedOuterWidth()+S(),a=e.renderedOuterHeight()+S(),d={x:s.x-r/2,y:s.y-a/2},h=R(e);if(this.shape=new i.Rect({width:h,height:h}),this.isActive)this.shape.fill(u.grappleColor);else{var p=u.inactiveGrappleStroke.split(" "),c=p[2],f=parseInt(p[1].replace(/px/,""));this.shape.stroke(c),this.shape.strokeWidth(f)}this.updateShapePosition(d,r,a,h),g.add(this.shape),this.isActive?this.bindActiveEvents():this.bindInactiveEvents()};b.prototype.bindInactiveEvents=function(){var e=function e(t){a.boxSelectionEnabled(!0),a.panningEnabled(!0),a.autounselectify(!1),a.autoungrabify(!1),g.getStage().off("contentTouchend contentMouseup",e)};this.shape.on("mouseenter",(function(e){e.target.getStage().container().style.cursor=u.cursors.inactive})),this.shape.on("mouseleave",(function(e){null!=e.target.getStage()&&(e.target.getStage().container().style.cursor=u.cursors.default)})),this.shape.on("touchstart mousedown",(function(t){a.boxSelectionEnabled(!1),a.panningEnabled(!1),a.autounselectify(!0),a.autoungrabify(!0),g.getStage().on("contentTouchend contentMouseup",e)}))},b.prototype.bindActiveEvents=function(){var e,t,i,n,o,s,r=this,d=r.parent,h={},p={topleft:"nw",topcenter:"n",topright:"ne",centerright:"e",bottomright:"se",bottomcenter:"s",bottomleft:"sw",centerleft:"w"},c=function e(t){a.style().selector("core").style("active-bg-opacity",o).update(),r.shape.getStage().container().style.cursor=u.cursors.default,a.boxSelectionEnabled(!0),a.panningEnabled(!0),setTimeout((function(){a.autounselectify(!1),a.autoungrabify(!1)}),0),a.trigger("nodeediting.resizeend",[r.location,r.parent]),g.getStage().off("contentTouchend contentMouseup",e),g.getStage().off("contentTouchmove contentMousemove",f),r.shape.on("mouseenter",l),r.shape.on("mouseleave",m)},f=function(o){var p=r.shape.getStage().getPointerPosition(),c=p.x,f=p.y,g=(f-h.y)/a.zoom(),l=(c-h.x)/a.zoom(),m=r.location;a.batch((function(){var o=u.isFixedAspectRatioResizeMode(d);if(!(o&&m.indexOf("center")>=0||u.isNoResizeMode(d))){if(o){var r=n(d)/i(d),a=(Math.min(l,g),"topright"==m||"bottomleft"==m);l>g?g=l*r*(a?-1:1):l=g/r*(a?-1:1)}var h=d.position(),p=h.x,c=h.y,f=!1,y=!1,v=0,b=0,x=0,C=0;if(d.isParent()){var M=i(d)-s.w,z=n(d)-s.h;M>0&&(b=M-(v=M*parseFloat(u.getCompoundMinWidthBiasLeft(d))/(parseFloat(u.getCompoundMinWidthBiasLeft(d))+parseFloat(u.getCompoundMinWidthBiasRight(d))))),z>0&&(C=z-(x=z*parseFloat(u.getCompoundMinHeightBiasTop(d))/(parseFloat(u.getCompoundMinHeightBiasTop(d))+parseFloat(u.getCompoundMinHeightBiasBottom(d)))))}if(m.startsWith("top")){if(n(d)-g>u.minHeight(d)&&(!d.isParent()||x-g>=0))c=h.y+g/2,y=!0,t(d,n(d)-g);else if(o)return}else if(m.startsWith("bottom"))if(n(d)+g>u.minHeight(d)&&(!d.isParent()||C+g>=0))c=h.y+g/2,y=!0,t(d,n(d)+g);else if(o)return;if(m.endsWith("left")&&i(d)-l>u.minWidth(d)&&(!d.isParent()||v-l>=0)?(p=h.x+l/2,f=!0,e(d,i(d)-l)):m.endsWith("right")&&i(d)+l>u.minWidth(d)&&(!d.isParent()||b+l>=0)&&(p=h.x+l/2,f=!0,e(d,i(d)+l)),d.isParent()||!f&&!y||d.position({x:p,y:c}),d.isParent()){if(M=i(d)-s.w,z=n(d)-s.h,f&&M>0){m.endsWith("right")?b=M-v:m.endsWith("left")&&(v=M-b);var w=v/(v+b)*100,R=100-w;if(w<0||R<0)return;u.setCompoundMinWidthBiasLeft(d,w+"%"),u.setCompoundMinWidthBiasRight(d,R+"%")}if(y&&z>0){m.startsWith("top")?x=z-C:m.startsWith("bottom")&&(C=z-x);var T=x/(x+C)*100,W=100-T;if(T<0||W<0)return;u.setCompoundMinHeightBiasTop(d,T+"%"),u.setCompoundMinHeightBiasBottom(d,W+"%")}}}})),h.x=c,h.y=f,r.resizeControls.update(),a.trigger("nodeediting.resizedrag",[m,d])},l=function(e){e.target.getStage().container().style.cursor=u.cursors[p[r.location]]},m=function(e){null!=e.target.getStage()&&(e.target.getStage().container().style.cursor=u.cursors.default)};this.shape.on("mouseenter",l),this.shape.on("mouseleave",m),this.shape.on("touchstart mousedown",(function(y){s=d.children().boundingBox(),e=d.isParent()?u.setCompoundMinWidth:u.setWidth,t=d.isParent()?u.setCompoundMinHeight:u.setHeight,i=function(e){return e.isParent()?Math.max(parseFloat(u.getCompoundMinWidth(e)),s.w):e.width()},n=function(e){return e.isParent()?Math.max(parseFloat(u.getCompoundMinHeight(e)),s.h):e.height()},a.trigger("nodeediting.resizestart",[r.location,r.parent]),a.style()._private.coreStyle["active-bg-opacity"]&&(o=a.style()._private.coreStyle["active-bg-opacity"].value),a.style().selector("core").style("active-bg-opacity",0).update(),y.target.getStage().container().style.cursor=u.cursors[p[r.location]];var v=y.target.getStage().getPointerPosition();h.x=v.x,h.y=v.y,a.boxSelectionEnabled(!1),a.panningEnabled(!1),a.autounselectify(!0),a.autoungrabify(!0),r.shape.off("mouseenter",l),r.shape.off("mouseleave",m),g.getStage().on("contentTouchend contentMouseup",c),g.getStage().on("contentTouchmove contentMousemove",f)}))},b.prototype.update=function(){var e=this.parent.renderedPosition(),t=this.parent.renderedOuterWidth()+S(),i=this.parent.renderedOuterHeight()+S(),n={x:e.x-t/2,y:e.y-i/2},o=R(this.parent);this.shape.width(o),this.shape.height(o),this.updateShapePosition(n,t,i,o)},b.prototype.unbindAllEvents=function(){this.shape.off("mouseenter"),this.shape.off("mouseleave"),this.shape.off("touchstart mousedown")},b.prototype.updateShapePosition=function(e,t,i,n){switch(this.location){case"topleft":this.shape.x(e.x-n/2),this.shape.y(e.y-n/2);break;case"topcenter":this.shape.x(e.x+t/2-n/2),this.shape.y(e.y-n/2);break;case"topright":this.shape.x(e.x+t-n/2),this.shape.y(e.y-n/2);break;case"centerright":this.shape.x(e.x+t-n/2),this.shape.y(e.y+i/2-n/2);break;case"bottomright":this.shape.x(e.x+t-n/2),this.shape.y(e.y+i-n/2);break;case"bottomcenter":this.shape.x(e.x+t/2-n/2),this.shape.y(e.y+i-n/2);break;case"bottomleft":this.shape.x(e.x-n/2),this.shape.y(e.y+i-n/2);break;case"centerleft":this.shape.x(e.x-n/2),this.shape.y(e.y+i/2-n/2)}};var x=function(e,t){this.parent=e,this.resizeControls=t;var n=e.renderedPosition(),o=e.renderedOuterWidth()+S(),s=e.renderedOuterHeight()+S(),r={x:n.x-o/2,y:n.y-s/2},a=T(e),d=W(e),h=new Image;h.src=u.resizeToContentCueImage,this.shape=new i.Image({width:d,height:a,image:h}),h.onload=function(){g.draw()},this.updateShapePosition(r,o,s,d,a),this.bindEvents(),g.add(this.shape)};x.prototype.update=function(){var e=this.parent.renderedPosition(),t=this.parent.renderedOuterWidth()+S(),i=this.parent.renderedOuterHeight()+S(),n={x:e.x-t/2,y:e.y-i/2},o=T(this.parent),s=W(this.parent);this.shape.width(s),this.shape.height(o),this.updateShapePosition(n,t,i,s,o)},x.prototype.updateShapePosition=function(e,t,i,n,o){switch(u.resizeToContentCuePosition){case"top-left":this.shape.x(e.x+.4*n),this.shape.y(e.y+.4*o);break;case"top-right":this.shape.x(e.x+t-1.4*n),this.shape.y(e.y+.4*o);break;case"bottom-left":this.shape.x(e.x+.4*n),this.shape.y(e.y+i-1.4*o);break;default:this.shape.x(e.x+t-1.4*n),this.shape.y(e.y+i-1.4*o)}},x.prototype.bindEvents=function(){var e=this.parent,t=this;this.shape.on("mousedown",(function(e){e.evt.preventDefault(),e.evt.stopPropagation()})),this.shape.on("click",(function(i){i.evt.preventDefault(),"function"==typeof u.resizeToContentFunction?u.resizeToContentFunction([e]):a.undoRedo&&u.undoable?a.trigger("nodeediting.resizetocontent",[t]):P({self:t,firstTime:!0})}))},x.prototype.unbindEvents=function(){this.shape.off("mousedown"),this.shape.off("click")};var C,M=function(e){if(e.isParent())return e.children().boundingBox().h;var t=document.createElement("canvas").getContext("2d"),i=e.style();return t.font=i["font-size"]+" "+i["font-family"],Math.max(1.1*t.measureText("M").width,30)},z=function(e){if(e.isParent())return e.children().boundingBox().w;var t=document.createElement("canvas").getContext("2d"),i=e.style();t.font=i["font-size"]+" "+i["font-family"];var n=i.label.split("\n"),o=0;return n.forEach((function(e){var i=t.measureText(e).width;o<i&&(o=i)})),o},w=function(e){var t=e.width(),i=e.height(),n=M(e),o=z(e);if(0!==o&&"function"==typeof u.isFixedAspectRatioResizeMode&&u.isFixedAspectRatioResizeMode(e)){var s=e.width()/e.height(),r=o<n?o:n*s,a=o<n?o/s:n;r>=o&&a>=n?(o=r,n=a):n=(o=o<n?n*s:o)<n?n:o/s}return t===1.1*o&&i===1.1*n},R=function(e){return Math.max(1,a.zoom())*u.grappleSize*Math.min(e.width()/25,e.height()/25,1)},T=function(e){return Math.max(1,a.zoom())*u.grappleSize*1.25*Math.min(e.width()/25,e.height()/25,1)},W=function(e){return Math.max(1,a.zoom())*u.grappleSize*1.25*Math.min(e.width()/25,e.height()/25,1)},S=function(){return u.padding*Math.max(1,a.zoom())},P=function(e){var t=e.self.parent,i=t.isParent()?u.setCompoundMinWidth:u.setWidth,n=t.isParent()?u.setCompoundMinHeight:u.setHeight;if(e.firstTime){e.firstTime=null,e.oldWidth=t.isParent()?u.getCompoundMinWidth(t):t.width(),e.oldHeight=t.isParent()?u.getCompoundMinHeight(t):t.height();var o=z(t),r=M(t);if(0!==o){if("function"==typeof u.isFixedAspectRatioResizeMode&&u.isFixedAspectRatioResizeMode(t)){var a=t.width()/t.height(),d=o<r?o:r*a,h=o<r?o/a:r;d>=o&&h>=r?(o=d,r=h):r=(o=o<r?r*a:o)<r?r:o/a}i(t,1.1*o),n(t,1.1*r)}return s&&s.update(),e}var p=e.oldWidth,c=e.oldHeight;return e.oldWidth=t.isParent()?u.getCompoundMinWidth(t):t.width(),e.oldHeight=t.isParent()?u.getCompoundMinHeight(t):t.height(),i(t,p),n(t,c),s&&s.update(),e};function H(e,t){var i=function(e){for(var t={},i=0;i<e.length;i++)t[e[i].id()]=!0;return e.filter((function(e,i){"number"==typeof e&&(e=i);for(var n=e.parent()[0];null!=n;){if(t[n.id()])return!1;n=n.parent()[0]}return!0}))}(t);i.union(i.descendants()).positions((function(t,i){"number"==typeof t&&(t=i);var n=t.position("x"),o=t.position("y");return t.isParent()?{x:n,y:o}:{x:n+e.x,y:o+e.y}}))}var B,E,O=!1,k={37:!1,38:!1,39:!1,40:!1};function N(e){if("function"==typeof u.moveSelectedNodesOnKeyEvents?u.moveSelectedNodesOnKeyEvents():u.moveSelectedNodesOnKeyEvents){var t=document.activeElement.tagName;if("TEXTAREA"!=t&&"INPUT"!=t){switch(e.keyCode){case 37:case 39:case 38:case 40:case 32:e.preventDefault()}if(e.keyCode<37||e.keyCode>40)return;k[e.keyCode]=!0,e.preventDefault(),O||(C=a.nodes(":selected"),a.trigger("nodeediting.movestart",[C]),O=!0);var i=3;if(e.altKey&&e.shiftKey)return;e.altKey?i=1:e.shiftKey&&(i=10);var n=0,o=0;n+=k[39]?i:0,n-=k[37]?i:0,o+=k[40]?i:0,H({x:n,y:o-=k[38]?i:0},C)}}}function F(e){e.keyCode<"37"||e.keyCode>"40"||(e.preventDefault(),k[e.keyCode]=!1,("function"==typeof u.moveSelectedNodesOnKeyEvents?u.moveSelectedNodesOnKeyEvents():u.moveSelectedNodesOnKeyEvents)&&(a.trigger("nodeediting.moveend",[C]),C=void 0,O=!1))}if(B={x:void 0,y:void 0},E={x:0,y:0},a.on("unselect","node",d=function(e){B={x:void 0,y:void 0},E={x:0,y:0},s&&(s.remove(),s=null);var t=a.nodes(":selected");1==t.size()&&(s=new y(t))}),a.on("select","node",h=function(e){var t=e.target;s&&(s.remove(),s=null);var i=a.nodes(":selected");1!=i.size()||u.isNoControlsMode(t)||(s=new y(i))}),a.on("remove","node",(function(e){e.target.selected()&&d(e)})),a.on("add","node",(function(e){e.target.selected()&&h(e)})),a.on("position","node",(function(e){s&&(s.parent.position(),e.target.id()==s.parent.id()?s.update():E.x==B.x&&E.y==B.y||(E=s.parent.position(),s.update(),B={x:E.x,y:E.y}))})),a.on("zoom",(function(){s&&s.update()})),a.on("pan",(function(){s&&s.update()})),a.on("afterUndo afterRedo",(function(){s&&(s.update(),B={x:void 0,y:void 0})})),u.enableMovementWithArrowKeys&&(document.addEventListener("keydown",N,!0),document.addEventListener("keyup",F,!0)),a.undoRedo&&u.undoable){var L,A;a.on("nodeediting.resizestart",(function(e,i,n){L={node:n,css:{}},n.isParent()?(L.css.minWidth=parseFloat(u.getCompoundMinWidth(n)),L.css.minHeight=parseFloat(u.getCompoundMinHeight(n)),L.css.biasLeft=u.getCompoundMinWidthBiasLeft(n),L.css.biasRight=u.getCompoundMinWidthBiasRight(n),L.css.biasTop=u.getCompoundMinHeightBiasTop(n),L.css.biasBottom=u.getCompoundMinHeightBiasBottom(n)):(L.css.width=n.width(),L.css.height=n.height(),L.position=t.extend({},n.position()))})),a.on("nodeediting.resizeend",(function(e,t,i){L.firstTime=!0,a.undoRedo().do("resize",L),L=void 0})),a.on("nodeediting.movestart",(function(e,t){null!=t[0]&&(A={firstTime:!0,firstNodePosition:{x:t[0].position("x"),y:t[0].position("y")},nodes:t})})),a.on("nodeediting.moveend",(function(e,t){if(null!=A){var i=A.firstNodePosition;A.positionDiff={x:-t[0].position("x")+i.x,y:-t[0].position("y")+i.y},delete A.firstNodePosition,a.undoRedo().do("nodeediting.move",A),A=void 0}})),a.on("nodeediting.resizetocontent",(function(e,t){var i={self:t,firstTime:!0};a.undoRedo().do("resizeToContent",i)}));var K=function(e){if(e.firstTime)return s&&s.update(),delete e.firstTime,e;var i=e.node,n={node:i,css:{}};return i.isParent()?(n.css.minWidth=parseFloat(u.getCompoundMinWidth(i)),n.css.minHeight=parseFloat(u.getCompoundMinHeight(i)),n.css.biasLeft=u.getCompoundMinWidthBiasLeft(i),n.css.biasRight=u.getCompoundMinWidthBiasRight(i),n.css.biasTop=u.getCompoundMinHeightBiasTop(i),n.css.biasBottom=u.getCompoundMinHeightBiasBottom(i)):(n.css.width=i.width(),n.css.height=i.height(),n.position=t.extend({},i.position())),a.startBatch(),i.isParent()?(u.setCompoundMinWidth(i,e.css.minWidth),u.setCompoundMinHeight(i,e.css.minHeight),u.setCompoundMinWidthBiasLeft(i,e.css.biasLeft),u.setCompoundMinWidthBiasRight(i,e.css.biasRight),u.setCompoundMinHeightBiasTop(i,e.css.biasTop),u.setCompoundMinHeightBiasBottom(i,e.css.biasBottom)):(i.position(e.position),u.setWidth(i,e.css.width),u.setHeight(i,e.css.height)),a.endBatch(),s&&s.update(),n},j=function(e){if(e.firstTime)return delete e.firstTime,e;var t=e.nodes,i=e.positionDiff,n={nodes:t,positionDiff:{x:-i.x,y:-i.y}};return H(i,t),n};a.undoRedo().action("resize",K,K),a.undoRedo().action("nodeediting.move",j,j),a.undoRedo().action("resizeToContent",P,P)}var D,_,I={refreshGrapples:function(){if(s){var e=s.parent;s.remove(),s=new y(e)}},removeGrapples:function(){s&&(s.remove(),s=null)}};return D="api",_=I,o(a)[D]=_,I}))}function o(e,t){void 0===e.scratch("_cyNodeEditing")&&e.scratch("_cyNodeEditing",{});var i=e.scratch("_cyNodeEditing");return void 0===t?i:i[t]}},e.exports&&(e.exports=a),void 0===(n=function(){return a}.call(t,i,t,e))||(e.exports=n),"undefined"!=typeof cytoscape&&"undefined"!=typeof jQuery&&"undefined"!=typeof Konva&&a(cytoscape,jQuery,Konva)}])}));