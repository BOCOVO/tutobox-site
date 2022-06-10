---
title: Extends Helper
sidebar_position: 3
---

# Extends Helper

## Type
```ts
type ExtendsHelper = {
  tutoName: string;
  extendsTuto?: string;
  title?: string;
  keywords?: string[];
};
```
### `tutoName`
The name of the concerned tutorial.

### `extendsTuto`  _(optional)_
The name of the tutorial tha tutorial `tutoName` must extends.

### `title`  _(optional)_
The title to put in the list of tutorials if you want the HelpBox. Absent, the concerned tutorial will not be displayed in the list of HelpBox tutorials. And if any of the extendsHelpers has no title then the HelpBox will not be displayed.

### `keywords`  _(optional)_
A string array containing the tutorial keywords. These keywords are used as an option for the HelpBox search field.