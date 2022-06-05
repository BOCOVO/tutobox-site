---
title: Dynamic steps
sidebar_position: 2
---

# Dynamic steps

## Explanation

Let's take a small example, you see what the concept of dynmic steps is for.

Assume you are a facebook user. You want to change your profile picture. You go to the home page.

As a developer, you know that the views that allow changing the profile picture are not currently in the DOM and will therefore be brought up as you click the correct buttons.

Back to you as a facebook user. Not knowing how to do it, you decide to run a tutorial managed with TutoBox on the page. The problem is that TutoBox won't be able to find all the elements when it scans the DOM at the time you start the tutorial. How to do ? Just watch the DOM.

Dynamic steps simply means that TutoBox updates its list of steps as the elements on which there are tutorials are mounted in the DOM. This allows TutoBox to have a list of all the steps even if those steps weren't available in the DOM when you launched the tutorial.

The attribute `data-dynamic-steps` on one step element tells TutoBox to start watching the DOM. If the attribute is not specified, nothing is watching to.

## Use it.

```html
... 
<button 
... 
data-dynamic-steps="true"
>
    Modify
</button>
...
```
