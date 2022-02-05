<script lang="ts">
  import { useNavigate } from "svelte-navigator";
  let navigate = useNavigate();
</script>

<header>Someone help me build a Logo!</header>
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
    <div class="grid-item grid-item_1">
      <div />
      <div />
    </div>
    <div class="grid-item  grid-item_2">
      <div />
      <div />
    </div>
    <div class="grid-item  grid-item_3">
      <div />
      <div />
    </div>
  </section>
</section>

<style lang="scss">
  header {
    text-align: center;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    padding: 1.2rem;
  }
  section {
    letter-spacing: 0.6px;
    color: $gen-color;
    @extend %section;
    padding: 1.5rem;
    gap: 15px;
    @include break(tablet) {
      padding: 3rem;
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
          color: $gen-color;
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
        padding: 1rem 1rem;
        border-radius: $border-radius;
      }
      .grid-item_1,
      .grid-item_2,
      .grid-item_3 {
        display: flex;
        align-items: center;

        div:nth-child(1) {
          background-color: $light-grey;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          margin-right: 1rem;
        }
        div:nth-child(2) {
          background-color: $light-grey;
          padding: 1rem;
          width: 60%;
          height: 18px;
        }
      }
      .grid-item:nth-child(2) {
        align-self: flex-end;
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
