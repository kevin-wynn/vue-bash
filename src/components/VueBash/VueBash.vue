<template>
  <div class="terminal" :style="{ minWidth: width, minHeight: height }" :class="theme">
    <div class="header-bar">
      <div class="actions">
        <span class="action red"></span>
        <span class="action yellow"></span>
        <span class="action green"></span>
      </div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="content">
      <ul class="lines" v-for="(line, index) in lines" :key="index">
        <li class="line" v-html="transformLine(line)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
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
    content: {
      type: Array
    }
  },
  data: function() {
    return {
      lines: this.content
    };
  },
  methods: {
    transformLine: function(line) {
      const commentsRegex = /(\#[\w\'\s\r\n\*]*\#)|(#[\w\s\']*)|(\#[\-\-\s\w\>\/]*#)/gm;
      const wordsRegex = /"[^"]+"|'[^']+'|\S+/g;

      if (line.match(commentsRegex) != null) {
        line = line.replace(
          line.match(commentsRegex)[0],
          `<span class="comment">${line.match(commentsRegex)[0]}</span>`
        );
      }

      let words = line.match(wordsRegex);

      words.forEach((word, i, arr) => {
        arr[i] =
          word.indexOf("-") > -1
            ? `<span class="argument">${word}</span>`
            : word;
      });

      return words.join(" ");
    }
  }
};
</script>

<style scoped>
.terminal {
  border: 1px solid #cccccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.header-bar {
  width: 100%;
  background: #ececec;
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 1px solid #cccccc;
}

.actions {
  flex-direction: row;
  margin-left: 5px;
}

.actions .action {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-flex;
  margin-right: 5px;
}

.actions .action.red {
  background: #e74c3c;
}
.actions .action.yellow {
  background: #f7ca18;
}
.actions .action.green {
  background: #2ecc71;
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
  padding: 15px;
}

.lines .line {
  display: block;
  line-height: 22px;
  font-family: "Courier New", Courier, monospace;
}

.lines .line > .argument {
  color: #2c82c9;
  font-family: "Courier New", Courier, monospace;
}

.lines .line > .comment {
  color: #3fc380;
  font-family: "Courier New", Courier, monospace;
}

.terminal.light {
  background: #fff;
}

.terminal.light .content .lines .line {
  color: #666;
}

.terminal.dark {
  background: #333;
}

.terminal.dark .content .lines .line {
  color: #fff;
}
</style>
