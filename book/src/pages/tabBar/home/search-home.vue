
<template>
	<view>
		<view class="sign_text" @tap="toggle('bottom')">
			<text style="line-height: 60px;margin-top: 12px;">点击弹出</text>
		</view>
		<!-- 普通弹窗 -->
       
		<uni-popup ref="popup">
			<view class="popup-content" >
				<view style="color: green;">
					这是一个弹窗
				</view>
				<view style="color: red;" @click="close()">
					关闭弹窗
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			//弹窗开启
			toggle(type) {
				this.type = type
				this.$refs.popup.open(type)
			},
			//弹窗关闭
			close() {
				this.$refs.popup.close()
			},

		}
	}
</script>

<style>
	.popup-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 200px;
		width: 100%;
		background-color: #fff;
		border-radius: 20rpx 20rpx 0rpx 0rpx;
	}

</style>



