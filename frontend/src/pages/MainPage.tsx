import GlassCard from "../components/GlassCard";

export default function MainPage(): JSX.Element {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-8 py-4 md:py-6">
      <div className="mb-6 flex items-center gap-3">
        <div
          className="
            flex-1 rounded-2xl border border-white/30
            bg-white/55 backdrop-blur-md
            shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-12
            flex items-center px-4 text-zinc-700
          "
        >
          <input
            type="text"
            placeholder="링크를 입력하세요"
            className="w-full bg-transparent outline-none placeholder:text-zinc-400"
          />
        </div>
        <button
          type="button"
          className="
            h-12 rounded-xl px-5 font-semibold text-white
            bg-gradient-to-br from-rose-500 to-red-500
            shadow-[0_8px_20px_rgba(244,63,94,0.35)]
            hover:brightness-105 active:scale-[0.99] transition
          "
        >
          분석하기
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <GlassCard title="Library" className="min-h-[220px]">
            <div className="grid grid-cols-3 gap-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="
                    aspect-[4/3] rounded-xl
                    bg-gradient-to-b from-zinc-200/70 to-white/70
                    border border-white/40
                  "
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard title="Recent" className="min-h-[220px]">
            <div className="text-zinc-500">최근 항목이 여기에 표시됩니다.</div>
          </GlassCard>

          <GlassCard title="Shared" className="min-h-[220px]">
            <div className="text-zinc-500">공유 항목이 여기에 표시됩니다.</div>
          </GlassCard>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <GlassCard title="Summary" className="min-h-[160px]">
            <div className="text-zinc-600 leading-relaxed">
              요약 내용이 여기에 표시됩니다.
            </div>
          </GlassCard>

          <GlassCard title="Tag" className="min-h-[140px]">
            <div className="flex flex-wrap gap-2">
              {["AI", "UX", "React", "Tailwind"].map((t) => (
                <span
                  key={t}
                  className="
                    rounded-full border border-white/40
                    bg-white/60 px-3 py-1 text-xs text-zinc-700
                  "
                >
                  #{t}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard title="Suggest" className="min-h-[180px]">
            <ul className="list-disc pl-5 text-zinc-600 space-y-1">
              <li>추천 항목 #1</li>
              <li>추천 항목 #2</li>
              <li>추천 항목 #3</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
