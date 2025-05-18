/**
 * Get the view count for a project from localStorage
 * @param projectId The ID of the project
 * @returns The number of views for the project
 */
export const getProjectViewCount = (projectId: string): number => {
  try {
    const viewCounts = JSON.parse(localStorage.getItem('projectViewCounts') || '{}');
    return viewCounts[projectId] || 0;
  } catch (error) {
    console.error('Error getting view count:', error);
    return 0;
  }
};

/**
 * Increment the view count for a project in localStorage
 * @param projectId The ID of the project
 */
export const incrementProjectViewCount = (projectId: string): void => {
  try {
    const viewCounts = JSON.parse(localStorage.getItem('projectViewCounts') || '{}');
    viewCounts[projectId] = (viewCounts[projectId] || 0) + 1;
    localStorage.setItem('projectViewCounts', JSON.stringify(viewCounts));
  } catch (error) {
    console.error('Error incrementing view count:', error);
  }
};
