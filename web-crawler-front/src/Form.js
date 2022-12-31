export default function Form() {
    return (
        <div className="bg-vividskyblue">
            <div className="bg-vividskyblue pb-10 pt-16 m-auto h-3/4 w-1/2 md:col-span-2 md:mt-0">
                <h3 className="text-center text-3xl font-medium leading-6 text-gray-900">فرم درخواست خزش</h3>
                <p className="text-center mt-4 text-sm text-gray-600">برای انجام خزش کامل بر روی دامنه مورد نظر خود فرم زیر را کامل کنید</p>
                <form action="#" method="POST">
                    <div className=" bg-isabelline mt-10 pt-10 overflow-hidden shadow sm:rounded-md">
                        <div className="bg-isabelline px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Host Name
                                    </label>
                                    <input
                                        type="text"
                                        name="host-name"
                                        id="host-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        URL Start
                                    </label>
                                    <input
                                        type="text"
                                        name="url_start"
                                        id="url_start"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Dataset Size
                                    </label>
                                    <input
                                        type="number"
                                        name="dataset_size"
                                        id="dataset_size"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Web Page visit Size
                                    </label>
                                    <input
                                        type="number"
                                        name="web_page_visit_size"
                                        id="web_page_visit_size"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Web Page visit Size
                                    </label>
                                    <input
                                        type="number"
                                        name="web_page_visit_size"
                                        id="web_page_visit_size"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive sm:text-sm"
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="bg-isabelline pb-10 px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blackolive py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blackolive focus:outline-none focus:ring-2 focus:ring-blackolive focus:ring-offset-2"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
    )
}
