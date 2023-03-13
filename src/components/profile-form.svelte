<script lang="ts">
  import EmailInput from "./input/email-input.svelte"
  import AgeInput from "./input/age-input.svelte"
  import BlogInput from "./input/blog-input.svelte"
  import JobSelect from "./input/job-select.svelte"
  import JoinedInput from "./input/joined-input.svelte"
  import NameInput from "./input/name-input.svelte"
  import ProfileTextarea from "./input/profile-textarea.svelte"
  import TwitterInput from "./input/twitter-input.svelte"

  let isPublish = false
</script>

<h1>社員プロフィール</h1>

<div class="Form">
  <div class="InputGroup">
    <NameInput />
    <EmailInput />
    <AgeInput />
    <JoinedInput />
    <JobSelect />

    <div>
      <input type="checkbox" id="check-publish" name="hidden" bind:checked={isPublish} />
      <label for="check-publish">プロフィールを公開する</label>
    </div>

    {#if isPublish}
      <p>プロフィールを公開する場合は、以下の項目も入力が必要です。</p>

      <TwitterInput />
      <BlogInput />
      <ProfileTextarea />
    {/if}
  </div>
</div>

<style>
  .Form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 80vw;
    max-width: 600px;
    margin: auto;
  }
  .InputGroup {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
