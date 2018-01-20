import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import Autolink from 'react-native-autolink';

import Container from '../components/common/Container';
import { Heading, Paragraph, BoldText } from '../components/common/layout';

class SettingsTabScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollStyle}>
        <Container>
          <Paragraph>
            <Text style={styles.textCenter}>
              Sende Kommentare oder Vorschläge an
            </Text>
            <Autolink
              text="info@i-modich.de"
              linkStyle={{ color: '#3a4c91' }}
              style={styles.textCenter}
            />
          </Paragraph>

          <Heading>Kontakt & Impressum</Heading>
          <Paragraph>
            <Text>I-modich.de Internetdienstleistungen</Text>
            <Text>Sven Harder</Text>
            <Text>Fritz Reuter Straße 11</Text>
            <Text>26465 Langeoog</Text>
          </Paragraph>

          <Paragraph>
            <BoldText>Illustration & Design</BoldText>
            <Text>
              Katharina Thiesen (<Autolink
                text="http://katharina-thiesen.de"
                linkStyle={{ color: '#3a4c91' }}
              />)
            </Text>
          </Paragraph>

          <Paragraph>
            <Text>
              Dies ist keine offizielle App der Kurverwaltung Langeoog. Die
              Fahrplandaten werden von{' '}
              <Autolink
                text="http://fahrplan-langeoog.de"
                linkStyle={{ color: '#3a4c91' }}
              />{' '}
              bezogen.
            </Text>
          </Paragraph>

          <Paragraph>
            <Heading>Changelog</Heading>
            <Text>1.0.0</Text>
            <Text>{'\u2022'} initial release</Text>
          </Paragraph>
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: 'white'
  },
  textCenter: {
    textAlign: 'center'
  }
});

export default SettingsTabScreen;
