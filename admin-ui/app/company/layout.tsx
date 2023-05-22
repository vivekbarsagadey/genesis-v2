export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* <div>This is company header</div> */}
      <>{children}</>
    </>
  )
}
