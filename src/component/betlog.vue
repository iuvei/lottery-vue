<template>
<div class="width97" style="height:100%;padding-top:6px;width:calc(100% - 12px)">
    <div class="log">
        <div class="btns width97">
            <button class="btn active">今日</button><button class="btn right">昨日</button>
        </div>
        <div class="btns width97 btns-3">
            <button class="btn active">今日投注</button><button class="btn" style="margin:0 2%">今日账变</button><button class="btn">今日福利</button>
        </div>
        <table class="width97 table">
            <thead>
                <tr><td>投注</td><td>中奖</td><td>盈利</td><td>充值</td><td>提现</td></tr>
            </thead>
            <tbody>
                <tr><td>0元</td><td>0元</td><td>0元</td><td>0元</td><td>0元</td></tr>
            </tbody>
        </table>
        <div class="width97">
            <select><option>全部彩种</option><option>彩种1</option><option>彩种2</option><option>彩种3</option></select>
        </div>
        <table class="width97 table">
            <thead>
                <tr><td>彩种</td><td>期号</td><td>玩法</td><td>号码</td><td>金额</td><td>状态</td></tr>
            </thead>
        </table>
    </div>
<!--#include virtual="bottom.html"-->
</div>
</template>
<script>
export default{

}
</script>