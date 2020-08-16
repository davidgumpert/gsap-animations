<template>
  <div>
    <section class="filler-section">
      <div class="filler-text">
        Scroll down on the page to trigger the scroll-into-view animations. This
        is just a filler section.
      </div>
      <div class="scroll-wrapper">
        <font-awesome-icon
          class="scroll-icon"
          icon="arrow-circle-down"
        ></font-awesome-icon>
      </div>
    </section>

    <section class="filler-section">
      <div class="filler-text">Another filler section.</div>
    </section>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
//import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      controller: null,
      timelineMax: null,
    };
  },
  mounted() {
    this.timelineMax = new TimelineMax();
  },
};
</script>

<style lang="scss" scoped>
.filler-section {
  width: 100vw;
  height: calc(100vh - 84px);
  justify-content: center;
  align-items: center;
  background-color: rgb(29, 95, 92);
  display: flex;
  flex-flow: column;
  .filler-text {
    margin-top: -5vh;
    width: 500px;
    text-align: justify;
    font-size: 1.5rem;
    color: white;
  }
  .scroll-wrapper {
    margin-top: 3rem;
    font-size: 2rem;
    color: white;
    .scroll-icon {
      animation: bounce 1s infinite ease;
    }
  }
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
