const Marquee = ({ items }) => {
  const marqueeItems = [...items, ...items]
  return (
    <div className="w-full border-y border-ink/10 py-4 mb-16 overflow-hidden">
      <div className="flex gap-12 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-ink/60 whitespace-nowrap">
        {marqueeItems.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-4">
            <span>{item}</span>
            <span>•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
