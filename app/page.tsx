import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Catchphrase from "@/components/Catchphrase"
import ServiceCategory from "@/components/ServiceCategory"

const root = "/ossans-garden"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Catchphrase />
      <main className="flex-grow py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <ServiceCategory
            id="akiya-rescue"
            title="空き家レスキュー"
            image={root + "/images/akiya-rescue.png"}
            services={["ハウスクリーニング", "引っ越しお手伝い", "賃貸業", "エアコン取り外し"]}
          />
          <ServiceCategory
            id="hatake-school"
            title="はたけの学校"
            image={root + "/images/hatake-school.png"}
            services={["自給農の畑", "米作り"]}
          />
          <ServiceCategory
            id="kominka-revival"
            title="古民家再生"
            image={root + "/images/kominka-revival.png"}
            services={["愛農かまど（計画中）", "井戸掘り（計画中）"]}
          />
          <ServiceCategory
            id="ossan-lab"
            title="おっさんずラボ"
            image={root + "/images/ossan-lab.png"}
            services={["化粧水づくり", "オイルづくり"]}
          />
          <ServiceCategory
            id="ossan-sewing"
            title="おっさんずソーイング"
            image={root + "/images/ossan-sewing.png"}
            services={["たつけの制作"]}
          />
          <ServiceCategory
            id="ossan-motor"
            title="おっさんずモーター"
            image={root + "/images/ossan-motor.png"}
            services={["軽トラサウナ", "キッチンカー", "キャンピングカー", "屋台", "天ぷらカー"]}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

