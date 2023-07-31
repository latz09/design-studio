import Image from 'next/image';
import logo from '../../public/images/logos/White-logo-no-bg.png';
import mock from '../../public/images/mockups/five-screens-with-logo.png';

const AdOne = () => {
	return (
		<div className='bg- h-screen text-[#E3FCFF] font-questrial  '>
			<div
				className={`bg-gradient-to-t from-dark via-[#00454C] to-dark h-2/3  flex flex-col justify-between `}
			>
				<div>
					<div className='mt-16 ml-4 scale-y-150 font-semibold tracking-wider text-5xl w-3/4'>
						Need a website?
					</div>
					<div className='mt-10 ml-4 scale-y-150 text-xl w-2/3'>
						Stand Out From The Crowd With A Custom Website
					</div>
				</div>
				<div className='w-3/4  place-self-end mb-3 mt-2'>
					<Image src={mock} alt='Ad Designs' className='   mx-auto ' />
				</div>
				<div className='flex  justify-between bg-[#00454C] items-center p-3'>
					<div className='w-1/4'>
						<Image src={logo} alt='Ad Designs' className='   mx-auto w-2/3' />
					</div>
					<div className=''>LatzWebDesign.com</div>
				</div>
			</div>
		</div>
	);
};

export default AdOne;
