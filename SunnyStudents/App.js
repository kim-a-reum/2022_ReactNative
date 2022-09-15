import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

// useAssets 와 useFonts를 사용하지 않은 방식 적용해보기
// Assets말고 다른 로직이 로딩중에 필요할때는 이렇게 적용해야한다 !

// font를 preload하는 함수
const loadFonts = (Fonts) => Fonts.map((font) => Font.loadAsync(font));

// image를 preload
const loadImages = (images) =>
  images.map((images) => {
    if (typeof images === "string") {
      return Image.prefetch(images);
    } else {
      return Asset.loadAsync(images);
    }
  });

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        const fonts = loadFonts([Entypo.font, Ionicons.font]);
        const images = loadImages([
          require("./logo.png"),
          "https://images.velog.io/images/yeopto/post/77770604-da6a-4e32-a178-afe19b58ff51/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.png",
        ]);
        await Promise.all([...fonts, ...images]);
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Image source={require("./logo.png")} style={styles.logoBox} />
        <Text>loading...중</Text>
        <Text>환영합니다!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text> 앱에 오신걸 환영해요 ! 👋</Text>
      <Entypo name="rocket" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoBox: {
    width: 200,
    height: 200,
    marginBottom: 100,
  },
});
