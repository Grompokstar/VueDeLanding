<template>
  <div id="contact-us">
    <div class="container">
      <h1>Написать нам</h1>
      <div class="row">
        <div class="col-lg-8">
          <form id="contact-us-form">
            <div class="row">
              <div class="col-md-4 mb-3">
                <input class="form-control" type="text" name="name" placeholder="Имя">
              </div>
              <div class="col-md-4 mb-3">
                <input class="form-control" type="text" name="phone" placeholder="Телефон">
              </div>
              <div class="col-md-4 mb-3">
                <input class="form-control" type="text" name="email" placeholder="E-mail">
              </div>
            </div>
            <div class="row mt-3 mb-6">
              <div class="col-12">
                <textarea  class="form-control" name="comment" placeholder="Комментарий" rows="6"></textarea>
              </div>
            </div>
            <button class="btn btn-orange contact-us-btn">Отправить</button>
            <div class="success-send-text send-text mt-2">Ваше сообщение успешно отправлено.</div>
            <div class="error-send-text send-text mt-2">Не удалось отправить сообщение. Попробуйте снова.</div>
          </form>
        </div>

        <div class="col-lg-4 text-right contacts">
          <div class="address">123022, Москва<br> ул. Рочдельская 15, стр. 15<br> +7 499 649 09 90</div>
          <div class="mail"><a href="mailto:info@digitalenergy.online">info@digitalenergy.online</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      var form = $('#contact-us-form');

      form.validate({
        rules: {
          email: {
            required: true,
            email: true
          },
          comment: {
            required: true
          },
          phone: {
            digits: true
          }
        },
        messages: {
          email: {
            required: 'Поле обязательно к заполнению',
            email: 'Введите валидный E-mail'
          },
          comment: {
            required: 'Поле обязательно к заполнению'
          },
          phone: {
            digits: 'Введите только цифры'
          }
        }
      });

      $('.contact-us-btn').on('click', function(e) {
        e.preventDefault();

        $('.send-text').hide();

        var isValid = form.valid(),
          name, email, phone, comment;

        if (isValid) {
          name = form.find('input[name="name"]').val();
          email = form.find('input[name="email"]').val();
          phone = form.find('input[name="phone"]').val();
          comment = form.find('textarea[name="comment"]').val();

          var requestData = JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            comment: comment
          });

          $.ajax({
            type: "POST",
            url: "/api/landing/tickets",
            data: requestData,
            contentType:"application/json; charset=utf-8",
            dataType:"json",

            success: function(response){
              $('.success-send-text').show();

              form.find('input[name="name"]').val('');
              form.find('input[name="email"]').val('');
              form.find('input[name="phone"]').val('');
              form.find('textarea[name="comment"]').val('');

            },
            error: function(jqXHR) {
              console.log(jqXHR);
              $('.error-send-text').show();
            }
          });
        }

      })
    }
  }
</script>

<style lang="scss">
  #contact-us {
    padding: 90px 0 160px;

    h1 {
      margin-bottom: 34px;
    }

    textarea {
      resize: none;
    }

    .contacts {
      font-size: 22px;
      margin-top: 5px;
    }

    button {
      width: 170px;
    }

    @media (max-width: 375px) {
      padding: 40px 0 60px;

      button {
        width: 100%;
        margin-bottom: 65px;
      }

      #contact-us-form .row {
        margin-bottom: 30px !important;

        &:first-child {
          margin-bottom: 0 !important;
        }

        &.mt-3 {
          margin-top: 0!important;
        }
      }

      .contacts {
        text-align: left !important;
      }
    }
  }

</style>
