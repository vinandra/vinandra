<script lang="ts">
	import type { Readable } from 'svelte/store';
	import type { LanyardData } from '$lib/lanyard';
	import Game from './activity/Game.svelte';
	import Spotify from './activity/Spotify.svelte';
	import Custom from './activity/Custom.svelte';

	import { activities } from './activities';

	export let data$: Readable<LanyardData>;

	const activities$ = activities(data$);
</script>

{#if $activities$?.length}
	<div class="flex flex-col gap-4">
		{#each $activities$ as activity}
			{#if activity.type === 0}
				<Game {activity} />
			{:else if activity.type === 2}
				<Spotify {data$} />
			{:else if activity.type === 4}
				<Custom {activity} />
			{/if}
		{/each}
	</div>
{/if}
