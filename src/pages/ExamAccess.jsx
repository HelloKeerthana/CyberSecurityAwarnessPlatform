import { Navigate } from "react-router-dom";

export default function ExamAccess({ children }) {

  const requiredModules = [
    "phishingCompleted",
    "passwordCompleted",
    "socialCompleted",
    "malwareCompleted",
    "networkCompleted",
    "browsingCompleted"
  ];

  const allCompleted = requiredModules.every(
    (module) => localStorage.getItem(module) === "true"
  );

  if (!allCompleted) {
    return <Navigate to="/modules" />;
  }

  return children;
}