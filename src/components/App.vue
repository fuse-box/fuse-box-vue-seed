<template>
  <v-app id="example-1" toolbar footer>
    <navigation></navigation>
    <main>
      <v-container fluid class="content">
        <router-view></router-view>
      </v-container>
      <some-vue></some-vue>
    </main>
  </v-app>
</template>
<script language="typescript">
import Navigation from './Navigation.vue';

export default {
  components: {
    Navigation
  }
}
</script>
