<template lang="">
        <div class="center">          
            <div class="start">
                <h1>病情診斷調查</h1>
                <!-- <router-link :to="{name: 'select'}"> -->
                  <div class="go color_p">
                      Start
                      <div class="go_bk bk_p"></div>
                  </div>
                <!-- </router-link> -->
            </div>
                       
            <div class="out">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" class="svg-inline--fa fa-sign-out-alt fa-w-16" role="img" viewBox="0 0 512 512">
                <path fill="currentColor"
                    d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z">
                </path>
            </svg>
            </div>
        </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "StartPage",

  mounted() {
    //==========初始畫面==========
    $(".center").delay(500).fadeIn();
    $(".start h1").delay(1000).fadeIn(1000);
    $(".go").delay(2000).fadeIn(1000);
    $(".out").delay(2000).fadeIn(1000);

    /*//==========按鈕==========
    function hover() {
      $(".go").css({ color: "rgba(255,255,255,1)" });
      $(".go_bk").fadeIn();
    }

    function close() {
      $(".go").css({ color: "" });
      $(".go_bk").fadeOut(300);
      $(".out").css({ width: "70px", height: "70px" });
      $("path").css({ color: "rgba(100, 100, 200, .3)" });
    }

    function click() {
      $(".center").fadeOut();
      setTimeout(function () {
        location = "select.aspx";
      }, 500);
    }

    //==========回主頁==========
    function hover_out() {
      $(".out").css({ width: "100px", height: "100px" });
      $("path").css({ color: "rgba(100, 100, 200, 1)" });
    }

    function click_out() {
      $(".center").fadeOut();
      setTimeout(function () {
        location = "index.aspx";
      }, 500);
    }*/
  },
};
</script>

<style lang="css">
.start {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 1000px;
  height: 500px;
  padding: 50px;
  border: 5px solid rgba(100, 100, 200, 0.5);
  border-left: none;
  border-right: none;
}

.start h1 {
  display: none;
  width: 100%;
  font-size: 70px;
  color: rgba(100, 100, 200, 1);
}

.go {
  font-size: 100px;
  height: 150px;
  line-height: 130px;
  box-shadow: 10px 10px 1px rgba(100, 100, 200, 0.3);
  transition: 1.5s;
}

.out {
  display: none;
  width: 70px;
  height: 70px;
  position: fixed;
  right: 30px;
  bottom: 10px;
}

path {
  color: rgba(100, 100, 200, 0.3);
}
</style>