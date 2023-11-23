import { Navbar } from '@/components/Main/Navbar';
import { Hero } from '@/components/Main/Hero';

export default function Home() {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Hero />
            <section className="stars_container">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </section>
        </div>
    );
}
