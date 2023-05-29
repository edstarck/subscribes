<template>
  <div class="preference" :class="{ 'preference--active': toggle }">
    <div class="preference__header">
      <figure class="preference__brand">
        <img :src="imgPath" />
      </figure>
      <div class="preference__action">
        <div class="preference__status">
          {{ statusSubscribe }}
        </div>
        <div class="checkbox-block">
          <ui-toggle-input v-model="toggle" @toggle="toggleSubscribe" />
        </div>
      </div>
    </div>
    <p class="preference__description">
      {{ preference.description }}
    </p>
  </div>
</template>

<script>
import { actionsTypes } from "@/store/modules/preferences";
import UiToggleInput from "@/components/Toggler.vue";

// TODO:
// улучшить кейс с toggle
export default {
  name: "PreferenceCard",
  components: {
    UiToggleInput,
  },
  props: {
    preference: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      toggle: this.preference.subscribed,
    };
  },
  computed: {
    imgPath() {
      return require(`../assets/images/${this.preference.site}.png`);
    },
    statusSubscribe() {
      return this.toggle ? "Subscrubed" : "Unsubscribed";
    },
  },
  watch: {
    "preference.subscribed": {
      handler(newValue) {
        this.toggle = newValue;
      },
      deep: true,
    },
  },
  methods: {
    toggleSubscribe(toggle) {
      this.$store.dispatch(actionsTypes.updatePreference, {
        preference: {
          site: this.preference.site,
          subscribed: toggle,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";
.preference {
  padding: 18px 16px 14px 30px;
  border: 1px solid $grid-item-border-color;
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    padding: 16px;
    display: flex;
    flex-direction: column;
  }
  &:hover {
    border: 1px solid #ffffff;
    background-color: $grid-item-hover-color;
  }
  &--active {
    background-color: $grid-item-hover-color;
    border: 1px solid $active-color;
    .preference__status {
      color: $round-color-checked;
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  &__brand {
    margin: 0;
    padding: 0;
    img {
      max-width: 100%;
    }
  }
  &__status {
    margin-bottom: 4px;
    color: $third-color;
    font-size: 10px;
    font-weight: 400;
  }
  &__description {
    margin-top: 29px;
    margin-left: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    @media (max-width: 768px) {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: auto;
      margin-left: 0;
    }
  }
  &__action {
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
