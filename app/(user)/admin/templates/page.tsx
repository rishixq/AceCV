import { auth } from "@/auth";
import TemplatesTable from "@/components/TemplatesTable";
import { getAllTemplates } from "@/lib/actions/actions";
import { Template } from "@prisma/client";
import Link from "next/link";

const TemplatesPage = async () => {
	const session = await auth();
	if (
		//@ts-ignore
		session?.user.role !== "admin"
	) {
		return (
			<div className="h-screen flex justify-center items-center">
				<h1 className="text-emerald-400 text-5xl">
					You are not authorized to view this page
				</h1>
			</div>
		);
	}
	const templates = await getAllTemplates();
	return (
		<>
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl text-indigo-700  font-bold text-center">
					My Templates
				</h1>

				<Link
					href={"/admin/templates/new"}
					className="bg-indigo-700  text-white py-3 px-10 rounded-lg mt-4 hover:scale-105 transition-all ease-in-out"
				>
					Add Template
				</Link>
			</div>
			<TemplatesTable templates={templates as Template[]} />
		</>
	);
};

export default TemplatesPage;
