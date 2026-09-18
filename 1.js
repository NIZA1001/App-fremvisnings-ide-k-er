import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.greeting}>Godmorgen 👋</Text>
        <Text style={styles.farmName}>Søndergård</Text>
        <Text>peter</Text>
      </View>
      <TouchableOpacity style={styles.checkInButton}>
        <Text style={styles.checkInText}>CHECK IND</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Dagens opgaver</Text>

      <View style={styles.taskCard}>
        <View>
          <Text style={styles.taskTitle}>Morgenfodring</Text>
          <Text style={styles.taskTime}>06:30 – 07:00</Text>
        </View>
        <Text style={styles.taskStatus}>○</Text>
      </View>

      <View style={styles.taskCard}>
        <View>
          <Text style={styles.taskTitle}>Kontroller kalve</Text>
          <Text style={styles.taskTime}>07:15 – 08:00</Text>
        </View>
        <Text style={styles.taskStatus}>✓</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F6F7F8",
  },

  box: {
    paddingVertical: 1,
    borderRadius: 1,
    backgroundColor: "blue"
  },

  greeting: {
    fontSize: 18,
    marginTop: 10,
    color: "#555",
    backgroundColor: "green"
  },

  farmName: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
    backgroundColor: "red"
  },

  checkInButton: {
    backgroundColor: "#2F6B4F",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 35,
  },

  checkInText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 14,
  },

  taskCard: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  taskTitle: {
    fontSize: 17,
    fontWeight: "600",
  },

  taskTime: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },

  taskStatus: {
    fontSize: 26,
  },
});