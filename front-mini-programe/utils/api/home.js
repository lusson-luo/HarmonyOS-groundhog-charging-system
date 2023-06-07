const http = uni.$u.http

//获取充电站列表  /wx-api/station/list   get
/*
参数：{"name":"新安","address":"深圳市","pageNo":1,"pageSize":2,我的位置#"coordinate":"36.5853,109.4898"}
*/
export const requestStations = (params) => http.get(`/wx-api/station/list`, params)

//获取充电桩列表  /wx-api/pile/list  get   参数："stationId":1
export const requestPiles = (stationId) => http.get(`/wx-api/pile/list?stationId=${stationId}`)

//开始充电  /wx-api/charge/start  post  参数："pileId":22
export const requestStartCharge = (pileId) => http.post(`/wx-api/charge/start?pileId=${pileId}`)

//获取充电订单列表  /wx-api/charge/list  get
export const requestChargeOrders = (pageNo, pageSize) => http.get(`/wx-api/charge/list?pageNo=${pageNo || 1}&pageSize=${pageSize || 1000}`)

//停止充电  /wx-api/charge/stop post  参数："orderId":6
export const requestStopCharge = (orderId) => http.post(`/wx-api/charge/stop?orderId=${orderId}`)