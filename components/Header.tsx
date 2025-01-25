import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "ホーム", href: "/" },
  { name: "空き家レスキュー", href: "#akiya-rescue" },
  { name: "はたけの学校", href: "#hatake-school" },
  { name: "古民家再生", href: "#kominka-revival" },
  { name: "おっさんずラボ", href: "#ossan-lab" },
  { name: "おっさんずソーイング", href: "#ossan-sewing" },
  { name: "おっさんずモーター", href: "#ossan-motor" },
];

export default function Header() {
  return (
    <header className="w-full bg-ossan-header-footer">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-ossan-text hover:text-ossan-strong transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Sheet>
        <SheetTrigger asChild>
            <button className="md:hidden">
                <Menu className="h-6 w-6 text-ossan-text" />
            </button>
        </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 w-[300px] sm:w-[400px]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-ossan-text hover:text-ossan-strong transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <Image
        src="/ossans-garden/images/header-image.png"
        alt="おっさんず・ガーデン"
        width={1920}
        height={512}
        className="w-full h-auto max-h-[512px] object-cover"
      />
    </header>
  );
}
