import React from 'react';
import { StyleSheet, View, Text, Button, Alert, Linking, ScrollView } from 'react-native';

const reportText = `*RELATÓRIO DE SEGURANÇA*
Localização: Mina s11d
Data/Hora: 03/09/2025, 15:41:33
TST Presente: Sim
ATIVIDADES REALIZADAS
Boa Jornada: 0
Inspeções RAC: 0
Inspeções ART/PTS/OMVE: 0
Outras Inspeções: 0
Interdições Críticas: 0
N3 Registrados: 0
Ações Internas: 0
Ações VALE: 0
DESVIO CRÍTICO
Tipo: interdicao
Descrição: sdsad
Local: sdasd
Ação tomada: sds
Status: N/A
Diário de Bordo Técnico das Contratadas
IMPORTANTE: Este relatório contém 2 imagem(ns). Após abrir o WhatsApp, anexe as imagens manualmente.`;

const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(reportText)}`;

export default function App() {
  const shareOnWhatsApp = async () => {
    const supported = await Linking.canOpenURL(whatsappUrl);
    if (supported) {
      await Linking.openURL(whatsappUrl);
    } else {
      Alert.alert(
        'WhatsApp não está instalado',
        'Por favor, instale o WhatsApp para compartilhar o relatório.'
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Relatório de Segurança</Text>
      <Text style={styles.report}>{reportText}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Compartilhar no WhatsApp" onPress={shareOnWhatsApp} />
      </View>
      <Text style={styles.instructions}>
        Após abrir o WhatsApp, anexe as imagens manualmente.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  report: {
    fontSize: 16,
    marginBottom: 30,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  instructions: {
    fontSize: 14,
    color: '#555',
  },
});
