<template>
  <div>
    <input type="radio" value="りんご" v-model="selectedValue" />りんご
    <input type="radio" value="バナナ" v-model="selectedValue" />バナナ
    <input type="radio" value="オレンジ" v-model="selectedValue" />オレンジ
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: null
    };
  }
};
</script>

<style>
</style>