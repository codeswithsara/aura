import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function LoadingScreen() {
  const [displayed, setDisplayed] = useState('');
  const fullText = 'reading the aura...';
  const index = useRef(0);

  useEffect(() => {
    setDisplayed('');
    index.current = 0;

    const interval = setInterval(() => {
      if (index.current < fullText.length) {
        setDisplayed(fullText.slice(0, index.current + 1));
        index.current += 1;
      } else {
        setTimeout(() => {
          setDisplayed('');
          index.current = 0;
        }, 800);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.loadingScreen}>
      <Text style={styles.loadingText}>{displayed}</Text>
      <Text style={styles.loadingCursor}>|</Text>
    </View>
  );
}

export default function HomeScreen() {
  const [claim, setClaim] = useState('');
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.wordmark}>AURA</Text>
        <Text style={styles.est}>EST. 2025</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.hero}>
        <Text style={styles.eyebrow}>TODAY'S QUESTION</Text>
        <Text style={styles.headline}>what's the{'\n'}truth behind{'\n'}this?</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>your claim</Text>
        <TextInput
          style={styles.input}
          placeholder="paste a caption, url or type anything..."
          placeholderTextColor="#333"
          multiline
          numberOfLines={4}
          value={claim}
          onChangeText={setClaim}
        />
        <TouchableOpacity style={styles.button} onPress={() => setLoading(true)}>
          <Text style={styles.buttonText}>CHECK THE AURA</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>⊕</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    paddingHorizontal: 28,
    paddingTop: 72,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  wordmark: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#f0f0f0',
    letterSpacing: 6,
  },
  est: {
    fontFamily: 'monospace',
    fontSize: 9,
    color: '#666666',
    letterSpacing: 4,
  },
  divider: {
    height: 0.5,
    backgroundColor: '#161616',
    marginVertical: 28,
  },
  hero: {
    marginBottom: 4,
  },
  eyebrow: {
    fontFamily: 'monospace',
    fontSize: 9,
    color: '#666666',
    letterSpacing: 4,
    marginBottom: 14,
  },
  headline: {
    fontSize: 34,
    fontWeight: '200',
    color: '#f0f0f0',
    lineHeight: 44,
    letterSpacing: 0.3,
  },
  inputSection: {
    marginBottom: 4,
  },
  inputLabel: {
    fontFamily: 'monospace',
    fontSize: 9,
    color: '#666666',
    letterSpacing: 4,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.15)',
    borderRadius: 14,
    padding: 16,
    color: '#888',
    fontSize: 13,
    lineHeight: 22,
    textAlignVertical: 'top',
    minHeight: 100,
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 14,
  },
  buttonText: {
    fontFamily: 'monospace',
    fontSize: 10,
    color: '#e0e0e0',
    letterSpacing: 4,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: '#555',
    fontSize: 20,
  },
  loadingScreen: {
    flex: 1,
    backgroundColor: '#080808',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loadingText: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#ffffff',
    letterSpacing: 6,
  },
  loadingCursor: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#ffffff',
    opacity: 0.5,
  },
});