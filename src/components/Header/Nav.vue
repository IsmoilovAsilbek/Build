<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const open = ref(false)
const scrolled = ref(false)

const links = [
  { text: 'About Us', href: '#about' },
  { text: 'Courses', href: '#courses' },
  { text: 'Pricing', href: '#pricing' },
  { text: 'Reviews', href: '#reviews' },
  { text: 'Contacts', href: '#contacts' },
]

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav class="nav" :class="{ 'nav--scrolled': scrolled, 'nav--open': open }">
    <div class="nav-box container">
      <a href="#" class="nav-box__logo">
        <img src="../../assets/image/1.svg" alt="Createx" class="nav-box__image" />
      </a>

      <button class="nav-box__burger" :class="{ 'is-active': open }" aria-label="Menu" @click="open = !open">
        <span></span><span></span><span></span>
      </button>

      <div class="nav-box__menu" :class="{ 'is-open': open }">
        <ul class="nav-box__list">
          <li v-for="link in links" :key="link.text">
            <a :href="link.href" class="nav-list__link" @click="open = false">{{ link.text }}</a>
          </li>
        </ul>

        <div class="nav-box__category">
          <a href="#contacts" class="nav-category__title" @click="open = false">Get consultation</a>
          <div class="nav-category__box">
            <img src="../../assets/image/2.svg" alt="user" class="nav-box__img" />
            <p class="nav-box__text">Log in / Register</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color .3s ease, box-shadow .3s ease;
  animation: nav-in .8s ease both;
}

.nav--scrolled,
.nav--open {
  background-color: rgba(253, 221, 207, .96);
  backdrop-filter: blur(8px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, .08);
}

.nav-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  transition: padding .3s ease;
}

.nav--scrolled .nav-box { padding-top: 14px; padding-bottom: 14px; }

.nav-box__menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-left: 60px;
}

.nav-box__list {
  display: flex;
  gap: 40px;
  align-items: center;
}

.nav-list__link {
  position: relative;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
}

.nav-list__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: #f75e05;
  transition: width .3s ease;
}

.nav-list__link:hover::after { width: 100%; }

.nav-box__category {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-category__title {
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  line-height: 48px;
  letter-spacing: 0.03em;
  color: #fff;
  background: linear-gradient(45deg, #ff3f3a 0%, #f75e05 100%);
  border-radius: 10px;
  padding: 0 15px;
  transition: transform .3s ease, box-shadow .3s ease;
}

.nav-category__title:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(247, 94, 5, .35);
}

.nav-category__box {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.nav-box__img { width: 30px; height: auto; }
.nav-box__text { font-weight: 700; font-size: 14px; white-space: nowrap; }

.nav-box__burger {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.nav-box__burger span {
  width: 28px;
  height: 3px;
  border-radius: 2px;
  background: #1a1a1a;
  transition: transform .3s ease, opacity .3s ease;
}

.nav-box__burger.is-active span:nth-child(1) { transform: translateY(9px) rotate(45deg); }
.nav-box__burger.is-active span:nth-child(2) { opacity: 0; }
.nav-box__burger.is-active span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

@keyframes nav-in {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: none; }
}

@media (max-width: 1024px) {
  .nav-box__menu { margin-left: 24px; }
  .nav-box__list { gap: 22px; }
  .nav-box__category { gap: 20px; }
}

@media (max-width: 900px) {
  .nav-box__burger { display: flex; }

  .nav-box__menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    gap: 28px;
    padding: 0 20px;
    max-height: 0;
    overflow: hidden;
    text-align: center;
    background-color: rgba(253, 221, 207, .98);
    transition: max-height .4s ease, padding .4s ease;
  }

  .nav-box__menu.is-open {
    max-height: 520px;
    padding: 24px 20px 32px;
  }

  .nav-box__list {
    flex-direction: column;
    gap: 20px;
  }

  .nav-box__category {
    flex-direction: column;
    gap: 20px;
  }
}
</style>