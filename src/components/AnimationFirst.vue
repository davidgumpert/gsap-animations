<template>
  <b-container fluid class="page-container p-0">
    <b-row no-gutter>
      <b-col colums="6" class="left-col">
        <h1>Engineering For Tomorrow</h1>
        <b-button @click="animationnStart" variant="outline-primary"
          >First animation</b-button
        >
      </b-col>
      <b-col colums="6">
        <div class="panel">
          <img id="light" src="@/assets/light.svg" alt="" width="40%" />
          <p class="inspo-text">
            Some great line about engineering and how we did something that
            everybody will love.
          </p>
          <div class="box"></div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);
import { gsap } from "gsap";

export default {
  methods: {
    animationnStart() {
      gsap.to(".panel", 1.5, {
        scaleY: 1,
        height: "80vh",
        ease: "power3.out",
      });
      gsap.to("#light", 1, {
        opacity: 1,
        y: 0,
        delay: 1,
        ease: "back.out(1.7)",
      });
      gsap.to("p", 1, { opacity: 1, y: 20, delay: 1.4 });
      gsap.to(".box", 3, { opacity: 1, scale: 1, ease: "elastic.out(1, 0.3)" });
    },
  },
};
</script>

<style lang="scss">
.page-container {
  height: 80vh;
  .row {
    .left-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        width: 150px;
      }
      h1,
      button {
        transform: translateY(-50px);
        text-align: center;
      }
    }
    height: 100%;
    .panel {
      background: #eaeaea;
      display: flex;
      position: absolute;
      bottom: 0;
      align-items: center;
      box-sizing: border-box;
      padding: 0 1rem;
      transform: scaleY(0);
      transform-origin: bottom;

      img {
        opacity: 0;
        width: 220px;
        transform: translateY(-200px);
      }

      .inspo-text {
        width: 55%;
        text-align: left;
        margin-bottom: 0;
        margin-left: -1.5rem;
        opacity: 0;
      }
      .box {
        border: 5px solid lightgray;
        width: 65%;
        height: 40%;
        position: absolute;
        left: -9%;
        top: 25%;
        opacity: 0;
        transform: scale(0);
        z-index: -1;
      }
    }
  }
}
</style>
