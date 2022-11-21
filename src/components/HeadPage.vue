<template>
    <div class="center">
        <div class="row">
            <router-link :to="{name: 'symptom'}">
                <div class="item color_r">
                    <div class="go_bk bk_r"></div>
                    <div class="i_img">
                        <img src="@/assets/img/8.png">
                    </div>
                    <div class="i_txt">
                        眼睛
                    </div>
                </div>
            </router-link>
            <div class="item color_o">
                <div class="go_bk bk_o"></div>
                <div class="i_img">
                    <img src="@/assets/img/9.png">
                </div>
                <div class="i_txt">
                    鼻子
                </div>
            </div>
            <div class="item color_g">
                <div class="go_bk bk_g"></div>
                <div class="i_img">
                    <img src="@/assets/img/10.png">
                </div>
                <div class="i_txt">
                    嘴巴
                </div>
            </div>
            <div class="item color_b">
                <div class="go_bk bk_b"></div>
                <div class="i_img">
                    <img src="@/assets/img/11.png">
                </div>
                <div class="i_txt">
                    耳朵
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
</template>

<script>
import $ from "jquery";

export default {
    name: 'HeadPage',

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
            setTimeout(function () { location = "se.aspx"; }, 500);
        }

        function close() {
            $('.item').css({ 'color': '' });
            $('.item').find('.go_bk').fadeOut(300);
        }*/
    }
};
</script>

<style>
    .row {
        justify-content: space-around;
        align-items: center;
        margin: 130px auto;
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