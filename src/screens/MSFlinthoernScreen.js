import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  View
} from 'react-native';
import Autolink from 'react-native-autolink';
import { AdMobBanner } from 'react-native-admob';

import Container from '../components/common/Container';
import { Paragraph, Heading } from '../components/common/layout';
import Table from '../components/common/Table';
import TableRow from '../components/common/TableRow';
import TableRowItem from '../components/common/TableRowItem';

const image = require('../assets/ms-flinthoern.jpg');
const map = require('../assets/maps_ms.jpg');

const imageHeight = Dimensions.get('window').width / 2.4;

const MSFlinthoernScreen = () => (
  <ScrollView style={styles.scrollViewStyle}>
    <Image source={image} style={styles.imageStyle} />
    <Container>
      <Paragraph>
        <Text style={styles.textStyle}>
          Die MS-FLinthörn der Reederei Damwerth fährt mehrmals täglich nach
          Langeoog und zurück. Durch Kapitän Damwerth und das gemütliche flair
          auf der MS-Flinthörn wird die Überfahrt zu einem besonderen Erlebnis.
        </Text>
      </Paragraph>
      <View style={{ alignItems: 'center' }}>
        <AdMobBanner
          adSize="mediumRectangle"
          adUnitID="ca-app-pub-8741291600421705/6216591044"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
        />
      </View>
      <Heading>Standort</Heading>
      <Text style={styles.textStyle}>
        Sie finden die MS-Flinthörn im mittleren Bereichs des Hafens.
      </Text>
    </Container>
    <Image source={map} style={styles.imageStyle} />
    <Container>
      <Heading>Preise</Heading>
      <Text style={styles.textStyle}>
        Die folgenden Preise gelten für Hin- und Rückfahrt.
      </Text>
      <Table>
        <TableRow>
          <TableRowItem left>Erwachsene (ab 16 Jahren)</TableRowItem>
          <TableRowItem right>20,00 €</TableRowItem>
        </TableRow>
        <TableRow>
          <TableRowItem left>Kind (6 - 15 Jahre)</TableRowItem>
          <TableRowItem right>12,00 €</TableRowItem>
        </TableRow>
        <TableRow>
          <TableRowItem left>Hund</TableRowItem>
          <TableRowItem right>12,00 €</TableRowItem>
        </TableRow>
        <TableRow>
          <TableRowItem left>Gepäck max. 25kg</TableRowItem>
          <TableRowItem right>frei</TableRowItem>
        </TableRow>
        <TableRow>
          <TableRowItem left>Sperrgepäck (>160cm / >26kg)</TableRowItem>
          <TableRowItem right>10,00 €</TableRowItem>
        </TableRow>
      </Table>
      <Text style={[styles.textStyle, { paddingBottom: 10 }]}>
        Vollständige Preisliste:{' '}
        <Autolink
          text="http://www.ms-flinthoern.de/langeoog-bensersiel/"
          truncate={19}
          showAlert
          linkStyle={{ color: '#3a4c91' }}
        />
      </Text>
      <View style={{ alignItems: 'center' }}>
        <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-8741291600421705/6216591044"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
        />
      </View>
      <Heading>Kontakt</Heading>
      <Paragraph>
        <Text style={styles.textStyle}>Reederei Damwerth GMBH</Text>
        <Text style={styles.textStyle}>Barkhausenstr. 2</Text>
        <Text style={styles.textStyle}>26465 Langeoog</Text>
        <Text style={styles.textStyle}>Telefon: 04972 / 99070-70</Text>
        <Text style={styles.textStyle}>
          E-Mail:{' '}
          <Autolink
            text="info@ms-flinthoern.de"
            linkStyle={{ color: '#3a4c91' }}
          />
        </Text>
        <Autolink
          text="http://www.ms-flinthoern.de"
          showAlert
          stripPrefix={false}
          linkStyle={{ color: '#3a4c91' }}
        />
      </Paragraph>
    </Container>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollViewStyle: {
    backgroundColor: 'white',
    flex: 1
  },
  imageStyle: {
    width: '100%',
    height: imageHeight
  },
  textStyle: {
    fontSize: 14,
    color: '#4D4D4D'
  }
});

export default MSFlinthoernScreen;
