<template>
    <div class="width80 bind">
        <h2 class="brown">绑定银行卡</h2>
        <input class="text-input" v-model="bank.bankName" placeholder="银行名称"/>
        <input class="text-input" v-model="bank.cardholder" placeholder="持卡人姓名"/>
        <input class="text-input" v-model="bank.bankNo" placeholder="银行卡号"/>
        <input class="text-input" v-model="bank.bankNo2" placeholder="确认银行卡号"/>
        <button class="btn btn-brown btn-block" @click="PostBankInfo">绑定</button>
    </div>

</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {bank:{bankName:'',cardholder:'',bankNo:'',bankNo2:''}}
    },
    created(){

    },
    methods:{
        PostBankInfo(){
            const url="postbankinfo";
            const data=this.bank;
            axios.post(url,data).then((res)=>{
                console.log(res)
            });
        }
    }
}
</script>