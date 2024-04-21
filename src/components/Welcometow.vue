<template>
  <div class="col-12">
    <div class="row m-0">
      <div class="col-lg-6 left">
        <img src="https://violy.astroon.pro/assets/img/img02_l.jpg">
      </div>
      <div class="bg col-lg-6">
        <div class="p-3">
          <h2>Welcome To Website</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Iaculis at
            erat pellentesque adipiscing.</p>
          <div class="button"><a href="">What we do</a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>

.left {
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.left img {
  width: 100%;
  height: 100%;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  -o-object-fit: fill;
  object-fit: fill;

}

.left:hover img {
  -webkit-transform: scale(1.04);
  transform: scale(1.04);
}

.bg {
  background: #272733;
  padding: 50px 50px 100px 50px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.bg h2 {
  position: relative;
}

.bg h2::after {
  content: "";
  display: block;
  width: 30px;
  height: 3px;
  background: #ee3fce;
  position: absolute;
  bottom: -22px;
}

.bg p {
  padding-top: 35px;
}

.bg .button {
  margin-top: 40px;
  margin-bottom: 10px;
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

p {
  font-size: 15px;
  font-weight: 300;
  line-height: 27px;
  color: #fff;
  font-family: system-ui;
  letter-spacing: 0.1em;
}

h2 {
  font-size: 36px;
  line-height: 46px;
  font-weight: 700;
  color: #fff;
}

@media only screen and (max-width: 480px) {
  .bg.col-lg-6 {
    padding: 10px 10px !important;
  }

}
</style>