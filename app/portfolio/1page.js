'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

export default function ProductsPage() {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    
    useEffect(() => {
        if (submitStatus.message) {
            const timer = setTimeout(() => {
                setSubmitStatus({ type: '', message: '' });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email) {
            setSubmitStatus({ type: 'error', message: 'Пожалуйста, заполните имя и email' });
            return;
        }
        
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });
        
        try {
            const response = await fetch('https://admin.olegtronics.com/xapi/sendmailfree/veotronic', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                setSubmitStatus({ type: 'success', message: '✓ Заявка отправлена! Мы свяжемся с вами в ближайшее время.' });
                setFormData({ name: '', email: '', company: '', message: '' });
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: '✗ Ошибка отправки. Пожалуйста, попробуйте позже.' });
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <>
            <Head>
                <title>Автоматическое заполнение карточек товаров | Veotronic</title>
                <meta name="description" content="AI-система для автоматического заполнения карточек товаров по фото. Распознавание категорий, подбор характеристик, обработка изображений и выгрузка на маркетплейсы. Тысячи товаров одновременно." />
                <meta name="keywords" content="автоматическое заполнение карточек, AI для маркетплейсов, распознавание товаров по фото, нейросеть e-commerce, Wildberries, Ozon, Kaspi" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://veotronic.com/products" />
                <meta property="og:title" content="Автоматическое заполнение карточек товаров | Veotronic" />
                <meta property="og:description" content="Заполнение товарных карточек по фотографии с помощью AI. Распознавание категорий, подбор характеристик, генерация и обработка изображений." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ru_RU" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Наши продукты">
                
                {/* Герой-секция с продуктом */}
                <section className="pt-130 pb-80">
                    <div className="tf-container">
                        <div className="row align-center">
                            <div className="col-lg-7">
                                <div className="heading-title">
                                    <span className="sub-title texts-blue font-man">Veotronic Product</span>
                                    <h1 className="title">Автоматическое заполнение <br />карточек товаров по фото</h1>
                                    <p className="des mb-30">
                                        Сделайте фото или укажите категорию — нейросеть сама подтянет всю необходимую информацию: 
                                        название, характеристики, описание, SEO-данные и сгенерирует или подберет оптимальные изображения.
                                    </p>
                                    <Link href="#contact" className="button-src">Протестировать <i className="icon-angle-right" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <img src="/assets/images/products/auto-listing-hero.jpg" alt="AI автоматическое заполнение карточек товаров" className="border-radius-20" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Как работает — 4 ключевых функции */}
                <section className="pt-80 pb-80 bg-2">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-title center m0-auto w-760 mb-60">
                                    <span className="sub-title texts-blue font-man">Как это работает</span>
                                    <h2 className="title">Что делает система</h2>
                                    <p className="des">Полная автоматизация создания товарных карточек для интернет-магазинов и маркетплейсов</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3 mb-30">
                                <div className="feature-card text-center">
                                    <div className="feature-icon">📸</div>
                                    <h4>Распознавание по фото</h4>
                                    <p>Система анализирует изображение, определяет категорию товара и извлекает ключевые визуальные характеристики.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 mb-30">
                                <div className="feature-card text-center">
                                    <div className="feature-icon">🎨</div>
                                    <h4>Обработка изображений</h4>
                                    <p>Автоматическая ретушь, удаление фона, улучшение качества и генерация дополнительных ракурсов.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 mb-30">
                                <div className="feature-card text-center">
                                    <div className="feature-icon">📝</div>
                                    <h4>Заполнение характеристик</h4>
                                    <p>AI подбирает название, бренд, артикул, SEO-описание и все необходимые атрибуты для карточки.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 mb-30">
                                <div className="feature-card text-center">
                                    <div className="feature-icon">🚀</div>
                                    <h4>Автоматическая выгрузка</h4>
                                    <p>Готовые карточки публикуются на маркетплейсы и в ваш интернет-магазин автоматически.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Технологии и многопоточность */}
                <section className="pt-80 pb-80">
                    <div className="tf-container">
                        <div className="row align-center">
                            <div className="col-lg-6">
                                <div className="heading-title mb-40">
                                    <span className="sub-title texts-blue font-man">Технологии</span>
                                    <h2 className="title">AI-ядро для обработки <br />тысяч товаров одновременно</h2>
                                    <p className="des">
                                        Наша система использует современные модели компьютерного зрения и обработки естественного языка. 
                                        Она способна обрабатывать тысячи товаров параллельно, запуская несколько процессов одновременно: 
                                        подбор оптимальных фотографий, обработку изображений, заполнение карточек и публикацию.
                                    </p>
                                </div>
                                <ul className="tech-features-list">
                                    <li><i className="icon-Check text-blue2" /> Многопоточная обработка — до 10 000 товаров в час</li>
                                    <li><i className="icon-Check text-blue2" /> Работает с Kaspi, Wildberries, Ozon и другими площадками</li>
                                    <li><i className="icon-Check text-blue2" /> API для интеграции с вашим интернет-магазином</li>
                                    <li><i className="icon-Check text-blue2" /> Параллельные процессы: подбор фото → обработка → заполнение → публикация</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="tech-stats">
                                    <div className="tech-stat-item">
                                        <div className="tech-stat-number">10 000+</div>
                                        <div className="tech-stat-label">товаров в час</div>
                                    </div>
                                    <div className="tech-stat-item">
                                        <div className="tech-stat-number">99%</div>
                                        <div className="tech-stat-label">точность распознавания</div>
                                    </div>
                                    <div className="tech-stat-item">
                                        <div className="tech-stat-number">24/7</div>
                                        <div className="tech-stat-label">автоматическая работа</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Детальный разбор процессов */}
                <section className="pt-80 pb-80 bg-2">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-title center m0-auto w-760 mb-60">
                                    <span className="sub-title texts-blue font-man">Детали работы</span>
                                    <h2 className="title">Параллельные процессы — максимальная скорость</h2>
                                    <p className="des">Система одновременно запускает несколько потоков обработки</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-30">
                                <div className="process-card">
                                    <div className="process-icon">🖼️</div>
                                    <h4>Подбор оптимальных фотографий</h4>
                                    <p>AI анализирует все доступные изображения товара, выбирает лучшие по качеству, ракурсу и информативности. Отсеивает размытые, темные и дублирующиеся кадры.</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-30">
                                <div className="process-card">
                                    <div className="process-icon">✏️</div>
                                    <h4>Обработка фотографий</h4>
                                    <p>Автоматическая ретушь, удаление фона, цветокоррекция, повышение резкости. Генерация дополнительных ракурсов и масштабирование под требования маркетплейса.</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-30">
                                <div className="process-card">
                                    <div className="process-icon">📋</div>
                                    <h4>Заполнение карточек товаров</h4>
                                    <p>На основе распознанной категории и характеристик AI формирует название, описание, SEO-теги, подбирает бренд и артикул. Заполняет все обязательные поля.</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-30">
                                <div className="process-card">
                                    <div className="process-icon">📤</div>
                                    <h4>Размещение в определенных карточках</h4>
                                    <p>Автоматическое распределение готовых карточек по нужным категориям и разделам маркетплейса. Поддержка массовой загрузки через API.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Преимущества */}
                <section className="pt-80 pb-80">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-title center m0-auto w-760 mb-60">
                                    <span className="sub-title texts-blue font-man">Преимущества</span>
                                    <h2 className="title">Почему бизнес выбирает нашу систему</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-30">
                                <div className="benefit-card">
                                    <div className="benefit-icon">⚡</div>
                                    <h4>Скорость</h4>
                                    <p>Обработка тысяч товаров за час вместо недель ручной работы. Запуск параллельных процессов.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-30">
                                <div className="benefit-card">
                                    <div className="benefit-icon">🎯</div>
                                    <h4>Точность</h4>
                                    <p>Минимизация ошибок при заполнении карточек. Единый стандарт качества для всех товаров.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-30">
                                <div className="benefit-card">
                                    <div className="benefit-icon">💰</div>
                                    <h4>Экономия</h4>
                                    <p>Сокращение штата контент-менеджеров и времени на выгрузку товаров. Окупаемость за 1-2 месяца.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Контактная форма */}
                <section id="contact" className="section-contact bg-5 pt-130 pb-130">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="content">
                                    <div className="heading-title mb-40">
                                        <span className="sub-title text-white font-man">Демо и консультация</span>
                                        <h2 className="title text-white">Попробуйте систему <br />на своих товарах</h2>
                                        <p className="des font-man text-white">Загрузите несколько фотографий — и мы покажем, как быстро AI заполнит карточки. Бесплатно и без обязательств.</p>
                                    </div>
                                    <div className="contact-wrap flex-three mb-40">
                                        <div className="icon text-white"><i className="icon-phones" /></div>
                                        <div className="contact-content">
                                            <span className="font-man text-white">Позвоните нам</span>
                                            <p><a href="tel:+1 (224) 206-0034" className="text-white">+1 (224) 206-0034</a></p>
                                        </div>
                                    </div>
                                    <div className="contact-wrap flex-three">
                                        <div className="icon text-white"><i className="icon-envelopes" /></div>
                                        <div className="contact-content">
                                            <span className="font-man text-white">Напишите нам</span>
                                            <p><a href="mailto:info@veotronic.com" className="text-white">info@veotronic.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="form-contact-home1 style2">
                                    <div className="inner-title-form center mb-30">
                                        <h3 className="title-form">Заявка на демо</h3>
                                        <p>Заполните форму — мы пришлём ссылку на тестовый доступ</p>
                                    </div>
                                    {submitStatus.message && (
                                        <div className={`alert-message ${submitStatus.type} mb-20`}>
                                            {submitStatus.message}
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} className="form-contact-home">
                                        <div className="input-group flex-one">
                                            <fieldset className="relative mb-20">
                                                <input type="text" className="form-control" name="name" placeholder="Ваше имя" value={formData.name} onChange={handleChange} disabled={isSubmitting} required />
                                                <i className="icon-user" />
                                            </fieldset>
                                            <fieldset className="relative mb-20">
                                                <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} disabled={isSubmitting} required />
                                                <i className="icon-envelopes" />
                                            </fieldset>
                                        </div>
                                        <fieldset className="mb-20">
                                            <input type="text" className="form-control" name="company" placeholder="Компания" value={formData.company} onChange={handleChange} disabled={isSubmitting} />
                                        </fieldset>
                                        <fieldset className="mb-15">
                                            <textarea name="message" rows={3} className="form-control" placeholder="Сколько товаров нужно обрабатывать?" value={formData.message} onChange={handleChange} disabled={isSubmitting} />
                                        </fieldset>
                                        <fieldset className="center">
                                            <button className="btn-submit" type="submit" disabled={isSubmitting}>
                                                {isSubmitting ? 'Отправка...' : 'Отправить заявку'} <i className="icon-right-icon" />
                                            </button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <style jsx>{`
                    .feature-card {
                        background: white;
                        padding: 30px 20px;
                        border-radius: 16px;
                        transition: all 0.3s ease;
                        box-shadow: 0 5px 30px rgba(0,0,0,0.05);
                        height: 100%;
                    }
                    .feature-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.1); }
                    .feature-icon { font-size: 48px; margin-bottom: 20px; }
                    
                    .process-card {
                        background: white;
                        padding: 25px;
                        border-radius: 16px;
                        box-shadow: 0 5px 20px rgba(0,0,0,0.05);
                        height: 100%;
                        transition: 0.3s;
                    }
                    .process-card:hover { transform: translateY(-3px); }
                    .process-icon { font-size: 40px; margin-bottom: 15px; }
                    
                    .benefit-card {
                        background: white;
                        padding: 25px;
                        border-radius: 16px;
                        text-align: center;
                        box-shadow: 0 5px 20px rgba(0,0,0,0.05);
                        height: 100%;
                    }
                    .benefit-icon { font-size: 44px; margin-bottom: 15px; }
                    
                    .tech-features-list {
                        list-style: none;
                        padding: 0;
                    }
                    .tech-features-list li {
                        margin-bottom: 15px;
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        font-size: 16px;
                    }
                    
                    .tech-stats {
                        display: flex;
                        gap: 20px;
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    .tech-stat-item {
                        background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
                        border: 1px solid #eef2f6;
                        border-radius: 20px;
                        padding: 30px 25px;
                        text-align: center;
                        min-width: 140px;
                    }
                    .tech-stat-number {
                        font-size: 42px;
                        font-weight: 800;
                        color: #2A7DE1;
                        line-height: 1.2;
                    }
                    .tech-stat-label {
                        font-size: 14px;
                        color: #666;
                        margin-top: 10px;
                    }
                    
                    .alert-message {
                        padding: 12px 20px;
                        border-radius: 8px;
                        font-size: 14px;
                        font-weight: 500;
                    }
                    .alert-message.success {
                        background: #d4edda;
                        color: #155724;
                        border: 1px solid #c3e6cb;
                    }
                    .alert-message.error {
                        background: #f8d7da;
                        color: #721c24;
                        border: 1px solid #f5c6cb;
                    }
                    .btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }
                `}</style>
            </Layout>
        </>
    )
}