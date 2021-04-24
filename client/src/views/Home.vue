<template>
  <div id="dashboard">
    <div class="hero">
      <div class="hero-text">
        <h1>Link Landing Page Generator</h1>
        <p>
          Connect your audience to all your content with just one link
        </p>
      </div>

      <div class="buttons">
        <button @click="goToRegister" class="button primary-cta">Get started for free</button>
        <button @click="goToLogin" class="button secondary-cta">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
    goToLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  width: 100vw;
  min-height: 100vh;
}
.hero {
  width: 100vw;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.buttons {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  .button {
    padding: 1rem;
    border-radius: var(--default-border-radius);
    border: none;
    max-width: 200px;
    font-size: 1.125rem;
    margin: 0.5rem;
  }

  .primary-cta {
    background: var(--secondary-background);
    color: white;
  }
  .secondary-cta {
    padding: 0;
    background: none;
  }
}
</style>
