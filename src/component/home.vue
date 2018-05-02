<template>
<div class="home has-bottom">
    <div class="notice width97">
        <marquee style="line-height:20px;" direction="left" scrollamount="2" scrolldelay="1">公告，公告，公告，公告，公告，公告，公告，公告，公告，公告，公告，公告，</marquee>
    </div>
    <div class="user width97">
        <img src="./static/img/user.jpg" width="70"/>
        <div class="info">
            <p class="name">昵称：飞逝</p>
            <p>编号：82261</p>
            <p>点数：0</p>
        </div>
    </div>
    <div class="cz">
        <div class="cz-list">
            <div class="name"><img src="./static/img/home-pk10.png"/></div>
            <ul class="clearfix">
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
            </ul>
        </div>
        <div class="cz-list">
            <div class="name"><img src="./static/img/home-pk10.png"/></div>
            <ul class="clearfix">
                <li><router-link :to="{path:'/game/',params:{name:'ssc',id:'cq'}}"><img src="./static/img/ssc-cq.gif"/></router-link></li>
                <li><router-link :to="{path:'/game/ssc/cq'}"><img src="./static/img/ssc-cq.gif"/></router-link></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
            </ul>
        </div>
        <div class="cz-list">
            <div class="name"><img src="./static/img/home-pk10.png"/></div>
            <ul class="clearfix">
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
            </ul>
        </div>
        <div class="cz-list">
            <div class="name"><img src="./static/img/home-pk10.png"/></div>
            <ul class="clearfix">
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
                <li><a href="javascript:;"><img src="./static/img/pk10-pk10.gif"/></a></li>
            </ul>
        </div>
    </div>
<Bottom/>
</div>
</template>
<script>
import Bottom from './bottom';
export default{
    name:'home',
    computed:{},
    created(){},
    data(){return {}},
    components:{Bottom}
}
</script>