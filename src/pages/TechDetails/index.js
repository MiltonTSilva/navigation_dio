import React from 'react';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

// import { Container, Title } from './styles';

export default function TechDetails() {
    const route = useRoute();
    const { tech } = route.params;

    return (
        <WebView
            style={{ flex: 1 }}
            source={{ uri: `http://www.google.com/search?q=${tech.id}` }}
        />
        /*  <Container>
            <Title>{tech.id}</Title>
        </Container> */
    );
}
