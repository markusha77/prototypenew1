import React from 'react'

interface InterestsStepProps {
  userData: {
    interests: string[]
  }
  updateUserData: (data: { interests: string[] }) => void
  onNext: () => void
  onBack: () => void
  onCancel: () => void
}

export const InterestsStep: React.FC<InterestsStepProps> = ({ 
  userData, 
  updateUserData, 
  onNext, 
  onBack,
  onCancel
}) => {
  const allInterests = [
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'mobile', name: 'Mobile Development', icon: '📱' },
    { id: 'ai', name: 'Artificial Intelligence', icon: '🤖' },
    { id: 'data', name: 'Data Science', icon: '📊' },
    { id: 'design', name: 'UI/UX Design', icon: '🎨' },
    { id: 'devops', name: 'DevOps', icon: '⚙️' },
    { id: 'blockchain', name: 'Blockchain', icon: '🔗' },
    { id: 'game', name: 'Game Development', icon: '🎮' },
    { id: 'cloud', name: 'Cloud Computing', icon: '☁️' },
    { id: 'security', name: 'Cybersecurity', icon: '🔒' },
    { id: 'iot', name: 'Internet of Things', icon: '🔌' },
    { id: 'ar', name: 'AR/VR', icon: '👓' },
    { id: 'ml', name: 'Machine Learning', icon: '🧠' },
    { id: 'robotics', name: 'Robotics', icon: '🦾' },
    { id: 'qa', name: 'Quality Assurance', icon: '✅' },
    { id: 'pm', name: 'Project Management', icon: '📋' }
  ]
  
  const toggleInterest = (interestId: string) => {
    const newInterests = userData.interests.includes(interestId)
      ? userData.interests.filter(id => id !== interestId)
      : [...userData.interests, interestId]
    
    updateUserData({ interests: newInterests })
  }
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Interests</h2>
      <p className="text-gray-600 mb-6">
        Choose topics you're interested in to personalize your experience.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {allInterests.map(interest => (
          <button
            key={interest.id}
            type="button"
            onClick={() => toggleInterest(interest.id)}
            className={`flex items-center p-3 rounded-lg border ${
              userData.interests.includes(interest.id)
                ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="text-xl mr-3">{interest.icon}</span>
            <span className="font-medium">{interest.name}</span>
            {userData.interests.includes(interest.id) && (
              <svg className="ml-auto h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        ))}
      </div>
      
      <div className="flex justify-between">
        <div>
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
          >
            Back
          </button>
        </div>
        
        <div className="flex space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            disabled={userData.interests.length === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
