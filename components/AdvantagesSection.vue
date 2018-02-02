<template>
  <div id="why-choose-us">
    <div class="container">
      <div class="decoration-block-before d-none d-lg-block"></div>
      <div class="decoration-block-after d-none d-lg-block"></div>
      <h1>Преимущества</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="dignity">
            <div class="title">Быстрота</div>
            <div class="text">Исключительное быстродействие достигается за счет отсутствия «лишних деталей» и
              использования уникальной SDS.</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="dignity">
            <div class="title">Гибкость</div>
            <div class="text">Уникальные инструменты оркестрации и Cloud Management API позволяют создавать
              сложные прикладные сервисы за считанные часы и потом тиражировать их за минуты.</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="dignity">
            <div class="title">Отказоустойчивость</div>
            <div class="text">Возможность перемещения ВМ между несколькими ЦОД-ами обеспечивает максимальную защиту приложения и данных.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "~assets/scss/variables";

  #why-choose-us {
    padding: 90px 0;
    background-color: #f5f5f5;

    h1 {
      margin-bottom: 46px;
    }

    .container {
      position: relative;
    }

    .decoration-block-before {
      position: absolute;
      top: 10px;
      left: -70px;
      width: 8px;
      height: 100%;
      background-color: #fff;
      border-radius: 100px;
    }

    .decoration-block-after {
      position: absolute;
      top: 10px;
      right: -70px;
      width: 8px;
      height: 100%;
      background-color: #fff;
      border-radius: 100px;
    }

    .dignity {
      max-width: 300px;

      .title {
        font-size: 24px;
        font-family: Proxima_Nova_Bold, sans-serif;
        color: $orange-brand-color;
        margin-bottom: 12px;
      }
    }

    @media (max-width: 375px) {
      padding: 35px 0;

      h1 {
        margin-bottom: 26px;
      }

      .dignity {
        margin-bottom: 26px;
        max-width: 290px;
      }
    }
  }

</style>
