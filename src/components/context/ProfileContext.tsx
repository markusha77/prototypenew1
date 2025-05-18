import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Project } from '../../types'

interface ProfileData {
  name: string
  username: string
  bio: string
  avatar: string
  email: string
  github: string
  twitter: string
  telegram: string
  slack: string
  discord: string
  linkedin: string
  website: string
  interests: string[]
  spaces: string[]
  projects: Project[]
}

interface ProfileContextType {
  profile: ProfileData
  isProfileComplete: boolean
  updateProfile: (data: Partial<ProfileData>) => void
  addProject: (project: Project) => void
  updateProject: (project: Project) => void
  deleteProject: (projectId: string) => void
}

const defaultProfile: ProfileData = {
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
  interests: [],
  spaces: [],
  projects: []
}

const ProfileContext = createContext<ProfileContextType>({
  profile: defaultProfile,
  isProfileComplete: false,
  updateProfile: () => {},
  addProject: () => {},
  updateProject: () => {},
  deleteProject: () => {}
})

export const useProfile = () => useContext(ProfileContext)

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(defaultProfile)
  
  const isProfileComplete = Boolean(
    profile.name && 
    profile.username && 
    profile.email
  )
  
  const updateProfile = (data: Partial<ProfileData>) => {
    setProfile(prev => ({
      ...prev,
      ...data
    }))
  }
  
  const addProject = (project: Project) => {
    setProfile(prev => ({
      ...prev,
      projects: [...prev.projects, project]
    }))
  }
  
  const updateProject = (updatedProject: Project) => {
    setProfile(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === updatedProject.id ? updatedProject : project
      )
    }))
  }
  
  const deleteProject = (projectId: string) => {
    setProfile(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== projectId)
    }))
  }
  
  return (
    <ProfileContext.Provider value={{ 
      profile, 
      isProfileComplete, 
      updateProfile,
      addProject,
      updateProject,
      deleteProject
    }}>
      {children}
    </ProfileContext.Provider>
  )
}
