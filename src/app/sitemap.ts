import { MetadataRoute } from "next";
import { PRODUCTS_DATA } from "@/data/products";
import { PROJECTS_DATA } from "@/data/projects";
import { INSIGHTS_DATA } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mkelectra.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/software",
    "/services/embedded-iot",
    "/services/mechanical",
    "/services/industrial-automation",
    "/services/ai-ml",
    "/services/product-development",
    "/solutions",
    "/3d-printing",
    "/3d-printing/wholesale",
    "/3d-printing/retail",
    "/3d-printing/custom-parts",
    "/3d-printing/prototyping",
    "/products",
    "/projects",
    "/industries",
    "/insights",
    "/contact",
    "/quote",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/services") || route.startsWith("/3d-printing") ? 0.9 : 0.8,
  }));

  const productRoutes = PRODUCTS_DATA.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = PROJECTS_DATA.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const insightRoutes = INSIGHTS_DATA.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...projectRoutes, ...insightRoutes];
}
