<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const onContinue = () => dispatch("continue");
</script>

<div class="flex flex-col gap-y-12 gap-x-4 max-w-md text-center w-full px-6">
  <svg class="self-center" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"
    ><circle cx="40" cy="40" r="40" fill="url(#a)" /><path
      d="M28 39.92 36.08 48l16-16"
      stroke="#fff"
      stroke-width="3"
    /><defs
      ><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"
        ><stop stop-color="#6348FE" /><stop offset="1" stop-color="#610595" /></linearGradient
      ></defs
    ></svg
  >
  <div class="flex flex-col gap-3">
    <p class="uppercase text-3xl tracking-widest">Thank You!</p>
    <p class="text-neutral-dark-gray text-lg">We've added your card details</p>
  </div>
  <button on:click={onContinue} aria-label="Continue" type="button" class="btn focus-ring">Continue</button>
</div>
