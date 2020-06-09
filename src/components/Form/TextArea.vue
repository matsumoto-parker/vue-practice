<template>
  <div>
    <textarea v-model="body" id cols="30" rows="10"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      body: ""
    };
  }
};
</script>

<style>
</style>