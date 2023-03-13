<script lang="ts">
  export let errors: string[]
</script>

{#if errors.length > 0}
  <ul class="ErrorList">
    {#each errors as err}
      <li>{err}</li>
    {/each}
  </ul>
{/if}

<style>
  .ErrorList {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .ErrorList > li {
    background-color: #fff5f5;
    border: 1px #f78b8b solid;
    color: #bc0202;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
</style>
