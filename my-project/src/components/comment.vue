<template>
<div class="ratings">
    <div class="ratings-content">
        <div class="overview">
            <div class="overview-left">
                <h1 id="score">{{seller.__ob__.value.score}}</h1>
                <div class="title">综合评分</div>
                <div class="rank">高于周边商家{{seller.rankRate}}%</div>
            </div>
            <div class="overview-right">
                <div class="score-wrapper">
                    <span class="title">服务态度</span>
                    
                    <span class="score">{{seller.serviceScore}}</span>
                </div>
                <div class="score-wrapper">
                    <span class="title">商品评分</span>
                  
                    <span class="score">{{seller.foodScore}}</span>
                </div>
                <div class="delivery-wrapper">
                    <span class="title">送达时间</span>
                    <span class="delivery">{{seller.deliveryTime}}分钟</span>
                </div>
            </div>
        </div>
        <div class="rating-wrapper border-1px">
            <ul>
                <li  class="rating-item" v-for="item in ratings">
                    <div class="avatar">
                        <img :src="item.avatar">
                    </div>
                    <div class="content">
                        <h1 class="name">{{item.username}}</h1>
                        <div class="star-wrapper">
                            
                            <span class="delivery" >{{item.deliveryTime}}分钟送达</span>
                        </div>
                        <p class="text">{{item.text}}</p>
                        <div class="recommend">
                            <i class=""></i>
                            <span class="item" v-for="item1 in item.recommend">{{item1}}</span>
                        </div>
                        <div class="time">
                            {{item.rateTime}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
</div>
</template>
<script>
export default{
  data () {
    return {
      ratings:{},
      seller:{},  
    }
  },
  computed: {
    //   time(){
    //       var Time='';
    //       for(var i in this.ratings){
    //          var hour= i.deliveryTime/1000/60/
    //       }
    //   }
  },
   created () {
      this.$http.get('static/mock/data.json').then(response=>{
        // console.log(response);
        let obj=response.body;
        // console.log(obj)
        this.ratings=obj.ratings;
        this.seller=obj.seller;
        //  console.log(obj);
         console.log(this.ratings)
      }).catch(response => {
        // console.log('出现错误了');
      })
    },
}
</script>

<style scoped>
.ratings{
    position: absolute;
    top: 174px;
    left: 0;
    bottom: 0;
    width: 100%;
    /* overflow: hidden; */
    }
    .overview{
        display: flex;
        padding: 18px 0 18px 18px;
    }
    .overview-left{
        flex: 0 0 137px;
        width: 137px;
        padding: 6px; 
        border-right:1px solid rgba(7, 17, 27, 0.1);
        text-align: center;
        }
    #score{
        margin-bottom: 6px;
        font-size: 30px;
        line-height: 28px;
        color:rgb(255,153,0);
        }
    .title {
        margin-bottom: 6px;
        /* font-size: 12px; */
        line-height: 12px;
        color: rgb(7, 17, 27);
        }
    .rank{
        font-size: 12px;
        line-height: 10px;
        color: rgb(147, 153, 159);
        }
    .overview-right{
        flex: 1;
        padding:6px 0 6px 24px;
        }
    .score-wrapper{
        line-height: 18px;
        margin-top: 8px;
        font-size: 0;
        }
        .title {
        vertical-align: top;
        font-size: 14px;
        color: rgb(7, 17, 27);
        }
    .star {
        margin: 0 12px;
        display: inline-block;
        vertical-align: top;
        }
    .score{
        font-size: 14px;
        color: rgb(255, 153, 0);
        }
    .delivery-wrapper{
        line-height: 18px;
        margin-top: 8px;
        font-size: 0;
        }
    .title {
        vertical-align: top;
        font-size: 16px;
        color: rgb(7, 17, 27);
        margin-right: 12px;
        }
    .delivery{
        font-size: 16px;
        color: rgb(147, 153, 159);
        }
    .rating-wrapper{
        padding: 0 18px;
    }
    .rating-item{
        display: flex;
        padding: 18px 0;
      position: relative;
        }
    .avatar {
        flex: 0 0 28px;
        width:28px;
        margin-right: 12px;
        }
    .avatar img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    .content {
        flex: 1;
        }
    .name {
        margin-bottom:4px;
        font-size: 14px;
        line-height: 12px;
        color: rgb(7, 17, 27);
        }
    .star-wrapper{
        margin-bottom: 6px;
        font-size: 0;
        }
        .star {
            display: inline-block;
            margin-right:6px;
            vertical-align: top ;
            }
        .delivery{
            display: inline-block;
            vertical-align: top;
            font-size: 12px;
            line-height: 12px;
            font-weight: 200;
            color: rgb(147, 153, 159);
            }
    .text {
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 18px;
        color:rgb(7, 17, 27);
        }
    .recommend{
        line-height: 16px;
        font-size: 0;
        }
        .iconfont, .item {
            display: inline-block;
            margin-right: 8px;
            font-size: 12px;
            }
        .iconfont{
            color: rgb(0, 160, 220);
            }
        .item {
            padding: 0 6px;
            color: rgb(147, 153, 159);
            border: 1px solid rgba(7, 17, 27, 0.1);
            border-radius:1px;
            background-color:#fff;
            }
    .time{
        position: absolute;
        right: 0;
        top: 18px;
        font-size:12px;
        line-height: 12px;
        color: rgb(147, 153, 159);
        }
</style>
