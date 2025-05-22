"use client"

import React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"



const ExpandableSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border-b border-green-900 last:border-b-0 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-4 px-4 text-left focus:outline-none"
      >
        <h3 className="text-lg font-bold uppercase tracking-wider text-white">{title}</h3>
        <span
          className={`bg-green-600 rounded-full p-1 transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`}
        >
          <Plus size={16} className="text-white" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-96 opacity-100 pb-4 px-4" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default ExpandableSection
