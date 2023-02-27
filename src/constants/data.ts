import engenheiros from "../assets/albuns/engenheiros.jpeg";

import mm from "../assets/artists/mm.png";
import ana from "../assets/artists/ana.png";
import jm from "../assets/artists/jm.png";
import hj from "../assets/artists/hj.png";
import mc from "../assets/artists/mc.png";
import gl from "../assets/artists/gl.png";
import mf from "../assets/artists/mf.png";

export interface MusicProps {
  name: string;
  image?: string;
  radius?: string;
}

export interface CategoryProps {
  title: string;
  radius?: string;
  music: MusicProps[];
}

interface DataProps {
  categories: CategoryProps[];
}

export const data: DataProps = {
  categories: [
    {
      title: "Tocados recentemente",
      music: [
        {
          name: "Engenheiros do Hawaii Sem Limites",
          image: engenheiros,
          radius: "0",
        },
      ],
    },
    {
      title: "Artistas populares",
      music: [
        {
          name: "Marília Mendonça",
          image: mm,
          radius: "100",
        },
        {
          name: "Ana Castela",
          image: ana,
          radius: "100",
        },
        {
          name: "Jorge & Mateus",
          image: jm,
          radius: "100",
        },
        {
          name: "Hnrique e Juliano",
          image: hj,
          radius: "100",
        },
        {
          name: "MC Ryan SP",
          image: mc,
          radius: "100",
        },
        {
          name: "Gustavo Lima",
          image: gl,
          radius: "100",
        },
        {
          name: "Mari Fernandez",
          image: mf,
          radius: "100",
        },
      ],
    },
  ],
};
