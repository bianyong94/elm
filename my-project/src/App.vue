<template>
  <div id="app">
      <elm-header v-bind:seller="seller"></elm-header>
      <div class="tab p10">
          <div class="tab-item tc" @click="tab" >
              <router-link to="/goods" :class="{'active':aaa=='商品'}">商品</router-link>
          </div>
            <div class="tab-item tc" @click="tab">
              <router-link to="/comment"  :class="{'active':aaa=='评论'}">评论</router-link>
          </div>
          <div class="tab-item tc" @click="tab" >
              <router-link to="/contact" :class="{'active':aaa=='商家'}">商家</router-link>
          </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
// 引入header组件
import header from './components/header.vue';
export default {
  name: 'App',
  data(){
    return {
      // 在data中定义一个空的属性，值为对象，该属性用来接收从ajax中传进来的json数据
      seller:{},
      aaa:'商品'
    }
  },
   methods: {
      tab(event){
        this.aaa=event.target.innerText;
      }
  },
  components: {
    // 使用header组件
    'elm-header':header
  },
    created () {
      this.$http.get('static/mock/data.json').then(response=>{
        // console.log(response);
          let obj=response.body;
          // obj为属性值为goods、ratings、seller的对象
          this.seller=obj.seller;
          // console.log(this.seller)
      }).catch(response => {
        console.log('出现错误了');
      })
    }
}
</script>

<style>
@import '../static/css/reset.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.tab{
  display: flex;
  border-bottom: 1px solid #ccc;
}
.tab-item{width: 33%;}
.tab-item a{
  color: gray;
}
.tab-item .active{
  color: red;
}
</style>
