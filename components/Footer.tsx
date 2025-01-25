import Link from "next/link"
import ResponsiveText from "@/components/ResponsiveText"

export default function Footer() {
  return (
    <ResponsiveText>
    <footer className="bg-ossan-header-footer text-ossan-text">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2 font-serif">
              <span className="word-wrapper whitespace-pre">おっさんず・ガーデン</span>
            </h2>
            <p className="text-sm">
            <span className="word-wrapper whitespace-pre">やりたいときに、</span>
            <span className="word-wrapper whitespace-pre">やりたいことを、</span>
            <span className="word-wrapper whitespace-pre">やりたいだけやる</span>
            </p>
          </div>
          <div className="text-center md:text-right space-y-1">
            <p>LINE: XXXXXXX</p>
            <p>電話番号: XXX-XXXX-XXXX</p>
            <p>メール: XXX-XXXX-XXXX</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">
          <span className="word-wrapper whitespace-pre">&copy; 2024 </span>
          <span className="word-wrapper whitespace-pre">おっさんず・ガーデン. </span>
          <span className="word-wrapper whitespace-pre">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>

    </ResponsiveText>
  )
}
