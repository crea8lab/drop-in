<template>
  <v-app class="grey lighten-4">
    <v-content class="mx-4 mb-4">
      <component :is="layout">
        <router-view :layout.sync="layout"></router-view>
      </component>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      layout: "div"
    };
  }
};
</script>
