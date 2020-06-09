<template>
  <div class="sp sp-circle"></div>
</template>

<script>
export default {};
</script>

<style>
.sp {
  width: 32px;
  height: 32px;
  margin: 20px auto;
}
.sp-circle {
  border: 4px #0004 solid;
  border-top: 4px #000f solid;
  border-radius: 50%;
  animation: spCircRot 0.6s infinite linear;
}
@keyframes spCircRot {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>