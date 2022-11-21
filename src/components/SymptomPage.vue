<template>
    <div class="center">
        <div class="row">
            <div class="item color_r">
                <div class="go_bk bk_r"></div>
                <div class="i_img">
                    <img src="@/assets/img/12.png">
                </div>
                <div class="i_txt">
                    酸
                </div>
            </div>
            <div class="item color_o">
                <div class="go_bk bk_o"></div>
                <div class="i_img">
                    <img src="@/assets/img/13.png">
                </div>
                <div class="i_txt">
                    痛
                </div>
            </div>
            <div class="item color_g">
                <div class="go_bk bk_g"></div>
                <div class="i_img">
                    <img src="@/assets/img/14.png">
                </div>
                <div class="i_txt">
                    癢
                </div>
            </div>
        </div>
        <div class="row">
        </div>
        <div class="row">
            <div class="item color_p">
                <div class="go_bk bk_p"></div>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" class="svg-inline--fa fa-sign-out-alt
                    fa-w-16" role="img" viewBox="0 0 512 512">
                    <path class="color_p" fill="currentColor"
                        d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3
                        0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4
                        25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192
                        436v-40c0-6.6-5.4-12-12-12H96c-17.7
                        0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4
                        12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43
                        96 96 96h84c6.6 0 12-5.4 12-12z">
                    </path>
                </svg>
            </div>
        </div>
    </div>

    <div class="msg"></div>
    <div class="msg_box">
        已完成檢查
    </div>
</template>

<script>
import $ from "jquery";

export default {
    name: 'SymptomPage',

    mounted() {
        $('.center').fadeIn(1000);
        /*
        function hover(x) {
            $('.item:eq(' + x + ')').find('.go_bk').fadeIn();
            $('.item:eq(' + x + ')').css({ 'color': 'rgba(255,255,255,1)' });
        }

        function click_out() {
            $('.center').fadeOut();
            setTimeout(function () { location = "index.aspx"; }, 500);
        }

        function click(x) {
            $('.center').fadeOut();
            $('.msg').fadeIn(700);
            $('.msg').css({ 'display': 'flex' });
            $('.msg_box').fadeIn();
            setTimeout(function () {
                $('.msg_box').fadeOut();
                $('.msg').fadeOut();
            }, 1500);
            setTimeout(function () { location = "index.aspx"; }, 2000);
        }

        function close() {
            $('.item').css({ 'color': '' });
            $('.item').find('.go_bk').fadeOut(300);
        }*/
    }
}
</script>

<style>
    .row {
        justify-content: space-around;
        align-items: center;
        /* margin: 130px auto; */
    }

    .item {
        width: 300px;
        height: 300px;
        padding: 20px;
    }

    .i_img {
        width: 100%;
        height: 80%;
    }

    .i_txt {
        width: 100%;
        height: 20%;
        font-size: 50px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .i_img img {
        width: 100%;
        height: 100%;
    }

    .color_p {
        width: 500px;
        height: 100px;
    }
</style>