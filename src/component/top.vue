<template>
<div class="top">
    <div class="user width97">
        <img src="./static/img/user.jpg" width="70"/>
        <div class="info">
            <p class="name">昵称：飞逝<span class="right">ID：82261</span></p>
            <p>剩余点数：0</p>
            <p class="brown">返水点数：0<button class="btn btn-brown" id="btn-fs" @click="DialogShow('exchange-fs')">兑换</button></p>
            <p class="brown">佣金点数：0<button class="btn btn-brown" id="btn-yj" @click="DialogShow('exchange-yj')">兑换</button></p>
        </div>
    </div>

<div class="dialog" id="exchange-fs" @click.self="DialogHide('exchange-fs')">
    <div class="content">
        <div class="ctn-close">
            <a href="javascript:;" id="btnClose-fs" class="close" @click="DialogHide('exchange-fs')"><img src="./static/img/icon-close.png" width="100%"/></a>
        </div>
        <h3>返水点数兑换</h3>
        <div class="width80">
            <input class="text-input" placeholder="请输入返水点数"/>
            <p class="brown">当前可兑换返水点数为：0</p>
            <p class="brown">兑换比例：1000:5</p>
            <button class="btn btn-brown btn-block">确定</button>
        </div>
    </div>
</div>
<div class="dialog" id="exchange-yj" @click.self="DialogHide('exchange-yj')">
    <div class="content">
        <div class="ctn-close">
            <a href="javascript:;" id="btnClose-yj" class="close" @click="DialogHide('exchange-yj')"><img src="./static/img/icon-close.png" width="100%"/></a>
        </div>
        <h3>佣金点数兑换</h3>
        <div class="width80">
            <input class="text-input" placeholder="请输入佣金点数"/>
            <p class="brown">当前可兑换佣金点数为：0</p>
            <p class="brown">兑换比例：1000:5</p>
            <button class="btn btn-brown btn-block">确定</button>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default{
    created(){

    },
    methods:{
        DialogShow(id){
            document.getElementById(id).style.display='block';
        },
        DialogHide(id){
            document.getElementById(id).style.display='none';
        }
    }
}
</script>