import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function ListItem({ item, index, onClose }) {
  const whatStatus = (status) => {
    if (status === "low") {
      return s.taskItem1;
    } else if (status === "middle") {
      return s.taskItem2;
    } else {
      return s.taskItem3;
    }
  };

  return (
    <View style={whatStatus(item.status)}>
      <View style={s.taskItemTextBox}>
        <Text style={s.listItemText1}>{index + 1}</Text>
        <Text style={s.listItemText}>{item.task}</Text>
      </View>
      <TouchableOpacity style={s.closeBtnBox} onPress={() => onClose(item.id)}>
        <Image
          style={s.closeBtn}
          source={require("../assets/close-task.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  taskItem1: {
    padding: 10,
    backgroundColor: "#0c562178",
    borderWidth: 1,
    borderColor: "#00ff48",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 2,
    marginTop: 4,
  },
  taskItem2: {
    padding: 10,
    backgroundColor: "#90921756",
    borderWidth: 1,
    borderColor: "#fbff00",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 2,
    marginTop: 4,
  },
  taskItem3: {
    padding: 10,
    backgroundColor: "#6d010143",
    borderWidth: 1,
    borderColor: "#e00000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 2,
    marginTop: 4,
  },
  taskItemTextBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  listItemText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    maxWidth: 290,
    borderLeftColor: "#ffffff",
    borderLeftWidth: 1,
    borderRightColor: "#ffffff",
    borderRightWidth: 1,
    paddingLeft: 8,
    backgroundColor: "#000",
    borderRadius: 5,
    paddingRight: 5,
    paddingBottom: 2,
  },
  listItemText1: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    maxWidth: 290,
    backgroundColor: "#000",

    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: "#fff",
    borderWidth: 2,
  },
  closeBtn: {
    width: 30,
    height: 30,
  },
  closeBtnBox: {
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
