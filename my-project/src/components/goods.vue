<template>
  <div class="hello">
     <!-- 左侧固定栏 -->
     <div class="flex">
        <ul class="left-list">
          <li class="tc ft12" v-for="item,index in leftgoods" @click="tab(index)"> 
                <span>
                     <img class="te" src="../img/decrease_3@2x.png" alt="" v-show="item.type==1">
                    <img class="te" src="../img/special_3@2x.png" alt="" v-show="item.type==2">
                    {{item.name}}
                </span>
          </li>
        </ul>
        <!-- 右侧 -->
        <div class="list-goods">  
            <ul class="list-item"  id="a" v-for="item1,index1 in leftgoods" v-show="index===index1">
                 <p class="title gray ft14 p10">{{item1.name}}</p>
                <li class="flex m10" v-for="item2,index2 in item1.foods">
                    <span class="img-item mr10" ><img :src="item2.image" alt=""></span>
                    <div>
                        <h1>{{item2.name}}</h1>
                        <p class="gray ft12">{{item2.description}}</p>
                        <p class="gray ft12"><span>月售{{item2.sellCount}}份</span> <span>好评率{{item2.rating}}%</span></p>
                        <p class="red">￥<i>{{item2.price}}</i></p>
                    </div>
                    <span class="addorcut tc">
                        <i class="white cut" @click="cut(item2,index2)" v-show="item2.count>0">-</i>
                        <span class="ft12 count" v-show="item2.count>0"> {{item2.count}} </span>
                        <i class="add white" @click="add(item2,index2)">+</i>
                    </span>
                </li>
            </ul>
        </div>
        <!-- 底部组件 -->
        <footer-item :item="item" :foodname="foodname" :num="num"
        :countall="countall"></footer-item>
     </div>

  </div>
</template>
<script>
import footer from '@/components/footer.vue'
export default {
    components: {
      'footer-item':footer  
    },
  data() {
    return {
        // 左侧商品列表
        leftgoods:[],
        //默认为0显示第一个界面
        index:0,
        //将列表传入子组件,是一个对象，添加同一个商品时名称覆盖，数量增加
        item:{},
       foodname:{},
       //每个商品的数量
       count:[],
       //商品总数
       num:0,
       //总价
    //    countall:0,

        // cutprice:0
    }
  },
  created () {
      this.$http.get('static/mock/data.json').then(response=>{
        // console.log(response);
        let obj=response.body;
        // console.log(obj)
        this.leftgoods=obj.goods;
        //  console.log(this.leftgoods);
      }).catch(response => {
        // console.log('出现错误了');
      })
    },
  computed: {
    //   cutprice(){
    //       var newnum=0;
    //       for(var i in this.item){
    //         newnum+=this.item[i].count;
    //     }

    //     return newnum;
    //   },
    //   jia总价
    countall(){
        //计算总价
        var countAll=0;
        for(var i in this.item){
            countAll+=this.item[i].price*this.item[i].count;
        }
        return countAll;
    },
  },
  methods: {
      //实现左侧商品点击右侧显示对应的界面
    tab(index){
        this.index=index;
    },
    //加
    add(item){
         if (!item.count) {
            this.$set(item,'count',1)
        } else {
            item.count ++;
        }
        // 传入商品信息
        this.$set(this.item,item.name,item);    
        this.$set(this.foodname,item.name,item.name);
        //传入商品总数
        // this.num++;
        var newnum=0;
        for(var i in this.item){
            newnum+=this.item[i].count;
        }
        this.num=newnum;
    },
    //减
    cut(item){
        if (!item.count) {
            this.$set(item,'count',1)
        } else {
            item.count --;
        }  
        //做判断，当商品数量小于等于0时，删除
        if(item.count<=0){
            this.$delete(this.item,item.name,item);    
            this.$delete(this.foodname,item.name,item.name);  
        }
        this.num--;
        
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- scopde表示样式只能作用于当前页面-->
<style scoped>
.left-list{
  padding: 10px 0;
  background: #f3f5f7;
  flex: 1;
  height: 100%;
}
.title{
   background: #f3f5f7;
}
li{
    cursor: pointer;
    animation: all 1s;
}
.left-list li span{
  padding: 20px 5px;
  width: 80px;
  border-bottom: 1px solid #ccc;
}
.list-goods{flex: 10;}
.list-goods>p{border-left: 3px solid #ccc;}
.img-item{
  width: 60px;
  height: 60px;
}
.list-item li{
  border-bottom: 1px solid #ccc;
  padding: 15px;
  position: relative;
}
.list-item li p{
  margin: 8px 0;
}
.addorcut{
    position: absolute;
    right: 10px;
    bottom: 20px;
}
.cut,.add{
    display: inline-block;
    background: skyblue;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    user-select:none;
}
.on{background: white;}
@keyframes move {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
};
li{
    animation: move 1s;
}
.te{
    width: 15px;
    height:15px;
    vertical-align: top;
}
 
</style>
