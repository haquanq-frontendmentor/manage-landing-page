<script>
  import { IntroIllustration } from "../assets/images";
  import Button from "../components/base/Button.svelte";
  import Paragraph from "../components/base/Paragraph.svelte";
</script>

<section
  class="grid gap-x-[clamp(4rem,-5.1875rem+19.1406vw,7.0625rem)] gap-y-8 pt-12 md:grid-flow-dense md:grid-cols-[1fr_min(35rem,50%)] md:pt-[6.875rem]"
>
  <div class="flex justify-center md:col-start-2 md:justify-start">
    <img class="outline-1 -outline-offset-1 md:max-w-[500%]" src={IntroIllustration} alt="" />
  </div>
  <div class="flex flex-col items-center text-center md:items-start md:pt-[3.6875rem] md:text-start">
    <h1 class="text-600 md:text-700 mb-3 max-w-120 leading-10 font-bold tracking-tight md:mb-[2.125rem] md:leading-16">
      Bring everyone together to build better products.
    </h1>
    <Paragraph xClass="mb-7 md:mb-10 max-w-85">
      Manage makes it simple for software teams to plan day-to-day tasks wihle keeping the larger team goals in view
    </Paragraph>
    <Button link="">Get Started</Button>
  </div>
</section>
