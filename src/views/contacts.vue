<template>
  <div class="contacts mb-5">
    <div class="head_page bg">
      <div class="cub">
        <img src="https://violy.astroon.pro/assets/img/cub_four.png"/>
      </div>
      <div class="left_ele">
        <img src="https://violy.astroon.pro/assets/img/cub_three.png"/>
      </div>
      <div class="container title_h">
        <div class="block_title">
          <h1>This is an Contacts page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam ipsam <br> repudiandae nobis.
            Reprehenderit, inventore rem.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row contact p-0">
        <div class="col-md-6 col-sm-12 p-5">
          <div class="icos_bx">
            <div class="con_icos">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-pin-map-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
              </svg>
            </div>
            <div class="icos_txts">
              8 Delaware Lane<br>
              Greensboro, NC 27405
            </div>
          </div>
          <div class="icos_bx">
            <div class="con_icos">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-headset"
                   viewBox="0 0 16 16">
                <path
                    d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
              </svg>
            </div>
            <div class="icos_txts">
              +380634781377<br>
              +380990137781
            </div>
          </div>
          <div class="icos_bx">
            <div class="con_icos">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mailbox"
                   viewBox="0 0 16 16">
                <path
                    d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                <path
                    d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
              </svg>
            </div>
            <div class="icos_txts" @click="rand(50)">
              Studio@mail.com<br>
              Astroon.team@gmail.com
              {{ t }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 contact-img">
          <img src="https://violy.astroon.pro/assets/img/contacts_l.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      t: 0,
    }
  },
  mounted() {

  },
  methods: {

    rand(max) {
      this.t = Math.floor(Math.random() * max)
      console.log(this.t)
      console.log(this.$route.name)
    }
  }
}
</script>
<style scoped>

.bg {
  background: #040728;
}

.contact {
  background: white;
  margin: 0;
  padding: 0;
  margin-top: -10% !important;
  z-index: 1;
  border-radius: 12px;
  box-shadow: 0 0 40px rgb(0 0 0 / 10%);
  overflow: hidden;
}
.contact-img {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.contact-img img {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  -o-object-fit: cover;
  object-fit: cover;
}
.con_icos {
  height: 60px;
  width: 60px;
  background: #161A23;
  border-radius: 50%;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  float: left;
}

.con_icos svg {
  width: 25px;
  height: 25px;
}

.icos_bx {
  width: 100%;
  float: left;
  padding: 10px;
}

.icos_txts {
  width: auto;
  float: left;
  padding: 20px;
  font-size: 18px;
  padding-top: 5px;
}

</style>