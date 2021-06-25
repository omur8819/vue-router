<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>Name      : {{ $route.query.name }}</p>
    <p>Last Name : {{ $route.query.lastName }}</p>
  </div>
</template>
<script>
  export default {}
</script>
