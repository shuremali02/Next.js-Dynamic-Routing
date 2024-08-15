export default function RootLayout({

    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (<div>
      <h1 className="text-4xl"> this is product layout</h1>
    {children}
    </div>
    )}
 