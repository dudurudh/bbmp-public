'use client'

import React, { useState, useEffect, useRef } from 'react'
import questions from '../data/questions.json'

interface Question {
  question: string
  options: string[]
  answer: string
}

interface QuizProps {
  onComplete: (score: number) => void
  onSkip: () => void
}

export default function Quiz({ onComplete, onSkip }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [quizQuestions] = useState<Question[]>(questions)
  const [announcement, setAnnouncement] = useState('')
  
  const questionRef = useRef<HTMLDivElement>(null)
  const nextButtonRef = useRef<HTMLButtonElement>(null)

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex)
    setShowAnswer(true)
    
    // Check if answer is correct (assuming first option is always correct for simplicity)
    const isCorrect = optionIndex === 0
    if (isCorrect) {
      setScore(prev => prev + 1)
      setAnnouncement('Correct answer!')
    } else {
      setAnnouncement('Incorrect answer. Here is the correct answer.')
    }
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      onComplete(score)
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedOption(null)
      setShowAnswer(false)
      setAnnouncement('')
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, optionIndex: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (!showAnswer) {
        handleOptionSelect(optionIndex)
      }
    }
  }

  const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100

  // Focus management
  useEffect(() => {
    if (questionRef.current) {
      questionRef.current.focus()
    }
  }, [currentQuestionIndex])

  useEffect(() => {
    if (showAnswer && nextButtonRef.current) {
      nextButtonRef.current.focus()
    }
  }, [showAnswer])

  return (
    <main 
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4"
      role="main"
      aria-label="Bengaluru Democracy Quiz"
    >
      <div className="max-w-md mx-auto">
        {/* Live region for announcements */}
        <div 
          aria-live="polite" 
          aria-atomic="true" 
          className="sr-only"
        >
          {announcement}
        </div>

        {/* Progress Bar */}
        <section className="mb-8" aria-label="Quiz progress">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              <span aria-hidden="true">📝</span> Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div 
            className="w-full bg-gray-200 rounded-full h-2"
            role="progressbar"
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Quiz progress: ${Math.round(progressPercentage)}% complete`}
          >
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </section>

        {/* Question Card */}
        <section 
          className="bg-white rounded-2xl shadow-xl p-6 mb-6 animate-fade-in"
          ref={questionRef}
          tabIndex={-1}
          aria-labelledby="question-heading"
        >
          <h2 
            id="question-heading" 
            className="text-xl font-bold text-gray-800 mb-6 leading-relaxed"
          >
            <span aria-hidden="true">🤔</span> {currentQuestion.question}
          </h2>

          {/* Options */}
          <div 
            className="space-y-3"
            role="radiogroup"
            aria-labelledby="question-heading"
          >
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                disabled={showAnswer}
                className={`option-button ${
                  selectedOption === index ? 'selected' : ''
                } ${showAnswer ? 'cursor-default' : ''}`}
                role="radio"
                aria-checked={selectedOption === index}
                aria-describedby={`option-${index}-description`}
                tabIndex={showAnswer ? -1 : 0}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Answer */}
          {showAnswer && (
            <div 
              className="answer-card"
              role="region"
              aria-label="Answer explanation"
            >
              <p className="text-gray-700 leading-relaxed">
                <span aria-hidden="true">💡</span> {currentQuestion.answer}
              </p>
            </div>
          )}

          {/* Next Button */}
          {showAnswer && (
            <button
              ref={nextButtonRef}
              onClick={handleNextQuestion}
              className="btn-primary w-full mt-6"
              aria-describedby="next-button-description"
            >
              {isLastQuestion ? (
                <>
                  <span aria-hidden="true">🎉</span> See Results
                </>
              ) : (
                <>
                  <span aria-hidden="true">➡️</span> Next Question
                </>
              )}
            </button>
          )}
          <div id="next-button-description" className="sr-only">
            {isLastQuestion ? 'Complete quiz and view results' : 'Continue to next question'}
          </div>
        </section>

        {/* Skip to Results Button */}
        <button
          onClick={onSkip}
          className="btn-secondary w-full mb-4"
          aria-describedby="skip-description"
        >
          <span aria-hidden="true">⏭️</span> Skip to Results
        </button>
        <div id="skip-description" className="sr-only">
          Skip the quiz and go directly to the results page
        </div>
      </div>
    </main>
  )
} 