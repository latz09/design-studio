import logo from '../../public/images/mockups/Final/phones.png';
import Image from 'next/image';
const Story4 = () => {
	return (
		<div className='bg-cyan-300 h-screen'>
			<div className='flex flex-col justify-between h-full '>
                <div className="h-full bordr"></div>
                <div className="h-full bordr">
                    <Image src={logo} alt='Ad Designs' className="w-4/5 mx-auto" />
                </div>
                <div className="h-full borde"></div>
            </div>
		</div>
	);
};

export default Story4;
