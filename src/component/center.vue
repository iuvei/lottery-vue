<template>
    <div class="personal">
        <div class="btns">
            <router-link to="/home/tranacc"><img src="./static/img/icon-tc.png"/>转账</router-link>
            <router-link to="/home/recharge"><img src="./static/img/icon-recharge.png"/>充值</router-link>
            <router-link to="/home/cash"><img src="./static/img/icon-cash.png"/>提现</router-link>
        </div>
        <div class="btns2 clearfix">
            <router-link to="/main/betlog"><img src="./static/img/icon-betlog.png"/><p>投注记录</p></router-link>
            <router-link to="/main/customer"><img src="./static/img/icon-customer.png"/><p>在线客服</p></router-link>
            <a href="javascript:;"><img src="./static/img/icon-download.png"/><p>APP下载</p></a>
            <router-link to="/main/cashlog"><img src="./static/img/icon-reglog.png"/><p>提现记录</p></router-link>
            <router-link to="/main/rechargelog"><img src="./static/img/icon-cashlog.png"/><p>充值记录</p></router-link>
            <router-link to="/main/agent-index"><img src="./static/img/icon-agent.png"/><p>代理中心</p></router-link>
        </div>
    </div>

</template>
<script>
export default{

}
</script>