import React from "react";
import { View, Text } from "react-native";
import PropsChild from "./PropsChild";

const Greeting: React.FC<{ name: string }> = ({ name }) => {
    return <Text style={{ fontSize: 22 }}>Hello, {name} 👋</Text>;
};

const PropsExample: React.FC = () => {

    const usersData = [
        { id: 1, name: 'Ravi' },
        { id: 2, name: 'Kiran' }
    ];

    return (
        <View style={{ padding: 20 }}>
            <Greeting name="Shyam Reddy" />
            <PropsChild data={usersData} />
        </View>
    );
};

export default PropsExample;

/* ---------------------- Props Explanation (10 lines) ------------------------
1️⃣ Props allow passing data from parent to child components.
2️⃣ They help create reusable, flexible UI components.
3️⃣ Parent sends data like attributes (name="Shyam").
4️⃣ Child receives them using ({ name, data }).
5️⃣ Props are read-only and cannot be modified by child.
6️⃣ Useful for sending text, colors, numbers, arrays, functions.
7️⃣ Avoids writing repeated UI code.
8️⃣ Helps break UI into small reusable components.
9️⃣ Props make components dynamic and customizable.
🔟 Used in almost every React Native component.
------------------------------------------------------------------------------- */
