<template>
  <div>
    <page-header text="Digital Energy Cloud Solutions"/>
    <about-main-content/>
    <contact-us-section/>
  </div>
</template>

<script>
import ContactUsSection from '~/components/ContactUsSection.vue';
import PageHeader from '~/components/PageHeader.vue';
import AboutMainContent from '~/components/AboutMainContent.vue';

export default {
  components: {
    ContactUsSection,
    PageHeader,
    AboutMainContent
  }
}
</script>

<style lang="scss">

</style>
