import Router from 'vue-router';
import Vue from 'vue';
import Container from './component/container'
import Home from './component/home'

import Center from './component/center'
import Cash from './component/cq/cash'
import Recharge from './component/cq/recharge'
import BindBank from './component/bank/bind-bank.vue'
import BindWX from './component/bank/bind-wx.vue'
import BindZFB from './component/bank/bind-zfb.vue'
import TranAcc from './component/tranacc'

import MainCtn from './component/mainCtn'
import Rule from './component/rule.vue'
import Customer from './component/cq/customer.vue'
import CustomerWX from './component/cq/customer-wx.vue'
import CustomerQQ from './component/cq/customer-qq.vue'
import BetLog from './component/betlog.vue'
import CashLog from './component/cq/cashlog'
import RechargeLog from './component/cq/rechargelog'
import AgentIndex from './component/agent/index.vue'

import AgentCtn from './component/agent/agent-ctn.vue'
import AgentFlow from './component/agent/flow.vue'
import AgentPlayer from './component/agent/player.vue'
import AgentProporation from './component/agent/proporation.vue'

import gameCtn from './component/game/game-ctn.vue'
import sscGame from './component/game/ssc-game.vue'

Vue.use(Router);
const routes=[
    {path:'/home',name:'home',component:Container,
        children:[{path:'center',component:Center},
            {path:'cash',component:Cash},
            {path:'recharge',component:Recharge},
            {path:'bind-bank',component:BindBank},
            {path:'bind-wx',component:BindWX},
            {path:'bind-zfb',component:BindZFB},
            {path:'tranacc',component:TranAcc}
        ]
    },
    {path:'/',component:Home},
    {
        path:'/main',name:'main',component:MainCtn,
        children:[{path:'rule',component:Rule},
            {path:'customer',component:Customer},
            {path:'customer-wx',component:CustomerWX},
            {path:'customer-qq',component:CustomerQQ},
            {path:'betlog',component:BetLog},
            {path:'cashlog',component:CashLog},
            {path:'rechargelog',component:RechargeLog},
            {path:'agent-index',component:AgentIndex}
        ]
    },
    {
        path:'/agent',name:'agent',component:AgentCtn,
        children:[{path:'flow',component:AgentFlow},
            {path:'player',component:AgentPlayer},
            {path:'proporation',component:AgentProporation}
        ]
    },
    {
        path:'/game/:name/:id',name:'game',component:gameCtn
    }
]
export default new Router({
    //mode:'history',
    routes
})