// 全局请求封装
const token = uni.getStorageSync('token')

export default (url, method, params) => {
    const token = uni.getStorageSync('token');
        // uni.showLoading({
        //     title: "加载中"
        // });
        // if(!token ){
        //     // 执行没有登录的逻辑
        //  alert("无token");
        //     return;
        // }
        return new Promise((resolve, reject) => {
            uni.request({
                url: "https://console-mock.apipost.cn/app/mock/project/bed6c219-665b-418f-c189-a6a7b5c6eae4" + url,
                method: method,
                header: {
                    token: token
                },
                data: {
                    // serviceId: api[0].serviceId,
                    ...params
                },
                success(res) {
                    resolve(res.data);
                },
                fail(err) {
                    reject(err);
                },
                complete() {
                    uni.hideLoading();
                }
            });
        });
    };
    
    