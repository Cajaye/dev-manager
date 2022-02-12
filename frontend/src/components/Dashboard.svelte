<script lang="ts">
  type mood = "happy" | "sad";
  type type = "male" | "female" | "human";
  let avatarType: type = "male";
  let avatarMood: mood = "happy";

  function toggleMood() {
    avatarMood === "happy" ? (avatarMood = "sad") : (avatarMood = "happy");
  }
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<main>
  <header>
    <h1>Dev.manager</h1>
    <figure>
      <img
        on:click={toggleMood}
        src="https://avatars.dicebear.com/api/{avatarType}/:seed.svg?mood[]={avatarMood}"
        alt="avatar"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </figure>
  </header>
  <section />
  <section />
</main>

<style lang="scss">
  main {
    header {
      @extend %flexy;
      justify-content: space-between;
      text-align: center;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      @include break(tablet) {
        padding: 0.3rem 2rem;
      }
      padding: 0.3rem;
      h1 {
        @extend %textgradient;
        @include break(tablet) {
          @include fontsize(h3);
        }
        @include fontsize(h4);
      }
      figure {
        @extend %flexy;
        img {
          cursor: pointer;
          object-fit: cover;
          height: 3rem;
          width: 3rem;
        }
        svg {
          cursor: pointer;
          margin-left: 1rem;
          width: 1.5rem;
          height: 1.5rem;
          transition: all;
          transition-duration: 500ms;
        }
        svg:hover {
          transform: rotate(90deg);
        }
      }
    }
  }
</style>
