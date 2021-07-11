<template>
  <div>
    <form @submit.prevent="createUser">
      <label for="username"> Username </label>
      <input
        type="username"
        placeholder="lord@voldemort.com"
        name="username"
        v-model="username"
        autocomplete="current-username"
      />

      <label for="email"> Email </label>
      <input type="email" placeholder="lord@voldemort.com" name="email" v-model="email" autocomplete="current-email" />

      <label for="password">Password</label>
      <input type="password" name="password" v-model="password" autocomplete="current-password" />

      <button type="submit">Signup</button>

      <p>
        {{ errMsg }}
      </p>
    </form>
  </div>
</template>

<script>
import AccountService from '@/helpers/AccountService';

export default {
  name: 'RegisterForm',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      errMsg: null,
    };
  },
  methods: {
    async createUser() {
      let request = await AccountService.createUser(this.email, this.password, this.username);
      console.log(request);
      if (request.auth) {
        this.$store.commit('setUserId', request.userId);
        this.$store.commit('setUsername', request.username);

        this.$router.push('/admin');
      } else {
        this.errMsg = request.msg;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$secondaryColor: #2c2e42;

form {
  display: flex;
  flex-direction: column;
  button {
    background-color: var(--secondary-background);
    border: none;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    border-radius: var(--default-border-radius);
    font-size: 1.125rem;
  }
  label {
    margin-top: 1rem;
  }
  input {
    background: lighten($secondaryColor, 5);
    padding: 0.5rem 1rem;
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
}
</style>
