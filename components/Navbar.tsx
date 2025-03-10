"use client";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { User } from "next-auth";
import Link from "next/link";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar({ user }: { user: User }) {
	console.log(user);
	return (
		<Disclosure as="nav" className="bg-indigo-400">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 justify-between">
							<div className="flex">
								<div className="flex flex-shrink-0 items-center">
									{/* Logo */}
									<Link
										href={"/"}
										className="flex items-center"
									>
										<img src="https://tse1.mm.bing.net/th?id=OIG4.3.cibT1yjjUzoamxa_bp&pid=ImgGn" alt="AceCV" className="h-8 w-10" />
										<span className=" px-1 font-bold text-3xl italic text-white"> AceCV</span>
									</Link>
								</div>
							</div>
							<div className="hidden sm:ml-6 sm:flex sm:items-center">
								{/* Profile dropdown */}
								{
									//@ts-ignore
									user.role === "user" && (
										<Menu as="div" className="relative ml-3">
											<div>
												<MenuButton className="relative flex rounded-full bg-grey text-sm focus:outline-none focus:ring-3 focus:ring-indigo-500 focus:ring-offset-2">
													<span className="absolute -inset-1.5" />
													<span className="sr-only">Open user menu</span>
													{/* Profile Image with Border and Size Adjustment */}
													<img
														className="h-10 w-10 rounded-full border-4 border-white"
														src={user?.image!}
														alt={user?.name!}
													/>
												</MenuButton>
											</div>
											<Transition
												enter="transition ease-out duration-200"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
													<MenuItem>
														{({ focus }) => (
															<Link
																href="/profile"
																className={classNames(
																	focus ? "bg-gray-100" : "",
																	"block px-4 py-2 font-bold text-gray-400"
																)}
															>
																Profile
															</Link>
														)}
													</MenuItem>

													<MenuItem>
														{({ focus }) => (
															<button
																className={classNames(
																	focus ? "bg-gray-100" : "",
																	"block px-4 py-2 font-bold text-gray-400 w-full text-left "
																)}
															>
																Sign out
															</button>
														)}
													</MenuItem>
												</MenuItems>
											</Transition>
										</Menu>
									)
								}
								{
									//@ts-ignore
									user.role === "admin" && (
										<Menu as="div" className="relative ml-3">
											<div className="flex items-center gap-4">
												<p className="text-slate-900 text-2xl text-sm font-bold">
													Admin
												</p>
												<MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
													<span className="absolute -inset-1.5" />
													<span className="sr-only">Open user menu</span>
													{/* Profile Image with Border and Size Adjustment */}
													<img
														className="h-10 w-10 rounded-full border-2 border-indigo-600"
														src={user?.image!}
														alt={user?.name!}
													/>
												</MenuButton>
											</div>
											<Transition
												enter="transition ease-out duration-200"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
													<MenuItem>
														{({ focus }) => (
															<Link
																href="/admin/users"
																className={classNames(
																	focus ? "bg-gray-100" : "",
																	"block px-4 py-2 font-bold text-gray-400"
																)}
															>
																Users
															</Link>
														)}
													</MenuItem>
													<MenuItem>
														{({ focus }) => (
															<Link
																href="/admin/subscriptions"
																className={classNames(
																	focus ? "bg-gray-100" : "",
																	"block px-4 py-2 font-bold text-gray-400"
																)}
															>
																Subscriptions
															</Link>
														)}
													</MenuItem>
													<MenuItem>
														{({ focus }) => (
															<Link
																href="/admin/templates"
																className={classNames(
																	focus ? "bg-gray-100" : "",
																	"block px-4 py-2 font-bold text-gray-400"
																)}
															>
																Templates
															</Link>
														)}
													</MenuItem>

													<MenuItem>
														{({ focus }) => (
															<button
																className={classNames(
																	focus ? "bg-gray-100" : "",
																	"block px-4 py-2 font-bold text-gray-400 w-full text-left "
																)}
															>
																Sign out
															</button>
														)}
													</MenuItem>
												</MenuItems>
											</Transition>
										</Menu>
									)
								}
							</div>
							<div className="-mr-2 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</DisclosureButton>
							</div>
						</div>
					</div>

					<DisclosurePanel className="sm:hidden">
						<div className="space-y-1 pb-3 pt-2">
							{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
							<DisclosureButton
								as="a"
								href="#"
								className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
							>
								Home
							</DisclosureButton>
						</div>
						<div className="border-t border-gray-200 pb-3 pt-4">
							<div className="flex items-center px-4">
								<div className="flex-shrink-0">
									<img
										className="h-10 w-10 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</div>
								<div className="ml-3">
									<div className="text-base font-medium text-gray-800">
										Tom Cook
									</div>
									<div className="text-sm font-medium text-gray-500">
										tom@example.com
									</div>
								</div>
							</div>
							<div className="mt-3 space-y-1">
								<Link
									href="/profile"
									className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
								>
									Profile
								</Link>
								<DisclosureButton
									as="a"
									href="#"
									className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
								>
									Sign out
								</DisclosureButton>
							</div>
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
}
