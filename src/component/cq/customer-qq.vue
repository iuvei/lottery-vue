<template>
<div class="container has-bottom">
    <div class="width80">
        <div class="width80 cust-qq">
            <p class="tip">点击复制QQ客服号码</p>
            <p class="tip">添加QQ客服</p>
            <div class="input-item">
                <input class="text-input" name="userName" value="2543547" id="copyValue"/>
                <button class="btn btn-brown" @click="copyNum">点击复制</button>
            </div>
            <img src="../static/img/jhy-qq.png"/>
        </div>
     </div>
</div>
</template>
<script>
import { mapActions } from 'vuex'
export default{
    methods:{
            ...mapActions(['showDialogTip']),
        copyNum(){
            var copyValue=document.getElementById('copyValue');
            copyValue.select();
            document.execCommand("Copy");
            const val=copyValue.value;
            copyValue.value='';
            copyValue.value=val;
            this.showDialogTip('复制成功');
        }
    }
}
</script>