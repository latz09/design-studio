import Link from 'next/link';

const Ads = () => {
	const ads = [
		{
			Link: '/Ads/1',
		},
		// {
		// 	Link: '/Ads/2',
		// },
		// {
		// 	Link: '/Ads/3',
		// },
		// {
		// 	Link: '/Ads/4',
		// },
	];
	return (
		<div className=' h-screen bg-blackTwo grid place-items-center bg-black text-white'>
			{/* {ads[0].Link} */}
			{ads.map((ad, index) => {
				return (
					<Link key={index} href={ad.Link}>
						{ad.Link}
					</Link>
				);
			})}
		</div>
	);
};

export default Ads;