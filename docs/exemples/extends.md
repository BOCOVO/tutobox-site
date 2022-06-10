---
title: Extends exemple
sidebar_position: 4
---

import RunButton from "@site/lib/RunButton";

# Tutorials

In this section we will add two tutoriel on the page.

## Usable attributes

At least one of these attributes is required

- `data-tuto`
- `data-step`
- `data-step-title`
- `data-step-des` optional
- `data-step-html` optional

## Exemple

### Html content

```html live
<div>
  <div>
    <h6 class=" text-2xl font-bold">Main</h6>
    <div class="grid grid-cols-1  md:grid-cols-1 gap-4">
      <h6
        data-tuto="main"
        data-step="1"
        data-step-title="Programming"
        data-step-des="Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of ..."
        class="bg-red-500 px-10 py-8 rounded-lg text-white text-center text-3xl"
      >
        Programming
      </h6>
    </div>
  </div>
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

### Run code

ExtendsHelpers is used to set how to extend.

```ts
// type of extends helpers
type ExtendsHelper = {
  title?: string;
  tutoName: string;
  extendsTuto: string;
  keywords?: string[];
};
```
[_Read more_](../api/extends-helper) about ExtendsHelper attributes.

```js
// define how the extending will take place.
// call the function setExtendsHelpers(extendsHelpers: ExtendsHelper[])
// this function take an array of ExtendsHelper

TutoBox.setExtendsHelpers([
    {
      tutoName: "back",     // the tutorial back
      extendsTuto: "main",  // extends the tutorial main
    },
    {
      tutoName: "front",    // the tutorial front
      extendsTuto: "main",  // extends the tutorial main
    }
])

// make sure to call setExtendsHelpers before startTuto

TutoBox.startTuto("back");  // to start tutorial back
TutoBox.startTuto("front"); // to start tutorial front
```

:::caution Take care

Always call `setExtendsHelpers` before `startTuto`. If not extending will not work as exepted.

:::

<div class="flex grid-cols-2 my-4 gap-5">
    <RunButton extendsTuto="main" tutoName="back" >Start tutoriel back</RunButton>
    <RunButton extendsTuto="main" tutoName="front" >Start tutoriel front</RunButton>
</div>

:::tip Note

The tutorial `back` and `front` both will start from tutorial `main`.

:::
