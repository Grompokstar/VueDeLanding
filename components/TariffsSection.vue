<template>
  <div id="tariffs">
    <div class="container">
      <div class="tariffs-slider responsive">
        <div class="tariff-card">
          <div class="price">
            <div class="gray-circle"></div>
            <span class="red-text">6 817 <span class="ruble">&#8381;</span></span> <span class="light-gray-text">/мес</span>
          </div>
          <div class="settings">
            <div class="setting-item fast-cpu" data-value="8">8 CPU</div>
            <div class="setting-item fast-ram" data-value="16">16 GB RAM</div>
            <div class="setting-item fast-disk-size" data-value="20">20 GB SSD</div>
          </div>
          <div class="description">
            Оптимальный виртуальный сервер для корпоративного сайта
          </div>
          <div class="bottom-row justify-content-center">
            <a href="configurator.html" class="btn btn-orange order-tariff">Заказать</a>
            <!--<a href="#" class="orange-link">Создать</a>-->
          </div>
        </div><div class="tariff-card">
          <div class="price">
            <div class="gray-circle"></div>
            <span class="red-text">4 000 <span class="ruble">&#8381;</span></span> <span class="light-gray-text">/мес</span>
          </div>
          <div class="settings">
            <div class="setting-item fast-cpu" data-value="4">4 CPU</div>
            <div class="setting-item fast-ram" data-value="8">8 GB RAM</div>
            <div class="setting-item fast-disk-size" data-value="20">20 GB SSD</div>
          </div>
          <div class="description">
            Конфигурация для нагруженных Баз Данных с SSD дисками
          </div>
          <div class="bottom-row justify-content-center">
            <a href="configurator.html" class="btn btn-orange order-tariff">Заказать</a>
            <!--<a href="#" class="orange-link">Создать</a>-->
          </div>
        </div><div class="tariff-card">
          <div class="price">
            <div class="gray-circle"></div>
            <span class="red-text">888 <span class="ruble">&#8381;</span></span> <span class="light-gray-text">/мес</span>
          </div>
          <div class="settings">
            <div class="setting-item fast-cpu" data-value="1">1 CPU</div>
            <div class="setting-item fast-ram" data-value="2">2 GB RAM</div>
            <div class="setting-item fast-disk-size" data-value="10">10 GB SSD</div>
          </div>
          <div class="description">
            Базовый элемент для постройки среды разработки и тестирования
          </div>
          <div class="bottom-row justify-content-center">
            <a href="configurator.html" class="btn btn-orange order-tariff">Заказать</a>
            <!--<a href="#" class="orange-link">Создать</a>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      $('.tariffs-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      });
    }
  }
</script>

<style lang="scss">

  #tariffs {
    padding: 50px 0;

    .slick-slide {
      margin: 15px;
    }

    .tariff-card {
      width: 370px;
      height: 330px;
      border: 1px solid rgba(18, 63, 85, 0.1);
      padding: 30px;
      cursor: pointer;
      border-radius: 3px;

      display: flex !important;
      flex-direction: column;
      justify-content: space-between;

      .price {
        position: relative;
        font-size: 24px;
        font-family: Proxima_Nova_Bold, sans-serif;

        .gray-circle {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #f5f5f5;
        }

        span {
          position: relative;
          display: inline-block;
        }

        .red-text {
          padding-top: 15px;
          padding-left: 20px;
        }
      }

      .settings {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-family: Proxima_Nova_Bold, sans-serif;
      }

      .description {
        padding-right: 50px;
      }

      .bottom-row {
        display: flex;
        align-items: center;
        opacity: 0;
        transition: all 0.3s;

        a.btn {
          width: 150px;
          //margin-right: 30px;
          padding: 7px 30px;
        }
      }

      &:hover {
        box-shadow: 0 0 20px 0 rgba(18, 63, 85, 0.1);
        border-color: #fff;

        .bottom-row {
          opacity: 1;
        }
      }
    }

    @media (min-width: 1200px) {
      .container {
        max-width: 1200px;
        padding: 0;
      }
    }

    @media (max-width: 375px) {
      padding: 50px 0 0;
    }
  }

</style>
