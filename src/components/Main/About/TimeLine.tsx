import { useState } from 'react';
import { useTheme } from 'next-themes';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SchoolIcon } from '@/components/Shared/Icons/SchoolIcon';
import { BriefcaseIcon } from '@/components/Shared/Icons/BriefcaseIcon';
import { BookIcon } from '@/components/Shared/Icons/BookIcon';

const workHistory = [
    {
        id: '7e79ec0d-eb3c-439b-9a1e-6312c33580f2',
        title: 'Desarrollador backend',
        company: 'Crehana',
        date: 'Marzo 2023 - Actualidad',
    },
    {
        id: '1c64b16a-a266-4ff3-8d0c-e4eb8dfc0163',
        title: 'Lider de equipo backend',
        company: 'Quick',
        date: 'Mayo 2022 - Marzo 2023',
    },
    {
        id: '428e48fe-ed37-46da-93a7-3b9367e1d626',
        title: 'Tutor de programación',
        company: 'Universidad Autonoma de Bucaramanga',
        date: 'Junio 2022 - Diciembre 2022',
    },
    {
        id: 'fa673219-cd07-4e19-8e76-3f8c65b04996',
        title: 'Desarrollador backend',
        company: 'Quick',
        date: 'Diciembre 2021 - Mayo 2023',
    },
    {
        id: '54f6b89f-0b50-4e19-a043-d924b6a7a520',
        title: 'Desarrollador fullstack',
        company: 'Caprocon',
        date: 'Enero 2020 - Diciembre 2021',
    },
];

const educationHistory = [
    {
        id: '1c64b16a-a266-4ff3-8d0c-e4eb8dfc0163',
        title: 'Maestria en desarrollo de software',
        company: 'Universidad de los Andres',
        date: 'Enero 2024 - Actual',
    },
    {
        id: '428e48fe-ed37-46da-93a7-3b9367e1d626',
        title: 'Diplomado en desarrollo de software',
        company: 'Universidad Nacional de Colombia',
        date: 'Junio 2021 - Diciembre 2021',
    },
    {
        id: '7e79ec0d-eb3c-439b-9a1e-6312c33580f2',
        title: 'Ingenieria electrica',
        company: 'Universidad Nacional de Colombia',
        date: 'Enero 2014 - Noviembre 2019',
    },
];

function TimeLine() {
    const { theme } = useTheme();
    const [showEducation, setShowEducation] = useState(false);

    function handleChangeJobTrayectory() {
        setShowEducation(false);
    }

    function handleChangeStudyTrayectory() {
        setShowEducation(true);
    }

    return (
        <div className="w-full">
            <h2 className="text-5xl font-bold mb-10 text-center">
                Mi trayectoria
            </h2>
            <div className="flex gap-10 justify-center text-xl font-bold mb-10">
                <button
                    onClick={handleChangeJobTrayectory}
                    className={`flex gap-2 justify-center items-center pb-1 dark:border-white border-black ${
                        showEducation ? 'border-b-[0px]' : 'border-b-[3px]'
                    }`}
                >
                    <BriefcaseIcon className="dark:stroke-white stroke-black fill-none h-[28px] w-[28px] stroke-2" />
                    <span>Trabajo</span>
                </button>
                <button
                    onClick={handleChangeStudyTrayectory}
                    className={`flex gap-2 justify-center items-center pb-1 dark:border-white border-black ${
                        showEducation ? 'border-b-[3px]' : 'border-b-[0px]'
                    }`}
                >
                    <BookIcon className="dark:stroke-white stroke-black fill-none h-[28px] w-[28px] stroke-2" />
                    <span>Educación</span>
                </button>
            </div>
            <div className="w-[80%] mx-auto">
                <VerticalTimeline
                    lineColor={theme === 'dark' ? 'white' : 'black'}
                >
                    {(showEducation ? educationHistory : workHistory).map(
                        item => (
                            <VerticalTimelineElement
                                key={item.id}
                                date={item.date}
                                iconStyle={{
                                    background: '#e73c7e',
                                    boxShadow: 'unset',
                                }}
                                icon={
                                    showEducation ? (
                                        <SchoolIcon className="stroke-white fill-none stroke-2" />
                                    ) : (
                                        <BriefcaseIcon className="stroke-white fill-none stroke-2" />
                                    )
                                }
                                contentStyle={{
                                    background: 'transparent',
                                    color: theme === 'dark' ? 'white' : 'black',
                                    border:
                                        theme === 'dark'
                                            ? '1px solid white'
                                            : '1px solid black',
                                    boxShadow: 'unset',
                                    padding: '1rem 2rem',
                                    borderRadius: '0.5rem',
                                }}
                                contentArrowStyle={{
                                    borderRight:
                                        theme === 'dark'
                                            ? '10px solid white'
                                            : '10px solid black',
                                }}
                            >
                                <h3 className="text-lg font-bold text-[#e73c7e]">
                                    {item.title}
                                </h3>
                                <p className="text-black dark:text-white">
                                    {item.company}
                                </p>
                            </VerticalTimelineElement>
                        )
                    )}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export { TimeLine };
