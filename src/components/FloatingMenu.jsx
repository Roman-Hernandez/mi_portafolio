import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const FloatingMenu = ({ navigation }) => {
  const menuRef = useRef(null)
  const [position, setPosition] = useState(null)
  const [dragging, setDragging] = useState(false)
  const offsetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePointerDown = (event) => {
    if (!menuRef.current) return
    const rect = menuRef.current.getBoundingClientRect()
    offsetRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
    setDragging(true)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
  }

  const handlePointerMove = (event) => {
    if (!dragging) return
    const x = event.clientX - offsetRef.current.x
    const y = event.clientY - offsetRef.current.y
    const maxX = window.innerWidth - (menuRef.current?.offsetWidth ?? 0)
    const maxY = window.innerHeight - (menuRef.current?.offsetHeight ?? 0)
    setPosition({
      x: clamp(x, 12, maxX - 12),
      y: clamp(y, 12, maxY - 12)
    })
  }

  const handlePointerUp = () => {
    setDragging(false)
    window.removeEventListener('pointermove', handlePointerMove)
    window.removeEventListener('pointerup', handlePointerUp)
  }

  const positionStyle = position
    ? { left: `${position.x}px`, top: `${position.y}px`, transform: 'none' }
    : undefined

  return (
    <div
      ref={menuRef}
      className={[
        'fixed z-50 w-auto transition-transform md:hidden',
        position ? '' : 'left-1/2 bottom-6 -translate-x-1/2',
        dragging ? 'cursor-grabbing' : 'cursor-grab'
      ].join(' ')}
      style={positionStyle}
      onPointerDown={handlePointerDown}
    >
      <div className="shadow-xl rounded-full overflow-hidden bg-surface/80 backdrop-blur-sm border border-ink/10">
        <div className="flex items-center justify-center gap-3 h-14 px-6 bg-accent text-ink text-base font-bold leading-normal tracking-wide">
          <span className="material-symbols-outlined text-2xl">drag_indicator</span>
          <span className="whitespace-nowrap pr-2">Menu</span>
          <div className="h-4 w-px bg-black/20 mx-1" />
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  'font-medium cursor-pointer transition-colors',
                  isActive ? 'underline decoration-2 underline-offset-4' : 'hover:underline'
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FloatingMenu
