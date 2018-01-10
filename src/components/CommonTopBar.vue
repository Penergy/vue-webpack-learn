<template>
    <div class="common-top-bar box-horizontal" > 
        <div class="bar_left">
            <h2>{{location}}</h2>
            <span id="common-location">
                [
                <a v-for="city in cityList">{{city + " "}}</a>
                ]
            </span>
        </div>
        <div class="bar_right">
             <span>123</span>
        </div>
    </div>
</template>

<script>
import ConfigCity from '@/configs/config.js'

export default {
  name: 'CommonTopBar',
  data () {
    return {
      location: '北京',
      cityList: ConfigCity,
      menu: { login: '登录', sitemap: '网站导航' }
    }
  }
}
</script>
