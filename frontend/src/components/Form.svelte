<script lang="ts">
</script>

<form on:submit>
  <div>
    <label for="name">Name</label>
    <input type="name" name="" placeholder="Dev name" />
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" name="" id="" placeholder="example@email.com" />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" name="" id="" placeholder="Use a strong password" />
  </div>
  <div>
    <input type="submit" value="Submit" />
  </div>
</form>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    div {
      label {
        @include fontsize(p);
        text-align: justify;
        display: block;
        margin-bottom: 1rem;
      }
    }
    input:not([type="submit"]) {
      @extend %form-inputs;
    }
    input[type="submit"] {
      margin-top: 1rem;
      @extend %base-buttons;
    }
    input {
      width: 100%;
    }
    input:focus-visible:not([type="submit"]) {
      outline: 2px solid blue;
    }
  }
</style>
