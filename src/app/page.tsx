import Header from '@/app/components/Header'
import Slide from '@/app/components/Slide'
import Banner from '@/app/components/Banner'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />     
      <Banner />
      <Slide />  
    </main>
  )
}
