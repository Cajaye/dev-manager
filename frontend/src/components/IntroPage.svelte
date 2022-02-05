<script lang="ts">
  import { useNavigate } from "svelte-navigator";
  let navigate = useNavigate();
</script>

<section>
  <article>
    <div>
      <h1>Hello, World! /></h1>
      <p>
        Is it hard to keep track of fake logins,passwords,api keys,basically the
        stuff you use during development? Then this is place for you!
      </p>
      <div>
        <input
          on:click={() => navigate("../register")}
          type="button"
          value="Get Started"
        />
      </div>
    </div>
  </article>
  <section>
    <div class="grid-item" />
    <div class="grid-item" />
    <div class="grid-item" />
  </section>
</section>

<style lang="scss">
  section {
    letter-spacing: 0.6px;
    color: $gen-color;
    padding: 3rem;
    @extend %section;
    gap: 15px;
    @include break(tablet) {
      @include grid-column-layouts(2);
    }

    article {
      align-self: center;
      justify-items: center;
      div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 2rem;
        h1 {
          text-align: left;
          @include break(tablet) {
            @include large-text(lg);
          }
          @include large-text(mid);
        }
        p {
          text-align: left;
          @include fontsize(p);
          line-height: 2rem;
          width: fit-content;
        }
        div {
          input[type="button"] {
            cursor: pointer;
            padding: 0.3em 1em;
            @extend %base-buttons;
          }
        }
      }
    }
    section {
      margin-top: 2rem;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .grid-item {
        @include break(tablet) {
          width: 80%;
        }
        width: 100%;
        max-width: 500px;
        padding: 3.8rem 0;
        border-radius: $border-radius;
        background-color: $gen-color;
      }
      .grid-item:nth-child(2) {
        margin-left: 5rem;
      }
    }
  }

  @keyframes bounce-1 {
    0% {
      transform: translateY(3px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(4px);
    }
  }
</style>
