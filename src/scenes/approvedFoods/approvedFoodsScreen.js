import React from 'react'
import { View, SafeAreaView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Accordion from 'react-native-collapsible/Accordion';
import { useState, useEffect } from 'react';

import styles from "../../styles/approvedFoodScreen.style"
import { ScrollView } from 'react-native-gesture-handler';
const foods = require("../../assets/food_categories.json")


const approvedFoodListScene = (props) => {
    let [foodList, setFoodList] = useState([])

    useEffect(() => {
        // fetch("https://api.jsonbin.io/b/5fce7e1e2946d2126fff85f0")
        // .then(response => response.json())
        // .then(data => setFoodList(data.categories))
        // .catch(error => console.error(error))

        //console.log(foods.categories)
        setFoodList(foods.categories)
    })

    return (
        <SafeAreaView style={{flex: 1, paddingHorizontal: 20, backgroundColor: "#E9E9F0"}}>
            <TouchableOpacity style={{marginTop: 20}} onPress={() => {
                props.navigation.pop()
            }}>
                <Image style={{width: 30, height: 30}} source={require('../../assets/images/close_icon.png')}/>
            </TouchableOpacity>
            <View style={{paddingVertical: 20}}>
                <Text style={{fontSize: 28, fontWeight: "bold"}}>{"Approved Food List"}</Text>
            </View>

            <FoodList 
                categories={foodList}/>

        </SafeAreaView>
    )
} 

const FoodList = (dataSource) => {
    let [activeSections, setActiveSections] = useState([])
    
    function renderHeader(section) {
        return (
            <View style={styles.header}>
                <View style={[styles.categoryImageBackground, {backgroundColor: section.category.colorCode}]}>
                    <Image style={styles.categoryImage} source={require('../../assets/images/category_icon.png')}/>
                </View>
                <Text style={[styles.headerText, { color: section.category.colorCode}]}>{section.category.categoryName}</Text>
            </View>
        );
    };
    
    function renderContent(section) {
        let subCategories = section.category.subcategories

        return (
            <View style={styles.content}>
                {renderSubCategories(subCategories, section.category.colorCode)}
            </View>
        );
    };

    function renderSubCategories(subCategories, colorCode) {
        return subCategories.map(subCategory => {
            return (
                <View>
                    {subCategory.subCategoryname.length > 0 &&
                    <View style={{padding: 10}}>
                        <Text style={{color: colorCode}}>{subCategory.subCategoryname.toUpperCase()}</Text>
                    </View>
                    } 
                    {renderItems(subCategory.items)}
                </View>
            )
        })
    }

    function renderItems(items) {
        return items.map(item => {
            return (
                <View style={{padding: 10, borderBottomColor: "lightGray", borderBottomWidth: 1}}>
                    <Text>{item}</Text>
                </View>
            )
        })
    }
    
    function updateSections(sections) {
        setActiveSections(sections);
    };

    return (
        <ScrollView>
        <Accordion 
            sections={dataSource.categories}
            activeSections={activeSections}
            renderHeader={renderHeader}
            renderContent={renderContent}
            renderFooter={() => <View style={{ height: 20}} />}
            onChange={updateSections}
        />
        </ScrollView>
    )
}

export default approvedFoodListScene