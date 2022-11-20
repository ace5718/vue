<template>
  <div class="center">
    <div class="main row">
      <div class="box col-5 color_r">
        <h1>
          <br />
          將逐一詢問部位 <br />
          詳細程序、須長時間
        </h1>
        <router-link :to="{name: 'detailsCheck'}">
          <div class="item color_r">
            <div class="go_bk bk_r"></div>
            逐式檢查
          </div>
        </router-link>
      </div>
      <div class="box col-5 color_b">
        <h1>
          <br />
          直接選擇部位 <br />
          稍少程序、減省時間
        </h1>
        <router-link :to="{name: 'SelectOne'}">
          <div class="item color_b">
            <div class="go_bk bk_b"></div>
            重點檢查
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "SelectPage",

  mounted() {
    $(".center").fadeIn(2000); //初始畫面

    /*function hover(x) { //觸碰方塊
    $('.item:eq(' + x + ')').css({ 'color': 'rgba(255,255,255,1)' });
    $('.item:eq(' + x + ')').find('.go_bk').fadeIn();
    }

    function close() {  //清除方塊
        $('.item').css({ 'color': '' });
        $('.item').find('.go_bk').fadeOut(300);
    }


    function click(x) {
        $('.center').fadeOut();
        if (x == 0) {
            setTimeout(function () { location = "sy.aspx"; }, 500);
        } else {
            setTimeout(function () { location = "sf.aspx"; }, 500);
        }

    }*/
  },
};
</script>

<style lang="css">
.center {
  margin: 100px auto;
}

.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: baseline;
  align-items: center;
}

.box {
  margin: auto;
  height: 100%;
  position: relative;
  padding: 0px 100px;
  border-right: 3px solid;
  border-left: 3px solid;
}

.box h1 {
  padding: 70px 0;
  font-size: 60px;
  border-bottom: 3px solid;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 500px;
  height: 200px;
  font-size: 70px;
  font-weight: bold;
  transition: 1.5s;
}
</style>