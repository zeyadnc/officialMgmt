type TeamMember = {
    id: number;
    name: string;
    role: string;
    image: string;
    bio?: string;
  };
  
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Zeyad N.",
      role: "Lead Developer",
      image: "/team/zeyad.jpg",
      bio: "Full-stack engineer with a passion for user-centric design.",
    },
    {
      id: 2,
      name: "Sara A.",
      role: "UI/UX Designer",
      image: "/team/sara.jpg",
      bio: "Creative designer focusing on clean and intuitive experiences.",
    },
    {
      id: 3,
      name: "Ali M.",
      role: "Marketing Lead",
      image: "/team/ali.jpg",
      bio: "Strategic thinker connecting brand and audience.",
    },
  ];
  
  function Team() {
    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              A passionate group of professionals driving our mission forward.
            </p>
          </div>
  
          {/* Team Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                {member.bio && <p className="text-gray-600 text-sm">{member.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Team;
  