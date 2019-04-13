<template>
  <div class="project">
    <h1 class="subheading grey--text">Projects</h1>

    <!-- Hold contents in place inside a container -->
    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(project, i) in myProjects" :key="i">
          <template v-slot:header>
            <div>{{ project.title }}</div>
          </template>

          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  data() {
    return {
      projects: []
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => project.person === "Code Slow");
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

