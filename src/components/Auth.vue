<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["loading", "loggedIn", "user"])
  },

  mounted() {
    if (!this.loggedIn && !this.user.username) {
      this.$router.push("/auth/login");
    }
  }
};
</script>
