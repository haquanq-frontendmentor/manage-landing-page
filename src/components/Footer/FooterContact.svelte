<script lang="ts">
  import type { Action } from "svelte/action";
  import Button from "../../components/base/Button.svelte";
  import Paragraph from "../../components/base/Paragraph.svelte";

  let errorMessage = $state("");

  const formAction: Action<HTMLFormElement> = (form) => {
    const input = form.querySelector("#email-input") as HTMLInputElement;
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (input.validity.valueMissing) {
        errorMessage = "Please fill out this field.";
      } else if (input.validity.typeMismatch) {
        errorMessage = "Please provide a valid email.";
      } else {
        errorMessage = "";
        alert("We have received your email!");
        input.value = "";
      }
    });
  };
</script>

<form use:formAction novalidate>
  <h2 class="sr-only">Subscribe to our newsletter</h2>
  <div class="flex items-start gap-2">
    <div class="relative w-full">
      <label class="sr-only" for="email-input">Email address</label>
      <input
        class="text-100 h-11 w-full rounded-full border border-transparent bg-gray-50 px-[1.4375rem] tracking-[-0.01em] aria-[invalid=true]:border-orange-400"
        type="email"
        id="email-input"
        required
        placeholder="Updates in your inbox..."
        aria-invalid={errorMessage !== ""}
        aria-describedby="email-input-hint"
      />
      <span
        class="text-100 absolute top-full left-0 block pt-2 text-orange-400"
        id="email-input-hint"
        hidden={errorMessage === ""}>{errorMessage}</span
      >
    </div>
    <Button xClass="w-16 px-0 shrink-0" type="submit">Go</Button>
  </div>
</form>
