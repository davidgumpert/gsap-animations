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
      box: null,
      boxTimeline: null,
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
  mounted() {
    this.box = this.$refs.box;
    this.boxTimeline = new TimelineLite();
  },
  methods: {
    animationStart() {
      let x = "";
      let rotation;
      let color;
      if (this.boxRight) {
        this.buttonText = "Roll right";
        x = "0";
        rotation = -90;
        color = "red";
      } else {
        x = "85vw";
        rotation = 90;
        color = "green";
        this.buttonText = "Roll left";
      }
      this.boxTimeline.to(this.box, 3, {
        x: x,
        rotation: rotation,
        ease: Back.easeInOut,
      });
      this.boxTimeline.to(this.box, 1.5, { background: color }, "-=2");
      this.boxRight = !this.boxRight;
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
