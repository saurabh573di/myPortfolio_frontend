import React from "react";
import { motion } from "framer-motion";
import "../styles/rotate.css";
import myPhoto from "../assets/DSC_0431[1].JPG";


const skills = [
	{ name: "HTML", description: "Markup Language", icon: "🌐" },
	{ name: "CSS", description: "Cascading Style Sheets", icon: "🎨" },
	{ name: "JavaScript", description: "Programming Language", icon: "⚙️" },
	{ name: "React.js", description: "UI Library", icon: "⚛️" },
	{ name: "Node.js", description: "Backend Runtime", icon: "🖥️" },
	{ name: "Tailwind CSS", description: "Utility-First CSS", icon: "💨" },
	{ name: "C++", description: "High-performance programming, OOP, and problem-solving", icon: "🚀" },
	//{ name: "RESTful API", description: "API Development", icon: "🔗" },
	//{ name: "MongoDB", description: "NoSQL Database", icon: "🍃" },
	//{ name: "SQL", description: "Relational Database", icon: "🗄️" },
	//{ name: "Java", description: "OOP Language", icon: "☕" },
	//{ name: "C Programming", description: "Low-Level Language", icon: "💻" },
	//{ name: "DSA", description: "Data Structures & Algorithms", icon: "📊" },
	{ name: "OOP", description: "Object-Oriented Programming", icon: "🏗️" },
	{ name: "Git & GitHub", description: "Version Control", icon: "🔧" },
	//	{ name: "Postman", description: "API Testing", icon: "📬" },
	//	{ name: "AWS", description: "Cloud Platform", icon: "☁️" },
	//	{ name: "Jest", description: "Testing Framework", icon: "🧪" },
];

const flipUpVariant = {
	hidden: { opacity: 0, y: 100, rotateX: -90 },
	visible: {
		opacity: 1,
		y: 0,
		rotateX: 0,
		transition: {
			duration: 0.1,
			ease: "easeOut",
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
};

const fadeInVariant = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 1.5, ease: "easeOut" }, // adjust duration as needed
	},
};

const AboutSection = () => {
	return (
		<motion.section
			className="p-8 mx-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300"
			initial="hidden"
			animate="visible"
			variants={flipUpVariant}
		>
			{/* Introduction Section */}
			<motion.div
				className="max-w-7xl mx-auto w-full"
				variants={flipUpVariant}
			>
				{/* Animated Introduction Heading */}
				<motion.h2
					className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center w-full"
					variants={fadeInVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
				>
					Introduction
				</motion.h2>
				{/* Photo and "Hi, I'm..." in one row, animated after heading */}
				<motion.div
					className="flex flex-col md:flex-row items-start w-full"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={fadeInVariant}
					transition={{ duration: 1.2, ease: "easeOut", delay: 0.71 }}
				>
					{/* Profile Image */}
					<div className="flex-shrink-0 flex justify-center md:justify-start md:ml-12 mb-6 md:mb-0">
						<img
							src={myPhoto}
							alt="Saurabh singh dosad"
							className="rounded-full w-64 h-64 object-cover shadow-lg border"
						/>
					</div>
					{/* Profile Text */}
					<div className="flex flex-col justify-start items-center md:items-start text-center md:text-left px-2 w-full md:ml-8">
						<motion.p
							className="text-lg mb-4 text-gray-700 dark:text-white"
							variants={fadeInVariant}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 1.2, ease: "easeOut", delay: 0.72 }}
						>
							Hi, I'm{" "}
							<span className="font-semibold">Saurabh singh dosad</span>, a
							passionate final-year computer science student from Gaarur, Bageshwar,
							Uttarakhand. Born and raised amidst the serene hills, I developed an
							early fascination for technology and its potential to solve real-world
							problems.
						</motion.p>
						<motion.p
							className="text-lg mb-4 text-gray-700 dark:text-white"
							variants={fadeInVariant}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 1.2, ease: "easeOut", delay: 0.76 }}
						>
							I am currently pursuing my Bachelor's degree in Computer Applications
							at Dev Bhoomi Uttarakhand University, Dehradun, where I have gained a
							strong foundation in full-stack development, including C++,
							JavaScript, and the MERN technology stack. 
						</motion.p>
						<motion.p
							className="text-lg mb-4 text-gray-700 dark:text-white"
							variants={fadeInVariant}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
						>
							Beyond academics, I have a keen interest in playing cricket, exploring
							mathematics, nature science, and problem-solving. These interests fuel
							my curiosity and drive to learn more about computer science and its
							endless possibilities.
						</motion.p>
						<motion.p
							className="text-lg mb-4 text-gray-700 dark:text-white"
							variants={fadeInVariant}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 1.2, ease: "easeOut", delay: 0.84 }}
						>
							I have worked on significant projects such as a Booking and Rental website. using 
							react.js, node.js, and MongoDB, which honed my skills in full-stack devlopment.
							I am eager to start my career as a software developer,
							contributing to innovative software solutions within a collaborative
							team.
						</motion.p>
						<motion.p
							className="text-lg mb-4 text-gray-700 dark:text-white"
							variants={fadeInVariant}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 1.2, ease: "easeOut", delay: 0.88 }}
						>
							My goal is to continuously learn and grow in a dynamic environment,
							ultimately making a positive impact through technology.
						</motion.p>
						<motion.p
							className="text-lg mb-6 text-gray-700 dark:text-white"
							variants={fadeInVariant}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 1.2, ease: "easeOut", delay: 0.92 }}
						>
							Let's connect and create something amazing together!
						</motion.p>
						<motion.a
							href="https://www.linkedin.com/in/saurabh-dosad-30607b293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
							variants={fadeInVariant}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 1.2, ease: "easeOut", delay: 0.96 }}
						>
							Connect
						</motion.a>
					</div>
				</motion.div>
			</motion.div>

			{/* Skills Section */}
			<motion.div className="mt-14 flex justify-center px-6" variants={flipUpVariant}>
				<div className="max-w-[960px] w-full flex flex-col">
					<motion.h2
						className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-900"
						variants={fadeInVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
						Skills
					</motion.h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10 justify-center">
						{skills.map((skill, index) => (
							<motion.div
								key={index}
								className="group relative border-t-4 border-white dark:border-gray-200 rounded-3xl shadow-lg border cursor-pointer transition transform duration-300 hover:scale-105 hover:-translate-y-3 hover:bg-indigo-500 hover:text-white flex flex-col items-center justify-center p-8 aspect-square max-w-[200px] w-full overflow-hidden bg-white dark:bg-white"
								variants={flipUpVariant}
							>
								<div className="text-3xl mb-2">{skill.icon}</div>
								<div className="text-lg font-semibold text-center truncate text-gray-900 dark:text-gray-900">{skill.name}</div>
								<div className="absolute inset-0 bg-indigo-500 text-white rounded-3xl opacity-0 group-hover:opacity-100 flex items-center justify-center text-center px-6 transition duration-300">
									<p className="text-sm rotate-y-hover">
										{skill.name} = {skill.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>

			{/* Education Section */}
			<motion.div className="mt-20 max-w-3xl mx-auto px-4 w-full" variants={flipUpVariant}>
				<motion.h2
					className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-900"
					variants={fadeInVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					Education
				</motion.h2>

				<motion.div
					className="rounded-3xl p-8 mb-8 shadow-lg border bg-white dark:bg-white dark:text-gray-900 border-gray-200 dark:border-gray-200 transition-transform transform hover:scale-105 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white cursor-pointer"
					variants={fadeInVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-900">
						Dev Bhoomi Uttarakhand University, Dehradun
					</h3>
					<p className="text-lg mb-1 text-gray-900 dark:text-gray-900">
						Bachelor of Computer Applications {" "}
						<span className="font-semibold"></span>
					</p>
					<p className="text-md text-gray-900 dark:text-gray-900">2022-2025</p>
				</motion.div>

				<motion.div
					className="rounded-3xl p-8 shadow-lg border bg-white dark:bg-white dark:text-gray-900 border-gray-200 dark:border-gray-200 transition-transform transform hover:scale-105 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white cursor-pointer"
					variants={fadeInVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-900">Kholiya Vivekanand I. C., Garur</h3>
					<p className="text-lg mb-1 text-gray-900 dark:text-gray-900">Class XII, PCM  <span className="font-semibold"></span></p>
					<p className="text-md text-gray-900 dark:text-gray-900">2021-2022</p>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default AboutSection;
