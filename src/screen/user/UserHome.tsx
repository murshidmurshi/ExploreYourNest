import React from 'react';
import { View, StyleSheet } from 'react-native';
import JitsiMeeting, { JitsiMeetingConfig } from '@jitsi/react-native-sdk'; // Ensure correct import

const App: React.FC = () => {
  // Define the config object with type
  const meetingConfig: JitsiMeetingConfig = {
    hideConferenceTimer: true, // Hides the timer during the meeting
    subject: "React Native SDK with TypeScript", // Meeting subject/title
    customToolbarButtons: [
      {
        icon: "https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png",
        id: "btn1",
        text: "Button One",
      },
      {
        icon: "https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png",
        id: "btn2",
        text: "Button Two",
      },
    ],
  };

  return (
    <View style={styles.container}>
      <JitsiMeeting config={meetingConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
