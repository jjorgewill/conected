# conected
Esta aplicacion es un simple modulo para conocer cuando el dispositivo tiene acceso a internet, independientemente de la via,ya sea 3g, wifi etc...
# Variables de entorno
crear un fichero .bash_androdid con las siguientes lineas

export ANDROID_HOME=$HOME/Library/Android/sdk

export PATH=$PATH:$ANDROID_HOME/tools

export PATH=$PATH:$ANDROID_HOME/tools/bin

export PATH=$PATH:$ANDROID_HOME/platform-tools
luego ejecutar en el terminal el siguiente comando

source .bash_android
# Agregando permisos en el fichero AndroidManifest.xml

    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />


# Linking 
ejecutar react-native link react-native-device-info-2
Tics:  si sale el sieguiente error:"Unable to resolve module `@babel/runtime/helpers/interopRequireDefault" 
ejecutar npm add @babel/runtime
# Referencias
https://facebook.github.io/react-native/docs/netinfo

https://www.npmjs.com/package/react-native-device-info
