<template>
    <div class="center">
        <div class="main color_p">
            <div class="row ig">
                <div class="pm">
                    <div class="pm_img">
                        <img src="@/assets/img/0.png">
                    </div>
                    <h1>頭部</h1>
                </div>
            </div>
            <div class="row mes">
                <div class="ms color_g">
                    沒問題!
                    <div class="s color_g"></div>
                </div>
                <div class="ms color_o">
                    有點怪怪的?
                    <div class="s color_o"></div>
                </div>
                <div class="ms color_r">
                    不大好!
                    <div class="s color_r"></div>
                </div>
            </div>
            <div class="row">
                <div class="item color_g">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="smile" class="svg-inline--fa fa-smile fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path class="color_g" fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z">
                        </path>
                    </svg>
                    <div class="go_bk go_bk_g"></div>
                </div>
                <div class="item color_o">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="meh" class="svg-inline--fa fa-meh fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path class="color_o" fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm8 144H160c-13.2 0-24 10.8-24 24s10.8 24 24 24h176c13.2 0 24-10.8 24-24s-10.8-24-24-24z">
                        </path>
                    </svg>
                    <div class="go_bk go_bk_o"></div>
                </div>
                <div class="item color_r">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="frown" class="svg-inline--fa fa-frown fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path class="color_r" fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z">
                        </path>
                    </svg>
                    <div class="go_bk go_bk_r"></div>
                </div>
            </div>
        </div>
    </div>

    <router-link :to="{name: 'eventControl'}">
        <div class="row gohome">
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
    </router-link>
    <div class="msg">
        <div class="msg_box">
            已完成檢查
        </div>
    </div>
</template>


<script>
import $ from "jquery";

export default {
    name: 'detailsCheckPage',
    mounted() {
        $('.center').fadeIn(2000);

        /*
        function hover(x) {
            $('.item:eq(' + x + ')').css({ 'width': '250px', 'height': '250px' });
            $('.item:eq(' + x + ')').find('.go_bk').fadeIn();
        }

        function close() {
            $('.item').css({ 'width': '200px', 'height': '200px' });
            $('.item').find('.go_bk').fadeOut(300);
        }

        function click(x) {
            $('.pm').fadeOut(0);
            $('.pm').find('img').attr('src','img/' + x +'.png');
                switch (x) {
                    case 0:
                        $('.pm').find('h1').text('頭部');
                        break;
                    case 1:
                        $('.pm').find('h1').text('肩頸');
                        break;
                    case 2:
                        $('.pm').find('h1').text('胸部');
                        break;
                    case 3:
                        $('.pm').find('h1').text('手部');
                        break;
                    case 4:
                        $('.pm').find('h1').text('腹部');
                        break;
                    case 5:
                        $('.pm').find('h1').text('腰部');
                        break;
                    case 6:
                        $('.pm').find('h1').text('臀部');
                        break;
                    case 7:
                        $('.pm').find('h1').text('腳部');
                        break;
                    default:
                        $('.center').fadeOut()
                        $('.msg').fadeIn(700);
                        $('.msg').css({ 'display': 'flex' });
                        $('.msg_box').fadeIn();
                        setTimeout(function () {
                            $('.msg_box').fadeOut();
                            $('.msg').fadeOut();
                        }, 1500);
                        setTimeout(function () { location = "index.aspx"; }, 2000);
                        break;
            }
            $('.pm').fadeIn(1000);
        }*/
    }
}
</script>

<style>
    .main {
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        width: 95%;
        padding: 10px;
        border: 7px solid;
        border-right: none;
        border-left: none;
    }

    /* .row {
        margin: 10px auto;
        width: 100%;
        height: 250px;
        padding: 10px 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    } */

    /* .item {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        border: none;
        font-weight: bold;
        overflow: hidden;
        transition: 1s;
    } */

    .pm {
        margin: auto;
        display: flex;
    }

    .pm h1 {
            font-size: 100px;
            margin: auto 100px;
    }

    .pm_img {
        width: 400px;
        height: 400px;
    }

    .pm_img img {
            width: 100%;
            height: 100%;
    }

    .ig {
        height: 400px;
    }

    .mes {
        align-items: flex-end;
    }

    .ms {
        position: relative;
        border: 10px solid;
        border-radius:30px;
        display:flex;
        justify-content:center;
        align-items:center;
        width: 400px;
        height: 80%;
        font-weight:bold;
        font-size:45px;
    }

    .s {
        position: absolute;
        bottom: -50px;
        left: 0;
        right: 0;
        margin: auto;
        content: '';
        width: 10px;
        height: 10px;
        border: 20px solid;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
    }
</style>