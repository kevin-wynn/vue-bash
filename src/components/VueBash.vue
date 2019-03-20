<template>
  <div class="vue-bash-terminal" :style="{ minWidth: width, minHeight: height }" :class="theme">
    <div class="header-bar">
      <div class="actions">
        <span class="action red"></span>
        <span class="action yellow"></span>
        <span class="action green"></span>
      </div>
      <div class="title">{{ title }}</div>
    </div>
    <div class='content' :style="{minHeight: height}">
      <pre class="code-container">
        <code :class="language">
          <slot></slot>
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
// import hljs from "highlight.js";
import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import bash from "highlight.js/lib/languages/bash";
import "highlight.js/styles/github.css";

export default {
  name: "VueBash",
  props: {
    theme: {
      type: String,
      default: "light"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    title: {
      type: String,
      default: "Terminal"
    },
    showLineNumbers: {
      type: Boolean,
      default: false
    },
    showSymbol: {
      type: Boolean,
      default: false
    },
    language: {
      type: String
    }
  },
  mounted: function() {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("xml", xml);
    hljs.registerLanguage("bash", bash);
    hljs.initHighlighting();
  }
};
</script>

<style lang="scss">
.vue-bash-terminal {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  .header-bar {
    width: 100%;
    background: #ececec;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 1px solid #cccccc;
  }
  .actions {
    flex-direction: row;
    margin-left: 5px;
    .action {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: inline-flex;
      margin-right: 5px;

      &.red {
        background: #e74c3c;
      }

      &.yellow {
        background: #f7ca18;
      }

      &.green {
        background: #2ecc71;
      }
    }
  }

  .title {
    display: flex;
    flex: 1;
    justify-content: center;
    align-self: center;
    margin-left: -50px;
    font-size: 14px;
    color: #333;
  }

  .content {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    position: relative;
  }

  .hljs {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 25px;
    display: block;
    overflow-x: auto;
  }

  // atom one light
  &.light {
    .content {
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-left: 1px solid #ccc;
    }
    .code-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .hljs {
      color: #383a42;
      background: #fafafa;
    }
    .hljs-comment,
    .hljs-quote {
      color: #a0a1a7;
      font-style: italic;
    }
    .hljs-doctag,
    .hljs-keyword,
    .hljs-formula {
      color: #a626a4;
    }
    .hljs-section,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-deletion,
    .hljs-subst {
      color: #e45649;
    }
    .hljs-literal {
      color: #0184bb;
    }
    .hljs-string,
    .hljs-regexp,
    .hljs-addition,
    .hljs-attribute,
    .hljs-meta-string {
      color: #50a14f;
    }
    .hljs-built_in,
    .hljs-class .hljs-title {
      color: #c18401;
    }
    .hljs-attr,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-type,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-number {
      color: #986801;
    }
    .hljs-symbol,
    .hljs-bullet,
    .hljs-link,
    .hljs-meta,
    .hljs-selector-id,
    .hljs-title {
      color: #4078f2;
    }
    .hljs-emphasis {
      font-style: italic;
    }
    .hljs-strong {
      font-weight: bold;
    }
    .hljs-link {
      text-decoration: underline;
    }
  }

  // atom one dark
  &.dark {
    .content {
      border-bottom: 1px solid #111;
      border-right: 1px solid #111;
      border-left: 1px solid #111;
    }
    .code-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .hljs {
      color: #abb2bf;
      background: #282c34;
    }
    .hljs-comment,
    .hljs-quote {
      color: #5c6370;
      font-style: italic;
    }
    .hljs-doctag,
    .hljs-keyword,
    .hljs-formula {
      color: #c678dd;
    }
    .hljs-section,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-deletion,
    .hljs-subst {
      color: #e06c75;
    }
    .hljs-literal {
      color: #56b6c2;
    }
    .hljs-string,
    .hljs-regexp,
    .hljs-addition,
    .hljs-attribute,
    .hljs-meta-string {
      color: #98c379;
    }
    .hljs-built_in,
    .hljs-class .hljs-title {
      color: #e6c07b;
    }
    .hljs-attr,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-type,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-number {
      color: #d19a66;
    }
    .hljs-symbol,
    .hljs-bullet,
    .hljs-link,
    .hljs-meta,
    .hljs-selector-id,
    .hljs-title {
      color: #61aeee;
    }
    .hljs-emphasis {
      font-style: italic;
    }
    .hljs-strong {
      font-weight: bold;
    }
    .hljs-link {
      text-decoration: underline;
    }
  }
}
</style>
