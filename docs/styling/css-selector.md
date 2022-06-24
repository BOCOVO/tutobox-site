---
title: Css Selector
sidebar_position: 2
---

## Classes

:::info

All TutoBox Css classes begin with `tbox-`

:::

| Selectors                 | Description                                                            |
| ------------------------- | ---------------------------------------------------------------------- |
| `.tbox`                   | The whole wrapper of TutoBox views                                     |
| `.tbox-btn`               | Css classe for navigation buttons                                      |
| `.tbox-btn`               | Css classe for navigation buttons                                      |
| `.tbox-bubbles`           | Css classe for bubbles wrapper. Its an `ul` list with `li` as children |
| `.tbox-bubbles li.active` | To style the active bubble                                             |
| `.tbox-highlighter`       | Css classe for the highlighter                                         |
| `.tbox-closer`            | Css classe for the close button                                        |
| `.tbox-caret`             | Css classe for the close button                                        |
| `.tbox-hepl-box`          | The wrapper of HelpBox                                                 |
| `.tbox-auto-conplete`     | The wrapper of HelpBox Auto Complete                                   |
| `.tbox-tuto-list`         | The wrapper of tutorial list in HelpBox                                |

## Customisation exemple

### Customize the HelpBox button

#### From this
![oppp](./img/help_btn_default.png)

#### To this
![oppp](./img/help_btn_customised.png)

```css
.tbox-help-box:not(.open) {
  box-shadow: 0 0 35px 10px #999de5;
  border-radius: 20px;
  overflow: hidden;
  bottom: 10px;
}
```
