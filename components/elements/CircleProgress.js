'use client'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
// const percentage = 67

export default function CircleProgress({ percentage, pathColor, trailColor, width, height, textColor }) {
	return (
		<>
			<div style={{ width: `${width ? width : "65px"}`, height: `${height ? height : "65px"}`, margin: "0 auto" }} className="chart2">
				<CircularProgressbar
					value={percentage}
					text={`${percentage}%`}
					// background
					backgroundPadding={0}
					styles={buildStyles({
						backgroundColor: "transparent",
						textColor: `${textColor ? textColor : "#3498DB"}`,
						pathColor: `${pathColor ? pathColor : "#fff"}`,
						trailColor: `${trailColor ? trailColor : "#086AD8"}`,
						strokeLinecap: "butt"

					})} />
			</div>
		</>
	)
}