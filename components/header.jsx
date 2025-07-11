import { StyleSheet } from "react-native";
import { View, Image, TouchableWithoutFeedback } from "react-native";

const Header = ({ onOpenMenu, menuStatus }) => {
  return (
    <View style={s.headerContainer}>
      <Image source={require("../assets/logo.png")} style={s.logo} />

      <TouchableWithoutFeedback onPress={onOpenMenu}>
        {!menuStatus ? (
          <Image
            style={s.openForm}
            source={require("../assets/open-form.png")}
          />
        ) : (
          <Image
            style={s.openForm}
            source={require("../assets/close-form.png")}
          />
        )}
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;

const s = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    maxHeight: 70,
    flexDirection: "row",
    backgroundColor: "#5f43ffd9",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 6,
    width: "100%",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.608)",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
  logo: {
    maxWidth: 140,
    objectFit: "contain",
  },
  openForm: {
    width: 47,
    height: 47,
    marginRight: 10,
    backgroundColor: "#000",
    borderRadius: 50,
  },
});
