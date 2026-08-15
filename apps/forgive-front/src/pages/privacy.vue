<template>
  <div class="container flex flex-col justify-center mx-auto my-8">
    <Hero />

    <div class="px-12">
      <Divider />

      <article class="mx-auto mt-6 w-full md:w-9/12">
        <h1 class="font-lora text-3xl">Privacy</h1>

        <p class="mt-6 text-gray-700">
          Confession only works if it stays secret. This page states exactly
          what we keep and what we do not.
        </p>

        <section class="mt-8">
          <h2 class="font-lora text-2xl">No account, no identity</h2>
          <p class="mt-2 text-gray-700">
            There is no sign-up, no email address and no password. We never ask
            who you are, so we cannot know. Nothing links a confession back to
            the person who wrote it.
          </p>
        </section>

        <section class="mt-8">
          <h2 class="font-lora text-2xl">What a confession stores</h2>
          <p class="mt-2 text-gray-700">
            A published confession consists only of the text you wrote and the
            date it was sent. No IP address, no device fingerprint and no
            author is attached to it.
          </p>
        </section>

        <section class="mt-8">
          <h2 class="font-lora text-2xl">Your votes stay with you</h2>
          <p class="mt-2 text-gray-700">
            Only the vote totals are stored on the server. The record of which
            confessions you personally judged is kept in your browser's local
            storage and never leaves your device — clearing your browser data
            erases it and lets you vote again.
          </p>
        </section>

        <section class="mt-8">
          <h2 class="font-lora text-2xl">Confessions are public</h2>
          <p class="mt-2 text-gray-700">
            Anything you submit is shown to everyone and cannot be edited or
            taken back. Never include names, places or details that could
            identify you or someone else.
          </p>
          <p class="mt-2 text-gray-700">
            Because confessions are stored without any identifier, we have no
            way to find, retrieve or delete the specific posts made by one
            visitor. Please take this into account before you write.
          </p>
        </section>

        <p class="mt-8 text-gray-700">
          The rules on what may be posted are set out in our
          <NuxtLink
            href="/terms"
            class="font-bold text-blue-800 underline active:text-red-500"
            >Terms of Use</NuxtLink
          >.
        </p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Privacy - Forgive me',
  meta: [
    {
      name: 'description',
      content:
        'What Forgive me stores and what it does not: no account, no IP address, no author attached to a confession.',
    },
  ],
});
</script>
