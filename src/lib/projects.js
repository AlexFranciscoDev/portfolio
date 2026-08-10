import { projects } from "../data/projects";

export function getFeaturedProjects() {
  return projects.filter((project) => project.category === "featured");
}

export function getOtherProjects() {
  return projects.filter((project) => project.category === "other");
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug && project.category === "featured");
}
