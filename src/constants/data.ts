import engenheiros from "../assets/albuns/engenheiros.jpeg";

import mm from "../assets/artists/mm.png";
import ana from "../assets/artists/ana.png";
import jm from "../assets/artists/jm.png";
import hj from "../assets/artists/hj.png";
import mc from "../assets/artists/mc.png";
import gl from "../assets/artists/gl.png";
import mf from "../assets/artists/mf.png";

import podepah from "../assets/artists/podepah.png";
import flow from "../assets/artists/flow.png";
import monark from "../assets/artists/monark.png";
import nerdcast from "../assets/artists/nerdcast.png";
import poddelas from "../assets/artists/poddelas.png";

export interface MusicProps {
  name?: string;
  image?: string;
  radius?: string;
  align?: string;
  type?: string;
  margin?: string;
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
          align: "baseline",
          margin: "-10",
        },
        {
          name: "Podpah",
          image: podepah,
          radius: "13",
          align: "baseline",
          margin: "-10",
        },
        {
          name: "Jorge & Mateus",
          image: jm,
          radius: "100",
          align: "center",
          margin: "-10",
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
          align: "center",
          margin: "-10",
        },
        {
          name: "Ana Castela",
          image: ana,
          radius: "100",
          align: "center",
          margin: "-10",
        },
        {
          name: "Jorge & Mateus",
          image: jm,
          radius: "100",
          align: "center",
          margin: "-10",
        },
        {
          name: "Henrique e Juliano",
          image: hj,
          radius: "100",
          align: "center",
          margin: "-10",
        },
        {
          name: "MC Ryan SP",
          image: mc,
          radius: "100",
          align: "center",
          margin: "-10",
        },
        {
          name: "Gustavo Lima",
          image: gl,
          radius: "100",
          align: "center",
          margin: "-10",
        },
        {
          name: "Mari Fernandez",
          image: mf,
          radius: "100",
          align: "center",
          margin: "-10",
        },
      ],
    },
    {
      title: "Programas para você",
      music: [
        {
          name: "Podpah",
          image: podepah,
          radius: "13",
          align: "baseline",
          type: "Arte e entretenimento",
          margin: "8",
        },
        {
          name: "Flow Podcast",
          image: flow,
          radius: "13",
          align: "baseline",
          type: "Arte e entretenimento",
          margin: "8",
        },
        {
          name: "NerdCast",
          image: nerdcast,
          radius: "13",
          align: "baseline",
          type: "Arte e entretenimento",
          margin: "8",
        },
        {
          name: "PODDELAS",
          image: poddelas,
          radius: "13",
          align: "baseline",
          type: "Arte e entretenimento",
          margin: "8",
        },
        {
          name: "Monark Talks",
          image: monark,
          radius: "13",
          align: "baseline",
          type: "Arte e entretenimento",
          margin: "8",
        },
      ],
    },
    {
      title: "O Brasil tá ouvindo!",
      music: [
        {
          name: "Jorge & Mateus",
          image: jm,
          radius: "100",
          align: "center",
          margin: "-10",
        },
        {
          name: "Henrique e Juliano",
          image: hj,
          radius: "100",
          align: "center",
          margin: "-10",
        },
        {
          name: "MC Ryan SP",
          image: mc,
          radius: "100",
          align: "center",
          margin: "-10",
        },
        {
          name: "Gustavo Lima",
          image: gl,
          radius: "100",
          align: "center",
          margin: "-10",
        },
      ],
    },
    {
      title: "Descubra algo novo",
      music: [
        {
          name: "Marília Mendonça",
          image: mm,
          radius: "100",
          align: "center",
          margin: "-10",
        },

        {
          name: "Ana Castela",
          image: ana,
          radius: "100",
          align: "center",
          margin: "-10",
        },
        {
          name: "Mari Fernandez",
          image: mf,
          radius: "100",
          align: "center",
          margin: "-10",
        },
      ],
    },
  ],
};
