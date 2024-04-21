<template>
  <div class="about mb-5 col-12">
    <div class="head_page bg">
      <div class="cub">
        <img src="https://violy.astroon.pro/assets/img/cub_four.png"/>
      </div>
      <div class="left_ele">
        <img src="https://violy.astroon.pro/assets/img/cub_three.png"/>
      </div>
      <div class="container title_h">
        <div class="block_title">
          <h1>This is error page</h1>
          <p>404 page not found!</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="about_select_bx">
        <div class="about_image_box">
          <img class="item-img" src="@/assets/img/slide03_l.png" width="100%"/>
        </div>

        <div class="error-text p-5 text-center">
          <h2>
             Sorry page not found, go to home page <a :href="'/'">Home page</a>
          </h2>
        </div>
      </div><!--end about_select_bx-->
    </div><!--end ab_containr-->

  </div><!--end about-->

</template>

<script>


export default {

  data: () => ({
    show: true,
    counter: 0,
    x: 0,
    y: 0,
    z: 0,
    g: 0,
  }),
  created() {
    // ელოდება როდესაც გვერდი ჩაიტვირთება მაშინ უშვებს აქ ჩაწერილ კოდს

  },
  methods: {
  },
  mounted() {

  },
  watch: {
    //უყურებს ცვლადს
  },
  computed: {
    //ფუქნქციები რომელსაც არეტარნებ
  }
}
</script>
<style scoped>

.bg {
  background: #040728;
}

.about_image_box {
  margin-top: 100px;
  padding: 0;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  text-align: center;
}

.item-img {
  background: transparent;
  object-fit: fill;
  width: 30%;
  height: auto;
}

</style>