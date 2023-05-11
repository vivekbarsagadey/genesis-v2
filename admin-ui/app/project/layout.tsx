/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
