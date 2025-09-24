import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import "./index.css"

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage/>}></Route>
				<Route path="/projects" element={<ProjectsPage/>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

function NavBar() {
	const navigate = useNavigate();

	function goProjectsPage()
	{
		const nav_home = document.getElementById("nav_home");
		const nav_projects = document.getElementById("nav_projects");

		nav_home.classList.remove("bg-blue-600");
		nav_projects.classList.add("bg-blue-600");
		nav_home.classList.remove("hover:bg-blue-700");
		nav_projects.classList.add("hover:bg-blue-700");

		nav_home.classList.add("bg-gray-800");
		nav_projects.classList.remove("bg-gray-800");
		nav_home.classList.add("hover:bg-gray-700");
		nav_projects.classList.remove("hover:bg-gray-700");

		navigate("/projects");
	}

	function goHomePage()
	{
		const nav_home = document.getElementById("nav_home");
		const nav_projects = document.getElementById("nav_projects");

		nav_home.classList.add("bg-blue-600");
		nav_projects.classList.remove("bg-blue-600");
		nav_home.classList.add("hover:bg-blue-700");
		nav_projects.classList.remove("hover:bg-blue-700");

		nav_home.classList.remove("bg-gray-800");
		nav_projects.classList.add("bg-gray-800");
		nav_home.classList.remove("hover:bg-gray-700");
		nav_projects.classList.add("hover:bg-gray-700");

		navigate("/");
	}

	return (
		<nav className="bg-gray-900 border-b border-gray-800">
			<div className="w-[80%] mx-auto px-4">
				<div className="flex items-center py-4">
					<div className="text-[20px] font-bold text-blue-400">My website</div>
					<div className="ml-auto flex gap-3">
						<button 
							id='nav_home'
							className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
							onClick={goHomePage}
						>
							Home
						</button>
						<button 
							id="nav_projects"
							className="px-5 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700"
							onClick={goProjectsPage}
						>
							Projects
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

function HomePage() {
	return (
		<div className="min-h-screen bg-gray-900">
			<div className="mx-auto px-6 py-16">
				<div className="flex flex-col items-center">
					<h1 className="text-[36px] font-bold text-white mb-4">Hello 👋</h1>
					<div className="bg-gray-800 rounded-xl p-8 border w-[70%] border-gray-700 text-center">
						<h2 className="text-[18px] font-semibold text-white mb-4">I am Chee Kit, a Computer Science / Chemical Engineering student aspiring to become a software developer</h2>
						<p className="text-gray-400 mb-6">
							Below is my GitHub which showcases more of my projects, or you can view a selection by clicking the Projects button above.
						</p>
						<a 
							href='https://github.com/kitnhin' 
							className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
						>
							View GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

function ProjectsPage() {
	const projects = [
		{
			title: "ft_transcendence",
			description: "A full-stack web app with real-time online multiplayer gameplay",
			languages: ["Typescript", "Javascript"],
			tech: ["Fastify", "Node.js", "Tailwindcss", "SQLite", "Docker"],
			images: [
				"/images/transcendence_menu.png",
				"/images/transcendence_game.png", 
			],
			github: "https://github.com/ruisheng95/ft_transcendence"
		},
		{
			title: "webserv", 
			description: "A simple webserver similar to nginx to handle HTTP request and send corresponding responses",
			languages: ["C++", "Python"],
			tech: ["Standard Template Library (STL)", "HTTP/1.1"],
			images: [
			],
			github: "https://github.com/ruisheng95/webserv"
		},
		{
			title: "cub3d",
			description: "Developed a 3D maze-like game using ray-casting with textured graphics.",
			languages: ["C"],
			tech: ["MinilibX"],
			images: [
				"/images/cub3d_pic1.png",
			],
			github: "https://github.com/ruisheng95/cub3d"
		}
	];

	return (
		<div className="bg-gray-900 py-6 text-white">
			<div className="mx-auto w-[70%]">
				<h1 className="text-[30px] font-bold text-center mb-8">Featured Projects</h1>
				<div className="flex flex-col gap-8">
					{projects.map((project) => (
						<div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
							<div>
								<div className="flex gap-x-4 pb-4">
									{project.images.map((image) => (
										<img 
											src={image} 
											alt={`${project.title}`}
											style={{ width: `${100 / project.images.length}%` }}
											className="h-49 rounded border-gray-500 border-[2px]"
										/>
									))}
								</div>
							</div>
							
							<div className="flex mb-3">
								<h1 className="text-xl font-semibold">{project.title}</h1>
								<a 
									href={project.github} 
									className="ml-auto bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-[12px]"
								>
									View on GitHub
								</a>
							</div>
							
							<p className="text-gray-400 mb-4">{project.description}</p>
							
							<div className="mb-3">
								<h4 className="text-white font-medium mb-2">Languages:</h4>
								<div className="flex gap-2">
									{project.languages.map((language) => (
										<div className="bg-gray-700 px-3 py-1 rounded text-[13px] text-gray-300">
											{language}
										</div>
									))}
								</div>
							</div>
							
							<div>
								<h4 className="text-white font-medium mb-2">Technologies:</h4>
								<div className="flex gap-2">
									{project.tech.map((tech) => (
										<div className="bg-gray-700 px-3 py-1 rounded text-[13px] text-gray-300">
											{tech}
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default App;