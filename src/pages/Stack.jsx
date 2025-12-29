import PageIntro from '../components/PageIntro'
import StackSection from '../components/StackSection'
import useSiteContent from '../hooks/useSiteContent'

const Stack = () => {
  const { stack } = useSiteContent()

  return (
    <div className='lg:w-8/12 m-auto'>
      <PageIntro
        eyebrow="Stack"
        title="Systems that scale without drama."
        description="Tooling and practices I rely on to keep teams shipping: rapid feedback loops, measurable reliability, and predictable performance."
      />
      <StackSection stack={stack} />
    </div>
  )
}

export default Stack
