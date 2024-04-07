import { StyleSheet, Text, View } from 'react-native';

const FaultDescriptionCard=props=>{

    return (

        <View style={styles.mainCardContainer} >

            <View style={styles.PriceRow}>
                <Text style={{

                    color:"#2876a3",
                    fontWeight:"800"




                }}>Dodano 07.04.2024</Text>
                <Text  style={{

                    color:"black",
                    fontWeight:900,
                    fontSize:34


                }}>Szacowana Cena</Text>
                <Text  style={{

                    color:"#444444",
                    fontSize:27,
                    fontWeight:900



                }} >{props.faultPrice}</Text>
            </View>
            <Text style={styles.faultDescriptionText}>{props.faultText}</Text>
        </View>

    )
}

const styles=StyleSheet.create({

    mainCardContainer:{
        justifyContent:"center",
        alignItems:"center",
        gap:20,
        marginTop:20,
        width:385
    },
    PriceRow:{
        width:375 
    },
    faultDescriptionText:{

        backgroundColor:"white",
        padding:15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.10,
        shadowRadius: 4.84,
        elevation: 2,
        fontSize:15,
        borderRadius:8,
        color:"#444444",
    },

    faultPrice:{


        backgroundColor:"pink"

    }

})
export default FaultDescriptionCard