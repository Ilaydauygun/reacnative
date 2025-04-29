export interface Topic {
    id: string;
    title: string;
    description: string;
    icon: string;
    level: 'Başlangıç' | 'Orta' | 'İleri';
    duration: string;
    content: string;
  }
  
  export const topics: Topic[] = [
    {
      id: '1',
      title: 'React Native Temelleri',
      description: 'React Native\'in temel kavramlarını ve yapısını öğrenin.',
      icon: 'code',
      level: 'Başlangıç',
      duration: '2 saat',
      content: 'React Native, Facebook tarafından geliştirilen açık kaynaklı bir mobil uygulama geliştirme çerçevesidir. JavaScript ve React kullanarak hem iOS hem de Android platformları için native uygulamalar geliştirmenize olanak tanır.\n\nReact Native ile geliştirilen uygulamalar, gerçek native bileşenleri kullanır ve bu sayede yüksek performans sunar. Aynı zamanda, tek bir kod tabanı ile birden fazla platformu hedefleyebilirsiniz.\n\nReact Native\'in temel yapı taşları şunlardır:\n\n1. Bileşenler (Components): UI oluşturmak için kullanılan yapı taşlarıdır.\n2. Props: Bileşenlere veri aktarmak için kullanılır.\n3. State: Bileşenlerin durumunu yönetmek için kullanılır.\n4. JSX: JavaScript içinde HTML benzeri bir sözdizimi kullanmanıza olanak tanır.'
    },
    {
      id: '2',
      title: 'Bileşenler ve Props',
      description: 'React Native bileşenlerini ve props kavramını derinlemesine inceleyin.',
      icon: 'layers',
      level: 'Başlangıç',
      duration: '1.5 saat',
      content: 'React Native\'de bileşenler (components), kullanıcı arayüzünün yapı taşlarıdır. Her bileşen, ekranda görüntülenecek bir UI parçasını tanımlar.\n\nReact Native iki tür bileşen sunar:\n\n1. Fonksiyonel Bileşenler: JavaScript fonksiyonları olarak tanımlanır ve props alıp JSX döndürür.\n2. Sınıf Bileşenleri: React.Component sınıfından türetilir ve render metodu içinde JSX döndürür.\n\nProps (properties), bileşenlere veri aktarmak için kullanılan parametrelerdir. Props, bileşenler arasında veri akışını sağlar ve bileşenlerin yeniden kullanılabilirliğini artırır.\n\nÖrnek bir fonksiyonel bileşen:\n\n```jsx\nconst Greeting = (props) => {\n  return <Text>Merhaba, {props.name}!</Text>;\n};\n\n// Kullanımı\n<Greeting name="Ahmet" />\n```'
    },
    {
      id: '3',
      title: 'State Yönetimi',
      description: 'React Native uygulamalarında state yönetimini öğrenin.',
      icon: 'refresh-cw',
      level: 'Orta',
      duration: '2.5 saat',
      content: 'State (durum), bir bileşenin yaşam döngüsü boyunca değişebilen verilerdir. State değiştiğinde, bileşen yeniden render edilir.\n\nFonksiyonel bileşenlerde state yönetimi için useState hook\'u kullanılır:\n\n```jsx\nimport { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <View>\n      <Text>Sayaç: {count}</Text>\n      <Button title="Artır" onPress={() => setCount(count + 1)} />\n    </View>\n  );\n}\n```\n\nDaha karmaşık state yönetimi için useReducer hook\'u veya Redux, MobX, Zustand gibi harici state yönetim kütüphaneleri kullanılabilir.\n\nState yönetiminde dikkat edilmesi gereken noktalar:\n\n1. State\'i doğrudan değiştirmeyin, her zaman setter fonksiyonunu kullanın.\n2. State güncellemeleri asenkrondur.\n3. State, mümkün olduğunca minimal ve düz olmalıdır.'
    },
    {
      id: '4',
      title: 'Navigasyon',
      description: 'React Native uygulamalarında ekranlar arası geçişleri yönetin.',
      icon: 'navigation',
      level: 'Orta',
      duration: '2 saat',
      content: 'React Native uygulamalarında navigasyon, kullanıcıların farklı ekranlar arasında gezinmesini sağlar. React Navigation, React Native uygulamaları için en popüler navigasyon kütüphanesidir.\n\nReact Navigation ile şu navigasyon türlerini kullanabilirsiniz:\n\n1. Stack Navigator: Ekranları bir yığın olarak yönetir, geri butonu ile önceki ekranlara dönülebilir.\n2. Tab Navigator: Alt kısımda veya üst kısımda sekmeler oluşturur.\n3. Drawer Navigator: Kenardan açılan bir menü sağlar.\n\nExpo Router, React Navigation üzerine inşa edilmiş ve dosya tabanlı bir yönlendirme sistemi sunar. Next.js benzeri bir deneyim sağlar.\n\nNavigasyon örneği:\n\n```jsx\nimport { NavigationContainer } from "@react-navigation/native";\nimport { createStackNavigator } from "@react-navigation/stack";\n\nconst Stack = createStackNavigator();\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name="Home" component={HomeScreen} />\n        <Stack.Screen name="Details" component={DetailsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n```'
    },
    {
      id: '5',
      title: 'Stillendirme',
      description: 'React Native uygulamalarını CSS benzeri stillerle özelleştirin.',
      icon: 'palette',
      level: 'Başlangıç',
      duration: '1.5 saat',
      content: 'React Native\'de stillendirme, CSS\'e benzer ancak tüm CSS özelliklerini desteklemez. Stiller, JavaScript nesneleri olarak tanımlanır ve camelCase sözdizimi kullanır.\n\nStillendirme için StyleSheet API\'si kullanılır:\n\n```jsx\nimport { StyleSheet, Text, View } from "react-native";\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>Merhaba Dünya!</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: "#fff",\n    alignItems: "center",\n    justifyContent: "center",\n  },\n  text: {\n    fontSize: 24,\n    fontWeight: "bold",\n    color: "#333",\n  },\n});\n```\n\nReact Native\'de layout için Flexbox kullanılır. Flexbox, elemanları yatay veya dikey olarak düzenlemek için kullanılan güçlü bir layout sistemidir.\n\nAyrıca, styled-components veya NativeWind gibi kütüphaneler kullanarak stillendirme işlemlerini daha da kolaylaştırabilirsiniz.'
    },
    {
      id: '6',
      title: 'API İstekleri',
      description: 'React Native uygulamalarında HTTP istekleri yapın ve veri alın.',
      icon: 'server',
      level: 'Orta',
      duration: '2 saat',
      content: 'React Native uygulamalarında, harici API\'lerden veri almak için fetch API\'si veya axios gibi kütüphaneler kullanılabilir.\n\nFetch API kullanarak veri alma örneği:\n\n```jsx\nimport { useEffect, useState } from "react";\nimport { Text, View } from "react-native";\n\nexport default function App() {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch("https://api.example.com/data")\n      .then((response) => response.json())\n      .then((json) => setData(json))\n      .catch((error) => console.error(error))\n      .finally(() => setLoading(false));\n  }, []);\n\n  return (\n    <View>\n      {loading ? (\n        <Text>Yükleniyor...</Text>\n      ) : (\n        <Text>{JSON.stringify(data)}</Text>\n      )}\n    </View>\n  );\n}\n```\n\nDaha gelişmiş veri yönetimi için React Query, SWR gibi kütüphaneler kullanılabilir. Bu kütüphaneler, önbelleğe alma, yeniden deneme, veri geçersiz kılma gibi özellikleri otomatik olarak sağlar.'
    },
    {
      id: '7',
      title: 'Native Modüller',
      description: 'React Native uygulamalarında cihaz özelliklerine erişin.',
      icon: 'smartphone',
      level: 'İleri',
      duration: '3 saat',
      content: 'React Native, JavaScript kodundan native platform özelliklerine erişim sağlar. Kamera, konum, bildirimler gibi cihaz özelliklerine erişmek için native modüller kullanılır.\n\nExpo, birçok native modülü içeren bir SDK sunar ve bu modüllere erişimi kolaylaştırır.\n\nÖrnek olarak, konum bilgisine erişmek için:\n\n```jsx\nimport { useEffect, useState } from "react";\nimport { Text, View } from "react-native";\nimport * as Location from "expo-location";\n\nexport default function App() {\n  const [location, setLocation] = useState(null);\n  const [errorMsg, setErrorMsg] = useState(null);\n\n  useEffect(() => {\n    (async () => {\n      let { status } = await Location.requestForegroundPermissionsAsync();\n      if (status !== "granted") {\n        setErrorMsg("Konum izni reddedildi");\n        return;\n      }\n\n      let location = await Location.getCurrentPositionAsync({});\n      setLocation(location);\n    })();\n  }, []);\n\n  let text = "Yükleniyor...";\n  if (errorMsg) {\n    text = errorMsg;\n  } else if (location) {\n    text = JSON.stringify(location);\n  }\n\n  return (\n    <View>\n      <Text>{text}</Text>\n    </View>\n  );\n}\n```\n\nNative modüller kullanırken, platforma özgü davranışları ve izinleri yönetmek önemlidir.'
    },
    {
      id: '8',
      title: 'Performans Optimizasyonu',
      description: 'React Native uygulamalarının performansını artırın.',
      icon: 'zap',
      level: 'İleri',
      duration: '2.5 saat',
      content: 'React Native uygulamalarında performans optimizasyonu, kullanıcı deneyimini iyileştirmek için kritik öneme sahiptir. İşte bazı performans optimizasyon teknikleri:\n\n1. Gereksiz render\'ları önlemek için React.memo, useMemo ve useCallback kullanın.\n2. FlatList veya SectionList gibi performanslı liste bileşenlerini kullanın.\n3. Büyük listelerde pagination veya windowing tekniklerini uygulayın.\n4. Ağır hesaplamaları web worker\'lara taşıyın.\n5. Görüntüleri optimize edin ve lazy loading uygulayın.\n6. Animasyonlar için native driver kullanın.\n\nÖrnek olarak, React.memo kullanımı:\n\n```jsx\nimport { memo } from "react";\nimport { Text } from "react-native";\n\nconst ExpensiveComponent = memo(({ data }) => {\n  console.log("Rendering expensive component");\n  return <Text>{data}</Text>;\n});\n```\n\nPerformans sorunlarını tespit etmek için React DevTools ve Flipper gibi araçları kullanabilirsiniz.'
    }
  ];