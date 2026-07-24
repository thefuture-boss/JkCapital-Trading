interface TipBoxProps {
  children: React.ReactNode;
}

export default function TipBox({
  children,
}: TipBoxProps) {
  return (
    <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
      <h3 className="text-xl font-bold text-green-400 mb-4">
        💡 Consejo
      </h3>

      <div className="text-gray-300 leading-8">
        {children}
      </div>
    </div>
  );
}