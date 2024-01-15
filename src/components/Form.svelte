<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { formErrors, formValues } from "../stores/form.store";
  import { validators, stringHelpers } from "../helpers";

  const dispatch = createEventDispatcher();
  const onSubmit = () => dispatch("submit");

  const { addWhiteSpaceEveryXChar, removeAllWhiteSpace } = stringHelpers;

  $: expiredError = validators.isNotExpired($formValues.exp_month, $formValues.exp_year, "Card");
  $: $formValues.card_number = addWhiteSpaceEveryXChar(removeAllWhiteSpace($formValues.card_number), 4);
</script>

<div class="grid auto-rows-auto grid-cols-2 gap-y-6 gap-x-4 max-w-md px-6">
  <!-- Card Name -->
  <div class="form-group col-span-2">
    <label for="card_name" class="form-label">Cardholder Name</label>
    <input
      id="card_name"
      type="text"
      placeholder="e.g. Jane Appleseed"
      class="form-input"
      bind:value={$formValues.card_name}
      data-invalid={!!$formErrors.card_name.error}
    />
    <span class="form-error">{$formErrors.card_name.error}</span>
  </div>
  <!-- Card Number -->
  <div class="form-group col-span-2">
    <label for="card_number" class="form-label">Card number</label>
    <input
      id="card_number"
      type="text"
      placeholder="e.g. 1234 5678 9123 0000"
      class="form-input"
      maxlength="19"
      bind:value={$formValues.card_number}
      data-invalid={!!$formErrors.card_number.error}
    />
    <span class="form-error">{$formErrors.card_number.error}</span>
  </div>
  <!-- Exp Date -->
  <div class="form-group col-span-1">
    <span class="form-label">Exp. Date (MM/YY)</span>
    <div id="card_exp" class="grid grid-cols-2 gap-2">
      <!-- Exp month -->
      <input
        id="card_month"
        type="text"
        placeholder="MM"
        class="form-input"
        maxlength="2"
        bind:value={$formValues.exp_month}
        data-invalid={!!$formErrors.exp_month.error || !!expiredError}
      />
      <!-- Exp Year -->
      <input
        id="card_year"
        type="text"
        placeholder="YY"
        class="form-input"
        maxlength="2"
        bind:value={$formValues.exp_year}
        data-invalid={!!$formErrors.exp_year.error || !!expiredError}
      />
    </div>
    <span class="form-error">
      {#if !!$formErrors.exp_month.error}
        {$formErrors.exp_month.error}
      {:else if !!$formErrors.exp_year.error}
        {$formErrors.exp_year.error}
      {:else}
        {expiredError}
      {/if}
    </span>
  </div>
  <!-- Card CVC -->
  <div class="form-group col-span-1">
    <label for="card_cvc" class="form-label">CVC</label>
    <input
      id="card_cvc"
      type="text"
      placeholder="e.g. 123"
      class="form-input"
      maxlength="3"
      bind:value={$formValues.card_cvc}
      data-invalid={!!$formErrors.card_cvc.error}
    />
    <span class="form-error">{$formErrors.card_cvc.error}</span>
  </div>
  <!-- Submit btn -->
  <button
    on:click={onSubmit}
    aria-label="Confirm card details"
    type="button"
    disabled={!$formErrors.isValid}
    class="btn focus-ring">Confirm</button
  >
</div>
