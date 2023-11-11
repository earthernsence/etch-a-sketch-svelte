<script lang="ts">
import Pixel from "@/grid/Pixel.svelte";
import { dimensions, cleared, grid } from "globals";
import { getNeededNumberOfSquares } from "$lib";

$: squares = getNeededNumberOfSquares(500 / $dimensions);
</script>

<div class="o-grid-wrapper" bind:this={$grid}>
  {#key squares}
    {#key $cleared}
      {#each { length: squares } as _}
        <Pixel />
      {/each}
    {/key}
  {/key}
</div>
