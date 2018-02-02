<template>
  <div id="top-landing-block">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="text">
            Создайте новый сервер <span class="strong-text">на Ваших условиях.</span><br>
            Настраивайте его возможности, не отставая от быстро меняющегося мира
          </div>
          <a href="configurator.html" class="btn btn-red btn-lg">Создать аккаунт</a>
        </div>
        <div class="col-lg-5 d-none d-md-block">
          <div class="img-block">
            <img src="~/assets/images/main-page-image.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

  #top-landing-block {
    padding: 120px 0 50px;

    .text {
      font-size: 32px;
      margin-bottom: 47px;
    }

    .img-block {
      margin-top: -30px;
      text-align: right;
      img {
        margin-left: auto;
        margin-right: -15px;
      }
    }

    button {
      margin-bottom: 30px;
    }

    @media (max-width: 375px) {
      padding: 30px 0 0;

      .text {
        font-size: 24px;
        margin-bottom: 42px;
      }

      .btn {
        width: 100%;
      }
    }

  }

</style>
