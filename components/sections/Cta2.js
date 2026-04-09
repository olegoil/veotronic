
import Link from "next/link"

export default function Cta2() {
	return (
		<>

			<section className="section-cta flex-three flex-wrap ">
				<div className="cta-left bg-5 flex-six flex-wrap">
					<i className="icon-chat" />
					<p>Let’s <span className="font-italic">Discuss &amp; Start </span> IT Consultations</p>
					<Link href="/#" className="let-talk"><span>Let’s Talk</span><i className="icon-angle-right" /></Link>
				</div>
				<div className="cta-right bg-8 flex-three flex-wrap">
					<ul className="image-list flex-three">
						<li>
							<img src="/assets/images/avata/avt1.jpg" alt="Image list" />
						</li>
						<li>
							<img src="/assets/images/avata/avt2.jpg" alt="Image list" />
						</li>
						<li>
							<img src="/assets/images/avata/avt3.jpg" alt="Image list" />
						</li>
						<li>
							<i className="icon-plus" />
						</li>
					</ul>
					<p className="font-man"><span> 1.8 million+ </span> Trusted Clients</p>
				</div>
			</section>
		</>
	)
}
