import Image from 'next/image';
import logo from '../../public/images/logos/logo-light-color.png';
import mock1 from '../../public/images/mockups/Final/phones.png';
const Story1 = () => {
	return (
		<div className='flex text-white flex-col justify-between'>
			<div className=' flex justify-between h-1/3 bg-white/20 '>
				<span></span>
				<div className='w-1/3 rotate-6 mr-8 mt-8'>
					<Image src={logo} alt='Ad Designs' />
				</div>
			</div>
			<div className=' h-1/3 grid grid-cols-2  bg-gradient-to-t from-white/20 via-black to-white/20 '>
				<div className='scale-125'>
					<Image src={mock1} alt='Ad Designs' />
				</div>
                {/* <div className="place-self-center h-12 w-36 bg-[#49BFB7] p-4 rounded-sm ">
                    
                </div> */}
			</div>
			<div className=' h-1/3 place-items-end grid p-4 bg-white/20 text-light '>
				{/* <span>{`Discover a seamless web experience with our 'Mobile First' design. Your customers are on the go, and your website should be too! #MobileFirst #WebDesign`}</span> */}
			</div>
		</div>
	);
};

export default Story1;
