import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    header:{
        height: hp('10%'),
        width: '100%',
        backgroundColor: '#181818',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        marginBottom:10,
        borderColor: 'rgba(0,0,0,0.5)',
    },

    userHolder:{
        height: hp('10%'),
        // backgroundColor: 'pink',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    searchHolder:{
        height: hp('5%'),
        width: wp('85%'),
        // backgroundColor: '#181818',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },

    searchIcon:{
        height: 20,
        width: 20,
        marginLeft: 15,
        tintColor: 'white',
        opacity: 0.5,
        marginRight: 15
    },
    

    followBtn:{
        height: hp('4.5%'),
        width: wp('25%'),
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 'auto',
        marginRight: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    list:{
        // backgroundColor: '#212529',
        // backgroundColor: 'orange',
        width: '100%',
        marginBottom: 75,
    },

    followingBtn:{
        height: hp('4.5%'),
        width: wp('25%'),
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 'auto',
        marginRight: 20,
        borderRadius: 5,
        backgroundColor: '#0096ff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    followingTxt:{
        color: 'white',
        fontSize: hp('2%'),
        fontWeight: '700'
    },

    userImage:{
        height: 50,
        width: 50,
        borderRadius: 25,
        marginLeft: 25,
        marginRight: 20
    },

    userTxt:{
        color: 'white',
        fontSize: hp('2.25%'),
    },

    input:{
        // backgroundColor: 'orange',
        width: '80%',
        color: 'white',
        fontSize: 16,
    }
})