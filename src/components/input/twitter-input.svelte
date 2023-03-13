<script lang="ts">
  import { zTwitter } from "../../validator/schema"
  import { useZodValidator } from "../../validator/use-zod-validation"
  import InputField from "../base/input-field.svelte"

  const { validation, errors, invalid } = useZodValidator(zTwitter)

  // input要素の値（bind:valueしておけば入力操作によって自動的に更新される）
  let value = ""
</script>

<InputField label="Twitter ID" errors={$errors}>
  <input
    type="text"
    name="twitter"
    required
    aria-invalid={$invalid}
    on:blur={() => validation(value)}
    bind:value
  />
</InputField>
