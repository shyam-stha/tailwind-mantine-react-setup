import { Group, Tooltip } from '@mantine/core'
import CardItems from './CardItem'
import cost from '../../assets/images/cost.svg'
import booking from '../../assets/images/booking.svg'
import time from '../../assets/images/time.svg'
import views from '../../assets/images/views.svg'
import hero from '../../assets/images/hero.png'
import nightStay from '../../assets/images/night_stay.svg'
import bike from '../../assets/images/bike.svg'
import foodBank from '../../assets/images/food_bank.svg'
import familyRestroom from '../../assets/images/family_restroom.svg'
import walk from '../../assets/images/walk.svg'

type Props = {}

const cardItemObj = [
    {
        icon: cost,
        text: 'pp',
        value: '34',
    },
    {
        icon: booking,
        text: 'booking',
        value: '5',
    },
    {
        icon: time,
        text: 'Hours',
        value: '1',
    },
    {
        icon: views,
        text: 'Views',
        value: '8',
    },
]

const tourTripIcons = [
    {
        icon: bike,
        visible: true,
        tooltip: 'Bike',
    },
    {
        icon: familyRestroom,
        visible: true,
        tooltip: 'Family Restroom',
    },
    {
        icon: foodBank,
        visible: true,
        tooltip: 'Food Bank',
    },
    {
        icon: walk,
        visible: true,
        tooltip: 'Walk',
    },
    {
        icon: nightStay,
        visible: true,
        tooltip: 'Night Stay',
    },
]

const CardPackage = (props: Props) => {
    const items = cardItemObj?.map(item => {
        return (
            <CardItems
                key={item.text}
                text={item.text}
                value={item.value}
                icon={item.icon}
            />
        )
    })

    return (
        <div className='h-[380px] w-[416px] cursor-pointer rounded-md font-sans shadow-md shadow-gray-100 bg-white'>
            <div className='relative'>
                <img
                    src={hero}
                    alt='image'
                    className='h-[250px] w-full object-fill '
                />
                <Group className='absolute bottom-3 left-3 text-white'>
                    {tourTripIcons?.map(icon => {
                        return (
                            <Tooltip
                                label={icon.tooltip}
                                key={icon.tooltip}>
                                <div
                                    className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-md backdrop-blur-[2px] ${
                                        !icon.visible ? 'hidden' : ''
                                    }`}>
                                    <img
                                        src={icon.icon}
                                        alt={icon.tooltip}
                                    />
                                </div>
                            </Tooltip>
                        )
                    })}
                </Group>
            </div>
            <div className='pl-[15px] pt-[5px] '>
                <h2 className='text-[24px] font-[700]'>Experience nepal now</h2>
                <div className='grid grid-cols-2 pt-[5px]'>{items}</div>
            </div>
        </div>
    )
}

export default CardPackage
