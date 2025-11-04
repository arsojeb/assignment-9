import { CodeBracketIcon, DevicePhoneMobileIcon, CpuChipIcon } from "@heroicons/react/24/solid";

export default function Services() {
  const services = [
    {
      name: "Web Development",
      desc: "Modern, high-performance web applications built with React, Vite, and Tailwind CSS.",
      icon: <CodeBracketIcon className="w-10 h-10 text-primary" />,
    },
    {
      name: "Mobile App Create",
      desc: "Cross-platform mobile apps that deliver smooth performance and engaging user experiences.",
      icon: <DevicePhoneMobileIcon className="w-10 h-10 text-primary" />,
    },
    {
      name: "AI Solutions",
      desc: "Integrate AI-driven tools to automate, predict, and enhance business operations.",
      icon: <CpuChipIcon className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section className="p-10 bg-base-100">
      <h2 className="text-4xl font-bold text-center text-primary mb-3">Our Services</h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Empowering businesses with cutting-edge digital solutions — from code to creativity.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="card bg-base-200 shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex justify-center mb-4">{s.icon}</div>
            <h3 className="text-2xl font-semibold text-center mb-2">{s.name}</h3>
            <p className="text-gray-600 text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
