f<template>
  <div class="container">
    <router-view ></router-view>
  </div>
</template>

<script >
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
html,
body {

  ::-webkit-scrollbar {
    width: 0 !important;
  }
  html::-webkit-scrollbar {
    width: 0 !important;
  }
}
</style>
