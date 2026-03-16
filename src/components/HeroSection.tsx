import { Shield, ArrowRight } from "lucide-react";
import ScoreGauge from "./ScoreGauge";

const stats = [
  { value: "3.4B", label: "Phishing emails analyzed" },
  { value: "97%", label: "AI detection accuracy" },
  { value: "<3s", label: "Analysis time" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase">
          <Shield className="w-4 h-4" />
          PhishGuard
          <ArrowRight className="w-3.5 h-3.5" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
          Detect <span className="text-gradient-primary italic">Threats</span> Before They Strike
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          AI-powered real-time phishing & scam detection platform protecting users from digital fraud.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card min-w-[160px]">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
          <div className="stat-card min-w-[140px] flex items-center justify-center">
            <ScoreGauge score={82} size={100} label="Scam risk score" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
