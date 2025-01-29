import TemplateForm from "@/components/TemplateForm";
import React from "react";

const NewTemplatePage = () => {
	return (
		<div>
			<h1 className="text-2xl text-indigo-700 font-bold text-center">
				Add Template
			</h1>
			<TemplateForm />
		</div>
	);
};

export default NewTemplatePage;
