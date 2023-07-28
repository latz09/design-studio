import logo from '../../public/images/mockups/grooming/web-design-in-saint-paul.png';
import Image from 'next/image';
const Story4 = () => {
	return (
		<div className='bg-black h-screen'>
			<div className='flex flex-col justify-between h-full '>
                <div className="h-full bordr"></div>
                <div className="h-full bordr opacity-40">
                    <Image src={logo} alt='Ad Designs' className="   mx-auto" />
                </div>
                <div className="h-full borde"></div>
            </div>
		</div>
	);
};

export default Story4;
