<template>
  <view class="wrap icons-class">
    <scroll-view
      class="nav-bar"
      scroll-x="true"
      @scroll="scroll"
      show-scrollbar="false"
    >
      <view class="nav-bar-wrap">
        <block v-for="(item, index) in list">
          <view
            class="nav-bar-item"
            @tap="toMenuPage"
            :data-menuname="item.title"
          >
            <image mode="aspectFill" :src="item.icon" class="img"></image>
            <text class="title">{{ item.title }}</text>
          </view>
        </block>
      </view>
    </scroll-view>
    <view class="slider" v-if="list.length > 5">
      <view
        class="slider-inside slider-inside-location"
        :style="'margin-left: ' + left + 'rpx'"
      ></view>
    </view>
  </view>
</template>

<script>
import image from "../../API/image/image.vue";
import scrollView from "../../component/scroll-view/scroll-view.vue";
import text from "../../component/text/text.vue";
export default {
  components: { scrollView, image, text },
  data() {
    return {
      left: "0",
      scrollWidth: 150 * 5,
      list: [
        {
          title: "专升本",
          icon: "/static/image/icon_1.png",
        },
        {
          title: "教师招聘",
          icon: "/static/image/icon_2.png",
        },
        {
          title: "教师资格",
          icon: "/static/image/icon_3.png",
        },
        {
          title: "高考",
          icon: "/static/image/icon_4.png",
        },
        {
          title: "中职生",
          icon: "/static/image/icon_5.png",
        },
        {
          title: "专升本1",
          icon: "/static/image/icon_1.png",
        },
        {
          title: "教师招聘1",
          icon: "/static/image/icon_2.png",
        },
        {
          title: "教师资格1",
          icon: "/static/image/icon_3.png",
        },
        {
          title: "高考1",
          icon: "/static/image/icon_4.png",
        },
        {
          title: "中职生1",
          icon: "/static/image/icon_5.png",
        },
      ],
    };
  },
  externalClasses: ["icons-class"],
  watch: {
    list: {
      handler: function (list) {
        // this.setData({
        //   col: list.length > 4 ? 5 : 4,
        //   scrollWidth: list.length * this.data[`_col${this.data.col}ItemWidth`],
        // });
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    toMenuPage(e) {
      var { menuname } = e.currentTarget.dataset;

      alert(menuname);
    },

    // 实现进度条跟随导航滚动
    scroll(event) {
      // TODO properties 参数
      // bar 的宽
      let bar_width = 72; // 小 bar 的宽

      let bar_active_width = bar_width * 0.5;
      let aw = 750; // console.log("滚动盒子 width", aw);

      let scrollWidth = event.detail.scrollWidth - aw; // console.log("可滚动的最大距离 scrollWidth", scrollWidth);

      let scrollLeft = event.detail.scrollLeft; // console.log("滚动距离 scrollLeft", scrollLeft);

      if (scrollLeft <= 0) {
        scrollLeft = 0;
      }

      if (scrollLeft >= scrollWidth) {
        scrollLeft = scrollWidth;
      } // const totalX = Math.abs(scrollWidth);

      let bl = scrollLeft / scrollWidth;
      let ml = (bar_width - bar_active_width) * bl;
      this.left = `${ml}`;
    },
  },
};
</script>

<style>
.wrap {
  margin-top: 32rpx;
  height: 150rpx;
}

.nav-bar {
  display: flex;
  margin-top: 32rpx;
}
/* 去除滚动条 */
.nav-bar ::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  color: transparent;
}
.nav-bar-wrap {
  white-space: nowrap;
}
.nav-bar-item {
  display: inline-flex;
  width: 150rpx;
  height: 150rpx;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.img {
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
}
.title {
  color: #333333;
  display: block;
  width: 100%;
  font-size: 24rpx;
  margin-top: 16rpx;
  line-height: 30rpx;
  height: 30rpx;
}
.slider {
  position: relative;
  top: 30rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 72rpx;
  height: 6rpx;
  border-radius: 6rpx;
  background-color: #ffffff;
  overflow: hidden;
}

.slider-inside {
  position: absolute;
  /* transform: translateX(-100%); */
  transform-origin: center center;
  /* width: 42rpx; */
  width: 50%;
  height: 100%;
  border-radius: 6rpx;
  background-color: #f01414;
  overflow: hidden;
}
</style>