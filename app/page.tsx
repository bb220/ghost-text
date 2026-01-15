import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { GhostText } from "@/registry/ghost-text/ghost-text"
import { SiGithub } from "@icons-pack/react-simple-icons"
import { Button } from "@/components/ui/button"

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
            <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">
              <SiGithub size={24} /> Github
            </a>
          </Button>
         
          <OpenInV0Button name="hello-world"/>
        </div>
        
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
          </div>
          <div className="flex text-3xl items-center justify-center min-h-[400px] relative">
            <GhostText text="What is it?" scrambleDuration={800} startDelay={250} scrambleWindowSize={3}/>
          </div>
        </div>
      </main>
    </div>
  )
}
