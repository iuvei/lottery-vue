<template>
<div class="game">
    <component :is="currentView" :time="time" :numList="numList" :qihao="qihao"></component>
    <div class="user-info">
        <div class="user-pic"><img src="../static/img/user.jpg" width="100%"/></div>
        <div class="user-ctn">
            <div class="hall-btns">
                <a href="#/" class="red"><img src="./img/icon-home.png" width="10px"/>返回大厅</a>
                <a href="#/home/recharge">充值</a><a href="#/home/cash">提现</a><a href="javascript:;" id="changeWindow">小窗</a><a href="javascript:;">在线客服</a>
            </div>
            <div class="dialog" id="selectCZ">
                <div class="content">
                    <div class="ctn-close">
                        <a href="javascript:;" class="close"><img src="../static/img/icon-close.png" width="100%"/></a>
                    </div>
                    <div class="select-cz clearfix">
                        <router-link :to="{path:'/game/pk10/bjsc'}"><img src="../static/img/pk10-pk10.gif"/></router-link>
                        <router-link :to="{path:'/game/pk10/xyft'}"><img src="../static/img/pk10-xyft.png"/></router-link>
                        <router-link :to="{path:'/game/pk10/ffpk'}"><img src="../static/img/pk10-ff.gif"/></router-link>
                        <router-link :to="{path:'/game/pk10/jssm'}"><img src="../static/img/pk10-jssm.gif"/></router-link>
                        <router-link :to="{path:'/game/pk10/dbft'}"><img src="../static/img/pk10-dbft.gif"/></router-link>
                        <router-link :to="{path:'/game/pk10/amsg'}"><img src="../static/img/pk10-sg.gif"/></router-link>
                        <router-link :to="{path:'/game/ssc/cq'}"><img src="../static/img/ssc-cq.gif"/></router-link>
                        <router-link :to="{path:'/game/ssc/xj'}"><img src="../static/img/ssc-xj.gif"/></router-link>
                        <router-link :to="{path:'/game/ssc/wf'}"><img src="../static/img/ssc-wf.gif"/></router-link>
                        <router-link :to="{path:'/game/ssc/sf'}"><img src="../static/img/ssc-sf.png"/></router-link>
                        <router-link :to="{path:'/game/ssc/ff'}"><img src="../static/img/ssc-ff.gif"/></router-link>
                        <router-link :to="{path:'/game/pc28/pcdd'}"><img src="../static/img/pc28-pcdd.gif"/></router-link>
                        <router-link :to="{path:'/game/pc28/jnddd'}"><img src="../static/img/pc28-jnd.png"/></router-link>
                        <router-link :to="{path:'/game/pc28/xjpdd'}"><img src="../static/img/pc28-xjp.gif"/></router-link>
                    </div>
                </div>
            </div>
            <p><span>编号：</span><span>353455</span> <span>昵称：</span><span>飞逝</span> <span>余点：</span><span class="red">0</span> <span>在线：</span><span>1043</span></p>
        </div>
    </div>
    <div class="game-ctn">
        <div class="left">
            <a href="javascript:;" class="btn btn-blue btn-block" id="showCZ">彩种</a><a href="javascript:;" class="btn btn-yellow btn-block" id="guessBtn">竞猜</a><a href="javascript:;" class="btn btn-green btn-block" id="record">记录</a>
            <a href="javascript:;" class="btn btn-bluebiolet btn-block" id="trend">走势</a><a href="javascript:;" class="btn btn-red btn-block" id="rule">规则</a><a href="javascript:;" class="btn btn-darkcyan btn-block" onclick="location.reload()">刷新</a>
        </div>
        <div class="game-ctn-right" id="gameCtn">
            <div class="rule">
                <p>
                    <span class="title">①定位数字玩法</span><br />
                    位置介绍：万千百十个从左到右,系统判定位置：1.2.3.4.5<br />
                    格式介绍：位置/号码/点数<br />
                    赔率介绍：9.8倍(含本)<br />
                    例：如3号位【百位】要买号码8,10个点<br />
                    下注格式：【3/8/10】(百位开出8号即为中奖)<br />
                    例：如234号位【千百十位】买数字5,各10元<br />
                    下注格式：【234/5/10】(千百十位置开出数字5即为中奖)<br />
                    例：如5个位置全部定位8号球<br />
                    下注格式：【8/20】相当于买所有位置8,100元(12345/8/20格式相<br />
                    备注：定位如无填写【位置】则默认为五个位置全下<br />
                    <span class="title">②定位大小单双玩法</span><br />
                    位置介绍：万千百十个从左到右,系统判定位置：1.2.3.4.5<br />
                    格式介绍：位置/大小单双/点数<br />
                    赔率：1.96倍(含本)<br />
                    开56789为大,01234为小,赔率1.96倍(含本)<br />
                    开13579为单,02468为双,赔率1.96倍(含本<br />
                    例：1/双/10【万位/双/10点,开出偶数即为中奖】<br />
                    例：1/大/10【万位/大/10点,开出大于等于5即为中奖】<br />
                    快速格式：可以省略"/"°,(1双10)相当于(1/双/10)<br />
                    备注：无填写【位置】则默认为万位,如(大10)系统判定万位大10<br />
                    <span class="title">③定位【大单,小单,大双,小双】玩法</span><br />
                    开024为小双,赔率3倍(含本)<br />
                    开68为大双,赔率3.5倍(含本)<br />
                    开13为小单,赔率35倍(含本)<br />
                    开579为大单,赔率3倍(含本)<br />
                    格式介绍：大单/10,小单/10,大双/10,小双/10<br />
                    例：大单/10【开奖号码为579即为中奖】<br />
                    注：万千百十个任意位置都可以进行投注,没有填写位置的系统默认万位。<br />
                    <span class="title">④龙虎和玩法</span><br />
                    格式介绍：龙虎和/点数<br />
                    赔率介绍：1.96倍-10倍<br />
                    万位PK个位(万位大于个位为龙,小于个位为虎)<br />
                    龙虎开和(万位和个位开出相同号码即为和)<br />
                    例：龙/10【万位大于个位即为中奖】<br />
                    例：虎/10【万位小于个位即为中奖】<br />
                    例：和/10【万位个位开出相同数字即为中奖】<br />
                    快速格式：可以省略"/",(和10)相当与(和/10)<br />
                    备注：开龙虎的赔率1.96倍,开和赔率为10倍开和通杀龙虎<br />
                    <span class="title">⑤和值大小单双玩法</span><br />
                    格式介绍：总/单/点数<br />
                    赔率介绍：1.96倍<br />
                    万千百个十的数字总和【0-22为小,23-45为大,总和奇数为单,总和偶数为双】<br />
                    例：总/大/10【五个位置相加大于等于23即为中奖】<br />
                    例：总/双/10【五个位置相加尾数为偶数即为中奖】<br />
                    快速格式：可以省略"/",(总大10)相当于(总/大/10)<br />
                    <span class="title">⑥花样玩法</span><br />
                    位置介绍：前三(万千百)、中三(千百十)、后三(百十个)<br />
                    格式介绍：玩法名称/点数<br />
                    赔率介绍：1.96倍-60倍(含本)<br />
                    例：(前豹/100)【万千百位置开出相同数字即为中奖赔率1赔60】<br />
                    例：(中豹/100)【千百十位置开出相同数字即为中奖赔率1赔60】<br />
                    例：(后豹/100)【百十个位置开出相同数字即为中奖赔率1赔60】<br />
                    例：(前顺/100)【万千百位置开出顺子即为中奖赔率1赔14】<br />
                    例：(中顺/100)【千百十位置开出顺子即为中奖赔率1赔14】<br />
                    例：(后顺/100)【百十个位置开出顺子即为中奖赔率1赔14】<br />
                    例：(前对/100)【万千百位置开出对子即为中奖赔率1赔2.5】<br />
                    例：(中对/100)【千百十位置开出对子即为中奖赔率1赔2.5】<br />
                    例：(后对/100)【百十个位置开出对子即为中奖赔率1赔2.5】<br />
                    例：(前半/100)【万千百位置开出两连号即为中奖赔率1赔1.96】<br />
                    例：(中半/100)【千百十位置开出两连号即为中奖赔率1赔1.96】<br />
                    例：(后半/100)【百十个位置开出两连号即为中奖赔率1赔1.96】<br />
                    例：(前杂/100)【万千百位置开出不同号码即为中奖赔率1赔2.2】<br />
                    例：(中杂/100)【千百十位置开出不同号码即为中奖赔率1赔2.2】<br />
                    例：(后杂/100)【百十个位置开出不同号码即为中奖赔率1赔2.2】<br />
                    快速格式：可以省略/,(前豹/100)相当与(前豹100)<br />
                    备注：顺子不按顺序三个位置连号即为中奖,对子不按顺序只要有对子即为中奖,前半顺只要有两个连号即为中奖。
                </p>
            </div>
            <div class="record">
                <ul class="first">
                    <li>会员：飞逝</li><li>代理：0</li><li>编号：543467</li>
                </ul>
                <div class="second clearfix">
                    <button class="btn on">今天</button>
                    <button class="btn">昨天</button>
                    <button class="btn">前天</button>
                    <button class="btn">历史</button>
                </div>
                <div class="third">
                    <table class="table">
                        <thead><tr>
                            <td><span>彩种</span></td><td><span>当日结算</span></td><td><span>总流水</span></td><td><span>总盈亏</span></td>
                        </tr></thead>
                        <tbody>
                        <tr>
                            <td><span>重庆时时彩</span></td><td><span>--</span></td><td><span>0</span></td><td><span>0</span></td>
                        </tr>
                        </tbody>
                    </table>
                    <table class="table">
                        <thead><tr>
                            <td><span>彩种</span></td><td><span>当日结算</span></td><td><span>总流水</span></td><td><span>总盈亏</span></td>
                        </tr></thead>
                        <tbody>
                        <tr>
                            <td><span>重庆时时彩重庆时时彩</span></td><td><span>--重庆时时彩重庆时时彩</span></td><td><span>-10000</span></td><td><span>-300000</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="guess" style="display:block;">
                <ul>
                    <li>
                        <div class="portrait"><img src="../static/img/user.jpg" width="100%"/></div>
                        <div class="speak">
                            <p class="user-name-time">欲哭无泪 17：23：01</p>
                            <p class="ctn">4/132/80</p>
                        </div>
                    </li>
                    <li>
                        <div class="portrait"><img src="../static/img/user.jpg" width="100%"/></div>
                        <div class="speak">
                            <p class="user-name-time">欲哭无泪 17：23：01</p>
                            <p class="ctn">4/132/80</p>
                        </div>
                    </li>
                    <li class="kefu">
                        <div class="portrait"><img src="./img/kefu.png" width="100%"/></div>
                        <div class="speak">
                            <p class="user-name-time">欲哭无泪 17：23：01</p>
                            <p class="ctn bgyellow">132/804/132/80</p>
                        </div>
                    </li>
                    <li>
                        <div class="portrait"><img src="../static/img/user.jpg" width="100%"/></div>
                        <div class="speak">
                            <p class="user-name-time">欲哭无泪 17：23：01</p>
                            <p class="ctn">4/132/80</p>
                        </div>
                    </li>
                    <li class="kefu">
                        <div class="portrait"><img src="./img/kefu.png" width="100%"/></div>
                        <div class="speak">
                            <p class="user-name-time">欲哭无泪 17：23：01</p>
                            <p class="ctn bgred">4/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/80</p>
                        </div>
                    </li>
                    <li>
                        <div class="portrait"><img src="../static/img/user.jpg" width="100%"/></div>
                        <div class="speak">
                            <p class="user-name-time">欲哭无泪 17：23：01</p>
                            <p class="ctn">4/132/80</p>
                        </div>
                    </li>
                    <li>
                        <div class="portrait"><img src="../static/img/user.jpg" width="100%"/></div>
                        <div class="speak">
                            <p class="user-name-time">欲哭无泪 17：23：01</p>
                            <p class="ctn">4/132/80</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="game-bottom">
        <button class="keyboard-btn" id="keyboardBtn"></button>
        <div class="operation clearfix">
            <input placeholder="玩法/号码/金额" id="betInput"/>
            <a href="javascript:;" class="btn" id="sendBet">发送</a><a href="javascript:;" class="btn" @click="showQuickBet">极速投注</a>
        </div>
    </div>
    <div class="keyboard" id="keyboard">
        <ul>
            <li><button class="btn" text="大">大</button><button class="btn" text="小">小</button><button class="btn" text="单">单</button><button class="btn" text="双">双</button>
                <button class="btn" text="/">/</button><button class="btn" text="1">1</button><button class="btn" text="2">2</button><button class="btn" text="3">3</button><button class="btn" text="4">4</button>
            </li>
            <li><button class="btn" text="清">清</button><button class="btn" text="关闭">关闭</button><button class="btn" text="发送">发送</button></li>
        </ul>
    </div>
    <div class="dialog dialog-bet">
        <div class="content">
            <p class="tip">期数:32049359号码:中顺金额:2</p>
            <div class="operation">
                <button class="btn">取消</button><button class="btn">立即投注</button>
            </div>
        </div>
    </div>
    <quick-bet></quick-bet>
</div>
</template>
<script>
import ssc from './ssc-game.vue'
import pk10 from './pk10-game.vue'
import pc28 from './pc28-game.vue'
import quickBet from './quick-bet.vue'
import axios from 'axios'
import {mapMutations,mapGetters } from 'vuex'
export default{
    name:'game-container',
    computed:{...mapGetters(['CZName','btnArr','quickWanFa'])},
    data(){return {currentView:this.$route.params.name,time:'',qihao:'',numList:[]}},
    components:{ssc,pk10,quickBet,pc28},
    mounted(){
        this.initWindow()
        this.initLeftBtns();
        this.initBetBtns();
        this.initKeyboard(this.btnArr);
    },
    created(){
        this.initPage()
    },
    methods:{
        initPage(){
            const url='getKJInfo'
            //axios.get(url).then(({data})=>{
            //    if(data.code===0){this.time=data.time;this.qihao=data.qihao;this.numList=data.numList;}
            //});
            this.changeCZ(this.$route.params)
            this.currentView=this.$route.params.name
        },
        ...mapMutations(['changeCZ']),
        showQuickBet(){
            $('#quickBet').show();

        },
        initBetBtns() {
            $('#keyboardBtn').click(function () {
                var self = $(this);
                if (self.hasClass('on')) {
                    self.removeClass('on');
                    $('#keyboard').hide();
                } else {
                    self.addClass('on');
                    $('#keyboard').show();
                }
            });
        },
        initKeyboard(arr) {
            arr = arr.indexOf(',') >0 ? arr.split(',') : arr.split('');
            var str = '<ul><li>';
            for (var i = 0; i < arr.length; i++) {
                str += '<button class="btn" text="' + arr[i] + '">' + arr[i] + '</button>';
                if ((i + 1) % 9 === 0 && i !== arr.length - 1) {
                    str += '</li><li>';
                }
            }
            str += '</li><li><button class="btn" text="清">清</button><button class="btn" text="关闭">关闭</button><button class="btn" text="发送">发送</button></li></ul>';
            $('#keyboard').html(str);
            $('#keyboard .btn').click(function () {
                var self = $(this), val = self.attr('text'), betInput = $('#betInput');
                switch (val) {
                    case '清':
                        betInput.val('');
                        break;
                    case '关闭':
                        $('#keyboardBtn').removeClass('on');
                        $('#keyboard').hide();
                        break;
                    case '发送':

                        break;
                    case ' ':
                        break;
                    case '←':
                        betInput.val(betInput.val().slice(0, -1));
                        break;
                    default:
                        betInput.val(betInput.val() + val);
                }
            });
        },
        initDialog(showId, ctnId) {
            var ctn = $(ctnId);
            $(showId).click(function () { ctn.show() });
            ctn.on('click', function () { $(ctnId).hide(); });
            ctn.find('.content').on('click', function (e) { e.stopPropagation() });
            ctn.find('.ctn-close a').on('click', function () { $(ctnId).hide(); });
        },
        initLeftBtns() {
            this.toggleCtn('#guessBtn', '#gameCtn>div', '#gameCtn>.guess');
            this.toggleCtn('#record', '#gameCtn>div', '#gameCtn>.record');
            this.toggleCtn('#rule', '#gameCtn>div', '#gameCtn>.rule');
            this.initDialog('#showCZ', '#selectCZ');
            $('#selectCZ a').click(function(){if($(this).hasClass('router-link-active')) return;$('#selectCZ').hide()})
            $('#trend').click(function () {
                var self = $(this);
                if (self.html() === '走势') {
                    self.html('动画');
                    $('#gameTop>.trend').show();
                    $('#gameTop>.animation').hide();
                } else {
                    self.html('走势');
                    $('#gameTop>.trend').hide();
                    $('#gameTop>.animation').show();
                }
            });
            this.changeWindow(70);
        },
        changeWindow(num) {
            var gameTopHeight = $('#gameTop').height(),gameCtnHeight = $('#gameCtn').height();
            $('#changeWindow').click(function () {
                var self = $(this);
                if (self.html() === '小窗') {
                    self.html('大窗');
                    $('#gameTop').css('height', num + 'px');
                    $('#gameCtn').css('height', (gameCtnHeight + gameTopHeight - num) + 'px');
                    $('#quickBetRright').css('height', (gameCtnHeight + gameTopHeight - num) + 'px');
                } else {
                    self.html('小窗');
                    $('#gameTop').css('height', gameTopHeight + 'px');
                    $('#gameCtn').css('height', gameCtnHeight + 'px');
                    $('#quickBetRright').css('height', gameCtnHeight + 'px');
                }
            });
        },
        initWindow() {
            var gameCtn = $('#gameCtn'), gameTopHeight = $('#gameTop').height(), num = 115, winHeight = $(window).height();
            var h = winHeight - num - gameTopHeight
            gameCtn.css('height', h > 0 ? h : '0' + 'px');
            $('#quickBetRright').css('height', h > 0 ? h : '0' + 'px');
        },
        toggleCtn(btn, hide, show) {
            $(btn).click(function () {
                $(hide).hide();
                $(show).show();
            });
        }
    },
    watch: {
        '$route': function (to, from) {
            this.initPage()
            this.initKeyboard(this.btnArr);
        }
    }
}
</script>
<style src="./game.css"></style>