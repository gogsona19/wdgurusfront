<template>
  <div class="mb-5">
    <div v-if="this.code === 0" class="page-loader justify-content-center">
      <span>loading...</span>
    </div>
    <div v-if="this.code === 404">not found</div>
    <div v-if="this.code === 200">
      <div class="head_page bg">
        <div class="cub">
          <img src="https://violy.astroon.pro/assets/img/cub_four.png"/>
        </div>
        <div class="left_ele">
          <img src="https://violy.astroon.pro/assets/img/cub_three.png"/>
        </div>
        <div class="container title_h">
          <div class="block_title">
            <h1>This is an Projects page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam ipsam <br> repudiandae nobis.
              Reprehenderit, inventore rem.</p>
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4 col-sm-12 col-xs-12" v-for="item in posts" :key="item.id">
            <a :href="'projects/' + item.portfolio_id + '/' + item.title.toLowerCase()">
              <img class="item-img" v-bind:src="photoUrl + 's_' + item.photo_name" :alt="item.title"  width="100%"/>
            </a>
            <div class="title">
              <h3><a :href="'projects/' + item.portfolio_id + '/' + item.title.toLowerCase()">{{ item.title }}</a></h3>
            </div>
            <div class="description" v-html="item.desc"></div>
            <div class="mybtn">
              <a :href="'projects/' + item.portfolio_id + '/' + item.title.toLowerCase()">
                view project
              </a>
            </div>
          </div>
        </div>
  <!--      <div class="nav_pages"><span class="active">1</span><span>2</span><span>3</span></div>-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    posts: [],
    code: 0,
    photos: [],
    photoUrl: 'https://wdgurus.co.uk/admin/upload/portfolio/',

  }),
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.code = 0;
      axios
          .get("https://api.wdgurus.co.uk/v1/portfolio/list")
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
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
  },
}
</script>

<style scoped>

.bg {
  background: #040728;
}

.pr_select_bx {
  width: 1080px;
  margin: 0 auto;
  min-height: 500px;
  margin-top: -100px !important;
  z-index: 1;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 33% 33% 33%;
}

.proj_item_bx {
  background: white;
  margin: 10px;
  min-height: 400px;
  box-shadow: 0px 4px 40px rgb(0 0 0 / 13%);
  border-radius: 10px;
  overflow: hidden;
}

.proj_item_bx:hover {
  transform: translate(-10px, -10px);
  animation: 0.3s;
}

.nav_pages {
  width: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 30px auto;
}

.nav_pages span.active {
  border: 2px solid #BC38C9;
}

.posts_s span {
  color: #877F7F;
  font-size: 12px;
}

.nav_pages span {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid rgba(189, 56, 201, 0.2);
  font-weight: 500;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 5px;
}

.title {
  padding: 20px 0;
}
.title h3, .title h3 a{
  font-size: 18px;
  color: #1B1F28;
  text-decoration: none;
}

.description {
  font-size: 14px;
  margin: 10px 0;
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

svg.bi.bi-chevron-double-right {
  width: 13px;
  height: 13px;
}

.proj_item_bx img {
  width: 100%;
}

.item-img {
  object-fit: fill;
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 480px) {
  .pr_select_bx {
    width: 100% !important;
    display: block !important;
  }

  .pages_hed_bg h1 {
    margin-top: 37px;
  }
}

</style>