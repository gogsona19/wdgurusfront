<template>
  <div class="footer">
    <div class="container">
      <div class="brend">
        <div class="logo"><img src="../assets/img/logo_vio.svg">VioStudio</div>
        <p>Address : 999 White St</p>
        <p>Phone Number : + (888) 123-4567</p>
        <p>Email : admin@mail.com</p>
      </div>
      <div class="nav_f col-lg-12 col-12"><span>Copyright © 2019 Astroon.</span></div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.footer{
  background: #161A23;
  padding-top: 50px;
  padding-bottom: 40px;
}
.brend {
  display: -webkit-box;
  display: flex;
  border-radius: 15px;
  text-align: center;
  margin: 0 auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.footer .logo {
  padding-bottom: 20px;
  margin: 0 auto;
  text-decoration: none;
  color: #ffffff;
}
.logo img {
  width: 55px;
  margin-right: 10px;
}
.nav_f span {
  padding-top: 20px;
  margin-top: 50px;
  text-align: center;
  color: #8A8A8A;
  display: block;
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.footer p {
  color: #8A8A8A;
}
</style>