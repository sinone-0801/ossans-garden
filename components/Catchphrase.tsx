import ResponsiveText from "@/components/ResponsiveText"

export default function Catchphrase() {
    return (
      
      <section className="bg-gradient-to-b from-ossan-box to-ossan-background py-16 px-4">
        <div className="container mx-auto max-w-4xl">
        <ResponsiveText>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ossan-strong mb-8 font-serif text-center leading-tight">
          <span className="word-wrapper whitespace-pre">おっさんの</span>
          <span className="word-wrapper whitespace-pre">おっさんによる</span>
          <span className="word-wrapper whitespace-pre">おっさんの</span>
          <span className="word-wrapper whitespace-pre">ための</span>
          <span className="word-wrapper whitespace-pre">ガーデン</span>
        </h2>
        <p className="mb-6 text-lg md:text-xl lg:text-2xl text-ossan-text text-center leading-relaxed">
          <span className="word-wrapper whitespace-pre">「やりたいときに、</span>
          <span className="word-wrapper whitespace-pre">やりたいことを、</span>
          <span className="word-wrapper whitespace-pre">やりたいだけやる」を</span>
          <span className="word-wrapper whitespace-pre">スローガンにして、</span>
          <span className="word-wrapper whitespace-pre">自然発生した</span>
          <span className="word-wrapper whitespace-pre">おっさんず</span>
          <span className="word-wrapper whitespace-pre">ガーデン</span>
        </p>
        <p className="mb-6 text-lg md:text-xl lg:text-2xl text-ossan-text text-center leading-relaxed">
        <span className="word-wrapper whitespace-pre">今日も</span>
        <span className="word-wrapper whitespace-pre">何をしようか</span>
        <span className="word-wrapper whitespace-pre">考えつつ、</span>
        <span className="word-wrapper whitespace-pre">楽しんでいます</span>
        </p>
        </ResponsiveText>
        </div>
      </section>
    )
  }
  
  
  