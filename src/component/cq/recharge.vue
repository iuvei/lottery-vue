<template>
    <div class="cash width80" id="cash">
        <input class="text-input" name="userName" placeholder="请输入充值昵称"/>
        <input class="text-input" name="jine" placeholder="请输入充值金额"/>
        <p class="range">充值范围为<span id="range">{{message}}</span></p>
        <div class="modes">
            <ul class="">
                <li :class="{active:imgSrc===1}" range="50~500" data-img="../static/img/cash-wx.jpg" @click="togglePage('50~500',1)"><span></span>50~500充值</li>
                <li :class="{active:imgSrc===2}" range="50~5000" data-img="../static/img/cash-zfb.jpg" style="margin:0 1%;" @click="togglePage('50~5000',2)"><span></span>50~5000充值</li>
                <li :class="{active:imgSrc===3}" range="5000~100000" data-img="../static/img/cash-bank.jpg" @click="togglePage('5000~100000',3)"><span></span>网银充值</li>
            </ul>
            <img src="../static/img/cash-wx.jpg" width="60%" v-if="imgSrc===1"/>
            <img src="../static/img/cash-zfb.jpg" width="60%" v-if="imgSrc===2"/>
            <img src="../static/img/cash-bank.jpg" width="60%" v-if="imgSrc===3"/>
            <button class="btn btn-brown btn-block">确定</button>
        </div>
    </div>

</template>
<script>
export default{
    data(){
        return {message:'50~500',imgSrc:1}
    },
    methods:{
        togglePage(msg,src){
            this.message=msg;
            this.imgSrc=src;
        }
    }
}
</script>