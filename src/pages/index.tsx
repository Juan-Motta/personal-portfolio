import { Navbar } from '../components/Main/Navbar';
export default function Home() {
    return (
        <div className="container mx-auto">
            <Navbar />
            <section className="stars_container">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </section>
        </div>
    );
}
