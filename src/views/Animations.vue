<template>
  <div>
    <div class="explanation-text">
      Here is a collection of all the animations.
    </div>
    <animation-first></animation-first>
    <div class="divide"></div>
    <animation-second></animation-second>
    <div class="divide"></div>
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

.divide {
  content: "";
  border-top: lightblue 1px dashed;
  width: 80vw;
  margin: 2rem auto;
}
</style>
