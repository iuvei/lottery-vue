import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import img_cq from '../component/game/img/ssc-cq.png'
import img_xj from '../component/game/img/ssc-xj.png'
import img_wf from '../component/game/img/ssc-wf.png'
import img_sf from '../component/game/img/ssc-sf.png'
import img_ff from '../component/game/img/ssc-ff.png'
import img_pcdd from '../component/game/img/pc28-pcdd.png'
import img_xjp from '../component/game/img/pc28-xjpdd.png'
import img_jnd from '../component/game/img/pc28-jnddd.png'
const btnArr = {ssc:'大小单双/1234总龙虎和 5678前中后连杂90.←豹顺对半查回上下分',
        pk10:'大小单双/1234庄闲和龙虎5678查回上下分90.←',pc28:'大,小,单,双,/,1,2,3,4,草,操,点,买,极大,5,6,7,8,前,中,后,连,极小,9,0,.,←,豹子,顺子,对子,,查,回,上,下,分'},
    quickWanFa = {ssc:['定位胆', '两面盘', '龙虎和', '和大小单双', '花样玩法'],pk10:['竞猜车号', '大小单双', '冠亚和值', '冠亚庄闲', '龙虎斗'],pc28:['组合', '特码', '大小单双', '极大极小', '趣味玩法']},
    quickWanFaType = {ssc:['jcch', 'dxds', 'gyhz', 'gyzx', 'lhd'],pk10:['jcch', 'dxds', 'gyhz', 'gyzx', 'lhd'],pc28:['jcch', 'dxds', 'gyhz', 'gyzx', 'lhd']},
    czList={ 'pk10': { bjsc: '北京赛车PK10', xyft: '幸运飞艇', ffpk: '分分PK10', jssm: '极速赛马', dbft: '迪拜飞艇', amsg: '澳门赛狗' },
        'ssc': { cq: '重庆时时彩', xj: '新疆时时彩', wf: '河内五分彩', sf: '台湾三分彩', ff: '南下分分彩' },
        'pc28': { 'pcdd': 'PC蛋蛋', jnddd: '加拿大蛋蛋', xjpdd: '新加坡蛋蛋' }
    }
export default new Vuex.Store({
    state:{
        imgList:{ssc:{cq:img_cq,xj:img_xj,wf:img_wf,sf:img_sf,ff:img_ff},pc28:{pcdd:img_pcdd,xjpdd:img_xjp,jnddd:img_jnd}},
        czInfo:{name:'', id:''}

    },
    actions:{
        showDialogTip(context,msg){
            var wait = time || 700, dialogTip = $('<div class="dialog-tip"><span class="tip">'+msg+'</span></div>'), position = window.innerHeight*(Math.random()/3+1) / 3;
            dialogTip.appendTo($('body'));
            dialogTip.animate({ bottom: position + 'px',opacity:1 }, 200, 'ease-in', function () { window.setTimeout(function () { dialogTip.fadeOut(function () { dialogTip.remove() }); }, wait) });
        }

    },
    getters:{
        CZImg(state){
            return state.imgList[state.czInfo.name][state.czInfo.id]
        },
        CZName(state){
            return czList[state.czInfo.name][state.czInfo.id]
        },
        btnArr(state){return btnArr[state.czInfo.name]},
        quickWanFa(state){return quickWanFa[state.czInfo.name]},
        quickWanFaType(state){return quickWanFaType[state.czInfo.name]}
    },
    mutations:{
        changeCZ(state,{name,id}){
            state.czInfo.name=name;state.czInfo.id=id;
        }
    }
})