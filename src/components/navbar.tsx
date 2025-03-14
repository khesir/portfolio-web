import {useLocation, useNavigate} from 'react-router-dom';
import {navdata} from './constant/data';

export function Navbar() {
	const location = useLocation();
	const pathname = location.pathname;
	const navigate = useNavigate();
	return (
		<div
			className="flex flex-wrap justify-center gap-5 border-gray-300 dark:border-gray-700 p-2
            md:px-3 z-20 border-b-2 "
		>
			{navdata.map((data, index) => (
				<div
					className={`${data.link == pathname ? 'bg-blue-400' : ''} rounded-md flex items-center gap-3 cursor-pointer p-2`}
					key={index}
				>
					<div
						className="flex gap-3 px-3 items-center"
						onClick={() => navigate(data.link)}
					>
						<data.emoji className="dark:text-white w-4 h-4" />
						<span className="font-semibold dark:text-white text-sm block">
							{data.name}
						</span>
					</div>
				</div>
			))}
		</div>
	);
}
