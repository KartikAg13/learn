import { useState, JSX } from "react";

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

const Form = (): JSX.Element => {
	const [formData, setFormData] = useState<FormData>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
		const response = await fetch("http://backend:5000/api/submit", {
			method: "POST",
			headers: {
			"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		if (response.ok) {
			console.log("Form submitted successfully");
			setFormData({ firstName: "", lastName: "", email: "", password: "" }); // Clear form
		} else {
			console.error("Form submission failed");
		}
		} catch (error) {
		console.error("Error submitting form:", error);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-900">
		<form
			onSubmit={handleSubmit}
			className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
		>
			{/* First Name Field */}
			<div className="mb-4">
			<label
				className="block text-gray-300 text-sm font-bold mb-2"
				htmlFor="firstName"
			>
				First name
			</label>
			<div className="relative">
				<input
				className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="firstName"
				type="text"
				placeholder="First name"
				value={formData.firstName}
				onChange={(e) =>
					setFormData({ ...formData, firstName: e.target.value })
				}
				/>
				<div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
				<svg
					className="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
					/>
				</svg>
				</div>
			</div>
			</div>

			{/* Last Name Field */}
			<div className="mb-4">
			<label
				className="block text-gray-300 text-sm font-bold mb-2"
				htmlFor="lastName"
			>
				Last name
			</label>
			<div className="relative">
				<input
				className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="lastName"
				type="text"
				placeholder="Last name"
				value={formData.lastName}
				onChange={(e) =>
					setFormData({ ...formData, lastName: e.target.value })
				}
				/>
				<div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
				<svg
					className="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
					/>
				</svg>
				</div>
			</div>
			</div>

			{/* Email Field */}
			<div className="mb-4">
			<label
				className="block text-gray-300 text-sm font-bold mb-2"
				htmlFor="email"
			>
				Email
			</label>
			<div className="relative">
				<input
				className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="email"
				type="email"
				placeholder="Email"
				value={formData.email}
				onChange={(e) =>
					setFormData({ ...formData, email: e.target.value })
				}
				/>
				<div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
				<svg
					className="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
					/>
				</svg>
				</div>
			</div>
			</div>

			{/* Password Field */}
			<div className="mb-6">
			<label
				className="block text-gray-300 text-sm font-bold mb-2"
				htmlFor="password"
			>
				Password
			</label>
			<div className="relative">
				<input
				className="shadow appearance-none border-b-2 border-blue-500 rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="password"
				type="password"
				placeholder="Password"
				value={formData.password}
				onChange={(e) =>
					setFormData({ ...formData, password: e.target.value })
				}
				/>
				<div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
				<svg
					className="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
					<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
					/>
				</svg>
				</div>
			</div>
			</div>

			{/* Submit Button */}
			<button
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
			type="submit"
			>
			Submit
			</button>
		</form>
		</div>
	);
};

export default Form;