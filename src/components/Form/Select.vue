<template>
  <div>
    <select v-model="selectedFluit">
      <option value disabled>果物を選択</option>
      <option value="りんご">りんご</option>
      <option value="バナナ">バナナ</option>
      <option value="オレンジ">オレンジ</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFluit: ""
    };
  }
};
</script>

<style>
</style>