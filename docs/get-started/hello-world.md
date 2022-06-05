---
title: Hello world!
sidebar_position: 3
---

import RunButton from "@site/lib/RunButton";

## Html content

```html live
<div class="flex justify-center">
  <div
    data-step-title="Welcome!"
    data-step-des="Hi! 👋"
    data-step="1"
    data-tuto="startup"
    class="max-w-sm"
  >
    <div class="card shadow--md  ">
      <div
        data-tuto="startup"
        data-step="2"
        data-step-des="This is the second step of the tutorial"
        class="card__image"
      >
        <img
          src="https://images.unsplash.com/photo-1653669485183-f4adf5806da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MzY3OTUzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt="Image alt text"
          title="Logo Title Text 1"
        />
      </div>
      <div
        data-step-des="End of the tutorial"
        data-tuto="startup"
        data-step="3"
        class="card__body"
      >
        <h4>A beautiful card</h4>
        <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet tenetur repudiandae reiciendis adipisci numquam, deserunt blanditiis laborum. Assumenda adipisci a tempora laudantium quaerat facilis! Voluptates deleniti hic nulla quam.
        </small>
      </div>
    </div>
  </div>
</div>
```

## Code to start
```javascript
TutoBox.startTuto("startup");
```

<RunButton tutoName="startup" />
