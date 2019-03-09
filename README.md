# vue-bash

![npm](https://img.shields.io/npm/v/vue-bash.svg)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/kevin-wynn/vue-bash.svg)
![npm](https://img.shields.io/npm/dt/vue-bash.svg)
![GitHub issues](https://img.shields.io/github/issues-raw/kevin-wynn/vue-bash.svg)
![NPM](https://img.shields.io/npm/l/vue-bash.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/kevin-wynn/vue-bash.svg)

Vue Bash is a simple lightweight component that allows you to show off bash components and commands in a beautiful way.

## Language Support

Vue Bash currently supports the following languages:

1. javascript
2. css
3. xml/html
4. bash/shell

## Installation

Installation is straightforward and easy. You can install globally in your `main.js` or `import` directly to your components.

1. `npm i --save vue-bash` to install the package
2. Import vue bash `import VueBash from "vue-bash"`
3. Use `<VueBash/>` in your template.

## Props

Currently the terminal supports only a few props. But more are to come:

| Prop     | Type   | Description                                                          |
| -------- | ------ | -------------------------------------------------------------------- |
| theme    | String | Can accept `light` and `dark` as a theme choice. Defaults to `light` |
| width    | String | Width of the terminal in either `%` or `px`. Defaults to `100%`      |
| height   | String | Height of the terminal in either `%` or `px`. Defaults to `100%`     |
| title    | String | Title of the terminal. Defaults to `Terminal`                        |
| language | String | Language to syntax highlight                                         |
| slot     | String | Children content                                                     |

## Example

### Light Theme

![](https://i.imgur.com/C0we5cD.png)
![](https://i.imgur.com/Gi41GYP.png)

### Dark Theme

![](https://i.imgur.com/RmL6fQ8.png)
![](https://i.imgur.com/532vsuy.png)

```
<VueBash :theme="'dark'" :title="'vue-bash'" :width="'400px'" :height="'250px'" :language="'shell'">npm i --save vue-bash
  + vue-bash@1.0.4
  added 2 packages from 2 contributers
  and audited 2 packages in 2.292s
  found 0 vulnerabilities
</VueBash>
```
