<script lang="ts">
  import InputField from "../base/input-field.svelte"

  // input要素の値（bind:valueしておけば入力操作によって自動的に更新される）
  export let value: number | null = null
  export let errors: string[] = []
  export let validation: (value: number | null) => void

  $: invalid = errors.length > 0
</script>

<InputField label="年齢" {errors}>
  <input
    type="number"
    name="age"
    aria-invalid={invalid}
    on:blur={() => validation(value)}
    bind:value
  />
</InputField>
