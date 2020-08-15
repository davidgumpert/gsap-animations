<template>
  <div>
    <div class="explanation-text">
      Here is a collection of all the animations.
    </div>
    <animation-first></animation-first>
    <animation-second></animation-second>
  </div>
</template>

<script>
import AnimationFirst from "../components/AnimationFirst.vue";
import AnimationSecond from "../components/AnimationSecond.vue";
export default {
  components: {
    "animation-first": AnimationFirst,
    "animation-second": AnimationSecond,
  },
};
</script>

<style lang="scss">
.explanation-text {
  padding-bottom: 30px;
  text-align: center;
}
</style>
