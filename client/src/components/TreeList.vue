<template>
  <div>
    <h1>Tree list</h1>

    <div v-if="trees">
      <div v-for="(tree, treeIndex) in trees" :key="treeIndex">
        <h2>{{ tree.treeTitle }}</h2>
        <button @click="editTree(tree._id)">
          Edit
        </button>

        <button @click="viewTree(tree._id)">View</button>
      </div>
    </div>
  </div>
</template>

<script>
import TreeService from "@/helpers/TreeService";
export default {
  name: "TreeList",
  data() {
    return {
      trees: null
    };
  },
  computed: {
    getUserId() {
      return this.$store.getters.getUserId;
    }
  },
  beforeMount() {
    this.getTreeList();
  },
  methods: {
    async getTreeList() {
      let request = await TreeService.getTreeList(this.getUserId);
      console.log(request);
      this.trees = request;
    },

    editTree(treeId) {
      console.log("editTree", treeId);
    },

    viewTree(treeId) {
      console.log("viewTree", treeId);
    }
  }
};
</script>

<style lang="scss" scoped></style>
