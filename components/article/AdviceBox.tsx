interface AdviceBoxProps {
  children: React.ReactNode;
}

export default function AdviceBox({
  children,
}: AdviceBoxProps) {
  return (
    <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6 my-8">

      <div className="flex items-center gap-3 mb-4">

        <div className="text-3xl">
          ✅
        </div>

        <h3 className="text-2xl font-bold text-green-400">
          Consejo JK Capital Trading
        </h3>

      </div>

      <div className="text-gray-300 leading-8">
        {children}
      </div>

    </div>
  );
}