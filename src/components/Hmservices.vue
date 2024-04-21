<template>
  <div class="container">
    <div class="mt-5 mb-5"></div>
    <div class="row">
      <div class="col-md-4 col-sm-12 col-xs-12 mb-5">
        <div class="numb"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     class="bi bi-lightbulb" viewBox="0 0 16 16">
    <path
        d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
  </svg></span>
          <h3>Discovery And Strategy</h3>
          <p>We digest intel on your users, research your industry, take stock of the competition, and devise a
            plan.</p>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 mb-5">
        <div class="numb"><span><img src="https://violy.astroon.pro/assets/img/icons/icon_02.svg"></span>
          <h3>Project discussion</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 mb-5">
        <div class="numb"><span><img src="https://violy.astroon.pro/assets/img/icons/icon_03.svg"></span>
          <h3>Signing a contract</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
      </div>
    </div>
    <div class="mt-5 mb-5"></div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>

span svg {
  color: white;
  width: 40px;
  height: 45px;
}

.numb span {
  margin: 0 auto;
  margin-bottom: 30px;
  display: block;
  position: relative;
  display: inline-block;
  width: 90px;
  height: 90px;
  background: -webkit-gradient(linear, left top, right top, from(#ee3fce), to(#7231CF));
  background: linear-gradient(
      90deg, #ee3fce 0%, #7231CF 100%);
  border-radius: 50%;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.numb span:before {
  border-radius: 50%;
  content: '';
  position: absolute;
  background: #fde8f9;
  z-index: -1;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  left: -10px;
  top: -10px;
  -webkit-animation: shadow 2s infinite ease-in-out;
  animation: shadow 2s infinite ease-in-out;
}

h3 {
  font-size: 22px;
  line-height: 34px;
  font-weight: 600;
  color: #272733;
}

.numb {
  text-align: center;
}

.numb p {
  font-size: 15px;
  font-weight: 300;
  line-height: 27px;
  color: #2b2727;
  padding-top: 20px;
  font-family: system-ui;
  letter-spacing: 0.1em;
}


@keyframes shadow {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>