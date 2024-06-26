import {
	createClient,
	type QueryParams,
	type ResponseQueryOptions,
} from 'next-sanity'
import dev from '@/lib/env'
export { default as groq } from 'groq'

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2024-04-01',
	useCdn: !dev,
})

export function fetchSanity<T = any>(
	query: string,
	{
		params = {},
		...next
	}: { params?: QueryParams } & ResponseQueryOptions['next'] = {},
) {
	const timestamp = Date.now(); // Generate a timestamp or use any other unique value
  const cacheKey = `cache-${timestamp}`;
	return client.fetch<T>(query, { ...params, [cacheKey]: '' }, {
    ...(dev
      ? {
          token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
          perspective: 'previewDrafts',
        }
      : {
          perspective: 'published',
        }),
    next: {
      revalidate: dev ? 0 : false,
      ...next,
    },
  });
}
