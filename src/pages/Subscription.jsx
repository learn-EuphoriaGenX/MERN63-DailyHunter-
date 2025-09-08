import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";

let plans = [
  {
    title: "Free Plan",
    description:
      "Perfect for individuals just starting out. Manage tasks with basic features.",
    price: "$0/month",
    buttonText: "Get Started",
  },
  {
    title: "Pro Plan",
    description:
      "For small teams who want collaboration, reminders, and unlimited projects.",
    price: "$9/month",
    buttonText: "Upgrade",
  },
  {
    title: "Enterprise",
    description:
      "Advanced features with team management, analytics, and priority support.",
    price: "$29/month",
    buttonText: "Contact Sales",
  },
];

function SubscripTtion({ user, setuser }) {
  const navigate = useNavigate()

  if (Object.keys(user).length <= 0) {
    return navigate('/login')
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black px-6 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          Choose Your Plan
        </h1>
        <p className="text-lg text-gray-400">
          Unlock productivity with the right plan for your team
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl w-full">
        {plans.map((plan, id) => (
          <div
            key={id}
            className="flex flex-col justify-between items-center bg-gray-800 text-white rounded-2xl shadow-lg p-8 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Card title={plan.title} description={plan.description} />

            {/* Price */}
            <p className="text-2xl font-bold mt-6">{plan.price}</p>

            {/* Button */}
            <div className="mt-6 w-full">
              <Button text={plan.buttonText} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscripTtion;
