import { Plus } from "lucide-react";

export default function button() {
  return (
    <button
     className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-2xl shadow-md hover:bg-blue-700 transition-all duration-200">
      <Plus className="w-5 h-5" />
      Add Task
    </button>
  );
}
