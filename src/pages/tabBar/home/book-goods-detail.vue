<template>
  <view style="background-color: #f5f6f7">
    <uni-list
      class="uni-list"
      :border="false"
      v-for="(value, index) in dataList"
    >
      <view class="item_bgview">
        <view>
          <image class="item_image" :src="value.imgUrl" @error="imageError">
          </image>
        </view>
        <view class="item_right">
          <view class="title">
            <text>{{ value.title }}</text>
          </view>
          <view class="subTitle">
            <text>{{ value.subTitle }}</text>
          </view>
          <view class="item_price">
            <view class="priceSymbol">
              <text>¥</text>
            </view>
            <view class="price">
              <text>{{ value.price }}</text>
            </view>
          </view>
        </view>
      </view>
    </uni-list>
  </view>
</template>

<script>
import { onMounted } from "vue";
import UniList from "../../../uni_modules/uni-list/components/uni-list/uni-list.vue";
let params = null;
export default {
  components: { },
  data() {
    return {
      dataList: [
        {
          title: "2022年广东专升本本英语教材教材教材",
          subTitle: "专升本考试必刷题产品卖点",
          price: "10.00",
          imgUrl:
            "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg",
        },
        {
          title: "2022年广东专升本本英语教材教材教材",
          subTitle: "专升本考试必刷题产品卖点",
          price: "20.00",
          imgUrl:
            "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg",
        },
        {
          title: "2022年广东专升本本英语教材教材教材",
          subTitle: "专升本考试必刷题产品卖点",
          price: "30.00",
          imgUrl:
            "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg",
        },
        {
          title: "2022年广东专升本本英语教材教材教材",
          subTitle: "专升本考试必刷题产品卖点",
          price: "40.00",
          imgUrl:
            "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg",
        },
        {
          title: "2022年广东专升本本英语教材教材教材",
          subTitle: "专升本考试必刷题产品卖点",
          price: "50.00",
          imgUrl:
            "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg",
        },
        {
          title: "2022年广东专升本本英语教材教材教材",
          subTitle: "专升本考试必刷题产品卖点",
          price: "60.00",
          imgUrl:
            "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg",
        },
      ],
      navTitle: {
      type: String,
      default: ''
    },
    };
  },
  onLoad(option) {
    let data = JSON.parse(decodeURIComponent(option.data));
    params = data;
    this.navTitle = params["navTitle"];
    uni.setNavigationBarTitle({
      title: this.navTitle,
    });
  },
};
</script>

<style>
.uni-list {
  background-color: #f5f6f7;
}
.item_bgview {
  display: flex;
  flex-direction: row;
  margin: 28rpx 28rpx 0rpx 28rpx;
  height: 232rpx;
  border-radius: 8rpx;
  background-color: #ffffff;
}

.item_image {
  width: 264rpx;
  height: 176rpx;
  margin-top: 28rpx;
  margin-bottom: 28rpx;
  margin-left: 28rpx;
  background-color: #07c160;
}

.item_right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20rpx;
  margin-right: 28rpx;
  margin-top: 28rpx;
  margin-bottom: 28rpx;
}

.title {
  color: #333333;
  font-size: 28rpx;
  font-weight: 500;
}

.subTitle {
  margin-top: 8rpx;
  color: #666666;
  font-size: 22rpx;
}

.item_price {
  display: flex;
  flex-direction: row;
  margin-top: auto;
}

.priceSymbol {
  color: #e62129;
  font-size: 22rpx;
  height: 22rpx;
  font-weight: 600;
  margin-top: 12rpx;
}

.price {
  color: #e62129;
  font-size: 36rpx;
  height: 36rpx;
  font-weight: 500;
  margin-left: 4rpx;
}
.uni-list::after {
  height: 0rpx;
}
</style>
