<script lang="ts">
  import Aside from "./features/Aside.svelte";
  import Features from "./features/Features.svelte";
  import Header from "./features/Header.svelte";
  import Intro from "./features/Intro.svelte";
  import Container from "./layouts/Container.svelte";
</script>

<Header />
<main class="overflow-x-hidden">
  <Container>
    <Intro />
    <Features />
  </Container>
</main>
<Aside />
