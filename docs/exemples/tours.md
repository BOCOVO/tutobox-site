---
title: Tours exemple
sidebar_position: 1
---
import RunButton from "@site/lib/RunButton";

# Tour
Use TutoBox for application tour.

## What is tour?

The tour is a simple way to use TutoBox without having to specify so many attributes. When you execute the tour TutoBox finds the elements in the DOM and executes the steps according to the order in which the elements are found. This means that the `data-step` attribute is ignored even if set. And you don't need to set the attribute `data-tuto`.

Learn more about the difference between tutorial and tour [here](../concepts/tour-tuto).

## Usable attributes

At least one of these attributes is required

- `data-step-title`
- `data-step-des`
- `data-step-html`

## Exemple

### Html content

```html live
<div class=" grid grid-cols-3 gap-4">
  <div
    data-step-title="JavaScript language"
    data-step-des="JavaScript language"
    class=" text-white p-4 bg-yellow-500 rounded"
  >
    <h6 class="font-bold text-2xl">JavaScript</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div
    data-step-title="Python language"
    class=" text-white p-4 bg-blue-500 rounded"
  >
    <h6 class="font-bold text-2xl">Python</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div
    data-step-title="Java language"
    class=" text-white p-4 bg-red-500 rounded"
  >
    <h6 class="font-bold text-2xl">Java</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>
```
### Run code
```js
TutoBox.startTour()
```
<RunButton tour />

