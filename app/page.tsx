import Image from 'next/image'
import PoseAnalyzer from '@/components/PoseAnalyzer'
import '@/app/globals.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center relative flex items-center justify-center text-white" style={{ backgroundImage: 'url(/meme.png)' }}>
      <div className="absolute inset-0 backdrop-blur-md bg-black/40 z-0" />
      <div className="z-10 text-center px-4 py-12">
        <h1 className="text-5xl font-bold mb-4">Roasture</h1>
        <p className="text-lg mb-8 text-gray-300">Upload a pic & get roasted for your posture (Gen Z style!)</p>
        <PoseAnalyzer />
      </div>
    </main>
  )
}
