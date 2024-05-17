import Header from "@/components/author/navbar/Header";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <main className="">
      <Header />
      {children}
    </main>
  );
}
