export default function SectionDivider() {
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#0A0A0C] py-1">
      <style>{`
        @keyframes flowLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative h-px w-full overflow-hidden bg-white/10">
          <span
            className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-violet to-transparent"
            style={{ animation: "flowLine 3s ease-in-out infinite" }}
          />
        </div>
      </div>
    </div>
  );
}