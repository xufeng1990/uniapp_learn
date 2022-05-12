<template>
  <view class="banner">
    <swiper
      @change="swiperChange"
      class="swiper"
      indicator-color="rgba(0,0,0,0.2)"
      indicator-active-color="#ffffff"
      :indicator-dots="false"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <!-- circular -->

      <swiper-item v-for="(value, index) in bannerList">
        <view>
          <image class="img" :src="value" mode="aspectFill"></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="rowDot">
      <view v-for="(value, index) in bannerList" :key="index" class="dots">
        <view :class="[index === swiperCurrent ? 'active' : 'dot']"> </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        "/static/image/banner.png",
        "/static/image/banner.png",
        "/static/image/banner.png",
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500,
      swiperCurrent: 0,
    };
  },

  methods: {
    swiperChange(e) {
      this.swiperCurrent = e.detail.current;
    },
  },

  onLoad() {},
};
</script>

<style>
.banner {
  margin: 0rpx 28rpx 0rpx 28rpx;
  height: 300rpx;
}
.swiper {
  height: 300rpx;
}

.img {
  width: 100%;
  height: 300rpx;
}
.rowDot {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  bottom: 20rpx;
}
.dots {
  flex-direction: row;
  justify-content: center;
}
.dot {
  margin-right: 8rpx;
  background: #000000;
  opacity: 0.2;
  width: 8rpx;
  height: 8rpx;
  border-radius: 4rpx;
}
.active {
  margin-right: 8rpx;
  width: 20rpx;
  height: 8rpx;
  opacity: 1;
  border-radius: 6rpx;
  background: #ffffff;
}
</style>
