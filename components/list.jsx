import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import ListItem from "./listItem.jsx";
import { useEffect } from "react";

export default ToDoList = ({ list, onClose, status }) => {
  const filteredList = list.filter((item) => {
    if (status === "all") return true;
    return item.status === status;
  });
  useEffect(() => {}, [status]);

  return (
    <View style={{ flex: 1 }}>
      {filteredList.length > 0 && (
        <FlatList
          style={{ width: "100%" }}
          data={filteredList}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
          renderItem={({ item, index }) => (
            <ListItem item={item} index={index} onClose={onClose} />
          )}
        />
      )}
    </View>
  );
};

const s = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
