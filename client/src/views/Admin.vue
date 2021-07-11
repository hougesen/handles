<template>
  <div id="admin">
    <div class="button-container">
      <button @click="viewTree">View tree</button>

      <input type="text" v-model="getTreeUrl" id="treeUrl" readonly />
      <button @click="copyTreeUrl">Copy tree link</button>
    </div>

    <NewTree />
  </div>
</template>

<script>
import NewTree from '../components/EditTree.vue';
export default {
  name: 'Admin',
  metaInfo: {
    title: 'Admin',

    htmlAttrs: {
      lang: 'en',
    },
  },

  components: { NewTree },
  computed: {
    getUsername() {
      return this.$store.getters.getUsername;
    },
    getTreeUrl() {
      let location = window.location.origin;
      return `${location}/t/${this.getUsername}`;
    },
  },
  methods: {
    viewTree() {
      window.open(this.getTreeUrl, '_blank');
    },
    copyTreeUrl() {
      let url = this.$el.querySelector('#treeUrl');

      url.setAttribute('type', 'text');
      url.select();
      url.setSelectionRange(0, 99999);
      document.execCommand('copy');
    },
  },
};
</script>

<style lang="scss" scoped>
$secondaryColor: #2c2e42;

#admin {
  width: 100%;
  min-height: 100vh;
  h1 {
    text-align: center;
  }
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;

  input {
    margin: 0 1rem;
  }
}
button {
  background-color: var(--secondary-background);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--default-border-radius);
}
input {
  background: lighten($secondaryColor, 5);
  padding: 1rem;
  border-radius: var(--default-border-radius);
  border: none;
  color: var(--default-text-color);
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--default-text-color);
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--default-text-color);
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--default-text-color);
  }
}
</style>
