<template>
    <div class="game-top" id="gameTop">
        <div class="animation">
            <div class="first clearfix">
                <div><img :src="CZImg" height="90px"/></div>
                <div class="center">
                    <p class="time">05:33</p>
                    <div class="lottery">
                        <div style="margin-right:6%"><img src="./img/pic-he.png"/></div>
                        <div><img src="./img/pic-shuang.png"/></div>
                    </div>
                </div>
                <div>
                    <p class="info-qihao">期号 <span>43235434544</span></p>
                    <p class="info-time">开奖时间 <span>09:50</span></p>
                </div>
            </div>
            <div class="second pc28">
                <div class="haoma"><span>1</span></div><div class="sign"><img src="./img/icon-jia.png"/></div>
                <div class="haoma"><span>3</span></div><div class="sign"><img src="./img/icon-jia.png"/></div>
                <div class="haoma"><span>7</span></div><div class="sign"><img src="./img/icon-dengyu.png"/></div>
                <div class="haoma">11</div>
            </div>
        </div>
        <div class="trend">
            <table class="table">
                <thead>
                    <tr><td>期号</td><td>开奖号码</td><td colspan="3">总和</td><td>龙虎</td></tr>
                </thead>
                <tbody>
                    <tr><td>0321066</td><td class="lightblue">9 0 6 8 9</td><td class="lightred">32</td><td class="lightred">大</td><td class="lightred">双</td><td class="aqua">和</td></tr>
                    <tr><td>0321066</td><td class="lightblue">0 3 4 2 8</td><td class="lightred">17</td><td class="aqua">小</td><td class="aqua">单</td><td class="lightred">虎</td></tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default{
    props:['time','numList','qihao'],
    computed:{
        sum:function(){
            let sum=0;
            if(this.numList){
                for(let i=0;i<this.numList.length;i++){
                    sum+=this.numList[i];
                }
            }
            return sum;
        },
        ...mapGetters(['CZImg'])
    },
    data(){return {winWidth:window.innerWidth,currImg:''}},
    created(){

    }
}
</script>