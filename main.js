const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
            inventory: 0,
            onSale: true
        }
    }
})
