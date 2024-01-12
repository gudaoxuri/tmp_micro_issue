<script lang="ts" setup>
import { ref } from 'vue'

const url = ref()

const replaceUrl = () => {
  let actualUrl = window.location.href
  actualUrl = actualUrl.replace('/app1', '/child')
  url.value = actualUrl
}

replaceUrl()

console.log('加载子应用：'+url.value)
</script>


<template>
  <div>
    主应用区域
    <micro-app
      name='appname-vite'
      :url='url'
      inline
      disablesandbox
    ></micro-app>
  </div>
</template>
