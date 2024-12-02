<script lang="ts">
	import { NAV_ITEMS } from '$lib/constants/nav';
	import { mergeClasses } from '$lib/utils';
	import { scale } from 'svelte/transition';

	let isHovered = false;
</script>

<header class="sticky top-0 flex items-center justify-center bg-inherit py-2">
	<img src="./favicon.png" alt="favicon" class="h-8 w-8" />
</header>

<!-- <nav
	class="h-[calc(100%-48px)] max-h-[calc(100%-48px)] w-[42px] overflow-y-auto rounded-lg bg-primary p-3 transition-all duration-300 ease-in-out hover:w-fit"
	class:hover:w-52={isHovered}
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
>
	{#each NAV_ITEMS as nav}
		<a
			href={nav.href}
			class="flex items-center gap-4 whitespace-nowrap py-2 text-white transition-all duration-300 ease-in-out"
			in:scale
		>
			<i class={mergeClasses('fa-solid', nav.icon)}></i>
			<span class="opacity-100 duration-300 ease-in-out">{nav.label}</span>
		</a>
	{/each}
</nav> -->
<nav
	class="h-[calc(100%-48px)] max-h-[calc(100%-48px)] w-[42px] overflow-y-auto rounded-lg bg-primary p-3 transition-all duration-300 ease-in-out hover:w-40"
	class:hover:w-40={isHovered}
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
>
	{#each NAV_ITEMS as nav}
		<a
			class="hover:bg-secondary flex items-center gap-4 whitespace-nowrap py-2 text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:pl-2"
			in:scale
			href={nav.href}
		>
			<i class={mergeClasses('fa-solid', nav.icon)}></i>
			<span class="duration-300 ease-in-out">{nav.label}</span>
		</a>
	{/each}
</nav>
