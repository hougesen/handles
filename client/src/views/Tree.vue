<template>
  <div id="tree">
    <div class="links" v-if="tree">
      <h1 class="title">@{{ tree.treeTitle }}</h1>
      <div v-for="(item, itemIndex) in tree.links" :key="itemIndex" class="link">
        <a :href="item.link" target="_blank" rel="noopener noreferrer">
          <h2>{{ item.title }}</h2>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TreeService from '../helpers/TreeService';

export default {
  name: 'Tree',
  data() {
    return {
      tree: null,
    };
  },
  metaInfo() {
    return {
      title: this.metaTitle,
    };
  },
  beforeMount() {
    this.getTree();
  },
  computed: {
    metaTitle() {
      let title = `${this.$route.params.shortCode}'s Links`;

      return title[0].toUpperCase() + title.substring(1);
    },
  },
  methods: {
    async getTree() {
      const treeShortCode = this.$route.params.shortCode;
      console.log(treeShortCode);
      const request = await TreeService.getTree(treeShortCode);
      console.log('request:', request);
      this.tree = request;

      console.log('this.tree', this.tree);
    },
  },
};
</script>

<style lang="scss" scoped>
#tree {
  background-color: var(--default-background);
  width: 100vw;
  min-height: 100vh;
}
.title {
  color: var(--default-text-color);
  margin: 1rem 0;
}
.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  .link {
    margin: 1rem 0;
    width: 50%;
    border: 2px solid var(--default-text-color);
    text-align: center;
    color: var(--default-text-color);
    background-color: var(--default-background);

    a {
      color: var(--default-text-color);
      text-decoration: none;
    }
    &:hover {
      border: 2px solid var(--default-text-color);
      background-color: var(--default-text-color);
      transition: 0.5s;
      a {
        color: var(--default-background);
        transition: 0.5s;
      }
    }
  }
}
</style>
