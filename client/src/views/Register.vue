<template>
  <div class="register">
    <h1>Signup for free</h1>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue';
export default {
  name: 'Register',
  components: { RegisterForm },
};
</script>

<style lang="scss" scoped>
.register {
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
