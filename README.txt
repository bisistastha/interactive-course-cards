Interactive Course Cards Animation

A modern, interactive UI component featuring animated course cards with hover effects and smooth transitions. The cards expand and collapse with a 90-degree rotation animation while transforming vertical text to horizontal.

Live Demo
[View Live Demo](https://bisistastha.github.io/interactive-course-cards)

Features

- Dynamic card expansion with 90-degree rotation
- Smooth transitions between states
- Hover effects with animated "Click me!" indicator
- Responsive single-line card layout
- Custom icons and typography
- Color transitions from pink to red

Tech Stack

- HTML5
- CSS3 (Flexbox, Transforms, Transitions)
- JavaScript (ES6+)
- Google Fonts

Quick Start

1. Clone the repository

bash
git clone https://github.com/bisistastha/interactive-course-cards.git

2. Navigate to project directory

bash
cd interactive-course-cards

3. Open index.html in your preferred browser

Project Structure
interactive-course-cards/
├── index.html
├── styles.css
├── script.js
└── README.md

 Implementation Details

 HTML
- Semantic markup for card structure
- Proper accessibility attributes
- SVG icons integration

CSS
- Custom properties for color themes (--primary-red: #C73D4D, --bg-pink: #FFF1F1)
- Transform and transition animations
- Flexbox for responsive layout
- Pseudo-elements for hover effects

JavaScript
- Card state management
- Click event handling
- Dynamic content updates
- Smooth animation control

Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

 Notes & Assumptions

- Cards maintain a single-line layout at all times
- Only one card can be expanded at a time
- First card starts in expanded state
- Hover effects only show on collapsed cards
- All transitions are 0.5s duration

 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Author

Bisista Shrestha
- GitHub: [@bisistastha](https://github.com/bisistastha)
- LinkedIn: [Bisista Shrestha](https://linkedin.com/in/bisista-shrestha-5b9181181)

##  Acknowledgments

- Design inspiration from modern UI/UX principles
- Built with vanilla JavaScript and CSS
