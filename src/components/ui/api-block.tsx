'use client';

import React, { useState } from 'react';
import { GlassPanel } from './glass-panel';
import { Check, Copy, Terminal } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface APIBlockProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  code: string;
  language?: string;
}

export const APIBlock = ({ method, endpoint, code, language = 'bash' }: APIBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const methodColors = {
    GET: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    POST: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20',
    PUT: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    DELETE: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
  };

  return (
    <GlassPanel className="overflow-hidden border-brand-border shadow-sm dark:shadow-none transition-colors duration-500">
      <div className="flex items-center justify-between px-4 py-3 bg-foreground/[0.01] border-b border-brand-border">
        <div className="flex items-center gap-3">
          <span className={cn(
            "text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-tighter",
            methodColors[method]
          )}>
            {method}
          </span>
          <code className="text-xs text-brand-slate font-mono">{endpoint}</code>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0 text-brand-slate hover:text-foreground dark:hover:text-foreground dark:text-white"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <div className="p-4 bg-card/50">
        <div className="flex items-start gap-4 font-mono text-sm">
          <Terminal className="h-4 w-4 text-brand-blue mt-1 shrink-0" />
          <pre className="text-brand-slate overflow-x-auto pb-2">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </GlassPanel>
  );
};
