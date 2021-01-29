<template>
  <div>
    <router-link
      :to="{
             path: 'blogDetail',
             query: { id: item.id, views: item.views }
            }"
      tag="h2"
    >{{ item.title }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods() {}
};
</script>