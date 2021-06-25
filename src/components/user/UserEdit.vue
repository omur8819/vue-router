<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>Name : {{ $route.query.name }}</p>
    <p>Last Name : {{ $route.query.lastName }}</p>
    <button class="btn btn-primary" @click="saved = true">Confirm</button>
    <div style="height: 800px;"></div>
    <p id="data">Extra Knowledge</p>
  </div>
</template>
<script>
  export default {
    dataa(){
      return{
        saved: false
      }
    },
    beforeRouteLeave (to, from, next) {
      if(this.saved){
        next();
      } else {
        if(confirm("All Knowledge will be lost, Are you sure?")){
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>
