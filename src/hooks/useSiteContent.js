import { useOutletContext } from 'react-router-dom'

export const useSiteContent = () => {
  const context = useOutletContext()
  if (!context || !context.site) {
    throw new Error('Site content is not available in the current route context.')
  }
  return context.site
}

export default useSiteContent
