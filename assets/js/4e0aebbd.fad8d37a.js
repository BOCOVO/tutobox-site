"use strict";(self.webpackChunktutobox_docs=self.webpackChunktutobox_docs||[]).push([[351],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(f,a(a({ref:e},c),{},{components:n})):o.createElement(f,a({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3295:function(t,e,n){var o=n(7294);e.Z=function(t){var e=t.tutoName,n=t.tour,r=t.children,i=t.extendsTuto,a=t.hextendsHelpers;return o.createElement("button",{onClick:function(){n?window.TutoBox.startTour():(a?window.TutoBox.setExtendsHelpers(a):i?window.TutoBox.setExtendsHelpers([{tutoName:e,extendsTuto:i}]):window.TutoBox.setExtendsHelpers([]),e&&window.TutoBox.startTuto(e))},className:"button button--primary button--lg"},r||"Run Tutorial")}},525:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=n(3295),l=["components"],s={title:"Step with html content",sidebar_position:3},u="Html content",c={unversionedId:"exemples/html-content",id:"exemples/html-content",title:"Step with html content",description:"",source:"@site/docs/exemples/html-content.md",sourceDirName:"exemples",slug:"/exemples/html-content",permalink:"/tutobox-site/docs/exemples/html-content",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Step with html content",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tutorials exemple",permalink:"/tutobox-site/docs/exemples/tutoriels"},next:{title:"Extends exemple",permalink:"/tutobox-site/docs/exemples/extends"}},p={},m=[{value:"How to do it ?",id:"how-to-do-it-",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Content html",id:"content-html",level:3},{value:"Run code",id:"run-code",level:3}],d={toc:m};function f(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"html-content"},"Html content"),(0,i.kt)("p",null,"Custom step content with HTML"),(0,i.kt)("h2",{id:"how-to-do-it-"},"How to do it ?"),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"data-step-html")," attribute on the element."),(0,i.kt)("h2",{id:"exemple"},"Exemple"),(0,i.kt)("h3",{id:"content-html"},"Content html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div class="grid grid-cols-2 gap-4 ">\n  <div>\n    <h6\n      data-step-title="With HTML content"\n      data-step-html="<strong>Strong text</strong>"\n      class=" font-bold text-xl"\n    >\n      With html content.\n    </h6>\n    <small>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nobis error\n      minus laborum cupiditate debitis. Fugit laborum possimus numquam! In at\n      esse repudiandae saepe voluptas error cum eligendi laboriosam quod.\n    </small>\n  </div>\n  <div>\n    <h6\n      data-step-title="This contains an image"\n      data-step-html="<img class=\'rounded-md\' style=\'width:100%;\' src=\'https://images.unsplash.com/photo-1653669485183-f4adf5806da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MzY3OTUzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080\' />"\n      class=" font-bold text-xl"\n    >\n      With image\n    </h6>\n    <small>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nobis error\n      minus laborum cupiditates debitis. Fugit laborum possimus numquam! In at\n      esse repudiandae saepe voluptas error cum eligendi laboriosam quod.\n    </small>\n  </div>\n</div>\n')),(0,i.kt)("h3",{id:"run-code"},"Run code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"TutoBox.startTour() // or TutoBox.startTuto(tutoName) if your use tutoral\n")),(0,i.kt)(a.Z,{tour:!0,mdxType:"RunButton"}))}f.isMDXComponent=!0}}]);