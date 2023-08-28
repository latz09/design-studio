import { BsFillXDiamondFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import heroImage from '../../../public/images/before-afters/kitchen.jpg';
import Image from 'next/image';



const AfterOne = () => {
	return (
		<div className='grid font-oswald bg-[#F2F7FE]'>
			<Navbar />
			<Hero />
            <ShortAbout />
            <div className="h-screen"></div>
            
		</div>
	);
};

export default AfterOne;

const Navbar = () => {
	return (
		<div className='flex items-center justify-between px-4 py-3 text-[#2B7EED] '>
			<div>
				<BsFillXDiamondFill className='w-8 h-8' />
			</div>
			<div>
				<AiOutlineMenu className='w-8 h-8 ' />
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className='relative h-[53vh]'>
			<Image
				src={heroImage}
				alt='Kitchen'
				layout='fill'
				objectFit='cover'
				priority={true}
			/>
			<div className='absolute inset-0 '></div>
			<div className='absolute grid place-items-center h-full w-full bg-gradient-to-b from-[#011229]/10 via-[#011229]/70 to-[#011229]/10'>
				<div className='grid  gap-2 text-[#F8F7EC] font-oswald mx-4 '>
					<div>
                      
						<h2 className='text-5xl '>HomeGlow</h2>
					</div>
					<p className='font-mulish'>
						From dusty corners to sunny windows, we're all about that glow-up!
					</p>
					<button className='bg-[#F2F7FE] shadow-lg tracking-wider text-[#011229]  font-bold text-xl mt-6 px-5 py-2 rounded-sm place-self-center'>
						Get Glowing Now
					</button>
				</div>
			</div>
		</div>
	);
};


const ShortAbout = () => {
    return (
        <div className='mx-4 mt-8 py-4  text-cente'>
            <h3 className='text-2xl font-semibold text-[#011229] mb-3 text-center'>Why Choose HomeGlow?</h3>
            <p className='text-[#011229]/80 font-mulis leading-7 text-lg'>
                At HomeGlow, we believe a clean home is a happy home. Our team is passionate about delivering top-notch cleaning services that not only meet, but exceed expectations. From those hard-to-reach spots to everyday surfaces, we guarantee a shine that feels brand new, every single time.
            </p>
        </div>
    )
}
