import { motion } from 'framer-motion';

const CLIENTS = [
    { name: 'Jungheinrich', detail: 'Digital Solutions' },
    { name: 'DHL', detail: 'Enterprise Logistics' },
    { name: 'Amazon', detail: 'Intralogistics' },
    { name: 'LIDL', detail: 'Warehouse Operations' },
];

const METRICS = [
    { value: '~40', label: 'Engineers Governed' },
    { value: '8', label: 'FMS Modules' },
    { value: '150+', label: 'DS Components' },
    { value: '80%', label: 'Workflow Reduction' },
    { value: '55%', label: 'Support Queries Cut' },
];

const ScaleStrip = () => (
    <div className="border-y border-[#323a45]/10 bg-white">
        {/* Client Row */}
        <div className="border-b border-[#323a45]/10 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
                    <span
                        className="text-[0.65rem] uppercase tracking-[0.18em] text-[#999] md:w-40 shrink-0 text-center md:text-left"
                        style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                    >
                        Trusted at scale by
                    </span>
                    <div className="flex-1 flex flex-wrap justify-center md:justify-around items-center gap-8">
                        {CLIENTS.map((client, i) => (
                            <motion.div
                                key={client.name}
                                className="flex flex-col items-center md:items-start"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                            >
                                <span
                                    className="text-[1.05rem] tracking-[0.06em] text-[#323a45] uppercase"
                                    style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                                >
                                    {client.name}
                                </span>
                                <span
                                    className="text-[0.6rem] uppercase tracking-[0.12em] text-[#999] mt-0.5"
                                    style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                                >
                                    {client.detail}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Metrics Row */}
        <div className="py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
                    {METRICS.map((m, i) => (
                        <motion.div
                            key={m.label}
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                        >
                            <span
                                className="text-[2rem] md:text-[2.4rem] text-[#323a45] leading-none"
                                style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                            >
                                {m.value}
                            </span>
                            <span
                                className="text-[0.6rem] uppercase tracking-[0.14em] text-[#999] mt-1 text-center"
                                style={{ fontFamily: "'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif" }}
                            >
                                {m.label}
                            </span>
                        </motion.div>
                    ))}
                    {/* Dividers between metrics — desktop only */}
                    <style>{`
                        @media (min-width: 768px) {
                            .metric-divider { display: block; }
                        }
                    `}</style>
                </div>
            </div>
        </div>
    </div>
);

export default ScaleStrip;
