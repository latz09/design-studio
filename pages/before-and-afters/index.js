import Link from 'next/link';

const beforeAndAfterLinks = [
	{
		id: 1,
		title: 'Before and After #1',
		links: [
			{
				id: 1,
				title: 'before',
				link: '/before-and-afters/one/BeforeOne',
			},
			{
				id: 2,
				title: 'after',
				link: '/before-and-afters/one/AfterOne',
			},
		],
	},
];

const BeforeAndAfters = () => {
	return (
		<div className='grid place-items-center h-screen'>
			<div className='grid gap-4'>
				{beforeAndAfterLinks.map((beforeAndAfter) => (
					<div
						key={beforeAndAfter.id}
						className='grid place-items-center gap-4'
					>
						<div>Before and After # {beforeAndAfter.id}</div>
						<div className='flex space-x-8  '>
							{beforeAndAfter.links.map((link) => (
								<Link
									href={link.link}
									key={link.id}
									className='p-3 bg-slate-800 text-white rounded-sm shadow-lg w-full'
								>
									<div className='w-full'>{link.title}</div>
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BeforeAndAfters;
