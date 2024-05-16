import { fetchSanity, groq } from '@/lib/sanity'
import BackgroundImage from '@/ui/BackgroundImage';
import { notFound } from 'next/navigation'
import Modules from '@/ui/modules'
import processMetadata from '@/lib/processMetadata'

export default async function Page({ params }: Props) {
	const page = await getPage(params)
	if (!page) notFound()
	return (
    <>
      {page.backgroundImage && (
        <BackgroundImage image={page.backgroundImage} alt={`Background image for ${page.title}`} />
			)}
      <Modules modules={page.modules} />
    </>
  );
}

export async function generateMetadata({ params }: Props) {
	const page = await getPage(params)
	if (!page) notFound()
	return processMetadata(page)
}

async function getPage(params: Props['params']) {
	return await fetchSanity<Sanity.Page>(
		groq`*[
			_type == 'page' &&
			metadata.slug.current == $slug &&
			!(metadata.slug.current in ['index', '404'])
		][0]{
			...,
			modules[]{
				...,
				ctas[]{
					...,
					link{
						...,
						internal->{ title, metadata }
					}
				},
				modules[]{
					...,
					ctas[]{
						...,
						link{
							...,
							internal->{ title, metadata }
						}
					}
				}
			},
			backgroundImage
		}`,
		{
			params: { slug: params.slug },
			tags: ['pages'],
		},
	)
}

type Props = {
	params: { slug?: string }
}
