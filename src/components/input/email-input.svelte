<script lang="ts">
  import { zEmail } from "../../validator/schema"
  import { useZodValidator } from "../../validator/use-zod-validation"
  import InputField from "../base/input-field.svelte"

  const { validation, errors, invalid } = useZodValidator(zEmail)

  // input要素の値（bind:valueしておけば入力操作によって自動的に更新される）
  let value = ""
</script>

<InputField label="メールアドレス" errors={$errors} required>
  <input
    type="email"
    name="email"
    required
    aria-invalid={$invalid}
    on:blur={() => validation(value)}
    bind:value
  />
</InputField>
