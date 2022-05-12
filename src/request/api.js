import request from "./request.js"

export default {
    // 今日抢购列表
    todaySnapList(params) {
		return request("/book/snap", "GET", params)
    },
    
    // 图书首页
     home(params) {
		return request("/book/home", "GET", params)
    },
}