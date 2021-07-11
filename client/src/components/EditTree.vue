<template>
  <div class="tree">
    <form @submit.prevent="updateTree" class="tree-form">
      <div v-for="(item, itemIndex) in tree.links" :key="itemIndex" class="link">
        <div class="moveButtons">
          <div class="up" @click="moveItem(itemIndex, 'up')" v-if="itemIndex != 0">
            <svg viewBox="0 0 320 512" class="move-icon">
              <path
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              ></path>
            </svg>
          </div>

          <div class="down" @click="moveItem(itemIndex, 'down')" v-if="itemIndex != tree.links.length - 1">
            <svg viewBox="0 0 320 512" class="move-icon">
              <path
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              ></path>
            </svg>
          </div>
        </div>

        <div class="input-container">
          <div class="input">
            <label> Title: </label>
            <input type="text" v-model="item.title" placeholder="Title" required />
          </div>

          <div class="input">
            <label> Link: </label>
            <input type="url" v-model="item.link" placeholder="Url" required />
          </div>
        </div>

        <button type="button" @click="removeItem(itemIndex)" class="removeLinkButton">X</button>
      </div>

      <button type="button" @click="addItem" class="button cta-secondary">Add new link</button>

      <button id="saveButton" type="submit" class="button cta-primary">Save</button>
    </form>
  </div>
</template>

<script>
import TreeService from '@/helpers/TreeService';
export default {
  name: 'EditTree',
  data() {
    return {
      tree: {
        treeTitle: '',
        links: [
          {
            title: '',
            link: '',
            description: '',
          },
        ],
      },
    };
  },
  computed: {
    getUserId() {
      return this.$store.getters.getUserId;
    },
  },
  beforeMount() {
    this.getUserTree();
  },
  methods: {
    async getUserTree() {
      let request = await TreeService.getTreeList(this.getUserId);
      console.log(request);

      if (request._id != null && request._id != undefined) this.tree = request;
    },

    async updateTree() {
      console.log('updateTree');

      let request;
      if (this.tree._id) {
        request = await TreeService.updateTree(this.tree._id, this.tree.links);
      } else {
        request = await TreeService.newTree(this.getUserId, this.tree.links);
        this.tree._id = request.t._id;
      }

      let button = this.$el.querySelector('#saveButton');
      button.innerHTML = 'Updated';

      setTimeout(() => {
        button.innerHTML = 'Save';
      }, 1200);

      console.log(button.innerHTML);
      console.log(request);
    },

    addItem() {
      console.log('addItem');
      this.tree.links.push({
        title: '',
        link: '',
        description: '',
      });
    },
    removeItem(index) {
      this.tree.links.splice(index, 1);
    },
    moveItem(index, direction) {
      if (direction === 'up') {
        this.tree.links.splice(index - 1, 0, this.tree.links.splice(index, 1)[0]);
      } else {
        this.tree.links.splice(index + 1, 0, this.tree.links.splice(index, 1)[0]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$secondaryColor: #2c2e42;
.tree {
  margin: 1rem;
  @media screen and (min-width: 1367px) {
    width: 50%;
    margin: auto;
  }
}
.tree-form {
  display: flex;
  flex-direction: column;
  .button {
    margin: 0.5rem 0;
  }
  .cta-primary {
    border: none;
    background-color: var(--blue);
    color: var(--default-text-color);
    font-size: 2.5rem;
    border-radius: var(--default-border-radius);
    margin-bottom: 2rem;
  }
  .cta-secondary {
    font-size: 1.125rem;
    color: var(--default-text-color);
    background-color: var(--blue);
    border: none;
    border-radius: var(--default-border-radius);
  }
}
.link {
  display: flex;
  flex-direction: row;

  border-radius: var(--default-border-radius);
  background-color: var(--secondary-background);
  margin: 0.5rem 0;

  padding: 0.5rem;
  color: var(--default-text-color);

  .moveButtons {
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    .up,
    .down {
      width: 100%;
      height: 100%;
      display: flex;
      cursor: pointer;
    }
    .up {
      -webkit-transform: rotate(90deg); // Safari and Chrome
      -moz-transform: rotate(90deg); // Firefox
      -ms-transform: rotate(90deg); // IE 9
      -o-transform: rotate(90deg); // Opera
      transform: rotate(90deg);
    }
    .down {
      -webkit-transform: rotate(270deg); // Safari and Chrome
      -moz-transform: rotate(270deg); // Firefox
      -ms-transform: rotate(270deg); // IE 9
      -o-transform: rotate(270deg); // Opera
      transform: rotate(270deg);
    }

    .move-icon {
      width: 20px;
      fill: var(--default-text-color);
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    label {
      margin-right: 0.5rem;
    }
    .input {
      margin: 0.5rem 0;
    }
    input {
      background: darken($secondaryColor, 10);
      padding: 1rem;
      border-radius: var(--default-border-radius);
      border: none;
      min-width: 300px;

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
  }
}
.removeLinkButton {
  font-size: 2rem;
  background: none;
  border: none;
  color: var(--default-text-color);
  margin: 0 1rem auto auto;
}
</style>
