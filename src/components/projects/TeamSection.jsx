export default function TeamSection({ members = [] }) {
  if (!members.length) return null;

  return (
    // TODO: 2 columns on mobile (grid-cols-2), 4 on desktop (md:grid-cols-4), gap-6
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {members.map((member) => (
        // TODO: .card, p-5, centered text
        <div key={member.id ?? member.name} className="card p-5 text-center">

          {/* TODO: circular avatar — w-14 h-14, rounded-full,
              bg-gray-100, centered (mx-auto), mb-3, overflow-hidden */}
          <div className="w-14 h-14 rounded-full bg-gray-100 mx-auto mb-3 overflow-hidden">
            {member.photo ? (
              // TODO: w-full h-full, object-cover
              <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              // TODO: fill the circle — w-full h-full, flex centered,
              // font-bold, text-xl, text-gray-400
              <div className="w-full h-full flex items-center justify-center font-bol text-xl text-gray-400">
                {member.name.charAt(0)}
              </div>
            )}
          </div>

          {/* TODO: font-semibold, text-ucsd-navy, text-sm */}
          <p className="font-semibold text-ucsd-navy text-sm">{member.name}</p>
          {/* TODO: text-gray-400, text-xs, mt-1 */}
          <p className="text-gray-400 text-xs mt-1">{member.role}</p>

        </div>
      ))}
    </div>
  );
}