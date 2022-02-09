<script lang="ts">
	import Table from '$lib/ui/table.svelte';
	export let hex: string = '';

	$: chunkyBois = hex
		.split('')
		.reverse()
		.reduce((acc, curr) => {
			let head = acc.slice(0, acc.length - 1);
			let tail = acc.slice(-1).length ? acc.slice(-1)[0] : [];

			if (tail.length == 2) {
				// 4. [['a', 'b'], ['c', 'd']], 'e'
				// 2. [['a','b']], 'c'
				return [...head, tail, [curr]];
			} else if (tail.length == 1) {
				// 3. [['a', 'b'], ['c']], 'd'
				// 1. [['a']], 'b'
				return [...head, [tail[0], curr]];
			} else if (tail.length == 0) {
				// 0. [], 'a'
				return [[curr]]; // only init case
			} else {
				throw 'Tail exceeded max size';
			}
		}, [])
		.reverse()
		.map((arr) => {
			return `${arr[1] || 0}${arr[0]}`;
		});
</script>

<Table title={'Hex Ray'}>
	<div>
		<div>Hex</div>
		<div>
			{hex}
		</div>
	</div>
	<div>
		<div>Hex (0x)</div>
		<div>
			0x{hex}
		</div>
	</div>
	<div>
		<div>Byte Pairs</div>
		<div class="flex">
			{#each chunkyBois as boi}
				<div class="bg-black py-2 px-3 mr-3">
					{boi}
				</div>
			{/each}
		</div>
	</div>
</Table>
