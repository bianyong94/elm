<template>
    <!-- <div class="ft"> -->
        <div class="footer white">
            <div class="flex" @click="show">
                <div class="psinfo" >
                    <span class="shopcarimg tc ft12">购物车</span>
                    <i class="white foodcount tc ft14">{{newnumber}}</i>
                    <span class="pricecount">￥{{countall}}</span>
                    <span class="ft12"> 另需配送费4元</span>
                </div>
                <div class="psmoney" :class="{'bggreen':countall>=20}">
                    ￥20元起送
                </div>
            </div>

             <div class="ft-none" ref="ftnone">
            <div class="flex p10">
                <span class="gray">购物车</span>
                <span class="blue ft14" @click="clearall">清空</span>
            </div>
            <!-- 已选清单列表 -->
            <ul class="list-item" >
                <li class="flex m10" v-for="i,j in item" v-show="i.count>0">
                    <div>
                        <h1 class="gray">{{i.name}}</h1>
                    </div>
                    <span class="addorcut tc">
                        <i class="red">￥{{i.price*i.count}}</i>
                        <i class="white cut"  @click="cut(i)">-</i>
                        <span class="ft12 count gray"> {{i.count}} </span>
                        <i class="add white" @click="add(i)">+</i>
                    </span>
                </li>
            </ul>
        </div>
        </div>
       
    <!-- </div> -->
</template>

<script>
// 引入header组件

export default {
     props: ['item','foodname','num','countall'],
    data () {
        return {
          
        }
    },
   
    created () {
      this.$http.get('static/mock/data.json').then(response=>{ 
        let obj=response.body;
        this.goods=obj.goods;
      }).catch(response => {
            console.log('出现错误了');
      })
    },
    computed: {
        newnumber(){
            var newnum=0;
            for(var i in this.item){
               newnum+=this.item[i].count;
            }
            return newnum;
        }
    },
    methods: {
        //清空
        clearall(){
            for(var i in this.item){
                console.log(this.item[i])
                this.item[i].count=0;
            }
        },
        cut(i){
            console.log(this.item[this.foodname]);
            i.count--;
            // this.num--;
        },
        add(i){
            i.count++;
            // this.num++;
        },
        show(){
            if(this.$refs.ftnone.style.display=='block'){
                this.$refs.ftnone.style.display='none';
            }
            else{
                this.$refs.ftnone.style.display='block'
            }
            
        }
    }
}
</script>

<style>
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #141d27;
}
.footer>div{
    justify-content: space-between;
    /* padding: 0 10px; */
}
.psinfo{
    position: relative;
    padding: 15px;
}
.shopcarimg{
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    background: #2b333b;
    position: absolute;
    left: 15px;
    top: -10px;
    z-index:20;
}
.foodcount{
     width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
    background: red;
    position: absolute;
    left: 45px;
    top: -10px;
    z-index:20;
}
.pricecount{
    margin-left: 70px;
    margin-right: 20px;
}
.psmoney{
    background: #2b333b;
    padding: 15px;
}
.bggreen{
    background: green;
}
.ft{
    position: relative;
}
.ft-none{
    position: absolute;
    bottom:45px;
    left: 0;
    right: 0;
    z-index: 10;
    background: white;
    padding-bottom: 10px;
    display: none;
}
.ft-none>div{
    background: #f3f5f7;
    justify-content: space-between;
    padding:15px;
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
</style>
