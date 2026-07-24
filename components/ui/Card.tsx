interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        bg-zinc-900
        border
        border-yellow-500/20
        rounded-2xl
        p-6
        shadow-lg
        hover:border-yellow-500
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}