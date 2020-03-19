// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';//仓库
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: '9ArFLK52AKo91e6GyhkekQmtZgYdz2pA'
})
require('script-loader!file-saver'); //保存文件用
//  require('script-loader!utils/Blob'); //转二进制用(此处需映射到自己下载的blob.js文件)
 require('script-loader!xlsx/dist/xlsx.core.min');
Vue.config.productionTip = false
// Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
