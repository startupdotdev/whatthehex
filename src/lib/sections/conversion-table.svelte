<script lang="ts">
	import Table from '$lib/ui/table.svelte';
	export let hex: string;
	export let binary: string;
	export let decimal: string;
</script>

<Table title={'Conversion Table'}>
	<div>
		<div>Hex</div>
		<div>
			{hex}
		</div>
	</div>
	<div>
		<div>Binary</div>
		<div>
			{binary}
		</div>
	</div>
	<div>
		<div>decimal</div>
		<div>
			{decimal}
		</div>
	</div>
</Table>
