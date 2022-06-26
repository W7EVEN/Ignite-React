import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface LessonProps {
  id: number;
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: string;
}

export const Sidebar = () => {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="container__list">
      <span className="list__header">Cronograma de aulas</span>

      <div className="list__lessons">
        {data?.lessons.map((lesson: any) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
};
