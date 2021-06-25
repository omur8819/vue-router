<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>Id knowledge of User: {{ $route.params.id }}</p>
    <router-link 
      tag="button"
      class="btn btn-primary"
      :to="navigationLink"
    >
    Edit User
    </router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        navigationLink: { 
          name: 'userEdit', 
          params: { id: this.$route.params.id }, 
          query: { name: 'John', lastName: 'Doe' },
          hash: '#data',
        } 
      }
    },
    beforeRouteEnter (to, from, next) {
      next();
    }
  }
</script>




<!--:to="'/user' + $route.params.id + '/edit'"-->
<!--:to="`/user/${$route.params.id}/edit`"-->
