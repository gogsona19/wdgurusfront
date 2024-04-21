<template>
  <div class="container slider-wrapper">
    <div class="mymineslide pt-5">
      <swiper :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" :speed="600"
              :parallax="true" :pagination='{
  "clickable": true
}' :navigation="true" class="mySwiper">
        <div slot="container-start" class="parallax-bg"
             :style="{'background-image': 'url(https://violy.astroon.pro/assets/img/img02_l.jpg)'}"
             data-swiper-parallax="-23%"></div>
        <swiper-slide>
          <div class="title" data-swiper-parallax="-300">Slide 1</div>
          <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div class="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="title" data-swiper-parallax="-300">Slide 2</div>
          <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div class="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="title" data-swiper-parallax="-300">Slide 3</div>
          <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div class="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.https://codesandbox.io/s/vbku9?file=/src/App.vue:2871-2932</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue/swiper-vue';

// Import Swiper styles
import 'swiper/swiper.min.css';


// import Swiper core and required modules
import SwiperCore, {
  Parallax, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation]);


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
<style>

.slider {
  position: relative;
  overflow: hidden;
}

.mymineslide {
  width: 100%;
  margin: 100px auto;
}

.swiper {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 25px;
}

.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}

.swiper-slide .subtitle {
  font-size: 21px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}

@media only screen and (max-width: 480px) {
  .mymineslide {
    width: 90%;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
  }
  .swiper-slide {
    padding: 10px 29px;
  }
  .slider-wrapper {
    padding: 0!important;
  }
}

</style>