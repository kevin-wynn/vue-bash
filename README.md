# vue-bash

Vue Bash is a simple lightweight component that allows you to show off bash components and commands in a beautiful way. There is currently only sytanx highlighting for bash arguments and comments. In future releases I hope to allow a language prop to select your language syntax highlighting.

## Installation

Installation is straightforward and easy. You can install globally in your `main.js` or `import` directly to your components.

1. `npm i --save vue-bash` to install the package
2. In your `main.js` file `import 'vue-bash'`
3. Use `<vue-bash/>` anywhere in your app.

## Props

Currently the terminal supports only a few props. But more are to come:

| Prop    | Type   | Description                                                     |
| ------- | ------ | --------------------------------------------------------------- |
| theme   | String | Can accept `light` and `dark` as a theme choice.                |
| width   | String | Width of the terminal in either `%` or `px`. Default is `100%`  |
| height  | String | Height of the terminal in either `%` or `px`. Default is `100%` |
| title   | String | Title of the terminal. Default is `Terminal`                    |
| content | Array  | Array of strings per line.                                      |

## Example

### Light Theme

!()[light-theme.png]

### Dark Theme

!()[dark-theme.png]

```
<vue-bash
  :theme="'dark'"
  :title="'regen'"
  :width="'400px'"
  :height="'250px'"
  :content="regenContent"
/>
```

```
regenContent: [
  "regen --mongodb --multipage",
  "# WELCOME TO REGEN #",
  "App name: --roboHouse",
  "User email: --kevin@robo-house.com",
  "# SETTING UP APP #",
  "# Installing dependencies...",
  "# ...",
  "# ...",
  "# ...",
  "# Done"
]
```
