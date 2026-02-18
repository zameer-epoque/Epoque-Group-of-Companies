import { MetadataRoute } from "next"
import fs from "fs"
import path from "path"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.epoquegroup.in"

  const appDir = path.join(process.cwd(), "app")

  function getRoutes(dir: string, basePath = ""): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    let routes: string[] = []

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        routes = routes.concat(
          getRoutes(fullPath, `${basePath}/${entry.name}`)
        )
      }

      if (entry.isFile() && entry.name === "page.tsx") {
        routes.push(basePath || "/")
      }
    }

    return routes
  }

  const routes = getRoutes(appDir)

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1.0 : 0.8,
  }))
}
