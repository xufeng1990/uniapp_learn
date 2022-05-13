<template>
  <view class="flex-wrap">
    <view v-for="value in bookList" :key="value.bookTitle">
      <view class="flex-item" @click="itemClick(value.bookTitle)">
        <view class="flex-column">
          <image
            class="bookIcon"
            src="/static/image/home_book.png"
            mode="aspectFit"
          ></image>
          <view class="text">
            {{ value.bookTitle }}
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
      type: Array,
      default: ()=> {
        return []
      },
    },
  },
  components: { },
  methods: {
    itemClick(bookTitle) {
      let data = {
        navTitle: "今日抢购",
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
  margin: 28rpx 28rpx 28rpx 5rpx;
  /* width: 216rpx; */
}

.flex-item {
  width: 216rpx;
  height: 306rpx;
  background: #ffffff;
  box-shadow: 0px 2px 4px 1px #ececec;
  border-radius: 8px;
  margin: 0rpx 0rpx 28rpx 23rpx;
}
.flex-column {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  height: 306rpx;
}
.bookIcon {
  margin: 13rpx 10rpx 16rpx 10rpx;
  height: 131rpx;
  width: 196rpx;
}
.text {
  margin-left: 16rpx;
  margin-right: 16rpx;
  white-space: wrap;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 26rpx;
  color: #333333;
  font-weight: 500;
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
