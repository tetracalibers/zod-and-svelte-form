<script lang="ts">
  import InputField from "../base/input-field.svelte"

  export let value = ""
  export let errors: string[] = []
  export let validation: (value: string) => void

  $: invalid = errors.length > 0
</script>

<InputField label="メールアドレス" {errors} required>
  <input
    type="email"
    name="email"
    required
    aria-invalid={invalid}
    on:blur={() => validation(value)}
    bind:value
  />
</InputField>
