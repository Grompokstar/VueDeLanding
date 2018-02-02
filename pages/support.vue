<template>
  <div>
    <page-header :text="pageHeader"/>
    <support-main-content/>
    <contact-us-section/>
  </div>
</template>

<script>
import ContactUsSection from '~/components/ContactUsSection.vue';
import PageHeader from '~/components/PageHeader.vue';
import SupportMainContent from '~/components/SupportMainContent.vue';

export default {
  components: {
    ContactUsSection,
    PageHeader,
    SupportMainContent
  },

  data() {
    return {
      pageHeader: 'Чем мы можем вам помочь?'
    }
  }
}
</script>

<style lang="scss">

</style>
