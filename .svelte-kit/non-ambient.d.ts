
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/design/desktop-active-states.jpg" | "/design/desktop-design.jpg" | "/design/mobile-active-states.jpg" | "/design/mobile-design.jpg" | "/design/mobile-navigation.jpg" | "/images/bg-boost-desktop.svg" | "/images/bg-boost-mobile.svg" | "/images/bg-shorten-desktop.svg" | "/images/bg-shorten-mobile.svg" | "/images/favicon-32x32.png" | "/images/icon-brand-recognition.svg" | "/images/icon-detailed-records.svg" | "/images/icon-facebook.svg" | "/images/icon-fully-customizable.svg" | "/images/icon-instagram.svg" | "/images/icon-pinterest.svg" | "/images/icon-twitter.svg" | "/images/illustration-working.svg" | "/images/logo.svg" | "/robots.txt" | string & {};
	}
}