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
      gap-10

      m-6
      
      rounded-2xl
      
      bg-dark-desaturated-blue

      desktop:flex-row-reverse
      desktop:rounded-xl
      ">

      <!-- Card Banner -->
      <div class="relative">
        <img class="rounded-t-2xl desktop:hidden" src="./assets/header-mobile.jpg" alt="people">
        <img class="hidden desktop:block rounded-r-xl flex-shrink-0" src="./assets/header-desktop.jpg" alt="people">
        <div class="
          absolute 
          inset-0 
          bg-dark-violet/70 
          rounded-t-2xl
          
          desktop:rounded-r-xl
          desktop:rounded-tl-none
          "></div>
      </div>
      
      <!-- Card Content -->
      <div class="
        flex 
        flex-col 
        items-center 
        gap-8
        
        desktop:px-4
        desktop:pt-10
        desktop:w-[32rem]
        desktop:gap-24
        desktop:items-start
        ">

        <!-- Callout -->
        <div class="
          flex 
          flex-col 
          gap-4 
          px-10
          
          desktop:gap-6
          desktop:pt-4
          ">

          <p class="
            text-white 
            text-2xl 
            font-bold 
            text-center 
            
            tracking-wide 
            
            desktop:text-4xl
            desktop:text-left
            ">
            Get <span class="text-soft-violet">insights</span> 
            that help your business grow.
          </p>
          <p class="
            text-white/50 
            text-center 
            text-sm
            
            desktop:text-left
            desktop:text-base
            ">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>

        <!-- Stats -->
        <div class="
          flex 
          flex-col 
          gap-8
          
          pb-10
          
          desktop:flex-row
          desktop:gap-12
          desktop:pl-10
          ">
          <Metric 
            v-for="m of metrics"
            :header="m.header"
            :category="m.category"
            ></Metric>
        </div>
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