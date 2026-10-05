<script setup>
import { ref, onMounted } from 'vue'

const stats = ref([
  { target: 1200, value: 0, text: 'Students graduated' },
  { target: 84, value: 0, text: 'Completed courses' },
  { target: 16, value: 0, text: 'Qualified tutors' },
  { target: 5, value: 0, text: 'Years of experience' },
])

onMounted(() => {
  const duration = 1800
  const start = performance.now()
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1)
    const ease = 1 - Math.pow(1 - p, 3)
    stats.value.forEach((s) => (s.value = Math.round(s.target * ease)))
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
})
</script>

<template>
  <div class="over">
    <div class="over-box container">
      <div class="over-box__left">
        <div class="over-left__play">
          <img src="../../assets/image/3.svg" alt="play" class="over-play__img" />
          <h2 class="over-play__title">Play showreel</h2>
        </div>
        <h1 class="over-left__title">Enjoy studying with Createx Online Courses</h1>
        <div class="over-left__btns">
          <a href="#about" class="btn over-btns__btn">About us</a>
          <a href="#courses" class="btn over-btns__btnn">Explore courses</a>
        </div>
      </div>
      <div class="over-box__right">
        <img src="../../assets/image/4.svg" alt="students" class="over-right__photo" />
      </div>
    </div>

    <div class="over-box__bottom container">
      <div v-for="(s, i) in stats" :key="s.text" class="over-bottom__one">
        <h2 class="over-one__title">{{ s.value }}<span v-if="i === 0">+</span></h2>
        <p class="over-one__text">{{ s.text }}</p>
        <span v-if="i < stats.length - 1" class="over-one__dot"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.over {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 120px;
  padding-bottom: 40px;
  background-color: #FDDDCF;
}

.over-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.over-box__left { flex: 1 1 560px; max-width: 600px; animation: fade-left 1s ease both; }

.over-left__play {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.over-play__img { transition: transform .3s ease; }
.over-left__play:hover .over-play__img { transform: scale(1.15); }

.over-play__title { font-weight: 700; font-size: 14px; line-height: 150%; }

.over-left__title {
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  letter-spacing: 0.02em;
  margin-top: 24px;
}

.over-left__btns {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 48px;
}

.over-btns__btn { min-width: 150px; }
.over-btns__btnn { min-width: 200px; }

.over-box__right { flex: 1 1 420px; display: flex; justify-content: flex-end; animation: fade-right 1s ease .2s both; }

.over-right__photo { width: 100%; max-width: 540px; animation: float 5s ease-in-out infinite; }

.over-box__bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 70px;
  animation: fade-up 1s ease .5s both;
}

.over-bottom__one {
  display: flex;
  align-items: center;
  gap: 15px;
}

.over-one__title {
  font-weight: 500;
  font-size: 40px;
  line-height: 130%;
  min-width: 70px;
  text-align: center;
}

.over-one__text { font-weight: 400; font-size: 14px; line-height: 160%; }

.over-one__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff3f3a;
  margin-left: 15px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
@keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.7); opacity: .5; } }
@keyframes fade-left { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: none; } }
@keyframes fade-right { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: none; } }
@keyframes fade-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }

@media (max-width: 1024px) {
  .over-left__title { font-size: 48px; }
  .over-box__bottom { flex-wrap: wrap; justify-content: center; gap: 24px 40px; }
}

@media (max-width: 900px) {
  .over { padding-top: 100px; }
  .over-box { flex-direction: column-reverse; text-align: center; }
  .over-box__left { max-width: 100%; flex-basis: auto; }
  .over-box__right { flex-basis: auto; justify-content: center; }
  .over-left__play,
  .over-left__btns { justify-content: center; }
  .over-right__photo { max-width: 380px; }
}

@media (max-width: 600px) {
  .over-left__title { font-size: 34px; }
  .over-left__btns { padding-top: 32px; }
  .over-box__bottom { display: grid; grid-template-columns: 1fr 1fr; padding-top: 40px; }
  .over-bottom__one { flex-direction: column; gap: 4px; text-align: center; }
  .over-one__title { font-size: 32px; }
  .over-one__dot { display: none; }
}
</style>