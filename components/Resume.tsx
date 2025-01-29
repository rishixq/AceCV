"use client";
import { Template } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import Mustache from "mustache";
import Link from "next/link";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface Props {
    template: Template;
    userProfile: JsonValue | null;
    userSubscription: JsonValue | null;
}

const Resume = ({ template, userProfile, userSubscription }: Props) => {
    if (!userProfile) {
        return (
            <h1 className="text-2xl text-emerald-400 font-bold text-center">
                This user profile does not exist
            </h1>
        );
    }

    const componentRef = useRef<HTMLDivElement | null>(null);

    const handlePrint = () => {
        if (componentRef.current) {
            const printWindow = window.open("", "PRINT", "height=600,width=800");

            if (printWindow) {
                printWindow.document.write("<html><head><title>Print</title></head><body>");
                printWindow.document.write(componentRef.current.innerHTML);
                printWindow.document.write("</body></html>");
                printWindow.document.close();
                printWindow.focus();
                printWindow.print();
                printWindow.close();
            }
        }
    };

    let canPrint = false;
    if (template.isPaid && userSubscription) {
        canPrint = true;
    }
    if (!template.isPaid) {
        canPrint = true;
    }

    const html = Mustache.render(template.html, userProfile);

    return (
        <div>
            <div className="flex gap-4 justify-center my-5">
                <Link
                    href={"/"}
                    className="bg-indigo-700  text-white py-3 px-10 rounded-lg mt-4 hover:scale-105 transition-all ease-in-out"
                >
                    Back to templates
                </Link>

                {canPrint && (
                    <button
                        onClick={handlePrint}
                        className="bg-indigo-700  text-white py-3 px-10 rounded-lg mt-4 hover:scale-105 transition-all ease-in-out"
                    >
                        Print
                    </button>
                )}
            </div>
            {!canPrint && (
                <h1 className="text-2xl mb-4 text-center text-red-500 font-semibold">
                    You are not a paid subscriber. Please subscribe to print or save this template.
                </h1>
            )}
            <div ref={componentRef} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
};

export default Resume;



