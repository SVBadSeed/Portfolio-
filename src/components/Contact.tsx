import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import { useState, useEffect, useRef } from 'react';

import "react-toastify/dist/ReactToastify.css";

import Container from './Container';

import '../styles/global.css'

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data: any) => {
        setLoading(true)

        try {
            await emailjs.send('service_4ef8qy3', 'template_9v6y5tp', data, 'gNO8MPezIGBTtI2hb');
            toast.success('Твое сообщение было успешно доставлено!', {
                position: "bottom-left",
            });

            setLoading(false)
            reset();
        } catch (e) {
            toast.error('Ошибка отправки сообщения. Попробуйте позже.', {
                position: "bottom-left",
            });
        }
    };

    errors.email && errors.message && errors.name && toast.error('Пожалуйста заполните все поля формы', { position: "bottom-left" })


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting)
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="contact" id='connect'>
            <Container>
                <div className="flex items-center justify-between">
                    <div>
                        <img className={isVisible ? "zoomIn w-[700px]" : "w-[700px]"} src='/images/mona.webp' alt="Contact Us" />
                    </div>
                    <div>
                        <div className={isVisible ? "fadeIn" : ""}>
                            <h2 className='text-[30px] font-bold mb-10'>Напишите мне сообщение!</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label>Имя:</label>
                                    <input {...register('name', { required: true })} />
                                </div>

                                <div>
                                    <label>Ваша почта:</label>
                                    <input {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
                                </div>
                                <div ref={ref}>
                                    <label>Ваше сообщение:</label>
                                    <textarea  {...register('message', { required: true })} />
                                </div>

                                <button className={loading ? 'opacity-50 cursor-not-allowed' : ''} type="submit" disabled={loading}>
                                    {loading ? 'Отправляется...' : 'Отправить'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
            {loading && <ToastContainer />}
        </section>
    )
}

export default Contact