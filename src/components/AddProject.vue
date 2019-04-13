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
          <v-form class="px-3">
            <v-text-field prepend-icon="folder" label="Title" v-model="title"></v-text-field>
            <v-textarea prepend-icon="edit" label="Information" v-model="content"></v-textarea>

            <!-- Date Picker -->
            <v-menu>
              <v-text-field
                :value="formattedDate"
                slot="activator"
                label="Due Date"
                prepend-icon="date_range"
              ></v-text-field>
              <v-date-picker v-model="due"></v-date-picker>
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
import format from "date-fns/format";
export default {
  data() {
    return {
      title: "",
      content: "",
      due: null
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.content);
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>
