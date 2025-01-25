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
    <header className="relative w-full">
      <div className="relative h-96">
        <Image
          src="/ossans-garden/images/header-image.png"
          alt="おっさんず・ガーデン"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur">
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex py-4 justify-center space-x-8">
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
              <button className="md:hidden absolute top-4 right-4 bg-white/80 p-2 rounded-lg">
                <Menu className="h-6 w-6 text-ossan-text" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
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
      </div>
    </header>
  );
}