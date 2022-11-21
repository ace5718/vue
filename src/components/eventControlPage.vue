<template>
    <div class="center">
        <div class="row">
            <div class="item color_r">
                <div class="item_hover item_hover_r"></div>
                <h1>床位控制</h1>
                <h2>
                    控制病床高低位
                </h2>
                <router-link :to="{name: 'bed'}">
                    <div class="go color_r go_bk_r">
                        <div class="go_bk bk_r"></div>
                        GO
                    </div>
                </router-link>
            </div>
            <div class="item color_o">
                <div class="item_hover item_hover_o"></div>
                <h1>環境控制</h1>
                <h2>
                    控制病房環境設備
                </h2>
                <router-link :to="{name: 'enviroment'}">
                    <div class="go color_o go_bk_o">
                        <div class="go_bk bk_o"></div>
                        GO
                    </div>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="item color_g">
                <div class="item_hover item_hover_g"></div>
                <h1>表達狀況</h1>
                <h2>身體狀況表達</h2>
                <div class="go color_g go_bk_g">
                    <div class="go_bk bk_g"></div>
                    GO
                </div>
            </div>
            <div class="item color_b">
                <div class="item_hover item_hover_b"></div>
                <h1>醫護人員</h1>
                <h2>
                    快速呼叫醫護人員
                </h2>
                <div class="go color_b go_bk_b">
                    <div class="go_bk bk_b"></div>
                    GO
                </div>
            </div>
        </div>
    </div>

    <div class="msg">
        <div class="msg_box">
            已呼叫醫護人員
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
    name: "eventControl",

    mounted() {
        $('.center').fadeIn(1000);  //初始畫面
        
        /* 事件
        function hover(x) {  //觸碰按鈕
            $('.go:eq(' + x + ')').css({ 'color': 'rgba(255,255,255,1)' });
            $('.go:eq(' + x + ')').find('.go_bk').fadeIn()
        }

        function click(x) {
            if (x == 0) {
                setTimeout(function () { location = "hb.aspx"; }, 500);
                $('.center').fadeOut();
            } else if (x == 1) {
                setTimeout(function () { location = "ec.aspx"; }, 500);
                $('.center').fadeOut();
            } else if (x == 2) {
                setTimeout(function () { location = "WebForm1.aspx"; }, 500);
                $('.center').fadeOut();
            } else {
                $('.msg').fadeIn(700);
                $('.msg').css({ 'display': 'flex' });
                $('.msg_box').fadeIn();
                setTimeout(function () {
                    $('.msg_box').fadeOut();
                    $('.msg').fadeOut();
                }, 1500);
            }
        }

        function close(x) {  //清除按鈕
            $('.go').css({ 'color': '' });
            $('.go').find('.go_bk').fadeOut(300);

        }*/
    }
}
</script>

<style>
    .center {
        margin: 10px auto;
        width: 90%;
    }

    /* .row {
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 49vh;
    }

    .item {
        width: 45%;
        height: 95%;
        padding: 10px 100px;
        border-top: none;
        border-bottom: 2px solid rgba(200, 200, 200, .5);
    } */
</style>