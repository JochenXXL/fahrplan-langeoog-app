import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import Autolink from 'react-native-autolink';

import Container from '../components/common/Container';
import { Heading, Paragraph, BoldText } from '../components/common/layout';
import BottomAdd from '../components/BottomAdd';

class SettingsTabScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView style={styles.scrollStyle}>
            <Container>
              <Paragraph>
                <Text style={styles.textCenter}>
                  Senden Sie Kommentare oder Vorschläge an
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
                <Autolink
                  text="http://i-modich.de"
                  stripPrefix={false}
                  linkStyle={{ color: '#3a4c91' }}
                />
                <Autolink
                  text="http://fahrplan-langeoog.de"
                  stripPrefix={false}
                  linkStyle={{ color: '#3a4c91' }}
                />
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
                <BoldText>Foto der MS-Flinthörn:</BoldText>
                <Text>
                  Mit Genehmigung von{' '}
                  <Autolink
                    text="http://www.ms-flinthoern.de"
                    linkStyle={{ color: '#3a4c91' }}
                  />
                </Text>
              </Paragraph>

              <Paragraph>
                <BoldText>Karten</BoldText>
                <Text>
                  Daten von{' '}
                  <Autolink
                    text="http://www.openstreetmap.org/"
                    linkStyle={{ color: '#3a4c91' }}
                  />{' '}
                  - Veröffentlicht unter ODbL:{' '}
                  <Autolink
                    text="http://opendatacommons.org/licenses/odbl/"
                    truncate={22}
                    linkStyle={{ color: '#3a4c91' }}
                  />
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
        </View>
        <BottomAdd />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: 'white',
    flex: 1
  },
  textCenter: {
    textAlign: 'center'
  }
});

export default SettingsTabScreen;
