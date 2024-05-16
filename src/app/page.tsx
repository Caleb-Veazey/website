import { fetchSanity, groq } from '@/lib/sanity'
import BackgroundImage from '@/ui/BackgroundImage';
import Modules from '@/ui/modules'
import processMetadata from '@/lib/processMetadata'

export default async function Page() {
	const page = await getPage()
	return (
    <>
      {page.backgroundImage && (
        <BackgroundImage image={page.backgroundImage} alt={`Background image for ${page.title}`} />
			)}
      <Modules modules={page.modules} />
    </>
  );
}

export async function generateMetadata() {
	const page = await getPage()
	return processMetadata(page)
}

async function getPage() {
	return await fetchSanity<Sanity.Page>(
		groq`*[_type == 'page' && metadata.slug.current == 'index'][0]{
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
			tags: ['homepage'],
		},
	)
}
