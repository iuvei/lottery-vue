<template>
<div class="bottom">
    <ul>
        <li><router-link to="/home/recharge"><img src="./static/img/icon-recharge.png"/><p>充值</p></router-link></li>
        <li><router-link to="/home/cash"><img src="./static/img/icon-cash.png"/><p>提现</p></router-link></li>
        <li><router-link to="/" class="hall"><img src="./static/img/icon-home.png"/><p>大厅</p></router-link></li>
        <li><router-link to="/main/rule"><img src="./static/img/icon-wx.png"/><p>规则</p></router-link></li>
        <li><router-link to="/home/center"><img src="./static/img/icon-personal.png"/><p>个人中心</p></router-link></li>
    </ul>
</div>
</template>
<script>
export default{name:'bottom'}
</script>