const express = require('express');

const app = express();

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/project', (req, res, next) => {
    const projects = [
        {
            id: 'project2',
            title: 'Riding Cities',
            imageUrl: './assets/images/Riding-cities.png',
            description: 'Mission : actualiser la page Internet de Riding Cities de la façon suivante :<br/> - Créer une nouvelle section, “Les membres fondateurs”, avec les noms et photos des créateurs de l’association.<br/> - Modifier la section comprenant le bouton “Télécharger le planning de cours” pour ajouter un titre et deux boutons permettant de télécharger deux plannings de cours différents (un pour les enfants et un pour les adultes).',
            code: 'https://github.com/Epouvaantail/Projet_2',
            site: 'https://epouvaantail.github.io/Projet_2',
            languages: '<li>HTML5</li> <li>CSS3</li>',
        },
        {
            id: 'project3',
            title: 'Booki',
            imageUrl: './assets/images/Booki.png',
            description: 'L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.<br/> Intégrer l&lsquo;interface du site avec du code HTML et CSS. Collaboration avec la CTO et l’UI designer.',
            code: 'https://github.com/Epouvaantail/Projet_3',
            site: 'https://epouvaantail.github.io/Projet_3',
            languages: '<li>HTML5</li> <li>CSS3</li> <li>Responsive</li>',
        },
        {
            id: 'project4',
            title: 'OhMyFood',
            imageUrl: './assets/images/Ohmyfood.png',
            description: 'La mission est de développer un site “mobile first” qui répertorie les menus de restaurants gastronomiques.<br/> En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée.',
            code: 'https://github.com/Epouvaantail/Projet_4',
            site: 'https://epouvaantail.github.io/Projet_4',
            languages: '<li>HTML5</li> <li>CSS3</li> <li>Sass</li> <li>Responsive</li> <li>Animation</li>'
        },
        {
            id: 'project5',
            title: 'Print It',
            imageUrl: './assets/images/Printit.png',
            description: 'Amélioration d&lsquo;un site statique (HTML CSS) d&lsquo;une imprimerie <br/>en y ajoutant un carousel à défilement automatique et manuel.',
            code: 'https://github.com/Epouvaantail/Projet_5',
            site: 'https://epouvaantail.github.io/Projet_5',
            languages:'<li>HTML5</li> <li>CSS3</li> <li>JavaScript</li>',
        },
        {
            id: 'project6',
            title: 'Portfolio Sophie Bluel',
            imageUrl: './assets/images/SophieBluel.png',
            description: 'Création de la page de présentation des travaux de l&lsquo;architecte (à partir du HTML fourni), <br/> la page de connexion de l&lsquo;administrateur du site (le client) (code à créer de zéro); <br/> et création de la modale permettant d&lsquo;uploader de nouveaux médias (code à créer from scratch). <br/>',
            code: 'https://github.com/Epouvaantail/Projet_6',
            site: '',
            languages: '<li>HTML5</li> <li>CSS3</li> <li>JavaScript</li> <li>NodeJS</li>',
        },
        {
            id: 'project8',
            title: 'Kasa',
            imageUrl: './assets/images/Kasa.png',
            description: 'Démarrer le projet React et développer l’ensemble de l’application, les composants React,<br/> les routes React Router, en suivant les maquettes Figma (responsives)<br/> Et ce avec un code de qualité.',
            code: 'https://github.com/Epouvaantail/Projet_8',
            site: '',
            languages: '<li>HTML5</li> <li>CSS3</li> <li>JavaScript</li> <li>JSON</li> <li>REACT</li> <li>JSX</li> <li>ReactRouter</li>',
        },
        {
            id: 'project9',
            title: 'Portfolio Nina Carducci',
            imageUrl: './assets/images/Nina-Carducci.png',
            description: 'Optimisation globale du site tant sur les performances que sur le SEO. <br/> Référencement local en utilisant Schema.org<br/> Metas pour les réseaux sociaux<br/> Accessibilité du site<br/> Référencement local<br/> Rapport d’optimisation détaillé<br/>',
            code: 'https://github.com/Epouvaantail/Projet_9',
            site: 'https://epouvaantail.github.io/Projet_9',
            languages: '<li>HTML5</li> <li>CSS3</li> <li>JavaScript</li> <li>SEO</li> <li>Wave</li> <li>Schema.org</li> <li>Responsive</li> <li>Lighthouse</li>',
        },
        {
            id: 'project10',
            title: '724 Events',
            imageUrl: './assets/images/724-events.png',
            description: 'Le site est fonctionnel, mais quelques bugs entravent le bon usage par les visiteurs.<br/> Recherche et correction des bugs qui impacts l&lsquo;experience utilisateur,<br/> tant sur le visuel que sur le fonctionnel. Qui peuvent également impacter<br/> le référencement du sites web de l&lsquo;entreprise.',
            code: 'https://github.com/Epouvaantail/Projet_10',
            site: '',
            languages: '<li>HTML5</li> <li>CSS3</li> <li>JavaScript</li> <li>Wave</li>',
        },
        {
            id: 'project11',
            title: 'ArgentBank',
            imageUrl: './assets/images/Argent-bank.png',
            description: 'Créer l’application web complète et responsive avec React et<br/> utiliser Redux pour gérer le state de l&lsquo;ensemble de l&lsquo;application.<br/> Fonctionnalités:<br/> - L&lsquo;utilisateur peut visiter la page d&lsquo;accueil.<br/> - Il peut se connecter au système.<br/> - Il peut se déconnecter du système.<br/> - Il ne peut voir les informations relatives à son propre profil uniquement s&lsquo;être connecté avec succès.<br/> - Il ne peut pas modifier son nom ni son prénom, mais il peut modifier son pseudo.<br/>',
            code: 'https://github.com/Epouvaantail/Projet_10',
            site: '',
            languages: '<li>HTML5</li> <li>CSS3</li> <li>JavaScript</li> <li>NodeJS</li> <li>React</li> <li>JSX</li> <li>ReactRouter</li> <li>Redux</li> <li>MongoDB</li> <li>DevTools</li>',
        },
    ]
    res.status(200).json(projects);
});

app.use((req, res) =>{
    console.log('Réponse envoyée avec succcès !');
});

module.exports = app;
