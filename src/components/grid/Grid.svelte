<script lang="ts">
  import Pixel from "@/grid/Pixel.svelte";
  import { dimensions, cleared } from "globals";
  import { getNeededNumberOfSquares } from "$lib";

  $: squares = getNeededNumberOfSquares(500 / $dimensions);
</script>

<div class="o-grid-wrapper">
  {#key squares}
    {#key $cleared}
      {#each { length: squares } as _}
        <Pixel />
      {/each}
    {/key}
  {/key}
</div>