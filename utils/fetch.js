/**
 * 日期:2020年6月2日
 * 作用:用于对接口请求方式进行封装
 * 配置:
 * 1.BaseUrl:页面基础URL，写入接口基础地址如'https://www.baidu.com/...'
 * 2.传入参数:url(接口剩余路径)，data(接口参数列表)，config(接口其他特殊配置如method，header...)
 */
const BaseUrl='https://locally.uieee.com'
module.exports=(url,data,config)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: BaseUrl+url,
      data:data,
      ...config,
      success:resolve,
      fail:reject,
    })
  })
}