import './globals.css';

export const metadata = {
  title: 'Ley Innovative Printing',
  description: 'Custom printing services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
