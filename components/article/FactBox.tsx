interface FactBoxProps {
  children: React.ReactNode;
}

export default function FactBox({
  children,
}: FactBoxProps) {
  return (
    <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6 my-8">

      <div className="flex items-center gap-3 mb-4">

        <div className="text-3xl">
          💡
        </div>

        <h3 className="text-2xl font-bold text-yellow-400">
          ¿Sabías que...?
        </h3>

      </div>

      <div className="text-gray-300 leading-8">
        {children}
      </div>

    </div>
  );
}