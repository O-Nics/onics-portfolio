export default function DotAnimated({ className }: { className?: string }) {
  return (
    <span
      className={`inline-block w-2 h-2 ml-1 bg-current rounded-full animate-pulse text-success ${className}`}
    />
  );
}
