<template>
  <div>
    <p>Counter Clicked: {{ count }}</p>
    <buttonCounter @click="handleClick($event)" />
  </div>
</template>

<script>
// @ is an alias to /src
import buttonCounter from "@/components/Button-Counter.vue";

export default {
  name: "ButtonCounter",
  components: {
    buttonCounter,
  },
  methods: {
    handleClick(event) {
      this.count = event.count;
    },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
