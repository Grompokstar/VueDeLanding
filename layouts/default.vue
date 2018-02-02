<template>
  <div>
    <landing-header/>
    <div id="content">
      <nuxt/>
    </div>
    <landing-footer/>
  </div>
</template>

<script>
  import LandingHeader from '~/components/LandingHeader.vue'
  import LandingFooter from '~/components/LandingFooter.vue'

  export default {
    components: {
      LandingHeader, LandingFooter
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/theme";

</style>
