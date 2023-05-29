<template>
  <div class="popup">
    <div class="popup__wrap">
      <h1 class="popup__header">Hurrah!</h1>
      <h5 class="popup__desc">
        Your subscription preferences have been successfully saved
      </h5>
      <p class="popup__result" :class="saveOrUnsubscribe['className']">
        {{ funScore }}%
      </p>
      <p class="popup__result-annotation">
        {{ saveOrUnsubscribe["fun"] }}
      </p>
      <button @click="close" class="button button--ok">Ok, great!</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { funLost, funMore } from "@/helpers/vars";
import { getterTypes } from "@/store/modules/progressbar";

export default {
  name: "UIPopup",
  computed: {
    ...mapGetters({
      progressBarWidth: getterTypes.getProgressBarWidth,
    }),
    funScore() {
      const { newValue, oldValue } = this.progressBarWidth;
      return (
        (newValue - oldValue >= 0 ? "+" : "-") + Math.abs(newValue - oldValue)
      );
    },
    saveOrUnsubscribe() {
      if (this.funScore > 0) {
        return { className: "popup__result--plus", fun: funMore };
      } else {
        return { className: "popup__result--minus", fun: funLost };
      }
    },
  },
  methods: {
    close() {
      this.$router.push({ name: "subscribes" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.popup {
  position: relative;
  max-width: 616px;
  width: 100%;
  padding: 28px;
  background: $body-background-color;
  transition: all 0.5s ease-in-out;
  box-sizing: border-box;
  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0 60px 0;
    border: 10px solid $container-border-color;
  }
  &__header {
    font-size: 58px;
    margin: 0;
    padding: 0;
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  &__desc {
    margin-top: 0;
    text-align: center;
  }
  &__result {
    margin: 39px 0 0 0;
    font-size: 36px;
    font-weight: 800;
    line-height: 1;
    @media (max-width: 768px) {
      margin: 0;
    }

    &--minus {
      color: $fun-minus-color;
    }

    &--plus {
      color: $fun-plus-color;
    }
    &-annotation {
      margin: 0 0 34px 0;
      color: $fun-meter-header-color;
      font-size: 14px;
    }
  }
}
</style>
