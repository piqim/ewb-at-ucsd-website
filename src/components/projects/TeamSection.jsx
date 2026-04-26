export default function TeamSection({ members = [] }) {
    if (!members.length) return null;
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {members.map((member) => (
          <div key={member.id ?? member.name} className="card p-5 text-center">
            <div className="w-14 h-14 rounded-full bg-gray-100 mx-auto mb-3 overflow-hidden">
              {member.photo ? (
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-bold text-xl text-gray-400">
                  {member.name.charAt(0)}
                </div>
              )}
            </div>
            <p className="font-semibold text-ucsd-navy text-sm">{member.name}</p>
            <p className="text-gray-400 text-xs mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    );
  }