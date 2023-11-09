<script lang="ts">
  import { alert, dimensions, useEraser, useShading, cleared, grid } from "globals";
  import DomToImage from "dom-to-image";
  import { saveAs } from "file-saver";

  function changeDimensions(up: Boolean): void {
    if (up && $dimensions + 1 > 50) {
      $alert = "You cannot have a grid size above 50!";
    } else if (!up && $dimensions - 1 < 1) {
      $alert = "You cannot have a grid size below 1!";
    } else {
      up ? $dimensions++ : $dimensions--;
    }
  } 

  function toggleEraser() {
    $useEraser = !$useEraser;
  }

  function toggleShading() {
    $useShading = !$useShading;
  }

  function formatBoolean(value: Boolean): string {
    return value ? "ON" : "OFF";
  }

  function downloadImage() {
    const dateObj = new Date();
    const y = dateObj.getFullYear();
    const m = dateObj.getMonth() + 1;
    const d = dateObj.getDate();
    if (document) {
      DomToImage.toBlob($grid).then((blob: Blob) => {
        saveAs(blob, `etchasketch-image-${y}-${m}-${d}.png`);
      });
    }
  }

  let minusButton: HTMLButtonElement;
  let plusButton: HTMLButtonElement;

  $: {
    if ($dimensions === 50) {
      plusButton.classList.add("c-ad-slider__button--disabled");
    } else if ($dimensions === 1) {
      minusButton.classList.add("c-ad-slider__button--disabled");
    } else {
      if (minusButton) minusButton.classList.remove("c-ad-slider__button--disabled");
      if (plusButton) plusButton.classList.remove("c-ad-slider__button--disabled");
    }
  }
</script>

<div class="c-options-box">
  <div class="c-options-box__dimensions">
      <div class="o-text__medium">Grid Dimensions</div>
      <br>
      <div class="l-dimension-slider">
          <button on:click="{() => changeDimensions(false)}" class="c-ad-slider__button" bind:this={minusButton}>
              <div class="fas fa-minus"></div>
          </button>
          <input class="o-dimension-slider c-ad-slider__bg" id="slider" name="dimensions" type="range" min="1" max="50" bind:value={$dimensions} />
          <button on:click="{() => changeDimensions(true)}" class="c-ad-slider__button" bind:this={plusButton}>
              <div class="fas fa-plus"></div>
          </button>
      </div>
      <br>
      <div class="o-text" id="dimensions-label">Currently {$dimensions} x {$dimensions}</div>
  </div>
  <br>
  <button class="o-primary-btn" id="eraser-toggle" on:click="{toggleEraser}">Eraser: {formatBoolean($useEraser)}</button>
  <br>
  <button class="o-primary-btn" id="shading-toggle" on:click="{toggleShading}">Shading: {formatBoolean($useShading)}</button>
  <br>
  <button class="o-primary-btn" on:click="{() => $cleared++}">Clear grid</button>
  <br>
  <button class="o-primary-btn" on:click="{downloadImage}">Download image</button>
</div>