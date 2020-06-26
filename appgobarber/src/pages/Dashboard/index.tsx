import React from 'react';
import { View, Button, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="signOut" onPress={() => signOut()}>
        <Text>Sair</Text>
      </Button>
    </View>
  );
};

export default Dashboard;
