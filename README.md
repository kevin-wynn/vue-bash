# vue-bash

![npm](https://img.shields.io/npm/v/vue-bash.svg)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/kevin-wynn/vue-bash.svg)
![npm](https://img.shields.io/npm/dt/vue-bash.svg)
![GitHub issues](https://img.shields.io/github/issues-raw/kevin-wynn/vue-bash.svg)
![NPM](https://img.shields.io/npm/l/vue-bash.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/kevin-wynn/vue-bash.svg)

Vue Bash is a simple lightweight component that allows you to show off bash components and commands in a beautiful way. There is currently only sytanx highlighting for bash arguments and comments. In future releases I hope to allow a language prop to select your language syntax highlighting.

## Installation

Installation is straightforward and easy. You can install globally in your `main.js` or `import` directly to your components.

1. `npm i --save vue-bash` to install the package
2. In your `main.js` file `import 'vue-bash'`
3. Use `<vue-bash/>` anywhere in your app.

## Props

Currently the terminal supports only a few props. But more are to come:

| Prop            | Type    | Description                                                          |
| --------------- | ------- | -------------------------------------------------------------------- |
| theme           | String  | Can accept `light` and `dark` as a theme choice. Defaults to `light` |
| width           | String  | Width of the terminal in either `%` or `px`. Defaults to `100%`      |
| height          | String  | Height of the terminal in either `%` or `px`. Defaults to `100%`     |
| title           | String  | Title of the terminal. Defaults to `Terminal`                        |
| content         | Array   | Array of strings per line.                                           |
| showLineNumbers | Boolean | Shows a line number per line. Defaults to `false`                    |
| showSymbol      | Boolean | Shows a `$` per line. Defaults to `false`                            |

## Example

### Light Theme

![](https://i.imgur.com/zQtPqEq.png)

### Dark Theme

![](https://i.imgur.com/tx8xw0z.png)

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
