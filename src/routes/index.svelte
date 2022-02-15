<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import ConversionTable from '$lib/sections/conversion-table.svelte';
	import DetectionDetective from '$lib/sections/detection-detective.svelte';
	import HexRay from '$lib/sections/hex-ray.svelte';
	import {
		isHex,
		isBinary,
		isDecimal,
		hexToHex,
		hexToBinary,
		hexToDecimal,
		binaryToBinary,
		binaryToHex,
		binaryToDecimal,
		decimalToDecimal,
		decimalToBinary,
		decimalToHex
	} from '$lib/thedr';
	import Table from '$lib/ui/table.svelte';
	import { onMount } from 'svelte';

	let i = '';
	let error: boolean = false;

	let detectedHex: bool = false;
	let detectedBinary: bool = false;
	let detectedDecimal: bool = false;

	onMount(async () => {
		i = '0x00000000000012345';
	});

	function parseInput(i: string) {
		let hex: string, binary: string, decimal: string;
		detectedHex = isHex(i);
		detectedBinary = isBinary(i);
		detectedDecimal = isDecimal(i);
		if (detectedHex) {
			hex = hexToHex(i);
			binary = hexToBinary(i);
			decimal = hexToDecimal(i);
		} else if (detectedBinary) {
			binary = binaryToBinary(i);
			hex = binaryToHex(i);
			decimal = binaryToDecimal(i);
		} else if (detectedDecimal) {
			decimal = decimalToDecimal(i);
			hex = decimalToHex(i);
			binary = decimalToBinary(i);
		} else {
			error = true;
		}
		return {
			detectedHex,
			detectedBinary,
			detectedDecimal,
			hex,
			binary,
			decimal
		};
	}

	$: v = parseInput(i);
	$: hex = v['hex'];
	$: binary = v['binary'];
	$: decimal = v['decimal'];
</script>

<svelte:head>
	<title>WhatTheHex</title>
</svelte:head>

<section class="max-w-xl m-auto">
	<div class="mt-16">
		<input bind:value={i} class="border-b py-2 px-4 w-full focus:ring-0 outline-none text-3xl" />
	</div>
	<DetectionDetective {detectedHex} {detectedBinary} {detectedDecimal} />
	<ConversionTable {hex} {binary} {decimal} />
	<HexRay {hex} />
</section>

<style>
	input {
		border-color: transparent;
		border-bottom-color: rgba(0, 255, 0, 0.7);
		border-bottom-width: 3px;
		background-color: rgba(255, 255, 255, 0.1);
	}
</style>
