<template>
  <div class="language-switch-wrapper">
    <div class="language-switch" v-click-outside="hide" :class="classes">
      <button
          class="language-switch-button"
          @click="toggle"
          @keydown.esc.exact="hide"
          @keydown.shift.tab="hide"
          :class="classes"
      >
        <span>{{ currentLanguage.title }}</span>
          <v-icon class="language-switch-button-arrow" style="vertical-align: middle;">arrow_drop_down</v-icon>
      </button>
      <transition name="dropdown-fade" mode="out-in">
        <div class="language-switch-items" v-if="isDropdownVisible" :class="classes">
          <p class="language-switch-item" v-for="language in languages" :key="language.locale" @click="changeLanguage(language.locale)">
            {{ language.title}}
          </p>
        </div>
      </transition>
    </div>
  </div>

</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  name: "LanguageSwitch",
  data: () => ({
    isDropdownVisible: false,
  }),
  computed: {
    languages() {
      return this.languageMap.filter(lang => lang.locale !== i18n.locale);
    },
    languageMap() {
      return [
        {title: this.$t('languages.en'), locale: 'en'},
        {title: this.$t('languages.de'), locale: 'de'},
        {title: this.$t('languages.es'), locale: 'es'},
        {title: this.$t('languages.fr'), locale: 'fr'},
        {title: this.$t('languages.sv'), locale: 'sv'},
      ]
    },
    currentLanguage() {
      let currentLocale = i18n.locale;
      return this.languageMap.find(lang => lang.locale === currentLocale)
    },
    classes() {
      return {
        'dropdown-open': this.isDropdownVisible,
      }
    }
  },
  methods: {
    toggle() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    hide() {
      this.isDropdownVisible = false;
    },
    changeLanguage(locale) {
      i18n.locale = locale;
      localStorage.locale = locale;
      this.isDropdownVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
  .language-switch-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .language-switch {
    position: fixed;
    top: 0px;
    right: 24px;
    font-size: 15px;

  }
  .language-switch-button {
    position: absolute;
    width: 100px;
    right: 24px;
    top: 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    z-index: 2;
    padding: 0px 0 5px 5px;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: white;

    outline: none;

    &.dropdown-open {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom: none 1px transparent;
    }

    &:not(.dropdown-open) {
      -webkit-box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.08);
      -moz-box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.08);
      box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.08);
    }
  }
  .language-switch-button-arrow {
    margin-left: auto;
  }
  .language-switch-items {
    position: relative;
    right: 24px;
    width: 150px;
    top: 28px;
    align-items: flex-start;
    background-color: white;
    z-index: 1;
    &.dropdown-open {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;

      -webkit-box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.08);
      -moz-box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.08);
      box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.08);
    }
  }
  .language-switch-item {
    display: flex;
    padding: 5px 0 0 10px;
    margin-bottom: 0;
    flex-direction: row;
    &:hover {
      background-color: lightgray;
    }
  }
  .language-switch-item:last-child {
    &:hover {
      border-bottom-left-radius: 9px;
      border-bottom-right-radius: 9px;
    }
  }
  .language-switch-item:first-child {
    &:hover {
      border-top-left-radius: 9px;
    }
  }

  .dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: opacity .2s ease-in-out, transform .2s ease-in-out;
  }

  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
  }

</style>