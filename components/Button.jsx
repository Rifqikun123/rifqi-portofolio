const Button = ({ children, variation, ...props }) => (
	<button
		{...props}
		className={`title mr-3 rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out ${
			variation === "primary"
				? "bg-blue-600 hover:bg-transparent border-transparent hover:border-blue-600 border-2 text-white hover:text-blue-600 box-border"
				: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white box-border"
		}`}>
		{children}
	</button>
);

export default Button;