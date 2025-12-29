const StackSection = ({ stack }) => {
  return (
    <section className="flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-8 rounded-xl border border-ink/10 bg-surface/80 shadow-sm">
          <h3 className="text-2xl font-black mb-4">Operating Principles</h3>
          <p className="text-base md:text-lg text-ink/80 leading-relaxed mb-4">{stack.intro}</p>
          <div className="flex flex-wrap gap-3">
            {stack.pillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full bg-ink text-primary px-4 py-2 text-sm font-semibold"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>
        <div className="p-8 rounded-xl border border-ink/10 bg-surface/80 shadow-sm">
          <h3 className="text-2xl font-black mb-4">Quality Guardrails</h3>
          <ul className="space-y-3 text-ink/80">
            {stack.principles.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="material-symbols-outlined text-lg text-accent">check_circle</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stack.tooling.map((group) => (
          <div
            key={group.category}
            className="p-6 rounded-xl border border-ink/10 bg-surface shadow-sm flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold">{group.category}</h4>
              <span className="material-symbols-outlined text-ink/40">architecture</span>
            </div>
            <ul className="space-y-2 text-ink/80">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StackSection
