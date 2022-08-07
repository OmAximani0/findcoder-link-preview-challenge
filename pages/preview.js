import Navbar from "../components/Navbar/Navbar"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Preview({ data }) {
  console.log(data)
  return (
    <>
      <div>
        <Head>
          <title>Previewer : {data.provider} link</title>
          <meta name="description" content="Website to preview link" />
          <link rel="icon" href="/download.svg" />
        </Head>
        <Navbar />
        <div className='sm:container sm:mx-auto px-16 my-20'>
          <p className="text-center mb-2 text-2xl font-light tracking-tight text-gray-900 dark:text-white">Provider: {data.provider}</p>
          <div className='container flex flex-wrap justify-center items-center mx-auto flex-col'>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={data.image} alt="Preview link image" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
                <Link href={data.url} target="_blank" >
                  <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Visit<svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const body = JSON.stringify({
    'link': context.query.link,
  })
  const res = await fetch('http://localhost:3000/api/data', {
    body: body,
    headers: {
      Accept: 'application/json',
      'User-Agent': '*',
    },
    method: 'POST',
  })
  const data = await res.json();
  return {
    props: {
      data,
    },
  }
}