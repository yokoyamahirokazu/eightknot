import Vue from 'vue'
import {
  extend,
  ValidationProvider,
  ValidationObserver,
  localize
} from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'
import { required, email, max } from 'vee-validate/dist/rules'

localize('ja', ja)

extend('required', required) // 入力必須項目

extend('email', email) // アドレス用

extend('max', max) //最大入力数

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
