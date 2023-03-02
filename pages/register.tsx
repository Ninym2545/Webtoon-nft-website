import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderLogin from '../components/HeaderLogin'
import RegisterForm from '../components/RegisterForm'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-b from-gray-900/10
    to-[#010511] ">
      <Head>
        <title>NFT Webtoon</title>
        <link rel="icon" href="https://axistalent.io/uploads/blog/nft.png" />
      </Head>
      {/* Component */}
      <HeaderLogin/>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <RegisterForm/>
        
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home
