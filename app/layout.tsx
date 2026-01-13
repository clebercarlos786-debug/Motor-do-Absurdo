import React from 'react';

export const metadata = {
  title: 'Grupo Plus - Motor do Absurdo',
  description: 'Sistema de Engenharia de Software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#1a1a1a' }}>
        {children}
      </body>
    </html>
  )
}

