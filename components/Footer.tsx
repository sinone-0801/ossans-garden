import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-ossan-header-footer text-ossan-text py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2 font-serif">おっさんず・ガーデン</h2>
            <p className="text-sm">やりたいときに、やりたいことを、やりたいだけやる</p>
          </div>
          <div className="text-center md:text-right space-y-1">
            <p>LINE: XXXXXXX</p>
            <p>電話番号: XXX-XXXX-XXXX</p>
            <p>メール: XXX-XXXX-XXXX</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2024 おっさんず・ガーデン. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}