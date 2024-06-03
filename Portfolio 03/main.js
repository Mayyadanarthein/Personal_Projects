document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display experience data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const experienceContainer = document.getElementById('experience');
            if (experienceContainer) {
                data.experience.forEach(item => {
                    const div = document.createElement('div');
                    div.classList.add('experience-item');
                    div.innerHTML = `
                        <h3>${item.year} | ${item.title}</h3>
                        <p>${item.description}</p>
                    `;
                    experienceContainer.appendChild(div);
                });
            }
        })
        .catch(error => console.error('Error fetching data:', error));

    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Apply fade out animation
            document.querySelector('main').classList.add('fade-out');

            setTimeout(() => {
                document.querySelector('main').classList.remove('fade-out');
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        });
    });

    // Responsive navigation menu toggle
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;';
    document.querySelector('header').appendChild(navToggle);

    navToggle.addEventListener('click', () => {
        const navMenu = document.querySelector('nav ul');
        navMenu.classList.toggle('show');
    });

    // Apply fade in animation on page load
    document.querySelector('main').classList.add('fade-in');
});
