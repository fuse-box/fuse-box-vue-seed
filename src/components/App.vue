<template>
  <v-app id="example-1" toolbar footer>
    <navigation></navigation>
    <main>
      <v-container fluid class="content">
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>
<script>
  import Navigation from './Navigation.vue';

  export default {
    components: {
        Navigation
    }
  }
</script>
