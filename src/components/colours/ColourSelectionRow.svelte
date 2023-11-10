<script lang="ts">
	import ColourSelector from '@/colours/ColourSelector.svelte';
	import { penColour } from 'globals';
	const COLOURS: Array<string> = ['#000000', '#245f14', '#ff0000', '#add8e6', '#808080', '#37a4ba'];

	let colourPickerEl: HTMLInputElement;

	$: {
		if (colourPickerEl) {
			if (colourPickerEl.value === $penColour)
				colourPickerEl.classList.add('l-colour-selector__selected');
			else colourPickerEl.classList.remove('l-colour-selector__selected');
		}
	}

	function onChange() {
		$penColour = colourPickerEl.value;
	}
</script>

<div class="l-colour-selectors">
	{#each COLOURS as colour}
		<ColourSelector {colour} />
	{/each}
</div>
<div>
	Custom:
	<input
		type="color"
		class="o-pixel o-pixel--selectable"
		value="#000001"
		on:change={onChange}
		bind:this={colourPickerEl}
	/>
</div>
