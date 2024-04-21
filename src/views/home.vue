<template>
  <div class="">
    <div class=" m-0">
      <div class="slider bg">
        <div class="cub">
          <img src="https://violy.astroon.pro/assets/img/cub_four.png">
        </div>
        <div class="left_ele">
          <img src="https://violy.astroon.pro/assets/img/cub_three.png"/>
        </div>
        <div class="ele_eight">
          <img src="https://violy.astroon.pro/assets/img/cub_eight.png"/>
        </div>
        <div class="ele_seven">
          <img src="https://violy.astroon.pro/assets/img/cub_seven.png"/>
        </div>
        <div class="ele_six">
          <img src="https://violy.astroon.pro/assets/img/cub_six.png"/>
        </div>
        <div class="ele_five">
          <img src="https://violy.astroon.pro/assets/img/block_five.png"/>
        </div>

        <div class="bool"></div>
        <SlideSwiper/>
      </div><!--end slider-->
    </div>

    <Hmservices/>

    <Welcometow/>

    <Whatwedo/>

  </div>
</template>

<script>
// @ is an alias to /src
import Hmservices from '../components/Hmservices.vue'
import Welcometow from '../components/Welcometow.vue'
import Whatwedo from '../components/Whatwedo.vue'
import SlideSwiper from "../components/SlideSwiper";


export default {
  name: 'Home',
  components: {
    SlideSwiper,
    Hmservices,
    Welcometow,
    Whatwedo,
  },
  data: () => ({
    showImage: true
  })
}
</script>
<style scoped>

.bg {
  background: #040728;
}

</style>