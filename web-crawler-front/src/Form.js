import {  useState } from "react"
import { axiosFunction } from "./hooks/axiosFunction";
import { CopyOutlined } from '@ant-design/icons';
import {
  Button,
  Input,
  Tooltip,
  Modal
} from 'antd';

export default function Form(props) {
    const [hostName , setHostName ] = useState("");
    const [uriStartRegex , setUriStartRegex]= useState("");
    const [dataSetSize , setDataSetSize] = useState("");
    const [ webPageVisitSize , setWebPageVisitSize] = useState("");
    const [requestPerSecond , setRequestPerSecond] = useState("");
    const [features , setFeatures] = useState({
        name :"",
        selector :""
    })
    const [data , setdata] = useState(null)
    // const alert = useAlert()
    const url = "http://localhost:8080/v1/"
    // const { data, isPending, error , postData} = useFetch(url , 'POST')

    const sendForm =async (e)=>{
        e.preventDefault()
        console.log("hi")
        console.log(hostName);
        console.log(uriStartRegex);
        console.log(dataSetSize);
        console.log(webPageVisitSize);
        console.log(requestPerSecond);
        console.log(features)
        const obj = {
            "hostName": hostName,
            "uriStartRegex": uriStartRegex,
            "dataSetSize": dataSetSize,
            "webPageVisitSize": webPageVisitSize,
            "requestPerSecond": requestPerSecond,
            "features": [{"name": features.name, "selector":features.selector}]
        }
        // const obj2 = {"hostName": "meghdadit", "uriStartRegex": "heif", "dataSetSize": "1","webPageVisitSize": "3", "requestPerSecond": "0.0", "features": [{"name": "Ename", "selector": "#SharedMessage_ContentPlaceHolder1_lblMobileTitle2"}]}
      
            setdata(await axiosFunction(url , 'POST' , obj))
            console.log("sjgh")
        
        console.log("data",data)
    }
    // const prop = data ? {
    //     openModal : true ,
    //     data : data


    // } : {
    //     openModal : false,
    //     data : null
    // }
    return (
        <>
            <div className="bg-vividskyblue">
            {/* {data ? <IdPop {...prop}  /> : null } */}
            {/* {true ? <GetIdPop {...prop}  /> : null } */}
            <div className="bg-vividskyblue pb-10 pt-16 m-auto h-3/4 w-1/2 md:col-span-2 md:mt-0">
                <h3 className="text-center text-3xl font-medium leading-6 text-gray-900">فرم درخواست خزش</h3>
                <p className="text-center mt-4 text-sm text-gray-900">.برای انجام خزش کامل بر روی دامنه مورد نظر خود، فرم زیر را کامل کنید</p>
                <form  onSubmit={sendForm}>
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
                                        onChange={e=>setHostName(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive text-lg"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="uri-start" className="block text-sm font-medium text-gray-700 text-right">
                                        پیشوند آدرس ها
                                    </label>
                                    <input
                                        type="text"
                                        name="uri_start"
                                        id="uri_start"
                                        onChange={e=>setUriStartRegex(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive text-lg"
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
                                        onChange={e=>setDataSetSize(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive text-lg"
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
                                        onChange={e=>setWebPageVisitSize(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive text-lg"
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
                                        onChange={e=>setRequestPerSecond(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive text-lg"
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
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive text-lg"
                                    />
                                    <label htmlFor="feature_selector" className="block text-sm font-medium text-gray-700 text-right">
                                        انتخاب گر ویژگی
                                    </label>
                                    <input
                                        type="text"
                                        name="feature_selector"
                                        id="feature_selector"
                                        onChange={e=>setFeatures({...features , selector : e.target.value})}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blackolive focus:ring-blackolive text-lg"
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="bg-isabelline pb-10 px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                onClick={() => data ? props.showModal("ask") : null}
                                className="inline-flex justify-center rounded-md border border-transparent bg-blackolive py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blackolive focus:outline-none focus:ring-2 focus:ring-blackolive focus:ring-offset-2"
                            >
                                ارسال درخواست
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            </div>

            {data ? <Modal title="درخواست شما با موفقیت ثبت گردید" open={props.ask} onCancel={() => props.handleCancel("ask")}
            footer={[]}
            >
                <Input.Group compact>
                    <Input
                        style={{
                        width: 'calc(100% - 50px)',
                        pointerEvents: "none"
                        }}
                        defaultValue="Task ID is here"
                        value={data}
                    />
                    <Tooltip title="copy Task ID">
                        <Button onClick={() => {
                            navigator.clipboard.writeText(data)
                            // alert("Copied the text: " + "Task id");
                           }
                        } icon={<CopyOutlined />} />
                    </Tooltip>
                </Input.Group>
            </Modal>: null }
        </>

    )
}
