<template>
  <div class="mb-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="title_b col-sm-12 col-12">
          <h2>What We Do</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
        </div>
      </div>
      <div class="row">
          <div class="pr col-lg-4 col-md-8 col-12 aos-init aos-animate mb-5" data-aos-duration="1000">
            <div class="product_bl"><img src="../assets/01.jpeg" alt="">
              <div class="product_cont">
                <h3>Web</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                <div class="button"><a href="">Start</a></div>
              </div>
            </div>
          </div>
          <div class="pr col-lg-4 col-md-8 col-12 aos-init aos-animate mb-5" data-aos="fade-up" data-aos-duration="1000">
            <div class="product_bl"><img src="../assets/02.jpg" alt="">
              <div class="product_cont">
                <h3>Apps</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                <div class="button"><a href="">Start</a></div>
              </div>
            </div>
          </div>
          <div class="pr col-lg-4 col-md-8 col-12 aos-init aos-animate mb-5" data-aos="fade-up" data-aos-duration="2000">
            <div class="product_bl"><img src="../assets/03.webp" alt="">
              <div class="product_cont">
                <h3>Seo Marketing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                <div class="button"><a href="">Start</a></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.bg {
  background: #f5f5f5;
}

.container {
  width: 100%;
  max-width: 1140px;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.title_b {
  text-align: center;
}

.title_b h2 {
  padding-bottom: 35px;
  position: relative;
  color: #2e2e2e;
  font-size: 36px;
  line-height: 46px;
  font-weight: 700;
}

.title_b h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 30px;
  height: 2px;
  background: #ee3fce;
  top: 70px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.title_b p {
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 80px;
  font-size: 15px;
  font-family: system-ui;
  letter-spacing: 0.1em;
  font-weight: 400;
  line-height: 27px;
  color: #2e2e2e;
}

.product_bl img {
  width: 100%;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.product_bl:hover {
  -webkit-transform: translate(0px, -10px);
  transform: translate(0px, -10px);
}

.product_bl:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.product_bl {
  width: 100%;
  overflow: hidden;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  position: relative;
  border-radius: 10px;
  text-align: center;
  background: #272733;
}

.product_bl .product_cont {
  padding: 30px;
}

.product_bl h3 {
  padding-left: 25px;
  padding-right: 25px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  font-size: 22px;
  line-height: 34px;
  font-weight: 600;
  color: #fff;
}

.product_bl:hover h3 {
  color: #ee3fce;
}

.product_bl p {
  margin-top: 15px;
  padding-left: 25px;
  padding-right: 25px;
  color: #C9C9C9;
  position: relative;
}

.product_bl .button {
  margin-top: 35px;
}

.button a {
  background: -webkit-gradient(linear, left top, right top, from(#7231CF), color-stop(68%, #c33ca6), to(#ee3fce));
  background: linear-gradient(to right, #7231CF 0%, #c33ca6 68%, #ee3fce 100%);
  color: #fff;
  padding: 15px 40px;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: 400;
  position: relative;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 50px;
  letter-spacing: 0.075em;
}

@media only screen and (max-width: 480px) {
  .container {
    padding-left: 0px;
  }

  .rows {
    display: block !important;
  }

}
</style>