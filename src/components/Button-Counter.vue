<template>
  <div>
    <!-- <p>Counter clicked: {{ count }}</p> -->
    <button @click="handleClick()">Click me</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.count += 1;
      this.$emit("click", { count: this.count });
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  created() {
    console.log(this);
  },
};
</script>

<style lang="scss" scoped>
div {
  background: grey;
  padding: 1rem;
}
</style>
