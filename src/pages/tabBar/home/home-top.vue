<template>
  <view>
    <view v-for="value in bookList" :key="value.subTitle">
      <view class="flex-item" @click="itemClick(value.bookTitle)">
        <view class="flex-row">
          <image
            class="bookIcon"
            src="/static/image/home_top_book.png"
            mode="aspectFit"
          ></image>
          <view class="flex-column">
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
        navTitle: "TOP榜单",
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
.flex-item {
  height: 232rpx;
  background: #ffffff;
  border-radius: 8px;
  margin: 28rpx 28rpx 0rpx 28rpx;
}
.flex-row {
  display: flex;
  flex-direction: row;
  height: 232rpx;
}

.flex-column {
  display: flex;
  flex-direction: column;
  height: 232rpx;
}
.bookIcon {
  margin: 28rpx 28rpx 28rpx 20rpx;
  width: 264rpx;
  height: 176rpx;
}
.text {
  margin-right: 28rpx;
  margin-top: 28rpx;
  white-space: wrap;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 26rpx;
  color: #333333;
  font-weight: 500;
}
.subTitle {
  margin-top: 8rpx;
  margin-right: 28rpx;
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
  margin-top: auto;
  margin-bottom: 28rpx;
}
</style>
