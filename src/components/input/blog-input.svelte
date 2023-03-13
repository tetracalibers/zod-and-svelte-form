<script lang="ts">
  import { zBlog } from "../../validator/schema"
  import { useZodValidator } from "../../validator/use-zod-validation"
  import InputField from "../base/input-field.svelte"

  const { validation, errors } = useZodValidator(zBlog)

  // input要素の値（bind:valueしておけば入力操作によって自動的に更新される）
  let value = ""

  // aria-invalidの値（errorsが変化すれば自動的に更新される）
  $: invalid = $errors.length > 0
</script>

<InputField label="ブログURL" errors={$errors}>
  <input
    type="url"
    name="blog"
    required
    aria-invalid={invalid}
    on:blur={() => validation(value)}
    bind:value
  />
</InputField>
