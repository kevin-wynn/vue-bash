import Vue from "vue";
import VueBash from "./VueBash";
const Components = {
  VueBash
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
