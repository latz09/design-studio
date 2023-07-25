import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	const pages = [
		{
			studio: 'Storys',
			link: '/Storys',
		},
	];

	return (
		<div className='grid  h-screen place-items-center bg-black '>
			<div className='grid gap-4'>
				{pages.map((page, index) => {
					return (
						<Link href={page.link} key={index} className='p-4 bg-white text-2xl font-semibold rounded-sm text-black/70 hover:text-white hover:bg-white/50 hover:scale-90 transition duration-700 '>
							{page.studio}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
