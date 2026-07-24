interface InfoBoxProps {
  title: string;
  children: React.ReactNode;
}

export default function InfoBox({
  title,
  children,
}: InfoBoxProps) {
  return (
    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6">
      <h3 className="text-xl font-bold text-blue-400 mb-4">
        ℹ️ {title}
      </h3>

      <div className="text-gray-300 leading-8">
        {children}
      </div>
    </div>
  );
}