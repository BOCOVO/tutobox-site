---
title: Step with html content
sidebar_position: 3
---

import RunButton from "@site/lib/RunButton";

# Html content

Custom step content with HTML

## How to do it ?

Using `data-step-html` attribute on the element.

## Exemple

### Content html
```jsx live
<div class="grid grid-cols-2 gap-4 ">
  <div>
    <h6
      data-step-title="With HTML content"
      data-step-html="<strong>Strong text</strong>"
      class=" font-bold text-xl"
    >
      With html content.
    </h6>
    <small>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nobis error
      minus laborum cupiditate debitis. Fugit laborum possimus numquam! In at
      esse repudiandae saepe voluptas error cum eligendi laboriosam quod.
    </small>
  </div>
  <div>
    <h6
      data-step-title="This contains an image"
      data-step-html="<img class='rounded-md' style='width:100%;' src='https://images.unsplash.com/photo-1653669485183-f4adf5806da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MzY3OTUzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080' />"
      class=" font-bold text-xl"
    >
      With image
    </h6>
    <small>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nobis error
      minus laborum cupiditates debitis. Fugit laborum possimus numquam! In at
      esse repudiandae saepe voluptas error cum eligendi laboriosam quod.
    </small>
  </div>
</div>
```

### Run code
```js
TutoBox.startTour() // or TutoBox.startTuto(tutoName) if your use tutoral
```
<RunButton tour />
