import React, { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Button from "./components/Button";

import { data, MusicProps } from "../../constants/data";

import * as Styles from "./styles";
import { Load } from "../../components/Load";

interface CategoryTitleProps {
  title: string;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({ title }) => (
  <Styles.CategoryTitle>{title}</Styles.CategoryTitle>
);

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [buttonTop, setButtonTop] = useState(60);

  const renderItem = ({
    item,
  }: {
    item: MusicProps;
    categoryTitle: string;
  }) => (
    <Card
      name={item.name}
      align={item.align}
      radius={item.radius}
      image={item.image}
      type={item.type}
      margin={item.margin}
    />
  );

  const handleScroll = (event: {
    nativeEvent: { contentOffset: { y: any } };
  }) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 50;

    if (offsetY > threshold && isHeaderVisible) {
      setIsHeaderVisible(false);
      setButtonTop(10);
    } else if (offsetY <= threshold && !isHeaderVisible) {
      setIsHeaderVisible(true);
      setButtonTop(60);
    }
  };

  return isLoading ? (
    <Styles.LoadingScreen>
      <Load />
    </Styles.LoadingScreen>
  ) : (
    <>
      <Styles.Container>
        {isHeaderVisible && <Header />}
        <Button style={{ top: buttonTop }} />
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
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
          <Styles.Space />
        </ScrollView>
      </Styles.Container>
    </>
  );
}

export default Home;
