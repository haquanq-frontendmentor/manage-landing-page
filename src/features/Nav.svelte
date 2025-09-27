<script lang="ts">
  import type { Action } from "svelte/action";
  import { cn } from "../utils/cn";

  let menuOpening = $state(false);

  const buttonAction: Action<HTMLButtonElement> = (button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation;
      menuOpening = !menuOpening;
    });

    window.addEventListener("resize", (e) => {
      if (window.matchMedia("(min-width: 48em)").matches) {
        if (menuOpening) menuOpening = false;
      }
    });
  };

  const backgroundAction: Action<HTMLElement> = (element) => {
    element.addEventListener("click", () => {
      menuOpening = false;
    });
  };

  const navListAction: Action<HTMLElement> = (element) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    element.addEventListener("keydown", (e) => {
      if (!e.shiftKey && e.key === "Escape") {
        menuOpening = false;
      }
    });

    const focusableElements = element.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>;

    focusableElements[0].addEventListener("keydown", (e) => {
      if (e.shiftKey && e.key === "Tab") {
        focusableElements[focusableElements.length - 1].focus();
      }
    });

    focusableElements[focusableElements.length - 1].addEventListener("keydown", (e) => {
      if (!e.shiftKey && e.key === "Tab") {
        focusableElements[0].focus();
      }
    });

    $effect(() => {
      if (menuOpening) focusableElements[0].focus();
    });
  };
</script>

<nav>
  <button
    class="group relative z-100 flex h-6 flex-col items-center justify-center *:h-1 *:w-[1.5625rem] *:bg-gray-950 md:hidden"
    type="button"
    aria-label="Mobile menu"
    aria-expanded={menuOpening}
    aria-controls="mobile-menu"
    use:buttonAction
  >
    <span class="transition-transform group-aria-expanded:rotate-45"></span>
    <span class="my-[0.1875rem] group-aria-expanded:hidden"></span>
    <span class="transition-transform group-aria-expanded:-mt-1 group-aria-expanded:-rotate-45"></span>
  </button>
  <div
    class={cn(
      "absolute inset-0 hidden h-screen pt-26 [background:var(--gradient-backdrop)] md:static md:block md:h-auto md:p-0 md:[background:initial]",
      menuOpening && "block",
    )}
    id="mobile-menu"
    use:backgroundAction
  >
    <ul
      class="text-300 md:text-100 mx-auto flex w-[min(100%-3rem,25rem)] flex-col items-center gap-x-8 gap-y-[1.9375rem] rounded-sm bg-white py-11 font-bold tracking-tight text-gray-950 md:w-auto md:flex-row md:p-0 md:pt-[0.125rem] md:pr-[0.625rem] md:tracking-[initial] [&_a]:block [&_a]:leading-4 [&_a]:transition-opacity [&_a]:hover:opacity-50"
      use:navListAction
    >
      <li><a href="/">Pricing</a></li>
      <li><a href="/">Product</a></li>
      <li><a href="/">About Us</a></li>
      <li><a href="/">Careers</a></li>
      <li><a href="/">Community</a></li>
    </ul>
  </div>
</nav>
