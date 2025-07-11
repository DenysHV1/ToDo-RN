import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";

export default FormAdd = ({ onChange, onSubmit, task, onSelect, option }) => {
  return (
    <View style={s.formBlock}>
      <TextInput style={s.addInput} value={task} onChangeText={onChange} />
      <View style={s.optionBox}>
        <TouchableOpacity onPress={() => onSelect("low")}>
          <View style={option !== "low" ? s.option1 : s.optionSelected1}>
            <Text style={s.optionText}>LOW</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSelect("middle")}>
          <View style={option !== "middle" ? s.option2 : s.optionSelected2}>
            <Text style={s.optionText}>MIDDLE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} onPress={() => onSelect("high")}>
          <View style={option !== "high" ? s.option3 : s.optionSelected3}>
            <Text style={s.optionText}>HIGH</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={s.formBtn} onPress={onSubmit}>
        <Text style={s.formBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  addInput: {
    width: "89%",
    height: 50,
    backgroundColor: "#ffffff3f",
    color: "#ffffff",
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: "#8f8f8f",
    borderWidth: 1,
    fontSize: 17
  },
  formBlock: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    padding: "20",
    gap: 15,
    backgroundColor: "#1c2bff62",
    marginBottom: 5,
    borderTopColor: "#000",
    borderTopWidth: 2,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
  formBtn: {
    width: "90%",
    backgroundColor: "#0c00b1",
    paddingVertical: 5,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "#8f8f8f",
    borderWidth: 1,
    shadowColor: "#ffffff",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
    shadowColor: "#ffffff",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  formBtnText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  option1: {
    width: 55,
    height: 40,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#ffffff",
  },
  option2: {
    width: 55,
    height: 40,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#ffffff",
  },
  option3: {
    width: 55,
    height: 40,
    backgroundColor: "#ff442f",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#ffffff",
  },
  optionText: {
    color: "#ffffff",
    textShadowColor: "rgba(0, 0, 0, 0.786)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  optionSelected1: {
    width: 65,
    height: 50,
    backgroundColor: "#00ca0d",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "#fff",
    borderWidth: 1,
    shadowColor: "#ffffff",
  },
  optionSelected2: {
    width: 65,
    height: 50,
    backgroundColor: "#cee400",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "#fff",
    borderWidth: 1,
    shadowColor: "#ffffff",
  },
  optionSelected3: {
    width: 65,
    height: 50,
    backgroundColor: "#ff2f00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "#fff",
    borderWidth: 1,
    shadowColor: "#ffffff",
  },
  optionBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 20,
    gap: 10,
    padding: 10,
    backgroundColor: "#000000",
    alignSelf: "flex-start",
    borderColor: "#8f8f8f",
    borderWidth: 1,
    borderRadius: 10,
    maxHeight: 65,
  },
});
