import BlogRollup from './blog/Rollup'
import CreativeModule from './CreativeModule'
import CustomHTML from './CustomHTML'
import FAQList from './FAQList'
import HeroCentered from './HeroCentered'
import HeroPostcard from './HeroPostcard'
import HomePageModule from './HomePageModule'
import BandcampEmbedGrid from './BandcampEmbedGrid'
import EmbedGrid from './EmbedGrid'

export default function Modules({ modules }: { modules?: Sanity.Module[] }) {
	return (
		<>
			{modules?.map((module) => {
				switch (module._type) {
					case 'blog-rollup':
						return <BlogRollup {...module} key={module._key} />
					case 'creative-module':
						return <CreativeModule {...module} key={module._key} />
					case 'custom-html':
						return <CustomHTML {...module} key={module._key} />
					case 'faq-list':
						return <FAQList {...module} key={module._key} />
					case 'hero.centered':
						return <HeroCentered {...module} key={module._key} />
					case 'hero.postcard':
						return <HeroPostcard {...module} key={module._key} />
					case 'home-page':
						return <HomePageModule {...module} key={module._key} />
					case 'bandcampEmbedGrid':
  					return <BandcampEmbedGrid albums={module.albums} key={module._key} />;
					case 'embedGrid':
            return <EmbedGrid key={module._key} albums={module.albums} youTubeVideos={module.youTubeVideos} embedStyle={module.embedStyle} />;

					default:
						return <div data-type={module._type} key={module._key} />
				}
			})}
		</>
	)
}
