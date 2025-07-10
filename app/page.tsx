'use client'

import React, { useState, useEffect, useRef } from 'react'
import Quiz from '../components/Quiz'
import Result from '../components/Result'

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'landing' | 'quiz' | 'result'>('landing')
  const [score, setScore] = useState(0)
  const [skipped, setSkipped] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  const handleStartQuiz = () => {
    setCurrentStep('quiz')
  }

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore)
    setSkipped(false)
    setCurrentStep('result')
  }

  const handleSkipToResults = () => {
    setSkipped(true)
    setCurrentStep('result')
  }

  const handleRestart = () => {
    setCurrentStep('landing')
    setScore(0)
    setSkipped(false)
  }

  // Calculate days since last council
  const [daysSinceCouncil, setDaysSinceCouncil] = useState(0)
  
  useEffect(() => {
    const calculateDays = () => {
      const lastCouncilDate = new Date('2020-09-10')
      const today = new Date()
      const diffTime = Math.abs(today.getTime() - lastCouncilDate.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      setDaysSinceCouncil(diffDays)
    }
    
    calculateDays()
    // Update daily
    const interval = setInterval(calculateDays, 24 * 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  // Focus management for accessibility
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.focus()
    }
  }, [])

  if (currentStep === 'quiz') {
    return <Quiz onComplete={handleQuizComplete} onSkip={handleSkipToResults} />
  }

  if (currentStep === 'result') {
    return <Result onRestart={handleRestart} skipped={skipped} />
  }

  return (
    <main 
      className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100"
      role="main"
      aria-label="Bengaluru Democracy Quiz Home Page"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto" ref={mainRef} tabIndex={-1}>
          {/* Skip to main content link for screen readers */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
          >
            Skip to main content
          </a>

          {/* Header */}
          <header className="text-center mb-8" role="banner">
            <div 
              className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
              aria-hidden="true"
              role="img"
              aria-label="Government building icon"
            >
              <span className="text-3xl" aria-hidden="true">🏛️</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Bengaluru Democracy Quiz
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Test your knowledge about local governance in India's tech capital
            </p>
          </header>

          {/* Main Content */}
          <div id="main-content" role="main">
            {/* BBMP Budget Information */}
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

            {/* CTA Buttons */}
            <section 
              className="space-y-4 mb-6"
              aria-label="Quiz actions"
            >
              <button
                onClick={handleStartQuiz}
                className="btn-primary w-full"
                aria-describedby="start-quiz-description"
              >
                <span aria-hidden="true">🧠</span> Start Quiz
              </button>
              <div id="start-quiz-description" className="sr-only">
                Begin the Bengaluru democracy quiz to test your knowledge about local governance
              </div>
              
              <button
                onClick={handleSkipToResults}
                className="btn-secondary w-full"
                aria-describedby="skip-results-description"
              >
                <span aria-hidden="true">⏭️</span> Skip to Results
              </button>
              <div id="skip-results-description" className="sr-only">
                Skip the quiz and go directly to the results page to learn about BBMP elections
              </div>
            </section>

            {/* Days Counter */}
            <section 
              className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6 animate-fade-in"
              aria-labelledby="days-counter-heading"
            >
              <h2 
                id="days-counter-heading" 
                className="sr-only"
              >
                Days Since Last Elected Corporators
              </h2>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  <span aria-label={`${daysSinceCouncil.toLocaleString()} days`}>
                    {daysSinceCouncil.toLocaleString()} Days
                  </span>
                </div>
                <div className="text-sm text-red-700">
                  Since Bengaluru had elected corporators
                </div>
                <div className="text-xs text-red-600 mt-1">
                  Last council ended: September 10, 2020
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="mt-8 text-center text-sm text-gray-500" role="contentinfo">
            <p>Learn about local democracy in Bengaluru</p>
            <p className="mt-1">Demand <span aria-label="hashtag">#</span>BBMPElections</p>
          </footer>
        </div>
      </div>
    </main>
  )
} 