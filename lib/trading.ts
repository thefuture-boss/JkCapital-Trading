import { tradingModules } from "@/components/data/tradingModules";

export function getModule(moduleSlug: string) {
  return tradingModules.find(
    (module) => module.slug === moduleSlug
  );
}

export function getLesson(
  moduleSlug: string,
  lessonSlug: string
) {
  const module = getModule(moduleSlug);

  if (!module) return null;

  const lessonIndex = module.lessons.findIndex(
    (lesson) => lesson.slug === lessonSlug
  );

  if (lessonIndex === -1) return null;

  return {
    module,
    lesson: module.lessons[lessonIndex],
    index: lessonIndex,
    total: module.lessons.length,
    previous:
      lessonIndex > 0
        ? module.lessons[lessonIndex - 1]
        : null,
    next:
      lessonIndex < module.lessons.length - 1
        ? module.lessons[lessonIndex + 1]
        : null,
  };
}