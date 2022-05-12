<template>
    <view class="bg">
        <view class="row">
            <image class="icon" src="/static/image/home_announcement.png" mode="aspectFit"></image>
        <view class="text">
            <text> 公告信息公告信息告信息公告信息告信息公告信息都首付收费是所发生</text>
           
        </view>
        <image class="more" src="/static/image/home_more.png" mode="aspectFit"></image>
        </view>
    </view>
</template>

<script>
import image from '../../API/image/image.vue'
import Text from '../../component/text/text.vue'

export default {
  components: { image, Text },

}
  
</script>

<style>

.bg {
margin-left: 28rpx;
margin-right: 28rpx;
margin-top: 60rpx;
height: 54rpx;
border-radius: 8rpx;
background-color: #FFFBF0;
}
.row {
  height: 54rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.icon {
    margin-left: 16rpx;
    width: 28rpx;
    height: 28rpx;
}
.more {
    margin-right: 16rpx;
    width: 28rpx;
    height: 28rpx;
}
.text {
   align-items: center;
   margin-left: 16rpx;
   margin-right: 8rpx;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   font-size: 24rpx;
   color: #FFA837;
}
</style>
