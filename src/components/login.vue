<template>
    <div>
        <!-- logo icon -->
        <!-- login frame -->
       <div class="loginBox">
            <el-carousel :interval="5000" arrow='never' class="slide">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
       </div>
        <!-- smail button -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            Img:this.$store.getters.getLoginImg
        }
    },
    created(){
        for(let key in this.Img){
            window.console.log(this.Img[key])
        }
    }
}
</script>

<style scoped>
    .loginBox{
        width: 1000px;
        height: 560px;
        margin: 80px auto;
        border-radius: 10px;
        overflow: hidden;
        /* background-color: #882; */
    }
    .slide{
        width: 45%;
        height: 100%;
        /* border: 1px solid #eee; */
        box-shadow: 0 1px 6px rgba(0, 0, 0, .117647);
    }
</style>