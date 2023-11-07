<script lang="ts">
    import { onDestroy } from "svelte";
    import { alert } from "globals";

    export let ms = 3000;
    let visible: boolean;
    let timeout: NodeJS.Timeout;

    const onAlertChange = (message: string, ms: number) => {
        clearTimeout(timeout);
        if (!message) {
            visible = false;
        } else {
            visible = true;
            if (ms > 0) timeout = setTimeout(() => { 
              visible = false;
              $alert = ""; 
            }, ms);
        }
    };

    $: onAlertChange($alert, ms);
    onDestroy(() => clearTimeout(timeout));
</script>

{#if visible}
<div on:click={() => $alert = ""}>
  <i class="fa-solid fa-info"></i>
  <p class="o-text">{ $alert }</p>
</div>
{/if}

<style>
div {
  position: fixed;
  cursor: pointer;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  border-radius: 0.2rem;
  border: 1px solid red;
  background-color: #6d6d6d;
  color: #fff;
  font-weight: 700;
  padding: 0.5rem 1.4rem;
  font-size: 1.5rem;
  z-index: 100;
  opacity: 95%;
}
div p {
  color: #fff;
}
div i {
  height: 1.6rem;
  fill: currentcolor;
  width: 1.4rem;
  margin-right: 0.5rem;
}
</style>