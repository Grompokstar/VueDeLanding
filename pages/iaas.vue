<template>
  <div>
    <div id="top-block-product-page">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="text">
              <span class="strong-text">IaaS</span> — вычислительная инфраструктура, которая предоставляется
              клиентам для&nbsp;развертывания и&nbsp;запуска <span class="strong-text">собственных программных решений.</span>
            </div>
            <a href="configurator.html" class="btn btn-red btn-lg">Заказать</a>
          </div>
          <div class="col-lg-4 d-none d-md-block">
            <div class="img-block">
              <img src="images/group-4-product-page.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="product-description">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="description-item">
              <div class="count odd">1</div>
              <div class="description-text">
                <h2>Виртуальные серверы</h2>
                <p>Настраивайте архитектуру виртуального сервера под решение конкретных бизнес-задач.
                  Мы предоставляем возможность выбора операционной системы, неограниченный объем дискового
                  пространства инстанса, необходимое количество процессоров и объем памяти. Потенциал
                  кастомизации виртуальной машины позволяет оптимально использовать ресурсы при высоком
                  уровне производительности и надежности всей системы.</p>
                <div><a href="virtual_server_page.html" class="orange-link">Подробнее</a></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-9">
            <div class="description-item">
              <div class="count even">2</div>
              <div class="description-text">
                <h2>Хранилище данных</h2>
                <p>Используйте наши облачные технологии для безопасного хранения и бесперебойного доступа к своим
                  данным. Наша программно-определяемая система хранения данных легко интегрируется в любую
                  сетевую инфраструктуру и взаимодействует с системой серверной виртуализации. Облачное
                  хранилище обладает устойчивостью к сбоям за счет автоматического распределения данных
                  по территориально разнесенным зонам доступности. Вы платите только за выделенный полезный объем.</p>
                <div><a href="storage_page.html" class="orange-link">Подробнее</a></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-9">
            <div class="description-item">
              <div class="count odd">3</div>
              <div class="description-text">
                <h2>Управление сетевыми ресурсами</h2>
                <p>Объединяйте свои сетевые ресурсы в единую среду для управления виртуальными машинами,
                  локальными сетями и приложениями. Наша инфраструктура позволяет использовать частные и
                  публичные IP-адреса, формировать иерархию доступов, создавать VPN-подключения, а также
                  реализовывать гибридные облачные сценарии</p>
                <div><a href="network_resource_management.html" class="orange-link">Подробнее</a></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-9">
            <div class="description-item">
              <div class="count even">4</div>
              <div class="description-text">
                <h2>Миграция</h2>
                <p>Осуществляйте миграцию приложений в виртуальное пространство для повышения надежности
                  и оптимизации процесса обработки информации. Наш сервис позволяет автоматически перенести
                  ваши приложения на виртуальные серверы в нашем облаке, причем в большинстве случаев
                  этот перенос возможен без прерывания работы.</p>
                <div><a href="migration_page.html" class="orange-link">Подробнее</a></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-9">
            <div class="description-item">
              <div class="count odd">5</div>
              <div class="description-text">
                <h2>Резервное копирование</h2>
                <p>Запустите процесс регулярного копирования файлов с виртуальных серверов в облачное
                  резервное хранилище. Наш сервис разработан для автономного хранения и защиты ваших данных,
                  что позволяет избежать потери информации из-за системных ошибок или несанкционированных
                  действий. Мы оптимизировали процесс и скорость передачи данных между локальными серверами
                  и облачными хранилищами, чтобы процесс создания и восстановления резервных копий был
                  быстрым и удобным.</p>
                <div><a href="backup_page.html" class="orange-link">Подробнее</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <products-section/>
    <contact-us-section/>
  </div>
</template>

<script>
import ContactUsSection from '~/components/ContactUsSection.vue';
import ProductsSection from '~/components/ProductsSection.vue';

export default {
  components: {
    ContactUsSection,
    ProductsSection
  }
}
</script>

<style lang="scss">
  #top-block-product-page {
    padding: 120px 0;

    .text {
      font-size: 32px;
      margin-bottom: 47px;
    }

    .text-md {
      font-size: 22px;
      margin-bottom: 45px;
    }

    .img-block {
      margin-top: -15px;
      text-align: right;

      img {
        margin-left: auto;
      }
    }

    .img-block-secondary-product {
      margin-top: 60px;
      text-align: right;

      img {
        margin-left: auto;
      }
    }

    button {
      margin-bottom: 30px;
    }

    .secondary-product-title {
      h2 {
        font-size: 36px;
        margin-bottom: 24px;
      }
    }

    .back-btn {
      cursor: pointer;
      img {
        position: relative;
        top: -1px;
        left: -5px;
      }
    }

    @media (max-width: 375px) {
      padding: 30px 0;

      .text {
        font-size: 24px;
      }

      .btn {
        width: 100%;
      }

      .back-btn {
        margin-bottom: 30px !important;
      }

      .secondary-product-title {
        h2 {
          font-size: 26px;
          margin-bottom: 24px;
        }
      }

      .text-md {
        font-size: 20px;
      }
    }

  }

  #product-description {
    background-color: #f5f5f5;
    padding: 100px 0 114px;

    .description-item {
      display: flex;
      margin-bottom: 90px;

      .count {
        font-size: 144px;
        line-height: 115px;
        font-family: Proxima_Nova_Bold, sans-serif;
        color: #e0ecf1;
        margin-right: 40px;

        &.odd {
          color: #e0ecf1;
        }

        &.even {
          color: #d5f4f2;
        }
      }

      .description-text {
        h2 {
          margin-bottom: 16px;
        }
      }
    }

    @media(max-width: 375px) {
      padding: 50px 0 10px;

      .description-item {
        margin-bottom: 50px;

        .count {
          font-size: 90px;
          margin-right: 20px;
        }
      }

    }

  }
</style>
