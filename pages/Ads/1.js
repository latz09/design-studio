import Image from 'next/image';
import logo from '../../public/images/logos/White-logo-no-bg.png';

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
					<div className='mt-16 ml-4 scale-y-150 text-xl w-2/3'>
						Latz Web Design is your best option
					</div>
				</div>
				<div className="flex flex-col justify-between">
					<div className='w-1/5 mx-auto my-6 '>
						<Image src={logo} alt='Ad Designs' className='   mx-auto' />
					</div>
                    <div className="bg-[#00454C] p-3 text-end">
                        LatzWebDesign.com
                    </div>
				</div>
			</div>
		</div>
	);
};

export default AdOne;
