// src/screens/Products/ProductDetail.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Product Detail</Text>
      <Text style={styles.detail}>Name: {item.name}</Text>
      <Text style={styles.detail}>Description: {item.description}</Text>
      <Text style={styles.detail}>Price: ${item.price.toFixed(2)}</Text>
      <Text style={styles.detail}>Quantity: {item.quantity}</Text>
      <Text style={styles.detail}>Category: {item.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
});

export default ProductDetail;
