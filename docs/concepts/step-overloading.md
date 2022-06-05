---
title: Step overloading
sidebar_position: 3
---

# Step Overloading

## Explanation

Imagine you have an button that is used in two different tutorials. The question is how to specify its order number, its description for tutorial 1 and also for tutorial 2 assuming that these attributes are different ? By doing step overloading.

In other words `step overloading` is the way to add several tutorials on the same element.

## Syntax

### For `data-tuto` attribute

Separate tutorials names with `|`

In the example below the button element will be used for tutorials `tuto1`, `tuto2` and `tuto3`

```html
<button ... data-tuto="tuto1|tuto2|tuto3">Apply change</button>
```

### For else attributes

In the attribute value used syntax `tutorialName:value` where `tutorialName` is the name of the tutorial and `value` is the value of the attribute that will be used if the `tutorialName` tutorial is run.

#### Set for each tutorial

```html
<button
  ...
  data-step-des="tuto1: The title of this step in tuto1 tuto2:Step title in tuto2 tuto3:And so on"
  data-step-step="tuto1:2 tuto2:3 tuto3:5"
>
  Apply change
</button>
```

#### Set default value

When you don't specify a specific value to each tutorial, the attribute value is used for all tutorials.

In bellow exemple the text _This title is th..._  will be used for all tutorials (`tuto1`,`tuto2` and `tuto3`)

```html
<button
  ...
  data-tuto="tuto1|tuto2|tuto3"
  data-step-title="This title is the default title for this step in all tutoriel on this element"
>
  Apply change
</button>
```

#### Set default for the rest

Use the `default:value` syntax for other tutorials for which you did not specify a value.

In the example below, the tutorial `tuto2` has a specific value while the tutorials `tuto1` and `tuto3` do not. As the value default is provided then `tuto1` and `tuto3` will use it.

```html
<button ... data-tuto="tuto1|tuto2|tuto3" data-step-step="tuto2:2 default:3">
  Apply change
</button>
```
