import { motion } from 'framer-motion';

const CaseSnapshot = ({ tldr }) => {
    if (!tldr) return null;

    const cols = [
        { label: 'Problem', value: tldr.problem },
        { label: 'Solution', value: tldr.solution },
        { label: 'Result',   value: tldr.result  },
    ];

    const meta = [
        { label: 'Client', value: tldr.client },
        { label: 'Role',   value: tldr.role   },
        { label: 'Sector', value: tldr.sector },
        { label: 'Year',   value: tldr.year   },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
            className="bg-[#323a45] text-[#f8f8f8] rounded-[4px] overflow-hidden mb-10"
        >
            {/* Header */}
            <div className="border-b border-white/10 px-6 py-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f61067] inline-block" />
                <span className="text-[0.65rem] uppercase tracking-[0.18em] text-white/50" style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}>
                    Case Snapshot
                </span>
            </div>

            {/* 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {cols.map(({ label, value }) => (
                    <div key={label} className="px-6 py-5">
                        <p
                            className="text-[0.9rem] uppercase tracking-[0.16em] text-[#f61067] mb-2"
                            style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}
                        >
                            {label}
                        </p>
                        <p
                            className="text-white/80"
                            style={{ fontFamily: "'Charter', Georgia, serif", fontSize: '17px', lineHeight: 1.62, letterSpacing: 'normal', marginBottom: 0 }}
                        >
                            {value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Meta strip */}
            <div className="border-t border-white/10 px-6 py-3 flex flex-wrap gap-x-6 gap-y-1">
                {meta.map(({ label, value }) => (
                    <span key={label} className="text-[0.8rem] text-white/40" style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', sans-serif" }}>
                        <span className="uppercase tracking-wider text-white/25 mr-1">{label}:</span>
                        {value}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default CaseSnapshot;
