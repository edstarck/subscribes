<template>
  <span
    @click="toggleSubscribe"
    @keydown.space.prevent="toggleSubscribe"
    :aria-checked="toggled.toString()"
    role="checkbox"
    class="toggle"
  ></span>
</template>

<script>
export default {
  name: "UiToggleInput",
  model: {
    prop: "toggled",
    event: "toggle",
  },
  props: ["toggled"],
  methods: {
    toggleSubscribe() {
      this.$emit("toggle", !this.toggled);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";
.toggle {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  border-radius: 9999px;
  cursor: pointer;
  height: 29px;
  width: 56px;
  &:before {
    content: "";
    display: inline-block;
    border-radius: 9999px;
    height: 100%;
    width: 100%;
    border: 1px solid #dcdcdc;
    background-color: #ffffff;
    transition: background-color 0.2s ease;
  }
  &:after {
    position: absolute;
    top: 5px;
    left: 8px;
    border-radius: 9999px;
    height: 21px;
    width: 21px;
    background-color: #979797;
    content: "";
    transition: transform 0.2s ease;
    transform: translateX(0);
  }
}

.toggle[aria-checked="true"]:after {
  background-color: $round-color-checked;
  transform: translateX(1.5rem);
}
</style>
