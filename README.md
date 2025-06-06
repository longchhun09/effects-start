# PlacePicker

A React application that allows users to create and manage their personal collection of places they would like to visit or have visited.

## Features

1. Browse available places with images and descriptions
2. Add places to your personal collection
3. Remove places from your collection
4. Automatic sorting of places by distance from your current location
5. Persistent storage using localStorage
6. Confirmation dialog with countdown timer for place deletion
7. Responsive design with modern UI

## Screenshot

![PlacePicker Application](images/app.png)

## Technologies Used

- React
- CSS3
- HTML5
- Geolocation API
- Local Storage API

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/effects-start.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
  ├── components/
  │   ├── DeleteConfirmation.js
  │   ├── Modal.js
  │   ├── Places.js
  │   └── ProgressBar.jsx
  ├── assets/
  │   └── logo.png
  ├── App.js
  ├── data.js
  ├── index.js
  └── loc.js
```

## Features in Detail

### Place Management
- Add places to your collection
- Remove places with confirmation dialog
- Automatic sorting by distance
- Persistent storage

### UI Components
- Modal dialog for confirmations
- Progress bar with countdown timer
- Responsive grid layout
- Beautiful animations and transitions

### Location Features
- Automatic geolocation detection
- Distance-based sorting
- Location-based place recommendations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
