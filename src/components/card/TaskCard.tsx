import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
    CheckCircle,
    Circle
} from "lucide-react-native";
import { Task } from '../../types/Task';

type Props = {
    task: Task;
    onPress: () => void;
    onClick: () => void;
    onToggle: (id: string) => void;
}


export default function TaskCard({
    task,
    onPress,
    onClick,
    onToggle
}: Props) {
    return (
        <View style={styles.card}>

            <View style={styles.press}>
            <Pressable 
            style={styles.check}
            onPress={()=> onToggle(task.id)}
            >
                {
                    task.completed ? (
                        <CheckCircle
                            size={30}
                            color="#22C55E"
                        />
                    ) : (
                        <Circle
                            size={30}
                            color="#9CA3AF"
                        />
                    )
                }
            </Pressable>

            <Pressable
                
                onPress={onPress}
            >


                <View>
                    <Text style={styles.title}>
                        {task.title}
                    </Text>

                    <Text
                        numberOfLines={1}
                        style={styles.description}
                    >
                        {task.description}
                    </Text>
                </View>





            </Pressable>
            </View>
            <TouchableOpacity
                style={styles.lixeira}
                onPress={onClick}>
                <Ionicons
                    name="trash-outline"
                    size={24}
                    color="#EF4444"
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: "#fff",
        width: '90%',
        padding: 18,
        borderRadius: 18,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 12,

        elevation: 3,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
    },

    description: {
        marginTop: 8,
        color: "#6B7280",
    },
    lixeira: {
        justifyContent: 'center'
    },
    press: {
        flexDirection: 'row',
        gap: 15,
    },
    check: {
        justifyContent: 'center'
    }

});