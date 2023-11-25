import { Navbar } from '@/components/Main/Navbar';
import { Hero } from '@/components/Main/Hero';
import { About } from '@/components/Main/About';

export default function Home() {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Hero />
            <About />
            <section className="stars-container">
                <div className="star-backgroud-1"></div>
                <div className="star-backgroud-2"></div>
                <div className="star-backgroud-3"></div>
            </section>
        </div>
    );
}
