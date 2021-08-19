import Vue from 'vue'

Vue.filter('toLowercase', function (text) {
 return string.length > 10 ? string.slice(0, 10) + "…" : string;
})