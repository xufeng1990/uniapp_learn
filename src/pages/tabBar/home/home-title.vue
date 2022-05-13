<template>
    <view class="flex-row"> 
        <view class="text">{{title}}</view>
        <view class="moreText">更多</view>
        <image class="arrowIcon" src="/static/image/home_arrow.png" mode="aspectFit"></image>
    </view>
</template>

<script>
export default {
    props: {
        title:""
    },
components: {
  }
}
  
</script>

<style>
.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40rpx;
    margin: 40rpx 28rpx 32rpx 28rpx;
}

.text {
   font-size: 34rpx;
   color: #333333;
   font-weight: 600;
   /* height: 40rpx; */
}
.moreText {
   font-size: 24rpx;
   color: #666666;
   margin-left: auto;
   /* height: 40rpx; */
}
.arrowIcon {
    /* margin-top: 10rpx; */
    width: 20rpx;
    height: 20rpx;
}

</style>
