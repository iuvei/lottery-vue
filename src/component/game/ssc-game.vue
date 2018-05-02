<template>
    <div class="game-top" id="gameTop">
        <div class="animation">
            <div class="first clearfix">
                <div><img :src="CZImg" height="90px"/></div>
                <div class="center">
                    <p class="time">{{winWidth}}</p>
                    <div class="lottery">
                        <div><img src="./img/pic-he.png"/></div>
                        <div style="margin:0 4%"><img src="./img/pic-da.png"/></div>
                        <div><img src="./img/pic-shuang.png"/></div>
                    </div>
                </div>
                <div>
                    <p class="info-qihao">期号 <span>{{qihao}}</span></p>
                    <p class="info-time">开奖时间 <span>{{time}}</span></p>
                </div>
            </div>
            <div class="second">
                <div class="haoma"><span>{{numList[0]}}</span><div class="wei">万</div></div><div class="sign"><img src="./img/icon-jia.png"/></div>
                <div class="haoma"><span>{{numList[1]}}</span><div class="wei">千</div></div><div class="sign"><img src="./img/icon-jia.png"/></div>
                <div class="haoma"><span>{{numList[2]}}</span><div class="wei">百</div></div><div class="sign"><img src="./img/icon-jia.png"/></div>
                <div class="haoma"><span>{{numList[3]}}</span><div class="wei">十</div></div><div class="sign"><img src="./img/icon-jia.png"/></div>
                <div class="haoma"><span>{{numList[4]}}</span><div class="wei">个</div></div><div class="sign"><img src="./img/icon-dengyu.png"/></div>
                <div class="haoma">{{sum}}</div>
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