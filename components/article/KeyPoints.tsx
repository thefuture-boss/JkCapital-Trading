interface KeyPointsProps {
  title: string;
  points: string[];
}

export default function KeyPoints({
  title,
  points,
}: KeyPointsProps) {
  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-zinc-900 p-6">

      <h3 className="text-2xl font-bold text-yellow-400 mb-6">
        {title}
      </h3>

      <ul className="space-y-4">
        {points.map((point, index) => (
          <li
            key={index}
            className="flex gap-3 text-gray-300"
          >
            <span className="text-yellow-400">✔</span>
            {point}
          </li>
        ))}
      </ul>

    </div>
  );
}