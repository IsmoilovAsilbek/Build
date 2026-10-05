<script setup>
const list = [
  'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
  'Vulputate placerat amet pulvinar lorem nisl.',
  'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
  'Etiam duis lobortis in fames ultrices commodo nibh.',
  'Tincidunt sagittis neque sem ac eget.',
  'Ultricies amet justo et eget quisque purus vulputate dapibus tortor.',
]
</script>

<template>
  <section id="about" class="category section">
    <div class="category-box container">
      <div v-reveal class="category-box__left">
        <img class="category-left__img" src="@/assets/image/createx1.svg" alt="Createx" />
      </div>
      <div class="category-box__right">
        <div v-reveal class="category-right__box">
          <h2 class="category-box__title">Who we are</h2>
          <h2 class="category-box__titles">Why Createx?</h2>
        </div>
        <ul class="category-right__items">
          <li v-for="(item, i) in list" :key="i" v-reveal="i * 90" class="category-right__list">
            <img src="@/assets/image/category1.svg" alt="" class="category-list__icon" />
            <p class="category-list__text">{{ item }}</p>
          </li>
        </ul>
        <a v-reveal="300" href="#courses" class="btn category-right__btn">More about us</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.category-box {
  display: flex;
  align-items: center;
  gap: 80px;
}

.category-box__left { flex: 0 0 auto; }

.category-left__img {
  width: 600px;
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  transition: transform .6s ease;
}

.category-box__left:hover .category-left__img { transform: scale(1.03) rotate(-1deg); }

.category-box__right { flex: 1; }

.category-box__title {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #f75e05;
}

.category-box__titles {
  font-weight: 700;
  font-size: 40px;
  line-height: 130%;
  margin-top: 10px;
}

.category-right__items { margin-top: 24px; }

.category-right__list {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-top: 22px;
  max-width: 440px;
}

.category-list__icon { flex: 0 0 auto; margin-top: 3px; }
.category-list__text { font-size: 16px; line-height: 150%; }

.category-right__btn { margin-top: 40px; min-width: 190px; }

@media (max-width: 1024px) {
  .category-box { gap: 40px; }
}

@media (max-width: 900px) {
  .category-box { flex-direction: column; text-align: center; }
  .category-box__right { display: flex; flex-direction: column; align-items: center; }
  .category-right__list { text-align: left; }
  .category-box__titles { font-size: 30px; }
}
</style>