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
        <svg
          on:click={() => navigate("../register")}
          xmlns="http://www.w3.org/2000/svg"
          class=""
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  </article>
  <section>
    <div class="one">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat
      quidem omnis. Voluptas itaque nisi repellat, quae doloribus modi nemo
      praesentium sint illo sit dolorem?
    </div>
    <div class="two">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat
      quidem omnis. Voluptas itaque nisi repellat, quae doloribus modi nemo
      praesentium sint illo sit dolorem?
    </div>
  </section>
</section>

<style lang="scss">
  section {
    margin: auto;
    letter-spacing: 0.6px;
    color: $gen-color;
    padding: 3rem;
    @extend %section;
    @include break(laptop) {
      @include grid-column-layouts(2);
    }

    article {
      align-self: center;
      div {
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
          padding: 1.85rem 0;
          width: fit-content;
        }
        div {
          display: flex;
          align-items: center;
          color: #fff;
          input[type="button"] {
            cursor: pointer;
            @extend %base-buttons;
            padding-right: 2.5em;
            margin-right: 0.25rem;
          }
          svg {
            cursor: pointer;
            animation-duration: 1.4s;
            animation-iteration-count: infinite;
            animation-name: bounce-1;
            animation-timing-function: linear;
            margin-left: -45px;
            height: 2rem;
          }
        }
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
