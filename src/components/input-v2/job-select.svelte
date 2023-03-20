<script lang="ts">
  import { jobOptions } from "../../validator/schema"
  import InputField from "../base/input-field.svelte"

  // input要素の値（bind:valueしておけば入力操作によって自動的に更新される）
  export let value = ""
  export let errors: string[] = []
  export let validation: (value: string) => void

  $: invalid = errors.length > 0
</script>

<InputField label="職種" {errors} required>
  <select on:blur={() => validation(value)} bind:value aria-invalid={invalid} required>
    <option value="" hidden>選択してください</option>
    {#each jobOptions as job}
      <option value={job}>
        {job}
      </option>
    {/each}
  </select>
</InputField>
