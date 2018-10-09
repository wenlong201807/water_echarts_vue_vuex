# 重要笔记

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 重要配置项[编辑器配置](http://www.ptbird.cn/vscode-autosave-eslint-support-vue.html)

## 搭建 vuex

```
$ cnpm install vuex --save
```

### 定义好功能属性(根目录文件中)

```
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 6
};

const mutations = {
  add(state, n) {
    state.count += n;
  },
  reduce(state, n) {
    state.count -= n;
  }
};

const actions = {
  addAction(context) {
    context.commit('add', 10);
    setTimeout(() => {
      context.commit('reduce', 4);
    }, 3000);
    console.log('我比reduce先执行了');
  },
  reduceAction({ commit }) {
    commit('reduce', 3);
  }
};

const getters = {
  count: function(state) {
    return (state.count += 100);
  }
};

// const moduleA = {
//   state,
//   mutations,
//   getters,
//   actions
// };
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
  // modules: {
  //   a: moduleA
  // }
});
```

### 在模块中引用

```
<template>
  <div class="juzhong">
    <h1>{{msg}}</h1>
    <hr>
    <!-- 模块的方式 -->
    <!-- <h2>{{$store.state.a.count}} </h2> -->
    <!-- <h2>{{$store.state.count}}==={{count}}</h2> -->
    <p>
      <!-- 第一种写点击事件方法 -->
      <!-- <button @click="$store.commit('add',10)">+</button> ******
      <button @click="$store.commit('reduce',5)">-</button> -->
      <!-- 第二种写点击事件的方式 -->
      <button @click="add(10)">+</button> ******
      <button @click="reduce(2)">-</button>
    </p>

    <p>
      <!-- <button @click="addAction">+</button> ******
      <button @click="reduceAction">-</button> -->
    </p>
    <hr>
    <count-case></count-case>
  </div>
</template>

<script>
import store from '@/vuex/store.js';
import CountCase from '@/components/case.vue';
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {
      msg: 'hello vuex  ***count***cccc'
    };
  },
  store,
  // 第一种最简单的写法
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   }
  // }
  // 第二种写法
  // computed: mapState({
  //   count: state => state.count
  // })
  // computed: mapState(['count']),
  computed: {
    ...mapState(['count'])
    // 原始写法
    // count() {
    //   return this.$store.getters.count;
    // }
    // ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  },
  components: {
    CountCase
  }
};
</script>

<style lang="scss" scoped>
.juzhong {
  width: 100px;
  height: 100px;
  margin: 50px auto;
  background: pink;
  text-align: center;
  // font-size: 20px;
  // line-height: 30px;
}
</style>
```

### vscode [快捷键](https://blog.csdn.net/p358278505/article/details/74221214)

- [实用的快捷键](https://blog.csdn.net/u010019717/article/details/50443970)

```
vscode[快捷键]

1、多行同时编辑
2、选中相同的单词
3、恢复、重复操作
4、删除一整行
5、光标向右移动一个单词
6、移动整行（上下移动）  alt + ⬆  ||  ⬇
7、增加一行的缩进、减少一行的缩进  CTRL + {  ||   }
8、关闭当前页签
9、切换页签   Shift+PgUp / PgDown
10、注释几行代码
11、向上复制整行 Shift+Alt+Up或Shift+Alt+Down
12、光标到行尾、行首  Home / End
13、删除光标左侧代码 backspace，删除光标右侧代码  del
13.1 删除光标右侧的所有字Ctrl+Delete
14、光标移动到下一个单词
15、光标进入下一新建行  Ctrl+Enter、上一新建行  Ctrl+Shift+Enter
16、滚动到底部、头部  Ctrl+Home / End
17、切换侧边栏可见性 ctrl + b
18、同时选中所有匹配的Ctrl+Shift+L

windows快捷键：

切换桌面
打开资源管理器
新建文件夹
切换应用 alt + tab || ⬆ ⬇ ⬅ ➡
切换页签 crtl + pgdnbreak  ||  pgup
关闭页签
打开小娜搜索
应用窗口操作
关闭程序快捷键
```

### eslintrc.js

```
// https://eslint.org/docs/user-guide/configuring
module.exports = {
root: true,
parserOptions: {
parser: 'babel-eslint'
},
env: {
browser: true
},
extends: [
// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevent
// ion consider switching to `plugin:vue/strongly-recommended` or
// `plugin:vue/recommended` for stricter rules.
'plugin:vue/essential',
// https://github.com/standard/standard/blob/master/docs/RULES-en.md
'standard'
],
// required to lint *.vue files
plugins: ['vue'],
globals: {
NODE_ENV: false
},
rules: {
// allow async-await
'generator-star-spacing': 'off',
// allow debugger during development
'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
// 添加，分号必须
semi: ['error', 'always'],
'no-unexpected-multiline': 'off',
'space-before-function-paren': ['error', 'never'],
// 'quotes': ["error", "double", { "avoidEscape": true }]
quotes: [
'error',
'single',
{
avoidEscape: true
}
]
}
};
```
