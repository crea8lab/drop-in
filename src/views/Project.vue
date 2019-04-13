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
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Code Slow",
          due: "1st Jan 2020",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae distinctio nobis minus consectetur cupiditate explicabo, vero, nemo totam recusandae laborum eum qui. Distinctio consectetur explicabo fugiat quia laboriosam eum quod!"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae distinctio nobis minus consectetur cupiditate explicabo, vero, nemo totam recusandae laborum eum qui. Distinctio consectetur explicabo fugiat quia laboriosam eum quod!"
        },
        {
          title: "Design video thumbnails",
          person: "Sy Ryu",
          due: "7th July 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae distinctio nobis minus consectetur cupiditate explicabo, vero, nemo totam recusandae laborum eum qui. Distinctio consectetur explicabo fugiat quia laboriosam eum quod!"
        },
        {
          title: "Create a community forumm",
          person: "Whiz Byte",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae distinctio nobis minus consectetur cupiditate explicabo, vero, nemo totam recusandae laborum eum qui. Distinctio consectetur explicabo fugiat quia laboriosam eum quod!"
        },
        {
          title: "Create a newletter post",
          person: "Code Slow",
          due: "22 Feb 2019",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae distinctio nobis minus consectetur cupiditate explicabo, vero, nemo totam recusandae laborum eum qui. Distinctio consectetur explicabo fugiat quia laboriosam eum quod!"
        }
      ]
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => project.person === "Code Slow");
    }
  }
};
</script>

