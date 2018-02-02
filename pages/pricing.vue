<template>
  <div>
    <welcome-section/>
    <advantages-section/>
    <testimonials-section/>
    <contact-us-section/>
  </div>
</template>

<script>
import WelcomeSection from '~/components/WelcomeSection.vue';
import AdvantagesSection from '~/components/AdvantagesSection.vue';
import TestimonialsSection from '~/components/TestimonialsSection.vue';
import ContactUsSection from '~/components/ContactUsSection.vue';

export default {
  components: {
    WelcomeSection,
    AdvantagesSection,
    TestimonialsSection,
    ContactUsSection
  }
}
</script>

<style lang="scss">

</style>
