<script lang="ts">
  import { jobOptions, zJob } from "../../validator/schema"
  import { useZodValidator } from "../../validator/use-zod-validation"
  import InputField from "../base/input-field.svelte"

  const { validation, errors, invalid } = useZodValidator(zJob)

  // input要素の値（bind:valueしておけば入力操作によって自動的に更新される）
  let value = ""
</script>

<InputField label="職種" errors={$errors} required>
  <select on:blur={() => validation(value)} bind:value aria-invalid={$invalid} required>
    <option value="" hidden>選択してください</option>
    {#each jobOptions as job}
      <option value={job}>
        {job}
      </option>
    {/each}
  </select>
</InputField>
