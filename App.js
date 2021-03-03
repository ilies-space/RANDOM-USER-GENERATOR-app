import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';

export default function App() {
  const [user, setUser] = useState('');
  const [picture, setpicture] = useState();

  function getUser() {
    fetch('https://randomuser.me/api/').then((Response) => {
      Response.json().then((res) => {
        const fullName =
          res.results[0].name.first + ' ' + res.results[0].name.last;
        setUser(fullName.toString());
        setpicture(res.results[0].picture.large);
      });
    });

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const img = useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={{ alignItems: 'center',padding:10 }}>
      <Image
        source={{ uri: picture }}
        style={{
          height: 250,
          width: 250,
          borderRadius: 250 / 2,
        }}
      />
      <Text style={{ fontWeight: 'bold', fontSize: 25 ,marginVertical:10}}>{user} </Text>
      <Button
        title={'get user'}
        onPress={() => {
          getUser();
        }}
      />
    </View>
  );
}
