import TextInputField from '../common/TextInputField'
import Logo from './Logo'
import Search from '../../assets/images/Search.svg'
import { NavLink } from 'react-router-dom'
import { FormProvider } from 'react-hook-form'

const navLinkItems = [
    { label: 'Packages', path: '/packages' },
    { label: 'About Us', path: '/about' },
    { label: 'Blogs', path: '/blogs' },
]

const NavBar = (props: any) => {
    const links = navLinkItems.map(link => {
        return (
            <NavLink
                to={link.path}
                className=' hover:underline-offset-4'>
                {link.label}
            </NavLink>
        )
    })

    return (
        <div className='container flex h-[90px] w-full items-center justify-between px-[80px]'>
            <div className=''>
                <Logo />
            </div>
            <div className='flex h-[55px] w-[535px] cursor-text items-center rounded-[8px] bg-[#EFF0F633] py-[8px] px-[24px]'>
                <img
                    src={Search}
                    alt='Search'
                    className='h-[20px] w-[20px] text-[#EFF0F6]'
                />
                <input
                    type='text'
                    placeholder='Search'
                    className='ml-[16px] w-full bg-transparent text-white placeholder:text-[#D9DBE9] focus:outline-none'
                />
            </div>
            <div className='flex gap-[40px] text-[#FCFCFC]'>{links}</div>
        </div>
    )
}

export default NavBar
