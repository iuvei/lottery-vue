<template>
    <router-view ></router-view>

</template>
<script>
export default{
    //data(){return {activeDate:+new Date()}},:key="activeDate"
    methods:{
        showDialogTip(msg, time) {
            var wait = time || 700, dialogTip = $('<div class="dialog-tip"><span class="tip">'+msg+'</span></div>'), position = window.innerHeight*(Math.random()/3+1) / 3;
            dialogTip.appendTo($('body'));
            dialogTip.animate({ bottom: position + 'px',opacity:1 }, 200, 'ease-in', function () { window.setTimeout(function () { dialogTip.fadeOut(function () { dialogTip.remove() }); }, wait) });
        }
    }
}
</script>
<style lang="css">
html{font-size:13px;line-height:1.15;vertical-align:baseline;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:Microsoft Yahei,SimSun,Helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-touch-action:pan-y;touch-action:pan-y;height:100%;}
*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
body{background:#200e01 url(./static/img/bg.png) no-repeat fixed;background-size:100%;color:#fff;height:100%;}
article,aside,footer,header,nav,section{display:block}
ul,ol,li,div,body,html,h1,h2,h3,p{margin:0;padding:0;border:0;}
h1{font-size:2em;margin:.67em 0}
h2{font-size:1.3em;margin:.57em 0}
figcaption,figure,main{display:block}
figure{margin:1em 40px}
hr{box-sizing:content-box;height:0;overflow:visible}
pre{font-family:monospace;font-size:1em}
a{background-color:transparent;-webkit-text-decoration-skip:objects;color:inherit;}
a,a:active,a:hover{text-decoration:none;}
abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}
b,strong{font-weight:inherit;font-weight:bolder}
code,kbd,samp{font-family:monospace;font-size:1em}
dfn{font-style:italic}
mark{background-color:#ff0;color:#000}
small{font-size:80%}
sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sub{bottom:-.25em}
sup{top:-.5em}
audio,video{display:inline-block}
audio:not([controls]){display:none;height:0}
img{border-style:none}
table{border-spacing:0;border-collapse:collapse;width:100%;} table td{text-align:center;font-size:12px;}
svg:not(:root){overflow:hidden}
button,input,select,textarea{margin:0;font-size:100%;outline-offset:0;outline-style:none;outline-width:0;-webkit-font-smoothing:inherit;background-image:none;}
input[type="button"], input[type="text"], input[type="reset"], input[type="password"],textarea,button{-webkit-appearance: none;border:0;background-color:transparent;padding:0;}
button,select{text-transform:none}
[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}
[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}
fieldset{padding:.35em .75em .625em}
legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}
progress{display:inline-block;vertical-align:baseline}
textarea{overflow:auto}
[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}
[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}
[type=search]{-webkit-appearance:textfield;outline-offset:-2px}
[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}
::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
details,menu{display:block}
summary{display:list-item}
canvas{display:inline-block}
[hidden],template{display:none}
ul,ol{list-style:none}
.clearfix:after{content:'';height:0;display:block;clear:both;visibility:hidden;}
.left{float:left;} .right{float:right} .pr{position:relative}
.brown{color:#E6C59B}
.btn{border-radius:5px;display:inline-block;text-align:center;font-size:14px;}
.btn-brown{background-color:#e6c59a;color:#111;}
.btn-brown:active{background-color:rgba(239,201,153,0.8);}
.btn-yellow{background:linear-gradient(#dea501,#ad5e00);color:#fff;}
.btn-green{background:linear-gradient(#48b000,#316b00);color:#fff;}
.btn-blue{background:linear-gradient(#008ec4,#015098);color:#fff;}
.btn-bluebiolet{background:linear-gradient(#bb55db,#6e0e8a);color:#fff;}
.btn-red{background:linear-gradient(#b52631,#830301);color:#fff;}
.btn-darkcyan{background:linear-gradient(#198687,#1e4948);color:#fff;}
.btn.btn-block{width:100%}
.dialog{position:fixed;z-index:999;background-color:rgba(0,0,0,.3);width:100%;height:100%;top:0;left:0;display:none;}
.dialog .content{width:92%;border-radius:7px;background-color:#302f35;position:absolute;left:4%;top:50%;margin-top:-114px;}
.dialog .ctn-close{height:36px;}
.dialog .close{width:22px;height:22px;float:right;margin:8px;}
.dialog h3{height:36px;line-height:22px;text-align:center;font-size:14px;}
.dialog .text-input{border-color:#fff;height:33px;margin:3px 0;}
.dialog p{line-height:28px;text-align:center;}
.dialog .btn{line-height:32px;margin-bottom:20px;margin-top:5px;}
.dialog-tip{position:fixed;bottom:-100px;left:0;right:0;text-align:center;opacity:0;z-index:999;}
.dialog-tip .tip{display:inline-block;padding:10px 20px;line-height:22px;font-size:15px;background-color:rgba(0,0,0,.75);color:#fff;border-radius:5px;}

.width97{margin:0 auto;width:97%;}
.width80{margin:0 auto;width:90%;}
.has-bottom{padding-bottom:70px;overflow:hidden;}
.notice{margin-top:8px;color:#d9b159;height:20px;background:linear-gradient(#a09f9f,#201e1f);padding:0 7px;overflow:hidden;border-radius:5px 5px 0 0;}
.user{margin-top:11px;margin-bottom:12px;height:75px;padding-left:5px;position:relative;}
.user img{position:absolute;width:75px;left:7px;top:0;}
.user .info{margin-left:83px;}
.user{font-size:12px;line-height:20px;}
.home .user .name{font-size:16px;margin:5px 0;padding-top:5px;}
.home .cz .cz-list{}
.home .cz .name{text-align:center;margin:7px 0;}
.home .cz .name img{width:80%;}
.home .cz-list li{width:25%;float:left;}
.home .cz-list li a{padding:5px;display:block;height:100%;text-align:center;}
.home .cz-list li img{text-align:center;width:100%;max-width:100px;}
.bottom{height:53px;border-top:3px solid #e6c59a;background:linear-gradient(#4c3a2a,#291a0f);color:#e6c59a;position:fixed;bottom:0;left:0;right:0;}
.bottom li{width:20%;float:left;}
.bottom li a{display:block;height:50px;text-align:center;font-size:12px;padding-top:3px;position:relative;}
.bottom li a img{margin:2px;}
.bottom li a p{position:absolute;bottom:6px;width:100%;transform:scale(0.9);}
.bottom li a.hall{width:65px;height:65px;margin:0 auto;position:relative;top:-20px;border-radius:50%;border:3px solid #b68f4e;background-color:#302115;}
.bottom li a.hall img{margin-top:7px}
.bottom li a.hall p{font-size:15px;}
.container{background:#200e01 url(./static/img/bg.png) 0 200px no-repeat fixed;background-size:100%;min-height:100%}
.top{height:115px;background:radial-gradient(circle,#483727 50%,#21180d 80%);padding:1px 0;}
.top .user{line-height:23px;}
.top .user .name{font-size:1.2em;}
.top .user .btn{line-height:21px;float:right;width:56px;font-size:12px;}
.text-input{width:100%;height:40px;background-color:#555;border:1px solid #e6c59a;color:#e6c59a;font-size:14px;padding:0 10px;border-radius:7px;}
.text-input::-webkit-input-placeholder{color:#a9a9a9;} .text-input:-moz-placeholder{color:#a9a9a9;}  .text-input::-moz-placeholder{color:#a9a9a9;} .text-input:-ms-input-placeholder{color:#a9a9a9;}
.cash,.recharge{padding-top:10px;}
.cash .text-input{margin-bottom:25px;}
.cash .range{color:#8f8f8f;line-height:20px;margin-bottom:8px;}
.cash .modes ul{display:flex;justify-content:center;}
.cash .modes li{flex:1;width:32%;line-height:34px;text-align:center;border-radius:5px;background-color:#555;font-size:12px;}
.cash .modes li span{display:inline-block;width:10px;height:10px;position:relative;background-color:#fff;border-radius:50%;margin-right:3px;}
.cash .modes li span:before{content:'';position:absolute;width:6px;height:6px;top:2px;left:2px;background-color:#fff;border-radius:50%;}
.cash .modes li.active span:before{background-color:#000;}
.cash .modes li.active{background-color:#eb5b36;}
.cash .modes img{display:block;margin:19px auto;}
.cash .modes .btn{line-height:39px;}
.input-item input{width:58%}
.input-item .btn{float:right;width:32%;line-height:40px;font-size:12px;}
.recharge .tip{margin:15px 0 25px;}
.recharge .bind-link{display:flex;justify-content: center;}
.recharge .bind-link li{flex:1;}
.recharge .bind-link li a{display:block;height:65px;background-color:#999;text-align:center;border-radius:5px;position:relative;padding-top:10px;}
.recharge .bind-link li a p{position:absolute;bottom:10px;left:0;right:0;color:#333;}
.customers{display:flex;margin-top:25px;}
.customers a{flex:1;line-height:43px;text-align:center;border-radius:7px;}
.customers a img{width:15px;margin-right:5px;vertical-align:sub;}
.bind h2{text-align:center;font-weight:normal;}
.bind .text-input{margin-bottom:15px;border-radius:2px;background-color:#333;color:#a9a9a9}
.bind .btn,.tranacc .btn{line-height:40px;font-size:15px;}
.bind .file .text-input{border-color:#535353;border-radius:5px;}
.bind .file input[type='file']{position:absolute;right:0;top:0;height:40px;width:25%;border-radius:5px;padding-top:8px;}
.bind .file input[type='file']:after{content:'浏览';position:absolute;right:0;top:0;left:0;height:100%;background-color:#f60;text-align:center;line-height:40px;border-radius:0 5px 5px 0;}
.bind .tip{color:#8f8f94;margin-bottom:12px;} 
.rule-name{padding-top:17px;}
.rule-name li{float:left;line-height:34px;height:34px;background-color:#555;text-align:center;width:23%;margin:0 1% 10px;border-radius:5px;font-size:12px;}
.rule-name li.active{background-color:#eb5b36;}
.rule-content h2{text-align:center;font-size:1.4em;font-weight:normal;}
.rule-content p{line-height:23px;padding:0 1%;}
.rule-content .title{color:#15c0fe}
.personal .btns{border-bottom:1px solid #e6c59a;display:flex;}
.personal .btns a{flex:1;height:42px;line-height:42px;background:linear-gradient(#4c3a2a,#312115);position:relative;color:#e6c59a;text-align:center;}
.personal .btns a:nth-child(1):after,.personal .btns a:nth-child(2):after{content:'';position:absolute;height:32px;right:0;top:5px;width:1px;background-color:#e6c59a;}
.personal .btns a img{vertical-align:sub;vertical-align:-4px;margin-right:4px;}
.personal .btns2{margin-top:30px;}
.personal .btns2 a{width:33.3%;height:103px;text-align:center;float:left;color:#e6c59a;position:relative;}
.personal .btns2 a img{width:65px;}
.personal .btns2 a p{position:absolute;bottom:14px;left:0;right:0;font-size:14px;}
.customer{padding-top:70px;}
.customer a{margin-bottom:30px;line-height:50px;}
.customer a img{vertical-align:-9px;margin-right:7px;}
.tranacc .tip{margin:5px 0 10px;}
.tranacc .input-white{background-color:#fff;color:#555;border-radius:3px;border:none;}
.tranacc .text-input{margin-bottom:20px;}
.cust-qq {padding-top:35px;text-align:center;}
.cust-qq .tip{text-align:center;line-height:26px;font-size:17px;}
.cust-qq .input-item{margin-top:20px;}
.cust-qq .input-item input{width:70%;background:transparent;border-radius:5px 0 0 5px;}
.cust-qq .input-item .btn{width:30%;border-radius:0 5px 5px 0;}
.cust-qq img{width:70%;margin-top:20px;}
.log{margin-bottom:70px;background-color:#f5f5f5;border-radius:7px;height:calc(100% - 70px);color:#555;}
.log .btns{padding-top:6px;margin-bottom:6px;}
.log .btns-3{display:flex;padding-top:0;}
.log .btn{height:33px;line-height:33px;background-color:#636363;width:49%;color:#fff;}
.log .btn.active{background:linear-gradient(#007bb6,#014d94)}
table.table+table{margin-top:10px;}
table.table tr{color:#e22c2b;}
table.table td{border:1px solid #ccc;height:32px;overflow:hidden;}
table.table .bold td{font-weight:bold}
table.table thead tr{color:#555;}
.log select{width:100%;margin-top:10px;border:1px solid #ccc;border-bottom:0;height:30px;background:transparent;padding-left:5px;}
.agent.container{background:#251700;padding:0 10px;}
.agent .nav{text-align:center;padding-top:10px;}
.agent .nav a{line-height:31px;background-color:#56aed4;margin:0 2px;padding:0 4px;}
.agent .tip{text-align:center;margin:10px 0 15px;}
.agent-page{height:100%;background-color:#f5f5f5;color:#555}
.agent-page .head{height:44px;background-color:#323232;line-height:42px;text-align:center;font-size:15px;position:relative;color:#fff;}
.agent-page .head a{font-size:13px;position:absolute;height:100%;width:60px;text-align:center;top:0;left:0;}
.agent-page .title{text-align:center;font-size:17px;line-height:40px;margin-bottom:10px;}
.agent-page .text-input{background-color:#fff;border-color:#cbcbcb;color:#555;}
.agent-page .tip{color:#8f8f8f;text-align:center;line-height:50px;}
.agent-page .btn{line-height:40px;}
.agent-page .input-time{margin-top:10px;}
.agent-page .input-time .text-input{width:calc(35% - 10px);height:40px;border-radius:3px;padding:0;text-align:center;}
.agent-page .input-time .btn{float:right;width:22%;height:40px;}
.agent-page table{margin-top:20px;}
</style>