<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg bg-white">
      <nuxt-link class="navbar-brand mr-7" to="/"><img  width="244" class="main-logo" src="~assets/images/de-bs-logo-n.svg"></nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">
          <title>Menu</title>
          <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path>
        </svg>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Продукты
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="iaas_product_page.html">IaaS</a>
              <a class="dropdown-item" href="database_product_page.html">Базы данных</a>
              <a class="dropdown-item" href="coming_soon_product_page.html">Collaboration</a>
              <a class="dropdown-item" href="web_cms_product_page.html">Web/CMS хостинг</a>
              <a class="dropdown-item" href="development_product_page.html">Разработка</a>
              <a class="dropdown-item" href="coming_soon_product_page.html">Научные вычисления</a>
            </div>
          </li>
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/pricing">Цены</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/support">Поддержка</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">О компании</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
  @import "~assets/scss/variables";

  #header {
    border-bottom: 1px solid rgba(18, 63, 85, 0.1);
    font-family: Proxima_Nova_Semibold, sans-serif;
    font-size: 20px;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background-color: #fff;

    .navbar {
      .nav-item {
        margin: 0 10px;



        a {
          color: $font-color;

          &:hover {
            color: #247fac;
          }
        }

        &.show {
          .nav-link {
            color: $orange-brand-color;
          }

          .dropdown-toggle::after {
            color: $orange-brand-color;;
          }
        }
      }
    }

    .btn-sign-in {
      font-size: 20px;
      padding: 10px 50px;
    }

    .navbar-toggler-icon {
      color: $font-color;
    }

    .navbar-toggle {
      color: $font-color;
    }

    .dropdown-menu {
      box-shadow: 0 0 20px 0 rgba(18, 63, 85, 0.1);
      border: none;
      left: -85px;

      .dropdown-item {
        font-size: 20px;
        padding: 8px 30px;

        &:hover {
          background-color: inherit;
        }
      }
    }

    .dropdown-toggle::after {
      color: $red-brand-color;
    }
  }

  @media (max-width: 765px) {
    a.navbar-brand {
      margin-right: 30px !important;
    }
  }


  @media (max-width: 375px) {
    a.navbar-brand {
      margin-right: 30px !important;
    }

    .main-logo {
      width: 182px;
    }
  }

</style>
