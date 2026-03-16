import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Mail, MessageSquare, Link, Shield, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import ScoreGauge from "./ScoreGauge";
import ThreatReport from "./ThreatReport";
import { analyzeContent, type AnalysisResult } from "@/lib/threatAnalysis";

const examples = {
  email: "We've noticed unusual activity on your account. Click here to verify your identity: https://bit.ly#suspectlogin. Thanks, The Security Team.",
  sms: "URGENT: Your bank account has been compromised! Verify now at http://secure-bank-verify.tk/login to prevent lockout.",
  url: "http://paypa1-secure.com/signin?redirect=account-verify&token=abc123",
};

const ThreatAnalyzer = () => {
  const [activeTab, setActiveTab] = useState("email");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [inputValue, setInputValue] = useState(examples.email);
  const [reportOpen, setReportOpen] = useState(false);

  const handleTabChange = (val: string) => {
    setActiveTab(val);
    setInputValue(examples[val as keyof typeof examples]);
    setResult(null);
  };

  const handleAnalyze = () => {
    const analysis = analyzeContent(inputValue, activeTab);
    setResult(analysis);
  };

  const detectedThreats = result?.indicators.filter(i => i.detected) || [];

  const threatIcon = (severity: string) => {
    if (severity === "critical") return XCircle;
    if (severity === "high") return AlertTriangle;
    return CheckCircle;
  };

  return (
    <section className="px-4 pb-16">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Input Card */}
        <div className="glass-card rounded-xl p-6">
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="bg-secondary/50 border border-border/50 mb-4">
              <TabsTrigger value="email" className="data-[state=active]:bg-card data-[state=active]:text-foreground gap-2">
                <Mail className="w-4 h-4" /> EMAIL
              </TabsTrigger>
              <TabsTrigger value="sms" className="data-[state=active]:bg-card data-[state=active]:text-foreground gap-2">
                <MessageSquare className="w-4 h-4" /> SMS
              </TabsTrigger>
              <TabsTrigger value="url" className="data-[state=active]:bg-card data-[state=active]:text-foreground gap-2">
                <Link className="w-4 h-4" /> URL
              </TabsTrigger>
            </TabsList>

            {["email", "sms", "url"].map((tab) => (
              <TabsContent key={tab} value={tab}>
                <textarea
                  className="w-full bg-secondary/30 border border-border/50 rounded-lg p-4 text-sm text-muted-foreground resize-none focus:outline-none focus:ring-1 focus:ring-primary/50 min-h-[80px]"
                  value={inputValue}
                  onChange={(e) => { setInputValue(e.target.value); setResult(null); }}
                />
              </TabsContent>
            ))}
          </Tabs>

          <button
            onClick={handleAnalyze}
            className="mt-4 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
          >
            <Shield className="w-4 h-4" />
            ANALYZE THREAT
          </button>
        </div>

        {/* Result Card */}
        {result && (
          <div className="alert-card p-6 animate-fade-in-up">
            <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              <Shield className="w-4 h-4" />
              {result.verdict === "safe" ? "SCAN COMPLETE" : "PHISHING ALERT"}
              {result.verdict !== "safe" && <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />}
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">
                  {result.verdict === "safe" ? "NO THREATS FOUND" : "THREATS DETECTED"}
                </h3>
                <ul className="space-y-3">
                  {detectedThreats.map((t) => {
                    const Icon = threatIcon(t.severity);
                    return (
                      <li key={t.id} className="flex items-center gap-3 text-sm">
                        <Icon className={`w-5 h-5 flex-shrink-0 ${t.severity === "critical" ? "text-danger" : t.severity === "high" ? "text-primary" : "text-success"}`} />
                        <span className="text-foreground/90">{t.label}</span>
                        <span className={`ml-auto text-xs font-bold uppercase tracking-wider ${t.severity === "critical" ? "text-danger" : t.severity === "high" ? "text-primary" : "text-warning"}`}>
                          {t.severity}
                        </span>
                      </li>
                    );
                  })}
                  {detectedThreats.length === 0 && (
                    <li className="flex items-center gap-3 text-sm text-success">
                      <CheckCircle className="w-5 h-5" />
                      All checks passed — no threats detected
                    </li>
                  )}
                </ul>

                {result.score >= 20 && (
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-warning">
                    <AlertTriangle className="w-4 h-4" />
                    {result.score >= 70 ? "HIGH RISK PHISHING ATTEMPT!" : result.score >= 45 ? "POSSIBLE PHISHING ATTEMPT!" : "EXERCISE CAUTION"}
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <ScoreGauge score={result.score} size={160} label="Scam Risk Score" />

                {result.score >= 20 && (
                  <div className="flex items-center gap-2 text-xs font-bold text-danger tracking-wider">
                    <span className="w-2 h-2 bg-danger rounded-full" />
                    {result.verdict.toUpperCase()} THREAT LEVEL
                  </div>
                )}

                <button
                  onClick={() => setReportOpen(true)}
                  className="mt-2 border border-foreground/30 text-foreground hover:bg-foreground/10 px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wider transition-colors"
                >
                  VIEW FULL REPORT
                </button>
              </div>
            </div>
          </div>
        )}

        <ThreatReport open={reportOpen} onOpenChange={setReportOpen} result={result} />
      </div>
    </section>
  );
};

export default ThreatAnalyzer;
