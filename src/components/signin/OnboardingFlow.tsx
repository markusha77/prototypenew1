import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProgressBar } from './ProgressBar'
import { WelcomeStep } from './onboarding/WelcomeStep'
import { ProfileSetupStep } from './onboarding/ProfileSetupStep'
import { InterestsStep } from './onboarding/InterestsStep'
import { SpaceSelectionStep } from './onboarding/SpaceSelectionStep'
import { useProfile } from '../context/ProfileContext'

interface OnboardingFlowProps {
  onComplete: () => void
  onCancel: () => void
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete, onCancel }) => {
  const navigate = useNavigate()
  const { updateProfile } = useProfile()
  const [currentStep, setCurrentStep] = useState(0)
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    bio: '',
    avatar: '',
    email: '',
    github: '',
    twitter: '',
    telegram: '',
    slack: '',
    discord: '',
    linkedin: '',
    website: '',
    interests: [] as string[],
  })
  const [selectedSpaces, setSelectedSpaces] = useState<string[]>([])
  
  const steps = ['Welcome', 'Profile', 'Interests', 'Spaces']
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Save user data and complete onboarding
      updateProfile({
        ...userData,
        spaces: selectedSpaces
      })
      onComplete()
      navigate('/community')
    }
  }
  
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }
  
  const handleCancel = () => {
    // Redirect directly to the landing page
    onCancel()
    navigate('/')
  }
  
  const updateUserData = (data: Partial<typeof userData>) => {
    setUserData(prev => ({ ...prev, ...data }))
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
      <ProgressBar steps={steps} currentStep={currentStep} />
      
      {currentStep === 0 && (
        <WelcomeStep 
          onNext={handleNext} 
          onCancel={handleCancel} 
        />
      )}
      
      {currentStep === 1 && (
        <ProfileSetupStep 
          userData={userData}
          updateUserData={updateUserData}
          onNext={handleNext}
          onBack={handleBack}
          onCancel={handleCancel}
        />
      )}
      
      {currentStep === 2 && (
        <InterestsStep 
          userData={{ interests: userData.interests }}
          updateUserData={(data) => updateUserData(data)}
          onNext={handleNext}
          onBack={handleBack}
          onCancel={handleCancel}
        />
      )}
      
      {currentStep === 3 && (
        <SpaceSelectionStep 
          selectedSpaces={selectedSpaces}
          updateSpaces={setSelectedSpaces}
          onNext={handleNext}
          onBack={handleBack}
          onCancel={handleCancel}
        />
      )}
    </div>
  )
}
