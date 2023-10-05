import ThemeRegistry from '@/components/theme-registry/theme.registry';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body>
				<ThemeRegistry>{children}</ThemeRegistry>
			</body>
		</html>
	);
};

export default RootLayout;
