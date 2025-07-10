'use client'

import React, { useEffect, useRef } from 'react'

interface ResultProps {
  onRestart: () => void
  skipped?: boolean
}

export default function Result({ onRestart, skipped }: ResultProps) {
  const siteUrl = 'https://bbmp.publicengaged.in'
  const mainRef = useRef<HTMLDivElement>(null)
  
  const shareText = "I just took this Bengaluru local democracy quiz — found out we have no corporators since 2020! Demand BBMP elections:"
  const storyText = `Bengaluru's BBMP budget is ₹19,927 crore — but since 2020, not a single corporator has been elected to represent your area. Bureaucrats decide how your money is spent. Demand #BBMPElections now!`
  
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${siteUrl}`)}`
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareText} ${siteUrl}`)}&hashtags=BengaluruDemocracy,BBMPElections`
  const threadsUrl = `https://www.threads.net/intent/post?text=${encodeURIComponent(`${storyText} ${siteUrl}`)}`
  const instagramStory = storyText + ' ' + siteUrl

  const handleShare = (url: string, platform: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Focus management for accessibility
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.focus()
    }
  }, [])

  return (
    <main 
      className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-4"
      role="main"
      aria-label="Quiz Results"
    >
      <div className="max-w-md mx-auto" ref={mainRef} tabIndex={-1}>
        {/* Result Card */}
        <section 
          className="bg-white rounded-2xl shadow-xl p-8 mb-6 animate-fade-in"
          aria-labelledby="result-heading"
        >
          <div className="text-center mb-8">
            <div 
              className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
              aria-hidden="true"
              role="img"
              aria-label="Celebration icon"
            >
              <span className="text-3xl" aria-hidden="true">🏛️</span>
            </div>
            <h1 
              id="result-heading" 
              className="text-2xl font-bold text-gray-800 mb-4"
            >
              <span aria-hidden="true">🎉</span> Quiz Complete!
            </h1>
            {skipped ? (
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You skipped the quiz, but here's the real story: <br />
                <strong>Bengaluru has had 0 corporators since 2020.</strong> <br />
                Bureaucrats are running a ₹19,927 crore BBMP budget with no local voice. <br />
                <strong>Demand BBMP elections now!</strong>
              </p>
            ) : (
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Turns out you have <strong>0 corporators since 2020</strong>. <br />
                Bengaluru deserves local elections. <strong>Demand BBMP elections now!</strong>
              </p>
            )}
          </div>

          {/* Prominent BBMP Budget Information */}
          <section 
            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6 animate-fade-in"
            aria-labelledby="budget-heading"
          >
            <h2 
              id="budget-heading" 
              className="text-xl font-bold text-blue-800 mb-3 text-center"
            >
              <span aria-hidden="true">💰</span> BBMP Budget Information
            </h2>
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ₹19,927 Crore
              </div>
              <div className="text-sm text-blue-700">
                BBMP Budget 2025-26 (48% hike from 2024-25)
              </div>
            </div>
            <p className="text-blue-800 text-center leading-relaxed">
              <strong>Since 2020, not a single corporator has been elected</strong> to represent your area. 
              Bureaucrats are spending ₹19,927 crore of your money with zero local accountability.
            </p>
          </section>

          {/* Information Links */}
          <section 
            className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
            aria-labelledby="learn-more-heading"
          >
            <h3 id="learn-more-heading" className="text-lg font-semibold text-green-800 mb-3">
              <span aria-hidden="true">📚</span> Learn More:
            </h3>
            <div className="space-y-2 text-sm">
              <a 
                href="https://www.janaagraha.org/wp-content/uploads/2025/04/Janaagrahas-analysis-of-BBMP-Budget-2025_26.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-green-600 hover:text-green-800 underline"
                aria-describedby="janaagraha-link-description"
              >
                <span aria-hidden="true">📊</span> BBMP Budget Analysis 2025-26 (Janaagraha)
              </a>
              <div id="janaagraha-link-description" className="sr-only">
                Opens in new tab: Janaagraha's detailed analysis of BBMP budget 2025-26
              </div>
              
              <a 
                href="https://www.thehindu.com/news/national/karnataka/yet-again-bbmp-polls-likely-to-be-delayed-beyond-october/article69494530.ece" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-green-600 hover:text-green-800 underline"
                aria-describedby="hindu-link-description"
              >
                <span aria-hidden="true">📰</span> BBMP polls likely to be delayed beyond October (The Hindu)
              </a>
              <div id="hindu-link-description" className="sr-only">
                Opens in new tab: The Hindu article about BBMP election delays
              </div>
              
              <a 
                href="https://bangaloremirror.indiatimes.com/bangalore/civic/the-tenure-of-elected-bbmp-corporators-ended-on-september-10-2020-leaving-the-civic-body-under-bureaucratic-rulean-unusual-administrative-precedent-/articleshow/119611293.cms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-green-600 hover:text-green-800 underline"
                aria-describedby="mirror-link-description"
              >
                <span aria-hidden="true">📰</span> Yet another hurdle for BBMP elections (Bangalore Mirror)
              </a>
              <div id="mirror-link-description" className="sr-only">
                Opens in new tab: Bangalore Mirror article about BBMP election hurdles
              </div>
              
              <a 
                href="https://www.youtube.com/watch?v=9rJNBQExNQg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-green-600 hover:text-green-800 underline"
                aria-describedby="video-link-description"
              >
                <span aria-hidden="true">🎥</span> Delay in BBMP polls: A setback to local governance (The Hindu)
              </a>
              <div id="video-link-description" className="sr-only">
                Opens in new tab: The Hindu video about BBMP poll delays
              </div>
            </div>
          </section>

          {/* Share Section - Less Prominent */}
          <section 
            className="border-t pt-4"
            aria-labelledby="share-heading"
          >
            <h3 id="share-heading" className="text-sm font-medium text-gray-600 mb-3 text-center">
              <span aria-hidden="true">📤</span> Share this awareness
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => handleShare(whatsappUrl, 'WhatsApp')}
                className="share-button whatsapp text-sm"
                aria-describedby="whatsapp-share-description"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Share on WhatsApp
              </button>
              <div id="whatsapp-share-description" className="sr-only">
                Share this quiz result on WhatsApp
              </div>
              
              <button
                onClick={() => handleShare(twitterUrl, 'Twitter')}
                className="share-button twitter text-sm"
                aria-describedby="twitter-share-description"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Share on Twitter/X
              </button>
              <div id="twitter-share-description" className="sr-only">
                Share this quiz result on Twitter/X
              </div>
            </div>
          </section>

          {/* Story CTA */}
          <section 
            className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4 text-center"
            aria-labelledby="story-heading"
          >
            <h3 id="story-heading" className="text-sm font-semibold text-gray-800 mb-2">
              <span aria-hidden="true">📱</span> Share as Story
            </h3>
            <div className="bg-gray-100 rounded p-2 text-xs text-gray-600 select-all break-words mb-2">
              {instagramStory}
            </div>
            <span className="text-xs text-gray-500">Copy & share on Instagram/Threads stories</span>
          </section>
        </section>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="btn-secondary w-full"
          aria-describedby="restart-description"
        >
          <span aria-hidden="true">🔄</span> Take Quiz Again
        </button>
        <div id="restart-description" className="sr-only">
          Start the quiz over from the beginning
        </div>
      </div>
    </main>
  )
} 