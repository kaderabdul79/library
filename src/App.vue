 <template>
 <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
  </nav> -->
  <div>
    <div v-if="check_auth">Auth Part</div>
    <div v-else>No auth Part</div>
  </div>
  <RouterView />

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data(){
    return {
      check_auth: true
    }
  }
}
</script>

<style>

</style>
