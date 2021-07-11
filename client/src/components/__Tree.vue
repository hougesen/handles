<template>
  <div>
    <h2>Tree</h2>

    <div class="links" v-if="tree">
      <div v-for="(item, itemIndex) in tree.links" :key="itemIndex" class="link">
        <a :href="item.link">
          <h2>
            {{ item.title }}
          </h2>
          <p>
            {{ item.description }}
          </p>
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
  beforeMount() {
    console.log('Tree', this.$route.query);
    // this.getTree();
  },

  methods: {
    async getTree() {
      const request = await TreeService.getTree(this.placeholderId);
      this.tree = request;

      console.log(this.tree);
    },
  },
};
</script>

<style lang="scss" scoped>
.links {
  .link {
    width: 100%;
    border: 5px solid red;
  }
}
</style>
