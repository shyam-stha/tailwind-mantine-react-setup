import CardPackage from '../components/common/CardPackage'
import CardTourTypes from '../components/common/CardTourTypes'
import Hero from '../components/container/Hero'
import Rider from '../assets/images/bike_tour.jpg'
import Footer from '../components/partial/Footer'

type Props = {}

const LandingPage = (props: Props) => {
    return (
        <div className='bg-[#E5E5E5] '>
            <Hero />
            <div className='mx-[90px]'>
                <h2 className='text-[30px] font-bold'>Popular Experience</h2>
                <div className='mt-5 mb-5 flex flex-wrap  gap-[30px]'>
                    <CardPackage />
                    <CardPackage />
                    <CardPackage />
                </div>
                <h2 className='text-[30px] font-bold'>Tour Types</h2>
                <div className='mt-5 mb-5 flex flex-wrap gap-[22px]'>
                    <CardTourTypes
                        image={Rider}
                        title='Bike Tour   '
                    />
                    <CardTourTypes
                        image={Rider}
                        title='Bike Tour   '
                    />
                    <CardTourTypes
                        image={Rider}
                        title='Bike Tour   '
                    />
                    <CardTourTypes
                        image={Rider}
                        title='Bike Tour   '
                    />
                    <CardTourTypes
                        image={Rider}
                        title='Bike Tour   '
                    />
                    <CardTourTypes
                        image={Rider}
                        title='Bike Tour   '
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage
