import React from "react";
import { FlatList, ScrollView } from "react-native";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Button from "./components/Button";

import { data, MusicProps } from "../../constants/data";

import * as Styles from "./styles";

interface CategoryTitleProps {
  title: string;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({ title }) => (
  <Styles.CategoryTitle>{title}</Styles.CategoryTitle>
);

function Home() {
  const renderItem = ({
    item,
  }: {
    item: MusicProps;
    categoryTitle: string;
  }) => <Card name={item.name} radius={item.radius} image={item.image} />;

  return (
    <Styles.Container>
      <Header />
      <Button />
      <ScrollView>
        {data.categories.map((category) => (
          <React.Fragment key={category.title}>
            <CategoryTitle title={category.title} />
            <FlatList
              data={category.music}
              renderItem={({ item }) =>
                renderItem({ item, categoryTitle: category.title })
              }
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </React.Fragment>
        ))}
      </ScrollView>
    </Styles.Container>
  );
}

export default Home;
