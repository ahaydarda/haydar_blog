// pages/index.jsx
import Head from 'next/head'
import Ready from './ready';

const Home = () => (
    <div>
      <Head>
        <title>Next.js TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      
      <div className="container mx-auto">
        <h1 className="text-lg text-center m-4">TailwindUI/Next.js Blog</h1>
        <p className="bg-green-600">This is a test of the tailwind works.</p>
        <p className="bg-green-600">Below is test that tailwind UI works </p>
         <Ready />
      </div>
    </div>
)

export default Home
