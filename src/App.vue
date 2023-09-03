<script setup lang="ts">
import Metric from './components/Metric.vue'

interface MetricDetail {
  header: string,
  category: string
}

const metrics: Array<MetricDetail> = [
  {
    header: '10k+',
    category: 'COMPANIES'
  },
  {
    header: '314',
    category: 'TEMPLATES'
  },
  {
    header: '12M+',
    category: 'QUERIES'
  }
]

</script>

<template>
  <div class="flex items-center justify-center min-h-screen">

    <!-- Card -->
    <div class="
      flex 
      flex-col 
      gap-8

      m-6
      
      rounded-2xl
      
      bg-dark-desaturated-blue
      ">

    <div class="relative">
      <img class="rounded-t-2xl" src="./assets/header-mobile.jpg" alt="people">
      <div class="absolute inset-0 bg-dark-violet/70 rounded-t-2xl"></div>
    </div>
    

      <!-- Callout -->
      <div class="flex flex-col gap-4 px-10">
        <p class="text-white text-2xl font-bold text-center tracking-wide">
          Get <span class="text-soft-violet">insights</span> 
          that help your business grow.
        </p>
        <p class="text-white/50 text-center text-sm">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
      </div>

      <!-- Stats -->
      <div class="flex flex-col gap-6 pb-10">
        <Metric 
          v-for="m of metrics"
          :header="m.header"
          :category="m.category"
          ></Metric>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      bodyClass: 'font-inter bg-very-dark-blue'
    };
  },
  mounted() {
    document.body.className = this.bodyClass;
  },
  beforeDestroy() {
    // Reset the class when the component is destroyed
    document.body.className = '';
  }
};
</script>