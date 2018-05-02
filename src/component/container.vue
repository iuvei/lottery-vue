<template>
<div class="container has-bottom">
    <Top/>
    <router-view></router-view>
    <Bottom/>
</div>
</template>
<script>
import Top from './top';
import Bottom from './bottom';
export default{
    name:'container',
    computed:{},
    created(){},
    data(){return {}},
    components:{Top,Bottom}
}
</script>