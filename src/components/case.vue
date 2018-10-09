<template>
  <div class="case">
    <h1>案件</h1>
    <h2>{{count}}</h2>
    <p>
      <button @click="add(5)">➕</button>
      <button @click="reduce(7)">➖</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store.js';
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  name: 'case',
  store,
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  }
};
</script>

<style lang="scss" scoped>
.case {
  text-align: center;
  height: 100px;
  width: 100px;
  background: burlywood;
}
</style>
