// src/screens/Products/ProductsList.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../../api";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await api.delete(`/products/${productId}`);
      // Update the products list after deletion
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductPress = (item) => {
    // Navigate to the ProductDetail screen and pass the selected product as a parameter
    navigation.navigate("ProductDetail", { item });
  };

  const handleUpdatePress = (item) => {
    // Navigate to the UpdateProduct screen and pass the selected product as a parameter
    navigation.navigate("UpdateProduct", { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) =>
          item.id ? item.id.toString() : Math.random().toString()
        }
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Delete"
                onPress={() => handleDelete(item._id)}
                color="#e74c3c"
              />
              <Button
                title="Details"
                onPress={() => handleProductPress(item)}
                color="#3498db"
              />
              <Button
                title="Update"
                onPress={() => handleUpdatePress(item)}
                color="#2ecc71"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  productItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  productName: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProductsList;
