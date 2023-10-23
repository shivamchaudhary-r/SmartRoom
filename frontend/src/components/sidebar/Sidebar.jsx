import "./sidebar.scss";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import { useState } from 'react';
import { Link } from "react-router-dom";

function SidebarIcons({ id }) {
    const icons = {
        0: (
            <>
                <path d="M12 19C10.067 19 8.31704 18.2165 7.05029 16.9498L12 12V5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
            </>
        ),
        1: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
            </>
        ),
        2: (
            <>
                <path d="M9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3ZM6 8C6 6.34315 7.34315 5 9 5C10.6569 5 12 6.34315 12 8C12 9.65685 10.6569 11 9 11C7.34315 11 6 9.65685 6 8Z" />
                <path d="M16.9084 8.21828C16.6271 8.07484 16.3158 8.00006 16 8.00006V6.00006C16.6316 6.00006 17.2542 6.14956 17.8169 6.43645C17.8789 6.46805 17.9399 6.50121 18 6.5359C18.4854 6.81614 18.9072 7.19569 19.2373 7.65055C19.6083 8.16172 19.8529 8.75347 19.9512 9.37737C20.0496 10.0013 19.9987 10.6396 19.8029 11.2401C19.6071 11.8405 19.2719 12.3861 18.8247 12.8321C18.3775 13.2782 17.8311 13.6119 17.2301 13.8062C16.6953 13.979 16.1308 14.037 15.5735 13.9772C15.5046 13.9698 15.4357 13.9606 15.367 13.9496C14.7438 13.8497 14.1531 13.6038 13.6431 13.2319L13.6421 13.2311L14.821 11.6156C15.0761 11.8017 15.3717 11.9248 15.6835 11.9747C15.9953 12.0247 16.3145 12.0001 16.615 11.903C16.9155 11.8059 17.1887 11.639 17.4123 11.416C17.6359 11.193 17.8035 10.9202 17.9014 10.62C17.9993 10.3198 18.0247 10.0006 17.9756 9.68869C17.9264 9.37675 17.8041 9.08089 17.6186 8.82531C17.4331 8.56974 17.1898 8.36172 16.9084 8.21828Z" />
                <path d="M19.9981 21C19.9981 20.475 19.8947 19.9551 19.6938 19.47C19.4928 18.9849 19.1983 18.5442 18.8271 18.1729C18.4558 17.8017 18.0151 17.5072 17.53 17.3062C17.0449 17.1053 16.525 17.0019 16 17.0019V15C16.6821 15 17.3584 15.1163 18 15.3431C18.0996 15.3783 18.1983 15.4162 18.2961 15.4567C19.0241 15.7583 19.6855 16.2002 20.2426 16.7574C20.7998 17.3145 21.2417 17.9759 21.5433 18.7039C21.5838 18.8017 21.6217 18.9004 21.6569 19C21.8837 19.6416 22 20.3179 22 21H19.9981Z" />
                <path d="M16 21H14C14 18.2386 11.7614 16 9 16C6.23858 16 4 18.2386 4 21H2C2 17.134 5.13401 14 9 14C12.866 14 16 17.134 16 21Z" />

            </>
        ),
        3: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
            </>
        ),
        4: (
            <>
                <path d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 14H7V12H17V14Z" />
            </>
        ),
        5: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </>
        ),

        6: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </>

        ),
        7: (
            <>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
            </>
        ),
    };
    return (
        <svg
            className="w-8 h-8 xl:w-5 xl:h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            {icons[id]}
        </svg>
    );
}



function MenuItem({ item: { id, title, link }, onClick, selected }) {
    return (
        <Link to={link}>
            <div
                className={clsx(
                    'w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer',
                    selected === id ? 'sidebar-item-selected' : 'sidebar-item'
                )}
                onClick={() => onClick(id)}
            >
                <SidebarIcons id={id} />
                <div className="block sm:hidden xl:block ml-2">{title}</div>
                <div className="block sm:hidden xl:block flex-grow" />
            </div>
        </Link>
    );
}

function IconButton({ onClick = () => { }, icon = 'options', className = 'w-4 h-4' }) {
    return (
        <button onClick={onClick} type="button" className={className}>
            <img
                src={`https://assets.codepen.io/3685267/${icon}.svg`}
                alt=""
                className="w-full h-full"
            />
        </button>
    );
}

export default function Sidebar({ onSidebarHide, showSidebar }) {
    const sidebarItems = [
        [
            { id: '0', title: 'Dashboard', link: '' },
            { id: '1', title: 'Add Student', link: 'create-student' },
            { id: '2', title: 'All Students', link: 'student-list' },
            { id: '3', title: 'Online Class', link: 'zoommeeting' },
            
        ],
        [
            { id: '4', title: 'Schedule', link: 'calendar' },
            { id: '5', title: 'Messages', link: '' },
            { id: '6', title: 'Resources', link: '' },
            { id: '7', title: 'Sign Out', link: '/teacher' },
        ],
    ];

    const [selected, setSelected] = useState('0');

    return (
        <div
            className={clsx(
                'fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10',
                showSidebar ? 'flex' : 'hidden'
            )}
        >
            <div className="flex-shrink-0 overflow-hidden p-2">
                <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
                    <IconButton icon="res-react-dash-logo" className="w-10 h-10" />
                    <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-white">
                        SmartRoom
                    </div>
                    <div className="flex-grow sm:hidden xl:block" />
                    <IconButton
                        icon="res-react-dash-sidebar-close"
                        className="block sm:hidden"
                        onClick={onSidebarHide}
                    />
                </div>
            </div>
            <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
                <div className="mt-10 mb-0 font-bold px-3 block sm:hidden xl:block">
                    SERVICES
                </div>
                <div className="ml-2 mr-2 sidebar-separator-bottom" />
                {sidebarItems[0].map((item) => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        onClick={setSelected}
                        selected={selected}
                    />
                ))}
                <div className="mt-10 mb-0 font-bold px-3 block sm:hidden xl:block">
                    SHORTCUTS
                </div>
                <div className="ml-2 mr-2 sidebar-separator-bottom" />
                {sidebarItems[1].map((item) => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        onClick={setSelected}
                        selected={selected}
                    />
                ))}
                <div className="flex-grow" />
            </div>
            <div className="flex-shrink-0 overflow-hidden p-2 ">
                <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 teachername sidebar-separator-bottom cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 xl:w-5 xl:h-5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                        <circle cx="12" cy="10" r="3" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                    <div className="block sm:hidden xl:block ml-2 font-bold">
                        {localStorage ? localStorage.getItem('teacherId') : null}
                    </div>
                </div>
            </div>
        </div>
    );
}




