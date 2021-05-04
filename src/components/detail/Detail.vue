<template>
  <div class="detail">
  <!-- 使用子组件 -->
    <DetailBanner />  
    <DetailHeader />
    
    <!-- 定义撑起底部的容器 -->
    <div style="height:1000px"></div>
  </div>
</template>
 
<script>
  /* 引入子组件 */
  import DetailHeader from './pages/Header'
  import DetailBanner from './pages/Banner'

  export default {
    components: {	
      DetailBanner, 
      DetailHeader,
    }
  }

  </script>

  <style scoped>

  .detail {
    background: #f5f5f5;
  }
</style>
