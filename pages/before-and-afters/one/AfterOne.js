import { BsFillXDiamondFill, BsHouseCheck } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { GiVacuumCleaner } from 'react-icons/gi';
import { PiMaskHappy } from 'react-icons/pi';
import heroImage from '../../../public/images/before-afters/kitchen.jpg';
import Image from 'next/image';

const AfterOne = () => {
	return (
		<div className='grid font-oswald bg-[#F2F7FE]'>
			<Navbar />
			<Hero />
			<ShortAbout />
			<div className='h-screen'></div>
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
		<div className='relative h-[50vh]'>
			<Image
				src={heroImage}
				alt='Kitchen'
				layout='fill'
				objectFit='cover'
				priority={true}
			/>
			<div className='absolute inset-0 '></div>
			<div className='absolute grid place-items-center h-full w-full bg-gradient-to-b from-[#011229]/10 via-[#011229]/50 to-[#011229]/10'>
				<div className='grid place-items-center  gap-2 text-[#F8F7EC] font-oswald mx-4 '>
					<div>
						<h2 className='text-5xl '>Come Home Happy</h2>
					</div>
					<p className='font-mulish text-center'>
						{`From dusty corners to sunny windows, we are all about that glow`}
					</p>
					<button className='bg-[#2B7EED] shadow-lg tracking-wider   text-xl mt-6 px-6 py-2 rounded-sm place-self-center w-1/2'>
						Book a Cleaning
					</button>
				</div>
			</div>
		</div>
	);
};

const ShortAbout = () => {
	return (
		<div className='mx-2 mt-6 py-4  text-cente'>
			<h3 className='text-2xl font-semibold text-[#011229]  text-center font-mulish mb-8'>
				How it works?
			</h3>
			<div className='flex items-center justify-evenly gap-2'>
				<div className='grid gap-4 place-items-center'>
					<span className='text-4xl text-[#2B7EED]'>
						<BsHouseCheck />
					</span>
					<div className='grid gap-1 place-items-center'>
						<span className='opacity-90'>BOOK</span>
						<span className='text-sm text-center opacity-80'>
							{`Select the location and time you'd like your professional clean.`}
						</span>
					</div>
				</div>
				<div className='grid gap-4 place-items-center'>
					<span className='text-4xl text-[#2B7EED]'>
						<GiVacuumCleaner />
					</span>
					<div className='grid gap-1 place-items-center'>
						<span className='opacity-90'>CLEAN</span>
						<span className='text-sm text-center opacity-80'>
							A professional cleaner comes over and cleans your home.
						</span>
					</div>
				</div>
				<div className='grid gap-4 place-items-center'>
					<span className='text-4xl text-[#2B7EED]'>
						<PiMaskHappy />
					</span>
					<div className='grid gap-1 place-items-center'>
						<span className='opacity-90'>HAPPY</span>
						<span className='text-sm text-center opacity-80'>
							Come to your home and enjoy your clean home.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
