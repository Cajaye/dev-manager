<script lang="ts">
  import { Link } from "svelte-navigator";
  import Form from "./Form.svelte";
  import Header from "./Header.svelte";
</script>

<svelte:head>
  <title>Register</title>
</svelte:head>

<Header />
<section>
  <h1>Welcome, Newbie</h1>
  <Form />
  <p>Aleady have an account? <Link to="../login">login</Link></p>
</section>

<style lang="scss">
  section {
    @extend %section;
    height: 100vh;
    gap: 0;
    @include break(tablet) {
      margin: 0rem;
    }
    margin: 2rem;
    h1 {
      @include break(tablet) {
        @include fontsize(h1);
        color: $gen-color;
      }
      @include fontsize(h2);
      margin-bottom: 1.6rem;
    }
  }
  p {
    @include fontsize(p);
    margin-top: 2rem;
  }
</style>
