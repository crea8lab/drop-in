<template>
  <v-app class="grey lighten-4">
    <!-- Check if user is logged in -->
    <Auth/>

    <!-- Navbar here -->
    <Navbar/>

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>

    <!-- Footer here -->
  </v-app>
</template>

<script>
import Auth from "@/components/Auth";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
    Auth
  },
  data() {
    return {
      //
    };
  }
};
</script>
