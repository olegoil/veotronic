'use client'
import "@/node_modules/react-modal-video/css/modal-video.css"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function VideoPopup({ hero }) {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			{!hero ?


				<div className="btn-video video-wrap">
					<a onClick={() => setOpen(true)} className="tf-video flex-five widget-videos" style={{ cursor: "pointer" }}>
						<i className="icon-Play" />
					</a>
				</div>
				:
				<div className="btn-video flex-three video-wrap wow fadeInUpSmall" data-wow-delay=".5s">
					<a onClick={() => setOpen(true)} className="tf-video flex-five widget-videos" style={{ cursor: "pointer" }}>
						<i className="icon-Play" />
					</a>
					<span className="font-man text-white">Watch IT Videos</span>
				</div>

			}

			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="ZwbUK3LLGGk" onClose={() => setOpen(false)} />
		</>
	)
}