/* eslint-disable @typescript-eslint/no-explicit-any */
import {Badge} from '@/components/ui/badge';
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';
import {dateParser} from '@/lib/utils';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export function TopProjects() {
	const [projects, setProjects] = useState([]);
	const [res, setRes] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await axios.get(
					'https://personal-backend-psi.vercel.app/projects?pageSize=3',
				);
				setProjects(data.data.result.results);
			} catch (e: any) {
				setRes(e.toString());
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);
	if (loading) {
		return (
			<>
				{Array.from({length: 3}, (_, index) => (
					<Skeleton
						key={index}
						className="h-[350px]  flex-1  dark:bg-slate-700"
					/>
				))}
			</>
		);
	}
	if (res) {
		return <div> {res} </div>;
	}
	if (projects.length === 0) {
		return <div> No Data Available</div>;
	}
	return (
		<div className="flex flex-col gap-5">
			{projects.map((d: any, i) => (
				<a
					key={i}
					href={`/projects/view/${d.properties.Name.title[0].plain_text.replace(/\s+/g, '-')}?id=${d.id}`}
				>
					<Card
						className="relative flex flex-col md:flex-row h-[150px] md:h-full items-start justify-between w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700 cursor-pointer"
						x-chunk="dashboard-05-chunk-4"
					>
						<CardHeader>
							<CardTitle className="font-semibold text-xl  hover:underline">
								<Link
									to={`/projects/view/${d.properties.Name.title[0].plain_text.replace(/\s+/g, '-')}?id=${d.id}`}
									className={`text-blue-600 dark:text-blue-400 ${location.pathname === '/' ? 'text-sm' : 'text-lg'}`}
								>
									{d.properties.Name.title[0].plain_text}
								</Link>
							</CardTitle>
							<CardDescription className="font-semibold text-sm">
								<div className="flex gap-1">
									{d.properties['Languages']?.multi_select.map(
										(data: any, index: any) => (
											<Badge key={index} variant={'outline'}>
												{data.name}
											</Badge>
										),
									)}
								</div>
							</CardDescription>
						</CardHeader>
						<CardFooter className="md:px-5 md:py-7">
							{' '}
							<p className="font-semibold text-sm text-slate-500 dark:text-slate-400">
								{d.properties['Released Date']?.date?.start
									? dateParser(d.properties['Released Date'].date.start)
									: 'In progress'}
							</p>
						</CardFooter>
						{/* <div className="absolute bottom-1 right-1 flex">
              <Button size={'icon'} variant={'outline'}><Github /></Button>
              <Button size={'icon'} variant={'outline'}><Rocket /></Button>
            </div> */}
					</Card>
				</a>
			))}
		</div>
	);
}
