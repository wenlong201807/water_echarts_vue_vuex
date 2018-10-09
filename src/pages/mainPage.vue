<template>
  <div class="mainpage">
    <div class="count">
      <div class="qq">lkjk</div>
      <h1>{{msg}}</h1>
      <hr>
      <!-- <span>{{$store.state.a.count}} </span> -->
      <span>{{$store.state.count}}==={{count}}</span>
      <p>

        <button @click="add(10)">+</button> ******
        <button @click="reduce(2)">-</button>
      </p>
      <hr>
      <h3>我是cccc**count组件</h3>
      <cccc></cccc>
      <hr>
      <h3>我是case组件</h3>
      <ccase></ccase>
    </div>
    <!-- 顶部的标题 -->
    <div class="top_wrap">
      <div class="top_normal_ysj_child"></div>
      <div class="top_normal_zxj_child"></div>
      <div class="parallel"></div>
      <div class="trapezoid_top"></div>
      <div class="logo_container">
        <!-- <img class="logo_img" src="" alt=""> -->
        <h1 class="logo_img">{{count}} </h1>
        <h1 class="logo_title">中国水环境模拟大数据平台</h1>
      </div>
      <div class="title_container">

        <ul class="more_1001">

          <li class="item_wrap" v-for="item  of titleList" :key="item.id">
            <span class="iconfont" v-html="item.pic"></span>
            <a class="aa" href="script:void(0)">{{item.text}} </a>
          </li>

        </ul>
      </div>
    </div>

    <!-- 下部分**左侧 -->
    <div class="bottom_left">

      <div @click="add(10)" class="xz_com_min xz_com_max  b_l_normal">
        <div id="myChart_left_one" class="myChart_container">
        </div>
        <div class=" trapezoid_b_l "></div>
        <p class="trapezoid_b_l_title ">空气质量</p>
        <div class="b_l_normal_ysj_child "></div>
        <div class="b_l_normal_zxj_child "></div>
      </div>

      <div class="xz_com_min xz_com_max b_l_normal four_water_quality ">
        <div id="myChart_left_two" class="myChart_container"></div>
        <div class=" trapezoid_b_l "></div>
        <p class="trapezoid_b_l_title ">水质量</p>
        <div class="b_l_normal_ysj_child "></div>
        <div class="b_l_normal_zxj_child "></div>
      </div>

      <div class="xz_com_min xz_com_max b_l_normal five__aqi_range ">
        <div id="myChart_left_third" class="myChart_container"></div>
        <div class=" trapezoid_b_l "></div>
        <p class="trapezoid_b_l_title ">AQI排名</p>
        <div class="b_l_normal_ysj_child "></div>
        <div class="b_l_normal_zxj_child "></div>
      </div>

    </div>

    <!-- 下部分**中间 -->
    <div class="bottom_mid ">
      <div class="xmt_min xmt_max b_m_t_normal six_all_city_air_quality ">
        <div id="myChart_mid_one" class="myChart_container_mid_top"></div>
        <div class=" trapezoid_b_m_t_l "></div>
        <div class=" trapezoid_b_m_t_r "></div>
      </div>
      <!-- 下部分**中间**下面连个浮动 -->
      <div class="xmb_min xmb_max b_m_b_normal seven_broken_line ">
        <div id="myChart_mid_two" class="myChart_container_mid_bottom"></div>
        <div class=" trapezoid_b_m_b_l "></div>
      </div>
      <div class="xmb_min xmb_max b_m_b_normal eight_sector_diagram ">
        <div id="myChart_mid_third" class="myChart_container_mid_bottom"></div>
        <div class=" trapezoid_b_m_b_r "></div>
      </div>

    </div>

    <!-- 下部分**右侧 -->
    <div class="bottom_right ">

      <div class="xy_com_min xy_com_max b_r_normal ">
        <div id="myChart_right_one" class="myChart_container"></div>
        <div class=" trapezoid_b_r "></div>
        <p class="trapezoid_b_r_title ">案件</p>
        <div class="b_r_normal_zsj_child "></div>
        <div class="b_r_normal_yxj_child "></div>
      </div>

      <div class="xy_com_min xy_com_max b_r_normal ">
        <div id="myChart_right_two" class="myChart_container"></div>
        <div class=" trapezoid_b_r "></div>
        <p class="trapezoid_b_r_title ">案卷分布</p>
        <div class="b_r_normal_zsj_child "></div>
        <div class="b_r_normal_yxj_child "></div>
      </div>

      <div class="xy_com_min xy_com_max b_r_normal ">
        <div id="myChart_right_third" class="myChart_container"></div>
        <div class=" trapezoid_b_r "></div>
        <p class="trapezoid_b_r_title ">警告</p>
        <div class="b_r_normal_zsj_child "></div>
        <div class="b_r_normal_yxj_child "></div>
      </div>

    </div>

  </div>
</template>

<script>
import store from '@/vuex/store.js';
import { mapState, mapMutations, mapActions } from 'vuex';
import cccc from '@/components/Count.vue';
import ccase from '@/components/case.vue';
export default {
  name: 'MainPage',
  store,
  computed: {
    ...mapState(['count'])
    // 原始写法
    // count() {
    //   return this.$store.getters.count;
    // }
    // ...mapGetters(['count'])
  },
  data() {
    return {
      msg: 'hello vuex',
      titleList: [
        { text: '首页', pic: '&#xe601;' },
        { text: '大气', pic: '&#xe601;' },
        { text: '水文', pic: '&#xe601;' },
        { text: '固体', pic: '&#xe601;' },
        { text: '噪音', pic: '&#xe601;' },
        { text: '网络', pic: '&#xe601;' },
        { text: '污染', pic: '&#xe601;' },
        { text: '视频', pic: '&#xe601;' },
        { text: '考核', pic: '&#xe601;' }
      ],
      righList: [
        { title: '首页', id: '111', myChart_id: 'myChart_right_one' },
        { title: '首页', id: '1113', myChart_id: 'myChart_right_two' }
        // {
        //   title: '首页',
        //   id: '123',
        //   myChart_id: 'myChart_right_third',
        //   chartOption: {
        //     title: { text: '在Vue中使用echarts' },
        //     tooltip: {},
        //     xAxis: {
        //       data: ['衬衫', '羊毛衫']
        //     },
        //     series: [{
        //       name: '销量',
        //       type: 'bar',
        //       data: [559, 890]
        //     }]}
        // }
      ]
    };
  },
  mounted() {
    // this.righList.forEach((item, index) => {
    //   this.drawLine(item);
    // });
    this.left_one();
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction']),

    left_one() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('myChart_left_one'));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption({
        legend: {},
        tooltip: {},
        gird: {
          x: 50,
          y: 40

        },
        dataset: {
        // 提供一份数据。
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: {type: 'category'},
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ]
      });
    }
    /**
     *
     *   // region
     *   // drawLine(aaa) {
     *   //   // 基于准备好的dom，初始化echarts实例
     *   //   let myChart = this.$echarts.init(document.getElementById(aaa.myChart_id));
     *   //   // 绘制图表
     *   //   myChart.setOption(aaa.chartOption);
     *   // myChart.setOption({
     *   //   title: { text: '在Vue中使用echarts' },
     *   //   tooltip: {},
     *   //   xAxis: {
     *   //     data: ['衬衫', '羊毛衫']
     *   //   },
     *   //   yAxis: {},
     *   //   // grid:{
     *   //   //   top: 2%
     *   //   //   bottom: 2%
     *   //   //   left: 2%
     *   //   //   right: 2%
     *   //   // },
     *   //   series: [{
     *   //     name: '销量',
     *   //     type: 'bar',
     *   //     data: [559, 890]
     *   //   }]
     *   // })
     *   // }
     *   // endregion
    *
    */
  },
  components: {
    cccc, ccase
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/assets/common.scss';

// 各种条件都相同的情况
@import '~@/assets/normal.scss';

// 媒体查询***最大宽度为1000px
@media screen and (min-width: 1001px) {
  @import '~@/assets/media_min_1001.scss';
}

// 媒体查询部分***最小宽度为1001px
@media screen and (max-width: 1000px) {
  @import '~@/assets/media_max_1000.scss';
}

// 媒体查询部分***最大宽度为1000px
@media screen and (max-width: 700px) {
  @import '~@/assets/media_max_700.scss';
}
</style>
