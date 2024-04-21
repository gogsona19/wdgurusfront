<template>
  <section>
    <Topnav/>
    <Topmenu/>
    <div class="min-height">
      <router-view></router-view>
    </div>
    <Footer/>
  </section>
</template>
<script>
import Topnav from '@/components/Topnav.vue'
import Topmenu from '@/components/Topmenu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  data: () => ({
    z: 0,
    tes:0,
  }),
  methods: {
    testfun(){
      //console.log(window.screen.availWidth)
      this.z = window.screen.availWidth
    },
    screensize() {
      if (window.screen.availWidth <= 980) {
//
      }
    },
    satesto() {
      if (this.$route.fullPath) {
        //console.log(this.$route.fullPath)
      }
    }

  },
  mounted() {
    this.testfun();
    this.screensize();
    this.satesto();
  },
  components: {
    Topnav,
    Topmenu,
    Footer,
  },
}
</script>
<style>
.min-height {
  min-height: 600px;
}
.infobox {
  background: #fbef87;
  padding: 30px;
  border-radius: 22px;
  margin: 100px 50px;
  letter-spacing: 0.1em;
}

.head_page {
  overflow: hidden;
}

.container {
  position: relative;
}

#nav a.router-link-exact-active {
  color: #b6abab;
  border-bottom: 2px solid #8634c5;
}

.bool {
  position: absolute;
  top: 170px;
  left: 220px;
  -webkit-animation: elm_t 1s infinite ease-in-out;
  animation: elm_t 1s infinite ease-in-out;
  animation-direction: alternate-reverse;
  width: 35px;
  height: 35px;
  background: linear-gradient(to right, #7231CF 0%, #c33ca6 68%, #ee3fce 100%);
  border-radius: 50%;
}

.cub {
  position: absolute;
  top: 0px;
  left: 10px;
  -webkit-animation: elm_o 1s infinite ease-in-out;
  animation: elm_o 1s infinite ease-in-out;
  animation-direction: alternate-reverse;
  z-index: 1;

}

.cub img {
  filter: opacity(30%);
}

.left_ele {
  position: absolute;
  top: 300px;
  left: -10px;
  -webkit-animation: elm_th 1s infinite ease-in-out;
  animation: elm_th 1s infinite ease-in-out;
  animation-direction: alternate-reverse;
}

.ele_eight {
  position: absolute;
  top: 45px;
  right: 0px;
  z-index: 1;
  -webkit-animation: elm_f 1s infinite ease-in-out;
  animation: elm_f 1s infinite ease-in-out;
  animation-direction: alternate-reverse;
}

.ele_seven {
  position: absolute;
  top: 45px;
  right: 0px;
  z-index: 1;
  bottom: 0px;
  right: 0px;
  -webkit-animation: elm_f 1s infinite ease-in-out;
  animation: elm_f 1s infinite ease-in-out;
  animation-direction: alternate-reverse;
}

.ele_six {
  position: absolute;
  top: 45px;
  right: 0px;
  z-index: 1;
  bottom: 0px;
  right: 0px;
  -webkit-animation: elm_f 1s infinite ease-in-out;
  animation: elm_f 1s infinite ease-in-out;
  animation-direction: alternate-reverse;
}

.ele_five {
  position: absolute;
  top: 50px;
  bottom: 0px;
  right: 0px;
  -webkit-animation: elm_fi 1s infinite ease-in-out;
  animation: elm_fi 1s infinite ease-in-out;
  animation-direction: alternate-reverse;
}

svg.bi.bi-list {
  width: 18px;
  height: 18px;
  color: white;
}

.mybtn_01, .mybtn_02, .mybtn_03, .mybtn_04, .mybtn_05 {
  color: #000;
  padding: 4px 5px;
  letter-spacing: 0.1em;
  border-radius: 4px;
  float: left;
  margin: 2px 8px;
  font-size: 12px;
}

.mybtn_01 {
  background: #bbb1c8;
}

.mybtn_02 {
  background: #63a3df;
}

.mybtn_03 {
  background: #d4dcce;
}

.mybtn_04 {
  background: #f1b89d;
}

.mybtn_05 {
  background: #b0c6b0;
}

.logo_lnk {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-content: center;
  margin-top: 30px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  width: 55%;
  background: #4839b3;
  border-radius: 7px;
  font-family: -webkit-body;
  /* text-shadow: 3px 6px 3px #7478a696; */
  font-size: 20px;
}

.page-loader {
  position: static;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #1B1F28;
  z-index: 1;
  min-height: 100%; /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */
  display: flex;
  align-items: center;
}

.page-loader span {
  color: #8A8A8A;
}


/* page header */
.head_page {
  width: 100%;
  height: 550px;
  background: #161A23;
  position: relative;
}

.title_h {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: calc(100% - 50px);
  text-align: center;
}

.head_page h1 {
  font-size: 42px;
}

.title_h h1::after {
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

.title_h h1 {
  color: #fff;
  position: relative;
}

.title_h p {
  color: #C9C9C9;
  padding-top: 45px;
}


@media only screen and (max-width: 980px) {
  div#app {
    width: 100vw;
    overflow: hidden;
  }

  .ele_six {
    width: 110px;
  }

  .ele_seven {
    width: 150px;
  }

  .ele_eight {
    display: none;
  }

  .ele_five {
    width: 100px;
  }

  .left_logo {
    display: block;
    margin-left: 20px;
    z-index: 9;
  }

  .logo_lnk span::after {
    content: "";
    width: 8px;
    height: 6px;
    background: #8733c3;
    position: absolute;
  }
}


@-webkit-keyframes elm_t {
  0% {
    -webkit-transform: translatey(0px);
    transform: translatey(0px);
  }
  100% {
    -webkit-transform: translatey(10px);
    transform: translatey(10px);
  }
}

@keyframes elm_t {
  0% {
    -webkit-transform: translatey(0px);
    transform: translatey(0px);
  }
  100% {
    -webkit-transform: translatey(10px);
    transform: translatey(10px);
  }
}

@-webkit-keyframes elm_o {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  100% {
    -webkit-transform: translateX(15px);
    transform: translateX(15px);
  }
}

@keyframes elm_o {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  100% {
    -webkit-transform: translateX(15px);
    transform: translateX(15px);
  }
}

@-webkit-keyframes elm_th {
  0% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
}

@keyframes elm_th {
  0% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
}

@-webkit-keyframes elm_f {
  0% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
}

@keyframes elm_f {
  0% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
}

@-webkit-keyframes elm_fi {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  100% {
    -webkit-transform: translateX(15px);
    transform: translateX(15px);
  }
}

@keyframes elm_fi {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  100% {
    -webkit-transform: translateX(15px);
    transform: translateX(15px);
  }
}
</style>
