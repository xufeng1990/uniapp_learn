<template>
<view class="bg">
<view class="flex-row"> 
        <view class="searchBg" @click="searchClick()">
          <image class="searchIcon" src="/static/image/home_nav_search.png" mode="aspectFit"></image>
          <view class="searchPlaceholder">专升本</view>
        </view>
        <image class="icon" src="/static/image/home_nav_gonggao.png" mode="aspectFit"></image>
    </view>
</view>
    
</template>

<script>

export default {
    props: {
        title:""
    },
components: {
  },
  methods: {
searchClick() {
//   alert("搜索页")
  uni.navigateTo({
      url:"/pages/tabBar/home/search-home"
  })
}
  }
}
  
</script>

<style>
.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40rpx;
    margin: 20rpx 28rpx 60rpx 28rpx;
}

.searchBg {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 60rpx;
    background: #FFFFFF;
    border-radius: 40rpx;
}
.searchIcon {
    margin-left: 28rpx;
    margin-right: 12rpx;
    width: 24rpx;
    height: 24rpx;
}

.searchPlaceholder {
   font-size: 24rpx;
   color: #999999;
   font-weight: 400;
}

.icon {
    margin-left: 40rpx;
    width: 46rpx;
    height: 46rpx;
}

</style>
