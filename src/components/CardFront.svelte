<script lang="ts">
  import { formValues } from "../stores/form.store";
</script>

<div class="relative max-w-max w-full">
  <img src="/bg-card-front.png" alt="" class="w-full max-w-[447px] h-auto" />
  <img src="/card-logo.svg" alt="" class="absolute top-[10%] left-[6%] w-12 lg:w-20" />
  <!-- Card number: 0000 0000 0000 0000 -->
  <span
    class="absolute bottom-[30%] left-[6%] text-neutral-white text-[clamp(1.00rem,calc(-0.07rem+5.33vw),1.50rem)] lg:text-3xl tracking-widest"
    >{!$formValues.card_number ? "0000 0000 0000 0000" : $formValues.card_number}</span
  >
  <!-- Card name: Jane Appleseed -->
  <span
    class="absolute bottom-[10%] left-[6%] text-neutral-white/75 text-[clamp(0.50rem,calc(-0.03rem+2.67vw),0.75rem)] tracking-wider uppercase"
    >{!$formValues.card_name ? "Jane Appleseed" : $formValues.card_name}</span
  >
  <!-- Card exp_date: 00/00 -->
  <span
    class="absolute bottom-[10%] right-[6%] text-neutral-white/75 text-[clamp(0.50rem,calc(-0.03rem+2.67vw),0.75rem)] tracking-wider"
    >{!$formValues.exp_month ? "00" : $formValues.exp_month}/{!$formValues.exp_year ? "00" : $formValues.exp_year}</span
  >
</div>
