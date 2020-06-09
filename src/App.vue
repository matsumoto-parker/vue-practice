<template>
  <div id="app">
    <h1>こんにちは</h1>
    <Button title="ボタン1" />
    <Button title="ボタン2" @onClick="hello" />
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  components: {
    Button
  },
  methods: {
    hello(event) {
      console.log("Hello1!", event);
    }
  }
};
</script>

<style>
</style>
