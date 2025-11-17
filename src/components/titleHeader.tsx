import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TitleHeader = ({ title }: { title: string, }) => {



    return (
        <Text
            style={[
                styles.title,
                { color: "#000" },
            ]}
        >
            {title}
        </Text>
    );
};

export default TitleHeader;

const styles = StyleSheet.create({
    title: {
        fontSize: wp("6%"),
        fontWeight: "700",
        textAlign: "center",
        marginBottom: hp("5%"),
    },
});



{/* Why We Use Common Components */ }

// 1️⃣ We use common components to avoid writing the same code again and again.
// 2️⃣ They help keep the app design the same on every screen.
// 3️⃣ They make the code easy to manage and update.
// 4️⃣ They keep the screen files clean and simple.
// 5️⃣ They save time and speed up development.