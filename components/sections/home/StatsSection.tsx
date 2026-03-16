// "use client";

// import { useRef } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";

// const STATS = [
//   { n: "47+",  label: "Projects shipped",     sub: "Across 12+ industries",  color: "#6366f1", bg: "#eef2ff",  border: "#c7d2fe" },
//   { n: "98%",  label: "Client satisfaction",  sub: "Post-launch surveys",    color: "#059669", bg: "#ecfdf5",  border: "#a7f3d0" },
//   { n: "< 4w", label: "Average MVP time",     sub: "Scope to production",    color: "#d97706", bg: "#fffbeb",  border: "#fde68a" },
//   { n: "3",    label: "Live products",          sub: "Built & operated by us", color: "#db2777", bg: "#fdf2f8",  border: "#fbcfe8" },
// ];

// export default function StatsSection() {
//   const ref    = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <section ref={ref}
//       className="relative py-0"
//       style={{ background: "linear-gradient(180deg,#f0f4ff 0%,#faf9ff 100%)" }}>

//       {/* Separator */}
//       <div className="h-px" style={{
//         background: "linear-gradient(90deg,transparent,rgba(99,102,241,0.3),rgba(245,197,24,0.2),transparent)",
//       }} />

//       <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
//         <div className="grid grid-cols-2 lg:grid-cols-4">
//           {STATS.map((s, i) => (
//             <motion.div key={s.label}
//               initial={{ opacity: 0, y: 30, rotateX: -15 }}
//               animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
//               transition={{ duration: 0.6, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
//               whileHover={{ y: -6, scale: 1.03 }}
//               className="group relative px-8 py-12 border-r border-b lg:border-b-0 last:border-r-0 cursor-default"
//               style={{ borderColor: "rgba(99,102,241,0.1)" }}
//             >
//               {/* Hover bg */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileHover={{ opacity: 1 }}
//                 className="absolute inset-0 rounded-none"
//                 style={{ background: `linear-gradient(135deg,${s.bg},transparent)` }}
//               />
//               {/* Top accent */}
//               <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 style={{ background: `linear-gradient(90deg,${s.color},transparent)` }} />

//               <div className="relative">
//                 <div className="font-extrabold tracking-tight tabular-nums leading-none mb-3"
//                   style={{ fontSize: "clamp(40px,5vw,64px)", color: s.color }}>
//                   {s.n}
//                 </div>
//                 <div className="text-[14px] font-semibold text-gray-800 mb-1">{s.label}</div>
//                 <div className="text-[12px] font-mono text-gray-400">{s.sub}</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <div className="h-px" style={{
//         background: "linear-gradient(90deg,transparent,rgba(245,197,24,0.2),rgba(99,102,241,0.15),transparent)",
//       }} />
//     </section>
//   );
// }
