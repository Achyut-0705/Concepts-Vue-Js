<template>
  <form>
    <p>
      Dollar:
      <input
        type="number"
        placeholder="Dollar"
        v-model="dollar"
        @input="handleDollar"
      />
    </p>
    <p>
      INR:
      <input type="number" placeholder="INR" v-model="inr" @input="handleInr" />
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      dollar: 0,
      inr: 0,
    };
  },
  methods: {
    handleDollar() {
      this.inr = this.dollar * 70;
    },
    handleInr() {
      this.dollar = this.inr / 70;
    },
  },
};
</script>

<style lang="scss" scoped></style>
