<template>
  <div class="">
    <div class="spacer">
    </div>
    <div v-if="this.code === 0" class="page-loader justify-content-center">
      <span>loading...</span>
    </div>
    <div v-if="this.code === 404">404 error!</div>
    <div class="row mb-5 mt-5" v-if="this.code === 200">
      <div class="col-md-6 col-sm-12 swiper-wrapper">
        <div class="mySlider">
          <swiper :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" :speed="600"
                  :parallax="true" :pagination='{
  "clickable": true
}' :navigation="true" class="mySwiper">
            <swiper-slide v-for="photo in photos" :key="photo.photo_id">
                <img v-bind:src="photosUrl + 'l_' + photo.photo_name" width="100%" alt="">
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 p-5 pt-md-0 p-sm-3">
        <h1 class="pb-3">
          {{ post.title }}
        </h1>

        <div class="description" v-html="post.desc"></div>

        <div v-if="post.tags"  class="tags mt-3">
          <span class="tag" v-for="t in (post.tags).split(',')" :key="t" >{{ t }}</span>
        </div>

        <!-- <hr/><div class="satesto" v-if="this.code" >
           <div>Services id : > {{posts.services_id}}</div>
           <div>Title : > {{ posts.title }}</div>
           <div>this is view : > {{posts.views}}</div>
           <div>this is status id  : > {{posts.status_id}}</div>
           <div>this is ordering : > {{posts.ordering}}</div>
           <div>this is Created data : > {{posts.created_date}}</div>
           <div>this is Description : > {{posts.desc}}</div>
           <div v-for="photo in photos" :key="photo.photo_id">
               <img v-bind:src="baseurl + photo.photo_name" width="50" height="50" />

           </div>
       </div>-->

      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
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
  data: () => ({
    post: null,
    code: 0,
    photos: [],
    photosUrl: 'https://wdgurus.co.uk/admin/upload/portfolio/',
    myArray: 0,
  }),

  created() {
    this.getPost(this.$route.params.id);
  },

  methods: {
    getPost(id) {
      this.code = 0;
      this.post = null;
      axios
          .get("https://api.wdgurus.co.uk/v1/portfolio/" + id)
          .then((response) => {
            if (response.status === 200) {
              this.code = 200;
              this.post = response.data.data;
              this.photos = response.data.data.images;
              this.myArray = this.post.desc.split(" ");
            } else {
              this.code = 404;
            }
          })
          .catch((error) => {
            this.code = 404;
            console.log(error);
          });
    }
  }
}

</script>

<style scoped>

.spacer {
  width: 100%;
  height: 250px;
  background: #040728;
  position: relative;
}

.swiper {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 0;
  margin: 0;
  padding: 0;
}

.swiper-slide {
  border-radius: 0;
  margin: 0;
  padding: 0;
}

.slider-wrapper {
  overflow: visible;
}

.mySlider {
  width: 100%;
}

.swiper-slide img {
  width: 100%;
  object-fit: cover;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}

.description {
  letter-spacing: 0.05em;
  font-size: 14px;
  display: -webkit-box;
}

.tags {
  width: 100%;
}
.tag {
  background: #63a3df;
  padding: 5px 10px;
  border-radius: 4px;
  z-index: 5;
  color: #fff;
  letter-spacing: 0.1em;
  font-size: 14px;
  margin-right: 12px;
  margin-bottom: 8px;
  display: inline-block;
}
</style>