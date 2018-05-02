<template>
<div class="quick-bet" id="quickBet">
    <div class="qb-ctn clearfix">
        <div class="left" id="quickBetLeft">
            <p class="bg-black b-r-b">玩法</p>
            <button class="btn bg-black b-r-b on">定位胆</button>
            <button class="btn bg-black b-r-b">两面盘</button>
            <button class="btn bg-black b-r-b">龙虎和</button>
            <button class="btn bg-black b-r-b"><span>和大小单双</span></button>
            <button class="btn bg-black b-r-b">花样玩法</button>
        </div>
        <div class="qb-ctn-right" id="quickBetRright">
            <div class="first">
                <button class="btn">万</button><button class="btn">千</button><button class="btn">百</button><button class="btn">十</button><button class="btn">个</button>
            </div>
            <div class="second clearfix">
                <button class="btn on"><span>0</span>×9.8</button>
                <button class="btn"><span>1</span>×9.8</button>
                <button class="btn"><span>2</span>×9.8</button>
                <button class="btn"><span>3</span>×9.8</button>
                <button class="btn"><span>4</span>×9.8</button>
                <button class="btn"><span>5</span>×9.8</button>
                <button class="btn"><span>6</span>×9.8</button>
                <button class="btn"><span>7</span>×9.8</button>
                <button class="btn"><span>8</span>×9.8</button>
                <button class="btn"><span>9</span>×9.8</button>
            </div>
            <div class="third">
                <button class="btn">大</button>
                <button class="btn">小</button>
                <button class="btn">单</button>
                <button class="btn">双</button>
                <button class="btn">清</button>
            </div>
        </div>
    </div>
    <div class="qb-bottom">
        <input placeholder="下注金额" class="text-input" id="quickBetJine"/><p class="bg-black b-l-b">共<span class="red" id="quickBetZhu">5</span>注</p><button class="btn bg-black b-r-b b-l-b" id="quickBetCfg">确认</button><button class="btn bg-black" onclick="javascript:;$('#quickBet').hide()">返回</button>
    </div>
</div>
</template>
<script>

import {mapMutations,mapGetters,mapState  } from 'vuex'
export default{
    computed:{...mapGetters(['CZName','quickWanFa','quickWanFaType']),...mapState (['czInfo'])},
    mounted(){
        this.initQuickBet()
    },
    methods:{
        initQuickBet(){
            let str='<p class="bg-black b-r-b">玩法</p>',self=this;
            for (let i in this.quickWanFa) {
                str += '<button class="btn bg-black b-r-b' + (i === '0' && ' on') + '" data-type="' + this.quickWanFaType[i] + '">' + this.quickWanFa[i] + '</button>'
            }
            $('#quickBetLeft').html(str)
            this.initWanFa(this.quickWanFa[0])
            $('#quickBetLeft .btn').off('click').click(function(){
                if($(this).hasClass('on')) return;
                $('#quickBetLeft .btn.on').removeClass('on')
                $(this).addClass('on')
                self.initWanFa(this.innerText)
            })
        },
        initWanFa(text){
            switch(this.czInfo.name){
                case 'ssc':
                this.initQuickSSCBet(text)
                break;
                case 'pk10':
                this.initQuickPK10Bet(text)
                break;
                case 'pc28':
                this.initQuickPC28Bet(text)
                break;
            }
        },
        initQuickPK10Bet(text) {
            switch (text) {
                case '竞猜车号':
                    var oneArr = ['冠军', '亚军', '季军', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'],
                twoArr = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], '9.8'],
                threeArr = ['大', '小', '单', '双', '清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
                case '大小单双':
                    var oneArr = ['冠军', '亚军', '季军', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'],
                twoArr = [['大', '小', '单', '双', '大单', '小单', '大双', '小双'], ['1.96', '1.96', '1.96', '1.96', '3.5', '3', '3', '3.5']],
                threeArr = ['清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
                case '冠亚和值':
                    var oneArr = [['大', '小', '单', '双'], ['2', '1.5', '1.5', '2']],
                twoArr = [{ from: 3 }, [41, 41, 19, 19, 11, 11, 9, 9, 7, 9, 9, 11, 11, 19, 19, 41, 41]],
                threeArr = ['大', '小', '单', '双', '清'];
                    $('#quickBetRright').html(this.initDWD2([{ center: oneArr }, { center: twoArr }, { bottom: threeArr}]))
                    this.initBtnEvent2()
                    break;
                case '冠亚庄闲':
                    var oneArr = '',
                twoArr = [['庄', '闲'], ['1.96', '1.96']],
                threeArr = ['清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
                case '龙虎斗':
                    var oneArr = ['第一名', '第二名', '第三名', '第四名', '第五名'],
                twoArr = [['龙', '虎'], ['1.96', '1.96']],
                threeArr = ['清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
            }
            if (text != '冠亚和值') { this.initBtnEvent() }
        },
        initQuickPC28Bet(text) {
            switch (text) {
                case '组合':
                    var oneArr = '',
                twoArr = [['大单', '小单', '大双', '小双'], ['3.6', '3.8', '3.8', '3.6']],
                threeArr = ['清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
                case '特码':
                    var oneArr = '',
                twoArr = [{ from: 0 }, [500, 100, 50, 40, 30, 20, 17, 16, 15, 15, 14, 14, 12, 12, 12, 12, 14, 14, 15, 15, 16, 17, 20, 30, 40, 50, 100, 500]],
                threeArr = ['清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
                case '大小单双':
                    var oneArr = '',
                twoArr = [['大', '小', '单', '双'], '1.96'],
                threeArr = ['清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
                case '极大极小':
                    var oneArr = '',
                twoArr = [['极大', '极小'], '19'],
                threeArr = ['清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
                case '趣味玩法':
                    var oneArr = '',
                twoArr = [['对子', '豹子', '顺子'], [3, 15, 50]],
                threeArr = ['清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
            }
            this.initBtnEvent();
        },
        initQuickSSCBet(text) {
            switch (text) {
                case '定位胆':
                    var oneArr = ['万', '千', '百', '十', '个'],
                twoArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], '9.8'],
                threeArr = ['大', '小', '单', '双', '清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
                case '两面盘':
                    var oneArr = ['万', '千', '百', '十', '个'],
                twoArr = [['大', '小', '单', '双', '大单', '小单', '大双', '小双'], ['1.96', '1.96', '1.96', '1.96', '3', '3.5', '3.5', '3']],
                threeArr = ['清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
                case '龙虎和':
                    var oneArr = '',
                twoArr = [['龙', '虎', '和'], ['1.96', '1.96', '10']],
                threeArr = ['清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
                case '和大小单双':
                    var oneArr = '',
                twoArr = [['大', '小', '单', '双'], '1.96'],
                threeArr = ['清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
                case '花样玩法':
                    var oneArr = ['前', '中', '后'],
                twoArr = [['豹', '顺', '对', '半', '杂'], [60, '14', 2.5, '1.96', 2.2]],
                threeArr = ['清'];
                    $('#quickBetRright').html(this.initDWD(oneArr, twoArr, threeArr))
                    break;
            }
            this.initBtnEvent();
        },
        initTop: function (arr) {
            if (!arr) return '';
            var str = '', style_width = arr.length === 3 ? ' style="width:31%"' : '';
            str += '<div class="first clearfix">'
            for (var i in arr) {
                str += '<button class="btn"' + style_width + '>' + arr[i] + '</button>'
            }
            str += '</div>'
            return str;
        },
        initCenter: function (arr) {
            if (!arr) return '';
            var str = '', arr1 = arr[0], arr2 = arr[1];
            str += '<div class="second clearfix">'
            if (!(arr1 instanceof Array)) {
                if (typeof arr2 === 'string') {
                    for (var i = arr1.from; i < arr1.length; i++) {
                        str += '<button class="btn"><span>' + i + '</span>×' + arr2 + '</button>'
                    }
                } else {
                    for (var i = 0; i < arr2.length; i++) {
                        str += '<button class="btn"><span>' + (i + arr1.from) + '</span>×' + arr2[i] + '</button>'
                    }
                }
            } else {
                if (typeof arr2 === 'string') {
                    for (var i in arr1) {
                        str += '<button class="btn"><span>' + arr1[i] + '</span>×' + arr2 + '</button>'
                    }
                } else {
                    for (var i in arr1) {
                        str += '<button class="btn"><span>' + arr1[i] + '</span>×' + arr2[i] + '</button>'
                    }
                }
            }
            str += '</div>'
            return str;
        },
        initBottom: function (arr) {
            if (!arr) return '';
            var str = '', className = arr.length === 1 ? ' only' : '';
            str += '<div class="third">'
            for (var i in arr) {
                str += '<button class="btn' + className + '">' + arr[i] + '</button>'
            }
            str += '</div>'
            return str;
        },
        initDWD: function (arr1, arr2, arr3) {
            var str = '';
            str += this.initTop(arr1)
            str += this.initCenter(arr2)
            str += this.initBottom(arr3)
            return str;
        },
        initDWD2: function (arr) {
            var str = '';
            for (var i in arr) {
                str += this.initObj(arr[i])
            }
            return str;
        },
        initObj: function (obj) {
            if (obj['top']) {
                return this.initTop(obj.top)
            } else if (obj['center']) {
                return this.initCenter(obj.center)
            } else if (obj['bottom']) {
                return this.initBottom(obj.bottom)
            }
            return '';
        },
        initBtnEvent: function () {
            var quickBetRright = $('#quickBetRright'),self=this;
            quickBetRright.find('.first .btn').click(function () { $(this).toggleClass('on'); self.calcBetZhu(); })
            quickBetRright.find('.second .btn').click(function () { $(this).toggleClass('on'); self.calcBetZhu(); })
            quickBetRright.find('.third .btn').click(function () {
                switch (this.innerText) {
                    case '大':
                        quickBetRright.find('.second .btn').addClass('on')
                        var btns = quickBetRright.find('.second .btn'), len = btns.length;
                        for (var i = 0; i < parseInt(len / 2); i++) {
                            btns.eq(i).removeClass('on')
                        }
                        break;
                    case '小':
                        quickBetRright.find('.second .btn.on').removeClass('on')
                        var btns = quickBetRright.find('.second .btn'), len = btns.length;
                        for (var i = 0; i < parseInt(len / 2); i++) {
                            btns.eq(i).addClass('on')
                        }
                        break;
                    case '单':
                        quickBetRright.find('.second .btn.on').removeClass('on')
                        if (quickBetRright.find('.second .btn span').eq(0).text() === '0') {
                            quickBetRright.find('.second .btn:nth-child(2n)').addClass('on');
                        } else { quickBetRright.find('.second .btn:nth-child(2n+1)').addClass('on'); }
                        break;
                    case '双':
                        quickBetRright.find('.second .btn.on').removeClass('on')
                        if (quickBetRright.find('.second .btn span').eq(0).text() === '0') {
                            quickBetRright.find('.second .btn:nth-child(2n+1)').addClass('on');
                        } else { quickBetRright.find('.second .btn:nth-child(2n)').addClass('on'); }
                        break;
                    case '清':
                        $('#quickBetRright .btn.on').removeClass('on')
                        break;
                }
                self.calcBetZhu();
            })
        },
        initBtnEvent2: function () {
            var quickBetRright = $('#quickBetRright'), secondCtn = quickBetRright.find('.second').eq(1),self=this;
            quickBetRright.find('.second .btn').click(function () { $(this).toggleClass('on'); self.calcBetZhu(); })
            quickBetRright.find('.third .btn').click(function () {
                switch (this.innerText) {
                    case '大':
                        var secondBtns = secondCtn.find('.btn');
                        secondBtns.addClass('on');
                        var len = secondBtns.length;
                        for (var i = 0; i < parseInt(len / 2); i++) {
                            secondBtns.eq(i).removeClass('on')
                        }
                        break;
                    case '小':
                        var secondBtns = secondCtn.find('.btn');
                        secondBtns.removeClass('on');
                        var len = secondBtns.length;
                        for (var i = 0; i < parseInt(len / 2); i++) {
                            secondBtns.eq(i).addClass('on')
                        }
                        break;
                    case '单':
                        var secondBtns = secondCtn.find('.btn');
                        secondBtns.removeClass('on');
                        secondBtns = secondCtn.find('.btn:nth-child(2n+1)').addClass('on');
                        break;
                    case '双':
                        var secondBtns = secondCtn.find('.btn');
                        secondBtns.removeClass('on');
                        secondBtns = secondCtn.find('.btn:nth-child(2n)').addClass('on');
                        break;
                    case '清':
                        $('#quickBetRright .btn.on').removeClass('on')
                        break;
                }
                self.calcBetZhu();
            })
        },
        calcBetZhu: function () {
            var firstBtns = $('#quickBetRright .first .on'), secondBtns = $('#quickBetRright .second .on span'), quickBetZhu = $('#quickBetZhu'), firstCtn = $('#quickBetRright .first');
            if (secondBtns.length === 0 || (firstCtn.length === 1 && firstBtns.length === 0)) { quickBetZhu.text(0); return; }
            if (firstBtns.length === 0) {
                quickBetZhu.text(secondBtns.length);
            } else {
                quickBetZhu.text(secondBtns.length * firstBtns.length);
            }
        }
    },
     watch: {
         '$route': function (to, from) {
             this.initQuickBet()
         }
     }
}
</script>