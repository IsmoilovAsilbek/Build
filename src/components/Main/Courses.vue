<script setup>
import { ref, computed } from 'vue'

const tabs = ['All', 'Marketing', 'Design', 'Management', 'Development']
const active = ref('All')

const courses = [
  { title: 'The Ultimate Google Ads Training Course', cat: 'Marketing', author: 'Jerome Bell', price: 100, lessons: 24, hue: 8 },
  { title: 'Prototyping from A to Z: best practices', cat: 'Design', author: 'Marvin McKinney', price: 150, lessons: 18, hue: 330 },
  { title: 'Business Analyst: working with a client', cat: 'Management', author: 'Leslie Alexander', price: 120, lessons: 20, hue: 30 },
  { title: 'Vue 3 from zero to production', cat: 'Development', author: 'Jenny Wilson', price: 180, lessons: 32, hue: 150 },
  { title: 'Social Media Marketing Masterclass', cat: 'Marketing', author: 'Kathryn Murphy', price: 90, lessons: 16, hue: 20 },
  { title: 'UI/UX Design: from idea to interface', cat: 'Design', author: 'Cody Fisher', price: 140, lessons: 28, hue: 280 },
]

const filtered = computed(() => (active.value === 'All' ? courses : courses.filter((c) => c.cat === active.value)))
</script>

<template>
  <section id="courses" class="courses section">
    <div class="courses-box container">
      <div class="courses-box__top">
        <div v-reveal class="courses-box__ready">
          <h2 class="courses-ready__one">Ready to learn?</h2>
          <h2 class="courses-ready__two">Featured Courses</h2>
        </div>
        <a v-reveal href="#pricing" class="btn courses-box__btn">View all courses</a>
      </div>

      <div v-reveal class="courses-box__tabs">
        <button v-for="t in tabs" :key="t" class="courses-tab" :class="{ 'is-active': active === t }" @click="active = t">
          {{ t }}
        </button>
      </div>

      <TransitionGroup name="card" tag="div" class="courses-box-category">
        <article v-for="c in filtered" :key="c.title" class="courses-category__one">
          <div
              class="courses-one__thumb"
              :style="{ background: `linear-gradient(135deg, hsl(${c.hue} 90% 62%), hsl(${c.hue + 25} 90% 52%))` }"
          >
            <span class="courses-one__badge">{{ c.cat }}</span>
            <span class="courses-one__letter">{{ c.cat[0] }}</span>
          </div>
          <div class="courses-one__body">
            <h3 class="courses-one__title">{{ c.title }}</h3>
            <p class="courses-one__meta">{{ c.lessons }} lessons · by {{ c.author }}</p>
            <div class="courses-one__foot">
              <span class="courses-one__price">${{ c.price }}</span>
              <a href="#contacts" class="courses-one__link">Enroll →</a>
            </div>
          </div>
        </article>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.courses { background: #fff7f3; }

.courses-box__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 32px;
}

.courses-ready__one {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #f75e05;
}

.courses-ready__two { font-weight: 900; font-size: 46px; line-height: 130%; }

.courses-box__btn { min-width: 190px; }

.courses-box__tabs { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 36px; }

.courses-tab {
  border: 2px solid #f3c6b3;
  background: transparent;
  border-radius: 30px;
  padding: 8px 22px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all .3s ease;
}

.courses-tab:hover { border-color: #f75e05; }
.courses-tab.is-active { background: linear-gradient(45deg, #ff3f3a, #f75e05); border-color: transparent; color: #fff; }

.courses-box-category {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  position: relative;
}

.courses-category__one {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, .06);
  transition: transform .4s ease, box-shadow .4s ease;
}

.courses-category__one:hover { transform: translateY(-10px); box-shadow: 0 18px 40px rgba(247, 94, 5, .22); }

.courses-one__thumb {
  position: relative;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.courses-one__letter {
  font-size: 110px;
  font-weight: 900;
  color: rgba(255, 255, 255, .35);
  transition: transform .5s ease;
}

.courses-category__one:hover .courses-one__letter { transform: scale(1.25) rotate(-6deg); }

.courses-one__badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: #fff;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 700;
}

.courses-one__body { padding: 22px; }
.courses-one__title { font-size: 18px; font-weight: 700; line-height: 140%; min-height: 50px; }
.courses-one__meta { font-size: 14px; color: #5d5d66; margin-top: 10px; }

.courses-one__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #f1e3dc;
}

.courses-one__price { font-size: 22px; font-weight: 900; color: #f75e05; }
.courses-one__link { font-weight: 700; font-size: 14px; transition: letter-spacing .3s ease, color .3s ease; }
.courses-one__link:hover { letter-spacing: .06em; color: #f75e05; }

.card-enter-active, .card-leave-active { transition: all .4s ease; }
.card-enter-from, .card-leave-to { opacity: 0; transform: scale(.9); }
.card-leave-active { position: absolute; }

@media (max-width: 1024px) {
  .courses-box-category { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 700px) {
  .courses-box__top { flex-direction: column; text-align: center; }
  .courses-ready__two { font-size: 32px; }
  .courses-box__tabs { justify-content: center; }
  .courses-box-category { grid-template-columns: 1fr; }
  .card-leave-active { position: static; }
}
</style>