// src/screens/Products/UpdateProduct.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import api from "../../../api";

const UpdateProduct = ({ route, navigation }) => {
  const { item } = route.params;
  const [updatedProduct, setUpdatedProduct] = useState({
    name: item.name,
    description: item.description,
    price: item.price.toString(),
    quantity: item.quantity.toString(),
    category: item.category,
  });

  const handleUpdate = async () => {
    try {
      await api.put(`/products/${item._id}`, updatedProduct);
      // Navigate back to the ProductsList screen after updating
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Product</Text>
      <TextInput
        style={styles.input}
        value={updatedProduct.name}
        onChangeText={(text) =>
          setUpdatedProduct((prevProduct) => ({ ...prevProduct, name: text }))
        }
        placeholder="Product Name"
      />
      <TextInput
        style={styles.input}
        value={updatedProduct.description}
        onChangeText={(text) =>
          setUpdatedProduct((prevProduct) => ({
            ...prevProduct,
            description: text,
          }))
        }
        placeholder="Product Description"
      />
      <TextInput
        style={styles.input}
        value={updatedProduct.price}
        onChangeText={(text) =>
          setUpdatedProduct((prevProduct) => ({
            ...prevProduct,
            price: parseFloat(text) || 0,
          }))
        }
        keyboardType="numeric"
        placeholder="Product Price"
      />
      <TextInput
        style={styles.input}
        value={updatedProduct.quantity}
        onChangeText={(text) =>
          setUpdatedProduct((prevProduct) => ({
            ...prevProduct,
            quantity: parseInt(text) || 0,
          }))
        }
        keyboardType="numeric"
        placeholder="Product Quantity"
      />
      <TextInput
        style={styles.input}
        value={updatedProduct.category}
        onChangeText={(text) =>
          setUpdatedProduct((prevProduct) => ({
            ...prevProduct,
            category: text,
          }))
        }
        placeholder="Product Category"
      />
      <Button title="Update" onPress={handleUpdate} />
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
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

export default UpdateProduct;
