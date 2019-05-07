<template>
  <Default>
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
          <v-layout row wrap :class="`pa-3 ${project.status}`">
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
  </Default>
</template>

<script>
import db from "@/fb";
import Default from "@/layouts/Default.vue";

export default {
  components: {
    Default
  },
  data() {
    return {
      projects: []
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  created() {
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
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
