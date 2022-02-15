<script lang="ts">
	export let detectedBinary = false;
	export let detectedDecimal = false;
	export let detectedHex = false;
</script>

<div>
	<div class:isActive={detectedBinary}>Binary 01</div>
	<div class:isActive={detectedDecimal}>Decimal 10</div>
	<div class:isActive={detectedHex}>Hex 0X</div>
</div>

<style>
	.isActive {
		color: var(--primary-green);
	}
</style>
