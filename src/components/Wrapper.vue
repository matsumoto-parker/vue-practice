<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>

    <hr />

    <header>
      <slot name="default"></slot>
    </header>

    <hr />

    <header>
      <slot name="footer"></slot>
    </header>

    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: red;
}
h2 {
  color: green;
}
</style>