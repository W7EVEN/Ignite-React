import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="container__main">
      <Header />
      <main className="container__lessons">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="container__video"></div>
        )}
        <Sidebar />
      </main>
    </div>
  );
};
