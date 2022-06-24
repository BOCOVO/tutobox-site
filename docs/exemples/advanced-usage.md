---
title: Advanced Usage
sibebar_position: 5
---

import DropdownTest from "../../lib/DropdownTest.js"
import RunButton from "../../lib/RunButton.js"
import MovieDropdown from "../../lib/MovieDropdown.js"

In this section we see use case of `data-step-action`, `data-dynamic-steps` and `data-action-selector` attributes.
These attributes allow you to indicate events on one or more elements that triggered will move to the next step, this saves your users from having to press next button in some cases.

## Scenario 1

### Scenario

We have a dropdown with a button that when clicked will display a list of choices. The list of choices will be mounted in the DOM only if the dropdown is open.
In the list of choices is `New repository` and `New gist`.

The dropdown html should look like this 👇 when not open

```html
<div class="dropdown">
  <button>Create</button>
</div>
```

and look like this 👇 when open

```html
<div class="dropdown">
    <button>Create</button>
    <ul>
        <li>New Repository</li>
        <li>New Gist</li>
    <ul>
</div>
```

### Application

#### New repository or gist tutorial

Here we will create a tutorial that tells users how to create a new Repository or Gist.
Let's name the tutorial `new-repo-or-gist`.

Let's start by adding the TutoBox attributes on the elements.

```html title="For the button"
<div class="dropdown">
  <button
    data-tuto="new-repo-or-gist"
    data-step="1"
    data-step-des="Click here to open the dropdown to make a selection."
    data-dynamic-steps="true"
    data-step-action="click"
  >
    Create
  </button>
</div>
```

:::note What does the `data-dynamic-steps` attribute ?

You may have noticed the `data-dynamic-steps` attribute on the button.
When you start the tutorial, TutoBox will scan the DOM for the elements on which the steps are attached. Unfortunately it won't find the steps for the items in the dropdown list, because the dropdown is not open by default. The `data-dynamic-steps` attribute told TutoBox to listen for additions in the DOM in order to update itself. Thus TutoBox will be able to add the steps on the items when the items are available in the DOM.

:::

:::note What does the `data-step-action` attribute ?

Within this attribute TutoBox will automatically move to next step after users click on the button. Otherwise, users must click the Next button on the tooltip in order to go to the next step. It's not cool.

:::

The dropdown list html code when the dropdown is opened

```html
...
<ul
  data-tuto="new-repo-or-gist"
  data-step="2"
  data-step-des="Click on one of these items that suits what you want to do."
>
  <li>New Repository</li>
  <li>New Gist</li>
</ul>
...
```

### The result

Click on button bellow to see how it work

<RunButton className="mb-4" tuto="new-repo-or-gist">Start tutorial</RunButton>

<DropdownTest
labels={["Create","New Repository","New Gist"]}
tuto="new-repo-or-gist"
listWrapperProps={
{
"data-step":"2",
"data-step-des":"Click on one of these items that suits what you want to do."
}
}
/>

:::note

Normally at the end of the tutorial, the `Next` button should change to `Finish`, you may have noticed that this is not the case for our `new-repo-or-gist`. In fact, it's because the tutorial is dynamic, TutoBox will always be looking for new step. To indicate to TutoBox that it's the end, put on the last step the `end` value on the `data-step` attribute.
And it comes down to that 👇.

:::

```html title="Step with end value"
...
<ul
  data-tuto="new-repo-or-gist"
  data-step="end"
  data-step-des="Click on one of these items that suits what you want to do."
>
  <li>New Repository</li>
  <li>New Gist</li>
</ul>
...
```

Click on button bellow to see how `end` value work

<RunButton className="mb-4" tuto="new-repo-or-gist-2">Start tutorial</RunButton>

<DropdownTest
labels={["Create","New Repository","New Gist"]}
tuto="new-repo-or-gist-2"
listWrapperProps={
{
"data-step":"end",
"data-step-des":"Click on one of these items that suits what you want to do."
}
}
/>

## Scenario 2

### Scenario

In this example there will also be a dropdown but this time will contain the list of user's favorite movies and suppose this list is loaded via API after the user clicks on the dropdown, then when he clicks on one of the films we will display the details.

### Application

#### Delete favorites movie tutorial

We will create a tutorial that tells users how to delete an favorite movie.
Let's name the tutorial `delete-favorite-movie`.

Let's start by adding the TutoBox attributes on the elements.

```html title="For the button"
<div class="dropdown">
  <button
    data-tuto="delete-favorite-movie"
    data-step="1"
    data-step-des="Click here to open the dropdown to make a selection."
    data-dynamic-steps="true"
    data-step-action="click"
  >
    Create
  </button>
</div>
```

The dropdown list html code when the dropdown is opened

```html
...
<ul
  data-tuto="delete-favorite-movie"
  data-step="2"
  data-step-action="click"
  data-action-selector=".favo-movie"
  data-step-des="Click on movie you want to delete"
>
  <li class="favo-movie">The witcher</li>
  <li class="favo-movie">Game of Thrones</li>
</ul>
...
```

:::note
With the `data-action-selector` attribute TutoBox will find the elements that matchs the selector and will listen to their events, click, indicate to the `data-step-action` attribute. If the event is fired, TutoBox moves on to the next step.

In short, when the user clicks on one of the items in the list, we go to the next step. You can notice the Css class `favo-movie` on the list items.
:::

The last step is to show the user the `Remove` button in the modal.

```html
<div class="modal">
  ...
  <button
    data-tuto="delete-favorite-movie"
    data-step="end"
    data-step-des="Click here to remove the movie from your favorite list."
  >
    Remove
  </button>
  ...
</div>
```

### Result

<MovieDropdown />
