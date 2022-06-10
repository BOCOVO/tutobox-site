---
title: Help Box Exemple
sidebar_position: 5
---

import RunButton from "@site/lib/RunButton";

In this section we will see how to use the HelpBox

In the lower left corner you will see a button with the text `Find help here` click on it to see how the HelpBox works. Before click on button `Set extends helpers`.

<div class="flex justify-center my-4">
<RunButton hextendsHelpers={[
    {
        tutoName:"back-end",
        title:"The back-end fremawork tutorial",
        keywords:["back"]
    },
    {
        tutoName:"front-end",
        title:"The front-end fremawork tutorial",
        keywords:["front"]
    }
]} >
Set extends helpers
</RunButton>
</div>

This HelpBox is generated with the following `extendsHelpers` 👇

```js
TutoBox.setExtendsHelpers([
  {
    tutoName: "back-end",
    title: "The back-end fremawork tutorial",
    keywords: ["back"],
  },
  {
    tutoName: "front-end",
    title: "The front-end fremawork tutorial",
    keywords: ["front"],
  },
]);
```

```html title="index.html" live
<div>
  <div>
    <h6 class=" text-2xl font-bold">Backend techno</h6>
    <div class="grid grid-cols-1  md:grid-cols-2 gap-4">
      <h6
        data-tuto="back-end"
        data-step="1"
        data-step-title="Express"
        data-step-des="Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a ..."
        class="bg-green-500 px-10 py-8 rounded-lg text-white text-3xl"
      >
        Express.js
      </h6>
      <h6
        data-tuto="back-end"
        data-step="2"
        data-step-title="Nest"
        data-step-des="NestJS is a framework for building efficient, scalable Node.js web applications. It uses modern JavaScript, is built with TypeScript and combines elements ..."
        class="bg-green-600 px-10 py-8 rounded-lg text-white text-3xl"
      >
        Nest.js
      </h6>
    </div>
  </div>
  <div>
    <h6 class=" text-2xl font-bold">Frontend techno</h6>
    <div class="grid grid-cols-1  md:grid-cols-2 gap-4">
      <h6
        data-tuto="front-end"
        data-step="1"
        data-step-title="React"
        data-step-des="React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library ..."
        class="bg-purple-500 px-10 py-8 rounded-lg text-white text-3xl"
      >
        React.js
      </h6>
      <h6
        data-tuto="front-end"
        data-step="2"
        data-step-title="Vue"
        data-step-des="Vue is a progressive framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, ..."
        class="bg-purple-600 px-10 py-8 rounded-lg text-white text-3xl"
      >
        Vue.js
      </h6>
    </div>
  </div>
</div>
```
