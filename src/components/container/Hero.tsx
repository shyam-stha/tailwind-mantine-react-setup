import hero from '../../assets/images/hero.png'
import NavBar from '../partial/NavBar'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className='h-screen w-screen bg-hero bg-cover bg-no-repeat bg-scroll bg-center'>
            <NavBar />
        </div>
    )
}

export default Hero
