---
title: Color customisation
sidebar_position: 1
---

Css variable to customise TuboBox.

### --tbox-primary

This is the primary color.

```css title="Set primary color to red"
:root {
  --tbox-primary: red;
}
```

### --tbox-primary-light

This is the primary light color. Used to set background for primary buttons

```css title="Set primary color to red"
:root {
  --tbox-primary-light: #f88;
}
```

### --tbox-very-light-primary

Very light variant for you primary color. Used for 

```css title="Set primary color to red"
:root {
  --tbox-very-light-primary: #f88;
}
```

### --tbox-text-white

This text color when the background has the primary color. You can chage `--tbox-text-white` color if white color do not give best contrast on the background color.

```css title="Set primary color to red"
:root {
  --tbox-text-white: yellow;
}
```

### --tbox-bubbles

The background of inactive bubbles.

```css title="Customize bubbles color"
:root {
  --tbox-text-white: cyan;
}
```

### --tbox-bubbles-active

The background of active bubble. By default the primary color is used for.

```css title="Customize active bubble color"
:root {
  --tbox-text-white: orange;
}
```