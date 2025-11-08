import { Link } from "react-router-dom";
import skillsData from "../data/skills";

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-500">
        All Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill) => (
          <div
            key={skill.skillId}
            className="card bg-base-200 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
          >
            <figure>
              <img
                src={skill.image}
                alt={skill.skillName}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body text-left">
              <h3 className="text-xl font-bold">{skill.skillName}</h3>
              <p className="text-sm opacity-80">
                {skill.category} • by {skill.providerName}
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="font-semibold text-yellow-400">
                  ⭐ {skill.rating}
                </span>
                <span className="font-semibold text-blue-500">${skill.price}</span>
              </div>
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/skillpage/${skill.skillId}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
