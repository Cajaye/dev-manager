<script lang="ts">
  const nav = [
    {
      name: "project 1",
    },
    {
      name: "project 2",
    },
    {
      name: "project 3",
    },
  ];
</script>

<section>
  <nav>
    <ul>
      {#each nav as project}
        <li>{project.name}</li>
      {/each}
    </ul>
  </nav>
</section>

<style lang="scss">
  section {
    nav {
      ul {
        @extend %flexy;
      }
    }
  }
</style>
