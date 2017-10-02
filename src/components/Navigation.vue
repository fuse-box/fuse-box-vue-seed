<template>
  <v-toolbar class="indigo" dark fixed>
    <v-toolbar-title>
      <router-link to="/">FuseBox - Vue Seed</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat @click.stop="goTo('/config')">Config Guide</v-btn>
      <v-btn flat @click.stop="openDocumentation()">FuseBox Docs</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
  export default {
    methods: {
      openDocumentation() {
        window.open('http://fuse-box.org');
      },

      goTo(url) {
        this.$router.push(url);
      }
    }
  }
</script>
<style lang="scss" scoped>
  a {
    color: #FFF;
    text-decoration: none;
  }
</style>
