<template>
  <div>
    <div class="button-wrapper">
      <b-button
        class="animation-button"
        @click="animationStart"
        variant="outline-primary"
        >{{ buttonTextComputed }}</b-button
      >
    </div>
    <div class="box" ref="box"></div>
  </div>
</template>

<script>
import { TimelineLite, Back } from "gsap";

export default {
  data() {
    return {
      boxRight: false,
      buttonText: "Roll right",
    };
  },
  computed: {
    buttonTextComputed() {
      if (this.buttonText) {
        return this.buttonText;
      }
      return null;
    },
  },
  methods: {
    animationStart() {
      let { box } = this.$refs;
      let timeline = new TimelineLite();
      let dist = "";
      if (this.boxRight) {
        this.buttonText = "Roll right";
        dist = "-85vw";
      } else {
        dist = "85vw";
        this.buttonText = "Roll left";
      }
      timeline.to(box, 3, {
        x: dist,
        rotation: 90,
        ease: Back.easeInOut,
      });
      timeline.to(box, 1.5, { background: "green" }, "-=2");
      this.boxRight != this.boxRight;
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  margin-left: 5vw;
  height: 60px;
  width: 60px;
  background: red;
}

.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  .animation-button {
  }
}
</style>
