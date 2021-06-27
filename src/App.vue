<template>
  <div class="flex h-screen" id="app">
    <div class="m-auto">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view class="flex"/>
    </div>
  </div>
</template>
