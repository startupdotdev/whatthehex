<script lang="ts">
	export let title = 'Put a title';
</script>

<section class="mt-16">
	<div class="px-3 my-2 text-2xl">{title}</div>
	<div class="p-4 dark-bg ">
		<slot />
	</div>
</section>
