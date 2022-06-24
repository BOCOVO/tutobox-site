---
title: Elements Attributes
sidebar_position: 1
---

### `data-step-title` 

The title on the step. Its the displayed text in top of the tooltip.

### `data-step-des` 

The description on the step. Displayed at bottom of the title.

### `data-step-html`

This is the also a description. Use it to customize the description. You can add image an all `html` element

```html
<button
  ...
  data-step-html="<img class='rounded-md' style='width:100%;' src='https://images.unsplash.com/photo-1653669485183-f4adf5806da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MzY3OTUzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080' />"
  ...
>
  Button
</button>
```

:::danger Attention

`data-step-title`, `data-step-des` and `data-step-html` are optional but you must define one. Otherwise, an error will be generated, because it means that there is no content to display for the users.

:::

### `data-step` (_required_)

The step number. Must be a numeric value or `end` if the tutorial is a [dynamic tutorial](../concepts/dynamic-steps.md).
In the case of a tutorial, dynamic `end` tells TutoBox that it can display the Finish Button so the user can close the tutorial.

```html
<button
  ...
  data-step="1"
  ...
>
  Button
</button>
```

```html title="Exemple with end"
<!-- The tutoriel must be a dynamic tutoriel -->
<button
  ...
  data-step="end"
  ...
>
  Button
</button>
```

### `data-tuto` (_required_) 

The ID of the tutorial to which the item is part of its steps.

:::info

`data-tuto` is not required for [tour](../concepts/tour-tuto.md)

:::

### `data-can-start-from`
When TutoBox does not find step 1 of a tutorial when you ask it to start a tutorial, an error is raised unless the tutorial is a dynamic tutorial. If you want the tutorial to start with a step that is not step 1, then put the `data-can-start-from` attribute on the element.

The given value is cast to boolean

```html
<button
  ...
  data-can-start-from="true"
  ...
>
  Button
</button>
```

### `data-step-action`
A type of event to listen on the element that triggered will automatically pass to the next step.

```html
<!-- 
In this exemple if user click on the button TutoBox 
will automatically go to the next step 
-->
<button
  ...
  data-step-action="click"
  ...
>
  Button
</button>
```

:::info

If you want the event to be listened to on another element(s), then use the attribute `data-action-selector` to specify a selector.

:::

### `data-action-selector`
Used to indicate a selector of the element(s) whose event indicated on attribute `ata-step-action` will automatically move to the next step.

### `data-dynamic-steps`

If you want the tutorial to be dynamic set `data-dynamic-steps` on one of its steps. 
```html 
<button
  ...
  data-dynamic-steps="true"
  ...
>
  Button
</button>
```

### `data-headless-step`

This attribute make the tooltip to display as a modal.
