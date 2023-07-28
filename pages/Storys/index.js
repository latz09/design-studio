import Link from 'next/link';

const Storys = () => {
	const storys = [
		{
			Link: '/Storys/1',
		},
		{
			Link: '/Storys/2',
		},
		{
			Link: '/Storys/3',
		},
		{
			Link: '/Storys/4',
		},
	];
	return (
		<div className=' h-screen bg-blackTwo grid place-items-center bg-black text-white'>
			{/* {storys[0].Link} */}
			{storys.map((story, index) => {
				return (
					<Link key={index} href={story.Link}>
						{story.Link}
					</Link>
				);
			})}
		</div>
	);
};

export default Storys;
