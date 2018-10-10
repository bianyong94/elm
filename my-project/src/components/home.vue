<template>
  <div class="hello">
      这是首页
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'nonononon'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- scopde表示样式只能作用于当前页面-->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
