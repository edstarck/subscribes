<template>
  <aside class="side-bar">
    <header class="header-logo">
      <img src="../assets/images/logo.webp" />
    </header>
    <section class="fun">
      <h3 class="fun__question">How much fun do you want in your life?</h3>
      <div class="author">harry.simon@yahoo.com</div>
      <div class="fun-meter-block">
        <h5 class="fun-meter-block__header">fun you get</h5>

        <ui-progress-bar />

        <p class="fun-meter-block__subscribe">
          <button @click="onAllSubscribe" class="subscribe-link">
            Subscribe
          </button>
          to all our fun sites to upgrade your fun progress
        </p>
      </div>
    </section>
    <footer class="footer">
      <address class="footer__address">
        <p>
          EntertainMeMore <br />
          11807 Westheimer 550 PMB617 Houston, TX 77077
        </p>
        <a href="mailto:email@entertainmemore.com" class="subscribe-link"
          >email@entertainmemore.com</a
        >

        <router-link to="#" class="subscribe-link footer__policy"
          >Privacy Policy</router-link
        >
      </address>
    </footer>
  </aside>
</template>

<script>
import UiProgressBar from "@/components/ProgressBar.vue";
import { actionsTypes } from "@/store/modules/preferences";

export default {
  name: "SideBar",
  components: {
    UiProgressBar,
  },
  methods: {
    onAllSubscribe() {
      this.$store.dispatch(actionsTypes.updateAllPreferences, {
        subscribed: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.side-bar {
  display: flex;
  flex-direction: column;
  padding: 84px 42px 36px 72px;
  @media (max-width: 768px) {
    padding: 16px;
  }
}
.header-logo {
  width: 143px;
  img {
    max-width: 100%;
  }
  &__text {
    padding: 0;
    margin: 0;
  }
}
.fun {
  margin: 56px 0 98px 0;
  color: $main-font-color;
  @media (max-width: 768px) {
    margin: 0;
  }
  &__question {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    @media (max-width: 768px) {
      display: none;
    }
  }
}
.author {
  margin: 48px 0 0 0;
  font-size: 14px;
  color: $main-font-color;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: $link-hover-color;
  }
  @media (max-width: 768px) {
    display: none;
  }
}
.fun-meter-block {
  display: flex;
  flex-direction: column;
  &__header {
    color: $fun-meter-header-color;
    font-size: 11px;
    font-weight: 400;
    margin: 8px 0 5px 0;
    text-transform: uppercase;
  }
  &__subscribe {
    margin-top: 18px;
    font-size: 14px;
    color: $fun-meter-header-color;
  }
}
.subscribe-link {
  padding: 0;
  color: $attention-link-color;
  border: 0;
  outline: 0;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: $link-hover-color;
  }
}
.footer {
  font-size: 12px;
  color: $second-color;
  &__address {
    display: flex;
    flex-direction: column;
    font-style: normal;
  }
  &__policy {
    margin-top: 28px;
  }
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
