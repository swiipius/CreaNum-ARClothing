import { StatusBar } from 'expo-status-bar';
import { Camera } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Text, View, Button, SafeAreaView, StyleSheet, Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { COLORS } from '../constants';

const ARKit = () => {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaPermission, setHasMediaPermission] = useState();
    const [photo, setPhoto] = useState();

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted");
            setHasMediaPermission(mediaPermission.status === "granted");
        })();
    }, []);

    if (hasCameraPermission === undefined) {
        return <Text>
            Requesting permission ...
        </Text>
    } else if (!hasCameraPermission) {
        return <Text>
            Permission for camera not granted. Please chage this in settings
        </Text>
    }

    let takePic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        };

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
    };

    if (photo) {
        let sharePic = () => {
            shareAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };

        let savePhoto = () => {
            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };

        return (
            <SafeAreaView style={styles.container}>
                <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
                <Button title="Share" onPress={sharePic} />
                {hasMediaPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
                <Button title="Discard" onPress={() => setPhoto(undefined)} />
            </SafeAreaView>
        );
    }

    return (
        <Camera style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} ref={cameraRef} >
            <View style={{ backgroundColor: COLORS.white, position: "absolute", bottom: 40 }}>
                <Button title="Take Picture" style={{ backgroundColor: COLORS.white, alignSelf: 'flex-end' }} onPress={takePic} />
            </View>
            <StatusBar style="auto" />
        </Camera>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: '#fff',
        alignSelf: 'flex-end'
    },
    preview: {
        alignSelf: 'stretch',
        flex: 1
    }
});

export default ARKit