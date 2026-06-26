import {
    Modal,
    View,
    Text,
    Pressable,
    StyleSheet
} from "react-native";


type Props = {
    visible: boolean;
    task: any;
    close: () => void;
};


export default function TaskModal({
    visible,
    task,
    close
}: Props) {

    if(!task) return null;


    return (

        <Modal
            visible={visible}
            transparent
            animationType="slide"
        >

            <View style={styles.overlay}>

                <View style={styles.modal}>

                    <Text style={styles.title}>
                        {task.title}
                    </Text>


                    <Text style={styles.text}>
                        {task.description}
                    </Text>


                    <Text>
                        Status:
                        {task.completed 
                            ? " Concluída"
                            : " Pendente"
                        }
                    </Text>


                    <Pressable
                        style={styles.button}
                        onPress={close}
                    >
                        <Text style={styles.buttonText}>
                            Fechar
                        </Text>

                    </Pressable>

                </View>

            </View>

        </Modal>

    );
}


const styles = StyleSheet.create({

    overlay: {
        flex:1,

        backgroundColor:"rgba(0,0,0,0.5)",

        justifyContent:"center",
        alignItems:"center",
    },


    modal:{
        width:"85%",

        backgroundColor:"#fff",

        borderRadius:20,

        padding:20,
    },


    title:{
        fontSize:22,
        fontWeight:"700",
        marginBottom:15,
    },


    text:{
        color:"#555",
        marginBottom:15,
    },


    button:{
        marginTop:20,

        backgroundColor:"#EF4444",

        padding:14,

        borderRadius:12,

        alignItems:"center",
    },


    buttonText:{
        color:"#fff",
        fontWeight:"600",
    }

});