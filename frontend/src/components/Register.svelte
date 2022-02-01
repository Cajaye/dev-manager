<script lang="ts">
  import { Link } from "svelte-navigator";
  import Form from "./Form.svelte";
</script>

<section>
  <h1>Welcome, newbie</h1>
  <Form />
  <p>Aleady have an account? <Link to="../login">login</Link></p>
</section>

<style lang="scss">
  section {
    @extend %section;
    @include break(tablet) {
      margin: 0rem;
    }
    margin: 2rem;
    h1 {
      @include break(tablet) {
        @include fontsize(h1);
      }
      @include fontsize(h2);
      margin-bottom: 1.6rem;
    }
  }
  p {
    margin-top: 1rem;
  }
</style>
