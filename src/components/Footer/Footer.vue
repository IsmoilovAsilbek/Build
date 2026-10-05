<script setup>
const columns = [
  { title: 'Company', links: [['About Us', '#about'], ['Courses', '#courses'], ['Pricing', '#pricing'], ['Reviews', '#reviews']] },
  { title: 'Support', links: [['FAQ', '#contacts'], ['Contacts', '#contacts'], ['Terms of use', '#'], ['Privacy policy', '#']] },
]
const year = new Date().getFullYear()
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <footer class="footer">
    <div class="footer-box container">
      <div class="footer-box__about">
        <a href="#" class="footer-about__logo">Createx</a>
        <p class="footer-about__text">Online courses with real tutors, practice tasks and certificates. Learn what you love at your own pace.</p>
        <div class="footer-about__social">
          <a href="#" aria-label="Telegram">TG</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="YouTube">YT</a>
        </div>
      </div>

      <div v-for="col in columns" :key="col.title" class="footer-box__col">
        <h3 class="footer-col__title">{{ col.title }}</h3>
        <ul class="footer-col__list">
          <li v-for="l in col.links" :key="l[0]"><a :href="l[1]" class="footer-col__link">{{ l[0] }}</a></li>
        </ul>
      </div>

      <div class="footer-box__col">
        <h3 class="footer-col__title">Contacts</h3>
        <ul class="footer-col__list">
          <li class="footer-col__link">+998 90 123 45 67</li>
          <li class="footer-col__link">hello@createx.uz</li>
          <li class="footer-col__link">Tashkent, Uzbekistan</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom container">
      <p>© {{ year }} Createx. All rights reserved.</p>
      <button class="footer-bottom__top" aria-label="Back to top" @click="toTop">↑</button>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: #1b1b1f; color: #c9c9d1; padding-top: 80px; }

.footer-box {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.3fr;
  gap: 50px;
  padding-bottom: 60px;
}

.footer-about__logo { font-size: 30px; font-weight: 900; color: #fff; }
.footer-about__logo::first-letter { color: #f75e05; }
.footer-about__text { margin: 18px 0 24px; line-height: 165%; max-width: 340px; font-size: 15px; }

.footer-about__social { display: flex; gap: 12px; }

.footer-about__social a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background: #2b2b31;
  transition: background .3s ease, transform .3s ease;
}

.footer-about__social a:hover { background: linear-gradient(45deg, #ff3f3a, #f75e05); transform: translateY(-4px); }

.footer-col__title { color: #fff; font-size: 18px; font-weight: 700; margin-bottom: 22px; }
.footer-col__list { display: grid; gap: 14px; }
.footer-col__link { font-size: 15px; transition: color .3s ease, padding-left .3s ease; }
a.footer-col__link:hover { color: #f75e05; padding-left: 6px; }

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid #2b2b31;
  font-size: 14px;
}

.footer-bottom__top {
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  background: linear-gradient(45deg, #ff3f3a, #f75e05);
  transition: transform .3s ease;
}

.footer-bottom__top:hover { transform: translateY(-5px); }

@media (max-width: 900px) {
  .footer-box { grid-template-columns: 1fr 1fr; }
  .footer-box__about { grid-column: 1 / -1; }
}

@media (max-width: 600px) {
  .footer { text-align: center; }
  .footer-box { grid-template-columns: 1fr; gap: 36px; }
  .footer-about__text { margin-left: auto; margin-right: auto; }
  .footer-about__social { justify-content: center; }
  .footer-bottom { flex-direction: column; }
}
</style>