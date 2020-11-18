<template>
  <v-app>
    <router-view name="NavBar"></router-view>
    <router-view name="StudioNavBar"></router-view>
    <v-content
      :class="{
        'content-bg': ![
          'SignIn',
          'SignUp',
          'Dashboard',
          'Video',
          'Detail'
        ].includes(this.$route.name)
          ? true
          : false
      }"
    >
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

// import Navbar from "./components/Navbar"
// import Dashboard from "./components/dashboard"
export default {
  name: 'App',

//   components: {
//    Navbar,
//    Dashboard
//   },

//   data: () => ({
//     //
//   }),
 };
</script>
<style lang="scss">
.content-bg {
  background-color: #f9f9f9;
}
.card {
  background: #f9f9f9 !important;
}
</style>
