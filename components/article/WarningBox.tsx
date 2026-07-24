interface WarningBoxProps {
  children: React.ReactNode;
}

export default function WarningBox({
  children,
}: WarningBoxProps) {
  return (
    <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
      <h3 className="text-xl font-bold text-red-400 mb-4">
        ⚠️ Advertencia
      </h3>

      <div className="text-gray-300 leading-8">
        {children}
      </div>
    </div>
  );
}