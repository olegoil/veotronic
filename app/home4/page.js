
import Layout from "@/components/layout/Layout"
import Blog4 from "@/components/sections/Blog4"
import CanDoIt1 from "@/components/sections/CanDoIt1"
import Contact2 from "@/components/sections/Contact2"
import Faq1 from "@/components/sections/Faq1"
import Feature6 from "@/components/sections/Feature6"
import Feature7 from "@/components/sections/Feature7"
import MainSlider4 from "@/components/sections/MainSlider4"
import MarqueText2 from "@/components/sections/MarqueText2"
import Partner3 from "@/components/sections/Partner3"
import Service4 from "@/components/sections/Service4"
import Team4 from "@/components/sections/Team4"
import Testimonial3 from "@/components/sections/Testimonial3"
import WhyChoseUs3 from "@/components/sections/WhyChoseUs3"
export default function Home4() {

	return (
		<>

			<Layout headerStyle={4} footerStyle={4}>
				<MainSlider4 />
				<Feature6 />
				<CanDoIt1 />
				<Feature7 />
				<Service4 />
				<Team4 />
				<MarqueText2 />
				<WhyChoseUs3 />
				<Faq1 />
				<Testimonial3 />
				<Contact2 />
				<Blog4 />
				<Partner3 />
			</Layout>
		</>
	)
}