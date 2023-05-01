'use client';

import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import LayoutComponent from '../component/common/layout.component';
import { theme } from '../themes/theme';

const queryClient = new QueryClient();
export default function RootLayout({
	children,
	...props
}: {
  children: React.ReactNode;
}) {
	return (
  <html>
  <head />
  <body>
  <SessionProvider session={(props as any).session}>
  <QueryClientProvider client={queryClient}>
  <ThemeProvider theme={theme}>
  <CssBaseline />
  <main>
  <LayoutComponent>{children}</LayoutComponent>
							</main>
						</ThemeProvider>
					</QueryClientProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
