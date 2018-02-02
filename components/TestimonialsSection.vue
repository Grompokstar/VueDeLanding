<template>
  <div id="testimonials">
    <div class="container">
      <h1>Счастливые клиенты</h1>
      <div class="testimonial">
        <div class="text">
          «Перенос нашего сервиса на VDC Digital Energy прошел гораздо проще и увереннее, чем мы ожидали.
          Коллеги на каждом шаге следили за процессом и соблюдением стандартов. Теперь нам намного проще
          подстраивать производительность под растущие требования бизнеса, а наши затраты сократились.
          Планируем запуск следующих продуктов Digital Energy в будущем году»
        </div>
        <div class="author">
          <div class="name">
            Кирилл Будовский
          </div>
          <div class="divider"></div>
          <div class="company">FORapp</div>
        </div>
      </div>
      <!--<div class="controls">
        <div class="control-point active"></div>
        <div class="control-point"></div>
        <div class="control-point"></div>
      </div>-->

    </div>
  </div>
</template>

<style lang="scss">
  @import "~assets/scss/variables";

  #testimonials {
    padding: 90px 0 120px;
    border-bottom: 2px solid rgba(18,63,85, 0.1);

    h1 {
      margin-bottom: 35px;
    }

    .testimonial {
      max-width:  870px;

      .text {
        font-size: 22px;
        margin-bottom: 23px;
      }

      .author {
        display: flex;
        align-items: center;
        margin-bottom: 45px;

        .company {
          color: $green-brand-color;
        }

        .divider {
          width: 4px;
          height: 4px;
          border-radius: 2px;
          margin: 0 12px;
          background-color: rgba(18,63,85, 0.2);

        }
      }
    }

    .controls {
      display: flex;

      .control-point {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: rgba(18,63,85, 0.2);
        margin-right: 12px;

        &.active {
          background-color: #f8941d;
        }

      }
    }

    @media (max-width: 375px) {
      padding: 40px 0 10px;
    }
  }

</style>
