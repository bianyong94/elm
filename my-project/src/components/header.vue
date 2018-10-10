<template>
    <div class="header" :style="{backgroundImage: 'url(' + (seller.avatar) + ')', backgroundSize:'cover'}">
        <div class="flex white seller-header btrgba" >
            <span class="mr10 seller-logo"><img :src="seller.avatar" alt="" width="" height=""></span>
            <div>
                <h1>
                    <span class="pinpai"><img  src="../img/brand@2x.png"></span>
                    <i>{{seller.name}}</i>
                </h1>
                <p class="mt10 mb10 ft14">{{seller.description}}/38分钟送达</p>
                <p class="ft12" v-if="seller.supports">
                    <span class="cut">
                        <img src="../img/decrease_1@2x.png" alt="">
                    </span>{{seller.supports[0].description}}
                </p>
            </div>
            <span class="five ft12" @click="alert">5个&gt;</span>
        </div>
        <div class="float-notice p10 flex" @click="alert">
            <span class="mr10"><img src="../img/bulletin@2x.png" alt=""></span>
            <span class="white ft10 notice-word">{{seller.bulletin}}</span>
        </div>
        <div class="mohu">

        </div>
        <div class="alert white tc ft12" ref="show">
            <h1>{{seller.name}}</h1>
            <p class="star flex">
                <span>
                    <img src="../img/star48_on@2x.png" alt="">
                </span>
                <span>
                    <img src="../img/star48_on@2x.png" alt="">
                </span>
                <span>
                    <img src="../img/star48_on@2x.png" alt="">
                </span>
                <span>
                    <img src="../img/star48_on@2x.png" alt="">
                </span>
                <span>
                    <img src="../img/star48_off@2x.png" alt="">
                </span>
            </p>
            <div>
                <div class="flex m10">
                    <span class="line"></span>
                    <p class="head">优惠信息</p>
                    <span class="line"></span>
                </div>
                <ul class="list-info" v-if="seller.supports">
                    <li>
                        <span><img src="../img/decrease_1@2x.png" alt=""></span>
                        {{seller.supports[0].description}}
                    </li>
                    <li>
                        <span><img src="../img/discount_1@2x.png" alt=""></span>
                        {{seller.supports[0].description}}
                    </li>
                    <li>
                        <span><img src="../img/guarantee_1@2x.png" alt=""></span>
                        {{seller.supports[0].description}}
                    </li>
                    <li>
                        <span><img src="../img/invoice_1@2x.png" alt=""></span>
                        {{seller.supports[0].description}}
                    </li>
                    <li>
                        <span><img src="../img/special_1@2x.png" alt=""></span>
                        {{seller.supports[0].description}}
                    </li>
                </ul>
                 <div class="flex m10">
                    <span class="line"></span>
                    <p class="head">商家公告</p>
                    <span class="line"></span>
                </div>
                <p class="m10 bulletin">{{seller.bulletin}}</p>
                <span @click="close" class="close">X</span>
            </div>
           
        </div>
    </div>
</template>
<script>


export default {
    props: ["seller"],
    data(){
        return{
            show:true
        }
    },
    methods: {
        alert(){
            this.$refs.show.style.display='block'
        },
        close(){
            this.$refs.show.style.display='none'
        }
    }
}

</script>
<style lang='less' scoped>
// @import '../../static/common.less';
    .seller-header{padding: 20px;position: relative; }
    .seller-logo{width: 80px;}
    .pinpai{width:30px;}
    .cut{width: 20px;}
    .float-notice {background: rgba(0, 0, 0, 0.8)}
    .float-notice img{width: 30px;}
    .notice-word{margin-top: 5px;white-space: nowrap;overflow: hidden;}
    .five{position: absolute;bottom: 20px;right: 10px;background: rgba(0, 0, 0, 0.4);padding: 4px 5px;border-radius: 0.5em;}
    // 遮罩
    .alert{
        z-index:10;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.8);
        padding: 50px;
       display: none;
    }
    .star{
        justify-content: center;
    }
    .star span{
        width: 25px;
        margin: 10px;
    }
    .list-info{
        text-align: left;
        // padding: 20px;
    }
    .list-info li{
        margin: 10px;
    }
    .line{
        width: 45%;
        height:6px;
        border-bottom: 1px solid #ccc;
    }
    .head{
        width: 100px;
        }
    .bulletin{
        text-align: left;
    }
    .close{
        position: absolute;
        bottom: 20px;
        left: 50%;
    }
</style>
