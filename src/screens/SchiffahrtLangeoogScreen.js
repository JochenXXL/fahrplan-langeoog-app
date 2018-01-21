import React from 'react';
import { Text, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Autolink from 'react-native-autolink';

import Container from '../components/common/Container';
import { Paragraph, Heading } from '../components/common/layout';
import Table from '../components/common/Table';
import TableRow from '../components/common/TableRow';
import TableRowItem from '../components/common/TableRowItem';

const image = require('../assets/schiffahrtlangeoog.jpg');
const map = require('../assets/maps_sl.jpg');

const imageHeight = Dimensions.get('window').width / 2.4;

const SchiffartLangeoogScreen = () => (
  <ScrollView style={styles.scrollViewStyle}>
    <Image source={image} style={styles.imageStyle} />
    <Container>
      <Paragraph>
        <Text style={styles.textStyle}>
          Die Schiffahrt Langeoog ist die offizielle Fährverbindung der Gemeinde
          Langeoog. Auf den vier modernen und geräumigen Schiffen Langeoog I bis
          IV gelangen Sie in ca. einer Stunde auf die Insel Langeoog.
        </Text>
      </Paragraph>
      <Text style={styles.textStyle}>
        Der schiffseigene Kiosk versorgt Sie mit Getränken und kleinen Snacks -
        "Eine Bockwurst und ein Jever bitte."
      </Text>
      <Heading>Standort</Heading>
      <Text style={styles.textStyle}>
        Durch das große Hauptgebäude gelangen Sie direkt auf das Schiff.
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
          <TableRowItem right>25,00 €</TableRowItem>
        </TableRow>
        <TableRow>
          <TableRowItem left>Kind (6 - 15 Jahre)</TableRowItem>
          <TableRowItem right>15,20 €</TableRowItem>
        </TableRow>
        <TableRow>
          <TableRowItem left>Hund</TableRowItem>
          <TableRowItem right>24,00 €</TableRowItem>
        </TableRow>
        <TableRow>
          <TableRowItem left>Gepäck max. 20kg</TableRowItem>
          <TableRowItem right>3,50 €</TableRowItem>
        </TableRow>
        <TableRow>
          <TableRowItem left>Kitegepäck</TableRowItem>
          <TableRowItem right>15,00 €</TableRowItem>
        </TableRow>
      </Table>
      <Text style={styles.textStyle}>
        Vollständige Preisliste:{' '}
        <Autolink
          text="https://www.langeoog.de/sites/default/files/2017-12/Preise_2018.pdf"
          truncate={19}
          showAlert
          linkStyle={{ color: '#3a4c91' }}
        />
      </Text>
      <Heading>Kontakt</Heading>
      <Paragraph>
        <Text style={styles.textStyle}>Tourismus-Service Langeoog</Text>
        <Text style={styles.textStyle}>Rathaus Langeoog</Text>
        <Text style={styles.textStyle}>Hauptstraße 28</Text>
        <Text style={styles.textStyle}>26465 Langeoog</Text>
        <Text style={styles.textStyle}>Telefon: 04972 / 690-0</Text>
        <Text style={styles.textStyle}>
          E-Mail:{' '}
          <Autolink text="info@langeoog.de" linkStyle={{ color: '#3a4c91' }} />
        </Text>
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

export default SchiffartLangeoogScreen;
