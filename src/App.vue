<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

ul,
li {
  list-style: none;
}

body {
  background-color: #eceff1;
  /* overflow-y: scroll; */
}

h1,
h2,
h3,
h4,
h5,
h6 {
  clear: both;
  color: #212121;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
}
</style>
