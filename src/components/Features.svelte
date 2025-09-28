<script lang="ts">
  import { FacebookIcon } from "../assets/images";
  import Paragraph from "../components/base/Paragraph.svelte";
</script>

{#snippet Feature(index: number, title: string, description: string)}
  <li class="flex flex-col gap-6 md:gap-[0.5625rem]">
    <h3
      class="flex flex-col items-center gap-x-7 gap-y-6 text-base font-bold tracking-tight md:flex-row md:items-start"
    >
      <span
        class="text-600 md:text-300 rounded-full text-center text-orange-400 md:w-[4.1875rem] md:bg-orange-400 md:pt-[0.625rem] md:pb-[0.8125rem] md:text-orange-50"
        >{index.toLocaleString(undefined, { minimumIntegerDigits: 2 })}</span
      >
      <span class="rounded-full bg-orange-50 px-6 pt-[0.625rem] pb-[0.8125rem] md:bg-transparent md:px-0">
        {title}
      </span>
    </h3>
    <Paragraph xClass="md:pl-[5.9375rem]">{description}</Paragraph>
  </li>
{/snippet}

<section class="mx-auto grid gap-x-8 gap-y-20 pt-[6.375rem] text-center md:grid-cols-2 md:text-start">
  <div class="flex flex-col items-center md:items-start">
    <h2 class="text-400 md:text-600 mb-8 max-w-105 leading-11 font-bold tracking-tight">
      What’s different about Manage?
    </h2>
    <Paragraph xClass="max-w-82">
      Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for
      modern digital product teams.
    </Paragraph>
  </div>
  <ul class="flex flex-col items-center gap-12 md:items-start md:gap-10" role="list">
    {@render Feature(
      1,
      "Track company-wide progress",
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    )}
    {@render Feature(
      2,
      "Advanced built-in reports",
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports  you need to keep key stakeholders informed.",
    )}
    {@render Feature(
      3,
      "Everything you need in one place",
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    )}
  </ul>
</section>
