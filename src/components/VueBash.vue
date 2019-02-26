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
    <div class="content" :style="{minHeight: height}">
      <ul class="lines" :class="{lined: showLineNumbers || showSymbol}">
        <li class="line" v-for="(line, index) in lines" :key="index">
          <span v-if="showLineNumbers" class="line-number">{{ index + 1 }}</span>
          <span v-if="showSymbol" class="line-number">$</span>
          <span v-html="transformLine(line)"></span>
        </li>
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
    },
    showLineNumbers: {
      type: Boolean,
      default: false
    },
    showSymbol: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      lines: this.content
    };
  },
  methods: {
    transformLine: function(line) {
      const commentsRegex = /(#[\w'\s\r\n*]*#)|(#[\w\s']*)|(#[-\-\s\w>/]*#)/gm;
      const wordsRegex = /"[^"]+"|'[^']+'|\S+/g;
      const digitRegex = /\d/;

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

      words.forEach((word, i, arr) => {
        arr[i] = digitRegex.test(word)
          ? `<span class="number">${word}</span>`
          : word;
      });

      return words.join(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
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
    padding: 15px;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .line-number {
    margin-right: 10px;
    font-family: "Courier New", Courier, monospace;
    margin-left: -20px;
    color: #999;
    font-size: 12px;
  }

  .lines {
    &.lined {
      padding-left: 20px;
    }

    .line {
      display: block;
      line-height: 22px;
      font-family: "Courier New", Courier, monospace;

      & span {
        font-family: "Courier New", Courier, monospace;
      }

      /deep/ .argument {
        color: #2c82c9;
        font-family: "Courier New", Courier, monospace;
      }

      /deep/ .comment {
        color: #3fc380;
        font-family: "Courier New", Courier, monospace;
      }

      /deep/ .number {
        color: #f89406;
        font-family: "Courier New", Courier, monospace;
      }
    }
  }

  &.light {
    .content {
      background: #fff;

      .lines {
        .line {
          color: #666;
        }
      }
    }
  }

  &.dark {
    .content {
      background: #333;

      .lines {
        .line {
          color: #fff;
        }
      }
    }
  }
}
</style>
