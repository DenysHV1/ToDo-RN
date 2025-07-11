import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/header.jsx";
import { useState, useEffect } from "react";
import FormAdd from "./components/form.jsx";
import ToDoList from "./components/list.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [option, setOption] = useState("");
  const [status, setStatus] = useState("all");
  const [id, setID] = useState(4);
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const saveList = async (list) => {
    try {
      await AsyncStorage.setItem("todoList", JSON.stringify(list));
    } catch (e) {
      console.error("Error saving list:", e);
    }
  };

  const loadList = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("todoList");
      if (jsonValue != null) {
        setList(JSON.parse(jsonValue));
        const maxId = Math.max(
          ...JSON.parse(jsonValue).map((item) => item.id),
          0
        );
        setID(maxId + 1);
      }
    } catch (e) {
      console.error("Error loading list:", e);
    }
  };

  useEffect(() => {
    loadList();
  }, []);

  useEffect(() => {
    saveList(list);
  }, [list]);

  const handleChange = (textInner) => {
    setTask(textInner);
  };

  const handleSelectOption = (option) => {
    setOption(option);
  };

  const handleSubmit = () => {
    if (!task.trim()) return;
    if (!option) return;
    setID((prev) => prev + 1);
    setList((prev) => [...prev, { id: id, task: task, status: option }]);
    setTask("");
  };

  const [menuStatus, setMenuStatus] = useState(false);

  const handleOpenMenu = () => {
    setMenuStatus((prev) => !prev);
  };

  const handleCloseMenu = (idx) => {
    setList((list) => {
      return list.filter((item) => item.id !== idx);
    });
  };

  const handleSortTasks = (status) => {
    setStatus(status);
  };

  return (
    <SafeAreaProvider>
      <ImageBackground source={require("./assets/bg.jpg")} style={s.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <Header onOpenMenu={handleOpenMenu} />
          {menuStatus && (
            <FormAdd
              onChange={handleChange}
              onSubmit={handleSubmit}
              onSelect={handleSelectOption}
              option={option}
              task={task}
            />
          )}
          <View style={s.tasksTypeBox}>
            <Text
              onPress={() => handleSortTasks("all")}
              style={
                status !== "all" ? s.tasksTypeItem : s.tasksTypeItemSelected
              }
            >
              All
            </Text>
            <Text
              onPress={() => handleSortTasks("low")}
              style={
                status !== "low" ? s.tasksTypeItem : s.tasksTypeItemSelected
              }
            >
              Low
            </Text>
            <Text
              onPress={() => handleSortTasks("middle")}
              style={
                status !== "middle" ? s.tasksTypeItem : s.tasksTypeItemSelected
              }
            >
              Middle
            </Text>
            <Text
              onPress={() => handleSortTasks("high")}
              style={
                status !== "high" ? s.tasksTypeItem : s.tasksTypeItemSelected
              }
            >
              High
            </Text>
          </View>
          <ToDoList list={list} onClose={handleCloseMenu} status={status} />
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#00093cff",
  },
  tasksTypeBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#10007a8a",
  },
  tasksTypeItem: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  tasksTypeItemSelected: {
    color: "#0dc900",
    fontSize: 20,
    fontWeight: "600",
  },
});
