import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/base.css'

const app = createApp(App)

// v-reveal  -> element scroll bilan paydo bo'ladi. Misol: v-reveal  yoki  v-reveal="200"
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const el = entry.target
            el.classList.add('is-visible')
            observer.unobserve(el)
            setTimeout(() => {
                el.classList.remove('reveal', 'is-visible')
                el.style.transitionDelay = ''
            }, 1500 + (Number(el.dataset.delay) || 0))
        })
    },
    { threshold: 0.12 }
)

app.directive('reveal', {
    mounted(el, binding) {
        el.classList.add('reveal')
        if (binding.value) {
            el.dataset.delay = binding.value
            el.style.transitionDelay = binding.value + 'ms'
        }
        observer.observe(el)
    },
    unmounted(el) {
        observer.unobserve(el)
    },
})

app.mount('#app')