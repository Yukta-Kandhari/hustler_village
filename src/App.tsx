// eslint-disable-next-line
import tw, { css } from 'twin.macro'
import CareerCard from './components/CareerCard'
import designer from './icons/designer.svg'
import developer from './icons/developer.svg'
import recruiter from './icons/recruiter.svg'
import other from './icons/other.svg'

const RobotoBold = css`
    font-family: "Roboto-Bold";
`


const CareerData = [
  {
    name: 'Designer',
    icon: designer
  },
  {
    name: 'Developer',
    icon: developer
  },
  {
    name: 'Recruiter',
    icon: recruiter
  },
  {
    name: 'Other',
    icon: other
  },
]

const App = () => {
  return (
    <div tw="flex flex-col my-5 md:my-0 mx-auto  max-w-2xl min-h-screen  justify-center items-center  space-y-10 " >
      <div>
        <p css={RobotoBold} tw="text-2xl text-center md:text-4xl font-bold" >Are you a designer, developer or recruiter?</p>
      </div>

      <div tw="grid md:grid-cols-2   gap-10" >
        {CareerData.map((card, index) => (
          <CareerCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default App

