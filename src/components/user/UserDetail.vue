<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>Id knowledge of User: {{ $route.params.id }}</p>
    <router-link 
      tag="button"
      class="btn btn-primary"
      :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { name: 'John', lastName: 'Doe' } }"
    >
    Edit User
    </router-link>
  </div>
</template>
<script>
  export default {}
</script>




<!--:to="'/user' + $route.params.id + '/edit'"-->
<!--:to="`/user/${$route.params.id}/edit`"-->
