import React, { useState } from 'react'
import { Search, Check } from 'lucide-react'

interface SpaceSelectionStepProps {
  selectedSpaces: string[]
  updateSpaces: (spaces: string[]) => void
  onNext: () => void
  onBack: () => void
  onCancel: () => void
}

export const SpaceSelectionStep: React.FC<SpaceSelectionStepProps> = ({ 
  selectedSpaces, 
  updateSpaces, 
  onNext, 
  onBack,
  onCancel
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  
  const allSpaces = [
    {
      id: 'web-dev',
      name: 'Web Development',
      description: 'Discuss modern web development techniques and frameworks',
      members: 1243,
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'mobile-dev',
      name: 'Mobile Development',
      description: 'Share knowledge about iOS, Android, and cross-platform development',
      members: 982,
      image: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Explore artificial intelligence and machine learning concepts',
      members: 756,
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'design',
      name: 'UI/UX Design',
      description: 'Share design tips, tools, and inspiration',
      members: 1105,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'devops',
      name: 'DevOps',
      description: 'Discuss CI/CD, infrastructure as code, and deployment strategies',
      members: 645,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'blockchain',
      name: 'Blockchain',
      description: 'Explore blockchain technology and cryptocurrency development',
      members: 512,
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'game-dev',
      name: 'Game Development',
      description: 'Share game development techniques, engines, and resources',
      members: 834,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'cloud',
      name: 'Cloud Computing',
      description: 'Discuss AWS, Azure, GCP, and cloud architecture',
      members: 723,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    }
  ]
  
  const filteredSpaces = allSpaces.filter(space => 
    space.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    space.description.toLowerCase().includes(searchQuery.toLowerCase())
  )
  
  const toggleSpace = (spaceId: string) => {
    const newSpaces = selectedSpaces.includes(spaceId)
      ? selectedSpaces.filter(id => id !== spaceId)
      : [...selectedSpaces, spaceId]
    
    updateSpaces(newSpaces)
  }
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Spaces</h2>
      <p className="text-gray-600 mb-6">
        Spaces are communities where you can connect with others who share your interests.
      </p>
      
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search spaces..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="space-y-4 mb-8 max-h-96 overflow-y-auto pr-2">
        {filteredSpaces.map(space => (
          <div 
            key={space.id}
            className={`p-4 rounded-lg border ${
              selectedSpaces.includes(space.id)
                ? 'bg-indigo-50 border-indigo-300'
                : 'bg-white border-gray-200 hover:border-gray-300'
            } transition-colors duration-200 cursor-pointer`}
            onClick={() => toggleSpace(space.id)}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src={space.image} 
                  alt={space.name} 
                  className="h-12 w-12 rounded-lg object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium text-gray-900">{space.name}</h3>
                <p className="text-sm text-gray-500">{space.description}</p>
                <p className="text-xs text-gray-400 mt-1">{space.members.toLocaleString()} members</p>
              </div>
              <div className="ml-4 flex-shrink-0">
                {selectedSpaces.includes(space.id) ? (
                  <div className="bg-indigo-100 text-indigo-700 p-2 rounded-full">
                    <Check className="h-5 w-5" />
                  </div>
                ) : (
                  <div className="border border-gray-200 text-gray-400 p-2 rounded-full">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
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
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
