<script lang="ts">
  import { zAge } from "../../validator/schema"
  import { useZodValidator } from "../../validator/use-zod-validation"
  import InputField from "../base/input-field.svelte"

  const { validation, errors, invalid } = useZodValidator(zAge)

  // input要素の値（bind:valueしておけば入力操作によって自動的に更新される）
  let value: number | null = null
</script>

<InputField label="年齢" errors={$errors}>
  <input
    type="number"
    name="age"
    aria-invalid={$invalid}
    on:blur={() => validation(value)}
    bind:value
  />
</InputField>
