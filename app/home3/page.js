
import Layout from "@/components/layout/Layout"
import AboutUs2 from "@/components/sections/AboutUs2"
import Blog3 from "@/components/sections/Blog3"
import Feature4 from "@/components/sections/Feature4"
import Feature5 from "@/components/sections/Feature5"
import FunFact1 from "@/components/sections/FunFact1"
import MainSlider3 from "@/components/sections/MainSlider3"
import OptimizeSolutions from "@/components/sections/OptimizeSolutions"
import Pricing1 from "@/components/sections/Pricing1"
import Process1 from "@/components/sections/Process1"
import Service3 from "@/components/sections/Service3"
import Team3 from "@/components/sections/Team3"
import Testimonial2 from "@/components/sections/Testimonial2"
import WhyChoseUs2 from "@/components/sections/WhyChoseUs2"
export default function Home3() {

	return (
		<>

			<Layout headerStyle={3} footerStyle={3}>
				<MainSlider3 />
				<AboutUs2 />
				<Feature4 />
				<OptimizeSolutions />
				<Service3 />
				<Feature5 />
				<Team3 />
				<Process1 />
				<WhyChoseUs2 />
				<FunFact1 />
				<Pricing1 />
				<Testimonial2 />
				<Blog3 />
			</Layout>
		</>
	)
}