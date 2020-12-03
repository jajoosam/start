import Meta from "./Meta";

const Layout = ({ children, title }) => {
	return (
		<>
			<Meta title={title} />
			{children}
		</>
	);
};

export default Layout;
