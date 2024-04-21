<template>
  <div class="container">
    <div class="menu d-flex justify-content-between align-items-center" v-bind:class="{ menu_state_open: show }">
      <a :href="'/'" class="logo">
        <img alt="Vue logo" src="../assets/img/logo_vio.svg" width="35">
        <span class="mx-2">Gurus</span>
      </a>
      <div class="menu__icon" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="navbar-nav" id="nav">
        <ul class="m-3">
          <li>
            <router-link @click="toggleMenu" to="/">Home</router-link>
          </li>
          <li>
            <router-link @click="toggleMenu" to="/about">About</router-link>
          </li>
          <li>
            <router-link @click="toggleMenu" to="/projects">Projects</router-link>
          </li>
          <li>
            <router-link @click="toggleMenu" to="/services">Services</router-link>
          </li>
          <li>
            <router-link @click="toggleMenu" to="/contacts">Contact</router-link>
          </li>
          <a href="tel:995555121212" class="callus mx-5">call us</a>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toggleMenu() {
      this.show = !this.show
    },
  },
  data: () => ({
    show: false,
  }),
}
</script>

<style scoped>
.bg {
  background: #040728;
}

.menu {
  position: absolute;
  width: 100%;
  z-index: 99;
  padding: 0px 15px;
  padding-top: 30px;
  left: 0;
}

.navbar-nav > ul {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
}

.navbar-nav > ul > li {
  list-style: none;
  padding: 0px 15px;
}

.navbar-nav > ul > li > a {
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 300;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  position: relative;
}

.logo {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  z-index: 2;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-decoration: none;
}


a.blog::after {
  font-family: "Font Awesome 5 Free";
  content: "\f078";
  font-weight: 600;
  font-size: 12px;
  margin-left: 7px;
  color: #fff;
}

.callus {
  border: 2px solid #ee3fce;
  border-radius: 30px;
  z-index: 1;
  top: 15px;
  padding: 10px 22px !important;
  line-height: 22px;
  background: -webkit-gradient(linear, left top, right top, from(#7231CF), color-stop(68%, #c33ca6), to(#ee3fce));
  background: linear-gradient(to right, #7231CF 0%, #c33ca6 68%, #ee3fce 100%);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 50px;
  letter-spacing: 0.075em;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}

.callus:hover {
  background: white;
  color: rgb(56, 5, 66) !important;
  border: 2px solid transparent;
  box-shadow: inset 0 0 0 25px #fff;
}

.blog_dropdown {
  left: 0;
  right: 0;
  width: 100%;
  padding: 0px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: wrap;
  visibility: hidden;
  padding: 40px;
  opacity: 0;
  position: absolute;
  background: #272733;
  border-radius: 10px;
  z-index: 99;
}

.blog:hover .blog_dropdown {
  visibility: visible;
  opacity: 1;
}

.menu__icon {
  display: none;
  width: 30px;
  height: 25px;
  position: relative;
  cursor: pointer;
}

.menu__icon span:nth-child(1) {
  top: 0px;
}

.menu__icon span:nth-child(2), .menu__icon .menu__icon span:nth-child(3) {
  top: 10px;
}

.menu__icon span:nth-child(4) {
  top: 20px;
}

.menu__icon span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #fff;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
  z-index: 1;
}

.menu.menu_state_open .menu__icon span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.menu.menu_state_open .menu__icon span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.menu.menu_state_open .menu__icon span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 10px;
}

.menu.menu_state_open .menu__icon span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.menu.menu_state_open .navbar-nav {
  display: block;
}


@media screen and (max-width: 999px) {
  .menu__icon {
    display: inline-block;
    z-index: 999;
  }

  .menu_state_open .menu__icon {
    position: fixed;
    top: 40px;
    right: 40px;
  }

  .menu_state_open .menu__icon {
    position: fixed;
    top: 40px;
    right: 40px;
  }

  .navbar-nav .button {
    padding-left: 0px;
  }

  .navbar-nav {
    position: fixed;
    display: none;
    top: 0;
    right: 0;
    left: 0;
    background-color: black;
    z-index: 998;
    overflow: scroll;
    height: 100vh;
  }

  .navbar-nav ul {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    padding: 0px;
    margin: 0px;
  }

  .navbar-nav ul li {
    width: 100%;
  }

  .navbar-nav > ul {
    height: 100%;
  }

  .navbar-nav .down_nav {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    text-align: center;
  }

  .navbar-nav .down_nav a {
    display: block;
    padding: 10px 0;
    margin: 0px;
    text-align: center;
    color: #ffffff;
  }

  .navbar-nav .down_nav ul {
    display: none !important;
    top: 0px;
  }

  .navbar-nav .down_nav:hover ul {
    display: -webkit-box !important;
    display: flex !important;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }

  .navbar-nav .down_nav .small_menu {
    display: block;
    position: relative;
    width: 100%;
  }

  .navbar-nav .down_nav .dropdown-menu {
    margin-top: 0px;
  }

  .navbar-nav .down_nav .dropdown-menu ul {
    width: 100%;
  }

  .navbar-nav .down_nav .dropdown-menu ul li {
    padding: 5px 0px;
    padding-left: 0px;
    width: 100%;
  }

  .navbar-nav .w_dropdown {
    display: block;
    top: 0;
  }

  .navbar-nav .w_dropdown .mega_m {
    width: 100%;
  }

  .navbar-nav .w_dropdown .mega_m h3 {
    padding-left: 0px;
    color: #ee3fce;
  }

  .navbar-nav .w_dropdown .mega_m ul {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .navbar-nav .w_dropdown .mega_m ul li {
    padding-left: 0px;
  }

  .navbar-nav > ul > li {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .menu .navbar-nav ul {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .menu .navbar-nav ul ul {
    position: relative;
  }

  .work .img_w .img_portf {
    width: calc((100% / 3) - 20px);
  }

  .work .img_w .img_portf:nth-last-child(-n+5) {
    margin-bottom: 20px;
  }

}

</style>