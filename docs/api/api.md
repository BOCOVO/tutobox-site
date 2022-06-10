---
title: Api
sidebar_position: 2
---

# TutoBox Api

## startTuto(tutoName)

This method starts a tutorial

#### Parameters:

- tutoName: the name of the tutoriel to start

#### Exemple:

```js
TutoBox.startTuto("create-post");
```

## startTour()

This method starts the trick on the present steps.

#### Exemple:

```js
TutoBox.startTour();
```

## next()

Go to the next step

#### Exemple:

```js
TutoBox.next();
```

## next()

Go to the previous step

#### Exemple:

```js
TutoBox.prev();
```

## goToStep(step)

Go to the previous step

#### Parameters:

- step: The step number from 1

#### Exemple:

```js
TutoBox.goToStep(1);
```

## stop()

Stop the running tutorial or tour.

#### Exemple:

```js
TutoBox.stop();
```

## addEventListener(eventName,callback)

To listen to events

#### Parameters:

- eventName: The name of event
- callback: The callback function to run when the event is triggered.

##### Events Name

| Event Name      | Description                                               |
| --------------- | --------------------------------------------------------- |
| `start-tuto`    | Called when an tutorial or tour is started.               |
| `step-change`   | Called when the step changes.                             |
| `stop-tuto`     | Called when the running tutorial or tour is stoped.       |
| `option-change` | Called when options changes `locales` or `extendsHelpers` |

##### Event Data

An object(`EventData`) is passed as a parameter to callback functions. At the bottom you have a representation of the object.

```typescript
type EventData = {
  tutoName: string; // The name of the running tutorial

  step?: number; // The current step number
  stepData?: TutoStep; // The step data
  next?: boolean; // If there is next step exit
  prev?: boolean; // If there is previous step exit
  end?: boolean; // If it is the last step
};

// TutoStep contains data found on DOM elements.
// These are the values of the TutoBox attributes that you put on the elements

type TutoStep = {
  step: string;
  html?: string;
  des?: string;
  element: HTMLElement;
  stepTitle?: string;
  tuto: string;
  tutoTitle?: string;
  headless?: string;
  dynamic?: boolean;
  action?: string;
  canStartForm?: boolean;
  actionSelector?: string;
};
```

#### Exemple:

```js
const onStepChange = (eventData) => {
  // do somethings
};
TutoBox.addEventListener("step-change", onStepChange);
```

## removeEventListener(eventName,callback)

To remove a callback

#### Parameters:

- eventName: The name of event
- callback: A callback function that you have already registered.

#### Exemple:

```js
const onStepChange = (eventData) => {
  // do somethings
};

TutoBox.removeEventListener("step-change", onStepChange);
```

:::info
For `removeEventListener()` to work, the callback function passed must have the same reference as a function already added via `addEventListener()`.
:::



## setLocales(localesData)

To customize the texts displayed by TutoBox.
See [Locale Data](./locale-data) for all items.
When changing the locale you do not need to specified all item,

#### Parameters:

- localesData: the new locale customisation

#### Exemple:

##### Update all item 
```js 
TutoBox.setLocales({
  close: "Close",
  next: "Next",
  prev: "Prev",
  findHelp: "Find help here.",
  howToFind: "Scroll tutorial below and click on tutorial you search for.",
  searchPlaceholder: "Tape keyword here.",
  emptySearch: "No result found.",
  finish: "Finish",
  autoHelpButton: "Click here to see the list of available tutorials.",
  autoHelpSelect: "Select the tutorial you are looking for",
});
```

##### Partial update
```js 
TutoBox.setLocales({
  next: "Next step",
  prev: "Prev step"
});
```
