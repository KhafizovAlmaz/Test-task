<script setup>

</script>

<template>
    <div class="wrapper">
            <header class="header">
              <div class="header-line1">
                <div class="logo1">
                  <img src="./components/img/logo_welbex.svg" >
                </div>
      
                <div class="header-menu">
                  <a href="">Услуги</a>
                  <a href="">Виджеты</a>
                  <a href="">Интеграции</a>
                  <a href="">Кейсы</a>
                  <a href="">Сертификаты</a>
                </div>
      
                <div class="header-contacts">
                  <p>+7 555 555-55-55</p>
                  <a href=""><img src="./components/img/Vector.svg" alt=""></a>
                  <a href=""><img src="./components/img/viber.svg" alt=""></a>
                  <a href=""><img src="./components/img/whatsapp.svg" alt=""></a>
                </div>
              </div>
              <p class="header-info">
                крупный интегратор CRM <br> в Росcии и ещё 8 странах
              </p>
            </header>
            <main class="main">
              <div>
                <h1>Зарабатывайте <br/> больше <br> <span class="gradient">с WELBEX</span></h1>
                <p class="left">Развиваем и контролируем <br/> продажи за вас</p>
              </div>
              <div class="right">
                <p class="right-text">Вместе с <span class="gradient mobile-case">БЕСПЛАТНОЙ <br/> КОНСУЛЬТАЦИЕЙ</span> мы дарим:</p>
                
                <div class="table">
                  <div>
                    <p class="right-text"><d class="dash">—</d> ВИДЖЕТЫ</p>
                    <span >30 готовых <br> решений</span>
                  </div>
                  <div>
                    <p class="right-text"><d class="dash">—</d> DASHBOARD</p>
                    <span>с показателями <br> вашего бизнеса</span>
                  </div>
                  <div>
                    <p class="right-text"><d class="dash">—</d> SKYPE АУДИТ</p>
                    <span>отдела продаж <br> и CRM системы</span>
                  </div>
                  <div>
                    <p class="right-text"><d class="dash">—</d> 35 ДНЕЙ</p>
                    <span>использования <br> CRM</span>
                  </div>
                </div>
                
                <button>Получить консультацию</button>
              </div>
      
              <div class="purple-light1"></div>
              <div class="red-light1"></div>
              <div class="yellow-light"></div>
              <div class="noise"></div>
              <div class="glass"></div>
              <div class="yellow-ball"></div>
      
            </main>
            <footer>
              <div class="footer">
                <div class="about">
                  <h5>О компании</h5>
                  <p><a href="">Партнерская программа</a></p>
                  <a href="">Вакансии</a>
                </div>
                <div class="menu2">
                  <h5>Меню</h5>
                  <div class="list">
                    <div>
                      <ul>
                        <li>
                          <a href="">Расчёт стоимости</a>
                        </li>
                        <li>
                          <a href="">Услуги</a>
                        </li>
                        <li>
                          <a href="">Виджеты</a>
                        </li>
                        <li>
                          <a href="">Интеграции</a>
                        </li>
                        <li>
                          <a href="">Наши клиенты</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <a href="">Кейсы</a>
                        </li>
                        <li>
                          <a href="">Благодарственные письма</a>
                        </li>
                        <li>
                          <a href="">Сертификаты</a>
                        </li>
                        <li>
                          <a href="">Блог на Youtube</a>
                        </li>
                        <li>
                          <a href="">Вопрос/Ответы</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="contacts2">
                  <h5>
                    Контакты
                  </h5>
                  <p>+7 555 555-55-55</p>
                  <p>
                    <a href=""><img src="./components/img/Vector.svg" alt=""></a>
                  <a href=""><img src="./components/img/viber.svg" alt=""></a>
                  <a href=""><img src="./components/img/whatsapp.svg" alt=""></a>
                  </p>
                  <p>
                    Москва, Путевой проезд 3с1, к 902
                  </p>
                </div>
              </div>
              <p class="end-footer">
                ©WELBEX 2022. Все права защищены. <br>
                <a href="">Политика конфиденциальности</a>
              </p>
            </footer>
    </div>
    <div class="red-ball1"></div>
    <div class="red-ball2"></div>
    <div class="purple-light"></div>
    <div class="red-light"></div>
    <div class="purple-ball"></div>
</template>

<style lang="scss">
    @font-face {
  font-family: Inter;
  font-display: swap;
  src: url("./components/fonts/Inter-Bold.woff2") format("woff2"), url("./components/fonts/Inter-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}

  @font-face {
    font-family: Inter;
    font-display: swap;
    src: url("./components/fonts/Inter-Black.woff2") format("woff2"), url("./components/fonts/Inter-Black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: Montserrat;
    font-display: swap;
    src: url("./components/fonts/Montserrat-Light.woff2") format("woff2"), url("./components/fonts/Montserrat-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: Inter;
    font-display: swap;
    src: url("./components/fonts/Inter-Medium.woff2") format("woff2"), url("./components/fonts/Inter-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: Montserrat;
    font-display: swap;
    src: url("./components/fonts/Montserrat-Regular.woff2") format("woff2"), url("./components/fonts/Montserrat-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: Inter;
    font-display: swap;
    src: url("./components/fonts/Inter-Regular.woff2") format("woff2"), url("./components/fonts/Inter-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    border: 0;
  }

  a {
    text-decoration: none;
    color: #E4E5EA;
  }
  p {
    color: #E4E5EA;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  img {
    vertical-align: middle;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }

  html,
  body {
    font-family: 'Inter', sans-serif;
    height: 100%;
    color: rgb(255, 255, 255);
    width: 100%;
    overflow-x: hidden;
  }
  body {
    background-color: rgba(0, 0, 0, 0.968);
  }

  .wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    margin: 46px 10% 0;
  }
  .header {
    &-line1, &-menu, &-contacts {
      display: flex;
    justify-content: space-between;
    }
    &-menu {
      width: 40%;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
    &-contacts {
      width: 25%;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
    }
    &-info {
      margin-top: 10px;
      font-family: 'Montserrat';
      font-weight: 300;
      font-size: 10px;
      line-height: 12px;
      color: #E4E5EA;
    }
  }

  .main {
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 90px;
    h1 {
      font-weight: 400;
      font-size: 48px;
    }
  }

.footer {
  padding-top: 124px;
  display: flex;
  justify-content: space-between;
  
}

.table {
  margin: 40px 0 61px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2);
  grid-gap: 30px;
}


.left {
  margin-top: 30px;
  font-size: 18px;
  line-height: 22px;
}
.gradient {
  font-weight: 900;
  background: linear-gradient(92deg, #FCB045 27.14%, #FF3F78 121.36%), #E4E5EA;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.right {
  text-align: right;
  &-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }
}
  
.dash {
  visibility: hidden;
}

.table span {
  font-family: 'Montserrat';
  font-weight: 200;
  font-size: 16px;
  line-height: 20px;
}

button {
  width: 262px;
  height: 61px;
  background: #4077F3; 
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #E4E5EA;     
  &:hover {
    cursor: pointer;
  }
}

.list {
  display: flex;
  justify-content: space-between;
}

h5 {
  color: #656566;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 20px;
}

.contacts2 {
  text-align: right;
  p {
    margin-bottom: 20px;
  }
}

.menu2 {
  width: 40%;
  li {
    margin-bottom: 10px;
  }
}

.end-footer {
  margin-top: 31px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 12px;
  text-align: right;
  a {
    text-decoration: underline;
  }
}

.purple-light1, .red-light1, .yellow-light, .noise, .glass, .yellow-ball {
  position: absolute;
  top: -10000px;
}

.red-ball1 {
  border-radius: 50%;
position: absolute;
width: 28px;
height: 28px;
left: 851px;
top: 547px;
background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, rgba(212, 93, 93, 0.248) 59.67%, rgba(167, 49, 49, 0.264) 78.59%, rgba(130, 25, 25, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
filter: blur(2.5px);
filter: blur(2px);
}
.red-ball2 {
  border-radius: 50%;
  position: absolute;
width: 83px;
height: 83px;
left: 519px;
top: 83px;
background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
backdrop-filter: blur(2px);
}
.red-light {
  border-radius: 50%;
  position: absolute;
width: 311px;
height: 311px;
left: -102px;
top: 251px;

background: #961A1A;
opacity: 0.5;
filter: blur(196px);
}
.about p {
  margin-bottom: 10px;
}
.purple-light{
  border-radius: 50%;
  position: absolute;
width: 259px;
height: 259px;
left: 602px;
top: -154px;
background: #833AB4;
opacity: 0.5;
filter: blur(196px);
}
.purple-ball {
  border-radius: 50%;
  position: absolute;
  width: 60px;
  height: 60px;
  left: 790px;
  top: -2px;
  background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
  filter: blur(5px);
  filter: blur(2px);
}


@media screen and (orientation: portrait) and (min-device-width : 320px) and (max-device-width : 700px) {
  .logo1, .header-contacts, .header-info, .header-menu a:last-child {
    position: absolute;
    top: -200px;
  }
  .wrapper {
    margin: 20px 5%;
  }
  .header-menu {
    width: 100%;
    justify-content: space-around;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
  }
  .header {
    padding-bottom: 20px;
  }
  .main {
  padding-top: 40px;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20%;
  h1 {
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;  
    }
  }
  
  .right {
    padding-top: 45px;
    text-align: left;
    &-text {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
  }
  .mobile-case {
        text-transform: lowercase;
  }
  .table {
        margin-top: 20px;
        grid-template-rows: repeat(2, 30px);
  }
  .table span,  button{
        position: absolute;
        left: -500px;
  }
  .dash {
        visibility: visible;
        font-family: 'Montserrat';
        background: linear-gradient(92deg, #FCB045 27.14%, #FF3F78 121.36%), #E4E5EA;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
  }
  .footer {
        padding: 0;
        flex-direction: column;
  }
  .contacts2 {
    text-align: left;
    margin-bottom: 40px;
    p {
      margin: 0;
      &:last-child {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
      }
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
  h5 {
        margin-bottom:20px ;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
  }
  .menu2 {
    width: 100%;
  }
  .footer p, .menu2 li {
        padding-bottom: 10px;
  }
  .menu2, .about {
        margin-bottom: 30px;
  }
  .end-footer {
        text-align: left;
        margin-bottom: 60px;
  }
  .purple-light1 {
        position: absolute;
    width: 259px;
    height: 259px;
    left: 258px;
    top: 107px;

    background: #833AB4;
    opacity: 0.5;
    filter: blur(196px);
  }
  .red-light1 {
        position: absolute;
        width: 211px;
        height: 210px;
        left: -55px;
        top: 241px;

        background: #961A1A;
        opacity: 0.5;
        filter: blur(196px);
  }
  .yellow-light {
        position: absolute;
        width: 200px;
        height: 200px;
        left: -200px;
        top: 519px;
        background-color: #FCB045;
        opacity: 0.4;
        filter: blur(196px);
  }
  .noise {
        position: absolute;
        width: 100%;
        height: 388px;
        left: 35px;
        top: 35px;
        background: url(noise.svg);
        mix-blend-mode: overlay;
  }
  .glass {
        position: absolute;
        width: 100%;
        height: 388px;
        left: 35px;
        top: 35px;
        background: radial-gradient(238.53% 189.02% at 3.2% 3.49%, rgba(255, 246, 233, 0.1) 0%, rgba(26, 29, 35, 0.1) 26.62%, rgba(26, 29, 35, 0.1) 52.1%, rgba(26, 29, 35, 0.01) 70.17%, rgba(26, 29, 35, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        filter: blur(7.5px);
  }
  .red-ball1 {
        position: absolute;
        width: 43px;
        height: 43px;
        left: 29px;
        top: 402px;
        background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
        filter: blur(2px);
  }
  .yellow-ball {
        position: absolute;
        width: 25px;
        height: 25px;
        left: 46px;
        top: 629px;
        transform: rotate(90deg);
  }
  .purple-ball {
        position: absolute;
        width: 40px;
        height: 40px;
        left: 296px;
        top: 236px;
        background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
        filter: blur(5px);
        filter: blur(2px);
  }

}

</style>
