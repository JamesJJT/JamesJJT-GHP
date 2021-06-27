<template>
  <div class="h-screen" id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
  import Nav from "./components/Nav";
  export default {
    components: {Nav}
  }

</script>
