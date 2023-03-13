<script lang="ts">
  import InputErrorList from "./input-error-list.svelte"
  import RequiredTag from "./required-tag.svelte"

  export let label: string
  export let description = ""
  export let errors: string[]
  export let required = false
</script>

<div class="InputGroupItem">
  <label>
    <div>
      {label}
      {#if required}
        <RequiredTag />
      {/if}
      {#if description.trim().length > 0}
        <p class="InputDescription">{description}</p>
      {/if}
    </div>
    <InputErrorList {errors} />
    <slot />
  </label>
</div>

<style>
  label {
    display: contents;
  }
  .InputGroupItem {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .InputDescription {
    font-size: 0.8rem;
    display: inline;
  }
  .InputDescription::before {
    content: "（";
  }
  .InputDescription::after {
    content: "）";
  }
</style>
