# conected
Esta aplicacion es un simple modulo para conocer cuando el dispositivo tiene acceso a internet, independientemente de la via,ya sea 3g, wifi etc...
# Variables de entorno
crear un fichero .bash_androdid con las siguientes lineas
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
source .bash_android
# Linking 
ejecutar react-native link react-native-device-info