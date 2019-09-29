<template>
    <div class="headdd">
          <img src="../images/banner-2.png" alt="">
          <div class="top">
              <img class="img1" src="../images/avatar.jpg" alt="">
              <p class="hh">爱时尚精品屋</p>
              <p class="gong">公告:欢迎光临 流行爆款库存有限请尽早下单</p>
          </div>
        </div>
</template>
<script>
export default {
    name:"headdd",
    props:{

    },
    components:{

    },
    data(){
        return {

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
<style scoped lang="scss">
     .headdd{
            width: 100%;
            height: 350px;
            img{
                width: 100%;
                height: 180px;
                position: relative;
            }
            .top{
                width: 100%;
                height: 150px;
                img{
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    margin-top:-50px;
                    margin-left:170px;
                }
                .hh{
                    font-size: 23px;
                    margin-left: 150px;
                    margin-top:10px;
                }
                .gong{
                    font-size: 14px;
                    color: #000;
                    margin-left:80px;
                    margin-top:10px;
                }

            }
        }
</style>