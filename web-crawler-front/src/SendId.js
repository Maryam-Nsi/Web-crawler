import { LockClosedIcon } from '@heroicons/react/20/solid'
import crawlerIcon from './icons/crawler.png'
import { useState } from 'react'
import { axiosFunction } from './hooks/axiosFunction'
export default function SignIn() {
  const [identifier , setIdentifier] = useState("")
  const [pagesize , setPagesize] = useState("");
  const [pagenumber , setPagenumber] = useState("");
  const [data , setData] = useState("");
  const sendForm = (e)=>{

    e.preventDefault()
    console.log(identifier)
    console.log(pagesize)
    console.log(pagenumber)
    const url =`http://localhost:8080?taskId=${identifier}&pageNumber=${pagenumber}&pageSize=${pagesize}`
    setData (axiosFunction(url , 'GET' , null))

  }
  return (
    <>
      <div className="bg-isabelline flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 rounded-3xl">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={crawlerIcon}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Web crawler
            </h2>
          </div>
          <form className="mt-8 space-y-6" method="post" onSubmit={sendForm}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="identifier" className="sr-only">
                  ID
                </label>
                <input
                  id="identifier"
                  name="identifier"
                  type="text"
                  required
                  className="m-1 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blackolive focus:outline-none focus:ring-blackolive sm:text-sm"
                  placeholder="ID"
                  onChange={e=>setIdentifier(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="pagesize" className="sr-only">
                  اندازه صفحه
                </label>
                <input
                  id="pagesize"
                  name="pagesize"
                  type="number"
                  required
                  className="m-1 relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blackolive focus:outline-none focus:ring-blackolive sm:text-sm"
                  placeholder="Page Size / اندازه صفحه"
                  onChange={e=>setPagesize(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="pagenumber" className="sr-only">
                  شماره صفحه
                </label>
                <input
                  id="pagenumber"
                  name="pagenumber"
                  type="number"
                  required
                  className="m-1 relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blackolive focus:outline-none focus:ring-blackolive sm:text-sm"
                  placeholder="Page Number / شماره صفحه"
                  onChange={e=>setPagenumber(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blackolive py-2 px-4 text-sm font-medium text-white hover:bg-blackolive focus:outline-none focus:ring-2 focus:ring-blackolive focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-blackolive group-hover:text-blackolive" aria-hidden="true" />
                </span>
                مشاهده داده ها
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
