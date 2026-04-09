
import Layout from "@/components/layout/Layout"
import Blog2 from "@/components/sections/Blog2"
import CaseStudies2 from "@/components/sections/CaseStudies2"
import Feature3 from "@/components/sections/Feature3"
import Feedback1 from "@/components/sections/Feedback1"
import MainSlider2 from "@/components/sections/MainSlider2"
import OurCompany1 from "@/components/sections/OurCompany1"
import Partner2 from "@/components/sections/Partner2"
import Quote1 from "@/components/sections/Quote1"
import Service2 from "@/components/sections/Service2"
import Team2 from "@/components/sections/Team2"
import WhyChoseUs1 from "@/components/sections/WhyChoseUs1"
export default function Home2() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={2}>
				<MainSlider2 />
				<Feature3 />
				<Quote1 />
				<Service2 />
				<OurCompany1 />
				<Team2 />
				<CaseStudies2 />
				<WhyChoseUs1 />
				<Feedback1 />
				<Blog2 />
				<Partner2 />
			</Layout>
		</>
	)
}