<script lang="ts">
  import EmailInput from "./input-v2/email-input.svelte"
  import AgeInput from "./input-v2/age-input.svelte"
  import BlogInput from "./input-v2/blog-input.svelte"
  import JobSelect from "./input-v2/job-select.svelte"
  import JoinedInput from "./input-v2/joined-input.svelte"
  import NameInput from "./input-v2/name-input.svelte"
  import ProfileTextarea from "./input-v2/profile-textarea.svelte"
  import TwitterInput from "./input-v2/twitter-input.svelte"
  import { useZodValidatorAll } from "../validator/store-test"
  import { zBasicProfile, zDetailProfile, zProfile } from "../validator/schema"

  let isPublish = false

  const { values, errors, validation, validationAll } = useZodValidatorAll(
    zBasicProfile.merge(zDetailProfile),
    {
      name: "",
      email: "",
      age: null,
      joined: "",
      job: "",
      twitter: "",
      blog: "",
      profile: ""
    }
  )

  const onSubmit = () => {
    validationAll(zProfile, { hidden: !isPublish })
  }
</script>

<h1>社員プロフィール</h1>

<div class="Form">
  <div class="InputGroup">
    <NameInput
      bind:value={$values.name}
      bind:errors={$errors.name}
      validation={() => validation("name")}
    />
    <EmailInput
      bind:value={$values.email}
      bind:errors={$errors.email}
      validation={() => validation("email")}
    />
    <AgeInput
      bind:value={$values.age}
      bind:errors={$errors.age}
      validation={() => validation("age")}
    />
    <JoinedInput
      bind:value={$values.joined}
      bind:errors={$errors.joined}
      validation={() => validation("joined")}
    />
    <JobSelect
      bind:value={$values.job}
      bind:errors={$errors.job}
      validation={() => validation("job")}
    />

    <div>
      <input type="checkbox" id="check-publish" name="hidden" bind:checked={isPublish} />
      <label for="check-publish">プロフィールを公開する</label>
    </div>

    {#if isPublish}
      <p>プロフィールを公開する場合は、以下の項目も入力が必要です。</p>

      <TwitterInput
        bind:value={$values.twitter}
        bind:errors={$errors.twitter}
        validation={() => validation("twitter")}
      />
      <BlogInput
        bind:value={$values.blog}
        bind:errors={$errors.blog}
        validation={() => validation("blog")}
      />
      <ProfileTextarea
        bind:value={$values.profile}
        bind:errors={$errors.profile}
        validation={() => validation("profile")}
      />
    {/if}
  </div>

  <button class="SubmitButton" type="button" on:click={onSubmit}>Save</button>
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
  .SubmitButton {
    appearance: none;
    border: 1px solid #425b91;
    background: #425b91;
    color: #fff;
    padding: 0.5rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 1rem;
  }
</style>
