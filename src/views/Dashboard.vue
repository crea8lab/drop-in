<template>
  <div class="dashboard">
    <h2 class="subheading grey--text">Dashboard</h2>

    <!-- Hold contents in place inside a container -->
    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn slot="activator" small flat color="grey" @click="sortBy('title')">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">by project name</span>
          </v-btn>
          <span>Sort project by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn slot="activator" small flat color="grey" @click="sortBy('person')">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">by person</span>
          </v-btn>
          <span>Sort project by person</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="(project, i) in projects" :key="i">
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
            <div class="right">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
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
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
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
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>
