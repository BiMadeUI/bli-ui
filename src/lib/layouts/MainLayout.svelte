<script lang="ts">
	import Navbar from '$lib/layouts/Navbar.svelte';
	import { mergeClasses } from '$lib/utils';
</script>

<div class="flex min-h-screen w-screen flex-row">
	<sidebar class="z-10 h-screen min-h-screen w-12 p-1">
		<Navbar />
	</sidebar>
	<main
		class={mergeClasses(
			'z-0 ml-auto max-h-screen w-full flex-1 overflow-y-auto overflow-x-hidden px-5'
		)}
	>
		<slot></slot>
	</main>
</div>
