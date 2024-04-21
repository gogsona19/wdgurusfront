<template>
  <div class="services mb-5">
    <div v-if="this.code === 0" class="page-loader justify-content-center">
      <span>loading...</span>
    </div>
    <div v-if="this.code === 404">not found</div>
    <div>
      <div class="head_page bg">
        <div class="cub">
          <img src="https://violy.astroon.pro/assets/img/cub_four.png"/>
        </div>
        <div class="left_ele">
          <img src="https://violy.astroon.pro/assets/img/cub_three.png"/>
        </div>
        <div class="container title_h">
          <div class="block_title">
            <h1>This is an Services page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam ipsam <br> repudiandae nobis.
              Reprehenderit, inventore rem.</p>
          </div>
        </div>
      </div>
      <div v-if="this.code === 200" class="container">
        <div class="pr_select_bx">
          <div v-for="item in posts" :key="item.id" class="sel_item_bx">
            <!-- <div class="ico_1" v-if="item.ico == 1">old</div>
             <div class="ico_2" v-if="item.ico == 2">new</div>
             <div class="ico_3" v-if="item.ico == 3">brand new</div>-->
            <div>
              <a :href="'services/' + item.service_id + '/' + item.title.toLowerCase()">
                <img class="serv_img" v-bind:src="photoUrl + 'l_' + item.photo_name" :alt="item.title" width="100%"/>
              </a>
            </div>

            <div class="title">
              <h3><a :href="'services/' + item.service_id + '/' + item.title.toLowerCase()">{{ item.title }}</a></h3>
            </div>
            <div class="content-div">
              <div class="description" v-html="item.desc"></div>
              <div v-if="item.tags"  class="tags">
                <span class="tag" v-for="t in (item.tags).split(',')" :key="t" >{{ t }}</span>
              </div>
            </div>
            <div class="mybtn">
              <a :href="'services/' + item.service_id + '/' + item.title.toLowerCase()">
                view service
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--
            <div v-for="post in postebi" :key="post.id">
              <div>this is title: {{ post.title }}</div>
              {{ post.service_id }}
              {{ post.desc }}
            </div>-->

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Services",
  data: () => ({
    posts: [],
    code: 0,
    photos: [],
    photoUrl: 'https://wdgurus.co.uk/admin/upload/services/',

  }),
  created() {
    //console.log(this.$route.params.id)

  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.code = 0;
      axios
          .get("https://api.wdgurus.co.uk/v1/services/list")
          .then((response) => {
            //console.log(response);
            //console.log(response.data.data);
            if (response.status == 200) {
              this.code = 200;
              this.posts = response.data.data;
              this.photos = response.data.data.images;
            } else {
              this.code = 404;
            }
          })
          .catch((error) => {
            this.code = 404;
            console.log(error);
          });
    },
    getDetail(id) {
      this.code = 0;
      axios
          .get("https://api.wdgurus.co.uk/v1/services/" + id)
          .then((response) => {
            console.log(response);
            console.log(response.data.data);
            if (response.status == 200) {
              this.code = 200;
              this.posts = response.data.data;
            } else {
              this.code = 404;
            }
          })
          .catch((error) => {
            this.code = 404;
            console.log(error);
          });
    }
  },

};
</script>

<style scoped>

.bg {
  background: #040728;
}

.pr_select_bx {
  margin: 0 auto;
  min-height: 500px;
  margin-top: -100px !important;
  z-index: 1;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 50% 50%;
}

.pr_select_bx img {
  width: 100%;
}

.sel_item_bx {
  background: white;
  margin: 10px;
  min-height: 450px;
  box-shadow: 0px 4px 40px rgb(0 0 0 / 13%);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
}

.title {
  padding: 20px;
}
.title h3, .title h3 a{
  font-size: 18px;
  color: #1B1F28;
  text-decoration: none;
}
.content-div {
  width: 100%;
  min-height: 280px;
}
.description {
  padding: 0 20px 20px;
  border-radius: 4px;
  letter-spacing: 0.05em;
  font-size: 14px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.tags {
  width: 100%;
  padding: 20px 20px;
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

.mybtn {
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.mybtn a {
  background: #BC38C9;
  font-size: 16px;
  border-radius: 4px;
  position: relative;
  padding: 10px 15px 10px 15px;
  color: #ffffff;
  text-decoration: none;
  font-weight: normal;
  text-transform: uppercase;
}

.mybtn a:hover {
  background: #4839b3;
  cursor: pointer;
  color: #f5f5f5;
}

.mybtn a svg {
  position: absolute;
  right: 10px;
  top: 30%;
}
/*
.sel_item_bx:hover {
  transform: translate(-10px, -10px);
}*/

.serv_img {
  object-fit: fill;
  height: auto;
}

@media only screen and (max-width: 980px) {
  .pr_select_bx {
    width: 100% !important;
    display: block;
  }

  .mybtn_callus {
    margin: 20px 100px;
  }

  .pages_hed_bg h1 {
    margin-top: 37px;
  }
}
</style>
