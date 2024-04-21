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
          <h1>This is an About page </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam ipsam <br> repudiandae nobis.
            Reprehenderit, inventore rem.</p>
        </div>
      </div>
    </div>

    <div @click="show" class="container">
      <div class="about_select_bx">
        <div v-if="x === 450">ok</div>
        <div class="about_image_box">
          <img class="item-img" src="@/assets/img/about.jpg" width="100%"/>
        </div>


        <div class="phas_bx p-3" v-on:mousemove="updateCoordinates">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don't look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic
            words etc.
          </p>

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
    console.log(this.$route.query)///ახალი როუტერ 4 გიბრუნებს რეაქტიულად როტს.




  },
  methods: {
    updateCoordinates: function (event) {
      // pass event object, bound to mouse move with updat
      this.x = event.clientX;
      this.y = event.clientY;
    },
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

.about_select_bx {
  width: 100%;
  margin: 0 auto;
  background: white;
  margin-top: -100px !important;
  z-index: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 40px rgb(0 0 0 / 10%);
}

.pages_hed_bg h1 {
  font-size: 42px;
  color: #fff;
  position: relative;
  line-height: 72px;
  font-weight: 700;
  text-align: center;
  padding-top: 50px;
}

.phas_bx p {
  padding: 20px;
  line-height: 27px;
  font-family: system-ui;
  color: #2e2e2e;
}

.pages_hed_bg h1::after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 2px;
  background: #BC38C9;
  bottom: -20px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.about_image_box {
  margin: 0;
  padding: 0;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
}

.item-img {
  background: black;
  object-fit: fill;
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 480px) {
  .about_select_bx {
    width: 100% !important;
    display: block !important;
    border-radius: 0px;
  }
}

</style>