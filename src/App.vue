 <template>
  <div>
    <div v-if="check_auth">
      <!-- <div id="nav">
        <RouterLink :to="{path: 'admin'}">admin</RouterLink>
        <RouterLink :to="{path: 'student'}">student</RouterLink>
        <RouterLink :to="{path: 'management'}">management</RouterLink>
      </div>
      Auth Part -->
      <Dashboard></Dashboard>
    </div>

    <div v-else>
      <router-view />
      <!-- <div id="nav">
        <RouterLink :to="{path: 'login'}">login</RouterLink>
        <RouterLink :to="{path: 'signup'}">signup</RouterLink>
        <RouterLink :to="{path: 'portfolio'}">portfolio</RouterLink>
      </div>
      No auth Part -->
      </div>
    <!-- router view -->
    <!-- <RouterView /> -->
  </div>
 
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Dashboard from './views/backend/dashboard.vue'

export default {
    data() {
        return {
            check_auth: false
        };
    },
    created() {
        if (this.check_auth) {
            // this.$router.replace({ name: "dashboard" });
            // solving double header problem
            this.$router.replace({ name: "admin" });
        }
        else {
            this.$router.replace({ name: "login" });
        }
    },
    components: { Dashboard }
}
</script>

<style>

</style>
