<template>  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{name: 'Home'}">홈</router-link>  
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" :to="{name: 'BestList'}">베스트</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" :to="{name: 'ProductList'}">모든상품</router-link>
      </li>
    </ul>    
  </nav>
  <div class="container">
    <router-view /> 
  </div>   
</template>

<script>
export default {   
  
}
</script>

<style>  
  
</style>