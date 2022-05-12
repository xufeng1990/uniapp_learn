<template>
  <view class="container">
    <view class="header">
      <home-search-vue></home-search-vue>
    </view>
    <home-banner style="margin-top: 120rpx"></home-banner>
    <home-menu></home-menu>
    <home-announcement style="margin-top: 80rpx"></home-announcement>
    <home-title-vue title="今日抢购" v-show="showToday"></home-title-vue>
    <home-buy-vue
      :bookList="this.homeData.todayList"
      style="margin-top: 70rpx"
    ></home-buy-vue>
    <home-title-vue title="新品推荐" v-show="showNews"></home-title-vue>
    <home-new-product-vue
      :bookList="this.homeData.newBookList"
    ></home-new-product-vue>
    <home-title-vue title="TOP榜单" v-show="showTop"></home-title-vue>
    <home-top-vue :bookList="this.homeData.topList"></home-top-vue>
  </view>
</template>

<script>
import HomeBanner from "./home-banner.vue";
import HomeMenu from "./home-menu.vue";
import HomeAnnouncement from "./announcement.vue";
import HomeBuyVue from "./home-buy.vue";
import HomeNewProductVue from "./home-new-product.vue";
import HomeSearchVue from "./home-search.vue";
import HomeTitleVue from "./home-title.vue";
import HomeTopVue from "./home-top.vue";
import api from "@/request/api.js";

export default {
  components: {
    HomeBanner,
    HomeMenu,
    HomeSearchVue,
    HomeAnnouncement,
    HomeTitleVue,
    HomeBuyVue,
    HomeNewProductVue,
    HomeTopVue,
  },
  data() {
    return {
      homeData: {},
      showToday: false,
      showNews: false,
      showTop: false,
    };
  },
  mounted() {
    this.getHomeData();
  },
  methods: {
    async getHomeData() {
      await api.home("").then((res) => {
        this.homeData = res.data;

        this.setModuleShowState();
        console.log(this.homeData);
      });
    },

    // 设置模块显示状态
    setModuleShowState() {
      this.showToday = this.homeData.todayList.length > 0 ? true : false;
      this.showNews = this.homeData.newBookList.length > 0 ? true : false;
      this.showTop = this.homeData.topList.length > 0 ? true : false;
    },
  },
};
</script>

<style>
page {
  display: -webkit-box;
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}

.header {
  position: fixed;
  width: 100%;
  height: 110rpx;
  background-color: #fdf2f6;
  backdrop-filter: blur(20px);
  z-index: 1;
}
</style>