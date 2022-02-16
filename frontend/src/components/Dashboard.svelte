<script lang="ts">
  import { data } from "../stores/projects";
  type mood = "happy" | "sad";
  type type = "male" | "female" | "human";
  let avatarMoodLS: null | type = null;
  let avatarType: type = avatarMoodLS ?? "male";
  let avatarMood: mood = "happy";

  let search: string;

  let filteredList = [];

  $: {
    if (search && search.trim() !== "") {
      filteredList = $data.filter((item) =>
        item.name.toLowerCase().includes(
          search
            .replace(/[^\w\s]/gi, "") //removes special characters
            .toLowerCase()
            .trim()
        )
      );
    } else {
      filteredList = [...$data];
    }
  }

  import { fade } from "svelte/transition";

  function clickOutside(node: HTMLElement) {
    const handleClickEvent = (event) => {
      if (!node.contains(event.target)) {
        //if node is not a decendant of event.target?
        //target would be whatever we assign use:clickOutside to
        node.dispatchEvent(new CustomEvent("outclick")); //makes a new custom event called outclick
      }
    };
    document.addEventListener("click", handleClickEvent, true); //add event listener to the page

    return {
      destroy() {
        document.removeEventListener("click", handleClickEvent, true);
      },
    };
  }
  //use:clickOutside on:outclick={}

  function focusInput(node: HTMLElement) {
    node.focus();
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
        on:click={() =>
          avatarMood === "happy"
            ? (avatarMood = "sad")
            : (avatarMood = "happy")}
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
  {#if $data.length === 0}
    <p style:text-align="center">Create a new project</p>
  {:else}
    <section>
      {#each filteredList as project (project.id)}
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
        <p style:text-align="center">
          Cannot find any projects with the name of "{search.trim()}"
        </p>
      {/each}
    </section>
  {/if}
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
      @include break(tablet) {
        margin: 4rem;
      }
      margin: 4rem 1rem;

      @extend %flexy;
      justify-content: space-between;
      div {
        @extend %flexy;
        gap: 20px;
        input[type="search"] {
          @include break(tablet) {
            width: 30rem;
          }
          @extend %form-inputs;
          padding-top: 0.6rem;
          padding-bottom: 0.6rem;
        }
        input[type="search"]:focus-visible {
          outline: 2px solid blue;
        }
        svg {
          background-color: $light-grey;
          user-select: none;
          margin-left: -4rem;
          width: 1.5rem;
          height: 1.5rem;
        }
      }
      div {
        input[type="button"] {
          color: #fff;
          cursor: pointer;
          @include break(tablet) {
            @include fontsize(btn);
          }
          @include fontsize(p);
          background-color: $gen-color;
          border: none;
          border-radius: $border-radius;
          outline: none;
          padding: 0.3em 0.6em;
        }
      }
    }
    section {
      margin: 0 4rem;
      display: grid;
      @include break(laptop) {
        @include grid-column-layouts(3);
      }
      align-items: center;
      justify-content: center;
      gap: 2rem;

      div {
        padding: 0.75rem;
        cursor: pointer;
        background-color: $light-grey;
        min-width: 300px;
        figure {
          img {
            border-radius: $border-radius;
            width: 100%;
            object-fit: cover;
            padding: 0;
            margin: 0;
          }
        }
        h1 {
          @include fontsize(h3);
        }
        p {
          @include fontsize(p);
        }
      }
    }
  }
</style>
