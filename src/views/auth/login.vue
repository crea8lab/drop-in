<template>
  <Guest>
    <v-container class="main">
      <v-layout wrap>
        <v-flex xs12>
          <v-tabs centered color="success" dark icons-and-text>
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab style="width: 50%">
              Login
              <v-icon>verified_user</v-icon>
            </v-tab>

            <v-tab style="width: 50%">
              Sign Up
              <v-icon>account_box</v-icon>
            </v-tab>

            <v-tab-item>
              <v-card flat>
                <h1 class="subheading text-xs-center grey--text px-3 pt-4">Provide login credentials</h1>
                <v-form ref="form" v-model="valid" lazy-validation class="px-5 py-2">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    autofocus
                    prepend-icon="email"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    type="password"
                    label="Password"
                    prepend-icon="lock"
                  ></v-text-field>

                  <v-btn
                    :disabled="!valid"
                    color="success"
                    @click="validate"
                    class="mt-4 mb-3"
                    block
                  >Login</v-btn>
                </v-form>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <h1 class="subheading text-xs-center grey--text px-3 pt-4">Register a new account</h1>
                <v-form ref="form" v-model="valid" lazy-validation class="px-5 py-2">
                  <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    label="Username"
                    required
                    autofocus
                    prepend-icon="person"
                  />
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    prepend-icon="email"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    type="password"
                    label="Password"
                    prepend-icon="lock"
                  ></v-text-field>

                  <v-btn
                    :disabled="!valid"
                    color="success"
                    @click="validate"
                    class="mt-4 mb-3"
                    block
                  >Login</v-btn>
                </v-form>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
  </Guest>
</template>

<script>
import Guest from "@/layouts/Guest.vue";

export default {
  name: "login",
  components: {
    Guest
  },
  data: () => ({
    valid: true,
    email: "",
    username: "",
    password: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    passwordRules: [
      v => !!v || "Password is required"
      // v =>
    ],
    usernameRules: [v => !!v || "Username is required"]
  }),
  methods: {
    validate() {
      // if (this.$refs.form.validate()) {
      //   this.snackbar = true;
      // }

      console.log(this.password, this.email);

      this.reset();
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.main {
  padding: 0;
  max-width: 50%;
  box-shadow: 0px 0px 8px #808080;
}

@media (max-width: 420px) {
  .main {
    max-width: 100vw;
  }
}
</style>
