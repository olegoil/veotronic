
import Layout from "@/components/layout/Layout"
import AboutUs4 from "@/components/sections/AboutUs4"
import Blog6 from "@/components/sections/Blog6"
import CaseStudies4 from "@/components/sections/CaseStudies4"
import Cta3 from "@/components/sections/Cta3"
import FunFact3 from "@/components/sections/FunFact3"
import MainSlider6 from "@/components/sections/MainSlider6"
import MarqueText5 from "@/components/sections/MarqueText5"
import MarqueText6 from "@/components/sections/MarqueText6"
import Partner5 from "@/components/sections/Partner5"
import Pricing3 from "@/components/sections/Pricing3"
import Service6 from "@/components/sections/Service6"
import Testimonial5 from "@/components/sections/Testimonial5"
export default function Home6() {

	return (
		<>

			<Layout headerStyle={5} footerStyle={5}>
				<MainSlider6 />
				<MarqueText5 />
				<FunFact3 />
				<Service6 />
				<AboutUs4 />
				<Cta3 />
				<CaseStudies4 />
				<Pricing3 />
				<MarqueText6 />
				<Testimonial5 />
				<Blog6 />
				<Partner5 />
			</Layout>
		</>
	)
}