export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {children}
    </main>
  );
} 