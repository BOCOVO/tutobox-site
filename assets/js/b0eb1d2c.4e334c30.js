"use strict";(self.webpackChunktutobox_docs=self.webpackChunktutobox_docs||[]).push([[6911],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:e},c),{},{components:r})):n.createElement(f,i({ref:e},c))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7682:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={title:"Quick Start",sidebar_position:2},l="Quick Start",s={unversionedId:"get-started/quick-start",id:"get-started/quick-start",title:"Quick Start",description:"Let's see how to add tutorials ton your pages and how to run them.",source:"@site/docs/get-started/quick-start.md",sourceDirName:"get-started",slug:"/get-started/quick-start",permalink:"/tutobox-site/docs/get-started/quick-start",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Quick Start",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/tutobox-site/docs/get-started/installation"},next:{title:"Hello world!",permalink:"/tutobox-site/docs/get-started/hello-world"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Add TutoBox attributes on the Elements",id:"add-tutobox-attributes-on-the-elements",level:2}],d={toc:p};function m(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Let's see how to add tutorials ton your pages and how to run them."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Before continuing make sure you have added TutoBox to your page as shown ",(0,a.kt)("a",{parentName:"p",href:"./installation"},"here"),"."),(0,a.kt)("h2",{id:"add-tutobox-attributes-on-the-elements"},"Add TutoBox attributes on the Elements"),(0,a.kt)("p",null,"Three attributes are required."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data-tuto")," as the tutorial id"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data-step-des")," as step description"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data-step")," as the numerical order of the step")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<button\n  data-tuto="create-post"\n  data-step-des="Click to publish the post"\n  data-step="5"\n>\n  Send\n</button>\n')),(0,a.kt)("p",null,"Learn more about attribute ",(0,a.kt)("a",{parentName:"p",href:"./"},"here")),(0,a.kt)("p",null,"Call the TutoBox ",(0,a.kt)("inlineCode",{parentName:"p"},"startTuto(tutoId)")," function to run the tutorial"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'TutoBox.startTuto("create-post");\n')))}m.isMDXComponent=!0}}]);