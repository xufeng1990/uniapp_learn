<template>
  <view class="flex-wrap">
    <view v-for="value in bookList" :key="value.subTitle">
      <view class="flex-item" @click="itemClick(value.bookTitle)">
        <view class="flex-column">
          <image
            class="bookIcon"
            src="/static/image/home_new_product.png"
            mode="aspectFit"
          ></image>
          <view class="text">
            {{ value.bookTitle }}
          </view>
          <view class="subTitle">
            {{ value.subTitle }}
          </view>
          <view class="price"> ￥{{ value.price }} </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    bookList: {
      type:Array,
      default: ()=> {
        return []
      },
    },
  },
  components: { },
  methods: {
    itemClick(bookTitle) {
      let data = {
        navTitle: "新品推荐",
        bookTitle: bookTitle,
      };
      uni.navigateTo({
        url:
          "/pages/tabBar/home/book-goods-detail?data=" +
          encodeURIComponent(JSON.stringify(data)),
      });
    },
  },
};
</script>

<style>
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 28rpx 28rpx 28rpx 4rpx;
  width: 100%;
}

.flex-item {
  width: 335rpx;
  height: 440rpx;
  background: #ffffff;
  border-radius: 8px;
  margin: 0rpx 0rpx 28rpx 24rpx;
}
.flex-column {
  display: flex;
  flex-direction: column;
  height: 440rpx;
}
.bookIcon {
  margin: 20rpx 20rpx 24rpx 20rpx;
  height: 194rpx;
  width: 291rpx;
}
.text {
  margin-left: 20rpx;
  margin-right: 20rpx;
  white-space: wrap;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 26rpx;
  color: #333333;
  font-weight: 500;
}
.subTitle {
  margin: 8rpx 20rpx 0rpx 20rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 22rpx;
  color: #666666;
  font-weight: 300;
}
.price {
  font-size: 26rpx;
  color: #e62129;
  font-weight: 500;
  font-size: 32rpx;
  margin-left: 16rpx;
  margin-top: auto;
  margin-bottom: 16rpx;
}
</style>
