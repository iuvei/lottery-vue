<template>
<div style="height:100%">
    <router-view></router-view>
    <Bottom/>
</div>
</template>
<script>
import Bottom from './bottom';
export default{
    name:'main-container',
    computed:{},
    created(){},
    data(){return {}},
    components:{Bottom}
}
</script>