<template>
  <div class="fun-meter">
    <progress max="100" value="0"></progress>
    <div class="fun-meter__bg">
      <span
        class="fun-meter__bar"
        :style="`width: ${progressSubscribe}%`"
      ></span>
    </div>
    <div class="fun-meter__value">{{ progressSubscribe }}%</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getterTypes } from "@/store/modules/preferences";
import { mutationsTypes as ProgressbarMutationsTypes } from "@/store/modules/progressbar";

export default {
  name: "UiProgressBar",
  computed: {
    ...mapGetters({
      preferences: getterTypes.currentPreferences,
    }),
    progressSubscribe() {
      if (this.preferences) {
        const subscriptionCount = this.preferences.length;
        const activeSubscriptionCount = this.preferences.filter(
          (preference) => preference.subscribed
        ).length;

        return Math.floor((100 * activeSubscriptionCount) / subscriptionCount);
      }

      return 0;
    },
  },
  watch: {
    progressSubscribe(newValue, oldValue) {
      this.$store.commit(ProgressbarMutationsTypes.updateProgressBar, {
        progress: {
          newValue,
          oldValue,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.fun-meter {
  position: relative;
  display: flex;
  align-items: center;

  progress {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }
  &__value {
    margin-left: 8px;
    color: $fun-meter__bar-value-color;
    font-size: 18px;
    font-weight: 400;
    line-height: 0.1;
  }
  &__bg {
    position: relative;
    width: 137px;
    height: 13px;
    background-color: $main-font-color;
    border-radius: 10px;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  &__bar {
    overflow: hidden;
    background: $fun-meter__bar-value-color;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: width 0.3s ease-in;
  }
}

@keyframes animate-bar {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -40px 0;
  }
}
</style>
