<script lang="ts" module>
	export type TKind = 'primary' | 'secondary';
	export type TSize = 'small' | 'medium' | 'large';
	export interface IProps {
		label: string;
		kind: TKind;
		disabled?: boolean;
		backgroundColor?: string;
		size?: TSize;
		class?: string;
		onClick?: () => void;
	}
</script>

<script lang="ts">
	import { mergeClasses } from '$lib/utils';
	import '$lib/styles/com-button.css';

	const {
		backgroundColor,
		disabled = false,
		size = 'medium',
		kind = 'primary',
		label,
		onClick,
		class: _class
	}: IProps = $props();
</script>

<button
	class={mergeClasses('bli-button', `bli-button--${size}`, `bli-button--${kind}`, _class)}
	type="button"
	style:background-color={backgroundColor}
	onclick={onClick}
	{disabled}
>
	{label}
</button>
