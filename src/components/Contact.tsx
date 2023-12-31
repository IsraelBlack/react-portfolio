

function Contact() {
	return (
		<div
			className="flex flex-col fixed right-0 bottom-1/2 w-12 md:w-20 p-1
      border border-whiteLight rounded-2xl shadow-2xl justify-center bg-whiteLight"
		>
			<ul>
				<li>
					<a href="https://www.linkedin.com/in/israel-black/" target="blank">
						<img src="./assets/contacts/icons8-linkedin-circled.gif" />
					</a>
				</li>
				<li>
					<a href="https://github.com/IsraelBlack" target="blank">
						<img src="./assets/contacts/icons8-github.gif" />
					</a>
				</li>
				<li>
					<a href="./assets/contacts/Israel-Black-Generic.pdf" target="blank">
						<img src="./assets/contacts/CV.gif" />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Contact;
