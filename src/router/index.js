import Vue from 'vue'
// es6语法引入
import Router from 'vue-router'

// 2、注册
Vue.use(Router)
// 3、实例化
export default new Router({
    routes: [
        // 4、配置路由
        {
            path: '/',
            name: 'Mvue',
            component: resolve => require(['@/components/HelloWorld.vue'], resolve), meta: { title: 'vue测试' }
        },
        {
            path: '/views/childList',
            name: 'list',
            component: resolve => require(['@/views/childList.vue'], resolve), meta: { title: '子组件' },
            children:[
                {   path: '/demo',
                    name:'nihao',
                    component: resolve => require(['@/views/demo.vue'], resolve), meta: { title: '子组件' },
                },
                {   path: '/demo1',
                    name:'nihao',
                    component: resolve => require(['@/views/demo1.vue'], resolve), meta: { title: '子组件' },
                }
            ]
        },
        {
            path: '/views/fuwen',
            name: 'fuwen',
            component: resolve => require(['@/views/fuwen.vue'], resolve), meta: { title: '子组件' }
        },
        {
            path: '/views/map',
            name: 'fuwen',
            component: resolve => require(['@/views/map/map.vue'], resolve), meta: { title: '子组件' }
        },
        {
            path: '/views/citie',
            name: '磁贴',
            component: resolve => require(['@/views/citie.vue'], resolve), meta: { title: '子组件' }
        },
        {
            path: '/views/donghua',
            name: '磁贴',
            component: resolve => require(['@/views/donghua.vue'], resolve), meta: { title: '子组件' }
        },
        {
            path: '/views/tuozhuai',
            name: '磁贴',
            component: resolve => require(['@/views/tuozhuai.vue'], resolve), meta: { title: '子组件' }
        },

        { 
            path: '*', 
            component: resolve => require(['@/components/err.vue'], resolve), meta: { title: '子组件' }
    
        }
    ]
})