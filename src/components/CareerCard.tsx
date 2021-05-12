// eslint-disable-next-line
import tw, { css } from 'twin.macro'

interface CardProps {
  name: string;
  icon: any;
}

const RobotoMedium = css`
    font-family: "Roboto-Medium";
`



const CardCareer: React.FC<CardProps> = ({ name, icon }) => {
  return (
    <div tw="px-10 shadow-md text-center"  >

      <img src={icon} alt={name} />
      <p css={[RobotoMedium]} tw="text-xl font-medium" >{name}</p>

    </div>
  )
}

export default CardCareer
