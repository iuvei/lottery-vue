<template>
<div class="agent-page">
    <div class="head">
        <a href="javascript:window.history.go(-1);">&lt;&nbsp;返回</a>查看流水
    </div>
    <div class="width80">
        <div class="input-time"><input class="text-input" placeholder="选择日期" id="start"/>&nbsp;&nbsp;到&nbsp;&nbsp;<input class="text-input" placeholder="选择日期" id="end"/><button class="btn btn-blue">查询</button></div>

        <table class="table">
            <thead>
                <tr><td>彩种</td><td>期数</td><td>金额</td><td>时间</td></tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
export default{

}
</script>