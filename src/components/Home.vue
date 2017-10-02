<template>
  <section class="container">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <h5>FuseBox + Vue.js seed</h5>
        </v-card-title>
        <div class="logos-container">
          <img class="logo" src="/assets/fusebox-logo.png" />
          <img class="logo" src="/assets/heart.png" />
          <img class="logo" src="/assets/vue-logo.png" />
        </div>
      </v-card>
    </v-flex>
  </section>
</template>
<style lang="scss" scoped>
  .container {
    position: absolute;
    width: 100%;
    max-width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  .logos-container {
    display: flex;

    .logo {
      margin: 20px auto;
      height: 100px;
    }
  }
</style>
