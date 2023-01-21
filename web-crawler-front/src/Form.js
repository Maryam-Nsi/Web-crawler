import {  useState } from "react"
// import { useAlert } from 'react-alert'
import {useAxios} from './hooks/useAxios'
import GetIdPop from "./GetIdPop";

export default function Form() {
    const [hostName , setHostName ] = useState("");
    const [uriStartRegex , setUriStartRegex]= useState("");
    const [dataSetSize , setDataSetSize] = useState("");
    const [ webPageVisitSize , setWebPageVisitSize] = useState("");
    const [requestPerSecond , setRequestPerSecond] = useState("");
    const [features , setFeatures] = useState({
        name :"",
        selector :""
    })
    // const alert = useAlert()
    const url = "http://localhost:8080"
    const { data, isPending, error , postData} = useAxios(url , 'POST')
    const sendForm =(e)=>{
        e.preventDefault();
        // console.log("hi")
        // console.log(hostName);
        // console.log(uriStartRegex);
        // console.log(dataSetSize);
        // console.log(webPageVisitSize);
        // console.log(requestPerSecond);
        // console.log(features)
        const obj = {
            "hostName": hostName,
            "uriStartRegex": uriStartRegex,
            "dataSetSize": dataSetSize,
            "webPageVisitSize": webPageVisitSize,
            "requestPerSecond": requestPerSecond,
            "features": [{"name": features.name, "selector":features.selector}]
        }
        const obj2 = {"hostName": "meghdadit", "uriStartRegex": "heif", "dataSetSize": "1","webPageVisitSize": "3", "requestPerSecond": "0.0", "features": [{"name": "Ename", "selector": "#SharedMessage_ContentPlaceHolder1_lblMobileTitle2"}]}
        postData(obj2)
        console.log(JSON.stringify(obj2))
        console.log("data",data)
        console.log("error",error)

    }
    const prop = error ? {
        openModal : true ,
        data : data


    } : {
        openModal : false,
        data : null
    }
    return (
        <div className="bg-vividskyblue">
            {/* {data ? <IdPop {...prop}  /> : null } */}
            {true ? <GetIdPop {...prop}  /> : null }
            <div className="bg-vividskyblue pb-10 pt-16 m-auto h-3/4 w-1/2 md:col-span-2 md:mt-0">
                <h3 className="text-center text-3xl font-medium leading-6 text-gray-900">فرم درخواست خزش</h3>
                <p className="text-center mt-4 text-sm text-gray-600">برای انجام خزش کامل بر روی دامنه مورد نظر خود فرم زیر را کامل کنید</p>
                <form method="post" onSubmit={sendForm}>
                    <div className=" bg-isabelline mt-10 pt-10 overflow-hidden shadow sm:rounded-md">
                        <div className="bg-isabelline px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="host-name" className="block text-sm font-medium text-gray-700 text-right">
                                        دامنه سایت
                                    </label>
                                    <input
                                        type="text"
                                        name="host-name"
                                        id="host-name"
                                        onChange={setHostName}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="uri-start" className="block text-sm font-medium text-gray-700 text-right">
                                        آدرس سایت مورد نظر
                                    </label>
                                    <input
                                        type="text"
                                        name="uri_start"
                                        id="uri_start"
                                        onChange={setUriStartRegex}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="dataset_size" className="block text-sm font-medium text-gray-700 text-right">
                                        میزان دیتای مورد نظر
                                    </label>
                                    <input
                                        type="number"
                                        name="dataset_size"
                                        id="dataset_size"
                                        onChange={setDataSetSize}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="web_page_visit_size" className="block text-sm font-medium text-gray-700 text-right">
                                        تعداد صفحات برای انجام خزش
                                    </label>
                                    <input
                                        type="number"
                                        name="web_page_visit_size"
                                        id="web_page_visit_size"
                                        onChange={setWebPageVisitSize}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="request_per_second" className="block text-sm font-medium text-gray-700 text-right">
                                        تعداد درخواست ارسالی در هر ثانیه
                                    </label>
                                    <input
                                        type="number"
                                        name="request_per_second"
                                        id="request_per_second"
                                        onChange={setRequestPerSecond}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3 border-2 p-3 rounded-md border-gray-300">
                                    <span className="block text-sm font-medium text-gray-700 text-center border-black border-solid">
                                       ویژگی ها
                                    </span>
                                    <label htmlFor="feature-name" className="block text-sm font-medium text-gray-700 text-right">
                                       نام ویژگی
                                    </label>
                                    <input
                                        type="text"
                                        name="feature-name"
                                        id="feature-name"
                                        onChange={e=>setFeatures({...features , name : e.target.value})}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive sm:text-sm"
                                    />
                                    <label htmlFor="feature_selector" className="block text-sm font-medium text-gray-700 text-right">
                                        انتخاب گر ویژگی
                                    </label>
                                    <input
                                        type="text"
                                        name="feature_selector"
                                        id="feature_selector"
                                        onChange={e=>setFeatures({...features , selector : e.target.value})}
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
                                ارسال درخواست
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
    )
}
