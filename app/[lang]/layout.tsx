import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Rail } from "@/components/Rail";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Navbar } from "@/components/Navbar";
import { i18n } from '../../lib/i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string }
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className="flex flex-col min-h-[100dvh]">
          <Navbar email={user?.email} params={params}/>
          <div className="flex grow">
            <Rail />
            <main className="grow">{children}</main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}