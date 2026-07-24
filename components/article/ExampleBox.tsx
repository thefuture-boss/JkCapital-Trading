interface ExampleBoxProps {
  title: string;
  children: React.ReactNode;
}

export default function ExampleBox({
  title,
  children,
}: ExampleBoxProps) {
  return (
    <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6">
      <h3 className="text-xl font-bold text-yellow-400 mb-4">
        📘 {title}
      </h3>

      <div className="text-gray-300 leading-8">
        {children}
      </div>
    </div>
  );
}