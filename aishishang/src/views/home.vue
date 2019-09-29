<template>
    <div class="home">
        <headdd></headdd>
        <div class="main">
           <div class="nav">
               <div class="nav-tt" v-for="(item,index) in navList" :key="index" :class="{active: index==list }" @click="sort(index)">{{item}}</div>
           </div>
           <div class="list">
             <div class="good" v-for="(item,index) in goodList" :key="index">
                <div class="pic">
                 <img :src="item.pic" alt="">
                </div>
                <div class="text">
                <div class="name" @click="date(item)">{{item.name}}</div>
                <div class="buyCount">已售:{{item.buyCount}}</div>
                <div class="price">单价:{{item.price}}</div>
                </div>
                <div class="btn" @click="addtocart(item)">加入购物车</div>
            </div>
           </div>
           <router-link to="/shopcar">
             <div class="shoppic">
              <img src="../images/cart.png" alt="">
              <span class="num">{{0}}</span>
             </div>
           </router-link>
        </div>
    </div>
</template>
<script>
import headdd from "../components/headdd"
import axios from "axios"
import {mapMutations,mapState} from "vuex"
export default {
    name:"home",
    props:{

    },
    components:{
      headdd,
    },
    data(){
        return {
          list:0,
          navList:["价格升序↑","价格降序↓","销量升序↑","销量降序↓"],
          goodList:[],
        }
    },
    computed:{
    //    total:function(){
    //       return this.goodInCart.reduce(function(t,i){ return t+i.count },0);
    //     },
    //    ...mapState(['goodInCart'])
    },
    methods:{
       sort:function(index){
           this.list=index;
        if(index==0){
        this.goodList.sort(function(goodA,goodB){
          return goodA.price-goodB.price
        })
      }else if(index==1){
         this.goodList.sort(function(goodA,goodB){
          return goodB.price-goodA.price
        })
        }else if(index==2){
            this.goodList.sort(function(goodA,goodB){
                return goodB.buyCount-goodA.buyCount;
            })
        }else{
             this.goodList.sort(function(goodA,goodB){
                return goodA.buyCount-goodB.buyCount;
            })
        }
       },
       date(item){
          this.$router.push({path:`/datetill/${item.id}`,query:{item:item}})
       },
    //    ...mapMutations('addtocart')
    },
    created(){
       
    },
    mounted(){
      axios.get("https://yantianfeng.com/api/goodList").then((res)=>{
          console.log(res.data)
          this.goodList=res.data.goodList;
      })
    }
}
</script>
<style scoped lang="scss">
    .home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .nav{
            width: 100%;
            height: 50px;
            line-height: 50px;
            display: flex;
            justify-content: space-around;
            border-bottom:1px solid #cce;
            .nav-tt{
                float: left;
                
            }
            .nav-tt.active{
              color: red;
            }
        }
        .list{
            margin: 20px;
        }
        .list .good{
            position: relative;
            margin: 20px 0;
            display: flex;
        }
        .list .good .pic{
            width: 30%;
            margin-right: 15px;
        }
        .list .good .pic img{
            width: 100%;
        }
        .list .good .text{
            line-height: 30px;
            width: 70%;
        }
         .list .good .text .name{
            white-space: nowrap;/* 不换行 */
            overflow: hidden;
            text-overflow: ellipsis;/* 显示省略号 */
         }
         .list .good .btn{
             position: absolute;
            right: 0;
            bottom: 0;
            background-color: red;
            color: white;
            text-align: center;
            padding: 5px 15px;
            font-size: 14px;
         }
         .shoppic{
             position: fixed;
            bottom: 40px;
            right: 15px;
            background-color: lightblue;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            .num{
                position: absolute;
                right: 0;
                top: 0;
                background-color: red;
                color: white;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                text-align: center;
                line-height: 20px;
                font-size: 14px;
            }
        }
    }
</style>