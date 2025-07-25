import { Code2, Brush, Megaphone } from "lucide-react";

type Item = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const items: Item[] = [
  {
    id: 1,
    title: "Creative Design",
    description: "Unique and professional designs tailored to your brand.",
    icon: <Brush className="w-10 h-10 text-black" />,
  },
  {
    id: 2,
    title: "Web Development",
    description: "Modern, responsive, and fast websites built with care.",
    icon: <Code2 className="w-10 h-10 text-black" />,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Grow your audience with data-driven marketing strategies.",
    icon: <Megaphone className="w-10 h-10 text-black" />,
  },
];

function ItemListSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore the range of services we offer to support your goals.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ItemListSection;
