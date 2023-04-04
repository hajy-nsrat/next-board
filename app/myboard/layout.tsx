

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main>
        <div> 
          <h1 className="m-2 text-3xl font-bold ">
            MY BOARD
          </h1>
        </div>
        <div>{children}</div>
      </main>
    )
  }