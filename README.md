# Technical challenge @ Material-UI
This challenge is part of the hiring process at Material-UI for the Intern Software Engineer position. The idea is to make as much progress as possible under a given time constraint (2 hours).

## Context
In the short term, Material-UI is on a mission to become the UI toolkit for React. We are unifying the fragmented ecosystem of dependencies into a single set of simple, beautiful, consistent, and accessible React components.

In the long term, Material-UI is on a mission to make building great React UIs and web applications quicker, simpler, and accessible to more people through low-code solutions. We resonate with this vision: https://youtu.be/GnO7D5UaDig?t=2451.

### Introduction

A Switch toggle the state of a single setting on or off.

<img src="/switch-checked.png" width="100px" /> <img src="/switch-unchecked.png" width="100px" />

#### Objective

The goal of this challenge is to implement the above component.

- [x] Reproduce as much as the UX as shown on the pictures above. For more details see [Material Design guidelines](https://material.io/components/switches)
- [x] use React hooks, no class components
- [x] be written in TypeScript, `any` and `@ts-ignore` are accepted but need to be justified (comments)
- [x] be accessible, end-users could only use the keyboard, see [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_role) for guidance.
- [x] make the existing test pass, add tests for edge cases

## Submission

As per the goal, I implemented the `Switch` component with full resemblance to the UX provided to me as an image above. Switches are used to toggle the state of an item ON and OFF. My solution rendered three switch components with different states and props. The first switch is initially in `OFF` state that can be toggled back and forth to change the state from ON and OFF. The second switch is initially in `ON` state and the third switch is a `disabled` switch.

Accessibility is an important part of the web application so keeping this fact in mind, I added `aria-label` attribute to my component which will get labels based on the current state of the switch. Also, the first two switches are keyboard accessible (tested on Brave browser) and can be toggled back and forth by pressing the `Space` key.

As per the objective I used `React Hooks` in my solution. I used `useState` hook to manage the state change of the Switch component and respond to it when someone changes/presses Switch.

I made some changes in the implementation of test cases. `aria-checked` attribute accepts a string value instead of a boolean value so I changed the second paramater of `toHaveAttribute` method to accept a string value. This change made all my test cases to pass.

#### Caveats / Not addressed in this solution

Due to time constraints, I was unable to add some more styling to the Switch i.e hover effects.
The component can be made more accessible by providing a outline to the component which has the focus.


### Screenshots of my solution

<img src="/solution.png" width="400px" height="300px">



**DO NOT** host your project on public repositories. Send us a zip file containing this project (with the .git but without the node_modules) at marija@material-ui.com. Alternatively, if you host it as a private repository on GitHub, you can invite @mnajdova to access it.