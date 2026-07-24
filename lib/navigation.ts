import { tradingModules } from "@/components/data/tradingModules";

export function getLessonNavigation(
  moduleSlug: string,
  lessonSlug: string
) {
  const moduleIndex = tradingModules.findIndex(
    (m) => m.slug === moduleSlug
  );

  if (moduleIndex === -1) return null;

  const module = tradingModules[moduleIndex];

  const lessonIndex = module.lessons.findIndex(
    (lesson) => lesson.slug === lessonSlug
  );

  if (lessonIndex === -1) return null;

  let previous = null;
  let next = null;

  // ==========================
  // Lección anterior
  // ==========================

  if (lessonIndex > 0) {
    const lesson = module.lessons[lessonIndex - 1];

    previous = {
      title: lesson.title,
      href: `/trading/${module.slug}/${lesson.slug}`,
    };
  }

  // ==========================
  // Lección siguiente
  // ==========================

  if (lessonIndex < module.lessons.length - 1) {
    const lesson = module.lessons[lessonIndex + 1];

    next = {
      title: lesson.title,
      href: `/trading/${module.slug}/${lesson.slug}`,
    };
  }

  // ==========================
  // Última lección → siguiente módulo
  // ==========================

  else if (moduleIndex < tradingModules.length - 1) {
    const nextModule = tradingModules[moduleIndex + 1];

    next = {
      title: `Comenzar ${nextModule.title}`,
      href: `/trading/${nextModule.slug}`,
    };
  }

  return {
    module: {
      title: module.title,
      href: `/trading/${module.slug}`,
    },

    previous,

    next,
  };
}