import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 6,
        backgroundColor: 'white',
        borderRadius: 5
    },
    content: {
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    headerText: {
        marginLeft: 10,
        fontSize: 15
    },
    categoryImageBackground: {
        padding: 8, 
        borderRadius: 5,
        backgroundColor: "rgba(255, 52, 52, 0.4)"
    },
    categoryImage: {
        width: 30, 
        height: 30 
    },
    subCategoryName: {
        fontSize: 15,

    }
})

export default Styles