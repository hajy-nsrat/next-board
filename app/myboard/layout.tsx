

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <main className='flex'>
        <div>
          heyyy 
        </div>
        <div className='flex-1'>{children}</div>
      </main>
    )
  }