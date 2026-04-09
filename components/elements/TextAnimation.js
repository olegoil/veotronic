'use client'
import { TypeAnimation } from 'react-type-animation'

export default function TextAnimation({ text1, text2, }) {
	return (
		<>
			<TypeAnimation
				sequence={[
					text1,
					1000,
					text2,
					1000,
				]}
				wrapper="span"
				speed={50}
				style={{ display: 'inline-block', marginLeft: "15px" }}
				repeat={Infinity}
				className="cd-words-wrapper ms-3">
			</TypeAnimation>
		</>
	)
}
