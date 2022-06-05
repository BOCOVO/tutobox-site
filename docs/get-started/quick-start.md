---
title: Quick Start
sidebar_position: 2
---

# Quick Start

Let's see how to add tutorials ton your pages and how to run them.

## Requirements

Before continuing make sure you have added TutoBox to your page as shown [here](./installation).

## Add TutoBox attributes on the Elements

Three attributes are required.

- `data-tuto` as the tutorial id
- `data-step-des` as step description
- `data-step` as the numerical order of the step

```html
<button
  data-tuto="create-post"
  data-step-des="Click to publish the post"
  data-step="5"
>
  Send
</button>
```

Learn more about attribute [here](./)

Call the TutoBox `startTuto(tutoId)` function to run the tutorial

```javascript
TutoBox.startTuto("create-post");
```