import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: string;
}

export const Lesson = (props: LessonProps) => {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="lesson__date">{availableDateFormatted}</span>
      <div
        className={`lesson__card ${
          isActiveLesson ? "lesson__card--active" : ""
        }`}
      >
        <header className="card__header">
          {isLessonAvailable ? (
            <span
              className={`card__lesson--available ${
                isActiveLesson ? "card__lesson--active" : ""
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="card__lesson--unavailable">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span
            className={`card__type ${
              isActiveLesson ? "card__type--active" : ""
            }`}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={`card__title ${
            isActiveLesson ? "card__title--active" : ""
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
};
