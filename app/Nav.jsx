export default function Nav(props) {
	const downChevronPath =
			"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
		upChevronPath =
			"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z";

	return (
		<nav>
			<button
				onClick={() => {
					props.setShowMenu(!props.showMenu);
				}}
				className="text-[white] h-full p-2 flex items-center font-bold border-l-[white] border-l-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="mr-2 h-4 w-4"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						fill="white"
						d={props.showMenu ? upChevronPath : downChevronPath}
					/>
				</svg>
				Menu
			</button>
		</nav>
	);
}
