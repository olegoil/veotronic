'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import { myTesHome5 } from "@/utils/swiperOptions"
import Link from "next/link"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
export default function ServiceDetails() {
    const [isTab, setIsTab] = useState(1)
    const [isVisible, setIsVisible] = useState(true)
    const handleTab = (i) => {
        setIsTab(i)
        setIsVisible(false)
        setTimeout(() => {
            setIsVisible(true)
        }, 200)
    }
    return (
        <>

            <Layout breadcrumbTitle="Mobile App Development">
             <div>
    {/* Hero Section - Custom Software Development заменен на Mobile Development */}
    <section className="pt-130 pb-130 skill-team-member">
        <div className="tf-container">
            <div className="row align-center">
                <div className="col-md-12 col-lg-5">
                    <div className="skill-team-content">
                        <div className="heading-title mb-40">
                            <span className="sub-title texts-blue font-man">Built for You</span>
                            <h2 className="title">Mobile App Development</h2>
                            <p className="des">Every business deserves a mobile presence that works flawlessly. We build native, hybrid, and PWA applications that solve real business challenges, deliver exceptional user experiences, and scale as you grow. From iOS and Android to cross-platform solutions — we deliver clean, performant, and secure mobile code.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="skill-team-image-center">
                        <img src="/assets/images/team/team-skill.jpg" alt="mobile development" />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="skill-team-image-right">
                        <img src="/assets/images/team/team-skill1.jpg" alt="mobile apps" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Tabs Section - End-to-End Mobile Development */}
    <section className="service-section-4 pt-122 pb-130">
        <div className="tf-container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading-title center m0-auto w-760 mb-70">
                        <span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">End-to-End Mobile Development</span>
                        <h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">We deliver ready-to-use mobile solutions that solve real business problems</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="nav nav-tabs-service nav-justified mb-70" id="myTab" role="tablist">
                        <li className="nav-item" onClick={() => handleTab(1)}>
                            <button className={isTab == 1 ? "nav-link active" : "nav-link"} id="home-tab" data-bs-toggle="tab" data-bs-target="#native-tab-pane" type="button" role="tab" aria-controls="native-tab-pane" aria-selected="true">Native iOS & Android</button>
                        </li>
                        <li className="nav-item" onClick={() => handleTab(2)}>
                            <button className={isTab == 2 ? "nav-link active" : "nav-link"} id="retail-tab" data-bs-toggle="tab" data-bs-target="#hybrid-tab-pane" type="button" role="tab" aria-controls="hybrid-tab-pane" aria-selected="false">Hybrid & Cross-Platform</button>
                        </li>
                        <li className="nav-item" onClick={() => handleTab(3)}>
                            <button className={isTab == 3 ? "nav-link active" : "nav-link"} id="education-tab" data-bs-toggle="tab" data-bs-target="#pwa-tab-pane" type="button" role="tab" aria-controls="pwa-tab-pane" aria-selected="false">Progressive Web Apps</button>
                        </li>
                        <li className="nav-item" onClick={() => handleTab(4)}>
                            <button className={isTab == 4 ? "nav-link active" : "nav-link"} id="healthcare-tab" data-bs-toggle="tab" data-bs-target="#ai-tab-pane" type="button" role="tab" aria-controls="ai-tab-pane" aria-selected="false">AI-Powered Mobile Apps</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        {/* Tab 1 - Native iOS & Android */}
                        <div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="native-tab-pane" role="tabpanel" aria-labelledby="native-tab" tabIndex={0}>
                            <div className="row tab-service-wrap">
                                <div className="col-lg-7">
                                    <div className="tab-service-content">
                                        <div className="heading-title">
                                            <h2 className="title">Native Apps That Users Love</h2>
                                            <p className="des mb-30">You need an app that feels right at home on every device. We build native iOS applications with Swift and SwiftUI, and native Android apps with Kotlin and Jetpack Compose. Full access to device features — camera, GPS, push notifications, biometrics, and more.</p>
                                            <p className="des mb-30">Our native apps deliver unmatched performance, smooth animations, and intuitive user experiences. Whether you need a consumer-facing app or an enterprise mobile solution — we deliver production-ready code that scales.</p>
                                            <ul className="icon-listing mb-50">
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">iOS — Swift, SwiftUI, UIKit, CoreData, Combine</p>
                                                </li>
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">Android — Kotlin, Java, Jetpack Compose, Room, Coroutines</p>
                                                </li>
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">Full device feature integration — camera, GPS, notifications, biometrics</p>
                                                </li>
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">App Store & Google Play deployment and ongoing support</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="tab-service-image relative">
                                        <img src="/assets/images/service/service-h41.jpg" alt="native mobile apps" />
                                        <img src="/assets/images/service/service-h42.jpg" alt="iOS Android development" className="service1" />
                                        <div className="clip" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 2 - Hybrid & Cross-Platform */}
                        <div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="hybrid-tab-pane" role="tabpanel" aria-labelledby="hybrid-tab" tabIndex={0}>
                            <div className="row tab-service-wrap">
                                <div className="col-lg-7">
                                    <div className="tab-service-content">
                                        <div className="heading-title">
                                            <h2 className="title">One Codebase. Both Platforms.</h2>
                                            <p className="des mb-30">Need to launch on iOS and Android quickly without building two separate apps? Our hybrid and cross-platform solutions — React Native, Flutter, and Ionic — deliver a single codebase that runs perfectly on both platforms.</p>
                                            <p className="des mb-30">Faster development, lower cost, and consistent user experience across devices. Perfect for MVPs, business apps, and startups with tight budgets and timelines.</p>
                                            <ul className="icon-listing mb-50">
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">React Native — JavaScript/TypeScript, native performance</p>
                                                </li>
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">Flutter — Dart, beautiful UIs, high performance</p>
                                                </li>
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">Ionic — Angular/React/Vue, web technologies, Capacitor</p>
                                                </li>
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">40-60% faster development • Lower cost • One team, two platforms</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="tab-service-image relative">
                                        <img src="/assets/images/service/service-h41.jpg" alt="hybrid mobile apps" />
                                        <img src="/assets/images/service/service-h42.jpg" alt="React Native Flutter" className="service1" />
                                        <div className="clip" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 3 - Progressive Web Apps (PWA) */}
                        <div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="pwa-tab-pane" role="tabpanel" aria-labelledby="pwa-tab" tabIndex={0}>
                            <div className="row tab-service-wrap">
                                <div className="col-lg-7">
                                    <div className="tab-service-content">
                                        <div className="heading-title">
                                            <h2 className="title">Web That Works Like a Native App</h2>
                                            <p className="des mb-30">No app store required. No installation friction. Progressive Web Apps (PWA) deliver app-like experiences directly through the browser — installable, offline-capable, push notifications, and fast loading.</p>
                                            <p className="des mb-30">Reach users instantly with a URL. Perfect for e-commerce, content platforms, and businesses that want mobile experiences without app store approval delays.</p>
                                            <ul className="icon-listing mb-50">
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">Installable — Add to home screen, works like a native app</p>
                                                </li>
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">Offline-capable — Service workers, cached content</p>
                                                </li>
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">Push notifications — Engage users even when browser is closed</p>
                                                </li>
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">Fast loading — Optimized performance, Core Web Vitals ready</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="tab-service-image relative">
                                        <img src="/assets/images/service/service-h41.jpg" alt="PWA progressive web apps" />
                                        <img src="/assets/images/service/service-h42.jpg" alt="progressive web apps" className="service1" />
                                        <div className="clip" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 4 - AI-Powered Mobile Apps */}
                        <div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="ai-tab-pane" role="tabpanel" aria-labelledby="ai-tab" tabIndex={0}>
                            <div className="row tab-service-wrap">
                                <div className="col-lg-7">
                                    <div className="tab-service-content">
                                        <div className="heading-title">
                                            <h2 className="title">AI-Powered Mobile Experiences</h2>
                                            <p className="des mb-30">Integrate artificial intelligence into your mobile apps — chatbots, voice recognition, image processing, and personalized recommendations. Our team combines native mobile expertise with AI/ML capabilities.</p>
                                            <p className="des mb-30">From smart assistants to predictive analytics — we build mobile apps that learn, adapt, and deliver intelligent experiences to your users.</p>
                                            <ul className="icon-listing mb-50">
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">Chatbots & Voice Assistants — Natural language processing on mobile</p>
                                                </li>
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">Image & Video Recognition — Computer vision for mobile cameras</p>
                                                </li>
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">Personalized Recommendations — AI-driven content and product suggestions</p>
                                                </li>
                                                <li className="flex-three">
                                                    <i className="icon-Check" />
                                                    <p className="font-man">On-device ML — Core ML (iOS) & TensorFlow Lite (Android)</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="tab-service-image relative">
                                        <img src="/assets/images/service/service-h41.jpg" alt="AI mobile apps" />
                                        <img src="/assets/images/service/service-h42.jpg" alt="AI chatbots mobile" className="service1" />
                                        <div className="clip" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Benefits Section - Mobile Development Benefits */}
    <section className="section-benefit pt-122 pb-130">
        <div className="tf-container">
            <div className="row">
                <div className="col-md-6">
                    <div className="benefit-content">
                        <div className="heading-title mb-40">
                            <span className="sub-title texts-blue font-man">Mobile-First Approach</span>
                            <h2 className="title">Why Quality Mobile Development Matters</h2>
                            <p className="des">
                                Your customers expect seamless mobile experiences. Slow apps get uninstalled. Clunky UIs drive users away. We build mobile applications that are fast, intuitive, and reliable — keeping users engaged and your business growing. From performance optimization to pixel-perfect design, every detail matters.
                            </p>
                        </div>
                        <img src="/assets/images/page/dvl-deatils.jpg" alt="mobile development benefits" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="benefit-list">
                        <ul className="benefit-list-item">
                            <li>
                                <div className="flex-three">
                                    <i className="icon-Check" />
                                    <h4>High Performance</h4>
                                </div>
                                <p>Optimized code, fast rendering, and smooth animations. Your app launches quickly and responds instantly — no lag, no crashes, no frustration.</p>
                            </li>
                            <li>
                                <div className="flex-three">
                                    <i className="icon-Check" />
                                    <h4>Enterprise-Grade Security</h4>
                                </div>
                                <p>Data encryption, secure authentication, API security, and compliance with industry standards. Your users' data stays safe.</p>
                            </li>
                            <li>
                                <div className="flex-three">
                                    <i className="icon-Check" />
                                    <h4>Seamless User Experience</h4>
                                </div>
                                <p>Intuitive navigation, pixel-perfect design, and platform-specific UI patterns. Users don't think about your app — they just use it.</p>
                            </li>
                            <li>
                                <div className="flex-three">
                                    <i className="icon-Check" />
                                    <h4>Scalable Architecture</h4>
                                </div>
                                <p>Your app grows with your business. Clean code, modular architecture, and backend integration ready for millions of users.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Who Is Mobile Development For? */}
    <section className="section-performance-auto pt-122 bg-2">
        <div className="tf-container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading-title m0-auto w-680 center mb-60">
                        <span className="sub-title texts-blue font-man">Who Is Mobile Development For?</span>
                        <h2 className="title">Mobile apps deliver the most impact in industries like:</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                    <div className="tf-performance">
                        <span className="number">01</span>
                        <h4 className="title">E-commerce & Retail</h4>
                        <p className="des">Mobile stores, loyalty apps, personalized shopping, one-click checkout, and push notifications for promotions.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                    <div className="tf-performance">
                        <span className="number">02</span>
                        <h4 className="title">Finance & Banking</h4>
                        <p className="des">Mobile banking, payment apps, expense tracking, biometric authentication, and real-time transaction alerts.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                    <div className="tf-performance">
                        <span className="number">03</span>
                        <h4 className="title">Healthcare & Telemedicine</h4>
                        <p className="des">Appointment scheduling, video consultations, health tracking, prescription reminders, and patient portals.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                    <div className="tf-performance">
                        <span className="number">04</span>
                        <h4 className="title">Education & EdTech</h4>
                        <p className="des">Learning platforms, course apps, interactive quizzes, video lectures, and progress tracking for students.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                    <div className="tf-performance">
                        <span className="number">05</span>
                        <h4 className="title">Logistics & Delivery</h4>
                        <p className="des">Real-time tracking, driver apps, route optimization, delivery notifications, and proof of delivery.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                    <div className="tf-performance">
                        <span className="number">06</span>
                        <h4 className="title">Entertainment & Media</h4>
                        <p className="des">Streaming apps, social platforms, gaming, content discovery, and personalized recommendations.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Quality Software Pays for Itself - Mobile Version */}
    {/* <section className="team-member-details pt-30 pb-30">
        <div className="tf-container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="team-member-details-wrap">
                        <div className="widget-team-single bb-blog">
                            <span>Quality Mobile Apps Pay for Themselves</span>
                            <p>A great mobile app isn't a cost — it's an investment in customer engagement and business growth. It automates interactions, improves accessibility, and opens new revenue channels. Off-the-shelf apps force you to adapt. Custom mobile apps adapt to your users. <span class="text-blue2"> That's the difference between an app that sits unused and an app that drives results.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

    {/* Contact Section - Same as original */}
    <section className="section-contact contact-service-details bg-5 pt-130 pb-130">
        <div className="tf-container">
            <div className="row">
                <div className="col-md-5">
                    <div className="content">
                        <div className="heading-title mb-40">
                            <span className="sub-title text-white font-man">Work Inquiry</span>
                            <h2 className="title text-white">Let's Build Your Mobile App</h2>
                            <p className="des font-man text-white">From idea to App Store — we're ready to bring your mobile vision to life. Let's talk about your project.</p>
                        </div>
                        <div className="contact-wrap flex-three mb-40">
                            <div className="icon text-white">
                                <i className="icon-phones" />
                            </div>
                            <div className="contact-content">
                                <span className="font-man text-white">Call For Inquiry</span>
                                <p>+236 (456) 896 22</p>
                            </div>
                        </div>
                        <div className="contact-wrap flex-three">
                            <div className="icon text-white">
                                <i className="icon-envelopes" />
                            </div>
                            <div className="contact-content">
                                <span className="font-man text-white">Send Us Email</span>
                                <p>infotech@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="form-contact-home1 style2">
                        <div className="inner-title-form center mb-30">
                            <h3 className="title-form">Need Help For Your Mobile Project?</h3>
                            <p>We are ready to help with your next mobile app — let's work together</p>
                        </div>
                        <form action="/" className="form-contact-home">
                            <div className="input-group flex-one">
                                <fieldset className="relative mb-20">
                                    <input type="text" className="form-control" id="name-input" placeholder="Name" />
                                    <i className="icon-user" />
                                </fieldset>
                                <fieldset className="relative mb-20">
                                    <input type="email" className="form-control" id="email-input" placeholder="Email" />
                                    <i className="icon-envelopes" />
                                </fieldset>
                            </div>
                            <fieldset className="mb-20">
                                <div className="nice-select" tabIndex={0}>
                                    <span className="current">Choose Services</span>
                                    <ul className="list">
                                        <li data-value className="option selected focus">Choose Services</li>
                                        <li data-value="service" className="option">Native iOS / Android</li>
                                        <li data-value="service" className="option">Hybrid / Cross-Platform</li>
                                        <li data-value="service" className="option">Progressive Web App (PWA)</li>
                                        <li data-value="service" className="option">AI-Powered Mobile App</li>
                                    </ul>
                                </div>
                            </fieldset>
                            <fieldset className="mb-15">
                                <textarea id="mess" name="mess" rows={4} cols={50} placeholder="Tell us about your mobile app idea..." />
                            </fieldset>
                            <fieldset className="center">
                                <button className="btn-submit" type="submit">Send Message Us <i className="icon-right-icon" /></button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

            </Layout>
        </>
    )
}