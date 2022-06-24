"use strict";(self.webpackChunktutobox_docs=self.webpackChunktutobox_docs||[]).push([[962],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),f=o,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3295:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.tuto,n=e.tour,o=e.children,a=e.extendsTuto,i=e.hextendsHelpers,s=e.className,l=void 0===s?"":s;return r.createElement("button",{onClick:function(){n?window.TutoBox.startTour():(i?window.TutoBox.setExtendsHelpers(i):a?window.TutoBox.setExtendsHelpers([{tutoName:t,extendsTuto:a}]):window.TutoBox.setExtendsHelpers([]),t&&window.TutoBox.startTuto(t))},className:"button button--primary button--lg "+l},o||"Run Tutorial")}},2124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(3295),s=["components"],l={title:"Help Box Exemple",sidebar_position:5},d=void 0,p={unversionedId:"exemples/help-box",id:"exemples/help-box",title:"Help Box Exemple",description:"",source:"@site/docs/exemples/help-box.md",sourceDirName:"exemples",slug:"/exemples/help-box",permalink:"/tutobox-site/docs/exemples/help-box",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Help Box Exemple",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Extends exemple",permalink:"/tutobox-site/docs/exemples/extends"},next:{title:"Advanced Usage",permalink:"/tutobox-site/docs/exemples/advanced-usage"}},u={},c=[],f={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section we will see how to use the HelpBox"),(0,a.kt)("p",null,"In the lower left corner you will see a button with the text ",(0,a.kt)("inlineCode",{parentName:"p"},"Find help here")," click on it to see how the HelpBox works. Before click on button ",(0,a.kt)("inlineCode",{parentName:"p"},"Set extends helpers"),"."),(0,a.kt)("div",{class:"flex justify-center my-4"},(0,a.kt)(i.Z,{hextendsHelpers:[{tutoName:"back-end",title:"The back-end fremawork tutorial",keywords:["back"]},{tutoName:"front-end",title:"The front-end fremawork tutorial",keywords:["front"]}],mdxType:"RunButton"},"Set extends helpers")),(0,a.kt)("p",null,"This HelpBox is generated with the following ",(0,a.kt)("inlineCode",{parentName:"p"},"extendsHelpers")," \ud83d\udc47"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'TutoBox.setExtendsHelpers([\n  {\n    tutoName: "back-end",\n    title: "The back-end fremawork tutorial",\n    keywords: ["back"],\n  },\n  {\n    tutoName: "front-end",\n    title: "The front-end fremawork tutorial",\n    keywords: ["front"],\n  },\n]);\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" live',title:'"index.html"',live:!0},'<div>\n  <div>\n    <h6 class=" text-2xl font-bold">Backend techno</h6>\n    <div class="grid grid-cols-1  md:grid-cols-2 gap-4">\n      <h6\n        data-tuto="back-end"\n        data-step="1"\n        data-step-title="Express"\n        data-step-des="Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a ..."\n        class="bg-green-500 px-10 py-8 rounded-lg text-white text-3xl"\n      >\n        Express.js\n      </h6>\n      <h6\n        data-tuto="back-end"\n        data-step="2"\n        data-step-title="Nest"\n        data-step-des="NestJS is a framework for building efficient, scalable Node.js web applications. It uses modern JavaScript, is built with TypeScript and combines elements ..."\n        class="bg-green-600 px-10 py-8 rounded-lg text-white text-3xl"\n      >\n        Nest.js\n      </h6>\n    </div>\n  </div>\n  <div>\n    <h6 class=" text-2xl font-bold">Frontend techno</h6>\n    <div class="grid grid-cols-1  md:grid-cols-2 gap-4">\n      <h6\n        data-tuto="front-end"\n        data-step="1"\n        data-step-title="React"\n        data-step-des="React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library ..."\n        class="bg-purple-500 px-10 py-8 rounded-lg text-white text-3xl"\n      >\n        React.js\n      </h6>\n      <h6\n        data-tuto="front-end"\n        data-step="2"\n        data-step-title="Vue"\n        data-step-des="Vue is a progressive framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, ..."\n        class="bg-purple-600 px-10 py-8 rounded-lg text-white text-3xl"\n      >\n        Vue.js\n      </h6>\n    </div>\n  </div>\n</div>\n')))}m.isMDXComponent=!0}}]);