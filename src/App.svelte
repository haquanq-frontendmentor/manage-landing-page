<script lang="ts">
  import Aside from "./features/Aside.svelte";
  import Features from "./features/Features.svelte";
  import Footer from "./features/Footer/Footer.svelte";
  import Header from "./features/Header.svelte";
  import Intro from "./features/Intro.svelte";
  import Testimonials from "./features/Testimonials.svelte";
  import Container from "./layouts/Container.svelte";
</script>

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
