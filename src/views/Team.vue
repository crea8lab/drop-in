<template>
  <!-- <Default> -->
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <!-- Hold contents in place inside a container -->
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(person, i) in team" :key="i">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <v-img :src="`images${person.avatar}`"/>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>

            <v-layout justify-space-around>
              <v-card-actions>
                <v-btn fab flat color="primary">
                  <v-icon small>message</v-icon>
                  <!-- <span>Message</span> -->
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <!-- </Default> -->
</template>

<script>
import Default from "@/layouts/Default.vue";

export default {
  components: {
    Default
  },
  data() {
    return {
      team: [
        { name: "Code Slow", role: "Web Developer", avatar: "/avatar-1.png" },
        { name: "Sy Ryu", role: "Graphic Designer", avatar: "/avatar-2.png" },
        { name: "Yoshi", role: "Product Designer", avatar: "/avatar-3.png" },
        { name: "Evan Yu", role: "Media Strategist", avatar: "/avatar-4.png" },
        { name: "Gowen ku", role: "Digital Marketer", avatar: "/avatar-5.png" }
      ]
    };
  },
  created() {
    this.$emit("update:layout", Default);
  }
};
</script>
