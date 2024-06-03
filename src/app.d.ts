// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: {
				ASSETS?: Fetcher;
			};
			context?: ExecutionContext;
			caches?: CacheStorage;
			cf?: CfProperties;
		}
	}
}

export {};
