<script lang="ts">
  import { IntroIllustration, SiteLogo } from "../assets/images";
  import Button from "../components/base/Button.svelte";
  import Container from "../layouts/Container.svelte";
  import Nav from "./Nav.svelte";
</script>

<header>
  <Container>
    <div class="flex items-center justify-between pt-10 md:pt-14">
      <div class="shrink-0">
        <a href="/" aria-label="Homepage">
          <img class="h-[1.125rem] md:h-[initial]" src={SiteLogo} alt="" />
        </a>
      </div>
      <Nav />
      <Button xClass="hidden lg:block">Get Started</Button>
    </div>
  </Container>
</header>
