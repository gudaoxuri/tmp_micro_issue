<template>
  <div>
    主应用区域
    <micro-app
      name='appname-vite'
      url='http://172.30.111.50:8080/child/'
      inline
      disablesandbox
    ></micro-app>
  </div>
</template>

<script lang="ts" setup>
console.log('加载主应用')
</script>
