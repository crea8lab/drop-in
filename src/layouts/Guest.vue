<template>
  <v-app class="grey lighten-4">
    <v-container class="wrapper">
      <slot/>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
