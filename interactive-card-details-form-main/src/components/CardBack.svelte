<script lang="ts">
  import { formValues } from "../stores/form.store";
</script>

<div class="relative max-w-max w-full">
  <img src="/bg-card-back.png" alt="" class="w-full max-w-[447px] h-auto" />
  <!-- CCV -->
  <span
    class="absolute tracking-widest right-[11%] top-[clamp(3.31rem,calc(-1.02rem+21.67vw),5.75rem)] lg:top-[110px] text-neutral-white text-[clamp(0.63rem,calc(0.36rem+1.33vw),0.75rem)] lg:text-sm"
    >{!$formValues.card_cvc ? "000" : $formValues.card_cvc}</span
  >
</div>
