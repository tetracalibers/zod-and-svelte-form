<script lang="ts">
  import { zJoined } from "../../validator/schema"
  import { useZodValidator } from "../../validator/use-zod-validation"
  import InputField from "../base/input-field.svelte"

  const { validation, errors, invalid } = useZodValidator(zJoined)

  // input要素の値（bind:valueしておけば入力操作によって自動的に更新される）
  let value = ""
</script>

<InputField label="入社日" errors={$errors} required>
  <input
    type="date"
    name="joined"
    aria-invalid={$invalid}
    required
    on:blur={() => validation(value)}
    bind:value
  />
</InputField>
