<template>
  <v-app class="grey lighten-4">
    <v-content class="mx-4 mb-4">
      <component :is="layout">
        <router-view :layout.sync="layout"/>
      </component>
    </v-content>
  </v-app>
</template>

<script>
import Auth from "@/components/Auth";

export default {
  name: "App",
  components: {
    Auth
  },
  data() {
    return {
      layout: "div"
    };
  }
};
</script>
