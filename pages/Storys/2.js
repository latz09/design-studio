// import Story1 from "../../components/Storys/Story1";
import Image from 'next/image';
import logo from '../../public/images/logos/White-logo-no-bg.png';
import mock1 from '../../public/images/mockups/Final/lap.png';
import mock2 from '../../public/images/screenshots/5-5/livingspace.png';
import mock3 from '../../public/images/screenshots/5-5/livingspace-phone.png';
import mock4 from '../../public/images/screenshots/5-5/freitag.png';

const Story2 = () => {
	return (
		<div className=' h-screen bg-blackTwo flex justify-between bg-black'>
			<div className='flex text-white flex-col justify-between'>
				<div className=' flex justify-between h-1/3  '>
					<span></span>
					<div className='w-1/3 rotate-6 mr-8 mt-8 '>
						<Image src={logo} alt='Ad Designs' className='' />
					</div>
				</div>
				<div className=' h-1/3  px-4 grid gap-8 shadow '>
					<div className="grid grid-cols-3  place-items-center gap-2">
						<div className=''>
							<Image src={mock2} alt='Ad Designs' />
						</div>
						<div className=''>
							<Image src={mock3} alt='Ad Designs' className="" />
						</div>
						<div className=''>
							<Image src={mock4} alt='Ad Designs' />
						</div>
					</div>
                    {/* <div className="text-center">dfa</div> */}
					{/* <div className="place-self-center h-12 w-36 bg-[#49BFB7] p-4 rounded-sm ">
                    
                </div> */}
				</div>
				<div className=' h-1/3 place-items-end grid p-4  text-light '>
					{/* <span>{`Discover a seamless web experience with our 'Mobile First' design. Your customers are on the go, and your website should be too! #MobileFirst #WebDesign`}</span> */}
				</div>
			</div>
		</div>
	);
};

export default Story2;
