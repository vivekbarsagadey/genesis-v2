'use client';

import { ReactNode } from 'react';

type IReports = {
  children?: ReactNode;
};

export default function Layout({ children }: IReports) {
	return (
		<main>{children}</main>
	);
}
