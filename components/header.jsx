import { StyleSheet} from "react-native";
import { View, Image, TouchableWithoutFeedback } from "react-native";

const Header = ({ onOpenMenu }) => {
  return (
    <View style={s.headerContainer}>
      <Image source={require("../assets/logo.png")} style={s.logo} />

      <TouchableWithoutFeedback  onPress={onOpenMenu}>
        <Image style={s.openForm} source={require("../assets/open-form.png")} />
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
    backgroundColor: "#bababad9",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 6,
    width: "100%",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
  },
  logo: {
    maxWidth: 140,
    objectFit: "contain",
  },
  openForm: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
