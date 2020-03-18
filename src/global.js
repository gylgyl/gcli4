import Vue from 'vue'
import appButton from '@/components/app-button'
import { Button } from 'vant'
import 'vant/lib/button/style'
Vue.component('app-button', appButton)
Vue.use(Button)
