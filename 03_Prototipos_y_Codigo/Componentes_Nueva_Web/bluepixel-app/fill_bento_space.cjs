const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const targetStr = `                  <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                    Toda la arquitectura agentica se despliega de forma nativa dentro de tu propia nube privada (AWS, Azure o Google Cloud). Tus datos nunca salen de tu perímetro de seguridad empresarial, asegurando cumplimiento total (SOC2, HIPAA).
                  </p>
                </div>`;

const graphicInjection = `                  <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                    Toda la arquitectura agentica se despliega de forma nativa dentro de tu propia nube privada (AWS, Azure o Google Cloud). Tus datos nunca salen de tu perímetro de seguridad empresarial, asegurando cumplimiento total (SOC2, HIPAA).
                  </p>
                </div>
                
                {/* Right side Visual Graphic for VPC Card */}
                <div className="hidden lg:flex w-full max-w-[320px] items-center justify-end relative z-10">
                  <div className="w-full bg-[#060A14] rounded-2xl border border-white/[0.08] p-5 shadow-2xl relative overflow-hidden backdrop-blur-md">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="text-[10px] font-mono text-blue-400 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                      VPC_DEPLOYMENT_STATUS
                    </div>
                    <div className="space-y-2">
                       <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] p-2.5 rounded-lg">
                         <span className="text-[11px] text-slate-300 font-mono">ec2_cluster_nodes</span>
                         <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">ACTIVE</span>
                       </div>
                       <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] p-2.5 rounded-lg">
                         <span className="text-[11px] text-slate-300 font-mono">rds_vector_db</span>
                         <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">SYNCED</span>
                       </div>
                       <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] p-2.5 rounded-lg">
                         <span className="text-[11px] text-slate-300 font-mono">iam_zero_trust</span>
                         <span className="text-[10px] text-blue-400 font-bold bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">ENFORCED</span>
                       </div>
                    </div>
                  </div>
                </div>`;

if(txt.includes(targetStr)) {
    txt = txt.replace(targetStr, graphicInjection);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Visual graphic added to wide card!");
} else {
    console.log("Could not find target string.");
}
