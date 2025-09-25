<script lang="ts">
  import type { Snippet } from "svelte";
  import { cn } from "../../utils/cn";

  type ParagraphProps = {
    xClass?: string;
    children: Snippet;
  };
  const { xClass, children }: ParagraphProps = $props();
</script>

<p class={cn("text-base leading-[1.625rem]", xClass)}>{@render children?.()}</p>
