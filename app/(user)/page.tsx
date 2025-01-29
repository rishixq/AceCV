import { getAllTemplates } from "@/lib/actions/actions";
import { Template } from "@prisma/client";
import Link from "next/link";

const HomePage = async () => {
	const templates = (await getAllTemplates()) as Template[];
	return (
		<div className="bg-indigo-50 min-h-screen flex flex-col" >
			<div className="container mx-auto px-4"></div>
			<h1 className="text-3xl text-indigo-700 font-bold">Templates</h1>
			<p className="py-8 text-1xl text-gray-550 font-bold">Choose Template after creating your profile!☺</p>
			<div className="grid grid-cols-4 gap-10">
				{templates.map((template) => (
					<Link
						href={`/template/${template.id}`}
						key={template.id}
						className="border-2 border-indigo-900 hover:scale-105 transition-all ease-in-out bg-gray-100"
					>
						<img
							src={template.thumbnail}
							alt={template.name}
							className="object-contain w-full h-full"
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default HomePage;
