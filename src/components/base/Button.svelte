<script lang="ts">
  import type { Snippet } from "svelte";
  import { cn } from "../../utils/cn";
  import type { HTMLButtonAttributes } from "svelte/elements";

  type ButtonProps = {
    xClass?: string;
    children?: Snippet;
    link?: string;
    type?: HTMLButtonAttributes["type"];
  };

  const { link, children, xClass, type = "button", ...restProps }: ButtonProps = $props();
  const className =
    "rounded-full bg-orange-400 cursor-pointer text-100 leading-4 py-[0.875rem] pl-8 pr-[2.0625rem] font-medium text-gray-50 block w-fit";
</script>

{#if link !== undefined}
  <a class={cn(className, xClass)} href={link} {...restProps}>{@render children?.()}</a>
{:else}
  <button class={cn(className, xClass)} {type} {...restProps}>{@render children?.()}</button>
{/if}
