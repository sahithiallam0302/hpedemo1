export default function sitemap() {
  const baseUrl =
    (process.env.NEXT_PUBLIC_BASE_URL || "https://www.hpeitsolutions.com/").replace(/\/$/, "");

  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/global-exposure",
    "/industry-engagements",
    "/awards",
    "/team",
    "/careers",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}