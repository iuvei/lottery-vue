<template>
    <div class="width80 bind">
        <h2 class="brown">绑定微信</h2>
        <input class="text-input" name="bankName" placeholder="微信昵称"/>
        <div class="pr file"><input class="text-input" name="fileName" disabled placeholder="未选择任何文件"/><input id="file" type="file" name="file"/></div>
        <p class="tip">请上传微信二维码收款图片</p>
        <button class="btn btn-brown btn-block" id="bindWX">绑定</button>
    </div>

</template>
<script>
export default{

}
</script>