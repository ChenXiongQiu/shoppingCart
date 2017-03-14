<template>
  <!--在vue 2.0必须使用一个dom节点为根节点-->
	<div class="checkout">
        <router-view></router-view>
	</div>
</template>
<script>
  import axios from 'axios'
  export default {
    //和前面定义组件使用方式一样，必须返回一个对象
    data() {
      return {}   
    }
  } 
</script>
