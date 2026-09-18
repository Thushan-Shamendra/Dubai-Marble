import React from "react";

export default function SectionLabel({
  children,
  arabic,
  className = "",
  isDark = false,
  variant = "badge",
}: {
  children: React.ReactNode;
  arabic?: string;
  className?: string;
  isDark?: boolean;
  variant?: "badge" | "minimal";
}) {
  if (variant === "minimal") {
    return (
      <div className={`inline-flex items-center gap-2 mb-3 ${className}`}>
        <span className="w-2.5 h-2.5 bg-[#1456B8] inline-block shrink-0 rounded-[1px]" />
        <span
          className={`font-black uppercase tracking-wider text-xs sm:text-sm ${
            isDark ? "text-white" : "text-[#0B3D91]"
          }`}
        >
          {children}
        </span>
        {arabic && (
          <span
            className={`font-arabic text-xs font-semibold normal-case ${
              isDark ? "text-[#1E6DDB]" : "text-[#1456B8]"
            }`}
          >
            · {arabic}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md border text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider mb-4 shadow-sm transition-all ${
        isDark
          ? "bg-[#1F2937]/90 border-[#1456B8]/40 text-[#d9d2ca]"
          : "bg-[#EAF4FF] border-[#C5D9F0] text-[#0B3D91]"
      } ${className}`}
    >
      <span className="w-2.5 h-2.5 bg-[#1456B8] inline-block shrink-0 rounded-[1px]" />
      <span className="tracking-wider">{children}</span>
      {arabic && (
        <span className="font-arabic text-[11.5px] font-semibold normal-case border-l border-[#C5D9F0] pl-2 text-[#0B3D91]">
          {arabic}
        </span>
      )}
    </div>
  );
}

