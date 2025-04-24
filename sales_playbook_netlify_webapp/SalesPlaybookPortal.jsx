
import { useState } from "react";
import { motion } from "framer-motion";

const scenarios = [
  {
    title: "Low Quality Work",
    category: "Team-Wide",
    stage: "Execution",
    principles: ["Sustainable Teams", "Operational Rigor"],
    summary: "Widespread poor execution in forecasting, QBRs, and presentation.",
    playbook: `### 🔍 Summary
Reps are producing work below standard across hygiene, prep, and presentation.

### ⚠️ Symptoms
- CRM gaps
- QBR decks incomplete or poorly done
- Missed planning hygiene

### 🎯 Root Cause(s)
- Unclear expectations
- No quality benchmark
- Lack of inspection loop

### 📌 Pillars & Principles
- Sustainable Teams
- Operational Rigor

### 🛠 Coaching Interventions
1. Set clear quality expectations and share examples
2. Weekly QA review and feedback
3. Reward quality in public forums

### 🚀 Enablement Actions
- Templates
- QBR examples
- CRM quality score

### 📊 Follow-Up Metrics
- CRM completeness
- QBR readiness
- Internal feedback score

### 🧠 Narrative for Leadership
Raising baseline execution is a force multiplier across forecasting, pipeline, and planning.`
  },
  {
    title: "Reps Not Generating Enough Pipeline",
    category: "Individual Contributor",
    stage: "Early Pipeline",
    principles: ["Predictable Revenue", "Operational Rigor"],
    summary: "Reps consistently fall short on building qualified pipeline coverage.",
    playbook: `### 🔍 Summary
Insufficient early pipeline creation is impacting attainment and predictability.

### ⚠️ Symptoms
- Pipeline <$ value
- Overreliance on inbound
- Few exec meetings early in cycle

### 🎯 Root Cause(s)
- Lack of prospecting habit
- Weak outbound strategy
- Poorly defined ICP

### 📌 Pillars & Principles
- Predictable Revenue
- Operational Rigor

### 🛠 Coaching Interventions
1. Weekly outbound plan with clear targets
2. Role-play ICP and value prop discovery
3. Peer review of sequences and messaging

### 🚀 Enablement Actions
- Pipeline playbooks
- Persona message maps
- Blitz tracking boards

### 📊 Follow-Up Metrics
- Net new pipeline/week
- Conversion: contact > opp
- Source mix (outbound %)

### 🧠 Narrative for Leadership
Pipeline is a habit loop — we win when we create consistently and early.`
  }
  // Add remaining scenarios here in future extensions...
];

export default function SalesPlaybookPortal() {
  const [query, setQuery] = useState("");

  const filtered = scenarios.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.summary.toLowerCase().includes(query.toLowerCase()) ||
    s.principles.join(" ").toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 max-w-screen-xl mx-auto">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Sales Leadership Playbook</h1>
        <p className="text-gray-500">Searchable coaching portal for scenario-based enablement</p>
      </header>
      <input
        type="text"
        placeholder="Search challenges, principles, or keywords..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-lg mx-auto border p-2 rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="border rounded shadow-md h-full p-4 bg-white space-y-2">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="text-sm text-gray-600">{s.summary}</p>
              <p className="text-xs text-gray-500">Stage: {s.stage} | Category: {s.category}</p>
              <p className="text-xs text-gray-500">Principles: {s.principles.join(", ")}</p>
              <details className="text-sm mt-2">
                <summary className="cursor-pointer font-medium">View Coaching Playbook</summary>
                <pre className="whitespace-pre-wrap mt-2 text-sm">{s.playbook}</pre>
              </details>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
