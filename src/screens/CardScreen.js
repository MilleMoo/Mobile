import React, { useState,useEffect } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Card from "../components/Card";
import { FlatList } from "react-native-gesture-handler";

const CardScreen = () => {
  const heroes = [
    {
      id: "1",
      title: "SUNSPOT",
      image: "https://cdn.marvel.com/content/1x/306ssp_com_crd_01.jpg",
      content:
        "Sunspot channels solar energy to become a powerhouse of unbelievable strength, helps the X-Men, and runs a multi-billion dollar company.",
    },
    {
      id: "2",
      title: "ABOMINATION",
      image: "https://cdn.marvel.com/content/1x/348abm_com_crd_01.jpg",
      content:
        "Savage and full of a blind rage, Abomination is the Hulk’s foremost foe and while able to crush him, he often faces defeat himself.",
    },
    {
      id: "3",
      title: "Aero",
      image: "https://cdn.marvel.com/content/1x/428all_com_crd_01.jpg",
      content:
        "With the power of the wind at her command, Lei Ling is the master of the sky and the protector of Shanghai!",
    },
  ];
  const [searchKey, setSearchKey] = useState("");
  const [currentHeros, setCurrentHeros] = useState(heroes);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("currentHeros is changed")
    }, 2000);
    return () => {
      clearInterval(interval);
      console.log("Interval Stopped");
    };
  }, [])

  const handleSearch = (key) => {
    setSearchKey(key);
    if (key.trim() === null) {
      setCurrentHeros(heroes);
    } else {
      const results = heroes.filter((hero) =>
        hero.title.toLowerCase().includes(key.toLowerCase())
      );
      setCurrentHeros(results);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search by Name"
        style={styles.Input}
        valuse={searchKey}
        onChangeText={handleSearch}
      />
      <Text style={{ color: "#fff" }}>{searchKey}</Text>
      <FlatList
        data={currentHeros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.title}
              image={item.image}
              content={item.content}
            ></Card>
          );
        }}
        ListEmptyComponent={<Text style={styles.noHero}>No Hero Found</Text>}
      />
      {/* <View style = {styles.card}>
                    <Image source={{ uri: "https://cdn.marvel.com/content/1x/058mgn_com_cut_dsk_01_1.jpg" }} style = {styles.HeroImg}></Image>
                <Text style = {styles.Header}>
                Magneto
                </Text>
                <Text style = {styles.textstory}>
                Harnessing his powerful magnetic abilities, Max Eisenhardt becomes a radical freedom fighter in the name of his kind. His only priority is the preservation of the mutant race—even at the expense of what some might deem to be the greater good.
                </Text>
            </View>
            <View style = {styles.card}>
                    <Image source={{ uri: "https://i.redd.it/9w25nsmj83951.jpg" }} style = {styles.HeroImg}></Image>
                <Text style = {styles.Header}>
                Cyclops
                </Text>
                <Text style = {styles.textstory}>
                From a stoic leader of the X-Men to a hardened radical, Cyclops is always true to mutantkind and determined to make Xavier’s dream of peace between mutants and humans a reality.
                </Text>
            </View>
            <View style = {styles.card}>
                <Image source={{ uri: "https://cdn.mos.cms.futurecdn.net/9Y2NjXFtWQBEGyWVutHw2Z-1200-80.jpg" }} style = {styles.HeroImg}></Image>
                <Text style = {styles.Header}>
                Storm
                </Text>
                <Text style = {styles.textstory}>
                Mutant Ororo Munroe confounds enemies of the X-Men by using her psionic abilities to manipulate the weather.
                </Text>
                </View>
                <Card title= "SUNSPOT"
                    image = "https://cdn.marvel.com/content/1x/306ssp_com_crd_01.jpg"
                    content="Sunspot channels solar energy to become a powerhouse of unbelievable strength, helps the X-Men, and runs a multi-billion dollar company."></Card>
                <Card title= "ABOMINATION"
                    image = "https://cdn.marvel.com/content/1x/348abm_com_crd_01.jpg"
                    content="Content: Savage and full of a blind rage, Abomination is the Hulk’s foremost foe and while able to crush him, he often faces defeat himself."></Card>
                <Card title= "Aero"
                    image = "https://cdn.marvel.com/content/1x/428all_com_crd_01.jpg"
                    content="With the power of the wind at her command, Lei Ling is the master of the sky and the protector of Shanghai!"></Card> */}
    </View>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    shadowOffset: 22,
    shadowRadius: 20,
    elevation: 20,
  },
  Header: {
    fontWeight: "bold",
    fontSize: 20,
  },
  HeroImg: {
    width: "100%",
    height: 400,
  },
  textstory: {
    textAlign: "justify",
  },
  Input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    fontSize: 18,
    color: "black",
  },
  noHero: {
    fontSize: 25,
    textAlign: "center",
    alignItems: "center",
  },
});

export default CardScreen;
