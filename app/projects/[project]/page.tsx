import { getProject } from '@/sanity/sanity-utils';

type props = {
	params: { project: string };
};

export default async function Project({ params }: props) {
	const slug = params.project;
	const project = await getProject(slug);
	return (
		<div>
			<header>
				<h1>{project.name}</h1>
				<a
					href="{project.url}"
					title="view project"
					target="_blank"
					rel="noopener noreferrer"
				>
					View Project
				</a>
			</header>
		</div>
	);
}
