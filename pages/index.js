import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'
import { useState } from "react"

export default function Home() {

  const [linkValue, setLinkValue] = useState("");

  return (
    <div>
      <Head>
        <title>Previewr - A link previewer</title>
        <meta name="description" content="Website to preview link" />
        <link rel="icon" href="/download.svg" />
      </Head>
      <Navbar />
      <div className='sm:container sm:mx-auto px-16 my-20'>
        <div className='container flex flex-wrap justify-center items-center mx-auto flex-col'>
          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Give a link below and get a preview</label>
          <div className="w-56 mb-6">
            <input onChange={e => setLinkValue(e.target.value)} name='link' type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
          </div>
          <div className='container flex flex-wrap justify-center items-center mx-auto flex-col'>
            <Link href={{
              pathname: "/preview",
              query: {'link': linkValue}
            }}>
              <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Preview</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
