import Image from "next/image";

const Experience = () => {
    const datas = [
        {
            name: "유앤소프트 (unsoft)",
            period: "2022.11 — 2023.07",
            role: "Frontend Developer",
            skills: ["Vue.js", "Javascript", "SCSS"],
            work: "휴대폰, 인터넷 가격비교 O2O 통신 플랫폼",
            link: { name: "unsoft", url: "https://www.unsoft.co.kr" },
        },
        {
            name: "앱지 (appg)",
            period: "2020.09 — 2022.11",
            role: "Web Developer",
            skills: ["Vue.js", "Nuxt", "Javascript", "SCSS", "Java", "Spring Boot", "MySQL"],
            work: "다양한 플랫폼의 맞춤웹/앱 제작 에이전시",
            link: { name: "appg", url: "https://appg.co.kr" },
        },
        {
            name: "싱가포르 외식업 근무",
            period: "2013.12 — 2019.10",
            role: "F&B Captain",
        },
    ];

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <div className="sticky top-0 z-20 -mx-6 mb-10 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol className="group/list">
                    {datas.map((data, index) => (
                        <li className="mb-12" key={index}>
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="July to December 2017">
                                    {data.period}
                                </header>
                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-semibold leading-snug text-slate-200">
                                        <span className="inline-block">{data.name}</span>
                                        {/* {data.link && (
                                            <a
                                                className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-800 hover:text-blue-500 focus-visible:text-blue-500 dark:text-slate-300 dark:hover:text-teal-300 dark:focus-visible:text-teal-300"
                                                href={data.link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true">
                                                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                                </svg>
                                                <span>{data.link.name}</span>
                                            </a>
                                        )} */}
                                    </h3>
                                    <div>
                                        <div className="text-slate-500 text-sm" aria-hidden="true">
                                            {data.role}
                                        </div>
                                    </div>
                                    <ul className="mt-2 text-sm leading-normal">
                                        <p>{data.work && data.work}</p>
                                    </ul>
                                    {/* <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {data.skills &&
                                            data.skills.map((skill, index2) => (
                                                <li className="mr-1.5 mt-2" key={index2}>
                                                    <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 bg-blue-700/10  text-blue-600 dark:bg-teal-400/10  dark:text-teal-300">
                                                        {skill}
                                                    </div>
                                                </li>
                                            ))}
                                    </ul> */}
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Experience;
