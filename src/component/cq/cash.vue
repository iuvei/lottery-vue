<template>
    <div class="recharge" id="recharge">
        <div class="width80">
            <div class="input-item">
                <input class="text-input" name="userName" placeholder="请输入取款金额"/>
                <button class="btn btn-brown">确定(剩余{{order}}次)</button>
            </div>
            <p class="tip brown">大额清绑定银行卡</p>
            <ul class="bind-link width97">
                <li><router-link to="/home/bind-bank"><img src="../static/img/bind-bank.png"/><p>绑定银行卡</p></router-link></li>
                <li style="margin:0 2%"><router-link to="/home/bind-zfb"><img src="../static/img/bind-zfb.png"/><p>绑定支付宝</p></router-link></li>
                <li><router-link to="/home/bind-wx"><img src="../static/img/bind-wx.png"/><p>绑定微信</p></router-link></li>
            </ul>
        </div>
        <div class="width97 customers">
            <a href="javascript:;" class="btn btn-yellow"><img src="../static/img/customer.png"/>在线客服</a>
            <router-link to="/main/customer-wx" style="margin:0 2%" class="btn btn-green"><img src="../static/img/customer-wx.png"/>微信客服</router-link>
            <router-link to="/main/customer-qq" class="btn btn-blue"><img src="../static/img/customer-qq.png"/>QQ客服</router-link>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default{
    data(){
        return {order:'...'}
    },
    created(){
        const url='getCashOrder';
        Axios.get(url).then(({data})=>{
            this.order=data.num;
        });
    }
}
</script>