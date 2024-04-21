<template>
  <div class="container-fluid bg p-0">
    <div class="container top-nav p-3">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 d-flex justify-content-md-start left_nav">
            <span class="me-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
          <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
              FAQ
            </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-fill"
                 viewBox="0 0 16 16">
          <path
              d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z"/>
        </svg>
            184 Main Collins Street
        </span>
        </div>

        <div class="col-md-6 col-sm-12 col-xs-12 d-flex justify-content-md-end right_nav">
            <span class="me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-cursor-fill" viewBox="0 0 16 16">
            <path
                d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
          </svg>
          info.wdgurus.co.uk
            </span>
          <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-telephone" viewBox="0 0 16 16">
              <path
                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>444 77 0000
            </span>
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
  background: black;
}

.top-nav span {
  color: #fff;
  font-size: 13px;
}

.top-nav span svg {
  width: 13px;
  height: 13px;
  margin-right: 5px;
}

@media screen and (max-width: 540px) {
  .top-nav {
    text-align: center;
  }

  .top-nav .left_nav, .top-nav .right_nav {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
}

@media screen and (max-width: 720px) {
  .top-nav .left_nav span, .top-nav .right_nav span {
    margin-bottom: 5px;
  }
}
</style>