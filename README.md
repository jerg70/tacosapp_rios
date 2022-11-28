# Tacos Regios App

![](https://images.getbento.com/accounts/f04339f52aa8b35469c79400055be66a/media/images/86082la_taqueria_Logo.png)

## Descripción
Tacos Regios es una [webapp](https://en.wikipedia.org/wiki/Web_application "webapp") desarrollada para el curso de React JS de [CoderHouse](https://www.coderhouse.com "CoderHouse") (*comisión 45060*), la cual emula un e-commerce de tacos a domicilio, utilizando la librería front-end de Javascript: **ReactJS** como principal herramienta de desarrollo web.

Para este desarrollo, se utilizaron diversas herramientas, lenguajes de programación, librerías y tecnologías los cuales se describen a continuación.

## Herramientas y Tecnologías de Desarrollo
**- HTML:**
Lenguaje de Marcas de Hipertexto utilizado para montar la librería de React y dar la configuración básica a la webapp a través del archivo público [index.html](https://github.com/jerg70/tacosapp_rios/blob/ProyectoFinal/public/index.html "index.html").

[...más información.](https://www.w3schools.com/html/default.asp "...más información.")

**- CSS: **
Hojas de estilo en cascada que permite dar formato al HTML y a los elementos visuales del proyecto, localizado dentro del archivo [styles.css](https://github.com/jerg70/tacosapp_rios/blob/ProyectoFinal/src/styles/style.css "styles.css").

[...más información](https://www.w3schools.com/css/default.asp "...más información")

**- Bootstrap:**
[Framework](https://es.wikipedia.org/wiki/Framework "Framework") de CSS utilizado para hacer responsiva la webapp de una manera más eficiente, a través de ella se implementó el "menú hamburguesa", se estilizó textos y media, y se estructuraron los elementos dinámicamente para cualquier dispositivo en donde se corra el proyecto (escritorio, móvil o tablet).

[...más información.](https://getbootstrap.com/ "...más información.")

**- Javascript:**
Lenguaje de programación multiparadigma el cuál es la base de la librería ReactJS, el cuál fue utilizado para resolver mediante lógica diversas decisiones para mostrar u ocultar contenido, realizar operaciones aritméticas, conectarse a la base de datos, entre otras cosas.

[...más información.](https://www.w3schools.com/js/default.asp "...más información.")

**- npm:**
Manejador de paquetes de Node.js, alimentado por Javascript, el cuál permite instalar diversas dependencias y/o librerías de una manera eficiente. Entre las dependencias instaladas a través de este, se encuentran React, React-Router-Dom, React-Spinners, Firebase, entre otros.

[...más información.](https://www.npmjs.com/about "...más información.")

**- GitHub:**
Portal que aloja en la nube el código de cualquier desarrollador o proyecto en "archivos" llamados repositorios. Utiliza un controlador de versiones que monitorea los cambios en el código que el usuario realiza. Está siendo usado ahora mismo para mostrarte esta información y alojar el código fuente de [este proyecto](https://github.com/jerg70/tacosapp_rios/tree/ProyectoFinal "este proyecto"), así como los registros de cambios a lo largo de la vida de este repositorio.

[...más información.](https://github.com/about "...más información.")

**- React:** 
Librería fundamental para el desarrollo de este proyecto, la cúal facilitó la implementación de código javascript y html, permitiendo generar una app web con alta recursividad y escalabilidad gracias a sus diversos tipos de "componentes" y diversas librerias como useState (permite persistir datos), useEffect (gestión de renderización de componentes), context (facilita la comunicación enter componentes), entre otros.

[...más información.](https://es.reactjs.org/ "...más información.")

**- React-Router-Dom:**
Librería de React que permite navegar entre rutas y que fue utilizada para acceder a los diversos elementos del menú de la web app, así como visualizar resultados por categorías, ver el carrito de compra de la aplicación y enviar el pedido final a la base de datos.

[...más información.](https://www.npmjs.com/package/react-router-dom "...más información")

**- React-Spinners**
Librería que se instaló a través de NPM y permitió dar un estilo agradable y profesional a técnicas de rendering, la cuál permitió mostrar un "pacman" en movimiento como reemplazo a un simple mensaje de "cargando" mientras se accedía a contenido de la base de datos o se cargaban resultados.

[...más información.](https://www.davidhu.io/react-spinners/ "...más información.")

**- Firebase**
Base de datos remota que permitió alojar cada tipo de platillo que mi web app ofrece a través de su servicio "FireStore", el cúal es una base de datos no lineal en tiempo real y que también permitió alojar los pedidos de los usuarios de una manera dinámica.

[...más información.](https://firebase.google.com/docs/firestore "...más información.")

## Capturas de Pantalla del proyecto

###### INICIO
[![Inicio](https://i.imgur.com/fcAkTB2.png "Inicio")](https://i.imgur.com/fcAkTB2.png "Inicio")

###### CATEGORIA
[![Categoría](https://i.imgur.com/YIy2Alu.png "Categoría")](https://i.imgur.com/YIy2Alu.png "Categoría")

###### DETALLE Y AGREGAR AL CARRITO
[![Detalle y Agregar al Carrito](https://i.imgur.com/E2r8sGo.png "Detalle y Agregar al Carrito")](https://i.imgur.com/E2r8sGo.png "Detalle y Agregar al Carrito")

###### VISUALIZACIÓN DEL CARRITO
[![Visualización del carrito](https://i.imgur.com/5LnIUPq.png "VISUALIZACIÓN DEL CARRITO")](https://i.imgur.com/5LnIUPq.png "VISUALIZACIÓN DEL CARRITO")

###### ENVIAR PEDIDO
[![Enviar Pedido](https://i.imgur.com/abGYS8k.png "Enviar Pedido")](https://i.imgur.com/abGYS8k.png "Enviar Pedido")

###### CONFIRMACIÓN DE PEDIDO
[![Confirmación de Pedido](https://i.imgur.com/8jYFXpF.png "Confirmación de Pedido")](https://i.imgur.com/8jYFXpF.png "Confirmación de Pedido")


## Instalación del Proyecto
#### 1.- Descargar el repositorio como ZIP y descomprimir el archivo.

##### Descargar ZIP
[![Descargar ZIP](https://i.imgur.com/Btrjte1.png "Descargar ZIP")](https://github.com/jerg70/tacosapp_rios/archive/refs/heads/ProyectoFinal.zip "Descargar ZIP")


#### 2.- Instalar las dependencias utilizando NPM (previamente instalado)

##### Crear nueva app React
```
npx create-react-app “tacosapp” (sin comillas)
```

##### Instalar react-router-dom
```
npm install react-router-dom
```

##### Instalar react-spinners
```
npm i react-spinners
```
##### Instalar firebase
```
npm install firebase
```

#### 3.- Acomodar dentro de tu carpeta de "tacosapp", los archivos descomprimidos del zip de la siguiente manera sin copiar los JSON:

[![Gestión de Archivos](https://i.imgur.com/xu2lPwr.png "Gestión de Archivos")](https://i.imgur.com/xu2lPwr.png "Gestión de Archivos")

#### 4.- Inicializar la app con el comando NPM react start y probar la aplicación en tu navegador de preferencia.

```
npm start
```

------------

------------


------------




## TAREAS REALIZADAS SOLICITADAS EN [RUBRICA DE EVALUACIÓN DEL PROYECTO](https://drive.google.com/drive/folders/1Mq4myr0mTbKhPz2TVWfXy3HXtNPyDcqp?usp=share_link "RUBRICA DE EVALUACIÓN DEL PROYECTO")

- [x] Incluye todos los siguientes componentes: 
	1. navbar
	2. carwidget
	3. itemlistcontainer
	4. itemlist
	5. itemdetailcontainer
	6. itemdetail
	7. checkout
- [x] Inicio, Flow, Firebase
- [x] Cart Accesible en todo momento
- [x] Checkout completo en form y base de datos (post).
- [x] Navegabilidad con react-router-dom
- [x] Order ID === ID del objeto de Firebase

## ¿Dudas?
jerg70@gmail.com


### FIN