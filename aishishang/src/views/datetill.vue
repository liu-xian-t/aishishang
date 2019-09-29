<template>
    <div class="datetill">
       <div class="good">
                <div class="pic">
                 <img :src="list.pic" alt="">
                </div>
                <div class="text">
                <div class="name">{{list.name}}</div>
                <div class="buyCount">已售:{{list.buyCount}}</div>
                <div class="price">单价:{{list.price}}</div>
                </div>
                <div class="btn">加入购物车</div>
            </div>
    </div>
</template>
<script>
export default {
    name:"datetill",
    props:{

    },
    components:{

    },
    data(){
        return {
          list:this.$route.query.item
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style>
        .good{
            position: relative;
            margin: 20px 0;
            display: flex;
        }
        .good .pic{
            width: 30%;
            margin-right: 15px;
        }
        .good .pic img{
            width: 100%;
        }
        .good .text{
            line-height: 30px;
            width: 70%;
        }
        .good .text .name{
            white-space: nowrap;/* 不换行 */
            overflow: hidden;
            text-overflow: ellipsis;/* 显示省略号 */
         }
        .good .btn{
             position: absolute;
            right: 0;
            bottom: 0;
            background-color: red;
            color: white;
            text-align: center;
            padding: 5px 15px;
            font-size: 14px;
         }
</style>