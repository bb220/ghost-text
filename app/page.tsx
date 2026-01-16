import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { GhostText } from "@/registry/ghost-text/ghost-text"
import { SiGithub } from "@icons-pack/react-simple-icons"
import { Button } from "@/components/ui/button"
import { CopyButton } from "@/components/ui/copy-button"
import { CodeBlock } from "@/components/ui/code-block"

const commandText = "npx shadcn@latest add https://ghost-text.brandonbellero.com/r/ghost-text.json"
const importText = `import { GhostText } from "@/components/ghost-text"`
const usageText = `<GhostText text="What's up world" startDelay={250} scrambleDuration={800} scrambleWindowSize={3} />`

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="grid md:grid-cols-2 gap-1 ">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">GhostText</h1>
          <p className="text-muted-foreground">
          Component with text scrambling effect
          </p>
        </div>
        <div className="flex items-center md:justify-end gap-4 mt-4">
          
          <Button size="sm" variant="default" className="w-fit" asChild>
            <a href="https://github.com/bb220/ghost-text" target="_blank" rel="noopener noreferrer">
              <SiGithub size={24} /> Github
            </a>
          </Button>
         
          <OpenInV0Button name="ghost-text"/>
        </div>
        
      </header>
      <main className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[150px] relative">
          <div className="flex items-center justify-between">
          </div>
          <div className="flex text-3xl items-center justify-center min-h-[75px] relative">
            <GhostText text="What's up world" scrambleDuration={800} startDelay={250} scrambleWindowSize={3}/>
          </div>
        </div>
      </main>
      <h3 className="text-xl font-semibold mt-8">Installation</h3>
      <p>Run the following command to add the component to your project:</p>
      <div className="w-full">
          <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/50">
              <span className="size-2.5 rounded-full bg-red-500/40" />
              <span className="size-2.5 rounded-full bg-yellow-500/40" />
              <span className="size-2.5 rounded-full bg-green-500/40" />
            </div>

            <div className="flex items-center gap-3 px-4 py-3 font-mono text-sm">
              <span className="text-emerald-500 shrink-0">$</span>
              <code className="text-foreground/80 truncate flex-1 text-left">
                {commandText}
              </code>
              <CopyButton text={commandText} />
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-8">Usage</h3>
        <p>Import and use the component:</p>
        <CodeBlock code={importText} language="bash" />
        <CodeBlock code={usageText} />
    </div>
  )
}
