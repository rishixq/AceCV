"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
	return (
		<div className="h-screen bg-gradient-to-r from-indigo-700 via-blue-500 to-white-300 flex items-center justify-center animate-fade-in">
			<div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg animate-zoom-in">
				<div className="text-center">
					<h2 className="text-4xl font-extrabold text-blue-950 font-poppins animate-bounce-in">
						Welcome to AceCV
					</h2>
					<p className="mt-4 text-md font-bold text-gray-400 font-poppins animate-fade-in-delayed">
						Build your dream resume!
					</p>
				</div>

				<div className="mt-12 animate-slide-up-delayed">
					<button
						onClick={() => signIn("github")}
						className="flex items-center justify-center w-full rounded-full bg-gradient-to-r from-indigo-700 via-blue-500 to-white-200 px-5 py-4 text-lg font-semibold text-white shadow-lg hover:indigo-700 via-blue-500 hover:to-white-300 transition-transform duration-300 transform hover:scale-110 font-poppins"
					>
						Sign in with GitHub
					</button>
				</div>
			</div>
		</div>
	);
}
