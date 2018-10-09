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
