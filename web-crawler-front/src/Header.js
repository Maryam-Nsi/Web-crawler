import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Modal } from 'antd';
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import crawlerIcon from './icons/crawler.jpeg'
import SignIn from './SignIn';
const solutions = [
    {
        name: 'تحلیل داده ها',
        description: 'نمودار وضعیت تگ ها و محتوای وب سایت',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'تعامل با ما',
        description: 'برای دریافت نتایج بهتر و دقیق تر با ما مشورت کنید',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    { name: 'امنیت', description: "دریافت اطلاعات از هر سابت با پروتکل های امنیتی متفاوت", href: '#', icon: ShieldCheckIcon },
    {
        name: 'اطمینان',
        description: "از کسب نتایج صحیح و کامل اطمینان داشته باشید",
        href: '#',
        icon: Squares2X2Icon,
    },
    {
        name: 'هر زمان',
        description: 'کسب اطلاعات در هر بازه زمانی ',
        href: '#',
        icon: ArrowPathIcon,
    },
]

const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: LifebuoyIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkSquareIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [nahve, setnahve] = useState(false);
    const [darbare, setdarbare] = useState(false);
    const [ertebat, setertebat] = useState(false);
    const [vorood, setvorood] = useState(false);
    const showModal = (who) => {
        switch (who){
            case "nahve":
                setnahve(true)
                break
            case "darbare":
                setdarbare(true)
                break
            case "ertebat":
                setertebat(true)
                break
            case "vorood":
                setvorood(true)
                break
            default:
                console.log("ERROR!!!!!!")

        }
    };
    const handleCancel = (who) => {
        switch (who){
            case "nahve":
                setnahve(false)
                break
            case "darbare":
                setdarbare(false)
                break
            case "ertebat":
                setertebat(false)
                break
            case "vorood":
                setvorood(false)
                break
            default:
                console.log("ERROR!!!!!!")

        }
    };
    return (
        <div>
            <Popover className="relative bg-isabelline">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <button href="#">
                            <span className="sr-only">Web crawler</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src={crawlerIcon}
                                alt=""
                            />
                        </button>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blackolive">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blackolive focus:ring-offset-2'
                                        )}
                                    >
                                        <span>کارکرد ما </span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {solutions.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                        >
                                                            <item.icon className="h-6 w-6 flex-shrink-0 text-blackolive" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <button onClick={() => showModal("darbare")} className="text-base font-medium text-gray-500 hover:text-gray-900">
                            درباره ما
                        </button>
                        <button onClick={() => showModal("ertebat")} className="text-base font-medium text-gray-500 hover:text-gray-900">
                            راه های ارتباطی
                        </button>
                        <button onClick={() => showModal("nahve")} className="text-base font-medium text-gray-500 hover:text-gray-900">
                            نحوه کار با سامانه
                        </button>



                    </Popover.Group>
                    
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <button onClick={() => showModal("vorood")} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            ورود
                        </button>
                        <button
                            href="#"
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blackolive px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blackolive"
                        >
                            ثبت نام
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src={crawlerIcon}
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blackolive">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                        >
                                            <item.icon className="h-6 w-6 flex-shrink-0 text-blackolive" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <button href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Pricing
                                </button>

                                <button href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Docs
                                </button>
                                {resources.map((item) => (
                                    <button
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                            <div>
                                <button
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blackolive px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blackolive"
                                >
                                    Sign up
                                </button>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <button href="#" className="text-blackolive hover:text-blackolive">
                                        Sign in
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
            </Popover>

            {<Modal title="Basic Modal" open={nahve} onCancel={() => handleCancel("nahve")}
            footer={[]}
            >
                <p>nahve</p>
            </Modal>}

            {<Modal title="Basic Modal" open={ertebat} onCancel={() => handleCancel("ertebat")}
            footer={[]}
            >
                <p>ertebat</p>
            </Modal>}

             {<Modal title="Basic Modal" open={darbare} onCancel={() => handleCancel("darbare")}
            footer={[]}
            >
                <p>darbare</p>
            </Modal>}

            {<Modal title="" open={vorood} onCancel={() => handleCancel("vorood")}
            footer={[]}
            className="signinstyle"
            >
                <SignIn />
            </Modal>}

            
        </div>
        
    )
}
