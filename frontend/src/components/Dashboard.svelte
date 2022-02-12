<script lang="ts">
  type mood = "happy" | "sad";
  type type = "male" | "female" | "human";
  let avatarMoodLS: null | type = null;
  let avatarType: type = avatarMoodLS ?? "male";
  let avatarMood: mood = "happy";

  function toggleMood() {
    avatarMood === "happy" ? (avatarMood = "sad") : (avatarMood = "happy");
  }

  let projects = [
    {
      image:
        "https://images.unsplash.com/photo-1643646736753-04809d58cbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      name: "Big Stuff",
      label: "ongoing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1644300616688-90b3f5f7792a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      name: "Small Stuff",
      label: "hosted",
    },
    {
      image:
        "https://images.unsplash.com/photo-1644251966508-47b1a3d2e56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      name: "Medium Stuff",
      label: "abandoned",
    },
  ];

  let search: string;

  let filteredList = [...projects];

  $: {
    if (search && search.trim() !== "") {
      filteredList = projects.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase().trim())
      );
    } else {
      filteredList = [...projects];
    }
  }

  import { fade } from "svelte/transition";
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
  <nav>
    <div>
      <input
        bind:value={search}
        type="search"
        name="search"
        id="search"
        placeholder="Search for project"
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <div>
      <input type="button" value="New Project" />
    </div>
  </nav>
  <section>
    {#each filteredList as project}
      <div in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
        <figure>
          <img src={project.image} alt="" />
        </figure>
        <div>
          <h1>{project.name}</h1>
          <p>
            <span>{project.label}</span>
          </p>
        </div>
      </div>
    {:else}
      <p>
        Cannot find any projects with the name of "{search}"
      </p>
    {/each}
  </section>
</main>

<style lang="scss">
  main {
    overflow: hidden;
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
        user-select: none;
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
          user-select: none;
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
    nav {
      margin: 4rem;
      @extend %flexy;
      justify-content: space-between;
      div {
        @extend %flexy;
        gap: 20px;
        input[type="search"] {
          width: 30rem;
          @extend %form-inputs;
          padding-top: 0.6rem;
          padding-bottom: 0.6rem;
        }
        input[type="search"]:focus-visible {
          outline: 2px solid blue;
        }
        svg {
          user-select: none;
          margin-left: -4rem;
          width: 1.5rem;
          height: 1.5rem;
        }
      }
      div {
        input[type="button"] {
          @extend %base-buttons;
        }
      }
    }
    section {
      margin: 0 4rem;
      display: grid;
      align-items: center;
      justify-content: center;
      column-gap: 2rem;
      @include grid-column-layouts(3);
      div {
        padding: 0.75rem;
        cursor: pointer;
        background-color: $light-grey;
        img {
          border-radius: $border-radius;
          width: 100%;
          object-fit: cover;
          padding: 0;
          margin: 0;
        }
      }
    }
  }
</style>
