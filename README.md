# React Dev Helpers

A collection of debug helpers or utilities for React development.

## Installation

1. `npm i -D react-dev-helpers`

## Window Width

The WindowWidth component shows the current viewport width and active breakpoint in a small overlay at the bottom of the screen.
 

### Usage

```jsx
import { WindowWidth } from 'react-dev-helpers';

// ...

<WindowWidth
  breakpoints={[
    ['none', '0'],
    ['sm', '40rem'],
    ['md', '48rem'],
    ['lg', '64rem'],
    ['xl', '80rem'],
    ['2xl', '96rem'],
  ]}
/>
```

<img src="docs/window-width-example.webp" alt="drawing" height="350"/>
