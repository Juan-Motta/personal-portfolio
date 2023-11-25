import { TimeLine } from './TimeLine';

function About() {
    return (
        <section className="flex flex-col items-center pt-10 justify-center overflow-hidden mb-[15rem]">
            <h1 className="text-5xl font-bold pb-10 text-center">
                Acerca de mi
            </h1>
            <div className="flex flex-col gap-5 pb-10">
                <p className="text-lg">
                    Soy un ingeniero apasionado por las tecnologías de la
                    información, con conocimientos de JavaScript y Python, capaz
                    de crear soluciones elegantes en el menor tiempo posible,
                    con actitud proactiva, buenas habilidades comunicativas y
                    capacidad de trabajo en equipo.
                </p>
            </div>
            <TimeLine />
        </section>
    );
}

export { About };
