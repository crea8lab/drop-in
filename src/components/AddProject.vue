<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on }">
        <v-btn color="success" v-on="on">
          <v-icon left>control_point</v-icon>New Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Create New Project</v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field prepend-icon="folder" label="Title" v-model="title" :rules="inputRules"></v-text-field>
            <v-textarea
              :rules="inputRules"
              prepend-icon="edit"
              label="Information"
              v-model="content"
            ></v-textarea>

            <!-- Date Picker -->
            <v-menu>
              <v-text-field
                :value="formattedDate"
                slot="activator"
                label="Due Date"
                prepend-icon="date_range"
                :rules="inputRules"
              ></v-text-field>
              <v-date-picker :rules="inputRules" v-model="due"></v-date-picker>
            </v-menu>

            <v-spacer></v-spacer>

            <v-btn flat class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from "@/fb";
import format from "date-fns/format";
export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const project = {
          title: this.title,
          content: this.content,
          due: format(this.due, "Do MMM YYYY"),
          person: `Code Slow`,
          status: "ongoing"
        };

        db.collection("projects")
          .add(project)
          .then(() => console.log("added to db"))
          .catch(e => console.error(e));
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>
