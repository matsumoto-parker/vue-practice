<template>
  <div>
    <input type="checkbox" value="りんご" v-model="checkedFruits" />りんご
    <input type="checkbox" value="バナナ" v-model="checkedFruits" />バナナ
    <input type="checkbox" value="オレンジ" v-model="checkedFruits" />オレンジ
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedFruits: []
    };
  }
};
</script>

<style>
</style>