<script lang="ts">
  import Aside from "./features/Aside.svelte";
  import Features from "./features/Features.svelte";
  import Footer from "./features/Footer/Footer.svelte";
  import Header from "./features/Header.svelte";
  import Intro from "./features/Intro.svelte";
  import Testimonials from "./features/Testimonials.svelte";
  import Container from "./layouts/Container.svelte";
</script>

<div class="absolute top-0 left-1/2 z-[-1] w-360 -translate-x-1/2">
  <div
    class="absolute top-[500px] right-[-750px] flex -rotate-45 gap-[836px] *:bg-orange-50 md:top-[674px] md:right-[-960px]"
  >
    <div class="h-[clamp(13.75rem,3.0153rem+45.8015vw,25rem)] w-[90rem] rounded-r-full md:h-[436px]">
      <div class="absolute top-0 right-full h-full w-100 bg-inherit"></div>
    </div>
    <div class="relative w-[90rem] appearance-none rounded-l-full md:h-[436px] md:appearance-auto"></div>
  </div>
</div>
<Header />
<main class="overflow-x-hidden">
  <Container>
    <Intro />
    <Features />
  </Container>
  <Testimonials />
</main>
<Aside />
<Footer />
