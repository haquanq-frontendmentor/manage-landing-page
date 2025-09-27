<script lang="ts">
  import type { Action } from "svelte/action";
  import { AliAvatar, AnishaAvatar, ShanaiAvatar, RichardAvatar } from "../assets/images";
  import Button from "../components/base/Button.svelte";
  import Paragraph from "../components/base/Paragraph.svelte";
  import { cn } from "../utils/cn";

  let currentIndex = $state(1);
  let transitioning = $state(false);

  const carouselAction: Action<HTMLElement> = (element) => {
    const items = Array.from(element.querySelectorAll("[data-slide]") as NodeListOf<HTMLElement>);
    const holder = element.querySelector("[data-holder]") as HTMLElement;
    const prevButton = element.querySelector("[data-btn-prev]") as HTMLButtonElement;
    const nextButton = element.querySelector("[data-btn-next]") as HTMLButtonElement;
    const selectButtons = element.querySelectorAll("[data-btn-select]") as NodeListOf<HTMLElement>;

    const TRANSITION_DURATION = 300;

    items[3].remove();

    const resetStyles = () => {
      holder.removeAttribute("style");
      items.forEach((item) => {
        item.removeAttribute("style");
        item.style.opacity = "0.5";
      });
      items[currentIndex].style.opacity = "";
    };

    resetStyles();

    const moveIndex = (index: number, steps: number) => {
      steps %= items.length;
      steps += items.length;
      return (index + steps) % items.length;
    };

    const moveTo = (targetIndex: number, toRight?: boolean) => {
      if (targetIndex === currentIndex) return;
      const offsetX = items[currentIndex].clientWidth + 32;
      let translateX = offsetX;
      let count = Math.abs(targetIndex - currentIndex);
      if (toRight === undefined) {
        toRight = targetIndex > currentIndex;
      } else {
        count = 1;
      }
      let i = moveIndex(currentIndex, toRight ? 2 : -2);
      while (count--) {
        if (holder.contains(items[i])) items[i] = items[i].cloneNode(true) as HTMLElement;
        items[i].style.position = "absolute";
        items[i].style[toRight ? "right" : "left"] = `-${translateX}px`;
        if (toRight) holder.appendChild(items[i]);
        else holder.insertBefore(items[i], holder.querySelector("[data-slide]"));
        i = moveIndex(i, toRight ? 1 : -1);
        translateX += offsetX;
      }
      translateX -= offsetX;
      if (toRight) translateX *= -1;
      holder.style.transition = `transform ${TRANSITION_DURATION}ms`;
      holder.style.transform = `translateX(${translateX}px)`;
      currentIndex = targetIndex;
      transitioning = true;
      setTimeout(() => {
        while (holder.childElementCount > 3) {
          holder.querySelector(`[data-slide]${toRight ? "" : ":last-child"}`)?.remove();
        }
        resetStyles();
        transitioning = false;
      }, TRANSITION_DURATION);
    };

    const handlePrevClick = () => {
      moveTo(moveIndex(currentIndex, -1), false);
    };

    const handleNextClick = () => {
      moveTo(moveIndex(currentIndex, 1), true);
    };

    const handleSelectClick = (targetIndex: number) => {
      moveTo(targetIndex);
    };

    prevButton.addEventListener("click", handlePrevClick);
    nextButton.addEventListener("click", handleNextClick);
    selectButtons.forEach((selectButton, index) =>
      selectButton.addEventListener("click", () => handleSelectClick(index)),
    );
  };
</script>

{#snippet Testimonial(avatar: string, name: string, quote: string)}
  <li
    class="relative w-[min(100vw-2rem,33.625rem)] px-6 pb-10 shadow-sm transition-opacity duration-300 md:px-10"
    data-slide
  >
    <div class="absolute top-9 right-0 bottom-0 left-0 rounded-md bg-gray-50"></div>
    <div class="relative z-50 flex flex-col items-center text-center">
      <img class="aspect-square w-18" src={avatar} alt="" />
      <h3 class="mt-[1.6875rem] mb-[1.375rem] text-[1.0625rem] leading-none font-bold tracking-[-0.04em]">{name}</h3>
      <blockquote class="font-normal">
        <Paragraph>
          {quote}
        </Paragraph>
      </blockquote>
    </div>
  </li>
{/snippet}

{#snippet TestimonialButton(index: number)}
  <button
    class={cn(
      "aspect-square w-5 rounded-full bg-gray-300 transition-colors hover:bg-orange-400 active:scale-95",
      currentIndex === index && "bg-orange-400",
      transitioning && "pointer-events-none opacity-50",
    )}
    aria-label={`Show testimonial ${index} of 4`}
    data-btn-select
  ></button>
{/snippet}

<section class="flex flex-col items-center overflow-hidden pt-17 pb-20 font-bold md:pt-[9.125rem] md:pb-45">
  <h2 class="text-500 md:text-600 mb-[4.875rem] tracking-tight md:leading-11">What they've said</h2>
  <div class="relative mb-12 flex w-[104.9375rem] justify-center" use:carouselAction>
    <p class="sr-only" aria-live="polite" aria-atomic="true">Showing testimonial {currentIndex} of 4</p>
    <ul class="relative flex gap-x-8" data-holder>
      {@render Testimonial(
        AnishaAvatar,
        "Anisha Li",
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
      )}
      {@render Testimonial(
        AliAvatar,
        "Ali Bravo",
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
      )}
      {@render Testimonial(
        RichardAvatar,
        "Richard Watts",
        "“Manage allows us to provide structure and process. It keep us organized and focused. i can’t stop recommending them to everyone i talk to!”",
      )}
      {@render Testimonial(
        ShanaiAvatar,
        "Shanai Gough",
        "“Their software allows us to track, manage and collaborate on our project from anywhere. It keeps the whole team in-sync without being intrusive”",
      )}
    </ul>

    <div
      class="absolute -bottom-5 z-20 flex w-[min(100vw-2rem,33.625rem)] justify-between *:flex *:aspect-square *:w-10 *:items-center *:justify-center *:rounded-full *:bg-gray-300 *:text-white *:transition-all *:hover:bg-orange-400 *:active:scale-95"
    >
      <button
        class={cn(transitioning && "pointer-events-none opacity-50")}
        type="button"
        aria-label="Previous testimonial"
        data-btn-prev
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
        >
      </button>
      <button
        class={cn(transitioning && "pointer-events-none opacity-50")}
        type="button"
        aria-label="Next testimonial"
        data-btn-next
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
        >
      </button>
    </div>
    <ul class="absolute bottom-[-0.625rem] left-1/2 z-50 flex -translate-x-1/2 gap-2">
      <li>{@render TestimonialButton(0)}</li>
      <li>{@render TestimonialButton(1)}</li>
      <li>{@render TestimonialButton(2)}</li>
      <li>{@render TestimonialButton(3)}</li>
    </ul>
  </div>
  <Button link="">Get Started</Button>
</section>
