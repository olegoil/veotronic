
import Layout from "@/components/layout/Layout"
import AboutUs3 from "@/components/sections/AboutUs3"
import Blog5 from "@/components/sections/Blog5"
import CaseStudies3 from "@/components/sections/CaseStudies3"
import Cta2 from "@/components/sections/Cta2"
import FunFact2 from "@/components/sections/FunFact2"
import MainSlider5 from "@/components/sections/MainSlider5"
import MarqueText3 from "@/components/sections/MarqueText3"
import MarqueText4 from "@/components/sections/MarqueText4"
import Partner4 from "@/components/sections/Partner4"
import Pricing2 from "@/components/sections/Pricing2"
import Service5 from "@/components/sections/Service5"
import Testimonial4 from "@/components/sections/Testimonial4"
export default function Home5() {

	return (
		<>

			<Layout headerStyle={5} footerStyle={5}>
				<MainSlider5 />
				<MarqueText3 />
				<FunFact2 />
				<Service5 />
				<AboutUs3 />
				<Cta2 />
				<CaseStudies3 />
				<Pricing2 />
				<MarqueText4 />
				<Testimonial4 />
				<Blog5 />
				<Partner4 />
			</Layout>
		</>
	)
}