import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  ImageSquare,
  Lightning,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export const Video = (props: VideoProps) => {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="container__lesson">
        <p>Carregando</p>
      </div>
    );
  }

  return (
    <div className="container__lesson">
      <div className="lesson__content">
        <div className="lesson__video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="lesson__info">
        <div className="lesson__details">
          <div className="lesson__description">
            <h1 className="description__title">{data.lesson.title}</h1>
            <p className="description__info">{data.lesson.description}</p>

            {data.lesson.teacher && (
              <div className="description__teacher">
                <img
                  className="teacher__picture"
                  src={data.lesson.teacher.avatarURL}
                  alt="Foto do professor"
                />

                <div className="teacher__info">
                  <strong className="teacher__name">
                    {data.lesson.teacher.name}
                  </strong>
                  <p className="teacher__description ">
                    {data.lesson.teacher.bio}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="details__buttons">
            <a href="#" className="buttons__discord">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a href="#" className="buttons__challenge">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="lesson__extra-materials">
          <a href="#" className="group extra-materials__card">
            <div className="card__icon ">
              <FileArrowDown size={40} />
            </div>
            <div className="card__text">
              <strong className="card__heading">Material Complementar</strong>
              <p className="card__description">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="card__arrow-icon">
              <CaretRight size={24} />
            </div>
          </a>
          <a href="#" className="group extra-materials__card">
            <div className="card__icon ">
              <ImageSquare size={40} />
            </div>
            <div className="card__text">
              <strong className="card__heading">Wallpapers</strong>
              <p className="card__description">
                Baixe wallpapers exclusivos da Maratona Explorer e personalize a
                sua máquina
              </p>
            </div>
            <div className="card__arrow-icon">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
