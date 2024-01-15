<script lang="ts">
  import Form from "../components/Form.svelte";
  import CardBack from "../components/CardBack.svelte";
  import CardFront from "../components/CardFront.svelte";
  import ThankYou from "../components/ThankYou.svelte";
  import { resetForm } from "../stores/form.store";

  let formConfirmed: boolean = false;
  const onFormSubmit = () => {
    formConfirmed = true;
  };
  const onContinue = () => {
    resetForm();
    formConfirmed = false;
  };
</script>

<svelte:head>
  <title>Interactive card details form</title>
</svelte:head>

<main
  class="flex min-h-screen flex-col lg:flex-row items-center lg:justify-evenly py-6 max-w-screen-2xl mx-auto w-full relative"
>
  <div
    class="relative grid lg:flex lg:flex-col mx-6 mb-[clamp(8.00rem,calc(4.44rem+17.78vw),10.00rem)] lg:mb-0 lg:gap-8"
  >
    <div class="w-5/6 lg:w-auto lg:order-2 place-self-end">
      <CardBack />
    </div>
    <div
      class="absolute top-[57%] lg:relative w-5/6 lg:w-auto lg:-translate-x-8 xl:-translate-x-24"
    >
      <CardFront />
    </div>
  </div>
  {#if !formConfirmed}
    <Form on:submit={onFormSubmit} />
  {:else}
    <ThankYou on:continue={onContinue} />
  {/if}
</main>
