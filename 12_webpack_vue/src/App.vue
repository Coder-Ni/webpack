<template>
  <div>
    {{ msg }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello Vue",
    };
  },
};
</script>
<style lang="less" scoped>
div {
  color: red;
}
</style>
