<script lang="ts">
  import InputField from "../base/input-field.svelte"

  // input要素の値（bind:valueしておけば入力操作によって自動的に更新される）
  export let value = ""
  export let errors: string[] = []
  export let validation: (value: string) => void

  $: invalid = errors.length > 0
</script>

<InputField label="入社日" {errors} required>
  <input
    type="date"
    name="joined"
    aria-invalid={invalid}
    required
    on:blur={() => validation(value)}
    bind:value
  />
</InputField>
