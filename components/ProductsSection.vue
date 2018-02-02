<template>
  <div id="products">
    <div class="container">
      <h1>Продукты</h1>
      <div class="description-text">
        Мы создаем продукты так, чтобы сформировать лучшую среду для разработчиков и их проектов
      </div>

      <div class="products-container">
        <div class="products">
          <div class="product">
            <div class="product-icon">
              <img src="~/assets/images/group-4.png">
            </div>
            <h2>Infrastructure<br> as a Service</h2>
            <div class="product-price">
              <span class="light-gray-text">От </span>
              <span class="red-text">573 <span class="ruble-sm">&#8381;</span></span>
              <span class="light-gray-text"> /мес</span>
            </div>
            <div class="product-description">
              Виртуальные машины любой конфигурации.
            </div>
            <div class="bottom-row">
              <a href="iaas_product_page.html" class="btn btn-orange">Подробнее</a>
              <a href="configurator.html" class="orange-link">Создать</a>
            </div>
          </div>
          <div class="product">
            <div class="product-icon">
              <img src="~/assets/images/group-7.png">
            </div>
            <h2>Базы данных</h2>
            <div class="product-price">
              <span class="light-gray-text">От </span>
              <span class="red-text">1 728 <span class="ruble-sm">&#8381;</span></span>
              <span class="light-gray-text"> /мес</span>
            </div>
            <div class="product-description">
              Масштабируемый и производительный сервис баз данных для создания standalone хранилища.
            </div>
            <div class="bottom-row">
              <a href="database_product_page.html" class="btn btn-orange">Подробнее</a>
              <a href="configurator.html" class="orange-link">Создать</a>
            </div>
          </div>
          <div class="product">
            <div class="product-icon">
              <img src="~/assets/images/group-8.png">
            </div>
            <h2>Collaboration</h2>
            <div class="product-price">
              <span class="light-gray-text">От </span>
              <span class="red-text">888 <span class="ruble-sm">&#8381;</span></span>
              <span class="light-gray-text"> /мес</span>
            </div>
            <div class="product-description">
              Инструментарий для совместной работы над любыми проектами.
            </div>
            <div class="bottom-row">
              <a href="coming_soon_product_page.html" class="btn btn-orange">Подробнее</a>
              <a href="configurator.html" class="orange-link">Создать</a>
            </div>
          </div>
          <div class="product">
            <div class="product-icon">
              <img src="~/assets/images/group-12.png">
            </div>
            <h2>Web/CMS хостинг</h2>
            <div class="product-price">
              <span class="light-gray-text">От </span>
              <span class="red-text">678 <span class="ruble-sm">&#8381;</span></span>
              <span class="light-gray-text"> /мес</span>
            </div>
            <div class="product-description">
              Надежный веб-хостинг для вашего блога, корпоративного сайта или приложения.
            </div>
            <div class="bottom-row">
              <a href="web_cms_product_page.html" class="btn btn-orange">Подробнее</a>
              <a href="configurator.html" class="orange-link">Создать</a>
            </div>
          </div>
          <div class="product">
            <div class="product-icon">
              <img src="~/assets/images/group-10.png">
            </div>
            <h2>Разработка</h2>
            <div class="product-price">
              <span class="light-gray-text">От </span>
              <span class="red-text">888 <span class="ruble-sm">&#8381;</span></span>
              <span class="light-gray-text"> /мес</span>
            </div>
            <div class="product-description">
              Набор средств для разработки, тестирования и интеграции IT-продуктов.
            </div>
            <div class="bottom-row">
              <a href="development_product_page.html" class="btn btn-orange">Подробнее</a>
              <a href="configurator.html" class="orange-link">Создать</a>
            </div>
          </div>
          <div class="product">
            <div class="product-icon">
              <img src="~/assets/images/group-13.png">
            </div>
            <h2>Научные вычисления</h2>
            <div class="product-price">
              <span class="light-gray-text">От </span>
              <span class="red-text">3 651 <span class="ruble-sm">&#8381;</span></span>
              <span class="light-gray-text"> /мес</span>
            </div>
            <div class="product-description">
              Готовые платформы для аналитики и Больших Данных.
            </div>
            <div class="bottom-row">
              <a href="coming_soon_product_page.html" class="btn btn-orange">Подробнее</a>
              <a href="configurator.html" class="orange-link">Создать</a>
            </div>
          </div>
        </div>
        <div class="contact-us-btn">
          <div class="text">Вы не на нашли то, что искали?</div>
          <a href="#contact-us" class="btn btn-green btn-lg scroll-to">Написать нам</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      var client_w = document.body.clientWidth;

      if (client_w <= 767) {
        $('.products').slick({
          dots: true
        })
      }

      $("a[href^='#'].scroll-to").click(function(){
        var _href = $(this).attr("href");
        $('html, body').animate({scrollTop: $(_href).offset().top - 80 +"px"});
        return false;
      });
    }
  }
</script>

<style lang="scss">

  #products {
    padding: 60px 0 120px;

    .description-text {
      font-size: 22px;
      margin-bottom: 69px;
    }

    .products {
      display: flex;
      flex-wrap: wrap;
    }

    .products-container {
      position: relative;

      .product {
        width: 291px;
        height: 400px;
        border: 1px solid rgba(18, 63, 85, 0.1);
        padding: 30px 30px 75px;
        position: relative;
        cursor: pointer;
        margin-left: -1px;
        margin-bottom: -1px;

        :not(:first-child) {
          border-left: none;
        }


        .product-icon {
          margin-bottom: 30px;
        }

        .product-price {
          margin: 12px 0;
          font-family: Proxima_Nova_Bold, sans-serif;
        }

        .bottom-row {
          position: absolute;
          bottom: 30px;
          left: 30px;
          opacity: 0;
          transition: all 0.3s;

          a.btn {
            width: 130px;
            margin-right: 15px;
            padding: 7px 20px;
            color: #fff;
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

      .contact-us-btn {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 400px;
        width: 582px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .text {
          font-size: 22px;
          margin-bottom: 30px;
          text-align: center;

        }
      }
    }

    @media (max-width: 1199px) {
      .products {
        display: flex;
        justify-content: center;

      }

      .products-container {
        .contact-us-btn {
          display: none;
        }
      }
    }

    @media (max-width: 767px) {
      .products-container {
        .product {
          margin-bottom: 0;
          margin-left: 0;
        }
      }
    }


    @media (max-width: 375px) {
      padding: 10px 0 50px;

      .description-text {
        margin-bottom: 35px;
      }

      .products-container {
        .contact-us-btn {
          display: none;
        }
      }
    }

  }

</style>
