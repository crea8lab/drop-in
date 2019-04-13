<template>
  <div class="dashboard">
    <h2 class="subheading grey--text">Dashboard</h2>

    <!-- Hold contents in place inside a container -->
    <v-container class="my-5">
      <v-card flat class="pa-3" v-for="(project, i) in projects" :key="i">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>{{ project.status }}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Code Slow",
          due: "1st Jan 2020",
          status: "ongoing"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete"
        },
        {
          title: "Design video thumbnails",
          person: "Sy Ryu",
          due: "7th July 2019",
          status: "ongoing"
        },
        {
          title: "Create a community forumm",
          person: "Whiz Byte",
          due: "20th Oct 2018",
          status: "overdue"
        },
        {
          title: "Create a newletter post",
          person: "Code Slow",
          due: "22 Feb 2019",
          status: "overdue"
        }
      ]
    };
  }
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
</style>
