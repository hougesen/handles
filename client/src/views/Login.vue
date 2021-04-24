<template>
  <div class="login">
    <h1>Login</h1>

    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "Login",
  components: { LoginForm }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  align-content: center;
  align-items: center;
  align-self: center;
}
</style>
