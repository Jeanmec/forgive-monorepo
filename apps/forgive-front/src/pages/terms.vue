<template>
  <div class="container flex flex-col justify-center mx-auto my-8">
    <Hero />

    <div class="px-12">
      <Divider />

      <article class="mx-auto mt-6 w-full md:w-9/12">
        <h1 class="font-lora text-3xl">Terms of Use</h1>

        <section class="mt-8">
          <h2 class="font-lora text-2xl">1. What this site is</h2>
          <p class="mt-2 text-gray-700">
            Forgive me is an anonymous confession board. You may post a short
            confession, and other visitors may vote on whether it deserves
            forgiveness. It is a game, not a religious sacrament, a legal
            service, or any form of counselling. By using this site you accept
            these terms in full. If you do not accept them, do not use the
            site.
          </p>
        </section>

        <section class="mt-8">
          <h2 class="font-lora text-2xl">2. Who may use this site</h2>
          <p class="mt-2 text-gray-700">
            You must be at least 16 years old to submit or vote on content. The
            site deals with adult themes and is not intended for children.
          </p>
        </section>

        <section class="mt-8">
          <h2 class="font-lora text-2xl">3. What you post is public</h2>
          <p class="mt-2 text-gray-700">
            Every confession you submit is published immediately and shown to
            everyone. It cannot be edited or withdrawn by you once sent. Do not
            post anything you are not prepared to see published permanently,
            and do not include names, addresses, workplaces or any detail that
            could identify you or another person.
          </p>
        </section>

        <section class="mt-8">
          <h2 class="font-lora text-2xl">4. Prohibited content</h2>
          <p class="mt-2 text-gray-700">
            Anonymity is not a licence. The following content is strictly
            forbidden, whether presented as a real confession, a joke, a
            quotation or a work of fiction.
          </p>

          <div
            class="mt-4 rounded-md border-2 border-red-300 bg-red-50 px-4 py-3"
          >
            <h3 class="font-bold text-red-800">
              Child sexual abuse material — zero tolerance
            </h3>
            <p class="mt-1 text-gray-700">
              Any content that depicts, describes, sexualises, solicits or
              promotes sexual activity involving a minor is absolutely
              prohibited. This is a serious criminal offence in France and in
              nearly every jurisdiction. Such content will be removed and
              reported to the competent authorities, together with any
              technical information available to us. There is no exception to
              this rule, and no context in which such a post is acceptable.
            </p>
          </div>

          <p class="mt-4 text-gray-700">Also prohibited:</p>
          <ul class="mt-2 list-disc space-y-2 pl-6 text-gray-700">
            <li>
              <span class="font-bold">Insults and harassment.</span> Abuse,
              intimidation, humiliation or repeated targeting of a person or
              group.
            </li>
            <li>
              <span class="font-bold">Hate speech.</span> Content that attacks,
              degrades or incites hatred or discrimination against people on
              the basis of origin, ethnicity, nationality, skin colour,
              religion, sex, sexual orientation, gender identity, disability or
              health condition.
            </li>
            <li>
              <span class="font-bold">Violence and terrorism.</span> Threats
              against anyone, incitement to violence, and the glorification,
              promotion or apology of terrorism or crimes against humanity.
            </li>
            <li>
              <span class="font-bold">Content harmful to minors.</span> Any
              other content that endangers, exploits or is directed at a child.
            </li>
            <li>
              <span class="font-bold">Personal data of others.</span> Naming,
              identifying or exposing a third party — names, contact details,
              addresses, workplaces, photographs, or facts about their private
              life.
            </li>
            <li>
              <span class="font-bold">Sexually explicit material.</span>
              Pornographic or graphically sexual descriptions.
            </li>
            <li>
              <span class="font-bold">Other illegal content.</span> Anything
              promoting or facilitating an offence, including trafficking in
              drugs, weapons, human beings, stolen data or counterfeit goods.
            </li>
            <li>
              <span class="font-bold">Self-harm and suicide.</span> Content
              encouraging or instructing others to harm themselves.
            </li>
            <li>
              <span class="font-bold">Spam and manipulation.</span> Advertising,
              links, scams, automated posting, or artificially inflating votes.
            </li>
          </ul>
        </section>

        <section class="mt-8">
          <h2 class="font-lora text-2xl">5. Enforcement</h2>
          <p class="mt-2 text-gray-700">
            We may remove any content that breaches these terms, at any time
            and without notice or justification. We may block access to the site
            for anyone who repeatedly breaches them. Content that appears to
            constitute a criminal offence — in particular anything covered by
            the zero-tolerance rule above — will be reported to the competent
            authorities.
          </p>
          <p v-if="contactEmail" class="mt-2 text-gray-700">
            If you see content that breaches these rules, report it to us at
            <a
              :href="`mailto:${contactEmail}`"
              class="font-bold text-blue-800 underline active:text-red-500"
              >{{ contactEmail }}</a
            >
            with enough detail to identify the post. We review reports and act
            on them as quickly as we reasonably can.
          </p>
        </section>

        <section class="mt-8">
          <h2 class="font-lora text-2xl">6. Privacy</h2>
          <p class="mt-2 text-gray-700">
            There is no account, no sign-up and no password, and no author, IP
            address or device identifier is attached to a confession. What we
            store and what we do not is set out in full on our
            <NuxtLink
              href="/privacy"
              class="font-bold text-blue-800 underline active:text-red-500"
              >Privacy page</NuxtLink
            >.
          </p>
        </section>

        <section class="mt-8">
          <h2 class="font-lora text-2xl">7. No warranty</h2>
          <p class="mt-2 text-gray-700">
            The site is provided as is, without any guarantee of availability,
            continuity or preservation of content. Confessions may be lost or
            deleted at any time. Content published here is written by
            anonymous visitors and does not represent our views; we make no
            claim as to its truth.
          </p>
        </section>

        <section class="mt-8">
          <h2 class="font-lora text-2xl">8. Changes</h2>
          <p class="mt-2 text-gray-700">
            These terms may be updated at any time, and the version published
            on this page is the one in force. Continuing to use the site after
            a change means you accept the new terms.
          </p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const contactEmail = useRuntimeConfig().public.contactEmail;

useHead({
  title: 'Terms of Use - Forgive me',
  meta: [
    {
      name: 'description',
      content:
        'Rules of use for Forgive me: prohibited content, moderation and privacy.',
    },
  ],
});
</script>
