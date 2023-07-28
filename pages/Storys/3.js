// import video from '../../public/videos/japanese-gardening.gif';
import Image from 'next/image';
import logo from '../../public/images/logos/logo-light-color.png';

const Story3 = () => {
    return (
        <div className="relative min-h-screen">	
            <img 
                src='https://media.giphy.com/media/iZAbKh9hJ6rGE/giphy.gif' 
                alt='Japanese Gardening' 
                className="absolute z-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-black/80 h-screen flex flex-col justify-between">
                {/* Your content goes here */}
                <span></span>
                <span></span>  
                <Image src={logo} alt='Ad Designs' className="w-4/5 mx-auto" /> 
            </div>
        </div>
    );
};

export default Story3;
