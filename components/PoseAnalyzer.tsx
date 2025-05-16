'use client'

import { useRef, useState } from 'react'
import { analyzePose } from '@/lib/poseDetection'

export default function PoseAnalyzer() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [feedback, setFeedback] = useState('')
  const [loading, setLoading] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreviewUrl(reader.result as string)
        setFeedback('')
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = async () => {
    if (previewUrl && imageRef.current) {
      setLoading(true)
      try {
        const result = await analyzePose(imageRef.current)
        setFeedback(result)
      } catch (err) {
        setFeedback('🔥 Roast Report\nError roasting you. Maybe you broke the AI with your posture 💀')
      }
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="bg-white text-black font-bold py-2 px-4 rounded shadow hover:bg-gray-200 transition"
      >
        Choose an Image
      </button>

      {previewUrl && (
        <div className="space-y-4">
          <img
            ref={imageRef}
            src={previewUrl}
            alt="Preview"
            className="max-w-xs mx-auto rounded-lg"
          />
          <button
            onClick={handleAnalyze}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-red-600 transition"
          >
            {loading ? 'Analyzing...' : 'Analyze Posture'}
          </button>
        </div>
      )}

      {feedback && (
        <div className="bg-black/70 p-4 rounded-lg text-left whitespace-pre-wrap text-green-300 max-w-xl mx-auto">
          {feedback}
        </div>
      )}
    </div>
  )
}
