<script lang="ts">
  import { zProfileText } from "../../validator/schema"
  import { useZodValidator } from "../../validator/use-zod-validation"
  import InputField from "../base/input-field.svelte"

  const { validation, errors, invalid } = useZodValidator(zProfileText)

  // input要素の値（bind:valueしておけば入力操作によって自動的に更新される）
  let value = ""
</script>

<InputField label="自己紹介" description="20字以上120文字以下" errors={$errors} required>
  <textarea
    name="profile"
    required
    aria-invalid={$invalid}
    on:blur={() => validation(value)}
    bind:value
  />
</InputField>
