import { Text, SafeAreaView, StyleSheet, ScrollView,View,Image,TouchableOpacity } from 'react-native';

export default function Home() {
   
  return (
    <SafeAreaView style={styles.container}>


      <Text style={styles.paragraph}>Menu</Text>
      <ScrollView>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
          // source={require('../assets/cogumelo.png')}
          />
          </View>
          <Text style={styles.subtitulo}>
          Pzza de Cogumelo
           </Text>
           <TouchableOpacity style={styles.botao}>
            <Text>Comprar</Text>
           </TouchableOpacity>
</View>


<View style={styles.caixa}>
        <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
          // source={require('../assets/abacaxi2.png')}
          />
          </View>
          <Text style={styles.subtitulo}>
          Pzza de nao sei
           </Text>
             <TouchableOpacity style={styles.botao}>
            <Text>Comprar</Text>
           </TouchableOpacity>
</View>


<View style={styles.caixa}>
           <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
           //source={require('../assets/peperone.png')}
          />
          </View>
          <Text style={styles.subtitulo}>
          Pzza de Peperone
           </Text>
             <TouchableOpacity style={styles.botao}>
            <Text>Comprar</Text>
           </TouchableOpacity>
</View>

<View style={styles.caixa}>
  <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
          // source={require('../assets/naosei.png')}
          />
          </View>
          <Text style={styles.subtitulo}>
          Nao sei o Sabor
           </Text>
             <TouchableOpacity style={styles.botao}>
            <Text>Comprar</Text>
           </TouchableOpacity>
</View>




<View style={styles.caixa}>
  <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
          // source={require('../assets/naosei.png')}
          />
          </View>
          <Text style={styles.subtitulo}>
          Nao sei o Sabor
           </Text>
             <TouchableOpacity style={styles.botao}>
            <Text>Comprar</Text>
           </TouchableOpacity>
</View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3385ff',
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 38,
    textAlign: 'center'
  },
  img: {
    width:350,
    height:200,
    borderRadius:40,
    paddingTop:40
  },
  botao:{
    flex:1,
   fontWeight:'bold',
   backgroundColor:'#006622',
   alignItems:'center',
   justifyContent:'center',
   width:150,
   height:40,
   color:'#ffffff'
  },
  cxFoto: {
    margintop:10,
    margin:5,
    alignItems:"center" 
  },
  caixa:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
    borderStyle:'solid',
    borderWidth:5,
    borderRadius:35,
    margin:20,
    padding:20,
    borderColor:'#FFFAFA'
  },
   subtitulo: {
    fontSize:20,
    margin:12,
    color:'#00004d'
  },
});


